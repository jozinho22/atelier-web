# Atelier Web — Site vitrine de création de sites web

Site vitrine (nom placeholder : **Atelier Web**) pour une activité de création de
sites web à destination des professionnels et associations, avec quatre modèles
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
| `/mentions-legales` · `/en/…` | Mentions légales (minimalistes, à compléter) |

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
- HTML sémantique, un seul `h1` par page, `lang="fr"`
- Polices auto-hébergées (Fontsource), zéro requête externe

## Déploiement — trois cibles, un seul code

Convention (commune à tous les projets Astro) : **le défaut décrit la cible
finale** — site servi à la racine, dev local sur `/`. Le sous-chemin
`github.io/<depot>/` n'existe que pendant la phase démo, géré par le workflow.
Les liens internes passent par `withBase()`
([src/lib/paths.ts](src/lib/paths.ts)) ; URL canoniques, sitemap et
`robots.txt` ([src/pages/robots.txt.ts](src/pages/robots.txt.ts)) suivent
automatiquement.

| Cible | Comment | URL |
| --- | --- | --- |
| **Local** (développement) | `npm run dev` | `http://localhost:4321/` |
| **GitHub Pages** (démo client) | push sur `main` → workflow [deploy.yml](.github/workflows/deploy.yml), `DOMAINE` vide | `https://jozinho22.github.io/site-vitrine-ventes-de-sites-web/` |
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
`SITE_URL=https://jozinho22.github.io SITE_BASE=/site-vitrine-ventes-de-sites-web/ npm run build`
— ou via un fichier `.env` (toutes les variables sont documentées dans
[.env.example](.env.example), le shell restant prioritaire).

Plan B déjà câblé : **Vercel** — importer le dépôt sur vercel.com suffit
(environnement auto-détecté dans [astro.config.mjs](astro.config.mjs),
[vercel.json](vercel.json) prêt) ; utile le jour où un projet gagne des
besoins serveur. Tout autre hébergeur statique reste possible via
`SITE_URL=… npm run build`.

## Avant la mise en ligne définitive — à personnaliser

1. **Nom de domaine** : rien à faire côté code — l'ajouter dans les réglages du
   projet Vercel suffit (canonical, sitemap et robots.txt suivent au build
   suivant)
2. **Identité** : nom « Atelier Web », e-mail `contact@atelier-web.example` et
   téléphone `06 00 00 00 00` (présents dans le header, footer, page d'accueil
   et mentions légales)
3. **Mentions légales** : compléter les champs `[à compléter]` dans
   [src/pages/mentions-legales.astro](src/pages/mentions-legales.astro)
4. **Tarifs** : ajuster les montants dans [src/pages/index.astro](src/pages/index.astro)

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
