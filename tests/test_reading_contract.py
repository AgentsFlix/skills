"""Todas as leituras publicadas passam pelo mesmo componente da vitrine."""
import json
from pathlib import Path
import re
import subprocess
import unittest
ROOT=Path(__file__).resolve().parents[1]
class ReadingContract(unittest.TestCase):
    def test_registered_readings_have_renderable_blocks_and_local_assets(self):
        manifest=json.loads((ROOT/'site/leitura/manifest.json').read_text())
        registry=[r['slug'] for r in manifest['readings']]
        self.assertEqual(len(registry),len(set(registry)))
        renderer=(ROOT/'site/human-reader.js').read_text()
        supported=set(re.findall(r"case '([^']+)':",renderer))
        def assets(value):
            if isinstance(value,dict):
                for k,v in value.items():
                    if k in ('src','poster'): yield v
                    else: yield from assets(v)
            elif isinstance(value,list):
                for v in value: yield from assets(v)
        for entry in manifest['readings']:
            path=ROOT/'site'/entry['reader'];data=json.loads(path.read_text())
            self.assertEqual(data['slug'],entry['slug'])
            self.assertTrue(data['chapters']); self.assertTrue(data['disclaimer'])
            ids={s['id'] for s in data['sources']}
            for chapter in data['chapters']:
                self.assertTrue(set(chapter['sources'])<=ids)
                for block in chapter['blocks']:self.assertIn(block['type'],supported)
            for asset in assets(data):
                self.assertNotIn('..',Path(asset).parts)
                self.assertTrue((path.parent/asset).is_file(),asset)
    def test_no_parallel_reader_or_handmade_reading_card(self):
        index=(ROOT/'site/index.html').read_text()
        reading_branch=index.split('const readings = filtered();')[1].split('DISCOVERY.renderRecommendation()')[0]
        self.assertIn('readings.map(cardHtml)',reading_branch)
        self.assertNotIn('<a class="card',reading_branch)
        for html in (ROOT/'site/leitura').rglob('*.html'):
            text=html.read_text()
            self.assertNotIn('role="tablist"',text)
            self.assertIn('rel="canonical"',text)
    def test_registry_preserves_existing_skill_installation_data(self):
        script=r'''
const fs=require('fs'),vm=require('vm'),assert=require('assert');
const manifest=JSON.parse(fs.readFileSync('site/leitura/manifest.json'));
const context={window:{},fetch:async()=>({ok:true,json:async()=>manifest})};
vm.runInNewContext(fs.readFileSync('site/human-reader.js','utf8'),context);
(async()=>{
const reader=context.window.AgentFlixReader;
const original={name:'habitos-que-cabem',chat_cmd:'COMANDO OFICIAL',reading_only:false};
const all=await reader.catalogSkills([{name:'copy-metodo-hormozi'},original]);
assert.equal(all.length,2);assert.equal(all[1].chat_cmd,'COMANDO OFICIAL');assert.equal(all[1].reading_only,false);
assert(reader.supports('habitos-que-cabem'));assert(reader.supports('copy-metodo-hormozi'));
assert(!reader.supports('constructor'));
const fallback=await reader.catalogSkills([{name:'copy-metodo-hormozi'}]);
assert.equal(fallback.length,2);assert(fallback[1].reading_only);assert(fallback[1].chat_cmd);
})().catch(e=>{console.error(e);process.exitCode=1});
'''
        subprocess.run(['node','-e',script],cwd=ROOT,check=True,capture_output=True,text=True)
