import { withBase } from './paths';

/**
 * Internationalisation : le français vit à la racine (URLs historiques
 * inchangées), l'anglais sous le préfixe `en/`.
 */
export type Lang = 'fr' | 'en';

export const LANGS: readonly Lang[] = ['fr', 'en'] as const;

/** Chemin interne localisé, base du site incluse. */
export function localePath(lang: Lang, path = ''): string {
  const clean = path.replace(/^\//, '');
  if (lang === 'fr') return withBase(clean);
  return withBase(clean ? `en/${clean}` : 'en/');
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
  if (rest === 'en' || rest.startsWith('en/')) {
    return { lang: 'en', rest: rest.replace(/^en\/?/, '') };
  }
  return { lang: 'fr', rest };
}
