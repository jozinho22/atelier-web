# Modèle de devis — les blocs contractuels

**Le devis est le contrat.** L'article 3 des conditions générales de vente le
dit : le contrat est formé à la réception du devis daté, signé, revêtu de la
mention « bon pour accord », et accompagné de l'acompte. Il n'y a pas de contrat
de prestation séparé à signer — en ajouter un contredirait cet article.

Ce fichier ne remplace pas ton logiciel de facturation, qui gère la numérotation,
les totaux et les mentions fiscales. Il rassemble ce que ce logiciel **ne sait
pas** : les clauses qui font du devis un contrat.

Conditions générales de vente : {{URL_CGV}}

---

## 1 · Les champs à remplir

| champ | où le trouver |
| --- | --- |
| numéro de devis | généré par ton outil, séquentiel |
| date d'émission, validité **30 jours** | article 3 |
| identité du Client, adresse, SIRET s'il est professionnel | |
| **interlocuteur unique habilité à valider** | article 8 — à nommer, pas à découvrir |
| désignation détaillée de la prestation | c'est le périmètre auquel renvoient les articles 7 et 9 |
| prix, mention « TVA non applicable, article 293 B du CGI » | article 4 |
| **tarif horaire** des modifications hors forfait | article 7 — sans lui, la clause est inapplicable |
| délai prévisionnel | article 9 |
| composants tiers sous licence, le cas échéant | article 12 |
| sous-traitants ultérieurs, si abonnement d'hébergement | annexe RGPD, article 6 |

---

## 2 · Ce qu'il faut joindre, en trois questions

| question | si oui |
| --- | --- |
| Le client est-il un **particulier** ? | joindre les CGV en PDF **et** le formulaire de rétractation |
| Vais-je **héberger** son site ? | joindre l'annexe RGPD de sous-traitance |
| Le devis dépasse-t-il **3 000 €**, ou est-ce un pack Signature ? | joindre le cahier des charges, signé dans les mêmes formes |

Si les trois réponses sont non — cas le plus fréquent, un professionnel qui
héberge ailleurs un site à moins de 3 000 € — **aucune pièce jointe n'est
obligatoire** : la mention de renvoi ci-dessous suffit, l'article L441-1 du code
de commerce n'imposant de communiquer les CGV qu'à qui les demande.

---

## 3 · Le bloc de signature, à reproduire tel quel

> **Acceptation**
>
> Je reconnais avoir pris connaissance des conditions générales de vente de
> Studio Caducée, consultables à l'adresse {{URL_CGV}} et jointes le cas
> échéant au présent devis, et les accepter sans réserve.
>
> Le cas échéant, je reconnais également avoir reçu l'annexe RGPD de
> sous-traitance et le formulaire type de rétractation.
>
> Date : ..................................................................
>
> Nom et qualité du signataire : ..........................................
>
> Mention manuscrite « **Bon pour accord** » et signature :
>
> .........................................................................

**Les trois éléments comptent ensemble** : la date, la mention manuscrite et la
signature. Un devis signé sans la mention, ou daté sans signature, affaiblit la
preuve que le contrat a bien été formé — et c'est cette preuve qui te sert le
jour où le périmètre est contesté.

---

## 4 · La clause d'exécution anticipée — clients particuliers seulement

À ajouter **uniquement** si le client est un consommateur et souhaite que le
travail commence avant la fin des quatorze jours de rétractation. Sans elle, une
rétractation en cours de projet ne laisse rien à facturer, quel que soit le
travail fourni.

> « Je demande expressément que l'exécution de la prestation commence avant
> l'expiration du délai de rétractation de quatorze jours, et reconnais rester
> redevable du montant correspondant au service fourni jusqu'à la communication
> éventuelle de ma décision de rétractation. »

---

## 5 · Ce que le devis déclenche

Une fois signé et l'acompte reçu, le compte à rebours des articles 8 et 9
commence — mais **seulement à partir du plus tardif** entre l'acompte et la
réception de tous les éléments du client. Datez par écrit le jour où le dossier
est complet : sans cette date, l'article 9 ne protège de rien.

La suite est décrite dans `DEROULE-CLIENT.md`.
