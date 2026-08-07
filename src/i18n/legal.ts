import type { Lang } from '../lib/i18n';
import type { DocumentLegalTexte } from './document-legal';

/**
 * Textes de la page « Mentions légales ».
 *
 * La structure (segments, blocs, sections) est partagée avec les conditions
 * générales de vente : voir [src/i18n/document-legal.ts](./document-legal.ts).
 */

export const legal = {
  fr: {
    meta: {
      title: 'Mentions légales — Atelier Web',
      description:
        "Mentions légales du site Atelier Web : éditeur, hébergement et données personnelles.",
    },
    eyebrow: 'Informations légales',
    title: 'Mentions légales',
    sections: [
      {
        heading: 'Éditeur du site',
        blocs: [
          [
            { text: 'Atelier Web — [Nom Prénom]' },
            { br: true },
            { text: 'Entrepreneur individuel' },
            { br: true },
            { text: '[Adresse]' },
            { br: true },
            { text: 'SIRET : [à compléter]' },
            { br: true },
            { text: 'Contact : ' },
            { link: 'contact@atelier-web.example', href: 'mailto:contact@atelier-web.example' },
            { text: ' — ' },
            { link: '06 00 00 00 00', href: 'tel:+33600000000' },
          ],
          [{ text: 'Directeur de la publication : [Nom Prénom]' }],
        ],
      },
      {
        heading: 'Hébergement',
        blocs: [
          [
            { text: 'Ce site est hébergé par :' },
            { br: true },
            { text: "[Nom de l'hébergeur]" },
            { br: true },
            { text: "[Adresse de l'hébergeur]" },
            { br: true },
            { text: "[Téléphone / site web de l'hébergeur]" },
          ],
        ],
      },
      {
        heading: 'Propriété intellectuelle',
        blocs: [
          [
            {
              text: "L'ensemble du contenu de ce site (textes, visuels, mise en page) est la propriété d'Atelier Web, sauf mention contraire. Toute reproduction, même partielle, est soumise à autorisation préalable.",
            },
          ],
        ],
      },
      {
        heading: 'Données personnelles',
        blocs: [
          [
            {
              text: "Ce site ne collecte aucune donnée personnelle : pas de formulaire, pas de cookie de suivi, pas d'outil de mesure d'audience. Les échanges se font uniquement par e-mail ou téléphone, à votre initiative.",
            },
          ],
          [
            {
              text: 'Conformément au RGPD, vous pouvez exercer vos droits (accès, rectification, suppression) sur les données échangées par e-mail en écrivant à ',
            },
            { link: 'contact@atelier-web.example', href: 'mailto:contact@atelier-web.example' },
            { text: '.' },
          ],
        ],
      },
      {
        heading: 'Crédits',
        blocs: [[{ text: 'Conception et réalisation : Atelier Web.' }]],
      },
    ],
  },
  en: {
    meta: {
      title: 'Legal notice — Atelier Web',
      description:
        'Legal notice for the Atelier Web site: publisher, hosting, and personal data.',
    },
    eyebrow: 'Legal information',
    title: 'Legal notice',
    sections: [
      {
        heading: 'Site publisher',
        blocs: [
          [
            { text: 'Atelier Web — [Full name]' },
            { br: true },
            { text: 'Sole proprietor' },
            { br: true },
            { text: '[Address]' },
            { br: true },
            { text: 'SIRET: [to be completed]' },
            { br: true },
            { text: 'Contact: ' },
            { link: 'contact@atelier-web.example', href: 'mailto:contact@atelier-web.example' },
            { text: ' — ' },
            { link: '06 00 00 00 00', href: 'tel:+33600000000' },
          ],
          [{ text: 'Publication director: [Full name]' }],
        ],
      },
      {
        heading: 'Hosting',
        blocs: [
          [
            { text: 'This site is hosted by:' },
            { br: true },
            { text: "[Hosting provider's name]" },
            { br: true },
            { text: "[Hosting provider's address]" },
            { br: true },
            { text: "[Hosting provider's phone / website]" },
          ],
        ],
      },
      {
        heading: 'Intellectual property',
        blocs: [
          [
            {
              text: 'All content on this site (text, visuals, layout) is the property of Atelier Web unless stated otherwise. Any reproduction, in whole or in part, requires prior permission.',
            },
          ],
        ],
      },
      {
        heading: 'Personal data',
        blocs: [
          [
            {
              text: 'This site collects no personal data: no forms, no tracking cookies, no audience analytics. All communication happens by email or phone, and only at your initiative.',
            },
          ],
          [
            {
              text: 'In accordance with the GDPR, you may exercise your rights (access, rectification, erasure) over the data exchanged by email by writing to ',
            },
            { link: 'contact@atelier-web.example', href: 'mailto:contact@atelier-web.example' },
            { text: '.' },
          ],
        ],
      },
      {
        heading: 'Credits',
        blocs: [[{ text: 'Design and development: Atelier Web.' }]],
      },
    ],
  },
} as const satisfies Record<Lang, DocumentLegalTexte>;
