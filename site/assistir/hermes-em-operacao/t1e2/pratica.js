'use strict';
(() => {
  const $ = id => document.getElementById(id);
  const stages = ['Gatilho', 'Agente', 'Ferramenta', 'Puxar', 'Construir', 'Entrega'];
  const hints = [
    'O que acontece para iniciar o atendimento?',
    'Quem executa o atendimento e o preparo?',
    'O que você usa para anotar o pedido de miojo?',
    'O cliente escolheu algo que já existe. Onde você encontra essa informação?',
    'Qual peça descreve o passo a passo para produzir o prato?',
    'Qual é o destino do prato depois do preparo?'
  ];
  const pieces = [
    { id: 'bell', stage: 0, text: 'O cliente aperta a campainha da mesa.' },
    { id: 'chef', stage: 1, text: 'O chef responsável atende o cliente e prepara o miojo.' },
    { id: 'notebook', stage: 2, text: 'Caderneta para anotar o pedido e a mesa.' },
    { id: 'menu', stage: 3, text: 'Consultar no menu o prato escolhido pelo cliente.' },
    { id: 'recipe', stage: 4, text: '300 ml de água, ferve por 3 minutos, bota o miojo e o tempero escolhido, mexe e coloca no prato.' },
    { id: 'table', stage: 5, text: 'Servir o prato na mesa que fez o pedido.' },
    { id: 'machine', stage: -1, text: 'Maquininha para registrar o pedido de miojo.' },
    { id: 'decide', stage: -1, text: 'A caderneta decide o que o cliente vai comer.' },
    { id: 'invent', stage: -1, text: 'Inventar outro prato sem consultar o escolhido.' },
    { id: 'anywhere', stage: -1, text: 'Servir o prato em qualquer mesa vazia.' }
  ];
  const getPiece = id => pieces.find(p => p.id === id);
  let round = 1, served = 0, activeChefs = 0, selected = null;
  let slots = Array(6).fill(null), checked = false, running = false, timer = null;
  let dragged = null;
  let order = shuffle(pieces.map(p => p.id));
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  const chefArt = StageIdentity.chef();
  const clientArt = (n, done) => StageIdentity.customer(n, done);
  function renderFactory() {
    $('chefs').innerHTML = [1,2,3].map(n => {
      const count = Math.max(0, Math.min(3, served - (n-1)*3));
      const unlocked = n <= activeChefs;
      return `<div class="chef ${unlocked ? count < 3 ? 'active' : '' : 'locked'}">${chefArt}<div><strong>Chef ${n}</strong><p>${unlocked ? `${count} / 3 atendidos` : 'Aguarda um fluxo'}</p><div class="capacity" aria-hidden="true">${[0,1,2].map(i => `<i class="${i<count?'used':''}"></i>`).join('')}</div></div></div>`;
    }).join('');
    $('customers').innerHTML = Array.from({length:9}, (_,i) => {
      const done = i < served, current = i === served && running;
      return `<div class="customer ${done?'served':current?'current':''}">${clientArt(i, done)}<strong>Cliente ${i+1}</strong><span>${done?'✓ Servido':current?'Em preparo':'Na fila'}</span></div>`;
    }).join('');
    const belt = document.querySelector('.belt-window');
    const customer = $('customers').children[Math.min(served, 8)];
    if (belt.scrollWidth > belt.clientWidth) belt.scrollLeft = Math.max(0, customer.offsetLeft - belt.clientWidth / 2 + customer.offsetWidth / 2);
    document.querySelector('.factory').classList.toggle('running', running);
    $('served-count').textContent = `${served} de 9 clientes atendidos`;
    $('pause').hidden = activeChefs === 0 || served === activeChefs * 3;
    $('pause').textContent = running ? 'Pausar esteira' : 'Retomar esteira';
    $('factory-title').textContent = served === 9 ? 'Todos os pedidos foram entregues' : running ? `Chef ${activeChefs} atendendo o cliente ${served+1}` : served < activeChefs * 3 ? 'Esteira pausada' : `A esteira espera o fluxo ${round}`;
    $('factory-status').textContent = served === 9 ? 'Cada chef atendeu três clientes.' : running ? `Pedido recebido → miojo em preparo → mesa do cliente ${served+1}.` : served < activeChefs * 3 ? 'O atendimento continua quando você retomar.' : `Monte o fluxo para atender a partir do cliente ${served+1}.`;
  }
  function renderPuzzle() {
    $('round-label').textContent = `FLUXO ${round} · CHEF ${round}`;
    $('puzzle-title').textContent = `Organize o atendimento do chef ${round}`;
    $('placed-count').textContent = `${slots.filter(Boolean).length} / 6 peças`;
    $('selection').textContent = selected ? `Peça selecionada: ${getPiece(selected).text} Agora escolha uma etapa.` : 'Arraste uma peça para uma etapa ou clique na peça e depois no destino. Para retirar, arraste de volta à mesa.';
    $('slots').innerHTML = stages.map((stage, i) => {
      const piece = getPiece(slots[i]);
      const correct = piece?.stage === i;
      return `<div data-drop-slot="${i}" class="slot ${checked ? correct?'correct':'wrong' : ''}"><h3 class="stage-heading">${StageIdentity.header(i)}</h3><button class="drop ${piece?'':'empty'} ${piece?.id===selected?'selected':''}" data-slot="${i}" draggable="${Boolean(piece)}" ${piece ? `data-drag-piece="${piece.id}"` : ''} aria-label="${stage}: ${piece?piece.text:'espaço vazio'}">${piece?piece.text:'+ Colocar uma peça'}</button>${piece?`<button class="remove" data-remove="${i}" aria-label="Retirar peça de ${stage}">Retirar peça</button>`:''}${checked?`<p class="slot-hint">${correct?'✓ Correto':hints[i]}</p>`:''}</div>`;
    }).join('');
    $('tray').innerHTML = order.filter(id => !slots.includes(id)).map(id => `<button class="piece" draggable="true" data-drag-piece="${id}" data-piece="${id}" aria-pressed="${id===selected}">${getPiece(id).text}</button>`).join('');
  }
  function place(i) {
    if (!selected) {
      if (slots[i]) selected = slots[i];
      renderPuzzle();
      document.querySelector(`[data-slot="${i}"]`).focus({preventScroll:true});
      return;
    }
    const old = slots.indexOf(selected);
    if (old === i) { selected = null; renderPuzzle(); return; }
    if (old >= 0) slots[old] = null;
    slots[i] = selected;
    selected = null;
    checked = false;
    $('feedback').textContent = 'Você pode trocar as peças antes de conferir.';
    renderPuzzle();
    document.querySelector(`[data-slot="${i}"]`).focus({preventScroll:true});
  }
  $('tray').addEventListener('click', e => {
    const button = e.target.closest('[data-piece]');
    if (!button) return;
    selected = selected === button.dataset.piece ? null : button.dataset.piece;
    renderPuzzle();
    document.querySelector(`[data-piece="${button.dataset.piece}"]`).focus({preventScroll:true});
  });
  $('slots').addEventListener('click', e => {
    const remove = e.target.closest('[data-remove]');
    if (remove) {
      const i = +remove.dataset.remove;
      if (selected === slots[i]) selected = null;
      slots[i] = null; checked = false;
      renderPuzzle();
      document.querySelector(`[data-slot="${i}"]`).focus({preventScroll:true});
      return;
    }
    const drop = e.target.closest('[data-slot]');
    if (drop) place(+drop.dataset.slot);
  });
  // Drag nativo complementa os mesmos destinos usados por clique e teclado.
  const puzzle = $('puzzle');
  function dragTarget(target) {
    return target.closest('[data-drop-slot], #tray');
  }
  function clearDragHighlight() {
    puzzle.querySelectorAll('.drag-over').forEach(el => el.classList.remove('drag-over'));
  }
  function endDrag() {
    dragged = null;
    clearDragHighlight();
    puzzle.querySelectorAll('.dragging').forEach(el => el.classList.remove('dragging'));
  }
  puzzle.addEventListener('dragstart', e => {
    const source = e.target.closest('[data-drag-piece]');
    if (!source || !getPiece(source.dataset.dragPiece)) return;
    dragged = source.dataset.dragPiece;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', dragged);
    source.classList.add('dragging');
  });
  puzzle.addEventListener('dragover', e => {
    const target = dragTarget(e.target);
    if (!dragged || !target) return;
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    clearDragHighlight();
    target.classList.add('drag-over');
  });
  puzzle.addEventListener('dragleave', e => {
    const target = dragTarget(e.target);
    if (target && !target.contains(e.relatedTarget)) target.classList.remove('drag-over');
  });
  puzzle.addEventListener('drop', e => {
    const target = dragTarget(e.target);
    if (!dragged || !target) return;
    e.preventDefault();
    const id = dragged;
    endDrag();
    if (target.id === 'tray') {
      const old = slots.indexOf(id);
      if (old >= 0) {
        slots[old] = null; selected = null; checked = false;
        $('feedback').textContent = 'Peça devolvida à mesa. Você pode escolher outra.';
        renderPuzzle();
        document.querySelector(`[data-piece="${id}"]`).focus({preventScroll:true});
      }
    } else {
      selected = id;
      place(+target.dataset.dropSlot);
    }
  });
  puzzle.addEventListener('dragend', endDrag);
  function stop() { clearInterval(timer); timer = null; running = false; }
  function run() {
    if (timer || served >= activeChefs*3) return;
    running = true; renderFactory();
    timer = setInterval(() => {
      served++;
      if (served === activeChefs*3) {
        stop();
        if (served === 9) {
          $('complete').hidden = false;
          $('complete-title').tabIndex = -1;
          $('complete-title').focus({preventScroll:true});
        } else {
          round = activeChefs+1;
          $('gate-title').textContent = `O cliente ${served+1} precisa de outro chef.`;
          $('gate-copy').textContent = `O chef ${activeChefs} já atendeu seus 3 clientes. Monte um novo fluxo para ativar o chef ${round} e atender os próximos pedidos.`;
          $('new-flow').textContent = `Montar fluxo ${round} →`;
          $('gate').hidden = false;
        }
      }
      renderFactory();
    }, 2200);
  }
  $('check').addEventListener('click', () => {
    checked = true; selected = null; renderPuzzle();
    const correct = slots.filter((id,i) => getPiece(id)?.stage === i).length;
    if (correct !== 6) {
      $('feedback').textContent = `${correct} de 6 etapas corretas. Veja as pistas, ajuste as peças e tente novamente.`;
      return;
    }
    activeChefs = round;
    $('puzzle').hidden = true;
    $('factory-status').textContent = `Fluxo ${round} correto. Chef ${round} ativado.`;
    run();
    document.querySelector('.factory').scrollIntoView({behavior:'auto',block:'start'});
    $('pause').focus({preventScroll:true});
  });
  $('pause').addEventListener('click', () => { if (running) { stop(); renderFactory(); } else run(); });
  $('new-flow').addEventListener('click', () => {
    slots = Array(6).fill(null); selected = null; checked = false;
    order = shuffle(pieces.map(p => p.id));
    $('gate').hidden = true; $('puzzle').hidden = false;
    $('feedback').textContent = `Monte o fluxo para ativar o chef ${round}.`;
    renderPuzzle();
    $('puzzle-title').tabIndex = -1;
    $('puzzle-title').focus();
  });
  $('restart').addEventListener('click', () => {
    stop(); round=1;served=0;activeChefs=0;selected=null;slots=Array(6).fill(null);checked=false;
    order=shuffle(pieces.map(p=>p.id));
    $('complete').hidden=true;$('gate').hidden=true;$('puzzle').hidden=false;
    $('feedback').textContent='Monte o fluxo para ativar o chef 1.';
    renderFactory();renderPuzzle();$('puzzle-title').focus();
  });
  window.addEventListener('pagehide', stop);
  window.addEventListener('pageshow', renderFactory);
  renderFactory(); renderPuzzle();
})();
