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
  // Les deux modèles du pack « Sur mesure ».
  salonDeThe: '#c0202e',
  hotel: '#8d6d2c',
  // Les deux modèles du pack « Signature ».
  golf: '#2b7350',
  equestre: '#96581f',
} as const;
