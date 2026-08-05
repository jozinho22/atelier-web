import type { Lang } from '../lib/i18n';

/**
 * Grille tarifaire — source unique.
 *
 * Les montants vivent ici sous forme de nombres, jamais de chaînes déjà mises
 * en forme : la page d'accueil, les futures CGV et tout devis à venir liront
 * les mêmes valeurs. Une hausse de prix se fait donc à un seul endroit, et
 * aucun document ne peut se retrouver en contradiction avec un autre.
 *
 * La mise en forme est déléguée à `Intl.NumberFormat`, qui place l'espace
 * insécable des milliers et le symbole € selon la langue — « 1 690 € » en
 * français, « €1,690 » en anglais.
 */

export const TARIFS = {
  /** Pack Essentiel : une page, prix ferme. */
  essentiel: { montant: 890, aPartirDe: false },
  /** Pack Sur mesure : plusieurs pages, le prix dépend du périmètre. */
  surMesure: { montant: 1690, aPartirDe: true },
  /** Pack Signature : pièce unique, le prix dépend de l'ambition. */
  signature: { montant: 3900, aPartirDe: true },
} as const;

/** Abonnement mensuel : hébergement, nom de domaine et maintenance. */
export const HEBERGEMENT = { montant: 59, periode: 'mois' } as const;

/** Nombre d'allers-retours de relecture inclus dans tous les packs. */
export const ALLERS_RETOURS = 2;

/** Acompte demandé à la commande, en pourcentage du montant total. */
export const ACOMPTE_POURCENT = 30;

const LOCALES: Record<Lang, string> = { fr: 'fr-FR', en: 'en-GB' };

/** « 1 690 € » en français, « €1,690 » en anglais. */
export function euros(montant: number, lang: Lang): string {
  return new Intl.NumberFormat(LOCALES[lang], {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(montant);
}

/**
 * Prix d'un pack, préfixé de « à partir de » quand le montant n'est qu'un
 * point de départ. Le préfixe est ici plutôt que dans le dictionnaire : il
 * dépend de la nature du pack, pas de la page qui l'affiche.
 */
export function prixPack(pack: keyof typeof TARIFS, lang: Lang): string {
  const { montant, aPartirDe } = TARIFS[pack];
  const somme = euros(montant, lang);
  if (!aPartirDe) return somme;
  return lang === 'fr' ? `à partir de ${somme}` : `from ${somme}`;
}

/** « 59 €/mois » ou « €59/month ». */
export function prixHebergement(lang: Lang): string {
  const somme = euros(HEBERGEMENT.montant, lang);
  return lang === 'fr' ? `${somme}/mois` : `${somme}/month`;
}
