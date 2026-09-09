# Contenu à récupérer auprès du client

Le site est fonctionnel et complet. Tout ce qui suit est actuellement un **placeholder**
à remplacer dans [`assets/js/content.js`](assets/js/content.js) avant la mise en ligne.

Les données publiques retrouvées pendant la préparation sont indiquées en bas de page.

---

## 1. Indispensable — bloquant pour la mise en ligne

- [ ] **Adresse exacte** à Fréjus (rue, numéro) — le post Facebook annonce le
      déménagement en centre-ville, sans donner la rue.
- [ ] **Coordonnées GPS** exactes (`coordonnees.geo`) pour centrer la carte.
- [ ] **Téléphone** (`coordonnees.telephone` et `coordonnees.telephoneLien` au format `+33…`).
- [ ] **Horaires réels** d'ouverture, jour par jour, avec les services du midi et du soir.
- [ ] **La carte complète avec les prix** — celle du site est un exemple.
- [ ] **Photographies de l'établissement** (plats, salle, devanture, équipe).
      Les images actuelles sont des visuels d'illustration générés.
- [ ] **Avis clients réels** (avec l'accord de leurs auteurs) ou suppression du bloc.

## 2. Important

- [ ] **Nom de domaine** — `sogooddiner.fr` est utilisé comme hypothèse dans
      `robots.txt`, `sitemap.xml`, `canonical` et les balises Open Graph.
- [ ] **Liens Uber Eats / Deliveroo** actifs à Fréjus, puis passer `actif: true`
      dans `commande.plateformes`. (La page Uber Eats de Saint-Raphaël est fermée.)
- [ ] **E-mail de contact** public.
- [ ] Texte de présentation de l'équipe / de l'histoire, si le client en souhaite un.
- [ ] Options : halal, végétarien, sans gluten, vente d'alcool — à signaler dans la carte.

## 3. Juridique (mentions-legales.html)

- [ ] Raison sociale, forme juridique, capital
- [ ] SIREN / RCS / n° de TVA intracommunautaire
- [ ] Responsable de la publication
- [ ] Nom et adresse de l'hébergeur
- [ ] Médiateur de la consommation auquel l'établissement adhère

## 4. Facultatif

- [ ] Formulaire branché sur Formspree/Netlify Forms plutôt que `mailto:`
      (`contact.mode = "endpoint"` + `contact.endpoint`).
- [ ] Logo vectoriel définitif (le favicon actuel est un pictogramme burger).
- [ ] Charte graphique existante, si le client en a une.
- [ ] Outil de mesure d'audience — le site n'en contient aucun volontairement,
      ce qui évite tout bandeau cookies.

---

## Informations publiques déjà retrouvées

| Élément | Valeur | Source |
| --- | --- | --- |
| Nom | So Good Diner | Instagram `@sogooddiner83` |
| Ancienne adresse | 148 Avenue de Valescure, 83700 Saint-Raphaël | Uber Eats |
| Type de cuisine | Burgers, American, Sandwiches | Uber Eats |
| Statut livraison | Page Uber Eats fermée le 15 sept. 2025 | Uber Eats |
| Nouvelle ville | Fréjus, centre-ville | Post Facebook |
| Instagram | https://www.instagram.com/sogooddiner83/ | fourni |
| Facebook | https://www.facebook.com/61587045554269/ | fourni |

> Instagram et Facebook renvoient une erreur HTTP 403 à toute récupération automatisée :
> l'adresse exacte, le téléphone, les horaires et la carte doivent donc venir du client.
