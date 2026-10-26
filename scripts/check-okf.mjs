import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';

// Project authoring checks, intentionally stricter than OKF v0.2 conformance.
const root = new URL('../public/knowledge/', import.meta.url);
const pin = 'https://github.com/tarekazz1/digitful/blob/8ab616ea510f730af41a354d945c9ca4f9f97ea0/';
const expected = {
  digitful: ['Organization', '/', ['src/pages/about.astro', 'src/pages/what-we-build.astro']],
  'social-media': ['Service', '/social-media/', ['src/pages/social-media.astro', 'src/pages/what-we-build.astro']],
  seo: ['Service', '/seo/', ['src/pages/seo.astro']],
  'paid-ads': ['Service', '/paid-ads/', ['src/pages/paid-ads.astro', 'src/pages/what-we-build.astro']],
  'process-automation': ['Service', '/automation/', ['src/pages/automation.astro']],
  'website-check': ['Tool', '/#snapshot', ['src/components/InstantSnapshot.astro']],
  'seo-command-center': ['Tool', '/seo-command-center/', ['src/pages/seo-command-center/index.astro']]
};
const files = ['index.md', ...Object.keys(expected).map(id => `${id}.md`)];
assert.deepEqual(readdirSync(root).sort(), [...files].sort(), 'Exactly eight bundle files');
const documents = new Map();
const links = body => [...body.matchAll(/\[[^\]]+\]\(([^\s)]+)\)/g)].map(match => match[1]);
const resources = new Set();
for (const file of files) {
  const text = readFileSync(new URL(file, root), 'utf8');
  assert(!text.includes('\uFFFD'), `${file}: valid UTF-8`);
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  assert(match, `${file}: frontmatter required`);
  const meta = yaml.load(match[1]);
  const body = match[2];
  assert(body.trim(), `${file}: nonempty body`);
  documents.set(file, { meta, body });
  if (file === 'index.md') {
    assert.deepEqual(meta, { okf_version: '0.2' }, 'Root index metadata');
    continue;
  }
  assert.deepEqual(Object.keys(meta).sort(), ['description', 'resource', 'sources', 'status', 'title', 'type']);
  for (const key of ['type', 'title', 'description', 'resource']) {
    assert(typeof meta[key] === 'string' && meta[key].trim(), `${file}: ${key}`);
  }
  const [type, path, sources] = expected[file.slice(0, -3)];
  assert.equal(meta.type, type, `${file}: approved type`);
  assert.equal(meta.resource, `https://digitful.ca${path}`, `${file}: exact canonical`);
  assert.equal(meta.status, 'stable', `${file}: owner-approved bundle`);
  assert.deepEqual(meta.sources, sources.map(resource => ({ resource: pin + resource })), `${file}: pinned sources only`);
  assert(!resources.has(meta.resource), `${file}: unique resource`);
  resources.add(meta.resource);
}
const entries = links(documents.get('index.md').body);
assert.deepEqual([...entries].sort(), files.filter(file => file !== 'index.md').map(file => `./${file}`).sort());
for (const [file, { body }] of documents) {
  for (const href of links(body)) {
    if (href.startsWith('./')) {
      assert(documents.has(href.slice(2)), `${file}: resolving concept ${href}`);
    } else {
      const url = new URL(href);
      assert.equal(url.origin, 'https://digitful.ca', `${file}: approved website links`);
    }
  }
}
console.log(`PASS: ${files.length} OKF files, seven indexed stable concepts, exact resources and provenance, resolving concept links (${fileURLToPath(root)})`);
