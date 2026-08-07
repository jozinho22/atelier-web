import type { Lang } from '../lib/i18n';

/**
 * Textes de la page « Qui sommes-nous ».
 *
 * Séparés de home.ts depuis que la présentation de l'atelier a sa propre page :
 * elle n'est plus une section de l'accueil, seulement un lien du pied de page.
 *
 * ⚠️ Biographies FICTIVES, à remplacer par les vraies avant la mise en ligne.
 * Elles sont là pour donner sa forme définitive à la page, pas son contenu.
 *
 * À vérifier en même temps : les mentions légales et les CGV déclarent un
 * « entrepreneur individuel », au singulier. Présenter deux associés les
 * contredit — il faudra trancher entre les deux.
 */
export const equipe = {
  fr: {
    meta: {
      title: 'Qui sommes-nous ? — Atelier Web',
      description:
        'Les deux associés d’Atelier Web : qui écrit vos sites, qui les dessine, et pourquoi ils sont faits à la main.',
    },
    eyebrow: 'L’atelier',
    title: 'Qui sommes-nous ?',
    lede: 'Deux associés, un seul métier : écrire des sites qui durent plus longtemps que la mode qui les a vus naître.',
    membres: [
      {
        prenom: 'Josselin',
        role: 'Développeur, fondateur de l’atelier',
        alt: 'Portrait de Josselin, fondateur de l’atelier',
        bio: 'Josselin code des sites depuis douze ans, dont les six dernières à son compte. Il a commencé par des applications métier — de la gestion de stock, des plates-formes de cours — avant de constater que les artisans autour de lui payaient cher des sites qu’ils ne pouvaient pas modifier. Il écrit tout à la main, sans constructeur ni greffon : c’est plus long à faire, et beaucoup plus rapide à charger. Quand il ne code pas, il court, mal mais régulièrement.',
      },
      {
        prenom: 'Georges',
        role: 'Design et relation client',
        alt: 'Portrait de Georges, en charge du design et de la relation client',
        bio: 'Georges a passé quinze ans en agence à traduire ce que les clients voulaient dire plutôt que ce qu’ils disaient. C’est lui qui mène le premier entretien, dessine les maquettes et veille à ce qu’un site ressemble à l’entreprise qu’il représente — pas au dernier modèle à la mode. Il défend une idée simple : un beau site que personne ne comprend est un site raté. Il collectionne les vieilles enseignes peintes.',
      },
    ],
  },
  /** ⚠️ Biographies fictives — voir l'avertissement sur la version française. */
  en: {
    meta: {
      title: 'Who are we? — Atelier Web',
      description:
        'The two partners behind Atelier Web: who writes your website, who designs it, and why it is built by hand.',
    },
    eyebrow: 'The studio',
    title: 'Who are we?',
    lede: 'Two partners, one trade: writing websites that outlast the fashion they were born into.',
    membres: [
      {
        prenom: 'Josselin',
        role: 'Developer, founder of the studio',
        alt: 'Portrait of Josselin, founder of the studio',
        bio: 'Josselin has been building websites for twelve years, the last six of them freelance. He started with business software — stock management, tutoring platforms — before noticing that the tradespeople around him were paying a lot for websites they could not change. He writes everything by hand, with no page builder and no plugins: slower to make, far faster to load. When he is not coding, he runs — badly, but regularly.',
      },
      {
        prenom: 'Georges',
        role: 'Design and client relations',
        alt: 'Portrait of Georges, in charge of design and client relations',
        bio: 'Georges spent fifteen years in agencies translating what clients meant rather than what they said. He runs the first conversation, draws the mockups, and makes sure a website looks like the business it stands for — not like this season’s template. He argues for something simple: a beautiful website nobody understands is a failed website. He collects old painted shop signs.',
      },
    ],
  },
} as const satisfies Record<Lang, unknown>;
