import type { Lang } from '../lib/i18n';
import type { DocumentLegalTexte } from './document-legal';
import { CONTACT_PUBLIC } from '../data/contact';

/**
 * Annexe de sous-traitance au sens de l'article 28 du RGPD.
 *
 * ── Pourquoi ce document existe ───────────────────────────────────────────
 *
 * Dès que le Prestataire héberge le site d'un client et que ce site collecte
 * des données — un formulaire de contact chez un boulanger, une demande de
 * rendez-vous —, les rôles se renversent : le CLIENT devient responsable de
 * traitement, et le Prestataire son SOUS-TRAITANT.
 *
 * L'article 28.3 du RGPD impose alors un acte juridique ÉCRIT comportant une
 * liste précise de mentions. Les CGV n'y suffisent pas : leur article 15 traite
 * les données du Client en tant que client — nom, adresse, facturation —, pas
 * celles que le Prestataire traite POUR SON COMPTE. Deux relations distinctes,
 * deux textes.
 *
 * C'est la même relation que celle du site avec Resend et Cloudflare, vue de
 * l'autre côté : eux sont sous-traitants du Prestataire, le Prestataire est
 * sous-traitant de ses clients.
 *
 * ── Ce que ce texte ne fait pas ───────────────────────────────────────────
 *
 * Il ne remplace pas le devis. Les éléments qui varient d'un client à l'autre —
 * catégories de données réellement collectées, durée, liste des sous-traitants
 * ultérieurs effectivement employés — y sont renvoyés, parce qu'ils dépendent du
 * site livré et qu'un texte générique qui les inventerait serait faux.
 *
 * ⚠️ Rédaction de départ, pas un avis juridique. Elle suit l'article 28 dans son
 * état connu et mérite une relecture professionnelle avant d'engager.
 */

const CONTACT = CONTACT_PUBLIC.email;

/** Date de la version en vigueur, affichée sous le titre. */
const MISE_A_JOUR = { fr: '12 août 2026', en: '12 August 2026' } as const;

export function sousTraitance(lang: Lang): DocumentLegalTexte {
  const lien = { link: CONTACT, href: `mailto:${CONTACT}` } as const;
  return lang === 'fr' ? versionFr() : versionEn();

  // ------------------------------------------------------------------ FR --

  function versionFr(): DocumentLegalTexte {
    return {
      meta: {
        title: 'Annexe RGPD — sous-traitance — Studio Caducée',
        description:
          'Annexe de sous-traitance au sens de l’article 28 du RGPD : obligations de Studio Caducée lorsqu’il traite des données pour le compte de ses clients.',
      },
      eyebrow: 'Informations légales',
      title: 'Annexe RGPD — sous-traitance',
      maj: `Dernière mise à jour : ${MISE_A_JOUR.fr}`,
      sections: [
        /**
         * Un préambule en clair, avant les treize articles.
         *
         * Le corps du texte est déjà au minimum : ses articles recouvrent un par
         * un le contenu qu'impose l'article 28.3 du RGPD, il n'y a rien à couper
         * sans être en défaut. Ce qui décourageait le client, c'était le volume,
         * pas les obligations — presque toutes pèsent sur le Prestataire.
         *
         * D'où ce résumé : il ne retire rien, il dit d'emblée ce que le lecteur
         * mettrait mille mots à découvrir, à commencer par le fait que le texte
         * ne le concerne peut-être pas du tout.
         */
        {
          heading: 'En bref — ce que cela change pour vous',
          blocs: [
            {
              liste: [
                [
                  {
                    text: 'Cette annexe ne s’applique QUE si vous souscrivez l’abonnement d’hébergement. Si votre site est hébergé ailleurs, elle ne vous concerne pas.',
                  },
                ],
                [
                  {
                    text: 'Elle est obligatoire : l’article 28 du RGPD impose un contrat écrit dès qu’un prestataire héberge un site qui collecte des données. Sans lui, c’est vous, responsable de traitement, qui êtes en défaut — pas votre prestataire.',
                  },
                ],
                [
                  {
                    text: 'Presque tout ce qu’elle contient sont des engagements du Prestataire envers vous : sécurité, sauvegardes vérifiées, confidentialité, alerte sous 48 heures en cas d’incident, restitution ou suppression de vos données en fin de contrat.',
                  },
                ],
                [
                  {
                    text: 'Ce qu’elle vous demande tient en deux lignes : répondre aux personnes qui exercent leurs droits sur votre site — ce que la loi vous impose de toute façon — et adresser par écrit toute instruction particulière. Rien à installer, rien à déclarer, aucun frais.',
                  },
                ],
              ],
            },
          ],
        },
        {
          heading: 'Article 1 — Objet et articulation avec les CGV',
          blocs: [
            [
              {
                text: 'La présente annexe complète les ',
              },
              { link: 'conditions générales de vente', page: 'cgv' },
              {
                text: '. Elle définit les conditions dans lesquelles Studio Caducée (« le Prestataire ») traite, pour le compte de son client (« le Responsable de traitement »), des données à caractère personnel, au sens de l’article 28 du règlement (UE) 2016/679 (« RGPD »).',
              },
            ],
            [
              {
                text: 'Elle s’applique dès lors que le Prestataire héberge, maintient ou fait évoluer un site collectant des données de personnes physiques — visiteurs, clients ou adhérents du Responsable de traitement. Elle ne concerne pas les données du Responsable de traitement lui-même, régies par l’article 15 des conditions générales de vente.',
              },
            ],
            [
              {
                text: 'En cas de contradiction, la présente annexe prévaut sur les conditions générales de vente pour tout ce qui touche au traitement de données pour le compte du Responsable de traitement.',
              },
            ],
          ],
        },
        {
          heading: 'Article 2 — Description du traitement',
          blocs: [
            [{ text: 'Le traitement confié au Prestataire est le suivant :' }],
            {
              liste: [
                [
                  {
                    text: 'Nature — hébergement, sauvegarde, maintenance technique et, le cas échéant, acheminement des messages émis depuis le site.',
                  },
                ],
                [
                  {
                    text: 'Finalité — permettre le fonctionnement du site du Responsable de traitement, à l’exclusion de toute exploitation propre.',
                  },
                ],
                [
                  {
                    text: 'Durée — celle de l’abonnement d’hébergement et de maintenance prévu à l’',
                  },
                  { link: 'article 11 des conditions générales de vente', page: 'cgv' },
                  {
                    text: '.',
                  },
                ],
                [
                  {
                    text: 'Catégories de personnes concernées et de données — précisées au devis, car elles dépendent des fonctionnalités du site livré (formulaire de contact, prise de rendez-vous, inscription à une lettre d’information…).',
                  },
                ],
              ],
            },
            [
              {
                text: 'Le Prestataire ne collecte aucune donnée pour son propre compte à travers le site du Responsable de traitement, ne les exploite à aucune fin commerciale et ne les cède à personne.',
              },
            ],
          ],
        },
        {
          heading: 'Article 3 — Instructions documentées',
          blocs: [
            [
              {
                text: 'Le Prestataire ne traite les données que sur instruction documentée du Responsable de traitement. Le devis accepté, les présentes et les ',
              },
              { link: 'conditions générales de vente', page: 'cgv' },
              {
                text: ' constituent les instructions initiales ; toute instruction ultérieure est adressée par écrit.',
              },
            ],
            [
              {
                text: 'Si le Prestataire estime qu’une instruction constitue une violation du RGPD ou d’une autre disposition relative à la protection des données, il en informe immédiatement le Responsable de traitement et peut suspendre son exécution.',
              },
            ],
          ],
        },
        {
          heading: 'Article 4 — Confidentialité',
          blocs: [
            [
              {
                text: 'Le Prestataire veille à ce que toute personne autorisée à traiter les données s’engage à en respecter la confidentialité, ou soit soumise à une obligation légale appropriée. Le Prestataire exerçant seul, cet engagement lui est personnel et s’étend à toute personne à laquelle il ferait appel.',
              },
            ],
          ],
        },
        {
          heading: 'Article 5 — Sécurité',
          blocs: [
            [
              {
                text: 'Conformément à l’article 32 du RGPD, le Prestataire met en œuvre les mesures techniques et organisationnelles appropriées, notamment :',
              },
            ],
            {
              liste: [
                [{ text: 'chiffrement des échanges entre le visiteur et le site (HTTPS) ;' }],
                [{ text: 'accès aux interfaces d’administration limité au strict nécessaire et protégé par une authentification forte ;' }],
                [{ text: 'sauvegardes régulières et vérifiées, permettant le rétablissement du site ;' }],
                [{ text: 'application des mises à jour de sécurité des composants employés ;' }],
                [{ text: 'cloisonnement des données de chaque client, jamais mêlées entre elles.' }],
              ],
            },
            [
              {
                text: 'Ces mesures peuvent évoluer avec l’état de l’art, sans que le niveau de protection puisse être abaissé.',
              },
            ],
          ],
        },
        {
          heading: 'Article 6 — Sous-traitants ultérieurs',
          blocs: [
            [
              {
                text: 'Le Responsable de traitement autorise le Prestataire à recourir à des sous-traitants ultérieurs — hébergeur, service d’acheminement des messages, protection anti-robots — pour l’exécution du service. Leur liste figure au devis.',
              },
            ],
            [
              {
                text: 'Le Prestataire impose à chacun, par contrat, des obligations de protection équivalentes à celles de la présente annexe. Il informe le Responsable de traitement de tout ajout ou remplacement envisagé, avec un préavis raisonnable, afin que celui-ci puisse s’y opposer. En cas d’opposition, chacun peut résilier l’abonnement d’hébergement sans indemnité.',
              },
            ],
            [
              {
                text: 'Le Prestataire demeure pleinement responsable devant le Responsable de traitement de l’exécution par ces sous-traitants de leurs obligations.',
              },
            ],
          ],
        },
        {
          heading: 'Article 7 — Droits des personnes concernées',
          blocs: [
            [
              {
                text: 'Il appartient au Responsable de traitement de répondre aux demandes d’exercice des droits — accès, rectification, effacement, opposition, limitation, portabilité. Le Prestataire l’assiste par les moyens techniques dont il dispose.',
              },
            ],
            [
              {
                text: 'Si une demande lui est adressée directement, le Prestataire ne peut y répondre lui-même : il la transmet au Responsable de traitement dans les meilleurs délais.',
              },
            ],
          ],
        },
        {
          heading: 'Article 8 — Violation de données',
          blocs: [
            [
              {
                text: 'Le Prestataire notifie au Responsable de traitement toute violation de données à caractère personnel dans les meilleurs délais après en avoir pris connaissance, et au plus tard sous quarante-huit (48) heures.',
              },
            ],
            [
              {
                text: 'La notification décrit la nature de la violation, les catégories et le nombre approximatif de personnes et d’enregistrements concernés, les conséquences probables et les mesures prises ou proposées. Le Prestataire assiste le Responsable de traitement dans la notification à l’autorité de contrôle et, le cas échéant, aux personnes concernées.',
              },
            ],
            [
              {
                text: 'Cette notification n’emporte par elle-même aucune reconnaissance de responsabilité.',
              },
            ],
          ],
        },
        {
          heading: 'Article 9 — Assistance et analyses d’impact',
          blocs: [
            [
              {
                text: 'Le Prestataire aide le Responsable de traitement à respecter les obligations des articles 32 à 36 du RGPD — sécurité, notification des violations, analyse d’impact et consultation préalable —, compte tenu de la nature du traitement et des informations à sa disposition.',
              },
            ],
          ],
        },
        {
          heading: 'Article 10 — Sort des données en fin de contrat',
          blocs: [
            [
              {
                text: 'Au terme de l’abonnement d’hébergement et de maintenance, le Prestataire remet au Responsable de traitement, au choix de ce dernier, l’ensemble des données et des fichiers sources, ou les supprime. Cette remise s’articule avec la réversibilité prévue à l’',
              },
              { link: 'article 11 des conditions générales de vente', page: 'cgv' },
              {
                text: '. Le nom de domaine, lui, appartient déjà au Responsable de traitement et n’appelle aucune restitution.',
              },
            ],
            [
              {
                text: 'À défaut d’instruction contraire dans les trente (30) jours suivant la fin du contrat, les données sont supprimées, sauvegardes comprises. Le Prestataire ne conserve ensuite que ce qu’une obligation légale lui impose de garder.',
              },
            ],
          ],
        },
        {
          heading: 'Article 11 — Registre, documentation et audits',
          blocs: [
            [
              {
                text: 'Le Prestataire tient le registre des catégories d’activités de traitement effectuées pour le compte du Responsable de traitement, conformément à l’article 30.2 du RGPD, et met à sa disposition les informations nécessaires pour démontrer le respect de l’article 28.',
              },
            ],
            [
              {
                text: 'Le Responsable de traitement peut faire réaliser un audit une fois par an, à ses frais, moyennant un préavis de trente (30) jours et dans des conditions ne perturbant pas le service ni la confidentialité due aux autres clients.',
              },
            ],
          ],
        },
        {
          heading: 'Article 12 — Transferts hors Union européenne',
          blocs: [
            [
              {
                text: 'Certains sous-traitants ultérieurs peuvent être établis hors de l’Union européenne. Ces transferts sont alors encadrés par les clauses contractuelles types de la Commission européenne, une décision d’adéquation, ou tout autre mécanisme prévu au chapitre V du RGPD. Le devis précise, pour chaque service employé, le lieu d’établissement et le mécanisme applicable.',
              },
            ],
          ],
        },
        {
          heading: 'Article 13 — Durée et contact',
          blocs: [
            [
              {
                text: 'La présente annexe produit effet tant que le Prestataire traite des données pour le compte du Responsable de traitement, et cesse avec l’abonnement d’hébergement et de maintenance, sous réserve de l’article 10.',
              },
            ],
            [{ text: 'Pour toute question relative à cette annexe : ' }, lien, { text: '.' }],
          ],
        },
      ],
    };
  }

  // ------------------------------------------------------------------ EN --

  function versionEn(): DocumentLegalTexte {
    return {
      meta: {
        title: 'GDPR processing annex — Studio Caducée',
        description:
          'Data processing annex under Article 28 GDPR: Studio Caducée’s obligations when processing personal data on behalf of its clients.',
      },
      eyebrow: 'Legal information',
      title: 'GDPR processing annex',
      maj: `Last updated: ${MISE_A_JOUR.en}`,
      sections: [
        {
          heading: 'In short — what this means for you',
          blocs: [
            {
              liste: [
                [
                  {
                    text: 'This annex applies ONLY if you take the hosting subscription. If your site is hosted elsewhere, it does not concern you.',
                  },
                ],
                [
                  {
                    text: 'It is mandatory: Article 28 GDPR requires a written contract as soon as a provider hosts a website that collects data. Without it, you — the controller — are in breach, not your provider.',
                  },
                ],
                [
                  {
                    text: 'Almost everything in it is an undertaking by the Provider towards you: security, verified backups, confidentiality, notification within 48 hours of an incident, return or deletion of your data at the end of the contract.',
                  },
                ],
                [
                  {
                    text: 'What it asks of you fits in two lines: answer people who exercise their rights on your site — which the law requires of you anyway — and give any specific instruction in writing. Nothing to install, nothing to declare, no cost.',
                  },
                ],
              ],
            },
          ],
        },
        {
          heading: 'Article 1 — Purpose and relationship with the terms of sale',
          blocs: [
            [
              {
                text: 'This annex supplements the ',
              },
              { link: 'terms and conditions of sale', page: 'cgv' },
              {
                text: '. It sets out the conditions under which Studio Caducée (“the Provider”) processes personal data on behalf of its client (“the Controller”), within the meaning of Article 28 of Regulation (EU) 2016/679 (“GDPR”).',
              },
            ],
            [
              {
                text: 'It applies whenever the Provider hosts, maintains, or develops a website that collects data about natural persons — visitors, customers, or members of the Controller. It does not cover the Controller’s own data, which is governed by Article 15 of the terms of sale.',
              },
            ],
            [
              {
                text: 'In the event of conflict, this annex prevails over the terms of sale in all matters relating to processing carried out on behalf of the Controller.',
              },
            ],
          ],
        },
        {
          heading: 'Article 2 — Description of the processing',
          blocs: [
            [{ text: 'The processing entrusted to the Provider is as follows:' }],
            {
              liste: [
                [
                  {
                    text: 'Nature — hosting, backup, technical maintenance and, where applicable, delivery of messages sent from the website.',
                  },
                ],
                [
                  {
                    text: 'Purpose — to keep the Controller’s website running, to the exclusion of any use of the Provider’s own.',
                  },
                ],
                [
                  {
                    text: 'Duration — that of the hosting and maintenance subscription set out in ',
                  },
                  { link: 'Article 11 of the terms of sale', page: 'cgv' },
                  {
                    text: '.',
                  },
                ],
                [
                  {
                    text: 'Categories of data subjects and of data — specified in the quote, as they depend on the features of the site delivered (contact form, booking, newsletter sign-up…).',
                  },
                ],
              ],
            },
            [
              {
                text: 'The Provider collects no data on its own behalf through the Controller’s website, puts it to no commercial use, and passes it to no one.',
              },
            ],
          ],
        },
        {
          heading: 'Article 3 — Documented instructions',
          blocs: [
            [
              {
                text: 'The Provider processes the data only on documented instructions from the Controller. The accepted quote, this annex and the ',
              },
              { link: 'terms of sale', page: 'cgv' },
              {
                text: ' constitute the initial instructions; any later instruction is given in writing.',
              },
            ],
            [
              {
                text: 'If the Provider considers that an instruction infringes the GDPR or another data protection provision, it shall immediately inform the Controller and may suspend performance.',
              },
            ],
          ],
        },
        {
          heading: 'Article 4 — Confidentiality',
          blocs: [
            [
              {
                text: 'The Provider ensures that any person authorised to process the data is bound by confidentiality, or subject to an appropriate statutory obligation. As the Provider operates alone, this undertaking is personal to them and extends to anyone they may call upon.',
              },
            ],
          ],
        },
        {
          heading: 'Article 5 — Security',
          blocs: [
            [
              {
                text: 'In accordance with Article 32 GDPR, the Provider implements appropriate technical and organisational measures, in particular:',
              },
            ],
            {
              liste: [
                [{ text: 'encryption of traffic between visitor and site (HTTPS);' }],
                [{ text: 'administration access limited to what is strictly necessary and protected by strong authentication;' }],
                [{ text: 'regular, verified backups allowing the site to be restored;' }],
                [{ text: 'security updates applied to the components used;' }],
                [{ text: 'each client’s data kept separate, never intermingled.' }],
              ],
            },
            [
              {
                text: 'These measures may evolve with the state of the art, provided the level of protection is never lowered.',
              },
            ],
          ],
        },
        {
          heading: 'Article 6 — Sub-processors',
          blocs: [
            [
              {
                text: 'The Controller authorises the Provider to engage sub-processors — host, message delivery service, anti-bot protection — to perform the service. They are listed in the quote.',
              },
            ],
            [
              {
                text: 'The Provider imposes on each of them, by contract, data protection obligations equivalent to those of this annex. It informs the Controller of any intended addition or replacement, with reasonable notice, so that the Controller may object. Where an objection is raised, either party may terminate the hosting subscription without compensation.',
              },
            ],
            [
              {
                text: 'The Provider remains fully liable to the Controller for the performance of those sub-processors’ obligations.',
              },
            ],
          ],
        },
        {
          heading: 'Article 7 — Data subjects’ rights',
          blocs: [
            [
              {
                text: 'It falls to the Controller to answer requests to exercise rights — access, rectification, erasure, objection, restriction, portability. The Provider assists using the technical means at its disposal.',
              },
            ],
            [
              {
                text: 'Should a request be addressed to the Provider directly, it may not answer it itself: it forwards it to the Controller without delay.',
              },
            ],
          ],
        },
        {
          heading: 'Article 8 — Personal data breach',
          blocs: [
            [
              {
                text: 'The Provider notifies the Controller of any personal data breach without undue delay after becoming aware of it, and at the latest within forty-eight (48) hours.',
              },
            ],
            [
              {
                text: 'The notification describes the nature of the breach, the categories and approximate number of data subjects and records concerned, the likely consequences, and the measures taken or proposed. The Provider assists the Controller in notifying the supervisory authority and, where applicable, the data subjects.',
              },
            ],
            [{ text: 'Such notification does not in itself constitute any admission of liability.' }],
          ],
        },
        {
          heading: 'Article 9 — Assistance and impact assessments',
          blocs: [
            [
              {
                text: 'The Provider assists the Controller in complying with Articles 32 to 36 GDPR — security, breach notification, data protection impact assessment and prior consultation — taking into account the nature of the processing and the information available to it.',
              },
            ],
          ],
        },
        {
          heading: 'Article 10 — Fate of the data at the end of the contract',
          blocs: [
            [
              {
                text: 'At the end of the hosting and maintenance subscription, the Provider returns all data and source files to the Controller, or deletes them, at the Controller’s choice. This dovetails with the reversibility set out in ',
              },
              { link: 'Article 11 of the terms of sale', page: 'cgv' },
              {
                text: '. The domain name already belongs to the Controller and calls for no return.',
              },
            ],
            [
              {
                text: 'Failing instructions to the contrary within thirty (30) days of the end of the contract, the data is deleted, backups included. The Provider thereafter keeps only what a legal obligation requires it to keep.',
              },
            ],
          ],
        },
        {
          heading: 'Article 11 — Records, documentation and audits',
          blocs: [
            [
              {
                text: 'The Provider maintains a record of the categories of processing activities carried out on behalf of the Controller, in accordance with Article 30(2) GDPR, and makes available the information needed to demonstrate compliance with Article 28.',
              },
            ],
            [
              {
                text: 'The Controller may have an audit carried out once a year, at its own expense, on thirty (30) days’ notice and under conditions that disrupt neither the service nor the confidentiality owed to other clients.',
              },
            ],
          ],
        },
        {
          heading: 'Article 12 — Transfers outside the European Union',
          blocs: [
            [
              {
                text: 'Some sub-processors may be established outside the European Union. Such transfers are then governed by the European Commission’s standard contractual clauses, an adequacy decision, or any other mechanism provided for in Chapter V GDPR. The quote states, for each service used, the place of establishment and the applicable mechanism.',
              },
            ],
          ],
        },
        {
          heading: 'Article 13 — Duration and contact',
          blocs: [
            [
              {
                text: 'This annex takes effect for as long as the Provider processes data on behalf of the Controller, and ends with the hosting and maintenance subscription, subject to Article 10.',
              },
            ],
            [{ text: 'For any question relating to this annex: ' }, lien, { text: '.' }],
          ],
        },
      ],
    };
  }
}
