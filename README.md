# So Good Diner — site vitrine

Site vitrine one-page pour **So Good Diner**, burgers / tacos / american food en centre-ville de Fréjus (83).

**Stack : HTML + CSS + JavaScript vanilla. Zéro dépendance, zéro étape de build.**
Le site se déploie tel quel sur n'importe quel hébergement statique.

---

## Démarrer en local

Aucune installation nécessaire. Deux options :

```bash
# Python
python3 -m http.server 8080

# ou Node
npx serve .
```

Puis ouvrir <http://localhost:8080>.

> Il faut passer par un serveur local (et non ouvrir `index.html` en double-clic)
> pour que les modules et les iframes se chargent correctement.

---

## Mettre à jour le contenu

**Tout le contenu du site est centralisé dans un seul fichier :
[`assets/js/content.js`](assets/js/content.js).**

Coordonnées, horaires, carte, plats, prix, textes, photos, réseaux sociaux, liens
de commande : tout y est. Aucune modification du HTML n'est nécessaire pour un
changement éditorial.

| Je veux changer… | Je modifie dans `content.js` |
| --- | --- |
| L'adresse, le téléphone, l'e-mail | `coordonnees` |
| Les horaires | `horaires` (1 = lundi … 7 = dimanche) |
| La carte et les prix | `carte` |
| Les plats mis en avant | `signatures` |
| Les photos | `galerie` (puis remplacer les fichiers `.webp` dans `assets/img/`) |
| Le titre affiché dans Google | `seo` |
| Les boutons « Commander » | `commande` (passer `actif: true` sur Uber Eats / Deliveroo) |
| Le bandeau défilant | `ticker` |

⚠️ **Le site est actuellement en mode brouillon** : `brouillon: true` en haut du fichier
affiche un avertissement « carte indicative ». Passer à `false` une fois le contenu validé
par le client.

La checklist complète des informations à récupérer auprès du client est dans
[`CONTENT.md`](CONTENT.md).

---

## Structure

```
index.html              Page d'accueil (one-page)
mentions-legales.html   Obligatoire en France
confidentialite.html    RGPD
404.html                Page d'erreur
robots.txt              + sitemap.xml
netlify.toml            Headers de sécurité, cache, 404

assets/
  css/styles.css        Tout le CSS (design system en variables, en haut du fichier)
  js/content.js         ★ LE contenu — à éditer
  js/main.js            Animations et interactions
  img/                  Photographies
  favicon.svg
```

---

## Ce que fait le site

**Fonctionnel**

- Statut **« Ouvert / Fermé / Ouvre à hh:mm »** calculé en direct depuis les horaires,
  rafraîchi chaque minute, affiché dans la barre de navigation.
- Carte **OpenStreetMap** intégrée sans clé API, avec bouton « Voir l'itinéraire »
  vers Google Maps.
- **Formulaire de contact** validé côté client (nom, téléphone *ou* e-mail, message).
  Par défaut il ouvre le logiciel de messagerie (`mailto:`) — aucun back-end requis.
  Pour recevoir les messages sur une boîte, passer `contact.mode` à `"endpoint"`
  et renseigner un [Formspree](https://formspree.io) ou équivalent.
- **Visionneuse de galerie** navigable à la souris et au clavier (flèches, Échap).
- Carte découpée en **onglets** accessibles (`role="tablist"`, navigation flèches/Home/End).
- Liens `tel:`, `mailto:`, Instagram, Facebook.
- 404, robots.txt, sitemap.xml, `JSON-LD Restaurant`, Open Graph.
- Mentions légales et politique de confidentialité conformes au cadre français (RGPD/CNIL,
  médiation de la consommation, allergènes INCO).

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
d'intégration DOM (jsdom) qui exécute réellement `content.js` + `main.js` contre
`index.html` : rendu des données, onglets de la carte, calcul des horaires, statut
ouvert/fermé, lightbox, menu mobile, validation du formulaire, accessibilité et
existence de tous les assets référencés.

Le harnais vit hors du dépôt (`/home/user/qa/test.mjs`) pour ne pas ajouter de
`package.json` ni de `node_modules` à un site statique :

```bash
cd /home/user/qa && node test.mjs
```

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

1. Renseigner les vraies informations dans `assets/js/content.js`.
2. Remplacer les photographies d'illustration par les photos du client.
3. Passer `brouillon: false`.
4. Mettre à jour le domaine dans `robots.txt`, `sitemap.xml` et les balises
   `canonical` / Open Graph de `index.html`.
5. Compléter `mentions-legales.html` (SIREN, RCS, hébergeur).
