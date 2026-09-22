import {comments} from './comments.js';
import {CommentQueue, commentState} from './batch.js';

export function mountTriage({make,questions,setQuestions,renderAnswer,renderJson,applyPolicy,thresholds,onThresholds}) {
  const $=selector=>document.querySelector(selector);
  let items=structuredClone(comments), selected=items[0].id, page=0, rubricError='', notice='', storage=null;
  try {storage=sessionStorage;} catch { /* A disabled store still permits an in-memory pilot. */ }
  try {
    const saved=JSON.parse(storage?.getItem('agentflix-jev-triage-v1')||'null');
    const plan=JSON.parse(saved?.signature||'null');
    if(plan?.version===1 && plan.model==='typesafe/jev-1.13' && Array.isArray(plan.items) && plan.items.length===500 && plan.items.every((item,i)=>item.id===comments[i].id && item.name===comments[i].name && typeof item.text==='string' && item.text.trim() && item.text.length<=1600)) {
      setQuestions(plan.questions); questions(); items=plan.items;
    }
  } catch {notice='Rascunho anterior incompatível; começamos com os exemplos padrão.';}
  const queue=new CommentQueue({items,questions:questions(),storage,changed:render,request:async(payload,signal)=>{
    const response=await fetch('/api/jev',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(payload),signal});
    const result=await response.json().catch(()=>({}));
    if(!response.ok) throw Object.assign(Error('Consulta falhou'),{retryable:result.retryable===true});
    return result;
  }});
  if(queue.restored) notice='Progresso desta aba recuperado. Nenhuma nova chamada foi feita.';
  if(!storage) queue.storageError=true;
  function visibleItems() {
    const term=$('#comment-search').value.trim().toLocaleLowerCase('pt-BR'), filter=$('#comment-filter').value;
    const t=thresholds();
    return items.filter(item=>{
      const record=queue.records.get(item.id);
      const matches=filter==='all'||record.status===filter||applyPolicy(record.payload?.answers.assunto,t.review,t.accept).action===filter;
      return matches && (!term || (item.id+' '+item.name+' '+item.text).toLocaleLowerCase('pt-BR').includes(term));
    });
  }
  function choose(id) {selected=id;const item=items.find(candidate=>candidate.id===id);$('#youtube-comment').value=item.text;render();}
  function statusLabel(record) {return {pending:'Pendente',running:'Consultando JEV…',done:'Concluído',error:'Erro'}[record.status];}
  function render() {
    const counts=queue.counts(), t=thresholds(), filtered=visibleItems();
    page=Math.max(0,Math.min(page,Math.ceil(filtered.length/12)-1));
    const visible=filtered.slice(page*12,page*12+12), list=$('#comment-list'), results=$('#batch-results');
    const focused=document.activeElement, focusComment=focused?.dataset.commentId, focusResult=focused?.dataset.resultId;
    const listScroll=list.scrollTop, resultScroll=results.scrollTop;list.replaceChildren();results.replaceChildren();
    for(const item of visible) {
      const record=queue.records.get(item.id), button=make('button','comment-card');button.type='button';button.dataset.commentId=item.id;button.setAttribute('aria-pressed',String(selected===item.id));
      button.append(make('strong','',item.id+' · '+item.name),make('span','comment-excerpt',item.text),make('small','',statusLabel(record)));button.addEventListener('click',()=>choose(item.id));list.append(button);
      const result=make('button','result-row');result.type='button';result.dataset.resultId=item.id;result.setAttribute('aria-pressed',String(selected===item.id));
      result.append(make('strong','',item.id+' · '+item.name));
      if(record.status==='done') {
        const answer=record.payload.answers.assunto, policy=applyPolicy(answer,t.review,t.accept);
        result.append(make('span','',answer.choice),make('small','',policy.action+' · confidence '+Math.round(answer.confidence*100)+'%'));
      } else result.append(make('span','',statusLabel(record)));
      result.addEventListener('click',()=>choose(item.id));results.append(result);
    }
    if(!visible.length) {list.append(make('p','field-help','Nenhum comentário neste filtro.'));results.append(make('p','field-help','Nenhum item nesta página.'));}
    list.scrollTop=listScroll;results.scrollTop=resultScroll;
    if(focusComment||focusResult) {
      const replacement=[...(focusComment?list:results).querySelectorAll('button')].find(button=>(focusComment?button.dataset.commentId:button.dataset.resultId)===(focusComment||focusResult));
      (replacement||$('#comment-filter')).focus({preventScroll:true});
    }
    $('#comments-page').textContent=filtered.length ? `${page*12+1}–${Math.min((page+1)*12,filtered.length)} de ${filtered.length}` : '0 de 500';
    $('#comments-prev').disabled=page===0;$('#comments-next').disabled=(page+1)*12>=filtered.length;
    $('#batch-progress').value=counts.done;
    $('#youtube-status').textContent=rubricError || (queue.running ? (queue.paused ? 'Pausa solicitada: terminando as chamadas em andamento.' : 'JEV processando. Você pode inspecionar a fila.') : notice || (counts.error ? 'Fila pausada após erro. Os resultados concluídos foram preservados.' : counts.done===500 ? '500 comentários com respostas válidas. Revise a qualidade antes de automatizar.' : 'Pronto para iniciar ou retomar. Nenhuma chamada automática.'));
    $('#youtube-status').classList.toggle('is-error',Boolean(rubricError)||counts.error>0);
    const records=[...queue.records.values()], completed=records.filter(record=>record.status==='done');
    const costs=completed.map(record=>record.payload.usage?.cost).filter(cost=>typeof cost==='number'&&Number.isFinite(cost)&&cost>=0);
    $('#batch-accounting').textContent=`${counts.done}/500 concluídos · ${counts.running} em andamento · ${counts.error} com erro · ${counts.pending} pendentes · ${counts.attempts} tentativas iniciadas. `+(costs.length ? `Custo informado: US$ ${costs.reduce((a,b)=>a+b,0).toFixed(6)} em ${costs.length}/${counts.done} respostas. Falhas sem recibo não estão incluídas.` : 'Custo não informado nas respostas disponíveis; não significa custo zero.');
    $('#batch-storage').textContent=queue.storageError ? 'Armazenamento indisponível ou cheio. Retomada só enquanto esta página permanecer aberta; não recarregue.' : 'Progresso e rascunhos salvos somente nesta aba. Recarregar permite retomar; fechar a aba pode apagar. Nada é publicado, removido ou respondido no YouTube.';
    const actions={'Aceitar':0,'Pedir revisão':0,'Escalar':0};for(const record of completed) actions[applyPolicy(record.payload.answers.assunto,t.review,t.accept).action]++;
    $('#batch-summary').textContent=`Dos ${counts.done} concluídos: ${actions.Aceitar} aceitar · ${actions['Pedir revisão']} revisar · ${actions.Escalar} escalar. Não são contagens de acertos.`;
    $('#batch-pilot').disabled=Boolean(rubricError)||queue.running||!counts.pending;
    $('#batch-run').disabled=Boolean(rubricError)||queue.running||!counts.pending;
    $('#batch-run').textContent=counts.done||counts.error ? `Retomar ${counts.pending} pendentes` : 'Processar os 500';
    $('#batch-pause').disabled=!queue.running||queue.paused;
    $('#batch-retry').disabled=Boolean(rubricError)||queue.running||!records.some(record=>record.status==='error'&&record.retryable&&record.attempts<3);
    $('#batch-clear').disabled=queue.running;
    $('#batch-review').value=Math.round(t.review*100);$('#batch-accept').value=Math.round(t.accept*100);
    const item=items.find(candidate=>candidate.id===selected), record=queue.records.get(selected);
    $('#selected-comment-title').textContent=item.id+' · '+item.name+' · editar texto';$('#selected-result-title').textContent='Resultado de '+item.id+' · '+item.name;
    renderJson($('#comment-state-preview'),commentState(item));$('#rule-result').textContent=item.text.includes('?') ? 'A regra marcou: tem “?”.' : 'A regra marcou: não tem “?”.';
    $('#run-youtube').disabled=Boolean(rubricError)||queue.running||record.status==='done'||record.attempts>=3||(record.status==='error'&&!record.retryable);
    const container=$('#youtube-result');container.replaceChildren();container.setAttribute('aria-busy',String(record.status==='running'));
    if(record.status==='done') {
      for(const [id,question] of Object.entries(queue.questions)) renderAnswer(container,record.payload.answers[id],question,{assunto:'Assunto predominante',pede_explicacao:'Pede explicação?',expressa_receio:'Expressa receio?'}[id]);
      const policy=applyPolicy(record.payload.answers.assunto,t.review,t.accept);$('#youtube-policy').dataset.action=policy.action;
      $('#youtube-policy').textContent=policy.action+' · política local aplicada à confidence. Nenhuma ação externa.';
    } else {container.append(make('p','field-help',record.status==='error' ? record.error : record.status==='running' ? 'Aguardando resposta real do JEV.' : 'Sem resposta ainda. Não foi preenchida por uma simulação.'));$('#youtube-policy').textContent='Aguardar · sem resultado válido, sem ação.';delete $('#youtube-policy').dataset.action;}
  }
  function changedPlan() {
    notice='Rodada reiniciada: editar estado ou critérios invalida os resultados. Nenhuma consulta nova foi feita.';
    let next=queue.questions;
    try {next=questions();if(items.some(item=>!item.text.trim()||item.text.length>1600)) throw Error('Preencha o comentário com até 1.600 caracteres.');rubricError='';}
    catch(error){rubricError=error.message;}
    queue.configure(items,next);render();
  }
  $('#youtube-comment').addEventListener('input',()=>{items.find(item=>item.id===selected).text=$('#youtube-comment').value;changedPlan();});
  $('#youtube-questions').addEventListener('input',changedPlan);
  $('#comment-search').addEventListener('input',()=>{page=0;render();});$('#comment-filter').addEventListener('change',()=>{page=0;render();});
  $('#comments-prev').addEventListener('click',()=>{page--;render();});$('#comments-next').addEventListener('click',()=>{page++;render();});
  $('#batch-pilot').addEventListener('click',()=>{notice='';queue.start(6);});
  $('#batch-run').addEventListener('click',()=>{notice='';queue.start(500);});
  $('#batch-pause').addEventListener('click',()=>{notice='Fila pausada. Retomar não repete respostas concluídas.';queue.pause();});
  $('#batch-retry').addEventListener('click',()=>{notice='';queue.start(500,{retry:true,ids:items.filter(item=>queue.records.get(item.id).status==='error').map(item=>item.id)});});
  $('#run-youtube').addEventListener('click',()=>{notice='';queue.start(1,{ids:[selected],retry:true});});
  $('#batch-clear').addEventListener('click',()=>{
    if(!window.confirm('Apagar o progresso desta aba, descartar edições e restaurar os 500 exemplos? Não desfaz cobranças.'))return;
    items=structuredClone(comments);selected=items[0].id;page=0;setQuestions();rubricError='';notice='Progresso apagado. Exemplos restaurados; nenhuma nova chamada.';queue.configure(items,questions());choose(selected);
  });
  for(const id of ['batch-review','batch-accept']) $('#'+id).addEventListener('change',()=>{
    const review=Number($('#batch-review').value),accept=Number($('#batch-accept').value);
    if(!$('#batch-review').value||!$('#batch-accept').value||!Number.isInteger(review)||!Number.isInteger(accept)||review<0||accept>100||review>=accept){notice='Use limiares inteiros: 0 ≤ revisar < aceitar ≤ 100. Mantivemos a política anterior.';render();return;}
    onThresholds(review,accept);
  });
  choose(selected);
  return {refresh:render};
}
