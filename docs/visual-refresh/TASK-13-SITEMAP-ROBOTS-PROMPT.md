# Task 13 — XML sitemap and production robots.txt

Recommended model: **Sol, medium effort**. Start with inspection and a short proposal; implementation is not yet approved.

## Prompt to send to a fresh task

Work in `C:/Users/tarek.azzi/OneDrive - Université Saint-Esprit de Kaslik/Documents/GitHub/digitful`, on `visual-refresh`. Read `docs/visual-refresh/HANDOFF.md`, `TASK-QUEUE.md` and `DELTA-LOC-INVARIANT.md`. Task 12 is accepted and published separately; preserve its bundle and all pre-existing work. The local checkout deliberately lags the remote branch: inspect both and establish the real task baseline before proposing changes; do not reset, clean or publish the whole tree.

Task 13 adds only the missing XML sitemap and production `robots.txt`. Inspect the current Astro build, canonical URLs, blog route generation and the separate `tarekazz1/digitful-preview` safeguard script first.

Propose the smallest maintainable approach that generates the sitemap from current public routes, including published articles. Use `https://digitful.ca` canonicals; exclude 404, thank-you, specimen routes, draft articles, raw knowledge Markdown, assets, query strings and fragments. Avoid a manually maintained URL inventory and invented last-modified dates. Production `robots.txt` should allow public crawling and reference the canonical sitemap.

Preview must retain disallow-all `robots.txt`, noindex, GTM removal and the submission guard. Do not alter page copy, design, forms, diagnostics, dependencies or production deployment. No special AI crawler rules are requested.

Return a short proposal naming the exact files, generation approach, exclusions and verification. **Suggested ceilings are N120/M180, not yet approved**; count all retained code/configuration/tooling and any later preview pin across repositories. Explain any different budget or dependency needed. Stop for approval before implementation edits; only the proposal document may be written at this stage.

After approval, checks should be limited to one fresh build, parsed XML/URL completeness and exclusions, robots content, and preview safeguards using the existing preparation script. No screenshot matrix, site redesign or unrelated audit. Stop Ready for managing-agent review; no self-awarded KEEP/signoff, commit, push or deployment.
