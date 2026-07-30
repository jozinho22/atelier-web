// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Deux cibles de déploiement avec le même code :
// - GitHub Pages (défaut, aucune variable à définir) : servi sous /site-vitrine-ventes-de-sites-web/
// - domaine personnalisé : définir SITE_URL au build (ex. SITE_URL=https://www.mondomaine.fr npm run build)
//   et le site est généré pour la racine du domaine.
// Tous les liens internes passent par withBase() (src/lib/paths.ts) et suivent automatiquement.
const SITE = process.env.SITE_URL ?? 'https://jozinho22.github.io';
const BASE = process.env.SITE_URL ? '/' : '/site-vitrine-ventes-de-sites-web';

export default defineConfig({
  site: SITE,
  base: BASE,
  output: 'static',
  integrations: [
    sitemap({
      // Avec `base`, l'intégration ajoute la racine sans slash final en plus
      // de la page d'accueil : on écarte ce doublon qui redirige.
      filter: (page) => page !== `${SITE}${BASE.replace(/\/$/, '')}`,
    }),
  ],
});
