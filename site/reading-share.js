/* Um endereço público e o mesmo compartilhamento para cada Para o humano. */
(() => {
  const ORIGIN = 'https://agentsflix.ai';
  const icon = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 10.5 6.8-4M8.6 13.5l6.8 4"/></svg>';
  function payload(slug, metadata) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) throw Error('Leitura inválida');
    const url = `${ORIGIN}/compartilhar/${slug}/`;
    return {title:metadata.title, text:metadata.description, url,
      whatsapp:'https://wa.me/?text=' + encodeURIComponent(metadata.title + '\n' + url)};
  }
  async function shareCover(file, title, nav = navigator) {
    const data = {files:[file], title};
    if (!file || !nav.share || !nav.canShare?.(data)) return 'unsupported';
    try { await nav.share(data); return 'shared'; }
    catch (error) { if (error.name === 'AbortError') return 'cancelled'; throw error; }
  }
  function mount(panel, slug, metadata, signal) {
    if (!metadata) return;
    const data = payload(slug, metadata);
    const dialog = document.createElement('dialog');
    dialog.className = 'reading-share';
    dialog.setAttribute('aria-labelledby', 'reading-share-title');
    dialog.innerHTML = `<div class="share-heading"><h2 id="reading-share-title">Compartilhar leitura</h2><button type="button" data-share-close aria-label="Fechar compartilhamento">×</button></div>
      <figure class="share-preview"><img alt=""><figcaption><span>AGENTFLIX · PARA O HUMANO</span><h3></h3><p></p><small>agentsflix.ai</small></figcaption></figure>
      <div class="share-actions"><a data-share-whatsapp target="_blank" rel="noopener noreferrer">WhatsApp</a><button type="button" data-share-instagram>Instagram</button></div>
      <p class="share-help">No Instagram, baixe a capa ou escolha o app no menu do celular. Copie o link para adicionar à publicação ou ao sticker de link do Story.</p>
      <label for="reading-share-url">Link da leitura</label><div class="share-link"><input id="reading-share-url" type="url" readonly><button type="button" data-share-copy>Copiar link</button></div>
      <a class="share-download" data-share-download>Baixar capa</a><p class="share-status" role="status" aria-live="polite"></p>`;
    const $ = selector => dialog.querySelector(selector);
    $('.share-preview img').src = metadata.image;
    $('.share-preview img').alt = metadata.alt;
    $('.share-preview h3').textContent = data.title;
    $('.share-preview p').textContent = data.text;
    $('[data-share-whatsapp]').href = data.whatsapp;
    $('#reading-share-url').value = data.url;
    $('[data-share-download]').href = metadata.image;
    $('[data-share-download]').download = slug + (metadata.image.endsWith('.png') ? '.png' : '.jpg');
    let cover, loading, trigger;
    document.body.append(dialog);
    const status = text => { $('.share-status').textContent = text; };
    // Prefetch on opening: native sharing must start inside the later user click.
    async function prepareCover() {
      if (cover || loading || !navigator.share) return;
      loading = true;
      try {
        const response = await fetch(metadata.image, {signal});
        if (!response.ok) throw Error('Capa indisponível');
        const blob = await response.blob();
        if (!signal.aborted) cover = new File([blob], $('[data-share-download]').download, {type:blob.type});
      } catch { /* Link and download remain available when native sharing is unavailable. */ }
      finally { loading = false; }
    }
    function addButton(container) {
      const button = document.createElement('button');
      button.type = 'button'; button.className = 'reading-share-trigger';
      button.innerHTML = icon + '<span>Compartilhar</span>';
      button.setAttribute('aria-haspopup','dialog');
      button.addEventListener('click', () => {
        trigger = button; status(''); dialog.showModal(); prepareCover();
      }, {signal});
      container.append(button);
    }
    addButton(panel.querySelector('.modal-actions'));
    $('[data-share-close]').addEventListener('click', () => dialog.close(), {signal});
    dialog.addEventListener('close', () => { if (trigger?.isConnected) trigger.focus({preventScroll:true}); }, {signal});
    dialog.addEventListener('keydown', event => {
      event.stopPropagation();
      if (event.key === 'Escape') { event.preventDefault(); dialog.close(); }
    }, {signal});
    dialog.addEventListener('click', event => {
      event.stopPropagation();
      if (event.target === dialog) {
        const box = dialog.getBoundingClientRect();
        if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
      }
    }, {signal});
    $('[data-share-copy]').addEventListener('click', async () => {
      try { await navigator.clipboard.writeText(data.url); status('Link copiado.'); }
      catch { $('#reading-share-url').select(); status('Selecione o link acima e copie.'); }
    }, {signal});
    $('[data-share-instagram]').addEventListener('click', async event => {
      const button = event.currentTarget;
      button.disabled = true;
      try {
        const result = await shareCover(cover, data.title);
        if (result === 'unsupported') status(loading ? 'A capa está carregando. Tente novamente em instantes ou use Baixar capa.' : 'Use Baixar capa e Copiar link para compartilhar no Instagram.');
        else if (result === 'shared') status('Copie também o link para adicionar no Instagram.');
        else status('');
      } catch { status('Não foi possível abrir o compartilhamento. Use Baixar capa e Copiar link.'); }
      finally { button.disabled = false; }
    }, {signal});
    signal.addEventListener('abort', () => { dialog.close(); dialog.remove(); }, {once:true});
    return {addButton};
  }
  window.AgentFlixReadingShare = {mount, payload, shareCover};
})();
