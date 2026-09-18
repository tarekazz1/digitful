# Implementation queue and review prompts

Prepared 2026-09-18. Only the two tasks below are queued. This document prepares work; it does not start implementation or grant production approval.

## Roles and workflow

- Implementing agent: investigate, make the bounded change, verify it, and submit evidence.
- Managing agent (this task): maintain scope and records, independently review the diff and evidence, request corrections, and record technical signoff. Do not implement the fixes on the worker's behalf.
- Owner: sets each task's N, authorizes execution, retains visual KEEP / ADJUST / REJECT and production-release approval. Technical signoff is not production permission.
- Work sequentially: task 01, review/signoff, then task 02. Do not combine unrelated fixes. No new task boards, workflows, dependencies, or management framework.
- Status values: Planned → In progress → Ready for review → Changes requested / Signed off. Record exact reviewed SHAs and remaining issues, not just “done.”

## Mandatory rules for both prompts

When assigning a task, provide this entire file or instruct the implementing agent to read it before the selected task. These rules are part of both prompts.

1. Read the current `HANDOFF.md`, `DECISIONS.md`, `CHANGELOG.md`, and `DELTA-LOC-INVARIANT.md` in this directory, plus `docs/brand/VISUAL-CONSTITUTION.md` and `docs/brand/HOMEPAGE-COPY.md`. Follow applicable repository instructions. Current explicit owner instructions prevail; D034 records why the older private phase workflow is superseded. Do not copy private management material into public Git history.
2. Recheck repository, branch, working tree, remote tip, affected files and preview pin before writes. Preserve other people's changes. Source implementation belongs on `tarekazz1/digitful:visual-refresh`; preview configuration belongs in `tarekazz1/digitful-preview`. Prefer GitHub-native operations; never create temporary Actions workflows to perform routine writes.
3. N must be explicitly set by the owner before implementation. The suggested budgets below are proposals, not approved limits. Do not reuse Social Media's completed N=150 allowance. Record the actual starting SHA in every changed repository and count the whole task across repositories/commits, including verification code. Exclude only what the invariant permits. Report additions, removals, net and PASS/FAIL; stop before exceeding N.
4. Preserve the approved homepage, Social Media D038, existing design-system foundations, copy, URLs, content, forms, tracking and functional behavior outside the stated fix. No visual redesign, broad cleanup, dependency upgrade or unrelated repair. Do not invent requirements or claim checks that were not run. Escalate a material conflict or required scope expansion to the managing agent/owner.
5. Use the existing exact-source-SHA preview process for authorized execution. Never push/merge source to production `main`, invoke production deployment, or alter production configuration. Task 01 keeps the source pin unchanged; task 02 changes it only to the verified implementation SHA. Keep build success, rendered verification, technical signoff and owner acceptance distinct. Respect the handoff's browser-authorization requirement; prior permission for the Social Media correction is not blanket permission for all future tasks.
6. Verify proportionately. Use small, meaningful checks; no testing framework or refactor solely for these fixes. Use the repository's pinned Astro version and Node 22 CI workflow. Report environment differences and warnings. Stop task-owned preview servers and remove disposable artifacts after verification; preserve review evidence.
7. Return: root cause; exact changed paths and SHAs; concise diff summary; commands/results; relevant preview run and URL; acceptance evidence; N/added/removed/net/PASS; known limitations. Update the project handoff/changelog with facts and mark Ready for review, never self-award managing-agent signoff or owner KEEP.

## 01 — Correct preview robots metadata

Status: Signed off technically by managing agent on 2026-09-18 at f471bbc36c464c92819eb459e62eb7b3cafa1c1b. Owner APPROVED — KEEP on 2026-09-18.

Suggested model: **Luna, medium effort**. This is a small, localized script correction with explicit expected output. No larger model is needed unless inspection reveals a materially different problem.

Proposed N: **60 net implementation lines**, including small verification code, subject to owner approval.

### Implementation prompt

Follow the mandatory rules above. In `tarekazz1/digitful-preview`, inspect `scripts/prepare-preview.mjs` and its existing deployment workflow. The observed defect is that the script adds a robots meta tag only when none exists, leaving an existing `index,follow` tag intact. Confirm the current behavior before editing.

Make the smallest robust correction so every generated preview HTML document has one robots meta tag with `noindex,nofollow,noarchive`, replacing existing robots tags instead of retaining contradictory or duplicate directives. Keep this transformation idempotent and confined to preview output. Preserve unrelated metadata, canonical links, theme scripts, existing GTM stripping, form-submit guard, CNAME and robots.txt behavior. Do not change production source metadata or move `source-ref.txt`.

Check representative HTML with no robots tag, an existing index tag, an existing noindex tag, and duplicate tags; account for ordinary quote/case/attribute-order variations without introducing a parser dependency. Confirm a second run does not change the output. Verify unrelated scripts/metadata survive. Run the existing preview workflow once the candidate checks pass and execution is authorized. Inspect the deployed HTML metadata, not merely the Actions status; if browser inspection is not authorized, use read-only HTTP output for these metadata checks.

### Acceptance evidence

- Exactly one correct robots tag in prepared HTML and sampled deployed homepage, Social Media and blog index; no contradictory robots directives.
- Existing preview safeguards retained; robots.txt still disallows crawling. Do not equate robots.txt with noindex or claim search-engine removal.
- Preview source pin unchanged; production unchanged; workflow successful; task-wide LOC within approved N.

Review/signoff: Technical signoff granted after independent verification on 2026-09-18. Empty-name metadata is preserved safely, regression fixture `scripts/fixtures/empty-name-meta.html` passes, and the standard fixtures/idempotence and preview checks were rerun. Cumulative implementation delta from the original baseline is 13 added / 1 removed, net +12; N=60 PASS. Implementing agent completion SHA: `f471bbc36c464c92819eb459e62eb7b3cafa1c1b` in `tarekazz1/digitful-preview`; workflow run `35313241957` (build/deploy success). Source pin unchanged at `cbbf870a17b055de6126e805f21fb83aab1f2ec1`. Production unchanged. Task 02 subsequently completed and received technical signoff and owner KEEP; both queued tasks are closed.

## 02 — Restore blog collection and article generation

Status: Signed off technically by managing agent on 2026-09-18 at source af00d12bf5b5b7b3f1d449cadf4c811dd5f5b990. Owner APPROVED — KEEP on 2026-09-18.

Suggested model: **Sol, high effort**. Content-loading changes can affect identifiers, article routes, draft filtering and rendering across several files. Sol suits this bounded integration work; high effort is for tracing those contracts, not expanding scope. Astra is an escalation option only if a concrete unresolved compatibility problem warrants it; Terra is unnecessary as an extra handoff.

Proposed N: **150 net implementation lines**, including verification code, subject to owner approval.

### Implementation prompt

Follow the mandatory rules above. On `tarekazz1/digitful:visual-refresh`, diagnose why the pinned Astro 7.3.2 build reports that the blog collection does not exist or is empty despite repository content. Start with `src/content.config.ts`, `src/content/blog/`, `src/pages/blog/index.astro`, `src/pages/blog/[slug].astro`, and directly related content consumers. The inspected config uses legacy `type: 'content'`; treat compatibility as a hypothesis to confirm, not a reason to rewrite the site. Consult installed APIs and official Astro documentation as needed.

Inventory existing eligible published entries and expected URLs from repository evidence before editing. Trace identifier/slug behavior, rendering APIs, metadata, draft filtering, sorting and category filters. Apply the smallest compatible collection/consumer correction. Preserve article text/frontmatter, published slugs, canonical URLs, dates, images, links, structured data and the approved design. Do not publish drafts, create articles, alter editorial policy, upgrade Astro, or redesign the blog. If restoring content exposes a separate material defect, report it with evidence before expanding scope.

Build with the pinned dependencies. Compare generated article URLs with the pre-edit expected inventory: every eligible article should exist, drafts should remain excluded, and no public URL should change silently. Verify representative articles contain their actual body, metadata and working internal links; check index ordering and category filtering. Capture the build result and explain remaining warnings. Use targeted rendered desktop/mobile checks when browser inspection is authorized. Publish only through the exact-SHA preview workflow, confirm task 01's robots fix remains effective on restored article pages, and submit the candidate for managing-agent review.

### Acceptance evidence

- Collection loads; empty-blog warning resolved; expected-versus-generated article counts and URLs agree, with any exclusions explained.
- Article bodies render and draft exclusion, metadata, index ordering and filters retain intended behavior.
- No article-copy, approved-design or production changes; successful exact-SHA preview build/deploy and targeted verification.
- Task-wide LOC within approved N; limitations explicitly reported. Build success alone is insufficient.

Review/signoff: Technical signoff granted on 2026-09-18 following independent diff, build, generated-route/body/link and live metadata checks. Implementing agent completion source `af00d12bf5b5b7b3f1d449cadf4c811dd5f5b990`; preview pin `d9fd03f8909a842b52b5960fc344b8a21b3bf02a`; workflow run `35315415672` (build/deploy success). Expected/generated article URLs agree 10/10, 57 internal article links resolve, representative body/metadata and desktop/mobile rendering pass, task 01 safeguards remain effective, production is unchanged, and the task-wide delta is 3 added / 2 removed / net +1 against N=150 (PASS). Known limitation: the current inventory has no `draft: true` fixture, so draft exclusion is supported by the preserved filters rather than a runtime draft case. Owner APPROVED — KEEP on 2026-09-18. Browser interaction evidence is the implementing agent report; the managing agent did not repeat browser checks.

## Managing-agent review checklist

For each task, inspect the actual candidate diff and its exact baseline; check the mandatory rules and acceptance evidence; reproduce the consequential checks where access permits. Return either **Changes requested** with specific defects or **Technical signoff** with reviewed SHA(s), evidence and limitations. Keep unresolved findings open. Update this file and the project records without implementing follow-on work or treating signoff as production permission.




