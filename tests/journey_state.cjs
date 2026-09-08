const assert=require('node:assert/strict');
const data=require('../site/vitrine.json');
const catalog=require('../catalog.json');
const fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const sandbox={module:{exports:{}},Set,JSON,Error};
vm.runInNewContext(fs.readFileSync(path.join(__dirname,'../site/vitrine-state.js'),'utf8'),sandbox);
const create=sandbox.module.exports;
const slugs=catalog.skills.map(s=>s.name);
const memory=()=>({value:'[]',getItem(){return this.value},setItem(k,v){this.value=v}});
const store=memory(),j=create(data,slugs,store);
assert.equal(j.locked('hybrid-fundador'),true);
assert.equal(j.firstNeeded('hybrid-fundador'),'hybrid-perfil');
assert.equal(j.setInstalled('hybrid-fundador',true).ok,false);
assert.equal(j.has('hybrid-fundador'),false);
j.setInstalled('hybrid-perfil',true);
assert.equal(j.locked('hybrid-fundador'),false);
assert.equal(j.missing('hybrid-fundador').length,0);
assert.equal(create(data,slugs,store).has('hybrid-perfil'),true);
j.setInstalled('hybrid-fundador',true);j.setInstalled('hybrid-perfil',false);
assert.equal(j.locked('hybrid-fundador'),true);
assert.equal(j.locked('hybrid-marca'),true);
assert.equal(j.recommend('hybrid-marca').slug,'hybrid-perfil');
// Every skill can be reached by installing the suggested prerequisites in order.
for(const slug of Object.keys(data.skills)){
 const state=create(data,slugs,memory());let steps=0;
 while(state.locked(slug)){
  assert.ok(++steps<slugs.length);
  const next=state.firstNeeded(slug);
  assert.notEqual(next,slug);assert.equal(state.locked(next),false);
  assert.equal(state.setInstalled(next,true).ok,true);
 }
 assert.equal(state.setInstalled(slug,true).ok,true);assert.equal(state.ready(slug),true);
 for(const dep of data.skills[slug].antes){
  state.setInstalled(dep,false);assert.equal(state.locked(slug),true,slug+'/'+dep);
  assert.ok(state.missing(slug).includes(dep));
  while(state.locked(dep))state.setInstalled(state.firstNeeded(dep),true);
  state.setInstalled(dep,true);assert.equal(state.locked(slug),false);
 }
}
// Corrupt or denied storage never grants installation; session-only updates are explicit.
for(const value of ['not json','{}','null','["unknown"]']){
 const store=memory();store.value=value;assert.equal(create(data,slugs,store).has('hybrid-perfil'),false);
}
const denied={getItem(){throw Error('denied')},setItem(){throw Error('quota')}};
assert.equal(JSON.stringify(create(data,slugs,denied).setInstalled('hybrid-perfil',true)),JSON.stringify({ok:true,saved:false}));
assert.equal(j.setInstalled('unknown',true).ok,false);
const bad=structuredClone(data);bad.skills['hybrid-perfil'].antes=['hybrid-fundador'];
assert.throws(()=>create(bad,slugs,memory()),/inválido/);
const missing=structuredClone(data);missing.skills['hybrid-perfil'].antes=['missing'];
assert.throws(()=>create(missing,slugs,memory()),/inválido/);
console.log('PASS: dependency gates, persistence, relocking, ordered recommendations and storage failure');
