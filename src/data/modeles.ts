/**
 * Code couleur des modèles — source unique.
 *
 * Chaque modèle, vitrine ou pack, porte un accent qui l'identifie : il colore
 * le liseré de sa vignette et son étiquette de secteur sur la page d'accueil,
 * et sa pastille dans le pied de page. Un même modèle doit garder sa teinte
 * partout, sinon le repère visuel ne repère plus rien.
 *
 * Les accents des quatre modèles de pack sont volontairement sombres : sur la
 * page d'accueil ils portent du texte sur fond clair et doivent y tenir 4,5:1.
 * Sur le fond d'encre du pied de page ils ne servent que de pastille — seuil
 * de 3:1 pour un élément graphique —, et tous les dix le franchissent, les
 * quatre sombres entre 3,06 et 3,83:1.
 */
export const ACCENTS = {
  // Les six vitrines.
  association: '#7fe0a8',
  batiment: '#f2b705',
  esthetique: '#f3c9bd',
  artiste: '#b9a8ff',
  /** Gris et non couleur : le modèle yoga est intégralement en noir et blanc. */
  yoga: '#d7d7d7',
  restaurant: '#d9ae5f',
  /**
   * Rose de diner, et non le cerise du site lui-même (#c0202e). Sur une carte
   * vitrine, l'accent est le FOND d'une pastille au texte encre : le cerise n'y
   * donnait que 3,06:1, sous le seuil de 4,5. Celui-ci en donne 7,80, dans la
   * bande de luminance des six autres accents.
   *
   * Le modèle garde son cerise d'origine pour son propre décor — il vit dans
   * SalonDeTheDemo.astro, pas ici.
   */
  salonDeThe: '#f58993',
  /**
   * Cuivre clair — les casseroles du mur et la croûte. Choisi pour deux
   * contraintes mesurées : 7,58:1 pour l'encre sur la pastille, et ΔE 26,6 du
   * plus proche voisin (le rose du salon de thé), là où toutes les nuances de
   * mie testées se pressaient sous 20 contre le rose pêche de l'esthétique.
   *
   * Le modèle emploie un cuivre plus profond pour son propre texte : celui-ci
   * ne sert qu'à la pastille et au liseré de sa vignette.
   */
  boulangerie: '#ee8d63',
  // Le modèle restant du pack « Sur mesure ».
  hotel: '#8d6d2c',
  // Les deux modèles du pack « Signature ».
  golf: '#2b7350',
  equestre: '#96581f',
} as const;
