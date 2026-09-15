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

### Current preview source
- `939a771c5ed93cf6ca80a1de1046ddcaed247f44`

### Next action
- Begin the visual design-shift phase with one isolated experiment: simplify the site background/glow treatment.
- Do not change cards, radii, icons, colour coding, typography, or page layouts in the same experiment.
- Deploy the exact source commit to preview and review dark/light plus representative desktop/mobile pages before deciding KEEP / ADJUST / REJECT.
