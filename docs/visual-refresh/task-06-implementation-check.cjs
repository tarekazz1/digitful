// Usage: node task-06-implementation-check.cjs <base URL|local> <evidence directory>
// Uses existing Playwright tooling; no framework or dependency changes.
const fs = require('node:fs'), path = require('node:path'), http = require('node:http');
const { pathToFileURL } = require('node:url');
const { chromium } = require(process.env.TASK06_PLAYWRIGHT || 'C:/Users/tarek.azzi/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const repo = path.resolve(__dirname, '../..'), output = path.resolve(process.argv[3]);
const proposal = path.join(repo, 'docs/visual-refresh/mockups/task-06-finger-reminder-trial.html');
const normalize = text => text.replace(/\s+/g, ' ').trim();
const mime = { '.html':'text/html', '.css':'text/css', '.js':'text/javascript', '.svg':'image/svg+xml', '.webp':'image/webp', '.woff2':'font/woff2', '.png':'image/png' };
let server, browser;
(async () => {
  fs.mkdirSync(output, { recursive: true });
  let base = process.argv[2];
  if (base === 'local') {
    const dist = path.join(repo, 'dist');
    server = http.createServer((req, res) => {
      let route = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
      if (route.endsWith('/')) route += 'index.html';
      const file = path.resolve(dist, '.' + route);
      if (!file.startsWith(dist + path.sep)) { res.writeHead(403).end(); return; }
      try {
        let data = fs.readFileSync(file); res.setHeader('Content-Type', mime[path.extname(file)] || 'application/octet-stream');
        if (file.endsWith('.html')) data = data.toString().replace(/<(script|noscript)\b[^>]*>[\s\S]*?<\/\1>/gi, block => block.includes('GTM-53THDCJH') ? '' : block);
        res.end(data);
      } catch { res.writeHead(404).end('Not found'); }
    });
    await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
    base = 'http://127.0.0.1:' + server.address().port;
  }
  browser = await chromium.launch({ headless: true, executablePath: process.env.TASK06_CHROMIUM || 'C:/Users/tarek.azzi/AppData/Local/ms-playwright/chromium_headless_shell-1243/chrome-headless-shell-win64/chrome-headless-shell.exe' });
  const oracle = await browser.newPage();
  await oracle.goto(pathToFileURL(proposal).href); await oracle.evaluate(() => document.fonts.ready);
  const copySelector = 'main h1,main h2,main h3,main p,main figcaption,main svg text,main .step-number,main .auto-cta';
  const expectedCopy = JSON.stringify((await oracle.locator(copySelector).allTextContents()).map(normalize)); await oracle.close();
  const checks = [];
  for (const width of [320,390,768,1024,1440]) for (const theme of ['light','dark']) {
    const context = await browser.newContext({ viewport: { width, height: 900 }, deviceScaleFactor: 1 });
    await context.addInitScript(t => localStorage.setItem('digitful-theme', t), theme);
    const page = await context.newPage(), errors = [];
    page.on('pageerror', e => errors.push(e.message));
    page.on('console', m => { if (['error','warning'].includes(m.type())) errors.push(m.text()); });
    page.on('response', r => { if (r.status() >= 400) errors.push(r.status() + ' ' + r.url()); });
    await page.goto(base + '/automation/', { waitUntil: 'networkidle' });
    await page.evaluate(async () => {
      await document.fonts.ready; document.documentElement.style.scrollBehavior = 'auto';
      for (let y = 0; y < document.body.scrollHeight; y += 500) { scrollTo(0,y); await new Promise(r => requestAnimationFrame(r)); }
      await Promise.all([...document.images].map(i => i.decode())); scrollTo(0,0);
    });
    await page.waitForTimeout(350);
    const result = await page.evaluate(() => {
      const image = document.querySelector('.auto-hero-art img'), r = image.getBoundingClientRect(), copy = document.querySelector('.auto-hero-grid>div').getBoundingClientRect();
      return { theme:document.documentElement.dataset.theme, text:[...document.querySelectorAll('main h1,main h2,main h3,main p,main figcaption,main svg text,main .step-number,main .auto-cta')].map(e=>e.textContent),
        overflow:document.documentElement.scrollWidth-innerWidth, fonts:document.fonts.status,
        headingFont:getComputedStyle(document.querySelector('h1')).fontFamily, sections:document.querySelectorAll('main>section').length,
        rows:document.querySelectorAll('.service-row').length, oldFlow:document.querySelectorAll('.hero-flow,.timer').length,
        image:{loaded:image.complete&&image.naturalWidth>0,source:image.currentSrc,width:r.width,height:r.height},
        artworkOverlapsCopy:!(r.right<=copy.left||r.left>=copy.right||r.top>=copy.bottom||r.bottom<=copy.top),
        outside:[...document.querySelectorAll('main *')].filter(e=>{const b=e.getBoundingClientRect();return b.width>0&&(b.left<-.5||b.right>innerWidth+.5);}).map(e=>e.tagName),
        diagramLabels:[...document.querySelectorAll('.system-diagram text')].map(e=>({text:e.textContent,size:parseFloat(getComputedStyle(e).fontSize)*e.getScreenCTM().a})),
        ctas:[...document.querySelectorAll('main .auto-cta')].map(e=>({href:e.getAttribute('href'),border:getComputedStyle(e).borderWidth})),
        canonical:document.querySelector('link[rel="canonical"]').href, robots:[...document.querySelectorAll('meta[name="robots"]')].map(e=>e.content),
        productionGTM:document.documentElement.outerHTML.includes('GTM-53THDCJH'), guard:document.documentElement.outerHTML.includes('Preview site: form submission is disabled.') };
    });
    result.copyMatches = JSON.stringify(result.text.map(normalize)) === expectedCopy; delete result.text;
    await page.screenshot({ path:path.join(output,`automation-${width}-${theme}.png`), fullPage:true });
    if (width === 390 || width === 1440) {
      const clip = await page.locator('.auto-hero').evaluate(e=>{const b=e.getBoundingClientRect();return {x:b.x,y:b.y,width:b.width,height:b.height};});
      await page.screenshot({path:path.join(output,`hero-${width}-${theme}.png`),fullPage:true,clip});
      const menu = page.locator('.navbar-toggler');
      if (width === 390) { await menu.click(); await page.waitForTimeout(250); }
      await page.locator('[data-theme-toggle]').focus(); await page.keyboard.press('Enter'); await page.waitForTimeout(250);
      result.themeControl = await page.evaluate(t=>document.documentElement.dataset.theme!==t,theme);
      result.themeLabel = await page.locator('[data-theme-toggle]').getAttribute('aria-label');
      if (width === 390) { await menu.click(); result.menuCloses = await menu.getAttribute('aria-expanded') === 'false'; }
    }
    checks.push({width,...result,errors}); await context.close();
  }
  for (const route of ['/', '/social-media/', '/seo/', '/paid-ads/', '/blog/', '/contact/']) {
    const p = await browser.newPage({viewport:{width:390,height:900}});
    const response = await p.goto(base+route,{waitUntil:'networkidle'});
    checks.push({smoke:route,status:response.status(),overflow:await p.evaluate(()=>document.documentElement.scrollWidth-innerWidth)}); await p.close();
  }
  if (base.startsWith('https:')) { const p=await browser.newPage(); await p.goto(base+'/robots.txt'); checks.push({robotsTxt:await p.locator('body').innerText()}); await p.close(); }
  fs.writeFileSync(path.join(output,'checks.json'),JSON.stringify(checks,null,2));
  const failures=checks.filter(r=>r.errors?.length||r.overflow||r.outside?.length||r.copyMatches===false||r.artworkOverlapsCopy||r.image?.loaded===false||r.oldFlow||r.status>=400||r.themeControl===false);
  console.log(JSON.stringify({states:checks.filter(r=>r.width).length,failures},null,2)); if(failures.length)process.exitCode=1;
})().catch(e=>{console.error(e);process.exitCode=1;}).finally(async()=>{await browser?.close();if(server)await new Promise(r=>server.close(r));});
