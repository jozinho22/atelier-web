import type { Lang } from '../lib/i18n';

/**
 * Textes de la démo « Beauté & bien-être » (institut fictif L'Écrin de Soi).
 * Même forme exacte dans les deux langues.
 */
export const esthetique = {
  fr: {
    meta: {
      title: "Modèle beauté & bien-être — L'Écrin de Soi | Atelier Web",
      description:
        "Exemple de site vitrine pour institut de beauté : soins, tarifs, horaires et réservation par téléphone. Un modèle Atelier Web doux et raffiné.",
    },
    demoBar: 'Beauté & bien-être',
    header: {
      logoAria: "L'Écrin de Soi — accueil",
      navAria: 'Navigation du site',
      nav: {
        soins: 'Les soins',
        institut: "L'institut",
        infos: 'Horaires',
      },
      reserver: 'Réserver',
    },
    hero: {
      kicker: 'Institut de beauté — Annecy',
      titleLine1: 'Prendre soin de soi',
      titleLine2: 'est un art délicat.',
      lede: "Dans un écrin de douceur au cœur d'Annecy, Aurélie vous accueille pour des soins sur mesure, aux gestes précis et aux produits naturels.",
      cta: 'Réserver un soin',
      lien: 'Découvrir la carte des soins',
    },
    soins: {
      kicker: 'La carte des soins',
      title: 'Des rituels pensés pour vous',
      items: [
        {
          name: 'Soin visage signature',
          duree: '1 h 15',
          prix: '68 €',
          desc: 'Nettoyage, gommage, modelage et masque adaptés à votre peau.',
        },
        {
          name: 'Modelage relaxant',
          duree: '1 h',
          prix: '75 €',
          desc: 'Un moment suspendu, aux huiles chaudes, pour tout relâcher.',
        },
        {
          name: 'Beauté du regard',
          duree: '45 min',
          prix: '42 €',
          desc: 'Teinture, rehaussement de cils et restructuration des sourcils.',
        },
        {
          name: 'Manucure douceur',
          duree: '45 min',
          prix: '39 €',
          desc: 'Soin des mains complet, pose de vernis classique ou semi-permanent.',
        },
      ],
      note: "Carte complète disponible à l'institut — chèques cadeaux sur demande.",
    },
    institut: {
      kicker: "L'institut",
      title: 'Un lieu pensé comme une parenthèse',
      texte:
        "Diplômée en esthétique et cosmétique depuis douze ans, j'ai imaginé L'Écrin de Soi comme un refuge : lumière tamisée, matières naturelles, silence feutré. Ici, chaque soin commence par une écoute et se termine par un thé.",
      signature: 'Aurélie',
      photoAlt: "Aurélie, esthéticienne, à son poste de travail à L'Écrin de Soi",
    },
    temoignages: {
      kicker: 'Elles en parlent',
      title: 'Des instants qui laissent une trace',
      items: [
        {
          texte:
            '« Une parenthèse hors du temps. Aurélie a des mains en or et l’institut est d’une douceur rare. »',
          nom: 'Camille R.',
        },
        {
          texte:
            '« Enfin un institut où l’on se sent écoutée. Le soin visage signature est une merveille. »',
          nom: 'Nadia B.',
        },
      ],
    },
    infos: {
      kicker: 'Horaires',
      title: 'Sur rendez-vous',
      horaires: [
        { jours: 'Mardi – Vendredi', heures: '9 h 30 – 19 h' },
        { jours: 'Samedi', heures: '9 h – 17 h' },
        { jours: 'Dimanche – Lundi', heures: 'Fermé' },
      ],
      reservation: {
        title: 'Réservez votre moment',
        texte: 'Par téléphone, tout simplement — je vous conseille le soin qui vous ira.',
        tel: '05 00 00 00 00',
        adresse: '8 rue du Lac, 74000 Annecy',
        email: 'bonjour@ecrindesoi.example',
      },
    },
    footer: {
      copyright: "© 2026 L'Écrin de Soi — Institut de beauté",
    },
  },
  en: {
    meta: {
      title: "Beauty & wellness template — L'Écrin de Soi | Atelier Web",
      description:
        'A sample website for a beauty institute: treatments, prices, hours, and booking by phone. A soft, refined template by Atelier Web.',
    },
    demoBar: 'Beauty & wellness',
    header: {
      logoAria: "L'Écrin de Soi — home",
      navAria: 'Site navigation',
      nav: {
        soins: 'Treatments',
        institut: 'The institute',
        infos: 'Hours',
      },
      reserver: 'Book',
    },
    hero: {
      kicker: 'Beauty institute — Annecy',
      titleLine1: 'Taking care of yourself',
      titleLine2: 'is a delicate art.',
      lede: 'In a haven of softness in the heart of Annecy, Aurélie welcomes you for tailored treatments, with precise techniques and natural products.',
      cta: 'Book a treatment',
      lien: 'Browse the treatment menu',
    },
    soins: {
      kicker: 'The treatment menu',
      title: 'Rituals designed around you',
      items: [
        {
          name: 'Signature facial',
          duree: '1 hr 15',
          prix: '68 €',
          desc: 'Cleansing, exfoliation, massage, and a mask tailored to your skin.',
        },
        {
          name: 'Relaxing massage',
          duree: '1 hr',
          prix: '75 €',
          desc: 'A moment out of time, with warm oils, to let everything go.',
        },
        {
          name: 'Eyes & brows',
          duree: '45 min',
          prix: '42 €',
          desc: 'Lash tinting, lash lift, and brow reshaping.',
        },
        {
          name: 'Gentle manicure',
          duree: '45 min',
          prix: '39 €',
          desc: 'A complete hand treatment, with classic or gel polish.',
        },
      ],
      note: 'Full menu available at the institute — gift certificates upon request.',
    },
    institut: {
      kicker: 'The institute',
      title: 'A place designed as a gentle pause',
      texte:
        "Certified in esthetics and cosmetics for twelve years, I imagined L'Écrin de Soi as a refuge: soft lighting, natural materials, a hushed calm. Here, every treatment begins with listening and ends with a cup of tea.",
      signature: 'Aurélie',
      photoAlt: "Aurélie, beauty therapist, at her workstation at L'Écrin de Soi",
    },
    temoignages: {
      kicker: 'In their words',
      title: 'Moments that stay with you',
      items: [
        {
          texte:
            '“A pause outside of time. Aurélie has golden hands, and the institute is filled with a rare softness.”',
          nom: 'Camille R.',
        },
        {
          texte:
            '“Finally, a place where you feel truly heard. The signature facial is pure wonder.”',
          nom: 'Nadia B.',
        },
      ],
    },
    infos: {
      kicker: 'Hours',
      title: 'By appointment',
      horaires: [
        { jours: 'Tuesday – Friday', heures: '9:30 am – 7 pm' },
        { jours: 'Saturday', heures: '9 am – 5 pm' },
        { jours: 'Sunday – Monday', heures: 'Closed' },
      ],
      reservation: {
        title: 'Book your moment',
        texte: "Simply by phone — I'll help you choose the treatment that suits you best.",
        tel: '05 00 00 00 00',
        adresse: '8 rue du Lac, 74000 Annecy',
        email: 'bonjour@ecrindesoi.example',
      },
    },
    footer: {
      copyright: "© 2026 L'Écrin de Soi — Beauty institute",
    },
  },
} as const satisfies Record<Lang, unknown>;
