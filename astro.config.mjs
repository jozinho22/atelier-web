// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import { loadEnv } from 'vite';

// Les fichiers .env ne sont pas chargés automatiquement dans la config Astro :
// on les lit explicitement (voir .env.example), le shell restant prioritaire.
const env = { ...loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), ''), ...process.env };

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
 *
 * Un déploiement Vercel est aussi reconnu automatiquement (inerte sinon) :
 * site généré à la racine, canonical sur le domaine de production du projet.
 */
const vercelHost = env.VERCEL ? env.VERCEL_PROJECT_PRODUCTION_URL : undefined;

// TODO : remplacer par le vrai domaine une fois acheté (n'affecte que les
// builds locaux — en CI, le workflow passe toujours SITE_URL explicitement).
// `||` et non `??` : une variable présente mais vide (SITE_URL=) compte
// comme absente — le .env.example est ainsi copiable tel quel.
const SITE = env.SITE_URL || (vercelHost ? `https://${vercelHost}` : 'https://www.studio-caducee.example');
const BASE = env.SITE_BASE || '/';

/**
 * Y a-t-il un serveur pour répondre ?
 *
 * Vrai sur Vercel et en développement, faux sur GitHub Pages — qui sert des
 * fichiers et ne reçoit aucun POST. Cette seule valeur commande trois choses :
 * l'adaptateur, l'existence de la route `/api/contact`, et le repli du
 * formulaire vers `mailto:` (voir src/lib/cible.ts).
 *
 * `astro dev` monte un vrai serveur : le formulaire est donc testable en local
 * sans rien déployer, à condition d'avoir une clé Resend dans .env.
 */
const SERVEUR = Boolean(env.VERCEL) || process.argv.includes('dev');

/**
 * La route serveur est INJECTÉE plutôt que posée dans `src/pages/`.
 *
 * Un fichier de `src/pages/` est routé d'office. Marqué `prerender = false`, il
 * ferait échouer tout build sans adaptateur — donc celui de GitHub Pages, avec
 * une erreur qui n'apparaîtrait qu'en CI. En le gardant hors de `src/pages/` et
 * en ne l'injectant que lorsqu'un serveur existe, le build statique ignore son
 * existence au lieu de s'y casser.
 */
const routeContact = {
  name: 'route-contact',
  hooks: {
    'astro:config:setup': ({ injectRoute }) => {
      injectRoute({
        pattern: '/api/contact',
        entrypoint: './src/server/contact.ts',
        prerender: false,
      });
    },
  },
};

export default defineConfig({
  site: SITE,
  base: BASE,
  output: 'static',
  // L'adaptateur ne s'active que là où un serveur tourne : sur GitHub Pages, sa
  // présence changerait la forme du build (`.vercel/output` au lieu de `dist`).
  ...(SERVEUR ? { adapter: vercel() } : {}),
  // Français à la racine (URLs historiques inchangées), anglais sous /en/.
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    ...(SERVEUR ? [routeContact] : []),
    sitemap({
      // Avec une base en sous-dossier, l'intégration ajoute la racine sans
      // slash final en plus de la page d'accueil : on écarte ce doublon.
      filter: (page) => page !== `${SITE}${BASE.replace(/\/$/, '')}`,
      // Annotations hreflang dans le sitemap.
      i18n: {
        defaultLocale: 'fr',
        locales: { fr: 'fr-FR', en: 'en-US' },
      },
    }),
  ],
});
