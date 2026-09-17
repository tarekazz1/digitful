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

## Authority and reconciliation — 2026-09-17

The owner approved reconciliation of the supplied `DIGITFUL-FULL-HANDOFF.md` with the repository records on 2026-09-17. This section and D034–D037 record that resolution; they do not grant final KEEP to the Social Media implementation.

- Latest explicit owner instructions take precedence. This handoff governs current status; `DECISIONS.md` records decisions, the brand documents govern approved identity/copy/logo, and `DELTA-LOC-INVARIANT.md` governs counting.
- The newer `visual-refresh` → exact-SHA preview → owner KEEP / ADJUST / REJECT workflow supersedes the older local management package's phase routing and per-step preview release gates for approved visual-refresh tasks. Prefer GitHub-native repository operations for those tasks; refetch affected files, branch tip and preview pin before writes. Do not create temporary Actions workflows for routine writes.
- The older local-only management package remains private historical material. Do not copy it into public Git history. Its obsolete branch/phase checkpoints are not current state.
- Production changes require separate explicit owner approval. Never use the source repository's production deployment workflow for preview work.
- The initial reconciliation was documentation-only. The owner subsequently supplied the three Social Media PNG references, explicitly authorized inspection, and approved focused responsive correction using the existing design system. D038 records that implementation and preview scope. Production publication remains separately gated.
- Browser inspection is now explicitly authorized for this correction. Rendered checks support verification but do not replace final owner KEEP.
- Historical approvals quoted below are retained as history. Build/deploy success, design approval and final implementation KEEP are distinct states.

## Baseline
Production baseline: `c8fac4f78295d2576af0e92b04329f4e938c7b6f`.

Historical mobile PSI baseline (not remeasured during this reconciliation):
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

Main performance findings remain: render-blocking CSS/legacy font path, Bootstrap Icons font (~132 KiB), Google tag JS, text LCP. Preserve CLS 0.

## Preview environment
- Namecheap CNAME: `preview` → `tarekazz1.github.io`
- GitHub Pages via Actions
- custom domain/DNS/HTTPS working
- Intended noindex/nofollow/noarchive: live Social Media inspection on 2026-09-17 found `index,follow` retained. The preview preparation script only inserts robots metadata when absent; fix separately before treating this safeguard as verified.
- robots disallow-all
- production GTM stripped
- Ordinary FormSubmit submissions are intercepted by a JavaScript submit guard; the external form action remains. This is not a server-side block.
- theme-switch preview bug fixed in preview repo commit `1d0d972211ca0a1dc551adff22a1463d39ef9260`
- preview build uses Node 22 + `npm ci`

## Framework state
Decision D020 is implemented on `visual-refresh`:
- Astro upgraded from `^5.6.1` to exact `7.3.2`
- lockfile regenerated on Node 22
- source and preview build workflows use Node 22 + `npm ci`
- upgrade package commit: `7d5f709337204c960a4444e905bc9d59bec2f6f8`
- validated preview source: `ea8162f396f103cd7844f40b58ef1850ef07b884`
- preview run `34972381758`: build success, deploy success

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

## Typography — approved
Decision D021:
- **Barlow Condensed 800** is the display/headline face.
- **Inter** remains the body/interface face.
- Both use Astro's Fonts API/self-hosted build output rather than the former external Google Fonts stylesheet.
- Display typography stays focused on headings rather than long copy.
- Typography implementation source: `12ad2246ad73344bbf33674bf8eb2585e7d10b2e`.
- Preview run `34974525550`: build success, deploy success.

## Logo system — approved
Decision D024: **KEEP**.

Source of truth:
`docs/brand/LOGO-SYSTEM.md`

Approved system:
- concept-faithful lowercase `digitful.` wordmark
- coral terminal dot `#E95849`
- ink `#191A1B` on light surfaces
- cream `#F0E7D5` on dark surfaces
- monochrome variants
- standalone `d.` mark for favicons/app icons/small contexts
- shared `Logo.astro` now uses the approved SVG masters
- favicon + 180 / 192 / 512 px derivatives generated from the approved mark

Important:
- candidate 1 (Barlow-derived) remains rejected
- Barlow Condensed is the site heading face only, not the logo lettering
- do not redraw or substitute the approved mark with a font

Approved masters:
`public/assets/brand/digitful-wordmark-on-light.svg`
`public/assets/brand/digitful-wordmark-on-dark.svg`
`public/assets/brand/digitful-mark-on-light.svg`
`public/assets/brand/digitful-mark-on-dark.svg`

## Approved homepage copy and density
Decision D017, with later refinements through D033.

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
- Hero support: `What people see, where they find you, what they do next, and how you follow up.`
- `More traffic won’t fix a messy system.`
- `No clear next step`
- Work-area headline: `This is where we usually get involved.`
- `The business is moving. The system is lagging behind.`
- `See what your website is making harder than it should be.`
- `Bring the messy version.`

Header CTA: `Talk to Digitful`.
Hero primary CTA: `Tell us what’s stuck`.

Approved public growth-system model:
- `Say the right thing`
- `Reach the right people`
- `Make the next step clear`
- `Follow through`

Social Media, SEO, Paid Ads, and Process Automation are work areas/capabilities used to improve that system; they are not the system stages. Avoid `acquisition`, `conversion`, and `handoff` as the primary public taxonomy.

Approved compact interaction-wit pattern (D031; supersedes D030 presentation details):
- remove the standalone explanation paragraphs from the three `Where things usually go wrong` items
- `Unclear message` → `Exactly. Just like this one.`
- `No clear next step` → compact path stops short → `And… now what?`
- `Slow follow-up` → compact ~1.25 second timer → `That was only a second. Some leads wait days.`
- reveals stay visually subordinate to the headings; no second mini-section and no large diamond controls
- preserve semantic disclosure controls, keyboard access, screen-reader clarity and reduced-motion fallbacks
- keep the jokes bespoke; only shared accessibility/motion mechanics belong in the design system

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
The homepage direction is frozen across desktop, mobile, light and dark modes.

Implementation may tune exact colour values, spacing, line-height and responsive line breaks for accessibility and browser fit without reopening the design. Material visual changes require a new decision.

## Design system — approved
Decision D028: **APPROVED — KEEP**.

The shared foundation remains in `src/assets/_editorial-foundations.scss`; D028 did not rename or restructure it merely for architecture cleanliness.

D028 added `src/assets/_design-system.scss` for proven repeated mechanics and visual-parity adoption, including:
- typography roles and display/body ownership
- rule weights and editorial spacing
- focus treatment and reduced-motion timing
- technical grid and hard print-offset mechanics
- icon-disc geometry
- editorial rows and restrained technical annotations
- neutral primitives plus compatibility selectors for the validated homepage

Important ownership rules:
- do not turn homepage compositions into rigid site-wide components
- D028 originally kept `HomeIcon.astro` homepage-specific pending reuse; Social Media now imports it. Record that reuse without treating the binocular fix as permission for a component refactor.
- D031 jokes and expressive timing remain bespoke
- centralize a pattern only when another page will need it or centralization prevents inconsistent future changes

D028 implementation source: `d4850dc1b521350b0c8795270fd2fee6d3ccf5f6`.
Initial D028 preview run: `35009136933` — build success, deploy success.

Production `main` / `digitful.ca` remain untouched.

## OKF roadmap
Decision D022.

Use the canonical `GoogleCloudPlatform/open-knowledge-format` project, not the frozen `knowledge-catalog/okf` snapshot.

Do not implement OKF while page copy/URLs are moving. Add a small Digitful knowledge bundle after the homepage and primary service/page architecture is stable, then validate it before the final agent/SEO/QA pass. It complements rather than replaces semantic HTML, Schema.org, sitemap and normal SEO metadata.

## Current preview — responsive correction deployed 2026-09-17

- Exact rendered source: `cbbf870a17b055de6126e805f21fb83aab1f2ec1` on `visual-refresh`.
- Preview pin commit: `cb57a4b53c65064d74f97e6d46200dd71da3f8f4`.
- [Run 35226449410](https://github.com/tarekazz1/digitful-preview/actions/runs/35226449410): build and deploy success. Live desktop light and mobile dark rendering verified; four outcome markers, supplied PNG, outlined CTAs and no horizontal document overflow confirmed. Browser logs captured no warnings/errors.
- Owner KEEP / ADJUST / REJECT remains pending. Subsequent documentation-only commits do not change the preview pin.
- Separate existing issues: empty blog collection; preview robots metadata is not overridden when already present. No production publication occurred.

## Preview state before responsive correction — verified 2026-09-17

- Production `main`: `c8fac4f78295d2576af0e92b04329f4e938c7b6f`. Unchanged source does not establish current runtime health.
- Implementation branch tip before this documentation checkpoint: `fbe9528562af61fcf40ad5b1ae97c4fb701326ce` (`tmp`). Its sole addition is `public/assets/collage/social/social-binoculars.webp`, containing literal `placeholder` text, not image data.
- Preview source pin: `62c5f42ed473ceae11a2bf0660d9d2f826212f22`.
- Preview run: [35094784512](https://github.com/tarekazz1/digitful-preview/actions/runs/35094784512), completed successfully. This verifies workflow completion, not visual acceptance.
- The placeholder commit is not the preview pin and must not be deployed as-is.
- The preview workflow consumes `source-ref.txt` but does not itself enforce SHA syntax. Exact-SHA validation remains an operator obligation.
- Homepage + D028 remain APPROVED — KEEP at historical reviewed source `637d4cc84c1452ef1cdbfecda505e8f6bb9ae0ba`, run `35012284588`. That is not the current preview pin.

## Social Media status and next implementation task

Social Media is already the first service-page implementation. Do not restart page selection or redesign it from zero.

Approval provenance: the owner-supplied full handoff reports approval of the mobile design/composition and exact copy, excluding decorative handwritten side notes. The owner subsequently supplied `Social_megaphone.png`, `Social_binoculars.png`, and `Social_before_after.png`; use the right-hand After panel as the mobile reference. The supplied binocular cutout differs from the compact object in that mockup; the implementation uses the supplied PNG without claiming an exact photographic match. Final rendered implementation KEEP remains pending.

Preserve the approved section grammar: photographic megaphone hero; open staggered problems; continuous teal outcome path; numbered 01–04 process; sparse mustard CTA. Only the process uses numbered steps. Preserve current copy in `src/pages/social-media.astro` at `ac39a6de5ea9c5d79d81fd332055889b9424b07a`, which matches the supplied handoff. Do not restore the removed CTA sentence or the four handwritten graphic annotations.

Current correction candidate (D038):
- Removes hidden legacy object SVGs, decorative Unicode arrows, and the invalid `.webp` placeholder.
- Uses an exact copy of the supplied transparent `Social_binoculars.png` as `social-binoculars.png`; the earlier AVIF remains unused. This supersedes the earlier in-place AVIF plan and avoids altering the supplied artwork.
- Restores outlined CTAs and arrow alignment; uses a staggered desktop grid to prevent problem-block overlap; keeps outcome markers and their curve in one SVG; makes connector arrows visible in dark mode; restores mobile CTA text width and places its image below the copy.
- Retains existing stylesheet order, D028 tokens, page copy, homepage freeze, and section grammar. The mobile hero remains stacked; this correction is not a pixel-for-pixel reproduction of the mockup.
- Local build passes with Astro 7.3.2 and six font files. Browser review covered 320/390/768/1440 widths, light and dark themes, mobile navigation and theme switching. No browser warnings/errors were captured. Final exact-SHA preview deployment and owner KEEP are separate milestones; the preview repository's `source-ref.txt` is authoritative for the deployed pin.
- Pre-existing issue: builds produce 13 pages and warn that the blog collection is empty. The earlier successful preview run has the same warning; blog content configuration needs a separate scoped correction.

Task budget:
- N = 150, carried from the supplied handoff for the whole collage correction.
- Baseline: `75e130dd6060c8e305011fcd99cca7b672871837`.
- Previewed correction: 113 added / 0 removed implementation lines.
- Final responsive candidate: 166 added / 60 removed implementation lines, net +106; N=150 PASS. Removed lines are hidden decorative SVG markup and replaced positioning/marker markup, not public copy.
- Documentation and binary assets are excluded under `DELTA-LOC-INVARIANT.md`; do not reset the task baseline or budget per commit. Report additions, removals, net LOC and unusual churn.

## Unresolved evidence and future scope

- Owner review of the responsive candidate remains pending; supplied assets are now available.
- Current Worker origin configuration and live production health were not retested; D026 records the historical preview-origin fix.
- Photographic collage fidelity and annotation removal are Social Media refinements, not global bans on SVG diagrams or meaningful annotations.
- Later collage adoption on other service pages is a direction for subsequent scoped work. Homepage collage changes remain proposals requiring a specific decision under D019; the homepage freeze remains active.

## Later implementation sequence
1. finish Social Media and obtain final KEEP, then adapt the remaining service pages with distinct compositions
2. adapt contact and thank-you page types
3. adapt blog index/article while preserving editorial reading priority
4. once homepage + primary service/page architecture and canonical URLs are stable, add the Digitful OKF bundle
5. resolve deferred responsive/composition observations within page types
6. full desktop/mobile dark/light + agent/SEO QA
7. freeze visual baseline
8. performance work: SVG icon migration, JS scoping, CSS/Bootstrap dependency map, safe CSS reduction, re-measure, then remaining GTM/caching work as justified

## Functional behaviours that must not break
Mobile navbar, Services dropdown, theme toggle, navigation, blog filters, homepage diagnostic, diagnostic→Contact handoff, contact toggles/hidden fields, production FormSubmit/thank-you redirect, logos, responsive layouts, production GTM/GA, SEO output and CLS stability.
