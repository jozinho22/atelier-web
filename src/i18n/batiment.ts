import type { Lang } from '../lib/i18n';

/**
 * Textes de la démo « Métiers du bâtiment » (Moreau Rénovation).
 * Même forme exacte dans les deux langues.
 */
export const batiment = {
  fr: {
    meta: {
      title: 'Modèle métiers du bâtiment — Moreau Rénovation | Studio Caducée',
      description:
        "Exemple de site vitrine pour artisan du bâtiment : services, réalisations, zone d'intervention et demande de devis. Un modèle Studio Caducée robuste et efficace.",
    },
    demoLabel: 'Métiers du bâtiment',
    header: {
      logoAria: 'Moreau Rénovation — accueil',
      logoName: 'MOREAU',
      logoSub: 'Rénovation',
      navAria: 'Navigation du site',
      nav: {
        services: 'Services',
        realisations: 'Réalisations',
        zone: "Zone d'intervention",
      },
      cta: 'Devis gratuit',
    },
    hero: {
      kicker: 'Maçonnerie — Rénovation — Finitions · Maine-et-Loire',
      title: {
        line1: 'Du solide,',
        line2Before: 'du ',
        line2Accent: 'propre',
        line2After: ',',
        line3: 'dans les délais.',
      },
      lede: "Artisan maçon depuis 2004, j'interviens autour de Cholet pour vos travaux de rénovation, d'extension et de gros œuvre. Devis clair, chantier suivi, travail garanti.",
      ctaDevis: 'Demander un devis',
      ctaChantiers: 'Voir les chantiers',
      badgesAria: 'Garanties',
      badges: ['Garantie décennale', 'Assurance Pro BTP', 'RGE Qualibat'],
    },
    chiffres: {
      aria: 'Chiffres clés',
      items: [
        { valeur: '22', unite: 'ans', label: 'd’expérience' },
        { valeur: '340', unite: '+', label: 'chantiers livrés' },
        { valeur: '30', unite: 'km', label: 'zone d’intervention' },
        { valeur: '10', unite: 'ans', label: 'garantie décennale' },
      ],
    },
    services: {
      eyebrow: 'Savoir-faire',
      title: 'Quatre métiers, un seul artisan',
      items: [
        {
          icon: '🧱',
          name: 'Maçonnerie',
          desc: 'Murs, extensions, ouvertures : le gros œuvre dans les règles de l’art.',
        },
        {
          icon: '🛠️',
          name: 'Rénovation complète',
          desc: 'De la démolition aux finitions, un seul interlocuteur pour tout le chantier.',
        },
        {
          icon: '🎨',
          name: 'Plâtrerie & peinture',
          desc: 'Cloisons, enduits, peintures : des finitions nettes qui durent.',
        },
        {
          icon: '◼️',
          name: 'Carrelage',
          desc: 'Pose de carrelage et faïence, intérieur comme extérieur.',
        },
      ],
    },
    realisations: {
      eyebrow: 'Réalisations',
      title: 'Des chantiers qui parlent pour nous',
      items: [
        { tag: 'Rénovation', titre: 'Longère rénovée de A à Z', lieu: 'Cholet', duree: '4 mois' },
        {
          tag: 'Extension',
          titre: 'Extension de 35 m² avec baie vitrée',
          lieu: 'Beaupréau',
          duree: '9 semaines',
        },
        {
          tag: 'Salle de bain',
          titre: 'Salle de bain clé en main',
          lieu: 'Chemillé',
          duree: '3 semaines',
        },
      ],
    },
    zone: {
      eyebrow: "Zone d'intervention",
      title: 'Autour de Cholet, dans un rayon de 30 km',
      texte:
        'Cholet, Beaupréau-en-Mauges, Chemillé-en-Anjou, Sèvremoine, Les Herbiers… Vous êtes plus loin ? Appelez quand même, on trouve toujours une solution.',
      villes: ['Cholet', 'Beaupréau', 'Chemillé', 'Sèvremoine', 'Les Herbiers', 'Mortagne'],
    },
    devis: {
      title: 'Un projet ? Parlons-en sur place.',
      texte:
        'Je me déplace gratuitement pour évaluer vos travaux. Devis détaillé sous 5 jours, sans engagement.',
      phone: '02 00 00 00 00',
      email: 'Écrire un e-mail',
      note: 'Du lundi au vendredi, 7 h 30 – 18 h. Réponse sous 24 h.',
    },
    footer: {
      legal: '© 2026 Moreau Rénovation — SIRET 000 000 000 00000',
    },
  },
  en: {
    meta: {
      title: 'Building trades template — Moreau Rénovation | Studio Caducée',
      description:
        'Sample website for a building contractor: services, past projects, service area, and quote requests. A sturdy, effective Studio Caducée template.',
    },
    demoLabel: 'Building trades',
    header: {
      logoAria: 'Moreau Rénovation — home',
      logoName: 'MOREAU',
      logoSub: 'Rénovation',
      navAria: 'Site navigation',
      nav: {
        services: 'Services',
        realisations: 'Projects',
        zone: 'Service area',
      },
      cta: 'Free quote',
    },
    hero: {
      kicker: 'Masonry — Renovation — Finishing work · Maine-et-Loire',
      title: {
        line1: 'Solid work,',
        line2Before: '',
        line2Accent: 'clean',
        line2After: ' finish,',
        line3: 'on schedule.',
      },
      lede: "Working as a mason since 2004, I take on renovation, extension, and structural projects around Cholet. A clear quote, a well-run site, and work that's guaranteed.",
      ctaDevis: 'Request a quote',
      ctaChantiers: 'See the projects',
      badgesAria: 'Guarantees',
      badges: ['10-year warranty', 'Assurance Pro BTP', 'RGE Qualibat'],
    },
    chiffres: {
      aria: 'Key figures',
      items: [
        { valeur: '22', unite: 'yrs', label: 'of experience' },
        { valeur: '340', unite: '+', label: 'projects delivered' },
        { valeur: '30', unite: 'km', label: 'service area' },
        { valeur: '10', unite: 'yrs', label: 'structural warranty' },
      ],
    },
    services: {
      eyebrow: 'Expertise',
      title: 'Four trades, one craftsman',
      items: [
        {
          icon: '🧱',
          name: 'Masonry',
          desc: 'Walls, extensions, openings: structural work done by the book.',
        },
        {
          icon: '🛠️',
          name: 'Full renovation',
          desc: 'From demolition to final touches, one point of contact for the whole job.',
        },
        {
          icon: '🎨',
          name: 'Plastering & painting',
          desc: 'Partitions, plasterwork, paint: crisp finishes that last.',
        },
        {
          icon: '◼️',
          name: 'Tiling',
          desc: 'Tile and ceramic installation, indoors and out.',
        },
      ],
    },
    realisations: {
      eyebrow: 'Past projects',
      title: 'Projects that do the talking',
      items: [
        {
          tag: 'Renovation',
          titre: 'Farmhouse renovated from A to Z',
          lieu: 'Cholet',
          duree: '4 months',
        },
        {
          tag: 'Extension',
          titre: '35 m² extension with a picture window',
          lieu: 'Beaupréau',
          duree: '9 weeks',
        },
        {
          tag: 'Bathroom',
          titre: 'Turnkey bathroom remodel',
          lieu: 'Chemillé',
          duree: '3 weeks',
        },
      ],
    },
    zone: {
      eyebrow: 'Service area',
      title: 'Around Cholet, within a 30 km radius',
      texte:
        'Cholet, Beaupréau-en-Mauges, Chemillé-en-Anjou, Sèvremoine, Les Herbiers… A little farther out? Call anyway — we always find a way.',
      villes: ['Cholet', 'Beaupréau', 'Chemillé', 'Sèvremoine', 'Les Herbiers', 'Mortagne'],
    },
    devis: {
      title: "Have a project? Let's talk it over on site.",
      texte:
        'I come out free of charge to size up your project. Detailed quote within 5 days, no strings attached.',
      phone: '02 00 00 00 00',
      email: 'Send an email',
      note: 'Monday to Friday, 7:30 AM – 6 PM. Replies within 24 hours.',
    },
    footer: {
      legal: '© 2026 Moreau Rénovation — SIRET 000 000 000 00000',
    },
  },
} as const satisfies Record<Lang, unknown>;
