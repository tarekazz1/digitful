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

Current preview still pins the last approved visual source:
`939a771c5ed93cf6ca80a1de1046ddcaed247f44`

Docs/brand commits after that are intentionally not previewed because they do not change the rendered site.

## Phase transition
The objective-fix phase ended after Fix 4 (D013).

Blog hero spacing, mobile section spacing, mobile blog-card height and tablet `2 + 1` grids are redesign decisions unless they prove to be functional defects.

D014: define the complete design vision before subjective implementation. Do not start with isolated cleanup/facelifts.

## Approved working visual direction
Decision D015:

**Graphic technical editorial + analog-print edge.**

Core tension:
**technical precision + human imperfection.**

The approved homepage mockup is the **style north star, not the structural wireframe**.

Production target:
**same identity, less clutter.**

The visual system should use:
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

## Approved homepage copy
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

The blog was explicitly excluded from this copy pass.

## Immediate next step
Do **not** implement the redesign in code yet.

Create and review a cleaner homepage design specimen/mockup that:
- follows `docs/brand/VISUAL-CONSTITUTION.md`
- uses the approved wording from `docs/brand/HOMEPAGE-COPY.md`
- uses the current homepage’s real functional structure
- includes the Instant Snapshot diagnostic
- preserves the approved retro/editorial identity
- reduces density, competing elements and gratuitous annotations

After the specimen is approved, translate the visual system into CSS/components and begin preview implementation.

## Later implementation sequence
After the design specimen is approved:
1. translate constitution into design tokens and foundational CSS
2. implement shared shell/header/footer/typography/colour system
3. rebuild homepage against the approved specimen and locked copy
4. adapt service, blog, contact and thank-you page types
5. resolve deferred responsive/composition observations as part of those layouts
6. full desktop/mobile dark/light QA
7. freeze visual baseline
8. performance work: SVG icon migration, JS scoping, CSS/Bootstrap dependency map, safe CSS reduction, re-measure, then fonts/GTM/caching as justified

## Functional behaviours that must not break
Mobile navbar, Services dropdown, theme toggle, navigation, blog filters, homepage diagnostic, diagnostic→Contact handoff, contact toggles/hidden fields, production FormSubmit/thank-you redirect, logos, responsive layouts, production GTM/GA, SEO output and CLS stability.
