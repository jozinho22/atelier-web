---
name: Studio Caducée
description: Sites vitrines pour artisans, indépendants et associations
colors:
  indigo-profond: "#5352d1"
  indigo-soutenu: "#403fb8"
  indigo-voile: "#e6e6fb"
  corail-chaud: "#ff6b57"
  corail-voile: "#ffe6e1"
  or-ambre: "#f2b705"
  or-lisible: "#916d03"
  encre-bleutee: "#12131f"
  encre-adoucie: "#3c3e52"
  gris-attenue: "#5b5b6e"
  papier-creme: "#f7f6f2"
  mur-1: "#dcd8cc"
  mur-2: "#e3dfd4"
  mur-3: "#eae6dc"
  mur-4: "#f1eee6"
  papier-souleve: "#ffffff"
  indigo-sur-encre: "#8d8cf0"
  indigo-sur-encre-doux: "#a9a8f6"
  indigo-surface-survol: "#6a68df"
  gris-sur-encre: "#b9bacd"
  gris-sur-encre-attenue: "#8f90ab"
  vert-sur-encre: "#6ee7a0"
typography:
  display:
    fontFamily: "Outfit Variable, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(2.4rem, 6vw, 4.2rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Outfit Variable, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(1.75rem, 4vw, 2.75rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Outfit Variable, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.35rem"
    fontWeight: 600
    lineHeight: 1.3
  subhead:
    fontFamily: "Outfit Variable, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(1.6rem, 3vw, 2.2rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  lede:
    fontFamily: "Outfit Variable, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 400
    lineHeight: 1.65
  body:
    fontFamily: "Outfit Variable, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  body-small:
    fontFamily: "Outfit Variable, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.55
  caption:
    fontFamily: "Outfit Variable, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 400
    lineHeight: 1.5
  micro:
    fontFamily: "Outfit Variable, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.08em"
  label:
    fontFamily: "Outfit Variable, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.14em"
  serif:
    fontFamily: "Fraunces Variable, Georgia, Times New Roman, serif"
    fontSize: "inherit"
    fontWeight: 400
rounded:
  xs: "4px"
  s: "10px"
  m: "18px"
  l: "28px"
  pilule: "999px"
spacing:
  section: "clamp(4rem, 9vw, 7rem)"
  gouttiere: "1.25rem"
  carte: "1.6rem"
components:
  button-primary:
    backgroundColor: "{colors.indigo-profond}"
    textColor: "#ffffff"
    rounded: "{rounded.pilule}"
    padding: "0.85rem 1.6rem"
    typography: "{typography.body}"
  button-primary-hover:
    backgroundColor: "{colors.indigo-soutenu}"
    textColor: "#ffffff"
    rounded: "{rounded.pilule}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.encre-bleutee}"
    rounded: "{rounded.pilule}"
    padding: "0.85rem 1.6rem"
  card:
    backgroundColor: "{colors.papier-souleve}"
    textColor: "{colors.encre-bleutee}"
    rounded: "{rounded.l}"
    padding: "1.6rem"
  eyebrow:
    textColor: "{colors.indigo-profond}"
    typography: "{typography.label}"
---

# Design System: Studio Caducée

## Overview

**Creative North Star: « La galerie éclairée »**

Studio Caducée vend des sites vitrines en montrant des sites vitrines. Le site n'est
donc pas la vitrine : il est la salle qui les accroche. Tout part de là. Le fond
crème est le mur, les cartes blanches sont les cadres, les fonds aurora en
mouvement lent sont l'éclairage de la salle — présents, jamais regardés. Six
mondes visuels entièrement différents cohabitent derrière les liens, et le rôle
du site est de les mettre en valeur sans jamais rivaliser avec eux.

Cela impose une retenue précise. La salle a du caractère — un indigo saturé, une
typographie large, des angles très arrondis — mais elle ne prend jamais le pas
sur ce qu'elle expose. Chaque fois qu'un choix hésite entre « affirmer le site »
et « servir les modèles », il tranche pour le second. Les couleurs secondaires
existent, mais par touches : le jour où le corail devient une couleur
d'interface, la salle se met à discuter avec les tableaux.

Le registre reste chaleureux plutôt qu'institutionnel. La clientèle est faite
d'artisans, d'indépendants et d'associations, pas de directions marketing : la
densité est basse, le texte respire, les formes sont douces. Rien n'est austère,
rien n'est tapageur.

**Key Characteristics:**
- Un seul accent structurel, l'indigo, sur un fond papier crème
- Angles très arrondis (jusqu'à 28 px) et boutons en pilule totale
- Une seule famille de caractères pour l'interface, la graisse portant la hiérarchie
- Profondeur par le ton d'abord, l'ombre ne répondant qu'à l'interaction
- Mouvement lent et permanent en arrière-plan, jamais au premier plan

## Colors

Une palette de papier et d'encre, animée par un seul accent franc et deux touches
chaudes tenues en réserve.

### Primary
- **Indigo profond** (`#5352d1`) : l'unique accent structurel. Liens, boutons
  d'action, chapôs, icônes actives, liserés de section. C'est la seule couleur
  autorisée à signaler « ceci est cliquable ou important ».
- **Indigo soutenu** (`#403fb8`) : état survolé et pressé du bouton principal, et
  toute occurrence de l'indigo en texte sur fond clair où le contraste doit
  passer AA.
- **Indigo voilé** (`#e6e6fb`) : fonds de pastilles, surlignages et zones
  d'emphase douce. Fond uniquement, jamais de texte.

### Secondary
- **Corail chaud** (`#ff6b57`) : touche d'énergie, réservée aux éléments
  décoratifs et aux repères visuels ponctuels. Jamais un lien, jamais un bouton.
- **Corail voilé** (`#ffe6e1`) : fond des mêmes touches.

### Tertiary
- **Or ambré** (`#f2b705`) : accent le plus rare du système. Distinctions et
  signaux de valeur, en aplat ou en fond. À 1,82:1 sur le papier, il ne porte
  jamais de texte ni de glyphe lisible.
- **Or lisible** (`#916d03`, 4,78:1) : la variante porteuse de texte. Plus
  bronze que doré — c'est le prix du contraste sur fond clair.

### Neutral
- **Encre bleutée** (`#12131f`) : tout le texte courant et les titres. Un noir
  qui tire sur le bleu, jamais un noir pur.
- **Encre adoucie** (`#3c3e52`) : texte secondaire, liens de navigation au repos.
- **Gris atténué** (`#66677c`) : légendes, mentions, métadonnées. Calé pour
  tenir 4,5:1 sur le fond le plus soutenu du site, celui de la section Contact
  (`#efeee8`) — l'ancienne valeur `#6d6f85` y tombait à 4,24:1.
- **Papier crème** (`#f7f6f2`) : le fond du document, visible partout où aucune
  section ne pose son propre ton.
- **La rampe du mur** (`#dcd8cc` → `#e3dfd4` → `#eae6dc` → `#f1eee6`) : le mur
  n'a pas un ton mais quatre, qui montent à mesure qu'on descend la page. La
  salle s'éclaire en s'enfonçant. Chaque palier tient au moins 12,9:1 avec
  l'encre et 4,65:1 avec le gris courant.

  La raison est concrète : le hero est une vidéo sur encre à 0,007 de
  luminance. Un mur unique et clair imposait une marche de 0,697 — les trois
  quarts de l'amplitude de la page franchis d'un coup. La rampe descend
  jusqu'à 0,687 au premier palier, et le point le plus clair — les Tarifs —
  coïncide avec le moment de la décision.

  **Le passage du hero au mur ne se fait pas d'un bord mais en trois temps** :
  la vidéo se dissout dans l'encre sur son dernier quart, le bandeau des
  métiers tient le palier intermédiaire, et un fondu le raccorde au mur. La
  plus grande marche restante vaut 0,237.
- **Papier soulevé** (`#ffffff`) : toute surface posée sur le mur — cartes,
  panneaux, encarts. Le blanc n'est pas le fond par défaut : c'est un signal.

### Surfaces sombres

Trois zones du site s'inversent : le hero, le pied de page et la barre de
démonstration posent leur contenu sur l'encre bleutée. **Aucune couleur des
groupes ci-dessus n'y est utilisable en texte** — l'indigo profond n'y atteint
que 3,07:1 et le gris atténué 3,74:1, tous deux sous le seuil AA. Cette famille
existe pour ça, et pour rien d'autre.

- **Indigo sur encre** (`#8d8cf0`, 6,27:1) : l'accent quand le fond est sombre.
  Emphase du logo en pied de page, éléments actifs sur fond encre.
- **Indigo de surface survolé** (`#6a68df`, 4,51:1 sous du blanc) : état survolé
  d'un bouton plein posé sur fond sombre.
- **Gris sur encre** (`#b9bacd`, 9,63:1) : texte courant sur fond encre.
- **Gris sur encre atténué** (`#8f90ab`, 5,92:1) : intitulés de colonne,
  mentions et métadonnées sur fond encre.
- **Vert sur encre** (`#6ee7a0`, 11,94:1) : signal de validation, réservé aux
  coches de la liste de preuves du hero. Le seul vert du système, et il n'existe
  que sur fond sombre — sur le papier crème il tombe à 1,43:1.

- **Indigo sur encre doux** (`#a9a8f6`, 8,45:1) et **profond** (`#6a68df`,
  4,09:1) : les deux arrêts du dégradé qui porte l'emphase du titre du hero, et
  l'état survolé des boutons pleins sur fond sombre.

Deux teintes restent hors palette parce qu'elles ne servent qu'en dégradé
décoratif, jamais en texte porteur de sens : `#ff8a76` sur les numéros d'étapes
et `#7a5cd6` sur un fond de bloc. Elles n'ont pas de token.

### Named Rules

**La règle des deux mondes.** Une couleur est faite pour le papier ou pour
l'encre, jamais pour les deux. Avant de poser une teinte sur fond sombre, la
prendre dans la famille « sur encre » — ne jamais réutiliser l'indigo profond ou
le gris atténué en les espérant lisibles.

**La règle du seul accent.** L'indigo gouverne. Corail et or ponctuent et ne
portent jamais de sens fonctionnel : aucun lien, aucun bouton, aucun état. Un
visiteur doit pouvoir apprendre en trois secondes que « violet = on peut
cliquer », et ne jamais avoir à le désapprendre. Le titre du hero, qui porte
l'emphase la plus forte du site, s'y tient : son dégradé reste dans la seule
famille indigo. Un dégradé n'est une exception que s'il ne signifie rien — les
numéros d'étapes en sont une, un titre non.

**La règle des trois packs.** Les teintes `#5352d1`, `#b83a24` et `#7d5a06` qui
distinguent Essentiel, Sur mesure et Signature sont locales à la section Tarifs.
Elles n'existent pas ailleurs et ne sont pas des tokens du système : ne pas les
reprendre pour colorer autre chose.

**La règle du mur et du cadre.** Le mur porte, le blanc se pose. Une surface
blanche annonce un contenu autonome. Enchaîner des blocs blancs sur toute une
page dissout le mur et fait perdre au système sa seule hiérarchie de fond.

**La règle du blanc réservé.** Le blanc pur n'existe qu'en cadre : cartes,
panneaux, encarts. Aucune grande surface ne le prend — c'est ce qui garde au
cadre son pouvoir de détachement, et ce qui évite qu'une page entière vienne
heurter le hero sombre.

## Typography

**Police d'interface :** Outfit Variable (repli `system-ui`, `-apple-system`, `Segoe UI`, sans-serif)
**Police d'accent :** Fraunces Variable (repli Georgia, `Times New Roman`, serif)

Les deux sont auto-hébergées via Fontsource : aucune requête vers un service
tiers, aucun décalage de mise en page au chargement.

**Character :** Outfit est une grotesque géométrique aux formes ouvertes et à la
large plage de graisses — elle tient aussi bien un titre de 4 rem qu'une mention
légale sans changer de famille. Fraunces, une serif à contraste variable et au
caractère assumé, n'intervient que par éclats : un mot mis en avant, une
signature. Le contraste entre les deux est le seul geste typographique
expressif du système.

### Hierarchy

Dix pas, et aucun autre. Les valeurs fluides ne le sont que là où le titre doit
suivre la fenêtre ; en dessous du corps de texte, tout est fixe.

- **Display** (700, `clamp(2.4rem, 6vw, 4.2rem)`, `line-height: 1.05`,
  `letter-spacing: -0.02em`) : le titre d'accroche, une fois par page.
- **Headline** (700, `clamp(1.75rem, 4vw, 2.75rem)`, `line-height: 1.12`) :
  titres de section. La classe `.section-title` porte ce rôle.
- **Subhead** (700, `clamp(1.6rem, 3vw, 2.2rem)`, `line-height: 1.2`) : titres
  de bloc à l'intérieur d'une section.
- **Title** (600, `1.35rem`, `line-height: 1.3`) : titres de carte et
  intertitres.
- **Lede** (400, `1.15rem`, `line-height: 1.65`) : chapô sous un titre de
  section, un paragraphe au plus.
- **Body** (400, `1.0625rem`, `line-height: 1.6`) : texte courant. Les blocs de
  lecture sont bornés autour de 34 rem, soit environ 65 à 75 caractères.
- **Body small** (400, `0.95rem`, `line-height: 1.55`) : texte dense — corps de
  carte, listes de points.
- **Caption** (400, `0.85rem`, `line-height: 1.5`) : légendes, notes, mentions.
- **Label** (600, `0.8125rem`, `letter-spacing: 0.14em`, capitales) : la classe
  `.eyebrow`, toujours en indigo, toujours au-dessus d'un titre de section.
- **Micro** (600, `0.72rem`, `letter-spacing: 0.08em`) : badges et étiquettes
  minuscules. Le plancher absolu — rien en dessous.

### Écart connu

Le code emploie aujourd'hui **34 tailles distinctes** là où cette échelle en
compte dix, avec des grappes de quasi-doublons indiscernables à l'œil :
`0.95` / `0.96` / `0.97` / `0.98`, puis `0.85` / `0.875` / `0.88`, puis `0.8` /
`0.8125` / `0.82`, et `1.05` / `1.0625` / `1.1` / `1.15`. Ce n'est pas une
intention de design, c'est de la dérive accumulée. La consolidation se fait par
rapprochement au pas le plus proche ; aucune de ces substitutions ne déplace le
texte de plus d'un demi-pixel.

### Named Rules

**La règle d'une seule voix.** Une famille pour toute l'interface, la graisse et
la taille portant la hiérarchie. Fraunces est une exception ponctuelle, jamais un
second système. Ajouter une troisième famille casse la salle.

**La règle des dix pas.** Toute taille de police vient de l'échelle. Une valeur
inédite est une dérive, pas une nuance : à l'œil, `0.96rem` et `0.95rem` sont le
même texte.

**La règle du chapô attaché.** Un `.eyebrow` n'existe jamais seul : il précède
immédiatement un titre et le qualifie. Un chapô orphelin est une étiquette qui
flotte.

## Layout

Un conteneur unique, `width: min(72rem, 100% - 2.5rem)`, centré. La marge
latérale de 1,25 rem est garantie sur toutes les tailles : rien ne touche jamais
le bord de l'écran.

Le rythme vertical est porté par une seule variable, `padding-block:
clamp(4rem, 9vw, 7rem)` sur chaque section — l'espacement respire avec la
fenêtre au lieu de sauter par paliers.

Les grilles sont en `auto-fit` avec un plancher (`minmax(17rem, 1fr)` pour les
cartes) plutôt qu'en nombre fixe de colonnes : le nombre d'éléments par rangée
découle de la place disponible, sans point de rupture dédié. Les ruptures
explicites sont rares et servent les blocs à deux colonnes : **900 px** pour les
mises en page larges, **760 px** pour le passage en colonne unique, **640 px**
pour les ajustements fins.

La densité est basse. Sur une page d'accueil complète, aucun bloc de texte
n'excède quelques lignes, et chaque section est séparée par au moins 4 rem.

## Elevation & Depth

Le système est **hybride, et l'ordre compte** : le ton porte, l'ombre répond.

Une surface se distingue d'abord parce qu'elle est blanche sur du crème. L'ombre
au repos est presque imperceptible — elle donne un décollement d'un pixel, pas
une hiérarchie. C'est l'interaction qui appelle la profondeur : au survol, la
carte se soulève de 6 px et passe à l'ombre soutenue.

### Shadow Vocabulary
- **Ombre de repos** (`0 1px 3px rgb(18 19 31 / 0.08), 0 4px 14px rgb(18 19 31 / 0.06)`) :
  toute surface blanche posée sur le papier crème. Presque invisible, et c'est
  voulu.
- **Ombre de réponse** (`0 2px 6px rgb(18 19 31 / 0.08), 0 14px 34px rgb(18 19 31 / 0.12)`) :
  état survolé d'une carte ou d'un panneau interactif.
- **Halo d'action** (`0 8px 22px rgb(83 82 209 / 0.35)`) : réservé au bouton
  principal. Une ombre teintée de son propre indigo — le seul endroit du système
  où une ombre est colorée.

### Named Rules

**La règle de l'ombre qui répond.** Aucune ombre ne signale une hiérarchie au
repos. Si un élément doit paraître plus important, il change de ton, pas
d'altitude. L'ombre est un accusé de réception de l'interaction.

## Shapes

Quatre rayons, et une pilule. `4px` pour les micro-éléments — soulignements de
navigation, badges, puces —, `10px` pour les petits éléments incrustés, `18px`
pour les panneaux et encarts, `28px` pour les grandes cartes. Les boutons sont en
pilule totale (`999px`), sans exception.

Le code emploie aujourd'hui quatre valeurs hors échelle : `2px` et `6px`, à
ramener sur `4px`, puis `8px` et `12px`, à ramener sur `10px`. L'écart maximal
est de 2 px sur un coin — invisible isolément, mais c'est cette accumulation qui
fait qu'aucun rayon ne semble jamais délibéré.

Le vocabulaire est franchement arrondi et c'est un parti pris : rien dans le
système n'a d'angle vif. Les images à l'intérieur des cartes ne sont jamais
arrondies elles-mêmes — elles sont détourées par l'`overflow: hidden` du parent,
ce qui garantit que le rayon de la carte fait loi.

Les bordures sont rares et toujours ténues : `1px solid rgb(18 19 31 / 0.08)`,
une encre très diluée plutôt qu'un gris. Elles délimitent, elles ne dessinent
pas.

### Named Rules

**La règle du rayon hérité.** Un élément posé dans un conteneur arrondi ne
redéfinit pas son propre rayon : il se laisse découper par le parent. Deux
rayons concentriques différents se voient immédiatement.

**La règle des cinq formes.** Cinq rayons existent : 4, 10, 18, 28 et la pilule.
Une sixième valeur ne se justifie jamais par le cas particulier — elle se ramène
au pas le plus proche.

## Components

Caractère d'ensemble : **doux mais assuré**. Les formes sont très arrondies et
les fonds calmes, mais la réponse à l'interaction est nette et rapide — rien ne
traîne, rien ne rebondit.

### Buttons
- **Forme :** pilule totale (`border-radius: 999px`), bordure transparente de
  2 px réservée pour la variante fantôme, `padding: 0.85rem 1.6rem`, graisse 600.
- **Primaire :** fond indigo profond, texte blanc, halo d'action teinté.
- **Fantôme :** fond transparent, bordure `currentColor`, hérite la couleur du
  texte environnant.
- **Survol / focus :** transitions de 0,25 s sur `transform`, `box-shadow` et les
  trois couleurs, toutes en `cubic-bezier(0.22, 1, 0.36, 1)`.

### Cards / Containers
- **Rayon :** 28 px (`--radius-l`).
- **Fond :** papier soulevé (`#ffffff`) sur le papier crème de la page.
- **Bordure :** `1px solid rgb(18 19 31 / 0.08)`.
- **Ombre :** de repos, passant à l'ombre de réponse au survol.
- **Survol :** `translateY(-6px)` en 0,4 s.
- **Padding interne :** 1,6 rem.
- **Découpe :** `overflow: hidden`, pour que les images affleurent le bord.

### Navigation
Liens en graisse 500, `0.98rem`, encre adoucie au repos, passant à l'encre pleine
au survol en 0,2 s. Pas de soulignement permanent.

### Inputs / Fields
**Le système n'en comporte aucun.** Le site est statique et la conversion passe
par `tel:` et `mailto:`. Ne pas inventer de style de champ : le jour où un
formulaire apparaît, ses styles devront être décidés, pas déduits.

### Signature — Le voile d'aurore
Un fond animé en dégradés lents et flous, posé derrière les sections d'accroche.
Il ne défile pas au scroll, il respire sur place, en cycles de plus de 20 s. Sa
seule fonction est d'éviter le fond plat sans jamais devenir un motif que l'œil
suit.

### Signature — Le dévoilement au défilement
Tout bloc porteur de la classe `.reveal` apparaît en montant de 26 px avec un
fondu, sur 0,7 s. Les éléments d'une même rangée sont échelonnés via
`--reveal-delay`, par pas de 0,08 s. Le mécanisme est global et respecte
`prefers-reduced-motion` : en mouvement réduit, tout est visible d'emblée.

## Do's and Don'ts

### Do:
- **Do** faire passer tout lien ou action par l'indigo profond (`#5352d1`), et
  par l'indigo soutenu (`#403fb8`) dès qu'il s'agit de texte devant tenir 4,5:1.
- **Do** poser le blanc sur le crème pour créer une surface, avant d'envisager
  une ombre.
- **Do** vérifier le contraste à chaque changement de couleur : plusieurs teintes
  du système sont trop claires pour porter du texte, l'or en particulier.
- **Do** échelonner les apparitions d'une même rangée par pas de 0,08 s.
- **Do** borner les blocs de lecture autour de 65 à 75 caractères.
- **Do** laisser le parent arrondi découper ses images par `overflow: hidden`.
- **Do** prendre toute couleur destinée à un fond encre dans la famille
  « sur encre » — le hero, le pied de page et la barre de démonstration.
- **Do** puiser chaque taille de police dans les dix pas de l'échelle.

### Don't:
- **Don't** utiliser le corail ou l'or pour un lien, un bouton ou un état : ils
  ponctuent, ils ne signalent pas.
- **Don't** ajouter une troisième famille de caractères. La hiérarchie se fait à
  la graisse.
- **Don't** poser une ombre pour hiérarchiser au repos — changer le ton.
- **Don't** reprendre les teintes de pack (`#b83a24`, `#7d5a06`) hors de la
  section Tarifs.
- **Don't** laisser un `.eyebrow` sans titre juste en dessous.
- **Don't** introduire un angle vif : le système est intégralement arrondi.
- **Don't** poser l'indigo profond ou le gris atténué en texte sur fond encre :
  ils y échouent au contraste (3,07:1 et 3,74:1).
- **Don't** employer le vert sur autre chose qu'un fond encre — il tombe à
  1,43:1 sur le papier crème.
- **Don't** inventer une taille intermédiaire parce qu'un pas paraît trop grand :
  c'est ainsi que le code en a accumulé trente-quatre.
- **Don't** appliquer ce fichier aux six modèles vitrines. Chacun est un monde
  visuel autonome et délibérément étranger à celui-ci — le yoga est strictement
  noir et blanc, l'artiste entièrement au fusain. Les toucher avec ces tokens
  détruirait leur parti pris.
