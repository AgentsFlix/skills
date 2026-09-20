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
  page.on('response', response => {
    if (response.status() >= 400) report.httpErrors.push({ url: response.url(), status: response.status() });
  });
  page.on('request', request => {
    if (/analytics|google-analytics|googletagmanager|segment|mixpanel|posthog/i.test(request.url())) report.analyticsRequests.push(request.url());
  });
}

async function settle(page) {
  await page.waitForLoadState('domcontentloaded');
  await page.waitForTimeout(250);
}

async function screenshot(page, name) {
  await page.locator('#catalogo').screenshot({ path: path.join(evidenceDir, name), animations: 'disabled' });
}

async function metrics(page) {
  return page.evaluate(() => {
    const visible = element => {
      const style = getComputedStyle(element);
      const rect = element.getBoundingClientRect();
      return style.display !== 'none' && style.visibility !== 'hidden' && rect.width > 0 && rect.height > 0;
    };
    const undersized = [...document.querySelectorAll('#catalogo a, #catalogo button')]
      .filter(visible)
      .map(element => {
        const rect = element.getBoundingClientRect();
        return { label: (element.getAttribute('aria-label') || element.textContent || '').trim(), width: Math.round(rect.width), height: Math.round(rect.height) };
      })
      .filter(item => item.width < 44 || item.height < 44);
    const stage = document.querySelector('[data-catalog-stage]').getBoundingClientRect();
    const front = document.querySelector('[data-position="front"]').getBoundingClientRect();
    return {
      horizontalOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
      undersized,
      stageContainsFront: front.bottom <= stage.bottom + 1,
      cards: document.querySelectorAll('[data-card]').length,
      visibleCards: [...document.querySelectorAll('[data-card]')].filter(visible).length,
      visibleActions: [...document.querySelectorAll('[data-card] a')].filter(visible).length,
      activeTitle: document.querySelector('[data-position="front"] h3')?.textContent.trim(),
      position: document.querySelector('#catalog-position')?.textContent.trim(),
      localStorageKeys: Object.keys(localStorage),
      sharedToken: getComputedStyle(document.documentElement).getPropertyValue('--af-bg').trim(),
    };
  });
}

async function allCards(page) {
  const states = [];
  for (let index = 0; index < titles.length; index += 1) {
    await page.locator(`#catalog-choice-${index}`).click();
    states.push({
      active: await page.locator('[data-position="front"] h3').innerText(),
      position: await page.locator('#catalog-position').innerText(),
      visibleActions: await page.locator('[data-card] a').evaluateAll(elements => elements.filter(element => {
        const style = getComputedStyle(element);
        const rect = element.getBoundingClientRect();
        return style.visibility !== 'hidden' && style.display !== 'none' && rect.width > 0 && rect.height > 0;
      }).length),
    });
  }
  return states;
}

(async () => {
  const browser = await chromium.launch({ headless: true });
  const report = {
    generatedAt: new Date().toISOString(), baselineUrl, candidateUrl, viewports: {},
    pageErrors: [], failedRequests: [], httpErrors: [], analyticsRequests: [],
  };
  try {
    for (const viewport of viewports) {
      const context = await browser.newContext({ viewport: { width: viewport.width, height: viewport.height } });
      const baseline = await context.newPage();
      observe(baseline, report);
      await baseline.goto(baselineUrl + '#catalogo');
      await settle(baseline);
      await screenshot(baseline, `before-${viewport.name}-catalog.png`);

      const candidate = await context.newPage();
      observe(candidate, report);
      await candidate.goto(candidateUrl + '#catalogo');
      await settle(candidate);
      report.viewports[viewport.name] = await metrics(candidate);
      await screenshot(candidate, `after-${viewport.name}-disc.png`);
      await candidate.locator('#catalog-choice-3').click();
      await screenshot(candidate, `after-${viewport.name}-big-five.png`);
      await context.close();
    }

    const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
    const page = await context.newPage();
    observe(page, report);
    await page.goto(candidateUrl + '#catalogo');
    await settle(page);
    report.allCards = await allCards(page);
    await page.locator('#catalog-choice-0').click();
    await page.locator('#catalog-choice-0').press('ArrowRight');
    report.afterRight = { title: await page.locator('[data-position="front"] h3').innerText(), focus: await page.evaluate(() => document.activeElement?.id) };
    await page.locator('#catalog-choice-1').press('End');
    report.afterEnd = { title: await page.locator('[data-position="front"] h3').innerText(), focus: await page.evaluate(() => document.activeElement?.id) };
    await page.locator('#catalog-choice-5').press('Home');
    report.afterHome = { title: await page.locator('[data-position="front"] h3').innerText(), focus: await page.evaluate(() => document.activeElement?.id) };
    await page.locator('.af-spatial-preview[aria-label*="Modos de aprendizagem"]').click();
    report.sideCard = { title: await page.locator('[data-position="front"] h3').innerText(), focus: await page.evaluate(() => document.activeElement?.id) };
    await page.goto(candidateUrl + '#big-five');
    await settle(page);
    report.hashRoute = { title: await page.locator('[data-position="front"] h3').innerText(), hubVisible: await page.locator('#assessment-hub').isVisible() };
    await context.close();

    const reducedContext = await browser.newContext({ viewport: { width: 390, height: 844 }, reducedMotion: 'reduce' });
    const reduced = await reducedContext.newPage();
    observe(reduced, report);
    await reduced.goto(candidateUrl + '#catalogo');
    await settle(reduced);
    report.reducedMotion = await reduced.locator('[data-position="front"]').evaluate(element => getComputedStyle(element).transitionDuration);
    await reducedContext.close();

    const failures = [];
    for (const [name, result] of Object.entries(report.viewports)) {
      if (result.horizontalOverflow) failures.push(`${name}: overflow horizontal`);
      if (result.undersized.length) failures.push(`${name}: alvos menores que 44px`);
      if (!result.stageContainsFront) failures.push(`${name}: card ultrapassa o palco`);
      if (result.cards !== 6 || result.visibleCards !== 3) failures.push(`${name}: coleção espacial incompleta`);
      if (result.visibleActions !== 1) failures.push(`${name}: quantidade incorreta de CTAs visíveis`);
      if (!result.sharedToken) failures.push(`${name}: tokens compartilhados ausentes`);
      if (result.localStorageKeys.length) failures.push(`${name}: catálogo escreveu no localStorage`);
    }
    report.allCards.forEach((state, index) => {
      if (state.active.trim() !== titles[index] || state.position !== `${index + 1} de 6` || state.visibleActions !== 1) failures.push(`card ${index + 1}: estado incorreto`);
    });
    if (report.afterRight.title.trim() !== titles[1] || report.afterRight.focus !== 'catalog-choice-1') failures.push('teclado: ArrowRight');
    if (report.afterEnd.title.trim() !== titles[5] || report.afterEnd.focus !== 'catalog-choice-5') failures.push('teclado: End');
    if (report.afterHome.title.trim() !== titles[0] || report.afterHome.focus !== 'catalog-choice-0') failures.push('teclado: Home');
    if (report.sideCard.title.trim() !== titles[1] || report.sideCard.focus !== 'catalog-open-1') failures.push('seleção por card lateral');
    if (report.hashRoute.title.trim() !== titles[3] || !report.hashRoute.hubVisible) failures.push('rota por hash');
    if (report.reducedMotion !== '0s') failures.push('movimento reduzido');
    if (report.pageErrors.length || report.failedRequests.length || report.httpErrors.length || report.analyticsRequests.length) failures.push('diagnóstico do navegador');

    report.failures = failures;
    report.passed = failures.length === 0;
    fs.writeFileSync(path.join(evidenceDir, 'results.json'), JSON.stringify(report, null, 2) + '\n');
    console.log(JSON.stringify({ passed: report.passed, failures, screenshots: fs.readdirSync(evidenceDir).filter(file => file.endsWith('.png')).length }, null, 2));
    if (!report.passed) process.exitCode = 1;
  } finally {
    await browser.close();
  }
})().catch(error => {
  console.error(error);
  process.exit(1);
});
