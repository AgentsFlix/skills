(() => {
  'use strict';
  const stages = ECFBaseStages, C = ECFBaseContract;
  const esc = value => String(value ?? '').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const statusNames = {rascunho:'Rascunho',revisado:'Revisado',aprovado:'Aprovado',precisa_revisar:'Precisa de revisão'};
  const selections = Array(stages.length).fill(null), contexts = Array(stages.length).fill(''), repairs = Array(stages.length).fill('');
  const storageKey='agentflix-ecf-base-v2', legacyStorageKey='agentflix-ecf-base-v1', entryKey='agentflix-ecf-base-entry-v1';
  let project = null, store = {version:2,active_id:null,projects:{}}, entryDraft = null, loading = true, unavailable = false;
  const skillLabels={
    'copy-pesquisa-avatar':'Pesquisa & Avatar',
    'copy-voz':'Voz da Marca',
    'hybrid-etl':'Extrair o que já existe',
    'hybrid-icp':'Cliente ideal',
    'hybrid-marca':'Marca',
    'hybrid-perfil':'Perfil do negócio',
    'maton-operations':'Maton AI',
    'sop-extrair':'Extrair um processo'
  };
  const skillCover = name => 'https://imagedelivery.net/4Co9W7pMsYa-duNBi7UzxA/covers/'+encodeURIComponent(name)+'-card.jpg/capa';
  function skillCards(names) {
    return '<div class="base-tools"><p class="base-tools-label">Skills usadas pelo agente nesta etapa</p><p class="base-tools-help">O Hermes consulta estas skills quando executar o prompt.</p><div class="base-skills">'
      +names.map(name=>{const label=skillLabels[name]||name,source=C.skillSource(name);return '<a class="base-skill-card" href="'+source.github+'" target="_blank" rel="noopener noreferrer" aria-label="Abrir '+esc(label)+' no GitHub"><img src="'+skillCover(name)+'" alt="Capa da skill '+esc(label)+'" width="400" height="600" loading="lazy"><span><strong>'+esc(label)+'</strong><small>'+esc(name)+' <span aria-hidden="true">↗</span></small></span></a>';}).join('')
      +'</div></div>';
  }
  const art = name => '<img src="base-editorial-art/'+name+'.png" alt="" width="200" height="180">';
  const chips = values => values.map(value=>'<span class="base-chip">'+value+'</span>').join('');
  const illustrations = {
    pesquisa: '<rect class="outline" x="20" y="58" width="52" height="42" rx="8"/><path class="line" d="M33 72h26M33 83h17"/><rect class="outline" x="84" y="30" width="55" height="44" rx="8"/><path class="paper" d="m105 40 16 12-16 12z"/><path class="outline" d="M91 107h40l9 11-9 11H91z"/><circle class="paper" cx="174" cy="93" r="25"/><circle class="accent-line" cx="170" cy="89" r="12"/><path class="accent-line" d="m179 98 15 15"/>',
    canais: '<path class="outline" d="M38 52h23a14 14 0 0 1 0 28H47"/><path class="outline" d="M30 80H19a14 14 0 0 1 0-28h12"/><path class="line" d="m52 65 32 16M52 65l32-16"/><circle class="soft" cx="91" cy="49" r="8"/><circle class="accent" cx="91" cy="81" r="8"/><circle class="soft" cx="91" cy="113" r="8"/><path class="accent-line" d="M102 81h27"/><circle class="paper" cx="155" cy="81" r="26"/><circle class="accent-line" cx="151" cy="77" r="12"/><path class="accent-line" d="m160 86 16 16"/><circle class="soft" cx="202" cy="47" r="7"/><circle class="accent" cx="215" cy="81" r="7"/><circle class="soft" cx="202" cy="115" r="7"/>',
    verificado: '<path class="paper" d="M61 25h75l25 25v82H61z"/><path class="line" d="M136 25v25h25M82 72h58M82 87h46M82 102h34"/><circle class="accent" cx="160" cy="115" r="25"/><path class="ink" d="m148 115 8 8 17-20"/>',
    clientes: '<path class="outline" d="M35 50h52a12 12 0 0 1 12 12v21a12 12 0 0 1-12 12H60l-13 13v-13H35a12 12 0 0 1-12-12V62a12 12 0 0 1 12-12z"/><circle class="paper" cx="73" cy="98" r="16"/><path class="paper" d="M48 140c2-20 13-30 25-30s24 10 26 30"/><circle class="accent" cx="158" cy="80" r="17"/><path class="accent" d="M130 140c2-23 14-34 28-34s27 11 29 34"/><path class="line" d="M112 109h22M112 122h16"/>',
    publico: '<circle class="soft" cx="55" cy="70" r="16"/><path class="soft" d="M30 128c3-23 14-34 25-34s23 11 25 34"/><circle class="soft" cx="100" cy="50" r="13"/><path class="soft" d="M79 102c3-18 12-28 21-28s18 10 21 28"/><circle class="soft" cx="100" cy="116" r="13"/><path class="soft" d="M79 150c3-18 12-28 21-28s18 10 21 28"/><circle class="paper" cx="163" cy="86" r="35"/><circle class="accent-line" cx="158" cy="81" r="17"/><path class="accent-line" d="m171 95 24 24"/><circle class="accent" cx="158" cy="81" r="6"/>',
    descobrir: '<circle class="paper" cx="121" cy="84" r="45"/><path class="accent-line" d="M121 45v12M121 111v12M82 84h12M148 84h12"/><path class="ink" d="m121 61 11 22-11 24-11-24z"/><path class="line" d="M36 122c18-24 37-34 64-36M204 122c-18-24-37-34-64-36"/><circle class="soft" cx="32" cy="126" r="6"/><circle class="soft" cx="208" cy="126" r="6"/>',
    resultado: '<circle class="outline" cx="173" cy="78" r="36"/><circle class="paper" cx="173" cy="78" r="22"/><circle class="accent" cx="173" cy="78" r="8"/><path class="accent-line" d="M34 112c29 0 37-46 77-46h17"/><path class="accent" d="m123 55 20 11-20 12z"/><path class="paper" d="M48 42v68M48 42h36L66 58 84 74H48"/>',
    metodo: '<rect class="paper" x="22" y="41" width="52" height="38" rx="9"/><path class="ink" d="M38 60h19M47 51v18"/><path class="accent-line" d="M75 60h25"/><rect class="outline" x="100" y="41" width="52" height="38" rx="9"/><path class="line" d="M116 53h20M116 66h20"/><path class="accent-line" d="M153 60h25"/><rect class="accent" x="178" y="41" width="42" height="38" rx="9"/><path class="ink" d="m189 60 7 7 13-16"/><path class="line" d="M48 110h144"/>',
    caminho: '<path class="paper" d="M119 31v105"/><path class="paper" d="M119 51H66l13 15-13 15h53zM119 88h54l-13 15 13 15h-54z"/><path class="accent-line" d="M119 113c-25 3-37 15-54 29M119 113c25 3 37 15 54 29"/><circle class="accent" cx="119" cy="31" r="8"/>',
    acolhedora: '<path class="paper" d="M31 48h80a14 14 0 0 1 14 14v28a14 14 0 0 1-14 14H74l-18 18v-18H31a14 14 0 0 1-14-14V62a14 14 0 0 1 14-14z"/><path class="accent" d="M132 71h66a14 14 0 0 1 14 14v20a14 14 0 0 1-14 14h-25l-15 16v-16h-26a14 14 0 0 1-14-14V85a14 14 0 0 1 14-14z"/><path class="ink" d="M73 84c-10-12-24 3 0 19 24-16 10-31 0-19z"/>',
    didatica: '<rect class="paper" x="27" y="30" width="143" height="91" rx="7"/><path class="line" d="M51 58h64M51 76h90M51 94h50"/><circle class="accent" cx="132" cy="58" r="10"/><path class="accent-line" d="M132 38v-8M115 46l-6-6M149 46l6-6"/><path class="ink" d="M178 135 205 96"/><circle class="soft" cx="174" cy="140" r="9"/>',
    provocadora: '<path class="paper" d="m32 69 73-27v70L32 85z"/><path class="ink" d="M45 89 57 121h28L75 81"/><path class="accent-line" d="M117 60h18M119 83h24M116 106h17"/><circle class="accent" cx="180" cy="82" r="26"/><path class="ink" d="m180 65-10 19h9l-2 17 13-22h-9z"/>',
    lembrar: '<path class="outline" d="M49 89h124v46H49z"/><path class="paper" d="M43 73h61l14 16H43z"/><path class="line" d="M69 108h83M69 122h58"/><path class="accent" d="M171 42h31a12 12 0 0 1 12 12v19a12 12 0 0 1-12 12h-11l-10 11V85h-10a12 12 0 0 1-12-12V54a12 12 0 0 1 12-12z"/><circle class="soft" cx="74" cy="45" r="18"/><path class="soft" d="M46 76c3-17 13-26 28-26s25 9 28 26"/>'
  };
  const illustration = name => '<svg class="base-illustration base-illustration--'+name+'" viewBox="0 0 240 160" aria-hidden="true" focusable="false">'+illustrations[name]+'</svg>';
  function visual(stage, option) {
    if (stage === 0) return option === 2 ? '<div class="base-pair">'+art('produto')+'<span>+</span>'+art('profissional')+'</div>' : '<div class="base-object">'+art(option===0?'produto':'profissional')+chips([option===0?'Físico ou digital':'Trabalho + resultado'])+'</div>';
    if (stage === 1) return [
      illustration('pesquisa'),
      illustration('canais'),
      illustration('verificado')
    ][option];
    if (stage === 2) return [
      illustration('clientes'),
      illustration('publico'),
      illustration('descobrir')
    ][option];
    if (stage === 3) return [illustration('resultado'),illustration('metodo'),illustration('caminho')][option];
    if (stage === 4) return [illustration('acolhedora'),illustration('didatica'),illustration('provocadora')][option];
    return [
      '<div class="base-object">'+art('profissional')+'<div>'+chips(['Histórias','Métodos'])+'</div></div>',
      '<div class="base-object">'+art('pasta')+chips(['Aulas · textos · documentos'])+'</div>',
      illustration('lembrar')
    ][option];
  }
  const root = document.querySelector('main');
  stages.forEach((stage,index)=>{
    const section = document.createElement('section');
    section.className='scene base-scene'; section.dataset.scene=String(index+12); section.hidden=true;
    section.setAttribute('aria-labelledby','base-title-'+index);
    section.innerHTML = '<nav class="base-nav" style="--base-stages:'+stages.length+'" aria-label="Etapas da base">'+stages.map((item,i)=>'<a href="#etapa-'+(i+1)+'" data-base-nav="'+item.id+'" '+(index===i?'aria-current="step"':'')+'><span class="base-nav-number">'+(i+1)+'</span><span>'+item.short+'</span><span class="base-nav-check" aria-label="Arquivo recebido" hidden>✓</span></a>').join('')+'</nav>'
      +'<div class="base-decision"><div class="base-heading"><div><p class="eyebrow">'+stage.n+' DE '+stages.length+' · '+stage.title+'</p><h1 id="base-title-'+index+'" tabindex="-1">'+stage.question+'</h1><p>'+stage.guidance+'</p></div></div>'
      +'<div class="base-choices" role="group" aria-label="'+esc(stage.question)+'">'+stage.options.map((option,i)=>'<button type="button" class="base-choice" data-choice="'+i+'" aria-pressed="false"><span class="base-selection" aria-hidden="true"></span><span class="base-option-art" aria-hidden="true">'+visual(index,i)+'</span><span class="base-option-copy"><strong>'+esc(option.title)+'</strong><span>'+esc(option.description)+'</span></span></button>').join('')+'</div></div>'
      +'<div class="base-workspace"><section class="base-prompt-side" aria-labelledby="base-prompt-title-'+index+'"><p class="base-step-label">01 · LEVE PARA O HERMES</p><h2 id="base-prompt-title-'+index+'">Converse. Dê contexto.</h2>'
      +(index===0?'<label for="base-name">Nome do negócio</label><input id="base-name" maxlength="120" placeholder="Como seu negócio se chama?" autocomplete="organization">':'<p class="base-business-name"></p>')
      +skillCards(stage.skills)
      +'<details class="base-context"><summary>Acrescentar contexto</summary><label class="sr-only" for="base-extra-'+index+'">Contexto adicional para '+stage.short+'</label><textarea id="base-extra-'+index+'" rows="3" maxlength="4000" placeholder="Um detalhe que o Hermes precisa saber…"></textarea></details>'
      +'<button type="button" class="primary base-copy">Copiar prompt para o Hermes <span aria-hidden="true">↗</span></button>'
      +'<p class="base-copy-feedback" role="status"></p><details class="base-prompt-preview"><summary>Ver prompt</summary><textarea aria-label="Prompt de '+stage.short+'" readonly rows="10"></textarea><button type="button" class="text-button base-prompt-download">Baixar prompt .md</button></details></section>'
      +'<section class="base-upload-side" aria-labelledby="base-upload-title-'+index+'"><p class="base-step-label">02 · TRAGA O RESULTADO</p><h2 id="base-upload-title-'+index+'">Sua base começa a ganhar forma.</h2><div class="base-fictional-action base-fictional-upload"><p>Quer mostrar o fluxo completo?</p><button type="button" class="secondary base-fictional">Preencher com exemplo fictício</button><small>Salva um rascunho ilustrativo desta etapa. Não use como dado real.</small></div><div class="base-upload-empty"><div class="base-file-graphic" aria-hidden="true">'+art('pasta')+'</div><label class="base-file-button" for="base-file-'+index+'">Abrir '+stage.id+'.json <span aria-hidden="true">↑</span></label><input class="base-file-input" id="base-file-'+index+'" type="file" accept=".json,application/json"><p>O arquivo que o Hermes entregou.</p></div>'
      +'<div class="base-receipt" hidden></div><p class="base-file-feedback" role="status"></p><div class="base-repair" hidden><p class="base-step-label">ARQUIVO PRECISA DE CORREÇÃO</p><h3>Peça ao Hermes para ajustar.</h3><p>A correção preserva o conteúdo e aplica o contrato desta etapa.</p><button type="button" class="secondary base-repair-copy">Copiar pedido de correção <span aria-hidden="true">↗</span></button><p class="base-repair-feedback" role="status"></p><details><summary>Conferir o pedido</summary><textarea readonly rows="10" aria-label="Pedido de correção"></textarea><button type="button" class="text-button base-repair-download">Baixar pedido .md</button></details></div></section></div>'
      +'<p class="base-storage-note" role="status">Abrindo sua base…</p>';
    section.querySelectorAll('[data-choice]').forEach(button=>button.addEventListener('click',()=>selectOption(index,Number(button.dataset.choice))));
    section.querySelector('.base-fictional').addEventListener('click',()=>fillFictional(index));
    section.querySelector('#base-extra-'+index).addEventListener('input',event=>{contexts[index]=event.target.value;updatePrompt(index);});
    section.querySelector('.base-copy').addEventListener('click',()=>copyPrompt(index));
    section.querySelector('.base-prompt-download').addEventListener('click',async()=>{
      try { await ensureProject(); download(stage.id+'-prompt.md',prompt(index),'text/markdown'); }
      catch(error) { tell(index,'.base-copy-feedback',error.message); }
    });
    section.querySelector('.base-prompt-preview').addEventListener('toggle',()=>updatePrompt(index));
    section.querySelector('.base-file-input').addEventListener('change',event=>importOutput(index,event.target));
    section.querySelector('.base-repair-copy').addEventListener('click',()=>copyRepair(index));
    section.querySelector('.base-repair-download').addEventListener('click',()=>download(stage.id+'-corrigir-json.md',repairs[index],'text/markdown'));
    root.append(section);
  });
  const scene = index => document.querySelector('[data-scene="'+(12+index)+'"]');
  function tell(index,selector,message){scene(index).querySelector(selector).textContent=message;}
  function selectOption(index, option) {
    selections[index]=option;
    const section=scene(index);
    section.querySelectorAll('[data-choice]').forEach(item=>item.setAttribute('aria-pressed',String(Number(item.dataset.choice)===option)));
    updatePrompt(index);
  }
  function prompt(index) {
    const name = document.querySelector('#base-name').value.trim();
    const startingPoint = selections[index]===null ? (project?.records[stages[index].id]?'Retome a versão salva desta etapa e pergunte apenas o que falta.':'Ainda não escolhi; ajude-me a descobrir') : stages[index].options[selections[index]].title;
    return C.buildPrompt(index,project || {id:'IDENTIFICADOR_GERADO_AO_COPIAR',business_name:name||'NOME_DO_NEGOCIO',records:{}},startingPoint,contexts[index],stages);
  }
  function updatePrompt(index){scene(index).querySelector('.base-prompt-preview textarea').value=prompt(index);}
  function validDiagnosis(value){return value===undefined||Boolean(window.ECFBaseScores?.validSummary?.(value));}
  function validProject(value){return Boolean(value&&typeof value.id==='string'&&value.id&&typeof value.business_name==='string'&&value.records&&typeof value.records==='object'&&!Array.isArray(value.records)&&validDiagnosis(value.diagnosis));}
  function readStore(){
    const raw=localStorage.getItem(storageKey);
    if(raw){
      const value=JSON.parse(raw);
      if(!value||value.version!==2||(value.active_id!==null&&typeof value.active_id!=='string')||!value.projects||typeof value.projects!=='object'||Array.isArray(value.projects)||!Object.entries(value.projects).every(([id,candidate])=>id===candidate?.id&&validProject(candidate)))throw Error('A base salva neste navegador não pôde ser lida. Baixe uma cópia antes de continuar.');
      return value;
    }
    const legacyRaw=localStorage.getItem(legacyStorageKey);
    if(!legacyRaw)return {version:2,active_id:null,projects:{}};
    const legacy=JSON.parse(legacyRaw);
    if(!validProject(legacy))throw Error('A base salva neste navegador não pôde ser lida. Baixe uma cópia antes de continuar.');
    return {version:2,active_id:Object.keys(legacy.records).length?legacy.id:null,projects:Object.keys(legacy.records).length?{[legacy.id]:legacy}:{}};
  }
  function readEntryDraft(){
    try {
      const value=JSON.parse(sessionStorage.getItem(entryKey)||'null');
      return value?.version===1&&typeof value.id==='string'&&value.id&&typeof value.business_name==='string'&&value.business_name.trim()?{version:1,id:value.id,business_name:value.business_name.trim(),source:value.source==='journey'?'journey':'base'}:null;
    } catch(_){return null;}
  }
  function saveEntryDraft(){try{sessionStorage.setItem(entryKey,JSON.stringify(entryDraft));}catch(_){}}
  function draftFor(name){
    entryDraft={version:1,id:entryDraft?.id||'local-'+(globalThis.crypto?.randomUUID?.()||Date.now()),business_name:name,source:entryDraft?.source||'base'};
    saveEntryDraft();
    return entryDraft;
  }
  function saveProject(){
    try {
      store.projects[project.id]=project;
      store.active_id=project.id;
      localStorage.setItem(storageKey,JSON.stringify(store));
      try{sessionStorage.removeItem(entryKey);}catch(_){}
      entryDraft=null;
    } catch(_) {
      unavailable=true;
      throw Error('O navegador não conseguiu guardar esta base. Baixe o JSON antes de sair e libere espaço para continuar.');
    }
  }
  async function ensureProject() {
    if(loading) throw new Error('Aguarde a leitura da base salva.');
    if(project) return project;
    const name=document.querySelector('#base-name').value.trim();
    if(!name) {
      location.hash='#etapa-1';
      document.querySelector('#base-name').focus();
      throw new Error('Preencha o nome do negócio para gerar seu prompt.');
    }
    const draft=draftFor(name);
    project={id:draft.id,business_name:draft.business_name,records:{}};
    refresh();
    return project;
  }
  function ensureFictionalProject() {
    if (loading) throw new Error('Aguarde a leitura da base salva.');
    if (project) return project;
    const input=document.querySelector('#base-name');
    const name=input.value.trim()||'Estúdio Aurora (exemplo)';
    input.value=name;
    const draft=draftFor(name);
    project={id:draft.id,business_name:draft.business_name,records:{}};
    refresh();
    return project;
  }
  function fillFictional(index) {
    try {
      const demoProject=ensureFictionalProject();
      selectOption(index,[2,0,1,1,1,0][index]);
      const output=C.parse(JSON.stringify(C.fictional(index,demoProject)),{id:demoProject.id,business_name:demoProject.business_name,stage:stages[index].id});
      project.records[stages[index].id]={output,saved_at:new Date().toISOString()};
      saveProject();clearRepair(index);refresh();
      tell(index,'.base-file-feedback','Exemplo fictício salvo neste navegador. Substitua-o por dados reais antes de usar a base.');
      window.dispatchEvent(new CustomEvent('ecf:fictional-filled',{detail:{index,stage:stages[index].id}}));
    } catch(error) {
      tell(index,'.base-file-feedback',error.message);
    }
  }
  async function copyText(value) {
    if(navigator.clipboard?.writeText) return navigator.clipboard.writeText(value);
    const textarea=document.createElement('textarea');
    textarea.value=value; textarea.setAttribute('readonly',''); textarea.style.position='fixed'; textarea.style.opacity='0';
    document.body.append(textarea); textarea.select();
    const copied=document.execCommand('copy'); textarea.remove();
    if(!copied) throw new DOMException('A cópia foi bloqueada pelo navegador.','NotAllowedError');
  }
  async function copyPrompt(index) {
    const button=scene(index).querySelector('.base-copy'); button.disabled=true;
    try {
      await ensureProject(); updatePrompt(index);
      await copyText(prompt(index));
      tell(index,'.base-copy-feedback','Prompt copiado. Cole na conversa com o Hermes.');
      window.dispatchEvent(new CustomEvent('ecf:prompt-copied',{detail:{index,stage:stages[index].id}}));
    } catch(error) {
      scene(index).querySelector('.base-prompt-preview').open=true; updatePrompt(index);
      tell(index,'.base-copy-feedback',error.name==='NotAllowedError'?'Selecione o prompt abaixo para copiar, ou baixe o arquivo .md.':error.message);
    } finally {button.disabled=false;}
  }
  function showRepair(index,raw,error,filename) {
    const name=document.querySelector('#base-name').value.trim();
    const repairProject=project||{id:'IDENTIFICADOR_DA_BASE',business_name:name||'NOME_DO_NEGOCIO',records:{}};
    repairs[index]=C.buildRepairPrompt(index,repairProject,raw,error,filename);
    const panel=scene(index).querySelector('.base-repair');
    panel.hidden=false;
    panel.querySelector('textarea').value=repairs[index];
    panel.querySelector('.base-repair-feedback').textContent='';
  }
  function clearRepair(index) {
    repairs[index]='';
    const panel=scene(index).querySelector('.base-repair');
    panel.hidden=true;
    panel.querySelector('textarea').value='';
    panel.querySelector('.base-repair-feedback').textContent='';
  }
  async function copyRepair(index) {
    const button=scene(index).querySelector('.base-repair-copy');button.disabled=true;
    try {
      await copyText(repairs[index]);
      scene(index).querySelector('.base-repair-feedback').textContent='Pedido copiado. Cole no Hermes e envie o mesmo JSON rejeitado se ele não estiver incluído.';
    } catch(error) {
      scene(index).querySelector('.base-repair details').open=true;
      scene(index).querySelector('.base-repair-feedback').textContent='A cópia foi bloqueada. Selecione o pedido abaixo ou baixe o arquivo .md.';
    } finally {button.disabled=false;}
  }
  async function importOutput(index,input) {
    const file=input.files[0]; if(!file)return;
    tell(index,'.base-file-feedback','Conferindo e salvando…'); input.disabled=true;
    let raw='';
    try {
      await ensureProject();
      if(file.size>C.MAX_BYTES) throw new Error('O arquivo ultrapassa 500 KB. Envie apenas os documentos de texto desta etapa.');
      raw=await file.text();
      const output=C.parse(raw,{id:project.id,business_name:project.business_name,stage:stages[index].id});
      project.records[stages[index].id]={output,saved_at:new Date().toISOString()};saveProject();clearRepair(index);refresh();
      tell(index,'.base-file-feedback','Arquivo recebido e salvo neste navegador.');
      window.dispatchEvent(new CustomEvent('ecf:file-imported',{detail:{index,stage:stages[index].id}}));
    } catch(error) {tell(index,'.base-file-feedback',error.message);showRepair(index,raw,error.message,file.name);window.dispatchEvent(new CustomEvent('ecf:file-import-failed',{detail:{index,stage:stages[index].id}}));}
    finally {input.disabled=false;input.value='';}
  }
  function download(filename,content,type='application/json') {
    const url=URL.createObjectURL(new Blob([content],{type}));
    const anchor=document.createElement('a');anchor.href=url;anchor.download=filename;anchor.click();
    setTimeout(()=>URL.revokeObjectURL(url),2000);
  }
  function downloadAll() {
    if(!project || !Object.keys(project.records).length)return;
    const bundle=window.ECFBaseBundle?.createBundle(project);
    if(bundle)return window.ECFBaseBundle.download(bundle);
    download('minha-base-ecf.json',JSON.stringify({format:'agentflix-base-bundle-1',exported_at:new Date().toISOString(),...project},null,2));
    return true;
  }
  function saveDiagnosis(summary){
    if(!project)throw new Error('Abra sua base antes de conectar o diagnóstico ECF.');
    if(!validDiagnosis(summary)||summary===undefined)throw new Error('O resumo do diagnóstico ECF não é válido.');
    project.diagnosis=summary;saveProject();refresh();
  }
  function refresh() {
    const count=Object.keys(project?.records||{}).length;
    const nameInput=document.querySelector('#base-name');
    if(project){nameInput.value=project.business_name;nameInput.readOnly=true;}
    document.querySelectorAll('.base-business-name').forEach(el=>el.textContent=project?.business_name||'Comece pelo nome do negócio na primeira etapa.');
    const storageNote=unavailable?'O navegador não conseguiu guardar a última alteração. Baixe sua base antes de sair.':loading?'Abrindo sua base…':count?count+'/'+stages.length+' arquivos recebidos · Salvos neste navegador. Você pode baixar uma cópia. Enviar um arquivo não significa aprovar seu conteúdo.':project?'Ainda não há arquivo recebido. O nome será salvo quando chegar o primeiro JSON válido.':entryDraft?.source==='journey'?'Nome trazido da jornada. Seus arquivos serão salvos neste navegador.':'Preencha o nome do negócio para começar. Seus arquivos serão salvos neste navegador.';
    document.querySelectorAll('.base-storage-note').forEach(el=>el.textContent=storageNote);
    document.querySelectorAll('[data-base-nav]').forEach(link=>{const has=Boolean(project?.records[link.dataset.baseNav]);link.classList.toggle('base-nav-saved',has);link.querySelector('.base-nav-check').hidden=!has;});
    stages.forEach((stage,index)=>{
      const section=scene(index),record=project?.records[stage.id];
      section.querySelector('.base-copy').disabled=loading;
      section.querySelector('.base-fictional').disabled=loading||unavailable;
      section.querySelector('.base-file-input').disabled=loading||unavailable;
      section.querySelector('.base-upload-empty').hidden=Boolean(record);
      const receipt=section.querySelector('.base-receipt');receipt.hidden=!record;
      if(record) {
        const output=record.output;
        receipt.innerHTML='<div class="base-received-mark" aria-hidden="true">✓</div><p class="base-received-title">Recebido e salvo.</p><p class="base-received-meta">'+esc(stage.id)+'.json · v'+output.version+' · '+statusNames[output.status]+'</p><p class="base-received-summary">'+esc(output.summary)+'</p>'
          +'<div class="base-document-list">'+output.documents.map(doc=>'<span>'+esc(doc.path.split('/').pop())+'</span>').join('')+'</div>'
          +(output.pending.length?'<p class="base-pending">'+output.pending.length+' pendência'+(output.pending.length>1?'s':'')+' registrada'+(output.pending.length>1?'s':'')+'.</p>':'')
          +'<details class="base-content-preview"><summary>Conferir o conteúdo</summary>'+output.documents.map(doc=>'<h3>'+esc(doc.path)+'</h3><pre>'+esc(doc.content)+'</pre>').join('')+'</details>'
          +'<div class="base-receipt-actions"><button class="text-button base-download" type="button">Baixar arquivo</button><button class="text-button base-replace" type="button">Enviar nova versão</button></div>';
        receipt.querySelector('.base-download').addEventListener('click',()=>download(stage.id+'.json',JSON.stringify(output,null,2)));
        receipt.querySelector('.base-replace').addEventListener('click',()=>section.querySelector('.base-file-input').click());
      }
      updatePrompt(index);
    });
    window.dispatchEvent(new Event('ecf:base-updated'));
  }
  document.querySelector('#base-name').addEventListener('input',event=>{if(!project&&entryDraft){entryDraft.business_name=event.target.value.trim();saveEntryDraft();}stages.forEach((_,i)=>updatePrompt(i));});
  window.ECFBaseFlow={downloadAll,saveDiagnosis,canDownload:()=>Boolean(project&&Object.keys(project.records).length),isComplete:()=>Boolean(project&&Object.keys(project.records).length===stages.length),project:()=>project};
  try{store=readStore();entryDraft=readEntryDraft();const candidate=entryDraft?.id?store.projects[entryDraft.id]:store.active_id?store.projects[store.active_id]:null;project=candidate&&Object.keys(candidate.records).length?candidate:null;}catch(_){unavailable=true;}
  if(!project&&entryDraft)document.querySelector('#base-name').value=entryDraft.business_name;
  loading=false;
  refresh();
})();
