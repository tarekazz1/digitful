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
- Source commit initially pinned for preview: `8f30106882e3e0b659865c1187f0aa5dc50ec96a`.
- Added `src/assets/_editorial-foundations.scss` and loaded it after the legacy overrides.
- Introduced the approved paper/ink/coral/teal/mustard token system for light and dark modes.
- Flattened the global background, removed page-glow markup, reduced radii, removed soft shadows/glass treatment, strengthened borders/rules, and restyled shared buttons, navigation, dropdowns, forms, footer, and generic legacy surfaces.
- Kept Inter for this foundation pass; exact display typeface remains a later browser-test decision.
- Header CTA changed from `Book A Strategy Call` to approved wording `Talk to Digitful`.
- Homepage section composition/copy has **not** been rebuilt yet; this is foundations only.
- Preview run `34969653064`: build **success**, deploy **success**.
- Production `main` / `digitful.ca` untouched.

### Framework upgrade — Astro 7.3.2
- User approved upgrading the framework before display-font selection after reviewing Astro 7.3 and earlier release improvements.
- Upgraded `astro` from `^5.6.1` to exact `7.3.2` and regenerated `package-lock.json`.
- Upgrade package commit: `7d5f709337204c960a4444e905bc9d59bec2f6f8`.
- Temporary lockfile-upgrade workflow verified `npm run build` successfully on Node 22, then was removed.
- Updated source GitHub Pages workflow on `visual-refresh` to Node 22 and `npm ci`.
- Updated preview workflow to Node 22 while retaining `npm ci`.
- Preview source pinned to `ea8162f396f103cd7844f40b58ef1850ef07b884`.
- Preview run `34972381758`: build **success**, deploy **success**.
- No homepage composition, logo, font or production-site changes were bundled into this upgrade.
- Decision: D020.

### Typography browser test — Astro Fonts API
- Compared the current Inter baseline with Barlow Condensed, IBM Plex Sans Condensed and Archivo Black using real approved homepage language on `/type-test/`.
- Body copy stayed in Inter for every specimen.
- Source used for the comparison: `3508f01f363d69f04d15136ce23ab35f7ddd4abe`.
- Preview run `34973409207`: build **success**, deploy **success**.
- User selected **Barlow Condensed**.

### Typography locked — Barlow Condensed
- **APPROVED**.
- Barlow Condensed 800 is now the display/headline face.
- Inter remains the body/interface face.
- Both are delivered through Astro's Fonts API; no external Google Fonts stylesheet is required for the selected system.
- Applied Barlow Condensed to primary display headings in the shared layout.
- Implementation source: `12ad2246ad73344bbf33674bf8eb2585e7d10b2e`.
- Preview run `34974525550`: build **success**, deploy **success**.
- Decision: D021.
- Production remains untouched.

### Future agent knowledge layer — OKF
- User asked whether Google's Open Knowledge Format should be incorporated during the redesign.
- The linked `knowledge-catalog/okf` copy is frozen; the canonical project is `GoogleCloudPlatform/open-knowledge-format`.
- Decision: add a small Digitful OKF bundle **after the homepage and primary service/page architecture is stable**, when canonical concepts and URLs are known.
- OKF will complement semantic HTML, Schema.org, sitemap and normal SEO metadata rather than replace them.
- This work belongs before the final site-wide agent/SEO/QA pass, not during the current visual/logo phase.
- Decision: D022.

### Logo production candidate 1 — Barlow-derived outlined SVG system
- **REJECTED**.
- The first candidate used SVG outlines derived directly from Barlow Condensed ExtraBold / 800.
- It included light/dark and monochrome wordmarks, standalone `d.` marks, favicon/app derivatives, a review page and a temporary logo-system document.
- Preview review showed that the result did **not** match the earlier approved concept closely enough: it was too condensed and typographic and lost the wider, rounder, softer, more custom personality of the reference.
- Correction locked: Barlow remains the site headline face only; it is not the required logo lettering.
- Next logo candidate must recreate the earlier approved concept itself as clean vector artwork, preserving its proportions, distinctive rounded letters, heavier `d.` mark and larger/integral coral dot.
- Decision: D023.
- Production remained untouched.

### Preview rollback after logo rejection
- Preview was pinned back to the last approved pre-logo source: `12ad2246ad73344bbf33674bf8eb2585e7d10b2e`.
- Preview run `34978624652`: build **success**, deploy **success**.
- Global `Logo.astro`, legacy logo assets, manifest and favicon path were restored on `visual-refresh` so the rejected candidate is no longer wired into the shared site shell.

### Logo production candidate 2 — approved and finalized
- **APPROVED — KEEP**.
- Candidate 2 was traced from the approved concept artwork rather than generated from Barlow Condensed.
- The approved geometry is now promoted to the primary SVG master paths under `public/assets/brand/`.
- Added monochrome variants using the same approved geometry.
- Shared `Logo.astro` now uses the approved wordmark for light/dark themes.
- Generated a new favicon plus 180, 192 and 512 px touch/app derivatives from the approved standalone `d.` mark.
- Updated `site.webmanifest` to the final ink/paper brand colours and approved app icons.
- Updated `docs/brand/LOGO-SYSTEM.md` with final usage, clear-space and working minimum-size rules.
- Removed the temporary `/logo-test/` review route after approval.
- Decision: D024.
- Production remains untouched.

### Current preview source
- Pending pin of the exact finalized-logo source SHA.

### Next action
- Deploy the finalized logo source to `preview.digitful.ca` and verify header/footer + favicon in real site context.
- Then rebuild the homepage structure and remove the old generic card-heavy layout.

### Homepage structural rebuild candidate
- Status: **PENDING USER REVIEW**.
- Reviewed source: `0c828a806093e7b287b4228170d60a6602cf14b7`.
- Preview run `34983063215`: build **success**, deploy **success**.
- Replaced the old homepage card-heavy composition with the approved editorial structure and locked copy.
- Added `src/assets/_homepage.scss`, scoped to `.home-page`, and loaded it after the shared editorial foundation layer.
- Hero is now asymmetric with a technical system-map graphic and approved CTA wording.
- What we fix uses a three-column ruled editorial list rather than cards.
- Core offers uses a two-by-two open ruled service grid rather than legacy service cards.
- Good fit uses a flat teal intro field plus a ruled list.
- Instant Snapshot is now a bordered technical instrument panel; existing form IDs, radio values, result container and `snapshot.js` integration are preserved.
- Final CTA is a flat mustard band using the approved `Bring the messy version.` copy.
- Added single-column mobile adaptations and preserved reduced-motion behaviour.
- Production remains untouched.

### Next action
- Review homepage on desktop/mobile and light/dark.
- Confirm Snapshot still runs and diagnostic-to-Contact handoff still works.
- Mark the homepage structural candidate KEEP / ADJUST / REJECT before adapting other page types.

### Homepage structural rebuild approved
- **APPROVED — KEEP** after desktop/mobile and light/dark review.
- Reviewed source remains `0c828a806093e7b287b4228170d60a6602cf14b7`.
- Decision D025 is now approved.
- Production remains untouched.

### Quick Site Check diagnostic
- User tested `https://digitful.ca` with both mobile and desktop and the preview returned a generic analysis failure.
- Added temporary preview diagnostics in source `73cf73e4d9a2b0a9e937158614891192c48f2148`; preview run `34984708246` built and deployed successfully.
- Browser diagnostic: `Could not reach the audit service: Failed to fetch`.
- Opening the Worker endpoint directly returns a valid full PageSpeed response with `lighthouseResult`, so Worker → Google PageSpeed is functioning.
- Google API key is limited to PageSpeed Insights API but has no application restriction.
- Current leading diagnosis: CORS/origin policy on the Cloudflare Worker does not allow `https://preview.digitful.ca`.
- Resolve this functional issue before moving to the next page type.

### Quick Site Check CORS resolved
- Root cause confirmed: the Cloudflare Worker `allowedOrigins` did not include `https://preview.digitful.ca`.
- User added the preview origin to the Worker allowlist and confirmed the audit now returns results.
- Google PageSpeed API key configuration did not need changing.

### Instant Snapshot result-state visual candidate
- Status: **PENDING USER REVIEW**.
- Candidate source: `a0d4f2cd123077f9bfa87aa71dc9c46a16382eb4`.
- Preview run `34987792106`: build **success**, deploy **success**.
- Replaced the dynamically injected legacy Bootstrap result card, coloured badges and blue progress bars with an open technical-editorial report state.
- Added square mode/grade markers, numeric `/100` scores, flat coral/teal/mustard score tracks, ruled Quick Wins and a consistent primary CTA.
- Restyled loading/error states and removed the temporary preview diagnostic disclosure.
- Existing Worker URL, PageSpeed categories, form IDs, strategy values and diagnostic-to-Contact handoff remain unchanged.
- Production remains untouched.

### Homepage whole-page composition refinement candidate
- Status: **PENDING USER REVIEW**.
- Candidate source: `4f7651731bad87fc9ca3b97aa0a24c2905c78517`.
- Preview run `34989464135`: build **success**, deploy **success**.
- Trigger: zoomed-out desktop review showed too much dead vertical space, overly mechanical repeated ruled boxes, a hero visual that was too small/UI-like, and insufficient icon/annotation/colour rhythm compared with the approved references.
- Added `src/components/HomeIcon.astro` with lightweight inline SVG icons for homepage editorial markers.
- Kept the current graph-paper system-map and Snapshot grid language, but strengthened the hero with accent geometry, annotations and a hard printed offset.
- Reworked What we fix and Services into tighter open editorial rows with circular coral/mustard/teal icons and rules rather than enclosing every item.
- Tightened Good fit and converted its supporting items to icon-led columns while retaining the teal split identity.
- Added restrained mechanical hover movement and preserved reduced-motion behaviour.
- Mobile now uses icon-led editorial rows rather than miniature desktop grids.
- Locked reduced homepage copy remains unchanged; removed summary paragraphs and the decorative benefit strip were not reintroduced.
- Snapshot Worker/API behaviour and the D026 result-state treatment remain unchanged.
- Production remains untouched.

### Homepage final KEEP + design-system roadmap
- **APPROVED — KEEP** for the whole-page composition refinement (D027).
- **APPROVED — KEEP** for the Instant Snapshot dynamic result-state treatment (D026).
- Shortened the hero support line to `Strategy, acquisition, and automation built to work together.` to avoid repeating the immediately adjacent Strategy / Acquisition / Handoff / Automation system map.
- Final approved rendered source: `c914f6252ec30d99a4adf3979cd5593b5f6ca68d`.
- Preview run `34992817965`: build **success**, deploy **success**.
- Updated `docs/brand/HOMEPAGE-COPY.md` so the shorter hero line is now the copy source of truth.
- Added D028: before adapting service/contact/blog page types, extract the validated homepage visual language into reusable design-system primitives.
- The design system should centralize identity-level tokens/patterns while keeping page composition flexible; avoid turning every homepage section into a rigid reusable component.
- Production remains untouched.

### Homepage messaging model clarified
- **APPROVED** plain-language system model: `Say the right thing → Reach the right people → Make action easy → Follow through`.
- Removed the conflicting public taxonomy `Strategy / Acquisition / Handoff / Automation` from the hero map.
- Clarified that Social Media, SEO, Paid Ads and Process Automation are work areas/capabilities, not the four stages of the system.
- Replaced `Four parts. One growth system.` with `This is where we usually get involved.` under `What we actually do`.
- Hero support is now `Marketing works better when the whole journey works together.`
- Updated the homepage meta description to use the same plain-language framing.
- Updated `docs/brand/HOMEPAGE-COPY.md` as the source of truth.
- Source: `18eca69a226fa4dc82aa08f581cbd1b5b008e4e0`. Preview run `34998050345`.
- Production remains untouched.

### Homepage situational interaction wit
- **APPROVED — KEEP**.
- Principle: clarity stays in the main copy; wit can live in the interaction when the interface itself demonstrates the problem.
- `Unclear message` now expands to `Exactly. Just like this one.`
- `Leaky conversion path` demonstrates a path that stops short and reveals `It was almost there.`
- `Slow follow-up` runs a short millisecond timer (~1.25 seconds), then reveals `That was only a second.` / `Some leads wait days.`
- Added `public/scripts/home-issue-interactions.js` and `src/assets/_homepage-interactions.scss`; kept this behaviour homepage-scoped.
- Preserved visible explanatory copy, semantic buttons, `aria-expanded` / `aria-controls`, keyboard focus, screen-reader final-state announcement and reduced-motion fallback.
- These jokes remain bespoke; reusable disclosure/motion mechanics may be extracted during the D028 design-system pass.
- Source: `6f4d8bba8b1d76b63c2d9938cecff399553b3700`. Preview run `35000985503`: build **success**, deploy **success**.
- Production remains untouched.
