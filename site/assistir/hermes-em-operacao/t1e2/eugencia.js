(() => {
  'use strict';
  const clients = [
    {id:'cafe',name:'Cafeteria',brand:'Café da Esquina',request:'Quero divulgar nosso novo café gelado nesta semana.',novelty:'Café gelado',fact:'Disponível no balcão da cafeteria.',voice:'Acolhedora e simples',headline:'Sua pausa, agora gelada.',caption:'O café gelado chegou ao Café da Esquina. Passe no nosso balcão e conheça a novidade desta semana.'},
    {id:'academia',name:'Academia',brand:'Academia Movimento',request:'Quero apresentar a nova aula de alongamento nesta semana.',novelty:'Aula de alongamento',fact:'Informações e inscrições na recepção.',voice:'Direta e convidativa',headline:'Um novo momento para se mover.',caption:'Tem novidade na Academia Movimento: aula de alongamento. Consulte os horários e faça sua inscrição na recepção.'},
    {id:'loja',name:'Loja de roupas',brand:'Loja Horizonte',request:'Quero mostrar as camisas de linho que chegaram nesta semana.',novelty:'Camisas de linho',fact:'A nova coleção está disponível na loja.',voice:'Leve e próxima',headline:'Linho para os seus dias.',caption:'As novas camisas de linho chegaram à Loja Horizonte. Venha conhecer a coleção e escolher a sua na loja.'}
  ];
  const stages = [
    ['Gatilho','O que dispara','mensagem','O cliente chama. O trabalho começa.','Uma mensagem chega com um pedido: divulgar a novidade da semana. Escolha um cliente no seu espaço de trabalho e receba o pedido.','O gatilho é o acontecimento que inicia o trabalho. Aqui, é a chegada da mensagem do cliente.'],
    ['Agente','Quem executa','profissional','Atendimento, criação e entrega. Você.','Sua agência ainda é uma Eugência. A mesma pessoa entende o pedido, consulta os materiais, cria o post e conversa com o cliente.','Agente é quem executa. Nesta primeira versão, todos os papéis estão com você.'],
    ['Ferramenta','Com o que faz','editor','Abra seu espaço de criação.','Você vai usar um editor de conteúdo para montar a arte e escrever a legenda. Abrir a ferramenta prepara o trabalho, mas o post ainda não existe.','Ferramenta é o recurso que o agente usa para realizar a tarefa. Aqui, um editor de conteúdo.'],
    ['Puxar','O que já existe','pasta','Antes de criar, consulte.','Abra a pasta do cliente e consulte o pedido, a imagem e as informações da marca. Esses materiais já estavam prontos.','Puxar é buscar informação que já existe. A novidade, os fatos e o material visual vêm do cliente.'],
    ['Construir','O passo a passo','criacao','Agora, transforme o material em post.','Crie uma chamada, monte a arte, escreva a legenda e revise os dados. Acompanhe o resultado aparecer no editor ao lado.','Construir é produzir algo novo a partir do que você puxou: a combinação de imagem, chamada e legenda.'],
    ['Entrega','Para onde vai','envio','O post pronto chega ao cliente certo.','Escolha quem vai receber a arte e a legenda para aprovação. A entrega precisa chegar ao cliente que fez o pedido.','Entrega define o destino e o formato do resultado. Este fluxo termina no envio para aprovação; a publicação seria outro fluxo.']
  ];
  const blank = () => ({received:false,editor:false,materials:false,built:0,recipient:'',sent:false});
  const orders = Object.fromEntries(clients.map(c => [c.id,blank()]));
  let selected='cafe', stage=0, message='';
  const $ = id => document.getElementById(id);
  const art = (name,cls='') => `<img class="${cls}" src="art/eugencia/${name}.png" alt="" draggable="false">`;
  const state = () => orders[selected];
  const client = () => clients.find(c => c.id===selected);
  const done = () => [state().received,state().received,state().editor,state().materials,state().built===4,state().sent];
  function post(c,s) {
    return `<article class="work-card post" aria-label="Prévia do post"><div class="post-brand"><span class="brand-dot"></span>${c.brand}</div><div class="post-art"><h3>${s.built>=1?c.headline:'Sua chamada aparece aqui'}</h3>${s.built>=2?art(c.id):'<div class="placeholder">Espaço para a imagem</div>'}</div><p class="post-caption ${s.built<3?'empty':''}">${s.built>=3?c.caption:'A legenda aparece aqui.'}</p>${s.built===4?`<div class="review-stamp">✓ ${s.sent?'Enviado para aprovação':'Revisado · pronto para enviar'}</div>`:''}</article>`;
  }
  function render() {
    const focus=document.activeElement?.id;
    const c=client(),s=state(),t=stages[stage];
    $('steps').innerHTML=stages.map((t,i)=>`<button id="stage-${i}" class="step" data-stage="${i}" ${i===stage?'aria-current="step"':''} aria-label="${i+1}. ${t[0]}${done()[i]?', concluída':''}"><span class="stage-picture">${art(t[2])}</span><strong><span class="step-number">${i+1}</span> ${t[0]}</strong><small>${t[1]}${done()[i]?' · ✓':''}</small></button>`).join('');
    $('clients').innerHTML=clients.map(c=>`<button id="client-${c.id}" class="client" data-client="${c.id}" aria-pressed="${c.id===selected}">${art(c.id)}<span>${c.name}<small>${orders[c.id].sent?'Enviado para aprovação':orders[c.id].received?'Em atendimento':'Novo pedido'}</small></span></button>`).join('');
    $('step-index').textContent=`ETAPA ${stage+1} DE 6 · ${t[0]}`;
    $('lesson-title').textContent=t[3];$('description').textContent=t[4];$('concept').textContent=t[5];
    $('order-client').textContent=c.brand;$('order-status').textContent=s.sent?'Aguardando aprovação':s.built===4?'Pronto para enviar':s.received?'Em atendimento':'Aguardando pedido';
    let scene='',interaction='',caption='';
    const action=(id,label,disabled=false)=>`<button class="primary" id="${id}" ${disabled?'disabled':''}>${label}</button>`;
    if(stage===0){
      scene=`<div class="work-card ${s.received?'':'waiting'}">${art('mensagem')}<p class="eyebrow">${s.received?c.brand:'CAIXA DE ENTRADA'}</p><h3>${s.received?'Novo pedido recebido':'Um cliente quer falar com você.'}</h3><p>${s.received?'“'+c.request+'”':'Clique em Receber pedido para começar.'}</p></div>`;
      interaction=action('receive',s.received?'Pedido recebido ✓':'Receber pedido',s.received);
      caption=s.received?`${c.brand} pediu um post sobre ${c.novelty.toLowerCase()}.`:`${c.brand} está pronto para enviar uma mensagem.`;
    } else if(stage===1){
      scene=`<div class="work-card"><p class="eyebrow">SUA EQUIPE</p><h3>Por enquanto, só você.</h3><p>Uma pessoa acompanha o pedido do começo ao fim.</p><span class="material-tag">Atendimento</span><span class="material-tag">Criação</span><span class="material-tag">Entrega</span></div>`;
      interaction=`<div class="role-card">${art('profissional')}<div><strong>Agente: você</strong><p>Você é responsável por todas as etapas deste atendimento.</p></div></div>`;
      caption='Muda a tarefa. A pessoa que executa continua a mesma.';
    } else if(stage===2){
      scene=`<div class="work-card">${art('editor')}<p class="eyebrow">FERRAMENTA</p><h3>${s.editor?'Editor aberto':'Seu editor de conteúdo'}</h3><p>${s.editor?'A área de trabalho está pronta. Agora faltam os materiais do cliente.':'Um espaço para a arte e a legenda.'}</p></div>`;
      interaction=action('editor',s.editor?'Editor aberto ✓':'Abrir editor',!s.received||s.editor);
      if(!s.received)interaction+='<p class="hint">Receba o pedido na etapa Gatilho para começar.</p>';
      caption=s.editor?'O editor está aberto. O post ainda será construído.':'A ferramenta ajuda você a executar o trabalho.';
    } else if(stage===3){
      scene=`<div class="work-card">${art(s.materials?c.id:'pasta')}<p class="eyebrow">PASTA · ${c.brand}</p><h3>${s.materials?c.novelty:'Os materiais já existem.'}</h3><p>${s.materials?c.fact:'Consulte a pasta para conhecer a novidade e a imagem enviada.'}</p>${s.materials?'<span class="material-tag">Imagem</span><span class="material-tag">Informações</span><span class="material-tag">Identidade</span>':''}</div>`;
      interaction=action('materials',s.materials?'Materiais consultados ✓':'Consultar pasta do cliente',!s.editor||s.materials);
      if(!s.editor)interaction+='<p class="hint">Abra o editor na etapa Ferramenta antes de continuar.</p>';
      if(s.materials)interaction+=`<div class="facts"><p><b>Pedido:</b> ${c.request}</p><p><b>Informação:</b> ${c.fact}</p><p><b>Voz da marca:</b> ${c.voice}.</p><p><b>Material visual:</b> ilustração e identidade disponíveis na pasta.</p></div>`;
      caption=s.materials?'Você consultou o material existente. Ainda falta criar a mensagem do post.':'Puxar é consultar o que o cliente já forneceu.';
    } else if(stage===4){
      scene=post(c,s);
      interaction='<div class="action-stack">'+['Criar a chamada','Montar a arte','Escrever a legenda','Revisar pedido e informações'].map((label,i)=>`<button class="secondary ${s.built>i?'completed':''}" id="build-${i}" data-build="${i}" ${!s.materials||s.built!==i?'disabled':''}><span class="check">${s.built>i?'✓':i+1}</span>${label}</button>`).join('')+'</div>';
      if(!s.materials)interaction+='<p class="hint">Consulte a pasta na etapa Puxar para ter os materiais.</p>';
      caption=['O material está na pasta. Comece pela chamada.','A chamada foi criada a partir da novidade.','A imagem e a chamada formam a arte.','A legenda completa a mensagem. Agora revise.','Arte e legenda revisadas. Prontas para aprovação.'][s.built];
    } else {
      scene=post(c,s);
      interaction=s.sent?`<div class="success"><strong>Entrega realizada ✓</strong><p>${c.brand} recebeu a arte e a legenda nesta simulação. O pedido está aguardando aprovação.</p></div><p class="hint">Escolha outro cliente para acompanhar um novo pedido.</p>`:`<label class="interaction-label" for="recipient">Quem deve receber o post?</label><select class="recipient" id="recipient"><option value="">Escolha o destinatário</option>${clients.map(c=>`<option value="${c.id}" ${s.recipient===c.id?'selected':''}>${c.brand}</option>`).join('')}</select>${action('send','Enviar para aprovação',s.built!==4)}${s.built!==4?'<p class="hint">Conclua as quatro ações da etapa Construir antes de enviar.</p>':''}`;
      caption=s.sent?`Entrega concluída para ${c.brand}. A aprovação ainda está pendente.`:'O destino também faz parte do fluxo: entregue ao cliente que fez o pedido.';
    }
    $('scene').classList.toggle('compact-post',stage>=4);
    $('scene').innerHTML=`<figure class="professional">${art('profissional')}<figcaption>Você · ${['atendimento','todos os papéis','criação','pesquisa','criação','atendimento'][stage]}</figcaption></figure>${scene}`;
    $('scene-caption').textContent=caption;$('interaction').innerHTML=interaction;$('feedback').textContent=message;
    $('position').textContent=`${stage+1} de 6 · ${t[0]}`;$('previous').disabled=stage===0;$('next').disabled=stage===5;
    if(focus&&$(focus)&&!$(focus).disabled)$(focus).focus({preventScroll:true});
  }
  document.addEventListener('click',event=>{
    const button=event.target.closest('button');if(!button||button.disabled)return;
    const s=state();message='';
    if(button.dataset.stage!==undefined)stage=Number(button.dataset.stage);
    else if(button.dataset.client){selected=button.dataset.client;stage=0;}
    else if(button.id==='previous')stage=Math.max(0,stage-1);
    else if(button.id==='next')stage=Math.min(5,stage+1);
    else if(button.id==='receive'){s.received=true;message='Pedido recebido. Avance para conhecer quem executa.';}
    else if(button.id==='editor'&&s.received){s.editor=true;message='Editor aberto. Na próxima etapa, consulte os materiais.';}
    else if(button.id==='materials'&&s.editor){s.materials=true;message='Materiais consultados. Agora você pode construir o post.';}
    else if(button.dataset.build!==undefined&&s.materials&&Number(button.dataset.build)===s.built){s.built++;message=s.built===4?'Revisão concluída: a novidade, os dados e o cliente estão corretos.':'Veja o post tomando forma ao lado.';}
    else if(button.id==='send'&&s.built===4){
      if(!s.recipient)message='Escolha quem deve receber a arte e a legenda.';
      else if(s.recipient!==selected)message=`Este pedido é de ${client().brand}. Confira o destinatário antes de enviar.`;
      else{s.sent=true;message='Envio simulado concluído. Nenhuma publicação foi feita.';}
    } else if(button.id==='reset'){orders[selected]=blank();stage=0;message='Este atendimento foi reiniciado. Os outros clientes mantêm seu progresso.';}
    else return;
    render();
    // Keep keyboard users at the next meaningful action after completing a task.
    if(button.dataset.build!==undefined&&state().built<4)$('build-'+state().built)?.focus({preventScroll:true});
    else if(['receive','editor','materials'].includes(button.id)||(button.dataset.build!==undefined&&state().built===4))$('next').focus({preventScroll:true});
  });
  document.addEventListener('change',event=>{if(event.target.id==='recipient'){state().recipient=event.target.value;$('feedback').textContent='';}});
  render();
})();
