/**
 * Route serveur du formulaire de contact — `POST /api/contact`.
 *
 * Hors de `src/pages/` volontairement : elle est injectée par astro.config.mjs
 * lorsqu'un serveur existe. Sur GitHub Pages, elle n'est pas construite, et le
 * formulaire retombe sur `mailto:` (voir src/lib/cible.ts).
 *
 * ── Ce qui reste côté serveur, et pourquoi ────────────────────────────────
 *
 * La clé Resend ne sort JAMAIS d'ici. Une clé d'API dans le bundle client est
 * lisible par n'importe quel visiteur, qui peut alors envoyer des mails en ton
 * nom depuis ton domaine vérifié. C'est la raison d'être de cette route : le
 * navigateur parle à ton serveur, ton serveur parle à Resend.
 *
 * ── Anti-spam sans tiers ──────────────────────────────────────────────────
 *
 * Deux pièges, aucun sous-traitant, aucun CAPTCHA — donc aucune donnée envoyée
 * à un tiers, et rien à déclarer de plus au RGPD :
 *
 *   • un champ leurre invisible, que seul un robot remplit ;
 *   • un horodatage : un humain met plus de trois secondes à écrire un message.
 *
 * Les deux répondent 200 comme si tout allait bien. Un robot à qui l'on répond
 * « rejeté » recommence en ajustant ; à qui l'on répond « merci », non.
 */
import type { APIRoute } from 'astro';
import { Resend } from 'resend';

/** Délai minimal entre l'affichage du formulaire et son envoi. */
const DELAI_MINIMAL_MS = 3000;
/** Au-delà, la page est restée ouverte trop longtemps : le jeton a expiré. */
const DELAI_MAXIMAL_MS = 1000 * 60 * 60 * 12;

const LIMITES = { nom: 100, email: 254, message: 5000 };

const json = (donnees: unknown, status: number) =>
  new Response(JSON.stringify(donnees), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });

/**
 * Validation volontairement permissive : elle écarte ce qui ne peut pas être
 * une adresse, pas ce qui n'en a pas l'air. Les expressions régulières
 * ambitieuses rejettent des adresses valides — apostrophes, domaines longs,
 * caractères accentués — et le seul test qui vaille est l'envoi lui-même.
 */
const emailPlausible = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);

export const POST: APIRoute = async ({ request }) => {
  // ---- 1. configuration présente ? ---------------------------------------
  const cle = import.meta.env.RESEND_API_KEY;
  const expediteur = import.meta.env.CONTACT_EXPEDITEUR;
  const destinataire = import.meta.env.CONTACT_DESTINATAIRE;
  if (!cle || !expediteur || !destinataire) {
    // Le détail reste dans les journaux du serveur : dire au visiteur QUELLE
    // variable manque renseignerait un attaquant sur l'infrastructure.
    console.error(
      '[contact] configuration incomplète —',
      { cle: Boolean(cle), expediteur: Boolean(expediteur), destinataire: Boolean(destinataire) }
    );
    return json({ ok: false, code: 'indisponible' }, 503);
  }

  let donnees: FormData;
  try {
    donnees = await request.formData();
  } catch {
    return json({ ok: false, code: 'invalide' }, 400);
  }

  const champ = (nom: string) => String(donnees.get(nom) ?? '').trim();
  const nom = champ('nom');
  const email = champ('email');
  const message = champ('message');

  // ---- 2. les deux pièges ------------------------------------------------
  // Champ leurre : invisible à l'écran, donc vide chez un humain.
  if (champ('site')) return json({ ok: true }, 200);

  const ouvertureA = Number(champ('t'));
  const ecoule = Date.now() - ouvertureA;
  if (!Number.isFinite(ouvertureA) || ecoule < DELAI_MINIMAL_MS || ecoule > DELAI_MAXIMAL_MS) {
    return json({ ok: true }, 200);
  }

  // ---- 3. validation -----------------------------------------------------
  const erreurs: Record<string, string> = {};
  if (!nom) erreurs.nom = 'requis';
  else if (nom.length > LIMITES.nom) erreurs.nom = 'trop long';
  if (!email) erreurs.email = 'requis';
  else if (email.length > LIMITES.email || !emailPlausible(email)) erreurs.email = 'invalide';
  if (!message) erreurs.message = 'requis';
  else if (message.length > LIMITES.message) erreurs.message = 'trop long';
  if (Object.keys(erreurs).length) return json({ ok: false, code: 'invalide', erreurs }, 400);

  // ---- 4. envoi ----------------------------------------------------------
  try {
    const { error } = await new Resend(cle).emails.send({
      from: expediteur,
      to: [destinataire],
      // `replyTo` et non `from` : usurper l'adresse du visiteur dans `from`
      // ferait échouer SPF et DKIM, et le message partirait en indésirables.
      // Répondre au message écrit alors bien au visiteur.
      replyTo: email,
      subject: `Site — demande de ${nom}`,
      text: [`Nom : ${nom}`, `E-mail : ${email}`, '', message].join('\n'),
    });
    if (error) {
      console.error('[contact] refus de Resend —', error);
      return json({ ok: false, code: 'envoi' }, 502);
    }
  } catch (e) {
    console.error('[contact] envoi impossible —', e);
    return json({ ok: false, code: 'envoi' }, 502);
  }

  return json({ ok: true }, 200);
};

/**
 * Toute autre méthode est refusée explicitement. Sans ce garde, un GET sur
 * `/api/contact` renverrait une 404 trompeuse — on chercherait une route
 * absente là où elle existe et n'accepte simplement pas ce verbe.
 */
export const ALL: APIRoute = () =>
  new Response(null, { status: 405, headers: { Allow: 'POST' } });
