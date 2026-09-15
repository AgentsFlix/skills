const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');

const directory=path.join(__dirname,'../site/assistir/hermes-em-operacao/t1e2');
const sandbox={module:{exports:{}},TextEncoder,URL};
vm.runInNewContext(fs.readFileSync(path.join(directory,'base-editorial-data.js'),'utf8'),sandbox);
vm.runInNewContext(fs.readFileSync(path.join(directory,'base-editorial-contract.js'),'utf8'),sandbox);
vm.runInNewContext(fs.readFileSync(path.join(directory,'base-editorial-ecf-scores.js'),'utf8'),sandbox);
sandbox.ECFBaseScores=sandbox.module.exports;
vm.runInNewContext(fs.readFileSync(path.join(directory,'base-editorial-bundle.js'),'utf8'),sandbox);
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
const savedProject={id:project.id,business_name:project.business_name,records:{},future_internal_note:'não exportar'};
for(const [index,stage] of stages.entries())savedProject.records[stage.id]={output:contract.example(index,project),saved_at:'2026-09-14T12:00:00.000Z'};
savedProject.diagnosis={version:1,method:'ecf-zernio-v4',axes:{creator:{score:50,measured:3,total:3,partial:false},expert:{score:50,measured:3,total:3,partial:false},founder:{score:50,measured:3,total:3,partial:false}}};
const otherProject={...savedProject,id:'outra-base',business_name:'Outra marca'};
const storage={getItem:key=>key===sandbox.ECFBaseBundle.STORAGE_KEY?JSON.stringify({version:2,active_id:savedProject.id,projects:{[savedProject.id]:savedProject,[otherProject.id]:otherProject}}):null};
const bundle=sandbox.ECFBaseBundle.activeBundle(storage,'2026-09-14T13:00:00.000Z');
assert.equal(bundle.filename,'minha-base-ecf.json');
const parsedBundle=JSON.parse(bundle.content);
assert.equal(parsedBundle.format,'agentflix-base-bundle-1');
assert.equal(parsedBundle.exported_at,'2026-09-14T13:00:00.000Z');
assert.deepEqual(Object.keys(parsedBundle.records),[...stages].map(stage=>stage.id));
assert.equal(parsedBundle.business_name,'Marca de teste');
assert.equal(parsedBundle.future_internal_note,undefined);
assert.equal(parsedBundle.projects,undefined);
let clicked=false,released=false;
sandbox.Blob=class {constructor(parts,options){this.parts=parts;this.options=options;}};
sandbox.setTimeout=callback=>callback();
const downloadAnchor={click:()=>{clicked=true;}};
const testDocument={createElement:name=>{assert.equal(name,'a');return downloadAnchor;}};
const testUrl={createObjectURL:blob=>{assert.equal(blob.parts[0],bundle.content);assert.equal(blob.options.type,'application/json');return 'blob:bundle';},revokeObjectURL:url=>{assert.equal(url,'blob:bundle');released=true;}};
assert.equal(sandbox.ECFBaseBundle.download(bundle,testDocument,testUrl),true);
assert.equal(downloadAnchor.download,'minha-base-ecf.json');
assert.equal(clicked,true);
assert.equal(released,true);
const incomplete={...savedProject,records:{...savedProject.records}};
delete incomplete.records.voz;
assert.equal(sandbox.ECFBaseBundle.activeBundle({getItem:()=>JSON.stringify({version:2,active_id:incomplete.id,projects:{[incomplete.id]:incomplete}})}),null);
const mismatched={...savedProject,id:'outro-id'};
assert.equal(sandbox.ECFBaseBundle.activeBundle({getItem:()=>JSON.stringify({version:2,active_id:savedProject.id,projects:{[savedProject.id]:mismatched}})}),null);
const malformed={...savedProject,records:{...savedProject.records,negocio:{...savedProject.records.negocio,output:{...savedProject.records.negocio.output,stage:'publico'}}}};
assert.equal(sandbox.ECFBaseBundle.activeBundle({getItem:()=>JSON.stringify({version:2,active_id:malformed.id,projects:{[malformed.id]:malformed}})}),null);
assert.equal(sandbox.ECFBaseBundle.activeBundle({getItem:()=>'{inválido'}),null);
assert.equal(sandbox.ECFBaseBundle.activeBundle({getItem:()=>JSON.stringify({version:2,active_id:'ausente',projects:{}})}),null);
console.log('PASS base editorial: seis etapas, contrato JSON, correção, exportação e skills no GitHub');

// The returned social-media document is data; its headings and tables drive the views.
{
  const context={module:{exports:{}},TextEncoder};
  vm.runInNewContext(fs.readFileSync(path.join(directory,'marca-conhecimento-model.js'),'utf8'),context);
  const model=context.module.exports;
  const sectionNames=['Resumo operacional','Mandato do Social Media','Público e contexto de decisão','Posicionamento e mensagens','Voz e regras de escrita','Matéria-prima e prova','Arquitetura Editorial ECF','Banco de pautas priorizadas','Conversão e CTA','Métricas e hipóteses de aprendizado','Governança do conhecimento','Lacunas e decisões padrão aplicadas'];
  const content={
    2:'| Decisão | Direção operacional | Estado e fonte |\n|---|---|---|\n| Porta de entrada | Uma tarefa simples | Escolha informada |',
    3:'| Situação | Dor ou dúvida | Desejo | Linguagem real | Estado da evidência | Fonte |\n|---|---|---|---|---|---|\n| Tem uma tarefa | Não sabe começar | Um primeiro passo | Como começo? | Hipótese | Entrevista |',
    4:'### Mensagem central\n\n> **Aprenda fazendo.**\n\n### Promessas permitidas\n\n- Um passo prático.\n\n### Limites de promessa\n\n- Não garantir resultados.',
    5:'| Aspecto | Regra operacional |\n|---|---|\n| Tom | Direto e claro |',
    6:'| Tipo | Item | Tese que pode sustentar | Estado e permissão | Fonte | Restrição factual |\n|---|---|---|---|---|---|\n| Relato | Um caso | Uma possibilidade | Uso interno | Relato original | Não publicar |',
    7:'| Pilar | Papel ECF predominante |\n|---|---|\n| Primeiro passo | Expert |\n\n### Distribuição padrão\n\n| Papel | Proporção padrão | Função | Métrica primária |\n|---|---|---|---|\n| Creator | 3 de cada 10 | Descoberta | Alcance |\n| Expert | 50% | Aprendizado | Salvamentos |\n| Founder | 2/10 | Ação | Conversas |',
    8:'| Prioridade | Pauta | Gancho | Pilar | Papel ECF | Fonte ou prova | CTA | Limite |\n|---|---|---|---|---|---|---|---|\n| Alta | Uma tarefa \\| um passo | Comece aqui | Primeiro passo | Expert | Relato original | Experimente | Não generalizar |',
    12:'### Lacunas que permanecem\n\n- Confirmar a oferta.'
  };
  content[7]=content[7].replace('| Pilar | Papel ECF predominante |\n|---|---|\n| Primeiro passo | Expert |', '| Pilar | Problema ou desejo que atende | Papel ECF predominante | Formatos lógicos | Séries recorrentes | Fontes do bundle | Limites |\n|---|---|---|---|---|---|---|\n'+['Primeiro passo','Perguntas reais','Aplicação prática'].map(pilar=>'| '+pilar+' | Aprender | Expert | Tutorial | Série de exemplos | Fonte de exemplo | Não garantir resultados |').join('\n'));
  content[8]+='\n'+Array.from({length:17},(_,i)=>'| Média | Exemplo editorial '+(i+2)+' | Um próximo passo | Primeiro passo | '+['Creator','Expert','Founder'][i%3]+' | Relato original | Experimente | Não generalizar |').join('\n');
  content[9]='| Papel ECF | O que a pessoa acabou de receber | Próxima ação adequada | Formulação de CTA | O que não prometer |\n|---|---|---|---|---|\n| Expert | Um exemplo | Experimentar | Teste o primeiro passo | Resultado garantido |';
  content[10]='| Papel ECF | Hipótese editorial | Métrica primária | Sinal complementar | O que não concluir só com essa métrica |\n|---|---|---|---|---|\n| Expert | O exemplo ajuda | Salvamentos | Perguntas | Que todos aplicaram |';
  const document='# Base de Conhecimento Social Media — Marca de exemplo\n\n> **Status:** Rascunho\n\n'+sectionNames.map((name,index)=>'## '+(index+1)+'. '+name+'\n\n'+(content[index+1]||'Não informado.')+'\n').join('\n');
  const parsed=model.parse(document);
  assert.equal(parsed.name,'Marca de exemplo');
  assert.equal(model.parse(document.replace(/^## (\d)/gm,'### $1')).topics.length,18);
  assert.equal(model.parse(document.replace(/^## (\d)/gm,'#### $1')).pillars.length,3);
  assert.throws(()=>model.parse(document.replace('4. Posicionamento e mensagens','4. Outro título')),/Título de seção/);
  assert.throws(()=>model.parse(document.replace('| Hipótese editorial |','| Texto livre |')),/seção 10/);
  assert.throws(()=>model.parse(document.replace(/\| Média \| Exemplo editorial 18[^\n]*/,'')),/18 pautas/);
  assert.equal(parsed.status,'Rascunho');
  assert.equal(parsed.topics[0].title,'Uma tarefa | um passo');
  assert.equal(parsed.entry,'Uma tarefa simples');
  assert.equal(parsed.message,'Aprenda fazendo.');
  assert.equal(parsed.materials[0]['Estado e permissão'],'Uso interno');
  assert.equal(parsed.topics[0].permission,''); // Do not infer publication permission from a source mention.
  assert.deepEqual([...parsed.distribution].map(item=>item.ratio),[.3,.5,.2]);
  assert.equal(parsed.version,'');
  assert.equal(parsed.updated,'');
  assert.equal(parsed.sourceMap.length,0);
  assert.equal(model.parse('\ufeff'+document.replaceAll('\n','\r\n')).topics.length,18);
  assert.throws(()=>model.parse('# Outro arquivo'),/começar/);
  assert.throws(()=>model.parse(document.replace('## 3.','## Sem número.')),/Faltam seções/);
  assert.throws(()=>model.parse(document+'\n## 8. Duplicada\n'),/Título de seção|mais de uma vez/);
  assert.throws(()=>model.parse(document.replace('| Expert | Relato original |','| Expert |')),/colunas/);
  assert.throws(()=>model.parse(document.replace('| Pauta |','| Assunto |')),/tabela preenchida/);
  assert.throws(()=>model.parse('a'.repeat(model.MAX_BYTES+1)),/2 MB/);
  assert.equal(model.proportion('60 de cada 10'),null);
  assert.equal(model.proportion('2/0'),null);
  assert.equal(model.proportion('Não informado'),null);
  assert.equal(model.parse(document.replace('3 de cada 10','Não informado')).distribution[0].ratio,null);
  assert.equal(model.parse(document.replace('Marca de exemplo','Outro negócio')).name,'Outro negócio');
  assert.equal(model.parse(document.replace('Uma tarefa \\| um passo','<script>injetado()</script>')).topics[0].title,'<script>injetado()</script>');
  assert.match(model.repair('Falta seção 8'),/Falta seção 8/);
  assert.match(model.repair('Falta seção 8'),/Não invente dados/);
}
