/**
 * Réalisations — sites réellement livrés, et leurs replis.
 *
 * Source unique pour la section « Réalisations » de la page d'accueil. Chaque
 * entrée décrit où pointe le lien, quelle icône l'accompagne, et QUE FAIRE si la
 * production ne répond plus.
 *
 * ── Pourquoi un repli déclaré, et non deviné ──────────────────────────────
 *
 * Le site est statique : il ne peut interroger personne au moment où un visiteur
 * l'ouvre. On pourrait sonder les domaines pendant le build, mais le résultat
 * dépendrait alors de l'état du réseau à cet instant précis — un incident DNS
 * passager réécrirait silencieusement les liens de la page, et deux builds du
 * même commit ne donneraient pas le même site.
 *
 * L'état est donc DÉCLARÉ ici, à la main, et `npm run verifier-realisations` dit
 * quand il ne correspond plus à la réalité. La sonde informe, elle ne décide pas.
 *
 * ── Le repli est un OUTIL D'ATELIER, pas un contenu ───────────────────────
 *
 * Quand `enLigne` vaut `false`, le sort de la réalisation dépend de l'endroit
 * où le site tourne — voir `estVisible()` :
 *
 * • en DÉVELOPPEMENT, le lien bascule sur la copie publiée sur GitHub Pages,
 *   `https://jozinho22.github.io/<depotRepli>/`. On peut ainsi travailler la
 *   section même quand un domaine ne répond plus.
 *
 * • DÈS QUE LE SITE EST CONSTRUIT, la réalisation DISPARAÎT. Un visiteur n'a
 *   que faire d'un lien de secours vers un dépôt : ou le site est en ligne et
 *   on le montre, ou il ne l'est pas et il n'a pas sa place dans une vitrine
 *   de travaux livrés.
 *
 * L'ICÔNE, elle, est locale dans tous les cas, donc insensible à la panne. Le
 * champ `iconeVerifiee` note simplement si elle a pu être confrontée à la
 * production : un `false` signale une icône venue du dépôt, à revérifier.
 *
 * Le domaine AFFICHÉ suit le lien : annoncer « apijawa.fr » sous un lien qui
 * mène ailleurs tromperait le visiteur — et en développement, voir
 * `jozinho22.github.io/...` sous la carte est le signe qu'on regarde un repli.
 */

export interface Realisation {
  /** Adresse de production — celle qu'on veut montrer quand elle répond. */
  url: string;
  /**
   * Dépôt publié sur GitHub Pages, employé si `enLigne` vaut `false`.
   * Sans lui, une réalisation hors ligne resterait sur son URL de production.
   */
  depotRepli?: string;
  /** Fichier de `public/portfolio/`. */
  icone: string;
  /** Liseré de la carte. */
  accent: string;
  /** Variante portant le texte : doit tenir 4,5:1 sur la carte blanche. */
  accentTexte: string;
  /** La production répond-elle ? Déclaré, jamais deviné au build. */
  enLigne: boolean;
  /** L'icône a-t-elle pu être comparée à celle servie en production ? */
  iconeVerifiee: boolean;
  /** Affichage du domaine quand la forme brute est illisible (punycode). */
  domaineLisible?: string;
}

export const REALISATIONS: readonly Realisation[] = [
  {
    // `apijawa.fr` ne résout plus. En développement, le lien bascule donc sur
    // la copie GitHub Pages ; dans le site construit, la carte n'apparaît pas.
    // L'icône vient du dépôt, faute d'avoir pu être confrontée au site.
    url: 'https://apijawa.fr',
    depotRepli: 'api-jawa',
    icone: 'api-jawa.webp',
    accent: '#c98a3f',
    accentTexte: '#9b682c',
    enLigne: false,
    iconeVerifiee: false,
  },
  {
    url: 'https://expert-maths-lycee.fr',
    icone: 'expert-maths-lycee.webp',
    accent: '#2f6fdb',
    accentTexte: '#2f6fdb',
    enLigne: true,
    iconeVerifiee: true,
  },
  {
    url: 'https://french-overseas.com',
    icone: 'french-overseas.webp',
    accent: '#c1552c',
    accentTexte: '#bb522b',
    enLigne: true,
    iconeVerifiee: true,
  },
  {
    url: 'https://xn--monmtr-evac.com',
    icone: 'monmetre.svg',
    accent: '#1f8a70',
    accentTexte: '#1d8169',
    enLigne: true,
    iconeVerifiee: true,
    // Punycode : `xn--monmtr-evac.com` est illisible, le domaine réel ne l'est pas.
    domaineLisible: 'monmétré.com',
  },
];

/** L'adresse d'une copie publiée sur GitHub Pages. */
export const lienDepot = (depot: string): string => `https://jozinho22.github.io/${depot}/`;

/**
 * Une réalisation doit-elle apparaître ?
 *
 * Le paramètre est passé par l'appelant plutôt que lu ici : ce module est aussi
 * importé par `scripts/verifier-realisations.mjs`, qui tourne sous Node où
 * `import.meta.env` n'existe pas. La page d'accueil lui donne
 * `import.meta.env.DEV`, vrai sous `astro dev` et faux dans tout build.
 *
 * Conséquence à connaître : la démonstration github.io est un BUILD. Une
 * réalisation hors ligne y disparaît comme en production — c'est voulu, elle est
 * tout aussi publique.
 */
export const estVisible = (r: Realisation, developpement: boolean): boolean =>
  developpement || r.enLigne;

export interface RealisationResolue {
  /** Adresse vers laquelle le lien mène réellement. */
  href: string;
  /** Domaine à afficher — toujours celui de `href`, jamais un autre. */
  domaine: string;
  /** Vrai quand on montre le repli plutôt que la production. */
  enRepli: boolean;
}

/**
 * Décide, pour une réalisation, où mène le lien et ce qu'on écrit dessous.
 *
 * Le repli ne sort d'ici qu'en développement : dans un build, `estVisible()` a
 * déjà écarté les réalisations hors ligne, et cette fonction ne voit plus que
 * des sites joignables, sur leur vraie adresse.
 *
 * Une réalisation hors ligne SANS dépôt de repli garde son URL de production :
 * mieux vaut un lien qui échoue franchement qu'un lien inventé.
 */
export function resoudreRealisation(r: Realisation): RealisationResolue {
  const enRepli = !r.enLigne && Boolean(r.depotRepli);
  const href = enRepli ? lienDepot(r.depotRepli as string) : r.url;
  const domaine = enRepli
    ? href.replace(/^https?:\/\//, '').replace(/\/$/, '')
    : (r.domaineLisible ?? r.url.replace(/^https?:\/\//, ''));
  return { href, domaine, enRepli };
}
