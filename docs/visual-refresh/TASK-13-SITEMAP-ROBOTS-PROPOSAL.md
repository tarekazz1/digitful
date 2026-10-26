# Task 13 — sitemap and robots proposal

## Managing-agent proposal review — 2026-10-26

Recommend owner approval of the proposed three-file implementation/verification scope and N120/M180. No blocking issue found and no revision requested. The installed Astro 7.3.2 types/implementation and [official integration reference](https://docs.astro.build/en/reference/integrations-reference/#astrobuilddone) confirm the proposed completed-build page/output hook; current route/draft filters support the expected 23 eligible URLs. Source and preview branch tips were independently rechecked and still match the proposal. The no-dependency approach, fresh-output checks and preview overwrite preserve the intended boundaries without a new package or visual work.

This is proposal review only: no implementation, functionality signoff or owner approval is inferred. Use the configured site/output values, preserve existing configuration, and treat 23 as the current expected result rather than a maintained URL list. N120 is a ceiling, not a line target; keep the verifier proportionate without compressing code to fit. Commit, push, preview-pin change, deployment and production release remain separately unapproved. Only this review note was added; application files are unchanged.


2026-10-26. **Proposal only; scope and N120/M180 require owner approval.**

## Inspected baseline

- Local branch: `visual-refresh`; local HEAD `d4df671724888071a845d1da03073b4a34403210`. Existing tracked modifications, deletions and untracked work are pre-existing, not Task 13 changes. A read-only SHA-256 inventory captured 702 existing non-ignored files before this proposal was added.
- GitHub-confirmed source tip: `14311da1129a9e3181a83583442c2acf8c54d024`, whose parent is accepted Task 12 source `7ce91634096bede957c3b3c00420e2b632e44e83`. Use that remote tip as the source reference, and the actual pre-edit local file bytes for local change accounting; never measure this task against the lagging local HEAD or publish the whole working tree.
- GitHub-confirmed preview tip: `5389d2455ea09febe44f21ecafbfa08e07ac00ba`; `source-ref.txt` pins `7ce91634096bede957c3b3c00420e2b632e44e83`. Production main remains `c8fac4f78295d2576af0e92b04329f4e938c7b6f`.
- Astro is pinned to 7.3.2; `npm run build` runs `astro build`. CI uses Node 22. Local and remote `astro.config.mjs` set `site: 'https://digitful.ca'`, with no sitemap integration. Neither production crawler file exists in the inspected source tree. The installed Astro hook contract supplies generated page pathnames and the output directory at `astro:build:done`.
- Current route source has 15 static HTML pages including 404 and thank-you, plus 10 published articles. Blog index and `[slug].astro` both filter `!data.draft`; slugs come from collection IDs, not a separate inventory. `_type-test.astro` is excluded by Astro. All 10 current Markdown articles explicitly have `draft: false`.
- Existing `dist` is stale: it contains `/type-test/` and preview disallow-all robots. It is not a production baseline or route authority. No build was run during this proposal stage.
- Remote preview `scripts/prepare-preview.mjs` (blob `f72377392f9d93ff918837a34bfa48789f63455d`) unconditionally overwrites output robots with disallow-all, replaces robots metadata, removes production GTM and inserts the submission guard. `.github/workflows/deploy-preview.yml` runs it after the source build and before artifact upload. The adjacent local preview checkout has an older source pin and must not substitute for this remote baseline.

## Exact proposed files

| File | Proposed change |
| --- | --- |
| `astro.config.mjs` | Add one small named inline integration using `astro:build:done`, with Node built-ins, to write `dist/sitemap.xml`. Keep the existing site value, fonts and all other configuration intact. |
| `public/robots.txt` | New three-line production crawler file shown below. |
| `docs/visual-refresh/task-13-check.ps1` | Small retained verification script using PowerShell's XML parser, URL checks and the existing preview preparation script against a disposable output copy; no test framework or parser dependency. |

Documentation after implementation: update only Task 13 status/evidence in `HANDOFF.md`, `TASK-QUEUE.md` and `CHANGELOG.md`; add `TASK-13-IMPLEMENTATION.md`. This proposal is the only file written at this stage.

Reserved later, only under separate publication authorization: `tarekazz1/digitful-preview/source-ref.txt`, one SHA replacement. No preview safeguard/workflow change, package/lockfile change, deployment configuration change or dependency is proposed.

## Generation and exclusions

Use Astro's actual completed-build HTML page list, not a handwritten URL list, source-file glob or unrestricted scan of old output. Resolve page paths against the configured canonical site, normalize the existing directory routes to their trailing-slash canonicals, deduplicate and sort, XML-escape each URL, and write one UTF-8 sitemap with the standard sitemap namespace and `<loc>` entries only. Omit `lastmod`, `changefreq` and `priority`; no dates will be invented.

Apply a small explicit exclusion policy for `/404`, `/404.html`, `/thank-you/`, `/type-test/` and `/_type-test/` (including slash variants). Only generated HTML pages qualify: exclude raw `/knowledge/` Markdown, assets, scripts, crawler files and other non-HTML output. Reject query strings and fragments. Keep generated pages declaring `noindex` out of the sitemap if encountered; preserve existing page metadata. Use the canonical origin `https://digitful.ca`, never the preview hostname.

Expected current output is **23 URLs: 13 static public pages plus all 10 published articles**. Static pages are home, About, What We Build, Social Media, SEO, Paid Ads, Automation, Contact, blog index, Privacy, Terms, SEO Command Center and its privacy page. This is inspection evidence, not a production URL inventory to maintain. Draft exclusion comes from the existing blog route generator: unpublished entries never reach the completed-build page list. No article schema or publication policy changes are needed.

Production robots content:

```text
User-agent: *
Allow: /
Sitemap: https://digitful.ca/sitemap.xml
```

The sitemap exclusion policy does not change a page's indexability or prevent direct retrieval. No special AI crawler rules or page-level indexing changes are included. Preview may retain the same canonical sitemap file, but its robots must still be overwritten to disallow-all, with no production sitemap directive left in preview robots; existing noindex, GTM removal and submission guard stay effective.

## Proposed task-wide budget

Request **N120 net added lines / M180 total changed lines**, unchanged from the suggested ceilings and still unapproved. Planning allowance: up to 45 added lines for the config hook/imports, 3 for robots and 70 for retained verification tooling: +118/-0/net118/changed118. Reserving the later pin replacement adds +1/-1: **+119/-1/net118/changed120**. These are estimates, not an implemented diff or permission to publish.

Count all retained code/config/tooling across repositories and workspace evidence, including the verifier and any later pin. Documentation prose and binaries are excluded under DELTA-LOC-INVARIANT.md. Do not compress code or move tooling outside the repository to evade accounting. Recheck tips and capture the actual pre-edit bytes before implementation; preserve and exclude every pre-existing change. Report actual added/removed/net/total and scope/N/M results. Stop for revised approval before exceeding either ceiling or expanding the file scope.

## Verification after approval

1. Run one fresh build with pinned Astro/dependencies, recording Node version and warnings. Check generated output only; do not reuse the stale existing dist.
2. Parse sitemap XML with the native XML parser. Check namespace, unique HTTPS canonical URLs, trailing-slash agreement with generated HTML canonicals, complete equality with eligible generated HTML routes, and all 10 current article URLs. Check every exclusion, including no raw Markdown/assets, query strings, fragments or invented dates. Check the preserved draft filter and use a temporary draft fixture in a disposable source copy for the same single build, so draft exclusion is exercised without changing retained article content.
3. Check exact production robots output. Copy the fresh output to a disposable directory and run the remotely inspected, SHA-verified existing preview preparation script there. Check disallow-all robots, exactly one noindex/nofollow/noarchive robots meta per HTML page, no production GTM and the submission guard; run preparation a second time to check idempotence. This needs no deployment or live form/diagnostic submission.
4. Check the task-only diff, original-baseline budget and preservation hashes. Stop **Ready for managing-agent review**, with limitations disclosed. No screenshots, mockups, visual matrix, unrelated audit, self-awarded signoff/KEEP, commit, push or deployment.

Approval requested: the exact implementation/verification/documentation file scope above and task-wide N120/M180. Publication and the reserved preview pin remain separate gates.
