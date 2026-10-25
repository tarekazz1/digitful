// Read-only acceptance checks. Usage: node task-10-implementation-check.cjs <source root> <evidence directory>
const fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
const {chromium} = require(process.env.TASK10_PLAYWRIGHT || 'C:/Users/tarek.azzi/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const [sourceRoot, evidence] = process.argv.slice(2), root = path.resolve(sourceRoot), output = path.resolve(evidence);
const clean = text => text.replace(/↗/g, '').replace(/\s+/g, ' ').trim();
const expected = clean(['About Digitful.', 'Digitful is a team with backgrounds in agency work, in-house marketing, and technical operations.', 'We work across social media, SEO, paid ads, and process automation. That mix of experience helps us consider both what customers see and the work a business needs behind the scenes.', 'Talk to Digitful →'].join(' '));
const description = 'Meet Digitful, a team with backgrounds in agency work, in-house marketing, and technical operations.';
const targets = ['/contact/'];
const base = process.env.TASK10_BASE || 'http://task10.local';
const states = [], focus = [], navigation = [], errors = [], blocked = [], links = [];
async function contrast(page) {
  return page.evaluate(() => {
    const rgb = value => value.match(/[\d.]+/g).map(Number);
    const lum = c => c.slice(0, 3).map(v => (v /= 255) <= .04045 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4).reduce((s, v, i) => s + v * [.2126, .7152, .0722][i], 0);
    return [...document.querySelectorAll('.about-proposal p,.about-proposal h1,.about-proposal h2,.about-proposal a')].map(e => {
      const nodes = []; for (let n = e; n; n = n.parentElement) nodes.unshift(n);
      const bg = nodes.reduce((b, n) => {const c = rgb(getComputedStyle(n).backgroundColor), a = c[3] ?? 1; return b.map((v, i) => c[i] * a + v * (1 - a));}, [255, 255, 255]);
      const f = lum(rgb(getComputedStyle(e).color)), b = lum(bg); return (Math.max(f, b) + .05) / (Math.min(f, b) + .05);
    });
  });
}
(async () => {
  fs.mkdirSync(output, {recursive: true});
  const browser = await chromium.launch({headless: true, args: ['--enable-logging=file', '--log-file=' + path.join(output, 'browser.log')], env: {...process.env, CHROME_LOG_FILE: path.join(output, 'browser.log')}, executablePath: process.env.TASK10_CHROMIUM || 'C:/Users/tarek.azzi/AppData/Local/ms-playwright/chromium_headless_shell-1243/chrome-headless-shell-win64/chrome-headless-shell.exe'});
  try {
    const context = await browser.newContext({reducedMotion: 'reduce', ignoreHTTPSErrors: true});
    const page = await context.newPage();
    page.on('pageerror', e => errors.push(e.message)); page.on('console', m => {if (m.type() === 'error') errors.push(m.text());});
    await context.addInitScript(() => localStorage.setItem('digitful-theme', new URL(location.href).searchParams.get('__theme') || 'light'));
    await context.route('**/*', async route => {
      const request = route.request(), url = new URL(request.url());
      if (request.method() !== 'GET') {blocked.push(url.href); return route.abort();}
      if (process.env.TASK10_BASE && url.origin === new URL(base).origin) return route.continue();
      if (url.hostname === 'cdn.jsdelivr.net') return route.continue();
      if (url.hostname !== 'task10.local') {blocked.push(url.href); return route.fulfill({body: '', contentType: 'text/html'});}
      const file = path.resolve(root, 'dist', '.' + url.pathname + (url.pathname.endsWith('/') ? 'index.html' : ''));
      assert(file.startsWith(path.join(root, 'dist') + path.sep), 'Static path containment');
      const type = {'.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.webp': 'image/webp', '.png': 'image/png', '.avif': 'image/avif'};
      return route.fulfill({status: fs.existsSync(file) ? 200 : 404, contentType: type[path.extname(file)] || 'application/octet-stream', body: fs.existsSync(file) ? fs.readFileSync(file) : ''});
    });
    for (const width of [320, 390, 600, 768, 991, 992, 1024, 1440]) for (const theme of ['light', 'dark']) {
      await page.setViewportSize({width, height: 960});
      await page.goto(base + '/about/?__theme=' + theme, {waitUntil: 'networkidle'});
      await page.evaluate(async () => {await document.fonts.ready; await Promise.all([...document.images].map(i => i.decode()));});
      const actual = await page.evaluate(() => ({text: document.querySelector('.about-proposal').innerText, title: document.title, description: document.querySelector('meta[name="description"]').content, canonical: document.querySelector('link[rel="canonical"]').href, og: document.querySelector('meta[property="og:description"]').content, twitter: document.querySelector('meta[name="twitter:description"]').content, targets: [...document.querySelectorAll('.about-proposal a')].map(a => a.getAttribute('href')), overflow: document.documentElement.scrollWidth > innerWidth, clipped: [...document.querySelectorAll('.about-proposal h1,.about-proposal h2,.about-proposal p,.about-proposal a')].some(e => e.scrollWidth > e.clientWidth + 1), mainId: document.querySelectorAll('#main-content').length, images: [...document.images].every(i => i.complete && i.naturalWidth > 0), fonts: document.fonts.status, faces: [...document.fonts].filter(f=>f.status==='loaded').map(f=>f.family)}));
      assert.equal(clean(actual.text), expected); assert.equal(actual.title, 'About Digitful');
      for (const field of ['description', 'og', 'twitter']) assert.equal(actual[field], description);
      assert.equal(actual.canonical, 'https://digitful.ca/about/'); assert.equal(await page.locator('meta[name=robots]').getAttribute('content'), 'noindex,nofollow,noarchive'); assert(!(await page.content()).includes('GTM-53THDCJH')); assert((await page.content()).includes('Preview site: form submission is disabled.')); assert.deepEqual(actual.targets, targets);
      await page.screenshot({path: path.join(output, `${width}-${theme}.png`), fullPage: true});
      assert(!actual.overflow && !actual.clipped && actual.images && actual.fonts === 'loaded' && actual.mainId === 1, JSON.stringify({width, theme, ...actual}));
      assert(actual.faces.some(f=>f.includes('Barlow Condensed')) && actual.faces.some(f=>f.startsWith('Inter-')));
      const minimum = Math.min(...await contrast(page)); assert(minimum >= 4.5, 'Text contrast'); states.push({width, theme, minimum, ...actual});
      if (width === 390 || width === 1440) {
        await page.screenshot({path: path.join(output, `${width}-${theme}.png`), fullPage: true});
        const seen = new Set();
        for (let i = 0; i < 40 && seen.size < 1; i++) {
          await page.keyboard.press('Tab');
          const active = await page.evaluate(() => {const e = document.activeElement, s = getComputedStyle(e); return e.matches('.about-proposal a') ? {href: e.getAttribute('href'), outline: s.outlineStyle, width: s.outlineWidth} : null;});
          if (active && !seen.has(active.href)) {seen.add(active.href); assert.equal(active.outline, 'solid'); assert.equal(active.width, '3px'); assert(Math.min(...await contrast(page)) >= 4.5); focus.push({width, theme, ...active});}
        }
        assert.equal(seen.size, 1); await page.waitForTimeout(350);
        await page.screenshot({path: path.join(output, `focus-${width}-${theme}.png`)});
        if (width === 390) {await page.locator('.navbar-toggler').click(); await page.waitForTimeout(350); assert(await page.locator('#navbarMain').isVisible());}
        await page.locator('#servicesDropdown').click(); assert(await page.locator('.dropdown-menu').isVisible()); await page.keyboard.press('Escape');
        await page.locator('[data-theme-toggle]').click(); assert.notEqual(await page.getAttribute('html', 'data-theme'), theme); navigation.push({width, theme, pass: true});
      }
    }
    for (const target of targets) {await page.goto(base + target, {waitUntil: 'networkidle'}); links.push({target, title: await page.title()}); assert(await page.locator('h1').count() > 0);}
    assert.equal(errors.length, 0, errors.join('\n'));
    fs.writeFileSync(path.join(output, 'checks.json'), JSON.stringify({states, focus, navigation, links, errors, blocked}, null, 2));
    console.log(JSON.stringify({states: states.length, keyboardLinks: focus.length, navigation: navigation.length, links: links.length, minimumContrast: Math.min(...states.map(s => s.minimum)), errors}));
  } finally {await browser.close();}
})().catch(error => {console.error(error); process.exitCode = 1;});
