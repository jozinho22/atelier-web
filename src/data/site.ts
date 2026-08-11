import { lienDepot } from './realisations';

/**
 * Le site est-il servi depuis son domaine définitif, ou depuis une adresse
 * d'attente ?
 *
 * Le même mécanisme que pour les réalisations d'un client — voir
 * [realisations.ts](./realisations.ts) —, appliqué cette fois au site lui-même :
 * tant que le domaine ne sert pas le site, on renvoie vers la copie publiée sur
 * GitHub Pages.
 *
 * ── Pourquoi c'est nécessaire ─────────────────────────────────────────────
 *
 * Deux choses n'existent qu'avec le domaine, et sont fausses avant lui :
 *
 * • LES ADRESSES DE PAGES écrites dans les documents contractuels. Ces PDF
 *   partent chez le client, hors du site. Un lien mort dans un contrat n'est
 *   pas un détail : c'est une clause qui renvoie à un texte introuvable, alors
 *   que l'article 1 des CGV le dit « consultable à tout moment ».
 *
 * • LA BOÎTE AUX LETTRES. `…@studio-caducee.com` suppose le domaine enregistré
 *   ET la boîte créée. L'afficher sur la démonstration publierait une adresse
 *   qui renvoie les messages — pire qu'une adresse provisoire, car le visiteur
 *   croit avoir écrit. Voir [contact.ts](./contact.ts).
 *
 * ── Déduit de la configuration, jamais sondé ──────────────────────────────
 *
 * `EN_LIGNE` se lit dans `SITE_URL`, c'est-à-dire dans ce que la construction
 * sait d'elle-même — pas sur le réseau. Sonder le domaine au moment de générer
 * les PDF ferait dépendre le contenu d'un contrat de l'état du réseau à cet
 * instant : deux générations du même commit ne donneraient pas le même
 * document, et un incident DNS passager suffirait à imprimer une adresse de
 * repli sur une pièce signée. Ici, un même commit et un même environnement
 * donnent toujours le même résultat.
 *
 * Ce module est lu à la CONSTRUCTION, jamais par le navigateur — frontmatter
 * des composants, et scripts Node de `scripts/`. D'où les deux sources de
 * `URL_CONFIGUREE` plus bas, une par monde.
 */

/** Domaine visé. Encore un espace réservé : le domaine n'est pas acheté. */
export const DOMAINE_FINAL = 'https://www.studio-caducee.example';

/** Dépôt publié sur GitHub Pages, employé tant que le domaine ne sert pas. */
export const DEPOT = 'studio-caducee';

/**
 * Hôtes qui ne sont PAS le domaine définitif, même quand le site y répond.
 *
 * Trois familles, et chacune a sa raison d'être ici :
 *
 * • `github.io` — la démonstration publique, servie depuis un sous-dossier ;
 * • `vercel.app` — l'URL technique du projet, celle que Vercel donne tant
 *   qu'aucun domaine n'est branché. Le site y répond parfaitement, mais la
 *   boîte aux lettres, elle, dépend du domaine et n'existe pas encore ;
 * • `.example` — le domaine d'attente de ce dépôt. Réservé par la RFC 2606
 *   précisément pour cet usage : il ne peut être enregistré par personne, donc
 *   il ne risque pas de se mettre à répondre un jour par accident.
 */
const HOTES_D_ATTENTE = ['github.io', 'vercel.app', '.example'];

/**
 * L'adresse pour laquelle cette construction est faite.
 *
 * Deux sources, parce que ce module est lu depuis deux mondes :
 *
 * • `import.meta.env.SITE` — la valeur DÉJÀ RÉSOLUE par `astro.config.mjs`.
 *   C'est la bonne source côté site : la config a lu `.env.local` avec le
 *   `loadEnv` de Vite, reconnu Vercel, et appliqué le défaut. Rien à refaire.
 *
 *   ⚠️ `import.meta.env.SITE_URL` ne marcherait PAS : Vite n'inline dans les
 *   modules que les variables préfixées `PUBLIC_`. Mesuré — la sonde rend
 *   `undefined`. Seule `SITE`, posée par Astro lui-même, traverse.
 *
 * • `process.env` — pour les scripts de `scripts/`, qui tournent dans Node
 *   sans `import.meta.env`. Eux ne lisent aucun fichier `.env` : la variable
 *   doit venir du shell.
 *
 *       SITE_URL=https://www.mondomaine.fr npm run generer-documents
 */
const env: Record<string, string | undefined> =
  typeof process !== 'undefined' && process.env ? process.env : {};

const URL_CONFIGUREE: string =
  (import.meta.env?.SITE as string | undefined) ||
  env.SITE_URL ||
  (env.VERCEL && env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${env.VERCEL_PROJECT_PRODUCTION_URL}`
    : '') ||
  DOMAINE_FINAL;

const hote = (url: string): string => {
  try {
    return new URL(url).hostname;
  } catch {
    return '';
  }
};

/**
 * Le site répond-il sur son domaine définitif ?
 *
 * Faux sur GitHub Pages, faux sur une URL `*.vercel.app`, faux tant que le
 * domaine d'attente `.example` sert de défaut — donc faux aujourd'hui, dans
 * toutes les configurations du dépôt. Passera vrai de lui-même le jour où
 * `SITE_URL` (ou le domaine de production Vercel) portera le vrai domaine.
 */
export const EN_LIGNE: boolean = !HOTES_D_ATTENTE.some((attente) =>
  hote(URL_CONFIGUREE).endsWith(attente)
);

/**
 * L'adresse publique d'une page du site, repli compris.
 *
 * `urlPublique('cgv/')` donne l'adresse à écrire dans un document destiné à
 * sortir du dépôt.
 */
export function urlPublique(chemin = ''): string {
  const base = EN_LIGNE ? `${URL_CONFIGUREE.replace(/\/$/, '')}/` : lienDepot(DEPOT);
  return `${base}${chemin}`.replace(/([^:]\/)\/+/g, '$1');
}
