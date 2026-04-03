import { handleApiError } from './errorHandler.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('snapshot-form');
  const urlInput = document.getElementById('snapshot-url');
  const resultDiv = document.getElementById('snapshot-result');

  if (!form || !urlInput || !resultDiv) {
    return;
  }

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

      const response = await fetch(api);
      const data = await response.json();

      if (!data.lighthouseResult) throw new Error(data.error?.message || 'Invalid response');

      const categories = data.lighthouseResult.categories || {};
      const score = (category) => (category?.score != null ? Math.round(category.score * 100) : null);

      const perfScore = score(categories.performance);
      const seoScore = score(categories.seo);
      const bestPractices = score(categories['best-practices']);

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
      if (seoScore != null && seoScore < 90) tips.push('Improve metadata, structure, and search intent alignment.');
      if (bestPractices != null && bestPractices < 90) tips.push('Clean up technical issues that weaken trust and speed.');
      if (!tips.length) tips.push('Strong baseline. The next wins are likely strategic, not technical.');

      resultDiv.innerHTML = `
        <div class="card">
          <div class="card-body p-4">
            <div class="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-4">
              <h3 class="h5 mb-0">Snapshot Results</h3>
              <span class="badge ${barClass(perfScore)}">${strategy === 'mobile' ? 'Mobile' : 'Desktop'}</span>
            </div>

            ${[
              ['Performance', perfScore],
              ['SEO', seoScore],
              ['Best Practices', bestPractices]
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
              <a href="/contact/" class="btn btn-outline-light">Get The Full Review</a>
            </div>
          </div>
        </div>`;
    } catch (err) {
      handleApiError(err, 'PageSpeed');
      resultDiv.innerHTML =
        '<div class="alert alert-danger mb-0">Sorry, we could not analyze that site. Please check the URL and try again.</div>';
    }
  });
});
