# Atelier Web — Site vitrine de création de sites web

Site vitrine (nom placeholder : **Atelier Web**) pour une activité de création de
sites web à destination des professionnels et associations, avec huit modèles
de démonstration par métier.

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
| `/mentions-legales` · `/en/…` | Mentions légales (minimalistes, à compléter) |
| `/cgv` · `/en/…` | Conditions générales de vente (à compléter et à faire relire) |
| `/qui-sommes-nous` · `/en/…` | Présentation de l'atelier (biographies fictives) |

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

**À compléter avant la mise en ligne** — identité du prestataire et SIRET (les
deux pages), et coordonnées du médiateur de la consommation, obligatoires dès
lors qu'on vend à un particulier. Le texte des CGV est une rédaction de départ,
pas un avis juridique : il suppose la franchise en base de TVA, une clientèle
incluant des consommateurs et un abonnement sans engagement, et mérite une
relecture professionnelle.

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

**⚠️ Biographies fictives**, à remplacer avant la mise en ligne — et à
réconcilier avec les mentions légales et les CGV, qui déclarent un
« entrepreneur individuel » au singulier.

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
**« Atelier Web »** et avec une vraie icône, non un favicon 32×32 agrandi.
Deux déclarations le permettent, et il faut les deux :

- `short_name` du manifeste
  ([src/pages/site.webmanifest.ts](src/pages/site.webmanifest.ts)), lu par
  Android ;
- `<meta name="apple-mobile-web-app-title">` dans
  [src/layouts/Base.astro](src/layouts/Base.astro), car **iOS ignore le
  manifeste**. Sans elle, iOS retombe sur le `<title>` — une phrase entière,
  tronquée à quelques caractères.

Les deux valent « Atelier Web » (11 caractères, sous la limite de troncature
d'environ 12). Les modifier ensemble, jamais l'une sans l'autre.

Le champ `id` du manifeste, lui, **ne doit jamais changer** : il est l'identité
de l'application. Il inclut le chemin de base parce qu'il se résout contre
l'ORIGINE, et que `jozinho22.github.io` héberge tous les dépôts — un `id` réduit
à `/` y serait partagé avec chaque autre projet du compte.

Icônes déclarées (toutes présentes dans `public/`) : 32, 192 et 512 en `any`,
plus `icon-512-maskable.png` en `purpose: "maskable"` — celle-là seulement,
parce qu'elle a été dessinée avec la marge que le masque Android exige.

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
racine et rompus sous `/atelier-web/`. Pour le manifeste la panne serait
silencieuse — un `scope` qui ne contient pas la page courante l'invalide en
entier, et l'icône reperdrait son libellé sans autre symptôme.

| Cible | Comment | URL |
| --- | --- | --- |
| **Local** (développement) | `npm run dev` | `http://localhost:4321/` |
| **GitHub Pages** (démo client) | push sur `main` → workflow [deploy.yml](.github/workflows/deploy.yml), `DOMAINE` vide | `https://jozinho22.github.io/atelier-web/` |
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
`SITE_URL=https://jozinho22.github.io SITE_BASE=/atelier-web/ npm run build`
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
2. **Identité** : nom « Atelier Web », e-mail `contact@atelier-web.example`,
   téléphone `06 00 00 00 00` — présents dans
   [Footer.astro](src/components/Footer.astro),
   [Home.astro](src/components/pages/Home.astro),
   [src/i18n/home.ts](src/i18n/home.ts) et [src/i18n/legal.ts](src/i18n/legal.ts).
3. **Mentions légales** : compléter les champs `[à compléter]` / `[to be
   completed]` dans [src/i18n/legal.ts](src/i18n/legal.ts) — les deux langues.
4. **Tarifs** : ajuster les montants dans [src/i18n/home.ts](src/i18n/home.ts)
   (section `tarifs`, les deux langues).

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
