/**
 * Y a-t-il un serveur pour répondre ?
 *
 * Le site se construit pour trois cibles, et une seule sait recevoir un POST :
 *
 *   • `astro dev`        — vrai serveur, le formulaire fonctionne
 *   • Vercel             — vrai serveur, le formulaire fonctionne
 *   • GitHub Pages       — fichiers statiques, la route `/api/contact` N'EXISTE PAS
 *
 * Sur la troisième, un formulaire enverrait dans le vide : le navigateur
 * recevrait une 404 après que le visiteur a écrit son message. On affiche donc
 * à la place les liens directs, qui eux marchent partout.
 *
 * C'est la même règle que pour les réalisations hors ligne (voir
 * [src/data/realisations.ts](../data/realisations.ts)) : ce que la cible ne
 * peut pas servir, on ne le montre pas.
 *
 * ── Pourquoi `process.env` et non `import.meta.env` ───────────────────────
 *
 * Ce module n'est lu QU'À LA CONSTRUCTION, depuis le frontmatter des
 * composants — donc dans Node, où `process.env` est peuplé. `import.meta.env`
 * n'expose au client que les variables préfixées `PUBLIC_`, et `VERCEL` n'en
 * est pas une : la valeur serait `undefined` et le repli s'activerait à tort,
 * y compris en production.
 */
export const SERVEUR_DISPONIBLE: boolean =
  Boolean(process.env.VERCEL) || process.env.NODE_ENV === 'development';
