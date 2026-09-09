# So Good Diner — site vitrine

Site vitrine one-page **bilingue FR/EN** pour **So Good Diner**, burgers et kumpirs au
65 rue du Général de Gaulle, centre-ville de Fréjus (83600).

**Stack : HTML + CSS + JavaScript vanilla. Zéro dépendance, zéro étape de build.**
Le site se déploie tel quel sur n'importe quel hébergement statique.

---

## Démarrer en local

Aucune installation nécessaire :

```bash
python3 -m http.server 8080     # ou : npx serve .
```

Puis ouvrir <http://localhost:8080>.

> Passer par un serveur local (et non un double-clic sur `index.html`) est nécessaire
> pour que l'iframe de la carte se charge correctement.

---

## Mettre à jour le contenu

Le contenu est réparti dans **deux fichiers** :

| Fichier | Contient |
| --- | --- |
| [`assets/js/content.js`](assets/js/content.js) | Le **contenu** : adresse, horaires, carte, plats, prix, textes, photos, réseaux sociaux, liens de commande |
| [`assets/js/i18n.js`](assets/js/i18n.js) | Les **chaînes d'interface** : navigation, boutons, libellés, formulaire, accessibilité |

Aucune modification du HTML n'est nécessaire pour un changement éditorial.

### Traductions

Dans `content.js`, toute chaîne traduisible s'écrit `{ fr: '…', en: '…' }`.
Une valeur identique dans les deux langues reste une chaîne simple.

Les **prix sont des nombres** : `prix: 13.9` s'affiche « 13,90 € » en français et
« €13.90 » en anglais, automatiquement (`Intl.NumberFormat`). Un article peut aussi
porter un `prixMenu` (prix en formule) ; il s'affiche alors « Seul : X · Menu : Y ».

| Je veux changer… | Je modifie |
| --- | --- |
| L'adresse, le téléphone, l'e-mail | `content.js` → `coordonnees` |
| Les horaires | `content.js` → `horaires` (1 = lundi … 7 = dimanche) |
| La carte et les prix | `content.js` → `carte` |
| Les plats mis en avant | `content.js` → `signatures` |
| Les photos | `content.js` → `galerie`, puis les fichiers dans `assets/img/` |
| Titre et description Google | `content.js` → `seo` |
| Le bouton de commande | `content.js` → `commande.plateformes` |
| Le bandeau défilant | `content.js` → `ticker` |
| Un libellé, un bouton, un message d'erreur | `i18n.js` (les deux blocs `fr` et `en`) |

Le drapeau `brouillon` (`content.js`) contrôle l'avertissement « prix susceptibles
d'évoluer » sous la carte. Il est actuellement à **`false`** : la carte affichée est la
carte officielle de l'établissement. Le repasser à `true` réaffiche l'avertissement si
des prix doivent être revus.

La checklist de ce qui reste à récupérer est dans [`CONTENT.md`](CONTENT.md).

---

## Structure

```
index.html              Page d'accueil (one-page, bilingue)
mentions-legales.html   Obligatoire en France
confidentialite.html    RGPD
404.html                Page d'erreur
robots.txt              + sitemap.xml
netlify.toml            Headers de sécurité, cache, 404

assets/
  css/styles.css        Tout le CSS (variables de design en tête de fichier)
  js/i18n.js            ★ Chaînes d'interface FR/EN
  js/content.js         ★ Le contenu FR/EN
  js/main.js            Moteur i18n + animations + interactions
  img/                  Photographies (WebP)
  favicon.svg
```

---

## Ce que fait le site

**Fonctionnel**

- **Bilingue FR/EN** avec bascule instantanée, choix mémorisé (`localStorage`),
  détection de la langue du navigateur au premier visite, `<html lang>` mis à jour.
- Statut **« Ouvert / Fermé / Ouvre à hh:mm »** calculé en direct depuis les horaires,
  rafraîchi chaque minute. Gère les services qui **dépassent minuit** (18 h – 1 h).
- Carte **OpenStreetMap** intégrée sans clé API + bouton « Voir l'itinéraire »
  vers Google Maps.
- **Formulaire de contact** validé côté client (nom, téléphone *ou* e-mail, message).
  Il ouvre le logiciel de messagerie (`mailto:`) — aucun back-end requis.
  Pour recevoir les messages dans une boîte, passer `contact.mode` à `"endpoint"`.
- **Visionneuse de galerie** navigable à la souris et au clavier (flèches, Échap).
- Carte en **onglets** accessibles (`role="tablist"`, flèches/Home/End).
- Prix formatés selon la locale active.
- Bouton **Uber Eats** vers la fiche officielle de l'établissement.
- Liens `tel:`, `mailto:`, Instagram, Facebook.
- 404, robots.txt, sitemap.xml, `JSON-LD Restaurant` (adresse, GPS, horaires), Open Graph.
- Mentions légales et politique de confidentialité conformes au cadre français
  (RGPD/CNIL, médiation de la consommation, allergènes INCO).

**Animations**

Préchargeur avec compteur et wipe en panneaux · typographie cinétique (masques par ligne,
lettres décalées, texte qui se décode) · mot rotatif · bandeaux défilants infinis ·
révélations au scroll avec stagger · compteurs animés · parallaxe · cartes empilées
en `position: sticky` · rails horizontaux glissables à la souris · boutons magnétiques ·
inclinaison 3D des cartes · curseur personnalisé · barre de progression · navigation
qui se masque au scroll descendant · grain animé.

Tout est désactivé proprement si l'utilisateur a activé **`prefers-reduced-motion`**.

---

## Tests

Le projet n'a pas de chaîne de build à vérifier. Le contrôle effectué est un test
d'intégration DOM (jsdom) qui exécute réellement `i18n.js` + `content.js` + `main.js`
contre `index.html`.

Il couvre : le rendu des données, les 20 plats en 2 onglets (+ navigation clavier),
le calcul ouvert/fermé **y compris les cas limites du service de nuit** (00:30, 00:59,
01:00, 23:59), le formatage des prix dans les deux locales, le basculement FR → EN → FR,
la cohérence des 97 clés `data-i18n` du HTML, la lightbox, le menu mobile, la validation
du formulaire, l'accessibilité et l'existence de tous les assets référencés.

Le harnais vit hors du dépôt pour ne pas ajouter de `package.json` ni de `node_modules`
à un site statique :

```bash
cd /home/user/qa && node test.mjs
```

> Chromium n'est pas disponible dans cet environnement : le rendu visuel et les
> animations CSS ne sont pas vérifiés automatiquement, seulement la logique.

---

## Déploiement

**Netlify** — glisser-déposer du dossier, ou :

```bash
netlify deploy --prod --dir=.
```

**Vercel** — `vercel --prod` (aucune configuration requise).

**GitHub Pages** — Settings → Pages → branche `main` / racine.

**Apache / nginx** — copier le dossier à la racine du serveur. `netlify.toml` est ignoré ;
prévoir l'équivalent pour les headers et la 404.

Avant la mise en ligne :

1. Renseigner le téléphone et l'e-mail réels dans `assets/js/content.js`.
2. Remplacer les photographies d'illustration par les photos du client.
3. Confirmer les jours d'ouverture (le service 18 h – 1 h est vérifié, les jours sont supposés 7j/7).
4. Compléter les rubriques Wraps / Sandwichs / Box / Sides / Menus / Boissons / Desserts.
5. Passer `brouillon: false`.
6. Mettre à jour le domaine dans `robots.txt`, `sitemap.xml` et les balises
   `canonical` / Open Graph de `index.html`.
7. Compléter `mentions-legales.html` (SIREN, RCS, hébergeur).
