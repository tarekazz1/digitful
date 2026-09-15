# Digitful Visual Refresh — Handoff

## Purpose
This file is the durable handoff for the Digitful visual-refresh / PageSpeed preparation project. It exists so the work can continue safely in a new ChatGPT chat at any time without relying on chat history.

**New-chat instruction:**
> Continue the Digitful visual-refresh project. Read `docs/visual-refresh/HANDOFF.md`, `docs/visual-refresh/DECISIONS.md`, and `docs/visual-refresh/CHANGELOG.md` on branch `visual-refresh` before doing anything. Do not modify production until the documented approval process says to do so.

## Owner / working style
The site owner is a marketer, not a developer. Explain actions in plain language, one step at a time. Do not assume Git/GitHub/DNS jargon is understood.

## Repositories
- Production/source repo: `tarekazz1/digitful`
- Preview deployment repo: `tarekazz1/digitful-preview`

## Branches and production safety
- Production branch: `main`
- Working branch: `visual-refresh`
- `digitful.ca` must continue deploying from production `main` only.
- All visual-refresh work stays off production until explicitly approved.
- Preview versions should be pinned to exact source commit SHAs so each reviewed version is reproducible.

## Baseline
Production baseline used for the audit and initial preview:
- Commit: `c8fac4f78295d2576af0e92b04329f4e938c7b6f`
- Commit title: `feat: expand live site diagnostic`
- Last known successful production Pages deployment: GitHub Actions run `33556467266`

PageSpeed baseline from the expanded mobile report:
- Performance: 69
- Accessibility: 91
- Best Practices: 100
- SEO: 100
- Agentic Browsing: 1/2
- FCP: 3.0 s
- LCP: 5.8 s
- TBT: 140 ms
- CLS: 0
- Speed Index: 4.9 s

Primary performance findings already mapped to code:
- Render-blocking first-party compiled CSS (~53.5 KiB) and Google Fonts CSS.
- Lighthouse estimated ~47.5 KiB unused CSS on the mobile homepage trace; this is NOT proof that 47.5 KiB can simply be deleted site-wide.
- Bootstrap Icons font is ~132 KiB and is the specific font-display warning in PSI.
- GTM/Google tag scripts dominate Lighthouse unused-JS and long-task findings; do not remove/delay tracking without auditing actual business/measurement needs.
- Homepage LCP is the hero H1 text, not an image.
- CLS is currently 0 and must be protected.

## Visual QA completed
A local deterministic visual QA was performed from the uploaded repo using local rendering at representative desktop/mobile widths, dark/light themes, and representative pages.

Important caveat:
- External Bootstrap Icons font was not loaded in the local QA environment.
- Therefore layout, spacing, surfaces, wrapping, grids, typography hierarchy, colours, and responsive findings are valid.
- Do NOT approve pixel-level icon weight/alignment decisions from those local screenshots alone. Icon changes must be checked on the real preview site.

Confirmed / actionable visual findings:
1. Contact page, light mode: email and phone links become nearly invisible because they use `link-light`. **Fixed, previewed, and approved KEEP.**
2. Logo accessible-name bug: visible light-mode logo is decorative/empty-alt while the meaningful dark logo is hidden. **Fixed, previewed, and approved KEEP.**
3. Footer copyright text has insufficient contrast.
4. Thank-you page: short content leaves footer floating above the viewport bottom; consider site-shell flex layout with main filling remaining height.
5. Blog article hero: back-link/category/meta grouping is cramped, especially mobile.
6. Internal mobile pages use looser section spacing than the homepage because homepage has special mobile `py-6` reduction.
7. Blog cards retain `min-height: 21rem` on mobile and feel unnecessarily tall.
8. Several three-item grids become an awkward `2 + 1` layout between ~768 and 992 px.
9. Service pages in light mode can read as a large hard-edged white slab; review service-shell border/radius treatment.
10. No major page-level horizontal overflow was found at representative mobile widths; forms, footer links, filters, and main responsive stacking were generally stable.

## Design-direction decision
The current site has drifted toward generic AI/SaaS styling: repeated rounded cards, glow blobs, icon boxes, multiple category accent colours, nested surfaces, and highly repeated layouts.

Working direction:
**Digitful should feel like a modern consulting / technical practice, not a generic SaaS or AI startup.**

This is a subtraction exercise, not a full redesign from scratch.

Candidate visual-system simplifications, to be tested one at a time:
- Reduce/remove most decorative glow blobs.
- Reduce cardification and nested surfaces.
- Reduce border radii.
- Replace boxed icon treatments with simpler line-icon treatment when Bootstrap Icons move to SVG.
- Simplify the service/category colour system.
- Use typography and spacing to carry more hierarchy.
- Introduce more deliberate/asymmetric page composition.
- Give service page types more distinct composition without creating four different websites.

Do NOT batch these subjective changes. Each must be independently previewed, reviewed, and accepted/rejected.

## Fix / design sequence
### Phase 1 — objective / low-risk fixes
1. Contact light-mode links. **APPROVED — KEEP**
2. Logo accessible name. **APPROVED — KEEP**
3. Footer contrast.
4. Thank-you short-page/footer layout.
5. Blog hero metadata spacing.
6. Mobile section-spacing consistency.
7. Mobile blog-card height.
8. Tablet `2 + 1` grid behaviour.

### Phase 2 — visual-system de-slop experiments
Run one experiment at a time:
1. Background/glows.
2. Card reduction.
3. Radius system.
4. Colour simplification.
5. Icon treatment.
6. Section composition.
7. Typography refinement.
8. Service-page differentiation.

### Phase 3 — freeze approved visual baseline
Re-render and check at minimum:
- 1440 desktop
- 1366 desktop
- 390 mobile
- 375 mobile
- tablet spot-check
- dark + light themes

### Phase 4 — performance work
Only after visual baseline approval:
1. Bootstrap Icons → SVG.
2. Scope local JS loads appropriately while preserving workflows.
3. Build site-wide Bootstrap/CSS dependency map.
4. Reduce Bootstrap/CSS safely.
5. Re-measure.
6. Fonts only if still justified.
7. GTM/GA only after measurement audit.
8. Caching separately.

Security-header hardening is explicitly out of scope for this performance/visual project.

## Preview environment
DNS provider: Namecheap.

A DNS record has been added:
- Type: CNAME
- Host: `preview`
- Value: `tarekazz1.github.io`
- Hostname: `preview.digitful.ca`

Preview repo: `tarekazz1/digitful-preview`

GitHub Pages source in preview repo is set to **GitHub Actions**.
Custom domain is set to `preview.digitful.ca`.
GitHub DNS check succeeded and HTTPS is enabled.
The preview site loads successfully at `https://preview.digitful.ca`.

The preview repo currently pins the source checkout to:
`b9f1d47898b0481bb1cadf346c46fd49dfba1033`

Preview safeguards implemented by the preview deployment:
- `noindex,nofollow,noarchive` meta directive added to built HTML.
- `robots.txt` disallows all crawling.
- Production GTM loader is stripped from the preview build so preview traffic does not pollute production analytics.
- FormSubmit submissions are blocked on preview.
- Preview build contains `CNAME` for `preview.digitful.ca`.

### Preview infrastructure issue already encountered
The first live preview loaded but the light/dark theme switch did not work.

Cause:
- The original preview-only GTM-removal regex was too broad and removed the inline theme-switch script together with the GTM script.

Fix:
- Preview repo commit `1d0d972211ca0a1dc551adff22a1463d39ef9260` changes post-processing so each script block is examined independently and only blocks containing `GTM-53THDCJH` are removed.
- GTM noscript is removed separately.
- The theme script is preserved.
- Production source was never affected by this preview-only defect.
- User re-tested the live preview after redeployment and confirmed the theme switch works.

## Review / approval process
For every material change:
1. Make one isolated change on the working branch.
2. Build/test it.
3. Pin the preview repo to that exact source commit SHA and deploy.
4. Review on desktop and mobile, dark and light where relevant.
5. Record the decision: KEEP / ADJUST / REJECT.
6. Only accepted changes remain in the approved working branch.
7. Nothing reaches `main` / `digitful.ca` without explicit final approval.

Performance improvement alone is never enough to accept a change. Existing navigation, diagnostic functionality, contact workflow, analytics/measurement, theme behaviour, responsiveness, SEO output, and CLS must remain intact.

## Functional behaviours that must not break
- Mobile navbar toggle.
- Services dropdown.
- Theme toggle.
- Main navigation.
- Blog filters.
- Homepage diagnostic UI and result/error states.
- Diagnostic → Contact query-parameter handoff.
- Contact service toggle buttons and hidden `services` value.
- Contact source/snapshot URL/strategy hidden values.
- Production FormSubmit flow and `/thank-you/` redirect.
- Header/footer logos.
- Responsive layouts.
- GTM/GA measurement on production.

## Known code constraints
- Header currently needs Bootstrap Collapse + Dropdown behaviour.
- `toggleButtons.js` is live contact workflow code; do not delete it.
- `snapshot.js` + `errorHandler.js` are live homepage diagnostic code; preserve them.
- `typewriter.js` appears unused, but confirm before deletion.
- Homepage/site use Bootstrap classes dynamically as well as statically; do not blindly enable current PurgeCSS.
- Stable public scripts/logos should not receive immutable caching unless fingerprinted/versioned.

## Approved source changes so far
### Fix 1 — Contact light-mode links
- Decision: **KEEP**.
- Source commit reviewed: `2ebd6614be8c7ea1c0f7d841fe8111ff3ec0cc92`.
- Change: Contact email/phone links now use a theme-aware contact link style instead of Bootstrap `link-light`.
- Preview deployment run: `34955869009` — successful.
- Production: untouched.

### Fix 2 — Logo accessible name
- Decision: **KEEP**.
- Source commit reviewed: `b9f1d47898b0481bb1cadf346c46fd49dfba1033`.
- Change: `src/components/Logo.astro` adds `aria-label="Digitful home"` to the reusable logo link; no intended visual change.
- Preview deployment run: `34956432099` — successful.
- Production: untouched.

## Current status
- Read-only technical/PageSpeed audit: complete.
- Local desktop/mobile visual QA: complete.
- Visual refresh plan: defined.
- Namecheap preview CNAME: added.
- Preview custom domain / DNS / HTTPS: complete.
- Preview site loads successfully.
- Preview theme-toggle infrastructure defect: fixed and user-verified.
- Preview environment: ready for controlled source changes.
- Full page-by-page baseline parity has not been manually rechecked; relevant pages will be verified during each isolated review.
- Approved fixes: 2 (Contact light-mode links; Logo accessible name).
- Production code changes: NONE.

## Immediate next step
Begin Fix 3 on `visual-refresh`: improve footer copyright contrast. Keep the change isolated, deploy only that exact commit to preview, verify the footer in dark/light mode and desktop/mobile, then decide KEEP / ADJUST / REJECT.
