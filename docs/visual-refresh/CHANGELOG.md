# Digitful Visual Refresh — Change Log

Chronological record of setup and implementation changes for the visual-refresh project.

## 2026-09-15

### Project control / preview setup
- Namecheap DNS: CNAME `preview` → `tarekazz1.github.io`.
- Created public preview repo `tarekazz1/digitful-preview` and set GitHub Pages source to GitHub Actions.
- Created `visual-refresh` branch in `tarekazz1/digitful` from production baseline `c8fac4f78295d2576af0e92b04329f4e938c7b6f`.
- Preview custom domain `preview.digitful.ca` configured; DNS check succeeded; HTTPS enabled.
- Preview safeguards added: noindex/nofollow/noarchive, robots disallow-all, production GTM stripped, FormSubmit blocked, preview CNAME written.
- Initial preview GTM-stripping regex accidentally removed the theme script; fixed in preview repo commit `1d0d972211ca0a1dc551adff22a1463d39ef9260`. User verified theme switching afterward.
- Added durable project documentation: `HANDOFF.md`, `DECISIONS.md`, `CHANGELOG.md`.

### Fix 1 — Contact light-mode links
- Status: **APPROVED — KEEP**.
- Source commit: `2ebd6614be8c7ea1c0f7d841fe8111ff3ec0cc92`.
- Changed only `src/pages/contact.astro`.
- Replaced forced `link-light` on email/phone with theme-aware contact link styling.
- Preview run `34955869009` succeeded.
- Production untouched.

### Fix 2 — Logo accessible name
- Status: **APPROVED — KEEP**.
- Source commit: `b9f1d47898b0481bb1cadf346c46fd49dfba1033`.
- Changed only `src/components/Logo.astro`.
- Added `aria-label="Digitful home"` to the reusable logo link.
- Preview run `34956432099` succeeded.
- Production untouched.

### Fix 3 — Footer copyright contrast
- Status: **APPROVED — KEEP**.
- Source commit: `51c3f18531cd49b26df6d65b18807d9bc5867baf`.
- Changed only `src/components/Footer.astro`.
- Copyright span now uses `var(--site-text-muted)`; no footer redesign.
- Preview run `34957277115` succeeded.
- Production untouched.

### Fix 4 — Thank-you / short-page footer position
- Status: **APPROVED — KEEP**.
- Source commit: `939a771c5ed93cf6ca80a1de1046ddcaed247f44`.
- Changed only `src/layouts/BaseLayout.astro`.
- Added Bootstrap `d-flex flex-column` to `.site-shell` and `flex-grow-1` to `#main-content`.
- Existing `.site-shell` min-height remains 100vh.
- Short pages now use remaining viewport height before the footer, while long pages retain normal flow.
- Preview run `34957902972` succeeded.
- User reviewed the live preview and chose **KEEP**.
- Production `main` / `digitful.ca` remain untouched.

### Phase transition — objective fixes complete
- User and assistant agreed not to implement the remaining layout observations as standalone pre-design fixes.
- Blog hero metadata spacing, mobile section spacing, mobile blog-card height, and tablet `2 + 1` grid behaviour are deferred to the design-shift phase unless an actual functional break is found.
- Reason: these are composition/visual-system decisions and should be judged alongside typography, spacing, card treatment, and page composition to avoid rework.
- Decision recorded as D013 in `DECISIONS.md`.

### Design-process correction — vision before facelifts
- User explicitly rejected starting the design shift with isolated cosmetic edits such as glow removal.
- New rule: settle the overall Digitful design vision/style before any subjective visual implementation.
- Broad direction (`modern consulting / technical practice, not generic AI/SaaS`) remains useful but is not specific enough to build from yet.
- Design vision must first define brand impression, visual references/anti-references, typography, colour, surfaces/depth, icon/image language, composition, motion, and the elements that make the site recognisably Digitful.
- No visual-source experiment was made as part of this decision; the preview remains on the last approved objective-fix source.
- Decision recorded as D014 in `DECISIONS.md`.

### Current preview source
- `939a771c5ed93cf6ca80a1de1046ddcaed247f44`

### Next action
- Do **not** implement glow/card/radius/typography changes yet.
- First develop and approve a coherent design vision/style for Digitful.
- After the vision is approved, translate it into the visual system and page-composition rules, then implement against the preview one controlled step at a time.
