/**
 * ============================================================================
 *  SO GOOD DINER — FICHIER DE CONTENU  (bilingue FR / EN)
 * ============================================================================
 *  Tout le contenu du site vit ici. Pour mettre à jour le site, il suffit
 *  d'éditer ce fichier : aucun code HTML à toucher.
 *
 *  CONVENTION
 *    Une chaîne traduisible s'écrit  { fr: '…', en: '…' }
 *    Une valeur identique dans les deux langues reste une chaîne simple.
 *    Les prix sont des NOMBRES : ils sont formatés automatiquement
 *    (« 13,90 € » en français, « €13.90 » en anglais) selon la langue active.
 *
 *  SOURCES
 *    ✅ VÉRIFIÉ  = repris de la fiche Uber Eats officielle de l'établissement
 *                  (65 rue du Général de Gaulle, 83600 Fréjus) et du post
 *                  Facebook annonçant le déménagement.
 *    ⚠️  À CONFIRMER = hypothèse à faire valider par le client.
 * ============================================================================
 */
window.SO_GOOD = {
  /* ------------------------------------------------------------------------
   * 0. MODE BROUILLON
   * true  -> affiche un avertissement sur la carte
   * false -> une fois le contenu validé par le client
   * ---------------------------------------------------------------------- */
  brouillon: true,

  langues: ['fr', 'en'],
  langueDefaut: 'fr', // 'auto' = suit la langue du navigateur

  /* ------------------------------------------------------------------------
   * 1. SEO
   * ---------------------------------------------------------------------- */
  seo: {
    titre: {
      fr: 'So Good Diner — Burgers & Kumpirs à Fréjus',
      en: 'So Good Diner — Burgers & Kumpirs in Fréjus',
    },
    description: {
      fr: 'So Good Diner, 65 rue du Général de Gaulle à Fréjus : burgers généreux, kumpirs garnis, wraps et sandwichs. Sur place, à emporter et en livraison.',
      en: 'So Good Diner, 65 rue du Général de Gaulle in Fréjus: generous burgers, loaded kumpirs, wraps and sandwiches. Dine in, takeaway and delivery.',
    },
  },

  /* ------------------------------------------------------------------------
   * 2. HERO
   * ---------------------------------------------------------------------- */
  hero: {
    ligne1: 'So Good',
    ligne2: 'Diner',
    motsRotatifs: {
      fr: ['généreux', 'fait maison', 'smashé', 'garni'],
      en: ['generous', 'homemade', 'smashed', 'loaded'],
    },
    texte: {
      fr: "Des burgers à deux, trois steaks, des kumpirs qui débordent d'aligot et des sauces maison. Le tout en plein centre-ville de Fréjus, de 18 h à 1 h du matin.",
      en: 'Two- and three-patty burgers, kumpirs overflowing with aligot, and homemade sauces. All in the heart of Fréjus, from 6 pm to 1 am.',
    },
  },

  etablissement: {
    nom: 'So Good Diner',
    baseline: {
      fr: 'Le goût américain, au cœur de Fréjus.',
      en: 'American flavour, in the heart of Fréjus.',
    },
  },

  /* ------------------------------------------------------------------------
   * 3. COORDONNÉES  ✅ adresse vérifiée — ⚠️  téléphone et e-mail à confirmer
   * ---------------------------------------------------------------------- */
  coordonnees: {
    adresse: '65 rue du Général de Gaulle',   // ✅ Uber Eats
    complement: { fr: 'Centre-ville', en: 'City centre' },
    codePostal: '83600',
    ville: { fr: 'Fréjus', en: 'Fréjus' },
    telephone: '04 00 00 00 00',              // ⚠️  À CONFIRMER
    telephoneLien: '+33400000000',            // ⚠️  À CONFIRMER
    email: 'contact@sogooddiner.fr',          // ⚠️  À CONFIRMER
    instagram: 'https://www.instagram.com/sogooddiner83/',
    facebook: 'https://www.facebook.com/61587045554269/',
    geo: { lat: 43.43244, lon: 6.73416 },     // ✅ géocodé (rue) — affiner au n° 65
  },

  /* ------------------------------------------------------------------------
   * 4. ANNONCE « NOUVELLE ADRESSE »  ✅ issue du post Facebook
   * ---------------------------------------------------------------------- */
  annonce: {
    actif: true,
    texte: {
      fr: "So Good Diner a déménagé et vous accueille désormais au 65 rue du Général de Gaulle, en plein centre-ville de Fréjus. Toujours la même équipe, toujours les mêmes portions.",
      en: 'So Good Diner has moved and now welcomes you at 65 rue du Général de Gaulle, right in the centre of Fréjus. Same team, same generous portions.',
    },
    lien: '',
  },

  ticker: {
    fr: [
      'Nouvelle adresse — centre-ville de Fréjus',
      'Burgers jusqu’à 3 steaks',
      'Kumpirs maison',
      'Sauces maison',
      'Sur place & à emporter',
      'Service 18 h – 1 h',
    ],
    en: [
      'New address — Fréjus city centre',
      'Burgers up to 3 patties',
      'Homemade kumpirs',
      'Homemade sauces',
      'Dine in & takeaway',
      'Open 6 pm – 1 am',
    ],
  },

  /* ------------------------------------------------------------------------
   * 5. CHIFFRES CLÉS  (toutes les valeurs sont vérifiables)
   * ---------------------------------------------------------------------- */
  chiffres: [
    { valeur: '12', libelle: { fr: 'Burgers à la carte', en: 'Burgers on the menu' } },
    { valeur: '8', libelle: { fr: 'Kumpirs garnis', en: 'Loaded kumpirs' } },
    { valeur: '18h–1h', libelle: { fr: 'Service du soir', en: 'Evening service' } },
    { valeur: '280 g', libelle: { fr: 'Le plus gros steak', en: 'Biggest single patty' } },
  ],

  /* ------------------------------------------------------------------------
   * 6. SAVOIR-FAIRE  ⚠️  textes éditoriaux à faire valider par le client
   * ---------------------------------------------------------------------- */
  valeurs: [
    {
      icone: 'sauce',
      titre: { fr: 'Sauces maison', en: 'Homemade sauces' },
      texte: {
        fr: 'Poivre, moutarde-miel, curry, masala, fish : préparées en cuisine, pas en bidon.',
        en: 'Pepper, honey-mustard, curry, masala, fish: made in the kitchen, not out of a drum.',
      },
    },
    {
      icone: 'pomme',
      titre: { fr: 'Kumpirs au four', en: 'Oven-baked kumpirs' },
      texte: {
        fr: 'Pomme de terre cuite au four, beurre et aligot à la mozzarella. La spécialité de la maison.',
        en: 'Oven-baked potato, butter and mozzarella aligot. The house speciality.',
      },
    },
    {
      icone: 'viande',
      titre: { fr: 'Portions sérieuses', en: 'Serious portions' },
      texte: {
        fr: 'Jusqu’à trois steaks de 80 g dans un seul burger, et un steak de 280 g pour le Hulk.',
        en: 'Up to three 80 g patties in a single burger — and a 280 g steak for the Hulk.',
      },
    },
    {
      icone: 'veggie',
      titre: { fr: 'Sans viande aussi', en: 'Meat-free too' },
      texte: {
        fr: 'Veggie Burger au steak de soja et halloumi, kumpir végétarien : personne ne reste sur la touche.',
        en: 'Soy-patty Veggie Burger with halloumi, vegetarian kumpir: nobody gets left out.',
      },
    },
  ],

  /* ------------------------------------------------------------------------
   * 7. SIGNATURES  ✅ plats et prix réels (Uber Eats)
   * ---------------------------------------------------------------------- */
  signatures: [
    {
      nom: 'Kumpir Kebab',
      description: {
        fr: 'Pomme de terre au four, beurre, aligot à la mozzarella, kebab, champignons frais, oignons caramélisés.',
        en: 'Baked potato, butter, mozzarella aligot, kebab, fresh mushrooms, caramelised onions.',
      },
      prix: 13.9,
      image: 'assets/img/kumpir.webp',
      badge: { fr: 'Nº 1 des commandes', en: 'No. 1 best seller' },
    },
    {
      nom: 'So Good Bacon Burger',
      description: {
        fr: 'Trois steaks de 80 g, bacon grillé, trois tranches de cheddar, oignons caramélisés, sauce maison.',
        en: 'Three 80 g patties, grilled bacon, three slices of cheddar, caramelised onions, house sauce.',
      },
      prix: 19.5,
      image: 'assets/img/dish-smash.webp',
      badge: { fr: 'Le costaud', en: 'The heavyweight' },
    },
    {
      nom: 'Le Frenchie Burger',
      description: {
        fr: 'Steak de 180 g, œuf, raclette, bacon, salade, tomate, oignons rouges, sauce poivre ou moutarde-miel.',
        en: '180 g patty, egg, raclette cheese, bacon, lettuce, tomato, red onions, pepper or honey-mustard sauce.',
      },
      prix: 18.5,
      image: 'assets/img/hero-burger.webp',
      badge: { fr: 'Populaire', en: 'Popular' },
    },
  ],

  /* ------------------------------------------------------------------------
   * 8. « CHAQUE COUCHE COMPTE »
   * ---------------------------------------------------------------------- */
  couches: [
    {
      num: '01',
      titre: { fr: 'Le pain', en: 'The bun' },
      texte: {
        fr: 'Bun brioché toasté à la commande : assez solide pour tenir trois steaks, assez moelleux pour ne pas s’effondrer.',
        en: 'Brioche bun toasted to order: sturdy enough for three patties, soft enough not to fall apart.',
      },
      image: 'assets/img/ing-bun.webp',
    },
    {
      num: '02',
      titre: { fr: 'Le steak', en: 'The patty' },
      texte: {
        fr: 'De 80 g à 280 g, smashé sur la plancha pour cette croûte caramélisée qui retient le jus.',
        en: 'From 80 g to 280 g, smashed on the flat top for that caramelised crust that locks in the juices.',
      },
      image: 'assets/img/ing-patty.webp',
    },
    {
      num: '03',
      titre: { fr: 'Le fromage', en: 'The cheese' },
      texte: {
        fr: 'Cheddar, emmental, raclette ou roquefort selon le burger. Posé à la seconde où la viande sort du feu.',
        en: 'Cheddar, emmental, raclette or roquefort depending on the burger. Added the second the meat leaves the heat.',
      },
      image: 'assets/img/ing-cheese.webp',
    },
    {
      num: '04',
      titre: { fr: 'La sauce', en: 'The sauce' },
      texte: {
        fr: 'Poivre, moutarde-miel, curry, masala ou fish. Faites maison, choisies par vous.',
        en: 'Pepper, honey-mustard, curry, masala or fish. Made in-house, chosen by you.',
      },
      image: 'assets/img/ing-fresh.webp',
    },
  ],

  /* ------------------------------------------------------------------------
   * 9. À EMPORTER — la tournée de Fréjus
   * ---------------------------------------------------------------------- */
  emporter: [
    {
      lieu: { fr: 'Port Fréjus', en: 'Port Fréjus' },
      texte: {
        fr: 'Un burger face aux mâts, encore chaud dans sa boîte.',
        en: 'A burger facing the masts, still hot in its box.',
      },
      image: 'assets/img/emporter-port.webp',
    },
    {
      lieu: { fr: 'Les Arènes', en: 'The Arena' },
      texte: {
        fr: '2 000 ans d’histoire, et un kumpir qui ne demande qu’à être mangé.',
        en: '2,000 years of history, and a kumpir just waiting to be eaten.',
      },
      image: 'assets/img/emporter-arenes.webp',
    },
    {
      lieu: { fr: 'La Plage', en: 'The Beach' },
      texte: {
        fr: 'Frites, sel de mer, doigts collants. Le combo parfait.',
        en: 'Fries, sea salt, sticky fingers. The perfect combo.',
      },
      image: 'assets/img/emporter-plage.webp',
    },
    {
      lieu: { fr: 'Vieille Ville', en: 'Old Town' },
      texte: {
        fr: 'Commandé en bas de la rue, dévoré trois minutes plus tard.',
        en: 'Ordered at the bottom of the street, devoured three minutes later.',
      },
      image: 'assets/img/emporter-vieux.webp',
    },
  ],

  /* ------------------------------------------------------------------------
   * 10. LA CARTE  ✅ plats et prix réels relevés sur la fiche Uber Eats
   *     ⚠️  Les rubriques Wraps / Sandwichs / Box / Sides / Menu Enfants /
   *        Menu Étudiant / Boissons / Desserts existent mais leurs prix
   *        n'étaient pas affichés : à compléter.
   * ---------------------------------------------------------------------- */
  carteMention: {
    fr: 'Prix relevés sur la carte de livraison — susceptibles d’évoluer. Carte complète sur place.',
    en: 'Prices taken from the delivery menu and subject to change. Full menu available in store.',
  },
  carte: [
    {
      id: 'burgers',
      titre: { fr: 'Burgers', en: 'Burgers' },
      sousTitre: {
        fr: 'Steaks smashés sur la plancha, fromage fondu, sauce au choix.',
        en: 'Patties smashed on the flat top, melted cheese, sauce of your choice.',
      },
      items: [
        { nom: 'Cheese Burger', desc: { fr: 'Steak, cheddar, cornichons, ketchup, mayonnaise.', en: 'Beef patty, cheddar, pickles, ketchup, mayonnaise.' }, prix: 7.5, tags: ['best-seller'] },
        { nom: 'Double Cheese Burger', desc: { fr: '2 steaks, 2 cheddar, cornichons, ketchup, mayonnaise.', en: '2 patties, 2 cheddar, pickles, ketchup, mayonnaise.' }, prix: 11.5 },
        { nom: 'So Good Fish Burger', desc: { fr: 'Colin pané, cheddar, salade, sauce fish.', en: 'Breaded pollock, cheddar, lettuce, fish sauce.' }, prix: 12.5 },
        { nom: 'So Good Chicken Burger', desc: { fr: 'Poulet pané, salade, tomate, oignons rouges, sauce au choix.', en: 'Breaded chicken, lettuce, tomato, red onions, sauce of your choice.' }, prix: 13 },
        { nom: 'So Good Chicken Beef Burger', desc: { fr: 'Poulet pané, steak 80 g, cheddar, emmental, salade, tomate, oignons rouges.', en: 'Breaded chicken, 80 g patty, cheddar, emmental, lettuce, tomato, red onions.' }, prix: 17.9 },
        { nom: 'Le Raphaëlois Burger', desc: { fr: 'Steak 100 g, roquette, tomates séchées, chèvre, miel, oignons confits.', en: '100 g patty, rocket, sun-dried tomatoes, goat cheese, honey, confit onions.' }, prix: 17.5 },
        { nom: 'Le Frenchie Burger', desc: { fr: 'Steak 180 g, œuf, raclette, bacon, salade, tomate, sauce poivre ou moutarde-miel.', en: '180 g patty, egg, raclette, bacon, lettuce, tomato, pepper or honey-mustard sauce.' }, prix: 18.5, tags: ['best-seller'] },
        { nom: 'Le Veggie Burger', desc: { fr: 'Steak de soja, halloumi, roquette, tomates séchées, mayo à la truffe blanche.', en: 'Soy patty, halloumi, rocket, sun-dried tomatoes, white truffle mayo.' }, prix: 18.7, tags: ['vegetarien'] },
        { nom: 'So Good 150 Burger', desc: { fr: 'Steak 150 g façon bouchère, 2 cheddar, salade, tomate, oignons rouges, cornichons.', en: '150 g butcher-cut patty, 2 cheddar, lettuce, tomato, red onions, pickles.' }, prix: 18.9 },
        { nom: 'So Good Bacon Burger', desc: { fr: '3 steaks 80 g, bacon grillé, 3 cheddar, oignons caramélisés, sauce maison.', en: 'Three 80 g patties, grilled bacon, 3 cheddar, caramelised onions, house sauce.' }, prix: 19.5 },
        { nom: 'Le Master Burger', desc: { fr: 'Steaks 100 g, double cheddar, double raclette, rösti, oignons caramélisés.', en: '100 g patties, double cheddar, double raclette, rösti, caramelised onions.' }, prix: 21.9 },
        { nom: 'Le Hulk Burger', desc: { fr: 'Steak 280 g, salade, tomate, oignons caramélisés, sauce maison.', en: '280 g patty, lettuce, tomato, caramelised onions, house sauce.' }, prix: 21.9 },
      ],
    },
    {
      id: 'kumpirs',
      titre: { fr: 'Kumpirs', en: 'Kumpirs' },
      sousTitre: {
        fr: 'Pomme de terre cuite au four, beurre et aligot à la mozzarella, garniture généreuse.',
        en: 'Oven-baked potato, butter and mozzarella aligot, generously topped.',
      },
      items: [
        { nom: 'Kumpir Végétarien', desc: { fr: 'Aligot à la mozzarella et légumes variés.', en: 'Mozzarella aligot and mixed vegetables.' }, prix: 13, tags: ['vegetarien'] },
        { nom: 'Kumpir Kebab', desc: { fr: 'Kebab, champignons frais émincés, oignons caramélisés, sauce au choix.', en: 'Kebab, sliced fresh mushrooms, caramelised onions, sauce of your choice.' }, prix: 13.9, tags: ['best-seller'] },
        { nom: 'Kumpir Curry', desc: { fr: 'Poulet, sauce curry et oignons.', en: 'Chicken, curry sauce and onions.' }, prix: 14.3 },
        { nom: 'Kumpir Poulet Masala', desc: { fr: 'Poulet et sauce masala.', en: 'Chicken and masala sauce.' }, prix: 15.5 },
        { nom: 'Kumpir Savoyard', desc: { fr: 'Lardons, fromage à raclette, champignons émincés, oignons caramélisés.', en: 'Bacon lardons, raclette cheese, sliced mushrooms, caramelised onions.' }, prix: 17.6 },
        { nom: 'Kumpir Philly Cheese Steak', desc: { fr: 'Steak et fromage, façon Philly.', en: 'Steak and cheese, Philly style.' }, prix: 17.6, tags: ['best-seller'] },
        { nom: 'Kumpir Roquefort', desc: { fr: 'Roquefort, bavette, échalote et champignons.', en: 'Roquefort, flank steak, shallot and mushrooms.' }, prix: 18.1 },
        { nom: 'Kumpir Cannibal', desc: { fr: 'Steak haché, saucisse, oignons, sauce au choix.', en: 'Minced steak, sausage, onions, sauce of your choice.' }, prix: 18.7 },
      ],
    },
  ],
  carteAutresRubriques: {
    fr: ['Wraps', 'Sandwichs', 'Box', 'Sides', 'Menu Enfants', 'Menu Étudiant', 'Boissons', 'Desserts'],
    en: ['Wraps', 'Sandwiches', 'Box', 'Sides', 'Kids Menu', 'Student Menu', 'Drinks', 'Desserts'],
  },
  carteAutresTitre: {
    fr: 'Et aussi, à retrouver sur place',
    en: 'Also available in store',
  },

  /* ------------------------------------------------------------------------
   * 11. LES PRÉFÉRÉS  ✅ classement réel des commandes (Uber Eats)
   *      Remplace un bloc « avis clients » : aucun avis réel n'était disponible.
   *      NB : le titre de la section vit dans i18n.js (favoris.titre1/2).
   * ---------------------------------------------------------------------- */
  favoris: [
    {
      rang: 'Nº 1',
      nom: 'Kumpir Kebab',
      prix: 13.9,
      texte: {
        fr: 'La pomme de terre au four garnie de kebab, aligot et oignons caramélisés.',
        en: 'The baked potato loaded with kebab, aligot and caramelised onions.',
      },
    },
    {
      rang: 'Nº 2',
      nom: 'So Good Bacon Burger',
      prix: 19.5,
      texte: {
        fr: 'Trois steaks, bacon grillé et trois tranches de cheddar. Oui, trois.',
        en: 'Three patties, grilled bacon and three slices of cheddar. Yes, three.',
      },
    },
    {
      rang: 'Nº 3',
      nom: 'Kumpir Cannibal',
      prix: 18.7,
      texte: {
        fr: 'Steak haché, saucisse, oignons. Le kumpir qui ne plaisante pas.',
        en: 'Minced steak, sausage, onions. The kumpir that means business.',
      },
    },
    {
      rang: { fr: 'Populaire', en: 'Popular' },
      nom: 'Cheese Burger',
      prix: 7.5,
      texte: {
        fr: 'Le classique à 7,50 € : steak, cheddar, cornichons, ketchup, mayo.',
        en: 'The €7.50 classic: patty, cheddar, pickles, ketchup, mayo.',
      },
    },
    {
      rang: { fr: 'Populaire', en: 'Popular' },
      nom: 'Le Frenchie Burger',
      prix: 18.5,
      texte: {
        fr: '180 g de bœuf, œuf, raclette et bacon. Très français, très copieux.',
        en: '180 g of beef, egg, raclette and bacon. Very French, very filling.',
      },
    },
    {
      rang: { fr: 'Populaire', en: 'Popular' },
      nom: 'Kumpir Philly Cheese Steak',
      prix: 17.6,
      texte: {
        fr: 'Steak et fromage fondant, dans la pomme de terre au four.',
        en: 'Steak and melting cheese, in the baked potato.',
      },
    },
  ],

  /* ------------------------------------------------------------------------
   * 12. HORAIRES  ⚠️  service du soir 18 h – 1 h vérifié,
   *      les jours d'ouverture sont À CONFIRMER (7j/7 supposé)
   *      jours : 1 = lundi … 7 = dimanche
   * ---------------------------------------------------------------------- */
  horaires: [
    { jours: [1, 2, 3, 4, 5, 6, 7], creneaux: ['18:00-01:00'] },
  ],
  horairesNote: {
    fr: 'Service du soir uniquement. Jours d’ouverture à confirmer avec l’établissement.',
    en: 'Evening service only. Opening days to be confirmed with the restaurant.',
  },

  /* ------------------------------------------------------------------------
   * 13. COMMANDE EN LIGNE  ✅ lien Uber Eats fourni par le client
   * ---------------------------------------------------------------------- */
  commande: {
    telephoneActif: true,
    plateformes: [
      {
        nom: 'Uber Eats',
        url: 'https://www.ubereats.com/fr/store/so-good/AEpML5H6UrK-38zkW4WElw',
        actif: true,
      },
    ],
  },

  /* ------------------------------------------------------------------------
   * 14. GALERIE  ⚠️  visuels d'illustration — à remplacer par les photos du client
   * ---------------------------------------------------------------------- */
  galerie: [
    { src: 'assets/img/hero-burger.webp', alt: { fr: 'Burger maison So Good Diner', en: 'So Good Diner house burger' } },
    { src: 'assets/img/interior-diner.webp', alt: { fr: 'Salle du restaurant', en: 'The dining room' } },
    { src: 'assets/img/kumpir.webp', alt: { fr: 'Kumpir garni', en: 'Loaded kumpir' } },
    { src: 'assets/img/dish-sides.webp', alt: { fr: 'Frites et accompagnements', en: 'Fries and sides' } },
    { src: 'assets/img/dish-chicken.webp', alt: { fr: 'Burger au poulet croustillant', en: 'Crispy chicken burger' } },
    { src: 'assets/img/dish-smash.webp', alt: { fr: 'Smash burger au cheddar', en: 'Cheddar smash burger' } },
  ],

  /* ------------------------------------------------------------------------
   * 15. FORMULAIRE DE CONTACT
   *      mode: "mailto"   -> ouvre le logiciel de mail du visiteur (zéro back-end)
   *      mode: "endpoint" -> POST vers l'URL indiquée (Formspree, Netlify Forms…)
   * ---------------------------------------------------------------------- */
  contact: {
    mode: 'mailto',
    endpoint: 'https://formspree.io/f/VOTRE_ID',
    messageSucces: {
      fr: 'Votre logiciel de messagerie va s’ouvrir avec le message pré-rempli.',
      en: 'Your mail app will open with the message pre-filled.',
    },
  },
};
