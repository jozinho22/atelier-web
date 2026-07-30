// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO : remplacer par le vrai nom de domaine avant la mise en ligne
// (utilisé pour le sitemap, les URL canoniques et les balises Open Graph).
export default defineConfig({
  site: 'https://www.atelier-web.example',
  output: 'static',
  integrations: [sitemap()],
});
