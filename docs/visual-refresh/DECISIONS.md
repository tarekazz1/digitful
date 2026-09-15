# Digitful Visual Refresh — Decision Log

This file records approved or working decisions so the rationale survives across chats and contributors.

## D001 — Separate preview environment
**Status:** Approved

Keep `digitful.ca` on production `main`. Use `tarekazz1/digitful-preview` + `preview.digitful.ca` for review builds. Preview must not pollute production analytics or accept live form submissions.

---

## D002 — Exact source commit for every preview
**Status:** Approved

The preview repo pins an exact Digitful source SHA. Every reviewed preview must be reproducible and traceable.

---

## D003 — One material change at a time
**Status:** Approved

Objective fixes and subjective design changes are isolated, previewed, reviewed, then marked KEEP / ADJUST / REJECT.

---

## D004 — Broad design intent
**Status:** Superseded by D015 for visual specifics

Move Digitful away from generic AI/SaaS styling and toward a credible technical/consulting identity. This broad intent is now expressed more specifically by the graphic technical editorial direction in D015 and the visual constitution.

---

## D005 — Visual simplification as subtraction
**Status:** Approved principle

Prefer removing unnecessary decoration before adding new elements. An element should communicate structure, meaning, hierarchy or action.

---

## D006 — Preserve functional behaviour
**Status:** Approved

No visual/performance improvement is accepted if it breaks navigation, diagnostic functionality, contact workflow, analytics/measurement, theme behaviour, responsiveness, SEO output or current CLS stability.

---

## D007 — Bootstrap Icons caveat
**Status:** Approved

Do not approve exact icon sizing/weight/alignment from the original local QA screenshots because the external icon font was unavailable there. Icon decisions must be checked on the real preview; later SVG migration may combine visual cleanup with performance work.

---

## D008 — Security hardening is separate
**Status:** Approved

CSP/HSTS/COOP/frame-control/Trusted-Types work is outside this visual/PageSpeed project.

---

## D009 — Contact links use theme-aware colour
**Status:** Approved — KEEP

Replace forced `link-light` on Contact email/phone links with theme-aware styling.

Reviewed source: `2ebd6614be8c7ea1c0f7d841fe8111ff3ec0cc92`.

---

## D010 — Stable accessible name for logo links
**Status:** Approved — KEEP

Add `aria-label="Digitful home"` to the reusable logo link.

Reviewed source: `b9f1d47898b0481bb1cadf346c46fd49dfba1033`.
Preview run: `34956432099`.

---

## D011 — Stronger footer copyright contrast
**Status:** Approved — KEEP

Use `var(--site-text-muted)` for the copyright text only.

Reviewed source: `51c3f18531cd49b26df6d65b18807d9bc5867baf`.
Preview run: `34957277115`.

---

## D012 — Short pages keep footer at viewport bottom
**Status:** Approved — KEEP

Use a vertical flex layout on `.site-shell` and let `#main-content` grow into unused viewport height.

Reviewed source: `939a771c5ed93cf6ca80a1de1046ddcaed247f44`.
Preview run: `34957902972`.

---

## D013 — End the objective-fix phase after Fix 4
**Status:** Approved

Blog hero spacing, mobile section spacing, mobile blog-card height and tablet `2 + 1` grids are design-system/composition issues unless they reveal a functional break. Review them during the redesign rather than as pre-design fixes.

---

## D014 — Settle the design vision before subjective implementation
**Status:** Approved

Do not begin the redesign with isolated facelifts such as glow removal, radius tweaks or card cleanup. Define and approve the complete visual system first.

---

## D015 — Graphic technical editorial + analog-print direction
**Status:** Approved

Digitful's redesign will use a **graphic technical editorial system with an analog-print edge**.

Core character:
- technical precision + human imperfection
- warm paper neutrals + dark ink
- flat coral / teal / mustard accents
- strong rules and outlines
- bold compact display typography
- restrained print texture
- selective hand-drawn technical annotations
- disciplined asymmetry
- fewer default cards and repeated SaaS layouts

The homepage mockup is the style north star, **not** the final homepage structure.

Production layouts should preserve the mockup's identity while reducing density and competing focal points: **same identity, less clutter**.

The detailed source of truth is `docs/brand/VISUAL-CONSTITUTION.md`.

---

## D016 — Refined `digitful.` wordmark direction
**Status:** Approved for brand-system development; production replacement not yet approved

Keep the lowercase Digitful wordmark concept and refine it into the new visual language. The working direction uses `digitful.` with a coral terminal dot plus dark, light, monochrome, tagline and standalone `d.` variants.

Concept assets live in:
`docs/brand/logo-concepts/2026-09-retro-direction/`

These PNG concepts are reference assets, not final production masters. Final site assets should be clean SVG vectors approved after visual validation.

---

## D017 — Homepage copy voice, wording, and density
**Status:** Approved

Lock the new non-blog homepage copy before implementation. The tone is plainspoken, useful, concise, lightly witty when it helps the point, and confident without agency chest-thumping.

Use `docs/brand/HOMEPAGE-COPY.md` as the source of truth for the approved homepage wording and content hierarchy.

Key approved choices include:
- Header CTA: `Talk to Digitful`
- Hero: `Marketing works better when the parts talk to each other.`
- What we fix: `More traffic won’t fix a messy system.`
- Slow follow-up line: `If the next step relies on memory, it probably needs a system.`
- Core offers: `Four parts. One growth system.`
- Good fit: `The business is moving. The system is lagging behind.`
- Instant Snapshot: `See what your website is making harder than it should be.`
- Final CTA: `Bring the messy version.`

Homepage density rule: **one headline + one layer of supporting information, not two**. Do not add separate summary paragraphs under `What we fix`, `Core offers`, or `Good fit` when their item blurbs already provide the supporting layer. Remove the decorative `Clearer / More efficient / Built for real business` strip.

Avoid generic agency language such as `drive growth`, `unlock potential`, `scale smarter`, `transform your business`, and `results-driven`.

Minor line breaks may change responsively, but wording/hierarchy should not be rewritten during implementation without another explicit content decision.

---

## D018 — Mobile homepage design specimen
**Status:** Approved

The mobile homepage specimen is approved as the working mobile design direction.

Approved mobile principles:
- same visual identity as desktop, not a stripped generic mobile theme
- strong single-column hierarchy
- less text and fewer simultaneous focal points
- touch-friendly controls and CTAs
- retained paper/ink/coral/teal/mustard identity
- selective annotations rather than decorative clutter
- real homepage content and Instant Snapshot remain intact
- sections stack and simplify rather than merely shrink the desktop layout

---

## D019 — Dark-mode homepage specimen and homepage design freeze
**Status:** Approved

The dark-mode homepage specimen is approved. The homepage visual direction is now frozen for implementation across desktop, mobile, light mode and dark mode.

Dark-mode rules:
- charcoal/ink base with warm cream typography
- same coral / teal / mustard accents as light mode
- flat fills, strong rules and restrained print grain
- same editorial hierarchy and selective annotations
- no glow, glassmorphism, blue/purple gradients, cyber styling or translucent SaaS surfaces

The approved homepage system now consists of:
- visual constitution
- refined `digitful.` logo direction
- locked homepage copy and density rules
- approved desktop visual direction
- approved mobile specimen
- approved dark-mode specimen

Implementation may tune exact token values, spacing and line breaks in-browser for accessibility and responsive fit without reopening the design direction. Material visual changes still require a new explicit decision.

---

## D020 — Upgrade Astro before typography work
**Status:** Approved and implemented on `visual-refresh`; preview validation successful

Upgrade the redesign branch from Astro `5.6.1` to Astro `7.3.2` before selecting the new display typeface.

Reasons:
- use the current Astro generation before deeper redesign work
- prepare for Astro's newer font tooling when testing the display typeface
- avoid rebuilding the typography pipeline twice
- keep the framework upgrade isolated from homepage composition, logo replacement and font selection

Implementation rules:
- Node 22 for source and preview builds
- refreshed `package-lock.json`
- `npm ci` for reproducible GitHub Pages builds
- no visual redesign bundled into the framework upgrade

Upgrade package commit: `7d5f709337204c960a4444e905bc9d59bec2f6f8`.
Previewed source: `ea8162f396f103cd7844f40b58ef1850ef07b884`.
Preview run: `34972381758` — build and deploy successful.

---

## D021 — Barlow Condensed display typography
**Status:** Approved and implemented as the current preview candidate

After browser comparison against Inter, IBM Plex Sans Condensed and Archivo Black, use **Barlow Condensed** as Digitful's display/headline face.

Typography system:
- Barlow Condensed 800 for primary display headings
- Inter remains the neutral body/interface face
- both are delivered through Astro's Fonts API rather than the previous external Google Fonts stylesheet
- expressive display typography stays out of long body copy

Implementation source: `12ad2246ad73344bbf33674bf8eb2585e7d10b2e`.
Preview run: `34974525550` — build and deploy successful.

---

## Current pending decisions
- Final SVG logo masters and minimum-size/clear-space rules.
- Exact production token values after browser/accessibility testing.
- Exact section compositions for non-home page types.
- Final implementation choices for deferred blog/mobile/tablet layout observations.
