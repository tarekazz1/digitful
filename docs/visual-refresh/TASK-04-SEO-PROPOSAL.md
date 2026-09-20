# Task 04 correction — SEO copy, owner artwork and guided selector

Status: **Revised owner-artwork proposal for managing-agent review. Implementation is not authorized.**

Prepared: 2026-09-20  
Source repository/branch: `tarekazz1/digitful:visual-refresh`
Source HEAD before this owner-artwork correction: `1b0e06ae2c88311364f1eab1dde04ccefabf4b12`
Recorded production baseline: `c8fac4f78295d2576af0e92b04329f4e938c7b6f` — not modified
Preview checkout: `423813d0376abe27c7fdb5e6c66cb559e7720095`; `source-ref.txt` remains `360f218949e693df8cd7aea8fe301a5056f614f9` — not modified or deployed

## 1. Correction scope and authority

This revision preserves the approved five-section wording and replaces the previous photographic loupe and hero alternatives A, B and C with the owner-supplied SEO collage. The wording below remains the complete public page copy authority. It is reproduced without substantive additions, introductory paragraphs, closing summaries or a separate final CTA section.

Proposal-only changed artifacts are confined to `docs/visual-refresh/`:

- this corrected proposal;
- an editable HTML composition;
- a byte-identical archive of the owner-supplied source and four cropped responsive derivatives;
- four revised full-page renders.

No application source, shared design-system code, accepted page, preview configuration, preview pin, production branch or production deployment was changed. No build or deployed-page validation is claimed.

### Review artifacts

Editable composition: `docs/visual-refresh/mockups/task-04-seo-proposal.html` with `?theme=light` or `?theme=dark`.

- `docs/visual-refresh/mockups/task-04-seo-owner-artwork-desktop-1440-light.png` — 1440 × 4005.
- `docs/visual-refresh/mockups/task-04-seo-owner-artwork-desktop-1440-dark.png` — 1440 × 4005.
- `docs/visual-refresh/mockups/task-04-seo-owner-artwork-mobile-390-light.png` — 390 × 4893.
- `docs/visual-refresh/mockups/task-04-seo-owner-artwork-mobile-390-dark.png` — 390 × 4893.

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

## 3. Owner-supplied artwork and responsive derivatives

Status: **owner-supplied visual source; responsive crop and composition remain proposal-only and unshipped.**

The supplied 1280 × 960 JPG is preserved byte-for-byte as:

- `docs/visual-refresh/candidates/task-04-seo-owner-artwork-original.jpg`
- 315,504 bytes; SHA-256 `1BE9D89F16341A7EBB19E5248BAE9380BEA7D9007816D21392D08F42187387AF`.

No generative edit, background replacement, text addition, identity change or in-image retouching was performed. The source was cropped mechanically to 1210 × 910 at `x=40, y=30`, removing only peripheral empty paper while preserving the complete magnifying glass, readable `SEO` lettering and essential collage marks.

Responsive derivatives:

- Desktop AVIF: `task-04-seo-owner-artwork-desktop.avif` — 1200 × 902, 89,293 bytes, SHA-256 `577693636E3A9E811EFCE37A60BE37F796221196FFCC3120369D69427E9E4F07`.
- Desktop WebP: `task-04-seo-owner-artwork-desktop.webp` — 1200 × 902, 168,400 bytes, SHA-256 `920AA0FCC4C993626E8E7628D7DA62AF8BCD865CE2CAAEF32D7AA48D541ADB9F`.
- Mobile AVIF: `task-04-seo-owner-artwork-mobile.avif` — 760 × 572, 42,218 bytes, SHA-256 `59977E4161517B4FECC4DF08ECE6BE8DE6FFD93DF4B8E87B6A56AEC52A461853`.
- Mobile WebP: `task-04-seo-owner-artwork-mobile.webp` — 760 × 572, 73,352 bytes, SHA-256 `CAB2985A92451C7BA264CA658E0532E2817D8229AE86EE037DB361E4920123ED`.

The mockup uses `<picture>` to select AVIF first with WebP fallback and switches to the 760px derivative below 768px. Intrinsic dimensions and the source aspect ratio are reserved.

## 4. Revised hero composition

### Desktop

- The headline occupies the left negative space while the artwork receives the larger right-hand field and overlaps the central compositional boundary.
- The supporting paragraph and CTA remain together in a narrower, unobstructed reading area beneath the headline.
- The artwork is an image element, not a hero background. It uses `object-fit: contain`, so its proportions and full `SEO` lettering are preserved.
- In dark mode, the artwork sits in an angled, full-height cream editorial field that extends beyond the viewport. The field color matches the source paper, eliminating the appearance of a pasted rectangular image without recoloring or altering the artwork.

### Mobile

- The reading order is headline → artwork → supporting paragraph → CTA.
- The artwork becomes a full-bleed editorial band rather than a reduced desktop column. The magnifying glass and complete `SEO` lettering remain prominent.
- The paragraph and CTA stay in normal flow below the artwork; no text overlays the lens.

The composition adds no second `SEO` label, fake search interface, annotation or decorative shape. The previous photographic loupe and alternatives A, B and C are superseded and are not referenced by the revised mockup.

### Remaining sections

- Search journey: one ruled three-stage path on desktop and a connected vertical sequence on mobile; no surrounding cards.
- Work: four open editorial disclosure rows. The first is expanded in review renders; technical keyword lists stay hidden in collapsed rows.
- Ongoing management: one mustard band with a compact connected loop and one-line descriptions.
- Selector: one bounded technical instrument because it is interactive. Choice 4 is selected in the renders to expose one response and CTA for review.
- The overall page is deliberately shorter and lighter than the rejected proposal: fewer paragraphs, smaller section padding, a shallower mobile hero and no redundant conclusion.

## 5. Proposed interaction and accessibility behavior

- Work rows use native `<details>` and `<summary>` elements with a full-row hit area, visible open/closed indicator, keyboard support and an exposed expanded state.
- The selector uses a `<fieldset>`, legend and four native radio inputs. Native Tab/arrow behavior is retained.
- Selection is communicated by the checked control plus a filled row, not color alone.
- A single `aria-live="polite"` response region updates without moving focus. Its normal link remains the next keyboard stop and always targets `/contact/?service=seo`.
- The proposal introduces no network request, persistence, scan, score, loading state or fabricated result.
- Implementation should preserve the intrinsic image dimensions, `<picture>` source order and prompt hero loading behavior if this proposal is approved.

## 6. Substantive changes from the rejected proposal

1. Replaced all longer manager-written journey, service, management and selector copy with the exact shorter owner-approved wording.
2. Removed the journey introduction and closing claim.
3. Moved technical service terminology entirely into disclosure content.
4. Reduced ongoing management to a compact loop with one-line explanations.
5. Shortened all four selector responses and removed the added `Where to start` label.
6. Superseded the generated photographic loupe with the owner-supplied SEO collage.
7. Replaced alternatives A, B and C with one desktop/mobile composition using the supplied artwork’s negative space and proportions.
8. Added deterministic cropped AVIF/WebP derivatives and a dark-mode editorial field without changing the artwork itself.

## 7. Remaining owner/implementation issues

The page wording itself is owner-approved. It establishes that these topics may be named publicly: content, AI-assisted discovery, Local SEO, Google Business Profile, analytics and ongoing SEO management.

It does **not** define operational commitments. Implementation must not add any of the following without separate evidence/approval:

- obtaining access to or directly managing a Google Business Profile;
- updating third-party directory listings;
- writing, editing or publishing client content;
- installing analytics, configuring events or promising dashboards/reports;
- a monitoring cadence, reporting cadence, response time or retainer deliverable;
- guaranteed ranking, traffic, inquiry, citation or AI-answer outcomes.

Technical items still gated by later implementation approval:

- exact production integration and load strategy for the proposed responsive derivatives;
- exact breakpoint tuning at 320/390/768/1024/1440 and boundaries;
- keyboard, screen-reader announcement and reduced-motion verification;
- preservation of metadata, contact behavior, accepted pages and preview safeguards;
- exact-source-SHA preview deployment and task-wide LOC accounting.

## 8. N and approval boundary

The existing recommendation remains **N=600 net implementation lines**, but it is **not approved**. It is a ceiling proposal, not a target, and this correction does not authorize application work.

Before implementation, the owner/managing agent must explicitly decide:

- revised owner-artwork crop/composition: KEEP / ADJUST / REJECT;
- interaction proposal: KEEP / ADJUST / REJECT;
- implementation N=600: APPROVE / ADJUST / REJECT.

No technical signoff, owner KEEP or production authorization is claimed.
