import type { Lang } from '../lib/i18n';

/**
 * Textes du modèle de démonstration « association sportive & culturelle »
 * (club fictif AS Les Cigales).
 */
export const association = {
  fr: {
    meta: {
      title: 'Modèle association sportive & culturelle — AS Les Cigales | Atelier Web',
      description:
        "Exemple de site vitrine pour association sportive et culturelle : activités, horaires, actualités et adhésion. Un modèle Atelier Web personnalisable aux couleurs de votre club.",
    },
    demoLabel: 'Association sportive & culturelle',
    header: {
      logoAria: 'AS Les Cigales — accueil',
      logoPrefix: 'AS',
      logoName: 'Les Cigales',
      navAria: 'Navigation du club',
      nav: {
        activites: 'Activités',
        actus: 'Actualités',
        infos: 'Infos pratiques',
      },
      join: 'Adhérer',
    },
    hero: {
      kicker: 'Sport & culture depuis 1987',
      titleIntro: "Le club où l'on",
      titleWord1: 'joue',
      titleJoin1: "où l'on",
      titleWord2: 'crée',
      titleJoin2: "où l'on",
      titleWord3: 'vibre',
      lede: "Football, basket, théâtre, chorale : l'AS Les Cigales réunit petits et grands autour du plaisir de faire ensemble. Rejoignez les 340 adhérents du club !",
      ctaPrimary: 'Devenir membre',
      ctaSecondary: 'Découvrir les activités',
    },
    activities: {
      title: 'Nos activités',
      lede: 'Une section pour chaque envie, encadrée par des animateurs passionnés.',
      items: [
        { icon: '⚽', name: 'Football', detail: 'Dès 6 ans — 4 équipes', jours: 'Mer. & Sam.' },
        { icon: '🏀', name: 'Basket', detail: 'Ados & adultes', jours: 'Mar. & Jeu.' },
        { icon: '🎭', name: 'Théâtre', detail: 'Ateliers tous niveaux', jours: 'Lun. & Mer.' },
        { icon: '🎶', name: 'Chorale', detail: 'Répertoire varié', jours: 'Ven.' },
      ],
    },
    news: {
      title: 'La vie du club',
      readMore: 'Lire la suite →',
      items: [
        {
          date: '12 juillet 2026',
          tag: 'Tournoi',
          titre: 'Les U11 champions du tournoi de la Métropole !',
          texte: 'Une finale haletante remportée aux tirs au but. Bravo aux petits Cigales et merci aux bénévoles.',
        },
        {
          date: '28 juin 2026',
          tag: 'Spectacle',
          titre: 'Le gala de fin d’année a fait salle comble',
          texte: 'Théâtre, chorale et danse réunis sur scène devant 300 spectateurs. Revivez la soirée en photos.',
        },
        {
          date: '15 juin 2026',
          tag: 'Inscriptions',
          titre: 'Les inscriptions 2026-2027 sont ouvertes',
          texte: 'Permanences tous les mercredis de 17 h à 19 h à la maison des associations. Tarifs inchangés !',
        },
      ],
    },
    join: {
      title: 'Envie de nous rejoindre ?',
      textBefore: "L'adhésion, c'est à partir de ",
      textStrong: '60 € par an',
      textAfter: ", et le premier cours d'essai est gratuit. On vous attend !",
      phone: '04 00 00 00 00',
    },
    infos: {
      title: 'Infos pratiques',
      address: {
        label: 'Où nous trouver',
        line1: 'Maison des associations',
        line2: '12 rue des Oliviers, 13000 Marseille',
      },
      hours: {
        label: 'Permanences',
        line1: 'Mercredi 17 h – 19 h',
        line2: 'Samedi 10 h – 12 h',
      },
      contact: {
        label: 'Nous écrire',
        email: 'contact@lescigales.example',
      },
    },
    footer: {
      copyright: '© 2026 AS Les Cigales — Association loi 1901',
    },
  },
  en: {
    meta: {
      title: 'Sports & cultural club template — AS Les Cigales | Atelier Web',
      description:
        "Sample website for a sports and cultural club: activities, schedules, news, and membership. An Atelier Web template ready to wear your club's colors.",
    },
    demoLabel: 'Sports & cultural club',
    header: {
      logoAria: 'AS Les Cigales — home',
      logoPrefix: 'AS',
      logoName: 'Les Cigales',
      navAria: 'Club navigation',
      nav: {
        activites: 'Activities',
        actus: 'News',
        infos: 'Practical info',
      },
      join: 'Join',
    },
    hero: {
      kicker: 'Sports & culture since 1987',
      titleIntro: 'The club where you',
      titleWord1: 'play',
      titleJoin1: 'where you',
      titleWord2: 'create',
      titleJoin2: 'where you',
      titleWord3: 'come alive',
      lede: "Soccer, basketball, theater, choir: AS Les Cigales brings kids and grown-ups together around the joy of doing things as a team. Come join the club's 340 members!",
      ctaPrimary: 'Become a member',
      ctaSecondary: 'Explore our activities',
    },
    activities: {
      title: 'Our activities',
      lede: 'A program for every passion, led by coaches who love what they do.',
      items: [
        { icon: '⚽', name: 'Soccer', detail: 'Ages 6 and up — 4 teams', jours: 'Wed. & Sat.' },
        { icon: '🏀', name: 'Basketball', detail: 'Teens & adults', jours: 'Tue. & Thu.' },
        { icon: '🎭', name: 'Theater', detail: 'Workshops for all levels', jours: 'Mon. & Wed.' },
        { icon: '🎶', name: 'Choir', detail: 'A wide-ranging repertoire', jours: 'Fri.' },
      ],
    },
    news: {
      title: 'Club life',
      readMore: 'Read more →',
      items: [
        {
          date: 'July 12, 2026',
          tag: 'Tournament',
          titre: 'Our U11s crowned champions of the Métropole tournament!',
          texte: 'A nail-biting final won on penalty kicks. Well done to our young Cigales, and thank you to the volunteers.',
        },
        {
          date: 'June 28, 2026',
          tag: 'Show',
          titre: 'Our end-of-year gala played to a full house',
          texte: 'Theater, choir, and dance shared the stage in front of 300 spectators. Relive the evening in photos.',
        },
        {
          date: 'June 15, 2026',
          tag: 'Registration',
          titre: 'Registration for 2026-2027 is now open',
          texte: 'Stop by any Wednesday from 5 to 7 p.m. at the Maison des associations. Prices unchanged!',
        },
      ],
    },
    join: {
      title: 'Ready to join us?',
      textBefore: 'Membership starts at ',
      textStrong: '€60 a year',
      textAfter: ", and your first trial session is free. We can't wait to see you!",
      phone: '04 00 00 00 00',
    },
    infos: {
      title: 'Practical info',
      address: {
        label: 'Where to find us',
        line1: 'Maison des associations',
        line2: '12 rue des Oliviers, 13000 Marseille',
      },
      hours: {
        label: 'Office hours',
        line1: 'Wednesday 5 – 7 p.m.',
        line2: 'Saturday 10 a.m. – noon',
      },
      contact: {
        label: 'Write to us',
        email: 'contact@lescigales.example',
      },
    },
    footer: {
      copyright: '© 2026 AS Les Cigales — Registered French nonprofit',
    },
  },
} as const satisfies Record<Lang, unknown>;
