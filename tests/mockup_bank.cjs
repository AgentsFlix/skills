const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const dir=path.join(__dirname,'../site/assistir/hermes-em-operacao/t1e2');
const load=name=>{const s={module:{exports:{}},URL,Date,TextEncoder,Uint8Array,DataView};vm.runInNewContext(fs.readFileSync(path.join(dir,name),'utf8'),s);return s.module.exports;};
const B=load('mockup-bank.js'),M=load('jornada-marca-model.js'),data=JSON.parse(fs.readFileSync(path.join(dir,'jornada-marca-data.json')));
const seen=new Set();for(const style of B.styles)for(const layout of B.layouts){const c={style:style.id,layout:layout.id,brand:'Negócio & Co',title:'Título para qualquer negócio',format:'carousel'};for(let i=0;i<3;i++){const svg=B.render(c,i);assert(svg.includes('viewBox="0 0 1080 1350"'));assert(svg.includes('Negócio &amp; Co'));assert(!svg.includes('undefined'));assert(!svg.includes('NaN'));assert(!svg.includes('http://127.'));assert(!/<script|<foreignObject|href=/.test(svg));if(!i)seen.add(svg);}assert.equal(B.files(c).length,5);}
assert.equal(seen.size,B.styles.length*B.layouts.length);
assert.equal(B.normalize({style:'bad',layout:'bad',accent:'javascript:evil'}).style,'essencial');assert.equal(B.normalize({title:'x'.repeat(500)}).title.length,90);
const xss=B.render({brand:'<script>alert(1)</script>',title:'</text><image href="bad"/>'});assert(!xss.includes('<script>'));assert(!xss.includes('<image href='));assert(xss.includes('&lt;script&gt;'));
assert.equal(B.recipe({accent:'#123456'}).styleDefinition.accent,'#123456');
const b=M.createBrand('Real','one'),db={version:1,agent:'',brands:[b]};assert(M.validStore(db));
for(let i=0;i<9;i++)M.recordReturn(b,i,{started:true,reviewed:true,saved:true,where:'file v1',criterion:true,pending:'',handoff:'Resumo',mode:'guiado',checks:Object.fromEntries((M.requiredChecks[i]||[]).map(k=>[k,true]))});
b.folder={url:'https://drive.google.com/drive/folders/test',confirmed:true};assert(M.ready(b));
M.setMockup(b,B.normalize({style:'editorial',layout:'lista',brand:b.name}));assert(M.validStore(db));assert.equal(M.status(b,5),'Concluída');for(const i of [6,7,8])assert.equal(M.status(b,i),'Precisa revisar');assert(!M.ready(b));assert(M.prompt(data,b,7,'Codex').includes('REFERÊNCIA VISUAL ESCOLHIDA (não aprovada)'));assert(!M.prompt(data,b,0,'Codex').includes('REFERÊNCIA VISUAL ESCOLHIDA'));
M.setMockup(b,B.normalize({style:'retro',brand:b.name}));assert(b.stages[6].history.some(h=>h.mockup?.style==='editorial'));assert.equal(M.createBrand('Outra','two').mockup,undefined);
const invalid=JSON.parse(JSON.stringify(db));invalid.brands[0].mockup={};assert(!M.validStore(invalid));
const zip=B.zip(B.files({brand:'Marca á & co',format:'carousel'}));assert.equal(new DataView(zip.buffer).getUint32(0,true),0x04034b50);
if(process.env.MOCKUP_ZIP_OUT)fs.writeFileSync(process.env.MOCKUP_ZIP_OUT,zip);
console.log(`PASS mockups: ${seen.size} combinações, fontes SVG, carrossel, segurança, receita, ZIP, legado e revisão por marca`);
