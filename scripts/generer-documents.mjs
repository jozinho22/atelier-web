/**
 * Produit les documents contractuels en PDF A4.
 *
 *   npm run generer-documents
 *
 * ── Pourquoi les régénérer plutôt que les tenir à la main ─────────────────
 *
 * L'article 1 des CGV affirme qu'elles sont « jointes à chaque devis ». Un PDF
 * recopié à la main divergerait de la page publiée dès la première retouche, et
 * c'est la version signée par le client qui ferait foi. Ici, les deux sortent du
 * MÊME dictionnaire : `src/i18n/`. Ils ne peuvent pas se contredire.
 *
 * Les montants suivent la même règle : ils viennent de `src/data/tarifs.ts`,
 * donc une hausse de prix se répercute sur le site comme sur le PDF joint.
 *
 * ── Choix de la chaîne ────────────────────────────────────────────────────
 *
 * pandoc → pdfLaTeX. Chrome sait aussi imprimer en A4, mais son mode sans
 * interface ne numérote pas les pages : la CSS `@page` n'expose pas de boîtes
 * de marge chez lui. Sur un contrat, pouvoir dire « article 5, page 2 » n'est
 * pas un ornement.
 *
 * ⚠️ Deux contraintes de l'installation TeX de ce poste, découvertes à l'usage :
 *
 * • LuaLaTeX échoue — les Latin Modern OpenType manquent. D'où pdfLaTeX, qui
 *   emploie leur version Type 1, présente.
 * • `babel` n'a pas le fichier de langue française. On ne passe donc PAS
 *   l'option `lang` de pandoc, qui l'activerait. Le texte s'imprime tel qu'il
 *   est écrit ; seules les espaces fines automatiques avant « : ; ! ? » sont
 *   perdues. Si `texlive-lang-french` est installé un jour, rétablir `lang`.
 *
 * Les polices du site ne suivent pas non plus : Fontsource ne livre que du
 * `woff2`, illisible par LaTeX. Latin Modern fait l'affaire — un serif neutre
 * sied de toute façon mieux à un contrat qu'une police d'affichage.
 */
import { execFileSync } from 'node:child_process';
import { mkdirSync, writeFileSync, existsSync, statSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

import { legal } from '../src/i18n/legal.ts';
import { cgv } from '../src/i18n/cgv.ts';
import { sousTraitance } from '../src/i18n/sous-traitance.ts';
import { confidentialite } from '../src/i18n/confidentialite.ts';
import { urlPublique, EN_LIGNE } from '../src/data/site.ts';
import { CONTACT_PUBLIC } from '../src/data/contact.ts';
import { DEFAULT_LANG } from '../src/lib/i18n.ts';
import { genererFacture } from './facture.mjs';

/**
 * La racine vient du répertoire courant, et non de `import.meta.url` : ce
 * fichier est empaqueté par esbuild avant d'être exécuté — Node n'accepte pas
 * les imports sans extension que Vite résout —, et le paquet ne vit pas au même
 * endroit que la source. Un npm script s'exécute toujours depuis la racine.
 */
const RACINE = process.cwd();
const SORTIE = join(RACINE, 'documents');
const TEMP = join(SORTIE, '.source');

/**
 * Caractères que pdfLaTeX ne sait pas composer avec l'encodage T1.
 *
 * Relevés sur les sources, pas devinés : le pictogramme d'avertissement, son
 * sélecteur de variante invisible, et la flèche des tableaux. L'euro, lui,
 * passe — `textcomp` le fournit —, mais il est plus sûr de le nommer.
 *
 * Substituer plutôt que supprimer : un « ⚠️ » effacé laisserait une phrase
 * d'avertissement qui n'avertit plus de rien.
 */
const SUBSTITUTIONS = [
  [/\uFE0F/g, ''],          // sélecteur de variante, invisible mais fatal
  [/⚠\s*/g, 'Attention — '],
  [/→/g, '$\\rightarrow$'],
  [/€/g, '\\texteuro{}'],
  [/1ᵉʳ/g, '1\\textsuperscript{er}'],
  [/ᵉ/g, '\\textsuperscript{e}'],
  [/ʳ/g, '\\textsuperscript{r}'],
];

const nettoyer = (v) => SUBSTITUTIONS.reduce((acc, [de, vers]) => acc.replace(de, vers), v);

/**
 * Adresses publiques injectées dans les documents qui sortent du dépôt.
 *
 * Les Markdown portent un gabarit plutôt que l'adresse : un document remis au
 * client ne peut pas renvoyer vers un fichier source, et l'adresse elle-même
 * dépend de l'état de la production — voir src/data/site.ts. Un seul endroit
 * décide, ici comme sur le site.
 */
const ADRESSES = [
  [/\{\{URL_CGV\}\}/g, urlPublique('cgv/')],
  [/\{\{URL_MENTIONS\}\}/g, urlPublique('mentions-legales/')],
  [/\{\{URL_ANNEXE\}\}/g, urlPublique('sous-traitance/')],
  [/\{\{URL_SITE\}\}/g, urlPublique()],
  // L'adresse suit le domaine, comme les URL : avant qu'il serve, la boîte
  // définitive n'existe pas. Voir src/data/contact.ts.
  [/\{\{EMAIL\}\}/g, CONTACT_PUBLIC.email],
];

const adresser = (v) => ADRESSES.reduce((acc, [de, vers]) => acc.replace(de, vers), v);

/** Échappe ce que Markdown, puis LaTeX, interpréteraient comme du balisage. */
const echapper = (v) => v.replace(/([\\`*_[\]{}#+|])/g, '\\$1');

/**
 * L'adresse d'une page juridique, vue depuis un PDF.
 *
 * Le PDF part chez le client : il lui faut une URL absolue. `localePath()` ne
 * peut pas servir ici — il lit `import.meta.env.BASE_URL`, que Vite substitue
 * au build du site et qui n'existe pas dans ce script.
 */
const adressePage = (page, lang) =>
  urlPublique(lang === DEFAULT_LANG ? `${page}/` : `${lang}/${page}/`);

/** Un bloc est soit une liste, soit une suite de segments. */
const rendreBloc = (bloc, ctx) => {
  if (bloc.liste) {
    return bloc.liste.map((item) => `- ${rendreSegments(item, ctx)}`).join('\n');
  }
  return rendreSegments(bloc, ctx);
};

const rendreSegments = (segments, ctx) =>
  segments
    .map((s) => {
      if (s.br) return '\\\n'; // saut de ligne dur, sans nouveau paragraphe
      // Un renvoi vers le document courant reste du texte : dans un PDF, le
      // lien ramènerait le lecteur à la page qu'il est déjà en train de lire.
      if (s.page) {
        return s.page === ctx.cle
          ? echapper(s.link)
          : `[${echapper(s.link)}](${adressePage(s.page, ctx.lang)})`;
      }
      if (s.link) return `[${echapper(s.link)}](${s.href})`;
      return echapper(s.text ?? '');
    })
    .join('');

/** Un DocumentLegalTexte devient du Markdown. */
function versMarkdown(texte, ctx) {
  const lignes = [`% ${texte.title}`, '', `**${texte.eyebrow}**`, ''];
  if (texte.maj) lignes.push(`*${texte.maj}*`, '');
  for (const section of texte.sections) {
    lignes.push(`## ${echapper(section.heading)}`, '');
    for (const bloc of section.blocs) lignes.push(rendreBloc(bloc, ctx), '');
  }
  return lignes.join('\n');
}

/**
 * Réglages LaTeX. `fancyhdr` porte en pied de page le nom du document et le
 * numéro : sur un contrat, c'est ce qui permet de désigner un passage sans
 * ambiguïté, et de constater qu'il ne manque pas de feuillet.
 */
const entete = (titre) => `
\\usepackage[T1]{fontenc}
\\usepackage[utf8]{inputenc}
\\usepackage{lmodern}
\\usepackage{textcomp}
\\usepackage[a4paper,top=25mm,bottom=25mm,left=25mm,right=25mm]{geometry}
\\usepackage{fancyhdr}
\\pagestyle{fancy}
\\fancyhf{}
\\renewcommand{\\headrulewidth}{0pt}
\\renewcommand{\\footrulewidth}{0.4pt}
\\fancyfoot[L]{\\footnotesize\\sffamily ${titre}}
\\fancyfoot[R]{\\footnotesize\\sffamily \\thepage\\ / \\pageref{LastPage}}
\\usepackage{lastpage}
\\usepackage{titlesec}
\\titleformat{\\section}{\\sffamily\\bfseries\\large\\color[HTML]{12131F}}{}{0pt}{}
\\titlespacing{\\section}{0pt}{16pt}{6pt}
\\setlength{\\parskip}{6pt}
\\setlength{\\parindent}{0pt}
\\usepackage{enumitem}
\\setlist[itemize]{leftmargin=1.2em,itemsep=2pt,topsep=2pt}
`;

const DOCUMENTS = [
  { nom: 'cgv-fr', titre: 'Studio Caducée — Conditions générales de vente', lang: 'fr', cle: 'cgv', source: (ctx) => versMarkdown(cgv('fr'), ctx) },
  { nom: 'cgv-en', titre: 'Studio Caducée — Terms and conditions of sale', lang: 'en', cle: 'cgv', source: (ctx) => versMarkdown(cgv('en'), ctx) },
  { nom: 'annexe-rgpd-fr', titre: 'Studio Caducée — Annexe RGPD de sous-traitance', lang: 'fr', cle: 'sous-traitance', source: (ctx) => versMarkdown(sousTraitance('fr'), ctx) },
  { nom: 'annexe-rgpd-en', titre: 'Studio Caducée — GDPR processing annex', lang: 'en', cle: 'sous-traitance', source: (ctx) => versMarkdown(sousTraitance('en'), ctx) },
  { nom: 'confidentialite-fr', titre: 'Studio Caducée — Politique de confidentialité', lang: 'fr', cle: 'politique-de-confidentialite', source: (ctx) => versMarkdown(confidentialite('fr'), ctx) },
  { nom: 'confidentialite-en', titre: 'Studio Caducée — Privacy policy', lang: 'en', cle: 'politique-de-confidentialite', source: (ctx) => versMarkdown(confidentialite('en'), ctx) },
  { nom: 'mentions-legales-fr', titre: 'Studio Caducée — Mentions légales', lang: 'fr', cle: 'mentions-legales', source: (ctx) => versMarkdown(legal.fr, ctx) },
  { nom: 'mentions-legales-en', titre: 'Studio Caducée — Legal notice', lang: 'en', cle: 'mentions-legales', source: (ctx) => versMarkdown(legal.en, ctx) },
  { nom: 'formulaire-retractation', titre: 'Studio Caducée — Formulaire de rétractation', lang: 'fr', fichier: 'FORMULAIRE-RETRACTATION.md' },
  { nom: 'modele-devis', titre: 'Studio Caducée — Modèle de devis', lang: 'fr', fichier: 'MODELE-DEVIS.md' },
  { nom: 'deroule-client', titre: 'Studio Caducée — Déroulé client', lang: 'fr', fichier: 'DEROULE-CLIENT.md' },
];

mkdirSync(TEMP, { recursive: true });

let produits = 0;
for (const doc of DOCUMENTS) {
  const md = nettoyer(
    adresser(
      doc.fichier
        ? readFileSync(join(RACINE, doc.fichier), 'utf8')
        : doc.source({ lang: doc.lang, cle: doc.cle })
    )
  );
  const cheminMd = join(TEMP, `${doc.nom}.md`);
  const cheminPdf = join(SORTIE, `${doc.nom}.pdf`);
  writeFileSync(cheminMd, md);
  writeFileSync(join(TEMP, `${doc.nom}.tex-entete`), entete(doc.titre.replace(/&/g, '\\&')));

  try {
    execFileSync(
      'pandoc',
      [
        cheminMd,
        '-o', cheminPdf,
        '--pdf-engine=pdflatex',
        '--include-in-header', join(TEMP, `${doc.nom}.tex-entete`),
        '-V', 'linkcolor=[HTML]{403FB8}',
        '-V', 'urlcolor=[HTML]{403FB8}',
        '--metadata', `title=${doc.titre}`,
      ],
      { stdio: ['ignore', 'ignore', 'pipe'], cwd: RACINE }
    );
    const ko = (statSync(cheminPdf).size / 1024).toFixed(0);
    console.log(`  ✓ ${doc.nom.padEnd(26)} ${ko.padStart(5)} Ko`);
    produits++;
  } catch (e) {
    console.error(`  ✗ ${doc.nom} — ${String(e.stderr ?? e).split('\n').slice(-6).join('\n')}`);
  }
}

/**
 * La facture ferme la marche, et sépare son sort de celui des PDF.
 *
 * Elle ne passe ni par pandoc ni par LaTeX : un modèle à remplir se calcule, il
 * ne se compose pas. Son échec ne doit donc pas se confondre avec celui d'un
 * contrat — d'où le compteur distinct, et le code de sortie non nul si elle
 * manque.
 */
const CLASSEUR = join(SORTIE, 'modele-facture.xlsx');
try {
  await genererFacture(CLASSEUR);
  const ko = (statSync(CLASSEUR).size / 1024).toFixed(0);
  console.log(`  ✓ ${'modele-facture.xlsx'.padEnd(26)} ${ko.padStart(5)} Ko`);
} catch (e) {
  console.error(`  ✗ modele-facture.xlsx — ${e.message}`);
  process.exitCode = 1;
}

console.log(
  `\n  adresses écrites dans les documents : ${urlPublique()}  ·  ${CONTACT_PUBLIC.email}` +
    (EN_LIGNE ? '' : '  (repli GitHub Pages — le domaine ne sert pas encore le site)')
);
console.log(
  produits === DOCUMENTS.length
    ? `\n  ${produits} documents dans documents/, plus le modèle de facture`
    : `\n  ${produits}/${DOCUMENTS.length} produits — voir les erreurs ci-dessus`
);
if (!existsSync(join(RACINE, 'FORMULAIRE-RETRACTATION.md'))) process.exitCode = 1;
