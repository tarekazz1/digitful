import { handleApiError } from './errorHandler.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('snapshot-form');
  const urlInput = document.getElementById('snapshot-url');
  const resultDiv = document.getElementById('snapshot-result');

  if (!form || !urlInput || !resultDiv) {
    return;
  }

  const escapeHtml = (value) =>
    String(value)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');

  const grade = (value) =>
    value == null ? '—' : value >= 90 ? 'A' : value >= 75 ? 'B' : value >= 50 ? 'C' : value >= 30 ? 'D' : 'E';

  const metricTone = (value) =>
    value == null
      ? 'snapshot-metric--neutral'
      : value >= 90
        ? 'snapshot-metric--strong'
        : value >= 75
          ? 'snapshot-metric--watch'
          : 'snapshot-metric--weak';

  const renderMetric = (label, value) => {
    const scoreText = value == null ? '—' : String(value);
    const progress = value == null ? 0 : Math.max(0, Math.min(100, value));
    const ariaValue = value == null ? '' : ` aria-valuenow="${progress}"`;

    return `
      <div class="snapshot-metric ${metricTone(value)}">
        <div class="snapshot-metric__head">
          <span class="snapshot-metric__label">${label}</span>
          <span class="snapshot-metric__reading">
            <strong>${scoreText}</strong>
            <span class="snapshot-metric__denominator">/100</span>
            <span class="snapshot-metric__grade" aria-label="Grade ${grade(value)}">${grade(value)}</span>
          </span>
        </div>
        <div
          class="snapshot-metric__track"
          role="progressbar"
          aria-label="${label} score"
          aria-valuemin="0"
          aria-valuemax="100"${ariaValue}
        >
          <span class="snapshot-metric__fill" style="width:${progress}%"></span>
        </div>
      </div>`;
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    let siteUrl = urlInput.value.trim();
    if (!siteUrl) return;
    if (!/^https?:\/\//i.test(siteUrl)) siteUrl = `https://${siteUrl}`;

    resultDiv.innerHTML = `
      <div class="snapshot-state snapshot-state--loading" role="status">
        <span class="snapshot-state__indicator" aria-hidden="true"></span>
        <span>Running technical pass…</span>
      </div>`;

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
        // Preserve the raw response for the internal error path below.
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
        <section class="snapshot-report" aria-label="Snapshot results for ${escapeHtml(hostname)}">
          <div class="snapshot-report__head">
            <div>
              <span class="snapshot-report__eyebrow">Snapshot results</span>
              <h3>${escapeHtml(hostname)}</h3>
            </div>
            <span class="snapshot-report__mode">${strategy === 'mobile' ? 'Mobile' : 'Desktop'}</span>
          </div>

          <p class="snapshot-report__summary">
            Initial technical read. These scores are useful signals, not the full growth diagnosis.
          </p>

          <div class="snapshot-report__metrics">
            ${[
              ['Performance', perfScore],
              ['Accessibility', accessibilityScore],
              ['Best Practices', bestPractices],
              ['SEO', seoScore],
              ['Agentic Browsing', agenticBrowsing]
            ]
              .map(([label, value]) => renderMetric(label, value))
              .join('')}
          </div>

          <div class="snapshot-report__wins">
            <span class="snapshot-report__eyebrow">Quick wins</span>
            <ul>
              ${tips.map((tip) => `<li>${tip}</li>`).join('')}
            </ul>
          </div>

          <div class="snapshot-report__action">
            <a href="${contactUrl.toString()}" class="btn btn-primary">Get the full review →</a>
          </div>
        </section>`;
    } catch (err) {
      handleApiError(err, 'PageSpeed');
      resultDiv.innerHTML = `
        <div class="snapshot-state snapshot-state--error" role="alert">
          <strong>Audit unavailable.</strong>
          <span>We could not run the check just now. Please try again in a moment.</span>
        </div>`;
    }
  });
});
