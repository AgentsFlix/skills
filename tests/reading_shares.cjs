const fs = require('fs'), vm = require('vm'), assert = require('node:assert/strict');
const ctx = {window:{}};
vm.runInNewContext(fs.readFileSync('site/reading-share.js','utf8'), ctx);
const {payload, shareCover} = ctx.window.AgentFlixReadingShare;
(async () => {
  for (const entry of JSON.parse(fs.readFileSync('site/leitura/manifest.json')).readings) {
    const data = payload(entry.slug,entry.share), url = new URL(data.url);
    assert.equal(url.origin,'https://agentsflix.ai');
    assert.equal(url.hash,''); assert.equal(url.pathname,`/compartilhar/${entry.slug}/`);
    assert.equal(new URL(data.whatsapp).searchParams.get('text'), entry.share.title + '\n' + data.url);
  }
  assert.throws(() => payload('../escape',{}));
  const file = {name:'capa.png',type:'image/png'};
  assert.equal(await shareCover(file,'Título',{}),'unsupported');
  assert.equal(await shareCover(file,'Título',{canShare:()=>false,share:()=>assert.fail()}),'unsupported');
  assert.equal(await shareCover(null,'Título',{share:()=>assert.fail()}),'unsupported');
  let invoked = false;
  const sharing = shareCover(file,'Título',{canShare:()=>true,share:data=>{
    invoked = true; assert.equal(data.files[0],file); assert.equal(data.title,'Título');
    return Promise.resolve();
  }});
  assert(invoked,'Native share must run synchronously within user activation');
  assert.equal(await sharing,'shared');
  assert.equal(await shareCover(file,'Título',{canShare:()=>true,share:async()=>{throw {name:'AbortError'};}}),'cancelled');
  await assert.rejects(shareCover(file,'Título',{canShare:()=>true,share:async()=>{throw Error('Denied');}}),/Denied/);
  console.log('Sharing: URLs, capability fallback, native activation, cancellation and errors verified.');
})().catch(error => {console.error(error);process.exitCode=1;});
