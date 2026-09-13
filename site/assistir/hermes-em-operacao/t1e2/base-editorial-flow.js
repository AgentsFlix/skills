(() => {
  'use strict';
  const stages = ECFBaseStages, C = ECFBaseContract;
  const esc = value => String(value ?? '').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const statusNames = {rascunho:'Rascunho',revisado:'Revisado',aprovado:'Aprovado',precisa_revisar:'Precisa de revisão'};
  const selections = Array(stages.length).fill(null), contexts = Array(stages.length).fill(''), repairs = Array(stages.length).fill('');
  const storageKey='agentflix-ecf-base-v1';
  let project = null, loading = true, unavailable = false;
  const art = name => '<img src="base-editorial-art/'+name+'.png" alt="" width="200" height="180">';
  const chips = values => values.map(value=>'<span class="base-chip">'+value+'</span>').join('');
  function visual(stage, option) {
    if (stage === 0) return option === 2 ? '<div class="base-pair">'+art('produto')+'<span>+</span>'+art('profissional')+'</div>' : '<div class="base-object">'+art(option===0?'produto':'profissional')+chips([option===0?'Físico ou digital':'Trabalho + resultado'])+'</div>';
    if (stage === 1) return [
      '<div class="base-research"><strong>⌕</strong><div>'+chips(['YouTube'])+chips(['Reddit'])+chips(['Fóruns'])+'</div><small>Buscar → coletar → cruzar</small></div>',
      '<div class="base-hypothesis"><strong>Seus canais</strong><div>'+chips(['Sementes'])+'<b>→</b>'+chips(['Descoberta'])+'</div><small>O Hermes amplia a busca</small></div>',
      '<div class="base-research"><strong>✓</strong><div>'+chips(['Auditar'])+chips(['Completar'])+'</div><small>Procedência antes da síntese</small></div>'
    ][option];
    if (stage === 2) return [
      '<div class="base-chat"><span>O que seus clientes perguntam?</span><span>Vamos ouvir os casos reais.</span><small>Relatos → evidências</small></div>',
      '<div class="base-hypothesis"><strong>Quem pode precisar?</strong><div>'+chips(['Hipótese'])+'<b>→</b>'+chips(['Pesquisa'])+'</div><small>Uma ideia a validar</small></div>',
      '<div class="base-possibilities"><div><span>○</span><span>?</span><span>○</span></div><small>Explorar possibilidades</small></div>'
    ][option];
    if (stage === 3) return '<div class="base-sequence">'+(option===0?['Problema','Resultado','Prova']:option===1?['Seu método','Seu cuidado','Sua diferença']:['O que faz?','Quem valoriza?','Por quê?']).map((label,i)=>chips([label])+(i<2?'<b>↓</b>':'')).join('')+'</div>';
    if (stage === 4) return '<div class="base-voice"><small>UMA MESMA IDEIA · EXEMPLO</small><blockquote>'+['“Ficou com dúvida? Vamos encontrar o melhor caminho juntos.”','“Comece por uma pergunta: o que você precisa resolver?”','“Você sabe o que precisa ou está escolhendo no automático?”'][option]+'</blockquote></div>';
    return [
      '<div class="base-object">'+art('profissional')+'<div>'+chips(['Histórias','Métodos'])+'</div></div>',
      '<div class="base-object">'+art('pasta')+chips(['Aulas · textos · documentos'])+'</div>',
      '<div class="base-chat"><span>“Sempre me perguntam…”</span><span>Uma dúvida vira assunto.</span></div>'
    ][option];
  }
  const root = document.querySelector('main');
  stages.forEach((stage,index)=>{
    const section = document.createElement('section');
    section.className='scene base-scene'; section.dataset.scene=String(index+12); section.hidden=true;
    section.setAttribute('aria-labelledby','base-title-'+index);
    section.innerHTML = '<nav class="base-nav" style="--base-stages:'+stages.length+'" aria-label="Etapas da base">'+stages.map((item,i)=>'<a href="#etapa-'+(i+1)+'" data-base-nav="'+item.id+'" '+(index===i?'aria-current="step"':'')+'><span class="base-nav-number">'+(i+1)+'</span><span>'+item.short+'</span><span class="base-nav-check" aria-label="Arquivo recebido" hidden>✓</span></a>').join('')+'</nav>'
      +'<div class="base-heading"><div><p class="eyebrow">'+stage.n+' DE '+stages.length+' · '+stage.title+'</p><h1 id="base-title-'+index+'" tabindex="-1">'+stage.question+'</h1><p>'+stage.guidance+'</p></div></div>'
      +'<div class="base-choices" role="group" aria-label="'+esc(stage.question)+'">'+stage.options.map((option,i)=>'<button type="button" class="base-choice" data-choice="'+i+'" aria-pressed="false"><span class="base-selection" aria-hidden="true"></span><span class="base-option-art" aria-hidden="true">'+visual(index,i)+'</span><span class="base-option-copy"><strong>'+esc(option.title)+'</strong><span>'+esc(option.description)+'</span></span></button>').join('')+'</div>'
      +'<div class="base-workspace"><section class="base-prompt-side" aria-labelledby="base-prompt-title-'+index+'"><p class="base-step-label">01 · LEVE PARA O HERMES</p><h2 id="base-prompt-title-'+index+'">Converse. Dê contexto.</h2>'
      +(index===0?'<label for="base-name">Nome do negócio</label><input id="base-name" maxlength="120" placeholder="Como seu negócio se chama?" autocomplete="organization">':'<p class="base-business-name"></p>')
      +'<div class="base-skills">'+stage.skills.map(skill=>'<a href="'+C.skillSource(skill).github+'" target="_blank" rel="noopener noreferrer">'+skill+' ↗</a>').join('')+'</div>'
      +'<details class="base-context"><summary>Acrescentar contexto</summary><label class="sr-only" for="base-extra-'+index+'">Contexto adicional para '+stage.short+'</label><textarea id="base-extra-'+index+'" rows="3" maxlength="4000" placeholder="Um detalhe que o Hermes precisa saber…"></textarea></details>'
      +'<button type="button" class="primary base-copy">Copiar prompt para o Hermes <span aria-hidden="true">↗</span></button>'
      +'<p class="base-copy-feedback" role="status"></p><details class="base-prompt-preview"><summary>Ver prompt</summary><textarea aria-label="Prompt de '+stage.short+'" readonly rows="10"></textarea><button type="button" class="text-button base-prompt-download">Baixar prompt .md</button></details></section>'
      +'<section class="base-upload-side" aria-labelledby="base-upload-title-'+index+'"><p class="base-step-label">02 · TRAGA O RESULTADO</p><h2 id="base-upload-title-'+index+'">Sua base começa a ganhar forma.</h2><div class="base-upload-empty"><div class="base-file-graphic" aria-hidden="true">'+art('pasta')+'</div><label class="base-file-button" for="base-file-'+index+'">Abrir '+stage.id+'.json <span aria-hidden="true">↑</span></label><input class="base-file-input" id="base-file-'+index+'" type="file" accept=".json,application/json"><p>O arquivo que o Hermes entregou.</p></div>'
      +'<div class="base-receipt" hidden></div><p class="base-file-feedback" role="status"></p><div class="base-repair" hidden><p class="base-step-label">ARQUIVO PRECISA DE CORREÇÃO</p><h3>Peça ao Hermes para ajustar.</h3><p>A correção preserva o conteúdo e aplica o contrato desta etapa.</p><button type="button" class="secondary base-repair-copy">Copiar pedido de correção <span aria-hidden="true">↗</span></button><p class="base-repair-feedback" role="status"></p><details><summary>Conferir o pedido</summary><textarea readonly rows="10" aria-label="Pedido de correção"></textarea><button type="button" class="text-button base-repair-download">Baixar pedido .md</button></details></div></section></div>'
      +'<p class="base-storage-note" role="status">Abrindo sua base…</p>';
    section.querySelectorAll('[data-choice]').forEach(button=>button.addEventListener('click',()=>{
      selections[index]=Number(button.dataset.choice);
      section.querySelectorAll('[data-choice]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));
      updatePrompt(index);
    }));
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
  function prompt(index) {
    const name = document.querySelector('#base-name').value.trim();
    const startingPoint = selections[index]===null ? (project?.records[stages[index].id]?'Retome a versão salva desta etapa e pergunte apenas o que falta.':'Ainda não escolhi; ajude-me a descobrir') : stages[index].options[selections[index]].title;
    return C.buildPrompt(index,project || {id:'IDENTIFICADOR_GERADO_AO_COPIAR',business_name:name||'NOME_DO_NEGOCIO',records:{}},startingPoint,contexts[index],stages);
  }
  function updatePrompt(index){scene(index).querySelector('.base-prompt-preview textarea').value=prompt(index);}
  function readProject(){const raw=localStorage.getItem(storageKey);if(!raw)return null;const value=JSON.parse(raw);if(!value||typeof value.id!=='string'||typeof value.business_name!=='string'||!value.records||typeof value.records!=='object')throw Error('A base salva neste navegador não pôde ser lida. Baixe uma cópia antes de continuar.');return value;}
  function saveProject(){try{localStorage.setItem(storageKey,JSON.stringify(project));}catch(_){unavailable=true;throw Error('O navegador não conseguiu guardar esta base. Baixe o JSON antes de sair e libere espaço para continuar.');}}
  async function ensureProject() {
    if(loading) throw new Error('Aguarde a leitura da base salva.');
    if(project) return project;
    const name=document.querySelector('#base-name').value.trim();
    if(!name) {
      location.hash='#etapa-1';
      document.querySelector('#base-name').focus();
      throw new Error('Preencha o nome do negócio para gerar seu prompt.');
    }
    project={id:'local-'+(globalThis.crypto?.randomUUID?.()||Date.now()),business_name:name,records:{}};
    saveProject();refresh();
    return project;
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
    } catch(error) {tell(index,'.base-file-feedback',error.message);showRepair(index,raw,error.message,file.name);}
    finally {input.disabled=false;input.value='';}
  }
  function download(filename,content,type='application/json') {
    const url=URL.createObjectURL(new Blob([content],{type}));
    const anchor=document.createElement('a');anchor.href=url;anchor.download=filename;anchor.click();
    setTimeout(()=>URL.revokeObjectURL(url),2000);
  }
  function downloadAll() {
    if(!project || !Object.keys(project.records).length)return;
    download('minha-base-ecf.json',JSON.stringify({format:'agentflix-base-bundle-1',exported_at:new Date().toISOString(),...project},null,2));
  }
  function refresh() {
    const count=Object.keys(project?.records||{}).length;
    const nameInput=document.querySelector('#base-name');
    if(project){nameInput.value=project.business_name;nameInput.readOnly=true;}
    document.querySelectorAll('.base-business-name').forEach(el=>el.textContent=project?.business_name||'Comece pelo nome do negócio na primeira etapa.');
    document.querySelectorAll('.base-storage-note').forEach(el=>el.textContent=unavailable?'O navegador não conseguiu guardar a última alteração. Baixe sua base antes de sair.':loading?'Abrindo sua base…':count+'/'+stages.length+' arquivos recebidos · Salvos neste navegador. Você pode baixar uma cópia. Enviar um arquivo não significa aprovar seu conteúdo.');
    document.querySelectorAll('[data-base-nav]').forEach(link=>{const has=Boolean(project?.records[link.dataset.baseNav]);link.classList.toggle('base-nav-saved',has);link.querySelector('.base-nav-check').hidden=!has;});
    stages.forEach((stage,index)=>{
      const section=scene(index),record=project?.records[stage.id];
      section.querySelector('.base-copy').disabled=loading;
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
  document.querySelector('#base-name').addEventListener('input',()=>stages.forEach((_,i)=>updatePrompt(i)));
  window.ECFBaseFlow={downloadAll,canDownload:()=>Boolean(project&&Object.keys(project.records).length),isComplete:()=>Boolean(project&&Object.keys(project.records).length===stages.length),project:()=>project};
  try{project=readProject();}catch(_){unavailable=true;}
  loading=false;
  refresh();
})();
