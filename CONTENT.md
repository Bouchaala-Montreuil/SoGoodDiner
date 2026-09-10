# Contenu à récupérer auprès du client

Bonne nouvelle : l'essentiel est en place. La **carte officielle de l'établissement**
(photos fournies par le client) et la **fiche Google** ont permis de renseigner l'adresse,
le téléphone, les horaires, la note et **l'intégralité du menu avec ses prix**. Ce qui
reste est listé ci-dessous.

Les données déjà en place sont dans [`assets/js/content.js`](assets/js/content.js).

---

## ✅ Déjà vérifié et en place

| Élément | Valeur | Source |
| --- | --- | --- |
| Adresse | 65 rue du Général de Gaulle, 83600 Fréjus | Fiches Google + Uber Eats |
| Coordonnées GPS | 43.43244, 6.73416 | Géocodage OpenStreetMap (rue — à affiner au n° 65) |
| Téléphone | **09 52 17 24 26** | Fiche Google |
| Note | **4,9/5** sur **149 avis** | Fiche Google |
| Tranche de prix | €10–20 | Fiche Google |
| Options | végétalien, menu enfants | Fiche Google |
| Horaires | lun–jeu 11 h–23 h · ven–sam 11 h–2 h* · dim 18 h–23 h (*après 1 h : à emporter/livraison) | Visuel Instagram « Nos horaires » |
| **Carte complète** | **9 rubriques · 52 articles · prix « seul » + « menu »** | **Carte officielle + visuels Instagram** |
| — Kumpir | 10 kumpirs (4 toppings offerts), 10,50 € à 13,50 € seul | Carte officielle |
| — Burgers | 12 burgers (menu = frites + boisson), 4,50 € à 16,80 € seul | Visuels Instagram « La carte des burgers » |
| — Hot Dogs | 3 hot dogs (Classique, Montagnard, Truffe) — prix unitaires à confirmer | Visuels Instagram |
| — Sandwichs & Wraps | 7 sandwichs/wraps | Carte officielle |
| — Boxs | 5 boxs (dont Box Famille 39,90 €) | Carte officielle |
| — Snacking | 7 articles (supplément cheddar/bacon 1,50 €) | Carte officielle |
| — Menus | 2 (menu enfant 8 €, menu étudiant) | Carte officielle |
| — Desserts | 3 desserts (tiramisu 4,50 €) | Carte officielle |
| — Boissons | 3 (soda 2 €, eau 1,50 €, eau pétillante 2 €) | Carte officielle |
| Plats mis en avant | Kumpir Kebab, Le Frenchie, Box Famille | Carte officielle |
| Classement des ventes | Kumpir Kebab (nº1), So Good Bacon Burger (nº2), Kumpir Cannibal (nº3) | Uber Eats (popularité uniquement) |
| Lien de commande | Uber Eats (bouton actif dans le footer) | Fourni par le client |
| Instagram | @sogooddiner83 | Fourni |
| Facebook | Page officielle | Fourni |
| Ancienne adresse | 148 av. de Valescure, Saint-Raphaël (page fermée le 15/09/2025) | Uber Eats |

> **Suppléments** : la carte indique « tout supplément 1,00 € » (note reprise sous la
> carte du site, `carteMention`).

---

## ⚠️ À récupérer — bloquant pour la mise en ligne

- [ ] **E-mail** de contact public (`coordonnees.email`).
- [ ] **Photographies de l'établissement** (plats, kumpirs, salle, devanture, équipe).
      Les images actuelles sont des visuels d'illustration générés.
- [ ] **Prix unitaires des hot dogs** (Classique, Montagnard, Truffe) — les visuels ne
      donnent que le prix de la box de 3 (19,90 €). Ils sont listés sans prix en attendant.

## ⚠️ À faire valider

- [ ] **Textes éditoriaux** : les blocs « En coulisses », les cartes « savoir-faire »
      et « Chaque couche compte » sont des propositions d'agence. La carte officielle
      mentionne « pain artisanal du boulanger » et « viande fraîche du boucher » —
      à confirmer avant de les affirmer sur le site.
- [ ] **Position exacte du n° 65** sur la carte (le marqueur est au centre de la rue).
- [ ] Le restaurant accepte-t-il la **réservation** ? (le formulaire le sous-entend)
- [ ] Autres régimes à signaler : **halal**, sans gluten, vente d'alcool.

## Juridique (`mentions-legales.html`)

- [ ] Raison sociale, forme juridique, capital
- [ ] SIREN / RCS / n° de TVA intracommunautaire
- [ ] Responsable de la publication
- [ ] Nom et adresse de l'hébergeur
- [ ] Médiateur de la consommation auquel l'établissement adhère

## Facultatif

- [ ] **Nom de domaine** — `sogooddiner.fr` est une hypothèse utilisée dans `robots.txt`,
      `sitemap.xml`, `canonical` et les balises Open Graph.
- [ ] **Deliveroo** en plus d'Uber Eats (`commande.plateformes`).
- [ ] Formulaire branché sur Formspree/Netlify Forms plutôt que `mailto:`
      (`contact.mode = "endpoint"` + `contact.endpoint`).
- [ ] **Logo vectoriel** définitif (le favicon actuel est un pictogramme burger).
- [ ] Outil de mesure d'audience — le site n'en contient aucun volontairement,
      ce qui évite tout bandeau cookies.

---

## Notes

- **Carte officielle** : le menu affiché est la **carte de l'établissement** (photos
  fournies par le client), et non la fiche Uber Eats. Les prix Uber Eats différaient ;
  ils ne sont plus utilisés. Uber Eats ne sert désormais qu'au **classement de
  popularité** et au **lien de commande**. Le drapeau `brouillon` est passé à `false`.
- **Note Google** : la fiche affiche **4,9/5 sur 149 avis**. Elle est reprise sur le site
  (bloc chiffres + `JSON-LD aggregateRating`).
- **Avis clients** : aucun texte d'avis vérifié n'était disponible. Plutôt que d'inventer
  des témoignages, la section « favoris » affiche le **classement réel des plats les plus
  commandés** (Uber Eats). Si le client souhaite un vrai bloc d'avis, il faudra les vrais
  textes avec l'accord de leurs auteurs.
- Instagram et Facebook renvoient une erreur HTTP 403 à toute récupération automatisée :
  rien n'a pu en être extrait.
