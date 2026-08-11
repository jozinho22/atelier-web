import type { Lang } from '../lib/i18n';
import { EN_LIGNE } from './site';

/**
 * Qui est Studio Caducée — source unique.
 *
 * Raison, exploitant, adresse, SIRET, régime de TVA, adresse électronique,
 * téléphone. Tout ce qu'un document officiel doit dire de l'entreprise, et rien
 * d'autre : ni prix (voir [tarifs.ts](./tarifs.ts)), ni texte de clause.
 *
 * ── Pourquoi un seul module ───────────────────────────────────────────────
 *
 * Ces faits étaient recopiés. Relevé avant regroupement : l'adresse postale et
 * le nom de l'exploitant dans CINQ fichiers, le SIRET et le téléphone dans
 * trois. Le numéro affiché venait d'un endroit pendant que le lien `tel:` était
 * figé à côté : changer l'un laissait l'autre en place, et un visiteur appelait
 * un numéro qu'il ne lisait nulle part.
 *
 * Sur des mentions légales, la divergence n'est pas cosmétique : c'est un
 * document qui se contredit lui-même. `scripts/facture.mjs` en gardait sa
 * propre copie, qui ne tenait que grâce à une assertion écrite exprès pour
 * détecter l'écart — un garde-fou qui n'a plus lieu d'être.
 *
 * ── Du code, pas une variable d'environnement ─────────────────────────────
 *
 * Ce ne sont pas des secrets : tout cela s'imprime sur chaque page et dans les
 * PDF. Une variable absente donnerait un `mailto:undefined` dans les mentions
 * légales, et ferait dépendre le contenu d'un contrat signé du shell qui l'a
 * généré. Ce qui varie vraiment selon le déploiement — « le domaine sert-il le
 * site ? » — est en variable, lui : `SITE_URL`, lu par [site.ts](./site.ts).
 *
 * ── Un numéro, deux écritures ─────────────────────────────────────────────
 *
 * Le lien `tel:` ne connaît qu'une forme, internationale et sans espaces —
 * c'est elle qui compose. L'AFFICHAGE, lui, change : la page française porte la
 * forme NATIONALE, l'anglaise la forme INTERNATIONALE, parce que son lecteur
 * peut appeler depuis l'étranger. Ce n'est pas une affaire de langue mais de
 * lieu d'appel.
 *
 * La forme internationale suit la recommandation UIT-T E.123 : indicatif
 * détaché, puis le numéro d'abonné sans son 0 de départ. « +336 25 45 01 76 »
 * serait fautif — on y lirait un indicatif à trois chiffres, qui n'existe pas
 * pour la France.
 */
/**
 * L'adresse définitive, sur le domaine du studio.
 *
 * Elle suppose deux choses : le domaine enregistré, et la boîte créée côté
 * Google Workspace. Aucune des deux n'est faite tant que `EN_LIGNE` est faux.
 */
const EMAIL_DEFINITIF = 'josselin.douineau@studio-caducee.com';

/**
 * L'adresse employée tant que le domaine ne sert pas le site.
 *
 * ⚠️ Ce n'est pas une précaution cosmétique. Afficher `@studio-caducee.com`
 * sur la démonstration GitHub Pages publierait une adresse qui REFUSE les
 * messages : le visiteur écrit, croit avoir écrit, et son message revient en
 * erreur — ou pire, disparaît sans qu'il le sache. Une adresse d'attente qui
 * fonctionne vaut mieux qu'une adresse définitive qui n'existe pas.
 *
 * Elle disparaît d'elle-même le jour où le domaine est branché : rien à
 * remplacer à la main, dans aucun des documents qui la citent.
 */
const EMAIL_ATTENTE = 'josselin.douineau.1987@gmail.com';

export const IDENTITE = {
  /** Nom commercial. */
  enseigne: 'Studio Caducée',
  /** Personne physique qui exploite. */
  exploitant: 'Josselin DOUINEAU',
  /**
   * Forme juridique.
   *
   * La mention n'est pas décorative : depuis la loi du 14 février 2022
   * (article L526-22 du code de commerce), le nom de l'entrepreneur individuel
   * doit être suivi ou précédé de cette qualité sur tous ses documents
   * professionnels.
   */
  formeJuridique: 'Entrepreneur individuel (auto-entreprise)',
  /**
   * Adresse postale.
   *
   * La version anglaise porte « France » : son lecteur peut écrire de
   * l'étranger, et une adresse sans pays n'y arrive pas. Même raison que pour
   * les deux écritures du téléphone, plus bas.
   */
  adresse: {
    fr: '9bis Kerscoul, 22540 LOUARGAT',
    en: '9bis Kerscoul, 22540 LOUARGAT, France',
  },
  siret: '98108366000028',
  /** Régime de TVA, en toutes lettres — mention obligatoire sur les factures. */
  franchiseTva: {
    fr: 'TVA non applicable, article 293 B du code général des impôts',
    en: 'VAT not applicable under Article 293 B of the French General Tax Code (small-business exemption)',
  },
  /** Définitive une fois le domaine branché, d'attente avant. Voir ci-dessus. */
  email: EN_LIGNE ? EMAIL_DEFINITIF : EMAIL_ATTENTE,
  /** Forme canonique : celle du lien `tel:`, la seule qui compose partout. */
  telephone: '+33625450176',
  /** Libellé affiché, par langue. */
  telephoneAffiche: {
    fr: '06 25 45 01 76',
    en: '+33 6 25 45 01 76',
  },
} as const satisfies {
  enseigne: string;
  exploitant: string;
  formeJuridique: string;
  adresse: Record<Lang, string>;
  siret: string;
  franchiseTva: Record<Lang, string>;
  email: string;
  telephone: string;
  telephoneAffiche: Record<Lang, string>;
};

/**
 * « Studio Caducée — Josselin DOUINEAU », tel que l'impriment les six blocs
 * d'identité du site et des documents.
 *
 * Dérivé plutôt que déclaré : une quatorzième chaîne à tenir à jour serait
 * exactement le défaut qu'on vient de corriger.
 */
export const RAISON = `${IDENTITE.enseigne} — ${IDENTITE.exploitant}`;

/** L'adresse postale dans la langue de la page. */
export const adresse = (lang: Lang): string => IDENTITE.adresse[lang];

/** Le numéro tel qu'il s'écrit dans la langue de la page. */
export const telephoneAffiche = (lang: Lang): string => IDENTITE.telephoneAffiche[lang];

/** Lien composable, identique quelle que soit la langue. */
export const telHref = (): string => `tel:${IDENTITE.telephone}`;

/**
 * Lien `mailto:` avec objet prérempli.
 *
 * L'objet évite au visiteur la page blanche du « Objet : (aucun) », et permet
 * de trier à la réception. Encodé : un objet contenant « ? » ou « & » couperait
 * la requête, et les espaces doivent l'être aussi.
 */
export const mailtoHref = (email: string, sujet?: string): string =>
  sujet ? `mailto:${email}?subject=${encodeURIComponent(sujet)}` : `mailto:${email}`;
