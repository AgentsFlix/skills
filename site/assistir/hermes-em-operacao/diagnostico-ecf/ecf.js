(function () {
  'use strict';
  const $ = id => document.getElementById(id);
  const escape = value => String(value).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const percent = value => value===null ? 'Não disponível' : new Intl.NumberFormat('pt-BR',{style:'percent',maximumFractionDigits:2}).format(value);
  const fmt = value => new Intl.NumberFormat('pt-BR',{maximumFractionDigits:1}).format(value);
  const dateLabel = value => new Intl.DateTimeFormat('pt-BR').format(new Date(value+'T12:00:00'));
  const collectedLabel = value => new Intl.DateTimeFormat('pt-BR',{dateStyle:'short',timeStyle:'short'}).format(new Date(value));
  const names=['understand','collect','diagnosis'], headings=['intro-title','collect-title','diagnosis-title'];
  let templatePromise, generatedPrompt='', generation=0, reportGeneration=0;
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
      if(!templatePromise) templatePromise=fetch('prompt.md').then(r=>{if(!r.ok)throw Error('fetch');return r.text();});
      const template=await templatePromise;
      if(revision!==generation)return;
      generatedPrompt=template.replace('{{CONTEXTO}}',JSON.stringify(context,null,2)).replace('{{CONTRATO}}','```json\n'+JSON.stringify(ECF.emptyReport(context.perfil,from,to),null,2)+'\n```');
      $('prompt-output').value=generatedPrompt;$('prompt-panel').hidden=false;$('form-status').textContent='Prompt pronto para '+context.perfil+'.';$('prompt-title').focus();
    } catch (_) { templatePromise=null;$('form-status').textContent='Não foi possível carregar o prompt. Confira sua conexão e clique em Gerar meu prompt para tentar de novo.'; }
  });
  $('copy-prompt').addEventListener('click',async()=>{
    if(!generatedPrompt)return;
    try {await navigator.clipboard.writeText(generatedPrompt);$('copy-status').textContent='Prompt copiado. Cole na conversa com o Hermes.';}
    catch (_) {$('prompt-panel').querySelector('details').open=true;$('prompt-output').focus();$('prompt-output').select();$('copy-status').textContent='A cópia automática não ficou disponível. O prompt está selecionado: use Copiar no seu dispositivo.';}
  });
  function download(name,content,type) {
    const url=URL.createObjectURL(new Blob([content],{type})),a=document.createElement('a');a.href=url;a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
  }
  $('download-prompt').addEventListener('click',()=>{if(generatedPrompt)download('prompt-diagnostico-ecf.md',generatedPrompt,'text/markdown;charset=utf-8');});
  function clearResults() {reportGeneration++;$('report-results').hidden=true;$('report-results').replaceChildren();}
  function renderReport(data,demo) {
    const results=ECF.calculate(data);reportGeneration++;
    const cards=Object.entries(ECF.AXES).map(([id,axis])=>{
      const r=results[id],c=data.axes[id].cohort;
      return `<article class="score-card"><h3>${axis.name}</h3><p class="asset">${escape(axis.asset)}</p><div class="score-value">${r.score===null?'?':fmt(r.score)}<small>${r.score===null?'score pendente':'/ 100'}</small></div><div class="score-meter" aria-hidden="true"><span style="width:${r.score??0}%"></span></div><p class="score-state">${escape(r.status)}</p><p class="sample-count">${r.count} posts na amostra${id==='founder'?' · '+(data.axes.founder.metrics.reconhecimento.denominator??'sem')+' respostas na pesquisa':''}</p><details><summary>Ver cálculo e evidências</summary><p class="sample-count">${escape(c.description||'Coorte ainda não definida.')}</p>${r.components.map(m=>`<div class="metric"><b>${escape(m.label)} · ${m.weight*100}%</b><dl><div><dt>Observado</dt><dd>${percent(m.raw)}</dd></div><div><dt>Meta</dt><dd>${percent(m.record.target)}</dd></div><div><dt>Componente</dt><dd>${m.points===null?'Pendente':fmt(m.points)+' / 100'}</dd></div>${m.key!=='alcance_relativo'?`<div><dt>Eventos / base</dt><dd>${m.record.numerator===null?'?':fmt(m.record.numerator)} / ${m.record.denominator===null?'?':fmt(m.record.denominator)}</dd></div>`:''}</dl><p>${escape(m.record.source||'Origem ainda não informada.')}</p><p>Meta: ${escape(m.record.target_source||'Ainda sem referência.')} ${escape(m.record.target_fixed_at||'')}</p>${m.record.evidence.map(e=>`<p>${escape(e)}</p>`).join('')}${m.points===null?`<p>${escape(m.gap)} ${escape(m.record.reason)}</p>`:''}</div>`).join('')}</details>${r.gaps.length?`<ul class="gaps">${r.gaps.map(g=>`<li>${escape(g)}</li>`).join('')}</ul>`:''}</article>`;
    }).join('');
    const pending=Object.values(results).some(r=>r.status!=='Operacional');
    $('report-results').innerHTML=`${demo?'<div class="demo-label">EXEMPLO FICTÍCIO · Estes números não são o diagnóstico do seu perfil.</div>':''}<div class="report-banner"><div><p class="eyebrow">${demo?'DEMONSTRAÇÃO':'RESUMO DO SEU AGENTE'}</p><strong>${escape(data.profile)}</strong><p>${dateLabel(data.window.start)} a ${dateLabel(data.window.end)} · Metas ECF v1</p><p>${data.collected_at?'Coletado em '+collectedLabel(data.collected_at):'Data de coleta ainda não informada.'}</p></div><button type="button" class="secondary" id="clear-report">Fechar ${demo?'exemplo':'relatório'}</button></div><div class="score-grid">${cards}</div><div class="coverage"><h2>Cobertura e próximo passo</h2><ul>${data.coverage.length?data.coverage.map(c=>`<li>${escape(c)}</li>`).join(''):'<li>A cobertura da coleta ainda não foi informada.</li>'}</ul><p>${pending?'Complete as lacunas indicadas antes de escolher um gargalo entre os três eixos.':'Confira com o Hermes se as metas dos três eixos são coerentes entre si antes de comparar as notas.'}</p><p>O navegador confere o cálculo do resumo. A origem e a classificação das evidências precisam ser verificadas na conversa com o agente.</p><details><summary>Como ler estas notas</summary><p>Score = soma dos componentes normalizados pelas metas, com os pesos de cada eixo. Cada componente usa 100 × mínimo(observado ÷ meta, 1). O indicador bruto continua visível mesmo acima da meta. Uma nota não mede sua personalidade nem é um percentil de mercado.</p><p>3 a 5 posts: provisório. A partir de 6: operacional com coleta e evidências completas. Founder também precisa de 10 respostas válidas à pesquisa. Estes critérios vêm da proposta ECF v1.0 e não representam validação estatística.</p></details></div>`;
    $('report-results').hidden=false;$('clear-report').addEventListener('click',()=>{clearResults();$('report-file').value='';$('report-json').value='';$('report-status').textContent='Relatório fechado. Você pode abrir outro resumo.';$('example').focus();});
    $('report-status').textContent=demo?'Exemplo fictício aberto. Nenhuma conta foi consultada.':'Resumo conferido para '+data.profile+'.';
  }
  function importText(raw) {
    clearResults();
    try {
      if(raw.length>200000)throw Error('Use o resumo agregado de até 200 KB, sem dados brutos de conversas.');
      if(!raw.trim())throw Error('Cole primeiro o resumo JSON devolvido pelo Hermes.');
      let data;try{data=JSON.parse(raw);}catch(_){throw Error('O texto não é um JSON válido. Copie só o conteúdo do arquivo, sem as marcas de bloco da conversa.');}
      renderReport(data,false);
    } catch(error) {$('report-status').textContent=error.message;}
  }
  $('example').addEventListener('click',()=>{ $('report-json').value='';$('report-file').value='';renderReport(ECF.example(),true); });
  $('import-json').addEventListener('click',()=>importText($('report-json').value));
  $('report-file').addEventListener('change',async()=>{
    const file=$('report-file').files[0];if(!file)return;
    clearResults();const revision=reportGeneration;$('report-json').value='';
    if(file.size>200000) {$('report-status').textContent='Use apenas o resumo agregado de até 200 KB, sem dados brutos.';return;}
    try {const raw=await file.text();if(revision===reportGeneration)importText(raw);}catch(_) {$('report-status').textContent='Não foi possível ler o arquivo. Abra novamente ou cole o resumo.';}
  });
})();
