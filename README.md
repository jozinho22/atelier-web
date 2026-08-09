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
| `/cgv` · `/en/…` | Conditions générales de vente (à faire relire) |
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

## Pages juridiques

Les mentions légales et les CGV partagent un gabarit unique,
[src/components/DocumentLegal.astro](src/components/DocumentLegal.astro) : même
largeur de colonne, même hiérarchie de titres, mêmes styles de lien et de
liste. Les deux pages ne diffèrent que par leur dictionnaire —
[legal.ts](src/i18n/legal.ts) et [cgv.ts](src/i18n/cgv.ts) — tous deux typés par
[document-legal.ts](src/i18n/document-legal.ts).

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
   côté Google Workspace — elle est affichée publiquement, sert d'adresse de
   réclamation dans les CGV, et reçoit le formulaire.
3. **Resend et Turnstile** : domaine d'envoi vérifié chez Resend, widget créé
   chez Cloudflare, et les cinq variables déclarées dans Vercel.
4. **Tarifs** : ajuster les montants dans
   [src/data/tarifs.ts](src/data/tarifs.ts) — source unique, la page d'accueil
   comme les CGV s'y alimentent.
5. **Relecture juridique** des CGV, et vérification du SIRET (voir « Pages
   juridiques »).

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
