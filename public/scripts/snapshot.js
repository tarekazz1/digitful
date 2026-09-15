import { handleApiError } from './errorHandler.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('snapshot-form');
  const urlInput = document.getElementById('snapshot-url');
  const resultDiv = document.getElementById('snapshot-result');

  if (!form || !urlInput || !resultDiv) {
    return;
  }

  const isPreview = window.location.hostname === 'preview.digitful.ca';
  const escapeHtml = (value) =>
    String(value)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    let siteUrl = urlInput.value.trim();
    if (!siteUrl) return;
    if (!/^https?:\/\//i.test(siteUrl)) siteUrl = `https://${siteUrl}`;

    resultDiv.innerHTML =
      '<div class="d-flex align-items-center gap-3 text-muted-light"><div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden">Loading...</span></div><span>Running snapshot...</span></div>';

    try {
      const strategy = document.querySelector('input[name="strategy"]:checked')?.value || 'mobile';
      const api =
        'https://digitful-pagespeed-proxy.tarazzi.workers.dev' +
        `?url=${encodeURIComponent(siteUrl)}` +
        `&strategy=${strategy}`;

      let response;
      try {
        response = await fetch(api);
      } catch (networkError) {
        throw new Error(
          `Could not reach the audit service${networkError?.message ? `: ${networkError.message}` : '.'}`
        );
      }

      const rawBody = await response.text();
      let data = null;
      try {
        data = rawBody ? JSON.parse(rawBody) : null;
      } catch {
        // Keep the raw body so preview can expose a useful diagnostic.
      }

      if (!response.ok) {
        const upstreamMessage =
          data?.error?.message || data?.message || rawBody || `HTTP ${response.status}`;
        throw new Error(`Audit service returned HTTP ${response.status}: ${upstreamMessage}`);
      }

      if (!data?.lighthouseResult) {
        const upstreamMessage = data?.error?.message || data?.message || rawBody || 'Invalid response';
        throw new Error(`Audit service did not return Lighthouse results: ${upstreamMessage}`);
      }

      const categories = data.lighthouseResult.categories || {};
      const score = (category) => (category?.score != null ? Math.round(category.score * 100) : null);

      const perfScore = score(categories.performance);
      const accessibilityScore = score(categories.accessibility);
      const seoScore = score(categories.seo);
      const bestPractices = score(categories['best-practices']);
      const agenticBrowsing = score(categories['agentic-browsing']);
      const hostname = (() => {
        try {
          return new URL(siteUrl).hostname.replace(/^www\./, '');
        } catch {
          return siteUrl;
        }
      })();

      const grade = (value) =>
        value == null ? '-' : value >= 90 ? 'A' : value >= 75 ? 'B' : value >= 50 ? 'C' : value >= 30 ? 'D' : 'E';

      const barClass = (value) =>
        value == null
          ? 'bg-secondary'
          : value >= 90
            ? 'bg-success'
            : value >= 75
              ? 'bg-info'
              : value >= 50
                ? 'bg-warning'
                : 'bg-danger';

      const tips = [];
      if (perfScore != null && perfScore < 90) tips.push('Tighten image delivery and caching.');
      if (accessibilityScore != null && accessibilityScore < 90)
        tips.push('Fix contrast, labels, and keyboard access.');
      if (seoScore != null && seoScore < 90) tips.push('Improve metadata, structure, and search intent alignment.');
      if (bestPractices != null && bestPractices < 90) tips.push('Clean up technical issues that weaken trust and speed.');
      if (agenticBrowsing != null && agenticBrowsing < 90)
        tips.push('Make key content and interactions easier for browsing agents to understand.');
      if (!tips.length) tips.push('Strong baseline. The next wins are likely strategic, not technical.');

      const contactUrl = new URL('/contact/', window.location.origin);
      contactUrl.searchParams.set('source', 'snapshot');
      contactUrl.searchParams.set('siteUrl', siteUrl);
      contactUrl.searchParams.set('strategy', strategy);

      resultDiv.innerHTML = `
        <div class="card">
          <div class="card-body p-4">
            <div class="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-4">
              <h3 class="h5 mb-0">Snapshot Results</h3>
              <span class="badge ${barClass(perfScore)}">${strategy === 'mobile' ? 'Mobile' : 'Desktop'}</span>
            </div>

            <p class="text-muted-light mb-4">Initial read for ${hostname}. This is a quick technical pass, not the full growth diagnosis.</p>

            ${[
              ['Performance', perfScore],
              ['Accessibility', accessibilityScore],
              ['Best Practices', bestPractices],
              ['SEO', seoScore],
              ['Agentic Browsing', agenticBrowsing]
            ]
              .map(
                ([label, value]) => `
                  <div class="mb-3">
                    <div class="d-flex justify-content-between mb-2">
                      <span class="fw-semibold">${label}</span>
                      <span class="badge ${barClass(value)}">${grade(value)}</span>
                    </div>
                    <div class="progress">
                      <div class="progress-bar ${barClass(value)}" style="width:${value ?? 0}%">
                        ${value ?? '-'}
                      </div>
                    </div>
                  </div>
                `
              )
              .join('')}

            <div class="mt-4">
              <h4 class="h6 mb-2">Quick Wins</h4>
              <ul class="mb-0 text-muted-light">
                ${tips.map((tip) => `<li>${tip}</li>`).join('')}
              </ul>
            </div>

            <div class="mt-4">
              <a href="${contactUrl.toString()}" class="btn btn-outline-light">Get The Full Review</a>
            </div>
          </div>
        </div>`;
    } catch (err) {
      handleApiError(err, 'PageSpeed');
      const previewDetail = isPreview && err?.message
        ? `<details class="mt-3"><summary>Preview diagnostic</summary><code class="d-block mt-2 text-break">${escapeHtml(err.message)}</code></details>`
        : '';
      resultDiv.innerHTML = `
        <div class="alert alert-danger mb-0">
          Sorry, we could not analyze that site. Please check the URL and try again.
          ${previewDetail}
        </div>`;
    }
  });
});
