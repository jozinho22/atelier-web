import type { Lang } from '../lib/i18n';

/**
 * Modèle « Souffle » — studio de yoga fictif.
 * Site entièrement en noir et blanc : le Yin et le Yang, l'ombre et la
 * lumière. Aucune couleur, jamais — c'est le parti pris du modèle.
 */
export const yoga = {
  fr: {
    title: 'Modèle cours de yoga — Souffle | Atelier Web',
    description:
      "Exemple de site vitrine pour un studio de yoga : cours, postures animées, professeure et infos pratiques. Un modèle Atelier Web en noir et blanc, tout en lenteur.",
    demoLabel: 'Cours de yoga',
    nav: {
      flow: 'Le flow',
      cours: 'Les cours',
      prof: 'La professeure',
      infos: 'Infos',
      cta: 'Réserver un cours',
    },
    hero: {
      kicker: 'Studio de yoga — Bandol',
      titleLine: 'Respirez.',
      titleEm: 'Le reste peut attendre.',
      lede:
        'Un tapis, une terrasse face à la mer, et une heure rien qu’à vous. Ici, on ne cherche pas la performance : on cherche le relâchement.',
      ctaPrimaire: 'Réserver un cours',
      ctaSecondaire: 'Voir les postures',
      /** Deux mots opposés qui se répondent, comme le Yin et le Yang. */
      duo: [
        { yin: 'Inspirer', yang: 'Expirer' },
        { yin: 'Tenir', yang: 'Lâcher' },
        { yin: 'Ombre', yang: 'Lumière' },
      ],
    },
    flow: {
      eyebrow: 'Le flow',
      title: 'Huit postures, un seul souffle',
      lede:
        'Chaque cours se déroule comme une phrase : une posture appelle la suivante, sans à-coup. Les vidéos s’enchaînent d’elles-mêmes — choisissez une posture pour y aller directement.',
      suspendre: 'Suspendre',
      reprendre: 'Reprendre',
      postures: [
        { nom: 'La Montagne', sanskrit: 'Tadasana', intention: 'S’enraciner, et se souvenir de sa hauteur.' },
        { nom: 'Le Guerrier', sanskrit: 'Virabhadrasana', intention: 'Tenir sans se crisper. La force tranquille.' },
        { nom: 'Le Triangle', sanskrit: 'Trikonasana', intention: 'Ouvrir le flanc, laisser passer l’air.' },
        { nom: 'Le Chien tête en bas', sanskrit: 'Adho Mukha Svanasana', intention: 'Renverser le regard, allonger le dos.' },
        { nom: 'La Pince assise', sanskrit: 'Paschimottanasana', intention: 'Se replier vers l’intérieur, sans forcer.' },
        { nom: 'L’Enfant', sanskrit: 'Balasana', intention: 'Le repos qui n’a rien à prouver.' },
        { nom: 'Le Cobra', sanskrit: 'Bhujangasana', intention: 'Ouvrir la poitrine, relever le cœur.' },
        { nom: 'Le Pont', sanskrit: 'Setu Bandha', intention: 'Relier la terre au ciel, un instant.' },
      ],
    },
    cours: {
      eyebrow: 'Les cours',
      title: 'Quatre façons de venir sur le tapis',
      items: [
        { nom: 'Vinyasa', duree: '1 h 15', niveau: 'Tous niveaux', desc: 'Un enchaînement fluide, rythmé par la respiration. On transpire un peu, on sourit beaucoup.' },
        { nom: 'Yin', duree: '1 h', niveau: 'Débutants bienvenus', desc: 'Des postures tenues longuement, au sol. Le travail se fait tout seul, dans l’immobilité.' },
        { nom: 'Hatha', duree: '1 h 15', niveau: 'Tous niveaux', desc: 'Le socle : des postures posées, tenues, comprises. Idéal pour construire sa pratique.' },
        { nom: 'Souffle & méditation', duree: '45 min', niveau: 'Tous niveaux', desc: 'Pranayama et assise silencieuse. Rien à faire, juste être là.' },
      ],
      horairesTitre: 'La semaine',
      horaires: [
        { jour: 'Lundi', cours: 'Yin', heure: '18 h 30' },
        { jour: 'Mardi', cours: 'Vinyasa', heure: '7 h 15 · 19 h' },
        { jour: 'Mercredi', cours: 'Hatha', heure: '18 h 30' },
        { jour: 'Jeudi', cours: 'Vinyasa', heure: '7 h 15 · 19 h' },
        { jour: 'Vendredi', cours: 'Souffle & méditation', heure: '12 h 30' },
        { jour: 'Samedi', cours: 'Vinyasa · terrasse', heure: '9 h' },
      ],
    },
    prof: {
      eyebrow: 'La professeure',
      title: 'Léa Vasseur',
      texte:
        'Formée à Mysore puis à Lisbonne, Léa enseigne depuis onze ans. Elle a longtemps couru après la posture parfaite avant de comprendre que ce n’était pas le sujet. Ce qu’elle transmet aujourd’hui tient en une phrase : votre corps sait, il faut juste cesser de lui couper la parole.',
      citation: 'On ne réussit pas une posture. On l’habite.',
      signature: 'Léa',
    },
    infos: {
      eyebrow: 'Infos pratiques',
      title: 'Venir pratiquer',
      tarifsTitre: 'Tarifs',
      tarifs: [
        { nom: 'Cours à l’unité', prix: '18 €' },
        { nom: 'Carte 10 cours', prix: '150 €' },
        { nom: 'Illimité, au mois', prix: '95 €' },
        { nom: 'Premier cours', prix: 'offert' },
      ],
      lieuTitre: 'Le studio',
      adresse: '14 chemin des Oliviers\n83150 Bandol',
      lieuNote: 'Tapis, briques et sangles fournis. Venez comme vous êtes, arrivez cinq minutes avant.',
      contactTitre: 'Réserver',
      contactNote: 'Par téléphone ou par message — Léa répond elle-même, dans la journée.',
      telephone: '04 00 00 00 00',
      email: 'bonjour@souffle.example',
    },
    footer: {
      baseline: 'Studio de yoga — Bandol',
      droits: 'Tous droits réservés.',
    },
  },
  en: {
    title: 'Yoga class template — Souffle | Atelier Web',
    description:
      'Example website for a yoga studio: classes, animated postures, teacher and practical details. An Atelier Web template in black and white, all about slowing down.',
    demoLabel: 'Yoga classes',
    nav: {
      flow: 'The flow',
      cours: 'Classes',
      prof: 'The teacher',
      infos: 'Details',
      cta: 'Book a class',
    },
    hero: {
      kicker: 'Yoga studio — Bandol, France',
      titleLine: 'Breathe.',
      titleEm: 'The rest can wait.',
      lede:
        'A mat, a terrace facing the sea, and one hour entirely your own. This is not about performance — it is about letting go.',
      ctaPrimaire: 'Book a class',
      ctaSecondaire: 'See the postures',
      duo: [
        { yin: 'Inhale', yang: 'Exhale' },
        { yin: 'Hold', yang: 'Release' },
        { yin: 'Shadow', yang: 'Light' },
      ],
    },
    flow: {
      eyebrow: 'The flow',
      title: 'Eight postures, one single breath',
      lede:
        'Every class unfolds like a sentence: one posture calls the next, without a jolt. The videos play on by themselves — pick a posture to jump straight to it.',
      suspendre: 'Pause',
      reprendre: 'Resume',
      postures: [
        { nom: 'Mountain', sanskrit: 'Tadasana', intention: 'Take root, and remember your own height.' },
        { nom: 'Warrior', sanskrit: 'Virabhadrasana', intention: 'Hold without tensing. Quiet strength.' },
        { nom: 'Triangle', sanskrit: 'Trikonasana', intention: 'Open the side body, let the air through.' },
        { nom: 'Downward Dog', sanskrit: 'Adho Mukha Svanasana', intention: 'Turn your gaze over, lengthen the spine.' },
        { nom: 'Seated Forward Fold', sanskrit: 'Paschimottanasana', intention: 'Fold inward, without forcing.' },
        { nom: 'Child’s Pose', sanskrit: 'Balasana', intention: 'The rest that has nothing to prove.' },
        { nom: 'Cobra', sanskrit: 'Bhujangasana', intention: 'Open the chest, lift the heart.' },
        { nom: 'Bridge', sanskrit: 'Setu Bandha', intention: 'Link earth to sky, for a moment.' },
      ],
    },
    cours: {
      eyebrow: 'Classes',
      title: 'Four ways onto the mat',
      items: [
        { nom: 'Vinyasa', duree: '1 hr 15', niveau: 'All levels', desc: 'A flowing sequence, paced by the breath. A little sweat, a lot of smiling.' },
        { nom: 'Yin', duree: '1 hr', niveau: 'Beginners welcome', desc: 'Long-held postures on the floor. The work happens on its own, in stillness.' },
        { nom: 'Hatha', duree: '1 hr 15', niveau: 'All levels', desc: 'The foundation: postures set, held, understood. Ideal for building a practice.' },
        { nom: 'Breath & meditation', duree: '45 min', niveau: 'All levels', desc: 'Pranayama and silent sitting. Nothing to do, just be here.' },
      ],
      horairesTitre: 'The week',
      horaires: [
        { jour: 'Monday', cours: 'Yin', heure: '6:30 pm' },
        { jour: 'Tuesday', cours: 'Vinyasa', heure: '7:15 am · 7 pm' },
        { jour: 'Wednesday', cours: 'Hatha', heure: '6:30 pm' },
        { jour: 'Thursday', cours: 'Vinyasa', heure: '7:15 am · 7 pm' },
        { jour: 'Friday', cours: 'Breath & meditation', heure: '12:30 pm' },
        { jour: 'Saturday', cours: 'Vinyasa · terrace', heure: '9 am' },
      ],
    },
    prof: {
      eyebrow: 'The teacher',
      title: 'Léa Vasseur',
      texte:
        'Trained in Mysore and then Lisbon, Léa has been teaching for eleven years. She spent a long time chasing the perfect posture before realising that was never the point. What she passes on today fits in one sentence: your body knows — you just have to stop interrupting it.',
      citation: 'You do not nail a posture. You inhabit it.',
      signature: 'Léa',
    },
    infos: {
      eyebrow: 'Practical details',
      title: 'Coming to practise',
      tarifsTitre: 'Prices',
      tarifs: [
        { nom: 'Single class', prix: '18 €' },
        { nom: '10-class pass', prix: '150 €' },
        { nom: 'Unlimited, monthly', prix: '95 €' },
        { nom: 'First class', prix: 'free' },
      ],
      lieuTitre: 'The studio',
      adresse: '14 chemin des Oliviers\n83150 Bandol, France',
      lieuNote: 'Mats, blocks and straps provided. Come as you are, arrive five minutes early.',
      contactTitre: 'Booking',
      contactNote: 'By phone or message — Léa answers herself, the same day.',
      telephone: '04 00 00 00 00',
      email: 'bonjour@souffle.example',
    },
    footer: {
      baseline: 'Yoga studio — Bandol, France',
      droits: 'All rights reserved.',
    },
  },
} as const satisfies Record<Lang, unknown>;
