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

## D022 — Open Knowledge Format belongs after page architecture stabilizes
**Status:** Approved roadmap decision

Add a small Digitful Open Knowledge Format (OKF) knowledge layer later in the redesign, using the canonical `GoogleCloudPlatform/open-knowledge-format` specification rather than the frozen copy under `knowledge-catalog/okf`.

Role:
- machine- and human-readable knowledge about Digitful, its services, tools and related concepts
- versioned Markdown + YAML frontmatter that can carry provenance, trust and freshness metadata
- complementary to the public site, not a replacement for semantic HTML, Schema.org, sitemap, SEO metadata or accessibility

Timing:
- do **not** build the OKF bundle while page copy/URLs are still moving
- first stabilize the homepage and primary service/page architecture
- then create the OKF bundle from those canonical concepts and URLs
- validate discovery/agent use before the final site-wide agent/SEO/QA pass

---

## D023 — First production-vector logo candidate
**Status:** REJECTED

The first SVG production candidate derived the `digitful.` lettering directly from **Barlow Condensed ExtraBold / 800**.

The user rejected it after preview review because it did not match the earlier approved concept closely enough. It became too condensed and typographic and lost the wider, rounder, softer, more custom character of the concept.

Correction:
- Barlow Condensed remains approved for site headings only.
- The logo lettering is a separate brand decision and does **not** need to use Barlow.
- The next candidate must faithfully recreate the earlier approved concept shapes as clean vectors rather than substitute a font-derived approximation.
- Preserve the concept's wider/rounder proportions, distinctive `d` / `g` / `u` character, heavier standalone `d.` mark, and more integral/larger coral terminal dot.

Rejected implementation assets may remain temporarily on `visual-refresh` as history, but they are not approved for production and must not be treated as the logo source of truth.

---

## D024 — Concept-faithful vector logo system
**Status:** Approved — KEEP

Candidate 2 is the approved Digitful logo system. It is traced from the approved concept artwork itself rather than regenerated from Barlow Condensed or another substitute typeface.

Approved system:
- lowercase `digitful.` wordmark with coral terminal dot
- wider, rounder, softer custom proportions from the approved concept
- ink-on-light and cream-on-dark primary wordmarks
- monochrome variants using the same geometry
- standalone `d.` mark for small contexts
- favicon and touch/app derivatives generated from the approved standalone mark
- shared `Logo.astro` uses the approved wordmark

Barlow Condensed remains the site display/headline face only; it is not the logo lettering.

Production masters and usage rules are documented in `docs/brand/LOGO-SYSTEM.md`.

The temporary `/logo-test/` review route was removed after approval.

---

## D025 — Homepage structural rebuild
**Status:** Approved — KEEP

Rebuild the homepage composition against the approved desktop/mobile/dark-mode direction and locked homepage copy.

Candidate rules:
- remove the old generic card-heavy homepage structure
- preserve the approved copy and one-headline/one-support-layer density rule
- use open editorial grids/rules for What we fix and Core offers
- use a flat teal split composition for Good fit
- treat Instant Snapshot as a bounded technical instrument rather than a generic SaaS card
- use the approved concept-faithful logo, Barlow Condensed headings, Inter body copy and paper/ink/coral/teal/mustard system
- preserve Snapshot form IDs, strategy radio values and diagnostic-to-Contact handoff behaviour
- production remains untouched

Reviewed source: `0c828a806093e7b287b4228170d60a6602cf14b7`.
Preview run: `34983063215` — build and deploy successful.

---

## D026 — Instant Snapshot result-state visual alignment
**Status:** Candidate — pending preview KEEP / ADJUST / REJECT

After the homepage structure was approved, the live Snapshot result revealed that its dynamically injected Bootstrap card/badges/progress bars still looked like the legacy site. Replace only the dynamic result/loading/error states with the approved technical-editorial instrument language.

Rules:
- no nested SaaS card inside the Snapshot instrument
- use open rules, square status markers and flat coral/teal/mustard score bands
- keep numeric scores and letter grades so colour is not the sole state indicator
- preserve the existing Worker, PageSpeed categories, form IDs, radio values and Contact handoff
- remove the temporary preview-only diagnostic disclosure now that CORS is resolved
- production remains untouched

The Cloudflare Worker itself was not changed in this repository. The user added `https://preview.digitful.ca` to its explicit `allowedOrigins`, after which the preview audit worked.

Candidate source: `a0d4f2cd123077f9bfa87aa71dc9c46a16382eb4`.
Preview run: `34987792106` — build and deploy successful.

---

## D027 — Homepage whole-page composition refinement
**Status:** Candidate — pending preview KEEP / ADJUST / REJECT

After zoomed-out desktop review, keep the approved homepage structure and reduced copy but move the implementation closer to the approved visual references. The first structural build was too static, too vertically stretched, and repeated square ruled layouts too mechanically.

Candidate direction:
- keep the technical graph-paper grid language in the hero system map and Instant Snapshot
- tighten section height and vertical rhythm
- restore flat coral / mustard / teal circular icon markers
- use open columns and rules instead of enclosing every item
- strengthen the hero visual with accent geometry, handwritten-style annotations and a printed-mechanical offset treatment
- introduce restrained mechanical hover movement while preserving `prefers-reduced-motion`
- preserve the locked reduced-copy hierarchy; do not reintroduce the removed summary paragraphs or decorative benefit strip
- preserve all Snapshot functionality and the D026 result-state treatment
- production remains untouched

Implementation includes a small reusable inline-SVG homepage icon component rather than adding new icon-font dependencies.

Candidate source: `4f7651731bad87fc9ca3b97aa0a24c2905c78517`.
Preview run: `34989464135` — build and deploy successful.

---

## Current pending decisions
- Homepage whole-page composition refinement: preview KEEP / ADJUST / REJECT.
- Instant Snapshot result-state visual alignment: preview KEEP / ADJUST / REJECT.
- Exact production token values after browser/accessibility testing.
- Exact section compositions for non-home page types.
- Final implementation choices for deferred blog/mobile/tablet layout observations.
