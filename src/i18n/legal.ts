import type { Lang } from '../lib/i18n';
import type { DocumentLegalTexte } from './document-legal';
import { SERVEUR_DISPONIBLE } from '../lib/cible';

/**
 * Textes de la page « Mentions légales ».
 *
 * La structure (segments, blocs, sections) est partagée avec les conditions
 * générales de vente : voir [src/i18n/document-legal.ts](./document-legal.ts).
 *
 * ── Provenance ────────────────────────────────────────────────────────────
 *
 * Reprises des mentions légales d'expert-maths-lycee.fr : même entité
 * juridique, même personne, autre activité. Deux éléments ne se transposent
 * PAS d'une activité à l'autre, et ont été adaptés plutôt que recopiés :
 *
 * • LA TVA. L'autre site invoque l'article 261-4-4°-b du CGI, qui exonère les
 *   « leçons ou cours particuliers rémunérés directement par les élèves ».
 *   Créer un site web n'est pas donner un cours : cette exonération ne s'y
 *   applique pas. On déclare ici la franchise en base de l'article 293 B, le
 *   régime de droit commun d'une auto-entreprise sous les seuils.
 *
 * • L'HÉBERGEUR. L'autre site est sur Vercel ; celui-ci se publie sur GitHub
 *   Pages (voir .github/workflows/deploy.yml). Recopier Vercel aurait désigné
 *   un hébergeur qui n'héberge rien. À corriger si le plan B Vercel est un
 *   jour activé.
 *
 * ⚠️ Le SIRET est celui de l'établissement déclaré sur l'autre site. Le SIREN
 * (981083660) est bien le même — c'est la même entreprise —, mais si une
 * seconde activité a été déclarée, elle peut porter un NIC différent, donc un
 * SIRET différent. À vérifier sur l'avis de situation INSEE.
 */

export const legal = {
  fr: {
    meta: {
      title: 'Mentions légales — Studio Caducée',
      description:
        "Mentions légales du site Studio Caducée : éditeur, hébergement et données personnelles.",
    },
    eyebrow: 'Informations légales',
    title: 'Mentions légales',
    sections: [
      {
        heading: 'Éditeur du site',
        blocs: [
          [
            { text: 'Studio Caducée — Josselin DOUINEAU' },
            { br: true },
            { text: 'Entrepreneur individuel (auto-entreprise)' },
            { br: true },
            { text: '9bis Kerscoul, 22540 LOUARGAT' },
            { br: true },
            { text: 'SIRET : 98108366000028' },
            { br: true },
            { text: 'TVA non applicable, article 293 B du Code général des impôts' },
            { br: true },
            { text: 'Contact : ' },
            {
              link: 'josselin.douineau@studio-caducee.com',
              href: 'mailto:josselin.douineau@studio-caducee.com',
            },
            { text: ' — ' },
            { link: '06 25 45 01 76', href: 'tel:+33625450176' },
          ],
          [{ text: 'Directeur de la publication : Josselin DOUINEAU' }],
        ],
      },
      {
        heading: 'Hébergement',
        blocs: [
          // L'hébergeur est une mention obligatoire : il doit désigner celui qui
          // sert RÉELLEMENT la page. Le site vise deux cibles, il en a donc deux.
          SERVEUR_DISPONIBLE
            ? [
                { text: 'Ce site est hébergé par :' },
                { br: true },
                { text: 'Vercel Inc.' },
                { br: true },
                { text: '340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis' },
                { br: true },
                { link: 'vercel.com', href: 'https://vercel.com' },
              ]
            : [
                { text: 'Ce site est hébergé par :' },
                { br: true },
                { text: 'GitHub, Inc.' },
                { br: true },
                { text: '88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis' },
                { br: true },
                { link: 'github.com', href: 'https://github.com' },
              ],
        ],
      },
      {
        heading: 'Propriété intellectuelle',
        blocs: [
          [
            {
              text: "L'ensemble du contenu de ce site (textes, visuels, mise en page) est la propriété de Studio Caducée, sauf mention contraire. Toute reproduction, même partielle, est soumise à autorisation préalable.",
            },
          ],
        ],
      },
      {
        heading: 'Données personnelles',
        blocs: [
          [
            {
              text: "Ce site ne dépose aucun cookie de suivi et n'emploie aucun outil de mesure d'audience.",
            },
          ],
          ...(SERVEUR_DISPONIBLE
            ? [
                [
                  {
                    text: 'Le formulaire de contact collecte trois données : votre nom, votre adresse e-mail et le message que vous écrivez. Elles servent uniquement à vous répondre et à préparer un éventuel devis — jamais à de la prospection, et elles ne sont ni vendues ni transmises à des tiers à cette fin. La base légale est votre demande elle-même, c’est-à-dire l’exécution de mesures précontractuelles prises à votre initiative (article 6.1.b du RGPD).',
                  },
                ],
                [
                  {
                    text: 'L’acheminement du message est confié à Resend, prestataire d’envoi d’e-mails, qui agit comme sous-traitant. Le message est ensuite conservé dans la boîte de réception du responsable de traitement pendant trois ans à compter du dernier échange, puis supprimé.',
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
          [
            {
              text: 'Conformément au RGPD, vous pouvez exercer vos droits (accès, rectification, suppression, opposition) en écrivant à ',
            },
            {
              link: 'josselin.douineau@studio-caducee.com',
              href: 'mailto:josselin.douineau@studio-caducee.com',
            },
            { text: '.' },
          ],
        ],
      },
      {
        heading: 'Droit applicable',
        blocs: [
          [
            {
              text: "Le présent site est soumis au droit français. En cas de litige, une solution amiable sera recherchée avant toute action judiciaire, selon les modalités prévues par les conditions générales de vente. À défaut d'accord, les tribunaux français sont seuls compétents.",
            },
          ],
        ],
      },
      {
        heading: 'Crédits',
        blocs: [[{ text: 'Conception et réalisation : Studio Caducée.' }]],
      },
    ],
  },
  en: {
    meta: {
      title: 'Legal notice — Studio Caducée',
      description:
        'Legal notice for the Studio Caducée site: publisher, hosting, and personal data.',
    },
    eyebrow: 'Legal information',
    title: 'Legal notice',
    sections: [
      {
        heading: 'Site publisher',
        blocs: [
          [
            { text: 'Studio Caducée — Josselin DOUINEAU' },
            { br: true },
            { text: 'Sole proprietor (French auto-entrepreneur)' },
            { br: true },
            { text: '9bis Kerscoul, 22540 LOUARGAT, France' },
            { br: true },
            { text: 'SIRET: 98108366000028' },
            { br: true },
            // Le régime français n'a pas d'équivalent britannique ou américain :
            // on nomme le dispositif, on ne le traduit pas en « VAT exempt ».
            {
              text: 'VAT not applicable under article 293 B of the French General Tax Code (small-business exemption)',
            },
            { br: true },
            { text: 'Contact: ' },
            {
              link: 'josselin.douineau@studio-caducee.com',
              href: 'mailto:josselin.douineau@studio-caducee.com',
            },
            { text: ' — ' },
            { link: '+33 6 25 45 01 76', href: 'tel:+33625450176' },
          ],
          [{ text: 'Publication director: Josselin DOUINEAU' }],
        ],
      },
      {
        heading: 'Hosting',
        blocs: [
          SERVEUR_DISPONIBLE
            ? [
                { text: 'This site is hosted by:' },
                { br: true },
                { text: 'Vercel Inc.' },
                { br: true },
                { text: '340 S Lemon Ave #4133, Walnut, CA 91789, United States' },
                { br: true },
                { link: 'vercel.com', href: 'https://vercel.com' },
              ]
            : [
                { text: 'This site is hosted by:' },
                { br: true },
                { text: 'GitHub, Inc.' },
                { br: true },
                { text: '88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, United States' },
                { br: true },
                { link: 'github.com', href: 'https://github.com' },
              ],
        ],
      },
      {
        heading: 'Intellectual property',
        blocs: [
          [
            {
              text: 'All content on this site (text, visuals, layout) is the property of Studio Caducée unless stated otherwise. Any reproduction, in whole or in part, requires prior permission.',
            },
          ],
        ],
      },
      {
        heading: 'Personal data',
        blocs: [
          [
            {
              text: 'This site sets no tracking cookies and uses no audience analytics.',
            },
          ],
          ...(SERVEUR_DISPONIBLE
            ? [
                [
                  {
                    text: 'The contact form collects three items: your name, your email address, and the message you write. They are used solely to reply to you and to prepare a possible quote — never for marketing, and they are neither sold nor passed to third parties for that purpose. The legal basis is your own request, that is, pre-contractual steps taken at your initiative (Article 6(1)(b) GDPR).',
                  },
                ],
                [
                  {
                    text: 'Delivery of the message is handled by Resend, an email delivery provider acting as a processor. The message is then kept in the controller’s mailbox for three years from the last exchange, and deleted thereafter.',
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
          [
            {
              text: 'In accordance with the GDPR, you may exercise your rights (access, rectification, erasure, objection) by writing to ',
            },
            {
              link: 'josselin.douineau@studio-caducee.com',
              href: 'mailto:josselin.douineau@studio-caducee.com',
            },
            { text: '.' },
          ],
        ],
      },
      {
        heading: 'Governing law',
        blocs: [
          [
            {
              text: 'This site is governed by French law. In the event of a dispute, an amicable settlement will be sought before any legal action, as set out in the terms of sale. Failing agreement, the French courts alone have jurisdiction.',
            },
          ],
        ],
      },
      {
        heading: 'Credits',
        blocs: [[{ text: 'Design and development: Studio Caducée.' }]],
      },
    ],
  },
} satisfies Record<Lang, DocumentLegalTexte>;
