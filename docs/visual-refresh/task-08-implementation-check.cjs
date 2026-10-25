// node task-08-implementation-check.cjs <baseline|local|base URL> <evidence directory> [isolated source root]
// Reads pages only; never submits forms or starts external diagnostics.
const fs=require('node:fs'),path=require('node:path');
const {chromium}=require(process.env.TASK08_PLAYWRIGHT||'C:/Users/tarek.azzi/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const [mode,output,sourceRoot]=process.argv.slice(2),repo=path.resolve(sourceRoot||path.join(__dirname,'../..'));
const local=mode==='local',capture=mode==='baseline',base=capture?'https://preview.digitful.ca':local?'http://task08.local':mode;
const article='/blog/ai-is-making-marketing-faster/',checks=[],errors=[],blocked=[],contrasts=[];
const assert=(ok,message)=>{if(!ok)throw Error(message);};
const expected=process.env.TASK08_BASELINE?JSON.parse(fs.readFileSync(process.env.TASK08_BASELINE)):null;
let browser;
async function snapshot(page){return page.evaluate(()=>({title:document.title,description:document.querySelector('meta[name="description"]').content,canonical:document.querySelector('link[rel="canonical"]').href,meta:[...document.querySelectorAll('meta[property]')].map(e=>[e.getAttribute('property'),e.content]),schemas:[...document.querySelectorAll('script[type="application/ld+json"]')].map(e=>JSON.parse(e.textContent)),h1:document.querySelector('h1').textContent,body:document.querySelector('.blog-article')?.innerHTML,faq:document.querySelector('.blog-faq')?.innerHTML,cta:document.querySelector('.blog-cta-panel')?{heading:document.querySelector('.blog-cta-panel h2').textContent,text:document.querySelector('.blog-cta-panel p').textContent,label:document.querySelector('.blog-cta-panel a').textContent,href:document.querySelector('.blog-cta-panel a').getAttribute('href')}:null,entries:[...document.querySelectorAll('.blog-card')].map(e=>({href:e.getAttribute('href'),title:e.querySelector('h2').textContent,excerpt:e.querySelector('p').textContent,category:e.querySelector('.category-chip').textContent,date:e.querySelector('time').getAttribute('datetime'),meta:e.querySelector('.blog-card__meta').textContent}))}));}
async function colours(page){return page.evaluate(()=>{
 const rgb=s=>s.match(/[\d.]+/g).map(Number),lum=c=>c.slice(0,3).map(v=>{v/=255;return v<=.04045?v/12.92:((v+.055)/1.055)**2.4}).reduce((s,v,i)=>s+v*[.2126,.7152,.0722][i],0);
 const bg=e=>{const nodes=[];for(;e;e=e.parentElement)nodes.unshift(e);return nodes.reduce((b,n)=>{const c=rgb(getComputedStyle(n).backgroundColor),a=c[3]??1;return b.map((v,i)=>c[i]*a+v*(1-a));},[255,255,255]);};
 const ratio=(a,b)=>{const x=[lum(a),lum(b)].sort((a,b)=>b-a);return(x[0]+.05)/(x[1]+.05);};
 return ['.blog-hero h1','.blog-hero .lead','.blog-filter','.blog-card > .category-chip','.blog-card__meta','.blog-card p','.blog-article-hero h1','.blog-article-meta','.blog-back-link','.blog-article p','.blog-article a','.blog-cta-panel h2','.blog-cta-panel p','.blog-cta-panel .btn'].flatMap(s=>[...document.querySelectorAll(s)].filter(e=>e.getBoundingClientRect().width).map(e=>{const c=getComputedStyle(e);return{selector:s,ratio:ratio(rgb(c.color),bg(e)),focused:e===document.activeElement,outline:c.outlineStyle,outlineWidth:c.outlineWidth,outlineRatio:e===document.activeElement?ratio(rgb(c.outlineColor),bg(e.parentElement)):null};}));
});}
(async()=>{
 fs.mkdirSync(output,{recursive:true});
 browser=await chromium.launch({headless:true,args:['--log-file='+path.join(output,'browser.log')],env:{...process.env,CHROME_LOG_FILE:path.join(output,'browser.log')},executablePath:process.env.TASK08_CHROMIUM||'C:/Users/tarek.azzi/AppData/Local/ms-playwright/chromium_headless_shell-1243/chrome-headless-shell-win64/chrome-headless-shell.exe'});
 const page=await browser.newPage({viewport:{width:1440,height:960},ignoreHTTPSErrors:true});
 page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
 await page.addInitScript(()=>localStorage.setItem('digitful-theme',new URL(location.href).searchParams.get('__theme')||'light'));
 await page.route('**/*',async route=>{
  const request=route.request(),url=new URL(request.url());if(request.method()!=='GET'){blocked.push(request.url());return route.abort();}
  if(url.hostname==='cdn.jsdelivr.net')return local?route.fulfill({contentType:'text/javascript',body:fs.readFileSync(path.join(repo,'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'))}):route.continue();
  if(url.origin!==new URL(base).origin){blocked.push(request.url());return route.abort();}if(!local)return route.continue();
  const file=path.resolve(repo,'dist','.'+url.pathname+(url.pathname.endsWith('/')?'index.html':''));
  assert(file.startsWith(path.join(repo,'dist')+path.sep),'Local path containment');
  const mime={'.html':'text/html','.css':'text/css','.js':'text/javascript','.woff2':'font/woff2','.svg':'image/svg+xml','.png':'image/png','.webp':'image/webp','.avif':'image/avif'};
  return route.fulfill({contentType:mime[path.extname(file)]||'application/octet-stream',body:fs.readFileSync(file)});
 });
 const go=async(route,theme='light')=>{await page.goto(base+route+'?__theme='+theme,{waitUntil:'networkidle'});await page.addStyleTag({content:'*,*::before,*::after{transition:none!important;animation:none!important}'});await page.evaluate(async()=>{await document.fonts.ready;for(const i of document.images){i.loading='eager';await i.decode();}});};
 await go('/blog/');const index=await snapshot(page),inventory={index,articles:{},smoke:{}};
 for(const entry of index.entries){await go(entry.href);inventory.articles[entry.href]=await snapshot(page);}
 if(capture){for(const route of ['/','/social-media/','/seo/','/paid-ads/','/automation/','/contact/']){await go(route);inventory.smoke[route]=(await snapshot(page)).h1;}fs.writeFileSync(path.join(output,'baseline.json'),JSON.stringify(inventory,null,2));console.log('Captured '+index.entries.length+' articles and six shared pages.');return;}
 assert(expected,'TASK08_BASELINE must identify the frozen deployed baseline');
 assert(JSON.stringify(index.entries)===JSON.stringify(expected.index.entries),'Routes, titles, excerpts, categories, dates and newest-first order');
 assert(index.h1==='Make better marketing decisions.'&&index.description==='Articles on marketing strategy, AI, search, paid ads, social media, and automation.','Index heading/description');
 assert(index.canonical===expected.index.canonical&&JSON.stringify(index.schemas)===JSON.stringify(expected.index.schemas),'Index canonical/schemas');
 assert(index.entries.every((e,i,a)=>!i||new Date(a[i-1].date)>=new Date(e.date)),'Descending publishDate');
 for(const [route,actual]of Object.entries(inventory.articles)){
  const old=structuredClone(expected.articles[route]);if(route===article)old.cta.heading='Not sure what to fix first?';
  assert(JSON.stringify(actual)===JSON.stringify(old),'Article body/title/metadata/schema/FAQ/custom CTA preservation: '+route);
 }checks.push({inventory:index.entries.length,allArticlesPreserved:true});
 for(const route of ['/blog/',article])for(const width of [320,390,768,1024,1440])for(const theme of ['light','dark']){
  await page.setViewportSize({width,height:960});await go(route,theme);
  const state=await page.evaluate(()=>({overflow:document.documentElement.scrollWidth>innerWidth,outside:[...document.querySelectorAll('main *')].filter(e=>{const b=e.getBoundingClientRect();return b.width>0&&(b.left<-.5||b.right>innerWidth+.5);}).map(e=>e.tagName+'.'+e.className),fonts:document.fonts.status,images:[...document.images].every(i=>i.complete&&i.naturalWidth>0),robots:[...document.querySelectorAll('meta[name="robots"]')].map(e=>e.content),guard:document.documentElement.outerHTML.includes('Preview site: form submission is disabled.'),gtm:document.documentElement.outerHTML.includes('GTM-53THDCJH'),reading:document.querySelector('.blog-article')?{width:document.querySelector('.blog-article').getBoundingClientRect().width,font:getComputedStyle(document.querySelector('.blog-article')).fontSize}:null,teal:document.querySelector('.blog-index-page .blog-hero')?getComputedStyle(document.querySelector('.blog-hero')).backgroundColor:null,mustard:document.querySelector('.blog-article-hero')?getComputedStyle(document.querySelector('.blog-article-hero')).backgroundColor:null,coral:document.querySelector('.blog-article-page')?getComputedStyle(document.querySelector('main > section:last-child')).backgroundColor:null}));
  assert(!state.overflow&&!state.outside.length&&state.fonts==='loaded'&&state.images,'Layout/assets '+route+width+theme);
  assert(state.robots.length===1&&state.robots[0]==='noindex,nofollow,noarchive'&&state.guard&&!state.gtm,'Preview safeguards');
  assert(route==='/blog/'?state.teal==='rgb(86, 150, 153)':state.mustard==='rgb(228, 197, 143)'&&state.coral==='rgb(233, 88, 73)'&&state.reading.width<=704&&state.reading.font===(width<768?'17px':'18px'),'Approved colour/measure');
  if(route==='/blog/')assert((await page.locator('.blog-hero .lead').innerText()).trim()==='Articles on search, ads, content, and automation—and how they work together.','Index introduction');
  const pairs=await colours(page);assert(pairs.every(c=>c.ratio>=4.5),'Text contrast');contrasts.push({route,width,theme,pairs});
  if([1440,390].includes(width))await page.screenshot({path:path.join(output,(route==='/blog/'?'index':'article')+'-'+width+'-'+theme+'.png'),fullPage:true});
  else await page.screenshot({path:path.join(output,(route==='/blog/'?'index':'article')+'-fit-'+width+'-'+theme+'.png')});
  checks.push({route,width,theme,...state});
 }
 for(const width of [1440,390])for(const theme of ['light','dark']){
  await page.setViewportSize({width,height:960});await go('/blog/',theme);
  for(const [filter,count]of Object.entries({social:0,seo:3,paid:1,automation:3,all:10})){
   const button=page.locator('[data-blog-filter="'+filter+'"]');await button.focus();await page.keyboard.press('Space');
   assert(await page.locator('.blog-card:visible').count()===count&&await button.getAttribute('aria-pressed')==='true'&&await button.evaluate(e=>e===document.activeElement&&e.matches(':focus-visible')),'Filter count/state/keyboard focus');
   assert(await page.locator('[data-blog-empty]').isVisible()===(count===0)&&(await page.locator('[data-blog-filter-status]').textContent()).startsWith(String(count)+' '),'Empty state/announcement');
   const pairs=await colours(page);assert(pairs.every(c=>c.ratio>=4.5&&(!c.focused||(c.outline!=='none'&&parseFloat(c.outlineWidth)>=2&&c.outlineRatio>=3))),'Filter contrast/focus');
  }
  await page.screenshot({path:path.join(output,'filter-focus-'+width+'-'+theme+'.png')});await go(article,theme);
  const summary=page.locator('.blog-faq summary').first();await summary.focus();await page.keyboard.press('Enter');assert(await summary.evaluate(e=>e.parentElement.open),'FAQ keyboard open');await page.keyboard.press('Enter');assert(!await summary.evaluate(e=>e.parentElement.open),'FAQ closes');
  const cta=page.locator('.blog-cta-panel .btn');await cta.focus();assert((await cta.innerText()).trim()==='Talk Through What To Fix First'&&await cta.getAttribute('href')==='/contact/','Representative CTA');
  assert((await colours(page)).filter(c=>c.focused).every(c=>c.ratio>=4.5&&c.outline!=='none'&&parseFloat(c.outlineWidth)>=2&&c.outlineRatio>=3),'CTA focus contrast');await page.screenshot({path:path.join(output,'cta-focus-'+width+'-'+theme+'.png')});
  await page.evaluate(()=>scrollTo(0,0));const menu=page.locator('.navbar-toggler');if(await menu.isVisible()){await menu.focus();await page.keyboard.press('Enter');await page.waitForTimeout(350);}
  const toggle=page.locator('[data-theme-toggle]');await toggle.focus();await page.keyboard.press('Enter');assert(await page.locator('html').getAttribute('data-theme')!==theme&&await toggle.getAttribute('aria-label')==='Switch to '+theme+' mode','Theme/accessible name');await page.keyboard.press('Enter');
  const services=page.locator('#servicesDropdown');await services.focus();await page.keyboard.press('Enter');assert(await page.locator('.dropdown-menu').isVisible(),'Services navigation');await page.keyboard.press('Escape');assert(!await page.locator('.dropdown-menu').isVisible(),'Services closes');
  if(await menu.isVisible()){await menu.focus();await page.keyboard.press('Enter');await page.waitForTimeout(350);assert(await menu.getAttribute('aria-expanded')==='false','Menu closes');}checks.push({keyboard:width,theme,filters:true,faq:true,themeSwitch:true,navigation:true});
 }
 for(const [route,h1]of Object.entries(expected.smoke))for(const [width,theme]of [[390,'light'],[1440,'dark']]){await page.setViewportSize({width,height:960});await go(route,theme);assert((await snapshot(page)).h1===h1&&await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'Accepted shared page smoke '+route);checks.push({smoke:route,width,theme,pass:true});}
 const robots=local?fs.readFileSync(path.join(repo,'dist/robots.txt'),'utf8'):await(await page.request.get(base+'/robots.txt')).text();assert(robots.includes('Disallow: /'),'robots.txt');
 const indexSource=fs.readFileSync(path.join(repo,'src/pages/blog/index.astro'),'utf8'),articleSource=fs.readFileSync(path.join(repo,'src/pages/blog/[slug].astro'),'utf8');assert(indexSource.includes('!data.draft')&&articleSource.includes('!data.draft'),'Draft exclusion filters');
 if(local)assert(!fs.existsSync(path.join(repo,'dist/blog/task-08-draft-fixture'))&&!index.entries.some(e=>e.href.includes('task-08-draft-fixture')),'Runtime draft fixture excluded');
 assert(!errors.length&&!blocked.length,'Browser errors/unexpected requests');fs.writeFileSync(path.join(output,'checks.json'),JSON.stringify({checks,contrasts,errors,blocked,inventory},null,2));console.log(JSON.stringify({pageStates:20,keyboardStates:4,articles:10,sharedSmokeStates:12,minContrast:Math.min(...contrasts.flatMap(c=>c.pairs.map(p=>p.ratio))),errors,blocked}));
})().catch(error=>{console.error(error);process.exitCode=1;}).finally(async()=>{await browser?.close();});
