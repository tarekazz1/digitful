// node task-07-implementation-check.cjs <local|base URL> <evidence directory>
// Built/deployed QA only. Never submits a form or invokes a diagnostic.
const fs=require('node:fs'),path=require('node:path');
const {chromium}=require(process.env.TASK07_PLAYWRIGHT||'C:/Users/tarek.azzi/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const repo=path.resolve(__dirname,'../..'),output=path.resolve(process.argv[3]),local=process.argv[2]==='local';
const base=local?'http://task07.local':process.argv[2],checks=[],errors=[],blocked=[];
const copy={h1:'Tell us what’s stuck.',lead:'The messy version is fine. Tell us what you’d like to change.',services:'What would you like help with? Select any that fit.',message:'What’s getting in the way?'};
const description='Talk to Digitful about social media, SEO, paid ads, or process automation. Tell us what’s stuck.';
const labels={'social-media':'Social Media',seo:'SEO','paid-ads':'Paid Ads',automation:'Automation'};
const assert=(ok,message)=>{if(!ok)throw Error(message);};
const luminance=color=>color.match(/[\d.]+/g).slice(0,3).map(Number).map(v=>v/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4).reduce((n,v,i)=>n+v*[.2126,.7152,.0722][i],0);
const contrast=(a,b)=>(Math.max(luminance(a),luminance(b))+.05)/(Math.min(luminance(a),luminance(b))+.05);
let browser;
(async()=>{
  fs.mkdirSync(output,{recursive:true});
  browser=await chromium.launch({headless:true,args:['--log-file='+path.join(output,'browser.log')],env:{...process.env,CHROME_LOG_FILE:path.join(output,'browser.log')},executablePath:process.env.TASK07_CHROMIUM||'C:/Users/tarek.azzi/AppData/Local/ms-playwright/chromium_headless_shell-1243/chrome-headless-shell-win64/chrome-headless-shell.exe'});
  const page=await browser.newPage({viewport:{width:1440,height:900},ignoreHTTPSErrors:true});
  page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
  await page.addInitScript(()=>localStorage.setItem('digitful-theme',new URL(location.href).searchParams.get('__theme')||'light'));
  await page.route('**/*',async route=>{
    const request=route.request(),url=new URL(request.url());
    if(request.method()!=='GET'){blocked.push(request.url());return route.abort();}
    if(url.hostname==='cdn.jsdelivr.net')return local?route.fulfill({contentType:'text/javascript',body:fs.readFileSync(path.join(repo,'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'))}):route.continue();
    if(url.origin!==new URL(base).origin){blocked.push(request.url());return route.abort();}
    if(!local)return route.continue();
    const file=path.resolve(repo,'dist','.'+url.pathname+(url.pathname.endsWith('/')?'index.html':''));
    const mime={'.html':'text/html','.css':'text/css','.js':'text/javascript','.woff2':'font/woff2','.svg':'image/svg+xml'};
    assert(file.startsWith(path.join(repo,'dist')+path.sep),'Local path containment');await route.fulfill({contentType:mime[path.extname(file)]||'application/octet-stream',body:fs.readFileSync(file)});
  });
  const go=async(route='contact',query='',theme='light')=>{await page.goto(base+'/'+route+'/?'+query+'&__theme='+theme,{waitUntil:'networkidle'});await page.evaluate(()=>document.fonts.ready);await page.waitForTimeout(300);};
  for(const route of ['contact','thank-you'])for(const width of [320,390,768,1024,1440])for(const theme of ['light','dark']){
    await page.setViewportSize({width,height:900});await go(route,'',theme);
    const state=await page.evaluate(()=>({overflow:document.documentElement.scrollWidth-innerWidth,text:document.querySelector('main').innerText,ids:[...document.querySelectorAll('[id]')].map(e=>e.id),outside:[...document.querySelectorAll('main *')].filter(e=>{const b=e.getBoundingClientRect();return b.width>0&&(b.left<-.5||b.right>innerWidth+.5);}).map(e=>e.tagName),robots:[...document.querySelectorAll('meta[name="robots"]')].map(e=>e.content),guard:document.documentElement.outerHTML.includes('Preview site: form submission is disabled.'),gtm:document.documentElement.outerHTML.includes('GTM-53THDCJH')}));
    assert(!state.overflow&&!state.outside.length&&new Set(state.ids).size===state.ids.length,'Fit/IDs '+route+width+theme);
    assert(state.robots.length===1&&state.robots[0]==='noindex,nofollow,noarchive'&&state.guard&&!state.gtm,'Preview safeguards');
    assert(await page.locator('link[rel="canonical"]').getAttribute('href')==='https://digitful.ca/'+route+'/','Canonical');
    if(route==='contact'){
      for(const [key,selector]of Object.entries({h1:'h1',lead:'.contact-lead',services:'#service-label',message:'label[for="message"]'}))assert((await page.locator(selector).innerText()).trim()===copy[key],'Approved '+key);
      assert(await page.locator('#message').getAttribute('placeholder')===copy.message&&await page.locator('meta[name="description"]').getAttribute('content')===description,'Placeholder/metadata');
      assert(state.text.includes('We reply within 1 to 2 business days.')&&state.text.includes('ping@digitful.ca')&&state.text.includes('+1 (579) 779-7779')&&state.text.includes('Remote-first, serving teams across Canada and beyond.'),'Details/reply');
      const flow=await page.evaluate(()=>['.contact-intro','.contact-worksheet','.contact-details'].map(s=>{const b=document.querySelector(s).getBoundingClientRect();return{x:b.x,y:b.y,bottom:b.bottom};}));
      assert(width<992?flow[0].bottom<=flow[1].y&&flow[1].bottom<=flow[2].y:flow[0].x<flow[1].x&&flow[0].x===flow[2].x,'Composition');
    }else assert(state.text.replace(/\s+/g,' ').trim()==='MESSAGE RECEIVED Thanks for reaching out. We will review what you shared and reply within 1 to 2 business days. Back To Home','Thank-you wording');
    await page.screenshot({path:path.join(output,route+'-'+width+'-'+theme+'.png'),fullPage:true});checks.push({route,width,theme,...state});
  }
  await go();
  const contract=await page.locator('form').evaluate(f=>({action:f.action,method:f.method,fields:[...f.elements].filter(e=>e.name).map(e=>[e.name,e.type,e.required,e.value]),labels:[...f.querySelectorAll('input:not([type=hidden]):not([name=_honey]),textarea')].every(e=>e.labels.length>0)}));
  assert(contract.action==='https://formsubmit.co/73c5ec076cc55c4aefd536c5f88c3526'&&contract.method==='post'&&contract.labels,'Endpoint/method/labels');
  const expected=[['name','text',true,''],['email','email',true,''],['company','text',false,''],['services','hidden',false,''],['_next','hidden',false,'https://digitful.ca/thank-you/'],['source','hidden',false,''],['snapshot_url','hidden',false,''],['snapshot_strategy','hidden',false,''],['_honey','text',false,''],['message','textarea',true,''],['privacy','checkbox',true,'on']];
  assert(JSON.stringify(contract.fields)===JSON.stringify(expected),'All fields preserved except CAPTCHA disable');checks.push({contract,captchaCompletion:'Unverified',delivery:'Unverified',redirect:'Unverified'});
  for(const token of Object.keys(labels)){await go('contact','service='+token);assert(await page.locator('#servicesInput').inputValue()===token&&await page.locator('[data-service="'+token+'"]').getAttribute('aria-pressed')==='true','Preselection');}
  for(const [service,strategy]of [['seo','mobile'],['paid-ads','desktop'],['automation',''],['social-media','mobile'],['','desktop'],['',''],['unknown','']]){
    await go('contact',new URLSearchParams({service,strategy,source:'instant-snapshot',siteUrl:'https://example.com/review?a=b'}));
    const wanted=['Website: https://example.com/review?a=b',labels[service]?'Help with: '+labels[service]:'',strategy?'Device: '+strategy:'','What’s not working:','What I’d like to change:'].filter(Boolean).join('\n');
    assert(await page.locator('#message').inputValue()===wanted&&await page.locator('#sourceInput').inputValue()==='instant-snapshot'&&await page.locator('#snapshotUrlInput').inputValue()==='https://example.com/review?a=b'&&await page.locator('#snapshotStrategyInput').inputValue()===strategy,'Diagnostic context');
    await page.locator('#message').fill(wanted+'\nEditable.');assert((await page.locator('#message').inputValue()).endsWith('Editable.'),'Editable');checks.push({service,strategy,prefill:wanted});
  }
  await go('contact','service=seo&strategy=mobile');assert(await page.locator('#message').inputValue()==='','No invented prefill without URL');
  for(const width of [320,390,1440])for(const theme of ['light','dark']){
    await page.setViewportSize({width,height:900});await go('contact','',theme);await page.locator('#name').focus();
    for(const target of ['email','company','social-media']){await page.keyboard.press('Tab');assert(await page.evaluate(()=>document.activeElement.id||document.activeElement.dataset.service)===target,'Tab order');}
    await page.keyboard.press('Space');await page.keyboard.press('Tab');await page.keyboard.press('Enter');
    assert(await page.locator('#servicesInput').inputValue()==='social-media, seo'&&await page.evaluate(()=>document.activeElement.dataset.service==='seo'&&document.activeElement.matches(':focus-visible')),'Keyboard multi-select/focus');
    await page.waitForTimeout(250);await page.screenshot({path:path.join(output,'keyboard-'+width+'-'+theme+'.png'),fullPage:true});
    await page.keyboard.press('Space');await page.keyboard.press('Shift+Tab');await page.keyboard.press('Space');assert(await page.locator('#servicesInput').inputValue()==='','Deselect/reset');checks.push({keyboard:width,theme,pass:true});
  }
  assert(!await page.locator('form').evaluate(f=>f.checkValidity()),'Required validation');await page.locator('#name').fill('Local review');await page.locator('#message').fill('No delivery test.');await page.locator('#email').fill('invalid');
  assert(await page.locator('#email').evaluate(e=>e.validity.typeMismatch),'Email validation');await page.locator('#email').fill('review@example.com');assert(await page.locator('#privacy').evaluate(e=>e.validity.valueMissing),'Privacy validation');await page.locator('#privacy').check();assert(await page.locator('form').evaluate(f=>f.checkValidity()),'Valid with optional company blank');
  for(const theme of ['light','dark']){
    await go('contact','service=seo',theme);
    const colors=await page.evaluate(()=>['h1','.contact-lead','.contact-reply','.privacy-link','.form-control','.btn-primary','.toggle-btn.selected'].map(s=>{const c=getComputedStyle(document.querySelector(s));return{selector:s,fg:c.color,bg:c.backgroundColor==='rgba(0, 0, 0, 0)'?getComputedStyle(document.body).backgroundColor:c.backgroundColor};}));
    for(const c of colors){c.ratio=contrast(c.fg,c.bg);assert(c.ratio>=4.5,'Contrast '+c.selector);}checks.push({contrast:theme,colors});
    if(await page.locator('.navbar-toggler').isVisible()){await page.locator('.navbar-toggler').focus();await page.keyboard.press('Enter');await page.waitForTimeout(400);}
    await page.locator('[data-theme-toggle]').focus();await page.keyboard.press('Enter');assert(await page.locator('html').getAttribute('data-theme')!==theme,'Keyboard theme');await page.keyboard.press('Enter');
    if(await page.locator('.navbar-toggler').isVisible()){await page.locator('.navbar-toggler').focus();await page.keyboard.press('Enter');await page.waitForTimeout(400);assert(await page.locator('.navbar-toggler').getAttribute('aria-expanded')==='false','Keyboard menu closes');}
  }
  for(const route of ['','social-media','seo','paid-ads','automation','blog']){await go(route);assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'Shared route fit');}
  const robots=local?fs.readFileSync(path.join(repo,'dist/robots.txt'),'utf8'):await(await page.request.get(base+'/robots.txt')).text();assert(robots.includes('Disallow: /'),'Preview robots.txt');
  assert(!errors.length&&!blocked.length,'Browser errors or unexpected requests');fs.writeFileSync(path.join(output,'checks.json'),JSON.stringify({checks,errors,blocked},null,2));console.log(JSON.stringify({states:20,keyboardStates:6,contract:true,validation:true,errors,blocked}));
})().catch(error=>{console.error(error);process.exitCode=1;}).finally(async()=>{await browser?.close();});
