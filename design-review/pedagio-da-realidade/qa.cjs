// Local rendered QA only. No account, installation, publication or source mutation.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const crypto = require('node:crypto');
const cp = require('node:child_process');
const { chromium } = require('playwright');
const repo = path.resolve(__dirname, '../..');
const site = path.join(repo, 'site');
const slug = 'pedagio-da-realidade';
const baselineSha = cp.execFileSync('git', ['rev-parse', 'origin/main'], { cwd: repo, encoding: 'utf8' }).trim();
const testedHead = cp.execFileSync('git', ['rev-parse', 'HEAD'], { cwd: repo, encoding: 'utf8' }).trim();
const before = Object.fromEntries(['catalog.json', 'site/vitrine.json'].map(file => [file, cp.execFileSync('git', ['show', `origin/main:${file}`], { cwd: repo, encoding: 'utf8' })]));
const after = fs.readFileSync(path.join(repo, 'catalog.json'), 'utf8');
const entry = JSON.parse(after).skills.find(s => s.name === slug);
const zip = fs.readFileSync(path.join(repo, `docs/packages/${slug}.zip`));
const promptBytes = fs.readFileSync(path.join(repo, `docs/prompt/${slug}.md`));
const currentVitrine = fs.readFileSync(path.join(site, 'vitrine.json'));
const sha256 = bytes => crypto.createHash('sha256').update(bytes).digest('hex');
const checks = [];
const files = [];
const mime = {'.html':'text/html','.js':'application/javascript','.css':'text/css','.json':'application/json','.svg':'image/svg+xml','.webp':'image/webp','.jpg':'image/jpeg','.png':'image/png','.woff2':'font/woff2','.mp4':'video/mp4','.mp3':'audio/mpeg','.md':'text/markdown'};
const server = http.createServer((req, res) => {
  const pathname = decodeURIComponent(new URL(req.url, 'http://local').pathname);
  if (pathname === '/api/config') { res.writeHead(200, {'Content-Type':'application/json'}); res.end('{"storeEnabled":false}'); return; }
  if (pathname === `/prompt/${slug}.md`) { res.writeHead(200, {'Content-Type':'text/markdown'}); res.end(promptBytes); return; }
  if (pathname === '/vitrine.json') { res.writeHead(200, {'Content-Type':'application/json'}); res.end(currentVitrine); return; }
  const resource = pathname.startsWith('/prompt/') ? path.join(repo, 'docs', pathname) : path.join(site, pathname);
  let target = resource;
  if (fs.existsSync(target) && fs.statSync(target).isDirectory()) target = path.join(target, 'index.html');
  if (!target.startsWith(repo + path.sep) || !fs.existsSync(target) || !fs.statSync(target).isFile()) { res.writeHead(404); res.end('Not found'); return; }
  res.writeHead(200, {'Content-Type':mime[path.extname(target)] || 'application/octet-stream', 'Cache-Control':'no-store'});
  fs.createReadStream(target).pipe(res);
});
function record(name, data) { checks.push({name, ...data}); console.log(name, JSON.stringify(data)); }
async function screenshot(page, name) {
  await page.screenshot({path:path.join(__dirname,name), fullPage:false, animations:'disabled'});
  files.push(name);
}
async function settle(page) {
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(350);
}
async function onboarding(page) {
  await page.locator('[data-door="avulsa"]').waitFor({state:'visible'});
  if (await page.locator('[data-consent="denied"]').isVisible()) await page.locator('[data-consent="denied"]').click();
  await page.locator('[data-door="avulsa"]').click();
  await page.locator('[data-door-continue]').click();
  await page.locator('[data-option="4"]').click();
  await page.locator('[data-answer-continue]').click();
  await page.locator('[data-enter-selection]').click();
  await page.locator('#catalog-stage').waitFor({state:'visible'});
  assert.equal(await page.locator('#discovery').isVisible(), false);
  return page.evaluate(() => JSON.parse(sessionStorage.getItem('agentflix-visit-v1')));
}
async function search(page) {
  if (!await page.locator('#q').isVisible()) await page.locator('[data-act="search"]').click();
  await page.locator('#q').fill('Pedágio da Realidade');
  await page.locator('#results').waitFor({state:'visible'});
  await settle(page);
}
async function dimensions(page) {
  return page.evaluate(() => ({width:innerWidth, documentWidth:document.documentElement.scrollWidth,
    modalPanelWidth:document.querySelector('#modal .panel')?.getBoundingClientRect().width || null,
    modalPanelScrollWidth:document.querySelector('#modal .panel')?.scrollWidth || null,
    modalText:document.querySelector('#modal .tinfo h3')?.textContent || null}));
}
(async () => {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const base = `http://127.0.0.1:${server.address().port}`;
  const browser = await chromium.launch({headless:true});
  try {
    for (const [width, height] of [[1440,1000],[768,1024],[390,844]]) {
      for (const mode of ['before','after']) {
        const context = await browser.newContext({viewport:{width,height},locale:'pt-BR',reducedMotion:'reduce',permissions:['clipboard-read','clipboard-write'],acceptDownloads:true});
        const errors = [], coverResults = [];
        await context.route('**/catalog.json', route => route.fulfill({status:200,contentType:'application/json',body:mode === 'before' ? before['catalog.json'] : after}));
        if (mode === 'before') await context.route('**/vitrine.json', route => route.fulfill({status:200,contentType:'application/json',body:before['site/vitrine.json']}));
        await context.route(/clarity\.ms|google-analytics\.com|supabase\.co\//, route => route.abort());
        // The public tag does not exist yet. Exercise the download using the exact
        // generated ZIP at the catalog URL, and record this fixture explicitly.
        await context.route(entry.zip_url, route => route.fulfill({status:200,body:zip,contentType:'application/zip',headers:{'Content-Disposition':`attachment; filename="${slug}.zip"`}}));
        const page = await context.newPage();
        page.on('pageerror', e => errors.push(e.message));
        page.on('console', msg => {if (msg.type() === 'error' && !msg.text().startsWith('Failed to load resource:')) errors.push(msg.text());});
        page.on('response', response => {if(response.url().includes(`covers/${slug}`)) coverResults.push({url:response.url(),status:response.status()});});
        await page.goto(base, {waitUntil:'domcontentloaded'});
        const visit = await onboarding(page);
        record(`${mode}-${width}-onboarding`, {kind:visit.kind,answers:visit.answers,completed:visit.completed,goal:visit.goal,syntheticChoices:true,stateInjected:false});
        await search(page);
        const card = page.locator(`#results .card[data-slug="${slug}"]`);
        if (mode === 'before') {
          assert.equal(await card.count(),0);
          await page.locator('#results').scrollIntoViewIfNeeded();
          await screenshot(page,`before-search-${width}.png`);
          record(`before-${width}-absent`,{cardCount:0,errors});
          await context.close();
          continue;
        }
        await card.waitFor({state:'visible'});
        await card.scrollIntoViewIfNeeded();
        await page.waitForFunction(slug => !document.querySelector(`#results .card[data-slug="${slug}"] img`),slug);
        assert.equal(await card.locator('.journey-info h3').textContent(),entry.title);
        assert.equal(await card.locator('.art').evaluate(el => el.classList.contains('has-cover')),false);
        await screenshot(page,`after-card-${width}.png`);
        const cardBox = await dimensions(page);
        assert.ok(cardBox.documentWidth <= width + 1, JSON.stringify(cardBox));
        await card.focus(); await page.keyboard.press('Enter');
        await page.locator('#modal [role="dialog"]').waitFor({state:'visible'});
        await page.waitForFunction(() => !document.querySelector('#modal .top img'));
        assert.equal(await page.locator('#modal .tinfo h3').textContent(),entry.title);
        assert.equal(await page.locator('#skill-syn').textContent(),entry.painel.sinopse);
        await screenshot(page,`after-modal-${width}.png`);
        const modalBox = await dimensions(page);
        assert.ok(modalBox.documentWidth <= width + 1,JSON.stringify(modalBox));
        assert.ok(modalBox.modalPanelWidth <= width,JSON.stringify(modalBox));
        const targetFields = {'Hermes CLI':'install_cmd','Hermes chat':'chat_cmd','Codex':'npx_codex','Claude Code':'npx_claude_code','Outros agentes':'npx_any','Claude.ai':'zip_url','ChatGPT':'zip_url'};
        const targetChecks = [];
        for (const [target,field] of Object.entries(targetFields)) {
          await page.locator('#install-target').selectOption(target);
          const box = page.locator('#modal .install .cmdbox');
          const command = await box.getAttribute('data-text');
          assert.equal(command,entry[field],target);
          await box.click();
          await page.waitForFunction(value => navigator.clipboard.readText().then(text => text === value), command);
          targetChecks.push({target,field,literalMatch:true,clipboardMatch:true});
        }
        await page.locator('#install-target').selectOption('ChatGPT Project');
        const promptLink = page.locator('#modal .install a').filter({hasText:'Abrir colável'});
        const promptHref = await promptLink.getAttribute('href');
        assert.equal(promptHref,`${base}/prompt/${slug}.md`);
        const promptResponse = await context.request.get(promptHref);
        assert.equal(promptResponse.status(),200);
        assert.ok((await promptResponse.text()).includes('Pedágio da Realidade'));
        await page.locator('#install-target').selectOption('Codex');
        await page.locator('#modal .install').scrollIntoViewIfNeeded();
        await screenshot(page,`after-command-${width}.png`);
        await page.locator('#install-target').selectOption('Claude.ai');
        const downloadLink = page.locator('#modal .install a').filter({hasText:'Baixar'});
        assert.equal(await downloadLink.getAttribute('href'),entry.zip_url);
        const pendingDownload = page.waitForEvent('download');
        await downloadLink.click();
        const download = await pendingDownload;
        const downloadedBytes = fs.readFileSync(await download.path());
        assert.equal(sha256(downloadedBytes),sha256(zip));
        await page.keyboard.press('Escape');
        await page.locator('#modal').waitFor({state:'hidden'});
        const focusAfterClose = await page.evaluate(() => document.activeElement?.getAttribute('data-slug'));
        assert.equal(focusAfterClose,slug);
        await page.goto(`${base}/?destaque=${slug}`,{waitUntil:'domcontentloaded'});
        await page.locator('#hero h1').waitFor({state:'visible'});
        await page.waitForFunction(() => !document.querySelector('#hero img'));
        assert.equal(await page.locator('#hero h1').textContent(),entry.title);
        await page.locator('#hero').scrollIntoViewIfNeeded();
        await settle(page);
        await screenshot(page,`after-highlight-${width}.png`);
        const heroBox = await dimensions(page);
        assert.ok(heroBox.documentWidth <= width + 1,JSON.stringify(heroBox));
        await page.locator(`#hero [data-act="open"][data-slug="${slug}"]`).click();
        await page.locator('#modal [role="dialog"]').waitFor({state:'visible'});
        assert.equal(new URL(page.url()).hash,`#${slug}`);
        assert.equal(errors.length,0,errors.join('\n'));
        record(`after-${width}-rendered`,{errors,coverResults,cardBox,modalBox,heroBox,keyboardOpen:true,escapeFocusRestored:true,targets:targetChecks,promptLocal200:true,download:{fixture:'local generated artifact at catalog URL; public tag verification pending',sha256:sha256(zip),bytes:zip.length},fallback:'native gradient and text after image loading fails; remote cover URLs returned HTTP 403 in separate request',reducedMotion:true});
        await context.close();
      }
    }
    fs.writeFileSync(path.join(__dirname,'result.json'),JSON.stringify({status:'passed',baselineSha,testedHead,inputHashes:{catalog:sha256(after),vitrine:sha256(currentVitrine),prompt:sha256(promptBytes)},packageVersion:entry.version,distributionRef:entry.distribution_ref,packageSha256:sha256(zip),checks,captures:files,limitations:['Local browser QA; production and public tag not verified here.','Guest /api/config fixture disables store and account access.','Onboarding completed by actual controls with synthetic choices; no saved completion injected.','Download intercepted to exact local generated ZIP because publication is pending.','No skill installation or execution.','Existing legacy shell preserved; screenshots do not certify complete accessibility.']},null,2)+'\n');
    fs.rmSync(path.join(__dirname,'failure.json'), {force:true});
  } finally {await browser.close();server.close();}
})().catch(error => {fs.writeFileSync(path.join(__dirname,'failure.json'),JSON.stringify({error:error.stack,checks,captures:files},null,2)+'\n');console.error(error);server.close();process.exitCode=1;});
