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
console.log('ECF: cálculos, amostras, fontes, metas e lacunas verificados.');
"""
        subprocess.run([shutil.which('node'), '-e', script], cwd=ROOT, check=True)


if __name__ == '__main__':
    unittest.main()
