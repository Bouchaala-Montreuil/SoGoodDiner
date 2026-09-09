/**
 * ============================================================================
 *  SO GOOD DINER — chaînes d'interface (FR / EN)
 * ============================================================================
 *  Le CONTENU (plats, textes éditoriaux, horaires) vit dans content.js.
 *  Ce fichier ne contient que les chaînes d'INTERFACE : navigation, libellés,
 *  boutons, formulaire, accessibilité.
 *
 *  Chaque élément du HTML portant  data-i18n="cle"  reçoit le texte ;
 *  data-i18n-attr="aria-label:cle; placeholder:cle2"  remplit des attributs.
 * ============================================================================
 */
window.SO_GOOD_I18N = {
  fr: {
    /* Navigation */
    'nav.adresse': "L'adresse",
    'nav.signatures': 'Signatures',
    'nav.carte': 'La carte',
    'nav.emporter': 'À emporter',
    'nav.galerie': 'Galerie',
    'nav.favoris': 'Les préférés',
    'nav.contact': 'Contact',
    'nav.commander': 'Commander',
    'nav.logo': 'So Good Diner — retour en haut',
    'nav.principale': 'Navigation principale',
    'nav.mobile': 'Navigation mobile',
    'nav.ouvrir': 'Ouvrir le menu',
    'nav.fermer': 'Fermer le menu',
    'nav.langue': 'Choisir la langue',

    /* Statut d'ouverture */
    'statut.ouvert': 'Ouvert',
    'statut.ferme': 'Fermé',
    'statut.ouvreA': 'Ouvre à',
    'statut.horaires': 'Horaires…',

    /* Hero */
    'hero.eyebrow': 'Nouvelle adresse — centre-ville de Fréjus',
    'hero.toujours': 'Toujours',
    'hero.voirCarte': 'Voir la carte',
    'hero.curseurCarte': 'Miam',
    'hero.curseurCommande': 'Go !',
    'hero.defiler': 'Défiler',
    'hero.badge': 'fait maison · sauces maison · kumpirs · sur place & à emporter',

    /* Adresse */
    'adresse.eyebrow': 'Ça bouge',
    'adresse.titre1': 'Nouvelle adresse,',
    'adresse.titre2': 'même gourmandise',
    'adresse.telephone': 'Commande par téléphone',
    'adresse.surPlace': 'Sur place · À emporter',
    'adresse.surPlaceDetail': 'Livraison via Uber Eats',
    'adresse.itineraire': "Voir l'itinéraire",
    'adresse.curseur': 'On y va',
    'adresse.carte': 'Carte — emplacement du restaurant',
    'adresse.tag1': 'Centre-ville',
    'adresse.tag2': 'Fréjus 83600',
    'adresse.tag3': 'Var',

    /* Signatures */
    'signatures.eyebrow': 'Les incontournables',
    'signatures.titre1': 'Trois raisons',
    'signatures.titre2': 'de craquer',
    'signatures.aside': 'Les trois plats qui sortent le plus de la plancha. Et pour cause.',

    /* Expérience */
    'experience.eyebrow': 'En coulisses',
    'experience.titre1': 'Quatre gestes,',
    'experience.titre2': 'zéro raccourci',
    'experience.c1.titre': 'Le feu',
    'experience.c1.texte': 'Plancha brûlante. Le steak est pressé une seule fois, assez longtemps pour créer cette croûte caramélisée qui fait tout le caractère du smash.',
    'experience.c2.titre': 'La seconde',
    'experience.c2.texte': 'Le fromage arrive à la seconde précise où la viande quitte le feu. Une seconde de plus et il tranche, une de moins et il ne coule pas.',
    'experience.c3.titre': 'La main',
    'experience.c3.texte': 'Montage à la commande, jamais à l’avance. Sauce, salade, tomate, oignons : chaque étage a sa place, et il y en a beaucoup.',
    'experience.c4.titre': 'La salle',
    'experience.c4.texte': 'Banquettes, néons et musique un peu forte : un vrai diner américain posé dans une rue de Fréjus. On s’assoit, on reste.',

    /* Couches */
    'couches.eyebrow': 'Décomposition',
    'couches.titre1': 'Chaque couche',
    'couches.titre2': 'compte',
    'couches.aside': 'Un burger, c’est quatre décisions. On les prend toutes au sérieux — du pain jusqu’à la dernière sauce.',

    /* À emporter */
    'emporter.eyebrow': 'À emporter',
    'emporter.titre1': 'La qualité',
    'emporter.titre2': 'vous suit partout',
    'emporter.prev': 'Précédent',
    'emporter.next': 'Suivant',
    'emporter.hint': '← Faites glisser →',

    /* Carte */
    'carte.eyebrow': 'La carte',
    'carte.titre1': "Ce qu'on",
    'carte.titre2': 'vous sert',
    'carte.allergenes': 'Allergènes et origine des viandes disponibles sur place. Options végétariennes signalées par',
    'carte.vege': 'végé',
    'carte.bestseller': 'best-seller',
    'carte.nouveau': 'nouveau',
    'carte.epice': 'épicé',
    'carte.rubriques': 'Rubriques de la carte',
    'carte.aussiTitre': 'Et aussi, à retrouver sur place',
    'carte.aussiNote': 'Prix et composition de ces rubriques disponibles sur place et sur Uber Eats.',

    /* Favoris */
    'favoris.eyebrow': 'Le classement',
    'favoris.titre1': 'Ce que les gens',
    'favoris.titre2': 'commandent',
    'favoris.aside': 'Classement des plats les plus commandés.',

    /* Galerie */
    'galerie.eyebrow': 'Galerie',
    'galerie.titre1': 'Ça se mange',
    'galerie.titre2': 'avec les yeux',
    'galerie.aside': 'Cliquez sur une photo pour l’agrandir, puis naviguez au clavier avec les flèches.',
    'galerie.agrandir': 'Agrandir :',

    /* Contact */
    'contact.eyebrow': 'Nous trouver',
    'contact.titre1': 'Passez quand',
    'contact.titre2': 'vous voulez',
    'contact.horaires': 'Horaires',
    'contact.aujourdhui': 'Aujourd’hui · ',
    'contact.appeler': 'Appeler le restaurant',
    'contact.formTitre': 'Une question, un groupe, un évènement&nbsp;?',
    'contact.nom': 'Nom',
    'contact.nomPh': 'Votre nom',
    'contact.coordonnee': 'Téléphone ou e-mail',
    'contact.coordonneePh': '06 12 34 56 78',
    'contact.message': 'Message',
    'contact.messagePh': 'Réservation de groupe, privatisation, question sur un plat…',
    'contact.envoyer': 'Envoyer le message',
    'contact.errNom': 'Merci d’indiquer votre nom.',
    'contact.errContact': 'Un téléphone ou un e-mail valide, pour qu’on puisse vous répondre.',
    'contact.errMessage': 'Quelques mots de plus nous aideraient (10 caractères min.).',
    'contact.mailtoSujet': 'Message depuis le site — ',
    'contact.corpsNom': 'Nom : ',
    'contact.corpsContact': 'Contact : ',

    /* Jours */
    'jour.1': 'Lundi', 'jour.2': 'Mardi', 'jour.3': 'Mercredi', 'jour.4': 'Jeudi',
    'jour.5': 'Vendredi', 'jour.6': 'Samedi', 'jour.7': 'Dimanche',
    'jourc.1': 'Lun.', 'jourc.2': 'Mar.', 'jourc.3': 'Mer.', 'jourc.4': 'Jeu.',
    'jourc.5': 'Ven.', 'jourc.6': 'Sam.', 'jourc.7': 'Dim.',

    /* Lightbox */
    'lb.fermer': 'Fermer',
    'lb.prev': 'Photo précédente',
    'lb.next': 'Photo suivante',
    'lb.photo': 'Photo agrandie',

    /* Footer */
    'footer.eyebrow': 'Envie maintenant ?',
    'footer.titre1': 'Commandez,',
    'footer.titre2': "on s'occupe du reste",
    'footer.appeler': 'Appeler',
    'footer.note': 'À emporter : pensez à commander à l’avance aux heures de pointe.',
    'footer.adresse': 'Adresse',
    'footer.contact': 'Contact',
    'footer.suivre': 'Suivez-nous',
    'footer.infos': 'Infos',
    'footer.mentions': 'Mentions légales',
    'footer.confidentialite': 'Confidentialité',
    'footer.droits': 'Tous droits réservés.',
    'footer.realisation': 'Site réalisé sur mesure.',

    /* Accessibilité */
    'a11y.skip': 'Aller au contenu principal',
    'a11y.stars': 'étoiles',
  },

  en: {
    /* Navigation */
    'nav.adresse': 'Location',
    'nav.signatures': 'Signatures',
    'nav.carte': 'Menu',
    'nav.emporter': 'Takeaway',
    'nav.galerie': 'Gallery',
    'nav.favoris': 'Favourites',
    'nav.contact': 'Contact',
    'nav.commander': 'Order',
    'nav.logo': 'So Good Diner — back to top',
    'nav.principale': 'Main navigation',
    'nav.mobile': 'Mobile navigation',
    'nav.ouvrir': 'Open menu',
    'nav.fermer': 'Close menu',
    'nav.langue': 'Choose language',

    /* Open status */
    'statut.ouvert': 'Open',
    'statut.ferme': 'Closed',
    'statut.ouvreA': 'Opens at',
    'statut.horaires': 'Opening hours…',

    /* Hero */
    'hero.eyebrow': 'New address — Fréjus city centre',
    'hero.toujours': 'Always',
    'hero.voirCarte': 'See the menu',
    'hero.curseurCarte': 'Yum',
    'hero.curseurCommande': 'Go!',
    'hero.defiler': 'Scroll',
    'hero.badge': 'homemade · house sauces · kumpirs · dine in & takeaway',

    /* Location */
    'adresse.eyebrow': "We've moved",
    'adresse.titre1': 'New address,',
    'adresse.titre2': 'same appetite',
    'adresse.telephone': 'Order by phone',
    'adresse.surPlace': 'Dine in · Takeaway',
    'adresse.surPlaceDetail': 'Delivery via Uber Eats',
    'adresse.itineraire': 'Get directions',
    'adresse.curseur': "Let's go",
    'adresse.carte': 'Map — restaurant location',
    'adresse.tag1': 'City centre',
    'adresse.tag2': 'Fréjus 83600',
    'adresse.tag3': 'Var, France',

    /* Signatures */
    'signatures.eyebrow': 'The must-tries',
    'signatures.titre1': 'Three reasons',
    'signatures.titre2': 'to give in',
    'signatures.aside': 'The three dishes that come off the flat top more than any other. No wonder.',

    /* Experience */
    'experience.eyebrow': 'Behind the scenes',
    'experience.titre1': 'Four moves,',
    'experience.titre2': 'no shortcuts',
    'experience.c1.titre': 'The heat',
    'experience.c1.texte': 'Blazing flat top. The patty is pressed just once, long enough to build the caramelised crust that gives a smash all its character.',
    'experience.c2.titre': 'The second',
    'experience.c2.texte': 'The cheese goes on the exact second the meat leaves the heat. One second more and it splits, one less and it never melts.',
    'experience.c3.titre': 'The hand',
    'experience.c3.texte': 'Assembled to order, never in advance. Sauce, lettuce, tomato, onions: every layer has its place, and there are a lot of them.',
    'experience.c4.titre': 'The room',
    'experience.c4.texte': 'Booths, neon and music a little too loud: a proper American diner dropped into a street in Fréjus. You sit down, you stay.',

    /* Layers */
    'couches.eyebrow': 'Deconstructed',
    'couches.titre1': 'Every layer',
    'couches.titre2': 'counts',
    'couches.aside': 'A burger is four decisions. We take all of them seriously — from the bun to the very last sauce.',

    /* Takeaway */
    'emporter.eyebrow': 'Takeaway',
    'emporter.titre1': 'The quality',
    'emporter.titre2': 'travels with you',
    'emporter.prev': 'Previous',
    'emporter.next': 'Next',
    'emporter.hint': '← Drag to scroll →',

    /* Menu */
    'carte.eyebrow': 'The menu',
    'carte.titre1': 'What we',
    'carte.titre2': 'serve you',
    'carte.allergenes': 'Allergens and meat origin available on site. Vegetarian options marked',
    'carte.vege': 'veg',
    'carte.bestseller': 'best seller',
    'carte.nouveau': 'new',
    'carte.epice': 'spicy',
    'carte.rubriques': 'Menu sections',
    'carte.aussiTitre': 'Also available in store',
    'carte.aussiNote': 'Prices and contents for these sections are available in store and on Uber Eats.',

    /* Favourites */
    'favoris.eyebrow': 'The ranking',
    'favoris.titre1': 'What people',
    'favoris.titre2': 'actually order',
    'favoris.aside': 'Ranking of the most ordered dishes.',

    /* Gallery */
    'galerie.eyebrow': 'Gallery',
    'galerie.titre1': 'You eat it',
    'galerie.titre2': 'with your eyes',
    'galerie.aside': 'Click a photo to enlarge it, then use the arrow keys.',
    'galerie.agrandir': 'Enlarge:',

    /* Contact */
    'contact.eyebrow': 'Find us',
    'contact.titre1': 'Come by',
    'contact.titre2': 'any time',
    'contact.horaires': 'Opening hours',
    'contact.aujourdhui': 'Today · ',
    'contact.appeler': 'Call the restaurant',
    'contact.formTitre': 'A question, a group, an event?',
    'contact.nom': 'Name',
    'contact.nomPh': 'Your name',
    'contact.coordonnee': 'Phone or email',
    'contact.coordonneePh': '+33 6 12 34 56 78',
    'contact.message': 'Message',
    'contact.messagePh': 'Group booking, private hire, question about a dish…',
    'contact.envoyer': 'Send message',
    'contact.errNom': 'Please tell us your name.',
    'contact.errContact': 'A valid phone number or email, so we can get back to you.',
    'contact.errMessage': 'A few more words would help (10 characters min.).',
    'contact.mailtoSujet': 'Message from the website — ',
    'contact.corpsNom': 'Name: ',
    'contact.corpsContact': 'Contact: ',

    /* Days */
    'jour.1': 'Monday', 'jour.2': 'Tuesday', 'jour.3': 'Wednesday', 'jour.4': 'Thursday',
    'jour.5': 'Friday', 'jour.6': 'Saturday', 'jour.7': 'Sunday',
    'jourc.1': 'Mon', 'jourc.2': 'Tue', 'jourc.3': 'Wed', 'jourc.4': 'Thu',
    'jourc.5': 'Fri', 'jourc.6': 'Sat', 'jourc.7': 'Sun',

    /* Lightbox */
    'lb.fermer': 'Close',
    'lb.prev': 'Previous photo',
    'lb.next': 'Next photo',
    'lb.photo': 'Enlarged photo',

    /* Footer */
    'footer.eyebrow': 'Fancy one now?',
    'footer.titre1': 'Order now,',
    'footer.titre2': "we'll handle the rest",
    'footer.appeler': 'Call',
    'footer.note': 'Takeaway: order ahead during peak hours.',
    'footer.adresse': 'Address',
    'footer.contact': 'Contact',
    'footer.suivre': 'Follow us',
    'footer.infos': 'Info',
    'footer.mentions': 'Legal notice',
    'footer.confidentialite': 'Privacy',
    'footer.droits': 'All rights reserved.',
    'footer.realisation': 'Custom-built website.',

    /* Accessibility */
    'a11y.skip': 'Skip to main content',
    'a11y.stars': 'stars',
  },
};
