# Task 13 — sitemap and production robots

## Task 13 — preview publication authorized — 2026-10-26

Owner explicitly requested 'Commit, push, deploy' for the accepted Task 13 implementation. Existing technical signoff and owner APPROVED / KEEP are preserved. Scoped source commit/push and the exact-SHA preview pin/deployment are authorized and in progress; production release remains excluded. Publish only Task 13 files and status additions over the current remote branch, preserving the lagging checkout and all pre-existing work. Use a clean CI build, then verify deployed sitemap, crawler exclusions and preview safeguards. Original-baseline +105/-0 becomes +106/-1/net105/changed107 including the authorized pin; N120/M180 remains the ceiling.


## Task 13 — owner APPROVED / KEEP — 2026-10-26

Owner explicitly replied 'Keep' for the current Task 13 sitemap/robots implementation. Existing managing-agent technical signoff is preserved. This supersedes owner-KEEP-pending entries below; acceptance applies to the reviewed local implementation.

Original-baseline accounting remains **+105/-0/net105/changed105; N120/M180/scope PASS**. No application or verifier changes and no checks repeated. Commit, push, preview-pin update, preview deployment and production release remain separately unapproved. Publication must use a clean build of retained source, never the fixture-bearing verification output.


## Task 13 — managing-agent technical signoff — 2026-10-26

Technical signoff granted for the current local implementation. Independent review inspected the integration, production robots, retained verifier, saved build/check logs and generated artifacts. XML parsing and an independent HTML metadata/canonical comparison confirm exactly 23 eligible URLs, including all 10 current published articles, with error/thank-you/noindex fixtures excluded and the draft fixture absent. Production robots matches the approved content. Submitted successful fresh-build and preview safeguard/idempotence evidence was inspected and reused; no full build, browser matrix, form or diagnostic was repeated.

Original-baseline hashes independently confirm all 703 original files remain present, with only the config and three authorized records changed. Counted diff is **+105/-0/net105/changed105; N120/M180/scope PASS**, including 66 retained verifier lines. The reserved future preview pin would make +106/-1/net105/changed107; it has not changed. No blocking defect found. Evidence: C:/Users/tarek.azzi/.codex/visualizations/2026/09/17/01a0ae53-e8af-7181-85da-dc4c0ced41e8/task-13-independent-review/review.json.

This supersedes technical-review-pending entries for this snapshot. Owner KEEP and commit/push/preview publication remain pending; production is unchanged. Node 22 CI, normal font generation and deployed crawler-file/safeguard checks remain publication-stage verification. Use a clean CI build of retained source, never the saved fixture-bearing verification output. Only these review records were updated locally; no application edit, pin change, commit, push or deployment during this review.


2026-10-26. **Ready for managing-agent review.** Owner explicitly replied “Approved” to the three-file implementation/verification scope and task-wide N120/M180 in TASK-13-SITEMAP-ROBOTS-PROPOSAL.md. Technical signoff, owner KEEP, commit/push, preview-pin change, deployment and production release remain separate and unapproved.

## Result and exact files

The source had no XML sitemap or production robots file. `astro.config.mjs` now registers a small named integration that uses the configured site and completed-build page/output hook to generate one sorted, deduplicated, XML-escaped sitemap. It uses actual generated HTML routes, preserves the existing blog draft filter, excludes error/thank-you/specimen/non-HTML/reserved resource paths and queries/fragments, and excludes generated noindex pages. Existing configuration, fonts, route content, forms, diagnostics and metadata are preserved. No package or dependency change.

`public/robots.txt` allows all public crawling and references `https://digitful.ca/sitemap.xml`. No special AI crawler rules, invented dates, priority or change frequency were added. Sitemap omission does not change a page's indexability.

`docs/visual-refresh/task-13-check.ps1` provides focused native XML/canonical/article/robots checks and runs the existing preview preparation script twice against a disposable output copy. It checks preview disallow-all, one noindex/nofollow/noarchive robots meta per HTML file, production GTM removal, the submission guard and byte-level idempotence.

Documentation changes are confined to this implementation record and Task 13 entries in HANDOFF.md, TASK-QUEUE.md and CHANGELOG.md. The reviewed proposal and all earlier records remain intact.

## Original baseline and budget

Source branch is `visual-refresh`. Local HEAD remains deliberately lagging at `d4df671724888071a845d1da03073b4a34403210`; the remote source tip rechecked immediately before edits is `14311da1129a9e3181a83583442c2acf8c54d024`. Task accounting uses captured pre-edit local file bytes and new Task 13 files, excluding pre-existing work. The original config also matches the inspected remote config. A SHA-256 baseline captured 703 existing non-ignored files, including the proposal and its managing-agent review note.

Preview tip remains `5389d2455ea09febe44f21ecafbfa08e07ac00ba`, pinning accepted Task 12 source `7ce91634096bede957c3b3c00420e2b632e44e83`. Production main was rechecked at `c8fac4f78295d2576af0e92b04329f4e938c7b6f`. No repository ref, pin or remote file was changed.

| Counted file | Added | Removed |
| --- | ---: | ---: |
| `astro.config.mjs` | 36 | 0 |
| `public/robots.txt` | 3 | 0 |
| `docs/visual-refresh/task-13-check.ps1` | 66 | 0 |
| **Actual total** | **105** | **0** |

**Net +105; total changed 105. N120 PASS; M180 PASS; authorized scope PASS.** Documentation prose is excluded. There is no additional retained task-authored tooling outside these files. An unused later preview-pin allowance is +1/-1: projected cumulative +106/-1/net105/changed107 if publication is separately authorized. No budget or scope amendment was needed. No unrelated functionality was intentionally changed.

Final preservation checks compare every baseline hash: only the config and the three authorized status records change among pre-existing files; no original file is missing. Existing application changes, Task 12 files, package manifests/lockfile and the reviewed proposal remain intact. See preservation.json and budget.json in the evidence directory.

## Focused verification

One fresh `npm.cmd run build` completed successfully with installed pinned Astro 7.3.2 and Node v24.13.0. The build ran in a disposable copy of current source and installed dependencies; the repository's pre-existing stale `dist` was never reused or overwritten. Two temporary fixtures were present only in the disposable source: a valid draft article copied from existing frontmatter with `draft: true`, and a noindex HTML page with content-before-name metadata ordering.

Build output: **26 HTML pages**, comprising the site's 25 current pages and the noindex fixture. The draft fixture generated no HTML route. XML parsing and complete comparison with eligible generated HTML canonicals passed: **23 canonical sitemap URLs, including all 10 published articles**. Each published source article was independently checked against its expected URL. The noindex page, 404, thank-you, specimen paths, raw Markdown, assets, scripts, query strings and fragments are absent. Canonical origin, paths, trailing slashes, uniqueness, namespace, omitted date/priority/frequency fields and exact production robots content pass.

The remote preview preparation script was fetched at the exact inspected preview commit, and its bytes were verified against Git blob `f72377392f9d93ff918837a34bfa48789f63455d` before execution. The retained verifier ran it against a disposable copy of the fresh output: all 26 HTML files retained the preview safeguards, robots was exactly disallow-all with no production sitemap directive, and all files were byte-identical after a second run. No preview source or workflow edit was necessary. Preview may retain the canonical production sitemap file; it remains blocked by preview robots/noindex.

PowerShell syntax and task-only whitespace/diff checks pass. Disposable source/dependency/fixture and preview-check copies were removed after verification; fresh generated output and logs remain available for review. No screenshot matrix, mockups, browser session, live form/diagnostic submission, deployment or unrelated audit was performed.

## Limits and evidence

Local Node v24.13.0 differs from the workflow's Node 22; this is not CI or deployed-preview verification. Existing Google font metadata downloads failed DNS resolution (`ENOTFOUND`); font warnings and Sass/Bootstrap deprecation warnings remain. They did not prevent the successful build or crawler-file checks. Existing successful Task 12 CI font evidence was not repeated or treated as a fresh result here. Future publication must use the existing exact-SHA preview workflow under separate authorization.

Evidence directory: `C:/Users/tarek.azzi/.codex/visualizations/2026/10/26/01a17685-fc67-7150-9ff8-af3925b3a9eb/task-13/`:

- `baseline.json`, `astro.config.before.mjs`, `status-before.txt`: original bytes/hashes and working-tree state.
- `build.log`, `check.log`: the single fresh build and focused verifier results.
- `production-dist/sitemap.xml`, `production-dist/robots.txt`: fresh crawler artifacts. Output also retains the temporary noindex page for review; it is a verification artifact, not a deployment bundle.
- `preservation.json`, `budget.json`: final file preservation and actual task accounting.

Review command: run `docs/visual-refresh/task-13-check.ps1` with `-Dist` pointing to a fresh build directory under its source root and `-PreparePreview` pointing to the exact inspected preview preparation script. The verifier expects the source collection alongside the build output so it can check published article completeness. No further build/check is necessary merely to review the saved evidence.
