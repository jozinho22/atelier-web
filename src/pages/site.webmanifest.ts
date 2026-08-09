import type { APIRoute } from 'astro';
import { withBase } from '../lib/paths';
import { home } from '../i18n/home';

/**
 * Manifeste d'application, généré au build plutôt que déposé dans `public/`.
 *
 * C'est `start_url` et `scope` qui l'imposent : ils valent `/studio-caducee/` sur
 * la démonstration github.io et `/` sur le domaine final. Un fichier statique
 * figerait l'un des deux, et Chrome refuserait l'installation sur l'autre —
 * un `scope` qui ne contient pas la page courante invalide tout le manifeste.
 *
 * Le site est bilingue, le manifeste ne l'est pas : la spécification n'admet
 * qu'un seul jeu `name` / `description`. On prend le français, langue par
 * défaut, et `lang` le déclare honnêtement.
 */
export const GET: APIRoute = () => {
  // Chemins et non URL absolues : la spécification les résout contre l'adresse
  // du manifeste lui-même. Le manifeste reste donc valide sur les trois cibles
  // sans dépendre de `Astro.site`, y compris servi depuis localhost.
  const url = (chemin: string) => withBase(chemin);

  const manifeste = {
    name: 'Studio Caducée',
    /**
     * Le texte SOUS l'icône, sur l'écran d'accueil. Environ douze caractères
     * avant troncature : « Studio Caducée » en fait quatorze et s'afficherait
     * « Studio Cadu… ». On garde le mot qui identifie, pas celui qui qualifie.
     *
     * ⚠️ À tenir identique à <meta name="apple-mobile-web-app-title"> dans
     * Base.astro : iOS ignore le manifeste et ne lit que cette balise. Les
     * modifier ensemble, jamais l'une sans l'autre.
     */
    short_name: 'Caducée',
    description: home.fr.description,
    lang: 'fr',
    dir: 'ltr',
    /**
     * Identité durable de l'application. Elle vaut aujourd'hui la même chose
     * que `start_url` — c'est la valeur par défaut quand le champ est absent —
     * mais la déclarer explicitement les découple : `start_url` pourra changer
     * plus tard (page d'accueil dédiée, paramètre de suivi) sans que Chrome
     * croie à une autre application et orpheline les installations existantes.
     *
     * Le chemin de base en fait partie, et ce n'est pas cosmétique : `id` est
     * résolu contre l'ORIGINE, et `jozinho22.github.io` héberge tous les
     * dépôts. Un `id` réduit à « / » y serait partagé avec chaque autre projet
     * publié sur ce compte.
     *
     * ⚠️ Ne jamais modifier cette valeur : elle EST l'identité de l'app.
     */
    id: url(''),
    start_url: url(''),
    scope: url(''),
    display: 'standalone',
    /** Fond de l'écran de démarrage : le papier crème du site. */
    background_color: '#f7f6f2',
    /** Teinte de la barre système : l'encre, comme <meta name="theme-color">. */
    theme_color: '#12131f',
    icons: [
      { src: url('favicon-32x32.png'), sizes: '32x32', type: 'image/png' },
      { src: url('android-chrome-192x192.png'), sizes: '192x192', type: 'image/png' },
      { src: url('android-chrome-512x512.png'), sizes: '512x512', type: 'image/png' },
      // `any` et `maskable` restent deux entrées distinctes : déclarer
      // « any maskable » sur une même icône oblige le navigateur à choisir, et
      // il affiche alors une icône rognée là où elle ne devrait pas l'être.
      {
        src: url('icon-512-maskable.png'),
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };

  return new Response(JSON.stringify(manifeste, null, 2), {
    headers: { 'Content-Type': 'application/manifest+json; charset=utf-8' },
  });
};
