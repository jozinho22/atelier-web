/**
 * Régénère les icônes des PETITES tailles depuis `public/favicon.svg`.
 *
 *   npm run generer-minis
 *
 * Produit `favicon-32x32.png` et `favicon.ico` (16, 32, 48).
 *
 * ── Pourquoi un dessin à part pour les petites tailles ────────────────────
 *
 * L'icône d'application montre un cadre fin, un onglet, trois pastilles et
 * trois barres. Réduite à 16 px, sa bordure de 16 px sur 512 tombe à 0,5 px :
 * un demi-pixel ne se trace pas, il devient un gris. Le glyphe n'occupe de
 * surcroît que 59 % du canevas, soit neuf pixels utiles sur seize.
 *
 * Rééchantillonner autrement n'y change rien — mesuré sur six filtres, du
 * Lanczos depuis la 512 à la moyenne d'aire. Il faut un AUTRE DESSIN : traits
 * épais, deux détails, marque à fond perdu. C'est `favicon.svg`.
 *
 * ── Pourquoi le SVG est la source ─────────────────────────────────────────
 *
 * Il est net à toute taille et pèse moins d'un kilo-octet. Les navigateurs
 * modernes le préfèrent aux PNG déclarés ; les PNG et le .ico ne servent plus
 * qu'aux autres, et sont tirés d'ici pour que les trois s'accordent.
 *
 * ⚠️ Le .ico embarque le 48 px tiré du dessin COMPLET, pas de la marque
 * simplifiée : à 48 px le trait fait 1,5 px, le dessin d'origine tient, et
 * autant montrer la vraie icône dès qu'elle est lisible. C'est précisément à
 * cela que sert un .ico multi-tailles.
 */
import { writeFile, copyFile, mkdir, constants } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import sharp from 'sharp';

const RACINE = join(dirname(fileURLToPath(import.meta.url)), '..');
const chemin = (f) => join(RACINE, 'public', f);

const SVG = chemin('favicon.svg');
/** Le dessin complet, assez lisible à partir de 48 px. */
const COMPLET = chemin('android-chrome-512x512.png');

/** Rendu carré sur fond transparent, en partant du vectoriel à la bonne taille. */
const rendre = (src, taille) =>
  sharp(src, { density: 512 }).resize(taille, taille, { fit: 'contain' }).png({ compressionLevel: 9 }).toBuffer();

/**
 * Assemble un .ico à partir de PNG déjà encodés.
 *
 * Le format admet des entrées PNG depuis Windows Vista, et tous les
 * navigateurs les lisent — inutile de repasser par du BMP et son masque de
 * transparence inversé.
 */
function ico(images) {
  const entete = Buffer.alloc(6);
  entete.writeUInt16LE(0, 0); // réservé
  entete.writeUInt16LE(1, 2); // 1 = icône
  entete.writeUInt16LE(images.length, 4);

  let offset = 6 + images.length * 16;
  const entrees = images.map(({ taille, donnees }) => {
    const e = Buffer.alloc(16);
    e.writeUInt8(taille >= 256 ? 0 : taille, 0); // 0 signifie 256
    e.writeUInt8(taille >= 256 ? 0 : taille, 1);
    e.writeUInt8(0, 2); // palette : aucune
    e.writeUInt8(0, 3); // réservé
    e.writeUInt16LE(1, 4); // plans
    e.writeUInt16LE(32, 6); // bits par pixel
    e.writeUInt32LE(donnees.length, 8);
    e.writeUInt32LE(offset, 12);
    offset += donnees.length;
    return e;
  });

  return Buffer.concat([entete, ...entrees, ...images.map((i) => i.donnees)]);
}

// ---- sauvegarde : les fichiers écrasés ne sont pas encore versionnés -------
// HORS de `public/` : tout ce qui s'y trouve est recopié tel quel dans `dist/`
// et publié. Une sauvegarde y aurait été mise en ligne avec le site.
// `COPYFILE_EXCL` : on ne sauvegarde qu'une fois. Sans lui, une seconde
// exécution remplacerait l'original par le fichier déjà régénéré — la
// sauvegarde ne sauvegarderait plus rien.
const REFUGE = join(RACINE, '.icones-avant');
await mkdir(REFUGE, { recursive: true });
for (const f of ['favicon-32x32.png', 'favicon.ico']) {
  await copyFile(chemin(f), join(REFUGE, f), constants.COPYFILE_EXCL).catch(() => {});
}

const png32 = await rendre(SVG, 32);
await writeFile(chemin('favicon-32x32.png'), png32);

const images = [
  { taille: 16, donnees: await rendre(SVG, 16) },
  { taille: 32, donnees: png32 },
  { taille: 48, donnees: await rendre(COMPLET, 48) },
];
await writeFile(chemin('favicon.ico'), ico(images));

// ---- mesure : la netteté a-t-elle bougé dans le bon sens ? -----------------
const nettete = async (buffer) => {
  const { data, info } = await sharp(buffer)
    .flatten({ background: '#ffffff' })
    .greyscale()
    .raw()
    .toBuffer({ resolveWithObject: true });
  let somme = 0;
  let n = 0;
  for (let y = 1; y < info.height - 1; y++) {
    for (let x = 1; x < info.width - 1; x++) {
      const i = y * info.width + x;
      const gx = data[i + 1] - data[i - 1];
      const gy = data[i + info.width] - data[i - info.width];
      somme += Math.hypot(gx, gy);
      n++;
    }
  }
  return somme / n;
};

const avant = await rendre(COMPLET, 16);
console.log(`  favicon.svg → 16 px  netteté ${(await nettete(images[0].donnees)).toFixed(1)}`);
console.log(`  dessin complet → 16  netteté ${(await nettete(avant)).toFixed(1)}   (l'ancien mini)`);
console.log(
  `\n  Écrit favicon-32x32.png (${(png32.length / 1024).toFixed(1)} Ko) ` +
    `et favicon.ico (16, 32, 48).\n  Originaux conservés dans .icones-avant/.`
);
