/**
 * Régénère `public/icon-512-maskable.png` depuis l'icône 512 du jeu courant.
 *
 *   npm run generer-maskable
 *
 * ── Pourquoi une icône séparée ────────────────────────────────────────────
 *
 * Android n'affiche pas l'icône telle quelle : il la découpe dans une forme
 * qu'il choisit — cercle, carré arrondi, goutte selon le lanceur —, et cette
 * forme peut mordre jusqu'à 20 % du bord. Une icône déclarée `purpose:
 * "maskable"` doit donc remplir tout le carré d'une matière opaque, et ne rien
 * mettre d'important en dehors du cercle central de 80 %.
 *
 * Le jeu de favicons est une PASTILLE : un disque blanc, des coins
 * transparents. Servie en `maskable`, elle donnerait des coins vides — noirs ou
 * translucides selon le lanceur — dès que la forme retenue n'est pas le cercle.
 * D'où ce dérivé : le même dessin, aplati sur la couleur de son propre disque,
 * qui remplit le carré sans qu'aucune couture n'apparaisse.
 *
 * ── Pourquoi la couleur est MESURÉE et non écrite ─────────────────────────
 *
 * Aplatir sur le papier du site (#f7f6f2) laisserait un liseré autour du
 * disque : 1,072:1 de contraste, assez pour se voir sur une arête franche. Le
 * script relève donc la couleur du disque lui-même, dans un anneau pris hors du
 * glyphe. Si le jeu d'icônes change de fond, le dérivé suit sans qu'on ait à y
 * penser.
 *
 * ── Ce qu'il refuse de faire ──────────────────────────────────────────────
 *
 * Il s'arrête plutôt que d'écrire une icône fausse si le glyphe déborde de la
 * zone sûre, ou si le pourtour du disque n'est pas d'une seule couleur opaque —
 * les deux cas où le dérivé ne serait plus fidèle à l'original.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import sharp from 'sharp';

const RACINE = join(dirname(fileURLToPath(import.meta.url)), '..');
const SOURCE = join(RACINE, 'public/android-chrome-512x512.png');
const CIBLE = join(RACINE, 'public/icon-512-maskable.png');

/** Part du côté garantie visible quel que soit le masque du lanceur. */
const ZONE_SURE = 0.8;
/** Écart de couleur au-delà duquel un pixel compte comme du dessin, pas du fond. */
const SEUIL_GLYPHE = 40;

const { data, info } = await sharp(SOURCE).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { width: L, height: H, channels: C } = info;
if (L !== H) {
  console.error(`  Icône non carrée (${L}×${H}) — le masque suppose un carré.`);
  process.exit(1);
}

const cx = (L - 1) / 2;
const rayonSur = (L * ZONE_SURE) / 2;
const px = (i) => ({ r: data[i * C], v: data[i * C + 1], b: data[i * C + 2], a: data[i * C + 3] });
const rayon = (i) => Math.hypot(Math.floor(i / L) - cx, (i % L) - cx);

// ---- 1. la couleur du disque, relevée dans un anneau hors du glyphe --------
// Bornes en fraction du rayon : au-delà du dessin, en deçà du bord adouci.
const canaux = [[], [], []];
for (let i = 0; i < L * H; i++) {
  const rel = rayon(i) / (L / 2);
  if (rel < 0.86 || rel > 0.968) continue;
  const p = px(i);
  if (p.a !== 255) continue;
  canaux[0].push(p.r);
  canaux[1].push(p.v);
  canaux[2].push(p.b);
}
if (canaux[0].length < 1000) {
  console.error("  Pourtour du disque introuvable ou non opaque — icône inattendue, rien n'a été écrit.");
  process.exit(1);
}
const mediane = (t) => t.sort((a, b) => a - b)[t.length >> 1];
const fond = { r: mediane(canaux[0]), g: mediane(canaux[1]), b: mediane(canaux[2]) };

// Le pourtour doit être UNI : une couleur médiane n'a de sens que là.
const disperse = canaux.some((t) => {
  const m = mediane([...t]);
  return t.filter((v) => Math.abs(v - m) > 3).length / t.length > 0.15;
});
if (disperse) {
  console.error('  Le pourtour du disque n’est pas uni — aplatir dessus laisserait une couture.');
  process.exit(1);
}

// ---- 2. le glyphe tient-il dans la zone sûre ? -----------------------------
let rayonGlyphe = 0;
for (let i = 0; i < L * H; i++) {
  const p = px(i);
  if (p.a < 128) continue;
  const ecart = Math.abs(p.r - fond.r) + Math.abs(p.v - fond.g) + Math.abs(p.b - fond.b);
  if (ecart <= SEUIL_GLYPHE) continue;
  const d = rayon(i);
  if (d > rayonGlyphe) rayonGlyphe = d;
}

const teinte = `#${[fond.r, fond.g, fond.b].map((v) => v.toString(16).padStart(2, '0')).join('')}`;
console.log(`  source      ${L}×${H}`);
console.log(`  fond relevé ${teinte}  (rgb ${fond.r}, ${fond.g}, ${fond.b})`);
console.log(
  `  glyphe      rayon ${rayonGlyphe.toFixed(1)} px sur ${rayonSur.toFixed(1)} de zone sûre ` +
    `(${((100 * rayonGlyphe) / rayonSur).toFixed(1)} %)`
);

if (rayonGlyphe > rayonSur) {
  console.error(
    `\n  LE GLYPHE DÉBORDE de ${(rayonGlyphe - rayonSur).toFixed(1)} px. Le masque le rognerait.\n` +
      `  Réduire le dessin dans le jeu de favicons, ou retirer \`purpose: "maskable"\`\n` +
      `  du manifeste. Rien n'a été écrit.`
  );
  process.exit(1);
}

// ---- 3. l'aplatissement ----------------------------------------------------
// `flatten` compose sur un fond opaque : les coins transparents prennent la
// couleur du disque, et l'arête adoucie du disque disparaît dans la même teinte.
const sortie = await sharp(SOURCE)
  .flatten({ background: { r: fond.r, g: fond.g, b: fond.b } })
  // Sans palette : le glyphe est un dégradé, et la quantification sur 256
  // teintes y creusait des bandes — jusqu'à 17/255 d'écart. Elle économisait
  // 77 Ko sur un fichier qui n'est téléchargé qu'à l'installation, pas à chaque
  // page. La fidélité vaut plus cher que l'octet ici.
  .png({ compressionLevel: 9 })
  .toBuffer();

await writeFile(CIBLE, sortie);
const avant = await readFile(SOURCE);
console.log(
  `\n  Écrit public/icon-512-maskable.png — ${(sortie.length / 1024).toFixed(1)} Ko ` +
    `(source : ${(avant.length / 1024).toFixed(1)} Ko)`
);
