(() => {
  'use strict';
  const src = new URL('audio/back1.mp3', document.currentScript.src).href;
  const preferenceKey = 'agentflix-ambient-enabled';
  const positionKey = 'agentflix-hermes-ambient-position';
  const volume = 0.12;
  let enabled = true, failed = false, context = null, gain = null, starting = false;
  let lastSave = 0, savedPosition = 0;
  try { enabled = localStorage.getItem(preferenceKey) !== 'false'; } catch (_) {}
  try { savedPosition = Number(sessionStorage.getItem(positionKey)) || 0; } catch (_) {}
  const audio = document.createElement('audio');
  audio.id = 'ambient-audio'; audio.src = src; audio.loop = true;
  audio.preload = 'metadata'; audio.volume = volume; audio.hidden = true;
  document.body.append(audio);
  const button = document.createElement('button');
  button.id = 'ambient-toggle'; button.type = 'button';
  button.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5 6 9H3v6h3l5 4V5Z"/><path class="sound-waves" d="M15 8c2 2 2 6 0 8m3-11c4 4 4 10 0 14"/><path class="sound-off" d="m16 9 6 6m0-6-6 6"/></svg><span>Som ambiente</span>';
  const header = document.querySelector('.top');
  if (header) header.insertBefore(button, header.querySelector('.episode-label'));
  else document.body.append(button);
  function update() {
    const playing = !audio.paused && enabled && !failed;
    button.dataset.playing = String(playing);
    button.setAttribute('aria-pressed', String(playing));
    const label = failed ? 'Som ambiente indisponível' : playing ? 'Silenciar som ambiente' : 'Ativar som ambiente';
    button.setAttribute('aria-label', label); button.title = label;
    button.disabled = failed;
  }
  function save() {
    if (!Number.isFinite(audio.currentTime)) return;
    try { sessionStorage.setItem(positionKey, String(audio.currentTime)); } catch (_) {}
  }
  function pause() { save(); audio.pause(); update(); }
  async function play() {
    if (!enabled || failed || document.hidden || starting || !audio.paused) return;
    starting = true;
    try {
      // Gain controls the quiet level even on mobile browsers that ignore media.volume.
      if (!context) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
          try {
            context = new AudioContext();
            gain = context.createGain(); gain.gain.value = 0;
            context.createMediaElementSource(audio).connect(gain);
            gain.connect(context.destination); audio.volume = 1;
          } catch (_) { gain = null; context = null; audio.volume = volume; }
        }
      }
      if (context) await context.resume();
      if (!enabled || document.hidden) return;
      if (gain) {
        gain.gain.cancelScheduledValues(context.currentTime);
        gain.gain.setValueAtTime(0, context.currentTime);
        gain.gain.linearRampToValueAtTime(volume, context.currentTime + 0.8);
      }
      await audio.play();
      if (!enabled || document.hidden) pause();
    } catch (_) {
      // A blocked autoplay attempt is retried only on a later user interaction.
    } finally { starting = false; update(); }
  }
  function persist() { try { localStorage.setItem(preferenceKey, String(enabled)); } catch (_) {} }
  button.addEventListener('click', () => {
    if (!audio.paused) { enabled = false; persist(); pause(); }
    else { enabled = true; persist(); play(); }
  });
  function activate(event) {
    if (event.target.closest?.('#ambient-toggle')) return;
    if (event.type === 'keydown' && !['Enter', ' '].includes(event.key)) return;
    play();
  }
  document.addEventListener('pointerdown', activate, { passive: true });
  document.addEventListener('keydown', activate);
  audio.addEventListener('loadedmetadata', () => {
    if (savedPosition > 0 && Number.isFinite(audio.duration) && audio.duration > 0) {
      audio.currentTime = savedPosition % audio.duration;
    }
  });
  audio.addEventListener('timeupdate', () => {
    if (Date.now() - lastSave > 3000) { save(); lastSave = Date.now(); }
  });
  audio.addEventListener('play', update);
  audio.addEventListener('pause', update);
  audio.addEventListener('error', () => { failed = true; update(); });
  document.addEventListener('visibilitychange', () => { if (document.hidden) pause(); else play(); });
  window.addEventListener('pagehide', pause);
  window.addEventListener('pageshow', update);
  window.addEventListener('storage', event => {
    if (event.key !== preferenceKey) return;
    enabled = event.newValue !== 'false';
    if (!enabled) pause(); else play();
  });
  update();
})();
