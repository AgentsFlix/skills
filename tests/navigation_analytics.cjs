const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const data=JSON.parse(fs.readFileSync('site/vitrine.json'));
const ctx={module:{exports:{}}};vm.runInNewContext(fs.readFileSync('site/vitrine-visit.js','utf8'),ctx);
const memory=new Map(),storage={getItem:k=>memory.get(k),setItem:(k,v)=>memory.set(k,v),removeItem:k=>memory.delete(k)};
const visit=ctx.module.exports(data,storage);assert.equal(visit.load(),null);
let paths=0;
function walk(kind,node,answers=[]){data.guia[node].o.forEach((o,i)=>{const next=[...answers,i];if(o.vai)walk(kind,o.vai,next);else{assert.equal(visit.save(kind,next,true),true);const loaded=visit.load();assert.equal(loaded.result.skill,o.skill);assert.equal(loaded.completed,true);paths++;}})}
for(const kind of ['guia','colecao','avulsa'])walk(kind,kind==='avulsa'?'o_que_agora':'inicio');
visit.save('guia',[0],false);assert.equal(visit.load().completed,false);assert.equal(visit.load().answers.length,1);
for(const bad of ['{',JSON.stringify({version:1,kind:'guia',answers:[],completed:true}),JSON.stringify({version:1,kind:'guia',answers:[999],completed:true}),JSON.stringify({version:2,kind:'guia',answers:[0],completed:false})]){memory.set(visit.key,bad);assert.equal(visit.load(),null)}
visit.clear();assert.equal(visit.load(),null);assert.equal(visit.save('other',[],false),false);
const blocked=ctx.module.exports(data,{getItem(){throw Error()},setItem(){throw Error()},removeItem(){throw Error()}});assert.equal(blocked.load(),null);assert.equal(blocked.save('guia',[],false),false);blocked.clear();
function analytics(hostname,search='',values={}){const map=new Map(Object.entries(values)),scripts=[];const context={URLSearchParams,location:{hostname,search},localStorage:{getItem:k=>map.get(k),setItem:(k,v)=>map.set(k,v),removeItem:k=>map.delete(k)},document:{createElement:()=>({}),head:{appendChild:s=>scripts.push(s)}}};context.window=context;vm.runInNewContext(fs.readFileSync('site/analytics.js','utf8'),context);return {context,scripts,map};}
for(const host of ['localhost','127.0.0.1','preview.vercel.app']){const a=analytics(host);a.context.clar('test');assert.equal(a.scripts.length,0);assert.equal(a.context.clarity.q,undefined)}
const qa=analytics('agentsflix.ai','?qa=1');assert.equal(qa.scripts.length,0);assert.equal(qa.map.get('agentflix-qa'),'1');assert.equal(analytics('agentsflix.ai','',{'agentflix-qa':'1'}).scripts.length,0);
const prod=analytics('agentsflix.ai','?qa=0',{'agentflix-qa':'1'});assert.equal(prod.scripts.length,1);assert.equal(prod.context.clarity.q[0][1].analytics_Storage,'denied');prod.context.clar('onboarding_concluido',{skill:'hybrid-icp',email:'secret'});assert.equal(prod.context.clarity.q.at(-1)[1],'onboarding_concluido');assert.equal(prod.context.clarity.q.some(args=>args[1]==='email'),false);
assert.equal(analytics('agentsflix.ai','',{'agentflix-consent':'granted'}).context.clarity.q[0][1].analytics_Storage,'granted');
async function copy(apiSucceeds,fallbackSucceeds){let restored=false;const c={navigator:{clipboard:{writeText:async()=>{if(!apiSucceeds)throw Error()}}},document:{activeElement:{focus(){restored=true}},createElement:()=>({style:{},select(){},remove(){}}),body:{appendChild(){}},execCommand:()=>fallbackSucceeds}};c.window=c;vm.runInNewContext(fs.readFileSync('site/clipboard.js','utf8'),c);const result=await c.agentflixCopy('payload unchanged');if(!apiSucceeds)assert.equal(restored,true);return result;}
(async()=>{assert.equal(await copy(true,false),true);assert.equal(await copy(false,true),true);assert.equal(await copy(false,false),false);console.log(`PASS: ${paths} caminhos restauráveis, estado inválido, armazenamento bloqueado, coleta por ambiente/QA e falhas de cópia`);})().catch(e=>{console.error(e);process.exit(1)});
