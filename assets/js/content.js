/**
 * ============================================================================
 *  SO GOOD DINER — FICHIER DE CONTENU
 * ============================================================================
 *  Tout le contenu du site vit ici. Pour mettre à jour le site, il suffit
 *  d'éditer ce fichier : aucun code HTML à toucher.
 *
 *  ⚠️  Les valeurs marquées « À CONFIRMER » sont des placeholders à remplacer
 *      par les informations réelles fournies par le client (voir CONTENT.md).
 * ============================================================================
 */
window.SO_GOOD = {
  /* ------------------------------------------------------------------------
   * 0. MODE BROUILLON
   * true  -> affiche un badge « Version démo » et un avertissement sur la carte
   * false -> site en production (à passer à false une fois le contenu validé)
   * ---------------------------------------------------------------------- */
  brouillon: true,

  /* ------------------------------------------------------------------------
   * 1. IDENTITÉ
   * ---------------------------------------------------------------------- */
  seo: {
    titre: 'So Good Diner — Burgers & Tacos au cœur de Fréjus',
    description:
      "So Good Diner, burgers smashés, tacos et american food en centre-ville de Fréjus. " +
      'Pain du boulanger, viande fraîche, sauces maison. Sur place, à emporter et en livraison.',
  },
  hero: {
    ligne1: 'So Good',
    ligne2: 'Diner',
    motsRotatifs: ['smashé', 'frais', 'généreux', 'fait maison'],
    texte:
      "Smashé minute sur la plancha, cheddar coulant, pain du boulanger. " +
      "L'esprit diner américain, en plein centre-ville de Fréjus.",
  },
  etablissement: {
    nom: 'So Good Diner',
    nomCourt: 'So Good',
    type: "Burgers · Tacos · American food",
    baseline: 'Le goût américain, au cœur de Fréjus.',
    description:
      "So Good Diner, c'est l'esprit diner américain revisité en plein centre-ville de Fréjus : " +
      'pain du boulanger, viande fraîche, sauces maison et portions généreuses. ' +
      'Sur place, à emporter ou en livraison.',
    depuis: '2024',
  },

  /* ------------------------------------------------------------------------
   * 2. COORDONNÉES  — À CONFIRMER
   * ---------------------------------------------------------------------- */
  coordonnees: {
    adresse: 'Adresse à confirmer',           // ex. "12 rue de la République"
    complement: 'Centre-ville',
    codePostal: '83600',
    ville: 'Fréjus',
    telephone: '04 00 00 00 00',              // À CONFIRMER
    telephoneLien: '+33400000000',            // format international, sans espaces
    email: 'contact@sogooddiner.fr',          // À CONFIRMER
    instagram: 'https://www.instagram.com/sogooddiner83/',
    facebook: 'https://www.facebook.com/61587045554269/',
    // Coordonnées GPS pour la carte (centre-ville de Fréjus) — À AJUSTER
    geo: { lat: 43.4332, lon: 6.7370 },
  },

  /* ------------------------------------------------------------------------
   * 3. ANNONCE (bandeau défilant + bloc « nouvelle adresse »)
   * ---------------------------------------------------------------------- */
  annonce: {
    actif: true,
    titre: 'Nouvelle adresse',
    texte:
      'So Good Diner a déménagé et vous accueille désormais en plein centre-ville de Fréjus. ' +
      'Toujours la même équipe, toujours la même générosité.',
    cta: "Voir l'itinéraire",
    // Laisser vide pour générer automatiquement le lien Google Maps depuis l'adresse
    lien: '',
  },

  ticker: [
    'Nouvelle adresse — centre-ville de Fréjus',
    'Sur place & à emporter',
    'Pain du boulanger',
    'Sauces maison',
    'Viande fraîche',
    'Ouvert 7j/7',
  ],

  /* ------------------------------------------------------------------------
   * 4. CHIFFRES CLÉS (bande sous le hero)
   * ---------------------------------------------------------------------- */
  chiffres: [
    { valeur: '100 %', libelle: 'Fait maison' },
    { valeur: '7j/7', libelle: 'Service continu' },
    { valeur: '4,8/5', libelle: 'Avis clients' },      // À CONFIRMER
    { valeur: '20 min', libelle: 'À emporter' },
  ],

  /* ------------------------------------------------------------------------
   * 5. VALEURS / SAVOIR-FAIRE
   * ---------------------------------------------------------------------- */
  valeurs: [
    {
      icone: 'pain',
      titre: 'Pain du boulanger',
      texte: 'Buns briochés livrés chaque matin par un artisan local, toastés à la commande.',
    },
    {
      icone: 'viande',
      titre: 'Viande fraîche',
      texte: 'Bœuf haché sur place chaque jour, poulet mariné maison. Jamais de surgelé.',
    },
    {
      icone: 'sauce',
      titre: 'Sauces maison',
      texte: 'Fromagère, barbecue, américaine, avocat-citron : préparées dans notre cuisine.',
    },
    {
      icone: 'frites',
      titre: 'Frites fraîches',
      texte: 'Pommes de terre épluchées et coupées sur place, double cuisson pour le croustillant.',
    },
  ],

  /* ------------------------------------------------------------------------
   * 6. SIGNATURES (cartes mises en avant sur la page d'accueil)
   *    ⚠️  Carte EXEMPLE — plats et prix À CONFIRMER avec le client
   * ---------------------------------------------------------------------- */
  signatures: [
    {
      nom: 'Le So Smash',
      description: 'Double steak smashé, cheddar fondu, oignons caramélisés, sauce fromagère maison.',
      prix: '13,90 €',
      image: 'assets/img/dish-smash.webp',
      badge: 'Best-seller',
    },
    {
      nom: 'Tacos So Good',
      description: 'Galette grillée, 2 viandes au choix, frites maison et sauce fromagère.',
      prix: '12,90 €',
      image: 'assets/img/dish-tacos.webp',
      badge: 'Généreux',
    },
    {
      nom: 'Crispy Chicken',
      description: 'Filet de poulet mariné et pané, coleslaw croquant, pickles, bun brioché.',
      prix: '12,50 €',
      image: 'assets/img/dish-chicken.webp',
      badge: 'Croustillant',
    },
  ],

  /* ------------------------------------------------------------------------
   * 6bis. « CHAQUE COUCHE COMPTE » — la décomposition du burger
   * ---------------------------------------------------------------------- */
  couches: [
    {
      num: '01',
      titre: 'Le pain',
      texte: 'Bun brioché du boulanger, toasté au beurre sur la plancha pour rester moelleux sans se déliter.',
      image: 'assets/img/ing-bun.webp',
    },
    {
      num: '02',
      titre: 'Le steak',
      texte: 'Bœuf haché sur place, smashé à la commande : croûte caramélisée dehors, jus dedans.',
      image: 'assets/img/ing-patty.webp',
    },
    {
      num: '03',
      titre: 'Le cheddar',
      texte: 'Cheddar fondant posé à la seconde où le steak sort du feu. Il coule, c’est voulu.',
      image: 'assets/img/ing-cheese.webp',
    },
    {
      num: '04',
      titre: 'Le frais',
      texte: 'Salade croquante, tomate de saison, pickles maison : l’équilibre qui fait tout tenir.',
      image: 'assets/img/ing-fresh.webp',
    },
  ],

  /* ------------------------------------------------------------------------
   * 6ter. À EMPORTER — la tournée de Fréjus (défilé horizontal)
   * ---------------------------------------------------------------------- */
  emporter: [
    {
      lieu: 'Port Fréjus',
      texte: 'Un smash face aux mâts, encore chaud dans sa boîte.',
      image: 'assets/img/emporter-port.webp',
    },
    {
      lieu: 'Les Arènes',
      texte: '2 000 ans d’histoire, et un tacos qui ne demande qu’à être mangé.',
      image: 'assets/img/emporter-arenes.webp',
    },
    {
      lieu: 'La Plage',
      texte: 'Frites maison, sel de mer, doigts collants. Le combo parfait.',
      image: 'assets/img/emporter-plage.webp',
    },
    {
      lieu: 'Vieille Ville',
      texte: 'Commandé en bas de la rue, dévoré trois minutes plus tard.',
      image: 'assets/img/emporter-vieux.webp',
    },
  ],

  /* ------------------------------------------------------------------------
   * 7. LA CARTE  ⚠️  Carte EXEMPLE — À REMPLACER intégralement
   *    tags disponibles : "vegetarien", "epice", "nouveau", "best-seller"
   * ---------------------------------------------------------------------- */
  carteMention: 'Carte indicative — plats et tarifs à confirmer',
  carte: [
    {
      id: 'burgers',
      titre: 'Burgers',
      sousTitre: 'Servis avec frites maison. Pain du boulanger, steak pur bœuf 100 g.',
      items: [
        { nom: 'So Classic', desc: 'Steak 100 g, cheddar, salade, tomate, oignons rouges, sauce maison.', prix: '10,90 €' },
        { nom: 'So Smash', desc: 'Double steak smashé, cheddar, oignons caramélisés, sauce fromagère.', prix: '13,90 €', tags: ['best-seller'] },
        { nom: 'So Bacon', desc: 'Steak 100 g, bacon fumé, cheddar, salade, tomate, sauce barbecue.', prix: '12,90 €' },
        { nom: 'So Chèvre-Miel', desc: 'Steak 100 g, chèvre chaud, miel, salade, oignons rouges.', prix: '12,90 €' },
        { nom: 'Crispy Chicken', desc: 'Poulet pané maison, coleslaw, pickles, sauce avocat-citron.', prix: '12,50 €' },
        { nom: 'So Veggie', desc: 'Galette de légumes, cheddar, avocat, salade, tomate, mayonnaise.', prix: '11,90 €', tags: ['vegetarien'] },
      ],
    },
    {
      id: 'tacos',
      titre: 'Tacos',
      sousTitre: 'Galette grillée, frites maison et sauce fromagère. Sauce au choix offerte.',
      items: [
        { nom: 'Tacos M', desc: '1 viande au choix.', prix: '9,90 €' },
        { nom: 'Tacos L', desc: '2 viandes au choix.', prix: '11,90 €' },
        { nom: 'Tacos XL', desc: '3 viandes au choix.', prix: '13,90 €' },
        { nom: 'Tacos Veggie', desc: 'Galette de légumes, frites, sauce fromagère.', prix: '9,90 €', tags: ['vegetarien'] },
      ],
    },
    {
      id: 'sandwichs',
      titre: 'Sandwichs & Wraps',
      sousTitre: 'Pain frais du boulanger, crudités et sauce au choix.',
      items: [
        { nom: 'Sandwich Kebab', desc: 'Viande de kebab, salade, tomate, oignon.', prix: '8,50 €' },
        { nom: 'Sandwich Tenders', desc: 'Tenders de poulet panés, crudités.', prix: '8,50 €' },
        { nom: 'Sandwich Cordon Bleu', desc: 'Cordon bleu pané, cœur fondant au fromage.', prix: '8,50 €' },
        { nom: 'Wrap Chèvre', desc: 'Chèvre chaud, crudités, sauce au choix.', prix: '9,50 €', tags: ['vegetarien'] },
        { nom: 'Wrap Mozza', desc: 'Sticks mozzarella panés, crudités, sauce au choix.', prix: '9,50 €', tags: ['vegetarien'] },
      ],
    },
    {
      id: 'sides',
      titre: 'Sides',
      sousTitre: 'À partager ou à dévorer seul.',
      items: [
        { nom: 'Frites maison', desc: 'Pommes de terre fraîches, double cuisson.', prix: '3,50 €', tags: ['vegetarien'] },
        { nom: 'Loaded Fries', desc: 'Frites, sauce fromagère, oignons frits.', prix: '6,50 €', tags: ['vegetarien'] },
        { nom: 'Tenders x5', desc: 'Tenders de poulet panés, sauce au choix.', prix: '7,90 €' },
        { nom: 'Mozza Sticks x6', desc: 'Sticks mozzarella panés.', prix: '6,90 €', tags: ['vegetarien'] },
        { nom: 'Onion Rings x8', desc: 'Beignets d’oignons croustillants.', prix: '5,90 €', tags: ['vegetarien'] },
        { nom: 'Salade du Diner', desc: 'Salade verte, tomate, maïs, poulet pané.', prix: '9,90 €' },
      ],
    },
    {
      id: 'boissons',
      titre: 'Boissons & Desserts',
      sousTitre: '',
      items: [
        { nom: 'Soda 33 cl', desc: 'Coca-Cola, Coca Zero, Oasis, Ice Tea, Sprite.', prix: '2,50 €' },
        { nom: 'Eau minérale 50 cl', desc: 'Plate ou gazeuse.', prix: '2,00 €' },
        { nom: 'Milkshake', desc: 'Vanille, chocolat ou fraise.', prix: '5,50 €', tags: ['best-seller'] },
        { nom: 'Cookie maison', desc: 'Chocolat noir, cuit sur place.', prix: '3,00 €', tags: ['vegetarien'] },
        { nom: 'Brownie', desc: 'Chocolat intense, servi tiède.', prix: '3,50 €', tags: ['vegetarien'] },
      ],
    },
  ],

  /* ------------------------------------------------------------------------
   * 8. HORAIRES  — À CONFIRMER
   *    jours : 1 = lundi … 7 = dimanche
   *    Plusieurs créneaux possibles par jour ; "ferme": null => fermé
   * ---------------------------------------------------------------------- */
  horaires: [
    { jours: [1], creneaux: [] },                                   // lundi : fermé
    { jours: [2, 3, 4, 5], creneaux: ['11:30-14:30', '18:00-22:30'] },
    { jours: [6], creneaux: ['11:30-15:00', '18:00-23:00'] },
    { jours: [7], creneaux: ['18:00-22:30'] },
  ],
  horairesNote: 'Horaires indicatifs — à confirmer avec l’établissement.',

  /* ------------------------------------------------------------------------
   * 9. COMMANDE EN LIGNE  — À CONFIRMER (liens réels des plateformes)
   *    Mettre "actif": false pour masquer une plateforme
   * ---------------------------------------------------------------------- */
  commande: {
    telephoneActif: true,
    plateformes: [
      { nom: 'Uber Eats', url: 'https://www.ubereats.com/fr/store/so-good-diner/LbKGd2c4RPWj4sNj1HpKqg', actif: false },
      { nom: 'Deliveroo', url: 'https://deliveroo.fr/fr', actif: false },
    ],
  },

  /* ------------------------------------------------------------------------
   * 10. GALERIE — remplacer par les vraies photos du client
   * ---------------------------------------------------------------------- */
  galerie: [
    { src: 'assets/img/hero-burger.webp', alt: 'Double cheeseburger maison' },
    { src: 'assets/img/interior-diner.webp', alt: 'Salle du restaurant' },
    { src: 'assets/img/dish-tacos.webp', alt: 'Tacos français coupé en deux' },
    { src: 'assets/img/dish-sides.webp', alt: 'Frites maison et tenders de poulet' },
    { src: 'assets/img/dish-chicken.webp', alt: 'Burger au poulet croustillant' },
    { src: 'assets/img/dish-smash.webp', alt: 'Smash burger au cheddar' },
  ],

  /* ------------------------------------------------------------------------
   * 11. AVIS  ⚠️  À REMPLACER par de vrais avis clients (avec leur accord)
   * ---------------------------------------------------------------------- */
  avis: [
    {
      auteur: 'Client·e Google',
      note: 5,
      texte: 'Avis d’exemple à remplacer. Le meilleur burger du centre-ville, pain moelleux et viande vraiment fraîche.',
      date: 'août 2026',
    },
    {
      auteur: 'Client·e Google',
      note: 5,
      texte: 'Avis d’exemple à remplacer. Portions énormes, équipe adorable, on y retourne chaque semaine.',
      date: 'août 2026',
    },
    {
      auteur: 'Client·e Instagram',
      note: 5,
      texte: 'Avis d’exemple à remplacer. Les sauces maison changent tout. Rapport qualité-prix imbattable.',
      date: 'juillet 2026',
    },
  ],

  /* ------------------------------------------------------------------------
   * 12. FORMULAIRE DE CONTACT
   *    mode: "mailto"    -> ouvre le logiciel de mail du visiteur (zéro back-end)
   *    mode: "endpoint"  -> envoie en POST vers l'URL indiquée (Formspree, Netlify Forms…)
   * ---------------------------------------------------------------------- */
  contact: {
    mode: 'mailto',
    endpoint: 'https://formspree.io/f/VOTRE_ID',
    messageSucces: 'Merci ! Votre message a bien été envoyé, on vous répond très vite.',
  },
};
