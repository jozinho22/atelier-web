import type { Lang } from '../lib/i18n';

/**
 * Textes de la page d'accueil : hero, marquee des métiers, services,
 * modèles, méthode, tarifs et contact. Même forme dans les deux langues ;
 * le gabarit (src/components/pages/Home.astro) pioche selon la langue.
 */
export const home = {
  fr: {
    title: 'Atelier Web — Sites vitrines pour artisans, indépendants et associations',
    description:
      "Création de sites vitrines élégants et rapides pour professionnels et associations : soyez visible sur Google et joignable en un clic. Devis gratuit, à partir de 590 €.",
    hero: {
      ariaLabel: 'Introduction',
      kicker: 'Création de sites vitrines',
      titleLine: 'Un site qui donne envie',
      titleEm: 'de vous appeler.',
      lede: 'Artisans, indépendants, associations : je crée des sites vitrines élégants et rapides, pensés pour que vos clients vous trouvent sur Google — et vous contactent en un clic.',
      ctaModels: 'Voir les modèles',
      ctaQuote: 'Demander un devis gratuit',
      proofAria: 'Points forts',
      proof: ['Livré en 3 semaines', 'Optimisé Google', 'Sans abonnement obligatoire'],
      chipCall: 'Appeler',
      /** Injecté via set:html pour conserver l'exposant. */
      chipSeo: '1<sup>re</sup> page Google',
    },
    metiers: [
      'Plombier', 'Club de foot', 'Institut de beauté', 'Peintre', 'Électricien',
      'École de musique', 'Coiffeuse', 'Maçon', 'Céramiste', 'Association de quartier',
      'Photographe', 'Menuisier', 'Prof de yoga', 'Chorale', 'Carreleur',
    ],
    services: {
      eyebrow: 'Pourquoi un site vitrine ?',
      title: 'Votre meilleure carte de visite, ouverte 24 h/24',
      lede: "Pas d'usine à gaz : un site simple, beau et efficace, qui fait exactement ce que vos clients attendent de lui.",
      items: [
        {
          title: 'Être trouvé sur Google',
          desc: 'Référencement soigné dès la conception : votre activité, votre ville, vos services. Vos futurs clients vous cherchent — ils vous trouvent.',
        },
        {
          title: 'Être joint en un clic',
          desc: 'Téléphone, e-mail, itinéraire : chaque page guide le visiteur vers le contact. Sur mobile, un clic suffit pour vous appeler.',
        },
        {
          title: 'Faire bonne impression',
          desc: "Un design sur mesure, à votre image. Parce qu'avant de pousser votre porte, vos clients visitent votre site.",
        },
        {
          title: 'Rapide et sans entretien',
          desc: 'Sites statiques ultra-rapides, sécurisés par conception : pas de mises à jour, pas de pannes, pas de mauvaises surprises.',
        },
      ],
    },
    modeles: {
      eyebrow: 'Les modèles',
      title: 'Une page, et tout l’essentiel',
      items: [
        {
          tag: 'Associations',
          name: 'Sport & culture',
          desc: 'Actualités, horaires des entraînements, adhésions : tout ce qu’un club doit montrer.',
          points: ['Activités', 'Actualités', 'Infos pratiques'],
        },
        {
          tag: 'Artisans',
          name: 'Métiers du bâtiment',
          desc: 'Un site solide comme vos chantiers : réalisations, zone d’intervention, devis en un clic.',
          points: ['Réalisations', 'Zone d’intervention', 'Devis'],
        },
        {
          tag: 'Beauté',
          name: 'Esthétique & bien-être',
          desc: 'Une vitrine douce et raffinée pour instituts, salons et praticiennes indépendantes.',
          points: ['Carte des soins', 'Horaires', 'Réservation'],
        },
        {
          tag: 'Artistes',
          name: 'Blog & portfolio d’artiste',
          desc: 'Vos œuvres en pleine lumière, un journal de bord pour raconter votre démarche.',
          points: ['Galerie', 'Journal', 'Expositions'],
        },
        {
          tag: 'Bien-être',
          name: 'Cours de yoga',
          desc: 'Noir et blanc, souffle et lenteur : un studio où le site respire au rythme du cours.',
          points: ['Postures animées', 'Horaires', 'Réservation'],
        },
        {
          tag: 'Restauration',
          name: 'Restaurant italien',
          desc: 'Nuit, braise et or : une carte qui se lit comme au restaurant, et le service en vedette.',
          points: ['Carte', 'Cave', 'Réservation'],
        },
      ],
      viewDemo: 'Voir la démonstration',
      packBadge: 'Pack Essentiel',
      eyebrow2: 'Pour démarrer',
      packNote:
        'Les six modèles ci-dessous illustrent le pack Essentiel : un site d’une page, complet et soigné.',
      note: {
        before: "Votre activité n'apparaît pas ici ? C'est justement le principe : chaque site est unique.",
        link: 'Décrivez-moi votre métier',
        after: ", je vous montre ce qu'il pourrait donner.",
      },
    },
    surMesure: {
      packBadge: 'Pack Sur mesure',
      eyebrow: 'Le plus choisi',
      title: 'Quand une page ne suffit plus',
      tag: 'Salon de thé',
      name: 'The Sugar & Steam Diner',
      desc:
        'Un salon de thé imaginaire installé dans un diner américain de 1954, à Cherbourg-en-Cotentin. Entre deux pages, le contenu s’évapore derrière une volute de vapeur, et les photos volent d’une page à l’autre.',
      points: [
        'Cinq pages : accueil, carte, salon, actualités, contact',
        'Transitions animées d’une page à l’autre',
        'Carte et actualités modifiables sans toucher au code',
        'Photos converties en AVIF et WebP, jusqu’à huit fois plus légères',
        'Fiche d’établissement, carte et questions fréquentes lisibles par Google',
      ],
      cta: 'Visiter le site complet',
      note: 'S’ouvre dans un nouvel onglet : c’est un site entier, pas une page de démonstration.',
    },
    signature: {
      packBadge: 'Pack Signature',
      eyebrow: 'Un cran au-dessus',
      title: 'Quand le site devient une pièce unique',
      tag: 'Sport & loisirs',
      name: 'Golf de Roc’h Avel',
      desc:
        'Un club de golf imaginaire, du parcours trou par trou à la carte du restaurant. Sur la page d’accueil, une animation suit le vol de la balle du départ jusqu’au drapeau — au défilement, ou d’un simple clic.',
      points: [
        'Huit pages et une navigation complète',
        'Animation sur mesure, jouée au défilement ou au clic',
        'Plan du parcours dessiné en vectoriel',
        'Tarifs et carte de score modifiables sans toucher au code',
        'Formulaire de réservation, sans serveur ni abonnement',
      ],
      cta: 'Visiter le site complet',
      note: 'S’ouvre dans un nouvel onglet : c’est un site entier, pas une page de démonstration.',
    },
    portfolio: {
      eyebrow: 'Réalisations',
      title: 'Des sites déjà en ligne',
      lede: 'Quelques projets livrés — cliquez pour les visiter.',
      visiter: 'Visiter le site',
      precedent: 'Projet précédent',
      suivant: 'Projet suivant',
      items: [
        { name: 'Api Jawa', desc: 'Dépôt-vente d’artisans à petits prix.' },
        { name: 'Expert Maths Lycée', desc: 'Plate-forme de cours de mathématiques en ligne.' },
        { name: 'Monmétré', desc: 'Plate-forme de métrés CVC sur mesure.' },
      ],
    },
    methode: {
      eyebrow: 'La méthode',
      title: 'Simple pour vous, du début à la fin',
      steps: [
        {
          title: 'On échange',
          desc: 'Un appel ou un café pour comprendre votre activité, vos clients et ce que votre site doit raconter.',
        },
        {
          title: 'Je conçois',
          desc: 'Maquette sur mesure à partir du modèle qui vous plaît : vos couleurs, vos photos, vos mots.',
        },
        {
          title: 'On ajuste',
          desc: 'Vous relisez, on affine ensemble. Deux allers-retours inclus, sans jargon technique.',
        },
        {
          title: 'On met en ligne',
          desc: 'Nom de domaine, hébergement, référencement Google : je m’occupe de tout, vous êtes visible.',
        },
      ],
    },
    tarifs: {
      eyebrow: 'Tarifs',
      title: 'Des prix clairs, sans surprise',
      lede: "Un investissement unique — votre site vous appartient. Pas d'abonnement caché, pas de frais surprises.",
      essentiel: {
        name: 'Essentiel',
        price: '590 €',
        features: [
          'Site une page (vitrine complète)',
          'Design personnalisé à vos couleurs',
          'Référencement Google optimisé',
          'Contact en un clic (téléphone, e-mail)',
          'Mise en ligne incluse',
        ],
        cta: 'Demander un devis',
        demo: 'Voir les 4 modèles',
      },
      surMesure: {
        badge: 'Le plus choisi',
        name: 'Sur mesure',
        price: 'à partir de 990 €',
        features: [
          'Plusieurs pages (services, galerie, actus…)',
          'Design entièrement sur mesure',
          'Textes travaillés pour le référencement',
          'Google Business Profile configuré',
          'Formation à la prise en main',
          'Accompagnement 3 mois inclus',
        ],
        cta: 'Demander un devis',
        demo: 'Voir le site complet',
      },
      signature: {
        name: 'Signature',
        price: 'à partir de 2 500 €',
        features: [
          'Site complet, huit pages et au-delà',
          'Une pièce unique : animation, carte interactive, configurateur…',
          'Identité visuelle construite avec vous',
          'Contenus rédigés et structurés pour Google',
          'Formation et accompagnement 6 mois',
        ],
        cta: 'Demander un devis',
        demo: 'Voir le site complet',
      },
      note: 'Hébergement, nom de domaine et maintenance : 49 €/mois — votre site reste votre propriété, sans engagement.',
    },
    contact: {
      titleBefore: 'Et si on parlait de',
      titleEm: 'votre',
      titleAfter: 'site ?',
      lede: 'Racontez-moi votre activité, je vous réponds sous 24 h avec des idées concrètes. Le devis est gratuit, le café aussi.',
      email: 'contact@atelier-web.example',
      phone: '06 00 00 00 00',
    },
  },
  en: {
    title: 'Atelier Web — Showcase websites for artisans, freelancers and local clubs',
    description:
      'Elegant, fast showcase websites for professionals and local clubs: get found on Google and reached in one click. Free quote, from 590 €.',
    hero: {
      ariaLabel: 'Introduction',
      kicker: 'Showcase website design',
      titleLine: 'A website that makes people',
      titleEm: 'want to call you.',
      lede: 'Artisans, freelancers, local clubs: I build elegant, fast showcase websites designed so your customers find you on Google — and reach you in one click.',
      ctaModels: 'See the templates',
      ctaQuote: 'Get a free quote',
      proofAria: 'Key points',
      proof: ['Delivered in 3 weeks', 'Google-optimized', 'No subscription required'],
      chipCall: 'Call',
      /** Injecté via set:html pour conserver l'exposant. */
      chipSeo: 'Page 1 on Google',
    },
    metiers: [
      'Plumber', 'Soccer club', 'Beauty salon', 'Painter', 'Electrician',
      'Music school', 'Hairdresser', 'Mason', 'Ceramicist', 'Neighborhood association',
      'Photographer', 'Carpenter', 'Yoga teacher', 'Choir', 'Tile setter',
    ],
    services: {
      eyebrow: 'Why a showcase website?',
      title: 'Your best business card, open 24/7',
      lede: 'Nothing overengineered: a simple, beautiful, effective website that does exactly what your customers expect from it.',
      items: [
        {
          title: 'Get found on Google',
          desc: 'SEO baked in from day one: your trade, your city, your services. Your future customers are searching — and they find you.',
        },
        {
          title: 'Get reached in one click',
          desc: 'Phone, email, directions: every page guides visitors toward getting in touch. On mobile, one tap is all it takes to call you.',
        },
        {
          title: 'Make a great impression',
          desc: 'A custom design that looks like you. Because before walking through your door, your customers visit your website.',
        },
        {
          title: 'Fast and maintenance-free',
          desc: 'Ultra-fast static websites, secure by design: no updates, no outages, no unpleasant surprises.',
        },
      ],
    },
    modeles: {
      eyebrow: 'The templates',
      title: 'One page, and all the essentials',
      items: [
        {
          tag: 'Clubs',
          name: 'Sports & culture',
          desc: 'News, practice schedules, memberships: everything a club needs to show.',
          points: ['Activities', 'News', 'Practical info'],
        },
        {
          tag: 'Artisans',
          name: 'Building trades',
          desc: 'A website as solid as your worksites: past projects, service area, quotes in one click.',
          points: ['Past projects', 'Service area', 'Quotes'],
        },
        {
          tag: 'Beauty',
          name: 'Beauty & wellness',
          desc: 'A soft, refined showcase for salons, spas and independent practitioners.',
          points: ['Treatment menu', 'Opening hours', 'Booking'],
        },
        {
          tag: 'Artists',
          name: 'Artist blog & portfolio',
          desc: 'Your work in the spotlight, with a journal to tell the story behind it.',
          points: ['Gallery', 'Journal', 'Exhibitions'],
        },
        {
          tag: 'Wellbeing',
          name: 'Yoga classes',
          desc: 'Black and white, breath and slowness: a studio whose website breathes with the class.',
          points: ['Animated postures', 'Schedule', 'Booking'],
        },
        {
          tag: 'Restaurants',
          name: 'Italian restaurant',
          desc: 'Night, embers and gold: a menu that reads like the real thing, with service in the spotlight.',
          points: ['Menu', 'Cellar', 'Booking'],
        },
      ],
      viewDemo: 'View the demo',
      packBadge: 'Essential pack',
      eyebrow2: 'To get started',
      packNote:
        'The six templates below illustrate the Essential pack: a one-page website, complete and carefully crafted.',
      note: {
        before: 'Don’t see your line of work here? That’s exactly the point: every website is one of a kind.',
        link: 'Tell me about your trade',
        after: ', and I’ll show you what it could look like.',
      },
    },
    surMesure: {
      packBadge: 'Bespoke pack',
      eyebrow: 'The most popular',
      title: 'When one page is no longer enough',
      tag: 'Tea room',
      name: 'The Sugar & Steam Diner',
      desc:
        'An imaginary tea room set inside a 1954 American diner in Cherbourg-en-Cotentin. Between two pages, the content evaporates behind a curl of steam, and the photographs fly from one page to the next.',
      points: [
        'Five pages: home, menu, the room, news, contact',
        'Animated transitions from one page to the next',
        'Menu and news editable without touching the code',
        'Photographs converted to AVIF and WebP, up to eight times lighter',
        'Business details, menu and FAQ readable by Google',
      ],
      cta: 'Visit the full site',
      note: 'Opens in a new tab: this is an entire website, not a demo page.',
    },
    signature: {
      packBadge: 'Signature pack',
      eyebrow: 'One step further',
      title: 'When the website becomes a one-off piece',
      tag: 'Sport & leisure',
      name: 'Golf de Roc’h Avel',
      desc:
        'An imaginary golf club, from the hole-by-hole course guide to the restaurant menu. On the home page, an animation follows the ball from the tee all the way to the flag — as you scroll, or with a single click.',
      points: [
        'Eight pages and a full navigation',
        'Bespoke animation, played on scroll or on click',
        'Course map drawn in vector graphics',
        'Prices and scorecard editable without touching the code',
        'Booking form, with no server and no subscription',
      ],
      cta: 'Visit the full site',
      note: 'Opens in a new tab: this is an entire website, not a demo page.',
    },
    portfolio: {
      eyebrow: 'Recent work',
      title: 'Websites already online',
      lede: 'A few delivered projects — click to visit them.',
      visiter: 'Visit the website',
      precedent: 'Previous project',
      suivant: 'Next project',
      items: [
        { name: 'Api Jawa', desc: 'Consignment shop for affordable artisan goods.' },
        { name: 'Expert Maths Lycée', desc: 'Online maths tutoring platform.' },
        { name: 'Monmétré', desc: 'Custom HVAC quantity-surveying platform.' },
      ],
    },
    methode: {
      eyebrow: 'The process',
      title: 'Simple for you, from start to finish',
      steps: [
        {
          title: 'We talk',
          desc: 'A call or a coffee to understand your business, your customers and the story your website should tell.',
        },
        {
          title: 'I design',
          desc: 'A custom mockup built from the template you love: your colors, your photos, your words.',
        },
        {
          title: 'We refine',
          desc: 'You review, we fine-tune together. Two rounds of revisions included, zero technical jargon.',
        },
        {
          title: 'We go live',
          desc: 'Domain name, hosting, Google indexing: I take care of everything — you get visible.',
        },
      ],
    },
    tarifs: {
      eyebrow: 'Pricing',
      title: 'Clear prices, no surprises',
      lede: 'A one-time investment — your website belongs to you. No hidden subscription, no surprise fees.',
      essentiel: {
        name: 'Essential',
        price: '590 €',
        features: [
          'One-page website (a complete showcase)',
          'Custom design in your colors',
          'Optimized Google SEO',
          'One-click contact (phone, email)',
          'Launch included',
        ],
        cta: 'Request a quote',
        demo: 'See the 4 templates',
      },
      surMesure: {
        badge: 'Most popular',
        name: 'Custom',
        price: 'from 990 €',
        features: [
          'Multiple pages (services, gallery, news…)',
          'Fully bespoke design',
          'Copy crafted for search engines',
          'Google Business Profile set up',
          'Hands-on training session',
          '3 months of support included',
        ],
        cta: 'Request a quote',
        demo: 'See the full site',
      },
      signature: {
        name: 'Signature',
        price: 'from 2,500 €',
        features: [
          'A complete website, eight pages and beyond',
          'One bespoke piece: animation, interactive map, configurator…',
          'Visual identity built together with you',
          'Copy written and structured for search engines',
          'Training and 6 months of support',
        ],
        cta: 'Request a quote',
        demo: 'See the full site',
      },
      note: 'Hosting, domain name and maintenance: 49 €/month — your website remains your property, with no commitment.',
    },
    contact: {
      titleBefore: 'Shall we talk about',
      titleEm: 'your',
      titleAfter: 'website?',
      lede: 'Tell me about your business and I’ll get back to you within 24 hours with concrete ideas. The quote is free — so is the coffee.',
      email: 'contact@atelier-web.example',
      phone: '06 00 00 00 00',
    },
  },
} as const satisfies Record<Lang, unknown>;
