// Existing bundled Playwright; no test framework or dependency installation.
const { chromium } = require('C:/Users/tarek.azzi/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const fs = require('node:fs');
const path = require('node:path');
const output = __dirname;
const url = 'http://127.0.0.1:8765/docs/visual-refresh/mockups/task-05-paid-ads.html';
(async () => {
  const browser = await chromium.launch({headless:true,env:{...process.env,CHROME_LOG_FILE:path.join(output,'task-05-browser.log')},executablePath:'C:/Users/tarek.azzi/AppData/Local/ms-playwright/chromium_headless_shell-1243/chrome-headless-shell-win64/chrome-headless-shell.exe'});
  const results = [];
  try {
    for (const width of [1440,390,320,768,1024]) {
      for (const theme of ['light','dark']) {
        const context = await browser.newContext({viewport:{width,height:900},deviceScaleFactor:1});
        await context.addInitScript(t => localStorage.setItem('digitful-theme',t),theme);
        const page = await context.newPage();
        const errors = [];
        page.on('pageerror', e=>errors.push(e.message));
        page.on('console', m=>{if(m.type()==='error')errors.push(m.text());});
        page.on('response',r=>{if(r.status()>=400)errors.push(r.status()+' '+r.url());});
        await page.goto(url,{waitUntil:'networkidle'});
        await page.evaluate(async()=>{
          await document.fonts.ready;
          for (let y=0;y<document.body.scrollHeight;y+=600) {window.scrollTo(0,y);await new Promise(r=>requestAnimationFrame(r));}
          await Promise.all([...document.images].map(i=>i.decode()));
          window.scrollTo(0,0);
        });
        const measurement = await page.evaluate(()=>{
          const rect = selector => {const e=document.querySelector(selector),r=e.getBoundingClientRect();return {x:r.x,y:r.y,width:r.width,height:r.height};};
          return {
            theme:document.documentElement.dataset.theme,
            overflow:document.documentElement.scrollWidth-innerWidth,
            height:document.body.scrollHeight,
            fontsLoaded:document.fonts.status,
            headingFont:getComputedStyle(document.querySelector('h1')).fontFamily,
            hero:rect('.paid-hero'),copy:rect('.paid-hero__copy'),art:rect('.paid-hero__art'),
            ctas:[...document.querySelectorAll('.paid-cta')].map(e=>({text:e.textContent,href:e.getAttribute('href'),width:e.getBoundingClientRect().width,height:e.getBoundingClientRect().height})),
            images:[...document.images].map(i=>({width:i.naturalWidth,height:i.naturalHeight,loaded:i.complete&&i.naturalWidth>0})),
            copyText:document.querySelector('main').innerText,
            outside:[...document.querySelectorAll('main *')].filter(e=>{const r=e.getBoundingClientRect();return r.width>0&&(r.left<-.5||r.right>innerWidth+.5);}).map(e=>e.className)
          };
        });
        if ([1440,390].includes(width)) await page.screenshot({path:path.join(output,`task-05-${width}-${theme}.png`),fullPage:true});
        if(width===390) {
          await page.getByRole('button',{name:'Toggle navigation'}).click();
          await page.waitForTimeout(250);
          measurement.openMenuOverflow=await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth);
          await page.locator('[data-theme-toggle]').click();
          measurement.themeToggleWorked=await page.evaluate(t=>document.documentElement.dataset.theme!==t,theme);
        }
        results.push({width,...measurement,errors});
        await context.close();
      }
    }
    fs.writeFileSync(path.join(output,'task-05-checks.json'),JSON.stringify(results,null,2));
    console.log(JSON.stringify(results.map(({width,theme,height,overflow,errors,headingFont,outside,openMenuOverflow,themeToggleWorked})=>({width,theme,height,overflow,errors,headingFont,outside,openMenuOverflow,themeToggleWorked})),null,2));
  } finally { await browser.close(); }
})().catch(e=>{console.error(e);process.exitCode=1;});
