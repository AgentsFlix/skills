"""Behavioral checks for the ECF summary contract and score calculations."""
import pathlib
import shutil
import subprocess
import unittest

ROOT = pathlib.Path(__file__).resolve().parents[1]


class ECFDiagnosticTests(unittest.TestCase):
    @unittest.skipUnless(shutil.which('node'), 'Node is required for browser model checks')
    def test_score_contract_and_missing_data(self):
        script = r"""
const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const box={module:{exports:{}}};
vm.runInNewContext(fs.readFileSync('site/assistir/hermes-em-operacao/diagnostico-ecf/model.js','utf8'),box);
const M=box.module.exports;
const score=d=>M.calculate(d), make=()=>M.example();
let d=make(), r=score(d);
assert.equal(r.creator.score,77);
assert(Math.abs(r.expert.score-45)<1e-8);
assert.equal(r.founder.score,25);
assert.equal(r.creator.status,'Operacional');
assert.equal(r.founder.status,'Operacional');
// Unknown is not zero; all original weights remain mandatory.
d=make();d.axes.creator.metrics.seguidores.numerator=null;
assert.equal(score(d).creator.score,null);
d=make();d.axes.creator.metrics.seguidores.numerator=0;
assert.equal(score(d).creator.score,50.75);
// No denominator substitution, and zero reach cannot produce a rate.
d=make();d.axes.expert.metrics.autoridade.denominator=20000;
assert.equal(score(d).expert.score,null);
d=make();d.axes.expert.metrics.autoridade.denominator=0;
assert.equal(score(d).expert.score,null);
// Targets must be positive, sourced, and frozen before the evaluated cycle.
for(const change of [{target:null},{target:0},{target_source:''},{target_fixed_at:'2026-08-02'},{target_fixed_at:null}]) {
 d=make();Object.assign(d.axes.creator.metrics.compartilhamentos,change);assert.equal(score(d).creator.score,null);
}
// No provenance, incomplete collection, or incomparable snapshots: no full score.
for(const change of [{source:''},{evidence:[]}]) {
 d=make();Object.assign(d.axes.expert.metrics.salvamentos,change);assert.equal(score(d).expert.score,null);
}
for(const change of [{collection_complete:false},{comparable:false},{description:''}]) {
 d=make();Object.assign(d.axes.expert.cohort,change);assert.equal(score(d).expert.score,null);
}
d=make();d.collected_at=null;assert.equal(score(d).creator.score,null);
// Sample thresholds affect usability, without fabricating a ranking.
for(const n of [0,2,3,5,6]) {
 d=make();d.axes.expert.cohort.post_ids=d.axes.expert.cohort.post_ids.slice(0,n);r=score(d).expert;
 if(n<3) assert.equal(r.score,null);else assert.equal(r.status,n<6?'Provisório':'Operacional');
}
d=make();d.axes.founder.metrics.reconhecimento.denominator=9;
assert.equal(score(d).founder.status,'Provisório');
d=make();d.axes.founder.metrics.reconhecimento.numerator=11;
assert.throws(()=>score(d),/pessoas/);
// Relative reach uses a median per publication and stays visible above the cap.
d=make();d.axes.creator.metrics.alcance_relativo.samples=[0,0,1,1,10,10];
assert.equal(score(d).creator.components[0].raw,1);
d=make();d.axes.creator.metrics.alcance_relativo.samples=[2,2,2,2,2,2];
r=score(d).creator;assert.equal(r.components[0].raw,2);assert.equal(r.components[0].points,100);
d.axes.creator.metrics.alcance_relativo.samples.pop();assert.equal(score(d).creator.score,null);
// Empty reports can be imported to show actionable gaps, never a score.
d=M.emptyReport('@sem.dados','2026-08-01','2026-08-30');
for(const axis of Object.values(score(d)))assert.equal(axis.score,null);
// Malformed reports fail before rendering or calculations.
for(const change of [{method:'inventado'},{profile:'<script>'},{collected_at:'ontem'},{coverage:[{}]},{axes:null}]) {
 d=make();Object.assign(d,change);assert.throws(()=>score(d));
}
d=make();d.window.end='2026-08-29';assert.throws(()=>score(d),/30 dias/);
d=make();d.axes.creator.cohort.post_ids[1]=d.axes.creator.cohort.post_ids[0];assert.throws(()=>score(d),/únicos/);
d=make();d.axes.founder.cohort.post_ids[0]=d.axes.creator.cohort.post_ids[0];assert.throws(()=>score(d),/único eixo/);
d=make();d.axes.creator.metrics.seguidores.numerator=-1;assert.throws(()=>score(d));
d=make();d.axes.creator.metrics.seguidores.numerator='150';assert.throws(()=>score(d));
// An imported score or weight cannot override the method.
d=make();d.axes.creator.score=100;d.axes.creator.metrics.seguidores.weight=1;assert.equal(score(d).creator.score,77);
// Credential audit is optional for old reports and never changes the score.
assert.equal(M.emptyReport('@perfil','2026-08-01','2026-08-30').credential_resolution,null);
d=make();delete d.credential_resolution;assert.equal(score(d).creator.score,77);
for(const source of ['env','hermes_env','mcp','cli','sdk']) {
 for(const result of ['success','401','403','429','unavailable']) {
  d=make();d.credential_resolution={source,test_endpoint:'GET /v1/accounts',result};assert.equal(score(d).creator.score,77);
 }
}
d=make();d.credential_resolution={source:'unavailable',test_endpoint:'GET /v1/accounts',result:'unavailable'};assert.equal(score(d).creator.score,77);
for(const resolution of [
 {source:'cache',test_endpoint:'GET /v1/accounts',result:'success'},
 {source:'env',test_endpoint:'GET /v1/users',result:'success'},
 {source:'env',test_endpoint:'GET /v1/accounts',result:401},
 {source:'env',test_endpoint:'GET /v1/accounts',result:'inventado'},
 {source:'unavailable',test_endpoint:'GET /v1/accounts',result:'success'},
 {source:'env',result:'success'}, [], 'env', true
]) {d=make();d.credential_resolution=resolution;assert.throws(()=>score(d),/resolução de credencial/);}
// Reject extra properties without repeating their names or contents in the error.
for(const field of ['token','api_key','headers','unexpected']) {
 d=make();d.credential_resolution={source:'hermes_env',test_endpoint:'GET /v1/accounts',result:'success',[field]:'sensitive-test-marker'};
 assert.throws(()=>score(d),error=>/resolução de credencial/.test(error.message)&&!error.message.includes('sensitive-test-marker'));
}
// Structured legacy coverage is compatible without rendering endpoint arguments.
d=make();d.coverage=[{resource:'Comentários',reason:'Leitura parcial, classificação pendente.',pages:2,items:14,endpoint:'GET /example',parameters:'private-test-marker',status:{'200':2}}];
assert.equal(score(d).creator.score,77);
assert(!M.coverageText(d.coverage[0]).includes('private-test-marker'));
assert.match(M.coverageText(d.coverage[0]),/14 itens/);
for(const entry of [{}, {resource:'X',reason:'Y',token:'private-test-marker'}, {resource:'X',reason:'Y',items:-1}]) {
 d=make();d.coverage=[entry];assert.throws(()=>score(d));
}
// Contextual observations and editorial interpretation do not become weighted scores.
d=M.emptyReport('@baseline','2026-08-01','2026-08-30');d.collected_at='2026-09-01T12:00:00Z';
d.observations=[{label:'Compartilhamentos por alcance',numerator:15,denominator:1000,unit:'ratio',scope:'5 posts de idades diferentes',source:'Coleta fictícia',reason:'Sem coorte comparável'}];
d.axes.creator.analysis={summary:'Há compartilhamentos observados.',evidence:['15 eventos em 5 posts.'],limitations:['Sem metas prévias.'],next_step:'Completar a classificação.'};
assert.equal(M.observationValue(d.observations[0]),.015);
for(const axis of Object.values(score(d)))assert.equal(axis.score,null);
let o=d.observations[0];o.numerator=0;assert.equal(M.observationValue(o),0);score(d);
o.denominator=0;assert.equal(M.observationValue(o),null);score(d);
o.reason='';assert.throws(()=>score(d),/indicadores/);o.reason='Alcance indisponível';
o.numerator=null;assert.equal(M.observationValue(o),null);score(d);
o.numerator=-1;assert.throws(()=>score(d),/indicadores/);
d=make();d.observations=[{label:'Alcance',numerator:1000,denominator:null,unit:'count',scope:'Posts da janela',source:'Exemplo',reason:''}];
assert.equal(M.observationValue(d.observations[0]),1000);assert.equal(score(d).creator.score,77);
d.axes.creator.analysis={summary:'Conclusão sem evidência',evidence:[],limitations:[],next_step:''};assert.throws(()=>score(d),/evidências/);
// The initial ruler is a versioned proposal, independent from the old target method.
d=M.initialExample();let board=M.initialDashboard(d);
assert.equal(d.method,'ecf-inicial-v2');assert.equal(board.axes.creator.score,62);assert.equal(board.axes.expert.score,53);assert.equal(board.axes.founder.score,80);assert.equal(board.overall,65);assert.equal(board.partial,false);
assert.equal(M.calculate(d).creator.score,62);
// An ideal observation is 80; above the ideal can rise to the cap of 100.
d=M.initialExample();d.axes.creator.metrics.compartilhamentos.numerator=d.reference.targets.creator.compartilhamentos*d.axes.creator.metrics.compartilhamentos.denominator;
assert.equal(M.initialDashboard(d).axes.creator.components[2].points,80);
d.axes.creator.metrics.compartilhamentos.numerator*=10;assert.equal(M.initialDashboard(d).axes.creator.components[2].points,100);
// Zero is measured, but absent values are excluded visibly from an arithmetic mean.
d=M.initialExample();d.axes.creator.metrics.compartilhamentos.numerator=0;assert.equal(M.initialDashboard(d).axes.creator.components[2].points,0);
d.axes.creator.metrics.seguidores.status='missing';d.axes.creator.metrics.seguidores.reason='API sem campo';board=M.initialDashboard(d);
assert.equal(board.axes.creator.score,36);assert.equal(board.axes.creator.measured,2);assert.equal(board.axes.creator.partial,true);assert.equal(board.partial,true);
for(const m of Object.values(d.axes.founder.metrics)){m.status='missing';m.reason='Sem medição';}
board=M.initialDashboard(d);assert.equal(board.axes.founder.score,null);assert.equal(board.axesMeasured,2);assert.equal(board.overall,(36+53)/2);
d=M.emptyInitialReport('@sem.dados','2026-08-01','2026-08-30');assert.equal(M.initialDashboard(d).overall,null);
// Editing an ideal changes only its variable and the dependent averages.
d=M.initialExample();const ref=M.initialReference();ref.targets.expert.salvamentos*=2;board=M.initialDashboard(d,ref);
assert.equal(board.axes.expert.components[0].points,20);assert.equal(board.axes.creator.score,62);assert.equal(board.axes.expert.score,(20+64+55)/3);
assert.equal(d.reference.targets.expert.salvamentos,.02);
for(const change of [0,-1,null,'1',Infinity]){const ref=M.initialReference();ref.targets.creator.seguidores=change;assert.throws(()=>M.initialDashboard(d,ref),/ideal/);}
// Estimates and partial evidence keep scores visible with an explicit partial state.
for(const quality of ['partial','estimated']){d=M.initialExample();d.axes.creator.metrics.alcance_relativo.status=quality;d.axes.creator.metrics.alcance_relativo.reason='Base aproximada';assert.equal(M.initialDashboard(d).axes.creator.partial,true);}
d=M.initialExample();d.axes.creator.metrics.alcance_relativo.samples=[2,2,2];assert.equal(M.initialDashboard(d).axes.creator.components[0].points,100);
d=M.initialExample();d.axes.creator.metrics.seguidores.denominator=0;assert.equal(M.initialDashboard(d).axes.creator.components[1].points,null);
d=M.initialExample();d.axes.creator.metrics.seguidores.source='';assert.equal(M.initialDashboard(d).axes.creator.components[1].points,null);
d=M.initialExample();d.reference.ideal_score=100;assert.throws(()=>M.initialDashboard(d),/80 pontos/);
d=M.initialExample();d.axes.creator.metrics.seguidores.status='good';assert.throws(()=>M.initialDashboard(d));
d=M.initialExample();d.axes.founder.metrics.reconhecimento.numerator=d.axes.founder.metrics.reconhecimento.denominator+1;assert.throws(()=>M.initialDashboard(d),/pesquisa/);
// Legacy source records can be read against the new proposal without mutating the old scores.
d=make();const before=JSON.stringify(d);board=M.initialDashboard(d);assert.equal(JSON.stringify(d),before);assert.equal(score(d).creator.score,77);assert.equal(board.legacy,true);
d.axes.creator.cohort.comparable=false;assert(M.initialDashboard(d).axes.creator.score!==null);assert.equal(score(d).creator.score,null);
assert.throws(()=>M.initialDashboard(null));
console.log('ECF: cálculos, amostras, fontes, metas e lacunas verificados.');
"""
        subprocess.run([shutil.which('node'), '-e', script], cwd=ROOT, check=True)


if __name__ == '__main__':
    unittest.main()
