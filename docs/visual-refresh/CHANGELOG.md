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

### Production impact
- No production code changes.
- No merge to `main`.
- No production deployment triggered by this project.

### Current source used by preview
- Exact pinned source SHA: `c8fac4f78295d2576af0e92b04329f4e938c7b6f`

### Next action
- Re-check `preview.digitful.ca` after the preview-infrastructure fix and confirm the light/dark switch now works.
- If baseline parity is confirmed, begin the first isolated source fix: Contact light-mode links.
