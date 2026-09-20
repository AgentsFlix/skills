const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const baselineUrl = process.env.AF_BASELINE_URL || 'http://127.0.0.1:8846/aprofundamento-humano/';
const candidateUrl = process.env.AF_CANDIDATE_URL || 'http://127.0.0.1:8847/aprofundamento-humano/';
const evidenceDir = __dirname;
const viewports = [
  { name: '1440', width: 1440, height: 1000 },
  { name: '768', width: 768, height: 1024 },
  { name: '390', width: 390, height: 844 },
];
const titles = ['Perfil DISC', 'Modos de aprendizagem', 'Modo de agir', 'Big Five', 'Eneagrama', 'Preferências de Jung'];

function observe(page, report) {
  page.on('pageerror', error => report.pageErrors.push(error.message));
  page.on('requestfailed', request => report.failedRequests.push({ url: request.url(), reason: request.failure()?.errorText || 'unknown' }));
  page.on('response', response => { if (response.status() >= 400) report.httpErrors.push({ url: response.url(), status: response.status() }); });
}

async function settle(page) {
  await page.waitForLoadState('domcontentloaded');
  await page.waitForTimeout(250);
}

(async () => {
  const browser = await chromium.launch({ headless: true });
  const report = { generatedAt: new Date().toISOString(), baselineUrl, candidateUrl, viewports: {}, pageErrors: [], failedRequests: [], httpErrors: [] };
  try {
    for (const viewport of viewports) {
      const context = await browser.newContext({ viewport: { width: viewport.width, height: viewport.height } });
      const before = await context.newPage();
      observe(before, report);
      await before.goto(baselineUrl + '#catalogo');
      await settle(before);
      await before.locator('#catalogo').screenshot({ path: path.join(evidenceDir, `before-${viewport.name}.png`), animations: 'disabled' });
      const after = await context.newPage();
      observe(after, report);
      await after.goto(candidateUrl + '#catalogo');
      await settle(after);
      await after.locator('#catalogo').screenshot({ path: path.join(evidenceDir, `after-${viewport.name}-disc.png`), animations: 'disabled' });
      await after.locator('#catalog-choice-3').click();
      await after.locator('#catalogo').screenshot({ path: path.join(evidenceDir, `after-${viewport.name}-big-five.png`), animations: 'disabled' });
      report.viewports[viewport.name] = await after.evaluate(() => ({
        overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
        images: [...document.querySelectorAll('[data-card] img')].map(image => ({ src: image.getAttribute('src'), alt: image.alt, complete: image.complete, width: image.naturalWidth, height: image.naturalHeight })),
      }));
      await context.close();
    }
    const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
    const page = await context.newPage();
    observe(page, report);
    await page.goto(candidateUrl + '#catalogo');
    await settle(page);
    report.cards = [];
    for (let index = 0; index < titles.length; index += 1) {
      await page.locator(`#catalog-choice-${index}`).click();
      const front = page.locator('[data-position="front"]');
      report.cards.push({ title: await front.locator('h3').innerText(), src: await front.locator('img').getAttribute('src'), alt: await front.locator('img').getAttribute('alt') });
    }
    await context.close();
    const failures = [];
    for (const [viewport, result] of Object.entries(report.viewports)) {
      if (result.overflow || result.images.length !== 6) failures.push(`${viewport}: composição inválida`);
      result.images.forEach(image => {
        if (!image.src?.startsWith('assets/') || !image.alt || !image.complete || image.width < 1000 || image.height < 650) failures.push(`${viewport}: arte inválida`);
      });
    }
    if (new Set(report.cards.map(card => card.src)).size !== 6) failures.push('artes repetidas');
    report.cards.forEach((card, index) => { if (card.title.trim() !== titles[index] || !card.alt) failures.push(`card ${index + 1}: arte incorreta`); });
    if (report.pageErrors.length || report.failedRequests.length || report.httpErrors.length) failures.push('diagnóstico do navegador');
    report.failures = failures;
    report.passed = failures.length === 0;
    fs.writeFileSync(path.join(evidenceDir, 'results.json'), JSON.stringify(report, null, 2) + '\n');
    console.log(JSON.stringify({ passed: report.passed, failures, screenshots: fs.readdirSync(evidenceDir).filter(name => name.endsWith('.png')).length }, null, 2));
    if (!report.passed) process.exitCode = 1;
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exit(1); });
