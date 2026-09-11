'use strict';
// A mesma resposta do exercício, com escolha por toque em telas compactas.
window.EpisodePiecePicker = {
  mount({root, tray, pieces, slots, labels, art, place}) {
    const compact = matchMedia('(max-width: 760px), (pointer: coarse)');
    const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
    const dialog = document.createElement('dialog');
    dialog.className = 'piece-picker';
    dialog.setAttribute('aria-labelledby', 'piece-picker-title');
    dialog.setAttribute('aria-describedby', 'piece-picker-description');
    document.body.append(dialog);
    const status = document.createElement('p');
    status.className = 'piece-picker-status';
    status.setAttribute('role', 'status');
    tray.after(status);
    let origin = null, nextFocus = null, choice = null, destination = null;
    const piece = id => pieces().find(p => p.id === id);
    const findOrigin = () => root.querySelector(origin) || tray.querySelector('[data-piece]') || root.querySelector('[data-slot]');
    function close() { dialog.close(); }
    dialog.addEventListener('close', () => {
      document.documentElement.classList.remove('piece-picker-open');
      (nextFocus || findOrigin())?.focus({preventScroll: true});
      nextFocus = null;
    });
    function open(button) {
      choice = button.dataset.piece || slots()[Number(button.dataset.slot)] || null;
      destination = choice ? null : Number(button.dataset.slot);
      origin = button.dataset.piece ? `[data-piece="${button.dataset.piece}"]` : `[data-slot="${button.dataset.slot}"]`;
      const current = choice ? slots().indexOf(choice) : -1;
      const selected = piece(choice);
      const title = choice ? 'Onde colocar esta peça?' : `Escolha uma peça para ${labels[destination]}`;
      const description = choice ? 'Toque no destino. Se já houver uma peça, ela volta para a mesa.' : 'Toque na peça que você quer colocar nesta etapa.';
      const options = choice ? labels.map((label, i) => {
        const occupied = piece(slots()[i]);
        return `<button type="button" data-picker-slot="${i}" ${i===current?'disabled':''}><strong>${escape(label)}</strong><span>${i===current?'Posição atual':occupied?`Substituir: ${escape(occupied.text)}`:'Espaço vazio'}</span></button>`;
      }).join('') : pieces().map(p => {
        const index = slots().indexOf(p.id);
        return `<button type="button" data-picker-piece="${p.id}">${art(p.id)}<strong>${escape(p.text)}</strong>${index>=0?`<span>Mover de ${escape(labels[index])}</span>`:''}</button>`;
      }).join('');
      dialog.innerHTML = `<div class="piece-picker-scroll"><h2 id="piece-picker-title" tabindex="-1">${escape(title)}</h2><p id="piece-picker-description">${description}</p>${selected?`<div class="piece-picker-selected">${art(choice)}<p>${escape(selected.text)}</p></div>`:''}<div class="piece-picker-options ${choice?'':'piece-picker-pieces'}">${options}</div></div><div class="piece-picker-actions">${current>=0?'<button type="button" data-picker-remove>Devolver à mesa</button>':''}<button type="button" data-picker-cancel>Cancelar</button></div>`;
      document.documentElement.classList.add('piece-picker-open');
      dialog.showModal();
      dialog.querySelector('h2').focus({preventScroll: true});
    }
    root.addEventListener('click', event => {
      const button = event.target.closest('[data-piece], [data-slot]');
      if (!button || (!compact.matches && event.pointerType !== 'touch')) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      open(button);
    }, true);
    // Não capturar o gesto de rolagem nem iniciar drag por pressão longa no toque.
    root.addEventListener('dragstart', event => {
      if (compact.matches) { event.preventDefault(); event.stopImmediatePropagation(); }
    }, true);
    dialog.addEventListener('click', event => {
      if (event.target.closest('[data-picker-cancel]')) { close(); return; }
      if (event.target.closest('[data-picker-remove]')) {
        const index = slots().indexOf(choice);
        root.querySelector(`[data-remove="${index}"]`)?.click();
        nextFocus = tray.querySelector(`[data-piece="${choice}"]`);
        status.textContent = 'Peça devolvida à mesa.';
        close();
        return;
      }
      const target = event.target.closest('[data-picker-slot], [data-picker-piece]');
      if (!target || target.disabled) return;
      const id = target.dataset.pickerPiece || choice;
      const index = destination === null ? Number(target.dataset.pickerSlot) : destination;
      const previous = slots()[index];
      place(id, index);
      status.textContent = `Peça colocada em ${labels[index]}.${previous?' A peça anterior voltou para a mesa.':''}`;
      nextFocus = findOrigin();
      close();
    });
    document.addEventListener('click', event => {
      if (event.target.closest('[data-remove], #check, #verify, #new-flow, #restart, #edit')) status.textContent = '';
    }, true);
    window.addEventListener('pagehide', () => { if (dialog.open) close(); });
    return {compact};
  }
};
