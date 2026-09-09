# Contenu à récupérer auprès du client

Bonne nouvelle : l'essentiel a été retrouvé sur la **fiche Uber Eats officielle** de
l'établissement. Ce qui reste est listé ci-dessous.

Les données déjà en place sont dans [`assets/js/content.js`](assets/js/content.js).

---

## ✅ Déjà vérifié et en place

| Élément | Valeur | Source |
| --- | --- | --- |
| Adresse | 65 rue du Général de Gaulle, 83600 Fréjus | Fiche Uber Eats |
| Coordonnées GPS | 43.43244, 6.73416 | Géocodage OpenStreetMap (rue — à affiner au n° 65) |
| Horaires | Service du soir **18 h – 1 h** | Fiche Uber Eats |
| Carte Burgers | 12 burgers, de 7,50 € à 21,90 € | Fiche Uber Eats |
| Carte Kumpirs | 8 kumpirs, de 13,00 € à 18,70 € | Fiche Uber Eats |
| Classement des ventes | Kumpir Kebab (nº1), So Good Bacon Burger (nº2), Kumpir Cannibal (nº3), + 3 « Populaire » | Fiche Uber Eats |
| Rubriques existantes | Wraps, Sandwichs, Box, Sides, Menu Enfants, Menu Étudiant, Boissons, Desserts | Fiche Uber Eats |
| Lien de commande | Uber Eats (bouton actif dans le footer) | Fourni par le client |
| Instagram | @sogooddiner83 | Fourni |
| Facebook | Page officielle | Fourni |
| Ancienne adresse | 148 av. de Valescure, Saint-Raphaël (page fermée le 15/09/2025) | Uber Eats |

---

## ⚠️ À récupérer — bloquant pour la mise en ligne

- [ ] **Téléphone** de l'établissement (`coordonnees.telephone` + `telephoneLien`).
- [ ] **E-mail** de contact public (`coordonnees.email`).
- [ ] **Jours d'ouverture** exacts — le site suppose 7j/7 pour le service du soir.
- [ ] **Prix des rubriques manquantes** : Wraps, Sandwichs, Box, Sides, Menu Enfants,
      Menu Étudiant, Boissons, Desserts. Elles sont listées sur le site mais non détaillées.
- [ ] **Photographies de l'établissement** (plats, kumpirs, salle, devanture, équipe).
      Les 17 images actuelles sont des visuels d'illustration générés.

## ⚠️ À faire valider

- [ ] **Textes éditoriaux** : les 4 blocs « En coulisses », les 4 cartes « savoir-faire »
      et les 4 cartes « Chaque couche compte » sont des propositions d'agence.
      Rien n'affirme d'origine des produits ni de fournisseur précis.
- [ ] **Position exacte du n° 65** sur la carte (le marqueur est au centre de la rue).
- [ ] Le restaurant accepte-t-il la **réservation** ? (le formulaire le sous-entend)
- [ ] Options à signaler : **halal**, sans gluten, vente d'alcool.

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

- **Avis clients** : aucun avis vérifié n'était disponible. Plutôt que d'inventer des
  témoignages, la section affiche le **classement réel des plats les plus commandés**.
  Si le client souhaite un vrai bloc d'avis, il faudra les vrais textes avec l'accord
  de leurs auteurs.
- **Note Uber Eats** : la fiche affiche 3,9/5 sur 10 avis. Cette note n'est volontairement
  **pas** reprise sur le site.
- Instagram et Facebook renvoient une erreur HTTP 403 à toute récupération automatisée :
  rien n'a pu en être extrait.
