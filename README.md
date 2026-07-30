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

## Déploiement — GitHub Pages

Le site est déployé sur `https://jozinho22.github.io/site-vitrine-ventes-de-sites-web/`
par le workflow [.github/workflows/deploy.yml](.github/workflows/deploy.yml),
déclenché à chaque push sur `main`.

Prérequis (une seule fois) : dans le dépôt GitHub, **Settings → Pages →
Source = « GitHub Actions »** (et non « Deploy from a branch », qui lance le
pipeline Jekyll par défaut et échoue sur un projet Astro).

Les liens internes passent par `withBase()` ([src/lib/paths.ts](src/lib/paths.ts))
pour supporter le sous-chemin `/site-vitrine-ventes-de-sites-web/`.

Le même code se déploie aussi sur un domaine personnalisé, **sans toucher aux
chemins** : il suffit de définir `SITE_URL` au moment du build et le site est
généré pour la racine du domaine.

```bash
SITE_URL=https://www.mondomaine.fr npm run build
```

Sans `SITE_URL`, le build vise GitHub Pages (comportement par défaut, utilisé
par le workflow).

## Avant la mise en ligne définitive — à personnaliser

1. **Nom de domaine** : voir la section Déploiement ci-dessus
   ([astro.config.mjs](astro.config.mjs) et [public/robots.txt](public/robots.txt))
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

Volontairement sobres : apparitions au défilement (`IntersectionObserver`),
dégradés flottants dans les heros, micro-interactions au survol. Tout respecte
`prefers-reduced-motion` (les animations sont désactivées pour les personnes
qui le demandent).
