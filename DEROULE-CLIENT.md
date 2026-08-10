# Déroulé client — du prospect à la mise en ligne

Le parcours est déjà écrit, mais éparpillé dans les dix-huit articles des
[CGV](src/i18n/cgv.ts). Ce document le remet dans l'ordre et renvoie, à chaque
étape, à l'article qui la gouverne. **Les CGV font foi** : si les deux
divergent, c'est ce fichier qu'il faut corriger.

---

## 1 · Le prospect arrive

Formulaire de contact — nom, e-mail, **pack**, message — ou lien direct
`mailto:` / `tel:`. Le champ leurre et Turnstile filtrent en amont ; la
notification arrive avec la pastille du pack et son nom dans l'objet, ce qui
permet de trier la boîte sans ouvrir.

Le pack choisi donne l'ordre de grandeur avant le premier échange. « Je ne sais
pas encore » est une réponse fréquente et attendue : beaucoup écrivent
justement pour le déterminer.

## 2 · Premier échange

Rien de contractuel. Deux choses à obtenir :

- le **périmètre réel** — ce que le client croit vouloir n'est pas toujours ce
  dont il a besoin ;
- **qui décide.** L'article 8 exige un interlocuteur unique habilité à valider.
  À nommer dans le devis, pas à découvrir au troisième aller-retour.

## 3 · Le devis — article 3

Gratuit, détaillé (périmètre, prix, délai prévisionnel), **valable 30 jours**.

Ce qu'il emporte avec lui :

| pièce | quand | article |
| --- | --- | --- |
| les CGV | **toujours** | 1 |
| [formulaire de rétractation](FORMULAIRE-RETRACTATION.md) | client **consommateur** | 6 |
| cahier des charges | pack Signature, ou devis > 3 000 € | 3 |
| annexe RGPD de sous-traitance | si abonnement d'hébergement | 15 |
| licences des composants tiers | si polices ou images sous licence | 12 |
| tarif horaire hors forfait | toujours | 7 |
| liste des sous-traitants ultérieurs | si abonnement | annexe, art. 6 |

## 4 · Formation du contrat — article 3

Devis **daté, signé, mention « bon pour accord »**, *et* versement de l'acompte
de 30 %. Les deux : un devis signé sans acompte ne forme aucun contrat.

## 5 · Le délai de rétractation — article 6

Quatorze jours, **pour le client consommateur uniquement**. Un professionnel
n'en bénéficie pas.

⚠️ **Le piège le plus coûteux du parcours.** Commencer le travail avant la fin
du délai sans la **demande expresse et écrite** du client : en cas de
rétractation, rien n'est facturable, quel que soit le travail fourni. La
formulation à faire signer est dans le
[formulaire de rétractation](FORMULAIRE-RETRACTATION.md).

## 6 · Collecte des éléments — articles 8 et 9

Textes, images, logo, accès techniques. Le client garantit qu'il en détient les
droits — cette garantie est ce qui protège en cas de réclamation d'un tiers.

**Les délais ne courent qu'à compter du plus tardif entre l'acompte et le
dossier complet.** En pratique le client envoie au compte-gouttes : **dater par
écrit** le jour où tout est réuni, faute de quoi l'article 9 ne protège de rien.

## 7 · Conception, puis réalisation — article 7

**Deux allers-retours inclus.** Les compter explicitement à chaque envoi — « voici
la version 2, il reste un aller-retour inclus ». Sans cela, le troisième est
toujours « le premier vrai » aux yeux du client.

Distinguer, parce que la frontière est contractuelle :

- **modification incluse** — ajustement de contenu ou de mise en forme dans le
  périmètre convenu ;
- **devis complémentaire** — changement d'orientation graphique, page ou
  fonctionnalité en plus.

## 8 · Livraison et recette — article 10

**Quatorze jours** pour signaler par écrit les non-conformités *au devis
accepté* — pas les changements d'avis. Passé ce délai, acceptation tacite.

## 9 · Le solde, avant la mise en ligne — articles 5, 10 et 12

Trois choses convergent, et c'est le seul vrai levier du parcours :

- le solde est exigible **à la livraison** ;
- la mise en ligne n'intervient qu'**après paiement intégral** ;
- la **cession des droits** ne prend effet qu'au paiement intégral.

Mettre en ligne « en attendant le virement » les fait perdre tous les trois.

## 10 · Mise en ligne

Sur le nom de domaine définitif.

## 11 · L'abonnement, s'il est souscrit — article 11

59 €/mois : hébergement, nom de domaine, mises à jour techniques. Sans
engagement, préavis d'un mois, mois entamé dû.

C'est à ce moment seulement que le Prestataire devient **sous-traitant RGPD** et
que l'annexe s'applique.

À tenir :

- **prévenir 30 jours avant l'échéance du domaine.** C'est une obligation de
  l'article 11, et le risque le plus lourd de tout le contrat : un domaine perdu
  ne se rattrape pas ;
- en cas d'impayé, **mise en demeure → 15 jours → suspension → résiliation à
  30 jours**. La suspension n'efface rien, et la réversibilité joue même dans ce
  cas : retenir les fichiers serait un moyen de pression, pas un droit.

## 12 · Après

- **Référence commerciale** autorisée sauf opposition écrite (article 13).
- Toute demande hors périmètre repart en **devis complémentaire**.
- Réclamation : réponse sous 15 jours, puis médiation CM2C pour un consommateur
  (article 17).

---

## Ce qui reste à préparer

| | pourquoi |
| --- | --- |
| modèle de devis numéroté | rien ne le remplace pour former le contrat |
| modèle de facture conforme | numérotation séquentielle, SIRET, mention 293 B |
| modèle de cahier des charges | pour ne pas l'improviser au premier Signature |
| compte Stripe et liens de paiement | prévu à l'article 5 |
| attestation RC Pro | souvent exigée avant signature par les structures un peu grandes |
| plateforme de dématérialisation | **réception obligatoire au 1ᵉʳ septembre 2026**, émission au 1ᵉʳ septembre 2027 |
| registre des traitements | l'annexe RGPD affirme qu'il est tenu (art. 11) |
| relecture juridique | CGV et annexe sont des rédactions de départ |
| vérification du SIRET | l'établissement peut différer de celui de l'autre activité |
