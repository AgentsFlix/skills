(() => {
  'use strict';
  const base = new URL('audio/', document.currentScript.src);
  const preferenceKey = 'agentflix-effects-enabled';
  const levels = {button: 0.45, selection: 0.4, drag: 0.5, complete: 0.28};
  const priority = {button: 0, selection: 1, drag: 2, complete: 3};
  const data = new Map(), decoded = new Map();
  let enabled = true, context = null, source = null, fallback = null;
  let pending = null, timer = null, generation = 0, lastKind = '', lastAt = 0;
  try { enabled = localStorage.getItem(preferenceKey) !== 'false'; } catch (_) {}
  for (const kind of Object.keys(levels)) {
    data.set(kind, fetch(new URL(kind + '.mp3', base)).then(r => r.ok ? r.arrayBuffer() : null).catch(() => null));
  }
  const button = document.createElement('button');
  button.id = 'effects-toggle'; button.type = 'button';
  button.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5 6 9H3v6h3l5 4V5Z"/><path class="sound-waves" d="M15 8c2 2 2 6 0 8m3-11c4 4 4 10 0 14"/><path class="sound-off" d="m16 9 6 6m0-6-6 6"/></svg><span>Efeitos</span>';
  const ambient = document.getElementById('ambient-toggle');
  if (ambient) ambient.after(button); else document.querySelector('.top')?.append(button);
  function update() {
    button.dataset.playing = String(enabled);
    button.setAttribute('aria-pressed', String(enabled));
    button.title = enabled ? 'Silenciar efeitos sonoros' : 'Ativar efeitos sonoros';
    button.setAttribute('aria-label', button.title);
  }
  function stopVoice() {
    if (source) { try { source.stop(); } catch (_) {} source.disconnect(); source = null; }
    if (fallback) { fallback.pause(); fallback = null; }
  }
  function stop() { generation++; clearTimeout(timer); timer = null; pending = null; stopVoice(); }
  function unlock() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!context && AudioContext) { try { context = new AudioContext(); } catch (_) {} }
    if (context?.state === 'suspended') context.resume().catch(() => {});
  }
  async function renderSound(kind) {
    const now = performance.now();
    if (lastKind === kind && now - lastAt < 80) return;
    lastKind = kind; lastAt = now;
    const token = ++generation;
    try {
      if (context) {
        if (!decoded.has(kind)) decoded.set(kind, data.get(kind).then(bytes => bytes ? context.decodeAudioData(bytes.slice(0)) : null).catch(() => null));
        const buffer = await decoded.get(kind);
        if (!buffer || token !== generation || !enabled || document.hidden || performance.now() - now > 700 || context.state !== 'running') return;
        stopVoice();
        const node = context.createBufferSource(), gain = context.createGain();
        node.buffer = buffer; gain.gain.value = levels[kind];
        node.connect(gain); gain.connect(context.destination); source = node;
        node.onended = () => { node.disconnect(); gain.disconnect(); if (source === node) source = null; };
        node.start();
      } else {
        if (!enabled || document.hidden) return;
        stopVoice(); fallback = new Audio(new URL(kind + '.mp3', base).href);
        fallback.volume = levels[kind]; await fallback.play();
      }
    } catch (_) { /* Sound must never interrupt an exercise. */ }
  }
  function play(kind) {
    if (!(kind in levels) || !enabled || document.hidden) return;
    unlock();
    if (!pending || priority[kind] > priority[pending]) pending = kind;
    if (timer !== null) return;
    // A successful action replaces its generic click, so one gesture has one sound.
    timer = setTimeout(() => { const next = pending; pending = null; timer = null; if (next && enabled && !document.hidden) renderSound(next); }, 0);
  }
  window.EpisodeSound = Object.freeze({play});
  button.addEventListener('click', () => {
    enabled = !enabled;
    try { localStorage.setItem(preferenceKey, String(enabled)); } catch (_) {}
    if (!enabled) stop(); else play('selection');
    update();
  });
  const selections = '[data-choice],[data-template],[data-table],[data-flavor],[data-tool],[data-client],[data-piece],[data-slot],[data-remove]';
  document.addEventListener('click', event => {
    const control = event.target.closest?.('button,a[href],summary');
    if (!control || control.disabled || control.getAttribute('aria-disabled') === 'true' || control.closest('[inert]') || control.matches('#ambient-toggle,#effects-toggle') || control.dataset.sound === 'off') return;
    play(control.matches(selections) ? 'selection' : 'button');
  }, true);
  document.addEventListener('change', event => {
    if (event.target.matches('select,input[type="radio"],input[type="checkbox"]') && !event.target.disabled) play('selection');
  });
  document.addEventListener('dragstart', event => {
    if (event.target.closest?.('[draggable="true"]')) play('drag');
  });
  document.addEventListener('drop', event => {
    if (event.defaultPrevented && event.target.closest?.('[data-drop-slot],[data-destination],#tray,#pieces')) play('selection');
  });
  document.addEventListener('visibilitychange', () => { if (document.hidden) stop(); });
  window.addEventListener('pagehide', stop);
  window.addEventListener('storage', event => {
    if (event.key !== preferenceKey) return;
    enabled = event.newValue !== 'false'; if (!enabled) stop(); update();
  });
  update();
})();
