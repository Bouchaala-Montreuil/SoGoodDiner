/* ============================================================================
   SO GOOD DINER — « Empile le Burger » (mini-jeu, mobile + desktop)
   Principe : un ingrédient glisse de gauche à droite ; tape / clique / espace
   pour le lâcher. Bien aligné = il s'empile. Raté = le burger s'écroule.
   Une seule entrée → parfait au pouce comme au clavier. Aucune dépendance.
   ========================================================================== */
(function () {
  'use strict';

  var $ = function (s, c) { return (c || document).querySelector(s); };

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Couches du burger (bas → haut), répétées en boucle pour la hauteur. */
  var LAYERS = ['bun-b', 'patty', 'cheese', 'lettuce', 'tomato', 'bacon', 'bun-t'];
  var COLORS = {
    'bun-b': '#E8A34C', 'patty': '#6B4226', 'cheese': '#FFC93C',
    'lettuce': '#7BC950', 'tomato': '#E2483D', 'bacon': '#B0563B', 'bun-t': '#E8A34C'
  };

  var W = 260, H = 380, PIECE_W = 120, PIECE_H = 22;

  var state = {
    built: false, open: false, running: false, over: false,
    score: 0, best: 0, stack: [], cur: null, raf: 0
  };
  try { state.best = +(window.localStorage.getItem('sg-best') || 0); } catch (e) { state.best = 0; }

  function ui(key) {
    var I = window.SO_GOOD_I18N;
    var lang = (window.SO_GOOD_APP && window.SO_GOOD_APP.getLang()) || 'fr';
    return I && I[lang] && I[lang][key] != null ? I[lang][key] : key;
  }

  function tol() { return Math.max(18, 40 - state.score * 1.2); }
  function speed() { return Math.min(6.5, 2 + state.score * 0.22); }

  function build() {
    if (state.built) return;
    state.built = true;

    /* Bouton lanceur (en bas à gauche, opposé du retour-haut). */
    var launch = document.createElement('button');
    launch.className = 'game-launch';
    launch.type = 'button';
    launch.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 6h10a5 5 0 0 1 5 5v2a4 4 0 0 1-7 2.6L14 15h-4l-1 .6A4 4 0 0 1 2 13v-2a5 5 0 0 1 5-5Zm0 4v1H6v2h1v1h2v-1h1v-2H9V10Zm8 .5a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Zm3 2a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z"/></svg>';
    document.body.appendChild(launch);
    launch.addEventListener('click', open);

    /* Modale de jeu. */
    var m = document.createElement('div');
    m.className = 'game-modal';
    m.setAttribute('role', 'dialog');
    m.setAttribute('aria-modal', 'true');
    m.innerHTML =
      '<div class="game-modal__card">' +
      '  <header class="game-modal__head">' +
      '    <h3 class="game-title"></h3>' +
      '    <button class="game-close" type="button" aria-label="Fermer">&times;</button>' +
      '  </header>' +
      '  <div class="game-stats"><span class="game-score"></span><span class="game-best"></span></div>' +
      '  <div class="game-area" tabindex="0"><div class="game-stack"></div><div class="game-cur"></div><div class="game-msg"></div></div>' +
      '  <p class="game-hint"></p>' +
      '  <button class="game-restart btn btn--solid" type="button"></button>' +
      '</div>';
    document.body.appendChild(m);
    state.modal = m;
    state.area = $('.game-area', m);
    state.stackEl = $('.game-stack', m);
    state.curEl = $('.game-cur', m);
    state.msgEl = $('.game-msg', m);

    $('.game-close', m).addEventListener('click', close);
    $('.game-restart', m).addEventListener('click', start);
    state.area.addEventListener('pointerdown', function (e) { e.preventDefault(); drop(); });
    m.addEventListener('pointerdown', function (e) { if (e.target === m) close(); });
    document.addEventListener('keydown', function (e) {
      if (!state.open) return;
      if (e.key === ' ' || e.key === 'Spacebar' || e.key === 'Enter') { e.preventDefault(); drop(); }
      else if (e.key === 'Escape') close();
    });
    refreshLabels();
  }

  function refreshLabels() {
    if (!state.modal) return;
    $('.game-title', state.modal).textContent = ui('game.title');
    $('.game-hint', state.modal).textContent = ui('game.tap');
    $('.game-restart', state.modal).textContent = ui('game.restart');
    $('.game-launch').setAttribute('aria-label', ui('game.btn'));
  }

  function open() {
    build();
    refreshLabels();
    state.open = true;
    state.modal.classList.add('is-open');
    document.body.classList.add('is-locked');
    start();
  }
  function close() {
    state.open = false;
    state.running = false;
    cancelAnimationFrame(state.raf);
    state.modal.classList.remove('is-open');
    document.body.classList.remove('is-locked');
  }

  function start() {
    state.running = true;
    state.over = false;
    state.score = 0;
    state.stack = [{ x: W / 2, layer: LAYERS[0] }];
    state.cur = { x: W / 2, dir: 1, layer: LAYERS[1] };
    state.msgEl.textContent = '';
    renderStack();
    updateStats();
    cancelAnimationFrame(state.raf);
    loop();
  }

  function loop() {
    if (!state.running) return;
    var c = state.cur;
    c.x += c.dir * speed();
    var min = PIECE_W / 2, max = W - PIECE_W / 2;
    if (c.x > max) { c.x = max; c.dir = -1; }
    if (c.x < min) { c.x = min; c.dir = 1; }
    placeCur();
    state.raf = requestAnimationFrame(loop);
  }

  function placeCur() {
    state.curEl.style.left = (state.cur.x - PIECE_W / 2) + 'px';
    state.curEl.style.background = COLORS[state.cur.layer];
    state.curEl.className = 'game-cur layer-' + state.cur.layer;
  }

  function __setX(x) { if (state.cur) state.cur.x = x; placeCur(); }

  function drop() {
    if (!state.running) return;
    var top = state.stack[state.stack.length - 1];
    var off = state.cur.x - top.x;
    if (Math.abs(off) <= tol()) {
      state.stack.push({ x: state.cur.x, layer: state.cur.layer });
      state.score += 1;
      if (state.score > state.best) {
        state.best = state.score;
        try { window.localStorage.setItem('sg-best', String(state.best)); } catch (e) {}
      }
      state.cur = { x: W / 2, dir: Math.random() > .5 ? 1 : -1, layer: LAYERS[state.stack.length % LAYERS.length] };
      renderStack();
      updateStats();
      placeCur();
    } else {
      gameOver();
    }
  }

  function renderStack() {
    var html = '';
    for (var i = 0; i < state.stack.length; i++) {
      var p = state.stack[i];
      html += '<div class="game-piece layer-' + p.layer + '" style="left:' + (p.x - PIECE_W / 2) + 'px;bottom:' + (i * (PIECE_H - 4)) + 'px;background:' + COLORS[p.layer] + '"></div>';
    }
    state.stackEl.innerHTML = html;
    /* caméra : on remonte la pile quand elle dépasse la zone */
    var shift = Math.max(0, state.stack.length * (PIECE_H - 4) - (H - 120));
    state.stackEl.style.transform = 'translateY(' + shift + 'px)';
  }

  function updateStats() {
    $('.game-score', state.modal).textContent = ui('game.score') + ' : ' + state.score;
    $('.game-best', state.modal).textContent = ui('game.best') + ' : ' + state.best;
  }

  function gameOver() {
    state.running = false;
    state.over = true;
    cancelAnimationFrame(state.raf);
    state.msgEl.textContent = ui('game.over');
    state.modal.classList.add('is-over');
    updateStats();
  }

  function getState() {
    return { open: state.open, running: state.running, over: state.over, score: state.score, best: state.best, stack: state.stack.length };
  }

  /* Le bouton lanceur + la modale existent dès le chargement. */
  if (document.body) build();

  window.SO_GOOD_GAME = {
    open: open, close: close, start: start, drop: drop,
    __setX: __setX, getState: getState, refreshLabels: refreshLabels
  };
})();
