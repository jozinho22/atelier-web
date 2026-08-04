import type { Lang } from '../lib/i18n';

/**
 * Modèle « L'Anima » — restaurant italien haut de gamme.
 * Le nom vient de l'enseigne visible sur les photos fournies.
 * Registre : chaleureux et feutré, jamais tape-à-l'œil. Le luxe se dit
 * par le détail et par le service, pas par des superlatifs.
 */
export const restaurant = {
  fr: {
    title: 'Modèle restaurant italien — L’Anima | Atelier Web',
    description:
      "Exemple de site vitrine pour un restaurant italien haut de gamme : carte, four à bois, cave de vins et whiskies, réservation. Un modèle Atelier Web chaleureux et feutré.",
    demoLabel: 'Restaurant italien',
    nav: {
      carte: 'La carte',
      four: 'Le four',
      cave: 'La cave',
      table: 'La table',
      cta: 'Réserver',
    },
    hero: {
      kicker: 'Cucina italiana — depuis 1998',
      titleLine: 'Le feu, la farine,',
      titleEm: 'et tout le temps qu’il faut.',
      lede:
        'Une salle voûtée, un four à bois allumé chaque matin, et une carte qui ne triche sur rien. À L’Anima, on vient dîner — pas se restaurer.',
      ctaPrimaire: 'Réserver une table',
      ctaSecondaire: 'Voir la carte',
      reperes: ['Four à bois', 'Produits d’origine', 'Cave de 240 références'],
    },
    carte: {
      eyebrow: 'La carte',
      title: 'Peu de plats, tous défendables',
      lede:
        'La carte change avec les saisons et tient sur une page. Ce qui n’y figure pas n’a pas passé la dégustation du lundi.',
      familles: [
        {
          nom: 'Antipasti',
          plats: [
            { nom: 'Burrata des Pouilles', desc: 'Tomates confites, basilic, huile de Ligurie.', prix: '16 €' },
            { nom: 'Vitello tonnato', desc: 'Veau rosé, sauce au thon et câpres de Pantelleria.', prix: '18 €' },
            { nom: 'Carpaccio de bœuf', desc: 'Parmesan affiné 30 mois, roquette, citron.', prix: '19 €' },
          ],
        },
        {
          nom: 'Pizze',
          plats: [
            { nom: 'Margherita', desc: 'San Marzano, mozzarella di bufala, basilic.', prix: '15 €' },
            { nom: 'Tartufo', desc: 'Crème de truffe noire, mozzarella, œuf, roquette.', prix: '26 €' },
            { nom: 'Diavola', desc: 'Nduja de Calabre, piment, mozzarella fumée.', prix: '19 €' },
          ],
        },
        {
          nom: 'Paste',
          plats: [
            { nom: 'Cacio e pepe', desc: 'Pecorino romano, poivre de Sarawak. Trois ingrédients.', prix: '21 €' },
            { nom: 'Tagliatelle al ragù', desc: 'Ragoût de bœuf mijoté six heures.', prix: '24 €' },
            { nom: 'Ravioli di ricotta', desc: 'Ricotta de brebis, épinards, beurre de sauge.', prix: '23 €' },
          ],
        },
        {
          nom: 'Dolci',
          plats: [
            { nom: 'Tiramisù', desc: 'Mascarpone, café de Naples, cacao amer.', prix: '11 €' },
            { nom: 'Panna cotta', desc: 'Vanille de Madagascar, fruits rouges.', prix: '10 €' },
          ],
        },
      ],
      note: 'Menu déjeuner en semaine, entrée–plat–dessert : 32 €.',
    },
    four: {
      eyebrow: 'Le savoir-faire',
      title: 'Quatre-vingt-dix secondes',
      texte:
        'Le four monte à 480 degrés et ne redescend pas de la soirée. Une pizza y passe quatre-vingt-dix secondes, pas une de plus — le temps que la pâte gonfle, que le bord se tache de noir et que la mozzarella cède. La pâte, elle, aura reposé quarante-huit heures.',
      points: [
        { titre: 'Farine type 00', desc: 'Moulue en Campanie, sans additif ni améliorant.' },
        { titre: 'Levain naturel', desc: 'Quarante-huit heures de maturation lente, jamais moins.' },
        { titre: 'Bois de chêne', desc: 'Séché deux ans, coupé à moins de cent kilomètres.' },
        { titre: 'San Marzano DOP', desc: 'Tomates du Vésuve, pelées à la main.' },
      ],
    },
    cave: {
      eyebrow: 'La cave',
      title: 'Deux cent quarante étiquettes, et le temps de choisir',
      texte:
        'Le sommelier passe à table, écoute ce que vous mangez, et propose. Rien n’est imposé, tout est goûté. Les grands crus voisinent avec des vignerons que personne ne connaît encore — et ce sont souvent eux qu’on vous conseillera.',
      colonnes: [
        {
          titre: 'Vins',
          lignes: ['Barolo & Barbaresco', 'Brunello di Montalcino', 'Super-toscans', 'Petits domaines siciliens'],
        },
        {
          titre: 'Whiskies',
          lignes: ['Single malts d’Islay', 'Speyside de 12 à 25 ans', 'Embouteillages rares', 'Quelques flacons plus âgés que la maison'],
        },
      ],
      note: 'Verres au comptoir jusqu’à minuit, même sans dîner.',
    },
    table: {
      eyebrow: 'La table',
      title: 'Ce qui se passe entre les plats',
      texte:
        'Une salle basse, des nappes blanches, une bougie par table et jamais de musique qui force la voix. Le service connaît la carte par cœur et sait se faire oublier — c’est probablement pour cela qu’on nous réserve autant de dîners à deux.',
      citation: 'On ne se souvient pas d’un plat. On se souvient d’une soirée.',
      signature: 'Marco Ferrante, chef',
    },
    infos: {
      eyebrow: 'Réserver',
      title: 'Nous rejoindre',
      horairesTitre: 'Service',
      horaires: [
        { jour: 'Mardi – Jeudi', service: '19 h – 22 h 30' },
        { jour: 'Vendredi – Samedi', service: '12 h – 14 h · 19 h – 23 h' },
        { jour: 'Dimanche', service: '12 h – 14 h 30' },
        { jour: 'Lundi', service: 'Fermé' },
      ],
      lieuTitre: 'L’adresse',
      adresse: '7 rue des Tanneurs\n69005 Lyon',
      lieuNote: 'Réservation conseillée le week-end. Groupes jusqu’à douze personnes sur demande.',
      contactTitre: 'Par téléphone',
      contactNote: 'Le plus simple : on décroche pendant les services.',
      telephone: '04 00 00 00 00',
      email: 'bonjour@lanima.example',
    },
    footer: { baseline: 'Cucina italiana — Lyon', droits: 'Tous droits réservés.' },
  },
  en: {
    title: 'Italian restaurant template — L’Anima | Atelier Web',
    description:
      'Example website for a high-end Italian restaurant: menu, wood-fired oven, wine and whisky cellar, booking. A warm, hushed Atelier Web template.',
    demoLabel: 'Italian restaurant',
    nav: {
      carte: 'Menu',
      four: 'The oven',
      cave: 'The cellar',
      table: 'The room',
      cta: 'Book a table',
    },
    hero: {
      kicker: 'Cucina italiana — since 1998',
      titleLine: 'Fire, flour,',
      titleEm: 'and all the time it takes.',
      lede:
        'A vaulted room, a wood oven lit every morning, and a menu that cuts no corners. At L’Anima you come to dine — not merely to eat.',
      ctaPrimaire: 'Book a table',
      ctaSecondaire: 'See the menu',
      reperes: ['Wood-fired oven', 'Traceable produce', '240-label cellar'],
    },
    carte: {
      eyebrow: 'The menu',
      title: 'Few dishes, every one defensible',
      lede:
        'The menu changes with the seasons and fits on a single page. Whatever is not on it did not pass Monday’s tasting.',
      familles: [
        {
          nom: 'Antipasti',
          plats: [
            { nom: 'Burrata from Puglia', desc: 'Confit tomatoes, basil, Ligurian olive oil.', prix: '16 €' },
            { nom: 'Vitello tonnato', desc: 'Blushing veal, tuna sauce, Pantelleria capers.', prix: '18 €' },
            { nom: 'Beef carpaccio', desc: '30-month parmesan, rocket, lemon.', prix: '19 €' },
          ],
        },
        {
          nom: 'Pizze',
          plats: [
            { nom: 'Margherita', desc: 'San Marzano, buffalo mozzarella, basil.', prix: '15 €' },
            { nom: 'Tartufo', desc: 'Black truffle cream, mozzarella, egg, rocket.', prix: '26 €' },
            { nom: 'Diavola', desc: 'Calabrian nduja, chilli, smoked mozzarella.', prix: '19 €' },
          ],
        },
        {
          nom: 'Paste',
          plats: [
            { nom: 'Cacio e pepe', desc: 'Pecorino romano, Sarawak pepper. Three ingredients.', prix: '21 €' },
            { nom: 'Tagliatelle al ragù', desc: 'Beef ragù, six hours on the stove.', prix: '24 €' },
            { nom: 'Ravioli di ricotta', desc: 'Sheep ricotta, spinach, sage butter.', prix: '23 €' },
          ],
        },
        {
          nom: 'Dolci',
          plats: [
            { nom: 'Tiramisù', desc: 'Mascarpone, Naples coffee, bitter cocoa.', prix: '11 €' },
            { nom: 'Panna cotta', desc: 'Madagascar vanilla, red berries.', prix: '10 €' },
          ],
        },
      ],
      note: 'Weekday lunch menu, starter–main–dessert: 32 €.',
    },
    four: {
      eyebrow: 'The craft',
      title: 'Ninety seconds',
      texte:
        'The oven climbs to 480 degrees and stays there all evening. A pizza spends ninety seconds inside, not one more — long enough for the dough to rise, the crust to blister black and the mozzarella to give way. The dough itself will have rested forty-eight hours.',
      points: [
        { titre: 'Type 00 flour', desc: 'Milled in Campania, no additives, no improvers.' },
        { titre: 'Natural leaven', desc: 'Forty-eight hours of slow maturation, never less.' },
        { titre: 'Oak wood', desc: 'Two years dried, cut within a hundred kilometres.' },
        { titre: 'San Marzano DOP', desc: 'Tomatoes from Vesuvius, peeled by hand.' },
      ],
    },
    cave: {
      eyebrow: 'The cellar',
      title: 'Two hundred and forty labels, and time to choose',
      texte:
        'The sommelier comes to your table, listens to what you are eating, and suggests. Nothing is imposed, everything is tasted. Great growths sit beside winemakers nobody knows yet — and those are often the ones you will be pointed to.',
      colonnes: [
        {
          titre: 'Wines',
          lignes: ['Barolo & Barbaresco', 'Brunello di Montalcino', 'Super Tuscans', 'Small Sicilian estates'],
        },
        {
          titre: 'Whiskies',
          lignes: ['Islay single malts', 'Speyside, 12 to 25 years', 'Rare bottlings', 'A few bottles older than the house'],
        },
      ],
      note: 'Glasses at the bar until midnight, dinner or not.',
    },
    table: {
      eyebrow: 'The room',
      title: 'What happens between courses',
      texte:
        'A low room, white linen, one candle per table and never music that makes you raise your voice. The staff know the menu by heart and know how to disappear — which is probably why so many couples book with us.',
      citation: 'Nobody remembers a dish. People remember an evening.',
      signature: 'Marco Ferrante, chef',
    },
    infos: {
      eyebrow: 'Booking',
      title: 'Finding us',
      horairesTitre: 'Service',
      horaires: [
        { jour: 'Tuesday – Thursday', service: '7 pm – 10:30 pm' },
        { jour: 'Friday – Saturday', service: '12 – 2 pm · 7 – 11 pm' },
        { jour: 'Sunday', service: '12 – 2:30 pm' },
        { jour: 'Monday', service: 'Closed' },
      ],
      lieuTitre: 'The address',
      adresse: '7 rue des Tanneurs\n69005 Lyon, France',
      lieuNote: 'Booking advised at weekends. Groups of up to twelve on request.',
      contactTitre: 'By phone',
      contactNote: 'Simplest of all: someone picks up during service.',
      telephone: '04 00 00 00 00',
      email: 'bonjour@lanima.example',
    },
    footer: { baseline: 'Cucina italiana — Lyon, France', droits: 'All rights reserved.' },
  },
} as const satisfies Record<Lang, unknown>;
