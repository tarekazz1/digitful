# Task 05 — Paid Ads visual proposal — updated 2026-10-23

## Current revision — owner-supplied copy

The owner's full replacement copy and subsequent “Use this copy” instruction supersede the section 16 wording used in the initial 2026-10-06 proposal below. Rendered verbatim in `task-05-paid-ads.html`: new hero body, four problem statements, revised business paragraph, four numbered work steps, and closing invitation. The structural label “Hero” is not printed as page copy; the other supplied section labels are rendered. Both CTAs still target `/contact/?service=paid-ads`. No editorial substitutions or proof content added. The earlier delivery/testing approval concern below is historical for the superseded copy.

Existing artwork, shared navigation/footer, tokens, fonts and theme behavior retained. Open lists and responsive columns accommodate the new content. Refreshed full-page screenshots at 1440/390px in light/dark inspected after fonts/images loaded and scrolling. No wrapping, clipping, overlap, CTA-visibility or artwork-edge issues observed. Checks at 320/390/768/1024/1440px in both themes show zero overflow, no outside elements, all images loaded and no console/page errors or failed resource responses. Mobile menu and theme toggle pass. Current full-page heights: 1440 light/dark 2298/2290px; 390 light/dark 3191/3184px. Full evidence is in the updated `task-05-checks.json`; measurements in the initial record below are historical.

Revision baseline: local HEAD and remote `visual-refresh` tip `7662b894454c11406c1fd47b1a5b166bbc1f6170`; current preview pin read as `4be5284ec4625e81c22ec71d7097112e331541ac`. No pin mutation. Pre-existing HANDOFF, CHANGELOG and prompt edits preserved. Writes remain in Task 05 proposal files plus the short section 17 authority/evidence note. Task-owned server stopped after checking. No application edits, dependencies, deployment, commits or pushes; implementation N/M remain a later decision.

**Ready for managing-agent and owner review — proposal only.**

## Initial proposal record — 2026-10-06 (historical copy and measurements)

**Ready for managing-agent and owner review — proposal only**

## Baseline and authority

Existing `digitful` checkout, branch `visual-refresh`, local HEAD and live remote tip `c1901584aeed0e11418614b6c72cf63e3e811b11`. Live preview source pin read without mutation: `74effcb96b52c13e05f98c0d7fd397e983815a4c`. Pre-existing modification to `docs/visual-refresh/TASK-05-VISUAL-PROPOSAL-PROMPT.md` preserved.

Read the task queue, handoff, decisions, changelog, change-budget invariant, visual constitution and homepage-copy authority. Section 16 of `TASK-05-PAID-ADS-PROPOSAL.md` supplies the exact visible copy/structure; section 15 confirms service scope. Current Social Media/SEO source, shipped artwork and live preview hero renders informed the composition. Earlier mockups did not govern it.

## Editable deliverable

- `task-05-paid-ads.html`: semantic standalone proposal, no application build required.
- `task-05-paid-ads.css`: readable page-owned CSS for editing composition.
- `task-05-shared-snapshot.css`: current built shared shell/style snapshot with existing fonts embedded; header/footer markup and wordmarks reused from the current built SEO page. Existing Bootstrap navigation behavior and existing theme script retained. No new page interactions.
- `../candidates/task-05-billboard-road.png` and `task-05-provenance.md`: one raster candidate and exact generation/refinement prompts.
- Four final screenshots: `task-05-1440-light.png`, `task-05-1440-dark.png`, `task-05-390-light.png`, `task-05-390-dark.png`.
- `task-05-checks.json` and `task-05-render.cjs`: measurements and reproducible checks using the existing bundled Playwright runtime/browser. No dependencies or test framework added.

Keep the mockup CSS siblings and adjacent candidates directory together when copying the standalone proposal. Shared CSS/fonts/logos and navigation JavaScript do not depend on a new build or third-party requests.

## Design choices

One restrained halftone billboard and curved road beside the desktop headline; the mobile order is headline, body, CTA, then compact artwork. The coral disk is an abstract printed graphic, not campaign proof or placeholder copy. Art never sits behind text. Existing Barlow Condensed/Inter, paper/ink themes, flat teal business-priorities band, open delivery/testing blocks, rules and outlined coral CTAs keep the page compact and consistent with current references. No slogans, extra visible section labels, question cards, proof block or invented claims added.

## Checks and evidence

Existing-browser Chromium captures at 1440 and 390px in both themes, after fonts settled, images decoded and the page was scrolled. All four actual full-page renders inspected for wrapping, spacing, clipping, overlap, CTA visibility and cutout edges. Visual fit spot-checks at 320, 768 and 1024px in both themes also inspected; their disposable captures and reference captures were removed after review.

All ten states: zero horizontal overflow, no content outside the viewport, all images loaded, Barlow Condensed active, no console/page errors or failed resource responses. Hero copy/art bounding boxes do not overlap. At 390px mobile copy is 366px wide and the hero is 658.5px tall. Full-page heights: 1440 light/dark 1328/1321px; 390 light/dark 1714/1707px. Both CTAs retain `/contact/?service=paid-ads`; they remain visible and readable, including the wrapped closing CTA at 320px. Mobile menu expansion and theme switching pass. Artwork edges remain clean on light and dark surfaces. No close-up needed to judge the art.

Exact main-page wording and CTA targets checked against section 16. No forms submitted or contact journey invoked. No Astro build or application-runtime regression test is claimed because application files were not edited. The local Playwright CLI was unavailable; the existing bundled Playwright library and installed Chromium were used without installation. Browser startup required approved sandbox escalation to reach localhost; final page checks are clean.

Task-owned localhost server stopped after checks. Disposable browser startup log removed. `git diff --check` passed; only new proposal files remain alongside the preserved pre-existing prompt edit. No application edits, dependencies, preview-pin changes, deployment, commits or pushes. Implementation N/M budgets remain unapproved and are a later decision.

## Remaining review concerns

Delivery and testing are retained verbatim as working copy; section 16 does not record separate final owner approval of those lines. Their editorial approval remains a review item, without silently rewriting them. No real campaign example is available, so proof content is omitted. The artwork is a 2.14 MiB proposal PNG master; production formats/responsive optimization require a later implementation decision. Visual acceptance and managing-agent signoff remain pending.
