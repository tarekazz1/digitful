# Task 04 correction — SEO copy, approved transparent artwork and guided selector

Status: **Implemented on the isolated preview; ready for managing-agent review. Final technical signoff and owner KEEP remain pending.**

Prepared: 2026-09-20  
Source repository/branch: `tarekazz1/digitful:visual-refresh`
Proposal baseline: `648a7db11cc55a6f3cf71726df93149a3167be02`
Previous implementation commit: `ce76d9ba98ea3ae394d6e36f10f0e58a75673bb7`
Previous preview pin: `475efa8d3d312cc86fef158510bb14faa9e24f5e`
Final correction source: `74effcb96b52c13e05f98c0d7fd397e983815a4c`
Final correction preview pin: `d87ba5fe71d4aa2489c122fe168589fc8ceec0c8`; successful workflow [35531740178](https://github.com/tarekazz1/digitful-preview/actions/runs/35531740178)
N=600 was authorized. Cumulative implementation/config LOC was net +258 before the final corrections and is net +257 after them.
Recorded production baseline: `c8fac4f78295d2576af0e92b04329f4e938c7b6f` — not modified

## 1. Correction scope and authority

This revision preserves the approved five-section wording and replaces every previous loupe, owner-artwork derivative and hero alternative A, B and C with the newly supplied SEO collage. The wording below remains the complete public page copy authority. It is reproduced without substantive additions, introductory paragraphs, closing summaries or a separate final CTA section. The owner subsequently authorized implementation, N=600 and isolated preview deployment; that authorization supersedes the earlier proposal-only gate.

The original proposal artifacts remain confined to `docs/visual-refresh/`:

- this corrected proposal;
- an editable HTML composition;
- a byte-identical archive of the newly supplied source and four transparent responsive derivatives;
- four revised full-page renders.

The implemented preview candidate adds the approved responsive derivatives and changes only `src/pages/seo.astro`; the final correction also remains confined to that page. No shared design-system file, accepted page, Main or production file changed. Build and deployed-page validation are recorded in sections 7 and 8.

### Review artifacts

Editable composition: `docs/visual-refresh/mockups/task-04-seo-proposal.html` with `?theme=light` or `?theme=dark`.

- `docs/visual-refresh/mockups/task-04-seo-approved-artwork-desktop-1440-light.png` — 1440 × 3927.
- `docs/visual-refresh/mockups/task-04-seo-approved-artwork-desktop-1440-dark.png` — 1440 × 3927.
- `docs/visual-refresh/mockups/task-04-seo-approved-artwork-mobile-390-light.png` — 390 × 4912.
- `docs/visual-refresh/mockups/task-04-seo-approved-artwork-mobile-390-dark.png` — 390 × 4912.

Every render retains all five sections, one expanded work row and one selected selector response. The lower four sections and all approved copy are unchanged from the preceding proposal.

## 2. Complete approved page copy

### Section 01 — Hero

**Headline**  
Your next customer is searching. Can they find you?

**Supporting paragraph**  
People are looking for answers, products, and services. AI-powered search tools are helping them discover their options. We help your business become easier to find, understand, and choose, wherever the search begins.

**CTA**  
Tell us what’s stuck →

**Destination**  
`/contact/?service=seo`

The hero has no eyebrow, second CTA, fake search input or additional line.

### Section 02 — The search journey

**Eyebrow**
THE SEARCH JOURNEY

**Heading**  
Getting found is only the beginning.

**01 / SEARCH**

They look. You’re nowhere to be found.

Your competitors appear. Your business doesn’t.

**02 / DISCOVER**

They find you. But not what they need.

Your page doesn’t answer their questions or make your offer clear.

**03 / ACT**

They visit. Nothing happens next.

The next step is unclear, so the opportunity slips away.

The composition keeps Search → Discover → Act visually connected. There is no introductory or closing paragraph.

### Section 03 — What we work on

**Eyebrow**
WHAT WE WORK ON

**Heading**  
Different searches. One connected strategy.

#### Search intent & content

Get found for what your customers are actually looking for.

Expanded content:
Keyword strategy · Content · AI-assisted discovery

#### Technical foundations

Make your website easier for search engines to find, understand, and index.

Expanded content:
Technical SEO · Site structure · Page performance

#### Local visibility

Help nearby customers find your business when they need it.

Expanded content:
Local SEO · Google Business Profile · Local pages

#### Measurement & improvement

Know which searches bring useful visitors and what they do next.

Expanded content:
Search performance · Analytics · Visitor actions

Only the row heading and supporting sentence appear when collapsed. The technical terms appear only after expansion. The review renders show `Search intent & content` expanded so both states can be assessed.

### Section 04 — Ongoing SEO management

**Eyebrow**
ONGOING SEO MANAGEMENT

**Heading**  
SEO is not a one-time fix.

**Supporting paragraph**
Search behavior changes. Your competitors adapt. Your business evolves. Your SEO needs to keep up.

**Monitor**  
Know what’s happening.

**Improve**  
Fix what holds you back.

**Measure**  
See what’s making a difference.

Monitor → Improve → Measure is presented as one compact loop, not three large text blocks.

### Section 05 — Guided closing selector

**Eyebrow**
THE NEXT STEP

**Heading**  
Where is your search visibility getting stuck?

**Instruction**  
Choose the problem that sounds familiar.

#### Choice 1

**Choice**  
People cannot find my business

**Response**
Your business may be missing from the searches that matter. Start with your search visibility and the pages customers need to find.

#### Choice 2

**Choice**  
My website gets traffic but few inquiries

**Response**
The issue may be who visits, what they find, or what happens next. Find out where that connection breaks.

#### Choice 3

**Choice**  
My Google Business Profile needs attention

**Response**
Your local presence may be making it harder for nearby customers to find or contact you. Start with your profile and local visibility.

#### Choice 4

**Choice**  
I am not sure what is working

**Response**
Connect your search traffic to what visitors actually do. See what’s creating useful interest and what needs attention.

**Response CTA**
Discuss your SEO →

**Destination**
`/contact/?service=seo`

Only the selected response is displayed. The selector is the closing conversion section; there is no FAQ, separate final CTA, scan, diagnostic, score, API or additional contact-state handoff.

## 3. Approved artwork and responsive derivatives

Status: **owner-supplied visual source; transparent responsive derivatives are integrated in the isolated preview candidate. Production remains unchanged.**

The supplied file is a 1280 × 960 RGB JPEG, so it has no alpha channel and its white field is baked into the pixels. Its actual size is 238,293 bytes, not approximately 3.6 MB. It is preserved byte-for-byte as:

- `docs/visual-refresh/candidates/task-04-seo-approved-artwork-original.jpg`
- 238,293 bytes; SHA-256 `F3F7497882601EFB9A0DB253C5CD9DC887B0114393858FB1AF7B97AC961A5908`.

No generative edit, recreation, restyling, text addition or in-image retouching was performed. A deterministic edge-connected selection removed only the outer near-white field. A narrow white-to-alpha boundary matte removed the JPEG fringe; enclosed pale areas inside the lens were not selected. The transparent working crop uses source bounds `x=83–1245, y=51–960`, producing a 1162 × 909 master before resizing. The complete magnifying glass, `SEO` lettering and essential collage marks remain visible.

Responsive derivatives:

- Desktop AVIF: `task-04-seo-approved-artwork-desktop.avif` — 1200 × 939, 140,174 bytes, SHA-256 `ED1F9F993D5AAEFD4A7CB0AF47E6B79271BB5E1F1D9922B12A63AA2171567228`.
- Desktop WebP: `task-04-seo-approved-artwork-desktop.webp` — 1200 × 939, 177,368 bytes, SHA-256 `5D33F087544BBF1D9D38ABADD842039F02E869DA110D4CAA9C81DF47829686F8`.
- Mobile AVIF: `task-04-seo-approved-artwork-mobile.avif` — 760 × 595, 61,592 bytes, SHA-256 `ABAB5BAED2A2DAC3ABE5C5253DD4100B1DE6BBC2D5DCF2772DB6C51E47D835C3`.
- Mobile WebP: `task-04-seo-approved-artwork-mobile.webp` — 760 × 595, 77,606 bytes, SHA-256 `0ECF6804751A016EB8EEFA4761E2CB6456614E00C934F56D4B944A01E2F7847E`.

All four derivatives decode as RGBA with alpha values from 0 to 255. They meet the requested size bands. Close inspection on paper and ink backgrounds found no remaining rectangular field or soft white silhouette halo. Fine print texture, lens reflections and lettering edges remain legible; no visible quality compromise was found at the rendered desktop or mobile sizes, although AVIF and WebP are necessarily lossy encodes.

The mockup uses `<picture>` to select AVIF first with WebP fallback and switches to the 760px derivative below 768px. Browser inspection confirmed the 1200px AVIF is selected at 1440px and the 760px AVIF at 390px. Intrinsic dimensions and the transparent crop aspect ratio are reserved, so the browser downloads only the relevant viewport asset.

## 4. Revised hero composition

### Desktop

- The headline and artwork share one open hero canvas. The lens occupies the upper-right focal field while the coral collage edge crosses the central grid boundary toward the headline; there is no image column, card or backing panel.
- The supporting paragraph and CTA remain together in a narrower, unobstructed reading area beneath the headline.
- The transparent artwork is an image element, not a hero background. It is rendered directly on the paper or ink surface with its proportions and full `SEO` lettering preserved; the handle extends toward the lower-right hero boundary.
- Light and dark modes use the same transparent asset without a cream rectangle, angled field, badge or decorative workaround.

### Mobile

- The reading order is headline → artwork → supporting paragraph → CTA.
- The artwork is recomposed between the headline and paragraph at a deliberately oversized width. The magnifying glass and complete `SEO` lettering remain prominent without reproducing the desktop positioning.
- The paragraph and CTA stay in normal flow below the artwork; no text overlays the lens.

The composition adds no second `SEO` label, fake search interface, annotation or decorative shape. Previous loupes, owner-artwork derivatives and alternatives A, B and C are superseded and are not referenced by the revised mockup.

### Remaining sections

- Search journey: one ruled three-stage path on desktop and a connected vertical sequence on mobile; no surrounding cards.
- Work: four open editorial disclosure rows. The first is expanded in review renders; technical keyword lists stay hidden in collapsed rows.
- Ongoing management: one mustard band with a compact connected loop and one-line descriptions.
- Selector: one bounded technical instrument because it is interactive. Choice 4 is selected in the renders to expose one response and CTA for review.
- The overall page is deliberately shorter and lighter than the rejected proposal: fewer paragraphs, smaller section padding, a shallower mobile hero and no redundant conclusion.

### Render inspection

The four full-page PNGs were rendered from the revised HTML in Chromium and inspected after all images decoded. The review covered artwork edges and lettering, headline/paragraph separation, CTA clearance, section density, one expanded work row, one selected problem response, paper/ink consistency and the complete 390px mobile flow.

- Exact hero headline and paragraph text matched the approved wording; both CTAs resolve to `/contact/?service=seo`.
- Desktop headline and paragraph bounds are separated by 47px in both modes.
- Desktop and mobile each reported zero horizontal overflow; all images decoded with non-zero intrinsic dimensions.
- The artwork wrapper is transparent. Actual mockups show no panel, cream rectangle or soft white edge halo on either background.
- One `<details>` row is open, one radio choice is selected and exactly one response is displayed. Changing the choice updated the response and returning to choice 4 restored the review state.
- Browser inspection reported no console errors or warnings.

No unresolved visual defect was found in these proposal renders. This is artifact QA, not application, breakpoint-suite, screen-reader, build or deployed-preview verification.

## 5. Implemented interaction and accessibility behavior

- Work rows use native `<details>` and `<summary>` elements with a full-row hit area, visible open/closed indicator, keyboard support and an exposed expanded state.
- The selector uses a `<fieldset>`, legend and four native radio inputs. Native Tab/arrow behavior is retained.
- Selection is communicated by the checked control plus a filled row, not color alone.
- A single `aria-live="polite"` response region updates without moving focus. Its normal link remains the next keyboard stop and always targets `/contact/?service=seo`.
- The proposal introduces no network request, persistence, scan, score, loading state or fabricated result.
- The implementation preserves the intrinsic image dimensions, `<picture>` source order and prompt hero loading behavior.

## 6. Substantive changes from the rejected proposal

1. Replaced all longer manager-written journey, service, management and selector copy with the exact shorter owner-approved wording.
2. Removed the journey introduction and closing claim.
3. Moved technical service terminology entirely into disclosure content.
4. Reduced ongoing management to a compact loop with one-line explanations.
5. Shortened all four selector responses and removed the added `Where to start` label.
6. Superseded every prior loupe and owner-artwork version with the newly supplied SEO collage.
7. Removed the baked white background by edge-connected transparency preparation, without changing the collage identity or enclosed lens detail.
8. Replaced alternatives A, B and C with one responsive composition that uses the supplied artwork’s transparent silhouette directly on both approved backgrounds.
9. Added optimized responsive AVIF/WebP delivery and removed the earlier cream/angled dark-mode field.

## 7. Remaining owner and service-scope issues

The page wording itself is owner-approved. It establishes that these topics may be named publicly: content, AI-assisted discovery, Local SEO, Google Business Profile, analytics and ongoing SEO management.

It does **not** define operational commitments. Implementation must not add any of the following without separate evidence/approval:

- obtaining access to or directly managing a Google Business Profile;
- updating third-party directory listings;
- writing, editing or publishing client content;
- installing analytics, configuring events or promising dashboards/reports;
- a monitoring cadence, reporting cadence, response time or retainer deliverable;
- guaranteed ranking, traffic, inquiry, citation or AI-answer outcomes.

The preview implementation has completed responsive artwork delivery, breakpoint checks, keyboard control checks, metadata/contact preservation, preview safeguards, exact-SHA deployment and LOC accounting. The final correction changed only the Search Journey's page-scoped color treatment and the SEO metadata; prior interaction, artwork and regression evidence remains applicable. Production integration is not authorized. Final managing-agent technical signoff and owner KEEP remain pending.

## 8. N, implementation and approval boundary

The owner authorized **N=600 net implementation lines**, application implementation and isolated preview deployment. The previous implementation was 294 added / 36 removed / net +258. The final page correction is +9 / -10 relative to that candidate, and the preview source-ref replacement is zero-net. Cumulative implementation/config accounting from the original source and preview baselines is **295 added / 38 removed / net +257; N=600 PASS**. Binary assets and documentation are excluded under the established invariant.

Final managing-agent technical signoff, owner KEEP and any production authorization remain separate and are not claimed.
