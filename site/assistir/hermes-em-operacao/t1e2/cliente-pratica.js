(() => {
'use strict';
const $=id=>document.getElementById(id);
const art=name=>`<img src="art/${['academia','cafe','editor','loja','mensagem','profissional'].includes(name)?'v2':'eugencia'}/${name}.png" alt="" draggable="false">`;
const niches=[{id:'cafe',label:'Cafeteria',subject:'Café gelado',detail:'Bebidas, encontros e pausas.'},{id:'academia',label:'Academia',subject:'Nova aula',detail:'Movimento, rotina e treino.'},{id:'loja',label:'Moda',subject:'Nova coleção',detail:'Peças, estilo e combinações.'}];
const voices=[{id:'proxima',label:'Próxima',example:['Sua pausa merece um café. Vem conhecer a novidade!','Bora se movimentar? Tem aula nova esperando por você.','Seu próximo look pode estar aqui. Vem ver as novidades!']},{id:'direta',label:'Direta',example:['Novo café gelado. Disponível no balcão.','Nova aula disponível. Consulte os horários na recepção.','Nova coleção disponível. Conheça as peças na loja.']},{id:'editorial',label:'Editorial',example:['Um novo jeito de apreciar a sua pausa.','Movimento para fazer parte dos seus dias.','Texturas e formas para acompanhar os seus dias.']}];
const looks=[{id:'natural',label:'Natural',detail:'Tons quentes · serifada',colors:['#ede4d5','#76533d','#bda78e']},{id:'grafica',label:'Gráfica',detail:'Contraste · títulos fortes',colors:['#d8eb69','#202620','#f4f5e9']},{id:'essencial',label:'Essencial',detail:'Respiro · linhas simples',colors:['#e6f0ed','#325c67','#78a9ad']}];
const templates=[{id:'novidade',label:'Novidade',detail:'Apresentar algo novo.'},{id:'dica',label:'Dica',detail:'Compartilhar algo útil.'},{id:'bastidores',label:'Bastidores',detail:'Mostrar como é feito.'},{id:'checklist',label:'Checklist',detail:'Orientar com uma lista.'},{id:'enquete',label:'Enquete',detail:'Convidar o público a escolher.'},{id:'frase',label:'Frase da marca',detail:'Dar voz à marca com tipografia.'}];
const flow=['Gatilho','Agente','Ferramenta','Elicitar','Puxar','Construir','Entrega'];
const parts=['Nicho','Escrita','Visual','Templates'];
let stage=0,part=0,received=false,toolsReady=false,finished=false;
let profile={niche:null,voice:null,look:null,templates:[]};
let pulled=null,selectedTemplate=null,built=false,sent=false,recipient='',feedback='';
const invalidate=()=>{pulled=null;selectedTemplate=null;built=false;sent=false;recipient='';feedback='';};
const clients=[
 {niche:'cafe',voice:'proxima',look:'natural',templates:['novidade','checklist','enquete']},
 {niche:'academia',voice:'direta',look:'grafica',templates:['dica','bastidores','checklist']},
 {niche:'loja',voice:'editorial',look:'essencial',templates:['novidade','enquete','frase']}
];
let current=0,asked=[false,false,false,false],confirmed=[false,false,false,false],answerFeedback='';
const deliveries=[null,null,null];
const expected=()=>clients[current];
function resetClient(){stage=0;part=0;received=false;toolsReady=false;finished=false;profile={niche:null,voice:null,look:null,templates:[]};asked=[false,false,false,false];confirmed=[false,false,false,false];answerFeedback='';invalidate();}
const niche=()=>niches.find(n=>n.id===profile.niche)||niches[0];
const voice=()=>voices.find(v=>v.id===profile.voice)||voices[0];
const ready=()=>[Boolean(profile.niche),Boolean(profile.voice),Boolean(profile.look),profile.templates.length===3];
function sample(look,kind='novidade',n=niche(),customTitle=null){
 const title=customTitle||({novidade:n.subject,dica:'Uma dica para hoje',bastidores:'Por trás da marca',checklist:'Antes da sua visita',enquete:'Qual combina com você?',frase:{cafe:'Toda pausa tem seu valor.',academia:'Seu ritmo. Seu espaço.',loja:'Seu estilo conta sua história.'}[n.id]}[kind]);
 const list={cafe:['Veja o menu','Escolha sua bebida','Aproveite a pausa'],academia:['Confira os horários','Conheça as aulas','Converse na recepção'],loja:['Conheça as peças','Explore combinações','Encontre seu estilo']}[n.id];
 const options={cafe:['Quente','Gelado'],academia:['Manhã','Noite'],loja:['Clássico','Casual']}[n.id];
 const body=kind==='checklist'?`<div class="sample-checklist">${list.map((item,i)=>`<span><b>${i+1}</b>${item}</span>`).join('')}</div>`:kind==='enquete'?`<div class="sample-poll">${options.map(item=>`<span><i></i>${item}</span>`).join('')}</div>`:kind==='frase'?'<span class="sample-signature">Palavras que representam a marca</span>':art(n.id);
 const note={novidade:'Conheça a novidade',dica:'Salve para lembrar',bastidores:'Conheça nossa rotina',checklist:'Salve esta lista',enquete:'Conte nos comentários',frase:'Compartilhe essa ideia'}[kind];
 return `<div class="sample look-${look} type-${kind}" aria-hidden="true"><span class="sample-brand">SUA MARCA</span><strong>${title}</strong>${body}<span class="sample-note">${note}</span></div>`;
}
const brands={cafe:'Café da Esquina',academia:'Academia Movimento',loja:'Loja Horizonte'};
const colors=l=>`<div class="swatches" aria-label="Cores da identidade">${l.colors.map(c=>`<i style="background:${c}" title="${c}"></i>`).join('')}</div>`;
function contentFor(doc,kind){
 const n=niches.find(n=>n.id===doc.niche),i=niches.indexOf(n),v=voices.find(v=>v.id===doc.voice);
 if(['checklist','enquete','frase'].includes(kind)){
   const subject={cafe:'sua pausa',academia:'sua rotina',loja:'seu estilo'}[doc.niche];
   const titles={checklist:{proxima:'Vamos preparar a visita?',direta:'Antes da sua visita',editorial:'Pequenos passos para '+subject},enquete:{proxima:'Qual combina com você?',direta:'Escolha sua preferência',editorial:'Duas possibilidades para '+subject},frase:{proxima:['Uma pausa só sua!','Seu ritmo tem lugar aqui!','Seu estilo é a sua cara!'],direta:['Reserve sua pausa.','Encontre seu ritmo.','Escolha seu estilo.'],editorial:['Toda pausa tem seu valor.','Seu ritmo. Seu espaço.','Seu estilo conta sua história.']}};
   const captions={checklist:{proxima:'Salva essa lista para a próxima visita. A gente te espera!',direta:'Confira os três passos e salve a lista para consultar depois.',editorial:'Uma boa experiência começa antes da chegada. Guarde estes passos.'},enquete:{proxima:'Conta pra gente: qual opção tem mais a ver com você?',direta:'Escolha uma das duas opções e responda nos comentários.',editorial:'As escolhas dizem um pouco sobre a gente. Qual é a sua?'},frase:{proxima:'Essa ideia combina com você? Compartilha com alguém!',direta:'Conheça a ideia que representa a nossa marca.',editorial:'Mais que palavras, um jeito de olhar para '+subject+'.'}};
   return {title:kind==='frase'?titles[kind][doc.voice][i]:titles[kind][doc.voice],caption:captions[kind][doc.voice]};
 }
 const titles={novidade:{proxima:['Sua pausa ficou gelada!','Bora conhecer a nova aula?','Vem ver a nova coleção!'],direta:['Café gelado','Nova aula','Nova coleção'],editorial:['Uma nova pausa','O movimento se renova','Novas formas de vestir']},dica:{proxima:['Seu café, do seu jeito','Encontre seu horário','Monte seu próximo look'],direta:['Conheça as opções','Consulte os horários','Compare as peças'],editorial:['Escolhas para a sua pausa','Espaço para a sua rotina','Combinações que acompanham você']},bastidores:{proxima:['Vem conhecer a gente!','Vem ver nosso espaço!','Olha o que chegou por aqui!'],direta:['Conheça a cafeteria','Conheça a academia','Conheça a loja'],editorial:['Onde a pausa acontece','Onde o movimento começa','Onde o estilo encontra espaço']}};
 const captions=kind==='novidade'?v.example:{dica:{proxima:['Na dúvida sobre o café? Pergunta pra gente no balcão!','Qual horário combina com você? Vem conversar na recepção!','Quer combinar as peças? A gente te ajuda na loja!'],direta:['Consulte as opções de café no balcão.','Consulte os horários das aulas na recepção.','Conheça e compare as peças disponíveis na loja.'],editorial:['Cada pausa começa com uma escolha. Conheça as opções no balcão.','Uma rotina começa pelo espaço que você abre para ela. Consulte os horários.','Combinar é encontrar possibilidades. Conheça as peças na loja.']},bastidores:{proxima:['Vem conhecer o lugar da sua próxima pausa!','Vem conhecer de perto o nosso espaço!','Passa por aqui para conhecer a nossa loja!'],direta:['Conheça o espaço da cafeteria.','Conheça o espaço da academia.','Conheça o espaço da loja.'],editorial:['Um espaço para encontros e pausas.','Um espaço para novos movimentos.','Um espaço para descobrir novas combinações.']}}[kind][doc.voice];
 return {title:titles[kind][doc.voice][i],caption:captions[i]};
}
function documentView(doc){
 const n=niches.find(n=>n.id===doc.niche),v=voices.find(v=>v.id===doc.voice),l=looks.find(l=>l.id===doc.look);
 return `<article class="client-document" aria-label="Documentação do cliente"><header>${art('pasta')}<div><span>DOCUMENTAÇÃO DO CLIENTE</span><h3>${brands[doc.niche]}</h3></div></header><div class="document-grid"><section><span class="field-label">NICHO</span><div class="niche-row">${art(n.id)}<strong>${n.label}</strong></div></section><section><span class="field-label">ESTILO DE ESCRITA</span><strong>${v.label}</strong><p>“${v.example[niches.indexOf(n)]}”</p></section><section><span class="field-label">IDENTIDADE VISUAL</span><strong>${l.label}</strong>${colors(l)}<p>${l.detail}</p></section><section><span class="field-label">BANCO DE TEMPLATES</span><div class="doc-templates">${templates.filter(t=>doc.templates.includes(t.id)).map(t=>`<div>${sample(l.id,t.id,n)}<span>${t.label}</span></div>`).join('')}</div></section></div></article>`;
}
function finalPost(){
 const n=niches.find(n=>n.id===pulled.niche),text=contentFor(pulled,selectedTemplate);
 return `<article class="output-post" aria-label="Material criado">${sample(pulled.look,selectedTemplate,n,text.title).replace(' aria-hidden="true"','').replace('SUA MARCA',brands[pulled.niche])}<div class="output-caption"><span>LEGENDA · ${voices.find(v=>v.id===pulled.voice).label}</span><p>${text.caption}</p></div></article>`;
}
function laterStage(){
 if(!finished)return '<div class="capture-head blocked"><h2 id="question">Primeiro, capture o material.</h2><button class="primary" data-go="3">Ir para Elicitar →</button></div>';
 if(stage===4)return `<div class="capture-head"><p class="eyebrow">5 · PUXAR</p><h2 id="question">${pulled?'Documentação carregada.':'Puxe a documentação do cliente.'}</h2><p>Estas são as respostas que você registrou com o cliente.</p></div><div class="document-wrap ${pulled?'loaded':''}">${documentView(pulled||profile)}</div><div class="capture-foot"><button class="text-button" data-go="3">← Voltar</button>${pulled?'<button class="primary" data-go="5">Criar o material →</button>':'<button class="primary" id="pull">Puxar documentação →</button>'}</div>`;
 if(!pulled)return '<div class="capture-head blocked"><h2 id="question">Carregue a documentação.</h2><button class="primary" data-go="4">Ir para Puxar →</button></div>';
 const v=voices.find(v=>v.id===pulled.voice),l=looks.find(l=>l.id===pulled.look),n=niches.find(n=>n.id===pulled.niche);
 if(stage===5)return `<div class="capture-head"><p class="eyebrow">6 · CONSTRUIR</p><h2 id="question">${built?'As escolhas viraram material.':'Crie com a base do cliente.'}</h2><p>${built?'Título, arte e legenda seguem a documentação.':'Escolha 1 dos 3 templates do banco para este material.'}</p></div><div class="build-layout"><div class="active-settings" aria-label="Configuração ativa"><section class="setting"><span class="field-label">1 · ESTILO DE ESCRITA <b>✓ ATIVO</b></span><strong>${v.label}</strong><p>“${selectedTemplate?contentFor(pulled,selectedTemplate).caption:v.example[niches.indexOf(n)]}”</p></section><section class="setting"><span class="field-label">2 · VISUAL <b>✓ ATIVO</b></span><strong>${l.label}</strong>${colors(l)}<p>${l.detail}</p></section><section class="setting"><span class="field-label">3 · TEMPLATE ${selectedTemplate?'<b>✓ ATIVO</b>':''}</span><div class="template-picker">${templates.filter(t=>pulled.templates.includes(t.id)).map(t=>`<button id="use-${t.id}" data-template="${t.id}" ${sent?'disabled':''} aria-pressed="${selectedTemplate===t.id}">${sample(pulled.look,t.id,n)}<span>${t.label}${selectedTemplate===t.id?' ✓':''}</span></button>`).join('')}</div></section></div><div class="material-preview">${built?finalPost():`<div class="await-material">${art('criacao')}<p>${selectedTemplate?'Template escolhido. Pronto para criar.':'Seu material aparece aqui.'}</p></div>`}</div></div><div class="capture-foot"><button class="text-button" data-go="4">← Voltar</button>${built?'<button class="primary" data-go="6">Ir para entrega →</button>':`<button class="primary" id="build" ${!selectedTemplate?'disabled':''}>Construir material →</button>`}</div>`;
 if(!built)return '<div class="capture-head blocked"><h2 id="question">Termine o material.</h2><button class="primary" data-go="5">Ir para Construir →</button></div>';
 return `<div class="capture-head"><p class="eyebrow">7 · ENTREGA</p><h2 id="question">${sent?'Entregue ao cliente.':'Envie para aprovação.'}</h2><p>${sent?'Arte e legenda aguardando aprovação.':'A documentação certa, o material certo, o cliente certo.'}</p></div><div class="delivery-layout">${finalPost()}<div class="delivery-action">${sent?`${art('envio')}<h3>✓ ${brands[pulled.niche]}</h3><p>Envio concluído nesta simulação.</p>`:`<label for="recipient">Quem recebe o material?</label><select id="recipient"><option value="">Escolha o cliente</option>${Object.entries(brands).map(([id,name])=>`<option value="${id}" ${recipient===id?'selected':''}>${name}</option>`).join('')}</select><button class="primary" id="send">Enviar ao cliente</button>`}<p id="delivery-feedback" role="status">${feedback}</p></div></div><div class="capture-foot"><button class="text-button" data-go="5">← Voltar ao material</button>${sent?'<button class="primary" id="next-client">Atender o próximo cliente →</button>':''}</div>`;
}
const questions=['Qual é o nicho da sua marca?','Como você costuma escrever? Pode me dar um exemplo?','Qual destes visuais combina com a sua marca?','Quais 3 destes 6 templates você quer no seu banco?'];
function response(i){
 const e=expected(),n=niches.find(n=>n.id===e.niche),v=voices.find(v=>v.id===e.voice),l=looks.find(l=>l.id===e.look);
 return [ `Meu negócio é ${n.label.toLowerCase()}.`,
 `${e.voice==='proxima'?'Gosto de conversar de perto com as pessoas.':e.voice==='direta'?'Prefiro escrever de forma curta e objetiva.':'Quero um texto mais cuidado, com um tom editorial.'} Um exemplo: “${v.example[current]}”`,
 `O visual ${l.label} combina mais com a minha marca.`,
 `Escolho ${templates.filter(t=>e.templates.includes(t.id)).map(t=>t.label).join(', ')}.` ][i];
}
function phone(){
 const e=expected(),n=niches.find(n=>n.id===e.niche);
 let messages='<div class="bubble incoming">Oi! Quero começar a trabalhar as redes sociais da minha marca.</div>';
 for(let i=0;i<4;i++){
  if(!asked[i])continue;
  let attachments=i===2?`<div class="chat-attachments">${looks.map(l=>`<div>${sample(l.id,'novidade',n)}<span>${l.label}</span></div>`).join('')}</div>`:i===3?`<div class="chat-attachments templates-sent">${templates.map(t=>`<div>${sample(e.look,t.id,n)}<span>${t.label}</span></div>`).join('')}</div>`:'';
  const chosen=i===2?`<div class="chosen-reference">${sample(e.look,'novidade',n)}</div>`:i===3?`<div class="chat-attachments">${templates.filter(t=>e.templates.includes(t.id)).map(t=>`<div>${sample(e.look,t.id,n)}<span>✓ ${t.label}</span></div>`).join('')}</div>`:'';
  messages+=`<div class="bubble outgoing"><span class="sender">Você</span>${questions[i]}${attachments}</div><div class="bubble incoming"><span class="sender">Cliente</span>${response(i)}${chosen}</div>`;
 }
 return `<aside class="phone" aria-label="Conversa simulada com o cliente"><div class="phone-notch" aria-hidden="true"></div><div class="phone-header"><span class="avatar">${art(e.niche)}</span><div><strong>${brands[e.niche]}</strong><small>Conversa simulada</small></div></div><div class="chat-scroll" tabindex="0" aria-label="Histórico da conversa">${messages}</div><div class="phone-compose">${!asked[part]?`<button class="primary" id="ask">${['Perguntar o nicho','Perguntar sobre a escrita','Enviar os 3 visuais','Enviar os 6 templates'][part]} →</button>`:'<span>Resposta recebida ✓</span>'}</div></aside>`;
}
function chatExercise(){
 const headers=['Descubra o nicho.','Descubra a voz da marca.','Envie referências visuais.','Monte o banco que o cliente pediu.'];
 let cards='';
 if(asked[part]){
  if(part===0)cards=niches.map(n=>choice('niche',n.id,`<div class="niche-picture">${art(n.id)}</div>`,n.label,'',profile.niche===n.id)).join('');
  if(part===1)cards=voices.map(v=>choice('voice',v.id,`<div class="writing-preview"><p>“${v.example[current]}”</p></div>`,v.label,'',profile.voice===v.id)).join('');
  if(part===2)cards=looks.map(l=>choice('look',l.id,sample(l.id),l.label,l.detail,profile.look===l.id)).join('');
  if(part===3)cards=templates.map(t=>choice('templates',t.id,sample(profile.look,t.id),t.label,'',profile.templates.includes(t.id))).join('');
 }
 return `<div class="chat-layout">${phone()}<div class="student-panel"><p class="eyebrow">4 · ELICITAR</p><nav class="part-nav" aria-label="Perguntas ao cliente">${parts.map((name,i)=>`<button id="part-${i}" data-part="${i}" ${i===part?'aria-current="step"':''} ${i>0&&!confirmed.slice(0,i).every(Boolean)?'disabled':''}>${confirmed[i]?'✓':i+1} ${name}</button>`).join('')}</nav><h2 id="question">${headers[part]}</h2><p class="student-instruction">${asked[part]?'Registre a escolha que o cliente fez na conversa.':'Use o botão no celular para conversar com o cliente.'}</p>${asked[part]?`${part===3?`<p class="template-count">${profile.templates.length} / 3 templates</p>`:''}<div class="choices-grid ${part===3?'template-catalog':''}">${cards}</div><p id="answer-feedback" role="status">${answerFeedback}</p><div class="student-actions"><button class="text-button" id="back">← Voltar</button><button class="primary" id="continue" ${!ready()[part]?'disabled':''}>Registrar resposta →</button></div>`:`<div class="waiting-answer">${art(part<2?'mensagem':part===2?'editor':'pasta')}<span>${part<2?'Ouça antes de preencher.':'Mostre as opções antes de escolher.'}</span></div><button class="text-button" id="back">← Voltar</button>`}</div></div>`;
}
function renderProgress(){
 const count=deliveries.filter(Boolean).length;
 $('client-progress').innerHTML=`<span class="progress-count">${count} / 3 clientes atendidos</span><div class="client-track">${clients.map((c,i)=>`<span class="${i===current?'current-client':''} ${deliveries[i]?'delivered-client':''}">${art(c.niche)}<span>${brands[c.niche]}${deliveries[i]?' ✓':''}</span></span>`).join('')}</div>`;
}
function completion(){
 return `<div class="capture-head"><p class="eyebrow">PRÁTICA CONCLUÍDA</p><h2 id="question" tabindex="-1">Você atendeu os três clientes.</h2><p>Conversou, registrou as escolhas e entregou um material para cada marca.</p></div><div class="bank completion-bank">${deliveries.map(d=>`<article>${sample(d.profile.look,d.template,niches.find(n=>n.id===d.profile.niche),contentFor(d.profile,d.template).title)}<h3>✓ ${brands[d.profile.niche]}</h3><p>Enviado para aprovação</p></article>`).join('')}</div><div class="capture-foot"><a class="secondary" href="base-negocio.html">Construir a base do negócio →</a><button class="primary" id="restart-practice">Praticar novamente ↺</button></div>`;
}
function choice(id,value,visual,label,detail,active){return `<button id="${id}-${value}" class="choice-card ${active?'chosen':''}" data-choice="${id}" data-value="${value}" aria-pressed="${active}" ${id==='templates'&&!active&&profile.templates.length===3?'disabled':''}>${visual}<span class="choice-label">${label}<span class="pick" aria-hidden="true">${active?'✓':'+'}</span></span>${detail?`<span class="choice-detail">${detail}</span>`:''}</button>`;}
function render(){
 const focus=document.activeElement?.id;
 renderProgress();
 $('steps').innerHTML=flow.map((name,i)=>`<button id="stage-${i}" class="step" data-stage="${i}" ${stage===i?'aria-current="step"':''}><span>${i+1}</span> ${name}</button>`).join('');
 let html='';
 if(stage===6&&sent&&deliveries.every(Boolean)){html=completion();}
 else if(stage>=4){html=laterStage();}
 else if(stage<3){
 const titles=['Uma mensagem diferente.','Você recebe o novo cliente.','Referências e criação.'];
 const descriptions=['Este cliente ainda não tem materiais na sua agência.','Antes de criar posts, você vai descobrir o que define a marca.','Pinterest para buscar referências visuais. Editor para organizar os modelos.'];
 let scene=stage===0?`<div class="message">${art('mensagem')}<p>“Oi! Minha marca é ${brands[expected().niche]}. Quero começar a trabalhar minhas redes sociais.”</p><span>Primeiro contato</span></div>`:stage===1?`<div class="agent-art">${art('profissional')}</div>`:`<div class="tool-pair"><div><strong class="pinterest-name">Pinterest</strong><div class="reference-stack" aria-hidden="true"><i></i><i></i><i></i></div><span>Referências visuais</span><a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer">Abrir Pinterest ↗</a></div><div>${art('editor')}<strong>Editor</strong><span>Banco de templates</span></div></div>`;
 let btn=stage===0?received?'<button class="primary" id="advance">Conhecer o cliente →</button>':'<button class="primary" id="receive">Receber mensagem</button>':stage===1?received?'<button class="primary" id="advance">Continuar →</button>':'<button class="primary" data-go="0">Receber mensagem primeiro</button>':!received?'<button class="primary" data-go="0">Receber mensagem primeiro</button>':toolsReady?'<button class="primary" id="advance">Começar a captura →</button>':'<button class="primary" id="prepare">Preparar meu espaço</button>';
 html=`<div class="intro-panel"><div class="intro-scene">${scene}</div><div class="intro-lesson"><p class="eyebrow">${stage+1} / 7 · ${flow[stage]}</p><h2 id="question">${stage===0&&received?'Novo fluxo ativado.':stage===2&&toolsReady?'Espaço pronto.':titles[stage]}</h2><p>${descriptions[stage]}</p>${btn}${stage>0?'<button class="text-button" id="back">← Voltar</button>':''}${stage===2?'<small>As próximas telas usam exemplos locais para explorar as escolhas.</small>':''}</div></div>`;
 }else if(!toolsReady){html='<div class="capture-head"><h2 id="question">Prepare as ferramentas.</h2><button class="primary" data-go="2">Ir para Ferramenta →</button></div>';
 }else if(finished){
 const l=looks.find(l=>l.id===profile.look);
 html=`<div class="capture-head"><p class="eyebrow">ELICITAR · CAPTURA CONCLUÍDA</p><h2 id="question" tabindex="-1">O cliente já tem uma base.</h2><p>${niche().label} · Escrita ${voice().label.toLowerCase()} · Visual ${l.label.toLowerCase()}</p></div><div class="bank" aria-label="Banco de templates">${templates.filter(t=>profile.templates.includes(t.id)).map(t=>`<article>${sample(profile.look,t.id)}<h3>${t.label}</h3></article>`).join('')}</div><div class="capture-foot"><button class="text-button" id="review" ${sent?'disabled':''}>Revisar escolhas</button><button class="primary" data-go="4">Puxar documentação →</button></div>`;
 }else{html=chatExercise();}

 $('content').innerHTML=html;
 const log=document.querySelector('.chat-scroll');if(log)log.scrollTop=log.scrollHeight;
 if(focus&&$(focus)&&!$(focus).disabled)$(focus).focus({preventScroll:true});
}
document.addEventListener('click',e=>{
 const b=e.target.closest('button');if(!b||b.disabled)return;
 if(b.dataset.stage!==undefined)stage=+b.dataset.stage;
 else if(b.dataset.go!==undefined)stage=+b.dataset.go;
 else if(b.id==='receive'){received=true;window.EpisodeSound?.play('message-receive');}
 else if(b.id==='prepare'&&received)toolsReady=true;
 else if(b.id==='advance')stage=Math.min(3,stage+1);
 else if(b.id==='ask'&&stage===3&&!asked[part]){asked[part]=true;$('chat-announcement').textContent=response(part);window.EpisodeSound?.play(['message-send','message-receive']);}
 else if(b.id==='next-client'&&sent&&current<2){current++;resetClient();}
 else if(b.dataset.choice){if(!asked[part]||sent)return;answerFeedback='';const key=b.dataset.choice,value=b.dataset.value;if(key==='templates'&&!profile.templates.includes(value)&&profile.templates.length>=3)return;invalidate();confirmed=confirmed.map((v,i)=>i<part?v:false);if(key==='templates')profile.templates=profile.templates.includes(value)?profile.templates.filter(v=>v!==value):[...profile.templates,value];else profile[key]=value;}
 else if(b.dataset.part!==undefined)part=+b.dataset.part;
 else if(b.id==='continue'&&asked[part]&&ready()[part]){const e=expected();const ok=part===0?profile.niche===e.niche:part===1?profile.voice===e.voice:part===2?profile.look===e.look:profile.templates.length===3&&profile.templates.every(t=>e.templates.includes(t));if(ok){answerFeedback='';confirmed[part]=true;if(part<3)part++;else{finished=true;window.EpisodeSound?.play('complete');}}else answerFeedback='Confira a resposta do cliente no celular e ajuste sua escolha.';}
 else if(b.id==='back'){if(stage===3&&part>0)part--;else stage=Math.max(0,stage-1);}
 else if(b.id==='pull'&&finished){pulled=JSON.parse(JSON.stringify(profile));window.EpisodeSound?.play('document');}
 else if(b.dataset.template&&pulled&&pulled.templates.includes(b.dataset.template)){if(selectedTemplate!==b.dataset.template){selectedTemplate=b.dataset.template;built=false;sent=false;feedback='';}}
 else if(b.id==='build'&&pulled&&selectedTemplate){if(!built)window.EpisodeSound?.play('complete');built=true;}
 else if(b.id==='send'&&built){if(recipient!==pulled.niche)feedback=recipient?'Confira o destinatário. Este material é de '+brands[pulled.niche]+'.':'Escolha o cliente que deve receber.';else{if(!sent)window.EpisodeSound?.play(['message-send','complete']);sent=true;feedback='';deliveries[current]={profile:JSON.parse(JSON.stringify(pulled)),template:selectedTemplate};}}
 else if(b.id==='review'&&!sent){finished=false;part=0;stage=3;invalidate();}
 else if((b.id==='reset'||b.id==='restart-practice')){current=0;deliveries.fill(null);resetClient();}
 else return;
 if(b.id==='send'&&feedback)window.EpisodeSound?.play('error');
 if(b.id==='continue'&&answerFeedback)window.EpisodeSound?.play('error');
 render();
 if(b.id==='ask'){document.querySelector('[data-choice]')?.focus({preventScroll:true});}
 else if(b.id==='continue'&&answerFeedback){$('answer-feedback').tabIndex=-1;$('answer-feedback').focus({preventScroll:true});}
 else if(b.id==='continue'&&finished)$('question').focus({preventScroll:true});
 else if(['receive','prepare'].includes(b.id))$('advance').focus({preventScroll:true});
 else if(['next-client','reset','restart-practice'].includes(b.id)||b.id==='continue'||b.id==='advance'||b.id==='back'||b.id==='review'||b.id==='pull'||b.id==='build'||b.id==='send'||b.dataset.go!==undefined||b.dataset.part!==undefined){$('question').tabIndex=-1;$('question').focus({preventScroll:true});}
});
document.addEventListener('change',e=>{if(e.target.id==='recipient'){recipient=e.target.value;feedback='';$('delivery-feedback').textContent='';}});
render();
})();
