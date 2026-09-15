# Digitful Visual Refresh — Change Log

Chronological record of setup and implementation changes for the visual-refresh project.

## 2026-09-15

### Project control / preview setup
- Confirmed Namecheap is the DNS provider for `digitful.ca`.
- Added DNS record:
  - CNAME `preview` → `tarekazz1.github.io`
- Created public GitHub repository: `tarekazz1/digitful-preview`.
- Set preview repo GitHub Pages source to **GitHub Actions**.
- Created `visual-refresh` branch in `tarekazz1/digitful` from production baseline commit `c8fac4f78295d2576af0e92b04329f4e938c7b6f`.
- Added preview deployment workflow in `digitful-preview`.
- Added preview post-processing safeguards:
  - noindex/nofollow/noarchive
  - robots.txt disallow-all
  - strip production GTM loader
  - block FormSubmit submission on preview
  - write CNAME for `preview.digitful.ca`
- Preview workflow completed successfully (green check).
- Connected GitHub Pages custom domain `preview.digitful.ca`.
- GitHub DNS check succeeded and HTTPS was enabled.
- Confirmed `https://preview.digitful.ca` loads the baseline site.
- Added durable project documentation to `visual-refresh`:
  - `docs/visual-refresh/HANDOFF.md`
  - `docs/visual-refresh/DECISIONS.md`
  - `docs/visual-refresh/CHANGELOG.md`

### Preview-only defect discovered and fixed
- Baseline preview initially loaded, but the light/dark theme switch did not work.
- Root cause: the preview post-processing regex intended to remove the GTM script matched from the earlier inline theme script through the later GTM script, deleting both from the built preview HTML.
- Fix applied in `tarekazz1/digitful-preview`:
  - GTM removal now evaluates one `<script>...</script>` block at a time.
  - Only script blocks containing `GTM-53THDCJH` are removed.
  - GTM `<noscript>` block is also removed independently.
  - Unrelated inline scripts, including the theme switcher, are preserved.
- Preview repo fix commit: `1d0d972211ca0a1dc551adff22a1463d39ef9260`.
- This was a preview-infrastructure fix only; production source was not changed.
- User re-tested `preview.digitful.ca` after redeployment and confirmed the light/dark switch works.

### Baseline preview validation
- Preview domain loads normally over HTTPS.
- Light/dark switching now works on the live preview.
- The preview environment is considered ready for controlled visual-refresh work.
- Full page-by-page parity has not yet been manually rechecked; relevant pages will be verified as each isolated fix is reviewed.

### Fix 1 — Contact light-mode links
- Status: **APPROVED — KEEP**.
- Working-branch source commit: `2ebd6614be8c7ea1c0f7d841fe8111ff3ec0cc92`.
- Changed only `src/pages/contact.astro`.
- Replaced the forced Bootstrap `link-light` treatment on the email and phone links with a contact-specific theme-aware link class.
- New contact-link colour uses `var(--site-text)` so it stays readable in both dark and light themes; hover/focus uses `var(--site-accent-soft)`.
- No form fields, form action, contact workflow JavaScript, navigation, or other pages were changed.
- Preview repo was pinned to the exact source commit above.
- Preview deployment run `34955869009` completed successfully.
- User reviewed the live preview and chose **KEEP**.
- Production `main` and `digitful.ca` remain unchanged.

### Fix 2 — Logo accessible name
- Status: **APPROVED — KEEP**.
- Working-branch source commit: `b9f1d47898b0481bb1cadf346c46fd49dfba1033`.
- Changed only `src/components/Logo.astro`.
- Added `aria-label="Digitful home"` to the reusable logo link so it has a stable accessible name in both dark and light themes.
- No image files, dimensions, CSS classes, layout, navigation destination, or visible styling were changed.
- Because the same Logo component is used in the header and footer, both logo links gain the stable accessible name.
- Preview repo was pinned to the exact source commit above.
- Preview deployment run `34956432099` completed successfully.
- User reviewed the live preview and chose **KEEP**.
- Production `main` and `digitful.ca` remain unchanged.

### Fix 3 — Footer copyright contrast
- Status: **PENDING USER REVIEW**.
- Working-branch source commit: `51c3f18531cd49b26df6d65b18807d9bc5867baf`.
- Changed only `src/components/Footer.astro`.
- Added a `footer-copyright` class to the copyright span and changed only its text colour to `var(--site-text-muted)`.
- No footer layout, spacing, links, logo, background, radius, or other design treatment was changed.
- Purpose: raise the copyright text contrast while leaving the footer design itself for the later design-shift phase.
- Preview repo is pinned to the exact source commit above.
- Preview deployment run: `34957277115`.
- Production `main` and `digitful.ca` remain unchanged.

### Production impact
- No production code changes.
- No merge to `main`.
- No production deployment triggered by this project.

### Current source used by preview
- Exact pinned source SHA: `51c3f18531cd49b26df6d65b18807d9bc5867baf`

### Next action
- Review the footer copyright on `preview.digitful.ca` in dark and light mode, ideally desktop and mobile.
- Record the decision as KEEP / ADJUST / REJECT before starting Fix 4.
