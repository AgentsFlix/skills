(() => {
  const KEY = 'agentflix-reading-v1';
  const SIZES = [0.94, 1, 1.125, 1.25, 1.5];
  const LABELS = ['Menor', 'Padrão', 'Grande', 'Maior', 'Máximo'];
  const root = document.getElementById('human');
  const toggle = document.getElementById('reading-toggle');
  const panel = document.getElementById('reading-options');
  const smaller = document.getElementById('text-smaller');
  const larger = document.getElementById('text-larger');
  const status = document.getElementById('reading-storage');
  const themes = [...panel.querySelectorAll('[data-reading-theme]')];
  const normalize = value => ({
    theme: value?.theme === 'paper' ? 'paper' : 'dark',
    size: Number.isInteger(value?.size) && value.size >= 0 && value.size < SIZES.length ? value.size : 1
  });
  let prefs = normalize(null);
  try { prefs = normalize(JSON.parse(localStorage.getItem(KEY))); } catch { /* O padrão funciona sem armazenamento. */ }

  function apply() {
    root.dataset.readingTheme = prefs.theme;
    root.dataset.readingSize = String(prefs.size);
    root.style.setProperty('--reader-scale', SIZES[prefs.size]);
    themes.forEach(button => button.setAttribute('aria-pressed', button.dataset.readingTheme === prefs.theme));
    smaller.setAttribute('aria-disabled', prefs.size === 0);
    larger.setAttribute('aria-disabled', prefs.size === SIZES.length - 1);
    document.getElementById('text-size').textContent = LABELS[prefs.size];
  }
  function change(next) {
    // Manter o parágrafo visível na mesma altura ao redimensionar o texto.
    const edge = root.querySelector('.reading-toolbar').getBoundingClientRect().bottom;
    const anchor = [...root.querySelectorAll('.reading h2, .reading h3, .reading p, .compare-row')]
      .find(el => { const rect = el.getBoundingClientRect(); return rect.bottom > edge && rect.top < innerHeight; });
    const top = anchor?.getBoundingClientRect().top;
    prefs = normalize(next);
    apply();
    if (anchor) window.scrollBy(0, anchor.getBoundingClientRect().top - top);
    try {
      localStorage.setItem(KEY, JSON.stringify(prefs));
      status.hidden = true;
    } catch {
      status.textContent = 'O navegador não permitiu salvar. Os ajustes valem nesta visita.';
      status.hidden = false;
    }
  }
  function close(returnFocus = false) {
    panel.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
    if (returnFocus) toggle.focus({ preventScroll: true });
  }
  toggle.addEventListener('click', () => {
    const opening = panel.hidden;
    panel.hidden = !opening;
    toggle.setAttribute('aria-expanded', String(opening));
  });
  document.getElementById('reading-dismiss').addEventListener('click', () => close(true));
  smaller.addEventListener('click', () => { if (prefs.size > 0) change({ ...prefs, size: prefs.size - 1 }); });
  larger.addEventListener('click', () => { if (prefs.size < SIZES.length - 1) change({ ...prefs, size: prefs.size + 1 }); });
  themes.forEach(button => button.addEventListener('click', () => change({ ...prefs, theme: button.dataset.readingTheme })));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !panel.hidden) { event.preventDefault(); close(true); }
  });
  document.addEventListener('click', event => { if (!event.target.closest('.reading-settings')) close(); });
  document.addEventListener('focusin', event => { if (!event.target.closest('.reading-settings')) close(); });
  window.addEventListener('storage', event => {
    if (event.key === KEY || event.key === null) {
      try { changeFromStorage(event.key === null ? null : JSON.parse(event.newValue)); } catch { changeFromStorage(null); }
    }
  });
  function changeFromStorage(value) { prefs = normalize(value); apply(); }
  apply();
})();
