(function () {
  'use strict';
  const $ = id => document.getElementById(id);
  const escape = value => String(value).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const percent = value => value===null ? 'Não disponível' : new Intl.NumberFormat('pt-BR',{style:'percent',maximumFractionDigits:2}).format(value);
  const fmt = value => new Intl.NumberFormat('pt-BR',{maximumFractionDigits:1}).format(value);
  const dateLabel = value => new Intl.DateTimeFormat('pt-BR').format(new Date(value+'T12:00:00'));
  const collectedLabel = value => new Intl.DateTimeFormat('pt-BR',{dateStyle:'short',timeStyle:'short'}).format(new Date(value));
  const names=['understand','collect','diagnosis'], headings=['intro-title','collect-title','diagnosis-title'];
  let templatePromise, generatedPrompt='', completionPrompt='', pendingRaw='', generation=0, reportGeneration=0;
  function step(n) {
    names.forEach((id,i)=>$(id).hidden=i!==n);
    document.querySelectorAll('[data-step]').forEach(b=>{ if(Number(b.dataset.step)===n)b.setAttribute('aria-current','step');else b.removeAttribute('aria-current'); });
    $(headings[n]).focus();
  }
  document.querySelectorAll('[data-step],[data-next]').forEach(b=>b.addEventListener('click',()=>step(Number(b.dataset.step??b.dataset.next))));
  function axis(id) {
    const a=ECF.AXES[id];
    document.querySelectorAll('[data-axis]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.axis===id)));
    $('axis-detail').innerHTML=`<div><p class="eyebrow">O QUE A GENTE VAI OBSERVAR</p><h3>${escape(a.question)}</h3><p>Estes são os componentes do score ${escape(a.name)}.</p></div><div class="weights">${a.metrics.map(([,label,weight])=>`<div class="weight"><i style="width:${weight*100}%" aria-hidden="true"></i><b>${weight*100}%</b><span>${escape(label)}</span></div>`).join('')}</div>`;
  }
  document.querySelectorAll('[data-axis]').forEach(b=>b.addEventListener('click',()=>axis(b.dataset.axis)));
  axis('creator');
  const localDate = d => `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
  const end=new Date();end.setDate(end.getDate()-1);const start=new Date(end);start.setDate(start.getDate()-29);
  $('start').value=localDate(start);$('end').value=localDate(end);
  function invalidatePrompt() {
    generation++; $('form-status').textContent=''; generatedPrompt=''; $('prompt-output').value=''; $('prompt-panel').hidden=true; $('copy-status').textContent='';
  }
  $('collection-form').addEventListener('input',invalidatePrompt);
  $('collection-form').addEventListener('submit',async event=>{
    event.preventDefault();
    const handle=$('profile').value.trim(), from=$('start').value, to=$('end').value;
    if(!ECF.profile(handle)) { $('form-status').textContent='Informe apenas o @perfil, sem a URL do Instagram.';return; }
    if(!ECF.date(from)||!ECF.date(to)||(Date.parse(to)-Date.parse(from))/86400000!==29) { $('form-status').textContent='Escolha uma janela de 30 dias, contando o primeiro e o último dia.';return; }
    if(to>=localDate(new Date())) { $('form-status').textContent='Use uma janela de dias completos, terminando no máximo ontem.';return; }
    const revision=++generation;
    $('form-status').textContent='Preparando o prompt…';
    const context={perfil:handle.startsWith('@')?handle:'@'+handle,inicio:from,fim:to,incluir_leitura_de_DMs:$('include-dms').checked};
    try {
      const prepared=await buildPrompt(context);
      if(revision!==generation)return;
      generatedPrompt=prepared;
      $('prompt-output').value=generatedPrompt;$('prompt-panel').hidden=false;$('form-status').textContent='Prompt pronto para '+context.perfil+'.';$('prompt-title').focus();
    } catch (_) { templatePromise=null;$('form-status').textContent='Não foi possível carregar o prompt. Confira sua conexão e clique em Gerar meu prompt para tentar de novo.'; }
  });
  async function buildPrompt(context) {
    try {
      if(!templatePromise) templatePromise=fetch('prompt.md',{cache:'no-store'}).then(r=>{if(!r.ok)throw Error('fetch');return r.text();});
      const template=await templatePromise;
      return template.replace('{{CONTEXTO}}',JSON.stringify(context,null,2)).replace('{{CONTRATO}}','```json\n'+JSON.stringify(ECF.emptyReport(context.perfil,context.inicio,context.fim),null,2)+'\n```');
    } catch(error) {templatePromise=null;throw error;}
  }
  async function completeAnalysis(data) {
    const revision=reportGeneration;
    $('report-status').textContent='Preparando o pedido para continuar a análise…';
    try {
      const prompt=await buildPrompt({perfil:data.profile,inicio:data.window.start,fim:data.window.end,modo:'retomar a análise da coleta existente',incluir_leitura_de_DMs:'Reutilize apenas DMs já coletadas com autorização. Não amplie o acesso nesta retomada.'});
      if(revision!==reportGeneration)return;
      completionPrompt='# Retome a coleta existente e conclua a análise\n\nNa mesma conversa, use diagnostico-ecf.json, o relatório e os artefatos privados já produzidos para esta conta e janela. Não execute outra coleta completa. Localize os arquivos a partir dos registros desta execução. Se não estiverem acessíveis, peça seu caminho; o resumo agregado não substitui as evidências. Preserve indicadores existentes, classifique os casos claros, separe ambiguidades e gere a interpretação por eixo. Só consulte uma lacuna específica quando necessária e autorizada. A ausência de metas impede a nota por metas, não a análise.\n\n'+prompt;
      $('completion-output').value=completionPrompt;$('completion-panel').hidden=false;$('completion-status').textContent='Pedido pronto. Cole na conversa em que a coleta foi feita.';$('report-status').textContent='Pedido de continuação preparado.';$('completion-title').focus();
    } catch(_) {if(revision===reportGeneration)$('report-status').textContent='Não foi possível carregar o pedido. Tente gerar o prompt para completar análise novamente.';}
  }
  $('copy-completion').addEventListener('click',async()=>{
    if(!completionPrompt)return;
    try {await navigator.clipboard.writeText(completionPrompt);$('completion-status').textContent='Pedido copiado. Cole na mesma conversa com o Hermes.';}
    catch(_) {$('completion-panel').querySelector('details').open=true;$('completion-output').focus();$('completion-output').select();$('completion-status').textContent='Use Copiar no seu dispositivo para levar o texto selecionado.';}
  });
  $('download-completion').addEventListener('click',()=>{if(completionPrompt)download('pedido-completar-analise-ecf.md',completionPrompt,'text/markdown;charset=utf-8');});
  $('copy-prompt').addEventListener('click',async()=>{
    if(!generatedPrompt)return;
    try {await navigator.clipboard.writeText(generatedPrompt);$('copy-status').textContent='Prompt copiado. Cole na conversa com o Hermes.';}
    catch (_) {$('prompt-panel').querySelector('details').open=true;$('prompt-output').focus();$('prompt-output').select();$('copy-status').textContent='A cópia automática não ficou disponível. O prompt está selecionado: use Copiar no seu dispositivo.';}
  });
  function download(name,content,type) {
    const url=URL.createObjectURL(new Blob([content],{type})),a=document.createElement('a');a.href=url;a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
  }
  $('download-prompt').addEventListener('click',()=>{if(generatedPrompt)download('prompt-diagnostico-ecf.md',generatedPrompt,'text/markdown;charset=utf-8');});
  function clearResults() {reportGeneration++;$('analyze-report').disabled=false;$('report-results').hidden=true;$('report-results').replaceChildren();$('completion-panel').hidden=true;$('completion-output').value='';completionPrompt='';}
  function renderReport(data,demo) {
    const results=ECF.calculate(data);reportGeneration++;
    const cards=Object.entries(ECF.AXES).map(([id,axis])=>{
      const r=results[id],c=data.axes[id].cohort,a=data.axes[id].analysis;
      const analysis=a&&a.summary?`<div class="editorial-analysis"><h4>Leitura do Hermes</h4><p>${escape(a.summary)}</p><ul>${a.evidence.map(e=>`<li>${escape(e)}</li>`).join('')}</ul>${a.limitations.length?`<p><b>Limites:</b></p><ul>${a.limitations.map(e=>`<li>${escape(e)}</li>`).join('')}</ul>`:''}${a.next_step?`<p><b>Próxima ação:</b> ${escape(a.next_step)}</p>`:''}</div>`:'<p class="analysis-missing">A interpretação deste eixo ainda não veio no arquivo. Peça ao Hermes para concluir a análise com os dados já coletados.</p>';
      return `<article class="score-card"><h3>${axis.name}</h3><p class="asset">${escape(axis.asset)}</p>${analysis}<div class="score-value">${r.score===null?'?':fmt(r.score)}<small>${r.score===null?'score pendente':'/ 100'}</small></div><div class="score-meter" aria-hidden="true"><span style="width:${r.score??0}%"></span></div><p class="score-state">${escape(r.status==='Sem dados'?'Dados do score incompletos':r.status)}</p><p class="sample-count">${r.count} posts na amostra${id==='founder'?' · '+(data.axes.founder.metrics.reconhecimento.denominator??'sem')+' respostas na pesquisa':''}</p><details><summary>Ver cálculo e evidências</summary><p class="sample-count">${escape(c.description||'Coorte ainda não definida.')}</p>${r.components.map(m=>`<div class="metric"><b>${escape(m.label)} · ${m.weight*100}%</b><dl><div><dt>Observado</dt><dd>${percent(m.raw)}</dd></div><div><dt>Meta</dt><dd>${percent(m.record.target)}</dd></div><div><dt>Componente</dt><dd>${m.points===null?'Pendente':fmt(m.points)+' / 100'}</dd></div>${m.key!=='alcance_relativo'?`<div><dt>Eventos / base</dt><dd>${m.record.numerator===null?'?':fmt(m.record.numerator)} / ${m.record.denominator===null?'?':fmt(m.record.denominator)}</dd></div>`:''}</dl><p>${escape(m.record.source||'Origem ainda não informada.')}</p><p>Meta: ${escape(m.record.target_source||'Ainda sem referência.')} ${escape(m.record.target_fixed_at||'')}</p>${m.record.evidence.map(e=>`<p>${escape(e)}</p>`).join('')}${m.points===null?`<p>${escape(m.gap)} ${escape(m.record.reason)}</p>`:''}</div>`).join('')}${r.gaps.length?`<h4>O que falta para a nota</h4><ul class="gaps">${r.gaps.map(g=>`<li>${escape(g)}</li>`).join('')}</ul>`:''}</details></article>`;
    }).join('');
    const resolution=data.credential_resolution;
    const accessSource={env:'ambiente do processo',hermes_env:'arquivo de ambiente do Hermes',mcp:'MCP Zernio',cli:'CLI Zernio',sdk:'SDK Zernio',unavailable:'nenhuma rota disponível'};
    const accessResult={success:'leitura de contas confirmada','401':'acesso recusado (401)','403':'acesso recusado (403)','429':'limite temporário (429)',unavailable:'leitura não confirmada'};
    const accessNote=resolution?`<p class="credential-note">Acesso à integração: ${escape(accessSource[resolution.source])}. ${escape(accessResult[resolution.result])}. Teste: GET /v1/accounts.</p>`:'';
    const pending=Object.values(results).some(r=>r.status!=='Operacional');
    const observations=(data.observations||[]).map(o=>{
      const value=ECF.observationValue(o);
      return `<article class="observation"><h3>${escape(o.label)}</h3><strong>${value===null?'Não disponível':o.unit==='ratio'?percent(value):fmt(value)}</strong>${o.unit==='ratio'?`<p>${o.numerator===null?'?':fmt(o.numerator)} / ${o.denominator===null?'?':fmt(o.denominator)}</p>`:''}<p>${escape(o.scope)}</p><p>${escape(o.source)}</p>${o.reason?`<p>${escape(o.reason)}</p>`:''}</article>`;
    }).join('');
    const observedPanel=`<section class="observed-panel"><h2>Indicadores observados</h2><p>Contexto da coleta. Estes números não substituem os componentes do score de cada eixo.</p>${observations?`<div class="observations">${observations}</div>`:'<p>O arquivo ainda não trouxe os indicadores em campos próprios. A cobertura abaixo informa o que foi coletado; o pedido de continuação ajuda o Hermes a completar a entrega.</p>'}</section>`;
    const resumeAction=!demo?'<div class="bottom-line"><p>Faltou a interpretação ou algum dado?<br><span>Continue com os arquivos da mesma coleta.</span></p><button type="button" class="secondary" id="resume-analysis">Gerar prompt para completar análise</button></div>':'';

    $('report-results').innerHTML=`${demo?'<div class="demo-label">EXEMPLO FICTÍCIO · Estes números não são o diagnóstico do seu perfil.</div>':''}<div class="report-banner"><div><p class="eyebrow">${demo?'DEMONSTRAÇÃO':'RESUMO DO SEU AGENTE'}</p><strong>${escape(data.profile)}</strong><p>${dateLabel(data.window.start)} a ${dateLabel(data.window.end)} · Metas ECF v1</p><p>${data.collected_at?'Coletado em '+collectedLabel(data.collected_at):'Data de coleta ainda não informada.'}</p></div><button type="button" class="secondary" id="clear-report">Fechar ${demo?'exemplo':'relatório'}</button></div>${resumeAction}${observedPanel}<div class="score-grid">${cards}</div><div class="coverage"><h2>Cobertura e próximo passo</h2>${accessNote}<ul>${data.coverage.length?data.coverage.map(c=>`<li>${escape(ECF.coverageText(c))}</li>`).join(''):'<li>A cobertura da coleta ainda não foi informada.</li>'}</ul><p>${pending?'Complete as lacunas indicadas antes de escolher um gargalo entre os três eixos.':'Confira com o Hermes se as metas dos três eixos são coerentes entre si antes de comparar as notas.'}</p><p>O navegador confere o cálculo do resumo. A origem e a classificação das evidências precisam ser verificadas na conversa com o agente.</p><details><summary>Como ler estas notas</summary><p>Score = soma dos componentes normalizados pelas metas, com os pesos de cada eixo. Cada componente usa 100 × mínimo(observado ÷ meta, 1). O indicador bruto continua visível mesmo acima da meta. Uma nota não mede sua personalidade nem é um percentil de mercado.</p><p>3 a 5 posts: provisório. A partir de 6: operacional com coleta e evidências completas. Founder também precisa de 10 respostas válidas à pesquisa. Estes critérios vêm da proposta ECF v1.0 e não representam validação estatística.</p></details></div>`;
    $('report-results').hidden=false;
    if(!demo)$('resume-analysis').addEventListener('click',()=>completeAnalysis(data));
    $('clear-report').addEventListener('click',()=>{clearResults();pendingRaw='';$('report-file').value='';$('report-json').value='';$('report-status').textContent='Relatório fechado. Você pode abrir outro resumo.';$('example').focus();});
    $('report-status').textContent=demo?'Exemplo fictício aberto. Nenhuma conta foi consultada.':'Análise do arquivo aberta para '+data.profile+'. Scores calculados quando os requisitos estão completos.';
  }
  function importText(raw) {
    clearResults();
    try {
      if(raw.length>200000)throw Error('Use o resumo agregado de até 200 KB, sem dados brutos de conversas.');
      if(!raw.trim())throw Error('Selecione o arquivo diagnostico-ecf.json ou cole seu conteúdo antes de gerar a análise.');
      let data;try{data=JSON.parse(raw);}catch(_){throw Error('O texto não é um JSON válido. Copie só o conteúdo do arquivo, sem as marcas de bloco da conversa.');}
      renderReport(data,false);
    } catch(error) {$('report-status').textContent=error.message;}
  }
  $('example').addEventListener('click',()=>{clearResults();pendingRaw='';$('report-json').value='';$('report-file').value='';renderReport(ECF.example(),true);});
  $('report-json').addEventListener('input',()=>{clearResults();pendingRaw='';$('report-file').value='';$('report-status').textContent='Texto alterado. Clique em Gerar análise e conferir scores.';});
  $('analyze-report').addEventListener('click',()=>importText($('report-json').value.trim()||pendingRaw));
  $('report-file').addEventListener('change',async()=>{
    clearResults();pendingRaw='';$('report-json').value='';
    const file=$('report-file').files[0];if(!file){$('report-status').textContent='Selecione um arquivo ou cole o resumo.';return;}
    const revision=reportGeneration;
    if(file.size>200000) {$('report-status').textContent='Use apenas o resumo agregado de até 200 KB, sem dados brutos.';return;}
    $('analyze-report').disabled=true;$('report-status').textContent='Lendo o arquivo…';
    try {const raw=await file.text();if(revision===reportGeneration){pendingRaw=raw;$('report-status').textContent='Arquivo carregado. Clique em Gerar análise e conferir scores.';}}
    catch(_) {if(revision===reportGeneration)$('report-status').textContent='Não foi possível ler o arquivo. Abra novamente ou cole o resumo.';}
    finally {if(revision===reportGeneration)$('analyze-report').disabled=false;}
  });
})();
