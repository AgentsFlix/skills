(() => {
  'use strict';
  const labels={negocio:'Negócio',pesquisa:'Pesquisa',publico:'Público',posicionamento:'Posicionamento',voz:'Voz','materia-prima':'Matéria-prima'};
  const art={negocio:'01-negocio',pesquisa:'02-pesquisa',publico:'03-publico',posicionamento:'04-posicionamento',voz:'05-voz','materia-prima':'06-materia-prima'};
  const esc=value=>String(value??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const root=document.querySelector('#content');
  let dashboard;
  function count(project,key){return Object.values(project.records).reduce((total,record)=>total+(Array.isArray(record.output[key])?record.output[key].length:0),0);}
  function status(value){return String(value||'rascunho').replace('_',' ');}
  const ecfAxes=[
    {id:'creator',index:'01',asset:'ATENÇÃO',name:'Creator',art:'<svg viewBox="0 0 320 170" aria-hidden="true" focusable="false"><path d="M36 143H286"/><path d="M107 117L100 143M146 117L153 143"/><rect x="81" y="32" width="98" height="94" rx="10"/><rect x="92" y="43" width="76" height="60" rx="5" class="dark"/><circle cx="130" cy="68" r="13" class="accent-fill"/><path d="M105 101Q130 71 155 101" class="accent-fill"/><path d="M111 114H149"/><path d="M200 52Q223 75 200 98M215 37Q253 75 215 113M230 23Q285 75 230 129" class="accent-line"/><circle cx="46" cy="55" r="6" class="accent-fill"/><path d="M32 101H54M43 90V112"/></svg>'},
    {id:'expert',index:'02',asset:'INTERESSE',name:'Expert',art:'<svg viewBox="0 0 320 170" aria-hidden="true" focusable="false"><path d="M60 145H264M101 113L87 145M224 113L239 145"/><rect x="65" y="21" width="194" height="101" rx="6"/><rect x="77" y="33" width="170" height="77" rx="2" class="dark"/><path d="M100 87L125 64L151 80L180 48L205 58" class="accent-line"/><circle cx="100" cy="87" r="5" class="accent-fill"/><circle cx="151" cy="80" r="5" class="accent-fill"/><circle cx="205" cy="58" r="5" class="accent-fill"/><path d="M190 95H229"/><rect x="139" y="130" width="50" height="7" rx="3" class="accent-fill"/></svg>'},
    {id:'founder',index:'03',asset:'AÇÕES',name:'Founder',art:'<svg viewBox="0 0 320 170" aria-hidden="true" focusable="false"><path d="M40 145H281"/><path d="M76 70H241V145H76Z"/><path d="M67 66L83 31H232L249 66Z" class="accent-fill"/><path d="M110 32L102 65M151 32L149 65M194 32L198 65M67 69Q87 92 110 69Q133 92 156 69Q179 92 202 69Q224 92 248 69"/><path d="M97 94H147V126H97Z" class="dark"/><path d="M174 94H220V145H174Z" class="dark"/><circle cx="210" cy="119" r="3" class="accent-fill"/><path d="M272 39V61M261 50H283"/></svg>'}
  ];
  function ecfCard(axis,diagnosis){
    const result=diagnosis?.axes?.[axis.id],hasScore=Number.isInteger(result?.score),score=hasScore?result.score:null;
    const coverage=hasScore?result.measured+'/3 variáveis'+(result.partial?' · parcial':''):'Sem medição';
    return '<article class="base-ecf-card"><div><p>'+axis.index+' / '+axis.asset+'</p><h3>'+axis.name+'</h3></div><div class="base-ecf-art">'+axis.art+'</div><div class="base-ecf-score"><strong>'+((score??'—'))+'</strong><span>'+((score===null?'':'/100'))+'</span></div><div class="base-ecf-meter"'+(score===null?' aria-hidden="true"':' role="meter" aria-label="'+axis.name+' '+score+' de 100" aria-valuemin="0" aria-valuemax="100" aria-valuenow="'+score+'"')+'><span style="width:'+(score??0)+'%"></span></div><small>'+coverage+'</small></article>';
  }
  function diagnosisSection(project){
    const hasDiagnosis=Boolean(project.diagnosis),action=hasDiagnosis?'Trocar diagnóstico':'Abrir diagnóstico ECF';
    return '<section class="base-ecf-section" aria-labelledby="base-ecf-title"><header class="base-ecf-heading"><div><p class="eyebrow">SEU DIAGNÓSTICO ECF</p><h2 id="base-ecf-title">Seu perfil em três notas.</h2></div><div><button type="button" class="text-button base-ecf-upload">'+action+'</button><input id="base-ecf-file" class="base-ecf-file" type="file" accept=".json,application/json" tabindex="-1" aria-hidden="true"><p class="base-ecf-feedback" role="status"></p></div></header><div class="base-ecf-grid">'+ecfAxes.map(axis=>ecfCard(axis,project.diagnosis)).join('')+'</div></section>';
  }
  async function importDiagnosis(input){
    const file=input.files[0];if(!file)return;
    const feedback=dashboard.querySelector('.base-ecf-feedback');
    try{
      feedback.textContent='Lendo diagnóstico ECF…';
      const summary=window.ECFBaseScores.parse(await file.text());
      window.ECFBaseFlow.saveDiagnosis(summary);
      dashboard.querySelector('.base-ecf-feedback').textContent='Diagnóstico ECF conectado a esta base.';
    }catch(error){dashboard.querySelector('.base-ecf-feedback').textContent=error.message||'Não foi possível abrir o diagnóstico ECF.';}
    finally{input.value='';}
  }
  function render(){
    const project=window.ECFBaseFlow?.project();if(!project||!window.ECFBaseFlow.isComplete())return;
    const records=ECFBaseStages.map(stage=>({stage,record:project.records[stage.id]}));
    if(!dashboard){dashboard=document.createElement('section');dashboard.className='base-dashboard';dashboard.hidden=true;root.append(dashboard);}
    dashboard.innerHTML='<header class="base-dashboard-intro"><div><p class="eyebrow">'+esc(project.business_name)+' · BASE EDITORIAL</p><h1 tabindex="-1">Tudo que sua marca já sabe.</h1><p>Seis arquivos, uma visão clara da base que orienta o próximo conteúdo.</p></div><dl><div><dt>6/6</dt><dd>arquivos</dd></div><div><dt>'+count(project,'decisions')+'</dt><dd>decisões</dd></div><div><dt>'+count(project,'sources')+'</dt><dd>fontes</dd></div><div><dt>'+count(project,'pending')+'</dt><dd>pendências</dd></div></dl></header>'+diagnosisSection(project)+'<p class="base-dashboard-copy">Abra uma pasta para conferir o que já está disponível em cada etapa.</p><ol class="base-folder-grid">'+records.map(({stage,record},index)=>{const output=record.output;return '<li><button type="button" data-record="'+esc(stage.id)+'"><span class="base-folder-banner"><img src="base-editorial-art/banner/'+art[stage.id]+'.webp" alt=""></span><span class="base-folder-paper"><span class="base-folder-number">'+String(index+1).padStart(2,'0')+'</span><span class="base-folder-status">'+esc(status(output.status))+'</span><strong>'+labels[stage.id]+'</strong><p>'+esc(output.summary)+'</p><span class="base-folder-meta"><span>'+output.decisions.length+' decisões</span><span>'+output.sources.length+' fontes</span><span>'+output.pending.length+' pendências</span></span></span></button></li>';}).join('')+'</ol><div class="base-dashboard-actions"><button type="button" class="base-dashboard-back">← Voltar à base</button><button type="button" class="primary base-dashboard-download">Baixar minha base</button></div><dialog class="base-dashboard-dialog"><div></div><button type="button" class="secondary">Fechar</button></dialog>';
    dashboard.querySelector('.base-dashboard-back').addEventListener('click',returnToBase);
    dashboard.querySelector('.base-dashboard-download').addEventListener('click',()=>window.ECFBaseFlow.downloadAll());
    dashboard.querySelector('.base-ecf-upload').addEventListener('click',()=>dashboard.querySelector('.base-ecf-file').click());
    dashboard.querySelector('.base-ecf-file').addEventListener('change',event=>importDiagnosis(event.target));
    const dialog=dashboard.querySelector('dialog');
    dashboard.querySelectorAll('[data-record]').forEach(button=>button.addEventListener('click',()=>{const output=project.records[button.dataset.record].output;dialog.querySelector('div').innerHTML='<p class="eyebrow">'+esc(status(output.status))+'</p><h2>'+labels[button.dataset.record]+'</h2><p>'+esc(output.summary)+'</p><dl><div><strong>'+output.decisions.length+'</strong><span>decisões</span></div><div><strong>'+output.sources.length+'</strong><span>fontes</span></div><div><strong>'+output.documents.length+'</strong><span>documentos</span></div><div><strong>'+output.pending.length+'</strong><span>pendências</span></div></dl>';dialog.showModal();}));
    dialog.querySelector('button').addEventListener('click',()=>dialog.close());
  }
  function show(){render();if(!dashboard)return false;document.querySelectorAll('.base-scene,.base-controls').forEach(node=>node.hidden=true);dashboard.hidden=false;dashboard.querySelector('h1')?.focus({preventScroll:true});requestAnimationFrame(()=>window.scrollTo(0,0));return true;}
  function hide(){if(!dashboard)return;dashboard.querySelector('dialog[open]')?.close();dashboard.hidden=true;}
  function returnToBase(){hide();history.replaceState(null,'','#etapa-6');window.dispatchEvent(new Event('hashchange'));}
  window.addEventListener('ecf:base-updated',()=>{if(!dashboard?.hidden)show();});
  window.ECFBaseDashboard={show,hide};
  if(location.hash==='#dashboard')show();
})();
