const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const sandbox={module:{exports:{}},TextEncoder};
vm.runInNewContext(fs.readFileSync(path.join(__dirname,'../site/assistir/hermes-em-operacao/t1e2/base-editorial-ecf-scores.js'),'utf8'),sandbox);
const scores=sandbox.module.exports;

const target={creator:{alcance:3,curtidas:.05,compartilhamentos:.01},expert:{salvamentos:.02,comentarios:.01,tempo_assistido:.5},founder:{cliques_perfil:.01,contas_engajadas:.1,conversas_inbox:.01}};
const accountId='account-qa';
const source='Dados fictícios e nativos para validar a interface local.';
const post=(id,type,values)=>({id,published_at:'2026-08-02T12:00:00Z',last_updated:'2026-08-31T12:00:00Z',media_product_type:type,reach:1000,likes:50,comments:10,shares:10,saves:20,ig_reels_avg_watch_time_ms:15000,video_duration_seconds:30,...values});
const report=()=>({
  method:'ecf-zernio-v4',profile:'@marcaqa',account_id:accountId,window:{start:'2026-08-01',end:'2026-08-30'},collected_at:'2026-08-31T12:00:00Z',
  reference:{label:'ECF Zernio v4 · proposta ajustável',ideal_score:80,targets:JSON.parse(JSON.stringify(target))},credential_resolution:null,coverage:['Dados fictícios para validar os três cards.'],
  account:{account_id:accountId,status:'complete',source,reason:'',reach:3000,followers_count:1000,followers_updated_at:'2026-08-30T12:00:00Z',profile_links_taps:30,accounts_engaged:300},
  posts:{account_id:accountId,status:'complete',source,reason:'',expected_count:3,items:[post('one','REELS'),post('two','REELS'),post('three','FEED')]},
  inbox:{account_id:accountId,status:'complete',source,reason:'',unique_conversations:30}
});

let summary=scores.parse(JSON.stringify(report()));
for(const axis of ['creator','expert','founder']){
  assert.equal(summary.axes[axis].score,80);
  assert.equal(summary.axes[axis].measured,3);
  assert.equal(summary.axes[axis].total,3);
  assert.equal(summary.axes[axis].partial,false);
}
assert(scores.validSummary(summary));
const numericText=report();
numericText.account.reach='3000';numericText.posts.expected_count='3';numericText.posts.items[0].likes='50';numericText.reference.targets.creator.alcance='3';
assert.equal(scores.parse(JSON.stringify(numericText)).axes.creator.score,80);
assert.throws(()=>scores.parse('{"method":"ecf-zernio-v4","method":"ecf-zernio-v4"}'),/chave duplicada/);
assert.throws(()=>scores.parse('null'),/contrato atual/);
const blankCoverage=report();blankCoverage.coverage=['   '];assert.throws(()=>scores.toSummary(blankCoverage),/cobertura inválida/);
const partial=report();partial.posts.items[0].saves=null;summary=scores.toSummary(partial);
assert.equal(summary.axes.expert.measured,3);
assert.equal(summary.axes.expert.partial,true);
const medianReport=report();medianReport.posts.items=[post('one','REELS',{ig_reels_avg_watch_time_ms:3000}),post('two','REELS',{ig_reels_avg_watch_time_ms:3000}),post('three','REELS',{ig_reels_avg_watch_time_ms:27000})];summary=scores.toSummary(medianReport);
assert.equal(summary.axes.expert.score,59);
const missing=report();missing.inbox.status='missing';missing.inbox.source='';missing.inbox.reason='Inbox não coletado neste exemplo.';missing.inbox.unique_conversations=null;summary=scores.toSummary(missing);
assert.equal(summary.axes.founder.measured,2);
assert.equal(summary.axes.founder.partial,true);
assert.throws(()=>scores.parse(JSON.stringify({...report(),method:'ecf-metas-v1'})),/ecf-zernio-v4/);
assert.throws(()=>scores.parse('{"method":"ecf-zernio-v4"}'),/contrato atual/);
const invalidTimestamp=report();invalidTimestamp.account.followers_updated_at='not-a-timestamp';assert.throws(()=>scores.toSummary(invalidTimestamp),/data de seguidores inválida/);
const incompletePage=report();incompletePage.posts.expected_count=2;assert.throws(()=>scores.toSummary(incompletePage),/paginação inválida/);
const duplicatePost=report();duplicatePost.posts.items[1].id='one';assert.throws(()=>scores.toSummary(duplicatePost),/IDs únicos/);
assert(!scores.validSummary({...summary,axes:{creator:{score:100,measured:3,total:3,partial:false}}}));
assert(!scores.validSummary({...summary,rawProfile:'não salvar'}));
console.log('PASS base editorial: diagnóstico ECF resumido sem guardar dados brutos');
