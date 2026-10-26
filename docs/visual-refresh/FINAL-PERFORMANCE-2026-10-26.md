# Final performance checks — 26 October 2026

## Hidden H1 and image optimization — preview publication authorized — 2026-10-26

Owner explicitly requested “commit, push and preview deployment” for the reviewed hidden H1 and compressed-artwork bundle. Publish only the three source changes, three new binary derivatives and scoped QA/performance records to visual-refresh; preserve all originals and unrelated work. Existing technical verification is complete; publication uses the exact-SHA preview workflow and clean CI. Final shared-pin accounting is +5/-4/net1/changed9 across H1 N5/M10 and image N10/M20, with the pin counted once. Production release is excluded. Live publication checks will cover the hidden heading, optimized resources, image layout and preview safeguards; do not repeat full-site QA or simulated backend tests.


## Final image optimization — implemented and verified locally — 2026-10-26

Owner approved the image-only N10/M20 scope. Added same-dimension, identical-alpha WebP derivatives and changed only three references in Social Media collage CSS and Automation. Original artwork files are byte-identical. Binoculars: 1,955,595 to 374,262 bytes (80.9% smaller); Automation mobile: 295,776 to 137,740 (53.4%); desktop: 834,986 to 322,598 (61.4%). Existing hidden H1 work is preserved as a separate task.

Fresh 25-page build and eight focused desktop/mobile light/dark appearance/geometry checks pass; full QA was not repeated. Controlled local HTTP A/B comparison shows Automation mobile median LCP 2.90 to 2.12 s (three runs/version), and Social Media initial transfer 2,132 to 588 KiB. No deployed performance claim; TLS bypass and local font DNS/Sass limits are disclosed. Browser and temporary mirror closed.

**+3/-3/net0/changed6; N10/M20/scope PASS**, including all retained code (none added beyond the three reference replacements). Original images/pre-existing work preserved. Technical verification complete; owner acceptance/publication pending. No commit, push, pin change or deployment. The hidden H1 and approved images can share one later authorized preview publication. See [FINAL-IMAGE-OPTIMIZATION-2026-10-26.md](./FINAL-IMAGE-OPTIMIZATION-2026-10-26.md) for evidence and shared-pin accounting. Existing real CAPTCHA/email/redirect and live diagnostic checks remain outstanding before production release. This supersedes image-scope-unapproved/implementation-pending entries below.


Status: **Read-only measurements complete; two targeted image optimizations recommended.** H1 correction is implemented locally and separately verified. No performance-related application change, dependency, commit, push or deployment.

## Measured scope and method

Measured live preview source `4a4ee27ced58dbedb1bcc66e81d24b6ded5ce108`, already accepted after Task 13. Chromium 153.0.8010.12 ran 18 sequential initial-viewport measurements: nine representative routes on mobile and desktop, plus two targeted mobile Automation repeats to investigate an outlier. Fresh browser contexts, browser cache disabled, device pixel ratio 1, light theme. Mobile: 390 x 844, 1.6 Mbps download / 0.75 Mbps upload, 150 ms emulated latency and 4x CPU slowdown. Desktop: 1440 x 1000, 10 Mbps / 1 Mbps, 40 ms latency, no CPU slowdown. Browser throttling is synthetic and host-dependent.

Recorded initial rendering through load/fonts plus 1.5 seconds, without scrolling, form submissions or a diagnostic/backend request. Transfer totals are observed network bytes during that window, including any eagerly requested below-fold assets, not the size of an entire scrolled session. No Lighthouse package was installed. These are browser lab observations, not Lighthouse scores or field Core Web Vitals; INP, field 75th percentiles and long-term server reliability were not measured. Full QA was not repeated.

## Initial measurements

| Route | Mobile LCP seconds | Desktop LCP seconds | Mobile transfer KiB | Desktop transfer KiB |
| --- | ---: | ---: | ---: | ---: |
| `/` | 1.82 | 0.51 | 265 | 396 |
| `/social-media/` | 1.74 | 1.42 | 2093 | 2225 |
| `/seo/` | 1.78 | 0.68 | 228 | 436 |
| `/paid-ads/` | 1.84 | 0.73 | 253 | 504 |
| `/automation/` | 32.84 (outlier; repeats 2.91 / 2.81) | 1.59 | 456 | 1114 |
| `/blog/` | 1.53 | 0.82 | 179 | 311 |
| `/blog/how-buyers-find-compare-businesses-ai-search-era/` | 1.60 | 0.67 | 185 | 316 |
| `/contact/` | 1.52 | 0.65 | 165 | 296 |
| `/seo-command-center/` | 1.67 | 0.50 | 586 | 718 |

Except the Automation outlier, initial mobile LCP was 1.52–1.84 seconds; desktop 0.50–1.59 seconds. The maximum observed CLS was 0.0044. No page JavaScript errors or failed measured navigations were recorded. These limited samples do not establish a site-wide field-performance pass. For orientation, Google's current good thresholds are LCP <= 2.5 s and CLS <= 0.1, evaluated with real-user distribution for field compliance. [Google Web Vitals](https://web.dev/articles/vitals)

## Findings and proportionate next work

**P01 — Social Media closing artwork dominates transfer.** `src/assets/_social-collage.scss:60` references `/assets/collage/social/social-binoculars.png` as a CSS background, so the below-fold illustration is fetched during initial loading. Its source is 1,955,595 bytes (about 1.87 MiB); mobile measured transfer for the whole page is about 2.04 MiB. LCP itself was 1.74 s mobile / 1.42 s desktop, but the image adds avoidable bandwidth and extended loading. Recommend a compressed transparent WebP derivative of the same original artwork, sized for its actual display, and change only the resource reference. Preserve the original PNG and composition; do not substitute the superseded AVIF or redesign/lazy-load the section as an unrelated refactor.

**P02 — Automation hero is heavier than the other service heroes.** Mobile artwork is 295,776 bytes and desktop is 834,986 bytes. The first mobile run had a 30.32 s document TTFB and 32.84 s LCP. The two repeats had 0.40 / 0.24 s TTFB and 2.91 / 2.81 s LCP; in each repeat the image took about 2.47 s to load under the defined mobile network. Preserve the anomalous first run in the evidence; it is not a reproducible 30-second application defect. Median observed LCP across all three Automation runs is 2.91 s. Recommend smaller encoded derivatives of the same finger artwork, retaining transparency, crop, dimensions/layout and mustard accent. No new visual direction or copy change.

Suggested combined optimization scope: Social Media collage stylesheet, Automation's two image references if new filenames are used, and new binary derivatives only, retaining all originals. **Proposed N10/M20**, including any later separately authorized preview pin; not yet approved. No retained script, dependency change, shared CSS cleanup or new loading framework is needed. Recheck image appearance/layout on the two affected sections in both themes, then repeat only their performance measurements. Do not repeat the full 88-state QA.

## F01 hidden H1 correction

Owner's “can you do it” authorized the previously proposed one-file N5/M10 correction and the read-only performance work. Added exactly `<h1 class="visually-hidden">Digitful SEO Command Center</h1>` beside the logo in `src/pages/seo-command-center/index.astro`. The original visible title stays absent; logo, subtitle, copy, links and layout remain unchanged.

Fresh local build passed with 25 pages and exactly one H1 in the generated Command Center page. Four semantic/layout checks at 390/1440px in light/dark used the exact built heading inserted into the current preview DOM: one accessible level-one heading, computed 1 x 1 clipped box, and identical logo/subtitle/content/footer geometry before/after. This checks the live CSS treatment; the corrected page itself is not deployed. Local font metadata DNS errors meant zero font files were copied by that local build; live preview fonts loaded for browser checks. Sass deprecations remain.

Independent original-baseline accounting: **+1/-0/net1/changed1; N5/M10/scope PASS**. No retained test/helper code. A separately authorized later preview pin would make +2/-1/net1/changed3. H1 correction is technically verified locally; no owner KEEP or publication is inferred. Existing CAPTCHA/email/redirect and real diagnostic-backend verification remain outstanding; this work did not exercise those integrations.

## Evidence

`C:/Users/tarek.azzi/.codex/visualizations/2026/09/17/01a0ae53-e8af-7181-85da-dc4c0ced41e8/final-performance/` contains `baseline.json`, `h1-build.log`, fresh `h1-dist/`, `h1-checks.json`, `h1-accounting.json`, `performance-results.json` and `automation-repeats.json`. No retained task-authored executable helper was created. Browser processes were closed; no local server was started. Production and preview pins are unchanged.
