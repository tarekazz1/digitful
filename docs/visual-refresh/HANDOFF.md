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
- preview build now uses Node 22 + `npm ci`

## Framework state
Decision D020 is implemented on `visual-refresh`:
- Astro upgraded from `^5.6.1` to exact `7.3.2`
- lockfile regenerated on Node 22
- source GitHub Pages workflow on `visual-refresh` updated to Node 22 + `npm ci`
- preview workflow updated to Node 22 + `npm ci`
- upgrade package commit: `7d5f709337204c960a4444e905bc9d59bec2f6f8`
- validated preview source: `ea8162f396f103cd7844f40b58ef1850ef07b884`
- preview run `34972381758`: build success, deploy success

No logo or homepage composition change was bundled into the framework upgrade.

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

## Editorial foundation candidate
Visual foundation status: **PENDING USER REVIEW**.

Foundation changes already present:
- `src/assets/_editorial-foundations.scss` loaded after legacy overrides
- approved light/dark palette tokens
- flattened global background and removed page glows
- reduced radii and removed soft/glass shadows
- stronger border/rule treatment
- shared navigation, dropdown, theme toggle, buttons, forms and footer restyled
- header CTA changed to `Talk to Digitful`

Important: the homepage has **not** yet been rebuilt to match the approved specimen. Its old card-heavy section structure remains while inheriting the new foundation layer.

## Current typography comparison candidate
Status: **PENDING USER REVIEW**.

Current preview source:
`3508f01f363d69f04d15136ce23ab35f7ddd4abe`

Preview run:
`34973409207` — build success, deploy success.

Review page:
`https://preview.digitful.ca/type-test/`

What changed:
- Astro 7 Fonts API now delivers Inter from the built site instead of using the old external Google Fonts stylesheet.
- Inter remains the normal site/body font for this test, so normal pages should keep the same typographic appearance.
- The temporary `/type-test/` page compares real approved Digitful copy in four display treatments:
  1. Inter baseline
  2. Barlow Condensed — 800
  3. IBM Plex Sans Condensed — 700
  4. Archivo Black — 400
- Body copy stays in Inter for every specimen.
- Candidate display fonts are injected only on the comparison page; none is applied site-wide yet.

Production `main` / `digitful.ca` remain untouched.

## Immediate next step
User reviews `/type-test/` in light/dark and desktop/mobile and chooses the display direction, or asks for another candidate/adjustment.

After typography approval:
1. record the display-font decision
2. apply the chosen display font cleanly through Astro Fonts API
3. finalize the `digitful.` SVG logo family against the chosen type system
4. rebuild the homepage structure and remove the old generic cards
5. preview/review before adapting other page types

## Later implementation sequence
After display font + logo are approved:
1. rebuild homepage against the approved specimen and locked copy
2. adapt service page type
3. adapt contact and thank-you page types
4. adapt blog index/article while preserving editorial reading priority
5. resolve deferred responsive/composition observations within those page types
6. full desktop/mobile dark/light QA
7. freeze visual baseline
8. performance work: SVG icon migration, JS scoping, CSS/Bootstrap dependency map, safe CSS reduction, re-measure, then remaining font/GTM/caching work as justified

## Functional behaviours that must not break
Mobile navbar, Services dropdown, theme toggle, navigation, blog filters, homepage diagnostic, diagnostic→Contact handoff, contact toggles/hidden fields, production FormSubmit/thank-you redirect, logos, responsive layouts, production GTM/GA, SEO output and CLS stability.
