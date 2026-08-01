import type { Lang } from '../lib/i18n';

/**
 * Textes de la démo « blog d'artiste » (Claire Aubry, peintre à Nantes).
 * Même forme dans les deux langues ; seuls les textes changent.
 */
export const artiste = {
  fr: {
    meta: {
      title: "Modèle blog d'artiste — Claire Aubry, peintre | Atelier Web",
      description:
        "Exemple de site blog-portfolio pour artiste : galerie d'œuvres, journal de création, expositions et contact. Un modèle Atelier Web mettant l'art en pleine lumière.",
    },
    demoLabel: "Blog & portfolio d'artiste",
    header: {
      ariaNav: 'Navigation du site',
      logo: { first: 'Claire', last: 'Aubry' },
      nav: {
        oeuvres: 'Œuvres',
        journal: 'Journal',
        expos: 'Expositions',
        contact: 'Contact',
      },
    },
    hero: {
      kicker: "Peinture — journal d'atelier",
      title1: 'Je peins ce que',
      title2: 'la lumière oublie.',
      lede: "Claire Aubry, peintre à Nantes. Ici, mes toiles, mes séries en cours et un journal d'atelier où j'écris ce que la peinture ne dit pas.",
      ctaOeuvres: 'Voir les œuvres',
      ctaJournal: 'Lire le journal ↓',
    },
    oeuvres: {
      kicker: 'Œuvres récentes',
      title: 'Séries 2024 — 2026',
      items: [
        { titre: 'Marée nº7', annee: '2026', technique: 'Huile sur toile — 90 × 120 cm', art: 'art-1' },
        { titre: 'La chambre jaune', annee: '2025', technique: 'Acrylique — 60 × 80 cm', art: 'art-2' },
        { titre: 'Verticales', annee: '2025', technique: 'Encre et pigments — 50 × 70 cm', art: 'art-3' },
        { titre: 'Ce qui reste', annee: '2024', technique: 'Technique mixte — 100 × 100 cm', art: 'art-4' },
      ],
    },
    journal: {
      kicker: 'Le journal',
      title: "Notes d'atelier",
      lire: 'Lire le billet →',
      billets: [
        {
          date: '18 juillet 2026',
          titre: 'Ce que la mer efface',
          extrait:
            'Trois semaines face à l’Atlantique pour préparer la série des Marées. Carnet de bord d’une résidence entre brume et lumière crue…',
          duree: '4 min de lecture',
        },
        {
          date: '2 juin 2026',
          titre: 'Pourquoi je peins en série',
          extrait:
            'Une toile seule ment souvent. C’est la répétition qui révèle — retour sur une obsession de peintre et sur ce qu’elle m’apprend…',
          duree: '6 min de lecture',
        },
        {
          date: '14 avril 2026',
          titre: 'Dans l’atelier, à 6 h du matin',
          extrait:
            'La lumière du petit matin change tout : les pigments, le silence, la patience. Visite guidée de mon rituel de travail…',
          duree: '3 min de lecture',
        },
      ],
    },
    expos: {
      kicker: 'Agenda',
      title: 'Expositions à venir',
      items: [
        {
          dates: '12 sept. — 24 oct. 2026',
          lieu: 'Galerie du Passage, Nantes',
          nom: '« Marées », exposition personnelle',
        },
        {
          dates: '5 — 8 nov. 2026',
          lieu: 'Grand Palais éphémère, Paris',
          nom: 'Salon Art Contempo, stand C12',
        },
      ],
    },
    contact: {
      title: 'Une toile vous parle ?',
      text: "Pour une acquisition, une commande ou une visite d'atelier, écrivez-moi — je réponds à chaque message.",
      email: 'atelier@claireaubry.example',
      note: 'Atelier ouvert sur rendez-vous, quartier de la Création, Nantes.',
    },
    footer: {
      copyright: '© 2026 Claire Aubry — Toutes les œuvres sont protégées',
    },
  },
  en: {
    meta: {
      title: 'Artist blog template — Claire Aubry, painter | Atelier Web',
      description:
        'Sample blog-portfolio website for an artist: a gallery of works, a studio journal, exhibitions, and contact. An Atelier Web template that puts the art in the spotlight.',
    },
    demoLabel: 'Artist blog & portfolio',
    header: {
      ariaNav: 'Site navigation',
      logo: { first: 'Claire', last: 'Aubry' },
      nav: {
        oeuvres: 'Works',
        journal: 'Journal',
        expos: 'Exhibitions',
        contact: 'Contact',
      },
    },
    hero: {
      kicker: 'Painting — a studio journal',
      title1: 'I paint what',
      title2: 'the light forgets.',
      lede: "Claire Aubry, painter in Nantes. Here you'll find my canvases, my ongoing series, and a studio journal where I write what painting leaves unsaid.",
      ctaOeuvres: 'See the works',
      ctaJournal: 'Read the journal ↓',
    },
    oeuvres: {
      kicker: 'Recent works',
      title: 'Series 2024 — 2026',
      items: [
        { titre: 'Tide No. 7', annee: '2026', technique: 'Oil on canvas — 90 × 120 cm', art: 'art-1' },
        { titre: 'The Yellow Room', annee: '2025', technique: 'Acrylic — 60 × 80 cm', art: 'art-2' },
        { titre: 'Verticals', annee: '2025', technique: 'Ink and pigments — 50 × 70 cm', art: 'art-3' },
        { titre: 'What Remains', annee: '2024', technique: 'Mixed media — 100 × 100 cm', art: 'art-4' },
      ],
    },
    journal: {
      kicker: 'The journal',
      title: 'Studio notes',
      lire: 'Read the post →',
      billets: [
        {
          date: 'July 18, 2026',
          titre: 'What the Sea Erases',
          extrait:
            'Three weeks facing the Atlantic, preparing the Tides series. The logbook of a residency spent between sea mist and raw light…',
          duree: '4 min read',
        },
        {
          date: 'June 2, 2026',
          titre: 'Why I Paint in Series',
          extrait:
            'A single canvas often lies. Repetition is what reveals — notes on a painter’s obsession and everything it keeps teaching me…',
          duree: '6 min read',
        },
        {
          date: 'April 14, 2026',
          titre: 'In the Studio at 6 a.m.',
          extrait:
            'Early-morning light changes everything: the pigments, the silence, the patience. A guided tour of my working ritual…',
          duree: '3 min read',
        },
      ],
    },
    expos: {
      kicker: 'Calendar',
      title: 'Upcoming exhibitions',
      items: [
        {
          dates: 'Sept 12 – Oct 24, 2026',
          lieu: 'Galerie du Passage, Nantes',
          nom: '“Tides,” a solo exhibition',
        },
        {
          dates: 'Nov 5 – 8, 2026',
          lieu: 'Grand Palais éphémère, Paris',
          nom: 'Salon Art Contempo, booth C12',
        },
      ],
    },
    contact: {
      title: 'Does a canvas speak to you?',
      text: 'For an acquisition, a commission, or a studio visit, write to me — I reply to every message.',
      email: 'atelier@claireaubry.example',
      note: 'Studio open by appointment, quartier de la Création, Nantes.',
    },
    footer: {
      copyright: '© 2026 Claire Aubry — All works protected',
    },
  },
} as const satisfies Record<Lang, unknown>;
