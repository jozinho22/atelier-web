/**
 * Préfixe un chemin interne avec la base du site (config `base` d'Astro).
 * Indispensable pour GitHub Pages, où le site est servi sous
 * /atelier-web/ et non à la racine du domaine.
 */
export function withBase(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
