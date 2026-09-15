# Digitful Visual Refresh — Handoff

## New-chat instruction
> Continue the Digitful visual-refresh project. Read `docs/visual-refresh/HANDOFF.md`, `docs/visual-refresh/DECISIONS.md`, `docs/visual-refresh/CHANGELOG.md`, `docs/brand/VISUAL-CONSTITUTION.md`, and `docs/brand/HOMEPAGE-COPY.md` on branch `visual-refresh` before doing anything. Do not modify production until the documented approval process says to do so.

## Working rules
- Production/source repo: `tarekazz1/digitful`
- Production branch: `main`
- Working branch: `visual-refresh`
- Preview repo: `tarekazz1/digitful-preview`
- Preview URL: `https://preview.digitful.ca`
- Production remains untouched until explicit final approval.
- Preview pins exact source SHAs.
- One material implementation change at a time: preview → KEEP / ADJUST / REJECT.

## Baseline
Production baseline: `c8fac4f78295d2576af0e92b04329f4e938c7b6f`.

Mobile PSI baseline:
- Performance 69
- Accessibility 91
- Best Practices 100
- SEO 100
- Agentic Browsing 1/2
- FCP 3.0s
- LCP 5.8s
- TBT 140ms
- CLS 0
- Speed Index 4.9s

Main performance findings remain: render-blocking CSS/Google Fonts, Bootstrap Icons font (~132 KiB), Google tag JS, text LCP. Preserve CLS 0.

## Preview environment
- Namecheap CNAME: `preview` → `tarekazz1.github.io`
- GitHub Pages via Actions
- custom domain/DNS/HTTPS working
- noindex/nofollow/noarchive
- robots disallow-all
- production GTM stripped
- FormSubmit blocked
- theme-switch preview bug fixed in preview repo commit `1d0d972211ca0a1dc551adff22a1463d39ef9260`

## Approved objective fixes
1. Contact light-mode links — KEEP — `2ebd6614be8c7ea1c0f7d841fe8111ff3ec0cc92`
2. Logo accessible name — KEEP — `b9f1d47898b0481bb1cadf346c46fd49dfba1033`
3. Footer copyright contrast — KEEP — `51c3f18531cd49b26df6d65b18807d9bc5867baf`
4. Thank-you / short-page footer position — KEEP — `939a771c5ed93cf6ca80a1de1046ddcaed247f44`

## Approved visual direction
Decision D015:

**Graphic technical editorial + analog-print edge.**

Core tension:
**technical precision + human imperfection.**

Production target:
**same identity, less clutter.**

The approved reference system uses:
- warm paper neutrals
- dark ink
- flat coral / teal / mustard accents
- strong borders/rules
- bold compact display typography
- restrained print texture
- selective hand-drawn technical annotations
- disciplined asymmetry
- fewer default cards/repeated SaaS layouts

Explicitly avoid glassmorphism, blue/purple AI gradients, neon glows, generic bento grids, pill-everything, 3D blobs and repeated rounded-card templates.

Full source of truth:
`docs/brand/VISUAL-CONSTITUTION.md`

## Working logo direction
Decision D016:
- refined lowercase `digitful.` wordmark
- coral terminal dot
- dark/light/monochrome/tagline/standalone `d.` concepts

Concepts live at:
`docs/brand/logo-concepts/2026-09-retro-direction/`

These PNGs are not final production logo masters. Final assets should be clean approved SVGs after visual validation.

## Approved homepage copy and density
Decision D017.

Source of truth:
`docs/brand/HOMEPAGE-COPY.md`

Tone:
- plainspoken
- useful
- concise
- lightly witty when useful
- not salesy

Key locked lines:
- `Marketing works better when the parts talk to each other.`
- `More traffic won’t fix a messy system.`
- `If the next step relies on memory, it probably needs a system.`
- `Four parts. One growth system.`
- `The business is moving. The system is lagging behind.`
- `See what your website is making harder than it should be.`
- `Bring the messy version.`

Header CTA becomes `Talk to Digitful`.

Homepage content-density rule:
**one headline + one layer of supporting information, not two.**

Therefore:
- no decorative `Clearer / More efficient / Built for real business` strip
- no separate summary paragraph beneath `What we fix`
- no separate summary paragraph beneath `Core offers`
- no separate summary paragraph beneath `Good fit`
- keep short explanatory copy where it is functionally useful: hero, Instant Snapshot, final CTA

The blog was explicitly excluded from this copy pass.

## Homepage design validation — complete
### Mobile
Decision D018: **approved**.

The mobile specimen confirms:
- same brand identity as desktop
- single-column hierarchy instead of compressed desktop layout
- reduced clutter
- readable/touch-friendly controls
- selective annotation use
- real homepage sections preserved
- Instant Snapshot remains part of the homepage structure

### Dark mode
Decision D019: **approved**.

Approved dark-mode character:
- charcoal/ink background
- warm cream typography
- flat coral/teal/mustard accents
- strong rules
- restrained print texture
- same editorial hierarchy as light mode
- no glow, glassmorphism, cyber styling or blue/purple SaaS gradients

### Homepage design freeze
The homepage direction is now frozen across desktop, mobile, light and dark modes.

Implementation may tune exact colour values, spacing, line-height and responsive line breaks for accessibility and browser fit without reopening the design. Material visual changes require a new decision.

## Current preview candidate — editorial foundations
Status: **PENDING USER REVIEW**.

Preview source:
`8f30106882e3e0b659865c1187f0aa5dc50ec96a`

Preview run:
`34969653064` — build success, deploy success.

What changed:
- added `src/assets/_editorial-foundations.scss` after the legacy overrides
- applied approved light/dark palette tokens
- flattened the global background and removed page-glow markup
- reduced radii and removed soft/glass shadows
- strengthened border/rule treatment
- restyled shared navigation, dropdown, theme toggle, buttons, forms, footer and generic legacy surfaces
- changed header CTA to approved wording `Talk to Digitful`
- kept Inter for this foundation pass; exact display typeface remains pending browser testing

Important: the homepage has **not** yet been rebuilt to match the approved specimen. Its old section structure/content remains while inheriting the new foundation layer.

Production `main` / `digitful.ca` remain untouched.

## Immediate next step
User reviews `preview.digitful.ca` for this foundation pass.

Review light + dark and desktop + mobile, focusing on:
- header/nav/dropdown/theme toggle
- overall paper/ink palette and contrast
- button treatment
- generic surfaces and forms
- footer
- readability and obvious regressions

Do not judge homepage composition against the final mockup yet; that comes after the foundation pass is accepted.

After user says KEEP:
1. record the foundation decision
2. rebuild homepage against the approved specimen and locked copy
3. deploy exact source SHA to preview
4. review homepage before adapting other page types

## Later implementation sequence
After homepage foundations are approved:
1. adapt service page type
2. adapt contact and thank-you page types
3. adapt blog index/article while preserving editorial reading priority
4. resolve deferred responsive/composition observations within those page types
5. full desktop/mobile dark/light QA
6. freeze visual baseline
7. performance work: SVG icon migration, JS scoping, CSS/Bootstrap dependency map, safe CSS reduction, re-measure, then fonts/GTM/caching as justified

## Functional behaviours that must not break
Mobile navbar, Services dropdown, theme toggle, navigation, blog filters, homepage diagnostic, diagnostic→Contact handoff, contact toggles/hidden fields, production FormSubmit/thank-you redirect, logos, responsive layouts, production GTM/GA, SEO output and CLS stability.
