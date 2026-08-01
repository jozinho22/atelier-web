// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * Hébergement : GitHub Pages.
 *
 * Ces valeurs par défaut décrivent la cible finale — le site servi à la racine
 * du nom de domaine (et le dev local servi depuis `/`). Tant que le domaine
 * n'est pas branché, GitHub Pages sert depuis un sous-dossier, et le workflow
 * .github/workflows/deploy.yml passe alors :
 *
 *   SITE_URL=https://<utilisateur>.github.io SITE_BASE=/<nom-du-depot>/
 *
 * Tous les liens internes passent par withBase() (src/lib/paths.ts) et
 * suivent automatiquement ; robots.txt et sitemap aussi.
 */
// TODO : remplacer par le vrai domaine une fois acheté (n'affecte que les
// builds locaux — en CI, le workflow passe toujours SITE_URL explicitement).
const SITE = process.env.SITE_URL ?? 'https://www.atelier-web.example';
const BASE = process.env.SITE_BASE ?? '/';

export default defineConfig({
  site: SITE,
  base: BASE,
  output: 'static',
  integrations: [
    sitemap({
      // Avec une base en sous-dossier, l'intégration ajoute la racine sans
      // slash final en plus de la page d'accueil : on écarte ce doublon.
      filter: (page) => page !== `${SITE}${BASE.replace(/\/$/, '')}`,
    }),
  ],
});
