import type { Lang } from '../lib/i18n';
import type { DocumentLegalTexte } from './document-legal';
import { TARIFS, HEBERGEMENT, ALLERS_RETOURS, ACOMPTE_POURCENT, euros } from '../data/tarifs';

/**
 * Conditions générales de vente.
 *
 * Contrairement aux autres dictionnaires, celui-ci est une FONCTION de la
 * langue : les montants viennent de [src/data/tarifs.ts](../data/tarifs.ts) et
 * leur mise en forme dépend de la locale (« 1 690 € » contre « €1,690 »). Les
 * écrire en dur ici ferait du contrat une seconde source de vérité, libre de
 * contredire la grille affichée sur la page d'accueil.
 *
 * ⚠️ Deux réserves, à lever avant la mise en ligne :
 *   1. l'identité du prestataire et le médiateur de la consommation sont des
 *      mentions obligatoires, laissées entre crochets comme dans les mentions
 *      légales ;
 *   2. ce texte est une rédaction de départ, pas un avis juridique. Il suit le
 *      code de la consommation et le code de commerce dans leur état connu,
 *      mais mérite une relecture professionnelle avant d'engager.
 *
 * Paramètres retenus (choisis par l'éditeur, ils déterminent plusieurs
 * articles) : franchise en base de TVA, vente aux consommateurs incluse,
 * abonnement d'hébergement sans engagement de durée.
 */

const CONTACT = 'contact@studio-caducee.example';
const TELEPHONE = { texte: '06 00 00 00 00', href: 'tel:+33600000000' };

/** Date de la version en vigueur, affichée sous le titre. */
const MISE_A_JOUR = { fr: '7 août 2026', en: '7 August 2026' } as const;

export function cgv(lang: Lang): DocumentLegalTexte {
  const lien = { link: CONTACT, href: `mailto:${CONTACT}` } as const;
  const essentiel = euros(TARIFS.essentiel.montant, lang);
  const surMesure = euros(TARIFS.surMesure.montant, lang);
  const signature = euros(TARIFS.signature.montant, lang);
  const hebergement = euros(HEBERGEMENT.montant, lang);

  return lang === 'fr' ? versionFr() : versionEn();

  // ------------------------------------------------------------------ FR --

  function versionFr(): DocumentLegalTexte {
    return {
      meta: {
        title: 'Conditions générales de vente — Studio Caducée',
        description:
          "Conditions générales de vente de Studio Caducée : devis, prix, paiement, droit de rétractation, propriété intellectuelle et médiation.",
      },
      eyebrow: 'Informations légales',
      title: 'Conditions générales de vente',
      maj: `Dernière mise à jour : ${MISE_A_JOUR.fr}`,
      sections: [
        {
          heading: 'Article 1 — Objet et champ d’application',
          blocs: [
            [
              {
                text: 'Les présentes conditions générales de vente (« les CGV ») régissent les prestations de création, de refonte et de maintenance de sites internet fournies par Studio Caducée (« le Prestataire ») à ses clients (« le Client »).',
              },
            ],
            [
              {
                text: 'Toute commande emporte acceptation sans réserve des présentes CGV, qui prévalent sur tout autre document du Client, notamment ses conditions générales d’achat. Elles sont jointes à chaque devis et consultables à tout moment sur le présent site.',
              },
            ],
            [
              {
                text: 'Le Prestataire peut les modifier à tout moment. La version applicable à une commande est celle en vigueur à la date de signature du devis correspondant.',
              },
            ],
          ],
        },
        {
          heading: 'Article 2 — Identité du prestataire',
          blocs: [
            [
              { text: 'Studio Caducée — [Nom Prénom]' },
              { br: true },
              { text: 'Entrepreneur individuel' },
              { br: true },
              { text: '[Adresse]' },
              { br: true },
              { text: 'SIRET : [à compléter]' },
              { br: true },
              { text: 'Contact : ' },
              lien,
              { text: ' — ' },
              { link: TELEPHONE.texte, href: TELEPHONE.href },
            ],
          ],
        },
        {
          heading: 'Article 3 — Devis et formation du contrat',
          blocs: [
            [
              {
                text: 'Chaque prestation fait l’objet d’un devis gratuit et détaillé, précisant le périmètre, le prix et le délai prévisionnel. Ce devis est valable trente (30) jours à compter de son émission.',
              },
            ],
            [
              {
                text: `Le contrat est formé à la réception du devis daté, signé et revêtu de la mention « bon pour accord », accompagné du versement de l’acompte prévu à l’article 5.`,
              },
            ],
            [
              {
                text: 'Toute demande sortant du périmètre décrit au devis fait l’objet d’un devis complémentaire, accepté dans les mêmes formes avant exécution.',
              },
            ],
          ],
        },
        {
          heading: 'Article 4 — Prix',
          blocs: [
            [
              {
                text: 'Les prix sont exprimés en euros et s’entendent nets de taxe. TVA non applicable, article 293 B du code général des impôts.',
              },
            ],
            [{ text: 'Les tarifs indicatifs des prestations forfaitaires sont les suivants :' }],
            {
              liste: [
                [{ text: `Pack Essentiel — ${essentiel}` }],
                [{ text: `Pack Sur mesure — à partir de ${surMesure}` }],
                [{ text: `Pack Signature — à partir de ${signature}` }],
                [
                  {
                    text: `Hébergement, nom de domaine et maintenance — ${hebergement} par mois, en option (article 11)`,
                  },
                ],
              ],
            },
            [
              {
                text: 'Ces montants sont donnés à titre indicatif : seul le prix figurant au devis accepté engage les parties.',
              },
            ],
            [
              {
                text: 'Les frais de nom de domaine, d’hébergement, de licences de polices ou d’images payantes, lorsqu’ils sont nécessaires, sont soit refacturés à l’euro près sur justificatif, soit souscrits directement par le Client en son nom.',
              },
            ],
          ],
        },
        {
          heading: 'Article 5 — Modalités de paiement',
          blocs: [
            [
              {
                text: `Un acompte de ${ACOMPTE_POURCENT} % du montant total est exigible à la commande. Le solde est exigible à la livraison, avant mise en ligne. Le règlement s’effectue par virement bancaire, à trente (30) jours date de facture.`,
              },
            ],
            [{ text: 'Aucun escompte n’est accordé pour paiement anticipé.' }],
            [
              {
                text: 'Conformément aux articles L441-10 et D441-5 du code de commerce, tout retard de paiement entraîne de plein droit, sans rappel préalable, des pénalités égales à trois fois le taux d’intérêt légal, ainsi qu’une indemnité forfaitaire de 40 € pour frais de recouvrement.',
              },
            ],
            [
              {
                text: 'Le Prestataire peut suspendre les travaux en cours après une mise en demeure restée sans effet pendant quinze (15) jours, sans que cette suspension ouvre droit à indemnité.',
              },
            ],
          ],
        },
        {
          heading: 'Article 6 — Droit de rétractation',
          blocs: [
            [
              {
                text: 'Le Client consommateur au sens du code de la consommation dispose d’un délai de quatorze (14) jours à compter de la conclusion du contrat pour exercer son droit de rétractation, sans avoir à motiver sa décision ni à supporter de pénalité (article L221-18 du code de la consommation).',
              },
            ],
            [
              { text: 'Ce droit s’exerce par une déclaration écrite dénuée d’ambiguïté adressée à ' },
              lien,
              {
                text: '. Un formulaire type de rétractation est joint au devis.',
              },
            ],
            [
              {
                text: 'Si le Client demande expressément que l’exécution commence avant l’expiration de ce délai, il conserve son droit de rétractation mais reste redevable du montant correspondant au service effectivement fourni jusqu’à la communication de sa décision (article L221-25).',
              },
            ],
            [
              {
                text: 'Ce droit ne s’applique pas au Client professionnel agissant dans le cadre de son activité.',
              },
            ],
          ],
        },
        {
          heading: 'Article 7 — Déroulement de la prestation',
          blocs: [
            [
              {
                text: 'La prestation se déroule en quatre temps : échange préalable, conception, réalisation, puis mise en ligne.',
              },
            ],
            [
              {
                text: `${ALLERS_RETOURS === 2 ? 'Deux' : String(ALLERS_RETOURS)} allers-retours de modifications sont inclus dans chaque forfait. Au-delà, les modifications sont facturées au tarif horaire figurant au devis.`,
              },
            ],
            [
              {
                text: 'Sont considérés comme modifications les ajustements de contenu et de mise en forme s’inscrivant dans le périmètre convenu. Un changement d’orientation graphique, l’ajout de pages ou de fonctionnalités relèvent d’un devis complémentaire.',
              },
            ],
          ],
        },
        {
          heading: 'Article 8 — Obligations du Client',
          blocs: [
            [
              {
                text: 'La bonne exécution de la prestation suppose la collaboration active du Client, qui s’engage à :',
              },
            ],
            {
              liste: [
                [
                  {
                    text: 'fournir dans un délai raisonnable l’ensemble des éléments nécessaires (textes, images, logo, accès techniques) ;',
                  },
                ],
                [
                  {
                    text: 'garantir qu’il détient les droits d’utilisation de ces éléments, et garantir le Prestataire contre toute réclamation de tiers à ce titre ;',
                  },
                ],
                [
                  {
                    text: 'désigner un interlocuteur unique, habilité à valider les étapes ;',
                  },
                ],
                [{ text: 'répondre aux demandes de validation dans un délai raisonnable.' }],
              ],
            },
            [
              {
                text: 'Tout retard dans la fourniture de ces éléments décale d’autant le délai de livraison, sans qu’il puisse en être fait grief au Prestataire.',
              },
            ],
          ],
        },
        {
          heading: 'Article 9 — Délais',
          blocs: [
            [
              {
                text: 'Les délais courent à compter de la réception de l’acompte et de la totalité des éléments mentionnés à l’article 8, le plus tardif des deux faisant foi.',
              },
            ],
            [
              {
                text: 'Ils sont donnés à titre indicatif. Un dépassement ne peut donner lieu à annulation de la commande, retenue sur le prix ou dommages-intérêts, sauf faute caractérisée du Prestataire.',
              },
            ],
          ],
        },
        {
          heading: 'Article 10 — Recette et mise en ligne',
          blocs: [
            [
              {
                text: 'À la livraison, le Client dispose de quatorze (14) jours pour signaler par écrit les non-conformités au devis accepté. Passé ce délai, la prestation est réputée acceptée sans réserve.',
              },
            ],
            [
              {
                text: 'La mise en ligne sur le nom de domaine définitif intervient après paiement intégral du prix.',
              },
            ],
          ],
        },
        {
          heading: 'Article 11 — Hébergement et maintenance',
          blocs: [
            [
              {
                text: `Le Client peut souscrire un abonnement mensuel de ${hebergement}, comprenant l’hébergement du site, le nom de domaine et les mises à jour techniques.`,
              },
            ],
            [
              {
                text: 'Cet abonnement est sans engagement de durée. Il est résiliable à tout moment par l’une ou l’autre des parties, par écrit, avec un préavis d’un (1) mois. Le mois entamé reste dû ; aucun prorata n’est pratiqué.',
              },
            ],
            [
              {
                text: 'En cas de résiliation, le Prestataire remet au Client les fichiers sources du site et procède au transfert du nom de domaine vers le prestataire de son choix.',
              },
            ],
            [
              {
                text: 'L’abonnement ne comprend ni la refonte du site, ni l’ajout de pages ou de fonctionnalités, ni la production de contenu, qui relèvent d’un devis distinct.',
              },
            ],
          ],
        },
        {
          heading: 'Article 12 — Propriété intellectuelle',
          blocs: [
            [
              {
                text: 'À compter du paiement intégral du prix, le Prestataire cède au Client les droits de reproduction, de représentation et d’adaptation du site livré, pour la durée légale de protection et pour le monde entier.',
              },
            ],
            [
              {
                text: 'Jusqu’à complet paiement, le Prestataire demeure titulaire de l’ensemble des droits sur les travaux réalisés.',
              },
            ],
            [
              {
                text: 'Demeurent la propriété de leurs auteurs respectifs les composants tiers intégrés au site (polices de caractères, bibliothèques logicielles, images sous licence), régis par leurs licences propres, dont le Client est informé au devis.',
              },
            ],
            [
              {
                text: 'Le savoir-faire, les méthodes de travail et les briques de code réutilisables du Prestataire restent sa propriété exclusive et peuvent être réemployés pour d’autres clients.',
              },
            ],
          ],
        },
        {
          heading: 'Article 13 — Référence commerciale',
          blocs: [
            [
              {
                text: 'Sauf opposition écrite du Client, le Prestataire peut citer le nom du Client et présenter des captures du site réalisé à titre de référence, sur son propre site et sur ses supports de présentation. Le Client peut retirer cette autorisation à tout moment par simple demande adressée à ',
              },
              lien,
              { text: '.' },
            ],
          ],
        },
        {
          heading: 'Article 14 — Responsabilité',
          blocs: [
            [
              {
                text: 'Le Prestataire est tenu d’une obligation de moyens. Il ne saurait être tenu responsable des contenus fournis par le Client, ni d’une indisponibilité du site imputable à l’hébergeur, au bureau d’enregistrement du nom de domaine ou au réseau.',
              },
            ],
            [
              {
                text: 'Aucun engagement de résultat n’est pris quant au positionnement du site dans les moteurs de recherche : le Prestataire met en œuvre les bonnes pratiques techniques reconnues, mais les algorithmes de classement demeurent hors de son contrôle.',
              },
            ],
            [
              {
                text: 'En tout état de cause, la responsabilité du Prestataire est limitée au montant effectivement réglé par le Client au titre de la prestation concernée.',
              },
            ],
          ],
        },
        {
          heading: 'Article 15 — Données personnelles',
          blocs: [
            [
              {
                text: 'Les données communiquées par le Client (nom, adresse électronique, numéro de téléphone, adresse de facturation) sont traitées aux seules fins d’exécution du contrat et d’établissement de la facturation. Elles sont conservées pendant la durée légale applicable aux documents comptables et ne font l’objet d’aucune cession à des tiers.',
              },
            ],
            [
              {
                text: 'Conformément au règlement général sur la protection des données, le Client dispose d’un droit d’accès, de rectification, d’effacement et de portabilité, qu’il exerce en écrivant à ',
              },
              lien,
              { text: '.' },
            ],
          ],
        },
        {
          heading: 'Article 16 — Force majeure',
          blocs: [
            [
              {
                text: 'Aucune des parties ne peut être tenue responsable d’un manquement à ses obligations résultant d’un événement de force majeure au sens de l’article 1218 du code civil. L’exécution est suspendue pendant la durée de l’événement ; si celle-ci excède deux (2) mois, chaque partie peut résilier le contrat par écrit, les prestations déjà exécutées restant dues.',
              },
            ],
          ],
        },
        {
          heading: 'Article 17 — Réclamations et médiation',
          blocs: [
            [
              { text: 'Toute réclamation doit être adressée en premier lieu à ' },
              lien,
              { text: ', qui s’engage à y répondre sous quinze (15) jours.' },
            ],
            [
              {
                text: 'Conformément aux articles L612-1 et suivants du code de la consommation, le Client consommateur peut recourir gratuitement à un médiateur de la consommation en vue de la résolution amiable du litige, dans un délai d’un an à compter de sa réclamation écrite :',
              },
            ],
            [{ text: '[Nom du médiateur — à compléter]' }, { br: true }, { text: '[Adresse et site web du médiateur — à compléter]' }],
          ],
        },
        {
          heading: 'Article 18 — Droit applicable et juridiction',
          blocs: [
            [
              {
                text: 'Les présentes CGV sont soumises au droit français. À défaut de résolution amiable, tout litige relève de la compétence des juridictions françaises. Lorsque le Client est un professionnel, compétence est attribuée au tribunal dans le ressort duquel se trouve le siège du Prestataire.',
              },
            ],
          ],
        },
      ],
    };
  }

  // ------------------------------------------------------------------ EN --

  function versionEn(): DocumentLegalTexte {
    return {
      meta: {
        title: 'Terms and conditions of sale — Studio Caducée',
        description:
          'Studio Caducée’s terms and conditions of sale: quotes, prices, payment, right of withdrawal, intellectual property, and mediation.',
      },
      eyebrow: 'Legal information',
      title: 'Terms and conditions of sale',
      maj: `Last updated: ${MISE_A_JOUR.en}`,
      sections: [
        {
          heading: 'Article 1 — Purpose and scope',
          blocs: [
            [
              {
                text: 'These terms and conditions of sale (“the Terms”) govern the website design, redesign, and maintenance services provided by Studio Caducée (“the Provider”) to its clients (“the Client”).',
              },
            ],
            [
              {
                text: 'Placing an order constitutes unreserved acceptance of these Terms, which prevail over any other document issued by the Client, including its own purchasing conditions. They are attached to every quote and available at all times on this site.',
              },
            ],
            [
              {
                text: 'The Provider may amend them at any time. The version applicable to an order is the one in force on the date the corresponding quote is signed.',
              },
            ],
          ],
        },
        {
          heading: 'Article 2 — Provider identity',
          blocs: [
            [
              { text: 'Studio Caducée — [Full name]' },
              { br: true },
              { text: 'Sole proprietor' },
              { br: true },
              { text: '[Address]' },
              { br: true },
              { text: 'SIRET: [to be completed]' },
              { br: true },
              { text: 'Contact: ' },
              lien,
              { text: ' — ' },
              { link: TELEPHONE.texte, href: TELEPHONE.href },
            ],
          ],
        },
        {
          heading: 'Article 3 — Quotes and formation of the contract',
          blocs: [
            [
              {
                text: 'Every engagement is covered by a free, itemised quote setting out the scope, price, and expected timeline. The quote is valid for thirty (30) days from issue.',
              },
            ],
            [
              {
                text: 'The contract is formed upon receipt of the quote, dated, signed, and marked “bon pour accord”, together with payment of the deposit set out in Article 5.',
              },
            ],
            [
              {
                text: 'Any request falling outside the scope described in the quote is covered by a supplementary quote, accepted in the same manner before work begins.',
              },
            ],
          ],
        },
        {
          heading: 'Article 4 — Prices',
          blocs: [
            [
              {
                text: 'Prices are stated in euros and are net of tax. VAT not applicable under Article 293 B of the French General Tax Code.',
              },
            ],
            [{ text: 'Indicative prices for the fixed-price packages are as follows:' }],
            {
              liste: [
                [{ text: `Essentiel package — ${essentiel}` }],
                [{ text: `Sur mesure package — from ${surMesure}` }],
                [{ text: `Signature package — from ${signature}` }],
                [
                  {
                    text: `Hosting, domain name, and maintenance — ${hebergement} per month, optional (Article 11)`,
                  },
                ],
              ],
            },
            [
              {
                text: 'These amounts are indicative: only the price stated in the accepted quote binds the parties.',
              },
            ],
            [
              {
                text: 'Domain name, hosting, font licence, and paid image costs, where required, are either re-invoiced at cost against receipts or purchased directly by the Client in its own name.',
              },
            ],
          ],
        },
        {
          heading: 'Article 5 — Payment terms',
          blocs: [
            [
              {
                text: `A deposit of ${ACOMPTE_POURCENT}% of the total is payable on order. The balance falls due on delivery, before the site goes live. Payment is made by bank transfer within thirty (30) days of the invoice date.`,
              },
            ],
            [{ text: 'No discount is granted for early payment.' }],
            [
              {
                text: 'In accordance with Articles L441-10 and D441-5 of the French Commercial Code, late payment automatically incurs, without prior reminder, interest at three times the statutory rate, together with a fixed recovery charge of €40.',
              },
            ],
            [
              {
                text: 'The Provider may suspend work in progress after a formal notice has gone unanswered for fifteen (15) days, without such suspension giving rise to any compensation.',
              },
            ],
          ],
        },
        {
          heading: 'Article 6 — Right of withdrawal',
          blocs: [
            [
              {
                text: 'A Client who is a consumer within the meaning of the French Consumer Code has fourteen (14) days from the conclusion of the contract to exercise their right of withdrawal, without giving reasons and without penalty (Article L221-18 of the French Consumer Code).',
              },
            ],
            [
              { text: 'This right is exercised by an unambiguous written statement sent to ' },
              lien,
              { text: '. A model withdrawal form is attached to the quote.' },
            ],
            [
              {
                text: 'If the Client expressly requests that performance begin before the end of this period, they retain the right of withdrawal but remain liable for the amount corresponding to the service actually provided up to the point of withdrawal (Article L221-25).',
              },
            ],
            [
              {
                text: 'This right does not apply to a Client acting in the course of its professional activity.',
              },
            ],
          ],
        },
        {
          heading: 'Article 7 — How the work proceeds',
          blocs: [
            [
              {
                text: 'The engagement runs in four stages: initial discussion, design, build, then go-live.',
              },
            ],
            [
              {
                text: `${ALLERS_RETOURS === 2 ? 'Two' : String(ALLERS_RETOURS)} rounds of revisions are included in every package. Beyond that, revisions are charged at the hourly rate stated in the quote.`,
              },
            ],
            [
              {
                text: 'Revisions means adjustments to content and formatting within the agreed scope. A change of visual direction, or the addition of pages or features, requires a supplementary quote.',
              },
            ],
          ],
        },
        {
          heading: 'Article 8 — Client obligations',
          blocs: [
            [
              {
                text: 'Successful delivery depends on the Client’s active cooperation. The Client undertakes to:',
              },
            ],
            {
              liste: [
                [
                  {
                    text: 'supply all necessary materials (text, images, logo, technical access) within a reasonable time;',
                  },
                ],
                [
                  {
                    text: 'warrant that it holds the rights to use those materials, and indemnify the Provider against any third-party claim in that respect;',
                  },
                ],
                [{ text: 'appoint a single point of contact authorised to sign off each stage;' }],
                [{ text: 'respond to approval requests within a reasonable time.' }],
              ],
            },
            [
              {
                text: 'Any delay in supplying these materials postpones the delivery date accordingly, and cannot be held against the Provider.',
              },
            ],
          ],
        },
        {
          heading: 'Article 9 — Timelines',
          blocs: [
            [
              {
                text: 'Timelines run from receipt of the deposit and of all materials referred to in Article 8, whichever is later.',
              },
            ],
            [
              {
                text: 'They are indicative. An overrun cannot give rise to cancellation of the order, withholding of payment, or damages, save in the event of established fault by the Provider.',
              },
            ],
          ],
        },
        {
          heading: 'Article 10 — Acceptance and go-live',
          blocs: [
            [
              {
                text: 'On delivery, the Client has fourteen (14) days to report in writing any non-conformity with the accepted quote. After that period, the work is deemed accepted without reservation.',
              },
            ],
            [
              {
                text: 'Publication on the final domain name takes place once the price has been paid in full.',
              },
            ],
          ],
        },
        {
          heading: 'Article 11 — Hosting and maintenance',
          blocs: [
            [
              {
                text: `The Client may take out a monthly subscription of ${hebergement}, covering site hosting, the domain name, and technical updates.`,
              },
            ],
            [
              {
                text: 'This subscription has no minimum term. Either party may terminate it at any time, in writing, giving one (1) month’s notice. The month in progress remains payable; no pro rata refund applies.',
              },
            ],
            [
              {
                text: 'On termination, the Provider hands over the site’s source files and transfers the domain name to the provider of the Client’s choice.',
              },
            ],
            [
              {
                text: 'The subscription covers neither redesign, nor the addition of pages or features, nor content production, all of which require a separate quote.',
              },
            ],
          ],
        },
        {
          heading: 'Article 12 — Intellectual property',
          blocs: [
            [
              {
                text: 'Upon payment of the price in full, the Provider assigns to the Client the rights to reproduce, display, and adapt the delivered site, for the statutory term of protection and worldwide.',
              },
            ],
            [
              {
                text: 'Until payment in full, the Provider retains all rights in the work produced.',
              },
            ],
            [
              {
                text: 'Third-party components integrated into the site (typefaces, software libraries, licensed images) remain the property of their respective authors and are governed by their own licences, of which the Client is informed in the quote.',
              },
            ],
            [
              {
                text: 'The Provider’s know-how, working methods, and reusable code components remain its exclusive property and may be reused for other clients.',
              },
            ],
          ],
        },
        {
          heading: 'Article 13 — Use as a reference',
          blocs: [
            [
              {
                text: 'Unless the Client objects in writing, the Provider may name the Client and display screenshots of the delivered site as a reference, on its own site and in its presentation materials. The Client may withdraw this permission at any time by writing to ',
              },
              lien,
              { text: '.' },
            ],
          ],
        },
        {
          heading: 'Article 14 — Liability',
          blocs: [
            [
              {
                text: 'The Provider is bound by an obligation of means. It cannot be held liable for content supplied by the Client, nor for unavailability of the site attributable to the host, the domain registrar, or the network.',
              },
            ],
            [
              {
                text: 'No undertaking is given as to the site’s ranking in search engines: the Provider applies recognised technical best practice, but ranking algorithms remain outside its control.',
              },
            ],
            [
              {
                text: 'In any event, the Provider’s liability is limited to the amount actually paid by the Client for the engagement concerned.',
              },
            ],
          ],
        },
        {
          heading: 'Article 15 — Personal data',
          blocs: [
            [
              {
                text: 'Data supplied by the Client (name, email address, telephone number, billing address) is processed solely to perform the contract and issue invoices. It is retained for the statutory retention period applicable to accounting records and is never sold or shared with third parties.',
              },
            ],
            [
              {
                text: 'Under the General Data Protection Regulation, the Client has rights of access, rectification, erasure, and portability, exercisable by writing to ',
              },
              lien,
              { text: '.' },
            ],
          ],
        },
        {
          heading: 'Article 16 — Force majeure',
          blocs: [
            [
              {
                text: 'Neither party may be held liable for a failure to perform resulting from an event of force majeure within the meaning of Article 1218 of the French Civil Code. Performance is suspended for the duration of the event; if it exceeds two (2) months, either party may terminate the contract in writing, with work already carried out remaining payable.',
              },
            ],
          ],
        },
        {
          heading: 'Article 17 — Complaints and mediation',
          blocs: [
            [
              { text: 'Any complaint should first be addressed to ' },
              lien,
              { text: ', which undertakes to respond within fifteen (15) days.' },
            ],
            [
              {
                text: 'In accordance with Articles L612-1 et seq. of the French Consumer Code, a Client who is a consumer may refer the matter free of charge to a consumer mediator with a view to an amicable settlement, within one year of their written complaint:',
              },
            ],
            [
              { text: '[Mediator name — to be completed]' },
              { br: true },
              { text: '[Mediator address and website — to be completed]' },
            ],
          ],
        },
        {
          heading: 'Article 18 — Governing law and jurisdiction',
          blocs: [
            [
              {
                text: 'These Terms are governed by French law. Failing an amicable settlement, any dispute falls within the jurisdiction of the French courts. Where the Client is a business, jurisdiction is conferred on the court in whose district the Provider’s registered office is located.',
              },
            ],
          ],
        },
      ],
    };
  }
}
