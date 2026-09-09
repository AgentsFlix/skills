'use strict';
const names=['Gatilho','Agente','Ferramenta','Puxar','Construir','Entrega'];
const subtitles=['O que dispara','Quem executa','Com o que faz','O que já existe','O passo a passo','Para onde vai'];
let step=0, table=2, flavor='Frango', tool='caderneta', rang=false, recipe=0, delivered=false;
const $=id=>document.getElementById(id);
const choices=(values,current,kind)=>`<div class="choices">${values.map(v=>`<button class="choice" data-${kind}="${v}" aria-pressed="${v===current}">${kind==='table'?'Mesa ':''}${v}</button>`).join('')}</div>`;
function render(){
 const titles=['O cliente chama. O fluxo começa.','Você atende. Você cozinha.','O pedido define a ferramenta.','O prato já está no menu.','Agora você prepara o miojo.','O prato vai para a mesa certa.'];
 const descriptions=['O cliente aperta a campainha da mesa. É esse chamado que faz você começar o atendimento.','O restaurante acabou de abrir e você trabalha sozinho. A mesma pessoa vai até a mesa, anota o pedido e faz o preparo.','Para pedir um miojo, você usa a caderneta. Para pedir a conta, usa a maquininha.','Você consulta o menu e pega o prato escolhido pelo cliente. Aqui, a informação já está pronta.','Você segue a receita com o tempero escolhido. Miojo num prato elegante. Só isso.','Você terminou o preparo. Agora precisa levar o prato à mesa que fez o pedido.'];
 const concepts=['Gatilho é o acontecimento que inicia o trabalho: a campainha da mesa.','O agente é quem executa o trabalho. Neste restaurante, é você.','Ferramenta é o que você usa para fazer uma ação. Você escolhe conforme o pedido.','Puxar é buscar uma informação que já existe: o prato escolhido no menu.','Construir é executar o passo a passo para produzir o prato.','Entrega é o destino do resultado: a mesa que pediu o miojo.'];
 $('steps').innerHTML=names.map((n,i)=>`<button class="step" data-step="${i}" ${i===step?'aria-current="step"':''}>${StageIdentity.header(i)}<small>${subtitles[i]}</small></button>`).join('');
 $('lesson-copy').innerHTML=`<p class="step-index">Etapa ${step+1} de 6 · ${names[step]}</p><h2 id="step-title">${titles[step]}</h2><p class="description">${descriptions[step]}</p>`;
 $('concept').textContent=concepts[step];
 document.querySelector('.concept > span').innerHTML=StageIdentity.icon(step)+'NO FLUXO';
 const recipeLines=['300 ml de água','Ferve por 3 minutos',`Bota o miojo e o tempero de ${flavor.toLowerCase()}`,'Mexe','Coloca no prato para servir'];
 const contents=[
 `<span class="interaction-label">Escolha a mesa do cliente</span>${choices([1,2,3],table,'table')}<button class="primary" data-action="ring">${rang?'Tocar de novo':'Apertar a campainha'}</button><p class="result" role="status">${rang?`Ding! A mesa ${table} está chamando.`:'O atendimento começa com o chamado.'}</p>`,
 `<div class="tool-card">${StageIdentity.chef()}<strong>Você</strong><p>Garçom + chef</p><p>Uma pessoa acompanha o pedido do começo ao fim.</p></div>`,
 `<span class="interaction-label">O que o cliente quer?</span><div class="choices"><button class="choice" data-tool="caderneta" aria-pressed="${tool==='caderneta'}">Pedir um miojo</button><button class="choice" data-tool="maquininha" aria-pressed="${tool==='maquininha'}">Pedir a conta</button></div><div class="tool-card">${StageIdentity.art(tool==='caderneta'?'caderneta':'maquininha','tool-art')}<strong>${tool==='caderneta'?'Caderneta':'Maquininha'}</strong><p>${tool==='caderneta'?'Você anota o prato e a mesa do cliente.':'Você usa a maquininha para cobrar a conta.'}</p></div>${tool==='maquininha'?'<p class="hint">A conta usa outra ferramenta. Para continuar esta simulação de preparo, volte ao pedido de miojo.</p>':''}`,
 `<span class="interaction-label">Menu de exemplo · escolha o tempero</span>${choices(['Frango','Carne','Legumes'],flavor,'flavor')}<div class="tool-card">${StageIdentity.art('menu','tool-art')}<strong>Miojo de ${flavor.toLowerCase()}</strong><p>Pedido anotado para a mesa ${table}.</p></div>`,
 `<ol class="recipe">${recipeLines.map((line,i)=>`<li class="${i<recipe?'done':''}">${line}</li>`).join('')}</ol><button class="primary" data-action="cook">${recipe===5?'Refazer o preparo':recipe===0?'Começar o preparo':`Simular: ${recipeLines[recipe].toLowerCase()}`}</button><p class="hint">Simulação: os 3 minutos avançam com um clique.</p>`,
 `<div class="delivery">${StageIdentity.art('prato','tool-art')}<strong>${delivered?'Servido!':'Destino: mesa '+table}</strong><p>Miojo de ${flavor.toLowerCase()}, num prato elegante.</p><button class="primary" data-action="serve" ${delivered?'disabled':''}>${delivered?'Pedido entregue':`Servir na mesa ${table}`}</button></div>`
 ];
 $('interaction').innerHTML=contents[step];
 const captions=[rang?`A campainha da mesa ${table} tocou. Você recebeu o chamado.`:`O cliente da mesa ${table} está pronto para chamar você.`,`Você vai atender a mesa ${table} e depois preparar o pedido.`,tool==='caderneta'?'Você pega a caderneta para anotar o miojo.':'Você pega a maquininha para cobrar a conta.',`O menu informa: miojo de ${flavor.toLowerCase()}.`,recipe===5?'O miojo está no prato, pronto para servir.':`Na cozinha: ${recipeLines[Math.min(recipe,4)].toLowerCase()}.`,delivered?`A mesa ${table} recebeu o miojo. Atendimento concluído.`:`O prato está pronto para a mesa ${table}.`];
 $('caption').textContent=captions[step];$('scene-status').textContent=names[step];$('scene-desc').textContent=captions[step];
 $('scene').dataset.step=step;$('scene').dataset.tool=tool;
 document.querySelectorAll('.table').forEach(t=>t.classList.toggle('selected',+t.dataset.table===table));
 // A entrega só aparece na mesa depois do clique explícito.
 document.querySelectorAll('.served').forEach(t=>t.style.opacity=step===5&&delivered&&+t.parentElement.dataset.table===table?'1':'0');
 $('order-table').textContent=String(table).padStart(2,'0');$('order-flavor').textContent=step>=3?`Miojo · ${flavor}`:'A escolher';$('order-tool').textContent=step>=2?(tool==='caderneta'?'Caderneta':'Maquininha'):'A escolher';
 $('prev').disabled=step===0;$('position').textContent=`${step+1} / 6 · ${names[step]}`;
 $('next').textContent=step===5?'Recomeçar ↺':step===2&&tool==='maquininha'?'Voltar ao pedido →':'Próxima etapa →';
}
function go(next){step=Math.max(0,Math.min(5,next));if(step>=3)tool='caderneta';render();}
$('steps').addEventListener('click',e=>{const b=e.target.closest('[data-step]');if(b){go(+b.dataset.step);$('steps').querySelector(`[data-step="${step}"]`).focus({preventScroll:true})}});
$('prev').addEventListener('click',()=>go(step-1));
$('next').addEventListener('click',()=>{if(step===5){step=0;rang=false;recipe=0;delivered=false;tool='caderneta';render()}else if(step===2&&tool==='maquininha'){tool='caderneta';render()}else go(step+1)});
$('interaction').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.table){table=+b.dataset.table;rang=false;delivered=false}if(b.dataset.flavor){flavor=b.dataset.flavor;recipe=0;delivered=false}if(b.dataset.tool)tool=b.dataset.tool;if(b.dataset.action==='ring'){rang=true;window.EpisodeSound?.play('bell');}if(b.dataset.action==='cook'){recipe=recipe===5?0:recipe+1;delivered=false;const cue={1:'water',2:'boil',4:'stir',5:'complete'}[recipe];if(cue)window.EpisodeSound?.play(cue);}if(b.dataset.action==='serve'&&!delivered){delivered=true;window.EpisodeSound?.play(['dish','complete']);}const action=b.dataset.action;render();const key=action?'action':b.dataset.table?'table':b.dataset.flavor?'flavor':'tool';const value=b.dataset[key];$('interaction').querySelector(`[data-${key}="${value}"]`)?.focus({preventScroll:true})});
render();
