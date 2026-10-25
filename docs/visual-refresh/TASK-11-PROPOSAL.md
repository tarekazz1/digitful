# Task 11 — Utility pages, route cleanup and Automation connector

Current status (2026-10-25): Task 11 is closed with owner APPROVED / KEEP and consolidated technical signoff, including the approved 404 and closing-colour amendments. Application source 8ab616ea510f730af41a354d945c9ca4f9f97ea0 is deployed by preview pin 0d717f9115f063e02c7b6851232bd5aeca93d1fe; workflow 40223384147 and focused live publication checks passed. See TASK-11-IMPLEMENTATION.md for results and limits. Original proposal-stage approval restrictions below are historical. Production remains unchanged.

## Implementation approval and result — 2026-10-25

The owner approved all proposed decisions, the managing-agent email-spacing correction and N240/M360. Local implementation and targeted checks are complete; see TASK-11-IMPLEMENTATION.md. Current status: **Ready for managing-agent review**. Historical proposal-stage pending decisions below are superseded. Commit/push, preview-pin change, deployment and production release remain unapproved. The original proposal and managing-agent review are preserved below.

2026-10-25 · **Ready for proposal review.** Inspection and visual mockups only; implementation, commit/push, preview publication and production release are separately unapproved.

## Managing-agent proposal review — 2026-10-25

Reviewed the proposal, four desktop/mobile light/dark sheets, full-resolution Privacy mobile render, connector close-ups, proposal/check tooling and saved evidence. The compact utility treatment is appropriate; the connector clearly aligns with CRM/person while preserving the broken Before style. Saved results contain 36 states, zero overflow and zero reported browser errors; source comparison and preservation reports support the proposal's stated boundaries. This is proposal review, not implementation/build/deployment signoff.

One small existing defect should be included in the same implementation scope: Privacy and Terms visibly join “to” and “ping@digitful.ca” in their Contact paragraphs. Preserve all words and the mailto target; insert an explicit separating space in the markup. The proposal render and saved published text confirm the issue. No new copy or policy rewrite is needed.

Recommendation to owner: approve the shown treatment and connector, removal of the two generated date labels, the minimal 404 wording, byte-preserving `_type-test.astro` exclusion from preview and future production, and N240/M360 including retained tooling and preview pin. Astro's documented underscore exclusion supports the proposed approach; verify actual build output during implementation. Retained proposal tooling currently totals about 68 physical lines, so the stated N80/M100 tooling allowance should be tracked rather than treated as unused headroom.

Owner implementation/scope/budget decisions remain pending; commit/push/deployment and production release remain unapproved. This review adds documentation only and does not dispatch implementation.

## Inspection and baseline

Read TASK-QUEUE, HANDOFF, REMAINING-ROUTE-INVENTORY, DELTA-LOC-INVARIANT, COMMAND-CENTER-LOGO-UPDATE, DECISIONS, CHANGELOG and the brand constitution/logo/copy rules. Work remains on `visual-refresh`, local HEAD `d4df671724888071a845d1da03073b4a34403210`. Existing working-tree changes are preserved; no reset or checkout update.

Fresh remote reads: source tip `aa902eb7714c8ab74c9cef99daa4f571d8431883`; preview commit `add640fa0ffdc9af7c592cc459002b8a0b04ba7f`, whose `source-ref.txt` pins `37e4ec7400a4f658db8a258e225bb9af63607e2f`. The intervening source commit changes documentation only. The five inspected application files match the published source ignoring CRLF. Production main remains `c8fac4f78295d2576af0e92b04329f4e938c7b6f`.

Fresh preview inspection covers `/privacy/`, `/terms/`, `/seo-command-center/` and `/seo-command-center/privacy/` at 1440 and 390 CSS px, light and dark: 16 states, all HTTP 200, no overflow or browser errors. Their current presentation has a centred introduction, a large gap and an outer legal-content box. An unknown-route control still returns HTTP 404 with GitHub Pages presentation. Privacy/Terms source uses `new Date().toLocaleDateString()`; the displayed 10/25/2026 is a build date, not evidence of a policy revision.

## Proposed treatment

Use the existing Inter body text, Barlow Condensed headings and theme tokens. Centre a **48rem reading column**, with left-aligned introductions, 24px mobile gutters, 48px desktop / 32px mobile top spacing, a thin rule between introduction and body, and open content instead of the outer box. Use 16px/1.7 body text, 26px section headings, a restrained 44–60px page title and consistent 28px section spacing. Make all body links underlined in the theme's text colour, including the legacy blue email links; retain visible keyboard focus.

Apply this with short, page-scoped styles in each of the four files. Keep existing wording, ordering, metadata, routes and link targets. No shared-style refactor or extra decorative elements. On the Command Center landing page, retain the **original logo**, its compact `#172224` background, existing size/padding and exact subtitle; align that block with the reading column. Do not restore the removed heading. The logo's published SHA-256 still matches `A034FD760801D6571274A17E5A05A8980DA63AE7D0D7E0FE717A251AC246019F`.

### Dates — owner choice

Recommend removing only the generated “Last updated” paragraph from Digitful Privacy and Terms, as shown in the renders, subject to owner approval. Alternatively, retain that label with an owner-confirmed, fixed **actual revision date for each policy**. Do not derive one from deployment, Git history or today's date. Leave the Command Center policy's **22 October 2026** date exactly as it is. Policy wording receives no legal/content revision in this task.

### Routes

- **404:** add `src/pages/404.astro`, reusing BaseLayout, header/footer and existing typography/theme controls. Proposed main content is only “404”, “Page not found.” and an underlined “Back to home” link to `/`. No artwork, service grid, form or automatic redirect. Astro emits `404.html`; verify a genuinely missing deployed URL still responds **404**, rather than redirecting to a successful page. The current status handling already works.
- **Temporary specimen:** rename `src/pages/type-test.astro` to `src/pages/_type-test.astro`, preserving its bytes and relative imports. Astro's [underscore exclusion](https://docs.astro.build/en/guides/routing/#excluding-pages) keeps the reference source but omits its route from builds. This also excludes it from subsequent preview builds; recommend accepting that consequence. No dependency, configuration hook, robots-only workaround or source deletion. If preview availability is required, settle that before implementation; a production-only exclusion needs a different, separately bounded approach.

### Automation Before connector

In `src/pages/automation.astro`, replace **only** subpath `M245 83 240 126` with **`M200 83V91M200 118V126`** in the existing dashed route path. Both short strokes now align with the CRM and routing person at x=200. The explicit gap leaves the CRM label unobstructed: its rendered SVG bounds are approximately y=96.7–113.3, between the strokes ending at 91 and resuming at 118. CRM artwork ends near y=76.5; the person's head begins at y=132, outside the connector's 83–126 range.

Keep `stroke-dasharray="9 12"`, stroke styling and all other subpaths. The broken relationship is intentional; do not turn it into a solid After-style connection. The four desktop/mobile light/dark proposal renders show clear label/icon separation. DOM comparisons confirm that the After SVG, all visible copy and every other Before SVG element are unchanged.

## Review renders

These are browser-rendered proposals made by applying temporary DOM/CSS changes to the current preview in memory. They are **not deployed application changes**. Each sheet shows Privacy, Terms, Command Center and Command Center privacy, in that order. Individual full-resolution captures are alongside the sheets.

| View | Light | Dark |
| --- | --- | --- |
| Desktop, 1440px captures | [All four pages](mockups/task-11/desktop-light.png) | [All four pages](mockups/task-11/desktop-dark.png) |
| Mobile, 390px captures | [All four pages](mockups/task-11/mobile-light.png) | [All four pages](mockups/task-11/mobile-dark.png) |
| Connector close-ups | [Desktop](mockups/task-11/connector-1440-light.png) · [Mobile](mockups/task-11/connector-390-light.png) | [Desktop](mockups/task-11/connector-1440-dark.png) · [Mobile](mockups/task-11/connector-390-dark.png) |

![Desktop light](mockups/task-11/desktop-light.png)
![Desktop dark](mockups/task-11/desktop-dark.png)
![Mobile light](mockups/task-11/mobile-light.png)
![Mobile dark](mockups/task-11/mobile-dark.png)
![Corrected connector in all four states](mockups/task-11/connector-review.png)

## Proposed implementation allowlist and ceilings

| Repository / exact file | Change |
| --- | --- |
| digitful: `src/pages/privacy.astro` | Scoped presentation and chosen date treatment |
| digitful: `src/pages/terms.astro` | Same |
| digitful: `src/pages/seo-command-center/index.astro` | Scoped presentation; preserve approved logo/subtitle and absent heading |
| digitful: `src/pages/seo-command-center/privacy.astro` | Scoped presentation; preserve fixed date and full policy |
| digitful: `src/pages/404.astro` | New minimal branded 404 |
| digitful: `src/pages/type-test.astro` → `src/pages/_type-test.astro` | Exact-content rename, excluded from routing |
| digitful: `src/pages/automation.astro` | One SVG path-attribute substitution |
| digitful-preview: `source-ref.txt` | One exact source SHA replacement, only after publication approval |

Propose **task-wide N=240 / M=360**, including the preview pin's +1/-1 (net 0, changed 2) and any retained proposal/check scripts or styles, including workspace tooling. Planning allowance: pages N130/M200; proposal/check tooling N80/M100; pin N0/M2; remaining headroom N30/M58. No new testing framework or dependencies. Documentation text and binary renders are excluded under the invariant; executable mockups/tooling are not excluded merely because they sit under documentation. Captured published HTML/JSON are inspection evidence, not implementation source to publish.

For implementation, preserve this original working-tree snapshot and use published source `aa902eb…` / preview `add640fa…` as the remote comparison baselines; do not charge earlier local edits or republish a lagging checkout. Re-read remote tips before any later authorized writes. Measure baseline-to-final additions, removals, net and total across both repositories; report any rename explicitly and count actual text edits normally. A byte-identical rename changes no text LOC; it does not reset the baseline or hide other changes. Propose an adjustment before exceeding either ceiling.

Later factual documentation updates may touch TASK-11-PROPOSAL, TASK-QUEUE, HANDOFF, CHANGELOG and a new TASK-11-IMPLEMENTATION record. Shared assets/styles/components, BaseLayout, configuration, dependencies, other application routes and the reporting application are outside this implementation proposal.

## Checks and remaining decisions

Completed: 16 published utility states, 16 proposed utility states and four proposed Automation states. Full-page renders and connector close-ups inspected in both themes and sizes. No overflow, broken images or browser/page errors. Policy/application wording and link-target comparisons pass, allowing only the two proposed date-paragraph removals; the Command Center fixed date remains. Existing tracked/untracked files retain their baseline hashes. Browser processes closed; no server started, build, application edit, commit, push or deployment.

Evidence and reproducible proposal tooling: [checks.json](<C:/Users/tarek.azzi/.codex/visualizations/2026/10/25/01a1742c-2698-70d2-99f6-49c3d7021710/checks.json>), [source comparison](<C:/Users/tarek.azzi/.codex/visualizations/2026/10/25/01a1742c-2698-70d2-99f6-49c3d7021710/source-comparison.json>), [preservation](<C:/Users/tarek.azzi/.codex/visualizations/2026/10/25/01a1742c-2698-70d2-99f6-49c3d7021710/preservation.json>) and [connector/logo/status details](<C:/Users/tarek.azzi/.codex/visualizations/2026/10/25/01a1742c-2698-70d2-99f6-49c3d7021710/details.json>). Chromium emulation with environment TLS validation bypassed; no physical-device/Safari/Firefox, legal, reporting-app or form-delivery verification.

After implementation approval, use the existing build and a short targeted browser pass: the same 1440/390 light/dark states, a 320px fit spot-check, policy links/focus, loaded logo/fonts, unchanged copy/After SVG, absent specimen output and generated 404. After separately approved publication, verify actual missing-route HTTP status, exact source pin and existing preview safeguards. Build/route exclusion/custom-404 execution have **not** been tested in this proposal stage.

Owner decisions still needed:

1. Approve the compact treatment and centred, interrupted connector shown here.
2. Approve removal of the two generated date labels, or provide confirmed revision dates for Privacy and Terms.
3. Accept the minimal 404 wording and exclusion of `/type-test/` from preview as well as future production builds.
4. Approve the exact implementation scope and N240/M360 separately. Commit/push/publication and production release remain separate approvals.

**Stop: Ready for proposal review.**
