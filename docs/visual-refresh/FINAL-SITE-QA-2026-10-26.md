# Final site-wide QA — 26 October 2026

## Hidden H1 and optimized images — committed and deployed to preview — 2026-10-26

Owner-authorized combined publication is complete. Reviewed application source `542101273e017e2ec8b9a9646d2848c7dba11190` is deployed by preview pin commit `5728d0796cea4a770cf8241c07a770b9ce6fcdcb`. [Workflow 40295683747](https://github.com/tarekazz1/digitful-preview/actions/runs/40295683747) completed both build and deployment successfully: clean Node 22 workflow, 25 generated pages, six fonts and normal preview preparation. Existing Sass/Actions deprecation warnings remain; the local font-download limitation is resolved for this publication.

Live HTTP checks pass on all three changed pages: exactly one correct preview robots meta, production GTM removed and submission guard retained. Deployed stylesheet uses the optimized Social Media derivative; Automation selects the optimized mobile/desktop sources; Command Center has one accessible, visually hidden H1 while the visible logo/subtitle remain. All three optimized assets and all three original assets are byte-identical to their reviewed local files; all six deployed font files load. Preview robots remains exactly disallow-all. Normal certificate validation succeeded for the publication HTTP/browser checks.

Six focused live Chromium states (390 dark / 1440 light on the three changed pages) pass heading, image and layout checks. Four cold mobile lab samples reuse the earlier 1.6 Mbps / 150 ms / 4x CPU profile: Social Media LCP 1.64 s with about 548 KiB transferred; Automation median LCP 2.01 s across three samples with about 302 KiB transferred. These are focused browser lab observations, not Lighthouse or field Core Web Vitals. Previous full QA was reused; no forms, email, CAPTCHA or live diagnostic was submitted. Browser closed, no server started.

Final source diff is +4/-3, plus one shared preview pin +1/-1: **combined +5/-4/net1/changed9**. Image scope is +4/-4/net0/changed8 under N10/M20 including that pin; separate H1 scope is +1/-0/net1/changed1 under N5/M10. Both budgets and scope PASS. Original artwork and unrelated local work are preserved; the lagging local checkout was not reset. No production deployment or production-branch update was performed.

This supersedes earlier acceptance/publication-pending notes for these reviewed fixes. Evidence: C:/Users/tarek.azzi/.codex/visualizations/2026/09/17/01a0ae53-e8af-7181-85da-dc4c0ced41e8/image-performance/publication/ (live-http.json, browser-checks.json, live-performance.json and publication.json). Remaining pre-launch work is real CAPTCHA/email/redirect and live diagnostic verification under relevant authorization, then the separate production-release decision.


## Hidden H1 and image optimization — preview publication authorized — 2026-10-26

Owner explicitly requested “commit, push and preview deployment” for the reviewed hidden H1 and compressed-artwork bundle. Publish only the three source changes, three new binary derivatives and scoped QA/performance records to visual-refresh; preserve all originals and unrelated work. Existing technical verification is complete; publication uses the exact-SHA preview workflow and clean CI. Final shared-pin accounting is +5/-4/net1/changed9 across H1 N5/M10 and image N10/M20, with the pin counted once. Production release is excluded. Live publication checks will cover the hidden heading, optimized resources, image layout and preview safeguards; do not repeat full-site QA or simulated backend tests.


## Final QA follow-up — hidden H1 corrected; performance measured — 2026-10-26

Owner authorized the proposed F01 correction and read-only performance work with “can you do it”. Added one visually hidden H1 using the existing logo-alt wording; the approved visible logo/subtitle composition stays unchanged. Local fresh build passes (25 pages), generated output contains one H1, and four live-CSS semantic/geometry checks at 390/1440 light/dark pass. These used the exact built heading inserted into the current preview DOM; the corrected source is local, not deployed. **+1/-0/net1/changed1; N5/M10/scope PASS**, no retained test code. Separate publication/pin remains unapproved. This supersedes F01 implementation-pending entries; local font DNS/Sass and real integration-verification limits remain disclosed.

Read-only performance checks completed: 18 initial mobile/desktop lab measurements over nine representative routes plus two Automation repeats. Social Media's 1.95 MB closing PNG loads eagerly; Automation's 296 KB mobile hero yields 2.81/2.91 s repeat LCP under the defined synthetic mobile profile. An initial Automation run had a 30.32 s document response delay and is retained as an outlier, not attributed to a reproducible application fault. Other initial mobile LCP samples were 1.52–1.84 s; desktop 0.50–1.59 s; maximum observed CLS 0.0044. No Lighthouse/field-CWV/INP pass is claimed. Browser closed, no server, forms or diagnostics invoked; full QA was not repeated.

See [FINAL-PERFORMANCE-2026-10-26.md](./FINAL-PERFORMANCE-2026-10-26.md) for methods, raw evidence and the proposed small two-image optimization (N10/M20, unapproved). No performance code or artwork changed. Commit/push, preview and production deployments were not performed. Existing real CAPTCHA/email/redirect and diagnostic-backend verification remain outstanding before production release. A later scoped publication can combine approved image changes and this H1 correction; do not repeat unaffected QA.


## Managing-agent evidence review — 2026-10-26

Reviewed the report, summary/events/preservation evidence, current Command Center source and the earlier owner decision to remove its separate visible title. The evidence supports a pass for the covered preview flows: 74 controls, 88 responsive states and the reported internal-link checks; no unresolved blocker in that tested scope. These are reviewed worker browser results, not independently rerun browser checks. F01 is confirmed in source. Recommend the proposed visually hidden H1 with the existing image-alt wording, preserving the approved logo/subtitle and absence of a visible duplicate title; N5/M10 and implementation remain pending owner approval.

Proceed with the planned read-only performance checks without repeating this QA matrix. Keep real CAPTCHA/email/redirect and live diagnostic backend verification explicitly outstanding before production release; simulated responses do not verify those integrations. Performance findings and any approved H1 correction can share a later scoped preview publication. No application change, new test code, owner approval, commit, push, deployment or production-release signoff in this review.


Status: **QA pass completed; ready for managing-agent review with one minor finding.** No blocker was found in the covered preview flows. This is not production-release approval or a claim that the intentionally blocked live integrations have been tested.

## Finding F01 — missing page heading on SEO Command Center

**Low priority, accessibility/SEO cleanup.** `/seo-command-center/` has no H1. Its logo image supplies an accessible image name, but it is inside a div and does not provide a page-level heading for heading navigation. The first content headings are H2s. The browser found this exception consistently; all other 22 sitemap pages have one H1.

Source: [src/pages/seo-command-center/index.astro](../../src/pages/seo-command-center/index.astro), lines 8–21. The existing image alt is `Digitful SEO Command Center`. Evidence: `routes.json` and `seo-command-center-390-dark.png` in the evidence directory below. This is a semantic improvement, not a broken route, invisible logo, or claim of a formal WCAG violation.

Smallest proposed fix, **not implemented or approved**: add one visually hidden H1 using that exact existing image-alt wording near the logo. Application allowlist: `src/pages/seo-command-center/index.astro` only. Preserve visible copy, artwork, layout, links and behavior. Suggested separate ceilings: **N5/M10**, including any later authorized preview-pin replacement; expected source delta +1/-0, or +2/-1/net1/changed3 including a later pin. Documentation records are excluded under the existing invariant. Verify the resulting accessible heading, unchanged layout and build output; use the existing preview process only if separately authorized. No new dependency or retained test script is needed. Scope/N/M approval is required by DELTA-LOC-INVARIANT.md before this fix.

## Baseline and scope

Owner requested item 1, final site-wide QA, after Task 13 publication. Checks ran against `https://preview.digitful.ca`, deployed application source `4a4ee27ced58dbedb1bcc66e81d24b6ded5ce108`, pinned by preview commit `242e1d5e1f9314741a7308a971a7585722b74f60`. Remote `visual-refresh` tip was `ef4924c332bd7f5a9f228c918eefcd0123e79415` (completion records only); production main was `c8fac4f78295d2576af0e92b04329f4e938c7b6f`. The lagging local HEAD was not used as a deployment input.

Read-only application review using Chromium 153.0.8010.12, with desktop/mobile viewport checks, normal keyboard/mouse input, native validation and controlled diagnostic request fixtures. No application edits, retained test-code additions, dependencies, local server, new build, commit, push, preview-pin change, deployment or performance audit. The inventory was recorded before testing. Task 13's same-source successful Node 22 CI/crawler evidence was reused rather than rebuilding or repeating its full HTTP matrix.

## Results

| Area | Evidence and result |
| --- | --- |
| Public routes | All 23 sitemap routes returned 200 in the live browser; thank-you returned 200; a genuinely missing path returned HTTP 404 with the branded page and working recovery link. |
| Metadata and structure | All 23 have nonempty, unique titles; descriptions, document language and expected production canonicals are present. Structured-data blocks parse as JSON; no duplicate IDs or images missing alt attributes were detected. F01 is the sole H1 exception. This does not assert rich-result eligibility. |
| Internal links | 506 references resolve across 27 unique internal URL targets, including contact queries and the knowledge index; no failed targets or missing referenced fragments. Mail/tel actions and 33 distinct external HTTP destinations were inventoried without activation. |
| Navigation/themes | Desktop services dropdown and Escape, mobile menu/service selection/open-close, light → dark → light, and persistence through navigation/reload pass. Narrow open-menu theme switching also passes. |
| Homepage | All three problem reveals open and reset. Follow-up timer completes, cancels/resets on close and produces the immediate result under reduced motion. |
| SEO | Four disclosures toggle/reset; all four problem choices reveal their own response; radio keyboard navigation and the actual selector-to-contact CTA handoff pass. |
| Blog | All 10 articles are present in newest-first order. All five filters, the legitimate empty Social Media category and keyboard reset pass. Article body, FAQ open/close and CTA-to-contact flow pass. |
| Contact | Required-name, invalid-email and required-privacy validation pass. Multi-select/deselect, keyboard order and visible focus, all four service presets, an unknown preset, delimiter-containing diagnostic context and editable prefill pass. A valid fictional form produces the preview-disabled alert without a POST. |
| Diagnostic | Device selection/reset and malformed-URL validation pass. Browser-intercepted success, unavailable-score display, upstream error/retry availability and the actual results CTA-to-contact handoff pass. **Scores shown in diagnostic evidence are synthetic fixtures, not measurements of Digitful's performance. No live external audit was requested.** |
| Responsive fit | 64 states: 16 representative routes at 390/1440px in light/dark, including every static page type, one article, thank-you and 404. Zero horizontal overflow, out-of-viewport meaningful text/control boxes or broken loaded images. |
| Narrow/tablet | Another 24 states at 320/1024px in both themes across home, Automation, Contact, blog index, SEO and Paid Ads. Zero horizontal overflow or broken loaded images; fonts loaded. These are viewport checks, not physical-device testing. |
| Browser/network | 74 final control assertions pass. No uncaught page errors, failed requests or unexpected resource/console errors were observed. Expected error evidence consists of the intercepted diagnostic 503 and deliberate missing-route 404 responses/console messages. |
| Preview isolation | Browser checks preserved noindex/GTM removal/submission guards; no POST or live diagnostic request escaped interception. Task 13's successful same-source live robots/canonical/sitemap/preview-safeguard evidence remains applicable. |

Full-page captures were taken for the 16 representative routes at desktop/light and mobile/dark. Visual review sampled the service artwork, diagrams, navigation, contact form, article reading layout, index, utility pages, thank-you and 404. Numeric checks cover all 88 recorded states; this does not claim individual visual approval of every state or article. The accepted designs and copy were not reopened.

Exploratory checks included narrow-screen menu/theme changes, keyboard multi-select, empty-category reset, real SEO/article CTA navigation, timer cancellation/in-motion/reduced-motion behavior, and thank-you/404 recovery. The finding remains advisory; no managing-agent signoff or owner KEEP is self-awarded by this QA pass.

## Verification boundaries and resolved test artifacts

- Actual email delivery, CAPTCHA completion and the real post-submission redirect were not tested because preview deliberately blocks submission. The thank-you route itself was checked independently.
- The live PageSpeed proxy/backend was not invoked. Only its browser UI and contact handoff were exercised with intercepted responses; live service reliability remains unverified.
- Real iPhone/Safari, other browser engines and external application functionality were not tested. Performance measurement remains item 2, separate from this pass.
- The initial diagnostic-handoff assertion ran before Contact initialization. A real CTA click was repeated with DOMContentLoaded/prefill readiness and passed; the evidence retains this correction. It is not an unresolved application defect.
- Some initial full-page captures framed a sticky header during smooth scrolling. Capture positioning was corrected without rerunning passed layout metrics. A suspicious privacy-heading capture was checked against actual computed styles and a fresh viewport image: its H1 is visible. Do not confuse it with F01 on the separate Command Center landing page.

## Preservation, accounting and next steps

A SHA-256 baseline captured all 706 existing non-ignored repository files. **All 706 were unchanged before the report was written.** Final writes are only this QA report and documentation checkpoints in HANDOFF.md and CHANGELOG.md; all application, tooling, accepted Task 13 and pre-existing work remain intact. Application/source/config/tooling delta is **+0/-0/net0/changed0**. No Task 13 allowance was reused, and no implementation scope/budget has been approved for F01. Documentation prose and binary screenshots are excluded under DELTA-LOC-INVARIANT.md.

Next decisions: approve/defer F01's separate one-file fix; perform item 2 performance checks; arrange any desired live email/diagnostic verification under its relevant authorization; then make a separate production-release decision. No production deployment is implied.

Evidence directory: `C:/Users/tarek.azzi/.codex/visualizations/2026/10/26/01a17685-fc67-7150-9ff8-af3925b3a9eb/final-site-qa/`.

- `INVENTORY.md`, `baseline.json`, `preservation-before-report.json`, `preservation.json` — planned coverage and preservation.
- `routes.json`, `links.json`, `controls.json`, `diagnostic.json` — route/link/control and simulated-integration results.
- `responsive.json`, `narrow-tablet.json`, `events.json`, `summary.json` — all recorded states and expected/unexpected failures.
- `*-1440-light.png`, `*-390-dark.png`, focused viewport/control images and review plates — rendered evidence. `command-privacy-heading-viewport.png` confirms the separate privacy heading; `contact-keyboard-focus.png` records focused service selection.
- Prior same-source publication evidence remains in the adjacent `task-13/publication/` directory.

Task-owned browser was closed. No user browser session, Codex infrastructure or unrelated process was stopped.
