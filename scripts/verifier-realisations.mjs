/**
 * Confronte les Réalisations déclarées à ce que servent réellement les sites.
 *
 * Deux questions, une par réalisation :
 *   1. la production répond-elle ?      → l'état `enLigne` est-il encore juste ?
 *   2. l'icône locale est-elle à jour ? → le favicon servi a-t-il changé ?
 *
 * ── Ce que ce script ne fait pas ──────────────────────────────────────────
 *
 * Il ne modifie RIEN. Ni les fichiers, ni `src/data/realisations.ts`. Le site
 * est statique et doit se construire à l'identique depuis un même commit : si
 * une sonde réseau décidait des liens au moment du build, un incident DNS
 * passager suffirait à publier une page différente, sans que personne l'ait
 * voulu. La sonde informe, l'humain décide.
 *
 *   npm run verifier-realisations
 *
 * Il lit la liste depuis `src/data/realisations.ts` — pas de seconde copie qui
 * dériverait de la première.
 */
import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join } from 'node:path';
import sharp from 'sharp';

const RACINE = join(dirname(fileURLToPath(import.meta.url)), '..');
const { REALISATIONS, lienDepot, resoudreRealisation } = await import(
  pathToFileURL(join(RACINE, 'src/data/realisations.ts')).href
);

/**
 * Candidats, du plus net au moins net. Un SVG bat tout le reste ; sinon la plus
 * grande matrice, puisque l'icône est réduite à 96 px et qu'un agrandissement
 * se verrait.
 */
const CANDIDATS = [
  '/favicon.svg',
  '/android-chrome-512x512.png',
  '/icon.png',
  '/android-chrome-192x192.png',
  '/apple-touch-icon.png',
  '/favicon-32x32.png',
];

/**
 * Comparaison PERCEPTUELLE, jamais octet à octet : le fichier local est un
 * dérivé, encodé autrement et depuis une autre taille de source. On aplatit sur
 * blanc au passage — la couleur des pixels transparents est arbitraire et
 * gonflait l'écart à 20 sur des icônes rigoureusement identiques.
 */
const ECART_TOLERE = 6;
const RESEAU = /ENOTFOUND|EAI_AGAIN|ECONNREFUSED|ETIMEDOUT|TimeoutError|CERT_/;

const pixels = (donnees) =>
  sharp(donnees).resize(96, 96, { fit: 'cover' }).flatten({ background: '#ffffff' }).raw().toBuffer();

const empreinte = (donnees) => createHash('md5').update(donnees).digest('hex');

async function ecartMoyen(a, b) {
  const [pa, pb] = await Promise.all([pixels(a), pixels(b)]);
  let somme = 0;
  for (let i = 0; i < pa.length; i++) somme += Math.abs(pa[i] - pb[i]);
  return somme / pa.length;
}

async function recuperer(url) {
  const reponse = await fetch(url, { redirect: 'follow', signal: AbortSignal.timeout(15000) });
  return reponse.ok ? Buffer.from(await reponse.arrayBuffer()) : null;
}

/** Le site répond-il, quelle que soit la page ? */
async function joignable(url) {
  try {
    await fetch(url, { redirect: 'follow', signal: AbortSignal.timeout(15000) });
    return { oui: true };
  } catch (erreur) {
    const cause = String(erreur?.cause?.code ?? erreur?.name ?? erreur);
    return { oui: false, cause };
  }
}

let ecarts = 0;

for (const r of REALISATIONS) {
  const nom = r.url.replace(/^https?:\/\//, '');
  const dit = (etat, texte) => {
    if (etat !== 'ok') ecarts++;
    console.log(`  ${etat === 'ok' ? ' ' : '!'} ${nom.padEnd(26)} ${texte}`);
  };

  // ---- 1. l'état déclaré correspond-il ? --------------------------------
  const prod = await joignable(r.url);
  if (prod.oui && !r.enLigne) {
    const { href } = resoudreRealisation(r);
    dit(
      'ecart',
      `LA PRODUCTION RÉPOND À NOUVEAU — passer \`enLigne: true\` ; la carte est ` +
        `absente du site construit, et pointe sur ${href} en développement`
    );
  } else if (!prod.oui && r.enLigne) {
    const repli = r.depotRepli ? lienDepot(r.depotRepli) : 'aucun dépôt de repli déclaré';
    dit(
      'ecart',
      `INJOIGNABLE (${prod.cause}) — passer \`enLigne: false\` pour la retirer du ` +
        `site construit ; repli affiché en développement : ${repli}`
    );
  } else if (!prod.oui && !r.enLigne) {
    dit('ok', 'hors ligne comme déclaré — retirée du site construit, repli en développement');
  } else {
    dit('ok', 'en ligne comme déclaré');
  }

  // ---- 2. l'icône est-elle encore celle du site ? -----------------------
  if (!prod.oui) {
    if (r.iconeVerifiee) dit('ecart', "  icône déclarée vérifiée alors que le site ne répond pas");
    continue;
  }

  let trouve = null;
  for (const chemin of CANDIDATS) {
    const donnees = await recuperer(r.url + chemin).catch(() => null);
    if (donnees?.length) {
      trouve = { chemin, donnees };
      break;
    }
  }
  if (!trouve) {
    dit('ecart', '  aucune icône trouvée parmi les chemins usuels');
    continue;
  }

  const locale = await readFile(join(RACINE, 'public/portfolio', r.icone));
  if (r.icone.endsWith('.svg')) {
    const identique = empreinte(locale) === empreinte(trouve.donnees);
    dit(identique ? 'ok' : 'ecart', `  icône ${identique ? 'identique' : 'DIFFÉRENTE'} (${trouve.chemin})`);
    continue;
  }
  const ecart = await ecartMoyen(locale, trouve.donnees);
  dit(
    ecart <= ECART_TOLERE ? 'ok' : 'ecart',
    ecart <= ECART_TOLERE
      ? `  icône à jour (écart ${ecart.toFixed(1)})`
      : `  ICÔNE CHANGÉE en production (écart ${ecart.toFixed(1)}) — régénérer ${r.icone}`
  );
}

console.log(
  ecarts === 0
    ? '\n  Tout concorde avec src/data/realisations.ts.'
    : `\n  ${ecarts} écart(s) — src/data/realisations.ts est à mettre à jour à la main.`
);
process.exit(0);
