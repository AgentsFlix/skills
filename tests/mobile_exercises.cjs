/* Chrome real. NODE_PATH deve apontar para playwright-core instalado no QA. */
'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {chromium} = require('playwright-core');
const base = (process.env.QA_BASE || 'http://127.0.0.1:8772').replace(/\/$/, '');
const out = process.env.QA_OUT || '/private/tmp/agentflix-mobile-exercises';
const exercises = [
  {name:'pratica', ids:['bell','chef','notebook','menu','recipe','table'], extra:'machine'},
  {name:'equipe', ids:['receive','serve','ticket','cook','payment','close'], extra:'all'},
  {name:'eugencia-pratica', ids:['message','person','editor','folder','create','send'], extra:'invent'}
];
const states = [];
(async () => {
  fs.mkdirSync(out, {recursive:true});
  const browser = await chromium.launch({executablePath:process.env.CHROME_FULL || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true});
  try {
    for (const viewport of [{width:320,height:740},{width:360,height:800},{width:390,height:844},{width:430,height:932},{width:768,height:1000},{width:1440,height:1000},{width:844,height:390},{width:390,height:400}]) {
      for (const exercise of exercises) {
        const context = await browser.newContext({viewport, hasTouch:true,isMobile:true,deviceScaleFactor:1,reducedMotion:'reduce'});
        const page = await context.newPage();
        const errors = [];
        page.on('pageerror',e=>errors.push(e.message));
        await page.clock.install();
        await page.goto(`${base}/assistir/hermes-em-operacao/t1e2/${exercise.name}.html?qa=1`);
        const picker = page.locator('.piece-picker');
        const slot = i => page.locator(`[data-slot="${i}"]`);
        const piece = id => page.locator(`[data-piece="${id}"]`);
        const count = () => page.locator('[data-remove]').count();
        const choose = async(id,i) => {
          await piece(id).tap();
          await page.locator(`[data-picker-slot="${i}"]`).tap();
          await picker.waitFor({state:'hidden'});
        };
        await piece(exercise.ids[0]).waitFor();
        assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'sem overflow horizontal');
        // Cancelar, Escape e foco conservam a resposta. A arte usa o mesmo arquivo.
        const sourceArt = await piece(exercise.ids[0]).locator('img').first().getAttribute('src');
        await piece(exercise.ids[0]).tap();
        assert.equal(await picker.locator('.piece-picker-selected img').getAttribute('src'),sourceArt);
        assert.equal(await picker.getAttribute('aria-labelledby'),'piece-picker-title');
        await page.keyboard.press('Escape');
        await picker.waitFor({state:'hidden'});
        assert.equal(await page.evaluate(()=>document.activeElement.dataset.piece),exercise.ids[0]);
        assert.equal(await count(),0);
        await piece(exercise.ids[0]).tap();
        await page.locator('[data-picker-cancel]').tap();
        assert.equal(await count(),0);
        // Destino primeiro, erro e nova tentativa.
        await slot(0).tap();
        await page.locator(`[data-picker-piece="${exercise.extra}"]`).tap();
        assert.equal(await count(),1);
        await page.locator('#check, #verify').tap();
        assert.match(await page.locator('#feedback').innerText(),/0 de 6/);
        await choose(exercise.ids[0],0);
        assert.equal(await piece(exercise.extra).count(),1,'substituída retorna à mesa');
        assert.equal(await count(),1);
        // Mover entre destinos e devolver sem duplicar uma peça.
        await slot(0).tap();
        assert(await page.locator('[data-picker-slot="0"]').isDisabled());
        await page.locator('[data-picker-slot="1"]').tap();
        assert.equal(await slot(0).getAttribute('draggable'),'false');
        assert.equal(await count(),1);
        await slot(1).tap();
        await page.locator('[data-picker-remove]').tap();
        assert.equal(await count(),0);
        assert.equal(await piece(exercise.ids[0]).count(),1);
        // Painel em alturas pequenas, rolagem, alvos e evidência visual.
        await piece(exercise.ids[0]).tap();
        const bounds=await picker.boundingBox();
        assert(bounds.x>=-1 && bounds.y>=-1 && bounds.x+bounds.width<=viewport.width+1 && bounds.y+bounds.height<=viewport.height+1,'painel cabe na tela');
        for(const button of await picker.locator('button').all()) assert((await button.boundingBox()).height>=44,'alvo mínimo de toque');
        if([1440,768,390].includes(viewport.width)&&viewport.height>400) await page.screenshot({path:path.join(out,`${exercise.name}-${viewport.width}-escolha.png`)});
        await page.locator('[data-picker-slot="5"]').tap();
        await slot(5).tap();
        await page.locator('[data-picker-remove]').tap();
        // Todas as respostas corretas ativam a mesma simulação.
        for(let i=0;i<6;i++) await choose(exercise.ids[i],i);
        if([1440,768,390].includes(viewport.width)&&viewport.height>400) {
          await page.locator('#puzzle, #assembly').scrollIntoViewIfNeeded();
          await page.screenshot({path:path.join(out,`${exercise.name}-${viewport.width}-depois.png`)});
        }
        if(exercise.name==='equipe') {
          for(const [i,value] of ['ticket','dish','bill'].entries()) await page.locator(`#bridge-${i}`).selectOption(value);
          await page.locator('#verify').tap();
          assert(await page.locator('#simulation').isVisible());
          for(let i=0;i<5;i++) await page.locator('#step').tap();
          await page.locator('#bulk').tap();
          await page.clock.runFor(20000);
          assert(await page.locator('#result').isVisible());
          await page.locator('#edit').tap();
          assert.equal(await count(),6,'reorganizar preserva respostas');
        } else {
          for(let round=1;round<=3;round++) {
            await page.locator('#check').tap();
            assert(await page.locator('#puzzle').isHidden());
            await page.clock.runFor(6700);
            if(round<3){await page.locator('#new-flow').tap();assert.equal(await count(),0);for(let i=0;i<6;i++)await choose(exercise.ids[i],i);}
          }
          assert(await page.locator('#complete').isVisible());
          await page.locator('#restart').tap();
          assert.equal(await count(),0,'reiniciar limpa respostas');
        }
        assert.deepEqual(errors,[]);
        states.push({exercise:exercise.name,...viewport,touch:true,passed:true});
        console.log(`OK toque ${exercise.name} ${viewport.width}x${viewport.height}`);
        await context.close();
      }
    }
    // Desktop: arraste real, devolução, clique e teclado continuam disponíveis.
    for(const exercise of exercises){
      const context=await browser.newContext({viewport:{width:1440,height:1000}});
      const page=await context.newPage();
      await page.goto(`${base}/assistir/hermes-em-operacao/t1e2/${exercise.name}.html?qa=1`);
      await page.evaluate(()=>Promise.all([...document.images].map(image=>image.decode().catch(()=>{}))));
      await page.locator(`[data-piece="${exercise.ids[0]}"]`).dragTo(page.locator('[data-slot="0"]'),{sourcePosition:{x:15,y:15}});
      assert.equal(await page.locator('[data-remove]').count(),1);
      await page.locator('[data-slot="0"]').dragTo(page.locator('#tray, #pieces'),{sourcePosition:{x:15,y:15}});
      assert.equal(await page.locator('[data-remove]').count(),0);
      await page.locator(`[data-piece="${exercise.ids[0]}"]`).focus();
      await page.keyboard.press('Enter');
      await page.locator('[data-slot="0"]').focus();
      await page.keyboard.press('Space');
      assert.equal(await page.locator('[data-remove]').count(),1);
      assert(await page.locator('.piece-picker').isHidden());
      // Teclado compacto: abrir, navegar, confirmar e retornar ao exercício.
      await page.setViewportSize({width:390,height:844});
      await page.locator(`[data-piece="${exercise.ids[1]}"]`).focus();
      await page.keyboard.press('Enter');
      assert(await page.locator('.piece-picker').isVisible());
      await page.keyboard.press('Tab');
      assert.equal(await page.evaluate(()=>document.activeElement.dataset.pickerSlot),'0');
      await page.keyboard.press('Tab');
      await page.keyboard.press('Enter');
      await page.locator('.piece-picker').waitFor({state:'hidden'});
      assert.equal(await page.locator('[data-remove]').count(),2);
      assert(await page.evaluate(()=>document.activeElement!==document.body));
      states.push({exercise:exercise.name,desktopDrag:true,keyboard:true,passed:true});
      await context.close();
    }
    fs.writeFileSync(path.join(out,'results.json'),JSON.stringify({base,states},null,2));
    console.log(`${states.length} cenários aprovados: toque, teclado, drag, correção, rodadas e reinício.`);
  } finally {await browser.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});
