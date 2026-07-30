// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO : le jour où un vrai nom de domaine remplacera GitHub Pages,
// mettre à jour `site` et supprimer `base` (utilisés pour le sitemap,
// les URL canoniques, les balises Open Graph et les liens internes).
export default defineConfig({
  site: 'https://jozinho22.github.io',
  base: '/site-vitrine-ventes-de-sites-web',
  output: 'static',
  integrations: [
    sitemap({
      // Avec `base`, l'intégration ajoute la racine sans slash final en plus
      // de la page d'accueil : on écarte ce doublon qui redirige.
      filter: (page) => page !== 'https://jozinho22.github.io/site-vitrine-ventes-de-sites-web',
    }),
  ],
});
