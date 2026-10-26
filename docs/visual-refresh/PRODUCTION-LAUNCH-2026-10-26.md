# Digitful production launch — 26 October 2026

Status: **Published and verified at https://digitful.ca/.** Owner authorized backup, production replacement and focused checks. All earlier production-approval-pending notes are historical.

## Versions and backup

- Old production and verified `backup/old-production`: `c8fac4f78295d2576af0e92b04329f4e938c7b6f`.
- Deployed production source: `7b0b98607a142bd05bdc6529dfbe6e7cdf94fa4d`.
- Accepted application-equivalent preview source: `3c785fa6067fb9809aa7d082ffc8ccca5aa38cc0`.
- Unchanged separate preview pin commit: `5397ff92d85ebd30a7f8f35e8cc3e053546fbf0e`.
- Successful production build/deploy: [workflow 40329759813](https://github.com/tarekazz1/digitful/actions/runs/40329759813), Node 22.23.3, 25 HTML pages and six font files. Existing deprecation warnings remain.

The inspected source was 265 commits ahead of the old main with no commits behind. The source's application tree matched the accepted preview; later differences were reviewed records only. The old revision was saved on the backup branch before main moved. Production used the existing workflow, domain and configured source; no DNS or hosting configuration was changed and no new implementation was added.

## Production verification

- All 23 sitemap URLs return 200 with production-domain canonicals, unique page titles, one H1 and index/follow metadata; robots allows crawling and references https://digitful.ca/sitemap.xml. This makes the site eligible for crawling, not a guarantee of indexing or search rankings.
- Eight raw knowledge files and three optimized image files match reviewed local bytes.
- The new thank-you route is live; missing paths return the branded 404 with HTTP 404. Both specimen paths return 404.
- Production contact configuration retains FormSubmit, honeypot, CAPTCHA enabled by omission of the disabling field, required validation and https://digitful.ca/thank-you/ redirect. Preview-only submission guards are absent.
- Brief Chromium desktop/mobile checks pass navigation, theme switching/persistence, homepage reveals and native invalid-contact/diagnostic-URL validation. No page or console errors were observed.
- GTM-53THDCJH script returns 200 and its container loads with data-layer lifecycle events. Analytics dashboard receipt, attribution and conversion-event delivery were not independently verified.
- The separate preview still has noindex, GTM removal, submission guard and disallow-all robots. It was not republished or opened to indexing.

Normal HTTP/browser TLS checks succeeded. No screenshots, full QA matrix or performance re-audit. No new email/form/CAPTCHA submission or external diagnostic call was performed; the owner's prelaunch live integration results were reused. Physical-device/other-browser and field-performance coverage remain as previously documented. One live diagnostic response and later owner audit results are confirmed; a complete device-mode pair was not explicitly reported.

## Accounting and preserved work

Launch introduced zero new counted application, style, script, test or configuration lines. The large old-main-to-new-main difference consists of already-approved task work and was not reset into a new budget. Completion documentation is excluded under the existing rule. All 712 original local files were hashed before launch; application/unrelated files remained unchanged during release. The working tree stayed on its lagging visual-refresh checkout; no reset, clean, dependency installation or wholesale working-tree publication occurred.

Completion records are synchronized to main and visual-refresh using a documentation-only commit with [skip ci]. Only documentation paths may appear in that final diff; the already-verified production application artifact remains deployed from the source above. [GitHub's documented skip-CI behavior](https://docs.github.com/en/actions/how-tos/manage-workflow-runs/skip-workflow-runs).

## Restore the old site if requested

The old source/history is preserved at [backup/old-production](https://github.com/tarekazz1/digitful/tree/backup/old-production). It is not a separate hosted website. If a rollback is requested, create a new commit on the then-current main using that backup's application tree and let the normal production workflow deploy it. Preserve current history and use an expected-head check; do not force-reset branches or alter the backup. Recheck production URLs after deployment. No rollback was required or performed for this successful launch.

## Evidence

C:/Users/tarek.azzi/.codex/visualizations/2026/09/17/01a0ae53-e8af-7181-85da-dc4c0ced41e8/production-launch/: baseline.json, live-http.json, live-browser.json, publication.json and preservation.json. Exact GitHub branch/tree comparisons and workflow logs were inspected through the connected account. No task-authored executable helper was retained.
