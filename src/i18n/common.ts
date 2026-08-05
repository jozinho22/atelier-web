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
      modelsHeading: 'Modèles',
      contactHeading: 'Contact',
      models: {
        association: 'Association sportive & culturelle',
        batiment: 'Métiers du bâtiment',
        esthetique: 'Beauté & bien-être',
        artiste: 'Dessinatrice au fusain',
        yoga: 'Cours de yoga',
        restaurant: 'Restaurant italien',
      },
      legal: 'Mentions légales',
      rights: 'Tous droits réservés.',
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
      modelsHeading: 'Templates',
      contactHeading: 'Contact',
      models: {
        association: 'Sports & cultural club',
        batiment: 'Building trades',
        esthetique: 'Beauty & wellness',
        artiste: 'Charcoal artist',
        yoga: 'Yoga classes',
        restaurant: 'Italian restaurant',
      },
      legal: 'Legal notice',
      rights: 'All rights reserved.',
    },
    demo: {
      label: 'Demo template',
      cta: 'I want this website',
      madeBy: 'Website by',
    },
  },
} as const satisfies Record<Lang, unknown>;
