export const commentState = item => ({video:{titulo:'Como usar JEV para decisões tipadas'}, comentario:{texto:item.text}});
const unit = value => typeof value === 'number' && Number.isFinite(value) && value >= 0 && value <= 1;
export function validBatchAnswers(answers, questions) {
  if (!answers || Object.keys(answers).length !== Object.keys(questions).length) return false;
  return Object.entries(questions).every(([id, question]) => {
    const answer = answers[id];
    if (!answer || answer.type !== question.type) return false;
    if (question.type === 'noul') return unit(answer.noul);
    const keys = question.type === 'score' ? question.criteria.map((_, i) => String(i)) : Object.keys(question.criteria);
    const probabilities = answer.probabilities;
    if (!unit(answer.confidence) || !probabilities || Object.keys(probabilities).length !== keys.length || !keys.every(key => unit(probabilities[key])) || Math.abs(Object.values(probabilities).reduce((a,b) => a+b,0)-1) > .021) return false;
    return question.type === 'choice' ? keys.includes(answer.choice) && probabilities[answer.choice]+.011 >= Math.max(...Object.values(probabilities)) : Number.isFinite(answer.score) && answer.score >= 0 && answer.score <= keys.length-1;
  });
}

// One comment per request. Pause drains in-flight calls; changing the plan aborts and ignores stale replies.
export class CommentQueue {
  constructor({items, questions, request, changed = () => {}, storage = null}) {
    this.request=request; this.changed=changed; this.storage=storage; this.key='agentflix-jev-triage-v1';
    this.generation=0; this.controllers=new Set(); this.running=false; this.paused=false;
    this.configure(items,questions,true);
  }
  configure(items,questions,restore=false) {
    this.generation++; for(const controller of this.controllers) controller.abort(); this.controllers.clear();
    this.running=false; this.paused=false; this.items=structuredClone(items); this.questions=structuredClone(questions);
    this.signature=JSON.stringify({version:1,model:'typesafe/jev-1.13',items:this.items,questions:this.questions});
    this.records=new Map(this.items.map(item => [item.id,{status:'pending',attempts:0}]));
    this.storageError=false; this.restored=false;
    if(restore) {
      try {
        const saved=JSON.parse(this.storage?.getItem(this.key)||'null');
        if(saved?.signature===this.signature && Array.isArray(saved.records)) {
          for(const [id,record] of saved.records) {
            if(!this.records.has(id) || !Number.isInteger(record.attempts) || record.attempts<0 || record.attempts>3) continue;
            if(record.status==='done' && validBatchAnswers(record.payload?.answers,this.questions)) {this.records.set(id,record);this.restored=true;}
            else if(record.status==='error') this.records.set(id,{...record,error:'Tentativa anterior sem resultado válido.',retryable:record.retryable===true});
            else if(record.status==='running' || record.status==='pending') this.records.set(id,record.attempts>=3 ? {status:'error',attempts:record.attempts,error:'Limite de três tentativas atingido. A última chamada não deixou uma resposta válida.',retryable:false} : {status:'pending',attempts:record.attempts});
          }
        }
      } catch {this.storageError=true;}
    }
    this.persist();
  }
  persist() {
    try {this.storage?.setItem(this.key,JSON.stringify({signature:this.signature,records:[...this.records]}));}
    catch {this.storageError=true;}
  }
  emit() {this.persist();this.changed();}
  pause() {this.paused=true;this.emit();}
  counts() {
    const counts={done:0,error:0,running:0,pending:0,attempts:0};
    for(const record of this.records.values()){counts[record.status]++;counts.attempts+=record.attempts;}
    return counts;
  }
  async start(limit=500,{retry=false,ids=null}={}) {
    if(this.running) return;
    const allowed=ids ? new Set(ids) : null;
    const pending=this.items.filter(item => {
      const record=this.records.get(item.id);
      return (!allowed || allowed.has(item.id)) && record.attempts<3 && (record.status==='pending' || (retry && record.status==='error' && record.retryable));
    }).slice(0,Math.max(0,Math.min(500,limit)));
    if(!pending.length) return;
    this.running=true;this.paused=false;const generation=this.generation;let cursor=0;this.emit();
    const worker=async()=>{
      while(generation===this.generation && !this.paused && cursor<pending.length){
        const item=pending[cursor++], previous=this.records.get(item.id), controller=new AbortController();
        this.controllers.add(controller);this.records.set(item.id,{status:'running',attempts:previous.attempts+1});this.emit();
        const timer=setTimeout(()=>controller.abort(),25000), started=Date.now();
        try {
          const payload=await this.request({state:commentState(item),questions:this.questions},controller.signal);
          if(generation!==this.generation) return;
          if(!payload || typeof payload!=='object' || !validBatchAnswers(payload.answers,this.questions)) throw Object.assign(Error('Resposta inválida'),{retryable:false});
          this.records.set(item.id,{status:'done',attempts:previous.attempts+1,payload,elapsedMs:Date.now()-started});
        } catch(error) {
          if(generation!==this.generation) return;
          const retryable=error.retryable===true || error.name==='AbortError' || error instanceof TypeError;
          this.records.set(item.id,{status:'error',attempts:previous.attempts+1,error:retryable ? 'Falha temporária. A tentativa pode ter sido cobrada; reenvie explicitamente.' : 'Falha de configuração ou resposta inválida. Revise a integração antes de continuar.',retryable});
          // Do not hammer a rate limit, exhausted balance or a malformed contract.
          this.paused=true;
        } finally {
          clearTimeout(timer);this.controllers.delete(controller);
          if(generation===this.generation) this.emit();
        }
      }
    };
    await Promise.all([worker(),worker()]);
    if(generation===this.generation){this.running=false;this.emit();}
  }
}
