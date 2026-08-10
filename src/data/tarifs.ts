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

export type ClePack = keyof typeof TARIFS;

/**
 * Les clés des packs, dans l'ordre de la grille.
 *
 * Dérivées de `TARIFS` et non réécrites : elles servent à la fois à construire
 * la liste déroulante du formulaire de contact et à valider ce que le serveur
 * reçoit. Une liste tapée à part finirait par accepter un pack disparu de la
 * grille, ou par en oublier un nouveau.
 */
export const PACKS = Object.keys(TARIFS) as ClePack[];

/** Une valeur reçue du navigateur désigne-t-elle un pack réel ? */
export const estUnPack = (valeur: string): valeur is ClePack =>
  Object.prototype.hasOwnProperty.call(TARIFS, valeur);

/**
 * Nom et couleur de chaque pack, pour l'e-mail de notification.
 *
 * ⚠️ Ces deux valeurs existent déjà ailleurs, et c'est assumé faute de mieux :
 *
 * • la COULEUR est déclarée dans `src/styles/global.css` (`--pack-essentiel`
 *   et ses sœurs). Un e-mail ne peut pas lire de variable CSS — la plupart des
 *   messageries ne gardent même pas la feuille de style —, il lui faut la
 *   valeur littérale ;
 *
 * • le NOM vit dans `src/i18n/home.ts`, en deux langues. L'e-mail, lui, part
 *   toujours en français : il s'adresse au studio, pas au visiteur.
 *
 * En changer une ici sans changer l'autre là-bas ferait diverger la couleur du
 * message de celle du site.
 */
export const PACK_COURRIEL: Record<ClePack, { nom: string; couleur: string }> = {
  essentiel: { nom: 'Essentiel', couleur: '#5352d1' },
  surMesure: { nom: 'Sur mesure', couleur: '#b83a24' },
  signature: { nom: 'Signature', couleur: '#7d5a06' },
};

/**
 * Abonnement mensuel : hébergement et maintenance.
 *
 * Le nom de domaine n'y figure plus. Il est souscrit par le client, à son nom —
 * c'est son identité, et son actif le plus durable. Le détenir à sa place
 * faisait porter au Prestataire le risque le plus lourd du contrat : une
 * échéance oubliée, et le client perd une adresse souvent irrécupérable, pour
 * un préjudice sans commune mesure avec le montant de l'abonnement.
 */
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
