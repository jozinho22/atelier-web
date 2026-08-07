import type { Lang } from '../lib/i18n';

/**
 * Textes de la démonstration « Le Fournil de Kerlann » — boulangerie-pâtisserie.
 *
 * ⚠️ DONNÉES FICTIVES : la maison, son adresse, son équipe et ses horaires sont
 * inventés. Les prix, eux, sont ceux lisibles sur les ardoises des photographies
 * — c'est ce qui fait tenir la démonstration ensemble.
 *
 * ⚠️ La devanture photographiée porte une enseigne au nom d'une chaîne réelle.
 * Le modèle emploie donc un nom inventé, et l'image est cadrée sous l'enseigne
 * partout où c'est possible. À régénérer avant toute mise en ligne publique.
 */
export const boulangerie = {
  fr: {
    title: 'Boulangerie-pâtisserie à Kerlann — Le Fournil de Kerlann',
    description:
      'Modèle de site pour boulangerie-pâtisserie : pains au levain cuits au feu de bois, pâtisseries fines et chocolats maison, en Bretagne intérieure.',
    demoLabel: 'Boulangerie & pâtisserie',
    nav: {
      fournil: 'Le fournil',
      pains: 'Les pains',
      patisserie: 'La pâtisserie',
      chocolats: 'Les chocolats',
      venir: 'Nous trouver',
      cta: 'Commander',
    },
    hero: {
      ariaLabel: 'Bienvenue',
      lieu: 'Kerlann · Finistère',
      titre: { ligne: 'Le Fournil', script: 'de Kerlann' },
      accroche: 'Pain, pâtisserie, chocolat',
      chapo:
        'Un four à bois allumé à quatre heures, trois levains menés depuis onze ans, et une vitrine qui change avec les saisons. Tout est fait ici, sur la place de l’église.',
      ctaCarte: 'Voir la vitrine',
      ctaVenir: 'Venir nous voir',
      reperes: ['12 place de l’Église', 'Du mardi au dimanche', 'Cuit au feu de bois'],
      photoAlt: 'La devanture en bois de la boulangerie, sur une place pavée',
    },
    chiffres: [
      { valeur: '4 h', libelle: 'l’heure de la première fournée' },
      { valeur: '3', libelle: 'levains menés en propre' },
      { valeur: '11', libelle: 'ans place de l’Église' },
      { valeur: '100 %', libelle: 'farines de la Manche' },
    ],
    fournil: {
      sur: 'Le fournil',
      titre: 'Un four à bois, et rien pour le remplacer',
      texte:
        'La sole chauffe à la flamme puis on retire les braises : le pain cuit sur la pierre brûlante, sans appoint électrique. C’est plus long, moins régulier, et cela donne une croûte qu’aucun four ventilé ne sait faire.',
      texte2:
        'Nous pétrissons en deux temps, avec une autolyse d’une heure, et les pâtes reposent la nuit au frais. Le pain que vous achetez le matin a commencé la veille à seize heures.',
      photoAlt: 'L’intérieur de la boulangerie : le four à bois, les corbeilles et le comptoir',
      legende: 'La première fournée sort à six heures trente.',
    },
    pains: {
      sur: 'Les pains',
      titre: 'Le pain du jour, et les viennoiseries du matin',
      lede:
        'Les prix sont ceux de l’ardoise. Les viennoiseries sortent entre sept et neuf heures ; passé midi, il ne reste en général que le pain.',
      articles: [
        { nom: 'Croissant', detail: 'Beurre de baratte AOP, feuilletage en trois tours', prix: '1,70 €' },
        { nom: 'Pain au chocolat', detail: 'Deux barres de chocolat noir 64 %', prix: '1,90 €' },
        { nom: 'Pain aux raisins', detail: 'Crème pâtissière à la vanille, raisins macérés', prix: '2,10 €' },
        { nom: 'Tourte de campagne', detail: 'Levain dur, 1,5 kg, cuite au feu de bois', prix: '6,40 €' },
        { nom: 'Baguette de tradition', detail: 'Farine T65 de la Manche, pointage long', prix: '1,30 €' },
      ],
    },
    patisserie: {
      sur: 'La pâtisserie',
      titre: 'Pâtisseries fines, faites le matin même',
      lede:
        'Le laboratoire tourne à côté du fournil. Les entremets sont montés à la commande, les tartes garnies au dernier moment — une pâte détrempée est une pâte perdue.',
      photoAlt: 'La vitrine à pâtisseries : éclairs, macarons, tartes et mille-feuilles',
      articles: [
        { nom: 'Éclair', detail: 'Chocolat, café ou vanille, selon le jour', prix: '4,50 €' },
        { nom: 'Tarte Tatin', detail: 'Pommes de Savoranne, caramel à sec', prix: '5,50 €' },
        { nom: 'Tarte framboise', detail: 'Framboises de plein champ, crème d’amande', prix: '5,50 €' },
        { nom: 'Mille-feuille', detail: 'Feuilletage caramélisé, vanille de Madagascar', prix: '5,20 €' },
        { nom: 'Macarons', detail: 'Six parfums, à l’unité ou par boîte de douze', prix: '1,40 €' },
      ],
      ardoiseTitre: 'Aujourd’hui',
    },
    chocolats: {
      sur: 'La chocolaterie',
      titre: 'Truffes et pralinés, à la coupe',
      lede:
        'Nous tempérons notre couverture nous-mêmes, par petites quantités. Les boîtes sont composées devant vous : dites-nous ce que vous aimez, nous faisons le reste.',
      photoAlt: 'La vitrine à chocolats : truffes, pralinés et bonbons de chocolat',
      articles: [
        { nom: 'Truffes noires', detail: 'Ganache 70 %, roulées au cacao amer', prix: '35,50 € / kg' },
        { nom: 'Truffes caramel', detail: 'Caramel au beurre salé, enrobage noir', prix: '26,50 € / kg' },
        { nom: 'Pralinés', detail: 'Noisette du Piémont broyée à la meule', prix: '35,50 € / kg' },
        { nom: 'Assortiment maison', detail: 'Boîte composée devant vous, 250 g ou 500 g', prix: '26,50 € / kg' },
      ],
      note: 'Les chocolats se conservent trois semaines à 16 °C, à l’abri de la lumière.',
    },
    venir: {
      sur: 'Nous trouver',
      titre: '12 place de l’Église, Kerlann',
      lede:
        'Sur la place, en face du lavoir. Stationnement gratuit devant l’église, et livraison de pain le mardi et le vendredi dans les trois communes voisines.',
      horairesTitre: 'Horaires',
      horaires: [
        { jours: 'Mardi – vendredi', heures: '6 h 30 – 13 h 30, 15 h 30 – 19 h 30' },
        { jours: 'Samedi', heures: '6 h 30 – 19 h 30', note: 'Sans interruption' },
        { jours: 'Dimanche', heures: '7 h 00 – 13 h 00', note: 'Viennoiseries jusqu’à 11 h' },
        { jours: 'Lundi', heures: 'Fermé', note: 'Jour de repos de l’équipe' },
      ],
      contactTitre: 'Commander',
      contactTexte:
        'Pour une commande de pièces montées, de buffets ou de pains spéciaux, appelez-nous la veille avant midi.',
      telephone: '02 98 45 67 89',
      telephoneLien: '+33298456789',
      email: 'bonjour@fournil-kerlann.fr',
      ctaAppeler: 'Appeler le fournil',
    },
    footer: {
      baseline: 'Boulangerie · Pâtisserie · Chocolaterie',
      adresse: '12 place de l’Église, 29550 Kerlann',
      mentionFictif: 'Boulangerie fictive, créée pour cette démonstration.',
    },
  },

  en: {
    title: 'Bakery & patisserie in Kerlann — Le Fournil de Kerlann',
    description:
      'Website template for a bakery and patisserie: sourdough baked in a wood-fired oven, fine pastries, and house-made chocolates in inland Brittany.',
    demoLabel: 'Bakery & patisserie',
    nav: {
      fournil: 'The bakehouse',
      pains: 'The bread',
      patisserie: 'The patisserie',
      chocolats: 'The chocolates',
      venir: 'Find us',
      cta: 'Order',
    },
    hero: {
      ariaLabel: 'Welcome',
      lieu: 'Kerlann · Finistère',
      titre: { ligne: 'Le Fournil', script: 'de Kerlann' },
      accroche: 'Bread, pastry, chocolate',
      chapo:
        'A wood oven lit at four in the morning, three sourdough starters kept for eleven years, and a window that changes with the seasons. Everything is made here, on the church square.',
      ctaCarte: 'See the window',
      ctaVenir: 'Come and see us',
      reperes: ['12 place de l’Église', 'Tuesday to Sunday', 'Wood-fired'],
      photoAlt: 'The bakery’s wooden shopfront, on a cobbled square',
    },
    chiffres: [
      { valeur: '4 am', libelle: 'the first batch goes in' },
      { valeur: '3', libelle: 'starters kept in house' },
      { valeur: '11', libelle: 'years on the church square' },
      { valeur: '100 %', libelle: 'flour from the Manche' },
    ],
    fournil: {
      sur: 'The bakehouse',
      titre: 'A wood oven, and nothing to replace it',
      texte:
        'The hearth is heated by flame, then the embers are drawn out: the bread bakes on burning stone, with no electric help. It takes longer, it is less even, and it gives a crust no fan oven knows how to make.',
      texte2:
        'We mix in two stages, with an hour of autolyse, and the doughs rest overnight in the cold. The loaf you buy in the morning began at four the previous afternoon.',
      photoAlt: 'Inside the bakery: the wood oven, the baskets, and the counter',
      legende: 'The first batch comes out at half past six.',
    },
    pains: {
      sur: 'The bread',
      titre: 'The day’s bread, and the morning pastries',
      lede:
        'These are the prices on the board. Viennoiseries come out between seven and nine; after midday, there is usually only bread left.',
      articles: [
        { nom: 'Croissant', detail: 'PDO churned butter, three-fold lamination', prix: '1,70 €' },
        { nom: 'Pain au chocolat', detail: 'Two bars of 64 % dark chocolate', prix: '1,90 €' },
        { nom: 'Pain aux raisins', detail: 'Vanilla crème pâtissière, macerated raisins', prix: '2,10 €' },
        { nom: 'Country loaf', detail: 'Stiff levain, 1.5 kg, wood-fired', prix: '6,40 €' },
        { nom: 'Baguette de tradition', detail: 'T65 flour from the Manche, long bulk ferment', prix: '1,30 €' },
      ],
    },
    patisserie: {
      sur: 'The patisserie',
      titre: 'Fine pastries, made that same morning',
      lede:
        'The pastry room runs next to the bakehouse. Entremets are assembled to order and tarts filled at the last moment — a soggy base is a lost one.',
      photoAlt: 'The pastry counter: éclairs, macarons, tarts, and mille-feuilles',
      articles: [
        { nom: 'Éclair', detail: 'Chocolate, coffee, or vanilla, depending on the day', prix: '4,50 €' },
        { nom: 'Tarte Tatin', detail: 'Savoranne apples, dry caramel', prix: '5,50 €' },
        { nom: 'Raspberry tart', detail: 'Field-grown raspberries, almond cream', prix: '5,50 €' },
        { nom: 'Mille-feuille', detail: 'Caramelised puff pastry, Madagascan vanilla', prix: '5,20 €' },
        { nom: 'Macarons', detail: 'Six flavours, singly or by the dozen', prix: '1,40 €' },
      ],
      ardoiseTitre: 'Today',
    },
    chocolats: {
      sur: 'The chocolates',
      titre: 'Truffles and pralines, sold loose',
      lede:
        'We temper our own couverture, in small batches. Boxes are made up in front of you: tell us what you like and we will do the rest.',
      photoAlt: 'The chocolate case: truffles, pralines, and filled chocolates',
      articles: [
        { nom: 'Dark truffles', detail: '70 % ganache, rolled in bitter cocoa', prix: '35,50 € / kg' },
        { nom: 'Caramel truffles', detail: 'Salted butter caramel, dark shell', prix: '26,50 € / kg' },
        { nom: 'Pralines', detail: 'Piedmont hazelnut, stone-ground', prix: '35,50 € / kg' },
        { nom: 'House assortment', detail: 'Boxed in front of you, 250 g or 500 g', prix: '26,50 € / kg' },
      ],
      note: 'Chocolates keep for three weeks at 16 °C, away from light.',
    },
    venir: {
      sur: 'Find us',
      titre: '12 place de l’Église, Kerlann',
      lede:
        'On the square, opposite the washhouse. Free parking in front of the church, and bread delivered on Tuesdays and Fridays to the three neighbouring villages.',
      horairesTitre: 'Opening hours',
      horaires: [
        { jours: 'Tuesday – Friday', heures: '6.30 – 13.30, 15.30 – 19.30' },
        { jours: 'Saturday', heures: '6.30 – 19.30', note: 'Open all day' },
        { jours: 'Sunday', heures: '7.00 – 13.00', note: 'Viennoiseries until 11' },
        { jours: 'Monday', heures: 'Closed', note: 'The team’s day off' },
      ],
      contactTitre: 'Order',
      contactTexte:
        'For celebration cakes, buffets, or special breads, call us the day before, before midday.',
      telephone: '02 98 45 67 89',
      telephoneLien: '+33298456789',
      email: 'bonjour@fournil-kerlann.fr',
      ctaAppeler: 'Call the bakehouse',
    },
    footer: {
      baseline: 'Bakery · Patisserie · Chocolate',
      adresse: '12 place de l’Église, 29550 Kerlann',
      mentionFictif: 'A fictional bakery, created for this demo.',
    },
  },
} as const satisfies Record<Lang, unknown>;
