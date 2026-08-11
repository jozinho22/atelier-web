/**
 * Le modèle de facture, en classeur Excel.
 *
 * Produit par `npm run generer-documents` en même temps que les PDF, dans
 * `documents/modele-facture.xlsx`.
 *
 * ── Pourquoi un tableur, et non un PDF de plus ────────────────────────────
 *
 * Les huit autres documents sont des textes : ils se lisent, se signent, ne se
 * calculent pas. Une facture, si — et ce sont justement les calculs qu'on rate
 * à la main, un soir de fin de mois. Les totaux, la déduction de l'acompte et
 * l'échéance à trente jours sont donc des formules, pas des nombres recopiés.
 *
 * ── Ce que le tableur ne fait PAS ─────────────────────────────────────────
 *
 * Il ne numérote pas tout seul. L'administration exige une séquence continue,
 * sans trou ni doublon, et un fichier dupliqué pour chaque client ne peut pas
 * la garantir : c'est le rôle de la feuille « Registre », qui tient la liste et
 * calcule le numéro suivant.
 *
 * ⚠️ Une facture émise ne se supprime pas et ne se corrige pas : elle
 * s'annule par un avoir. Le trou dans la numérotation est ce que
 * l'administration regarde en premier.
 *
 * ── Une seule source pour les clauses ─────────────────────────────────────
 *
 * Les mentions de paiement ne sont pas rédigées ici : elles reprennent mot pour
 * mot l'article 5 des CGV. Une facture qui annoncerait des pénalités
 * différentes de celles du contrat n'appliquerait ni les unes ni les autres.
 * `verifierIdentite()` fait échouer la génération si l'identité imprimée sur la
 * facture cesse de correspondre aux mentions légales du site.
 */
import ExcelJS from 'exceljs';

import { CONTACT_PUBLIC, telephoneAffiche } from '../src/data/contact.ts';
import {
  PACKS,
  PACK_COURRIEL,
  HEBERGEMENT,
  ACOMPTE_POURCENT,
  prixPack,
  prixHebergement,
} from '../src/data/tarifs.ts';
import { urlPublique } from '../src/data/site.ts';
import { legal } from '../src/i18n/legal.ts';

/**
 * Identité imprimée en tête de facture.
 *
 * Ces valeurs vivent aussi dans les mentions légales, sous une forme faite pour
 * être lue par un navigateur — des segments imbriqués dont on ne peut pas
 * extraire un SIRET sans deviner la structure. Plutôt que de les extraire à
 * l'aveugle, on les déclare, et `verifierIdentite()` refuse de générer le
 * classeur si les deux se mettent à diverger.
 *
 * La mention « EI » n'est pas décorative : depuis la loi du 14 février 2022
 * (article L526-22 du code de commerce), le nom de l'entrepreneur individuel
 * doit en être suivi ou précédé sur tous ses documents professionnels.
 */
const IDENTITE = {
  enseigne: 'STUDIO CADUCÉE',
  exploitant: 'Josselin DOUINEAU — Entrepreneur individuel (EI)',
  adresse: '9bis Kerscoul, 22540 LOUARGAT',
  siret: '98108366000028',
  franchise: 'TVA non applicable, article 293 B du code général des impôts',
};

/** Le classeur ment-il sur qui émet la facture ? */
function verifierIdentite() {
  const mentions = JSON.stringify(legal.fr);
  const attendus = [IDENTITE.siret, IDENTITE.adresse, CONTACT_PUBLIC.email];
  const absents = attendus.filter((v) => !mentions.includes(v));
  if (absents.length) {
    throw new Error(
      `identité divergente entre la facture et src/i18n/legal.ts : ${absents.join(', ')}\n` +
        '  → aligner IDENTITE dans scripts/facture.mjs sur les mentions légales.'
    );
  }
}

const ENCRE = 'FF12131F';
const ACCENT = 'FF403FB8';
const GRIS = 'FF6E6F80';
const TRAIT = 'FFD9D9E3';
const ENTETE = 'FFE6E6FB';

/**
 * ⚠️ Aucune formule ne porte de valeur en cache.
 *
 * exceljs sait en écrire une — `{ formula, result }` —, et c'est un piège : un
 * classeur ouvert avec LibreOffice affiche la valeur en cache SANS recalculer,
 * même quand `fullCalcOnLoad` le lui demande. Les totaux mis en cache à 0 sont
 * restés à 0 sur une facture pourtant remplie, en n'affichant aucune erreur.
 *
 * Sans cache, les deux tableurs sont obligés de calculer. Mesuré : 1 690 € +
 * 150 € donnent bien 1 840 €, et 1 333 € net après un acompte de 507 €.
 */
const EURO = '#,##0.00\\ "€"';
const JOUR = 'dd/mm/yyyy';

/** Un trait fin sous une case à remplir : la case se voit sans se colorer. */
const ligneAremplir = { bottom: { style: 'thin', color: { argb: TRAIT } } };

/**
 * Les mentions que la facture doit porter, et la raison de chacune.
 *
 * L'ordre suit celui de l'article 5 des CGV. Les deux premières sont
 * obligatoires quel que soit le client ; les deux suivantes ne s'imposent
 * qu'entre professionnels, mais les laisser sur une facture adressée à un
 * particulier ne coûte rien — les retirer au cas par cas, si.
 */
const MENTIONS = [
  IDENTITE.franchise + '.',
  'Paiement par virement bancaire à trente (30) jours date de facture, ou par lien de paiement Stripe (article 5 des conditions générales de vente).',
  'Conformément aux articles L441-10 et D441-5 du code de commerce, tout retard de paiement entraîne de plein droit, sans rappel préalable, des pénalités égales à trois fois le taux d’intérêt légal, ainsi qu’une indemnité forfaitaire de 40 € pour frais de recouvrement.',
  'Aucun escompte n’est accordé pour paiement anticipé.',
];

/** Une ligne « intitulé | valeur à remplir ». */
function champ(feuille, rang, intitule, { format, note, formule, fusion = 'B:D' } = {}) {
  const l = feuille.getRow(rang);
  l.getCell('A').value = intitule;
  l.getCell('A').font = { name: 'Calibri', size: 10, color: { argb: GRIS } };
  l.getCell('A').alignment = { vertical: 'middle' };

  const [de, a] = fusion.split(':');
  if (de !== a) feuille.mergeCells(`${de}${rang}:${a}${rang}`);
  const cellule = l.getCell(de);
  if (formule) cellule.value = formule;
  cellule.font = { name: 'Calibri', size: 11, bold: true, color: { argb: ENCRE } };
  cellule.alignment = { vertical: 'middle' };
  cellule.border = ligneAremplir;
  if (format) cellule.numFmt = format;
  if (note) cellule.note = note;
  l.height = 20;
  return cellule;
}

/** Un intitulé de section, en petites capitales accentuées. */
function section(feuille, rang, titre) {
  const c = feuille.getCell(`A${rang}`);
  c.value = titre;
  c.font = { name: 'Calibri', size: 9, bold: true, color: { argb: ACCENT } };
  feuille.getRow(rang).height = 18;
}

/** Une ligne de texte courant, fusionnée sur toute la largeur. */
function paragraphe(feuille, rang, texte, { taille = 8, couleur = GRIS, hauteur } = {}) {
  feuille.mergeCells(`A${rang}:D${rang}`);
  const c = feuille.getCell(`A${rang}`);
  c.value = texte;
  c.font = { name: 'Calibri', size: taille, color: { argb: couleur } };
  c.alignment = { vertical: 'top', wrapText: true };
  if (hauteur) feuille.getRow(rang).height = hauteur;
  return c;
}

/**
 * Où tombe chaque bloc de la facture.
 *
 * Tout se déduit de la table des prestations. Écrire ces rangs en clair, comme
 * je l'avais fait d'abord, revient à devoir les recompter à chaque ligne
 * ajoutée : la table mordait sur le total, la somme se comprenait elle-même, et
 * le classeur affichait 0,00 € sans rien signaler. C'est ce que
 * `verifierFormules()` refuse désormais de laisser passer.
 */
const TABLE = { entete: 20, lignes: 8 };
const PREMIERE = TABLE.entete + 1;
const DERNIERE = TABLE.entete + TABLE.lignes;

const RANG = {
  totalHT: DERNIERE + 2,
  tva: DERNIERE + 3,
  totalTTC: DERNIERE + 4,
  acompte: DERNIERE + 5,
  net: DERNIERE + 6,
  iban: DERNIERE + 8,
  stripe: DERNIERE + 9,
  mentions: DERNIERE + 11,
};

/**
 * Une formule ne doit pas figurer dans la plage qu'elle agrège.
 *
 * Excel signale la référence circulaire par une alerte ; LibreOffice se
 * contente d'un zéro. Sur une facture, un zéro silencieux au total est la pire
 * des deux issues — on l'envoie sans le voir.
 */
const rang = (lettres) =>
  [...lettres].reduce((n, l) => n * 26 + (l.charCodeAt(0) - 64), 0);

function verifierFormules(feuille) {
  feuille.eachRow((ligne, r) => {
    ligne.eachCell((cellule, c) => {
      const formule = cellule.value?.formula;
      if (!formule) return;
      for (const [, c1, r1, c2, r2] of formule.matchAll(/([A-Z]+)(\d+):([A-Z]+)(\d+)/g)) {
        const dansColonnes = rang(c1) <= c && c <= rang(c2);
        const dansRangs = Number(r1) <= r && r <= Number(r2);
        if (dansColonnes && dansRangs) {
          throw new Error(
            `référence circulaire en ${feuille.getColumn(c).letter}${r} de la feuille ` +
              `« ${feuille.name} » : ` +
              `${formule} contient sa propre cellule.`
          );
        }
      }
    });
  });
}

export function construireFacture(classeur) {
  const f = classeur.addWorksheet('Facture', {
    views: [{ showGridLines: false }],
    pageSetup: {
      paperSize: 9, // A4
      orientation: 'portrait',
      fitToPage: true,
      fitToWidth: 1,
      fitToHeight: 0,
      margins: { left: 0.6, right: 0.6, top: 0.6, bottom: 0.6, header: 0.3, footer: 0.3 },
    },
  });

  f.getColumn('A').width = 46;
  f.getColumn('B').width = 8;
  f.getColumn('C').width = 14;
  f.getColumn('D').width = 16;

  // ── En-tête : qui émet ──────────────────────────────────────────────────
  f.mergeCells('A1:D1');
  f.getCell('A1').value = IDENTITE.enseigne;
  f.getCell('A1').font = { name: 'Calibri', size: 20, bold: true, color: { argb: ACCENT } };
  f.getRow(1).height = 28;

  const entetes = [
    IDENTITE.exploitant,
    IDENTITE.adresse,
    `SIRET ${IDENTITE.siret}`,
    `${CONTACT_PUBLIC.email} · ${telephoneAffiche('fr')} · ${urlPublique()}`,
  ];
  entetes.forEach((texte, i) => paragraphe(f, 2 + i, texte, { taille: 9, couleur: ENCRE }));

  // ── La facture elle-même ────────────────────────────────────────────────
  f.mergeCells('A7:B7');
  f.getCell('A7').value = 'FACTURE';
  f.getCell('A7').font = { name: 'Calibri', size: 16, bold: true, color: { argb: ENCRE } };
  f.getRow(7).height = 26;

  f.getCell('C7').value = 'Nature';
  f.getCell('C7').font = { name: 'Calibri', size: 10, color: { argb: GRIS } };
  const nature = f.getCell('D7');
  nature.border = ligneAremplir;
  nature.font = { name: 'Calibri', size: 11, bold: true, color: { argb: ENCRE } };
  nature.dataValidation = {
    type: 'list',
    allowBlank: true,
    formulae: ['"Facture unique,Facture d’acompte,Facture de solde"'],
    showErrorMessage: false,
  };
  nature.note =
    "Une facture d'acompte est une facture à part entière : elle porte son propre numéro et " +
    'entre au registre. La facture de solde rappelle l’acompte et le déduit — case « Acompte déjà versé ».';

  champ(f, 8, 'Numéro de facture', {
    fusion: 'B:D',
    note:
      'Séquence continue, sans trou ni doublon (article 242 nonies A de l’annexe II au CGI). '
      + 'Le numéro suivant est calculé sur la feuille « Registre ».',
  });
  champ(f, 9, 'Date d’émission', { fusion: 'B:D', format: JOUR });
  champ(f, 10, 'Date de la prestation', {
    fusion: 'B:D',
    format: JOUR,
    note: 'Date de livraison, ou date d’achèvement. Mention obligatoire, distincte de la date d’émission.',
  });
  champ(f, 11, 'Échéance — 30 jours, article 5 des CGV', {
    fusion: 'B:D',
    format: JOUR,
    formule: { formula: 'IF(B9="","",B9+30)' },
  });
  champ(f, 12, 'Devis accepté le — numéro', {
    fusion: 'B:D',
    note: 'Le devis est le contrat (article 3). Le rappeler ici relie la facture à son périmètre accepté.',
  });

  // ── Le client ───────────────────────────────────────────────────────────
  section(f, 14, 'CLIENT');
  champ(f, 15, 'Nom ou raison sociale');
  champ(f, 16, 'Adresse');
  champ(f, 17, 'Code postal et ville');
  champ(f, 18, 'SIRET — si le client est un professionnel', {
    note: 'Le SIRET du client n’est obligatoire que pour un acheteur assujetti. Laisser vide pour un particulier.',
  });

  // ── Les prestations ─────────────────────────────────────────────────────
  const titres = ['Désignation', 'Qté', 'P.U. HT', 'Montant HT'];
  titres.forEach((titre, i) => {
    const c = f.getRow(TABLE.entete).getCell(i + 1);
    c.value = titre;
    c.font = { name: 'Calibri', size: 10, bold: true, color: { argb: ENCRE } };
    c.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: ENTETE } };
    c.alignment = { vertical: 'middle', horizontal: i === 0 ? 'left' : 'right' };
  });
  f.getRow(TABLE.entete).height = 20;

  // Les libellés proposés se déduisent de la grille : un pack ajouté à
  // `tarifs.ts` apparaît ici sans qu'on y touche. La virgule est le séparateur
  // de la liste Excel — un nom de pack qui en contiendrait une la casserait.
  const suggestions = [
    ...PACKS.map((cle) => `Création de site — pack ${PACK_COURRIEL[cle].nom}`),
    `Abonnement hébergement et maintenance — ${prixHebergement('fr')}`,
    'Modification hors forfait — tarif horaire',
    `Acompte de ${ACOMPTE_POURCENT} % à la commande`,
  ];
  const virgulard = suggestions.find((s) => s.includes(','));
  if (virgulard) throw new Error(`libellé contenant une virgule, illisible par Excel : ${virgulard}`);

  for (let r = PREMIERE; r <= DERNIERE; r++) {
    const l = f.getRow(r);
    l.height = 18;
    for (const col of ['A', 'B', 'C', 'D']) {
      l.getCell(col).border = { bottom: { style: 'hair', color: { argb: TRAIT } } };
      l.getCell(col).font = { name: 'Calibri', size: 10, color: { argb: ENCRE } };
    }
    l.getCell('A').dataValidation = {
      type: 'list',
      allowBlank: true,
      formulae: [`"${suggestions.join(',')}"`],
      showErrorMessage: false, // suggestions, pas contraintes : le libellé reste libre
    };
    l.getCell('B').alignment = { horizontal: 'right' };
    l.getCell('C').numFmt = EURO;
    l.getCell('D').value = { formula: `IF(B${r}="","",B${r}*C${r})` };
    l.getCell('D').numFmt = EURO;
  }

  // ── Les totaux ──────────────────────────────────────────────────────────
  const totaux = [
    [RANG.totalHT, 'Total HT', { formula: `SUM(D${PREMIERE}:D${DERNIERE})` }, false],
    [RANG.tva, 'TVA', 0, false],
    [RANG.totalTTC, 'Total TTC', { formula: `D${RANG.totalHT}` }, false],
    [RANG.acompte, 'Acompte déjà versé', null, false],
    [RANG.net, 'NET À PAYER', { formula: `D${RANG.totalTTC}-D${RANG.acompte}` }, true],
  ];
  totaux.forEach(([r, intitule, valeur, fort]) => {
    const l = f.getRow(r);
    l.height = fort ? 24 : 18;
    const etiquette = l.getCell('C');
    etiquette.value = intitule;
    etiquette.alignment = { horizontal: 'right', vertical: 'middle', wrapText: true };
    etiquette.font = {
      name: 'Calibri',
      size: fort ? 11 : 10,
      bold: fort,
      color: { argb: fort ? ENCRE : GRIS },
    };
    const cellule = l.getCell('D');
    if (valeur !== null) cellule.value = valeur;
    cellule.numFmt = EURO;
    cellule.alignment = { horizontal: 'right', vertical: 'middle' };
    cellule.font = { name: 'Calibri', size: fort ? 12 : 10, bold: fort, color: { argb: ENCRE } };
    cellule.border = fort
      ? { top: { style: 'medium', color: { argb: ACCENT } }, bottom: { style: 'double', color: { argb: ACCENT } } }
      : ligneAremplir;
  });
  f.mergeCells(`A${RANG.tva}:B${RANG.tva}`);
  const franchise = f.getCell(`A${RANG.tva}`);
  franchise.value = IDENTITE.franchise;
  franchise.font = { name: 'Calibri', size: 8, italic: true, color: { argb: GRIS } };
  franchise.alignment = { horizontal: 'right', vertical: 'middle' };
  f.getCell(`D${RANG.acompte}`).note =
    'Montant de la facture d’acompte déjà réglée, à saisir en positif. Elle reste au registre : '
    + 'la déduire ici ne l’annule pas.';

  // ── Règlement et mentions obligatoires ──────────────────────────────────
  champ(f, RANG.iban, 'Règlement par virement — IBAN', {
    note: 'À compléter une fois pour toutes, puis enregistrer le modèle.',
  });
  champ(f, RANG.stripe, 'ou lien de paiement Stripe', {
    note: 'Article 5 des CGV : aucune donnée de carte ne transite par le Prestataire.',
  });

  let r = RANG.mentions;
  for (const mention of MENTIONS) {
    paragraphe(f, r, mention, { hauteur: mention.length > 150 ? 34 : 13 });
    r++;
  }
  paragraphe(f, r, `Conditions générales de vente : ${urlPublique('cgv/')}`, { couleur: ACCENT });

  f.pageSetup.printArea = `A1:D${r}`;
  return f;
}

function construireRegistre(classeur) {
  const f = classeur.addWorksheet('Registre', {
    views: [{ showGridLines: false, state: 'frozen', ySplit: 8 }],
    pageSetup: { paperSize: 9, orientation: 'landscape', fitToPage: true, fitToWidth: 1, fitToHeight: 0 },
  });

  const colonnes = [
    ['Numéro', 16],
    ['Date', 12],
    ['Client', 26],
    ['Objet', 30],
    ['Nature', 16],
    ['Montant', 14],
    ['Payée le', 12],
    ['Devis', 14],
  ];
  colonnes.forEach(([, largeur], i) => (f.getColumn(i + 1).width = largeur));

  f.mergeCells('A1:H1');
  f.getCell('A1').value = 'Registre des factures émises';
  f.getCell('A1').font = { name: 'Calibri', size: 16, bold: true, color: { argb: ACCENT } };
  f.getRow(1).height = 26;

  const regles = [
    'Une ligne par facture émise, y compris les factures d’acompte. La séquence doit être continue : ni trou, ni doublon, ni numéro réattribué.',
    'Une facture émise ne se supprime pas et ne se modifie pas. Une erreur s’annule par un avoir, qui prend le numéro suivant et un montant négatif.',
    'Conservation dix ans (article L123-22 du code de commerce). Sauvegarder ce fichier ailleurs que sur le poste de travail.',
    'Facturation électronique : réception obligatoire au 1er septembre 2026, émission au 1er septembre 2027. Ce registre est une étape, pas une destination.',
  ];
  regles.forEach((texte, i) => {
    const r = 2 + i;
    f.mergeCells(`A${r}:H${r}`);
    const c = f.getCell(`A${r}`);
    c.value = `· ${texte}`;
    c.font = { name: 'Calibri', size: 9, color: { argb: GRIS } };
    c.alignment = { vertical: 'top', wrapText: true };
    f.getRow(r).height = 13;
  });

  f.getCell('A7').value = 'Prochain numéro';
  f.getCell('A7').font = { name: 'Calibri', size: 10, color: { argb: GRIS } };
  const suivant = f.getCell('B7');
  suivant.value = {
    formula: 'CONCATENATE("F",TEXT(TODAY(),"yyyy"),"-",TEXT(COUNTA(A9:A1000)+1,"000"))',
  };
  suivant.font = { name: 'Calibri', size: 12, bold: true, color: { argb: ACCENT } };
  suivant.note =
    'Compte les lignes déjà saisies. Le préfixe change au 1er janvier : la remise à zéro annuelle '
    + 'est admise tant que le millésime fait partie du numéro.';

  const grille = [
    ...PACKS.map((cle) => `${PACK_COURRIEL[cle].nom} ${prixPack(cle, 'fr')}`),
    `hébergement ${prixHebergement('fr')}`,
    `acompte ${ACOMPTE_POURCENT} %`,
  ].join(' · ');
  f.mergeCells('D7:H7');
  f.getCell('D7').value = `Grille en vigueur : ${grille}`;
  f.getCell('D7').font = { name: 'Calibri', size: 9, italic: true, color: { argb: GRIS } };
  f.getCell('D7').alignment = { horizontal: 'right', vertical: 'middle' };

  colonnes.forEach(([titre], i) => {
    const c = f.getRow(8).getCell(i + 1);
    c.value = titre;
    c.font = { name: 'Calibri', size: 10, bold: true, color: { argb: ENCRE } };
    c.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: ENTETE } };
    c.alignment = { vertical: 'middle' };
  });
  f.getRow(8).height = 20;

  for (let r = 9; r <= 40; r++) {
    const l = f.getRow(r);
    l.height = 16;
    for (let i = 1; i <= colonnes.length; i++) {
      l.getCell(i).border = { bottom: { style: 'hair', color: { argb: TRAIT } } };
      l.getCell(i).font = { name: 'Calibri', size: 10, color: { argb: ENCRE } };
    }
    l.getCell(2).numFmt = JOUR;
    l.getCell(6).numFmt = EURO;
    l.getCell(7).numFmt = JOUR;
    l.getCell(5).dataValidation = {
      type: 'list',
      allowBlank: true,
      formulae: ['"Facture unique,Facture d’acompte,Facture de solde,Avoir"'],
      showErrorMessage: false,
    };
  }

  f.getCell('E42').value = 'Total encaissé';
  f.getCell('E42').alignment = { horizontal: 'right' };
  f.getCell('E42').font = { name: 'Calibri', size: 10, color: { argb: GRIS } };
  f.getCell('F42').value = { formula: 'SUMIF(G9:G40,"<>",F9:F40)' };
  f.getCell('F42').numFmt = EURO;
  f.getCell('F42').font = { name: 'Calibri', size: 11, bold: true, color: { argb: ENCRE } };
  f.getCell('F42').note =
    'Somme des lignes portant une date de paiement. C’est l’encaissement, seule assiette qui compte '
    + 'pour le régime micro et pour le seuil de franchise de l’article 293 B.';

  return f;
}

/** Écrit `documents/modele-facture.xlsx`. Renvoie sa taille en octets. */
export async function genererFacture(chemin) {
  verifierIdentite();

  const classeur = new ExcelJS.Workbook();
  classeur.creator = 'Studio Caducée';
  classeur.calcProperties.fullCalcOnLoad = true; // sinon un tableur peut afficher les formules non calculées

  verifierFormules(construireFacture(classeur));
  verifierFormules(construireRegistre(classeur));

  await classeur.xlsx.writeFile(chemin);
}
