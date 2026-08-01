import { withBase } from './paths';

/**
 * Internationalisation : la langue par défaut vit à la racine (URLs
 * historiques inchangées), les autres sous leur préfixe (`en/`).
 *
 * Ajouter une langue = l'ajouter à LANGS, la déclarer dans astro.config.mjs
 * et compléter les dictionnaires de src/i18n/. Les routes, les liens et la
 * détection de langue suivent automatiquement.
 */
export type Lang = 'fr' | 'en';

/** Langue servie à la racine, sans préfixe d'URL. */
export const DEFAULT_LANG: Lang = 'fr';

export const LANGS: readonly Lang[] = ['fr', 'en'] as const;

/** Langues dont l'URL porte un préfixe (toutes sauf la langue par défaut). */
const PREFIXED: readonly Lang[] = LANGS.filter((l) => l !== DEFAULT_LANG);

/** Chemin interne localisé, base du site incluse. */
export function localePath(lang: Lang, path = ''): string {
  const clean = path.replace(/^\//, '');
  if (lang === DEFAULT_LANG) return withBase(clean);
  return withBase(clean ? `${lang}/${clean}` : `${lang}/`);
}

/**
 * Décompose le pathname courant en { lang, rest } où `rest` est le chemin
 * sans la base du site, sans le préfixe de langue et sans slashes de bord.
 * Permet à chaque composant de connaître sa langue et de construire le lien
 * vers la même page dans l'autre langue.
 */
export function splitPath(pathname: string): { lang: Lang; rest: string } {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  let rest = pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
  rest = rest.replace(/^\//, '').replace(/\/$/, '');
  for (const lang of PREFIXED) {
    if (rest === lang || rest.startsWith(`${lang}/`)) {
      return { lang, rest: rest.slice(lang.length).replace(/^\//, '') };
    }
  }
  return { lang: DEFAULT_LANG, rest };
}

/**
 * Chemins statiques d'une page bilingue, partagés par toutes les routes de
 * src/pages/[...lang]/ : la langue par défaut a un segment `undefined`
 * (l'URL reste à la racine), les autres portent leur préfixe.
 *
 * Usage dans une page :
 *   export { langStaticPaths as getStaticPaths } from '../../lib/i18n';
 */
export function langStaticPaths() {
  return LANGS.map((lang) => ({
    params: { lang: lang === DEFAULT_LANG ? undefined : lang },
  }));
}
