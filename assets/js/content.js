/**
 * ============================================================================
 *  SO GOOD DINER — FICHIER DE CONTENU  (bilingue FR / EN)
 * ============================================================================
 *  Tout le contenu du site vit ici. Aucun code HTML à toucher.
 *
 *  CONVENTION
 *    Chaîne traduisible : { fr: '…', en: '…' }
 *    Prix = NOMBRES, formatés par Intl.NumberFormat selon la langue.
 *    Un article peut avoir deux prix : prix (seul) et prixMenu (menu).
 *
 *  SOURCES
 *    ✅ Carte officielle de l'établissement (photos de la carte, sept. 2026) :
 *       sections Kumpir, Burgers & Wraps, Sandwichs & Paninis, Boxs, Snacking,
 *       Menus, Desserts, Boissons — prix « seul / menu ».
 *    ✅ Fiche Google : adresse, téléphone, note 4,9/5 (149 avis), horaires.
 *    ⚠️  À CONFIRMER : e-mail, photos réelles, mentions légales, domaine.
 * ============================================================================
 */
window.SO_GOOD = {
  brouillon: false, // la carte ci-dessous est la carte officielle

  langues: ['fr', 'en'],
  langueDefaut: 'fr',

  /* SEO */
  seo: {
    titre: { fr: 'So Good Diner — Burgers & Kumpirs à Fréjus', en: 'So Good Diner — Burgers & Kumpirs in Fréjus' },
    description: {
      fr: 'So Good Diner, 65 rue du Général de Gaulle à Fréjus : kumpirs garnis, burgers, wraps, boxs et snacking. Carte officielle, sur place, à emporter et en livraison.',
      en: 'So Good Diner, 65 rue du Général de Gaulle in Fréjus: loaded kumpirs, burgers, wraps, boxes and snacks. Official menu — dine in, takeaway and delivery.',
    },
  },

  hero: {
    ligne1: 'So Good',
    ligne2: 'Diner',
    motsRotatifs: { fr: ['généreux', 'fait maison', 'garni', 'partagé'], en: ['generous', 'homemade', 'loaded', 'shared'] },
    texte: {
      fr: "Double cheese, kumpirs qui débordent d'aligot, boxs à partager et sauces au choix. Au centre-ville de Fréjus, midi et soir, jusqu'à 2 h du matin le week-end.",
      en: 'Double cheese, kumpirs overflowing with aligot, boxes to share and sauces of your choice. In the centre of Fréjus, lunch and dinner, until 2 am at the weekend.',
    },
  },

  etablissement: {
    nom: 'So Good Diner',
    baseline: { fr: 'Le goût américain, au cœur de Fréjus.', en: 'American flavour, in the heart of Fréjus.' },
  },

  coordonnees: {
    adresse: '65 rue du Général de Gaulle',
    complement: { fr: 'Centre-ville', en: 'City centre' },
    codePostal: '83600',
    ville: { fr: 'Fréjus', en: 'Fréjus' },
    telephone: '09 52 17 24 26',
    telephoneLien: '+33952172426',
    email: 'contact@sogooddiner.fr', // ⚠️ À CONFIRMER
    instagram: 'https://www.instagram.com/sogooddiner83/',
    facebook: 'https://www.facebook.com/61587045554269/',
    geo: { lat: 43.43244, lon: 6.73416 },
  },

  annonce: {
    actif: true,
    texte: {
      fr: "So Good Diner vous accueille au 65 rue du Général de Gaulle, en plein centre-ville de Fréjus. Pain artisanal du boulanger, viande fraîche du boucher.",
      en: 'So Good Diner welcomes you at 65 rue du Général de Gaulle, right in the centre of Fréjus. Artisan baker’s bread, fresh butcher’s meat.',
    },
    lien: '',
  },

  ticker: {
    fr: ['Nouvelle adresse — centre-ville de Fréjus', 'Kumpirs maison', 'Pain du boulanger', 'Viande fraîche du boucher', 'Boxs à partager', 'Midi & soir, jusqu’à 2 h le week-end'],
    en: ['New address — Fréjus city centre', 'Homemade kumpirs', 'Baker’s bread', 'Fresh butcher’s meat', 'Boxes to share', 'Lunch & dinner, until 2 am at weekends'],
  },

  chiffres: [
    { valeur: '10', libelle: { fr: 'Kumpirs garnis', en: 'Loaded kumpirs' } },
    { valeur: '12', libelle: { fr: 'Burgers maison', en: 'House burgers' } },
    { valeur: '4,9/5', libelle: { fr: '149 avis Google', en: '149 Google reviews' } },
    { valeur: '5', libelle: { fr: 'Boxs à partager', en: 'Boxes to share' } },
  ],

  valeurs: [
    { icone: 'sauce', titre: { fr: 'Sauces au choix', en: 'Sauce of your choice' },
      texte: { fr: 'Chaque kumpir et chaque burger s’accompagne de votre sauce au choix.', en: 'Every kumpir and every burger comes with the sauce of your choice.' } },
    { icone: 'pomme', titre: { fr: 'Kumpirs au four', en: 'Oven-baked kumpirs' },
      texte: { fr: 'Pomme de terre au four, beurre et aligot à la mozzarella. La spécialité de la maison.', en: 'Baked potato, butter and mozzarella aligot. The house speciality.' } },
    { icone: 'pain', titre: { fr: 'Pain du boulanger', en: 'Baker’s bread' },
      texte: { fr: 'Pain artisanal du boulanger et viande fraîche du boucher, comme annoncé sur la carte.', en: 'Artisan baker’s bread and fresh butcher’s meat, just as the menu promises.' } },
    { icone: 'veggie', titre: { fr: 'Sans viande aussi', en: 'Meat-free too' },
      texte: { fr: 'Kumpir végétarien, Le Veggie, options véganes et menu enfants.', en: 'Vegetarian kumpir, Le Veggie, vegan options and a kids’ menu.' } },
  ],

  signatures: [
    { nom: 'Kumpir Kebab',
      description: { fr: 'Pomme de terre au four, beurre, aligot à la mozzarella, kebab, champignons frais, oignons caramélisés.', en: 'Baked potato, butter, mozzarella aligot, kebab, fresh mushrooms, caramelised onions.' },
      prix: 10.5, prixMenu: 12, image: 'assets/img/kumpir.webp',
      badge: { fr: 'Nº 1 des commandes', en: 'No. 1 best seller' } },
    { nom: 'Le Frenchie',
      description: { fr: 'Steak 100 g, œuf, salade, tomate, raclette, bacon de bœuf, poivrons.', en: '100 g patty, egg, lettuce, tomato, raclette, beef bacon, peppers.' },
      prix: 13, prixMenu: 16, image: 'assets/img/hero-burger.webp',
      badge: { fr: 'Le préféré', en: 'The favourite' } },
    { nom: 'Box Famille',
      description: { fr: '2 So Good Chicken, 2 Double Cheese, 2 Cheeseburgers, frites, oignons crispy, bouteille 1,5 L.', en: '2 So Good Chicken, 2 Double Cheese, 2 Cheeseburgers, fries, crispy onions, 1.5 L bottle.' },
      prix: 39.9, image: 'assets/img/dish-sides.webp',
      badge: { fr: 'À partager', en: 'To share' } },
  ],

  couches: [
    { num: '01', titre: { fr: 'Le pain', en: 'The bun' }, texte: { fr: 'Pain artisanal du boulanger, toasté à la commande.', en: 'Artisan baker’s bread, toasted to order.' }, image: 'assets/img/ing-bun.webp' },
    { num: '02', titre: { fr: 'La viande', en: 'The meat' }, texte: { fr: 'Viande fraîche du boucher, steak de 80 à 150 g ou poulet pané.', en: 'Fresh butcher’s meat, 80–150 g patty or breaded chicken.' }, image: 'assets/img/ing-patty.webp' },
    { num: '03', titre: { fr: 'Le fromage', en: 'The cheese' }, texte: { fr: 'Cheddar, raclette, roquefort ou aligot à la mozzarella selon la recette.', en: 'Cheddar, raclette, roquefort or mozzarella aligot, depending on the recipe.' }, image: 'assets/img/ing-cheese.webp' },
    { num: '04', titre: { fr: 'La sauce', en: 'The sauce' }, texte: { fr: 'Sauce au choix, et 4 toppings offerts sur les kumpirs.', en: 'Sauce of your choice, plus 4 free toppings on kumpirs.' }, image: 'assets/img/ing-fresh.webp' },
  ],

  emporter: [
    { lieu: { fr: 'Port Fréjus', en: 'Port Fréjus' }, texte: { fr: 'Un burger face aux mâts, encore chaud dans sa boîte.', en: 'A burger facing the masts, still hot in its box.' }, image: 'assets/img/emporter-port.webp' },
    { lieu: { fr: 'Les Arènes', en: 'The Arena' }, texte: { fr: '2 000 ans d’histoire, et un kumpir qui ne demande qu’à être mangé.', en: '2,000 years of history, and a kumpir just waiting to be eaten.' }, image: 'assets/img/emporter-arenes.webp' },
    { lieu: { fr: 'La Plage', en: 'The Beach' }, texte: { fr: 'Frites, sel de mer, doigts collants. Le combo parfait.', en: 'Fries, sea salt, sticky fingers. The perfect combo.' }, image: 'assets/img/emporter-plage.webp' },
    { lieu: { fr: 'Vieille Ville', en: 'Old Town' }, texte: { fr: 'Commandé en bas de la rue, dévoré trois minutes plus tard.', en: 'Ordered at the bottom of the street, devoured three minutes later.' }, image: 'assets/img/emporter-vieux.webp' },
  ],

  /* =========================================================================
   * LA CARTE OFFICIELLE — prix relevés sur la carte de l'établissement
   * prix = seul · prixMenu = menu (frites + boisson) le cas échéant
   * ======================================================================= */
  carteMention: {
    fr: 'Carte de l’établissement — tout supplément 1,00 € : rösti, œuf, bacon de bœuf, cheddar, poivrons.',
    en: 'House menu — any extra 1.00 €: rösti, egg, beef bacon, cheddar, peppers.',
  },
  carte: [
    {
      id: 'kumpir', titre: { fr: 'Kumpir', en: 'Kumpir' },
      sousTitre: { fr: '4 toppings au choix offerts : maïs, olives, poivrons, chou rouge, jalapeños, thon, macédoine.', en: '4 free toppings of your choice: corn, olives, peppers, red cabbage, jalapeños, tuna, macédoine.' },
      items: [
        { nom: 'Kumpir Kebab', prix: 10.5, prixMenu: 12, desc: { fr: 'Kebab, champignons frais émincés, oignons caramélisés, sauce au choix.', en: 'Kebab, sliced fresh mushrooms, caramelised onions, sauce of your choice.' }, tags: ['best-seller'] },
        { nom: 'Kumpir Curry', prix: 11, prixMenu: 12.5, desc: { fr: 'Poulet, sauce curry, oignons.', en: 'Chicken, curry sauce, onions.' } },
        { nom: 'Kumpir Poulet Tandoori', prix: 11.9, prixMenu: 13.4, desc: { fr: 'Poulet tandoori, oignons.', en: 'Tandoori chicken, onions.' } },
        { nom: 'Kumpir Barbecue', prix: 11.4, prixMenu: 12.9, desc: { fr: 'Poulet, sauce barbecue, oignons.', en: 'Chicken, barbecue sauce, onions.' } },
        { nom: 'Kumpir Roquefort', prix: 13.9, prixMenu: 15.4, desc: { fr: 'Roquefort, bavette, échalote, champignons.', en: 'Roquefort, flank steak, shallot, mushrooms.' } },
        { nom: 'Philly Cheese Steak', prix: 13.5, prixMenu: 15, desc: { fr: 'Provolone, poivrons, champignons.', en: 'Provolone, peppers, mushrooms.' } },
        { nom: 'Kumpir Cannibal', prix: 14, prixMenu: 16, desc: { fr: 'Steak haché, saucisse, oignons, sauce au choix.', en: 'Minced steak, sausage, onions, sauce of your choice.' } },
        { nom: 'Kumpir Savoyard', prix: 13.5, prixMenu: 15, desc: { fr: 'Lardons de bœuf, raclette, émincé de champignons, oignons caramélisés.', en: 'Beef lardons, raclette, sliced mushrooms, caramelised onions.' } },
        { nom: 'Kumpir Végétarien', prix: 10, prixMenu: 11.5, desc: { fr: 'Légumes du jour.', en: 'Vegetables of the day.' }, tags: ['vegetarien'] },
        { nom: 'Kumpir Chèvre Miel', prix: 11, prixMenu: 12.5, desc: { fr: 'Chèvre, miel.', en: 'Goat cheese, honey.' } },
      ],
    },
    {
      id: 'burgers', titre: { fr: 'Burgers', en: 'Burgers' },
      sousTitre: { fr: 'Menu : frites + boisson.', en: 'Menu: fries + drink.' },
      items: [
        { nom: 'Cheeseburger', prix: 4.5, desc: { fr: 'Steak, cheddar, cornichons, ketchup, mayonnaise.', en: 'Patty, cheddar, pickles, ketchup, mayonnaise.' } },
        { nom: 'Double Cheese', prix: 7.5, prixMenu: 10.5, desc: { fr: '2 steaks, 2 cheddar, cornichons, ketchup, mayonnaise.', en: '2 patties, 2 cheddar, pickles, ketchup, mayonnaise.' }, tags: ['best-seller'] },
        { nom: 'Le Frenchie', prix: 12.9, prixMenu: 15.9, desc: { fr: 'Steak 100 g, œuf, salade, tomate, oignons rouges, raclette, bacon de bœuf, sauce poivre ou moutarde-miel.', en: '100 g patty, egg, lettuce, tomato, red onions, raclette, bacon, pepper or honey-mustard sauce.' }, tags: ['best-seller'] },
        { nom: 'Le Raphaëlois', prix: 12, prixMenu: 15, desc: { fr: 'Steak 100 g, salade, cornichons, tomate, chèvre, miel et oignons confits.', en: '100 g patty, lettuce, pickles, tomato, goat cheese, honey and confit onions.' } },
        { nom: 'Le Master', prix: 16.8, prixMenu: 19.8, desc: { fr: '2 steaks 100 g, double cheddar, double raclette, rösti, oignons caramélisés.', en: 'Two 100 g patties, double cheddar, double raclette, rösti, caramelised onions.' } },
        { nom: 'Le Hulk Burger', prix: 14.8, prixMenu: 17.8, desc: { fr: 'Steak 280 g, salade, tomate, oignons caramélisés, sauce maison.', en: '280 g patty, lettuce, tomato, caramelised onions, house sauce.' } },
        { nom: 'So Good Bacon', prix: 13.5, prixMenu: 16.5, desc: { fr: '3 steaks 80 g, bacon de bœuf grillé, 3 tranches de cheddar, oignons caramélisés, sauce au choix.', en: 'Three 80 g patties, grilled beef bacon, 3 cheddar slices, caramelised onions, sauce of your choice.' } },
        { nom: 'So Good 150', prix: 12.5, prixMenu: 15.5, desc: { fr: 'Steak 150 g (façon bouchère), salade, tomate, oignons rouges, 2 cheddar, cornichons.', en: '150 g patty (butcher style), lettuce, tomato, red onions, 2 cheddar, pickles.' } },
        { nom: 'So Good Chicken Beef', prix: 12.5, prixMenu: 15.5, desc: { fr: 'Poulet pané, steak 80 g, salade, tomate, oignons rouges, cheddar, emmental, sauce au choix.', en: 'Breaded chicken, 80 g patty, lettuce, tomato, red onions, cheddar, emmental, sauce of your choice.' } },
        { nom: 'So Good Chicken', prix: 9.5, prixMenu: 12.5, desc: { fr: 'Poulet pané, salade, tomate, oignons rouges, sauce au choix.', en: 'Breaded chicken, lettuce, tomato, red onions, sauce of your choice.' } },
        { nom: 'So Good Fish', prix: 7.5, prixMenu: 10.5, desc: { fr: 'Colin pané, cheddar, salade, sauce fish.', en: 'Breaded pollock, cheddar, lettuce, fish sauce.' } },
        { nom: 'Le Veggie', prix: 7.5, prixMenu: 10.5, desc: { fr: 'Rösti, cheddar, salade, tomate, oignons caramélisés, sauce au choix.', en: 'Rösti, cheddar, lettuce, tomato, caramelised onions, sauce of your choice.' }, tags: ['vegetarien'] },
      ],
    },
    {
      id: 'hotdogs', titre: { fr: 'Hot Dogs', en: 'Hot Dogs' },
      sousTitre: { fr: 'Nouveau ! Aussi en Box Hot-Dogs : 19,90 € (prix de lancement).', en: 'New! Also as a Hot-Dogs Box: €19.90 (launch price).' },
      items: [
        { nom: 'Hot Dog Classique', desc: { fr: 'Saucisse, ketchup, moutarde américaine.', en: 'Sausage, ketchup, American mustard.' }, tags: ['nouveau'] },
        { nom: 'Hot Dog Montagnard', desc: { fr: 'Saucisse, raclette fondue, oignons croustillants.', en: 'Sausage, melted raclette, crispy onions.' }, tags: ['nouveau'] },
        { nom: 'Hot Dog à la Truffe', desc: { fr: 'Saucisse, mayo truffe, copeaux de parmesan.', en: 'Sausage, truffle mayo, parmesan shavings.' }, tags: ['nouveau'] },
      ],
    },
    {
      id: 'sandwichs', titre: { fr: 'Sandwichs & Wraps', en: 'Sandwiches & Wraps' },
      sousTitre: { fr: '', en: '' },
      items: [
        { nom: 'Philly Cheese Steak au Poulet', prix: 14.5, prixMenu: 17.5, desc: { fr: 'Pain sous-marin, bœuf/poulet, poivrons, oignons, fromage, salade, mayonnaise, champignons frais.', en: 'Sub roll, beef/chicken, peppers, onions, cheese, lettuce, mayonnaise, fresh mushrooms.' } },
        { nom: 'Wrap Américain', prix: 10.9, prixMenu: 13.9, desc: { fr: 'Poulet pané, cheddar, salade, tomate, oignons, frites, sauce BBQ.', en: 'Breaded chicken, cheddar, lettuce, tomato, onions, fries, BBQ sauce.' } },
        { nom: 'Wrap Chèvre', prix: 9.9, prixMenu: 12.9, desc: { fr: 'Poulet pané, cheddar, chèvre, salade, tomate, oignons, sauce moutarde miel.', en: 'Breaded chicken, cheddar, goat cheese, lettuce, tomato, onions, honey-mustard sauce.' } },
        { nom: 'Panini 4 Fromages', prix: 8, desc: { fr: 'Pain panini, mélange de quatre fromages fondants.', en: 'Panini bread, four melting cheeses.' }, tags: ['vegetarien'] },
        { nom: 'Américain Simple', prix: 10, prixMenu: 12, desc: { fr: 'Baguette, 2 steaks de 80 g, frites, cheddar, salade, tomate, oignons, sauce au choix.', en: 'Baguette, two 80 g patties, fries, cheddar, lettuce, tomato, onions, sauce of your choice.' } },
        { nom: 'Panini Jambon', prix: 6.5, desc: { fr: 'Pain panini, jambon, fromage.', en: 'Panini bread, ham, cheese.' } },
        { nom: 'Panini Poulet ou Kebab', prix: 8.5, desc: { fr: 'Pain panini, poulet ou kebab, tomate, mozzarella.', en: 'Panini bread, chicken or kebab, tomato, mozzarella.' } },
      ],
    },
    {
      id: 'boxs', titre: { fr: 'Boxs', en: 'Boxes' },
      sousTitre: { fr: 'À partager… ou pas.', en: 'To share… or not.' },
      items: [
        { nom: 'Box Beef', prix: 14.9, desc: { fr: '2 Double Cheese coupés en deux, frites, canette.', en: 'Two Double Cheese cut in half, fries, can.' } },
        { nom: 'Box Chicken Beef', prix: 17.5, desc: { fr: '1 So Good Chicken & 1 Double Cheese coupés en deux, frites, canette.', en: 'One So Good Chicken & one Double Cheese cut in half, fries, can.' } },
        { nom: 'Box Hot-Dogs', prix: 19.9, desc: { fr: '1 hot-dog classique, 1 hot-dog en panure croustillante, frites, canette.', en: 'One classic hot dog, one crispy-breaded hot dog, fries, can.' } },
        { nom: 'Box Truffe', prix: 23.4, desc: { fr: '1 Cheese & 1 Double Cheese sauce truffe, 4 onion rings, 2 tenders, 4 popcorn poulet, mayo truffe.', en: 'One Cheese & one Double Cheese with truffle sauce, 4 onion rings, 2 tenders, 4 chicken popcorn, truffle mayo.' } },
        { nom: 'Box Famille', prix: 39.9, desc: { fr: '2 So Good Chicken, 2 Double Cheese, 2 Cheeseburgers, frites, oignons crispy, bouteille 1,5 L.', en: '2 So Good Chicken, 2 Double Cheese, 2 Cheeseburgers, fries, crispy onions, 1.5 L bottle.' } },
      ],
    },
    {
      id: 'snacking', titre: { fr: 'Snacking', en: 'Snacks' },
      sousTitre: { fr: 'Tout supplément : 1,00 € (cheddar, bacon de bœuf, œuf, rösti…).', en: 'Any extra: €1.00 (cheddar, beef bacon, egg, rösti…).' },
      items: [
        { nom: 'Nuggets', prix: 5, desc: { fr: '5 pièces — morceaux de poulet panés, dorés et croustillants.', en: '5 pieces — golden, crispy breaded chicken pieces.' } },
        { nom: 'Tenders faits maison', prix: 7, desc: { fr: '4 pièces — filets de poulet tenders, panure croustillante.', en: '4 pieces — homemade chicken tenders, crispy coating.' } },
        { nom: 'Bucket 2XS', prix: 18.4, desc: { fr: 'Tenders + 5 wings (épicés ou non), 1 grande frite et 1 boisson.', en: 'Tenders + 5 wings (spicy or not), one large fries and one drink.' } },
        { nom: 'Frites Cheddar Bacon', prix: 5.5, desc: { fr: 'Frites nappées de cheddar fondant et de bacon de bœuf grillé.', en: 'Fries topped with melting cheddar and grilled beef bacon.' } },
        { nom: 'Mozza Sticks', prix: 6, desc: { fr: '6 pièces — bâtonnets de mozzarella fondante, panure croustillante.', en: '6 pieces — melting mozzarella sticks, crispy coating.' }, tags: ['vegetarien'] },
        { nom: 'Wings', prix: 6.5, desc: { fr: '5 pièces — ailes de poulet marinées, croustillantes.', en: '5 pieces — marinated, crispy chicken wings.' } },
        { nom: 'Frites', prix: 3.5, desc: { fr: 'Frites dorées, croustillantes à souhait.', en: 'Golden fries, crispy to perfection.' }, tags: ['vegetarien'] },
      ],
    },
    {
      id: 'menus', titre: { fr: 'Menus', en: 'Set Menus' },
      sousTitre: { fr: 'Menu enfant jusqu’à 11 ans.', en: 'Kids menu up to age 11.' },
      items: [
        { nom: 'Menu Étudiant', prix: 10, desc: { fr: 'Steak 80 g ou fish, salade, tomate, oignons rouges, cheddar, ketchup, mayonnaise.', en: '80 g patty or fish, lettuce, tomato, red onions, cheddar, ketchup, mayonnaise.' } },
        { nom: 'Menu Enfant', prix: 8, desc: { fr: '5 nuggets ou 1 cheeseburger, Capri-Sun, frites, compote.', en: '5 nuggets or 1 cheeseburger, Capri-Sun, fries, fruit purée.' } },
      ],
    },
    {
      id: 'desserts', titre: { fr: 'Desserts', en: 'Desserts' },
      sousTitre: { fr: 'Selon disponibilité.', en: 'Depending on availability.' },
      items: [
        { nom: 'Tiramisu', prix: 4.5, desc: { fr: 'Parfums selon disponibilité.', en: 'Flavours depending on availability.' }, tags: ['vegetarien'] },
        { nom: 'Donuts', prix: 3, desc: { fr: 'Chocolat.', en: 'Chocolate.' }, tags: ['vegetarien'] },
        { nom: 'Tarte au Daim', prix: 3, desc: { fr: 'Selon disponibilité.', en: 'Depending on availability.' }, tags: ['vegetarien'] },
      ],
    },
    {
      id: 'boissons', titre: { fr: 'Boissons', en: 'Drinks' },
      sousTitre: { fr: '', en: '' },
      items: [
        { nom: 'Soda', prix: 2, desc: { fr: 'Au choix.', en: 'Your choice.' } },
        { nom: 'Eau', prix: 1.5, desc: { fr: 'Plate.', en: 'Still.' } },
        { nom: 'Eau pétillante', prix: 2, desc: { fr: 'Gazeuse.', en: 'Sparkling.' } },
      ],
    },
  ],

  /* Les préférés — classement Uber Eats, prix repris de la carte officielle */
  favoris: [
    { rang: 'Nº 1', nom: 'Kumpir Kebab', prix: 10.5, texte: { fr: 'La pomme de terre au four garnie de kebab, aligot et oignons caramélisés.', en: 'The baked potato loaded with kebab, aligot and caramelised onions.' } },
    { rang: 'Nº 2', nom: 'Le Frenchie', prix: 12.9, texte: { fr: 'Steak 100 g, œuf, raclette et bacon de bœuf. Très français, très copieux.', en: '100 g patty, egg, raclette and beef bacon. Very French, very filling.' } },
    { rang: 'Nº 3', nom: 'Kumpir Cannibal', prix: 14, texte: { fr: 'Steak haché, saucisse, oignons. Le kumpir qui ne plaisante pas.', en: 'Minced steak, sausage, onions. The kumpir that means business.' } },
    { rang: { fr: 'Populaire', en: 'Popular' }, nom: 'Double Cheese', prix: 7.5, texte: { fr: 'Le classique à 7,50 € : 2 steaks, 2 cheddar, cornichons.', en: 'The €7.50 classic: 2 patties, 2 cheddar, pickles.' } },
    { rang: { fr: 'Populaire', en: 'Popular' }, nom: 'Philly Cheese Steak', prix: 13.5, texte: { fr: 'Provolone, poivrons et champignons fondants.', en: 'Melting provolone, peppers and mushrooms.' } },
    { rang: { fr: 'À partager', en: 'To share' }, nom: 'Box Famille', prix: 39.9, texte: { fr: 'Six burgers, frites, oignons crispy et bouteille 1,5 L.', en: 'Six burgers, fries, crispy onions and a 1.5 L bottle.' } },
  ],

  horaires: [
    { jours: [1, 2, 3, 4], creneaux: ['11:00-23:00'] },
    { jours: [5, 6], creneaux: ['11:00-02:00'] },
    { jours: [7], creneaux: ['18:00-23:00'] },
  ],
  horairesNote: { fr: '*À partir de 1 h : uniquement à emporter ou en livraison.', en: '*From 1 am: takeaway or delivery only.' },

  /* Avis clients réels (Instagram @sogooddiner83) */
  avis: [
    { nom: 'Vanessa P.', note: 5,
      texte: { fr: "Accueil au top ! Je ne laisse jamais d'avis, mais là, c'était tellement bon que ça mérite que les gens connaissent ce lieu ! Produits frais, sauces maison super bonnes. Dans notre commande, nous avions le menu enfant, un wrap chèvre et un américain. Les 3 menus au top ! Que ce soit au niveau du goût, du visuel ou de la quantité, il n'y a rien à dire ! On mange bien et on est bien calé comme il faut. Je recommande +++++++",
               en: "Top-notch welcome! I never leave reviews, but this was so good that people deserve to know this place! Fresh products, amazing homemade sauces. Our order had the kids' menu, a goat-cheese wrap and an américain. All three outstanding! Taste, presentation, portion size — nothing to fault! You eat well and leave properly full. I recommend +++++++" } },
    { nom: 'Marc M.', note: 5,
      texte: { fr: "Une très belle découverte ! J'ai passé un excellent moment dans ce petit restaurant : le repas était délicieux, fait avec soin et surtout maison. Les patrons sont au top, avec un accueil chaleureux et familial. Petit clin d'œil sympa : premier client de l'année 2026. Je recommande à 100 %. On y va pour manger, on y reste pour l'accueil !",
               en: "A lovely discovery! I had a great time in this little restaurant: the meal was delicious, made with care and above all homemade. The owners are wonderful, with a warm, family welcome. Fun little detail: first customer of 2026. I recommend 100%. You come for the food, you stay for the welcome!" } }
  ],

  commande: {
    telephoneActif: true,
    plateformes: [ { nom: 'Uber Eats', url: 'https://www.ubereats.com/fr/store/so-good/AEpML5H6UrK-38zkW4WElw', actif: true } ],
  },

  galerie: [
    { src: 'assets/img/hero-burger.webp', alt: { fr: 'Burger maison So Good Diner', en: 'So Good Diner house burger' } },
    { src: 'assets/img/interior-diner.webp', alt: { fr: 'Salle du restaurant', en: 'The dining room' } },
    { src: 'assets/img/kumpir.webp', alt: { fr: 'Kumpir garni', en: 'Loaded kumpir' } },
    { src: 'assets/img/dish-sides.webp', alt: { fr: 'Frites et accompagnements', en: 'Fries and sides' } },
    { src: 'assets/img/dish-chicken.webp', alt: { fr: 'Burger au poulet croustillant', en: 'Crispy chicken burger' } },
    { src: 'assets/img/dish-smash.webp', alt: { fr: 'Smash burger au cheddar', en: 'Cheddar smash burger' } },
  ],

  contact: {
    mode: 'mailto',
    endpoint: 'https://formspree.io/f/VOTRE_ID',
    messageSucces: { fr: 'Votre logiciel de messagerie va s’ouvrir avec le message pré-rempli.', en: 'Your mail app will open with the message pre-filled.' },
  },
};
