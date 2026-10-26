// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import { readFile, writeFile } from 'node:fs/promises';

/** @type {import('astro').AstroIntegration} */
const sitemap = {
  name: 'digitful-sitemap',
  hooks: {
    'astro:config:done': ({ config }) => { sitemapSite = config.site; },
    'astro:build:done': async ({ pages, dir }) => {
      if (!sitemapSite) throw new Error('Sitemap requires a configured site URL.');
      const excluded = /^\/(?:404(?:\.html)?|thank-you|_?type-test|knowledge|assets|scripts)(?:\/|$)/;
      const urls = new Set();
      for (const { pathname } of pages) {
        const route = `/${pathname.replace(/^\/+/, '')}`;
        if (excluded.test(route) || /[?#]|\.[^/]+\/?$/.test(route)) continue;
        const url = new URL(route, sitemapSite);
        url.pathname = url.pathname.replace(/\/?$/, '/');
        const html = await readFile(new URL(`.${url.pathname}index.html`, dir), 'utf8');
        const noindex = /<meta\b(?=[^>]*\bname\s*=\s*["']robots["'])[^>]*\bcontent\s*=\s*["'][^"']*\bnoindex\b/i;
        if (!noindex.test(html)) urls.add(url.href);
      }
      const escapeXml = (/** @type {string} */ value) => value.replace(/[&<>"']/g, (character) =>
        ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' })[character] ?? character);
      const entries = [...urls].sort().map((url) => `  <url><loc>${escapeXml(url)}</loc></url>`);
      await writeFile(new URL('sitemap.xml', dir), [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
        ...entries,
        '</urlset>',
        ''
      ].join('\n'));
    }
  }
};
/** @type {string | undefined} */
let sitemapSite;

// https://astro.build/config
export default defineConfig({
  site: 'https://digitful.ca',
  integrations: [sitemap],
  fonts: [
    {
      name: 'Inter',
      cssVariable: '--font-inter',
      provider: fontProviders.google(),
      weights: [400, 500, 600, 700],
      styles: ['normal'],
      subsets: ['latin'],
      display: 'swap',
      fallbacks: ['system-ui', 'sans-serif']
    },
    {
      name: 'Barlow Condensed',
      cssVariable: '--font-barlow-condensed',
      provider: fontProviders.google(),
      weights: [700, 800],
      styles: ['normal'],
      subsets: ['latin'],
      display: 'swap',
      fallbacks: ['Arial Narrow', 'sans-serif']
    },
    {
      name: 'IBM Plex Sans Condensed',
      cssVariable: '--font-ibm-plex-condensed',
      provider: fontProviders.google(),
      weights: [600, 700],
      styles: ['normal'],
      subsets: ['latin'],
      display: 'swap',
      fallbacks: ['Arial Narrow', 'sans-serif']
    },
    {
      name: 'Archivo Black',
      cssVariable: '--font-archivo-black',
      provider: fontProviders.google(),
      weights: [400],
      styles: ['normal'],
      subsets: ['latin'],
      display: 'swap',
      fallbacks: ['Arial Black', 'sans-serif']
    }
  ]
});
