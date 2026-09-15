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
- Added durable project documentation to `visual-refresh`:
  - `docs/visual-refresh/HANDOFF.md`
  - `docs/visual-refresh/DECISIONS.md`
  - `docs/visual-refresh/CHANGELOG.md`

### Production impact
- No production code changes.
- No merge to `main`.
- No production deployment triggered by this project.

### Current source used by preview
- Exact pinned source SHA: `c8fac4f78295d2576af0e92b04329f4e938c7b6f`

### Next action
- Verify `preview.digitful.ca` serves the baseline site correctly and matches production before beginning any visual fix.
