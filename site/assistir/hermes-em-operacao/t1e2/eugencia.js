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
    ['Construir','O passo a passo','criacao','Agora, transforme o material em post.','Crie um título, monte a arte, escreva a legenda e revise os dados. Acompanhe o resultado aparecer no editor ao lado.','Construir é produzir algo novo a partir do que você puxou: a combinação de imagem, título e legenda.'],
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
    return `<article class="work-card post" aria-label="Prévia do post"><div class="post-brand"><span class="brand-dot"></span>${c.brand}</div><div class="post-art"><h3>${s.built>=1?c.headline:'Seu título aparece aqui'}</h3>${s.built>=2?art(c.id):'<div class="placeholder">Espaço para a imagem</div>'}</div><p class="post-caption ${s.built<3?'empty':''}">${s.built>=3?c.caption:'A legenda aparece aqui.'}</p>${s.built===4?`<div class="review-stamp">✓ ${s.sent?'Enviado para aprovação':'Revisado · pronto para enviar'}</div>`:''}</article>`;
  }
  function render() {
    const focus=document.activeElement?.id;
    const c=client(),s=state(),t=stages[stage],completed=done()[stage];
    $('steps').innerHTML=stages.map((t,i)=>`<button id="stage-${i}" class="step" data-stage="${i}" ${i===stage?'aria-current="step"':''} aria-label="${i+1}. ${t[0]}${done()[i]?', concluída':''}"><span class="stage-picture">${art(t[2])}</span><strong><span class="step-number">${i+1}</span> ${t[0]}</strong>${done()[i]?'<span class="step-check" aria-hidden="true">✓</span>':''}</button>`).join('');
    $('clients').hidden=stage!==0;
    $('clients').innerHTML=clients.map(c=>`<button id="client-${c.id}" class="client" data-client="${c.id}" aria-pressed="${c.id===selected}">${art(c.id)}<span>${c.name}${orders[c.id].sent?' ✓':''}</span></button>`).join('');
    $('current-client').textContent=stage===0?'Escolha um cliente':c.brand;
    $('change-client').hidden=stage===0;
    $('step-index').textContent=`${stage+1} / 6 · ${t[0]}`;
    $('concept').textContent=t[4]+' '+t[5];
    let scene='',interaction='',title='',description='';
    const action=(id,label,disabled=false)=>`<button class="primary" id="${id}" ${disabled?'disabled':''}>${label}</button>`;
    const object=name=>`<div class="scene-object">${art(name)}</div>`;
    if(stage===0){
      title=s.received?'Pedido recebido.':'Receba o pedido.';
      description=s.received?'O chamado do cliente iniciou o fluxo.':'Um cliente quer divulgar uma novidade.';
      scene=s.received?`<div class="request-card"><span>${c.brand}</span><p>“${c.request}”</p></div>`:object('mensagem');
      if(!s.received)interaction=action('receive','Receber pedido');
    } else if(stage===1){
      title='Você faz tudo.';description='Atende, cria e entrega. Por enquanto, a agência é você.';
      scene='<div class="roles"><span>Atendimento</span><span>Criação</span><span>Entrega</span></div>';
      if(!s.received)interaction=action('go-trigger','Receber um pedido primeiro');
    } else if(stage===2){
      title=s.editor?'Editor aberto.':'Abra o editor.';
      description=s.editor?'A ferramenta está pronta para criar.':'Sua ferramenta para montar arte e legenda.';
      scene=object('editor');
      if(!s.received)interaction=action('go-trigger','Receber um pedido primeiro');
      else if(!s.editor)interaction=action('editor','Abrir editor');
    } else if(stage===3){
      title=s.materials?'Material em mãos.':'Consulte a pasta.';
      description=s.materials?'Você puxou o que já existia. Agora pode criar.':'Busque a imagem e as informações do cliente.';
      scene=s.materials?`<div class="material-preview">${art(c.id)}<strong>${c.novelty}</strong><p>${c.fact}</p><small>Voz: ${c.voice.toLowerCase()}.</small></div>`:object('pasta');
      if(!s.editor)interaction=action('go-editor','Abrir o editor primeiro');
      else if(!s.materials)interaction=action('materials','Consultar pasta');
    } else if(stage===4){
      const labels=['Criar o título','Montar a arte','Escrever a legenda','Revisar o post'];
      title=s.built===4?'Post pronto.':labels[s.built]+'.';
      description=['Transforme a novidade em um título.','Junte a imagem ao título.','Complete a mensagem do post.','Confira a novidade, os dados e o cliente.','Arte e legenda revisadas para aprovação.'][s.built];
      scene=post(c,s);
      interaction=`<div class="build-progress" aria-label="${s.built} de 4 ações concluídas">${labels.map((label,i)=>`<span class="${s.built>i?'complete':''}" title="${label}">${s.built>i?'✓':i+1}</span>`).join('')}</div>`;
      if(!s.materials)interaction+=action('go-materials','Consultar os materiais primeiro');
      else if(s.built<4)interaction+=`<button class="primary" id="build-${s.built}" data-build="${s.built}">${labels[s.built]}</button>`;
    } else {
      title=s.sent?'Entrega realizada.':'Envie ao cliente certo.';
      description=s.sent?'O post está aguardando aprovação.':'Envie a arte e a legenda para aprovação.';
      scene=post(c,s);
      if(s.sent)interaction=`<div class="success"><strong>✓ ${c.brand}</strong></div>`+action('change-client-done','Atender outro cliente');
      else if(s.built!==4)interaction=action('go-build','Terminar o post primeiro');
      else interaction=`<label class="interaction-label" for="recipient">Destinatário</label><select class="recipient" id="recipient"><option value="">Escolha o cliente</option>${clients.map(c=>`<option value="${c.id}" ${s.recipient===c.id?'selected':''}>${c.brand}</option>`).join('')}</select>${action('send','Enviar para aprovação')}`;
    }
    $('lesson-title').textContent=title;$('description').textContent=description;
    $('scene').classList.toggle('compact-post',stage>=4);
    $('scene').innerHTML=`<figure class="professional">${art('profissional')}</figure>${scene}`;
    $('interaction').innerHTML=interaction;$('feedback').textContent=message;
    $('feedback').hidden=!message;
    $('previous').disabled=stage===0;$('next').hidden=stage===5||!completed;
    if(focus&&$(focus)&&!$(focus).disabled&&!$(focus).hidden)$(focus).focus({preventScroll:true});
  }
  document.addEventListener('click',event=>{
    const button=event.target.closest('button');if(!button||button.disabled)return;
    const s=state();message='';
    const oldStage=stage;
    if(button.dataset.stage!==undefined)stage=Number(button.dataset.stage);
    else if(button.dataset.client){selected=button.dataset.client;stage=0;}
    else if(button.id==='previous')stage=Math.max(0,stage-1);
    else if(button.id==='next'&&done()[stage])stage=Math.min(5,stage+1);
    else if(['change-client','change-client-done','go-trigger'].includes(button.id))stage=0;
    else if(button.id==='go-editor')stage=2;
    else if(button.id==='go-materials')stage=3;
    else if(button.id==='go-build')stage=4;
    else if(button.id==='receive'){s.received=true;}
    else if(button.id==='editor'&&s.received){s.editor=true;}
    else if(button.id==='materials'&&s.editor){s.materials=true;}
    else if(button.dataset.build!==undefined&&s.materials&&Number(button.dataset.build)===s.built){s.built++;}
    else if(button.id==='send'&&s.built===4){
      if(!s.recipient)message='Escolha quem deve receber a arte e a legenda.';
      else if(s.recipient!==selected)message=`Este pedido é de ${client().brand}. Confira o destinatário antes de enviar.`;
      else{s.sent=true;}
    } else if(button.id==='reset'){orders[selected]=blank();stage=0;message='Este atendimento foi reiniciado. Os outros clientes mantêm seu progresso.';}
    else return;
    if(oldStage!==stage)$('explanation').open=false;
    render();
    // Keep keyboard users at the next meaningful action after completing a task.
    if(button.dataset.build!==undefined&&state().built<4)$('build-'+state().built)?.focus({preventScroll:true});
    else if(['receive','editor','materials'].includes(button.id)||(button.dataset.build!==undefined&&state().built===4))$('next').focus({preventScroll:true});
    else if(button.id==='send'&&state().sent)$('change-client-done').focus({preventScroll:true});
    else if(button.id.startsWith('go-')||button.id.startsWith('change-client'))(stage===0?$('client-'+selected):$('interaction').querySelector('button'))?.focus({preventScroll:true});
  });
  document.addEventListener('change',event=>{if(event.target.id==='recipient'){state().recipient=event.target.value;$('feedback').textContent='';}});
  render();
})();
