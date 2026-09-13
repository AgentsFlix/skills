(() => {
  'use strict';
  const labels={negocio:'Negócio',pesquisa:'Pesquisa',publico:'Público',posicionamento:'Posicionamento',voz:'Voz','materia-prima':'Matéria-prima'};
  const art={negocio:'01-negocio',pesquisa:'02-pesquisa',publico:'03-publico',posicionamento:'04-posicionamento',voz:'05-voz','materia-prima':'06-materia-prima'};
  const esc=value=>String(value??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const root=document.querySelector('#content');
  let dashboard;
  function count(project,key){return Object.values(project.records).reduce((total,record)=>total+(Array.isArray(record.output[key])?record.output[key].length:0),0);}
  function status(value){return String(value||'rascunho').replace('_',' ');}
  function render(){
    const project=window.ECFBaseFlow?.project();if(!project||!window.ECFBaseFlow.isComplete())return;
    const records=ECFBaseStages.map(stage=>({stage,record:project.records[stage.id]}));
    if(!dashboard){dashboard=document.createElement('section');dashboard.className='base-dashboard';dashboard.hidden=true;root.append(dashboard);}
    dashboard.innerHTML='<header class="base-dashboard-intro"><div><p class="eyebrow">'+esc(project.business_name)+' · BASE EDITORIAL</p><h1 tabindex="-1">Tudo que sua marca já sabe.</h1><p>Seis arquivos, uma visão clara da base que orienta o próximo conteúdo.</p></div><dl><div><dt>6/6</dt><dd>arquivos</dd></div><div><dt>'+count(project,'decisions')+'</dt><dd>decisões</dd></div><div><dt>'+count(project,'sources')+'</dt><dd>fontes</dd></div><div><dt>'+count(project,'pending')+'</dt><dd>pendências</dd></div></dl></header><p class="base-dashboard-copy">Abra uma pasta para conferir o que já está disponível em cada etapa.</p><ol class="base-folder-grid">'+records.map(({stage,record},index)=>{const output=record.output;return '<li><button type="button" data-record="'+esc(stage.id)+'"><span class="base-folder-banner"><img src="base-editorial-art/banner/'+art[stage.id]+'.webp" alt=""></span><span class="base-folder-paper"><span class="base-folder-number">'+String(index+1).padStart(2,'0')+'</span><span class="base-folder-status">'+esc(status(output.status))+'</span><strong>'+labels[stage.id]+'</strong><p>'+esc(output.summary)+'</p><span class="base-folder-meta"><span>'+output.decisions.length+' decisões</span><span>'+output.sources.length+' fontes</span><span>'+output.pending.length+' pendências</span></span></span></button></li>';}).join('')+'</ol><div class="base-dashboard-actions"><button type="button" class="base-dashboard-back">← Voltar à base</button><button type="button" class="primary base-dashboard-download">Baixar minha base</button></div><dialog class="base-dashboard-dialog"><div></div><button type="button" class="secondary">Fechar</button></dialog>';
    dashboard.querySelector('.base-dashboard-back').addEventListener('click',hide);
    dashboard.querySelector('.base-dashboard-download').addEventListener('click',()=>window.ECFBaseFlow.downloadAll());
    const dialog=dashboard.querySelector('dialog');
    dashboard.querySelectorAll('[data-record]').forEach(button=>button.addEventListener('click',()=>{const output=project.records[button.dataset.record].output;dialog.querySelector('div').innerHTML='<p class="eyebrow">'+esc(status(output.status))+'</p><h2>'+labels[button.dataset.record]+'</h2><p>'+esc(output.summary)+'</p><dl><div><strong>'+output.decisions.length+'</strong><span>decisões</span></div><div><strong>'+output.sources.length+'</strong><span>fontes</span></div><div><strong>'+output.documents.length+'</strong><span>documentos</span></div><div><strong>'+output.pending.length+'</strong><span>pendências</span></div></dl>';dialog.showModal();}));
    dialog.querySelector('button').addEventListener('click',()=>dialog.close());
  }
  function show(){render();if(!dashboard)return;document.querySelectorAll('.base-scene,.base-controls').forEach(node=>node.hidden=true);dashboard.hidden=false;dashboard.querySelector('h1')?.focus({preventScroll:true});requestAnimationFrame(()=>window.scrollTo(0,0));}
  function hide(){if(!dashboard)return;dashboard.hidden=true;document.querySelectorAll('.base-scene,.base-controls').forEach(node=>node.hidden=false);history.replaceState(null,'','#etapa-6');window.dispatchEvent(new Event('hashchange'));}
  window.addEventListener('ecf:base-updated',()=>{if(!dashboard?.hidden)show();});
  window.ECFBaseDashboard={show};
  if(location.hash==='#dashboard')show();
})();
