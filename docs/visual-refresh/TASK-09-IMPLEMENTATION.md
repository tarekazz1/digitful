# Task 09 — What We Build implementation

## Task 09 — preview publication authorized — 2026-10-25

The owner explicitly authorized scoped commit, push and preview deployment after the local Task 09 implementation. This supersedes the earlier local-only publication boundary; production remains excluded. The approved short copy and visual proposal are implemented in src/pages/what-we-build.astro, with a self-contained retained checker. Existing local build evidence records 25 pages, 16 width/theme states, 20 keyboard targets, four navigation/theme states, five destinations and four renders identical to the approved mockups.

Publication uses original remote baseline `653fc67c83f72d4bb056de8d80253b5fb1c7acc8` and the exact reviewed application/checker files. Only this page, checker and factual Task 09 records are included; unrelated local changes and other tasks' pending records are excluded. Source +202/-60/net142/changed262; including the planned preview pin +203/-61/net142/changed264, within approved N180/M320. GitHub diff verification, existing preview CI and deployed checks will confirm the published result. No new runtime JavaScript, shared-style/controller, dependency or asset changes.

Implementation technical signoff and owner KEEP are not self-awarded by this publication note. Deployed verification and remaining limits will be recorded after the existing preview workflow completes. No production release, form submission or external diagnostic is authorized.

2026-10-25. **Ready for managing-agent review — local implementation only.**

The owner approved the shorter copy, then the revised mockup, then explicitly approved scope and N180/M320. Those approvals authorize this local implementation. They do not authorize commit/push, preview publication or production release. Implementation technical signoff and implementation owner KEEP remain pending.

## Result and scope

Replaced the legacy systems/process boxes in `src/pages/what-we-build.astro` with the approved brief hero, four concrete service rows and a short contact invitation. Title/description are the approved strings; canonical and all four service/Contact paths stay intact. Scoped CSS uses existing typefaces and theme tokens, with teal/ink contact treatment and coral/ink CTA. Shared typography already supplies Barlow Condensed 800; no duplicate font setup was needed.

BaseLayout owns `#main-content`, so the page does not duplicate the mockup’s standalone ID. Shared header/footer, navigation/theme controllers, assets, dependencies, configuration and other pages are unchanged. No new application JavaScript. The retained self-contained checker is `mockups/task-09-implementation-check.cjs`; it does not depend on a mockup fixture or copied shell library.

## Baseline and preservation

- Current remote source verified before editing: `653fc67c83f72d4bb056de8d80253b5fb1c7acc8`.
- Original page blob: `daca279c50424136852fc30a09be85e43dca6a02`; local page matched it.
- Preserved local HEAD: `d4df671724888071a845d1da03073b4a34403210`, branch `visual-refresh`.
- Existing preview HEAD: `3f56377f735668672833d5de7a1f67f14646e0fb`, still pinning source `d479a6b8278c6ca874ced72a664d0753bfaa0997`. No new preview run or publication.
- An isolated source copy was verified against all 111 non-documentation/non-workflow files in the current remote Git tree before applying only this page change. The checkout’s substantial pre-existing work was preserved, excluded from build/publication and not reset.
- Application SHA-256: `b22fde8c7f274b83b50e8d870260d6d14291ee79cfc6eba6f100214b727d277a`.
- Retained checker SHA-256: `96286986882b0c84c0785ca6d15f9070e591ddfb08890e2fe6047bc51683ae14`.

Evidence receipts: [baseline](mockups/task-09-implementation-baseline.json), [environment](mockups/task-09-implementation-environment.json), [remote tree](mockups/task-09-implementation-remote-tree.json), [final scope audit](mockups/task-09-implementation-preservation.json).

## Budget against original baseline

| Counted path | Added | Removed |
| --- | ---: | ---: |
| `src/pages/what-we-build.astro` | 125 | 60 |
| `docs/visual-refresh/mockups/task-09-implementation-check.cjs` | 77 | 0 |
| Total | **202** | **60** |

**Net +142 / N180 PASS. Total changed 262 / M320 PASS. Scope PASS.** No ceiling increase or scope expansion. Documentation text and binary review evidence are excluded. Existing proposal helpers/assets predate this implementation and were not changed. No preview configuration delta. [Machine-readable count](mockups/task-09-implementation-budget.json).

## Verification

The flow checked is introduction → scan the approved service descriptions → service or Contact destination, plus keyboard traversal, navigation and theme controls.

- Isolated `npm.cmd run build`: **25 pages built**, Astro 7.3.2, Node 24.13.0. Existing Bootstrap/Dart Sass deprecation warnings remain. The existing CI workflow uses Node 22; CI was not invoked in this local-only task.
- Built page: 320/390/600/768/991/992/1024/1440px in light/dark, **16 states PASS**. Exact approved text/order, title/meta/OG/Twitter descriptions, canonical, five targets, one `#main-content`, loaded fonts/images and no clipping/overflow verified.
- All five main-page links reached by Tab at 390/1440px in both themes: **20 focused links PASS**, visible 3px outlines and text contrast at least **4.94:1**. Four closing-CTA focus captures inspected.
- Shared mobile menu, Services dropdown and theme changes pass in four width/theme states. Four service pages and Contact load from the same build and expose meaningful H1s. No page/console errors in the completed run.
- All four full-page implementation renders inspected and **SHA-256-identical to the owner-approved mockups**. Intermediate-width renders inspected in the four fit sheets. [Visual comparison](mockups/task-09-implementation-visual-comparison.json).
- `git diff --check -- src/pages/what-we-build.astro` and checker syntax check pass. Existing Git LF→CRLF notification is informational.

| Width | Light | Dark |
| --- | --- | --- |
| 1440px | [Built render](mockups/task-09-implementation/1440-light.png) | [Built render](mockups/task-09-implementation/1440-dark.png) |
| 390px | [Built render](mockups/task-09-implementation/390-light.png) | [Built render](mockups/task-09-implementation/390-dark.png) |

[Checker results](mockups/task-09-implementation/checks.json), [build log](mockups/task-09-implementation-build.log), [light fit 320/600/768](mockups/task-09-implementation/fit-320-600-768-light.png), [dark fit 320/600/768](mockups/task-09-implementation/fit-320-600-768-dark.png), [light fit 991/992/1024](mockups/task-09-implementation/fit-991-992-1024-light.png), [dark fit 991/992/1024](mockups/task-09-implementation/fit-991-992-1024-dark.png).

Rerun: `node docs/visual-refresh/mockups/task-09-implementation-check.cjs <isolated-source-root-with-dist> <evidence-directory>`. `TASK09_PLAYWRIGHT` and `TASK09_CHROMIUM` can override the bundled browser paths.

## Limits and resolved environment issues

The first temporary build hit an existing Vite cache issue; private dependency/cache copies resolved it without changing repository dependencies. A successful build under Windows’ short user-path alias omitted CSS; rebuilding with the canonical full path produced seven stylesheet files and the verified result. These were build-environment issues, not application fixes. The first copy assertion was corrected to use rendered `innerText`, accounting for Astro’s HTML whitespace normalization. No source configuration was altered for these checks.

Chromium emulation only: no physical-device/Safari/Firefox tests. Local Node 24 differs from unchanged Node 22 CI; a future authorized publication must still pass that CI build. Browser checks load the actual shared Bootstrap CDN script; external tracking is neutralized in the test harness, and non-GET requests are blocked. No forms submitted, diagnostics run or external delivery verified. TLS certificate-chain validation was bypassed for the browser environment. No preview safeguards, tracking or form behavior were changed in source. Task-owned browsers close automatically; no persistent test server was started. Disposable isolated build/dependency copies are cleaned after verification, while reports/renders remain.

No unrelated functionality was intentionally changed. Stop at **Ready for managing-agent review**; no self-awarded technical signoff or implementation KEEP, and no commit, push or deployment.
