// Chrome real: NODE_PATH apontando para playwright-core; QA_BASE serve site/ e catalog.json.
// QA_OUT fica fora do checkout por padrão. Não dispensa teste em aparelhos físicos.
const {chromium} = require('playwright-core');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const base = process.env.QA_BASE || 'http://127.0.0.1:8772';
const out = process.env.QA_OUT || fs.mkdtempSync(path.join(os.tmpdir(), 'agentflix-mobile-'));
const repo = path.resolve(__dirname, '..');
const series = JSON.parse(fs.readFileSync(path.join(repo, 'site/assistir/series.json'))).series.find(s => s.slug === 'hermes-agent');
const commandEpisode = series.seasons.find(s => s.n === 3).eps[2];
const commandCue = commandEpisode.ch.find(ch => ch.acao?.tipo === 'comando');
fs.mkdirSync(out, {recursive: true});

async function enter(page, door = 'guia') {
  await page.goto(base + '/');
  await page.waitForSelector('[data-door]');
  assert(await page.locator('#catalog-stage').isHidden());
  await page.locator(`[data-door="${door}"]`).click();
  await page.locator('[data-door-continue]').click();
  for (let n = 0; n < 10 && await page.locator('[data-answer-continue]').count(); n++) {
    await page.locator('[data-option="0"]').click();
    await page.locator('[data-answer-continue]').click();
  }
  await page.locator('[data-enter-selection]').click();
  assert.equal(new URL(page.url()).hash, '#inicio');
  assert(await page.locator('#recommendation').isVisible());
}

async function noOverflow(page) {
  assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), 'página sem overflow horizontal');
}

(async () => {
  const browser = await chromium.launch({
    executablePath: process.env.CHROME_FULL || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: true,
    args: ['--mute-audio']
  });
  const report = [];
  try {
    for (const [width, height] of [[320,740], [360,800], [390,844], [430,932], [768,1000], [1440,1000], [844,390], [390,400]]) {
      const context = await browser.newContext({viewport: {width,height}, hasTouch: width < 900, isMobile: width < 600});
      await context.addInitScript(() => {
        localStorage.setItem('agentflix-consent', 'denied');
        sessionStorage.setItem('agentflix-intro-seen', '1');
      });
      await context.route(/clarity\.ms/, r => r.fulfill({status:200,body:''}));
      const page = await context.newPage();
      page.setDefaultTimeout(15000);
      const errors = [];
      page.on('pageerror', e => errors.push(e.message));
      await enter(page);
      await page.evaluate(() => document.fonts.ready);
      const targets = await page.locator('nav.main a').evaluateAll(links => links.map(a => {
        const r = a.getBoundingClientRect(); return {text:a.textContent,width:r.width,height:r.height};
      }));
      assert(targets.every(r => r.width >= 44 && r.height >= 44), JSON.stringify(targets));
      await noOverflow(page);
      await page.screenshot({path:path.join(out,`${width}x${height}-inicio.png`)});
      await page.locator('[data-act="search"]').click();
      await page.locator('#q').fill('hormozi');
      const search = await page.locator('#q').evaluate(e => ({height:e.getBoundingClientRect().height,font:parseFloat(getComputedStyle(e).fontSize)}));
      assert(search.height >= 44 && search.font >= 16);
      await noOverflow(page);
      await page.screenshot({path:path.join(out,`${width}x${height}-busca.png`)});
      await page.locator('#q').fill('');
      await page.locator('[data-discover-reading]').click();
      await page.locator('#results .card[data-slug="copy-metodo-hormozi"]').click();
      await page.waitForSelector('#hr-chapter-title');
      await page.locator('#hr-reading-toggle').click();
      await page.locator('[data-reading-theme="paper"]').click();
      await page.locator('#hr-text-larger').click();
      await page.locator('#hr-reading-dismiss').click();
      await noOverflow(page);
      await page.keyboard.press('Escape');
      assert(await page.locator('#modal').isHidden());
      assert.equal(new URL(page.url()).hash, '#ler');

      await page.goto(base + '/assistir/?s=hermes-agent#t3e3');
      await page.waitForSelector('.pre-card');
      await page.evaluate(() => document.fonts.ready);
      const bounds = await page.locator('.pre-card').evaluate(card => {
        const r=card.getBoundingClientRect(), back=document.querySelector('#player .back').getBoundingClientRect();
        return {top:r.top,bottom:r.bottom,backBottom:back.bottom,height:innerHeight,scrollHeight:card.scrollHeight,clientHeight:card.clientHeight};
      });
      assert(bounds.top >= bounds.backBottom + 8, JSON.stringify(bounds));
      assert(bounds.bottom <= bounds.height, JSON.stringify(bounds));
      await page.screenshot({path:path.join(out,`${width}x${height}-preplay.png`)});
      // O começo da lista e a ação são alcançáveis, inclusive em paisagem e altura reduzida.
      await page.locator('.pre-card .k').scrollIntoViewIfNeeded();
      assert(await page.locator('.pre-card .k').evaluate(e => e.getBoundingClientRect().top >= 0));
      await page.locator('[data-act="pre-go"]').scrollIntoViewIfNeeded();
      assert(await page.locator('[data-act="pre-go"]').evaluate(e => {
        const r=e.getBoundingClientRect();return r.top >= 0 && r.bottom <= innerHeight && e.contains(document.elementFromPoint(r.x+r.width/2,r.y+r.height/2));
      }));
      await page.screenshot({path:path.join(out,`${width}x${height}-preplay-acao.png`)});
      await page.locator('#player .back').click();
      assert(await page.locator('#player').isHidden());
      assert.deepEqual(errors, []);
      report.push({width,height,targets,search,bounds,reading:true,back:true,overflow:false});
      await context.close();
    }

    // Um ciclo com mídia real após rolar o pré-play. Clipboard instrumentado, sem executar comandos.
    const context=await browser.newContext({viewport:{width:844,height:390},hasTouch:true});
    await context.addInitScript(() => {
      localStorage.setItem('agentflix-consent','denied');
      window.__copied=[];
      Object.defineProperty(navigator,'clipboard',{value:{writeText:async text=>window.__copied.push(text)}});
    });
    await context.route(/clarity\.ms/,r=>r.fulfill({status:200,body:''}));
    const page=await context.newPage();
    await page.goto(base+'/assistir/?s=hermes-agent#t3e3');
    await page.locator('[data-act="pre-go"]').click();
    await page.waitForFunction(()=>document.getElementById('video').readyState>=3 && !document.getElementById('video').paused, null, {timeout:45000});
    await page.evaluate(t=>document.getElementById('video').currentTime=t,commandCue.t+.1);
    await page.waitForSelector('#player.checkout');
    assert(await page.locator('#video').evaluate(v=>v.paused));
    await page.locator('[data-act="copiar-prompt"]').click();
    assert.equal(await page.evaluate(()=>window.__copied.at(-1)),commandCue.acao.texto);
    assert(await page.locator('#video').evaluate(v=>v.paused));
    await page.locator('[data-act="checkout-continuar"]').click();
    await page.waitForFunction(()=>!document.getElementById('video').paused);
    await page.setViewportSize({width:390,height:844});
    await noOverflow(page);
    await page.locator('#player .back').click();
    assert(await page.locator('#player').isHidden());
    report.push({realVideo:true,preplayScrolled:true,commandUnchanged:true,copyKeepsPause:true,explicitContinue:true,rotation:true});
    await context.close();
    fs.writeFileSync(path.join(out,'qa.json'),JSON.stringify({base,report},null,2));
    console.log('PASS: mobile journeys; '+report.length+' cases; '+out);
  } finally { await browser.close(); }
})().catch(e=>{console.error(e);process.exit(1)});
