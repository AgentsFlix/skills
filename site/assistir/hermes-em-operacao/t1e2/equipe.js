'use strict';
(() => {
  const $ = id => document.getElementById(id);
  const roles = ['Receber o pedido', 'Servir na mesa', 'Receber o bilhete', 'Preparar e devolver', 'Receber o pedido de conta', 'Fechar o pagamento'];
  const cards = [
    {id:'receive', slot:0, text:'O cliente toca a campainha. Anotar na caderneta e consultar somente o pedido escolhido.', tags:'Gatilho · Agente Chef 1 · Ferramenta · Puxar'},
    {id:'serve', slot:1, text:'Receber o prato pronto da cozinha e servir na mesa que fez o pedido.', tags:'Gatilho: prato pronto · Entrega'},
    {id:'ticket', slot:2, text:'Um novo bilhete de pedido chega e inicia o trabalho na cozinha.', tags:'Gatilho · Agente Chef 2'},
    {id:'cook', slot:3, text:'Preparar o miojo com o tempero escolhido e devolver o prato pronto ao responsável pelo salão.', tags:'Construir · Entrega'},
    {id:'payment', slot:4, text:'O cliente pede a conta e inicia o fechamento do pedido.', tags:'Gatilho de pagamento · Agente Chef 3'},
    {id:'close', slot:5, text:'Consultar os gastos, somar o total, cobrar com a maquininha e entregar a nota fiscal.', tags:'Puxar · Construir · Ferramenta · Entrega'},
    {id:'all', slot:-1, text:'Cada chef recebe o pedido, cozinha, serve e fecha a conta sozinho.', tags:'Uma proposta de organização'},
    {id:'guess', slot:-1, text:'Preparar qualquer miojo sem esperar o bilhete com o pedido.', tags:'Uma proposta de organização'}
  ];
  const hints = ['Quem está no salão recebe e anota o pedido.','O prato precisa voltar ao responsável pela mesa.','A cozinha começa quando recebe o pedido anotado.','Quem está na cozinha transforma o pedido em prato.','O pagamento tem um chamado próprio do cliente.','Quem fecha a conta consulta os gastos e calcula o total.'];
  const bridges = [
    {label:'Chef 1 → Chef 2', sub:'Do atendimento para o preparo', answer:'ticket', hint:'A cozinha precisa saber o que foi pedido.'},
    {label:'Chef 2 → Chef 1', sub:'Do preparo para a entrega na mesa', answer:'dish', hint:'O preparo terminou. O que volta para o salão?'},
    {label:'Cliente → Chef 3', sub:'Um gatilho próprio para o pagamento', answer:'bill', hint:'É o cliente que avisa quando quer fechar a conta.'}
  ];
  const options = [['ticket','Bilhete do pedido'],['dish','Prato pronto'],['bill','Pedido de pagamento'],['invoice','Nota fiscal']];
  const chef = `<svg class="chef-icon" viewBox="0 0 44 58" aria-hidden="true"><path d="M7 58V41Q22 29 37 41V58" fill="#c5b78c"/><circle cx="22" cy="26" r="13" fill="#be8d6c"/><path d="M8 17Q0 8 10 6Q13-2 22 5Q34-2 37 8Q45 15 35 20H8Z" fill="#eee8d1"/><circle cx="18" cy="25" r="1.5" fill="#382c24"/><circle cx="27" cy="25" r="1.5" fill="#382c24"/><path d="M18 32Q22 36 27 31" stroke="#664b39" fill="none"/></svg>`;
  let slots=Array(6).fill(null), links=['','',''], selected=null, dragged=null, checked=false;
  let demo=0, tick=-1, mode='demo', timer=null;
  const order=cards.map(c=>c.id);
  for(let i=order.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[order[i],order[j]]=[order[j],order[i]];}
  const card=id=>cards.find(c=>c.id===id);
  function renderAssembly(){
    $('piece-count').textContent=`${slots.filter(Boolean).length} / 6 peças`;
    $('selection').textContent=selected?`Selecionada: ${card(selected).text} Escolha o destino.`:'Escolha uma peça ou arraste até uma responsabilidade. Para retirar, devolva à mesa.';
    $('lanes').innerHTML=[0,1,2].map(n=>`<article class="lane"><div class="lane-head">${chef}<div><h3>Chef ${n+1}</h3><p>${['Atendimento e entrega','Preparo na cozinha','Fechamento da conta'][n]}</p></div></div>${[n*2,n*2+1].map(i=>{const c=card(slots[i]);const ok=c?.slot===i;return `<div class="responsibility ${checked?(ok?'correct':'wrong'):''}" data-destination="${i}"><span class="role">${roles[i]}</span><button class="target ${c?'filled':''} ${c?.id===selected?'selected':''}" data-slot="${i}" draggable="${Boolean(c)}" ${c?`data-drag="${c.id}"`:''} aria-label="Chef ${n+1}, ${roles[i]}: ${c?c.text:'espaço vazio'}">${c?c.text:'+ Colocar uma peça'}</button>${c?`<button class="remove" data-remove="${i}">Retirar peça</button>`:''}${checked?`<p class="hint">${ok?'✓ Correto':hints[i]}</p>`:''}</div>`;}).join('')}</article>`).join('');
    $('pieces').innerHTML=order.filter(id=>!slots.includes(id)).map(id=>`<button class="piece" data-piece="${id}" data-drag="${id}" draggable="true" aria-pressed="${id===selected}">${card(id).text}<small>${card(id).tags}</small></button>`).join('');
    $('connections').innerHTML=bridges.map((b,i)=>`<div class="connection"><label for="bridge-${i}">${b.label}</label><p>${b.sub}</p><select id="bridge-${i}" data-bridge="${i}"><option value="">Escolha o que passa</option>${options.map(([value,text])=>`<option value="${value}" ${links[i]===value?'selected':''}>${text}</option>`).join('')}</select>${checked?`<p class="hint">${links[i]===b.answer?'✓ Passagem correta':b.hint}</p>`:''}</div>`).join('');
  }
  function place(i){
    if(!selected){selected=slots[i];renderAssembly();document.querySelector(`[data-slot="${i}"]`).focus({preventScroll:true});return;}
    const old=slots.indexOf(selected);if(old>=0)slots[old]=null;
    slots[i]=selected;selected=null;checked=false;
    $('feedback').textContent='Você pode ajustar as peças e as passagens antes de conferir.';
    renderAssembly();document.querySelector(`[data-slot="${i}"]`).focus({preventScroll:true});
  }
  $('assembly').addEventListener('click',e=>{
    const piece=e.target.closest('[data-piece]');if(piece){selected=selected===piece.dataset.piece?null:piece.dataset.piece;renderAssembly();document.querySelector(`[data-piece="${piece.dataset.piece}"]`).focus({preventScroll:true});return;}
    const remove=e.target.closest('[data-remove]');if(remove){const i=+remove.dataset.remove;slots[i]=null;selected=null;checked=false;renderAssembly();document.querySelector(`[data-slot="${i}"]`).focus({preventScroll:true});return;}
    const target=e.target.closest('[data-slot]');if(target)place(+target.dataset.slot);
  });
  $('connections').addEventListener('change',e=>{if(e.target.dataset.bridge!==undefined){const i=+e.target.dataset.bridge;links[i]=e.target.value;checked=false;renderAssembly();$(`bridge-${i}`).focus({preventScroll:true});}});
  function clearDrag(){dragged=null;document.querySelectorAll('.dragging,.drag-over').forEach(el=>el.classList.remove('dragging','drag-over'));}
  $('assembly').addEventListener('dragstart',e=>{const source=e.target.closest('[data-drag]');if(!source)return;dragged=source.dataset.drag;e.dataTransfer.setData('text/plain',dragged);e.dataTransfer.effectAllowed='move';source.classList.add('dragging');});
  $('assembly').addEventListener('dragover',e=>{const target=e.target.closest('[data-destination],#pieces');if(!dragged||!target)return;e.preventDefault();e.dataTransfer.dropEffect='move';document.querySelectorAll('.drag-over').forEach(el=>el.classList.remove('drag-over'));target.classList.add('drag-over');});
  $('assembly').addEventListener('dragleave',e=>{const t=e.target.closest('[data-destination],#pieces');if(t&&!t.contains(e.relatedTarget))t.classList.remove('drag-over');});
  $('assembly').addEventListener('dragend',clearDrag);
  $('assembly').addEventListener('drop',e=>{const target=e.target.closest('[data-destination],#pieces');if(!dragged||!target)return;e.preventDefault();const id=dragged;clearDrag();if(target.id==='pieces'){const old=slots.indexOf(id);if(old>=0)slots[old]=null;selected=null;checked=false;renderAssembly();document.querySelector(`[data-piece="${id}"]`).focus({preventScroll:true});}else{selected=id;place(+target.dataset.destination);}});
  const phaseLabels=['Na fila','Anotado','Preparado','Servido','Pediu conta','Fechado'];
  const demoActions=['Cliente toca a campainha →','Chef 2 recebe o bilhete →','Chef 1 recebe o prato →','Cliente pede a conta →','Chef 3 fecha o pedido →'];
  const demoText=[
    'Tudo pronto. O cliente ainda não chamou.',
    'Cliente → Chef 1: a campainha toca. O pedido é anotado e o bilhete segue para o Chef 2.',
    'Chef 1 → Chef 2: o bilhete recebido dispara o preparo. O miojo fica pronto.',
    'Chef 2 → Chef 1: o prato pronto volta ao salão e é servido na mesa do cliente.',
    'Cliente → Chef 3: o pedido de pagamento inicia um fluxo próprio. A conta ainda não foi fechada.',
    'Chef 3: consulta os gastos, soma o total, cobra com a maquininha e entrega a nota fiscal.'
  ];
  function phases(){return mode==='demo'?[demo]:Array.from({length:15},(_,i)=>Math.max(0,Math.min(5,tick-i+1)));}
  function renderSimulation(){
    const states=phases();const countAt=p=>states.filter(s=>s>=p).length;
    const incoming=states.flatMap((s,i)=>s===1?[i+1]:[]), cooking=states.flatMap((s,i)=>s===2?[i+1]:[]), serving=states.flatMap((s,i)=>s===3?[i+1]:[]), paying=states.flatMap((s,i)=>s===4?[i+1]:[]);
    const jobs=[[
      incoming.length?`Anotando pedido ${incoming.join(', ')}.`:'',serving.length?`Servindo pedido ${serving.join(', ')}.`:''
    ].filter(Boolean).join(' ')||'Aguardando chamado ou prato pronto.',cooking.length?`Preparando pedido ${cooking.join(', ')} recebido por bilhete.`:'Aguardando bilhete de pedido.',paying.length?`Recebeu pedido de pagamento ${paying.join(', ')}. Consultando gastos e calculando a conta.`:'Aguardando pedido de pagamento.'];
    const metrics=[[[countAt(1),'pedidos anotados'],[countAt(3),'pratos servidos']],[[countAt(2),'pratos preparados']],[[countAt(5),'contas fechadas']]];
    $('team').innerHTML=[0,1,2].map(n=>`<article class="team-chef ${[incoming.length||serving.length,cooking.length,paying.length][n]?'active':''}"><div class="lane-head">${chef}<div><h3>Chef ${n+1}</h3><p>${['Atende e serve','Prepara os pratos','Fecha as contas'][n]}</p></div></div><div class="metrics">${metrics[n].map(([value,label])=>`<div><strong data-metric="${label}">${value}<small> / ${states.length}</small></strong><span>${label}</span></div>`).join('')}</div><p class="current-job">${jobs[n]}</p></article>`).join('');
    $('orders').innerHTML=states.map((s,i)=>`<div class="team-order ${s===5?'done':s?'working':''}" aria-label="Pedido ${i+1}: ${phaseLabels[s]}"><b>${i+1}</b><span>${phaseLabels[s]}</span></div>`).join('');
    $('count').textContent=`${countAt(5)} de ${states.length} atendimentos concluídos`;
    $('step').hidden=mode!=='demo'||demo===5;$('step').textContent=demoActions[demo]||'Atendimento concluído';
    $('bulk').hidden=mode!=='demo'||demo!==5;
    $('pause').hidden=mode!=='bulk'||countAt(5)===15;$('pause').textContent=timer?'Pausar atendimento':'Retomar atendimento';
    $('result').hidden=mode!=='bulk'||countAt(5)!==15;
    $('handoff').textContent=mode==='demo'?demoText[demo]:countAt(5)===15?'Todos os 15 clientes receberam seus pratos e suas notas fiscais.':`${incoming.length?`Pedido ${incoming[0]}: Chef 1 anota. `:''}${cooking.length?`Pedido ${cooking[0]}: Chef 2 prepara. `:''}${serving.length?`Pedido ${serving[0]}: Chef 1 serve. `:''}${paying.length?`Pedido ${paying[0]}: cliente pede a conta ao Chef 3. `:''}${countAt(5)} contas fechadas.`;
  }
  function stop(){clearInterval(timer);timer=null;}
  function play(){
    if(timer||tick>=18)return;
    timer=setInterval(()=>{tick++;if(tick>=18)stop();renderSimulation();},1000);
    renderSimulation();
  }
  $('verify').addEventListener('click',()=>{
    checked=true;selected=null;renderAssembly();const correct=slots.filter((id,i)=>card(id)?.slot===i).length;const connected=links.filter((value,i)=>value===bridges[i].answer).length;
    if(correct!==6||connected!==3){$('feedback').textContent=`${correct} de 6 responsabilidades e ${connected} de 3 passagens corretas. Use as pistas e ajuste sua equipe.`;return;}
    demo=0;mode='demo';$('assembly').hidden=true;$('simulation').hidden=false;renderSimulation();$('simulation').scrollIntoView({block:'start'});$('step').focus({preventScroll:true});
  });
  $('step').addEventListener('click',()=>{if(demo>=5)return;demo++;renderSimulation();if(demo===5)$('bulk').focus({preventScroll:true});});
  function startBulk(){stop();mode='bulk';tick=-1;$('mode-label').textContent='AGORA · PEDIDOS EM PARALELO';$('mode-description').textContent='Os mesmos clientes passam pelo atendimento, pelo preparo e pelo pagamento. A capacidade da equipe é de 15 atendimentos completos.';play();$('simulation').scrollIntoView({block:'start'});$('pause').focus({preventScroll:true});}
  $('bulk').addEventListener('click',startBulk);$('replay').addEventListener('click',startBulk);
  $('pause').addEventListener('click',()=>{if(timer){stop();renderSimulation();}else play();});
  $('edit').addEventListener('click',()=>{stop();demo=0;tick=-1;mode='demo';$('assembly').hidden=false;$('simulation').hidden=true;$('mode-label').textContent='PRIMEIRO · ACOMPANHE UM PEDIDO';$('mode-description').textContent='Avance uma ação de cada vez. O pagamento começa quando o cliente pede a conta.';renderAssembly();$('assembly-title').tabIndex=-1;$('assembly-title').focus();});
  window.addEventListener('pagehide',stop);window.addEventListener('pageshow',()=>{if(!$('simulation').hidden)renderSimulation();});
  renderAssembly();
})();
