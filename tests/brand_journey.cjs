const assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path');
const dir=path.join(__dirname,'../site/assistir/hermes-em-operacao/t1e2');
const vm=require('node:vm'),sandbox={module:{exports:{}},URL,Date};
vm.runInNewContext(fs.readFileSync(path.join(dir,'jornada-marca-model.js'),'utf8'),sandbox);
const M=sandbox.module.exports;
const data=JSON.parse(fs.readFileSync(path.join(dir,'jornada-marca-data.json')));
const b=M.createBrand('Minha marca real','one');
const ret=(i,extra={})=>({started:true,reviewed:true,saved:true,where:`pasta/${i}.md v1`,criterion:true,checks:Object.fromEntries((M.requiredChecks[i]||[]).map(k=>[k,true])),pending:'',handoff:`Resumo da etapa ${i+1}`,mode:'guiado',...extra});
assert.equal(M.ready(b),false);
assert.equal(M.status(b,0),'Não iniciada');
for(let i=0;i<9;i++){
 assert.equal(data.stages[i].options.length,3);
 const p=M.prompt(data,b,i,'');assert.match(p,/Ainda não escolhi; ajude-me a descobrir/);assert(!p.includes('Meu contexto adicional:'));assert(!/\[(PONTO DE PARTIDA|CONTEXTO ADICIONAL|CONTINUIDADE)\]/.test(p));assert.match(p,/UMA pergunta por mensagem/);assert.match(p,/4:5/);assert.match(p,/não autoriza|autorizar uma publicação/);assert(!/\/Users\/|~\//.test(p));
}
M.changeInput(b,0,'choice',0);assert.equal(M.status(b,0),'Prompt preparado');
b.stages[0].copiedAt=M.stamp();assert.equal(M.status(b,0),'Prompt copiado');assert(!M.ready(b));
assert(M.validStore({version:1,agent:'',activeId:'one',brands:[b]}));
assert(!M.validStore({version:1,agent:'',brands:[{...b,stages:[]}]}));
assert(!M.validStore({version:1,agent:'',brands:[b,b]}));
const foreign=M.createBrand('Outra','two');assert.equal(foreign.stages[0].choice,null);
M.recordReturn(b,7,ret(7));assert.equal(M.status(b,7),'Concluída com pendências'); // Exploring does not supply missing inputs.
for(let i=0;i<9;i++)M.recordReturn(b,i,ret(i));
assert(b.stages.every((_,i)=>M.status(b,i)==='Concluída'));assert(!M.ready(b));
b.folder={url:'https://drive.google.com/drive/folders/brand-one',confirmed:false};assert(!M.ready(b));
b.folder.confirmed=true;assert(M.ready(b));
M.changeInput(b,1,'context','O público mudou');assert.equal(M.status(b,1),'Precisa revisar');
for(const i of [2,3,4,5,6,7,8])assert.equal(M.status(b,i),'Precisa revisar');
assert.equal(M.status(b,0),'Concluída');assert.equal(b.stages[7].handoff,'Resumo da etapa 8');assert(b.stages[7].history.length);assert(!b.folder.confirmed);assert(!M.ready(b));
const oldHistory=b.stages[1].history.length;
M.changeInput(b,1,'context','O público mudou de novo');assert.equal(b.stages[1].history.length,oldHistory);
M.recordReturn(b,1,ret(1,{pending:'Hipótese ainda sem fonte'}));assert.equal(M.status(b,1),'Concluída com pendências');
M.recordReturn(b,2,ret(2));assert.equal(M.status(b,2),'Concluída com pendências');
M.recordReturn(b,1,ret(1));for(let i=2;i<9;i++)M.recordReturn(b,i,ret(i));
M.recordReturn(b,6,ret(6,{criterion:false}));assert.notEqual(M.status(b,6),'Concluída');assert(!M.ready(b)); // Text design is not visual approval.
M.recordReturn(b,6,ret(6));M.recordReturn(b,7,ret(7,{checks:{static:true,carousel:false,reusable:true}}));assert.notEqual(M.status(b,7),'Concluída');
M.recordReturn(b,7,ret(7));M.recordReturn(b,8,ret(8,{checks:{pilot:false,corrections:true,index:true,operation:true}}));assert.notEqual(M.status(b,8),'Concluída');
M.recordReturn(b,8,ret(8));M.recordReturn(b,8,ret(8,{saved:true,where:''}));assert.equal(b.stages[8].saved,false);assert(!M.ready(b));
M.changeInput(b,0,'context','Serviços, não produtos. $& </textarea><script>exemplo</script>');M.changeInput(b,0,'continuity','Meu resumo $&');const p=M.prompt(data,b,0,'Modo guiado por prompt');assert(p.includes('Serviços, não produtos. $& </textarea><script>exemplo</script>'));assert(p.includes('Continuidade: Meu resumo $&'));assert.match(p,/Trabalhe em modo guiado por prompt/);
assert(M.prompt(data,b,7,'Codex').includes('carrossel-icp, print-carousel, epic-paper'));assert(M.prompt(data,b,8,'Codex').includes('routine-builder, orquestrar-canais'));
assert.equal(M.driveURL('javascript:alert(1)'),null);assert.equal(M.driveURL('https://drive.google.com.evil.test/drive/folders/a'),null);assert.equal(M.driveURL('http://drive.google.com/drive/folders/a'),null);assert.equal(M.driveURL('https://u:p@drive.google.com/drive/folders/a'),null);assert(M.driveURL('https://drive.google.com/drive/u/0/folders/a'));
assert.equal(foreign.stages[1].context,'');
console.log('PASS jornada: prompts, continuidade, nove critérios, dois formatos, piloto, Drive declarado, dependências, histórico e isolamento por negócio');
