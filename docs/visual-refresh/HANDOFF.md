# Digitful Visual Refresh — Handoff

## New-chat instruction
> Continue the Digitful visual-refresh project. Read `docs/visual-refresh/HANDOFF.md`, `docs/visual-refresh/DECISIONS.md`, and `docs/visual-refresh/CHANGELOG.md` on branch `visual-refresh` before doing anything. Do not modify production until the documented approval process says to do so.

## Working rules
- Production/source repo: `tarekazz1/digitful`
- Production branch: `main`
- Working branch: `visual-refresh`
- Preview repo: `tarekazz1/digitful-preview`
- Preview URL: `https://preview.digitful.ca`
- Production must remain untouched until explicit final approval.
- Preview must pin an exact source SHA.
- Make one material change at a time, preview it, then record KEEP / ADJUST / REJECT.
- Explain technical actions in plain language.

## Baseline
Production baseline used for audit/initial preview:
- SHA: `c8fac4f78295d2576af0e92b04329f4e938c7b6f`
- Mobile PSI: Performance 69, Accessibility 91, Best Practices 100, SEO 100, Agentic Browsing 1/2
- FCP 3.0s, LCP 5.8s, TBT 140ms, CLS 0, Speed Index 4.9s
- Main performance findings: render-blocking CSS/Google Fonts, Bootstrap Icons font (~132 KiB), large unused Google tag JS in Lighthouse, text LCP, preserve CLS 0.

## Preview environment
- Namecheap CNAME: `preview` → `tarekazz1.github.io`
- GitHub Pages source: GitHub Actions
- Custom domain/DNS/HTTPS: working
- Preview safeguards: noindex/nofollow/noarchive, robots disallow-all, production GTM stripped, FormSubmit blocked, preview CNAME written.
- Preview-only GTM-strip bug previously removed the theme script; fixed in preview repo commit `1d0d972211ca0a1dc551adff22a1463d39ef9260`. Theme switch was user-verified afterward.

## Approved fixes
1. **Contact light-mode links — KEEP**
   - Source commit reviewed: `2ebd6614be8c7ea1c0f7d841fe8111ff3ec0cc92`
   - Contact email/phone links use theme-aware colour instead of forced `link-light`.
   - Preview run `34955869009` succeeded.

2. **Logo accessible name — KEEP**
   - Source commit reviewed: `b9f1d47898b0481bb1cadf346c46fd49dfba1033`
   - Reusable logo link has `aria-label="Digitful home"`.
   - Preview run `34956432099` succeeded.

3. **Footer copyright contrast — KEEP**
   - Source commit reviewed: `51c3f18531cd49b26df6d65b18807d9bc5867baf`
   - Only copyright text colour changed to `var(--site-text-muted)`.
   - Preview run `34957277115` succeeded.

4. **Thank-you / short-page footer position — KEEP**
   - Source commit reviewed: `939a771c5ed93cf6ca80a1de1046ddcaed247f44`
   - Shared `.site-shell` uses `d-flex flex-column`; `#main-content` uses `flex-grow-1`.
   - Short pages keep the footer at the bottom of the viewport; long-page flow remains normal.
   - Preview run `34957902972` succeeded.

## Current preview source
`939a771c5ed93cf6ca80a1de1046ddcaed247f44`

## Remaining Phase 1 items
5. Blog article hero metadata spacing.
6. Mobile section-spacing consistency.
7. Mobile blog-card height.
8. Tablet `2 + 1` grid behaviour.

## Immediate next step
Begin Fix 5 on `visual-refresh`: improve Blog article hero metadata spacing, especially on mobile. Keep it isolated, deploy the exact source commit to preview, and review it before deciding KEEP / ADJUST / REJECT.

## Later design direction
Working direction: Digitful should feel like a modern consulting / technical practice rather than a generic AI/SaaS startup. Treat the redesign as subtraction: fewer glows, fewer boxed cards/icons, more restrained radius/colour, stronger typography/spacing/composition. Test each subjective change separately.

## Later performance sequence
After the visual baseline is approved: Bootstrap Icons → SVG; scope local JS; build a site-wide CSS/Bootstrap dependency map; reduce CSS safely; re-measure; then review fonts, GTM/GA, and caching. Security-header hardening is separate.

## Functional behaviours that must not break
Mobile navbar, Services dropdown, theme toggle, navigation, blog filters, homepage diagnostic, diagnostic→Contact handoff, contact toggles/hidden fields, production FormSubmit/thank-you redirect, logos, responsive layouts, production GTM/GA, SEO output, and CLS stability.
