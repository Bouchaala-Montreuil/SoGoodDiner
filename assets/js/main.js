/* ============================================================================
   SO GOOD DINER — main.js
   Vanilla JS, aucune dépendance. Toutes les animations et interactions.
   ========================================================================== */
(function () {
  'use strict';

  var D = window.SO_GOOD || {};
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;
  var JOURS = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
  var JOURS_C = ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'];

  /* =========================================================================
   * 0. PRÉCHARGEUR
   * =======================================================================*/
  function preloader(done) {
    var el = $('#preloader');
    if (!el) { done(); return; }
    if (reduce) { el.remove(); done(); return; }

    var count = $('#preloader-count');
    var bar = $('#preloader-bar');
    var label = $('[data-scramble]');
    var target = 100, cur = 0;
    var t0 = performance.now();
    var DUREE = 1500;

    if (label) scramble(label, label.dataset.scramble || label.textContent, 1200);

    (function tick(now) {
      var p = Math.min(1, (now - t0) / DUREE);
      cur = Math.round(100 * (1 - Math.pow(1 - p, 3))); // easeOutCubic
      if (count) count.textContent = cur;
      if (bar) bar.style.width = cur + '%';
      if (p < 1) { requestAnimationFrame(tick); }
      else {
        el.classList.add('is-done');
        setTimeout(function () {
          el.classList.add('is-out');
          setTimeout(function () { el.remove(); }, 1200);
          done();
        }, 260);
      }
    })(t0);

    // Filet de sécurité : ne jamais bloquer le site
    setTimeout(function () { if (document.body.contains(el)) { el.classList.add('is-out'); setTimeout(function () { el.remove(); }, 1200); done(); } }, 4500);
  }

  /* Effet « texte qui se décode » */
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
   * 1. INJECTION DU CONTENU
   * =======================================================================*/
  function adresseComplete() {
    var c = D.coordonnees || {};
    return [c.adresse, c.complement, c.codePostal + ' ' + c.ville].filter(Boolean).join(', ');
  }
  function mapsUrl() {
    var a = D.annonce || {};
    if (a.lien) return a.lien;
    return 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(adresseComplete());
  }
  function telHref() {
    var t = (D.coordonnees || {}).telephoneLien;
    return t ? 'tel:' + t.replace(/[^+\d]/g, '') : '#';
  }

  function injecter() {
    var C = D.coordonnees || {};
    var E = D.etablissement || {};
    var H = D.hero || {};

    if (D.seo && D.seo.titre) document.title = D.seo.titre;
    if (D.seo && D.seo.description) {
      var meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute('content', D.seo.description);
    }

    // Hero
    if ($('#hero-l1')) $('#hero-l1').textContent = H.ligne1 || '';
    if ($('#hero-l2')) $('#hero-l2').textContent = H.ligne2 || '';
    if ($('#hero-texte')) $('#hero-texte').textContent = H.texte || '';
    if ($('#hero-mot')) $('#hero-mot').textContent = (H.motsRotatifs || ['bon'])[0];

    // Coordonnées
    if ($('#addr-ligne1')) $('#addr-ligne1').textContent = [C.adresse, C.complement].filter(Boolean).join(' · ');
    if ($('#addr-ligne2')) $('#addr-ligne2').textContent = (C.codePostal || '') + ' ' + (C.ville || '');
    if ($('#tel-link')) { $('#tel-link').textContent = C.telephone || '—'; $('#tel-link').href = telHref(); }
    if ($('#mobile-addr')) $('#mobile-addr').textContent = adresseComplete();
    if ($('#foot-addr')) $('#foot-addr').textContent = adresseComplete();
    if ($('#foot-tel')) { $('#foot-tel').textContent = C.telephone || '—'; $('#foot-tel').href = telHref(); }
    if ($('#foot-mail')) { $('#foot-mail').textContent = C.email || '—'; $('#foot-mail').href = 'mailto:' + (C.email || ''); }
    if ($('#tel-btn')) $('#tel-btn').href = telHref();
    if ($('#footer-tel')) $('#footer-tel').href = telHref();
    if ($('#itineraire')) $('#itineraire').href = mapsUrl();
    if ($('#year')) $('#year').textContent = new Date().getFullYear();

    // Annonce
    if ($('#annonce-texte') && D.annonce) $('#annonce-texte').textContent = D.annonce.texte || '';

    // Carte OpenStreetMap (aucune clé API requise)
    var mapEl = $('#map-frame');
    if (mapEl && C.geo) {
      var d = 0.008;
      var bbox = [C.geo.lon - d, C.geo.lat - d * 0.7, C.geo.lon + d, C.geo.lat + d * 0.7].join(',');
      mapEl.innerHTML =
        '<iframe title="Carte — emplacement du restaurant" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="' +
        'https://www.openstreetmap.org/export/embed.html?bbox=' + bbox +
        '&layer=mapnik&marker=' + C.geo.lat + ',' + C.geo.lon + '"></iframe>';
    }

    // Chiffres
    var stats = $('#stats-list');
    if (stats && D.chiffres) {
      stats.innerHTML = D.chiffres.map(function (s) {
        return '<li class="reveal"><span class="stats__val" data-count="' + s.valeur + '">' + s.valeur +
               '</span><span class="stats__lab">' + s.libelle + '</span></li>';
      }).join('');
    }

    // Ticker
    if (D.ticker) {
      $$('[data-marquee]').forEach(function (t) {
        if (t.id === 'avis-track') return; // rempli par renderAvis()
        var html = D.ticker.map(function (w) { return '<span>' + w + '</span>'; }).join('');
        t.innerHTML = html + html; // doublé pour une boucle parfaite
      });
    }
    // Ticker du footer : le nom en très grand
    $$('.footer__marquee [data-marquee]').forEach(function (t) {
      var one = '<span>' + (E.nom || 'So Good Diner') + '</span>';
      t.innerHTML = one.repeat(4) + one.repeat(4);
    });

    // Signatures
    var sig = $('#sig-grid');
    if (sig && D.signatures) {
      sig.innerHTML = D.signatures.map(function (s) {
        return '<article class="sig reveal tilt">' +
          '<div class="sig__media"><img src="' + s.image + '" alt="' + esc(s.nom) + '" loading="lazy">' +
          (s.badge ? '<span class="sig__badge">' + esc(s.badge) + '</span>' : '') + '</div>' +
          '<div class="sig__body"><div class="sig__top"><h3 class="sig__nom">' + esc(s.nom) + '</h3>' +
          '<span class="sig__prix">' + esc(s.prix) + '</span></div>' +
          '<p class="sig__desc">' + esc(s.description) + '</p></div></article>';
      }).join('');
    }

    // Couches
    var rail = $('#couches-rail');
    if (rail && D.couches) {
      rail.innerHTML = D.couches.map(function (c) {
        return '<article class="couche reveal"><div class="couche__media"><img src="' + c.image +
               '" alt="' + esc(c.titre) + '" loading="lazy"></div><div class="couche__body">' +
               '<span class="couche__num">' + c.num + '</span><h3>' + esc(c.titre) + '</h3>' +
               '<p>' + esc(c.texte) + '</p></div></article>';
      }).join('');
    }

    // À emporter
    var emp = $('#emp-rail');
    if (emp && D.emporter) {
      emp.innerHTML = D.emporter.map(function (e, i) {
        return '<article class="emp reveal"><img src="' + e.image + '" alt="' + esc(e.lieu) + '" loading="lazy">' +
               '<span class="emp__idx">0' + (i + 1) + '</span><div class="emp__body">' +
               '<h3 class="emp__lieu">' + esc(e.lieu) + '</h3><p class="emp__txt">' + esc(e.texte) + '</p></div></article>';
      }).join('');
    }

    renderCarte();
    renderAvis();
    renderGalerie();
    renderHoraires();
    renderCommande();
  }

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (m) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m];
    });
  }

  /* ---------------------------------------------------------------- LA CARTE */
  function renderCarte() {
    var tabs = $('#carte-tabs'), panels = $('#carte-panels');
    if (!tabs || !panels || !D.carte) return;
    var CHIPS = {
      vegetarien: '<span class="chip chip--veg">végé</span>',
      'best-seller': '<span class="chip chip--best">best-seller</span>',
      nouveau: '<span class="chip chip--new">nouveau</span>',
      epice: '<span class="chip chip--hot">épicé</span>'
    };

    tabs.innerHTML = D.carte.map(function (c, i) {
      return '<button class="tab" role="tab" id="tab-' + c.id + '" aria-controls="panel-' + c.id +
             '" aria-selected="' + (i === 0) + '" tabindex="' + (i === 0 ? 0 : -1) + '">' + esc(c.titre) + '</button>';
    }).join('');

    panels.innerHTML = D.carte.map(function (c, i) {
      var items = (c.items || []).map(function (it) {
        var chips = (it.tags || []).map(function (t) { return CHIPS[t] || ''; }).join(' ');
        return '<div class="item"><h3 class="item__nom">' + esc(it.nom) + ' ' + chips + '</h3>' +
               '<span class="item__prix">' + esc(it.prix) + '</span>' +
               (it.desc ? '<p class="item__desc">' + esc(it.desc) + '</p>' : '') + '</div>';
      }).join('');
      return '<div class="carte__panel' + (i === 0 ? ' is-active' : '') + '" role="tabpanel" id="panel-' + c.id +
             '" aria-labelledby="tab-' + c.id + '"' + (i === 0 ? '' : ' hidden') + '>' +
             (c.sousTitre ? '<p class="carte__sous">' + esc(c.sousTitre) + '</p>' : '') +
             '<div class="carte__items">' + items + '</div></div>';
    }).join('');

    var mention = $('#carte-mention');
    if (mention) mention.textContent = D.brouillon ? ('⚠ ' + (D.carteMention || '')) : (D.carteMention || '');

    var btns = $$('.tab', tabs);
    function select(idx, focus) {
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

  /* ------------------------------------------------------------------- AVIS */
  function renderAvis() {
    var track = $('#avis-track');
    if (!track || !D.avis) return;
    var html = D.avis.map(function (a) {
      return '<article class="review"><div class="review__stars" aria-label="' + a.note +
             ' étoiles sur 5">' + '★'.repeat(a.note) + '<span style="opacity:.25">' + '★'.repeat(5 - a.note) + '</span></div>' +
             '<p class="review__txt">' + esc(a.texte) + '</p>' +
             '<div class="review__meta"><b>' + esc(a.auteur) + '</b><span>' + esc(a.date) + '</span></div></article>';
    }).join('');
    track.innerHTML = html + html;
    var note = $('#avis-note');
    if (note && D.avis.length) {
      var moy = D.avis.reduce(function (s, a) { return s + a.note; }, 0) / D.avis.length;
      note.textContent = moy.toFixed(1).replace('.', ',');
    }
  }

  /* ---------------------------------------------------------------- GALERIE */
  function renderGalerie() {
    var grid = $('#galerie-grid');
    if (!grid || !D.galerie) return;
    var formes = ['gal--wide gal--tall', '', 'gal--tall', '', 'gal--wide', ''];
    grid.innerHTML = D.galerie.map(function (g, i) {
      return '<button class="gal ' + (formes[i % formes.length] || '') + '" data-gal="' + i + '" aria-label="Agrandir : ' + esc(g.alt) + '">' +
             '<img src="' + g.src + '" alt="' + esc(g.alt) + '" loading="lazy"><span class="gal__zoom" aria-hidden="true">+</span></button>';
    }).join('');
    $$('.gal', grid).forEach(function (b) { b.addEventListener('click', function () { openLightbox(+b.dataset.gal); }); });
  }

  /* ---------------------------------------------------------------- HORAIRES */
  function creneauxDu(jourIso) {
    var liste = D.horaires || [];
    for (var i = 0; i < liste.length; i++) {
      if (liste[i].jours.indexOf(jourIso) !== -1) return liste[i].creneaux || [];
    }
    return [];
  }
  function fmtCreneaux(cr) {
    if (!cr || !cr.length) return 'Fermé';
    return cr.map(function (c) { return c.replace('-', ' – '); }).join('  ·  ');
  }
  function renderHoraires() {
    var ul = $('#hours-list');
    if (ul) {
      var auj = new Date().getDay(); // 0 = dimanche
      var html = '';
      for (var i = 1; i <= 7; i++) {
        var iso = i; // 1 = lundi … 7 = dimanche
        var dom = iso % 7;           // -> index JS
        var cr = creneauxDu(iso);
        html += '<li class="' + (dom === auj ? 'is-today' : '') + (cr.length ? '' : ' is-off') + '">' +
                '<span class="h-day">' + (dom === auj ? 'Aujourd’hui · ' : '') + JOURS[dom] + '</span>' +
                '<span class="h-val">' + fmtCreneaux(cr) + '</span></li>';
      }
      ul.innerHTML = html;
    }
    var note = $('#hours-note');
    if (note) note.textContent = D.horairesNote || '';
    majStatut();
    setInterval(majStatut, 60000);
  }
  function etatMaintenant() {
    var now = new Date();
    var dom = now.getDay();
    var iso = dom === 0 ? 7 : dom;
    var mins = now.getHours() * 60 + now.getMinutes();
    var cr = creneauxDu(iso);
    for (var i = 0; i < cr.length; i++) {
      var p = cr[i].split('-');
      var o = toMin(p[0]), f = toMin(p[1]);
      if (f < o) f += 1440; // service qui dépasse minuit
      if (mins >= o && mins < f) return { ouvert: true };
      if (mins < o) return { ouvert: false, ouvre: p[0] };
    }
    // lendemain
    var iso2 = iso % 7 + 1;
    var cr2 = creneauxDu(iso2);
    if (cr2 && cr2.length) return { ouvert: false, demain: JOURS_C[iso2 % 7] + ' ' + cr2[0].split('-')[0] };
    return { ouvert: false };
  }
  function toMin(h) { var p = String(h).split(':'); return (+p[0]) * 60 + (+p[1] || 0); }
  function majStatut() {
    var s = $('#status');
    if (!s) return;
    var e = etatMaintenant();
    var txt = $('.status__txt', s);
    s.classList.toggle('is-open', e.ouvert);
    s.classList.toggle('is-closed', !e.ouvert);
    if (e.ouvert) txt.textContent = 'Ouvert';
    else if (e.ouvre) txt.textContent = 'Ouvre à ' + e.ouvre;
    else if (e.demain) txt.textContent = 'Fermé · ' + e.demain;
    else txt.textContent = 'Fermé';
  }

  /* -------------------------------------------------------- BOUTONS COMMANDE */
  function renderCommande() {
    var box = $('#footer-btns');
    if (!box || !D.commande) return;
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
    if (tel && D.commande.telephoneActif === false) tel.remove();
  }

  /* =========================================================================
   * 2. TYPOGRAPHIE CINÉTIQUE
   * =======================================================================*/
  function splitLettres() {
    $$('[data-letters]').forEach(function (el) {
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

  function splitLignes() {
    $$('.reveal-mask').forEach(function (h) {
      var inner = h.querySelector('span');
      if (!inner) return;
      var parties = inner.innerHTML.split(/<br\s*\/?>/i);
      h.innerHTML = '';
      parties.forEach(function (p, i) {
        var wrap = document.createElement('span');
        wrap.className = 'ml';
        var it = document.createElement('i');
        it.innerHTML = p.trim();
        it.style.transitionDelay = (i * 90) + 'ms';
        wrap.appendChild(it);
        h.appendChild(wrap);
      });
    });
  }

  /* =========================================================================
   * 3. RÉVÉLATIONS AU SCROLL
   * =======================================================================*/
  function reveals() {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var d = +(e.target.dataset.delay || 0);
        setTimeout(function () { e.target.classList.add('is-in'); }, reduce ? 0 : d);
        io.unobserve(e.target);
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });

    $$('.reveal, .reveal-mask').forEach(function (el) { io.observe(el); });

    // Compteurs
    var io2 = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        countUp(e.target);
        io2.unobserve(e.target);
      });
    }, { threshold: 0.6 });
    $$('[data-count]').forEach(function (el) { io2.observe(el); });
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
      if (p < 1) requestAnimationFrame(f);
      else el.textContent = txt;
    })(t0);
  }

  /* =========================================================================
   * 4. SCROLL : progression, nav, parallaxe
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
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var id = e.target.id;
        links.forEach(function (l) { l.classList.toggle('is-active', l.getAttribute('href') === '#' + id); });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    links.forEach(function (l) {
      var t = document.getElementById(l.getAttribute('href').slice(1));
      if (t) io.observe(t);
    });
  }

  /* =========================================================================
   * 5. MARQUEES — durée selon la largeur pour un débit constant
   * =======================================================================*/
  function marquees() {
    $$('[data-marquee]').forEach(function (t) {
      var base = parseFloat(t.dataset.speed || 40);
      function set() {
        var w = t.scrollWidth / 2 || 1;
        t.style.setProperty('--dur', (w / (900 / base)).toFixed(1) + 's');
      }
      set();
      window.addEventListener('resize', set);
    });
  }

  /* =========================================================================
   * 6. INTERACTIONS
   * =======================================================================*/
  function menuMobile() {
    var btn = $('#nav-burger'), menu = $('#menu-mobile');
    if (!btn || !menu) return;
    $$('nav a', menu).forEach(function (a, i) { a.style.setProperty('--n', (i * 0.06) + 's'); });
    function setOpen(on) {
      btn.setAttribute('aria-expanded', on);
      menu.classList.toggle('is-open', on);
      menu.setAttribute('aria-hidden', !on);
      document.body.classList.toggle('is-locked', on);
      btn.setAttribute('aria-label', on ? 'Fermer le menu' : 'Ouvrir le menu');
    }
    btn.addEventListener('click', function () { setOpen(btn.getAttribute('aria-expanded') !== 'true'); });
    $$('a', menu).forEach(function (a) { a.addEventListener('click', function () { setOpen(false); }); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
  }

  function curseur() {
    var c = $('#cursor');
    if (!c || isTouch || reduce) { if (c) c.remove(); return; }
    var dot = $('.cursor__dot', c), label = $('.cursor__label', c);
    var x = 0, y = 0, cx = 0, cy = 0;
    document.addEventListener('mousemove', function (e) {
      x = e.clientX; y = e.clientY;
      c.classList.add('is-on');
      if (dot) { dot.style.transform = 'translate(' + (x - 2.5) + 'px,' + (y - 2.5) + 'px)'; }
    });
    (function loop() {
      cx += (x - cx) * 0.18; cy += (y - cy) * 0.18;
      c.style.transform = 'translate(' + cx + 'px,' + cy + 'px)';
      requestAnimationFrame(loop);
    })();
    document.addEventListener('mouseleave', function () { c.classList.remove('is-on'); });
    document.addEventListener('mouseover', function (e) {
      var hot = e.target.closest('a, button, [data-cursor], .gal, .sig, .couche, .emp, input, textarea');
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
      el.addEventListener('mousemove', function (e) {
        var r = el.getBoundingClientRect();
        var mx = e.clientX - r.left - r.width / 2;
        var my = e.clientY - r.top - r.height / 2;
        el.style.transform = 'translate(' + (mx * 0.22) + 'px,' + (my * 0.32) + 'px)';
      });
      el.addEventListener('mouseleave', function () { el.style.transform = ''; });
    });
  }

  function tilt() {
    if (isTouch || reduce) return;
    $$('.tilt').forEach(function (el) {
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
      var down = false, startX = 0, startL = 0, moved = false;
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
      window.addEventListener('pointerup', function () { down = false; rail.style.cursor = ''; });
      rail.addEventListener('click', function (e) { if (moved) e.preventDefault(); }, true);
      rail.style.cursor = 'grab';
    });

    var emp = $('#emp-rail');
    var prev = $('#emp-prev'), next = $('#emp-next');
    if (emp) {
      var pas = function () { return (emp.querySelector('.emp') ? emp.querySelector('.emp').offsetWidth + 22 : 320); };
      if (prev) prev.addEventListener('click', function () { emp.scrollBy({ left: -pas(), behavior: reduce ? 'auto' : 'smooth' }); });
      if (next) next.addEventListener('click', function () { emp.scrollBy({ left: pas(), behavior: reduce ? 'auto' : 'smooth' }); });
    }
  }

  function motRotatif() {
    var el = $('#hero-mot');
    var mots = (D.hero && D.hero.motsRotatifs) || [];
    if (!el || mots.length < 2 || reduce) return;
    var i = 0;
    setInterval(function () {
      i = (i + 1) % mots.length;
      el.classList.add('is-swap');
      setTimeout(function () { el.textContent = mots[i]; }, 260);
      setTimeout(function () { el.classList.remove('is-swap'); }, 560);
    }, 2600);
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
    $('#lb-img').alt = g.alt;
    $('#lb-cap').textContent = (lbIndex + 1) + ' / ' + D.galerie.length + ' — ' + g.alt;
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
    if (!lb) return;
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
    if (!form) return;
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
      var okA = setErr(a, a.value.trim().length < 2 ? 'Merci d’indiquer votre nom.' : '');
      var v = b.value.trim();
      var valideContact = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(v) || /^(?:\+33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/.test(v);
      var okB = setErr(b, valideContact ? '' : 'Un téléphone ou un e-mail valide, pour qu’on puisse vous répondre.');
      var okC = setErr(c, c.value.trim().length < 10 ? 'Quelques mots de plus nous aideraient (10 caractères min.).' : '');
      return okA && okB && okC;
    }
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!valider()) return;
      var sujet = 'Message depuis le site — ' + $('#f-nom').value.trim();
      var corps =
        'Nom : ' + $('#f-nom').value.trim() + '\n' +
        'Contact : ' + $('#f-contact').value.trim() + '\n\n' +
        $('#f-msg').value.trim();

      if (cfg.mode === 'endpoint' && cfg.endpoint && cfg.endpoint.indexOf('VOTRE_ID') === -1) {
        fetch(cfg.endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ nom: $('#f-nom').value, contact: $('#f-contact').value, message: $('#f-msg').value })
        }).then(function () {
          ok.textContent = cfg.messageSucces || 'Merci, message envoyé !';
          form.reset();
        }).catch(function () { ok.textContent = 'Envoi impossible. Appelez-nous directement.'; });
      } else {
        window.location.href = 'mailto:' + ((D.coordonnees || {}).email || '') +
          '?subject=' + encodeURIComponent(sujet) + '&body=' + encodeURIComponent(corps);
        ok.textContent = 'Votre logiciel de messagerie va s’ouvrir avec le message pré-rempli.';
        form.reset();
      }
    });
  }

  /* =========================================================================
   * 7. DÉMARRAGE
   * =======================================================================*/
  function init() {
    injecter();
    splitLettres();
    splitLignes();
    marquees();
    reveals();
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
    document.body.classList.add('is-ready');
  }

  preloader(init);
})();
