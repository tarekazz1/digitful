# Implementation queue and review prompts

Updated 2026-09-19. Tasks 01, 02 and 03 are accepted. Task 03 has managing-agent technical signoff and owner KEEP at the final revision recorded below. No production approval is granted.

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

Status: **Signed off. Owner APPROVED — KEEP.** Final accepted source: `360f218949e693df8cd7aea8fe301a5056f614f9`. See the acceptance record below. Earlier submission entries are historical.

Suggested model: **Sol, medium effort**. The composition is specified; the work is bounded Astro/CSS layout and rendered verification. Escalate effort only for a concrete unresolved problem.

Approved N: **200 net implementation lines**, including verification code and preview-pin configuration. Measure from the actual source and preview baselines recorded before edits, across the whole task.

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

Review/signoff: **Ready for review** at rendered source `277facb676814e4a72146f53f2de0b9e25fa8fe9`, pinned by preview commit `b9fd297ffe6a89a59781499adc5c989ad08474b8`; workflow run [35343714484](https://github.com/tarekazz1/digitful-preview/actions/runs/35343714484) completed successfully. Owner authorized N=200, responsive browser verification, the exact-SHA workflow, and deriving the laptop/scenery from the supplied clearer mockup because standalone originals were unavailable. The resulting transparent PNGs contain no embedded copy or annotations; the existing binocular PNG remains unchanged.

Browser verification covered 320/390/768/1024/1440 in light and dark themes on the deployed preview. All ten states had zero horizontal overflow, correct intrinsic artwork dimensions, no framework overlay, and no console/page errors. Navigation expansion, theme switching, all three problem interactions, site-check radio selection and native invalid-URL blocking passed. Social Media, blog index and a representative article retained zero overflow, no browser errors and the preview safeguards. Every sampled page had `noindex,nofollow,noarchive`, no GTM, and the form guard; `robots.txt` remained disallow-all. At 390px the hero reduced from 1552.21875px to 989.921875px (562.296875px / 36.2%); at 1440px it remained 844.921875px.

Task-wide implementation/config delta from source baseline `0cdd60cbbbcc1703db81de0a044369831210d95d` and preview baseline `d9fd03f8909a842b52b5960fc344b8a21b3bf02a`: **206 added / 402 removed / net -196; N=200 PASS**. Binary assets and documentation are excluded under the invariant. The local pinned build generated 23 pages; the existing 232 repetitive Bootstrap/Dart Sass deprecation warnings remain. Safe browser methods verified validation and result-adjacent controls without submitting personal data or invoking a paid/external diagnostic. Production remains unchanged at `c8fac4f78295d2576af0e92b04329f4e938c7b6f`. Do not broaden this task into the next service page or production publication.

### Task 03 corrective prompt — owner refinements and review findings (2026-09-19)

Use **Sol, medium effort**. Continue Task 03; do not open Task 04 or reset the approved cumulative N=200 budget or original baselines. Follow every mandatory rule above. The owner-approved changes below supersede the earlier copy-preservation requirement only for the named heading/eyebrow changes. Do not implement unrelated recommendations or redesign shared foundations.

1. Remove the hero eyebrow “GROWTH SYSTEMS” on all sizes. On mobile, compose the headline, existing supporting copy and a smaller laptop together above both CTAs, instead of the current separate stacked artwork below the CTAs. Tuck the artwork beside the lower text area; decorative background overlap is permitted, but the laptop must not cover letters, reduce text legibility or obstruct controls. Preserve meaningful reading order. Keep desktop composition unchanged apart from removing the eyebrow; asset optimization is still required.
2. Make “Quick site check” the section's main heading. Demote “See what your website is making harder than it should be.” to a smaller supporting subheading. Remove the old eyebrow treatment and place no label or artwork above the new main heading. Retain the explanatory paragraph, field labels and all controls/behavior. Keep small binoculars beside the main heading in reserved layout space; on narrow screens keep them beside or below the heading and above the input, never overlapping text or creating a large extra block. This replaces the previous oversized introduction.
3. Fix the confirmed desktop binocular overlap. The submitted 1440px screenshots show the image over the heading; do not rely on a fixed top offset that breaks when text wraps.
4. Optimize the approved artwork without changing its appearance or adding text. Current originals: laptop 2,410,775 bytes (1536 × 1024), scenery 2,101,542 bytes (2079 × 756), binoculars 1,955,595 bytes (1254 × 1254). Preserve originals and the existing Social Media asset usage. Document any derived responsive/compressed variants and their sizes; do not substitute the superseded binocular AVIF. Prioritize the hero and lazy-load below-fold artwork where appropriate, retaining dimensions and transparency.
5. Investigate the absent landscape in submitted desktop light/dark and mobile light screenshots: only the teal background and mustard circle are visible. The source scenery asset contains a recognizable landscape. Establish the actual cause rather than assuming loading or CSS, fix it, and capture fully loaded artwork with the intended shallow mobile crop.

Review observations for the corrective pass: services introduction is bottom-aligned against the desktop list, leaving excessive space above it; top-align it. Rebalance the good-fit introduction and statements to reduce excessive heading wrapping. Keep these adjustments confined to Task 03's already-approved open layout; preserve copy and type-system foundations. Rebalance the site-check panel after applying the new heading hierarchy.

Recheck 320/390/768/1024/1440px in both themes for actual overlap, image visibility, proportions and reading order, not only horizontal overflow. Provide loaded desktop/mobile screenshots, before/after image byte sizes and mobile hero height; verify existing controls and preview safeguards proportionately. Report any unmeasured loading timing honestly. Return exact source/preview SHAs, cumulative N accounting and Ready for review. No self-awarded technical signoff, owner KEEP or production release.

Managing-agent review evidence: source and submitted screenshots were inspected; fresh live browser verification was unavailable. The earlier worker-reported responsive checks above are submission evidence, not independent acceptance. Technical signoff remains withheld pending corrections.

Corrective completion evidence: source `1dbaa8404abb65eec28dbbd8b31e17d1daac6835`; preview pin `11f94ac494c72d9cfaf1bbf84cd5a0e521926146`; successful workflow [35450773875](https://github.com/tarekazz1/digitful-preview/actions/runs/35450773875). The hero eyebrow is removed. At 320/390/768 the headline precedes the existing support copy, the smaller laptop occupies reserved space beside the lower copy, and both CTAs follow; measured laptop overlap with headline, support copy and actions is false at every checked size/theme. Desktop retains the two-column composition apart from the approved eyebrow removal.

“Quick site check” is now the main heading with nothing above it; the former heading is a smaller supporting subheading. A 480px derived binocular WebP sits in the heading row without fixed offsets; measured overlap with the heading, subheading and explanatory copy is false at all ten states. Services introduction/list top delta is 0px. Good-fit desktop columns, heading measure and statement type spacing are rebalanced without copy changes.

The absent scenery was a capture/loading race: the 2,101,542-byte PNG rendered in a direct section capture after decoding but was missing from the earlier full-page capture taken before decode. Responsive WebP delivery plus explicit fully-loaded verification resolves the observed failure; all ten deployed states report complete laptop/scenery images and the landscape is visible in desktop/mobile captures. Originals remain unchanged. Derived sizes: laptop 768px 94,666 bytes and 1536px 327,616 bytes versus 2,410,775; scenery 1040px 133,404 bytes and 2079px 417,274 bytes versus 2,101,542; homepage binoculars 480px 63,636 bytes versus 1,955,595. Social Media still uses the unchanged original binocular PNG. Hero is prioritized; scenery and homepage binoculars are lazy-loaded. No synthetic loading-time measurement is claimed.

Deployed Chromium verification covered 320/390/768/1024/1440 in light/dark: zero overflow, image/text overlap, framework overlays, console errors or page errors. Navigation, theme switching, all three problem interactions, site-check radio selection and native invalid-URL blocking passed. Homepage, Social Media, blog index and representative article retained `noindex,nofollow,noarchive`, GTM removal, the preview form guard and disallow-all `robots.txt`. The corrected 390px hero is 645.71875px, down from the first submission's 989.921875px by 344.203125px (34.8%), and from the original 1552.21875px by 906.5px (58.4%). Build generated 23 pages; only the existing 232 repetitive Bootstrap/Dart Sass warnings remain.

Cumulative Task 03 implementation/config delta from the original source baseline `0cdd60cbbbcc1703db81de0a044369831210d95d` and preview baseline `d9fd03f8909a842b52b5960fc344b8a21b3bf02a`: **309 added / 433 removed / net -124; N=200 PASS**. Binary assets and documentation are excluded under the invariant. Production remains unchanged at `c8fac4f78295d2576af0e92b04329f4e938c7b6f`. Status is Ready for review; technical signoff and owner KEEP are not awarded here.

### Task 03 mobile services correction — owner review finding (2026-09-19)

Status: **Ready for review.** Source `a84e537a8cedd33d046223962d0f9ac54569fdcf`; preview pin `843ba9b34daec17c0bf2ff66dbc3edc02de4bb12`; successful workflow [35453486507](https://github.com/tarekazz1/digitful-preview/actions/runs/35453486507). Technical signoff and owner KEEP remain pending.

The real-phone failure was caused by selector specificity, not horizontal overflow. The desktop rule `.home-page .home-editorial-row--services` overrode the lower-specificity `max-width: 991.98px` stacking rule. At 390px the deployed row therefore computed to `240px 90px`; each description had `0px` width and the services row grew to 1,372.796875px. The correction adds the same scoped specificity inside the breakpoint and uses a three-column service row there, so the heading stacks above full-width rows and arrows retain a separate column. At 390px the list is now 366px wide, descriptions are 254px, and the section is 739.09375px. At 320px descriptions retain 184px and no row, description or arrow clips or overlaps.

The narrow-screen hero now gives the artwork column a 140px minimum and modest inward picture offset without changing desktop composition. At 320px the laptop is 142px wide with a 22px viewport-edge gap, versus 120px and 12px in the prior deployed candidate; at 390px it is 157.125px wide with the same 22px gap. Measured overlap with headline, support copy and CTAs is false at every checked width/theme.

Live Chromium verification covered 320/360/375/390/414/480/600/768/1024/1440 in light and dark. The pass scrolled through the full page to trigger lazy artwork, awaited image loading and decode, returned to the top, then captured evidence. Every state had zero horizontal overflow, service clipping/overlap defects, laptop/text/control overlap, framework overlays, console errors or page errors; all artwork loaded. Problem reveal, desktop radio selection and native invalid-URL blocking passed. Site-check hierarchy, binocular placement, scenery, approved copy, lazy loading and desktop composition remain unchanged. Build generated 23 pages with only the existing Bootstrap/Dart Sass deprecation warnings.

Cumulative Task 03 implementation/config delta from the original baselines: **329 added / 433 removed / net -104; N=200 PASS**. Binary assets, documentation and external review evidence are excluded under the invariant. Production remains `c8fac4f78295d2576af0e92b04329f4e938c7b6f` and was not changed.

### Task 03 site-check hierarchy correction — Ready for review — 2026-09-19

The owner's latest instruction supersedes the earlier requirement to retain the site-check explanatory paragraph. Source `360f218949e693df8cd7aea8fe301a5056f614f9` now shows “Quick site check” as the main heading and “See what your website is making harder than it should be.” exactly once as the supporting text. The sentence beginning “Run a quick check across performance…” is deleted entirely, and the vacated spacing was removed without changing the binoculars, form labels, controls or behavior.

Exact-SHA preview pin `423813d0376abe27c7fdb5e6c66cb559e7720095`; workflow [35457359961](https://github.com/tarekazz1/digitful-preview/actions/runs/35457359961) succeeded. Deployed Chromium verification at 390, 1024 and 1440px in both themes scrolled through the full page, awaited every image load/decode, and visually inspected the hero, services, site check and scenery. All six states have the exact heading/support hierarchy, one supporting-text occurrence, zero removed-sentence occurrences, loaded binoculars/scenery, no binocular/text overlap, zero horizontal overflow, and no console/page errors. Problem reveal, desktop radio selection and native invalid-URL blocking pass; Social Media/blog samples retain the preview safeguards.

Cumulative Task 03 implementation/config delta from original source baseline `0cdd60cbbbcc1703db81de0a044369831210d95d` and preview baseline `d9fd03f8909a842b52b5960fc344b8a21b3bf02a`: **326 added / 441 removed / net -115; N=200 PASS**. Binary assets, documentation and external evidence are excluded under the invariant. Production remains unchanged at `c8fac4f78295d2576af0e92b04329f4e938c7b6f`. Managing-agent technical signoff and owner KEEP remain pending.

## Task 03 acceptance — managing-agent signoff and owner KEEP — 2026-09-19

Owner explicitly approved KEEP. Task 03 is closed at source `360f218949e693df8cd7aea8fe301a5056f614f9`, with reported exact-SHA preview pin `423813d0376abe27c7fdb5e6c66cb559e7720095` and successful workflow `35457359961`. Managing-agent technical signoff follows source-diff review and independent inspection of all six submitted full-page screenshots and six site-check close-ups at 390/1024/1440px in light/dark themes. The approved site-check heading/supporting text is present and the obsolete explanatory paragraph is removed. Services, hero, binoculars and scenery were reviewed on mobile and desktop.

Verification boundary: live interaction, deployment, safeguard and build results are implementing-agent evidence; the managing agent did not independently rerun those checks or reverify the live pin. The dark desktop close-up discrepancy was not treated as a live defect: the full-page capture showed the button label, and the owner confirmed it was visible. No unresolved defect was identified in the accepted review scope. Reported cumulative accounting: 326 added / 441 removed / net -115; N=200 PASS.

This acceptance supersedes earlier pending-review statuses for Task 03. Owner KEEP and technical signoff do not authorize production release. No production change was performed in recording this acceptance.

## 04 — SEO copy, integrated loupe and guided problem selector

Updated 2026-09-20. Status: **Proposal stage authorized; implementation NOT authorized.** Model: **Sol, medium effort**. Task 03 is accepted. Read the mandatory queue rules and referenced project documents before starting. This section supersedes the earlier Task 04 draft that preserved all copy, required a compact mobile loupe and omitted interaction.

### Stage 1 prompt — execute now

Inspect the current SEO page, accepted homepage/Social Media visual system, existing brand/copy rules and current source/branch state. Complete a rendered desktop/mobile audit in both themes where browser access permits; distinguish inspected source from actual rendered evidence. The managing agent previously had no browser available, so that audit remains outstanding. If access is still unavailable, continue the proposal but report the gap explicitly; do not claim rendered verification.

Prepare a reviewable copy-and-composition proposal in `docs/visual-refresh/TASK-04-SEO-PROPOSAL.md`. Do not edit application code, change the preview pin, deploy or modify production. Only proposal documentation and clearly separated candidate visual artifacts are within this stage. Return to the managing agent/owner for approval before implementation.

### Locked owner-approved hero copy

Use these words exactly; do not silently shorten, rewrite or add a second hero CTA:

Headline: Your next customer is searching. Can they find you?

Supporting paragraph: People are looking for answers, products, and services. AI-powered search tools are helping them discover their options. We help your business become easier to find, understand, and choose, wherever the search begins.

CTA: Tell us what's stuck →

Retain the contact destination `/contact/?service=seo`. The arrow may be a separate decorative element. No fake search input or extra “Looking for a business like yours…” line. Do not add promises of rankings, AI recommendations or citations.

### Proposed page structure and copy work

Use five sections, with the selector serving as the closing conversion section rather than a redundant separate FAQ plus CTA:
1. Hero: exact copy above and a large loupe integrated into its composition.
2. Search journey: “Getting found is only the beginning.” Keep Search → Discover → Act visible. Explain the three breaks: people cannot find the business; they find it but not the answers they need; they arrive but lack a clear next step. Keep essential explanations visible rather than requiring clicks to understand the journey.
3. The work: “Different searches. One connected strategy.” Four expandable editorial rows: Search intent & content; Technical foundations; Local visibility; Measurement & improvement. Visible summaries must make sense when collapsed; expansions hold useful details, not repeated filler.
4. Ongoing management: “SEO is not a one-time fix.” A compact Monitor → Improve → Measure sequence, with concise explanations.
5. Guided closing selector: “Where is your search visibility getting stuck?” / “Choose the problem that sounds familiar.” Four choices: “People cannot find my business”; “My website gets traffic but few inquiries”; “My Google Business Profile needs attention”; “I am not sure what is working”. Each reveals its own useful “Where to start” response and “Discuss your SEO →” contact link. Draft all four distinct responses. This is guidance based on a selection, not a scan or assessment: no URL input, score, network diagnostic, API or fabricated results. Keep the existing contact query; do not invent a new contact-state handoff.

Propose the full remaining copy with brief reasons for substantive changes. Confirm service claims against existing project evidence: Google Business Profile work, listings, content creation, analytics and ongoing management must not be silently invented as offerings. Flag unsupported commitments for owner confirmation. Keep AI integrated naturally in relevant content; no separate AI SEO/GEO sales section. Source-check any new factual platform claims using primary documentation. Owner-provided hero copy remains locked; report concerns rather than altering it.

### Loupe and visual direction

The owner has no loupe original and wants a BIG magnifying glass that is part of the hero, not a small accessory like the homepage laptop. Propose a monochrome photographic halftone cutout with transparent background, matching the existing collage artwork. No baked-in text, slogans, annotations, sticky notes, stock-tech effects or fake results. A restrained mustard field/shape may sit behind it using current tokens.

Desktop concept: the loupe occupies roughly half the hero, with its handle extending toward the section edge and the headline composed alongside the lens. This is a starting composition, not a rigid ratio. Mobile: preserve its strong visual presence using a deliberate edge crop, while keeping text and CTA readable and avoiding squeezed text columns or excessive hero height. Do not default to shrinking it into an icon. Layering decorative space is acceptable; covering text or controls is not.

Prepare one generated candidate asset using the available image-generation capability and its skill instructions, plus a desktop/mobile placement proposal. Keep the candidate outside shipped assets until approved. If generation is unavailable, supply the exact visual brief and report that the candidate remains outstanding; do not substitute binoculars or a generic icon. Asset generation is proposal work, not permission to integrate an unapproved visual.

Treat the supplied wireframes as structure, not a rounded-card design to copy. Use the approved typography, hard-edged controls, rules, restrained colour and open composition. Reference images are available locally under `C:/Users/tarek.azzi/.codex/codex-remote-attachments/01a0ae53-e8af-7181-85da-dc4c0ced41e8/B4A5B1CE-6CFC-4C73-9E12-576C2913AF36/`: `1-Pasted-Image-1.jpg` (selector), `2-Photo-2.jpg` and `3-Photo-3.jpg` (wireframe). Inspect these files; another conversation's attachments are not automatically inherited.

### Proposal deliverables / later implementation gate

Return the audit findings and limits, exact full proposed copy, four selector responses, loupe candidate/provenance, desktop/mobile composition and interaction behavior, unresolved service confirmations and a justified implementation N recommendation. Suggested N=200 from the earlier narrower draft is UNAPPROVED and must be reassessed for this expanded scope. Do not begin code changes until the owner approves the proposal, visual and N.

Plan native accessible disclosures for work rows and keyboard-operable single-choice controls with a clear selected state and announced response for the selector; avoid dependencies. Plan optimized responsive artwork with reserved dimensions and prompt hero loading. Future verification must cover 320/390/768/1024/1440 plus breakpoint boundaries in both themes, actual legibility/clipping/overlap and functional controls, not overflow alone. Capture fully loaded desktop/mobile full pages and close-ups. Preserve metadata, accepted pages and preview safeguards; use the existing exact-SHA preview workflow only once implementation is authorized. Managing-agent signoff, owner KEEP and production release remain distinct.

## Manager transition — 2026-09-20 — current Task 04 status

Read `docs/visual-refresh/MANAGER-START-HERE.md` first. Task 04 proposal and four mockups exist locally; implementation and N=600 are NOT approved. The owner objected that the loupe looks awful and out of spirit, and rejected the adequacy of the prior managing-agent review, particularly its neglect of content. Current loupe is not accepted; substantive content/brand review and corrective proposal remain outstanding. No general approval of the remaining proposal should be inferred. Task 03 remains accepted. The owner subsequently authorized committing and pushing the Task 04 proposal, candidates, mockups and handover together. Fetch the updated visual-refresh branch for these artifacts; original user attachments remain device-local.
