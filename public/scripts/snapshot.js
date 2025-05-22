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

      const res  = await fetch(api);
      const data = await res.json();


      if (!data.lighthouseResult) throw new Error(data.error?.message || 'Invalid response');

      /* ───── 3  Extract scores ───── */
      const cats = data.lighthouseResult.categories || {};
      const score = (c) => (c?.score != null ? Math.round(c.score * 100) : null);

      const perfScore      = score(cats.performance);
      const seoScore       = score(cats.seo);
      const bestPractices  = score(cats['best-practices']);

      /* ───── 4  Helpers ───── */
      const grade = (s) =>
        s == null ? '–' :
        s >= 90  ? 'A' :
        s >= 75  ? 'B' :
        s >= 50  ? 'C' :
        s >= 30  ? 'D' : 'E';

      const barClass = (s) =>
        s == null ? 'bg-secondary' :
        s >= 90  ? 'bg-success' :
        s >= 75  ? 'bg-info'    :
        s >= 50  ? 'bg-warning' : 'bg-danger';

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
              .map(([label, s]) => `
                <div class="mb-3">
                  <div class="d-flex justify-content-between">
                    <span class="fw-bold">${label}</span>
                    <span class="badge ${barClass(s)}">${grade(s)}</span>
                  </div>
                  <div class="progress">
                    <div class="progress-bar ${barClass(s)}" style="width:${s ?? 0}%">
                      ${s ?? '–'}
                    </div>
                  </div>
                </div>
              `)
              .join('')}

            <h5 class="mt-4">Quick Wins:</h5>
            <ul>${tips.map((t) => `<li>${t}</li>`).join('')}</ul>

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

