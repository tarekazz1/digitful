# Task 12 — Small Digitful OKF bundle

## Task 12 — closed: owner KEEP, committed and deployed to preview — 2026-10-26

Owner explicitly authorized commit, push and preview deployment. Accepted stable bundle and scoped records are committed on visual-refresh at `7ce91634096bede957c3b3c00420e2b632e44e83`; preview pin commit `5389d2455ea09febe44f21ecafbfa08e07ac00ba` deploys that exact source. [Workflow 40270282129](https://github.com/tarekazz1/digitful-preview/actions/runs/40270282129) completed successfully. Technical signoff and owner APPROVED / KEEP are complete; earlier draft/publication-pending notes are historical and superseded.

Focused live HTTP GET review passes: homepage discovery hint leads to the index and all seven concepts; all eight raw Markdown files are HTTP 200 text/markdown, strict UTF-8 and byte-identical to the accepted source. Homepage-only hint was sampled on homepage/SEO/Contact. Existing noindex,nofollow,noarchive, GTM removal, submission guard and disallow-all robots remain effective. CI copied six fonts; all six deployed WOFF2 resources return 200 with valid signatures, resolving the local font-download verification limitation. No visual matrix, forms or diagnostics were repeated. TLS certificate validation was bypassed for the environment chain, so TLS authenticity was not verified. Existing Sass/Actions deprecation warnings remain.

Final original-baseline totals including the actual preview pin: **+133/-1/net132/changed134; N180/M220/scope PASS**. GitHub comparison confirms only the Task 12 allowlist, three layout additions and one pin replacement. Pre-existing work and lagging local checkout were preserved. Production main remains `c8fac4f78295d2576af0e92b04329f4e938c7b6f`; no production release. Evidence: C:/Users/tarek.azzi/.codex/visualizations/2026/09/17/01a0ae53-e8af-7181-85da-dc4c0ced41e8/task-12-independent-review/publication-live.json.

Next: [Task 13 prompt](./TASK-13-SITEMAP-ROBOTS-PROMPT.md), XML sitemap and production robots.txt with preview still blocked. Sol medium; inspection/short proposal first, suggested N120/M180 unapproved. No Task 13 application change is authorized or performed. Final site-wide QA/performance and production-release approval follow acceptance of the remaining crawler-file work.


## Task 12 — scoped commit/push and preview deployment authorized — 2026-10-26

Owner explicitly requested “Commit, push, deploy. Then 13 prompt”. Publish only the accepted Task 12 bundle, discovery hint, validator and scoped records to visual-refresh, then update the preview repository's exact source pin and use its existing deployment. Preserve unrelated work and production main. Task 12 owner KEEP and technical signoff remain in force; no further content revision is authorized. Final totals with pin are +133/-1/net132/changed134, N180/M220 PASS. Verify deployed discovery/retrieval and preview safeguards, including CI font generation; reuse previous evidence. Task 13 is prompt preparation only; its implementation scope/budget require approval.


## Task 12 — owner APPROVED / KEEP; stable bundle — 2026-10-26

Owner explicitly replied “Keep” after the managing-agent technical review. Task 12's reviewed bundle is accepted; existing technical signoff is preserved. Seven concepts now use status: stable, the index draft notice is removed, and the validator requires stable status. These are acceptance-state changes only; summaries, provenance, resource URLs and discovery markup remain unchanged.

Focused validator passes for eight files and seven stable concepts. Original-baseline accounting remains **+132/-0/net132/changed132; N180/M220/scope PASS**; the unused later preview-pin allowance is separately +1/-1. All 691 original files remain present with no unexpected changes against the task baseline. No build or visual checks were repeated. Existing local-build font/DNS limitation remains a publication-stage check. Evidence: C:/Users/tarek.azzi/.codex/visualizations/2026/09/17/01a0ae53-e8af-7181-85da-dc4c0ced41e8/task-12-independent-review/owner-keep.json.

This supersedes earlier draft, owner-KEEP-pending and technical-review-pending statuses. Commit/push, preview pin and deployment remain unapproved; production is unchanged. Next planned work remains Task 13: XML sitemap and production robots.txt, keeping preview blocked. Task 13 scope/N/M approval is still required before implementation.


## Task 12 — Ready for managing-agent review — 2026-10-26

Implemented the approved eight-file draft OKF bundle, homepage-only discovery hint and existing js-yaml validator on visual-refresh. Review the complete bundle and validation/accounting in [TASK-12-IMPLEMENTATION.md](./TASK-12-IMPLEMENTATION.md), starting at [knowledge index](../../public/knowledge/index.md). All concepts remain draft; managing-agent technical signoff and owner KEEP remain pending. This implementation entry supersedes earlier proposal-only/not-started statuses below.

Original-baseline actual totals: **+132/-0/net132/changed132; N180/M220/scope PASS**, including all YAML/delimiters, 60 retained validator lines and three discovery lines. Unused preview-pin allowance is separately reserved at +1/-1 (net0/changed2); no pin change. YAML/content/link checks, one completed fresh 25-page build and deterministic local HTTP homepage-to-index-to-seven-concepts walk pass. Eight intact UTF-8 Markdown responses serve as text/markdown; hint is homepage-only across all 25 pages; canonical paths, Contact/privacy links and snapshot anchor pass locally. Build font-metadata DNS and Bootstrap/Sass warnings are disclosed; no deployed-preview or external AI uptake claim.

Pre-existing source/documentation contents and lagging local HEAD are preserved against the original 691-file snapshot. Package manifests/lockfile are unchanged; clean-install verification incidentally refreshed ignored node_modules after a temporary-directory switch failed, as disclosed in the implementation record. No visual matrix, screenshots, new dependencies or agent infrastructure. No commit, push, preview-pin change, deployment or production release.


## Task 12 — implementation scope and N180/M220 approved — 2026-10-25

Owner replied “Approved” to TASK-12-OKF-PROPOSAL.md: eight static bundle files, homepage-only discovery hint and small existing-parser validator; task-wide N180/M220 including retained tooling/configuration and any later authorized preview-pin change. Implementation may proceed under that scope. Sol medium is the recommended worker. Preserve the existing working tree, approved site content and preview safeguards. Review the actual drafted bundle before bundle KEEP; do not invent human verification metadata. Commit/push, preview-pin update, deployment and production release remain separately unapproved. Implementation handoff is prepared; no worker has been dispatched by the managing agent and no application/bundle files have been written in this approval-record step.

2026-10-25 · **Ready for proposal review.** Inspection and planning only. No application/public files, dependencies, preview pin or production state changed; no commit/push/deployment. Suggested implementation worker: **Sol, medium effort**.

## Inspected state

D022 authorizes this roadmap step after page content and URLs stabilize. Task 11 is now owner KEEP, technically signed off and deployed. Current remote source documentation HEAD is `3e3b144dafea5b53dae5ccc7870091e378bd4b82`; preview commit `0d717f9115f063e02c7b6851232bd5aeca93d1fe` pins application source `8ab616ea510f730af41a354d945c9ca4f9f97ea0`. Local HEAD is still `d4df671724888071a845d1da03073b4a34403210` with preserved pending work. Do not reset it or publish that whole tree.

Read the current canonical [OKF specification](https://github.com/GoogleCloudPlatform/open-knowledge-format/blob/ad30107c31c06aec8a7d5636e0d1058118604e6f/SPEC.md), version **0.2**, pinned to upstream commit `ad30107c31c06aec8a7d5636e0d1058118604e6f`. The upstream repository is not archived. No frozen knowledge-catalog copy, reference-agent installation or cloud credentials are needed for this proposal.

Read current remote homepage, About, What We Build, all four service pages, the Command Center homepage, BaseLayout and InstantSnapshot source. Read-only HTTP inspection confirms eight corresponding preview routes return 200 with production-domain canonicals; the homepage has the existing `#snapshot` anchor. No OKF bundle/discovery link was found in the inspected public/source files. Existing Organization/WebSite JSON-LD remains in BaseLayout. Preview is still intentionally restricted from crawling.

Evidence: `C:/Users/tarek.azzi/.codex/visualizations/2026/09/17/01a0ae53-e8af-7181-85da-dc4c0ced41e8/task-12-okf-inspection/`, containing a 690-file pre-planning hash snapshot, published-page HTML and published-pages.json. HTTP/source inspection only, not a new behavior test or visual review; environment TLS validation was bypassed. No controls or external diagnostics were invoked.

## Recommended scope

Serve a flat bundle directly from `public/knowledge/`. Use literal `.md` URLs, starting at `/knowledge/index.md`; no new HTML landing page, nested catalog, search UI, generator, agent runtime or database.

| Proposed file | Type / canonical resource | Approved information to carry |
| --- | --- | --- |
| `public/knowledge/index.md` | Bundle index | Short lists grouping Digitful, services and tools; links to the seven documents below. |
| `public/knowledge/digitful.md` | Organization · `https://digitful.ca/` | Team backgrounds in agency work, in-house marketing and technical operations; the four services and existing Contact route. Source: About and What We Build. |
| `public/knowledge/social-media.md` | Service · `https://digitful.ca/social-media/` | Message, audience, repeatable content themes/formats/publishing rhythm, and learning from responses. Source: Social Media and What We Build. |
| `public/knowledge/seo.md` | Service · `https://digitful.ca/seo/` | Search intent/content, technical foundations, local visibility and measurement, with ongoing monitoring/improvement. Source: SEO. |
| `public/knowledge/paid-ads.md` | Service · `https://digitful.ca/paid-ads/` | Google and Meta campaigns connecting offer, audience, ads and landing pages, with budget management and measurement. Source: Paid Ads and What We Build. |
| `public/knowledge/process-automation.md` | Service · `https://digitful.ca/automation/` | Connect existing tools for lead follow-up, booking/reminders, data entry, reporting and internal handoffs; map, prioritize, build and document. Source: Automation. |
| `public/knowledge/website-check.md` | Tool · `https://digitful.ca/#snapshot` | Quick site check on the homepage; Website URL input, Mobile/Desktop choice and Run the check. Describe the available interface without claiming independently verified diagnostic accuracy or categories absent from approved visible copy. Source: InstantSnapshot. |
| `public/knowledge/seo-command-center.md` | Tool · `https://digitful.ca/seo-command-center/` | Digitful's owner-operated local reporting application using Search Console, GA4 and Google Ads reporting data to prepare client reports. Link the existing app privacy policy; do not duplicate it or claim the local application is a hosted client portal. Source: Command Center homepage. |

Keep each concept brief: one description and a short factual body with useful service/contact/related-concept links. Do not rewrite the website. No invented geography, team size, clients, certifications, pricing, performance figures, guarantees, operational verification or service commitments. Omit Digitful GPT from this initial bundle because its external destination/content has not been inspected for this task. No separate blog taxonomy or copy of every article.

## Format and provenance

Under OKF v0.2, concept files require parseable YAML frontmatter and a nonempty `type`; title, description, resource and provenance can be added. Reserve `index.md` for the listing; its only proposed frontmatter is `okf_version: "0.2"`. Use relative links such as `./seo.md`, which work within this flat bundle and its hosted subdirectory. Do not confuse bundle-root paths with website-root paths. These decisions follow specification sections 3–8 and 11–12.

Each concept should use `type`, `title`, `description`, `resource`, `status` and `sources`. Cite actual source files using pinned GitHub URLs under the reviewed application SHA, for example `https://github.com/tarekazz1/digitful/blob/8ab616ea510f730af41a354d945c9ca4f9f97ea0/src/pages/seo.astro`. Production-domain resources identify canonical pages; pinned source provenance avoids pretending the redesigned text is already live on production.

Drafts use `status: draft`; stable status follows approval of the actual bundle. Omit optional `generated`, `verified` and `stale_after` fields unless supported by real authorship, an actual verification event or an approved expiry policy. Existing page KEEP does not by itself make an unseen derivative bundle human-reviewed. Do not invent modification dates or automatic refresh behavior. These are local authoring choices within the format's optional metadata, not new OKF requirements.

## Discovery without a visible redesign

Add one homepage-only head hint in `src/layouts/BaseLayout.astro`, conditional on the existing canonical URL:

```html
<link rel="describedby" type="text/markdown" href="/knowledge/index.md" title="Digitful knowledge" />
```

The [IANA link-relation registry](https://www.iana.org/assignments/link-relations/#link-relations-1) defines `describedby` as pointing to information about the link context; its [W3C definition](https://www.w3.org/TR/powder-dr/#appD) is not restricted to one metadata format. This is a small project-selected discovery hint, **not** an OKF-mandated endpoint or a promise that every crawler/model will follow it. A deterministic consumer can read the homepage, find the hint, fetch the index and follow its links.

Leave visible header/footer/navigation, JSON-LD, canonicals, sitemap/robots setup and preview safeguards unchanged. No llms.txt, well-known endpoint, special AI-search markup, new structured-data family or reference-agent/cloud integration in this task. This bundle supplements normal HTML/SEO; it is not a search-ranking or AI-recommendation mechanism.

## Proposed files and change budget

Implementation allowlist: the eight `public/knowledge/*.md` files above; the single homepage discovery condition/link in `src/layouts/BaseLayout.astro`; one small `scripts/check-okf.mjs` validator; and `digitful-preview/source-ref.txt` only after separate publication authorization. Documentation records may update this proposal, a Task 12 implementation record, HANDOFF, CHANGELOG and TASK-QUEUE. No other application or reporting-project files.

Propose task-wide **N180 / M220**, original-baseline-to-final across source, retained tooling and preview configuration. Approximate counted allowance: 100 lines of YAML/frontmatter, 55 lines for validation, 5 for discovery markup, pin +1/-1, with remaining headroom. Count machine-readable YAML as configuration and all scripts/discovery code, including retained workspace tooling. Ordinary Markdown prose/listings and planning records are documentation text excluded by the existing rule; their `.md` location does not exempt YAML or executable content. Do not compress code or reset the task baseline to meet the ceilings.

The locked dependency tree already includes resolvable `js-yaml` 4.3.2; reuse it for the check rather than writing a YAML parser or adding a dependency. Confirm clean CI resolution before relying on it; if it is unavailable, report the issue instead of silently installing packages. No build generator or framework is proposed.

## Proportionate implementation validation

1. Parse the eight files: validate concept types/required fields, root-index version/allowed metadata, seven matching index entries, unique resource URLs and resolving internal links. Confirm provenance points to the selected source files and no unsupported trust/date metadata was introduced. These stricter local quality checks are not claims that every optional field/link is mandatory under OKF.
2. Compare the seven short bodies with their approved source passages. Preserve exact canonical paths, contact/privacy links and the fact that Command Center runs locally. Review the actual complete bundle before granting bundle KEEP.
3. Run the existing Astro build once into fresh output; confirm the eight raw Markdown files are copied intact and the homepage alone contains the discovery hint. Existing JSON-LD/canonical output should be unchanged. Inspect actual UTF-8 response bodies/content types; do not add a serving framework merely to force a MIME label.
4. Run a short deterministic discovery walk from homepage hint to index to every concept. Verify each canonical target/anchor, including `#snapshot`. This proves retrieval/navigation for that consumer, not uptake by external AI systems. No visual matrix or new render set is needed for an invisible head link/static files.
5. After separately approved preview publication, verify the same retrieval chain and preserve existing preview crawler/GTM/form safeguards. Do not relax robots/noindex restrictions for this experiment. Production publication remains a later approval alongside the main site.

Maintenance is event-driven: whenever an approved service, URL or tool description changes, update its concept and pinned provenance in that same scoped task. No automatic synchronization, expiry scheduler or recurring automation is included.

**Decision requested:** approve this eight-file content scope, the homepage-only discovery hint and N180/M220 for implementation. This document is the proposal; it is not a shipped bundle or permission to commit, push or deploy.
