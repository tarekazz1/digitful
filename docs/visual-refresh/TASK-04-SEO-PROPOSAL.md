# Task 04 Stage 1 — SEO copy, integrated loupe and guided problem selector

Status: **Proposal for managing-agent and owner review. Implementation is not authorized.**

Prepared: 2026-09-20  
Inspected local and remote source SHA: `ccc88d00204eeb8b710d53fc24e172017e3715ab` on `visual-refresh`  
Production baseline: `c8fac4f78295d2576af0e92b04329f4e938c7b6f` (not modified)  
Preview repository `main`: `423813d0376abe27c7fdb5e6c66cb559e7720095`; `source-ref.txt` remains `360f218949e693df8cd7aea8fe301a5056f614f9`. Neither was changed and no preview deployment was run.

## 1. Scope and evidence boundary

This document proposes the Task 04 copy, composition, interactions and implementation budget. Stage 1 changed no application code, deployment configuration or production state. All new files are proposal-only documentation, mockups and clearly separated, unshipped loupe candidates under `docs/visual-refresh/`.

Evidence used:

- Current source: `src/pages/seo.astro`, accepted homepage and Social Media source, shared editorial/design-system styles, brand documents and visual-refresh records.
- Local references: the supplied selector and structural wireframes were inspected as structure only.
- Rendered evidence: the current local SEO page was rendered in Chromium at 1440 × 1000 and 390 × 844 in light and dark themes. This was a current-source audit, not a deployed-preview audit.
- Platform facts: only the limited AI-search and Google Business Profile statements below were checked against primary Google documentation.

No build, production check, live form submission, remote preview verification or performance measurement was performed or claimed in Stage 1.

### Reviewable visual artifacts

- Editable proposal composition: `docs/visual-refresh/mockups/task-04-seo-proposal.html` (`?theme=light` or `?theme=dark`).
- Desktop review renders: `docs/visual-refresh/mockups/task-04-seo-desktop-1440-light.png` and `task-04-seo-desktop-1440-dark.png`, each at 1440 × 4259.
- Mobile review renders: `docs/visual-refresh/mockups/task-04-seo-mobile-390-light.png` and `task-04-seo-mobile-390-dark.png`, each at 390 × 5258.
- Loupe edge checks: `docs/visual-refresh/candidates/task-04-seo-loupe-edge-check-light.png` and `docs/visual-refresh/candidates/task-04-seo-loupe-edge-check-dark.png`.

The rendered compositions use the exact locked hero copy and single CTA, one expanded `Search intent & content` row, and the selected `I am not sure what is working` response. They are full-page proposals rather than captures of the current SEO page. Chromium checks found no horizontal overflow at either target width, all local fonts and images loaded, and zero console warnings or errors. Light and dark treatments were captured at both widths. A dark-theme response-CTA contrast defect found during visual review was corrected in the proposal HTML and the affected renders were replaced. These checks validate the proposal artifacts only; they are not implementation verification.

## 2. Current-page audit

### Source findings

The current SEO page has two sections and one CTA:

- Hero: `SEO built for the right buyer.` / `Ranking matters only if the traffic helps the business.`
- A bounded `What we solve` surface with three bullets and three generic process cards.
- CTA: `Talk SEO` to `/contact/?service=seo`.

The existing page supports these service claims:

- reviewing search intent against business goals;
- improving hierarchy, metadata and crawl clarity;
- improving the path from search intent to an on-page action;
- judging SEO by business relevance rather than rankings alone.

It does **not** establish a current public commitment to manage Google Business Profiles, manage listings, produce SEO content, implement analytics, or provide an ongoing SEO retainer.

### Rendered findings

All four inspected states rendered without horizontal overflow. At 390px, `window.innerWidth` and document `scrollWidth` were both 390px; the page height was 1,528px. The semantic snapshot retained one H1, one H2, list content and the correct contact URL. Chromium reported no console warnings or errors.

The current page is usable but materially behind the accepted visual system:

- The centered hero is text-only and does not use the approved asymmetrical collage language.
- The page is very thin for a primary service: it does not explain the search journey, the connected work, ongoing review or an appropriate next step for different problems.
- The large bounded `service-shell` and three repeated cards read as the older generic service template, not the approved open editorial composition.
- Desktop leaves a large, quiet gap between the hero and the service surface; mobile becomes a long stack of generic cards.
- Light and dark themes are legible, but the page-specific composition does not use the hard rules, open rows, deliberate colour fields or analog-print imagery seen on the accepted homepage and Social Media page.
- An initial dark-desktop screenshot briefly showed a malformed CTA label. A fresh render and DOM/computed-style check showed the full `Talk SEO` label, visible ink-on-coral colours and normal geometry; this is treated as a transient capture artifact, not a confirmed source defect.

### Reference-wireframe interpretation

The supplied wireframes establish the five-section sequence and selector concept. They are not visual authority. The proposal deliberately removes their rounded-card/pill treatment, fake search field, extra final CTA card and interface-like blue label. The accepted Digitful typography, hard-edged controls, rules, restrained colour and open composition remain authoritative.

## 3. Exact proposed public copy

The copy below is the proposed implementation copy. The hero is owner-approved and reproduced exactly.

### Metadata

**Title**  
SEO for clearer search visibility | Digitful

**Description**  
Connect search intent, useful content, technical foundations, local visibility, and measurement so the right customers can find, understand, and act.

The description must be revisited if the owner does not confirm the local-visibility and measurement scope in section 8.

### Section 1 — Hero

**Headline**  
Your next customer is searching. Can they find you?

**Supporting paragraph**  
People are looking for answers, products, and services. AI-powered search tools are helping them discover their options. We help your business become easier to find, understand, and choose, wherever the search begins.

**CTA**  
Tell us what's stuck →

**Destination**  
`/contact/?service=seo`

No eyebrow, secondary CTA, fake search field or additional hero line is proposed.

### Section 2 — Search journey

**Heading**  
Getting found is only the beginning.

**Introduction**  
A search can begin in a search engine, on a map, or in an AI-powered answer. The useful path is still connected: help the right person find the business, understand the answer, and know what to do next.

**Visible sequence**  
Search → Discover → Act

**Search**  
People cannot find the business when they look.

**Discover**  
They find it, but not the answers they need.

**Act**  
They arrive, but the next step is unclear.

**Closing line**  
SEO has to support the whole journey, not stop at a ranking report.

Reason: this replaces the current disconnected problem bullets with one plain-language journey. All three breaks remain visible without interaction.

### Section 3 — The work

**Heading**  
Different searches. One connected strategy.

**Introduction**  
The work changes with the problem, but each part should make the same business easier to find, understand, and choose.

#### Search intent & content

**Visible summary**  
Match useful pages to the questions and decisions that matter to the business.

**Expanded detail**  
Review which searches deserve a page, whether existing pages answer the real question, and where the route from information to service is missing. AI can help surface patterns and gaps; people still decide what is accurate, useful, and worth publishing.

#### Technical foundations

**Visible summary**  
Remove the structural obstacles that keep useful pages from being found or understood.

**Expanded detail**  
Check crawl access, indexability, internal links, page hierarchy, metadata, and page experience. Fix the issues that block important content before adding more activity on top.

#### Local visibility

**Visible summary**  
Make the business details people rely on clear and consistent where local search matters.

**Expanded detail**  
Check whether the Google Business Profile, website, and major listings describe the same business clearly: name, category, contact details, hours, services, and destination pages. Resolve material conflicts before adding more local activity.

This row is conditional on owner confirmation of the offering. It must not ship merely because the guidance is factually sound.

#### Measurement & improvement

**Visible summary**  
Connect visibility and visits to useful actions, then improve what the evidence supports.

**Expanded detail**  
Use available search and site data to compare queries, landing pages, and meaningful next steps. Change one priority at a time, compare it with a clear baseline, and decide what to keep, revise, or stop.

Reason: the four rows replace the current three cards with open editorial disclosures. The collapsed state remains informative; expansions add decision-useful detail instead of repeating the label.

### Section 4 — Ongoing management

**Heading**  
SEO is not a one-time fix.

**Introduction**  
Search behaviour, competitors, content, and websites change. Useful SEO needs a review loop, not a launch-and-forget checklist.

**Monitor**  
Watch search visibility, page performance, and meaningful actions for material changes.

**Improve**  
Fix the clearest constraint, strengthen weak pages, and test the next useful opportunity.

**Measure**  
Compare what changed with the baseline, then decide what to keep, revise, or stop.

**Visible sequence**  
Monitor → Improve → Measure

Reason: the compact loop explains why iteration matters without claiming guaranteed growth. The heading and sequence would imply an ongoing Digitful service, so owner confirmation is required before implementation.

### Section 5 — Guided closing selector

**Heading**  
Where is your search visibility getting stuck?

**Instruction**  
Choose the problem that sounds familiar.

#### Choice 1

**Choice**  
People cannot find my business

**Where to start**  
Start with visibility, not volume. Check whether the site has a clear, crawlable page for the searches that matter, whether that page is indexed, and whether its language matches how customers describe the problem. Fix missing or unclear coverage before publishing more.

**Link**  
Discuss your SEO →

#### Choice 2

**Choice**  
My website gets traffic but few inquiries

**Where to start**  
Start with the journey after the click. Compare the promise in the search result with the landing page, proof, and next step. Then separate weak-fit traffic from page friction by checking which visits reach a meaningful action.

**Link**  
Discuss your SEO →

#### Choice 3

**Choice**  
My Google Business Profile needs attention

**Where to start**  
Start with accuracy and consistency. Check the business name, primary category, location or service area, hours, contact details, services, photos, reviews, and the page linked from the profile. Resolve conflicts between the profile, website, and major listings before adding more activity.

**Link**  
Discuss your SEO →

#### Choice 4

**Choice**  
I am not sure what is working

**Where to start**  
Start with a simple measurement map. List the searches and pages meant to create demand, the actions that show progress, and the business outcomes that matter. Then review search performance, technical health, and visitor actions against the same baseline.

**Link**  
Discuss your SEO →

Every selector link keeps the existing destination: `/contact/?service=seo`. The selection is not added to the query string, hidden form fields or contact state.

Reason: the four responses diagnose a sensible starting point without pretending that a scan, account review or result has occurred.

## 4. Proposed interaction behaviour

### Work disclosures

- Use native `<details>` / `<summary>` disclosures with the title and visible summary inside the summary row.
- Keep each row independently operable; do not force an accordion unless later evidence justifies it.
- Preserve the browser's expanded state semantics and provide a visible plus/minus or arrow that is decorative, not the only state signal.
- Full-row hit area, at least 44px high, with the existing focus treatment.
- Animate only the state indicator or a short opacity transition; no height animation is required. Respect reduced motion.

### Guided selector

- Use a `<fieldset>` and `<legend>` with four native radio inputs. The whole hard-edged row is the label/hit target.
- Begin with no problem selected; do not presume the visitor's situation.
- Selected state uses checked semantics, a visible text/icon cue and a rule/fill change, not colour alone.
- Native Tab and arrow-key behaviour remains intact.
- After selection, update one reserved response region below the choices. Use `aria-live="polite"` and `aria-atomic="true"` so the new `Where to start` response is announced without moving keyboard focus.
- The response link is a normal link and becomes the next keyboard stop. It always points to `/contact/?service=seo`.
- No URL field, scan, score, API call, loading state, network request, fabricated assessment or persistent contact handoff is part of this interaction.

## 5. Loupe candidate, correction and provenance

Proposed clean-edge candidate: `docs/visual-refresh/candidates/task-04-seo-loupe-clean-edge.png`

- The original `task-04-seo-loupe-candidate.png` was generated with the built-in image-generation tool on 2026-09-20 for this Stage 1 proposal.
- Visual inspection identified a soft pale fringe around parts of the original silhouette, so it is **not** the candidate proposed for approval.
- The proposed file is a targeted image-generation correction of that source: remove the exterior halo only; retain the same object, angle, halftone texture, lens, handle and true transparent background.
- Prompted as one black-ink/warm-cream photographic halftone magnifying glass with a dynamic three-quarter angle, a dominant lens, a long handle and a genuinely transparent background.
- Explicit exclusions: text, slogans, annotations, sticky notes, arrows, search bars, UI, fake results, charts, people, hands, logos, watermark, glow, lens flare and stock-tech effects.
- Dimensions: 1536 × 1024.
- File size: 2,089,373 bytes.
- Pixel format: RGBA. The four corners and 1,042,802 pixels are fully transparent; 530,062 edge/ink/texture pixels carry partial alpha. The highest alpha is 254, consistent with the intentionally printed/halftone treatment rather than a hard opaque vector edge.
- SHA-256: `A79F80C3FB385354F9E4F40AD1F111CD7F604CCBEF00ED18A5CA9AB73B81582E`.
- Status: generated candidate only; not optimized, integrated or approved for shipment.

Transparency and edge QA was performed by flattening the proposed candidate at source resolution onto the actual proposal backgrounds `#f0e7d5` and `#191a1b`. The resulting light and dark check composites show no visible pale or dark halo around the exterior silhouette at 1:1 inspection. The fine irregular edge that remains belongs to the halftone/printed texture, not to a soft glow. The candidate also reads cleanly in both full-page compositions. If approved, implementation should preserve this source and create optimized responsive derivatives; those derivatives would require the same two-background edge check after resizing/compression.

## 6. Composition proposal

### Desktop (1024px and wider)

- Use an open two-part hero rather than a boxed panel: copy occupies roughly 48% and the loupe field roughly 52%, with the exact ratio allowed to breathe by viewport.
- Keep the headline and supporting paragraph in a readable left column. The loupe lens sits beside the headline, not over it; no text is placed inside the lens.
- Let the lens dominate the upper-right field. Rotate only enough to feel placed by hand. Extend the handle toward and slightly beyond the lower-right section edge.
- Place one restrained mustard shape behind part of the lens using current tokens. It must remain a background field, not a second illustration.
- Reserve the art box with an explicit aspect ratio/dimensions and load the hero artwork promptly. The transparent image is decorative and should use empty alternative text or equivalent semantics.
- Use section rules and open spacing to connect the hero to the journey. Do not add a fake search bar, floating labels or interface chrome.

### Mobile (320–767px)

- Keep the headline, paragraph and CTA at full readable width in normal document flow.
- Preserve the loupe as a large object: render it approximately 125–145vw wide inside a reserved 13–16rem art zone, with the lens strongly visible and the handle deliberately cropped at the right/lower edge.
- Place the art zone immediately after the CTA so the visual remains part of the hero without squeezing copy into a narrow column. Pull the lens upward slightly into decorative whitespace only; never over letters or controls.
- Aim for an approximately 620–700px hero at 390px during implementation review, subject to actual font wrapping and overlap checks. This is a composition target, not an acceptance claim.
- At 320px, retain a substantial lens crop rather than shrinking the loupe into an icon. At 768px, transition to a balanced side-by-side or offset composition without an abrupt jump.

### Remaining sections

- Search journey: a visible horizontal three-stage path on desktop; a vertical or wrapped path on narrow screens. Keep all explanations visible.
- Work: full-width editorial disclosure rows separated by strong rules; no four-card grid.
- Ongoing management: compact three-step sequence with one restrained accent field, not a new panel stack.
- Selector: a bounded closing instrument is appropriate because it is interactive, but use square/mild corners, hard rules and open internal spacing. Do not copy the rounded dark wireframe card.

## 7. Primary-documentation notes

The proposed copy intentionally makes no promise of rankings, inclusion, citations or AI recommendations.

- Google states that established SEO practices remain relevant to AI Overviews and AI Mode, with no special technical requirements beyond ordinary Search eligibility. This supports integrating AI into the existing SEO story rather than selling a separate GEO section: <https://developers.google.com/search/docs/appearance/ai-features>.
- Google's Business Profile guidance supports checking accurate names, address/service area, hours and a specific primary category. It does not establish that Digitful offers profile or listings management: <https://support.google.com/business/answer/3038177> and <https://support.google.com/business/answer/3039617>.

## 8. Owner confirmations required before implementation

The following are **not confirmed offerings in the inspected repository evidence**:

1. **Google Business Profile work** — Does Digitful only review/recommend changes, or also obtain access and edit/manage profiles?
2. **Listings work** — Does Digitful audit consistency only, or correct/manage directory listings? Which listings, if any?
3. **Content creation** — Does SEO scope include briefs, optimization and recommendations only, or writing/editing/publishing content?
4. **Analytics** — Does Digitful interpret existing Search Console/analytics data, or also configure tracking, events, dashboards and reporting?
5. **Ongoing management** — Is a continuing SEO engagement actually offered, and what monitoring/reporting cadence can be promised?

Until confirmed, implementation must not strengthen the conditional language into commitments such as `we manage`, `we publish`, `we track everything`, `monthly reporting`, guaranteed response times or fixed deliverable cadences. If any item is not offered, the affected row/metadata must be revised before code work begins.

## 9. Recommended implementation N

Recommend **N = 600 net implementation lines**, subject to owner approval.

Why 600 rather than the earlier unapproved 200:

- The scope now replaces a 54-line legacy page with five complete sections rather than making a narrow visual adjustment.
- It adds two accessible interaction patterns: four native disclosures and a radio-driven announced response region.
- It requires page-scoped responsive composition across 320/390/768/1024/1440 plus breakpoint boundaries, both themes, a large responsive hero asset, and overlap/legibility checks.
- It includes the exact-SHA preview pin/config delta and any retained verification code under the task-wide invariant.

Implementation should still target roughly 450–525 net lines by reusing approved tokens and primitives. N=600 is a ceiling for the whole authorized task, not a target and not a permission for shared-foundation refactoring. Documentation and binary artwork remain excluded only as permitted by `DELTA-LOC-INVARIANT.md`. Stop and return for approval before exceeding the ceiling.

## 10. Later implementation acceptance outline

If the owner approves the copy, candidate and N, the implementation pass should:

- establish exact source and preview baselines before edits;
- preserve metadata semantics, contact URL, accepted homepage/Social Media/blog pages and preview safeguards;
- use the existing exact-source-SHA preview workflow only after the local candidate passes;
- verify 320/390/768/1024/1440 plus actual breakpoint boundaries in light and dark themes;
- inspect full pages and close-ups after image decode for text/art/control overlap, cropping, visible focus, selected/expanded state, response announcement, horizontal overflow and layout shifts;
- verify native disclosure keyboard behaviour, radio Tab/arrow behaviour and all four distinct responses/links;
- report image source and derivative dimensions/bytes, commands/results, console/page errors, source/preview SHAs, workflow URL and cumulative added/removed/net/PASS;
- return **Ready for review** without self-awarding managing-agent signoff, owner KEEP or production release.

## Review decision requested

The owner/managing agent should return:

- copy: KEEP / ADJUST / REJECT;
- clean-edge loupe candidate: KEEP / ADJUST / REJECT;
- composition/interaction: KEEP / ADJUST / REJECT;
- answers to the five service-scope confirmations;
- implementation N=600: APPROVE / ADJUST / REJECT. It remains unapproved unless the owner explicitly approves it.

No implementation should begin until those decisions are explicit.

## Manager transition — 2026-09-20 — current Task 04 status

Read `docs/visual-refresh/MANAGER-START-HERE.md` first. Task 04 proposal and four mockups exist locally; implementation and N=600 are NOT approved. The owner objected that the loupe looks awful and out of spirit, and rejected the adequacy of the prior managing-agent review, particularly its neglect of content. Current loupe is not accepted; substantive content/brand review and corrective proposal remain outstanding. No general approval of the remaining proposal should be inferred. Task 03 remains accepted. The owner subsequently authorized committing and pushing the Task 04 proposal, candidates, mockups and handover together. Fetch the updated visual-refresh branch for these artifacts; original user attachments remain device-local.
