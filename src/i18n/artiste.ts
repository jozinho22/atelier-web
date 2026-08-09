import type { Lang } from '../lib/i18n';

/**
 * Modèle « É. Martin » — dessinatrice au fusain.
 * Univers 1940 : papier vieilli, noir de charbon, swing manouche. Le seul
 * éclat de couleur du site est celui du bouquet de roses — tout le reste,
 * y compris l'interface, reste au fusain.
 */
export const artiste = {
  fr: {
    meta: {
      title: 'Modèle dessinatrice au fusain — Élise Martin | Studio Caducée',
      description:
        "Exemple de site vitrine pour une artiste dessinatrice au fusain : galerie, démarche, atelier et commandes. Un modèle Studio Caducée d'inspiration années 1940.",
    },
    demoLabel: 'Dessinatrice au fusain',
    nav: {
      galerie: 'La galerie',
      fusain: 'Le fusain',
      atelier: "L'atelier",
      commandes: 'Commandes',
    },
    hero: {
      kicker: 'Fusain sur papier — depuis 1998',
      titre: 'Élise Martin',
      sousTitre: 'Le noir, et tout ce qu’il contient',
      lede:
        'Je dessine au fusain, à la main, sur des papiers que je choisis un par un. Des visages, des scènes, quelques bouquets. Tout ce qui, dans les années quarante, aurait mérité qu’on s’arrête.',
      ctaGalerie: 'Voir la galerie',
      ctaCommande: 'Commander un portrait',
      /** Trois temps posés, comme une mesure de swing manouche. */
      tempo: ['Fusain', 'Papier', 'Patience'],
      photoAlt: 'Élise Martin dans son atelier parisien',
      photoLegende: 'Élise Martin, à la table de travail.',
    },
    galerie: {
      kicker: 'La galerie',
      titre: 'Quatre feuilles',
      lede:
        'Chaque dessin est une pièce unique, signée et datée. Les formats varient selon le sujet — un portrait ne se pose pas comme une scène de cabaret.',
      oeuvres: [
        {
          fichier: 'portrait-de-femme.webp',
          titre: 'Portrait de femme',
          annee: '1947',
          prix: '1 400 €',
          technique: 'Fusain et estompe sur papier de soie — 32 × 48 cm',
          note: 'Le chapeau donne le ton : elle sait qu’on la regarde, et cela l’amuse.',
        },
        {
          fichier: 'jazz-at-cabaret.webp',
          titre: 'Cabaret, deuxième set',
          annee: '1949',
          prix: '1 850 €',
          technique: 'Fusain sur papier fort — 60 × 34 cm',
          note: 'La fumée m’a demandé plus de temps que les musiciens.',
        },
        {
          fichier: 'chat-siamois.webp',
          titre: 'La poursuite',
          annee: '1951',
          prix: '1 200 €',
          technique: 'Fusain et craie blanche — 52 × 30 cm',
          note: 'Un siamois, une souris, et une issue que je n’ai pas voulu dessiner.',
        },
        {
          fichier: 'roses.webp',
          titre: 'Roses au salon',
          annee: '1953',
          prix: '2 100 €',
          technique: 'Fusain rehaussé de pastel — 58 × 32 cm',
          note: 'Le seul dessin où j’ai cédé à la couleur. Une fois suffit.',
        },
      ],
      stylePrefix: 'Style',
      mentionCouleur: 'Seule œuvre en couleur',
      indiceCouleur: 'Approchez : la couleur revient.',
    },
    fusain: {
      kicker: 'Le fusain',
      titre: 'Un bâton de saule brûlé, et rien d’autre',
      texte:
        'Le fusain ne pardonne pas grand-chose. Il s’étale, il salit, il refuse le détail qu’on veut lui arracher. C’est pour cela qu’il va si bien aux visages : il oblige à choisir ce qui compte, et à laisser le reste dans l’ombre.',
      etapes: [
        { titre: 'Le trait', desc: 'Poser la structure en quelques gestes, sans rien fixer encore.' },
        { titre: 'L’estompe', desc: 'Le doigt, le chiffon, la mie de pain. C’est là que naissent les volumes.' },
        { titre: 'Le blanc', desc: 'Reprendre la lumière à la gomme mie de pain, comme on creuse.' },
        { titre: 'Le fixatif', desc: 'Une passe légère, à distance. Trop près, tout s’écrase.' },
      ],
    },
    atelier: {
      kicker: 'L’atelier',
      titre: 'Une table, une lampe, un tourne-disque',
      texte:
        'Je travaille le matin, quand la lumière est encore froide, avec du swing en fond — Django, Grappelli, les enregistrements d’avant-guerre. Ce n’est pas de la nostalgie : ce rythme-là tient la main, il empêche de figer le trait.',
      citation: 'Le fusain ne se corrige pas. Il se recommence, ou il s’accepte.',
      signature: 'Élise',
      photoAlt: 'La galerie E. Martin, accrochage complet',
      photoLegende: 'La galerie, rue des Grands-Augustins.',
    },
    commandes: {
      kicker: 'Commandes',
      titre: 'Faire faire un portrait',
      texte:
        'Je réalise une dizaine de portraits sur commande par an, d’après photographies ou d’après nature à l’atelier. Comptez six semaines, un peu plus si le sujet a moins de dix ans — les enfants ne tiennent pas en place, et c’est très bien ainsi.',
      formules: [
        { nom: 'Portrait, format 30 × 40', prix: '480 €' },
        { nom: 'Portrait, format 50 × 65', prix: '780 €' },
        { nom: 'Scène ou groupe', prix: 'sur devis' },
      ],
      note: 'Encadrement sous verre antireflet en supplément. Envoi soigné dans toute la France.',
      contactTitre: 'Écrire à l’atelier',
      email: 'atelier@elisemartin.example',
      telephone: '02 00 00 00 00',
      adresse: '9 rue des Grands-Augustins\n75006 Paris',
    },
    footer: { baseline: 'Fusain sur papier — Paris', droits: 'Toutes les œuvres sont protégées.' },
  },
  en: {
    meta: {
      title: 'Charcoal artist template — Élise Martin | Studio Caducée',
      description:
        'Example website for a charcoal artist: gallery, method, studio and commissions. A Studio Caducée template drawn from the 1940s.',
    },
    demoLabel: 'Charcoal artist',
    nav: {
      galerie: 'Gallery',
      fusain: 'Charcoal',
      atelier: 'The studio',
      commandes: 'Commissions',
    },
    hero: {
      kicker: 'Charcoal on paper — since 1998',
      titre: 'Élise Martin',
      sousTitre: 'Black, and everything inside it',
      lede:
        'I draw in charcoal, by hand, on papers I choose one sheet at a time. Faces, scenes, the occasional bouquet. Everything that, back in the forties, would have been worth stopping for.',
      ctaGalerie: 'See the gallery',
      ctaCommande: 'Commission a portrait',
      tempo: ['Charcoal', 'Paper', 'Patience'],
      photoAlt: 'Élise Martin in her Paris studio',
      photoLegende: 'Élise Martin, at the drawing table.',
    },
    galerie: {
      kicker: 'The gallery',
      titre: 'Four sheets',
      lede:
        'Each drawing is a one-off, signed and dated. Formats vary with the subject — a portrait does not sit the way a cabaret scene does.',
      oeuvres: [
        {
          fichier: 'portrait-de-femme.webp',
          titre: 'Portrait of a woman',
          annee: '1947',
          prix: '1 400 €',
          technique: 'Charcoal and stump on tissue paper — 32 × 48 cm',
          note: 'The hat sets the tone: she knows she is being looked at, and it amuses her.',
        },
        {
          fichier: 'jazz-at-cabaret.webp',
          titre: 'Cabaret, second set',
          annee: '1949',
          prix: '1 850 €',
          technique: 'Charcoal on heavy paper — 60 × 34 cm',
          note: 'The smoke took me longer than the musicians did.',
        },
        {
          fichier: 'chat-siamois.webp',
          titre: 'The chase',
          annee: '1951',
          prix: '1 200 €',
          technique: 'Charcoal and white chalk — 52 × 30 cm',
          note: 'A Siamese, a mouse, and an ending I chose not to draw.',
        },
        {
          fichier: 'roses.webp',
          titre: 'Roses in the parlour',
          annee: '1953',
          prix: '2 100 €',
          technique: 'Charcoal heightened with pastel — 58 × 32 cm',
          note: 'The one drawing where I gave in to colour. Once is enough.',
        },
      ],
      stylePrefix: 'Style',
      mentionCouleur: 'The only work in colour',
      indiceCouleur: 'Come closer: the colour returns.',
    },
    fusain: {
      kicker: 'Charcoal',
      titre: 'A stick of burnt willow, and nothing else',
      texte:
        'Charcoal forgives very little. It spreads, it smudges, it refuses the detail you try to force out of it. That is exactly why it suits faces: it makes you choose what matters, and leave the rest in shadow.',
      etapes: [
        { titre: 'The line', desc: 'Set the structure in a few gestures, fixing nothing yet.' },
        { titre: 'The stump', desc: 'Finger, cloth, breadcrumb. This is where volume appears.' },
        { titre: 'The white', desc: 'Take the light back with a kneaded eraser, like carving.' },
        { titre: 'The fixative', desc: 'One light pass, from a distance. Too close and it all flattens.' },
      ],
    },
    atelier: {
      kicker: 'The studio',
      titre: 'A table, a lamp, a record player',
      texte:
        'I work in the morning, while the light is still cold, with swing playing — Django, Grappelli, the pre-war sessions. It is not nostalgia: that rhythm holds your hand, it stops the line from setting.',
      citation: 'Charcoal cannot be corrected. It is begun again, or accepted.',
      signature: 'Élise',
      photoAlt: 'Galerie E. Martin, the full hang',
      photoLegende: 'The gallery, rue des Grands-Augustins.',
    },
    commandes: {
      kicker: 'Commissions',
      titre: 'Having a portrait made',
      texte:
        'I take on around ten commissioned portraits a year, from photographs or from life at the studio. Allow six weeks, a little more if the sitter is under ten — children will not sit still, and quite right too.',
      formules: [
        { nom: 'Portrait, 30 × 40 cm', prix: '480 €' },
        { nom: 'Portrait, 50 × 65 cm', prix: '780 €' },
        { nom: 'Scene or group', prix: 'on request' },
      ],
      note: 'Framing under anti-reflective glass at extra cost. Carefully packed shipping across France.',
      contactTitre: 'Write to the studio',
      email: 'atelier@elisemartin.example',
      telephone: '02 00 00 00 00',
      adresse: '9 rue des Grands-Augustins\n75006 Paris, France',
    },
    footer: { baseline: 'Charcoal on paper — Paris', droits: 'All works are protected.' },
  },
} as const satisfies Record<Lang, unknown>;
