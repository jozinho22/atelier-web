import type { Lang } from '../lib/i18n';
import type { DocumentLegalTexte } from './document-legal';
import { SERVEUR_DISPONIBLE } from '../lib/cible';

/**
 * Politique de confidentialité — information des visiteurs au sens de
 * l'article 13 du RGPD.
 *
 * ── Pourquoi une page à part ──────────────────────────────────────────────
 *
 * Ce texte vivait dans les mentions légales, sous une section « Données
 * personnelles ». Il y était complet, mais introuvable : un visiteur qui
 * cherche ce qu'on fait de son adresse e-mail cherche « politique de
 * confidentialité », pas une sous-partie d'un autre document.
 *
 * ── À ne pas confondre avec l'annexe RGPD ─────────────────────────────────
 *
 * Deux textes, deux relations opposées :
 *
 * • ICI, Studio Caducée est RESPONSABLE DE TRAITEMENT des données de ses
 *   propres visiteurs. C'est une information unilatérale — article 13 —, que
 *   personne ne signe.
 *
 * • Dans [sous-traitance.ts](./sous-traitance.ts), Studio Caducée est
 *   SOUS-TRAITANT de son client, dont il héberge le site. C'est un contrat —
 *   article 28 —, qui accompagne le devis.
 *
 * L'un ne peut pas absorber l'autre : une politique de confidentialité qui
 * tiendrait lieu de contrat de sous-traitance laisserait le client, responsable
 * de traitement, en infraction.
 *
 * ── Ce qui dépend de la cible ─────────────────────────────────────────────
 *
 * Le formulaire de contact n'existe que là où une route serveur peut le
 * recevoir — voir `SERVEUR_DISPONIBLE`. Sur GitHub Pages, décrire la collecte
 * d'un formulaire absent serait annoncer un traitement qui n'a pas lieu.
 */

const CONTACT = 'josselin.douineau@studio-caducee.com';

/** Date de la version en vigueur, affichée sous le titre. */
const MISE_A_JOUR = { fr: '11 août 2026', en: '11 August 2026' } as const;

export function confidentialite(lang: Lang): DocumentLegalTexte {
  return lang === 'fr' ? FR : EN;
}

const FR: DocumentLegalTexte = {
  meta: {
    title: 'Politique de confidentialité — Studio Caducée',
    description:
      'Ce que le site Studio Caducée collecte, pourquoi, pendant combien de temps, et comment exercer vos droits.',
  },
  eyebrow: 'Informations légales',
  title: 'Politique de confidentialité',
  maj: `Dernière mise à jour : ${MISE_A_JOUR.fr}`,
  sections: [
    {
      heading: 'Qui est responsable de vos données',
      blocs: [
        [
          { text: 'Studio Caducée — Josselin DOUINEAU' },
          { br: true },
          { text: '9bis Kerscoul, 22540 LOUARGAT' },
          { br: true },
          { link: CONTACT, href: `mailto:${CONTACT}` },
        ],
        [
          {
            text: 'Le détail de l’identité de l’éditeur figure aux ',
          },
          { link: 'mentions légales', page: 'mentions-legales' },
          { text: '.' },
        ],
      ],
    },
    {
      heading: 'Ce que ce site collecte',
      blocs: [
        [
          {
            text: 'Ce site ne dépose aucun cookie de suivi et n’emploie aucun outil de mesure d’audience. Aucune donnée n’est collectée du seul fait de votre visite.',
          },
        ],
        ...(SERVEUR_DISPONIBLE
          ? [
              [
                {
                  text: 'Le formulaire de contact collecte trois données : votre nom, votre adresse e-mail et le message que vous écrivez. Le pack que vous sélectionnez, facultatif, les accompagne. Elles servent uniquement à vous répondre et à préparer un éventuel devis — jamais à de la prospection, et elles ne sont ni vendues ni transmises à des tiers à cette fin.',
                },
              ],
              [
                {
                  text: 'La base légale est votre demande elle-même, c’est-à-dire l’exécution de mesures précontractuelles prises à votre initiative (article 6.1.b du RGPD).',
                },
              ],
            ]
          : [
              [
                {
                  text: 'Cette version du site ne comporte aucun formulaire : les échanges se font uniquement par e-mail ou téléphone, à votre initiative.',
                },
              ],
            ]),
      ],
    },
    ...(SERVEUR_DISPONIBLE
      ? [
          {
            heading: 'Qui les reçoit',
            blocs: [
              [
                {
                  text: 'Deux sous-traitants interviennent : Resend, pour l’acheminement du message, et Cloudflare, pour la protection anti-robots du formulaire, qui reçoit à ce titre votre adresse IP. Aucun autre destinataire.',
                },
              ],
              [
                {
                  text: 'Ces prestataires, comme l’hébergeur du site, sont établis aux États-Unis : les données transitant par le site peuvent faire l’objet d’un transfert hors de l’Union européenne, encadré par les clauses contractuelles types de la Commission européenne et/ou le cadre de protection des données UE—États-Unis.',
                },
              ],
            ],
          },
          {
            heading: 'Combien de temps elles sont conservées',
            blocs: [
              [
                {
                  text: 'Le message est conservé dans la boîte de réception du responsable de traitement pendant trois ans à compter du dernier échange, puis supprimé. Si un devis puis un contrat en découlent, les documents comptables suivent la durée légale de conservation qui leur est propre.',
                },
              ],
            ],
          },
        ]
      : []),
    {
      heading: 'Vos droits',
      blocs: [
        [
          {
            text: 'Vous disposez d’un droit d’accès, de rectification, d’effacement, d’opposition, de limitation et de portabilité sur les données qui vous concernent. Vous les exercez en écrivant à ',
          },
          { link: CONTACT, href: `mailto:${CONTACT}` },
          { text: '.' },
        ],
        [
          {
            text: 'Si la réponse ne vous satisfait pas, vous pouvez adresser une réclamation à la Commission nationale de l’informatique et des libertés (CNIL), 3 place de Fontenoy, TSA 80715, 75334 PARIS CEDEX 07 — ',
          },
          { link: 'cnil.fr', href: 'https://www.cnil.fr' },
          { text: '.' },
        ],
      ],
    },
    {
      heading: 'Les sites que Studio Caducée héberge pour ses clients',
      blocs: [
        [
          {
            text: 'La présente politique ne couvre que le site studio-caducee.com. Lorsque Studio Caducée héberge le site d’un client, les rôles s’inversent : c’est le client qui répond des données collectées sur son site, et Studio Caducée n’agit que sur ses instructions, comme sous-traitant.',
          },
        ],
        [
          {
            text: 'Ce que Studio Caducée s’engage alors à faire est décrit dans l’',
          },
          { link: 'annexe RGPD de sous-traitance', page: 'sous-traitance' },
          {
            text: ', jointe au devis lorsqu’un abonnement d’hébergement est souscrit. Pour toute question sur les données d’un site hébergé, adressez-vous à son éditeur.',
          },
        ],
      ],
    },
  ],
};

const EN: DocumentLegalTexte = {
  meta: {
    title: 'Privacy policy — Studio Caducée',
    description:
      'What the Studio Caducée website collects, why, for how long, and how to exercise your rights.',
  },
  eyebrow: 'Legal information',
  title: 'Privacy policy',
  maj: `Last updated: ${MISE_A_JOUR.en}`,
  sections: [
    {
      heading: 'Who is responsible for your data',
      blocs: [
        [
          { text: 'Studio Caducée — Josselin DOUINEAU' },
          { br: true },
          { text: '9bis Kerscoul, 22540 LOUARGAT, France' },
          { br: true },
          { link: CONTACT, href: `mailto:${CONTACT}` },
        ],
        [
          { text: 'Full details of the publisher are given in the ' },
          { link: 'legal notice', page: 'mentions-legales' },
          { text: '.' },
        ],
      ],
    },
    {
      heading: 'What this site collects',
      blocs: [
        [
          {
            text: 'This site sets no tracking cookies and uses no audience analytics. Nothing is collected merely because you visit.',
          },
        ],
        ...(SERVEUR_DISPONIBLE
          ? [
              [
                {
                  text: 'The contact form collects three items: your name, your email address, and the message you write. The package you select, which is optional, goes with them. They are used solely to reply to you and to prepare a possible quote — never for marketing, and they are neither sold nor passed to third parties for that purpose.',
                },
              ],
              [
                {
                  text: 'The legal basis is your own request, that is, pre-contractual steps taken at your initiative (Article 6(1)(b) GDPR).',
                },
              ],
            ]
          : [
              [
                {
                  text: 'This version of the site has no form: all communication happens by email or phone, and only at your initiative.',
                },
              ],
            ]),
      ],
    },
    ...(SERVEUR_DISPONIBLE
      ? [
          {
            heading: 'Who receives it',
            blocs: [
              [
                {
                  text: 'Two processors are involved: Resend, for delivering the message, and Cloudflare, for the form’s anti-bot protection, which receives your IP address for that purpose. There are no other recipients.',
                },
              ],
              [
                {
                  text: 'These providers, like the site’s host, are established in the United States: data passing through the site may be transferred outside the European Union, under the European Commission’s standard contractual clauses and/or the EU–US Data Privacy Framework.',
                },
              ],
            ],
          },
          {
            heading: 'How long it is kept',
            blocs: [
              [
                {
                  text: 'The message is kept in the controller’s mailbox for three years from the last exchange, and deleted thereafter. If a quote and then a contract follow, accounting records are kept for their own statutory period.',
                },
              ],
            ],
          },
        ]
      : []),
    {
      heading: 'Your rights',
      blocs: [
        [
          {
            text: 'You have the right to access, rectify, erase, object to, restrict, and port the data concerning you. You may exercise those rights by writing to ',
          },
          { link: CONTACT, href: `mailto:${CONTACT}` },
          { text: '.' },
        ],
        [
          {
            text: 'If the answer does not satisfy you, you may lodge a complaint with the French data protection authority (CNIL), 3 place de Fontenoy, TSA 80715, 75334 PARIS CEDEX 07, France — ',
          },
          { link: 'cnil.fr', href: 'https://www.cnil.fr' },
          { text: '.' },
        ],
      ],
    },
    {
      heading: 'Websites that Studio Caducée hosts for its clients',
      blocs: [
        [
          {
            text: 'This policy covers only studio-caducee.com. Where Studio Caducée hosts a client’s website, the roles reverse: the client answers for the data collected on their site, and Studio Caducée acts only on their instructions, as a processor.',
          },
        ],
        [
          { text: 'What Studio Caducée then undertakes is set out in the ' },
          { link: 'GDPR processing annex', page: 'sous-traitance' },
          {
            text: ', attached to the quote whenever a hosting subscription is taken. For any question about the data on a hosted site, please contact its publisher.',
          },
        ],
      ],
    },
  ],
};
