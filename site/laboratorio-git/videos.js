/* Vídeos da jornada: um player por capítulo, aberto somente por ação da pessoa. */
(() => {
  'use strict';
  const root = document.querySelector('#chapter-content');
  const base = new URL('.', document.currentScript.src);
  let media;
  function mount() {
    if (!media || root.querySelector('.chapter-video')) return;
    const chapter = window.CasaContent.chapters.find(c => c.id === location.hash.slice(1));
    const record = media.chapters.find(c => c.id === chapter?.id);
    const intro = root.querySelector('.hero, .chapter-heading');
    if (!record || !intro) return;
    const host = `https://${media.customer}.cloudflarestream.com/${record.uid}`;
    const section = document.createElement('section');
    section.className = 'chapter-video';
    section.setAttribute('aria-label', 'Vídeo: ' + record.title);
    const duration = document.createElement('p');
    duration.className = 'video-duration';
    duration.textContent = `Assista à explicação · ${Math.floor(record.duration / 60)}min${String(Math.round(record.duration % 60)).padStart(2, '0')}`;
    const stage = document.createElement('div');
    stage.className = 'video-stage';
    const button = document.createElement('button');
    button.className = 'video-start';
    button.setAttribute('aria-label', 'Assistir: ' + record.title);
    const poster = document.createElement('img');
    poster.src = new URL(record.poster, base).href;
    poster.alt = ''; poster.width = 1920; poster.height = 1080;
    poster.loading = 'lazy';
    const label = document.createElement('span'); label.textContent = '▶ Assistir';
    button.append(poster, label);
    button.addEventListener('click', () => {
      const frame = document.createElement('iframe');
      frame.title = 'Vídeo: ' + record.title;
      frame.src = host + '/iframe?autoplay=true&preload=none&letterboxColor=141414&primaryColor=30b0c7';
      frame.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
      frame.allowFullscreen = true;
      stage.replaceChildren(frame);
      frame.focus();
    }, {once: true});
    stage.append(button);
    const transcript = document.createElement('details');
    transcript.className = 'video-transcript';
    const summary = document.createElement('summary'); summary.textContent = 'Ler a transcrição';
    const text = document.createElement('div');
    transcript.append(summary, text);
    let loading = false;
    transcript.addEventListener('toggle', async () => {
      if (!transcript.open || loading || text.childElementCount) return;
      loading = true;
      try {
        const response = await fetch(new URL(record.captions, base));
        if (!response.ok) throw new Error('transcrição indisponível');
        const cues = (await response.text()).replace(/\r/g, '').split(/\n\n+/);
        const sentences = cues.filter(c => c.includes('-->')).map(c => c.split('\n').filter(l => l && !l.includes('-->') && !/^\d+$/.test(l)).join(' '));
        text.replaceChildren();
        for (let i = 0; i < sentences.length; i += 8) {
          const paragraph = document.createElement('p');
          paragraph.textContent = sentences.slice(i, i + 8).join(' ');
          text.append(paragraph);
        }
      } catch {
        text.textContent = 'Não foi possível carregar a transcrição. Feche e abra para tentar novamente.';
      } finally { loading = false; }
    });
    const fallback = document.createElement('a');
    fallback.href = host + '/iframe';
    fallback.target = '_blank'; fallback.rel = 'noopener';
    fallback.className = 'video-fallback';
    fallback.textContent = 'Abrir vídeo em outra aba ↗';
    section.append(duration, stage, fallback, transcript);
    intro.after(section);
  }
  new MutationObserver(mount).observe(root, {childList: true});
  fetch(new URL('media.json', base)).then(r => {
    if (!r.ok) throw new Error('vídeos indisponíveis');
    return r.json();
  }).then(data => { media = data; mount(); }).catch(() => {
    const note = document.createElement('p');
    note.className = 'video-load-error'; note.setAttribute('role', 'status');
    note.textContent = 'Os vídeos não carregaram. Recarregue para tentar novamente; a leitura e a oficina continuam disponíveis.';
    root.prepend(note);
  });
})();
