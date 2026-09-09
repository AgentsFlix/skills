'use strict';
(() => {
  const $ = id => document.getElementById(id);
  const stages = ['Gatilho', 'Agente', 'Ferramenta', 'Puxar', 'Construir', 'Entrega'];
  const hints = ['O que inicia o pedido?', 'Quem faz o trabalho?', 'Com o que você cria?', 'Qual informação já existe?', 'O que você precisa produzir?', 'Quem recebe o resultado?'];
  const pieces = [
    {id:'message',stage:0,art:'mensagem',text:'Mensagem do cliente com um pedido.'},
    {id:'person',stage:1,art:'profissional',text:'Você atende, cria e entrega.'},
    {id:'editor',stage:2,art:'editor',text:'Editor de arte e legenda.'},
    {id:'folder',stage:3,art:'pasta',text:'Consultar os materiais do cliente.'},
    {id:'create',stage:4,art:'criacao',text:'Criar título, arte e legenda. Revisar.'},
    {id:'send',stage:5,art:'envio',text:'Enviar ao cliente para aprovação.'},
    {id:'invent',stage:-1,art:'pasta',text:'Inventar os dados sem consultar.'},
    {id:'anyone',stage:-1,art:'envio',text:'Enviar para qualquer cliente.'}
  ];
  const art = name => `<img src="art/eugencia/${name}.png" alt="" draggable="false">`;
  const pieceArt = id => art(pieces.find(p=>p.id===id).art);
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
  function renderFactory() {
    $('chefs').innerHTML=[1,2,3].map(n=>`<div class="worker ${n<=activeChefs?'active':''}">${art('profissional')}<span>Pessoa ${n}<small>${Math.max(0,Math.min(3,served-(n-1)*3))} / 3 clientes</small></span></div>`).join('');
    const batch=Math.max(0,activeChefs-1)*3;
    $('customers').innerHTML=Array.from({length:3},(_,i)=>{
      const n=batch+i,done=n<served,current=n===served&&running;
      return `<div class="customer ${done?'served':current?'current':''}">${art(['cafe','academia','loja'][i])}<strong>Cliente ${n+1}</strong><span>${done?'✓ Enviado':current?'Criando o post':'Aguardando'}</span></div>`;
    }).join('');
    document.querySelector('.factory').classList.toggle('running',running);
    $('served-count').textContent=`${served} / 9 clientes`;
    $('pause').hidden=activeChefs===0||served===activeChefs*3;
    $('pause').textContent=running?'Pausar':'Retomar';
    $('factory-title').textContent=served===9?'Todos os posts enviados.':running?`Pessoa ${activeChefs} em ação.`:served<activeChefs*3?'Atendimento pausado.':'Lote concluído.';
    $('factory-status').textContent=running?`Cliente ${served+1}: do pedido ao post.`:served<activeChefs*3?'Retome quando quiser.':`${served} posts enviados para aprovação.`;
  }
  function renderPuzzle() {
    $('round-label').textContent = `FLUXO ${round} · PESSOA ${round}`;
    $('puzzle-title').textContent = `Monte o fluxo da pessoa ${round}.`;
    $('placed-count').textContent = `${slots.filter(Boolean).length} / 6 peças`;
    $('selection').textContent = selected ? `Escolha onde colocar: ${getPiece(selected).text}` : 'Arraste as peças ou clique na peça e na etapa. Sobram duas.';
    $('slots').innerHTML = stages.map((stage, i) => {
      const piece = getPiece(slots[i]);
      const correct = piece?.stage === i;
      return `<div data-drop-slot="${i}" class="slot ${checked ? correct?'correct':'wrong' : ''}"><h3 class="stage-heading"><span>${i+1}</span> ${stage}</h3><button class="drop ${piece?'':'empty'} ${piece?.id===selected?'selected':''}" data-slot="${i}" draggable="${Boolean(piece)}" ${piece ? `data-drag-piece="${piece.id}"` : ''} aria-label="${stage}: ${piece?piece.text:'espaço vazio'}">${piece?pieceArt(piece.id)+piece.text:'+ Peça'}</button>${piece?`<button class="remove" data-remove="${i}" aria-label="Retirar peça de ${stage}">Retirar</button>`:''}${checked?`<p class="slot-hint">${correct?'✓ Correto':hints[i]}</p>`:''}</div>`;
    }).join('');
    $('tray').innerHTML = order.filter(id => !slots.includes(id)).map(id => `<button class="piece" draggable="true" data-drag-piece="${id}" data-piece="${id}" aria-pressed="${id===selected}">${pieceArt(id)}${getPiece(id).text}</button>`).join('');
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
    $('feedback').textContent = '';
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
      $('feedback').textContent = '';
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
  function stop() { const wasRunning=running;clearInterval(timer);timer=null;running=false;window.EpisodeSound?.loop(false);if(wasRunning)window.EpisodeSound?.play('belt-stop'); }
  function run() {
    if (timer || served >= activeChefs*3) return;
    running = true; window.EpisodeSound?.loop(true);renderFactory();
    timer = setInterval(() => {
      served++;
      if (served === activeChefs*3) {
        stop();
        window.EpisodeSound?.play(['belt-stop','complete']);
        if (served === 9) {
          $('complete').hidden = false;
          $('complete-title').tabIndex = -1;
          $('complete-title').focus({preventScroll:true});
        } else {
          round = activeChefs+1;
          $('gate-title').textContent = `Cliente ${served+1}: precisamos de outra pessoa.`;
          $('gate-copy').textContent = `A pessoa ${activeChefs} chegou ao limite de 3 clientes. Ative a pessoa ${round} com outro fluxo.`;
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
      window.EpisodeSound?.play('error');
      $('feedback').textContent = `${correct} de 6 etapas corretas. Ajuste as peças marcadas.`; $('feedback').focus({preventScroll:true});
      return;
    }
    window.EpisodeSound?.play('complete');
    activeChefs = round;
    $('puzzle').hidden = true; document.querySelector('.factory').hidden=false;
    $('factory-status').textContent = `Fluxo ${round} correto. Pessoa ${round} ativada.`;
    run();
    document.querySelector('.factory').scrollIntoView({behavior:'auto',block:'start'});
    $('pause').focus({preventScroll:true});
  });
  $('pause').addEventListener('click', () => { if (running) { stop(); renderFactory(); } else run(); });
  $('new-flow').addEventListener('click', () => {
    slots = Array(6).fill(null); selected = null; checked = false;
    order = shuffle(pieces.map(p => p.id));
    $('gate').hidden = true; $('puzzle').hidden = false; document.querySelector('.factory').hidden=true;
    $('feedback').textContent = ``;
    renderPuzzle();
    $('puzzle-title').tabIndex = -1;
    $('puzzle-title').focus();
  });
  $('restart').addEventListener('click', () => {
    stop(); round=1;served=0;activeChefs=0;selected=null;slots=Array(6).fill(null);checked=false;
    order=shuffle(pieces.map(p=>p.id));
    $('complete').hidden=true;$('gate').hidden=true;$('puzzle').hidden=false;document.querySelector('.factory').hidden=true;
    $('feedback').textContent='';
    renderFactory();renderPuzzle();$('puzzle-title').focus();
  });
  window.addEventListener('pagehide', stop);
  window.addEventListener('pageshow', renderFactory);
  renderFactory(); renderPuzzle();
})();
