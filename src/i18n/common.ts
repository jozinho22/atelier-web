import type { Lang } from '../lib/i18n';

/**
 * Textes partagés entre toutes les pages : en-tête, pied de page, bandeau
 * des démonstrations. Les textes propres à chaque page vivent dans leur
 * propre fichier (src/i18n/<page>.ts).
 */
export const common = {
  fr: {
    nav: {
      services: 'Services',
      modeles: 'Modèles',
      methode: 'Le déroulé',
      tarifs: 'Tarifs',
      cta: 'Discutons-en',
    },
    footer: {
      tagline: 'Sites vitrines soignés pour artisans, indépendants et associations.',
      modelsHeading: 'Modèles vitrines',
      surMesureHeading: 'Pack Sur mesure',
      signatureHeading: 'Pack Signature',
      contactHeading: 'Contact',
      models: {
        restaurant: 'Restaurant italien',
        yoga: 'Cours de yoga',
        artiste: 'Dessinatrice au fusain',
        esthetique: 'Beauté & bien-être',
        batiment: 'Métiers du bâtiment',
        association: 'Association sportive & culturelle',
      },
      packs: {
        salonDeThe: 'The Sugar & Steam Diner',
        hotel: 'Le Grand Hôtel de Bretagne',
        golf: 'Golf de Roc’h Avel',
        equestre: 'Haras du Clos-Ferrand',
      },
      legal: 'Mentions légales',
      cgv: 'Conditions générales de vente',
      equipe: 'Qui sommes-nous ?',
      rights: 'Tous droits réservés.',
    },
    /**
     * Navigation des pages juridiques. Elles n'ont ni menu ni ancre : sans ces
     * deux liens, le visiteur qui y arrive depuis un moteur de recherche n'a
     * que le bouton « précédent » pour en sortir.
     */
    juridique: {
      accueil: 'Retour à l’accueil',
      versCgv: 'Voir les conditions générales de vente',
      versLegal: 'Voir les mentions légales',
    },
    demo: {
      label: 'Modèle de démonstration',
      cta: 'Je veux ce site',
      madeBy: 'Site réalisé par',
    },
  },
  en: {
    nav: {
      services: 'Services',
      modeles: 'Templates',
      methode: 'Timeline',
      tarifs: 'Pricing',
      cta: "Let's talk",
    },
    footer: {
      tagline: 'Polished websites for artisans, freelancers and local clubs.',
      modelsHeading: 'Showcase templates',
      surMesureHeading: 'Tailored pack',
      signatureHeading: 'Signature pack',
      contactHeading: 'Contact',
      models: {
        restaurant: 'Italian restaurant',
        yoga: 'Yoga classes',
        artiste: 'Charcoal artist',
        esthetique: 'Beauty & wellness',
        batiment: 'Building trades',
        association: 'Sports & cultural club',
      },
      packs: {
        salonDeThe: 'The Sugar & Steam Diner',
        hotel: 'Le Grand Hôtel de Bretagne',
        golf: 'Roc’h Avel Golf Club',
        equestre: 'Haras du Clos-Ferrand',
      },
      legal: 'Legal notice',
      cgv: 'Terms and conditions of sale',
      equipe: 'Who are we?',
      rights: 'All rights reserved.',
    },
    juridique: {
      accueil: 'Back to home',
      versCgv: 'Read the terms and conditions of sale',
      versLegal: 'Read the legal notice',
    },
    demo: {
      label: 'Demo template',
      cta: 'I want this website',
      madeBy: 'Website by',
    },
  },
} as const satisfies Record<Lang, unknown>;
