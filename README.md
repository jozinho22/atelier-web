# Studio Caducée — Site vitrine de création de sites web

Site vitrine de **Studio Caducée**, activité de création de sites web à
destination des professionnels et associations, avec huit modèles de
démonstration par métier.

Construit avec [Astro](https://astro.build) en **export 100 % statique** :
aucun serveur nécessaire, hébergeable partout (Netlify, Cloudflare Pages, OVH, nginx…).

## Pages

Site bilingue : **français à la racine**, **anglais sous `/en/`** (mêmes pages).

| URL | Contenu |
| --- | --- |
| `/` · `/en/` | Site principal : hero animé, services, modèles, méthode, tarifs, contact |
| `/modeles/association` · `/en/…` | Démo « AS Les Cigales » — association sportive & culturelle |
| `/modeles/batiment` · `/en/…` | Démo « Moreau Rénovation » — métiers du bâtiment |
| `/modeles/esthetique` · `/en/…` | Démo « L'Écrin de Soi » — institut de beauté |
| `/modeles/artiste` · `/en/…` | Démo « Claire Aubry » — blog/portfolio d'artiste peintre |
| `/modeles/yoga` · `/en/…` | Démo « Studio Anahata » — studio de yoga |
| `/modeles/restaurant` · `/en/…` | Démo « La Table d'Argile » — restaurant |
| `/modeles/salon-de-the` · `/en/…` | Démo « The Sugar & Steam Diner » — salon de thé |
| `/modeles/boulangerie` · `/en/…` | Démo « Le Fournil de Kerlann » — boulangerie-pâtisserie |
| `/mentions-legales` · `/en/…` | Mentions légales |
| `/politique-de-confidentialite` · `/en/…` | Politique de confidentialité — information des visiteurs (article 13) |
| `/cgv` · `/en/…` | Conditions générales de vente (à faire relire) |
| `/sous-traitance` · `/en/…` | Annexe RGPD de sous-traitance (article 28) — **hors pied de page**, voir plus bas |
| `/qui-sommes-nous` · `/en/…` | Présentation du studio |

## Le modèle « Boulangerie »

Huitième vitrine, construite sur quatre photographies (`public/modeles/boulangerie/` :
`devanture`, `interieur`, `patisseries`, `chocolats`). Elle n'ajoute **aucune
police** : Fraunces et Outfit, déjà chargées par le gabarit de base, suffisent.

Son panneau de menu mobile est le seul des huit à être **clair** — crème et bois,
filet cuivre. Un panneau sombre aurait démenti la boulangerie.

**⚠️ La devanture photographiée porte l'enseigne d'une chaîne réelle.** Le modèle
emploie donc un nom inventé (« Le Fournil de Kerlann ») et le hero cadre sous
l'enseigne (`object-position: center 62%`). À régénérer avant toute mise en ligne
publique : un nom déposé sur la vitrine d'une démonstration n'est pas tenable.

## Le modèle « Salon de thé »

Venu du dépôt `modele-salon-de-the`, où il occupait **cinq pages** en tant que
modèle du pack Sur mesure. Ramené ici à une page comme les six autres vitrines,
il conserve sa page d'accueil — vidéo comprise —, sa palette cerise et formica,
ses titres condensés et son enseigne au néon. Les liens qui menaient aux autres
pages sont devenus des ancres.

C'est le seul modèle à charger ses propres polices : Oswald et Pacifico sont
importées depuis [SalonDeTheDemo.astro](src/components/pages/SalonDeTheDemo.astro)
et non depuis le gabarit de base, pour ne pas peser sur les vingt autres pages.

Une seule valeur s'écarte de la source, et elle est mesurée : le palier
intermédiaire du voile du hero passe de 0,2 à 0,45. En masquant le texte et en
relevant les pixels du fond nu derrière chaque ligne, le sur-titre de 12 px
tombait à 3,45:1 sur les éclats les plus clairs de la vidéo — il se trouve
exactement au point le plus mince du dégradé. Il tient maintenant 5,03:1.

La vidéo (980 Ko) est copiée **sans réencodage** : la source est déjà
efficacement compressée, et tout réencodage à qualité comparable l'alourdissait
(1 016 Ko à CRF 29). Un passage en 960 × 540 ne gagnait que 15 % pour un SSIM
de 0,971.

## La vidéo du hero

Carrousel de captures de sites qui défile horizontalement, servi en WebM avec un
MP4 de repli pour Safari. Chemins via `withBase()`, et `data-boucle` pour que le
gabarit de base arrête la boucle en mouvement réduit.

**Réencodée**, et le gain est net :

| | webm | mp4 | total |
| --- | --- | --- | --- |
| source fournie | 2 604 Ko | 2 875 Ko | 5 479 Ko |
| servie — 960×540, flou 0,6 | 1 563 Ko | 1 708 Ko | **3 271 Ko** |

**À pleine résolution, il n'y a rien à gagner.** La source est déjà efficacement
encodée, et trois tentatives sont ressorties plus lourdes qu'elle :

| tentative, en 1280×720 | poids |
| --- | --- |
| CRF 40, sans flou | 3 020 Ko |
| CRF 38, flou 0,4 | 2 990 Ko |
| CRF 34, deux passes, sans flou | 4 467 Ko |
| *source* | *2 604 Ko* |

Le seul levier est donc la **résolution** — et c'est précisément ce qui coûte de
la netteté, le montage étant plein de texte fin en mouvement. Une version à
854×480 pesait 1 867 Ko (−66 %) mais a été jugée trop molle à l'œil ; 960×540 est
le compromis retenu. Le GOP passe au passage de 2 s à 10 s : une boucle de fond
ne se parcourt jamais.

⚠️ **Leçon de méthode** : l'écart moyen sous le voile donnait 0,49 sur 255 pour la
version à 854×480, ce qui laissait croire la perte invisible. Une moyenne sur
toute l'image noie exactement ce qui se dégrade — du texte fin en mouvement sur
quelques pour cent de la surface. L'œil sur un vrai écran a tranché autrement.

**Le vrai gain est en amont** : réexporter le carrousel depuis son projet source
directement en 960×540 rendrait le texte net à cette taille, au lieu de le
rééchantillonner. Aucun réencodage ne peut égaler cela.

Le voile lui-même a été revérifié sur trente-cinq images du montage — pire cas
12,5:1 pour le texte blanc du hero, seuil AA à 4,5.

Les fichiers d'origine sont conservés dans `.medias-avant/`, ignoré par git : une
fois réencodés, on ne peut plus revenir en arrière sans master.

## Réalisations — replis d'URL et d'icône

Chaque réalisation est décrite dans
[src/data/realisations.ts](src/data/realisations.ts) : son adresse de
production, son icône, ses couleurs, et **ce qu'il faut faire si le site ne
répond plus**.

| champ | rôle |
| --- | --- |
| `enLigne` | la production répond-elle ? |
| `depotRepli` | dépôt GitHub Pages montré à sa place quand elle ne répond pas |
| `iconeVerifiee` | l'icône a-t-elle pu être confrontée à la production ? |

Quand `enLigne` vaut `false`, ce qui se passe dépend de l'endroit où le site
tourne :

| | réalisation hors ligne |
| --- | --- |
| `astro dev` | le lien bascule sur `https://jozinho22.github.io/<depotRepli>/` |
| tout **build** — y compris la démo github.io | **la carte n'apparaît pas** |

Le repli est un outil d'atelier, pas un contenu : il permet de travailler la
section quand un domaine ne répond plus. Un visiteur, lui, n'a que faire d'un
lien de secours vers un dépôt — ou le site est en ligne et on le montre, ou il ne
l'est pas et il n'a pas sa place dans une vitrine de travaux livrés.

La démonstration github.io suit la règle du build, et non celle du développement :
elle est tout aussi publique.

En développement, **le domaine affiché suit le lien** — voir
`jozinho22.github.io/...` sous une carte est le signe qu'on regarde un repli.
Annoncer « api-jawa.fr » sous un lien qui mène ailleurs tromperait le lecteur.

Si toutes les réalisations passent hors ligne, la section entière s'efface :
mieux vaut pas de section qu'un titre au-dessus d'un carrousel vide.

Les icônes, elles, sont de toute façon **locales** dans `public/portfolio/` : la
page ne fait aucune requête externe, et une icône ne peut pas disparaître si un
client change d'hébergeur.

```bash
npm run verifier-realisations
```

La sonde confronte l'état déclaré à la réalité et **ne modifie rien**. C'est
délibéré : le site doit se construire à l'identique depuis un même commit. Si
une sonde réseau décidait des liens au moment du build, un incident DNS passager
suffirait à publier une page différente sans que personne l'ait voulu.

Elle compare les icônes **perceptuellement**, après aplatissement sur blanc et
remise à la même taille — une comparaison octet à octet serait sans valeur, le
fichier local étant un dérivé encodé autrement.

**État au dernier passage** : `api-jawa.fr` ne résout pas ; son lien montre
`jozinho22.github.io/api-jawa` et son icône vient du dépôt. Les trois autres
sont en ligne et à jour.

## Documents hors site

Trois fichiers à la racine ne sont pas publiés : ils accompagnent le contrat.

| fichier | rôle |
| --- | --- |
| [MODELE-DEVIS.md](MODELE-DEVIS.md) | les blocs contractuels du devis — **le devis est le contrat**, article 3 |
| [DEROULE-CLIENT.md](DEROULE-CLIENT.md) | le parcours du prospect à la mise en ligne, chaque étape renvoyée à son article des CGV |
| [FORMULAIRE-RETRACTATION.md](FORMULAIRE-RETRACTATION.md) | modèle réglementaire, **à joindre à tout devis adressé à un consommateur** |

### Les mettre en A4

```bash
npm run generer-documents
```

Produit onze PDF A4 dans `documents/` — CGV, annexe RGPD, politique de
confidentialité et mentions légales dans les deux langues, plus le formulaire de
rétractation, le modèle de devis et le déroulé client. Pagination en pied de page : sur un contrat, pouvoir dire
« article 5, page 2 » compte.

La même commande écrit **`documents/modele-facture.xlsx`**, seule pièce qui ne
soit pas un PDF. Une facture se calcule : les totaux, la déduction de l'acompte
et l'échéance à trente jours y sont des formules, pas des nombres recopiés. Deux
feuilles :

| feuille | rôle |
| --- | --- |
| **Facture** | un A4 à remplir, mentions obligatoires comprises — franchise 293 B, pénalités de retard, absence d'escompte, le tout repris mot pour mot de l'article 5 des CGV |
| **Registre** | la liste des factures émises et le calcul du numéro suivant. La séquence doit être **continue** : ni trou, ni doublon, ni numéro réattribué |

⚠️ Les formules sont écrites **sans valeur en cache**, délibérément. Avec un
cache, LibreOffice affiche la valeur enregistrée sans recalculer — un total figé
à 0,00 € sur une facture pourtant remplie, et sans le moindre avertissement.
`verifierFormules()` refuse par ailleurs qu'une somme se contienne elle-même, et
`verifierIdentite()` fait échouer la génération si le SIRET ou l'adresse cessent
de correspondre aux mentions légales du site.

Les documents juridiques sont rendus **depuis `src/i18n/`**, la même source que
les pages du site. Un PDF recopié à la main divergerait de la page publiée dès
la première retouche — et c'est la version signée par le client qui ferait foi.
Les montants viennent de `src/data/tarifs.ts` : une hausse de prix se répercute
sur le site comme sur le PDF joint au devis.

Les adresses du site écrites dans ces documents sont **résolues à la
génération**, par [src/data/site.ts](src/data/site.ts) : tant que le domaine ne
sert pas le site, elles renvoient vers la copie GitHub Pages. Même mécanisme que
pour les réalisations, et pour la même raison — un lien mort dans un contrat
renvoie à un texte que l'article 1 des CGV dit « consultable à tout moment ».

### `EN_LIGNE` — le domaine sert-il le site ?

Le drapeau est **déduit de la configuration, jamais sondé**. Sonder au moment de
générer ferait dépendre le contenu d'un contrat de l'état du réseau : deux
générations du même commit ne donneraient pas le même document, et un incident
DNS passager suffirait à imprimer une adresse de repli sur une pièce signée.

Il compare l'adresse pour laquelle on construit à une liste d'**hôtes
d'attente** — `github.io`, `vercel.app`, et le `.example` du domaine réservé :

| construction | `EN_LIGNE` | adresses des documents | adresse de contact |
| --- | --- | --- | --- |
| défaut, sans variable | faux | repli GitHub Pages | `…1987@gmail.com` |
| `SITE_URL=https://jozinho22.github.io` | faux | repli GitHub Pages | `…1987@gmail.com` |
| Vercel, domaine non branché | faux | repli GitHub Pages | `…1987@gmail.com` |
| `SITE_URL=https://www.studio-caducee.com` | **vrai** | domaine définitif | `…@studio-caducee.com` |

**L'adresse de contact en dépend, et ce n'est pas cosmétique.** Afficher
`…@studio-caducee.com` avant que le domaine existe publierait une boîte qui
**refuse les messages** : le visiteur écrit, croit avoir écrit, et son message
revient en erreur. Une adresse d'attente qui fonctionne vaut mieux qu'une
adresse définitive qui n'existe pas. Elle bascule d'elle-même — voir
[contact.ts](src/data/contact.ts) —, dans le pied de page, les quatre documents
juridiques, les PDF et l'en-tête du modèle de facture à la fois.

**D'où vient l'adresse configurée**, selon qui lit le module :

| lecteur | source | pourquoi pas l'autre |
| --- | --- | --- |
| le site | `import.meta.env.SITE` | la valeur déjà résolue par `astro.config.mjs`, qui a lu `.env.local`, reconnu Vercel et appliqué le défaut |
| les scripts de `scripts/` | `process.env.SITE_URL` | ils tournent dans Node : ni `import.meta.env`, ni lecture des fichiers `.env` |

⚠️ `import.meta.env.SITE_URL` ne marche **pas** : Vite n'inline dans les modules
que les variables préfixées `PUBLIC_`. Mesuré — une sonde en frontmatter rend
`undefined` pour `SITE_URL` comme pour `process.env.SITE_URL`. Seule `SITE`,
posée par Astro lui-même, traverse. C'est le même piège que le préfixe
`PUBLIC_` du formulaire de contact, vu d'un autre côté.

⚠️ Les adresses sont écrites **en toutes lettres**, jamais cachées derrière un
lien. Un contrat se lit sur papier : vérification faite, `strings` ne trouvait
aucune URL dans le PDF produit, et le formulaire renvoyait donc aux CGV sans
dire où les trouver.

`documents/` est ignoré par git : ce sont des sorties, régénérables à tout
moment.

⚠️ **Deux limites de l'installation TeX de ce poste**, contournées dans le
script : LuaLaTeX échoue faute des Latin Modern OpenType — d'où pdfLaTeX —, et
`babel` n'a pas le fichier de langue française, donc l'option `lang` n'est pas
passée. Seules les espaces fines automatiques avant `: ; ! ?` sont perdues.
Installer `texlive-lang-french` permettrait de les rétablir.

Quelques caractères sont substitués avant conversion (`⚠️`, `→`, les exposants
de « 1ᵉʳ ») : pdfLaTeX ne sait pas les composer en encodage T1. Ils sont
**remplacés, jamais supprimés** — un avertissement dont on efface le pictogramme
avertit encore, mais une flèche disparue laisse une phrase bancale.

Le second comble un manque : l'article 6 des CGV affirmait qu'un formulaire type
était joint au devis, alors qu'il n'existait nulle part. Sa formulation reprend
l'annexe à l'article R221-1 du code de la consommation et **ne doit pas être
retouchée** — c'est au modèle réglementaire qu'un client se référera, pas à la
version qu'on en aurait faite.

⚠️ Omettre ce formulaire pour un consommateur prolonge son délai de rétractation
de **douze mois**.

## Pages juridiques

**Quatre** documents partagent un gabarit unique,
[src/components/DocumentLegal.astro](src/components/DocumentLegal.astro) : même
largeur de colonne, même hiérarchie de titres, mêmes styles de lien et de
liste. Ils ne diffèrent que par leur dictionnaire — [legal.ts](src/i18n/legal.ts),
[confidentialite.ts](src/i18n/confidentialite.ts), [cgv.ts](src/i18n/cgv.ts) et
[sous-traitance.ts](src/i18n/sous-traitance.ts) — tous typés par
[document-legal.ts](src/i18n/document-legal.ts).

**Trois d'entre eux seulement sont au pied de page.** L'annexe RGPD n'y est pas,
et c'est délibéré : ce n'est pas une politique du site mais une **annexe
contractuelle**, qui ne s'applique qu'au client ayant souscrit l'hébergement. La
poser au même rang que les mentions légales alourdissait le pied de mille mots
que le visiteur n'a aucune raison de lire. Elle reste publiée et atteinte par
deux chemins : le lien de l'article 15 des CGV, et une section dédiée de la
politique de confidentialité.

### Politique de confidentialité et annexe RGPD — à ne pas confondre

Les deux parlent de données personnelles et ce sont des instruments opposés :

| | politique de confidentialité | annexe RGPD |
| --- | --- | --- |
| article | 13 | 28 |
| rôle du studio | **responsable de traitement** de ses visiteurs | **sous-traitant** de son client |
| nature | information unilatérale | contrat |
| qui la signe | personne | le client, avec le devis |

L'une ne peut pas absorber l'autre. Une politique de confidentialité qui
tiendrait lieu de contrat de sous-traitance laisserait le **client** —
responsable de traitement — en infraction : c'est lui que la CNIL sanctionne
pour avoir recouru à un sous-traitant sans acte écrit.

Le texte de la politique vivait dans les mentions légales, sous « Données
personnelles ». Il y était complet mais introuvable : on cherche « politique de
confidentialité », pas une sous-partie d'un autre document. Les mentions légales
n'en gardent qu'un renvoi.

### Les renvois d'un document à l'autre

Ces textes se citent constamment — l'annexe s'appuie sur l'article 11 des CGV,
les CGV renvoient à l'annexe, les mentions légales aux CGV. Un segment
`{ link, page }` désigne alors la **page visée**, jamais son adresse :

| rendu | résolution | pourquoi pas l'autre |
| --- | --- | --- |
| le site | `localePath(lang, page)` | un chemin relatif, préfixé de la base et de la langue |
| les PDF | `urlPublique(page)` | le document part chez le client : il lui faut une URL absolue |

Un `href` écrit en dur ne peut servir qu'un seul des deux — et c'est le PDF,
muet sur son lien mort, qui perdrait. Un renvoi vers la page courante s'affiche
en texte simple, dans les deux rendus : le lien serait un cul-de-sac.

**Convention : un renvoi par article, sur la première mention.** L'annexe cite
les CGV neuf fois ; les lier toutes ferait du bruit, pas de la navigation.

### L'annexe RGPD de sous-traitance

Elle règle une relation que les CGV ne peuvent pas couvrir. Dès que le
Prestataire héberge un site qui collecte des données, **les rôles s'inversent** :
le client devient responsable de traitement, et Studio Caducée son
**sous-traitant** au sens de l'article 28 du RGPD — qui impose un acte écrit
comportant une liste précise de mentions.

L'article 15 des CGV ne traite que les données du client *en tant que client* :
nom, adresse, facturation. Deux relations distinctes, deux textes ; le premier
renvoie désormais au second.

C'est exactement la relation que ce site entretient avec Resend et Cloudflare,
vue de l'autre côté.

Ce qui varie d'un client à l'autre — catégories de données réellement
collectées, liste des sous-traitants ultérieurs, lieux d'établissement — est
renvoyé **au devis**, parce que cela dépend du site livré : un texte générique
qui l'inventerait serait faux.

Elle s'ouvre sur un **« En bref — ce que cela change pour vous »** de quatre
puces. Le corps du texte, lui, n'a pas été raccourci : ses treize articles
recouvrent un par un le contenu qu'impose l'article 28.3, et en couper un
mettrait le client en défaut. Ce qui décourageait à la lecture, c'était le
volume, pas les obligations — presque toutes pèsent sur le Prestataire. Le
résumé dit d'emblée ce qu'il fallait mille mots pour découvrir, à commencer par
le fait que le texte **ne s'applique que si l'hébergement est souscrit**.

Les CGV sont le seul dictionnaire qui soit une **fonction** de la langue plutôt
qu'un objet : les montants (packs, acompte, allers-retours, abonnement) sont lus
depuis [src/data/tarifs.ts](src/data/tarifs.ts) et mis en forme selon la locale.
Une hausse de prix se répercute donc d'elle-même sur le contrat comme sur la
page d'accueil, qui ne peuvent pas se contredire.

Chaque page porte, en tête **et** en pied, un retour à l'accueil et un lien vers
son document jumeau — ces pages n'ont ni menu d'ancres ni fil d'Ariane, et un
visiteur venu d'un moteur de recherche y arrive sans contexte.

Le corps de texte est **justifié à partir de 600 px** seulement. Le seuil est
mesuré : l'espace inter-mots médian rapporté à sa largeur naturelle vaut 1,68×
à 375 px contre 1,17× à 640 px. En dessous, la colonne est trop étroite (40
caractères par ligne) et la justification creuse des rivières de blanc.

Identité, SIRET, TVA et médiateur de la consommation (CM2C) sont **renseignés**,
repris des documents d'`expert-maths-lycee.fr` — même entité juridique. Deux
articles ne s'y transposaient pas et ont été adaptés : la TVA, dont l'exonération
citée là-bas ne vaut que pour les cours particuliers, et surtout le **droit de
rétractation**, que l'autre site écarte au titre d'une exception réservée aux
prestations à date déterminée. Créer un site n'en relève pas : le délai de
quatorze jours s'applique, et le recopier aurait retiré au consommateur un droit
qu'il détient.

⚠️ **Reste à vérifier** : le SIRET est celui de l'établissement de l'autre
activité. Le SIREN est bien le même, mais une seconde activité déclarée peut
porter un NIC distinct — l'avis de situation INSEE tranche.

Le texte des CGV est une rédaction de départ, pas un avis juridique : il suppose
la franchise en base de TVA, une clientèle incluant des consommateurs et un
abonnement sans engagement, et mérite une relecture professionnelle.

## Qui sommes-nous

Page autonome ([src/components/pages/QuiSommesNous.astro](src/components/pages/QuiSommesNous.astro),
textes dans [src/i18n/equipe.ts](src/i18n/equipe.ts)), atteinte depuis le pied de
page aux côtés des mentions légales et des CGV — délibérément absente de la page
d'accueil et de la navigation principale.

Les portraits (`public/profiles/`) sont flottés dans un disque, avec
`shape-outside: circle(50%)` pour que le texte suive la courbe. Les sources sont
presque carrées : cadrées telles quelles, le visage tombait à 34 % de la hauteur
du disque et la moitié basse ne montrait que la chemise. Un agrandissement de
1,25 depuis le bord haut le porte à 72 % du disque, centré à 40 %. Sous 600 px le
portrait repasse dans le flux, centré au-dessus de la biographie.

La biographie est **réelle**, et l'anglaise en est la traduction — pas un second
texte. La contradiction avec les mentions légales est levée aussi : le second
membre est commenté dans [equipe.ts](src/i18n/equipe.ts), et le studio se
présente au singulier comme le font les CGV. Le rétablir, c'est décommenter deux
objets et intervertir trois phrases laissées à côté des nouvelles.

## Internationalisation (FR/EN)

- **Textes** : un dictionnaire par page dans [src/i18n/](src/i18n/) (`{ fr: {...},
  en: {...} }`), plus [common.ts](src/i18n/common.ts) pour l'en-tête, le pied de
  page et le bandeau des démos.
- **Gabarits** : chaque page est un composant unique dans
  [src/components/pages/](src/components/pages/) qui déduit la langue de l'URL
  (`splitPath`).
- **Routes** : un seul fichier par page sous `src/pages/[...lang]/`, dont le
  `getStaticPaths()` émet les deux URL — `lang` vaut `undefined` en français
  (servi à la racine) et `'en'` en anglais. Pas de fichier de route à dupliquer.
- **Liens** : `localePath(lang, 'chemin')` ([src/lib/i18n.ts](src/lib/i18n.ts))
  pour les pages, `withBase()` pour les fichiers de `public/`.
- **Switch FR/EN** : [LanguageSwitch.astro](src/components/LanguageSwitch.astro),
  présent dans l'en-tête et le bandeau des démos, pointe toujours vers la même
  page dans l'autre langue.
- **SEO** : `<html lang>`, `og:locale`, balises `hreflang` (fr / en / x-default)
  et alternates dans le sitemap, générés automatiquement.

Ajouter une **page** : créer son dictionnaire, son gabarit, et un seul fichier
de route sous `src/pages/[...lang]/`. Ajouter une **langue** : l'ajouter dans
`LANGS`, dans `astro.config.mjs` et dans les `getStaticPaths()`, puis compléter
les dictionnaires.

## Commandes

```bash
npm install      # installer les dépendances
npm run dev      # serveur de dev sur http://localhost:4321
npm run build    # build statique dans dist/
npm run preview  # prévisualiser le build
```

## SEO — déjà en place

- Balises `title` / `meta description` uniques par page, `canonical`, Open Graph
- Données structurées JSON-LD (`ProfessionalService`) sur la page d'accueil
- `sitemap-index.xml` généré automatiquement au build + `robots.txt`
- HTML sémantique, un seul `h1` par page, `<html lang>` selon la langue servie
- Polices auto-hébergées (Fontsource), zéro requête externe

## Écran d'accueil mobile

Ajouté à l'écran d'accueil d'un téléphone, le site s'affiche sous le libellé
**« Studio Caducée »** et avec une vraie icône, non un favicon 32×32 agrandi.
Deux déclarations le permettent, et il faut les deux :

- `short_name` du manifeste
  ([src/pages/site.webmanifest.ts](src/pages/site.webmanifest.ts)), lu par
  Android ;
- `<meta name="apple-mobile-web-app-title">` dans
  [src/layouts/Base.astro](src/layouts/Base.astro), car **iOS ignore le
  manifeste**. Sans elle, iOS retombe sur le `<title>` — une phrase entière,
  tronquée à quelques caractères.

Les deux valent « Studio Caducée » (11 caractères, sous la limite de troncature
d'environ 12). Les modifier ensemble, jamais l'une sans l'autre.

Le champ `id` du manifeste, lui, **ne doit jamais changer** : il est l'identité
de l'application. Il inclut le chemin de base parce qu'il se résout contre
l'ORIGINE, et que `jozinho22.github.io` héberge tous les dépôts — un `id` réduit
à `/` y serait partagé avec chaque autre projet du compte.

Icônes déclarées (toutes présentes dans `public/`) : 32, 192 et 512 en `any`,
plus `icon-512-maskable.png` en `purpose: "maskable"` — celle-là seulement.

### Deux dessins, pas un

L'icône d'application et l'icône d'onglet ne portent **pas le même dessin**, et
c'est délibéré.

Le dessin complet — cadre, onglet, trois pastilles, trois barres — a une bordure
de 16 px sur 512. Réduite à 16 px, elle tombe à **0,5 px** : un demi-pixel ne se
trace pas, il devient un gris. Le glyphe n'occupe par ailleurs que 59 % du
canevas, soit neuf pixels utiles sur seize. Vérifié sur six rééchantillonnages
différents (Lanczos depuis la 512, moyenne d'aire, via le 32, l'ICO) : tous
donnent la même bouillie. **Ce n'est pas un problème de redimensionnement.**

| taille | dessin | d'où |
| --- | --- | --- |
| 16, 32 | marque simplifiée | `favicon.svg` |
| 48 | dessin complet | `android-chrome-512x512.png` |
| 180, 192, 512 | dessin complet | le jeu de favicons |

```bash
npm run generer-minis
```

`public/favicon.svg` est la **source** : traits épais, deux détails, marque à
fond perdu, couleurs relevées dans le dégradé du dessin complet. Le script en
tire `favicon-32x32.png` et `favicon.ico` (16 et 32 du SVG, 48 du dessin
complet — c'est à cela que sert un `.ico` multi-tailles). Modifier le SVG sans
relancer la commande désaccorderait les trois.

Netteté mesurée à 16 px : **13,3 → 53,0**.

⚠️ **Un SVG de favicon prime sur les PNG déclarés.** C'est pour cela que le
précédent avait été retiré : il portait encore l'ancien monogramme et masquait
les nouvelles icônes.

Le `16x16` n'est **plus déclaré**. Un onglet fait 16 px CSS mais 32 px réels sur
un écran à densité double : tant qu'une icône 16 est offerte, le navigateur la
juge idéale, la prend, puis l'étire. Sans elle il tombe sur le SVG, ou sur le 32
à sa résolution native. Le fichier reste dans `public/` mais n'est référencé
nulle part.

### Régénérer l'icône maskable

`icon-512-maskable.png` est **dérivée** de `android-chrome-512x512.png`, pas
dessinée à part. Elle est donc à refaire **à chaque changement du jeu de
favicons** :

```bash
npm run generer-maskable
```

Android ne montre pas l'icône telle quelle : il la découpe dans une forme qu'il
choisit — cercle, carré arrondi, goutte selon le lanceur — et cette forme peut
mordre jusqu'à 20 % du bord. Une icône `maskable` doit donc **remplir tout le
carré** d'une matière opaque, et ne rien mettre d'important hors du cercle
central de 80 %.

Le jeu de favicons est une **pastille** : disque blanc, coins transparents.
Déclarée `maskable` telle quelle, elle laisserait les coins vides dès que la
forme retenue n'est pas le cercle — un disque flottant dans un carré noir. Le
script l'aplatit sur la couleur de son propre disque, **relevée et non écrite en
dur** : aplatir sur le papier du site (`#f7f6f2`) laisserait un liseré visible
autour de la pastille, 1,072:1 de contraste sur une arête franche.

Il refuse d'écrire plutôt que de produire une icône fausse — si le glyphe déborde
de la zone sûre, ou si le pourtour du disque n'est pas uni. Le jeu actuel passe à
195,4 px de rayon pour 204,8 de zone sûre.

## Formulaire de contact — la seule route serveur

Le site reste statique. **Une** route échappe à la règle, injectée par
[astro.config.mjs](astro.config.mjs) : `POST /api/contact`
([src/server/contact.ts](src/server/contact.ts)).

| cible | serveur | formulaire |
| --- | --- | --- |
| `npm run dev` | oui | affiché, fonctionnel |
| Vercel | oui | affiché, fonctionnel |
| GitHub Pages | **non** | **absent** — liens `mailto:` et `tel:` seuls |

Un serveur de fichiers ne reçoit pas de POST : sur la démo, un formulaire
perdrait le message après que le visiteur l'a écrit. `SERVEUR_DISPONIBLE`
([src/lib/cible.ts](src/lib/cible.ts)) commande son affichage, comme `enLigne`
commande celui des réalisations. Les liens directs, eux, restent visibles sur
les trois cibles.

Le fichier de la route vit **hors de `src/pages/`**. Posé dedans, il serait routé
d'office et, marqué `prerender = false`, ferait échouer le build sans adaptateur
— celui de GitHub Pages, avec une erreur n'apparaissant qu'en CI.

### Ce qu'il faut configurer

Cinq variables, décrites dans [.env.example](.env.example) : `RESEND_API_KEY`,
`EMAIL_FROM`, `NOTIFY_EMAIL` pour l'envoi, `PUBLIC_TURNSTILE_SITE_KEY` et
`TURNSTILE_SECRET_KEY` pour la protection anti-robots. En production elles se
déclarent dans Vercel, jamais dans un fichier. Absentes, la route répond
« indisponible » : elle ne prétend jamais avoir envoyé.

⚠️ **Ne jamais écrire dans `.env.local`** — il porte les vraies clés et n'a
aucun historique qui permette de les récupérer. Pour essayer une valeur, la
passer en préfixe de commande : `PUBLIC_TURNSTILE_SITE_KEY=… npm run build`.

Mêmes noms et même convention que `expert-maths-lycee.fr` et
`french-overseas.com` — **la même adresse des deux côtés**, `EMAIL_FROM` portant
en plus un nom d'affichage :

```
EMAIL_FROM=Studio Caducée <josselin.douineau@studio-caducee.com>
NOTIFY_EMAIL=josselin.douineau@studio-caducee.com
```

Elles restent deux parce qu'elles ne jouent pas le même rôle. `EMAIL_FROM` est
une **identité** : Resend refuse d'expédier depuis un domaine dont on n'a pas
publié les enregistrements DNS, et c'est ce qui empêche un tiers d'écrire en ton
nom. `NOTIFY_EMAIL` n'est qu'une boîte aux lettres, libre de changer sans rien
revérifier.

L'adresse du visiteur ne va **jamais** dans `EMAIL_FROM` : ce serait une
usurpation, SPF et DKIM échoueraient et le message partirait en indésirables.
Elle part en `Reply-To`, si bien qu'un simple « Répondre » lui écrit.

### Anti-spam — trois couches

Un champ leurre invisible et un horodatage d'abord : un humain met plus de trois
secondes à écrire. Les deux répondent **200 comme si tout allait bien** — un
robot à qui l'on répond « rejeté » recommence en ajustant, à qui l'on répond
« merci », non.

Cloudflare Turnstile ensuite, même dispositif que sur `expert-maths-lycee.fr` et
`french-overseas.com`.

⚠️ **`PUBLIC_TURNSTILE_SITE_KEY`, et non `NEXT_PUBLIC_`.** Ces deux sites sont en
Next.js ; Astro n'expose au navigateur que le préfixe `PUBLIC_`. Mesuré dans le
bundle construit : `NEXT_PUBLIC_SONDE` vaut `undefined`, `PUBLIC_SONDE` porte sa
valeur. Avec le nom de Next, le widget ne se dessine pas, aucun jeton ne part, et
le formulaire rejette **tout** — sans le moindre message.

#### Ce que la route refuse, et pourquoi

| état des deux clés | comportement |
| --- | --- |
| aucune | Turnstile éteint — leurre et horodatage suffisent (cas du développement) |
| les deux | widget affiché, jeton vérifié auprès de Cloudflare |
| **une seule** | **503 « indisponible »**, avec la clé manquante au journal |

Le dernier cas est un garde délibéré. Clé publique seule : le widget s'affiche,
le serveur ne peut rien vérifier, et l'on croit être protégé — une protection de
façade est pire que pas de protection. Clé secrète seule : aucun jeton n'est
produit et tous les visiteurs légitimes sont refusés. Les deux arrivent pour une
faute de frappe, ou une variable posée en *Preview* et oubliée en *Production*.

Deux autres décisions, dans [src/server/contact.ts](src/server/contact.ts) :

- **Cloudflare injoignable vaut refus.** Laisser passer « pour ne pas bloquer »
  serait la porte que cherche un attaquant : il lui suffirait de rendre le
  service inaccessible depuis le serveur.
- **Le jeton est renouvelé à chaque refus.** Il ne sert qu'une fois ; le renvoyer
  après un champ mal rempli se ferait rejeter pour réutilisation, et le visiteur
  resterait bloqué sans comprendre.

#### Le prix à payer

Turnstile exige JavaScript — aucune vérification anti-robots ne peut s'en passer.
Le formulaire **perd donc son fonctionnement sans script**, que la route
préservait jusqu'ici. Un `<noscript>` oriente vers l'adresse e-mail plutôt que de
laisser buter sur un envoi qui échoue.

### Conséquence juridique

Les mentions légales affirmaient « aucune donnée personnelle, pas de formulaire ».
La section « Données personnelles » a été réécrite : finalité, base légale
(article 6.1.b), durée de conservation, droits, et **deux sous-traitants nommés**
— Resend pour l'acheminement, Cloudflare pour la protection anti-robots, qui
reçoit à ce titre l'adresse IP du visiteur. Formulation reprise de la politique
de confidentialité d'`expert-maths-lycee.fr`, pour que les trois sites disent la
même chose.

S'y ajoute la clause de transfert hors UE : ces prestataires et l'hébergeur sont
établis aux États-Unis.

**Un formulaire — ou un anti-robots — ajouté sans toucher à ce texte en ferait un
mensonge sur une page légale.** Les deux paragraphes ne s'affichent d'ailleurs que
sur la cible qui a un formulaire ; le build GitHub Pages continue de dire qu'il
n'en a pas.

## Déploiement — trois cibles, un seul code

Convention (commune à tous les projets Astro) : **le défaut décrit la cible
finale** — site servi à la racine, dev local sur `/`. Le sous-chemin
`github.io/<depot>/` n'existe que pendant la phase démo, géré par le workflow.
Les liens internes passent par `withBase()`
([src/lib/paths.ts](src/lib/paths.ts)) ; URL canoniques, sitemap,
`robots.txt` ([src/pages/robots.txt.ts](src/pages/robots.txt.ts)) et
`site.webmanifest` ([src/pages/site.webmanifest.ts](src/pages/site.webmanifest.ts))
suivent automatiquement.

Ces deux derniers sont des **routes générées** et non des fichiers de
`public/` : un fichier statique figerait des chemins absolus, valides à la
racine et rompus sous `/studio-caducee/`. Pour le manifeste la panne serait
silencieuse — un `scope` qui ne contient pas la page courante l'invalide en
entier, et l'icône reperdrait son libellé sans autre symptôme.

| Cible | Comment | URL |
| --- | --- | --- |
| **Local** (développement) | `npm run dev` | `http://localhost:4321/` |
| **GitHub Pages** (démo client) | push sur `main` → workflow [deploy.yml](.github/workflows/deploy.yml), `DOMAINE` vide | `https://jozinho22.github.io/studio-caducee/` |
| **GitHub Pages + domaine** (production) | renseigner `DOMAINE` dans [deploy.yml](.github/workflows/deploy.yml) | `https://www.mondomaine.fr/` |

Passage en production (domaine acheté chez un registrar) :

1. **DNS chez le registrar** : apex (`mondomaine.fr`) → 4 enregistrements A
   vers `185.199.108.153`, `185.199.109.153`, `185.199.110.153`,
   `185.199.111.153` ; `www` → CNAME vers `jozinho22.github.io`.
2. **Workflow** : renseigner `DOMAINE: 'mondomaine.fr'` dans
   [deploy.yml](.github/workflows/deploy.yml) — le build passe à la racine du
   domaine et génère le fichier `CNAME` que GitHub Pages lit pour associer le
   domaine. Mettre aussi à jour le domaine par défaut dans
   [astro.config.mjs](astro.config.mjs) (utilisé par les builds locaux).
3. **GitHub** : Settings → Pages → vérifier le domaine et cocher
   « Enforce HTTPS » (certificat automatique).

Note : un même dépôt sert soit la démo `github.io`, soit le domaine (l'URL
github.io redirige vers le domaine une fois branché) — la phase démo précède
simplement la mise en production. Pour reproduire localement le build démo :
`SITE_URL=https://jozinho22.github.io SITE_BASE=/studio-caducee/ npm run build`
— ou via un fichier `.env` (toutes les variables sont documentées dans
[.env.example](.env.example), le shell restant prioritaire).

Plan B déjà câblé : **Vercel** — importer le dépôt sur vercel.com suffit
(environnement auto-détecté dans [astro.config.mjs](astro.config.mjs),
[vercel.json](vercel.json) prêt) ; utile le jour où un projet gagne des
besoins serveur. Tout autre hébergeur statique reste possible via
`SITE_URL=… npm run build`.

## Avant la mise en ligne définitive — à personnaliser

1. **Nom de domaine** : renseigner `DOMAINE` dans
   [deploy.yml](.github/workflows/deploy.yml) et le domaine par défaut dans
   [astro.config.mjs](astro.config.mjs) — canonical, sitemap et robots.txt
   suivent au build suivant (voir la section Déploiement ci-dessus).
2. **Boîte de réception** : `josselin.douineau@studio-caducee.com` doit exister
   côté Google Workspace — elle sert d'adresse de réclamation dans les CGV et
   reçoit le formulaire. Tant que le domaine ne sert pas le site, c'est
   l'adresse d'attente qui s'affiche partout, automatiquement (voir `EN_LIGNE`
   ci-dessus) : rien à remplacer à la main le jour venu.
3. **Resend et Turnstile** : domaine d'envoi vérifié chez Resend, widget créé
   chez Cloudflare, et les cinq variables déclarées dans Vercel.
4. **Tarifs** : ajuster les montants dans
   [src/data/tarifs.ts](src/data/tarifs.ts) — source unique, la page d'accueil
   comme les CGV s'y alimentent.
5. **Relecture juridique** des CGV et de l'annexe RGPD, et vérification du
   SIRET (voir « Pages juridiques »).
6. **Régénérer les documents depuis la cible réelle.** Deux contenus dépendent
   de l'endroit d'où l'on génère, et `npm run generer-documents` s'exécute par
   défaut comme un build GitHub Pages :

   | ce qui change | piloté par |
   | --- | --- |
   | l'hébergeur des mentions légales, et le fait que la politique de confidentialité décrive ou non le formulaire | `SERVEUR_DISPONIBLE` — vrai si `VERCEL` est défini |
   | les adresses de pages et l'adresse de contact écrites dans les PDF | `SITE_URL`, via `EN_LIGNE` — voir [src/data/site.ts](src/data/site.ts) |

   Une fois le domaine branché sur Vercel, remplacer `DOMAINE_FINAL` dans
   [src/data/site.ts](src/data/site.ts) par le vrai domaine — `astro.config.mjs`
   l'importe de là, il n'y a plus qu'un endroit à changer —, puis :

   ```bash
   VERCEL=1 SITE_URL=https://www.studio-caducee.com npm run generer-documents
   ```

   Sans quoi les PDF remis au client décriraient un site sans formulaire, hébergé
   par GitHub.

Identité, coordonnées et mentions obligatoires sont **faites** : elles vivent
dans [src/data/contact.ts](src/data/contact.ts) pour l'affichage public, et dans
[legal.ts](src/i18n/legal.ts) / [cgv.ts](src/i18n/cgv.ts) pour les pages
légales.

## Licence

© Tous droits réservés. Ce dépôt ne comporte volontairement aucune licence
open source : le code, les textes et les identités visuelles des modèles ne
peuvent pas être réutilisés sans autorisation.

## Animations

Apparitions au défilement (`IntersectionObserver`), micro-interactions au
survol, **compteurs animés** (tout élément `[data-countup]` s'incrémente
jusqu'à sa valeur à l'apparition — voir les chiffres clés du modèle bâtiment)
et des **fonds animés « façon vidéo »**
([src/components/AuroraBackdrop.astro](src/components/AuroraBackdrop.astro)) sur
l'accueil et les heros des 4 modèles, chacun dans sa palette : halos de couleur
en dérive lente sur canvas basse résolution, zoom cinématique et grain de
pellicule — le rendu d'une boucle vidéo sans aucun fichier vidéo. L'animation
se met en pause hors écran et onglet caché ; tout respecte
`prefers-reduced-motion` (image fixe et valeurs finales affichées directement).
