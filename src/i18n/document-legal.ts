/**
 * Structure commune aux documents juridiques du site — mentions légales et
 * conditions générales de vente.
 *
 * Les deux pages partagent un gabarit ([src/components/DocumentLegal.astro]) :
 * même largeur de colonne, même hiérarchie de titres, mêmes styles de lien.
 * Ces types sont le contrat entre les dictionnaires et ce gabarit.
 *
 * Un paragraphe est une liste de SEGMENTS plutôt qu'une chaîne, afin que les
 * liens et les retours à la ligne restent de vrais éléments rendus par le
 * gabarit : les styles scopés d'Astro ne s'appliquent pas au HTML injecté via
 * `set:html`, un lien passé en chaîne perdrait donc sa couleur.
 */

/** Les trois documents juridiques du pied de page. */
export type CleDoc =
  | 'mentions-legales'
  | 'politique-de-confidentialite'
  | 'cgv'
  | 'sous-traitance';

/** Fragment d'un paragraphe. */
export type SegmentLegal =
  /** Texte brut. */
  | { readonly text: string }
  /** Retour à la ligne — pour les blocs d'adresse. */
  | { readonly br: true }
  /** Lien (mailto:, tel:, externe), identique dans les deux langues. */
  | { readonly link: string; readonly href: string }
  /**
   * Renvoi vers un autre document juridique, désigné par sa PAGE et non par
   * son adresse.
   *
   * Ces textes alimentent deux rendus qui n'ont pas la même notion d'adresse :
   * le site attend un chemin relatif, préfixé de la base et de la langue ; les
   * PDF partent chez le client et n'ont que des URL absolues. Un `href` écrit
   * en dur ne peut servir qu'un seul des deux — et c'est le PDF, muet sur son
   * lien mort, qui perdrait.
   *
   * Le segment déclare donc la destination, chaque rendu la résolvant :
   * `localePath()` pour le site, `urlPublique()` pour les PDF. Un renvoi vers
   * la page courante s'affiche en texte simple, dans les deux.
   */
  | { readonly link: string; readonly page: CleDoc };

/**
 * Bloc de contenu dans une section.
 *
 * Une liste de segments est un paragraphe ; l'objet `{ liste }` est une liste
 * à puces. Cette distinction par forme plutôt que par étiquette évite
 * d'envelopper chaque paragraphe existant des mentions légales : le passage
 * de `paragraphs` à `blocs` s'est fait par simple renommage de clé.
 */
export type BlocLegal =
  | readonly SegmentLegal[]
  | { readonly liste: readonly (readonly SegmentLegal[])[] };

/** Section titrée : un `<h2>` suivi de ses blocs. */
export interface SectionLegale {
  readonly heading: string;
  readonly blocs: readonly BlocLegal[];
}

/** Un document complet, dans une langue. */
export interface DocumentLegalTexte {
  readonly meta: { readonly title: string; readonly description: string };
  readonly eyebrow: string;
  readonly title: string;
  /** Ligne de date affichée sous le titre, s'il y a lieu. */
  readonly maj?: string;
  readonly sections: readonly SectionLegale[];
}

/** Distingue un paragraphe d'une liste à puces au moment du rendu. */
export function estListe(
  bloc: BlocLegal
): bloc is { readonly liste: readonly (readonly SegmentLegal[])[] } {
  return !Array.isArray(bloc);
}
