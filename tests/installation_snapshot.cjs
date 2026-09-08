// Execute somente o mapeamento de dados da vitrine, sem DOM, rede ou comandos.
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(process.argv[2] || path.join(root, 'site/index.html'), 'utf8');
const start = html.indexOf('(() => {\n  "use strict";');
const end = html.indexOf('  // ---------- pedaços de HTML ----------', start);
if (start < 0 || end < 0) throw new Error('Não encontrou o mapeamento de instalação');
const sandbox = { location: {origin:'https://agentsflix.ai',pathname:'/'}, catalog:JSON.parse(fs.readFileSync(path.join(root,'catalog.json'),'utf8')), result:null };
vm.runInNewContext(html.slice(start,end) + '\nresult = Object.fromEntries(catalog.skills.map((s,i) => { const d=decorate(s,i); return [d.slug,Object.fromEntries(TARGETS.map(t=>[t.id,targetInfo(d,t.id).value]))]; }));\n})();', sandbox);
process.stdout.write(JSON.stringify(sandbox.result));
