import { lienDepot } from './realisations';

/**
 * Où le site est-il consultable, aujourd'hui ?
 *
 * Le même mécanisme que pour les réalisations d'un client — voir
 * [realisations.ts](./realisations.ts) —, appliqué cette fois au site lui-même :
 * tant que le domaine de production ne répond pas, on renvoie vers la copie
 * publiée sur GitHub Pages.
 *
 * ── Pourquoi c'est nécessaire ici ─────────────────────────────────────────
 *
 * Les documents contractuels partent chez le client sous forme de PDF, hors du
 * site. Un lien mort dans un contrat n'est pas un détail : c'est une clause qui
 * renvoie à un texte introuvable, alors même que l'article 1 des CGV affirme
 * qu'elles sont « consultables à tout moment ».
 *
 * ── Déclaré, jamais sondé ─────────────────────────────────────────────────
 *
 * `enLigne` se met à la main. Sonder le domaine au moment de générer les PDF
 * ferait dépendre le contenu d'un contrat de l'état du réseau à cet instant :
 * deux générations du même commit ne donneraient pas le même document, et un
 * incident DNS passager suffirait à imprimer une adresse de repli sur une pièce
 * signée.
 *
 * ⚠️ Le jour où le domaine est acheté et branché : renseigner `production` et
 * passer `enLigne` à `true`. Mettre à jour aussi `astro.config.mjs`, dont le
 * `SITE` par défaut porte encore le même domaine d'attente.
 */
export const SITE = {
  /** Domaine visé. Encore un espace réservé : le domaine n'est pas acheté. */
  production: 'https://www.studio-caducee.example',
  /** Dépôt publié sur GitHub Pages, employé tant que la production ne répond pas. */
  depot: 'studio-caducee',
  /** La production répond-elle ? */
  enLigne: false,
} as const;

/**
 * L'adresse publique d'une page du site, repli compris.
 *
 * `urlPublique('cgv')` donne l'adresse à écrire dans un document destiné à
 * sortir du dépôt.
 */
export function urlPublique(chemin = ''): string {
  const base = SITE.enLigne ? `${SITE.production}/` : lienDepot(SITE.depot);
  return `${base}${chemin}`.replace(/([^:]\/)\/+/g, '$1');
}
