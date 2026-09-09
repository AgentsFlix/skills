(() => {
'use strict';
const $=id=>document.getElementById(id), esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const art=n=>`<img src="art/eugencia/${n}.png" alt="" draggable="false">`;
const stages=[
 {name:'Entender o negócio',short:'Negócio',file:'negocio.md',fields:['offer','goal','difference'],questions:['O que a cafeteria oferece?','O que você quer conseguir no Instagram?','O que torna essa cafeteria especial?']},
 {name:'Investigar o público',short:'Público',file:'publico.md',fields:['audience','evidence'],questions:['Quem você quer conhecer melhor?','De onde vêm essas pistas?']},
 {name:'Definir o posicionamento',short:'Posicionamento',file:'posicionamento.md',fields:['position'],questions:['Pelo que você quer ser lembrado?']},
 {name:'Construir a voz da marca',short:'Voz',file:'voz.md',fields:['voice'],questions:['Qual mensagem soa como a sua marca?']},
 {name:'Organizar o conhecimento',short:'Conhecimento',file:'conhecimento/',fields:['knowledge'],questions:['Quais materiais entram na biblioteca?']},
 {name:'Definir os pilares editoriais',short:'Pilares',file:'pilares.md',fields:['pillars'],questions:['Sobre o que a marca vai conversar?']},
 {name:'Construir a identidade visual',short:'Visual',file:'design.md',fields:['look'],questions:['Qual visual traduz essa marca?']},
 {name:'Criar os templates',short:'Templates',file:'templates/',fields:['templates'],questions:['Quais modelos entram no seu banco?']},
 {name:'Configurar a rotina',short:'Rotina',file:'operacao.md',fields:['frequency','approval','schedule'],questions:['Qual ritmo cabe na sua semana?','Como os materiais serão aprovados?','Quando agendar os materiais aprovados?']}
];
const offers=[{id:'cafe',label:'Cafés especiais',detail:'Bebidas preparadas na hora.',icon:'cafe'},{id:'brunch',label:'Brunch',detail:'Uma pausa com café e comida.',icon:'cafe'},{id:'doces',label:'Doces da casa',detail:'Fatias, sobremesas e encomendas.',icon:'cafe'}];
const goals=[{id:'visitas',label:'Atrair visitas',detail:'Fazer o bairro conhecer a cafeteria.',symbol:'↗'},{id:'produtos',label:'Divulgar produtos',detail:'Apresentar o que já está no cardápio.',symbol:'▤'},{id:'pedidos',label:'Receber encomendas',detail:'Levar a conversa até um pedido.',symbol:'✉'}];
const differences=[{id:'preparo',label:'Cuidado no preparo',detail:'Mostrar ingredientes e método.',icon:'criacao'},{id:'acolhimento',label:'Atendimento próximo',detail:'Pessoas que conhecem seus clientes.',icon:'profissional'},{id:'bairro',label:'Conexão com o bairro',detail:'Histórias e encontros da comunidade.',icon:'mensagem'}];
const audiences=[{id:'trabalho',label:'Quem trabalha perto',detail:'“Dá tempo de passar no intervalo?”',problem:'aproveitar uma pausa na rotina',desire:'uma pausa agradável perto do trabalho',objection:'tempo para ser atendido',language:'pausa, intervalo, aqui perto',icon:'profissional'},{id:'estudo',label:'Quem estuda',detail:'“Como é o espaço para ficar um pouco?”',problem:'encontrar um lugar para uma pausa entre estudos',desire:'um lugar acolhedor entre compromissos',objection:'preço e condições do espaço',language:'entre aulas, pausa, ficar um pouco',icon:'pasta'},{id:'encontros',label:'Quem quer se encontrar',detail:'“É um bom lugar para ir com alguém?”',problem:'escolher um lugar para encontrar pessoas',desire:'compartilhar uma experiência',objection:'cardápio e ambiente adequados ao grupo',language:'vamos juntos, encontro, combinar',icon:'mensagem'}];
const evidence=[{id:'relatos',label:'Relatos de exemplo',detail:'Ler três conversas fictícias para levantar pistas.',symbol:'“'},{id:'hipoteses',label:'Ainda sem clientes',detail:'Registrar suposições e planejar como validar.',symbol:'?'}];
const voices=[{id:'proxima',label:'Próxima',detail:'Conversa simples e acolhedora.'},{id:'direta',label:'Objetiva',detail:'Clareza, poucas palavras.'},{id:'editorial',label:'Editorial',detail:'Uma mensagem mais contemplativa.'}];
const knowledge=[{id:'menu',label:'Cardápio',detail:'Produtos e ofertas que já existem.',icon:'pasta',file:'cardapio.md'},{id:'metodo',label:'Método de preparo',detail:'Explicações que viram conteúdo útil.',icon:'criacao',file:'metodo.md'},{id:'historia',label:'História da casa',detail:'Pessoas, origem e bastidores.',icon:'profissional',file:'historia.md'},{id:'faq',label:'Perguntas frequentes',detail:'Dúvidas sobre produtos e atendimento.',icon:'mensagem',file:'perguntas.md'},{id:'relatos',label:'Relatos e resultados',detail:'Exemplos fictícios, nunca provas reais.',icon:'envio',file:'relatos.md'}];
const looks=[{id:'natural',label:'Acolhedora',detail:'Tons quentes · Georgia',colors:['#ede4d5','#76533d','#bda78e']},{id:'grafica',label:'Marcante',detail:'Contraste · Arial Bold',colors:['#d8eb69','#202620','#f4f5e9']},{id:'essencial',label:'Minimalista',detail:'Respiro · Arial',colors:['#e6f0ed','#325c67','#78a9ad']}];
const models=[{id:'novidade',label:'Novidade',pillars:['produtos','comunidade'],title:'Conheça a novidade',format:'Post'},{id:'dica',label:'Dica',pillars:['educacao'],title:'Uma dica para a sua pausa',format:'Carrossel'},{id:'bastidores',label:'Bastidores',pillars:['bastidores'],title:'Por trás de cada preparo',format:'Post'},{id:'checklist',label:'Checklist',pillars:['educacao','produtos'],title:'Antes da próxima visita',format:'Carrossel'},{id:'enquete',label:'Enquete',pillars:['educacao','produtos','bastidores','comunidade','confianca'],title:'Qual combina com você?',format:'Stories'},{id:'frase',label:'Frase da marca',pillars:['bastidores','comunidade','confianca'],title:'Toda pausa tem seu valor',format:'Post'}];
let stage=0,part=0,a={},saved=Array(9).fill(false),finished=false,preview='';
const find=(items,id)=>items.find(x=>x.id===id),label=(items,id)=>find(items,id)?.label||'';
const audience=()=>find(audiences,a.audience)||audiences[0];
const voiceText=id=>({proxima:`Vem conhecer ${label(offers,a.offer).toLowerCase()} da casa. Sua pausa espera por você!`,direta:`${label(offers,a.offer)} no Café da Esquina. Consulte o cardápio.`,editorial:`Entre os compromissos do dia, um convite para apreciar ${label(offers,a.offer).toLowerCase()}.`}[id]);
function positions(){return [{id:'pausa',label:'Uma pausa que faz bem',detail:`${label(offers,a.offer)} para ${audience().problem}.`,symbol:'◷'},{id:'cuidado',label:'O cuidado faz a diferença',detail:`Para ${audience().label.toLowerCase()}, com ${label(differences,a.difference).toLowerCase()}.`,symbol:'✧'},{id:'conexao',label:'O seu ponto de encontro',detail:`Uma cafeteria do bairro para ${audience().label.toLowerCase()}.`,symbol:'⌂'}];}
function pillars(){return [
 {id:'educacao',label:'Aprender sobre café',detail:'“Como escolher a bebida da sua pausa?”',need:['metodo','faq'],cta:'Salve para consultar.',role:'Ajudar a escolher',icon:'pasta'},
 {id:'produtos',label:'Conhecer o cardápio',detail:`“Conheça ${label(offers,a.offer).toLowerCase()} da casa.”`,need:['menu'],cta:'Consulte o cardápio.',role:'Apresentar ofertas existentes',icon:'cafe'},
 {id:'bastidores',label:'Ver os bastidores',detail:'“Quem está por trás da sua pausa?”',need:['historia'],cta:'Conheça nossa história.',role:'Criar proximidade',icon:'profissional'},
 {id:'comunidade',label:'Conversar com o bairro',detail:'“Qual é o seu momento de pausa?”',need:[],cta:'Conte nos comentários.',role:'Ouvir e conversar',icon:'mensagem'},
 {id:'confianca',label:'Mostrar experiências',detail:'“O que aprendemos ouvindo clientes?”',need:['relatos'],cta:'Compartilhe sua experiência.',role:'Dar contexto sem inventar provas',icon:'envio'}];}
const allowed=p=>!p.need?.length||p.need.some(k=>(a.knowledge||[]).includes(k));
const days=()=>a.frequency==='duas'?['Ter','Qui']:['Seg','Qua','Sex'];
function options(key){return ({offer:offers,goal:goals,difference:differences,audience:audiences,evidence,position:positions(),voice:voices,knowledge,pillars:pillars(),look:looks,templates:models,frequency:[{id:'duas',label:'2 vezes por semana',detail:'Terça e quinta.',symbol:'2'},{id:'tres',label:'3 vezes por semana',detail:'Segunda, quarta e sexta.',symbol:'3'}],schedule:[{id:'manha',label:'Pela manhã',detail:'08h · horário de exemplo.',symbol:'08h'},{id:'almoco',label:'No almoço',detail:'12h · horário de exemplo.',symbol:'12h'},{id:'tarde',label:'No fim da tarde',detail:'18h · horário de exemplo.',symbol:'18h'}],approval:[{id:'todos',label:'Aprovar cada material',detail:'Tudo passa por você antes do agendamento.',icon:'envio'},{id:'rotina',label:'Aprovar o calendário',detail:'A rotina segue o plano; mudanças voltam para você.',icon:'pasta'}]})[key];}
const multiple=key=>['knowledge','pillars','templates'].includes(key);
const valid=key=>multiple(key)?(a[key]||[]).length===3:Boolean(a[key]);
function dirty(){
 if(!saved.slice(stage).some(Boolean))return;
 for(let i=stage;i<9;i++){saved[i]=false;if(i>stage)stages[i].fields.forEach(k=>delete a[k]);}
 if(stage<3)delete a.voiceText;if(stage<7)delete a.titles;
 finished=false;$('notice').textContent='Escolha atualizada. As próximas etapas precisam ser revistas.';
}
function sample(look='natural',kind='novidade',title='Sua próxima pausa começa aqui'){
 const center=kind==='checklist'?'<div class="sample-checklist"><span><b>1</b>Conheça o menu</span><span><b>2</b>Escolha sua pausa</span><span><b>3</b>Visite a cafeteria</span></div>':kind==='enquete'?'<div class="sample-poll"><span><i></i>Quente</span><span><i></i>Gelado</span></div>':kind==='frase'?'<span class="sample-signature">Uma ideia da marca</span>':art('cafe');
 return `<div class="sample look-${esc(look)} type-${esc(kind)}" aria-hidden="true"><span class="sample-brand">CAFÉ DA ESQUINA</span><strong>${esc(title)}</strong>${center}<span class="sample-note">${kind==='enquete'?'Conte nos comentários':'Conheça a cafeteria'}</span></div>`;
}
function choice(key,o){
 const active=multiple(key)?(a[key]||[]).includes(o.id):a[key]===o.id;
 const incompatible=key==='pillars'&&!allowed(o)||key==='templates'&&!o.pillars.some(p=>(a.pillars||[]).includes(p));
 const disabled=incompatible||multiple(key)&&!active&&(a[key]||[]).length===3;
 const visual=key==='voice'?`<div class="writing-preview"><p>“${esc(voiceText(o.id))}”</p></div>`:key==='look'?sample(o.id,'novidade',a.voiceText||voiceText(a.voice)):key==='templates'?sample(a.look,o.id,o.title):`<div class="option-art">${o.icon?art(o.icon):`<span>${esc(o.symbol||'✧')}</span>`}</div>`;
 const detail=incompatible?(key==='pillars'?'Precisa de: '+o.need.map(k=>label(knowledge,k)).join(' ou '):'Escolha um pilar relacionado para usar este modelo.'):o.detail||o.pillars?.filter(p=>(a.pillars||[]).includes(p)).map(p=>label(pillars(),p)).join(' · ');
 return `<button class="choice-card ${active?'chosen':''}" data-choice="${key}" data-value="${o.id}" aria-pressed="${active}" ${disabled?'disabled':''}>${visual}<span class="choice-label">${esc(o.label)}<span class="pick" aria-hidden="true">${active?'✓':'+'}</span></span><span class="choice-detail">${esc(detail)}</span></button>`;
}
function extra(key){
 if(key==='audience'&&a.audience){const p=audience();return `<div class="context-note"><b>Hipóteses para investigar</b><p>Desejo: ${esc(p.desire)}. Objeção: ${esc(p.objection)}.</p></div>`;}
 if(key==='evidence'&&a.evidence)return `<div class="context-note"><b>${a.evidence==='relatos'?'Conversas fictícias para este exercício':'Plano de validação'}</b><p>${a.evidence==='relatos'?esc(audience().detail)+' · “O que tem no cardápio?” · “Como funciona o atendimento?”':'Converse com pessoas desse público, registre as dúvidas e compare as respostas com suas hipóteses.'}</p><small>Nenhuma pesquisa real foi realizada nesta página.</small></div>`;
 if(key==='position')return `<p class="context-note">Público prioritário: <b>${esc(audience().label)}</b>. A promessa precisa ser sustentada por evidências reais.</p>`;
 if(key==='voice'&&a.voice)return `<label class="edit-field">Ajuste a mensagem, se quiser<textarea id="voice-edit" maxlength="350" rows="3">${esc(a.voiceText||voiceText(a.voice))}</textarea></label>`;
 if(key==='knowledge')return '<p class="context-note">Materiais de exemplo. Relatos e resultados fictícios não podem ser publicados como provas.</p>';
 if(key==='pillars')return `<p class="context-note">Objetivo: <b>${esc(label(goals,a.goal))}</b>. Cada pilar usa um material da biblioteca ou uma conversa com o público.</p>`;
 if(key==='templates'&&(a.templates||[]).length){const id=a.templates.includes(preview)?preview:a.templates[0];preview=id;return `<div class="template-editor"><div><label for="preview-template">Experimente preencher um modelo</label><select id="preview-template">${a.templates.map(t=>`<option value="${t}" ${t===id?'selected':''}>${esc(label(models,t))}</option>`).join('')}</select><label class="edit-field">Título<input id="template-title" maxlength="90" value="${esc(a.titles?.[id]||find(models,id).title)}"></label><small>O modelo permanece; o título muda.</small></div><div id="edited-preview">${sample(a.look,id,a.titles?.[id]||find(models,id).title)}</div></div>`;}
 if((key==='frequency'&&a.frequency)||key==='schedule')return calendar();
 if(key==='approval')return '<p class="context-note">Preço novo, promessa sem prova, dados ausentes e reclamações sempre pedem intervenção humana.</p>';
 return '';
}
function calendar(){return `<div class="calendar" aria-label="Calendário semanal">${days().map((d,i)=>{const id=(a.templates||[])[i%(a.templates||[]).length],m=find(models,id),p=m?.pillars.find(p=>(a.pillars||[]).includes(p));return `<article><b>${d}</b><span>${esc(m?.format)}${a.schedule?' · '+({manha:'08h',almoco:'12h',tarde:'18h'}[a.schedule]):''}</span><strong>${esc(m?.label)}</strong><small>${esc(label(pillars(),p))}</small><span class="queue-state">${a.approval==='rotina'?'Revisar no calendário':'Aguardando aprovação'}</span></article>`;}).join('')}</div>`;}
function fileText(i){
 const chosen=key=>(a[key]||[]).map(id=>label(options(key),id)).join(', ');
 const prefix='# Café da Esquina\nSimulação fictícia para aprendizagem.\n\n';
 const texts=[
 `## Contexto\nCafeteria fictícia de bairro.\n\n## Oferta existente\n${label(offers,a.offer)}.\n\n## Objetivo no Instagram\n${label(goals,a.goal)}.\n\n## Diferencial proposto\n${label(differences,a.difference)}.\n\n## Links e restrições\nLinks, preços, horários e capacidade ainda não informados. Não inventar esses dados.`,
 `## Público a investigar\n${audience().label}\nProblema: ${audience().problem}.\nDesejo: ${audience().desire}.\nObjeção: ${audience().objection}.\nLinguagem: ${audience().language}.\n\n## Fontes\n${a.evidence==='relatos'?'Três falas fictícias do exercício: '+audience().detail+' / O que tem no cardápio? / Como funciona o atendimento?':'Hipóteses iniciais; ainda sem entrevistas.'}\nNenhuma pesquisa externa foi realizada.\n\n## A validar\nConversar com esse público, registrar data e fonte das respostas e revisar as hipóteses.`,
 `## Público prioritário\n${audience().label}\n\n## Proposta\n${label(positions(),a.position)}\n${find(positions(),a.position)?.detail}\n\n## Sustentação\nDiferencial proposto: ${label(differences,a.difference)}.\nProvas reais pendentes de coleta e validação.`,
 `## Tom\n${label(voices,a.voice)}\n\n## Vocabulário\n${a.voice==='proxima'?'vem, sua pausa, a gente':a.voice==='direta'?'cardápio, disponível, consulte':'apreciar, encontro, pausa'}\n\n## Exemplo aprovado nesta simulação\n${a.voiceText||voiceText(a.voice)}\n\n## Evitar\nPromessas sem prova, urgência inventada, superlativos e preços não confirmados.`,
 `## Biblioteca de exemplo\n${(a.knowledge||[]).map(id=>{const k=find(knowledge,id);return k.file+'\n'+k.detail+'\n'+({menu:'Oferta: '+label(offers,a.offer)+'. Preços e disponibilidade a confirmar.',metodo:'Exemplo: apresentar ingredientes, explicar o preparo e mostrar a finalização. Confirmar o método real.',historia:'Roteiro de entrevista: origem da casa, pessoas e relação com o bairro.',faq:'Perguntas de exemplo: o que oferece? Onde consultar horários? Como encomendar?',relatos:'Fala simulada: “Gostei da minha pausa aqui”. Não é depoimento real. Não há resultados medidos.'}[id]);}).join('\n\n')}`,
 `## Objetivo\n${label(goals,a.goal)}\n\n${(a.pillars||[]).map(id=>{const p=find(pillars(),id);return '## '+p.label+'\nFunção: '+p.role+'\nExemplo: '+p.detail+'\nCTA: '+p.cta+'\nFonte: '+(p.need.length?p.need.filter(k=>(a.knowledge||[]).includes(k)).map(k=>find(knowledge,k).file).join(', '):'Perguntas ao público; sem presumir respostas')+'\nLimite: não inventar provas nem informações ausentes.';}).join('\n\n')}`,
 `## Direção escolhida\n${label(looks,a.look)}\n${find(looks,a.look)?.detail}\n\n## Paleta\n${find(looks,a.look)?.colors.join(' / ')}\n\n## Ativos de exemplo\nIlustração aprovada de café: art/eugencia/cafe.png\nNome em texto: Café da Esquina. Logo real não fornecido.\nFontes do sistema, sem arquivo de fonte anexado.\n\n## Aplicação\nManter contraste, título legível e respiro. Confirmar a identidade com a marca antes do uso real.`,
 `## Banco de modelos\n${(a.templates||[]).map(id=>{const m=find(models,id);return '### '+m.label+'\nFormato: '+m.format+'\nTítulo editável: '+(a.titles?.[id]||m.title)+'\nPilar: '+m.pillars.filter(p=>(a.pillars||[]).includes(p)).map(p=>label(pillars(),p)).join(', ')+'\nPreencher título, material de origem e CTA; aplicar a voz '+label(voices,a.voice)+' e o visual '+label(looks,a.look)+'.';}).join('\n\n')}\n\nPrévias e campos editáveis nesta simulação. Não são arquivos de um editor externo.`,
 `## Frequência\n${days().length} materiais por semana: ${days().join(', ')}.\n\n## Aprovação\n${a.approval==='todos'?'Aprovar cada material antes do agendamento.':'Aprovar o calendário; alterações fora do plano voltam para revisão.'}\n\n## Fila\nRascunho → Revisão → Aprovado → Agendamento.\n\n## Intervenção humana\nPreços novos, promessas sem prova, informações ausentes, reclamações e mudanças no plano.\n\n## Agendamento\nHorário escolhido: ${{manha:'08h',almoco:'12h',tarde:'18h'}[a.schedule]}. Exemplo para testar, sem promessa de melhor desempenho. A conta real ainda precisa ser conectada. Revezar os três modelos nas semanas seguintes. Nenhuma publicação será realizada por esta página.`
 ];return prefix+texts[i];
}
function renderBase(){
 $('journey').innerHTML=stages.map((s,i)=>`<button data-stage="${i}" aria-label="${i+1}. ${s.name}${saved[i]?', salva':''}" title="${s.name}" ${stage===i&&!finished?'aria-current="step"':''} ${i>0&&!saved.slice(0,i).every(Boolean)?'disabled':''}><b>${saved[i]?'✓':i+1}</b><span>${s.short}</span></button>`).join('');
 $('base-panel').innerHTML=`<details class="base-folder" ${innerWidth>800?'open':''}><summary>${art('pasta')}<span>Sua base<strong>${saved.filter(Boolean).length} de 9 etapas salvas</strong></span></summary><div class="file-list">${stages.map((s,i)=>`<button data-file="${i}" ${!saved[i]?'disabled':''}><span aria-hidden="true">${saved[i]?'✓':'·'}</span><span>${s.file}</span></button>`).join('')}</div><p>Abra um arquivo para ver o que ficou registrado.</p></details>`;
}
function render(){
 renderBase();
 if(finished){$('exercise').innerHTML=`<div class="exercise-head"><p class="eyebrow">BASE CONCLUÍDA</p><h2 id="question" tabindex="-1">Agora o agente tem de onde partir.</h2><p>As nove etapas viraram uma base. Abra os arquivos para revisar suas decisões.</p></div><div class="final-summary">${sample(a.look,a.templates[0],a.titles?.[a.templates[0]]||find(models,a.templates[0]).title)}<div><strong>${esc(label(positions(),a.position))}</strong><p>${esc(audience().label)} · Voz ${esc(label(voices,a.voice))}</p><p>${esc((a.pillars||[]).map(p=>label(pillars(),p)).join(' · '))}</p></div></div>${calendar()}<div class="exercise-actions"><button data-stage="0" class="secondary">Revisar minha base</button><button id="download" class="primary">Baixar base de exemplo ↓</button></div><p class="simulation-note">A futura skill fará essa conversa com os dados reais do seu negócio.</p>`;return;}
 const s=stages[stage],key=s.fields[part];
 $('exercise').innerHTML=`<div class="exercise-head"><p class="eyebrow">${stage+1} DE 9 · ${s.name.toUpperCase()}</p><h2 id="question" tabindex="-1">${s.questions[part]}</h2><p>${multiple(key)?`Escolha 3 · ${(a[key]||[]).length} selecionados`:s.fields.length>1?`Decisão ${part+1} de ${s.fields.length} nesta etapa`:'Escolha a opção que combina com a marca.'}</p></div><div class="base-choices ${['look','templates'].includes(key)?'visual-choices':''}">${options(key).map(o=>choice(key,o)).join('')}</div><div class="extra">${extra(key)}</div><div class="exercise-actions"><button id="back" class="text-button" ${stage===0&&part===0?'disabled':''}>← Voltar</button><button id="next" class="primary" ${!valid(key)?'disabled':''}>${part<s.fields.length-1?'Continuar →':stage===8?'Concluir minha base ✓':'Salvar e continuar →'}</button></div>`;
}
function focusQuestion(){$('question')?.focus({preventScroll:true});}
function openFile(i){$('file-title').textContent=stages[i].file;$('file-content').innerHTML=`${i===7?`<div class="file-previews">${a.templates.map(id=>sample(a.look,id,a.titles?.[id]||find(models,id).title)).join('')}</div>`:i===8?calendar():''}<pre>${esc(fileText(i))}</pre>`;$('file-dialog').showModal();$('close-file').focus();}
function download(){const files={};stages.forEach((s,i)=>{files[s.file]=fileText(i);});const blob=new Blob([JSON.stringify({tipo:'Exemplo fictício',marca:'Café da Esquina',arquivos:files},null,2)],{type:'application/json'});const url=URL.createObjectURL(blob),link=document.createElement('a');link.href=url;link.download='cafe-da-esquina-base-exemplo.json';link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
 document.addEventListener('click',e=>{
  const b=e.target.closest('button');if(!b||b.disabled)return;
  if(b.dataset.file!==undefined){openFile(+b.dataset.file);return;}
  if(b.id==='close-file'){$('file-dialog').close();return;}
  if(b.id==='download'){download();return;}
  if(b.dataset.choice){const key=b.dataset.choice,id=b.dataset.value;if(!multiple(key)&&a[key]===id)return;dirty();if(multiple(key)){a[key]=(a[key]||[]).includes(id)?a[key].filter(x=>x!==id):[...(a[key]||[]),id];}else a[key]=id;if(key==='voice')a.voiceText=voiceText(id);render();document.querySelector(`[data-choice="${key}"][data-value="${id}"]`)?.focus({preventScroll:true});return;}
  if(b.id==='next'){const s=stages[stage];if(!valid(s.fields[part]))return;if(part<s.fields.length-1)part++;else{saved[stage]=true;window.EpisodeSound?.play('complete');if(stage===8)finished=true;else{stage++;part=0;}}}
  else if(b.id==='back'){if(part>0)part--;else if(stage>0){stage--;part=stages[stage].fields.length-1;}}
  else if(b.dataset.stage!==undefined){if(!saved.slice(0,+b.dataset.stage).every(Boolean))return;stage=+b.dataset.stage;part=0;finished=false;}
  else if(b.id==='restart'){a={};stage=0;part=0;saved.fill(false);finished=false;preview='';$('notice').textContent='Prática reiniciada.';}
  else return;
  render();focusQuestion();
 });
 document.addEventListener('input',e=>{
  if(e.target.id==='voice-edit'){dirty();a.voiceText=e.target.value.trim()||voiceText(a.voice);renderBase();}
  if(e.target.id==='template-title'){dirty();a.titles={...a.titles,[preview]:e.target.value.trim()||find(models,preview).title};$('edited-preview').innerHTML=sample(a.look,preview,a.titles[preview]);renderBase();}
 });
 document.addEventListener('change',e=>{if(e.target.id==='preview-template'){preview=e.target.value;render();$('preview-template').focus({preventScroll:true});}});
 render();
})();
