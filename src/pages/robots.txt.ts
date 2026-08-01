import type { APIRoute } from 'astro';
import { withBase } from '../lib/paths';

// robots.txt généré au build : l'URL du sitemap suit automatiquement la cible
// de déploiement (GitHub Pages, Vercel ou domaine personnalisé). Servi à la
// racine du domaine en production Vercel, où il est réellement lu par les
// moteurs de recherche.
export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL(withBase('sitemap-index.xml'), site).href;

  const body = ['User-agent: *', 'Allow: /', '', `Sitemap: ${sitemap}`, ''].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
