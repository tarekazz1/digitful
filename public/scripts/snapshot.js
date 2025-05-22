import { handleApiError } from './errorHandler.js';

document.addEventListener('DOMContentLoaded', () => {
  const form      = document.getElementById('snapshot-form');
  const urlInput  = document.getElementById('snapshot-url');
  const resultDiv = document.getElementById('snapshot-result');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    /* ───── 1  Clean URL ───── */
    let siteUrl = urlInput.value.trim();
    if (!/^https?:\/\//i.test(siteUrl)) siteUrl = 'https://' + siteUrl;
    if (!siteUrl) return;

    resultDiv.innerHTML =
      '<div class="spinner-border" role="status"><span class="visually-hidden">Loading…</span></div>';

    try {
      /* ───── 2  API call ───── */
      const strategy = document.querySelector('input[name="strategy"]:checked')?.value || 'mobile';

      const api =
        'https://www.googleapis.com/pagespeedonline/v5/runPagespeed' +
        `?url=${encodeURIComponent(siteUrl)}` +
        `&strategy=${strategy}` +
        '&category=performance&category=seo&category=best-practices' +
        '&key=' + (import.meta.env.PUBLIC_PAGESPEED_API_KEY || '');

      const response = await fetch(api);
      const data = await response.json();


      if (!data.lighthouseResult) throw new Error(data.error?.message || 'Invalid response');

      /* ───── 3  Extract scores ───── */
      const categories = data.lighthouseResult.categories || {};
      const score = (category) => (category?.score != null ? Math.round(category.score * 100) : null);

      const perfScore      = score(categories.performance);
      const seoScore       = score(categories.seo);
      const bestPractices  = score(categories['best-practices']);

      /* ───── 4  Helpers ───── */
      const grade = (score) =>
        score == null ? '–' :
        score >= 90  ? 'A' :
        score >= 75  ? 'B' :
        score >= 50  ? 'C' :
        score >= 30  ? 'D' : 'E';

      const barClass = (score) =>
        score == null ? 'bg-secondary' :
        score >= 90  ? 'bg-success' :
        score >= 75  ? 'bg-info'    :
        score >= 50  ? 'bg-warning' : 'bg-danger';

      /* Tips */
      const tips = [];
      if (perfScore      < 90) tips.push('Compress images & enable caching.');
      if (seoScore       < 90) tips.push('Add meta descriptions & structured data.');
      if (bestPractices  < 90) tips.push('Serve images in next-gen formats (WebP).');
      if (!tips.length)        tips.push('Great work! You’re already ahead of the pack.');

      /* ───── 5  Render card ───── */
      resultDiv.innerHTML = `
        <div class="card shadow-sm fade-in">
          <div class="card-body">

            <h4 class="card-title mb-4">
              Snapshot Results
              <span class="badge ${barClass(perfScore)} ms-2">
                ${strategy === 'mobile' ? 'Mobile' : 'Desktop'}
              </span>
            </h4>

            ${[
              ['Performance',     perfScore     ],
              ['SEO',             seoScore      ],
              ['Best&nbsp;Practices', bestPractices]
            ]
              .map(([label, score]) => `
                <div class="mb-3">
                  <div class="d-flex justify-content-between">
                    <span class="fw-bold">${label}</span>
                    <span class="badge ${barClass(score)}">${grade(score)}</span>
                  </div>
                  <div class="progress">
                    <div class="progress-bar ${barClass(score)}" style="width:${score ?? 0}%">
                      ${score ?? '–'}
                    </div>
                  </div>
                </div>
              `)
              .join('')}

            <h5 class="mt-4">Quick Wins:</h5>
            <ul>${tips.map((tip) => `<li>${tip}</li>`).join('')}</ul>

            <div class="text-center mt-3">
              <a href="/contact"
                class="btn btn-outline-primary"
                target="_blank"
                rel="noopener"
                id="snapshot-lead">
                Get Your Full Report →
              </a>
            </div>

          </div>
        </div>`;


    } catch (err) {
      handleApiError(err, 'PageSpeed');
      resultDiv.innerHTML =
        '<div class="alert alert-danger">Sorry, we couldn’t analyze that site. Please check the URL and try again.</div>';
    }
  });
});

