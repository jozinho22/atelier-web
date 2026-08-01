// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Trois cibles de déploiement, un seul code — les liens internes passent tous
// par withBase() (src/lib/paths.ts) et suivent automatiquement :
//
// 1. Local (développement)  : npm run dev — mêmes réglages que GitHub Pages.
// 2. GitHub Pages (démo)    : défaut, aucune variable à définir ;
//                             servi sous /site-vitrine-ventes-de-sites-web/.
// 3. Vercel (production)    : détecté via les variables injectées par Vercel ;
//                             servi à la racine, canonical sur le domaine de
//                             production (suit le domaine personnalisé dès
//                             qu'il est configuré dans Vercel).
//
// SITE_URL force n'importe quelle autre cible à la racine d'un domaine :
//   SITE_URL=https://www.mondomaine.fr npm run build
const custom = process.env.SITE_URL;
const vercelHost = process.env.VERCEL ? process.env.VERCEL_PROJECT_PRODUCTION_URL : undefined;

const SITE = custom ?? (vercelHost ? `https://${vercelHost}` : 'https://jozinho22.github.io');
const BASE = custom || vercelHost ? '/' : '/site-vitrine-ventes-de-sites-web';

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
