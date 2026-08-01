# Atelier Web — Site vitrine de création de sites web

Site vitrine (nom placeholder : **Atelier Web**) pour une activité de création de
sites web à destination des professionnels et associations, avec quatre modèles
de démonstration par métier.

Construit avec [Astro](https://astro.build) en **export 100 % statique** :
aucun serveur nécessaire, hébergeable partout (Netlify, Cloudflare Pages, OVH, nginx…).

## Pages

| URL | Contenu |
| --- | --- |
| `/` | Site principal : hero animé, services, modèles, méthode, tarifs, contact |
| `/modeles/association` | Démo « AS Les Cigales » — association sportive & culturelle |
| `/modeles/batiment` | Démo « Moreau Rénovation » — métiers du bâtiment |
| `/modeles/esthetique` | Démo « L'Écrin de Soi » — institut de beauté |
| `/modeles/artiste` | Démo « Claire Aubry » — blog/portfolio d'artiste peintre |
| `/mentions-legales` | Mentions légales (minimalistes, à compléter) |

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

Les liens internes passent par `withBase()` ([src/lib/paths.ts](src/lib/paths.ts))
et [astro.config.mjs](astro.config.mjs) choisit `site`/`base` selon
l'environnement — les URL canoniques, le sitemap et le `robots.txt` (généré au
build par [src/pages/robots.txt.ts](src/pages/robots.txt.ts)) suivent
automatiquement.

| Cible | Comment | URL |
| --- | --- | --- |
| **Local** (développement) | `npm run dev` | `http://localhost:4321/site-vitrine-ventes-de-sites-web/` |
| **GitHub Pages** (démo client) | push sur `main` → workflow [deploy.yml](.github/workflows/deploy.yml) | `https://jozinho22.github.io/site-vitrine-ventes-de-sites-web/` |
| **Vercel** (production) | importer le dépôt sur vercel.com, c'est tout | domaine de production du projet Vercel |

Détails :

- **GitHub Pages** — prérequis unique déjà en place : Settings → Pages →
  Source = « GitHub Actions ».
- **Vercel** — zéro configuration : l'environnement est détecté au build
  (`VERCEL_PROJECT_PRODUCTION_URL`), le site est généré à la racine et le
  canonical suit le domaine de production — y compris un domaine personnalisé
  ajouté plus tard dans les réglages Vercel. [vercel.json](vercel.json) fixe le
  framework et `trailingSlash` (aligné sur les URL canoniques).
- **Autre hébergeur** — `SITE_URL=https://www.mondomaine.fr npm run build`
  génère le site pour la racine de ce domaine.

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
