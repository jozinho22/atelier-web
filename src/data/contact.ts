import type { Lang } from '../lib/i18n';

/**
 * Coordonnées du studio — source unique.
 *
 * Elles vivaient jusqu'ici en plusieurs exemplaires : deux dans `home.ts`, une
 * dans `Footer.astro`, une dans le JSON-LD, plus les pages légales. Le numéro
 * affiché venait d'un endroit pendant que le lien `tel:` était figé à côté :
 * changer l'un laissait l'autre en place, et un visiteur appelait un numéro
 * qu'il ne lisait nulle part.
 *
 * ── Un numéro, deux écritures ─────────────────────────────────────────────
 *
 * Le lien `tel:` ne connaît qu'une forme, internationale et sans espaces —
 * c'est elle qui compose. L'AFFICHAGE, lui, change : la page française porte la
 * forme NATIONALE, l'anglaise la forme INTERNATIONALE, parce que son lecteur
 * peut appeler depuis l'étranger. Ce n'est pas une affaire de langue mais de
 * lieu d'appel.
 *
 * La forme internationale suit la recommandation UIT-T E.123 : indicatif
 * détaché, puis le numéro d'abonné sans son 0 de départ. « +336 25 45 01 76 »
 * serait fautif — on y lirait un indicatif à trois chiffres, qui n'existe pas
 * pour la France.
 */
export const CONTACT_PUBLIC = {
  email: 'josselin.douineau@studio-caducee.com',
  /** Forme canonique : celle du lien `tel:`, la seule qui compose partout. */
  telephone: '+33625450176',
  /** Libellé affiché, par langue. */
  telephoneAffiche: {
    fr: '06 25 45 01 76',
    en: '+33 6 25 45 01 76',
  },
} as const satisfies { email: string; telephone: string; telephoneAffiche: Record<Lang, string> };

/** Le numéro tel qu'il s'écrit dans la langue de la page. */
export const telephoneAffiche = (lang: Lang): string => CONTACT_PUBLIC.telephoneAffiche[lang];

/** Lien composable, identique quelle que soit la langue. */
export const telHref = (): string => `tel:${CONTACT_PUBLIC.telephone}`;

/**
 * Lien `mailto:` avec objet prérempli.
 *
 * L'objet évite au visiteur la page blanche du « Objet : (aucun) », et permet
 * de trier à la réception. Encodé : un objet contenant « ? » ou « & » couperait
 * la requête, et les espaces doivent l'être aussi.
 */
export const mailtoHref = (email: string, sujet?: string): string =>
  sujet ? `mailto:${email}?subject=${encodeURIComponent(sujet)}` : `mailto:${email}`;
