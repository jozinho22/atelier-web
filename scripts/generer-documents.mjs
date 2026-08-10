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

/** Échappe ce que Markdown, puis LaTeX, interpréteraient comme du balisage. */
const echapper = (v) => v.replace(/([\\`*_[\]{}#+|])/g, '\\$1');

/** Un bloc est soit une liste, soit une suite de segments. */
const rendreBloc = (bloc) => {
  if (bloc.liste) {
    return bloc.liste.map((item) => `- ${rendreSegments(item)}`).join('\n');
  }
  return rendreSegments(bloc);
};

const rendreSegments = (segments) =>
  segments
    .map((s) => {
      if (s.br) return '\\\n'; // saut de ligne dur, sans nouveau paragraphe
      if (s.link) return `[${echapper(s.link)}](${s.href})`;
      return echapper(s.text ?? '');
    })
    .join('');

/** Un DocumentLegalTexte devient du Markdown. */
function versMarkdown(texte) {
  const lignes = [`% ${texte.title}`, '', `**${texte.eyebrow}**`, ''];
  if (texte.maj) lignes.push(`*${texte.maj}*`, '');
  for (const section of texte.sections) {
    lignes.push(`## ${echapper(section.heading)}`, '');
    for (const bloc of section.blocs) lignes.push(rendreBloc(bloc), '');
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
  { nom: 'cgv-fr', titre: 'Studio Caducée — Conditions générales de vente', lang: 'fr', source: () => versMarkdown(cgv('fr')) },
  { nom: 'cgv-en', titre: 'Studio Caducée — Terms and conditions of sale', lang: 'en', source: () => versMarkdown(cgv('en')) },
  { nom: 'annexe-rgpd-fr', titre: 'Studio Caducée — Annexe RGPD de sous-traitance', lang: 'fr', source: () => versMarkdown(sousTraitance('fr')) },
  { nom: 'annexe-rgpd-en', titre: 'Studio Caducée — GDPR processing annex', lang: 'en', source: () => versMarkdown(sousTraitance('en')) },
  { nom: 'mentions-legales-fr', titre: 'Studio Caducée — Mentions légales', lang: 'fr', source: () => versMarkdown(legal.fr) },
  { nom: 'mentions-legales-en', titre: 'Studio Caducée — Legal notice', lang: 'en', source: () => versMarkdown(legal.en) },
  { nom: 'formulaire-retractation', titre: 'Studio Caducée — Formulaire de rétractation', lang: 'fr', fichier: 'FORMULAIRE-RETRACTATION.md' },
  { nom: 'deroule-client', titre: 'Studio Caducée — Déroulé client', lang: 'fr', fichier: 'DEROULE-CLIENT.md' },
];

mkdirSync(TEMP, { recursive: true });

let produits = 0;
for (const doc of DOCUMENTS) {
  const md = nettoyer(
    doc.fichier ? readFileSync(join(RACINE, doc.fichier), 'utf8') : doc.source()
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

console.log(
  produits === DOCUMENTS.length
    ? `\n  ${produits} documents dans documents/`
    : `\n  ${produits}/${DOCUMENTS.length} produits — voir les erreurs ci-dessus`
);
if (!existsSync(join(RACINE, 'FORMULAIRE-RETRACTATION.md'))) process.exitCode = 1;
