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
  // Les deux modèles du pack « Sur mesure ».
  /**
   * `--azur` du site. Son or (`--or-profond` #96701c) serait plus fidèle à son
   * enseigne, mais il ne tient que 4,53:1 en texte et surtout tombe à ΔE 9,2 de
   * l'or de l'hôtel — les deux modèles du même pack se confondraient. L'azur
   * est celui du panneau marine et du ciel qui se partagent son hero, il donne
   * 7,95:1, et son plus proche voisin est à ΔE 53.
   */
  casino: '#17557f',
  hotel: '#8d6d2c',
  // Les deux modèles du pack « Signature ».
  /**
   * `--fairway` du site, relevé dans son dépôt. L'ancienne valeur (#2b7350)
   * n'existait plus nulle part dans la source : elle datait d'avant sa refonte,
   * comme la vignette. Celle-ci tient 6,48:1 en texte sur blanc, contre 5,72.
   */
  golf: '#1d6b45',
  equestre: '#96581f',
} as const;

/**
 * Couleur de marque de chaque modèle, en TEXTE sur fond clair.
 *
 * Distincte de `ACCENTS`, et il le faut : les accents des vitrines sont des
 * pastels, faits pour être le FOND d'une pastille au texte encre. Employés en
 * texte sur la carte blanche, ils donnent 1,44 à 2,43:1 — illisibles.
 *
 * Ces valeurs ne sont pas dérivées mais RELEVÉES dans chaque démonstration :
 * c'est la teinte que le site emploie lui-même pour son texte d'emphase. Un
 * assombrissement mécanique des pastels rapprochait l'esthétique et la
 * boulangerie à ΔE 6,1 — indiscernables ; les vraies couleurs les séparent.
 *
 * Deux paires restent proches (esthétique / boulangerie à 13,1, bâtiment /
 * restaurant à 15,0). C'est assumé : ce sont leurs couleurs, les écarter les
 * rendrait fausses. Chaque lien jouxte de toute façon sa pastille, elle
 * distincte, et personne ne lit ces huit teintes comme une légende.
 *
 * Toutes tiennent au moins 4,78:1 sur blanc — seuil 4,5 à 13,6 px.
 */
export const ACCENTS_TEXTE = {
  /** `--a-green` de la démonstration Association. */
  association: '#1a7a4c',
  /**
   * Le jaune du bâtiment (#f2b705) ne tient que 1,82:1 en texte. Sa variante
   * soutenue existait déjà dans global.css sous le nom `--gold-strong`, dérivée
   * de ce même jaune : on la reprend plutôt que d'en inventer une seconde.
   */
  batiment: '#916d03',
  /** `--e-terra`. */
  esthetique: '#9d5141',
  /** `--f-encre` : le modèle est au fusain, il n'a pas de couleur. */
  artiste: '#3a352e',
  /** `--y-gris` : le modèle est en noir et blanc, il n'en a pas non plus. */
  yoga: '#6b6b6b',
  /** `--a-or-texte`, que la démonstration s'était déjà taillée pour son texte. */
  restaurant: '#7d5c1a',
  /** `--sd-cerise`. */
  salonDeThe: '#c0202e',
  /** `--bo-cuivre-deep`. */
  boulangerie: '#9c4f28',
} as const;
