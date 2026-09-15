# Digitful Visual Refresh — Change Log

Chronological record of setup and implementation changes for the visual-refresh project.

## 2026-09-15

### Project control / preview setup
- Namecheap DNS: CNAME `preview` → `tarekazz1.github.io`.
- Created public preview repo `tarekazz1/digitful-preview`; GitHub Pages deploys through Actions.
- Created `visual-refresh` from production baseline `c8fac4f78295d2576af0e92b04329f4e938c7b6f`.
- Preview domain `preview.digitful.ca`: DNS and HTTPS working.
- Preview safeguards: noindex/nofollow/noarchive, robots disallow-all, production GTM stripped, FormSubmit blocked, preview CNAME written.
- Preview GTM-strip regex initially removed the theme script; fixed in preview repo commit `1d0d972211ca0a1dc551adff22a1463d39ef9260`. User verified theme switching afterward.
- Added durable docs: `HANDOFF.md`, `DECISIONS.md`, `CHANGELOG.md`.

### Fix 1 — Contact light-mode links
- **APPROVED — KEEP**.
- Source: `2ebd6614be8c7ea1c0f7d841fe8111ff3ec0cc92`.
- Changed only `src/pages/contact.astro`.
- Preview run `34955869009` succeeded.
- Production untouched.

### Fix 2 — Logo accessible name
- **APPROVED — KEEP**.
- Source: `b9f1d47898b0481bb1cadf346c46fd49dfba1033`.
- Added `aria-label="Digitful home"` to reusable logo link.
- Preview run `34956432099` succeeded.
- Production untouched.

### Fix 3 — Footer copyright contrast
- **APPROVED — KEEP**.
- Source: `51c3f18531cd49b26df6d65b18807d9bc5867baf`.
- Copyright now uses `var(--site-text-muted)`; no footer redesign.
- Preview run `34957277115` succeeded.
- Production untouched.

### Fix 4 — Thank-you / short-page footer position
- **APPROVED — KEEP**.
- Source: `939a771c5ed93cf6ca80a1de1046ddcaed247f44`.
- Shared page shell now uses flex-column layout and growing main content.
- Preview run `34957902972` succeeded.
- Production untouched.

### Phase transition — objective fixes complete
- Blog hero spacing, mobile section spacing, mobile blog-card height and tablet `2 + 1` grids were moved into the redesign phase unless they reveal functional breakage.
- Decision: D013.

### Design-process correction — vision before facelifts
- User rejected starting with isolated cleanup such as glow removal.
- Rule: settle the complete visual direction before subjective implementation.
- Decision: D014.

### Brand direction established
- User supplied retro/editorial visual references and approved the generated homepage mockup as the main style reference.
- Clarification: the mockup is a **design-direction north star, not the final homepage structure**.
- Target: preserve its visual identity while reducing clutter and density.
- Working design language: **graphic technical editorial + analog-print edge**.
- Decision: D015.

### Logo direction
- Generated/refined a working `digitful.` wordmark family with coral terminal dot.
- Six concept PNGs were added by the user under `docs/brand/logo-concepts/2026-09-retro-direction/`.
- These are brand-development references, not final production masters.
- Decision: D016.

### Visual constitution
- Added `docs/brand/VISUAL-CONSTITUTION.md`.
- The constitution defines brand impression, references/anti-references, colour, light/dark behaviour, typography character, logo direction, borders/radii/shadows, texture, illustration/icon language, layout/composition, density, cards/surfaces, buttons/forms, diagnostic UI, motion, page-type composition and accessibility guardrails.
- Core rule: **same identity, less clutter**.
- `DESIGN.md` now points to the constitution and no longer carries the superseded dark-SaaS design system.
- No production-facing visual code changed as part of this work.

### Homepage copy locked
- Added `docs/brand/HOMEPAGE-COPY.md` as the source of truth for the approved non-blog homepage copy.
- Tone: plainspoken, useful, concise, lightly witty, not salesy.
- Approved lines include `Marketing works better when the parts talk to each other.`, `More traffic won’t fix a messy system.`, `Four parts. One growth system.`, `The business is moving. The system is lagging behind.`, and `Bring the messy version.`
- Slow follow-up wording approved as: `If the next step relies on memory, it probably needs a system.`
- Homepage density rule locked: one headline + one layer of support, not two.
- Removed separate summary paragraphs beneath `What we fix`, `Core offers`, and `Good fit` from the intended homepage layout, and removed the decorative `Clearer / More efficient / Built for real business` strip.
- Decision: D017.
- No rendered-site code changed.

### Mobile homepage specimen
- Created a mobile-first homepage design specimen using the approved visual constitution and real homepage content.
- User approved the specimen.
- Mobile direction keeps the same identity as desktop while simplifying hierarchy, reducing competing elements, and preserving touch-friendly controls and the Instant Snapshot.
- Decision: D018.
- No rendered-site code changed.

### Dark-mode homepage specimen
- Created a dark-mode desktop + mobile specimen using the same approved visual language.
- User approved the specimen.
- Dark mode is now validated as the same editorial/print identity at night: charcoal/ink base, warm cream type, flat coral/teal/mustard accents, strong rules, restrained texture, and no glow/glass/cyber treatment.
- Homepage design direction is now frozen across desktop/mobile and light/dark.

### Candidate implementation 1 — editorial foundations
- Status: **PENDING USER REVIEW**.
- Source commit pinned for preview: `8f30106882e3e0b659865c1187f0aa5dc50ec96a`.
- Added `src/assets/_editorial-foundations.scss` and loaded it after the legacy overrides.
- Introduced the approved paper/ink/coral/teal/mustard token system for light and dark modes.
- Flattened the global background, removed page-glow markup, reduced radii, removed soft shadows/glass treatment, strengthened borders/rules, and restyled shared buttons, navigation, dropdowns, forms, footer, and generic legacy surfaces.
- Kept Inter for this foundation pass; exact display typeface remains a later browser-test decision.
- Header CTA changed from `Book A Strategy Call` to approved wording `Talk to Digitful`.
- Homepage section composition/copy has **not** been rebuilt yet; this is foundations only.
- Preview run `34969653064`: build **success**, deploy **success**.
- Production `main` / `digitful.ca` untouched.

### Current preview source
- `8f30106882e3e0b659865c1187f0aa5dc50ec96a`

### Next action
- User reviews the editorial foundation layer on `preview.digitful.ca` in light/dark and desktop/mobile.
- Check shared shell/header/footer, theme switching, navigation/dropdown, buttons/forms and general readability; the homepage is intentionally still using its old section structure.
- Mark the foundation pass KEEP / ADJUST / REJECT before rebuilding the homepage against the approved specimen.
