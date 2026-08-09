import { PACK_COURRIEL, type ClePack } from '../data/tarifs';

/**
 * Le message de notification envoyé au studio à chaque demande.
 *
 * Séparé de la route pour une raison simple : c'est du gabarit, pas de la
 * logique de traitement. On peut le rendre et le regarder sans réseau, sans clé
 * d'API et sans serveur.
 *
 * ── Pourquoi ce HTML est écrit à l'ancienne ───────────────────────────────
 *
 * Une messagerie n'est pas un navigateur. Les règles qui s'appliquent ici :
 *
 * • STYLES EN LIGNE. Gmail retire le bloc `<style>` dans plusieurs de ses vues
 *   (message tronqué, transfert) : une mise en forme qui n'en dépend pas
 *   survit partout.
 * • PAS DE VARIABLE CSS, pas de flex, pas de grille. D'où les tableaux, seule
 *   mise en page qu'Outlook rende encore correctement.
 * • PAS D'IMAGE. Elles sont bloquées par défaut ; ce qui compte doit tenir
 *   dans du texte et des aplats de couleur.
 * • PAS DE POLICE DISTANTE. On s'en remet à la pile système.
 *
 * ── La version texte n'est pas un supplément ──────────────────────────────
 *
 * Elle est construite à partir des mêmes données, et part avec le HTML. Elle
 * sert aux clients en texte seul, aux lecteurs d'écran mal servis par le
 * balisage, et abaisse la note anti-spam d'un message qui n'aurait que du HTML.
 */

export interface Demande {
  nom: string;
  email: string;
  message: string;
  pack: ClePack | null;
}

/**
 * Échappement du contenu écrit par le visiteur.
 *
 * Indispensable : le nom et le message entrent dans du balisage. Sans cela, un
 * message contenant `<` casserait la mise en page, et un message soigneusement
 * tourné pourrait glisser ses propres balises dans un courriel qui semble venir
 * de toi. L'apostrophe et le guillemet sont couverts parce que ces valeurs
 * atterrissent aussi dans des attributs.
 */
const echapper = (v: string): string =>
  v
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

/** Les retours à la ligne du visiteur, préservés une fois le texte échappé. */
const enParagraphes = (v: string): string =>
  echapper(v)
    .split(/\n{2,}/)
    .map((p) => `<p style="margin:0 0 12px">${p.replace(/\n/g, '<br>')}</p>`)
    .join('');

const ENCRE = '#12131f';
const PAPIER = '#f7f6f2';
const GRIS = '#5b5b6e';

export function construireCourriel(d: Demande): {
  sujet: string;
  texte: string;
  html: string;
} {
  const pack = d.pack ? PACK_COURRIEL[d.pack] : null;
  const sujet = `Demande de ${d.nom}${pack ? ` — pack ${pack.nom}` : ''}`;

  const texte = [
    `Nouvelle demande depuis studio-caducee.com`,
    '',
    `Nom     : ${d.nom}`,
    `E-mail  : ${d.email}`,
    `Pack    : ${pack ? pack.nom : 'non précisé'}`,
    '',
    'Message :',
    d.message,
    '',
    '— Répondre à ce message écrit directement au visiteur.',
  ].join('\n');

  /**
   * La pastille du pack reprend sa couleur du site. Elle ne porte jamais
   * l'information seule : le nom du pack est écrit dedans, ce qui la rend
   * lisible si les couleurs sont désactivées ou si le message est imprimé.
   */
  const pastille = pack
    ? `<span style="display:inline-block;padding:4px 12px;border-radius:999px;
         background:${pack.couleur};color:#fff;font-size:13px;font-weight:700">${echapper(pack.nom)}</span>`
    : `<span style="display:inline-block;padding:4px 12px;border-radius:999px;
         background:#e6e6ea;color:${GRIS};font-size:13px;font-weight:700">Pack non précisé</span>`;

  const ligne = (etiquette: string, valeur: string) => `
    <tr>
      <td style="padding:6px 0;color:${GRIS};font-size:13px;width:80px;vertical-align:top">${etiquette}</td>
      <td style="padding:6px 0;color:${ENCRE};font-size:15px;font-weight:600">${valeur}</td>
    </tr>`;

  const html = `<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <!-- Sans cette ligne, Apple Mail et Outlook inversent les couleurs en thème
         sombre et retournent l'en-tête encre en blanc sale. -->
    <meta name="color-scheme" content="light only">
    <meta name="supported-color-schemes" content="light only">
    <title>${echapper(sujet)}</title>
  </head>
  <body style="margin:0;padding:0;background:${PAPIER};
    font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif">
    <!-- L'aperçu affiché dans la liste des messages, avant ouverture. Masqué
         dans le corps, d'où la hauteur nulle et le repli hors écran. -->
    <div style="display:none;max-height:0;overflow:hidden;opacity:0">
      ${echapper(d.nom)} — ${pack ? echapper(pack.nom) : 'pack non précisé'}
    </div>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${PAPIER}">
      <tr>
        <td align="center" style="padding:24px 12px">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0"
            style="width:100%;max-width:600px;background:#fff;border-radius:14px;overflow:hidden;
                   box-shadow:0 1px 3px rgba(18,19,31,.08)">

            <tr>
              <td style="background:${ENCRE};padding:20px 28px">
                <div style="color:#fff;font-size:18px;font-weight:800;letter-spacing:-.01em">
                  Studio<span style="color:#8d8cf0">Caducée</span>
                </div>
                <div style="color:#b9bacd;font-size:13px;padding-top:2px">
                  Nouvelle demande depuis le formulaire du site
                </div>
              </td>
            </tr>

            <tr>
              <td style="padding:24px 28px 8px">${pastille}</td>
            </tr>

            <tr>
              <td style="padding:8px 28px 0">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  ${ligne('Nom', echapper(d.nom))}
                  ${ligne(
                    'E-mail',
                    `<a href="mailto:${echapper(d.email)}" style="color:#403fb8;text-decoration:none">${echapper(d.email)}</a>`
                  )}
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:20px 28px 0">
                <div style="color:${GRIS};font-size:13px;padding-bottom:8px">Message</div>
                <div style="background:${PAPIER};border-left:4px solid ${pack ? pack.couleur : '#d7d7dd'};
                     border-radius:8px;padding:16px 18px;color:${ENCRE};font-size:15px;line-height:1.6">
                  ${enParagraphes(d.message)}
                </div>
              </td>
            </tr>

            <tr>
              <td style="padding:24px 28px 28px">
                <a href="mailto:${echapper(d.email)}?subject=${encodeURIComponent(`Re: votre demande — Studio Caducée`)}"
                  style="display:inline-block;background:#5352d1;color:#fff;text-decoration:none;
                         font-weight:700;font-size:15px;padding:12px 22px;border-radius:10px">
                  Répondre à ${echapper(d.nom)}
                </a>
                <div style="color:${GRIS};font-size:12px;padding-top:14px">
                  Un simple « Répondre » écrit aussi au visiteur : son adresse est en Reply-To.
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  return { sujet, texte, html };
}
