# Implementation queue and review prompts

Updated 2026-09-18. Tasks 01 and 02 are accepted. Task 03 records the approved homepage direction; its N and missing assets must be resolved before implementation. No production approval is granted.

## Roles and workflow

- Implementing agent: investigate, make the bounded change, verify it, and submit evidence.
- Managing agent (this task): maintain scope and records, independently review the diff and evidence, request corrections, and record technical signoff. Do not implement the fixes on the worker's behalf.
- Owner: sets each task's N, authorizes execution, retains visual KEEP / ADJUST / REJECT and production-release approval. Technical signoff is not production permission.
- Work sequentially: tasks 01 and 02 are closed; task 03 is next. Do not combine unrelated fixes. No new task boards, workflows, dependencies, or management framework.
- Status values: Planned → In progress → Ready for review → Changes requested / Signed off. Record exact reviewed SHAs and remaining issues, not just “done.”

## Mandatory rules for all prompts

When assigning a task, provide this entire file or instruct the implementing agent to read it before the selected task. These rules are part of every prompt.

1. Read the current `HANDOFF.md`, `DECISIONS.md`, `CHANGELOG.md`, and `DELTA-LOC-INVARIANT.md` in this directory, plus `docs/brand/VISUAL-CONSTITUTION.md` and `docs/brand/HOMEPAGE-COPY.md`. Follow applicable repository instructions. Current explicit owner instructions prevail; D034 records why the older private phase workflow is superseded. Do not copy private management material into public Git history.
2. Recheck repository, branch, working tree, remote tip, affected files and preview pin before writes. Preserve other people's changes. Source implementation belongs on `tarekazz1/digitful:visual-refresh`; preview configuration belongs in `tarekazz1/digitful-preview`. Prefer GitHub-native operations; never create temporary Actions workflows to perform routine writes.
3. N must be explicitly set by the owner before implementation. The suggested budgets below are proposals, not approved limits. Do not reuse Social Media's completed N=150 allowance. Record the actual starting SHA in every changed repository and count the whole task across repositories/commits, including verification code. Exclude only what the invariant permits. Report additions, removals, net and PASS/FAIL; stop before exceeding N.
4. Preserve the approved homepage except for the explicit task 03 exception below, Social Media D038, existing design-system foundations, copy, URLs, content, forms, tracking and functional behavior outside the stated fix. No visual redesign outside the selected task, broad cleanup, dependency upgrade or unrelated repair. Do not invent requirements or claim checks that were not run. Escalate a material conflict or required scope expansion to the managing agent/owner.
5. Use the existing exact-source-SHA preview process for authorized execution. Never push/merge source to production `main`, invoke production deployment, or alter production configuration. Task 01 keeps the source pin unchanged; tasks 02 and 03 change it only to the verified implementation SHA. Keep build success, rendered verification, technical signoff and owner acceptance distinct. Respect the handoff's browser-authorization requirement; prior permission for the Social Media correction is not blanket permission for all future tasks.
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

## 03 — Homepage composition and responsive collage

Status: Direction approved by owner; implementation awaits owner-set N and suitable laptop/scenery assets. Tasks 01 and 02 have technical signoff and owner KEEP.

Suggested model: **Sol, medium effort**. The composition is specified; the work is bounded Astro/CSS layout and rendered verification. Escalate effort only for a concrete unresolved problem.

Proposed N: **200 net implementation lines**, including verification code and preview-pin configuration; not yet approved. Measure from the actual source and preview baselines recorded before edits, across the whole task.

### Implementation prompt

Read this entire queue and all mandatory project rules. Execute task 03 only once its N is explicitly authorized. The owner approved reopening the homepage for this bounded composition pass; this is a specific exception to the homepage freeze, not permission to redesign shared foundations or other pages. The latest owner direction replaces the earlier proposal to retain a connected four-step hero diagram.

First inspect the current preview, source, and supplied early homepage mockup. Preserve the current approved headline, support copy, section copy, navigation, CTAs, links and interactions; the mockup's older wording is not copy authority. Do not restore its old navigation, benefit checklist or removed explanations.

Asset prerequisite:
- Reuse the existing transparent binocular PNG at public/assets/collage/social/social-binoculars.png, unchanged; do not use the superseded AVIF or modify Social Media.
- Suitable separate laptop and scenery assets have not been confirmed. The only supplied homepage reference is the full-page early mockup. Ask the owner for the originals if unavailable; a screenshot crop, newly generated substitute or invented stock image is not approved. Do not ship placeholders. Asset editing/generation or extraction requires an explicit owner decision.
- The desired laptop asset must have no screen slogan. Neither laptop nor scenery may have embedded text, handwritten annotations, sticky notes, decorative labels or captions on or next to the artwork. Normal page copy belongs in a clearly separate content area. If available originals contain text, report that before altering them.
- Inspect alpha, resolution and actual appearance. Preserve proportions. Background treatment follows the reference's restrained coral behind the laptop and teal/mustard behind the landscape using existing brand tokens; avoid duplicating shapes already present in the supplied asset.

Implement these changes:
1. Hero: replace the boxed four-step signal-map illustration with the laptop and its background. The old illustrated map and its decorative annotations are superseded; do not move its four tiles elsewhere or invent replacement prose. Keep approved hero copy and CTAs. On desktop use separate text/art columns. On mobile place headline, copy and CTAs first, then compact artwork; do not recreate the previous approximately 1,552px hero at 390px width.
2. Services: replace narrow desktop table-like columns with open editorial rows and light separators, giving descriptions readable width. Preserve all four links and their copy. Keep mobile rows clear, with arrows separated from text.
3. Good-fit section: remove the enclosing rectangle and tall internal columns. Retain teal emphasis with three open statements and the existing content. Remove decorative handwritten-style annotation from the revised art/composition; no new text.
4. Site check: retain a clear boundary around the working tool but reduce the oversized introduction and decorative instrument labels. Reuse small binoculars beside the heading on desktop, above the input area on mobile. They are decorative and secondary: do not squeeze controls or create a large extra block. Preserve the field labels, radio controls, validation, loading/results/error behavior and diagnostic-to-contact handoff. Do not change APIs or request behavior.
5. Closing CTA: incorporate scenery with its background beside the existing CTA content on desktop. On mobile make it a shallow image band with a deliberate crop that preserves the recognizable landscape. Keep copy and buttons on their own clear surface, never over the image. No graphic captions or annotations.

Keep the palette, type system, button outlines, useful section rules and problem-section interactions. Reuse current foundations and tokens; do not add another override stylesheet, dependency or generic component framework. Edit existing homepage-owned styles; any site-check styling must remain bounded to this approved composition. No changes to Social Media, blog content/loading, preview safeguards or production.

### Responsive and functional acceptance

- Capture before/after views at 390px and a desktop width; verify 320, 390, 768, 1024 and 1440px in both light and dark themes for overflow, overlap, reading order, legible copy, correct image proportions and clear controls.
- Report before/after mobile hero height at the same width, fonts and state. Reduce excess illustration height through composition, not smaller body text, clipped copy or hidden essential content.
- Reserve image space with dimensions/aspect ratio; use fit/crop intentionally and keep artwork secondary to CTAs. Decorative images use empty alt text or equivalent semantics. Avoid unnecessary mobile image payload; document any asset optimization rather than silently replacing artwork.
- Verify navigation, theme switching, problem reveals and site-check controls. Check diagnostic states with existing safe verification methods; do not submit personal data or trigger paid/external diagnostics without the relevant authorization. Report any untested live flow honestly.
- Successful pinned-version build and diff checks; exact-SHA preview deployment; verify homepage and a Social Media/blog sample for unintended shared-style regressions and retained preview noindex safeguards.
- No framework error overlay, relevant console errors, horizontal overflow or new visible layout jumps at checked sizes. Provide screenshots and actual measured evidence; build success alone is insufficient.
- Return paths, source/preview baseline and final SHAs, workflow URL, asset provenance, responsive/functional results, limitations, and N/added/removed/net/PASS. Update records to Ready for review. Managing-agent technical signoff and owner KEEP remain separate.

Review/signoff: not started. Do not broaden this task into the next service page or production publication.
