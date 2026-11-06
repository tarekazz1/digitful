import { getCollection } from 'astro:content';

const site = 'https://digitful.ca';
const escapeXml = (value: string) => value.replace(/[&<>"']/g, (character) =>
  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' })[character] ?? character);

export async function GET() {
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  );
  const items = posts.map((post) => {
    const url = `${site}/blog/${post.id.replace(/\.md$/, '')}/`;
    return [
      '    <item>',
      `      <title>${escapeXml(post.data.title)}</title>`,
      `      <link>${url}</link>`,
      `      <guid isPermaLink="true">${url}</guid>`,
      `      <description>${escapeXml(post.data.description)}</description>`,
      `      <category>${escapeXml(post.data.category)}</category>`,
      `      <pubDate>${post.data.publishDate.toUTCString()}</pubDate>`,
      '    </item>'
    ].join('\n');
  });
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    '  <channel>',
    '    <title>Blog - Digitful</title>',
    `    <link>${site}/blog/</link>`,
    '    <description>Articles on marketing strategy, AI, search, paid ads, social media, and automation.</description>',
    '    <language>en-CA</language>',
    `    <atom:link href="${site}/rss.xml" rel="self" type="application/rss+xml" />`,
    ...items,
    '  </channel>',
    '</rss>',
    ''
  ].join('\n');
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
