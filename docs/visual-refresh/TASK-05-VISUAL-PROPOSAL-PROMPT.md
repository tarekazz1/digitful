# Task 05 — Paid Ads visual proposal brief

Prepared 2026-09-23. Suggested model: **Sol, medium effort**. This is a bounded composition task with established copy and a design system. Submit the proposal for managing-agent and owner review; do not implement the page.

## Start here

Work in the existing local checkout:

`C:/Users/tarek.azzi/OneDrive - Université Saint-Esprit de Kaslik/Documents/GitHub/digitful`

Source repository: `tarekazz1/digitful`; branch: `visual-refresh`. Last locally checked HEAD: `da755df59ffe466a572097c1507f8c2f7410db9d`. Recheck the current state rather than assuming that SHA is still the tip. Task 05 records are currently local and uncommitted; preserve them. A new clone or worktree will not automatically contain these files. If the current records are unavailable, report that instead of reconstructing decisions from old commits.

You are not alone in the codebase. Preserve other people's changes and stay within this proposal's files. Read applicable repository instructions and these sources:

- `docs/visual-refresh/TASK-QUEUE.md`: mandatory rules and current Task 05 entry; earlier task prompts are history.
- `docs/visual-refresh/HANDOFF.md`, `DECISIONS.md`, `CHANGELOG.md`, and `DELTA-LOC-INVARIANT.md`.
- `docs/brand/VISUAL-CONSTITUTION.md` and `HOMEPAGE-COPY.md`.
- `docs/visual-refresh/TASK-05-PAID-ADS-PROPOSAL.md`: **section 16 is the current copy and structure; section 15 confirms service scope.** Sections 3–14 contain superseded drafts. Section 1 records the earlier page inspection.

Current owner instructions and the latest recorded decisions govern over historical proposal text. Do not revive rejected copy or treat the whole Paid Ads service scope as unknown.

## Task and boundaries

Create one concrete Paid Ads page proposal using the section 16 wording, the existing Digitful visual system, and the owner-suggested **halftone billboard with a curved comic road**. The owner has authorized desktop/mobile inspection and a content-and-visual proposal. This brief covers proposal artifacts and local rendered inspection only.

Use this write scope:

- `docs/visual-refresh/mockups/task-05-*` for the standalone editable composition and screenshot evidence.
- `docs/visual-refresh/candidates/task-05-*` for proposal artwork candidates and derivatives.
- A clearly labelled visual-proposal evidence entry in `TASK-05-PAID-ADS-PROPOSAL.md`; preserve the content decisions and their approval status.

Do not edit application source, shared styles/components, shipped assets, dependencies, workflows, preview configuration or production. Do not change the preview pin, deploy, commit or push. No implementation N is approved. Recommend a later N only after the proposed scope is concrete; do not reuse Task 04's ceiling or claim an N PASS for this proposal.

## Content to render

Render section 16's complete copy exactly, in order: hero, business priorities, delivery, testing, closing CTA. The hero begins **“A clever ad is not a campaign.”** The approved new section begins **“Start with the business you want more of.”** Both CTAs use `/contact/?service=paid-ads`.

The delivery/testing sentences remain working wording within the approved structure; render them as supplied for review rather than silently expanding or rewriting them. If a sentence causes a material layout/content concern, report it separately. Do not reintroduce buyer-question cards, a FAQ, an SEO-style selector, a platform roster, extra explanations or new slogans.

Digitful provides ad creation, campaign setup, ongoing campaign/budget management, and landing-page recommendations and implementation. Do not ask the owner to reconfirm those services. Specific platforms, reporting cadence and tracking installation have not been separately confirmed. No client example or outcome evidence is supplied: omit a proof section rather than displaying a placeholder or inventing results.

## Visual direction

Inspect the current accepted Social Media and SEO pages at `https://preview.digitful.ca/social-media/` and `/seo/`, plus their local source and shipped artwork. Use them to understand the print texture, graphic weight, typography, colour and restraint. Old Task 04 mockups are not the current page authority. Do not copy a completed page's composition mechanically.

Use the actual Barlow Condensed/Inter fonts and approved tokens. Preserve the existing navigation/footer appearance in the composition. Keep flat paper/ink fields, hard CTA outlines and restrained coral/teal/mustard accents. Do not introduce gradients, glows, repeated boxed grids or unrelated illustration styles.

Explore one billboard/road artwork candidate in context. Check for suitable existing assets first. If new raster artwork is needed for this proposal, use the available image-generation/editing skill and tool, identify it as a new unapproved candidate, and keep it outside shipped assets. Do not silently substitute stock clip art or extract an unrelated object from an old screenshot. If the required image capability is unavailable, report the specific gap; do not pass off a placeholder as completed artwork.

The billboard should read clearly as a billboard; the curved road should support the composition without becoming a literal multi-step customer funnel. Match the accepted halftone/cut-paper character. Avoid invented text baked into the artwork, artificial distressed type, white silhouette halos and excessive decorative arrows. Any proposed use of approved copy within the billboard should remain real, legible layout text.

Give the desktop hero a deliberate relationship between type and art. On mobile, preserve readable full-width text and compact vertical rhythm; do not squeeze copy beside a wide graphic. Do not pad this short page with giant blank sections. Delivery and testing may share a compact visual area while preserving their reading order and distinct meaning.

## Render, inspect and return

Create a standalone editable HTML/CSS composition under `mockups/`, using existing resources without adding dependencies. Do not modify the Astro page to obtain screenshots. Render the proposal at **1440px desktop and 390px mobile, in light and dark themes**. Also check fit at 320, 768 and 1024px; only save additional captures when needed to explain a finding.

Use the available browser tool or documented Playwright fallback and name the actual method. Wait for fonts, scroll through the whole page, await image loading/decoding, and inspect the resulting screenshots yourself. Check text wrapping, reading order, alignment, image edges against both backgrounds, CTA visibility and overlap. Zero horizontal overflow alone is insufficient. Check browser errors as well. No external diagnostic or form submission is required.

Return:

1. The editable composition and four actual full-page renders, clearly labelled by width/theme. Include readable hero close-ups if the full-page images obscure the artwork detail.
2. The candidate artwork, its provenance, dimensions and file sizes. Distinguish source-image size from any proposed web derivative.
3. A short design rationale, checks performed, remaining concerns and an implementation scope/N recommendation for later approval.
4. Inline image previews plus clickable file links. Open the composition in the app when available so the owner can actually see it. Do not return only paths or call placement notes “renders.”

Stop task-owned servers after verification without touching unrelated processes. End at **Ready for managing-agent and owner review — proposal only**. Do not self-award technical signoff, visual acceptance or KEEP.
