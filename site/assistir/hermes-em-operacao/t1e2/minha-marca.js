(() => {
  'use strict';
  const M=window.MarcaConhecimento;
  const $=selector=>document.querySelector(selector);
  const esc=value=>String(value??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const paths={
    grid:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
    compass:'<circle cx="12" cy="12" r="9"/><path d="m16 8-2.5 5.5L8 16l2.5-5.5Z"/><path class="accent" d="m16 8-5.5 2.5 3 3Z"/>',
    file:'<path d="M5 3h9l5 5v13H5Z"/><path d="M14 3v6h5M8 13h8M8 17h6"/>',
    search:'<circle cx="10.5" cy="10.5" r="7.5"/><path d="m16 16 5 5"/>',
    sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5 19 19M5 19l1.5-1.5M17.5 6.5 19 5"/>',
    expand:'<path d="M3 9V3h6M15 3h6v6M21 15v6h-6M9 21H3v-6"/>',
    upload:'<path d="M4 15v6h16v-6M12 16V3m-5 5 5-5 5 5"/>',
    folder:'<path d="M3 7V5h6l3 3h9v13H3Z"/><path class="accent" d="M16 3v2M20 4l-1 2M23 7h-2"/>',
    creator:'<path d="m5 10 12-6v16L5 15ZM5 10H2v5h3M6 16l2 5h3l-2-4"/><path d="M17 9q5 3 0 6"/><path class="accent" d="m20 4 2-2M21 11h2M20 19l2 2"/>',
    expert:'<path d="M12 6Q7 3 2 5v15q5-2 10 1 5-3 10-1V5q-5-2-10 1ZM12 6v15M5 9q2-1 4 0M5 13q2-1 4 0M15 9q2-1 4 0M15 13q2-1 4 0"/><path class="accent" d="M12 1v2M6 1l1 2M18 1l-1 2"/>',
    founder:'<path d="M14 16q-2 3-6 3H5l-3 3v-6q-2-5 2-7M9 4h9q4 0 4 5t-4 5h-2l-4 3v-3q-6 0-6-5 0-5 3-5ZM10 8h8M10 11h5"/><path class="accent" d="M3 4 2 2M20 18l2 2"/>',
    audience:'<circle cx="8" cy="7" r="3"/><path d="M2 20v-3q0-6 6-6t6 6v3ZM17 3q6 0 5 5l-3 3v-2h-3q-2-3 1-6Z"/><path class="accent" d="M18 5v1m0 1v.1"/>',
    target:'<circle cx="11" cy="13" r="9"/><circle cx="11" cy="13" r="5"/><circle cx="11" cy="13" r="1"/><path d="m11 13 8-8"/><path class="accent" d="M18 2v4h4l-2 2h-4V4Z"/>',
    bulb:'<path d="M9 20h6M10 23h4M8 17q0-3-2-5C0 1 24 1 18 12q-2 2-2 5ZM12 17v-6m-2-2 2 2 2-2"/><path class="accent" d="M2 3 4 5M20 5l2-2M12 0v2"/>',
    growth:'<path d="M3 21V14h4v7ZM10 21V9h4v12ZM17 21V4h4v17Z"/><path class="accent" d="m3 8 8-6"/>',
    check:'<path d="m5 12 5 5L20 6"/>',
    shield:'<path d="M12 2 3 6v6q0 6 9 10 9-4 9-10V6Z"/><path d="m7 12 3 3 7-7"/>',
    alert:'<path d="m12 2 11 19H1ZM12 8v5m0 4v.2"/>',
    arrow:'<circle cx="12" cy="12" r="10"/><path d="M6 12h12m-5-5 5 5-5 5"/>',
    question:'<circle cx="12" cy="12" r="10"/><path d="M9 8c0-4 9-3 6 1l-3 3v2m0 3v.2"/>'
  };
  const icon=name=>'<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">'+(paths[name]||paths.file)+'</svg>';
  document.querySelectorAll('[data-icon]').forEach(node=>node.innerHTML=icon(node.dataset.icon));
  const prefix='agentflix-social-media-document-v2:';
  const params=new URLSearchParams(location.search),projectId=params.get('base');
  let project=null,contextError='';
  if(projectId){
    try{
      const store=JSON.parse(localStorage.getItem('agentflix-ecf-base-v2')||'null');
      const candidate=store?.version===2&&Object.hasOwn(store.projects||{},projectId)?store.projects[projectId]:null;
      if(candidate?.id!==projectId||!window.ECFBaseBundle?.validProject(candidate,true))throw new Error();
      project=candidate;
    }catch(_){contextError='Esta Base ECF não está disponível neste navegador. Volte à Base ECF para abri-la.';}
  }
  let storeKey=project?prefix+'project:'+encodeURIComponent(projectId):params.has('marca')?prefix+'name:'+encodeURIComponent(params.get('marca')):null;
  function chooseStandalone(name){
    storeKey=prefix+'name:'+encodeURIComponent(M.key(name));
    try{localStorage.setItem(prefix+'last',storeKey);}catch(_){}
    const url=new URL(location.href);url.searchParams.set('marca',M.key(name));history.replaceState(null,'',url);
  }
  function savedDocuments(){
    const entries=[];
    try{for(let index=0;index<localStorage.length;index++){
      const key=localStorage.key(index);if(!key.startsWith(prefix))continue;
      try{const saved=JSON.parse(localStorage.getItem(key));if(saved?.format===2&&typeof saved.raw==='string')entries.push({key,...saved});}catch(_){}
    }}catch(_){}
    return entries;
  }
  const labels={plano:'Plano editorial',estrategia:'Estratégia',biblioteca:'Biblioteca'};
  const roles=[['Creator','Atenção','creator'],['Expert','Autoridade','expert'],['Founder','Ação','founder']];
  let model=null,raw='',selected=0,roleFilter='',libraryTab='pautas',filename='',importedAt='',uploadSequence=0;
  const view=()=>Object.hasOwn(labels,location.hash.slice(1))?location.hash.slice(1):'plano';
  const fallback=value=>value||'Não informado';
  const get=M.get;
  function openDetail(title,html){$('#detail-title').textContent=title;$('#detail-body').innerHTML=html;$('#detail-dialog').showModal();}
  function rowDetails(rows){return '<div class="detail-items">'+rows.map(row=>'<article class="detail-item"><dl>'+Object.entries(row).map(([label,value])=>'<dt>'+esc(label)+'</dt><dd>'+esc(fallback(value))+'</dd>').join('')+'</dl></article>').join('')+'</div>';}
  function sectionDetail(id){
    const section=model.sections[id];
    const text=section.lines.filter(line=>!/^\s*\|/.test(line)).map(line=>{
      if(/^#{3,6}\s/.test(line))return '<h3 style="margin:24px 0 12px">'+esc(M.clean(line.replace(/^#+\s+/,'')))+'</h3>';
      return '<p style="margin:8px 0">'+esc(M.clean(line))+'</p>';
    }).join('');
    openDetail(section.title,'<div class="detail-prose">'+text+'</div>'+section.tables.map(table=>rowDetails(table.rows)).join(''));
  }
  function setView(name){if(view()===name){render();return;}location.hash=name;}
  function topicCount(role){return model.topics.filter(topic=>M.key(topic.role).split(/\s*[+,/]\s*/).includes(M.key(role))).length;}
  function roleCards(mode){return '<div class="role-grid">'+roles.map(([name,currency,symbol])=>{
    const distribution=model.distribution.find(item=>M.key(item.role)===M.key(name));
    const ratio=distribution?.ratio;
    const isRatio=typeof ratio==='number';
    const description=mode==='library'?topicCount(name)+' pautas':isRatio?Math.round(ratio*100)+'%':'Não informado';
    const bar=mode==='plan'&&isRatio?'<span class="bar" aria-hidden="true">'+Array.from({length:10},(_,i)=>'<i class="'+(i<Math.round(ratio*10)?'filled':'')+'"></i>').join('')+'</span>':'';
    return '<button class="role-card" type="button" data-role="'+name+'" aria-label="'+name+': '+esc(mode==='plan'?(distribution?.label||'distribuição não informada'):description)+'. Ver pautas"><h2>'+name+'</h2><p>'+currency+'</p><span class="card-icon">'+icon(symbol)+'</span><span class="card-tag">'+bar+'<strong>'+description+'</strong></span></button>';
  }).join('')+'</div>';}
  function plan(){
    const first=model.topics[0];
    return roleCards('plan')+'<p class="hint">Distribuição editorial declarada na base. As barras representam a proporção de conteúdo planejada.</p><div class="content-grid"><div class="main-stack"><section class="surface entry"><div class="entry-copy"><p class="eyebrow">PORTA DE ENTRADA EDITORIAL</p><h2>'+esc(fallback(model.entry))+'</h2><p>'+esc(fallback(model.transformation))+'</p></div><span class="entry-visual">'+icon('compass')+'</span></section><button class="surface suggestion" type="button" data-topic="'+first.id+'"><span>Pauta sugerida · primeira na ordem do documento</span><strong>'+esc(first.title)+'</strong><small>'+esc(first.role)+' · '+esc(fallback(first.priority))+'</small></button></div><section class="dark-panel bank-panel"><div class="bank-heading"><div><h2>Banco de pautas</h2><p>'+model.topics.length+' pautas</p></div><button class="round-action" data-library="pautas" aria-label="Abrir todas as pautas" type="button">'+icon('arrow')+'</button></div><div class="bank-topics">'+model.topics.slice(0,3).map(topic=>'<button class="paper-topic" type="button" data-topic="'+topic.id+'">'+icon('file')+'<span><strong>'+esc(topic.title)+'</strong><small>'+esc(topic.role)+'</small></span></button>').join('')+'</div></section></div>';
  }
  function strategy(){
    const voice=get(model.voice.find(row=>M.key(get(row,'Aspecto'))==='tom'),'Regra operacional');
    const cards=[['Público',get(model.audience[0],'Situação'),'audience','Ver público',3],['Posicionamento',model.transformation||model.message,'target','Ver mensagem',4],['Voz',voice,'founder','Ver exemplos',5]];
    return '<div class="role-grid strategy-cards">'+cards.map(([name,subtitle,symbol,action,id])=>'<button class="role-card" type="button" data-section="'+id+'"><h2>'+name+'</h2><p title="'+esc(fallback(subtitle))+'">'+esc(fallback(subtitle))+'</p><span class="card-icon">'+icon(symbol)+'</span><span class="card-tag">'+action+'</span></button>').join('')+'</div><div class="content-grid"><div class="main-stack"><section class="surface"><h2>Pilares editoriais</h2><div class="pillars">'+model.pillars.map((pillar,index)=>'<button class="pillar" type="button" data-pillar="'+index+'">'+icon(['bulb','file','growth','target','compass'][index%5])+'<strong>'+esc(get(pillar,'Pilar'))+'</strong><small>'+esc(get(pillar,'Papel ECF predominante'))+'</small></button>').join('')+'</div></section><section class="surface message"><p>Mensagem central</p><strong>'+esc(fallback(model.message))+'</strong><button type="button" data-section="4">Ver mecanismo e mensagens de apoio ↗</button></section></div><section class="dark-panel"><h2>Promessas e limites</h2>'+[
      ['check','Pode comunicar',model.promises,4],['shield','Deve respeitar',model.limits,4],['question','A confirmar',model.gaps,12]
    ].map(([symbol,title,items,id])=>'<button class="limit-group" type="button" data-section="'+id+'"><span>'+icon(symbol)+'</span><div><strong>'+title+'</strong><p>'+esc(items[0]||'Consulte a seção completa.')+'</p><small>'+(items.length?'Ver '+items.length+' registros':'Abrir seção')+' ↗</small></div></button>').join('')+'</section></div>';
  }
  function filteredTopics(query){return model.topics.filter(topic=>(!roleFilter||M.key(topic.role).split(/\s*[+,/]\s*/).includes(M.key(roleFilter)))&&(!query||M.key(Object.values(topic).join(' ')).includes(query)));}
  function library(){
    const query=M.key($('#search').value),topics=filteredTopics(query);
    const matchedSections=query?Object.values(model.sections).filter(section=>M.key(section.title+' '+section.lines.join(' ')).includes(query)):[];
    const searchSections=matchedSections.length?'<section class="surface"><h2>Também na base</h2>'+matchedSections.map(section=>'<button class="topic-row" type="button" data-section="'+section.id+'">'+icon('file')+'<strong>'+esc(section.title)+'</strong></button>').join('')+'</section>':'';
    if(!topics.some(topic=>topic.id===selected))selected=topics[0]?.id??null;
    const topic=topics.find(topic=>topic.id===selected);
    const tabs='<div class="tabs"><button type="button" data-library="pautas" aria-pressed="'+(libraryTab==='pautas')+'">Pautas</button><button type="button" data-library="fontes" aria-pressed="'+(libraryTab==='fontes')+'">Fontes</button>'+(roleFilter?'<button class="clear-filter" data-clear-role type="button">'+esc(roleFilter)+' ×</button>':'')+'</div>';
    if(libraryTab==='fontes'){
      const sources=model.materials.filter(row=>!query||M.key(Object.values(row).join(' ')).includes(query));
      return tabs+'<div class="content-grid"><div class="main-stack"><section class="surface"><h2>Matéria-prima e prova</h2><div class="topic-list">'+(sources.map(row=>'<button class="topic-row" type="button" data-material="'+model.materials.indexOf(row)+'">'+icon('file')+'<span><strong>'+esc(get(row,'Item'))+'</strong><small>'+esc(get(row,'Tipo'))+' · '+esc(get(row,'Fonte'))+'</small></span></button>').join('')||'<p class="empty-result">Nenhuma fonte encontrada.</p>')+'</div></section>'+searchSections+'</div><section class="dark-panel"><h2>Mapa de fontes</h2><div class="detail-prose">'+esc(model.sourceMap.join('\n\n')||'Não informado')+'</div><button class="primary" type="button" data-section="11" style="margin-top:24px">Ver regras de uso</button></section></div>';
    }
    return tabs+roleCards('library')+'<div class="content-grid"><div class="main-stack"><section class="surface"><h2>'+(query?'Resultados da busca':roleFilter?'Pautas de '+esc(roleFilter):'Pautas priorizadas')+' <small style="font-size:14px;letter-spacing:0">'+topics.length+'</small></h2><div class="topic-list">'+(topics.map(item=>'<button class="topic-row" type="button" data-select-topic="'+item.id+'" aria-pressed="'+(selected===item.id)+'">'+icon('file')+'<span><strong>'+esc(item.title)+'</strong><small>'+esc(item.role)+' · '+esc(fallback(item.priority))+'</small></span></button>').join('')||'<p class="empty-result">Nenhuma pauta encontrada. Tente outro termo ou remova o filtro.</p>')+'</div></section>'+(topic?'<section class="surface hook"><p>Gancho da pauta selecionada</p><strong>'+esc(fallback(topic.hook))+'</strong><small>'+esc(fallback(topic.pillar))+' · '+esc(topic.role)+'</small></section>':'')+searchSections+'</div><aside class="dark-panel topic-detail"><h2>Ficha da pauta</h2>'+(topic?'<dl>'+[
      ['file','Fonte',topic.source],['search','Evidência',topic.evidence||'Não classificada nesta pauta. Confira a fonte.'],['shield','Permissão',topic.permission||'Não informada nesta pauta. Confira a fonte antes de publicar.'],['alert','Limite',topic.limit],['arrow','Próxima ação',topic.cta]
    ].map(([symbol,label,value])=>'<dt>'+icon(symbol)+label+'</dt><dd>'+esc(fallback(value))+'</dd>').join('')+'</dl><button class="primary" type="button" data-library="fontes">Conferir fontes e permissões</button>':'<p class="hint">Selecione uma pauta para ver a ficha.</p>')+'</aside></div>';
  }
  function render(){
    const current=view();
    $('#view-label').textContent=labels[current];
    document.querySelectorAll('[data-view]').forEach(node=>{if(node.dataset.view===current)node.setAttribute('aria-current','page');else node.removeAttribute('aria-current');});
    if(!model)return;
    $('#saved-bases').hidden=savedDocuments().length<2;
    $('#upload-panel').hidden=true;$('#view-content').hidden=false;$('#search').disabled=false;$('#original').hidden=false;
    $('#brand-name').textContent=model.name;document.title=model.name+' · '+labels[current]+' · AgentFlix';
    const dates=[model.version?'Versão '+model.version:'Versão não informada',model.updated?'Atualização: '+model.updated:'Importado em '+new Date(importedAt).toLocaleDateString('pt-BR')];
    $('#metadata').innerHTML=dates.map(value=>'<span>'+esc(value)+'</span>').join('<span aria-hidden="true">·</span>')+'<span class="status-badge" title="'+esc(model.status)+'">'+esc(model.status?model.status.split(/ gerado| a partir/i)[0]:'Status não informado')+'</span>';
    $('#view-content').innerHTML=current==='plano'?plan():current==='estrategia'?strategy():library();
  }
  function fail(message){$('#error-message').textContent=message;$('#repair-text').value=M.repair(message);$('#upload-error').hidden=false;$('#upload-error').scrollIntoView({block:'nearest',behavior:'smooth'});}
  async function upload(file){
    if(!file)return;
    const sequence=++uploadSequence;
    try{
      if(!/\.(md|markdown)$/i.test(file.name))throw new Error('Envie o arquivo .md de Base de Conhecimento Social Media devolvido pelo Hermes.');
      if(file.size>M.MAX_BYTES)throw new Error('O arquivo ultrapassa 2 MB.');
      const text=await file.text();
      if(sequence!==uploadSequence)return;
      const parsed=M.parse(text),date=new Date().toISOString();
      if(contextError)throw new Error(contextError);
      if(project&&M.key(project.business_name)!==M.key(parsed.name))throw new Error('Este arquivo é de “'+parsed.name+'”, mas a Base ECF aberta é de “'+project.business_name+'”. Envie o documento da marca correspondente.');
      if(!project)chooseStandalone(parsed.name);
      const value=JSON.stringify({format:2,projectId:project?.id||null,name:parsed.name,raw:text,filename:file.name,importedAt:date});
      let saved=true,sessionSaved=false;
      try{localStorage.setItem(storeKey,value);sessionStorage.removeItem(storeKey);}catch(_){saved=false;try{sessionStorage.setItem(storeKey,value);sessionSaved=true;}catch(__){}}

      model=parsed;raw=text;filename=file.name;importedAt=date;selected=0;roleFilter='';libraryTab='pautas';$('#search').value='';
      $('#upload-error').hidden=true;
      $('#status').textContent=saved?filename+' · Recebido e salvo neste navegador.':filename+(sessionSaved?' · Salvo apenas nesta aba. Mantenha uma cópia do arquivo.':' · Não foi salvo. Ao recarregar, a versão anterior pode voltar. Mantenha uma cópia deste arquivo.');
      if(view()!=='plano')location.hash='plano';render();$('#workspace').focus();
    }catch(error){if(sequence===uploadSequence)fail(error.message);}
    finally{$('#knowledge-upload').value='';}
  }
  $('#upload-button').onclick=$('#replace-file').onclick=()=>$('#knowledge-upload').click();
  $('#knowledge-upload').onchange=event=>upload(event.target.files[0]);
  $('#upload-panel').addEventListener('dragover',event=>event.preventDefault());
  $('#upload-panel').addEventListener('drop',event=>{event.preventDefault();upload(event.dataTransfer.files[0]);});
  window.addEventListener('hashchange',()=>{render();$('#workspace').focus();});
  $('#search').addEventListener('input',()=>{if(view()!=='biblioteca'){history.replaceState(null,'','#biblioteca');libraryTab='pautas';}render();});
  $('#view-content').addEventListener('click',event=>{
    const button=event.target.closest('button');if(!button||!model)return;
    if(button.hasAttribute('data-role')){roleFilter=button.dataset.role;libraryTab='pautas';setView('biblioteca');}
    else if(button.hasAttribute('data-topic')){selected=Number(button.dataset.topic);roleFilter='';$('#search').value='';libraryTab='pautas';setView('biblioteca');}
    else if(button.hasAttribute('data-select-topic')){
      selected=Number(button.dataset.selectTopic);
      const scroll=$('.topic-list').scrollTop;render();$('.topic-list').scrollTop=scroll;
      $('[data-select-topic="'+selected+'"]').focus({preventScroll:true});
    }
    else if(button.hasAttribute('data-library')){libraryTab=button.dataset.library;setView('biblioteca');}
    else if(button.hasAttribute('data-clear-role')){roleFilter='';render();}
    else if(button.hasAttribute('data-section'))sectionDetail(Number(button.dataset.section));
    else if(button.hasAttribute('data-pillar')){const row=model.pillars[Number(button.dataset.pillar)];openDetail(get(row,'Pilar'),rowDetails([row]));}
    else if(button.hasAttribute('data-material')){const row=model.materials[Number(button.dataset.material)];openDetail(get(row,'Item'),rowDetails([row]));}
  });
  $('#original').onclick=()=>openDetail('Documento completo','<p class="hint" style="color:#515550">'+esc(filename)+'</p>'+Object.values(model.sections).map(section=>'<details class="document-section"><summary>'+section.id+'. '+esc(section.title)+'</summary><pre>'+esc(section.lines.join('\n'))+'</pre></details>').join('')+'<details class="document-section"><summary>Arquivo original integral</summary><pre>'+esc(raw)+'</pre></details>');
  $('#close-dialog').onclick=()=>$('#detail-dialog').close();
  $('#theme').onclick=()=>{const light=document.body.classList.toggle('light');$('#theme').setAttribute('aria-label',light?'Ativar tema escuro':'Ativar tema claro');};
  if(!document.fullscreenEnabled)$('#fullscreen').hidden=true;
  $('#fullscreen').onclick=async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await $('.brand-shell').requestFullscreen();}catch(_){$('#status').textContent='O navegador não permitiu abrir em tela cheia.';}};
  $('#copy-repair').onclick=async()=>{try{if(!await window.agentflixCopy?.($('#repair-text').value))throw new Error();$('#status').textContent='Prompt de correção copiado. Anexe o arquivo no Hermes e cole a instrução.';$('#copy-repair').textContent='Copiado ✓';}catch(_){$('#upload-error details').open=true;$('#repair-text').focus();$('#repair-text').select();$('#copy-repair').textContent='Selecione e copie a instrução abaixo';}};
  $('#saved-bases').onclick=()=>openDetail('Bases salvas',savedDocuments().map(saved=>'<button class="topic-row" type="button" data-saved-key="'+esc(saved.key)+'">'+icon('folder')+'<span><strong>'+esc(saved.name)+'</strong><small>'+esc(saved.filename)+'</small></span></button>').join(''));
  $('#detail-body').addEventListener('click',event=>{
    const button=event.target.closest('[data-saved-key]');if(!button)return;
    const saved=savedDocuments().find(item=>item.key===button.dataset.savedKey);if(!saved)return;
    const url=new URL(location.href);url.search='';url.hash='plano';
    url.searchParams.set(saved.projectId?'base':'marca',saved.projectId||M.key(saved.name));location.assign(url);
  });
  try{
    let saved=null,sessionOnly=false;
    if(!projectId&&!storeKey){const last=localStorage.getItem(prefix+'last');if(last?.startsWith(prefix+'name:'))storeKey=last;}
    if(!contextError&&storeKey){
      const pending=sessionStorage.getItem(storeKey);sessionOnly=Boolean(pending);
      saved=JSON.parse(pending||localStorage.getItem(storeKey)||'null');
    }else if(!contextError&&!projectId){
      // Legacy standalone documents have no project identity. Never attach them to a Base ECF.
      const legacy=JSON.parse(localStorage.getItem('agentflix-social-media-document-v1')||'null');
      if(legacy?.format===1){saved={...legacy,format:2,projectId:null};}
    }
    if(saved?.format===2&&typeof saved.raw==='string'&&(saved.projectId||null)===(projectId||null)){
      const parsed=M.parse(saved.raw);
      if(project&&M.key(parsed.name)!==M.key(project.business_name))throw new Error();
      model=parsed;raw=saved.raw;filename=String(saved.filename||'Base de conhecimento.md');
      importedAt=Number.isFinite(Date.parse(saved.importedAt))?saved.importedAt:new Date().toISOString();
      if(!project){chooseStandalone(model.name);if(!saved.name)localStorage.setItem(storeKey,JSON.stringify({...saved,name:model.name}));}
      $('#status').textContent=filename+(sessionOnly?' · Salvo apenas nesta aba. Mantenha uma cópia.':' · Salvo neste navegador.');
    }
  }catch(_){$('#status').textContent='Não foi possível restaurar a base. Envie novamente o arquivo .md.';}
  $('#saved-bases').hidden=savedDocuments().length<2;
  if(contextError){$('#status').textContent=contextError;$('#upload-button').disabled=true;$('#replace-file').disabled=true;}

  render();
})();
