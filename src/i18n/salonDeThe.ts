import type { Lang } from '../lib/i18n';

/**
 * Textes de la démonstration « The Sugar & Steam Diner ».
 *
 * Le modèle vient du dépôt `modele-salon-de-the`, où il occupait cinq pages.
 * Ramené ici à une seule, il garde son décor — palette cerise et formica,
 * titres condensés, néon — et sa page d'accueil, vidéo comprise. Les liens qui
 * menaient aux autres pages sont devenus des ancres.
 *
 * ⚠️ DONNÉES FICTIVES : le salon, son adresse, ses prix et ses horaires sont
 * inventés pour la démonstration.
 *
 * La source était monolingue ; la version anglaise est écrite ici. Les prix
 * restent en euros dans les deux langues — c'est un salon normand.
 */
export const salonDeThe = {
  fr: {
    title: 'Salon de thé & pâtisserie à Cherbourg — The Sugar & Steam Diner',
    description:
      'Modèle de site pour salon de thé : 42 thés en vrac et pâtisseries maison dans un diner américain de 1954. Goûter, afternoon tea, brunch.',
    demoLabel: 'Salon de thé & pâtisserie',
    nav: {
      salon: 'Le salon',
      comptoir: 'Le comptoir',
      formules: 'Les formules',
      venir: 'Nous trouver',
      cta: 'Réserver',
    },
    hero: {
      ariaLabel: 'Bienvenue',
      lieu: 'Cherbourg-en-Cotentin · depuis 2019',
      titre: { ligne: 'Salon de thé', script: '& pâtisserie', lieu: 'dans un diner de 1954' },
      chapo:
        'Quarante-deux thés pesés en vrac, des pâtisseries faites le matin même et des milkshakes montés au batteur d’époque — à 4 minutes à pied du théâtre à l’italienne.',
      ctaCarte: 'Voir la carte',
      ctaReserver: 'Réserver une table',
      reperes: ['14 rue des Deux-Marées', 'Mardi – dimanche', 'Fait maison, tous les jours'],
      videoAlt: 'Visite du salon : la devanture, le comptoir et la salle',
    },
    chiffres: [
      { valeur: '42', libelle: 'thés pesés en vrac' },
      { valeur: '14', libelle: 'pâtisseries par jour' },
      { valeur: '1954', libelle: 'année du décor' },
      { valeur: '18', libelle: 'places en mezzanine' },
    ],
    salon: {
      sur: 'Le lieu',
      titre: 'Un diner de l’Ohio, remonté rue des Deux-Marées',
      texte:
        'Banquettes en skaï rouge, tables en formica turquoise, sol en damier et tabourets à vérin le long du comptoir : tout ce que vous voyez a servi soixante-deux ans à Dayton avant de traverser l’Atlantique.',
      photoAlt: 'La salle du salon de thé, banquettes rouges et tables en formica turquoise',
      legende: 'La salle, remontée pièce par pièce à l’hiver 2019.',
    },
    comptoir: {
      sur: 'Le comptoir',
      titre: 'Quatorze pièces par jour, pas une de plus',
      lede:
        'C’est ce que deux paires de mains peuvent faire correctement entre cinq heures du matin et l’ouverture. Quand une pièce est épuisée, elle revient le lendemain — jamais de la veille.',
      photoAlt: 'Le comptoir et sa vitrine à pâtisseries',
      articles: [
        { nom: 'Paris-Brest', detail: 'Praliné noisette du Piémont, craquelin maison', prix: '6,50 €' },
        { nom: 'Cheesecake New York', detail: 'La recette rapportée de l’Ohio avec les banquettes', prix: '5,50 €' },
        { nom: 'Chocolat chaud', detail: 'Chocolat de couverture fondu à la minute', prix: '4,00 €' },
        { nom: 'Milkshake vanille', detail: 'Glace vanille de Madagascar, lait entier', prix: '6,00 €' },
        { nom: 'Earl Grey impérial', detail: 'Ceylan et bergamote — 95 °C, 4 min', prix: '4,50 €' },
      ],
      signature: 'Signature',
    },
    formules: {
      sur: 'Les formules',
      titre: 'Le goûter, l’afternoon tea, le brunch',
      lede:
        'Trois façons de s’installer, selon l’heure et l’envie. Les deux dernières se réservent — la mezzanine ne fait que dix-huit places.',
      photoAlt: 'La carte du salon, posée sur une table en formica',
      items: [
        {
          nom: 'Le goûter Sugar & Steam',
          prix: '8,50 €',
          chapo: 'La formule de l’après-midi, servie de 14 h à 18 h.',
          inclus: ['Une boisson chaude au choix', 'Une pâtisserie du comptoir', 'Un verre d’eau filtrée'],
        },
        {
          nom: 'Afternoon tea',
          prix: '24,00 €',
          chapo: 'Pour deux, sur la mezzanine, sur réservation la veille.',
          inclus: [
            'Une théière de 50 cl au choix parmi 42 thés',
            'Trois pièces sucrées du jour par personne',
            'Deux scones tièdes, crème et confiture de lait',
            'Deux finger sandwichs concombre-aneth',
          ],
          vedette: true,
          note: 'Servi de 15 h à 17 h 30, du mardi au samedi.',
        },
        {
          nom: 'Brunch du dimanche',
          prix: '26,00 €',
          chapo: 'Le service qui remplit les banquettes. Réservation vivement conseillée.',
          inclus: [
            'Œufs brouillés ou pancakes à la ricotta',
            'Bacon grillé ou avocat rôti',
            'Boisson chaude et jus pressé',
            'Une pâtisserie du comptoir',
          ],
        },
      ],
      vedetteLabel: 'Le plus demandé',
    },
    venir: {
      sur: 'Nous trouver',
      titre: '14 rue des Deux-Marées, Cherbourg-en-Cotentin',
      lede:
        'En plein centre, à 8 minutes du port de plaisance Chantereyne et à 12 minutes de la Cité de la Mer. Sans réservation en semaine.',
      photoAlt: 'La devanture du salon de thé, enseigne au néon allumée',
      horairesTitre: 'Horaires',
      horaires: [
        { jours: 'Mardi – vendredi', heures: '9 h 00 – 19 h 00' },
        { jours: 'Samedi', heures: '9 h 00 – 19 h 30', note: 'Service continu, sans réservation' },
        { jours: 'Dimanche', heures: '10 h 00 – 18 h 00', note: 'Brunch servi jusqu’à 14 h 30' },
        { jours: 'Lundi', heures: 'Fermé', note: 'Jour de pâtisserie et de torréfaction' },
      ],
      contactTitre: 'Réserver',
      telephone: '02 33 12 34 56',
      telephoneLien: '+33233123456',
      email: 'bonjour@sugar-and-steam.fr',
      ctaAppeler: 'Appeler le salon',
    },
    footer: {
      baseline: 'Diner · Salon de thé',
      adresse: '14 rue des Deux-Marées, 50100 Cherbourg-en-Cotentin',
      mentionFictif: 'Salon de thé fictif, créé pour cette démonstration.',
    },
  },

  en: {
    title: 'Tea room & patisserie in Cherbourg — The Sugar & Steam Diner',
    description:
      'Website template for a tea room: 42 loose-leaf teas and house-made pastries in a 1954 American diner. Afternoon tea, brunch, and cake.',
    demoLabel: 'Tea room & patisserie',
    nav: {
      salon: 'The room',
      comptoir: 'The counter',
      formules: 'Set menus',
      venir: 'Find us',
      cta: 'Book a table',
    },
    hero: {
      ariaLabel: 'Welcome',
      lieu: 'Cherbourg-en-Cotentin · since 2019',
      titre: { ligne: 'Tea room', script: '& patisserie', lieu: 'in a 1954 diner' },
      chapo:
        'Forty-two teas weighed loose, pastries baked that same morning, and milkshakes spun on a period mixer — a four-minute walk from the opera house.',
      ctaCarte: 'See the menu',
      ctaReserver: 'Book a table',
      reperes: ['14 rue des Deux-Marées', 'Tuesday – Sunday', 'Made here, every day'],
      videoAlt: 'A tour of the tea room: the shopfront, the counter, and the room',
    },
    chiffres: [
      { valeur: '42', libelle: 'loose-leaf teas' },
      { valeur: '14', libelle: 'pastries a day' },
      { valeur: '1954', libelle: 'the fittings' },
      { valeur: '18', libelle: 'seats in the mezzanine' },
    ],
    salon: {
      sur: 'The room',
      titre: 'An Ohio diner, rebuilt on rue des Deux-Marées',
      texte:
        'Red vinyl booths, turquoise Formica tables, a chequerboard floor, and swivel stools along the counter: everything you see served sixty-two years in Dayton before crossing the Atlantic.',
      photoAlt: 'The tea room, with red booths and turquoise Formica tables',
      legende: 'The room, rebuilt piece by piece in the winter of 2019.',
    },
    comptoir: {
      sur: 'The counter',
      titre: 'Fourteen pieces a day, not one more',
      lede:
        'That is what two pairs of hands can do properly between five in the morning and opening time. When a pastry runs out it returns the next day — never from the day before.',
      photoAlt: 'The counter and its pastry display',
      articles: [
        { nom: 'Paris-Brest', detail: 'Piedmont hazelnut praline, house craquelin', prix: '6,50 €' },
        { nom: 'New York cheesecake', detail: 'The recipe that came from Ohio with the booths', prix: '5,50 €' },
        { nom: 'Hot chocolate', detail: 'Couverture chocolate melted to order', prix: '4,00 €' },
        { nom: 'Vanilla milkshake', detail: 'Madagascan vanilla ice cream, whole milk', prix: '6,00 €' },
        { nom: 'Imperial Earl Grey', detail: 'Ceylon and bergamot — 95 °C, 4 min', prix: '4,50 €' },
      ],
      signature: 'Signature',
    },
    formules: {
      sur: 'Set menus',
      titre: 'Afternoon cake, afternoon tea, brunch',
      lede:
        'Three ways to settle in, depending on the hour and the appetite. The last two are bookable — the mezzanine seats only eighteen.',
      photoAlt: 'The menu, resting on a Formica table',
      items: [
        {
          nom: 'The Sugar & Steam afternoon',
          prix: '8,50 €',
          chapo: 'The afternoon set, served from 2 to 6 pm.',
          inclus: ['A hot drink of your choice', 'A pastry from the counter', 'A glass of filtered water'],
        },
        {
          nom: 'Afternoon tea',
          prix: '24,00 €',
          chapo: 'For two, in the mezzanine, booked the day before.',
          inclus: [
            'A 50 cl pot chosen from 42 teas',
            'Three sweet pieces of the day, each',
            'Two warm scones, cream and dulce de leche',
            'Two cucumber and dill finger sandwiches',
          ],
          vedette: true,
          note: 'Served 3 to 5.30 pm, Tuesday to Saturday.',
        },
        {
          nom: 'Sunday brunch',
          prix: '26,00 €',
          chapo: 'The service that fills the booths. Booking strongly advised.',
          inclus: [
            'Scrambled eggs or ricotta pancakes',
            'Grilled bacon or roasted avocado',
            'A hot drink and a pressed juice',
            'A pastry from the counter',
          ],
        },
      ],
      vedetteLabel: 'Most asked for',
    },
    venir: {
      sur: 'Find us',
      titre: '14 rue des Deux-Marées, Cherbourg-en-Cotentin',
      lede:
        'In the town centre, 8 minutes from the Chantereyne marina and 12 from the Cité de la Mer. No booking needed on weekdays.',
      photoAlt: 'The shopfront, neon sign lit',
      horairesTitre: 'Opening hours',
      horaires: [
        { jours: 'Tuesday – Friday', heures: '9.00 am – 7.00 pm' },
        { jours: 'Saturday', heures: '9.00 am – 7.30 pm', note: 'Open all day, no booking' },
        { jours: 'Sunday', heures: '10.00 am – 6.00 pm', note: 'Brunch served until 2.30 pm' },
        { jours: 'Monday', heures: 'Closed', note: 'Baking and roasting day' },
      ],
      contactTitre: 'Book',
      telephone: '02 33 12 34 56',
      telephoneLien: '+33233123456',
      email: 'bonjour@sugar-and-steam.fr',
      ctaAppeler: 'Call the tea room',
    },
    footer: {
      baseline: 'Diner · Tea room',
      adresse: '14 rue des Deux-Marées, 50100 Cherbourg-en-Cotentin',
      mentionFictif: 'A fictional tea room, created for this demo.',
    },
  },
} as const satisfies Record<Lang, unknown>;
