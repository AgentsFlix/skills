(() => {
'use strict';
const $=id=>document.getElementById(id);
const art=name=>`<img src="art/eugencia/${name}.png" alt="" draggable="false">`;
const niches=[{id:'cafe',label:'Cafeteria',subject:'Café gelado',detail:'Bebidas, encontros e pausas.'},{id:'academia',label:'Academia',subject:'Nova aula',detail:'Movimento, rotina e treino.'},{id:'loja',label:'Moda',subject:'Nova coleção',detail:'Peças, estilo e combinações.'}];
const voices=[{id:'proxima',label:'Próxima',example:['Sua pausa merece um café. Vem conhecer a novidade!','Bora se movimentar? Tem aula nova esperando por você.','Seu próximo look pode estar aqui. Vem ver as novidades!']},{id:'direta',label:'Direta',example:['Novo café gelado. Disponível no balcão.','Nova aula disponível. Consulte os horários na recepção.','Nova coleção disponível. Conheça as peças na loja.']},{id:'editorial',label:'Editorial',example:['Um novo jeito de apreciar a sua pausa.','Movimento para fazer parte dos seus dias.','Texturas e formas para acompanhar os seus dias.']}];
const looks=[{id:'natural',label:'Natural',detail:'Tons quentes · serifada',colors:['#ede4d5','#76533d','#bda78e']},{id:'grafica',label:'Gráfica',detail:'Contraste · títulos fortes',colors:['#d8eb69','#202620','#f4f5e9']},{id:'essencial',label:'Essencial',detail:'Respiro · linhas simples',colors:['#e6f0ed','#325c67','#78a9ad']}];
const templates=[{id:'novidade',label:'Novidade',detail:'Apresentar algo novo.'},{id:'dica',label:'Dica',detail:'Compartilhar algo útil.'},{id:'bastidores',label:'Bastidores',detail:'Mostrar como é feito.'}];
const flow=['Gatilho','Agente','Ferramenta','Elicitar'];
const parts=['Nicho','Escrita','Visual','Templates'];
let stage=0,part=0,received=false,toolsReady=false,finished=false;
let profile={niche:null,voice:null,look:null,templates:[]};
const niche=()=>niches.find(n=>n.id===profile.niche)||niches[0];
const voice=()=>voices.find(v=>v.id===profile.voice)||voices[0];
const ready=()=>[Boolean(profile.niche),Boolean(profile.voice),Boolean(profile.look),profile.templates.length>0];
function sample(look,kind='novidade'){
 const n=niche();
 const title=kind==='novidade'?n.subject:kind==='dica'?'Uma dica para hoje':'Por trás da marca';
 return `<div class="sample look-${look} type-${kind}" aria-hidden="true"><span class="sample-brand">SUA MARCA</span><strong>${title}</strong>${art(n.id)}<span class="sample-note">${kind==='novidade'?'Conheça a novidade':kind==='dica'?'Salve para lembrar':'Conheça nossa rotina'}</span></div>`;
}
function choice(id,value,visual,label,detail,active){return `<button id="${id}-${value}" class="choice-card ${active?'chosen':''}" data-choice="${id}" data-value="${value}" aria-pressed="${active}">${visual}<span class="choice-label">${label}<span class="pick" aria-hidden="true">${active?'✓':'+'}</span></span>${detail?`<span class="choice-detail">${detail}</span>`:''}</button>`;}
function render(){
 const focus=document.activeElement?.id;
 $('steps').innerHTML=flow.map((name,i)=>`<button id="stage-${i}" class="step" data-stage="${i}" ${stage===i?'aria-current="step"':''}><span>${i+1}</span> ${name}</button>`).join('');
 let html='';
 if(stage<3){
 const titles=['Uma mensagem diferente.','Você recebe o novo cliente.','Referências e criação.'];
 const descriptions=['Este cliente ainda não tem materiais na sua agência.','Antes de criar posts, você vai descobrir o que define a marca.','Pinterest para buscar referências visuais. Editor para organizar os modelos.'];
 let scene=stage===0?`<div class="message">${art('mensagem')}<p>“Oi! Quero começar a trabalhar as redes sociais da minha marca.”</p><span>Primeiro contato</span></div>`:stage===1?`<div class="agent-art">${art('profissional')}</div>`:`<div class="tool-pair"><div><strong class="pinterest-name">Pinterest</strong><div class="reference-stack" aria-hidden="true"><i></i><i></i><i></i></div><span>Referências visuais</span><a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer">Abrir Pinterest ↗</a></div><div>${art('editor')}<strong>Editor</strong><span>Banco de templates</span></div></div>`;
 let btn=stage===0?received?'<button class="primary" id="advance">Conhecer o cliente →</button>':'<button class="primary" id="receive">Receber mensagem</button>':stage===1?received?'<button class="primary" id="advance">Continuar →</button>':'<button class="primary" data-go="0">Receber mensagem primeiro</button>':!received?'<button class="primary" data-go="0">Receber mensagem primeiro</button>':toolsReady?'<button class="primary" id="advance">Começar a captura →</button>':'<button class="primary" id="prepare">Preparar meu espaço</button>';
 html=`<div class="intro-panel"><div class="intro-scene">${scene}</div><div class="intro-lesson"><p class="eyebrow">${stage+1} / 4 · ${flow[stage]}</p><h2 id="question">${stage===0&&received?'Novo fluxo ativado.':stage===2&&toolsReady?'Espaço pronto.':titles[stage]}</h2><p>${descriptions[stage]}</p>${btn}${stage>0?'<button class="text-button" id="back">← Voltar</button>':''}${stage===2?'<small>As próximas telas usam exemplos locais para explorar as escolhas.</small>':''}</div></div>`;
 }else if(!toolsReady){html='<div class="capture-head"><h2 id="question">Prepare as ferramentas.</h2><button class="primary" data-go="2">Ir para Ferramenta →</button></div>';
 }else if(finished){
 const l=looks.find(l=>l.id===profile.look);
 html=`<div class="capture-head"><p class="eyebrow">ELICITAR · CAPTURA CONCLUÍDA</p><h2 id="question" tabindex="-1">O cliente já tem uma base.</h2><p>${niche().label} · Escrita ${voice().label.toLowerCase()} · Visual ${l.label.toLowerCase()}</p></div><div class="bank" aria-label="Banco de templates">${templates.filter(t=>profile.templates.includes(t.id)).map(t=>`<article>${sample(profile.look,t.id)}<h3>${t.label}</h3></article>`).join('')}</div><div class="capture-foot"><span>Banco criado nesta simulação.</span><button class="secondary" id="review">Revisar escolhas</button></div>`;
 }else{
 const titles=['Qual é o nicho?','Como essa marca escreve?','Qual visual combina com a marca?','Quais modelos entram no banco?'];
 const descriptions=['Escolha o negócio do novo cliente.','Compare a mesma mensagem em três vozes.','Compare cor, tipografia e composição.','Escolha um ou mais. Eles usam o visual que você definiu.'];
 let cards='';
 if(part===0)cards=niches.map(n=>choice('niche',n.id,`<div class="niche-picture">${art(n.id)}</div>`,n.label,n.detail,profile.niche===n.id)).join('');
 if(part===1)cards=voices.map(v=>choice('voice',v.id,`<div class="writing-preview"><span>${niche().label} · uma novidade</span><p>“${v.example[niches.findIndex(n=>n.id===niche().id)]}”</p></div>`,v.label,'',profile.voice===v.id)).join('');
 if(part===2)cards=looks.map(l=>choice('look',l.id,sample(l.id)+`<div class="swatches" aria-hidden="true">${l.colors.map(c=>`<i style="background:${c}"></i>`).join('')}</div>`,l.label,l.detail,profile.look===l.id)).join('');
 if(part===3)cards=templates.map(t=>choice('templates',t.id,sample(profile.look,t.id),t.label,t.detail,profile.templates.includes(t.id))).join('');
 html=`<div class="capture-head"><p class="eyebrow">4 · ELICITAR</p><nav class="part-nav" aria-label="Partes da captura">${parts.map((name,i)=>`<button id="part-${i}" data-part="${i}" ${i===part?'aria-current="step"':''} ${i>0&&!ready().slice(0,i).every(Boolean)?'disabled':''}>${ready()[i]?'✓':i+1} ${name}</button>`).join('')}</nav><h2 id="question">${titles[part]}</h2><p>${descriptions[part]}</p></div><div class="choices-grid">${cards}</div><div class="capture-foot"><button class="text-button" id="back">← Voltar</button><button class="primary" id="continue" ${!ready()[part]?'disabled':''}>${part===3?'Criar banco de templates':'Continuar'} →</button></div><details><summary>Por que elicitar?</summary><p>Para um cliente novo, a agência ainda não tem essas respostas. Você conversa, apresenta referências e registra as escolhas com ele. Neste exercício, as opções simulam essa conversa.</p></details>`;
 }
 $('content').innerHTML=html;
 if(focus&&$(focus)&&!$(focus).disabled)$(focus).focus({preventScroll:true});
}
document.addEventListener('click',e=>{
 const b=e.target.closest('button');if(!b||b.disabled)return;
 if(b.dataset.stage!==undefined)stage=+b.dataset.stage;
 else if(b.dataset.go!==undefined)stage=+b.dataset.go;
 else if(b.id==='receive')received=true;
 else if(b.id==='prepare'&&received)toolsReady=true;
 else if(b.id==='advance')stage=Math.min(3,stage+1);
 else if(b.dataset.choice){const key=b.dataset.choice,value=b.dataset.value;if(key==='templates')profile.templates=profile.templates.includes(value)?profile.templates.filter(v=>v!==value):[...profile.templates,value];else profile[key]=value;}
 else if(b.dataset.part!==undefined)part=+b.dataset.part;
 else if(b.id==='continue'&&ready()[part]){if(part<3)part++;else finished=true;}
 else if(b.id==='back'){if(stage===3&&part>0)part--;else stage=Math.max(0,stage-1);}
 else if(b.id==='review'){finished=false;part=0;}
 else if(b.id==='reset'){stage=0;part=0;received=false;toolsReady=false;finished=false;profile={niche:null,voice:null,look:null,templates:[]};}
 else return;
 render();
 if(b.id==='continue'&&finished)$('question').focus({preventScroll:true});
 else if(['receive','prepare'].includes(b.id))$('advance').focus({preventScroll:true});
 else if(b.id==='continue'||b.id==='advance'||b.id==='back'||b.id==='review'||b.dataset.part!==undefined){$('question').tabIndex=-1;$('question').focus({preventScroll:true});}
});render();
})();
