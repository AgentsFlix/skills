const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');

const directory=path.join(__dirname,'../site/assistir/hermes-em-operacao/t1e2');
const sandbox={module:{exports:{}},TextEncoder,URL};
vm.runInNewContext(fs.readFileSync(path.join(directory,'base-editorial-data.js'),'utf8'),sandbox);
vm.runInNewContext(fs.readFileSync(path.join(directory,'base-editorial-contract.js'),'utf8'),sandbox);
const stages=sandbox.ECFBaseStages,contract=sandbox.ECFBaseContract;
assert.deepEqual([...stages].map(stage=>stage.id),['negocio','pesquisa','publico','posicionamento','voz','materia-prima']);
const project={id:'local-test',business_name:'Marca de teste',records:{}};
for(const [index,stage] of stages.entries()){
  const output=contract.example(index,project);
  assert.equal(output.stage,stage.id);
  assert.doesNotThrow(()=>contract.parse(JSON.stringify(output),{id:project.id,business_name:project.business_name,stage:stage.id}));
  const prompt=contract.buildPrompt(index,project,'Ponto de partida','Contexto',stages);
  assert.match(prompt,new RegExp('ETAPA '+(index+1)+' DE 6'));
  assert.match(prompt,new RegExp('único arquivo final entregue ao usuário para upload é '+stage.id+'\\.json','i'));
  assert.match(prompt,/GitHub/);
  const invalid={...output,documents:[{...output.documents[0],path:'rascunhos/fora-do-contrato.md'}]};
  assert.throws(()=>contract.parse(JSON.stringify(invalid),{id:project.id,business_name:project.business_name,stage:stage.id}));
  const repair=contract.buildRepairPrompt(index,project,JSON.stringify(invalid),'Caminho não permitido.',stage.id+'.json');
  assert.match(repair,new RegExp('Nome obrigatório do arquivo final: '+stage.id+'\\.json'));
}
console.log('PASS base editorial: seis etapas, contrato JSON, correção e skills no GitHub');
