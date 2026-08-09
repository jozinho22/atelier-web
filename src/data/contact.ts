/**
 * Coordonnées PUBLIQUES du studio.
 *
 * Source unique de l'accueil, du pied de page et du JSON-LD. Elles vivaient
 * jusqu'ici en quatre exemplaires — deux dans `home.ts`, un dans `Footer.astro`,
 * un dans le JSON-LD — dont trois écrits en dur. Le numéro affiché venait de
 * l'i18n pendant que le lien `tel:` était figé à côté : changer l'un laissait
 * l'autre en place, et un visiteur appelait un numéro qu'il ne lisait nulle part.
 *
 * ── Pourquoi elles sont encore fictives ───────────────────────────────────
 *
 * Les mentions légales et les CGV portent, elles, les VRAIES coordonnées : la
 * loi les y rend obligatoires. Les deux se contredisent donc pour l'instant, et
 * c'est assumé — afficher un numéro personnel sur une page d'accueil n'est pas
 * la même décision que de le porter sur une page légale, où il n'y a pas le
 * choix.
 *
 * Basculer, c'est changer les deux valeurs ci-dessous. Ici, et nulle part
 * ailleurs.
 */
export const CONTACT_PUBLIC = {
  email: 'contact@studio-caducee.example',
  telephone: '06 00 00 00 00',
} as const;

/**
 * Numéro affiché → lien composable. « 06 25 45 01 76 » donne
 * « tel:+33625450176 ».
 *
 * Le format international n'est pas une coquetterie : un visiteur à l'étranger,
 * ou dont le téléphone est enregistré sur un opérateur non français, ne joint
 * pas un numéro commençant par 0.
 */
export const telHref = (numero: string): string =>
  `tel:+33${numero.replace(/\s+/g, '').replace(/^0/, '')}`;

/**
 * Lien `mailto:` avec objet prérempli.
 *
 * L'objet évite au visiteur la page blanche du « Objet : (aucun) », et te
 * permet de trier. Encodé : un objet contenant « ? » ou « & » couperait la
 * requête, et les espaces doivent l'être aussi.
 */
export const mailtoHref = (email: string, sujet?: string): string =>
  sujet ? `mailto:${email}?subject=${encodeURIComponent(sujet)}` : `mailto:${email}`;
