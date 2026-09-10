/* ============================================================================
   SO GOOD DINER — main.js
   Vanilla JS, aucune dépendance. i18n FR/EN + toutes les interactions.
   ========================================================================== */
(function () {
  'use strict';

  var D = window.SO_GOOD || {};
  var I18N = window.SO_GOOD_I18N || { fr: {}, en: {} };
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;

  /* =========================================================================
   * A. INTERNATIONALISATION
   * =======================================================================*/
  var LANG_KEY = 'sogood-lang';
  var lang = 'fr';

  /** Chaîne d'INTERFACE (i18n.js) */
  function ui(key) {
    var d = I18N[lang] || {};
    return (key in d) ? d[key] : ((I18N.fr || {})[key] !== undefined ? I18N.fr[key] : key);
  }
  /** Chaîne de CONTENU (content.js) : { fr, en } ou valeur simple */
  function t(v) {
    if (v === null || v === undefined) return '';
    if (typeof v === 'object' && ('fr' in v || 'en' in v)) return v[lang] !== undefined ? v[lang] : v.fr;
    return v;
  }
  /** Prix formaté selon la locale : 13.9 -> « 13,90 € » / « €13.90 » */
  var fmtCache = {};
  function prix(n) {
    if (typeof n !== 'number' || isNaN(n)) return String(n || '');
    var locale = lang === 'fr' ? 'fr-FR' : 'en-GB';
    if (!fmtCache[locale]) {
      fmtCache[locale] = new Intl.NumberFormat(locale, {
        style: 'currency', currency: 'EUR', minimumFractionDigits: 2, maximumFractionDigits: 2
      });
    }
    return fmtCache[locale].format(n).replace(/\u202f|\u00a0/g, ' ').trim();
  }
  /** Affiche « 13,90 € » ou « Seul : 10,50 € · Menu : 12,00 € » */
  function prixAffiche(it) {
    if (it && typeof it.prixMenu === 'number') {
      return ui('carte.seul') + ' : ' + prix(it.prix) + ' · ' + ui('carte.menu') + ' : ' + prix(it.prixMenu);
    }
    return prix(it ? it.prix : it);
  }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (m) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m];
    });
  }

  /* Dimensions intrinsèques (anti-CLS) : portrait / intérieur / paysage. */
  function dims(src) {
    var d = /hero-burger|burger-hands/.test(src) ? [933, 1400]
      : /interior-diner/.test(src) ? [1400, 932] : [1400, 933];
    return ' width="' + d[0] + '" height="' + d[1] + '"';
  }

  function langueInitiale() {
    try {
      var stockee = window.localStorage.getItem(LANG_KEY);
      if (stockee && (D.langues || ['fr', 'en']).indexOf(stockee) !== -1) return stockee;
    } catch (e) { /* stockage indisponible */ }
    if (D.langueDefaut && D.langueDefaut !== 'auto') return D.langueDefaut;
    var nav = (navigator.language || 'fr').slice(0, 2).toLowerCase();
    return (D.langues || ['fr', 'en']).indexOf(nav) !== -1 ? nav : (D.langueDefaut || 'fr');
  }

  /** Applique toutes les chaînes d'interface déclarées dans le HTML */
  function applyI18n() {
    $$('[data-i18n]').forEach(function (el) { el.textContent = ui(el.dataset.i18n); });
    $$('[data-i18n-attr]').forEach(function (el) {
      el.dataset.i18nAttr.split(';').forEach(function (paire) {
        var p = paire.split(':');
        var attr = (p[0] || '').trim(), key = (p[1] || '').trim();
        if (attr && key) el.setAttribute(attr, ui(key));
      });
    });
    // Libellés du curseur personnalisé
    $$('[data-cursor-key]').forEach(function (el) {
      el.setAttribute('data-cursor', ui(el.dataset.cursorKey));
    });
    var badge = $('#hero-badge-text');
    if (badge) badge.textContent = '· ' + ui('hero.badge') + ' · ';
  }

  function majBoutonsLangue() {
    $$('[data-lang]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
    });
    document.documentElement.setAttribute('lang', lang);
  }

  /* =========================================================================
   * B. PRÉCHARGEUR
   * =======================================================================*/
  function preloader(done) {
    var el = $('#preloader');
    if (!el) { done(); return; }
    if (reduce) { el.remove(); done(); return; }

    var count = $('#preloader-count');
    var bar = $('#preloader-bar');
    var label = $('[data-scramble]');
    var t0 = performance.now(), DUREE = 1500, fini = false;

    if (label) scramble(label, label.dataset.scramble || label.textContent, 1200);

    function terminer() {
      if (fini) return; fini = true;
      el.classList.add('is-done');
      setTimeout(function () {
        el.classList.add('is-out');
        setTimeout(function () { if (el.parentNode) el.remove(); }, 1200);
        done();
      }, 260);
    }
    (function tick(now) {
      var p = Math.min(1, (now - t0) / DUREE);
      var v = Math.round(100 * (1 - Math.pow(1 - p, 3)));
      if (count) count.textContent = v;
      if (bar) bar.style.width = v + '%';
      if (p < 1) requestAnimationFrame(tick); else terminer();
    })(t0);

    setTimeout(terminer, 4500); // filet de sécurité
  }

  var GLYPHES = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#*%$&@';
  function scramble(el, finalText, duree) {
    if (reduce) { el.textContent = finalText; return; }
    var start = performance.now();
    (function frame(now) {
      var p = Math.min(1, (now - start) / duree);
      var out = '';
      for (var i = 0; i < finalText.length; i++) {
        var c = finalText[i];
        if (c === ' ') { out += ' '; continue; }
        out += (i / finalText.length < p) ? c : GLYPHES[Math.floor(Math.random() * GLYPHES.length)];
      }
      el.textContent = out;
      if (p < 1) requestAnimationFrame(frame); else el.textContent = finalText;
    })(start);
  }

  /* =========================================================================
   * C. RENDU DES BLOCS DE CONTENU
   * =======================================================================*/
  function adresseComplete() {
    var c = D.coordonnees || {};
    return [c.adresse, t(c.complement), c.codePostal + ' ' + t(c.ville)].filter(Boolean).join(', ');
  }
  function mapsUrl() {
    var a = D.annonce || {};
    if (a.lien) return a.lien;
    return 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(adresseComplete());
  }
  function telHref() {
    var v = (D.coordonnees || {}).telephoneLien;
    return v ? 'tel:' + v.replace(/[^+\d]/g, '') : '#';
  }

  function injecter() {
    var C = D.coordonnees || {};
    var H = D.hero || {};
    var S = D.seo || {};

    if (S.titre) document.title = t(S.titre);
    if (S.description) {
      var meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute('content', t(S.description));
    }

    if ($('#hero-texte')) $('#hero-texte').textContent = t(H.texte);
    if ($('#hero-mot')) $('#hero-mot').textContent = t(H.motsRotatifs)[0];

    if ($('#addr-ligne1')) $('#addr-ligne1').textContent = [C.adresse, t(C.complement)].filter(Boolean).join(' · ');
    if ($('#addr-ligne2')) $('#addr-ligne2').textContent = C.codePostal + ' ' + t(C.ville);
    if ($('#tel-link')) { $('#tel-link').textContent = C.telephone || '—'; $('#tel-link').href = telHref(); }
    if ($('#mobile-addr')) $('#mobile-addr').textContent = adresseComplete();
    if ($('#foot-addr')) $('#foot-addr').textContent = adresseComplete();
    if ($('#foot-tel')) { $('#foot-tel').textContent = C.telephone || '—'; $('#foot-tel').href = telHref(); }
    if ($('#foot-mail')) { $('#foot-mail').textContent = C.email || '—'; $('#foot-mail').href = 'mailto:' + (C.email || ''); }
    if ($('#tel-btn')) $('#tel-btn').href = telHref();
    if ($('#footer-tel')) $('#footer-tel').href = telHref();
    if ($('#itineraire')) $('#itineraire').href = mapsUrl();
    if ($('#year')) $('#year').textContent = new Date().getFullYear();
    if ($('#annonce-texte') && D.annonce) $('#annonce-texte').textContent = t(D.annonce.texte);

    var mapEl = $('#map-frame');
    if (mapEl && C.geo) {
      var d = 0.006;
      var bbox = [C.geo.lon - d, C.geo.lat - d * 0.7, C.geo.lon + d, C.geo.lat + d * 0.7].join(',');
      mapEl.innerHTML =
        '<iframe title="' + esc(ui('adresse.carte')) + '" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="' +
        'https://www.openstreetmap.org/export/embed.html?bbox=' + bbox +
        '&layer=mapnik&marker=' + C.geo.lat + ',' + C.geo.lon + '"></iframe>';
    }

    var stats = $('#stats-list');
    if (stats && D.chiffres) {
      stats.innerHTML = D.chiffres.map(function (s) {
        return '<li class="reveal"><span class="stats__val" data-count="' + esc(s.valeur) + '">' + esc(s.valeur) +
               '</span><span class="stats__lab">' + esc(t(s.libelle)) + '</span></li>';
      }).join('');
    }

    var ticker = D.ticker ? t(D.ticker) : [];
    $$('[data-marquee]').forEach(function (tr) {
      if (tr.id === 'favoris-track') return;
      if (tr.classList.contains('ticker__track--xl')) {
        var nom = (D.etablissement || {}).nom || 'So Good Diner';
        var one = '<span>' + esc(nom) + '</span>';
        tr.innerHTML = one.repeat(4) + one.repeat(4);
      } else {
        var html = ticker.map(function (w) { return '<span>' + esc(w) + '</span>'; }).join('');
        tr.innerHTML = html + html;
      }
    });

    var sig = $('#sig-grid');
    if (sig && D.signatures) {
      sig.innerHTML = D.signatures.map(function (s) {
        return '<article class="sig reveal tilt">' +
          '<div class="sig__media"><img src="' + s.image + '" alt="' + esc(s.nom) + '" loading="lazy"' + dims(s.image) + '>' +
          (s.badge ? '<span class="sig__badge">' + esc(t(s.badge)) + '</span>' : '') + '</div>' +
          '<div class="sig__body"><div class="sig__top"><h3 class="sig__nom">' + esc(s.nom) + '</h3></div>' +
          '<p class="sig__desc">' + esc(t(s.description)) + '</p></div></article>';
      }).join('');
    }

    var rail = $('#couches-rail');
    if (rail && D.couches) {
      rail.innerHTML = D.couches.map(function (c) {
        return '<article class="couche reveal"><div class="couche__media"><img src="' + c.image +
               '" alt="' + esc(t(c.titre)) + '" loading="lazy"' + dims(c.image) + '></div><div class="couche__body">' +
               '<span class="couche__num">' + esc(c.num) + '</span><h3>' + esc(t(c.titre)) + '</h3>' +
               '<p>' + esc(t(c.texte)) + '</p></div></article>';
      }).join('');
    }

    var emp = $('#emp-rail');
    if (emp && D.emporter) {
      emp.innerHTML = D.emporter.map(function (e, i) {
        return '<article class="emp reveal"><img src="' + e.image + '" alt="' + esc(t(e.lieu)) + '" loading="lazy"' + dims(e.image) + '>' +
               '<span class="emp__idx">0' + (i + 1) + '</span><div class="emp__body">' +
               '<h3 class="emp__lieu">' + esc(t(e.lieu)) + '</h3><p class="emp__txt">' + esc(t(e.texte)) + '</p></div></article>';
      }).join('');
    }

    renderCarte();
    renderFavoris();
    renderAvis();
    renderGalerie();
    renderHoraires();
    renderCommande();
    commandeDirecte();
  }

  /* ---------------------------------------------------------------- LA CARTE */
  var ongletActif = 0;
  function renderCarte() {
    var tabs = $('#carte-tabs'), panels = $('#carte-panels');
    if (!tabs || !panels || !D.carte) return;
    if (ongletActif >= D.carte.length) ongletActif = 0;
    var CHIPS = {
      vegetarien: '<span class="chip chip--veg">' + esc(ui('carte.vege')) + '</span>',
      'best-seller': '<span class="chip chip--best">' + esc(ui('carte.bestseller')) + '</span>',
      nouveau: '<span class="chip chip--new">' + esc(ui('carte.nouveau')) + '</span>',
      epice: '<span class="chip chip--hot">' + esc(ui('carte.epice')) + '</span>'
    };

    tabs.innerHTML = D.carte.map(function (c, i) {
      var on = i === ongletActif;
      return '<button class="tab" role="tab" id="tab-' + c.id + '" aria-controls="panel-' + c.id +
             '" aria-selected="' + on + '" tabindex="' + (on ? 0 : -1) + '">' + esc(t(c.titre)) + '</button>';
    }).join('');

    panels.innerHTML = D.carte.map(function (c, i) {
      var on = i === ongletActif;
      var items = (c.items || []).map(function (it, idx) {
        var chips = (it.tags || []).map(function (x) { return CHIPS[x] || ''; }).join(' ');
        return '<div class="item" style="--n:' + idx + '"><h3 class="item__nom">' + esc(it.nom) + ' ' + chips + '</h3>' +
               (typeof it.prix === 'number' ? '<span class="item__prix">' + esc(prixAffiche(it)) + '</span>' : '') +
               (it.desc ? '<p class="item__desc">' + esc(t(it.desc)) + '</p>' : '') + '</div>';
      }).join('');
      return '<div class="carte__panel' + (on ? ' is-active' : '') + '" role="tabpanel" id="panel-' + c.id +
             '" aria-labelledby="tab-' + c.id + '"' + (on ? '' : ' hidden') + '>' +
             (c.sousTitre ? '<p class="carte__sous">' + esc(t(c.sousTitre)) + '</p>' : '') +
             '<div class="carte__items">' + items + '</div></div>';
    }).join('');

    var mention = $('#carte-mention');
    if (mention) mention.textContent = D.brouillon ? ('⚠ ' + t(D.carteMention)) : t(D.carteMention);

    var btns = $$('.tab', tabs);
    function select(idx, focus) {
      ongletActif = idx;
      btns.forEach(function (b, i) {
        var on = i === idx;
        b.setAttribute('aria-selected', on);
        b.tabIndex = on ? 0 : -1;
        var p = document.getElementById(b.getAttribute('aria-controls'));
        if (p) { p.classList.toggle('is-active', on); if (on) p.removeAttribute('hidden'); else p.setAttribute('hidden', ''); }
      });
      if (focus) btns[idx].focus();
    }
    btns.forEach(function (b, i) {
      b.addEventListener('click', function () { select(i, false); });
      b.addEventListener('keydown', function (e) {
        var n = null;
        if (e.key === 'ArrowRight') n = (i + 1) % btns.length;
        else if (e.key === 'ArrowLeft') n = (i - 1 + btns.length) % btns.length;
        else if (e.key === 'Home') n = 0;
        else if (e.key === 'End') n = btns.length - 1;
        if (n !== null) { e.preventDefault(); select(n, true); }
      });
    });
  }

  /* -------------------------------------------------------------- FAVORIS */
  function renderFavoris() {
    var track = $('#favoris-track');
    if (!track || !D.favoris) return;
    var html = D.favoris.map(function (f) {
      return '<article class="review"><span class="review__rang">' + esc(t(f.rang)) + '</span>' +
             '<div class="review__top"><h3>' + esc(f.nom) + '</h3><span class="review__prix">' + esc(prix(f.prix)) + '</span></div>' +
             '<p class="review__txt">' + esc(t(f.texte)) + '</p></article>';
    }).join('');
    track.innerHTML = html + html;
  }

  /* ------------------------------------------------------------------ AVIS */
  function renderAvis() {
    var grid = $('#avis-grid');
    if (!grid || !D.avis) return;
    grid.innerHTML = D.avis.map(function (a, i) {
      var etoiles = '';
      for (var k = 0; k < 5; k++) etoiles += k < a.note ? '★' : '☆';
      return '<figure class="avis reveal tilt" data-delay="' + (i * 120) + '">' +
        '<div class="avis__top"><span class="avis__stars" aria-label="' + a.note + '/5">' + etoiles + '</span>' +
        '<span class="avis__note">5,0</span></div>' +
        '<blockquote class="avis__txt">' + esc(t(a.texte)) + '</blockquote>' +
        '<figcaption class="avis__nom">— ' + esc(a.nom) + '</figcaption></figure>';
    }).join('');
  }

  /* ------------------------------------------- COMMANDE DIRECTE UBER EATS */
  function commandeDirecte() {
    var url = ((D.commande || {}).plateformes || []).filter(function (p) { return p.actif; })[0];
    if (!url) return;
    $$('[data-commande]').forEach(function (a) {
      a.href = url.url; a.target = '_blank'; a.rel = 'noopener';
    });
  }

  /* ---------------------------------------------------------------- GALERIE */
  function renderGalerie() {
    var grid = $('#galerie-grid');
    if (!grid || !D.galerie) return;
    var formes = ['gal--wide gal--tall', '', 'gal--tall', '', 'gal--wide', ''];
    grid.innerHTML = D.galerie.map(function (g, i) {
      var alt = t(g.alt);
      return '<button class="gal ' + (formes[i % formes.length] || '') + '" data-gal="' + i + '" ' +
             'aria-label="' + esc(ui('galerie.agrandir') + ' ' + alt) + '">' +
             '<img src="' + g.src + '" alt="' + esc(alt) + '" loading="lazy"' + dims(g.src) + '>' +
             '<span class="gal__zoom" aria-hidden="true">+</span></button>';
    }).join('');
    $$('.gal', grid).forEach(function (b) { b.addEventListener('click', function () { openLightbox(+b.dataset.gal); }); });
  }

  /* --------------------------------------------------------------- HORAIRES */
  function creneauxDu(iso) {
    var l = D.horaires || [];
    for (var i = 0; i < l.length; i++) if (l[i].jours.indexOf(iso) !== -1) return l[i].creneaux || [];
    return [];
  }
  function toMin(h) { var p = String(h).split(':'); return (+p[0]) * 60 + (+p[1] || 0); }
  function fmtCreneaux(cr) {
    if (!cr || !cr.length) return ui('statut.ferme');
    return cr.map(function (c) { return c.replace('-', ' – '); }).join('  ·  ');
  }
  /** ISO : 1 = lundi … 7 = dimanche ; JS : 0 = dimanche */
  function isoDuJour(d) { return d === 0 ? 7 : d; }
  function domDeIso(iso) { return iso % 7; }

  function renderHoraires() {
    var ul = $('#hours-list');
    if (ul) {
      var auj = isoDuJour(new Date().getDay());
      var html = '';
      for (var iso = 1; iso <= 7; iso++) {
        var cr = creneauxDu(iso);
        html += '<li class="' + (iso === auj ? 'is-today' : '') + (cr.length ? '' : ' is-off') + '">' +
                '<span class="h-day">' + (iso === auj ? ui('contact.aujourdhui') : '') + ui('jour.' + iso) + '</span>' +
                '<span class="h-val">' + fmtCreneaux(cr) + '</span></li>';
      }
      ul.innerHTML = html;
    }
    var note = $('#hours-note');
    if (note) note.textContent = t(D.horairesNote);
    majStatut();
  }

  /**
   * Gère les services qui dépassent minuit (ex. 18:00-01:00) :
   * on teste le créneau du jour ET celui de la veille décalé de -24 h.
   */
  function etatMaintenant() {
    var now = new Date();
    var iso = isoDuJour(now.getDay());
    var mins = now.getHours() * 60 + now.getMinutes();
    var i, p, o, f;

    var aujourdhui = creneauxDu(iso);
    for (i = 0; i < aujourdhui.length; i++) {
      p = aujourdhui[i].split('-'); o = toMin(p[0]); f = toMin(p[1]);
      if (f <= o) f += 1440;
      if (mins >= o && mins < f) return { ouvert: true };
    }
    // Créneau de la veille qui déborde sur aujourd'hui (ex. hier 18:00-01:00) :
    // dans le repère du jour, il s'étend de (o - 1440) à f.
    var hier = creneauxDu(iso === 1 ? 7 : iso - 1);
    for (i = 0; i < hier.length; i++) {
      p = hier[i].split('-'); o = toMin(p[0]); f = toMin(p[1]);
      if (f <= o && mins >= o - 1440 && mins < f) return { ouvert: true };
    }
    for (i = 0; i < aujourdhui.length; i++) {
      if (mins < toMin(aujourdhui[i].split('-')[0])) return { ouvert: false, ouvre: aujourdhui[i].split('-')[0] };
    }
    var iso2 = iso % 7 + 1;
    var demain = creneauxDu(iso2);
    if (demain.length) return { ouvert: false, demain: ui('jourc.' + iso2) + ' ' + demain[0].split('-')[0] };
    return { ouvert: false };
  }
  function majStatut() {
    var s = $('#status');
    if (!s) return;
    var e = etatMaintenant();
    var txt = $('.status__txt', s);
    s.classList.toggle('is-open', e.ouvert);
    s.classList.toggle('is-closed', !e.ouvert);
    txt.textContent = e.ouvert ? ui('statut.ouvert')
      : e.ouvre ? ui('statut.ouvreA') + ' ' + e.ouvre
      : e.demain ? ui('statut.ferme') + ' · ' + e.demain
      : ui('statut.ferme');
  }

  /* -------------------------------------------------------- BOUTONS COMMANDE */
  function renderCommande() {
    var box = $('#footer-btns');
    if (!box || !D.commande) return;
    $$('.btn', box).forEach(function (b) { if (b.id !== 'footer-tel') b.remove(); });
    (D.commande.plateformes || []).forEach(function (p) {
      if (!p.actif) return;
      var a = document.createElement('a');
      a.className = 'btn btn--ghost btn--lg magnetic';
      a.href = p.url; a.target = '_blank'; a.rel = 'noopener';
      a.setAttribute('data-cursor', p.nom);
      a.textContent = p.nom;
      box.appendChild(a);
    });
    var tel = $('#footer-tel');
    if (tel) tel.style.display = D.commande.telephoneActif === false ? 'none' : '';
  }

  /* =========================================================================
   * D. TYPOGRAPHIE CINÉTIQUE (ré-exécutable après changement de langue)
   * =======================================================================*/
  function splitLettres() {
    $$('[data-letters]').forEach(function (el) {
      if (el.dataset.lettres === '1') return;
      el.dataset.lettres = '1';
      var txt = el.textContent;
      el.textContent = '';
      var i = 0;
      txt.split('').forEach(function (ch) {
        var s = document.createElement('span');
        s.className = 'ltr';
        s.style.setProperty('--d', i * 38);
        s.textContent = ch === ' ' ? '\u00A0' : ch;
        el.appendChild(s);
        i++;
      });
    });
  }

  /**
   * Transforme chaque <span class="ml-src"> d'un .reveal-mask en ligne masquée.
   * Le span d'origine (et son data-i18n) est conservé à l'intérieur.
   */
  function splitLignes() {
    $$('.reveal-mask').forEach(function (h) {
      if (h.dataset.split === '1') return;
      h.dataset.split = '1';
      var srcs = $$('.ml-src', h);
      if (srcs.length) {
        var frag = document.createDocumentFragment();
        srcs.forEach(function (s) {
          var w = document.createElement('span'); w.className = 'ml';
          var it = document.createElement('i'); it.appendChild(s);
          w.appendChild(it); frag.appendChild(w);
        });
        h.innerHTML = '';
        h.appendChild(frag);
      } else {
        var parties = h.innerHTML.split(/<br\s*\/?>/i);
        h.innerHTML = '';
        parties.forEach(function (p) {
          var w = document.createElement('span'); w.className = 'ml';
          var it = document.createElement('i'); it.innerHTML = p.trim();
          w.appendChild(it); h.appendChild(w);
        });
      }
      $$('.ml > i', h).forEach(function (it, i) { it.style.transitionDelay = (i * 90) + 'ms'; });
    });
  }

  /* =========================================================================
   * E. RÉVÉLATIONS AU SCROLL
   * =======================================================================*/
  var io = null, dejaVu = null;
  function observeReveals() {
    if (!io) {
      dejaVu = typeof WeakSet === 'function' ? new WeakSet() : null;
      io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          var d = +(e.target.dataset.delay || 0);
          setTimeout(function () { e.target.classList.add('is-in'); }, reduce ? 0 : d);
          io.unobserve(e.target);
        });
      }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
    }
    $$('.reveal, .reveal-mask').forEach(function (el) {
      if (el.classList.contains('is-in')) return;
      if (dejaVu) { if (dejaVu.has(el)) return; dejaVu.add(el); }
      io.observe(el);
    });
  }

  var io2 = null, dejaCompte = null;
  function observeCompteurs() {
    if (!io2) {
      dejaCompte = typeof WeakSet === 'function' ? new WeakSet() : null;
      io2 = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          countUp(e.target);
          io2.unobserve(e.target);
        });
      }, { threshold: 0.6 });
    }
    $$('[data-count]').forEach(function (el) {
      if (dejaCompte) { if (dejaCompte.has(el)) return; dejaCompte.add(el); }
      io2.observe(el);
    });
  }

  function countUp(el) {
    var txt = el.dataset.count;
    var m = txt.match(/^(\d+(?:[.,]\d+)?)(.*)$/);
    if (!m || reduce) { el.textContent = txt; return; }
    var cible = parseFloat(m[1].replace(',', '.'));
    var suffixe = m[2] || '';
    var dec = (m[1].indexOf(',') !== -1 || m[1].indexOf('.') !== -1) ? 1 : 0;
    var t0 = performance.now(), dur = 1400;
    (function f(now) {
      var p = Math.min(1, (now - t0) / dur);
      var v = cible * (1 - Math.pow(1 - p, 3));
      el.textContent = v.toFixed(dec).replace('.', ',') + suffixe;
      if (p < 1) requestAnimationFrame(f); else el.textContent = txt;
    })(t0);
  }

  /* =========================================================================
   * F. SCROLL
   * =======================================================================*/
  function scrollFx() {
    var bar = $('#progress span');
    var nav = $('#nav');
    var parallax = $$('.parallax');
    var last = 0, ticking = false;

    function update() {
      var y = window.scrollY;
      var h = document.documentElement.scrollHeight - window.innerHeight;
      if (bar) bar.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
      if (nav) {
        nav.classList.toggle('is-stuck', y > 40);
        if (y > 260 && y > last + 4) nav.classList.add('is-hidden');
        else if (y < last - 4 || y < 200) nav.classList.remove('is-hidden');
      }
      last = y;
      if (!reduce) {
        var vh = window.innerHeight;
        parallax.forEach(function (el) {
          var r = el.getBoundingClientRect();
          if (r.bottom < -200 || r.top > vh + 200) return;
          var sp = parseFloat(el.dataset.speed || 0.06);
          el.style.transform = 'translate3d(0,' + ((r.top + r.height / 2 - vh / 2) * -sp).toFixed(2) + 'px,0)';
        });
      }
      ticking = false;
    }
    function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(update); } }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();
  }

  function navActive() {
    var links = $$('[data-navlink]');
    if (!links.length) return;
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var id = e.target.id;
        links.forEach(function (l) { l.classList.toggle('is-active', l.getAttribute('href') === '#' + id); });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    links.forEach(function (l) {
      var cible = document.getElementById(l.getAttribute('href').slice(1));
      if (cible) obs.observe(cible);
    });
  }

  /* =========================================================================
   * G. MARQUEES
   * =======================================================================*/
  function marquees() {
    $$('[data-marquee]').forEach(function (tr) {
      var base = parseFloat(tr.dataset.speed || 40);
      function set() {
        var w = tr.scrollWidth / 2 || 1;
        tr.style.setProperty('--dur', (w / (900 / base)).toFixed(1) + 's');
      }
      set();
      if (!tr.dataset.marqueeInit) {
        tr.dataset.marqueeInit = '1';
        window.addEventListener('resize', set);
      }
      tr._marqueeSet = set;
    });
  }
  function rafraichirMarquees() {
    $$('[data-marquee]').forEach(function (tr) { if (tr._marqueeSet) tr._marqueeSet(); });
  }

  /* =========================================================================
   * H. INTERACTIONS
   * =======================================================================*/
  function menuMobile() {
    var btn = $('#nav-burger'), menu = $('#menu-mobile');
    if (!btn || !menu) return;
    $$('nav a', menu).forEach(function (a, i) { a.style.setProperty('--n', (i * 0.06) + 's'); });
    function setOpen(on) {
      btn.setAttribute('aria-expanded', on);
      btn.setAttribute('aria-label', on ? ui('nav.fermer') : ui('nav.ouvrir'));
      menu.classList.toggle('is-open', on);
      menu.setAttribute('aria-hidden', !on);
      document.body.classList.toggle('is-locked', on);
    }
    btn.addEventListener('click', function () { setOpen(btn.getAttribute('aria-expanded') !== 'true'); });
    $$('a', menu).forEach(function (a) { a.addEventListener('click', function () { setOpen(false); }); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
    menuMobile._setOpen = setOpen;
  }

  function curseur() {
    var c = $('#cursor');
    if (!c || isTouch || reduce) { if (c) c.remove(); return; }
    var dot = $('.cursor__dot', c), label = $('.cursor__label', c);
    var x = 0, y = 0, cx = 0, cy = 0;
    document.addEventListener('mousemove', function (e) {
      x = e.clientX; y = e.clientY;
      c.classList.add('is-on');
      if (dot) dot.style.transform = 'translate(' + (x - 2.5) + 'px,' + (y - 2.5) + 'px)';
    });
    (function loop() {
      cx += (x - cx) * 0.18; cy += (y - cy) * 0.18;
      c.style.transform = 'translate(' + cx + 'px,' + cy + 'px)';
      requestAnimationFrame(loop);
    })();
    document.addEventListener('mouseleave', function () { c.classList.remove('is-on'); });
    document.addEventListener('mouseover', function (e) {
      var hot = e.target.closest('a, button, .gal, .sig, .couche, .emp, input, textarea');
      if (hot) {
        c.classList.add('is-hot');
        if (label) label.textContent = hot.getAttribute('data-cursor') || '';
      } else {
        c.classList.remove('is-hot');
        if (label) label.textContent = '';
      }
    });
  }

  function magnetiques() {
    if (isTouch || reduce) return;
    $$('.magnetic').forEach(function (el) {
      if (el.dataset.fx === '1') return;
      el.dataset.fx = '1';
      el.addEventListener('mousemove', function (e) {
        var r = el.getBoundingClientRect();
        el.style.transform = 'translate(' + ((e.clientX - r.left - r.width / 2) * 0.22) + 'px,' +
                                          ((e.clientY - r.top - r.height / 2) * 0.32) + 'px)';
      });
      el.addEventListener('mouseleave', function () { el.style.transform = ''; });
    });
  }

  function tilt() {
    if (isTouch || reduce) return;
    $$('.tilt').forEach(function (el) {
      if (el.dataset.fx === '1') return;
      el.dataset.fx = '1';
      el.addEventListener('mousemove', function (e) {
        var r = el.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width - 0.5;
        var py = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = 'translateY(-8px) perspective(900px) rotateX(' + (-py * 5) + 'deg) rotateY(' + (px * 6) + 'deg)';
      });
      el.addEventListener('mouseleave', function () { el.style.transform = ''; });
    });
  }

  function rails() {
    $$('[data-draggable]').forEach(function (rail) {
      if (rail.dataset.fx === '1') return;
      rail.dataset.fx = '1';
      var down = false, startX = 0, startL = 0, moved = false;
      rail.style.cursor = 'grab';
      rail.addEventListener('pointerdown', function (e) {
        if (e.pointerType === 'touch') return;
        down = true; moved = false; startX = e.clientX; startL = rail.scrollLeft;
        rail.style.cursor = 'grabbing';
      });
      window.addEventListener('pointermove', function (e) {
        if (!down) return;
        var dx = e.clientX - startX;
        if (Math.abs(dx) > 4) moved = true;
        rail.scrollLeft = startL - dx;
      });
      window.addEventListener('pointerup', function () { down = false; rail.style.cursor = 'grab'; });
      rail.addEventListener('click', function (e) { if (moved) e.preventDefault(); }, true);
    });

    var emp = $('#emp-rail'), prev = $('#emp-prev'), next = $('#emp-next');
    if (emp && prev && next && !emp.dataset.navFx) {
      emp.dataset.navFx = '1';
      var pas = function () { var c = emp.querySelector('.emp'); return c ? c.offsetWidth + 22 : 320; };
      prev.addEventListener('click', function () { emp.scrollBy({ left: -pas(), behavior: reduce ? 'auto' : 'smooth' }); });
      next.addEventListener('click', function () { emp.scrollBy({ left: pas(), behavior: reduce ? 'auto' : 'smooth' }); });
    }
  }

  function motRotatif() {
    var el = $('#hero-mot');
    if (!el || motRotatif._timer) return;
    function mots() { return t((D.hero || {}).motsRotatifs) || []; }
    var i = 0;
    motRotatif._timer = setInterval(function () {
      var liste = mots();
      if (liste.length < 2) return;
      i = (i + 1) % liste.length;
      el.classList.add('is-swap');
      setTimeout(function () { el.textContent = liste[i]; }, 260);
      setTimeout(function () { el.classList.remove('is-swap'); }, 560);
    }, 2600);
  }

  function selecteurLangue() {
    $$('[data-lang]').forEach(function (b) {
      if (b.dataset.fx === '1') return;
      b.dataset.fx = '1';
      b.addEventListener('click', function () { setLang(b.dataset.lang); });
    });
  }

  /* -------------------------------------------------------------- LIGHTBOX */
  var lbIndex = 0, lbLastFocus = null;
  function openLightbox(i) {
    var lb = $('#lightbox');
    if (!lb || !D.galerie) return;
    lbIndex = i;
    lbLastFocus = document.activeElement;
    majLightbox();
    lb.hidden = false;
    requestAnimationFrame(function () { lb.classList.add('is-open'); });
    document.body.classList.add('is-locked');
    $('#lb-close').focus();
  }
  function majLightbox() {
    var g = D.galerie[lbIndex];
    if (!g) return;
    $('#lb-img').src = g.src;
    $('#lb-img').alt = t(g.alt);
    $('#lb-cap').textContent = (lbIndex + 1) + ' / ' + D.galerie.length + ' — ' + t(g.alt);
  }
  function closeLightbox() {
    var lb = $('#lightbox');
    if (!lb) return;
    lb.classList.remove('is-open');
    setTimeout(function () { lb.hidden = true; }, 320);
    document.body.classList.remove('is-locked');
    if (lbLastFocus) lbLastFocus.focus();
  }
  function lightbox() {
    var lb = $('#lightbox');
    if (!lb || lb.dataset.fx === '1') return;
    lb.dataset.fx = '1';
    $('#lb-close').addEventListener('click', closeLightbox);
    $('#lb-prev').addEventListener('click', function () { lbIndex = (lbIndex - 1 + D.galerie.length) % D.galerie.length; majLightbox(); });
    $('#lb-next').addEventListener('click', function () { lbIndex = (lbIndex + 1) % D.galerie.length; majLightbox(); });
    lb.addEventListener('click', function (e) { if (e.target === lb) closeLightbox(); });
    document.addEventListener('keydown', function (e) {
      if (lb.hidden) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') $('#lb-prev').click();
      if (e.key === 'ArrowRight') $('#lb-next').click();
    });
  }

  /* ------------------------------------------------------------- FORMULAIRE */
  function formulaire() {
    var form = $('#contact-form');
    if (!form || form.dataset.fx === '1') return;
    form.dataset.fx = '1';
    var ok = $('#form-ok');
    var cfg = D.contact || { mode: 'mailto' };

    function setErr(input, msg) {
      var f = input.closest('.field');
      var e = $('.field__err', f);
      f.classList.toggle('has-err', !!msg);
      if (e) e.textContent = msg || '';
      input.setAttribute('aria-invalid', msg ? 'true' : 'false');
      return !msg;
    }
    function valider() {
      var a = $('#f-nom'), b = $('#f-contact'), c = $('#f-msg');
      var okA = setErr(a, a.value.trim().length < 2 ? ui('contact.errNom') : '');
      var v = b.value.trim();
      var valide = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(v) || /^(?:\+33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/.test(v);
      var okB = setErr(b, valide ? '' : ui('contact.errContact'));
      var okC = setErr(c, c.value.trim().length < 10 ? ui('contact.errMessage') : '');
      return okA && okB && okC;
    }
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!valider()) return;
      var sujet = ui('contact.mailtoSujet') + $('#f-nom').value.trim();
      var corps = ui('contact.corpsNom') + $('#f-nom').value.trim() + '\n' +
                  ui('contact.corpsContact') + $('#f-contact').value.trim() + '\n\n' +
                  $('#f-msg').value.trim();

      if (cfg.mode === 'endpoint' && cfg.endpoint && cfg.endpoint.indexOf('VOTRE_ID') === -1) {
        fetch(cfg.endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ nom: $('#f-nom').value, contact: $('#f-contact').value, message: $('#f-msg').value })
        }).then(function () {
          ok.textContent = t(cfg.messageSucces);
          form.reset();
        }).catch(function () { ok.textContent = ui('contact.errContact'); });
      } else {
        window.location.href = 'mailto:' + ((D.coordonnees || {}).email || '') +
          '?subject=' + encodeURIComponent(sujet) + '&body=' + encodeURIComponent(corps);
        ok.textContent = t(cfg.messageSucces);
        form.reset();
      }
    });
  }

  /* =========================================================================
   * I. CHANGEMENT DE LANGUE
   * =======================================================================*/
  function setLang(nouveau) {
    if ((D.langues || ['fr', 'en']).indexOf(nouveau) === -1 || nouveau === lang) return;
    lang = nouveau;
    try { window.localStorage.setItem(LANG_KEY, lang); } catch (e) { /* stockage indisponible */ }
    majBoutonsLangue();
    applyI18n();
    injecter();
    observeReveals();
    observeCompteurs();
    imageReveals();
    rafraichirMarquees();
    majStatut();
    if (menuMobile._setOpen) menuMobile._setOpen(false);
  }

  /* =========================================================================
   * I2. V3 — RÉVÉLATIONS D'IMAGES, BURGER, HÉROS VIVANT, PROJECTEUR, STATEMENT
   * =======================================================================*/
  var ioImg = null, dejaImg = null;
  function imageReveals() {
    var sel = '.sig__media,.couche__media,.emp,.gal,.stack__media';
    if (reduce) { $$(sel).forEach(function (el) { el.classList.add('img-in'); }); return; }
    if (!ioImg) {
      dejaImg = typeof WeakSet === 'function' ? new WeakSet() : null;
      ioImg = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          e.target.classList.add('img-in');
          ioImg.unobserve(e.target);
        });
      }, { threshold: 0.2, rootMargin: '0px 0px -6% 0px' });
    }
    $$(sel).forEach(function (el) {
      if (el.classList.contains('img-in')) return;
      if (dejaImg) { if (dejaImg.has(el)) return; dejaImg.add(el); }
      ioImg.observe(el);
    });
  }

  var ioAnim = null, dejaAnim = null;
  function observeAnimate() {
    if (!ioAnim) {
      dejaAnim = typeof WeakSet === 'function' ? new WeakSet() : null;
      ioAnim = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          e.target.classList.add('is-in');
          ioAnim.unobserve(e.target);
        });
      }, { threshold: 0.3 });
    }
    $$('[data-animate]').forEach(function (el) {
      if (el.classList.contains('is-in')) return;
      if (dejaAnim) { if (dejaAnim.has(el)) return; dejaAnim.add(el); }
      ioAnim.observe(el);
    });
  }

  function herosVivant() {
    var floatBox = $('.hero__float');
    if (!floatBox || isTouch || reduce) return;
    window.addEventListener('mousemove', function (e) {
      var nx = (e.clientX / window.innerWidth - 0.5) * 2;
      var ny = (e.clientY / window.innerHeight - 0.5) * 2;
      floatBox.style.setProperty('--mx', nx.toFixed(3));
      floatBox.style.setProperty('--my', ny.toFixed(3));
    }, { passive: true });
  }

  function projecteur() {
    if (isTouch || reduce) return;
    var sp = document.createElement('div');
    sp.className = 'spotlight';
    sp.setAttribute('aria-hidden', 'true');
    document.body.appendChild(sp);
    var x = window.innerWidth / 2, y = window.innerHeight / 2, cx = x, cy = y, actif = false;
    document.addEventListener('mousemove', function (e) {
      x = e.clientX; y = e.clientY;
      if (!actif) { actif = true; sp.classList.add('is-on'); }
    }, { passive: true });
    document.addEventListener('mouseleave', function () { sp.classList.remove('is-on'); actif = false; });
    (function loop() {
      cx += (x - cx) * 0.12; cy += (y - cy) * 0.12;
      sp.style.transform = 'translate(' + cx.toFixed(1) + 'px,' + cy.toFixed(1) + 'px)';
      requestAnimationFrame(loop);
    })();
  }

  /* Une pluie de braises jaillit du bouton « Commander » (ouvre Uber Eats). */
  function etincelles() {
    if (reduce) return;
    var couche = document.createElement('div');
    couche.className = 'embers';
    couche.setAttribute('aria-hidden', 'true');
    document.body.appendChild(couche);
    document.addEventListener('click', function (e) {
      var btn = e.target && e.target.closest ? e.target.closest('[data-commande]') : null;
      if (!btn) return;
      var r = btn.getBoundingClientRect();
      var x = e.clientX || (r.left + r.width / 2);
      var y = e.clientY || (r.top + r.height / 2);
      for (var i = 0; i < 14; i++) {
        var s = document.createElement('span');
        s.className = 'ember';
        var ang = Math.random() * Math.PI * 2;
        var dist = 40 + Math.random() * 90;
        s.style.left = x + 'px';
        s.style.top = y + 'px';
        s.style.setProperty('--dx', (Math.cos(ang) * dist).toFixed(1) + 'px');
        s.style.setProperty('--dy', (Math.sin(ang) * dist - 30).toFixed(1) + 'px');
        s.style.animationDelay = (Math.random() * 80).toFixed(0) + 'ms';
        couche.appendChild(s);
        (function (el) { setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 950); })(s);
      }
    });
  }

  function statementFx() {
    var st = $('.statement'), word = $('.statement__word');
    if (!st || !word || reduce) return;
    var ticking = false;
    function update() {
      var r = st.getBoundingClientRect();
      var vh = window.innerHeight || 1;
      var a = Math.min(Math.abs((r.top + r.height / 2 - vh / 2) / vh), 1);
      word.style.setProperty('--s', (1 + a * 0.28).toFixed(3));
      word.style.setProperty('--o', Math.max(0, 1 - a * 1.15).toFixed(3));
      ticking = false;
    }
    function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(update); } }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();
  }

  /* --- Titres « décodés » à l'entrée dans l'écran --- */
  function decodeTitres() {
    if (reduce) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);
        var span = e.target.querySelector('span[data-i18n]') || e.target;
        scramble(span, span.textContent, 650);
      });
    }, { threshold: 0.6 });
    $$('.eyebrow').forEach(function (el) { io.observe(el); });
  }

  /* --- Bouton flottant « retour en haut » --- */
  function retourHaut() {
    var b = document.createElement('button');
    b.className = 'totop';
    b.type = 'button';
    b.setAttribute('aria-label', ui('a11y.haut'));
    b.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4l8 8-1.4 1.4L13 7.8V20h-2V7.8l-5.6 5.6L4 12z"/></svg>';
    document.body.appendChild(b);
    function maj() { b.classList.toggle('is-show', window.scrollY > 600); }
    window.addEventListener('scroll', maj, { passive: true });
    maj();
    b.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
    });
  }

  /* =========================================================================
   * J. DÉMARRAGE
   * =======================================================================*/
  function init() {
    lang = langueInitiale();
    majBoutonsLangue();
    applyI18n();
    injecter();
    splitLettres();
    splitLignes();
    marquees();
    observeReveals();
    observeCompteurs();
    imageReveals();
    observeAnimate();
    herosVivant();
    projecteur();
    statementFx();
    decodeTitres();
    retourHaut();
    etincelles();
    scrollFx();
    navActive();
    menuMobile();
    curseur();
    magnetiques();
    tilt();
    rails();
    motRotatif();
    lightbox();
    formulaire();
    selecteurLangue();
    setInterval(majStatut, 60000);
    document.body.classList.add('is-ready');
  }

  // Exposés pour les tests
  window.SO_GOOD_APP = {
    getLang: function () { return lang; },
    setLang: setLang,
    ui: ui, t: t, prix: prix, prixAffiche: prixAffiche,
    etatMaintenant: etatMaintenant,
    adresseComplete: adresseComplete
  };

  preloader(init);
})();
