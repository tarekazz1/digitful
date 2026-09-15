# Digitful Visual Constitution

Status: **Approved visual system — implementation in progress on `visual-refresh`.**

This document defines the visual identity for the Digitful redesign. It is the design source of truth for the `visual-refresh` branch.

The approved homepage mockup is a **style north star, not a structural wireframe**. The final site should carry the same identity while being calmer, clearer and more disciplined.

Core rule:

> **Same identity, less clutter.**

---

## 1. Design idea

Digitful should feel like a **graphic technical editorial studio with an analog-print edge**.

The identity combines:
- technical clarity
- editorial hierarchy
- flat printed colour
- human imperfection
- strong graphic confidence
- restrained irreverence

It should communicate that Digitful understands systems, marketing and the internet without looking like a generic SaaS, AI or startup template.

The visual tension to preserve is:

> **Technical precision + human imperfection.**

The site should feel deliberately designed by people, not assembled from a component library.

---

## 2. Brand impression

The site should feel:
- sharp
- intelligent
- practical
- independent
- internet-native
- confident
- human
- slightly unconventional

It should **not** feel:
- childish
- nostalgic for nostalgia's sake
- luxury/minimalist
- corporate consulting beige
- cyberpunk
- neon AI
- glossy SaaS
- overly playful
- visually chaotic

The retro/print influence is a design language, not a costume.

---

## 3. Reference and anti-reference

### Reference qualities to keep
- flat colour fields
- warm paper-like neutrals
- heavy dark ink
- bold display typography
- strong rules and outlines
- hard-edged controls
- screen-print / editorial-poster energy
- occasional hand-drawn marks, arrows and annotations
- asymmetry used intentionally
- graphic illustrations and diagrams
- clear, high-contrast hierarchy

### Do not copy literally
- fake desktop windows as the global layout
- folders/files as decorative structure
- retro-computer chrome everywhere
- novelty UI controls
- cartoon typography across the whole site
- texture on every element
- dense collage treatment in every section

### Explicit anti-patterns
Do not use:
- glassmorphism
- translucent SaaS cards as the default surface
- blurred neon glows
- blue/purple AI gradients
- generic bento grids
- rounded cards inside rounded cards
- pill-shaped everything
- 3D blobs
- generic stock-tech illustration
- excessive soft shadows
- rainbow service/category accents
- identical three-card section templates repeated page after page

---

## 4. The approved mockup's role

The homepage mockup establishes:
- visual tone
- colour attitude
- typography attitude
- graphic weight
- border language
- illustration direction
- flat-surface treatment
- overall brand energy

It does **not** lock:
- final homepage section order
- exact copy
- section density
- the number of cards
- exact image placement
- exact page architecture

The mockup is intentionally visually dense because it proves the style quickly. Production layouts should use more breathing room and fewer simultaneous focal points.

A typical production section should have **one dominant idea**, not several competing graphic moments.

---

## 5. Colour system

The palette is derived from the approved mockup and should remain compact.

### Core colours
- **Paper / cream:** `#F0E7D5`
- **Ink / near-black:** `#191A1B`
- **Coral:** `#E95849`
- **Teal:** `#569699`
- **Mustard:** `#E4C58F`
- **Light paper variant:** `#F6EEDD`

### Colour hierarchy
Ink and paper are the foundation. Coral, teal and mustard are accents, not equal participants on every screen.

Rules:
- Most sections should use **one accent colour at a time**.
- Two accent colours may appear together when there is a clear reason.
- Avoid using coral + teal + mustard simultaneously unless the section is intentionally poster-like and visually sparse elsewhere.
- Do not reintroduce service-specific rainbow coding as a default system.

### Text and contrast
Primary text should use ink on light backgrounds and paper/cream on dark backgrounds.

For accessibility and visual consistency:
- Use ink text on coral, teal or mustard fills.
- Avoid cream/white body text on coral or teal fills unless contrast is independently verified.
- Accent colours should not be the only way to communicate state.

---

## 6. Light and dark modes

### Light mode
Light mode is the primary expression of the new visual language:
- warm cream/paper base
- dark ink type and rules
- flat accent blocks
- subtle print texture

It should not look like a white SaaS dashboard.

### Dark mode
Dark mode should be a true inversion of the same brand, not a return to the old glowing tech aesthetic.

Use:
- ink/charcoal background
- warm cream text
- the same coral, teal and mustard accents
- flat surfaces
- strong rules

Do not use:
- blue glow fields
- glass panels
- luminous gradients
- excessive transparency

Dark mode should feel like **inked paper at night**, not a cyber interface.

---

## 7. Typography

Typography should carry more of the identity than decorative UI.

### Display / headline face
**Barlow Condensed** is the approved display typeface.

Use:
- Barlow Condensed 800 for primary display headings
- heavy, graphic, compressed treatment
- direct, poster-like hierarchy
- expressive type for headings, not long-form copy

The browser comparison tested Inter, Barlow Condensed, IBM Plex Sans Condensed and Archivo Black against real approved Digitful copy. Barlow Condensed was selected because it best balanced technical clarity, compactness and graphic character without feeling like novelty typography.

### Body / interface face
**Inter** remains the body and interface typeface.

Use Inter for:
- body copy
- form labels and controls
- navigation and utility UI unless a specific display treatment is justified
- dense information where readability matters more than personality

### Delivery
Both Barlow Condensed and Inter use Astro's Fonts API and are served from the built site output rather than the previous external Google Fonts stylesheet.

### Hierarchy rules
- H1s may be very bold and visually dominant.
- Body text should remain calm and readable.
- Labels may use uppercase or condensed treatment sparingly.
- Do not make every eyebrow, chip and label uppercase.
- Avoid using expressive display typography for long copy.

Typography should create hierarchy before borders, cards or decoration are added.

---

## 8. Logo system

The working logo direction is the refined lowercase **`digitful.`** wordmark with a coral terminal dot.

Concept files live at:
`docs/brand/logo-concepts/2026-09-retro-direction/`

Working variants include:
- dark/ink primary wordmark + coral dot
- light/cream primary wordmark + coral dot
- monochrome dark
- monochrome light
- tagline lockup
- standalone `d.` mark

Rules:
- Keep the lowercase wordmark idea.
- The coral dot is a recurring brand device, not decoration to scatter everywhere.
- Do not replace the production logo until clean vector masters are approved.
- Final site assets should be SVG masters with derived PNG/social/favicon exports.
- The standalone mark is for genuinely small contexts, not a replacement for the full wordmark in normal navigation.

---

## 9. Geometry and borders

The system should feel firm and graphic.

### Borders
- Default structural border: approximately `2px` ink/dark rule.
- Thin 1px rules may be used for dense data, tables or secondary separation.
- Borders should feel intentional, not like generic Bootstrap card outlines.

### Radius
- Default: square to mildly rounded.
- Typical radius: `0–6px`.
- Larger radius only when functionally justified.
- Pills reserved for true tags/statuses, not buttons, cards or generic labels.

### Shadows
- No soft ambient SaaS shadows.
- If depth is needed, use a **small hard offset shadow** that feels printed or mechanical.
- Most sections should work without shadow at all.

---

## 10. Texture

Texture is part of the identity but must stay subtle.

Use:
- light paper grain
- restrained print noise
- occasional halftone or roughened illustration treatment

Do not:
- place texture over body text
- reduce readability
- apply heavy grain to forms, tables or controls
- use texture as a substitute for composition

Texture should usually be perceived before it is consciously noticed.

---

## 11. Illustration and icon language

### Icons
- Prefer simple SVG line or solid icons.
- Icons should normally appear **without rounded icon boxes**.
- Use icons only when they add meaning.
- Do not decorate every heading with an icon.

### Illustrations
Preferred direction:
- hand-drawn technical diagrams
- bold line illustrations
- arrows and annotations
- simplified interface diagrams
- collage-like graphic objects
- visual metaphors tied to marketing, systems, measurement or automation

Avoid:
- generic AI robots
- glossy 3D illustrations
- stock SaaS characters
- random decorative doodles with no relationship to content

The illustration system may be imperfect; the interface itself should remain usable and precise.

---

## 12. Layout and composition

The site should use a disciplined grid with selective rule-breaking.

### Core principle
Structure first, disruption second.

Use:
- strong columns
- generous whitespace
- editorial rules/dividers
- asymmetrical hero compositions
- variable section structures
- deliberate alignment shifts

Avoid:
- every section becoming a three-card grid
- identical container widths and treatments everywhere
- card grids used simply because content can be divided into three items
- asymmetry without a clear focal hierarchy

### Controlled irregularity
A section may contain one strong irregular device:
- an offset graphic
- a hand-drawn arrow
- an overlapping label
- a broken grid edge
- a large accent field

Do not stack several irregular devices in the same section unless the rest of the section is extremely simple.

---

## 13. Density and breathing room

The mockup's energy is approved; its density is not the production target.

Rules:
- Fewer elements per section.
- More space between major ideas.
- Avoid multiple large accent blocks competing above the fold.
- Keep one dominant visual action per viewport where possible.
- Let typography and empty space carry hierarchy.

The final site should feel expressive without becoming noisy.

---

## 14. Surfaces and cards

Cards are a tool, not the default layout.

Use cards for:
- self-contained interactive modules
- diagnostics/results
- clearly bounded data objects
- content that benefits from independent scanning

Prefer open layout for:
- process steps
- service explanations
- proof/results
- editorial content
- comparisons
- page introductions

Alternatives to cards:
- rules
- columns
- numbered sequences
- bands of colour
- typographic hierarchy
- table-like structures
- open grids

Nested cards should be rare.

---

## 15. Buttons, links and forms

### Buttons
- Rectangular or mildly rounded.
- Strong ink border.
- Flat fill.
- Clear pressed/hover state.
- Optional hard offset shadow for primary actions.
- No gradient fills.
- No pill buttons by default.

### Links
- Should feel editorial and obvious.
- Underlines, arrows or rule-based treatments are preferred over glowing hover effects.

### Forms
Forms should be crisp and functional:
- warm neutral or dark flat fields
- clear 2px focus treatment
- generous touch targets
- no floating glass inputs
- no decorative texture inside fields

---

## 16. Diagnostic / technical UI

Digitful's diagnostic experience is a major opportunity to make the identity specific to the business.

It should feel like:
- an instrument
- a measurement panel
- a technical worksheet
- a control surface

It should not feel like:
- a generic SaaS dashboard card
- a fake terminal
- a retro-computer novelty

This is where stronger grid lines, data labels, technical annotations and mechanical interaction can be used more heavily than on ordinary marketing sections.

---

## 17. Motion

Motion should feel mechanical and purposeful.

Preferred:
- quick reveals
- line/rule expansion
- underline movement
- snap-like transitions
- short panel movement

Avoid:
- floating decorative objects
- endless ambient animation
- excessive parallax
- elastic/bouncy movement
- animation on every scroll event

Typical interaction timing should feel quick, roughly `120–220ms`, with reduced-motion support preserved.

---

## 18. Page-specific composition

The visual system should be consistent, but page types should not all share the same template.

### Homepage
Most expressive page. Strong hero, clear value proposition, proof, diagnostic, selected services and CTA. May use the richest illustration treatment.

### Service pages
More structured and evidence-driven. Each service may have a distinct composition, but all should share the same typography, colour, border and illustration language.

### Blog index
Editorial rather than card-marketplace. Reduce oversized card height; use stronger type hierarchy and simpler filtering.

### Blog article
Reading experience first. Hero metadata should be calm and clearly spaced. Decorative elements should not compete with long-form content.

### Contact
Functional and direct. The form should feel like a structured worksheet, not a glossy lead-generation card.

### Thank-you
Minimal. Use the brand language without unnecessary decoration.

---

## 19. Accessibility and usability guardrails

The new style must not trade usability for personality.

Preserve:
- clear keyboard focus
- readable contrast
- semantic structure
- touch-target sizing
- responsive flow
- reduced-motion support
- non-colour state indicators
- current CLS stability

Decorative hand-drawn elements must be non-essential to understanding content.

---

## 20. Digitful-specific recurring cues

The identity should become recognisable through a small number of repeated cues rather than many effects.

Primary recurring cues:
1. warm paper + dark ink contrast
2. refined lowercase `digitful.` wordmark with coral dot
3. Barlow Condensed display headlines
4. strong dark rules/outlines
5. flat coral / teal / mustard accents used selectively
6. occasional hand-drawn technical annotations
7. restrained print texture
8. asymmetric editorial composition

If a page uses all eight heavily at once, it is probably too busy.

---

## 21. Final decision filter

Before adding any visual element, ask:

1. Does it clarify structure, meaning, hierarchy or action?
2. Does it reinforce the Digitful identity?
3. Is the page better without it?
4. Is another element already doing the same visual job?

If an element exists only to make the page look more designed, it is a removal candidate.

---

## 22. Implementation state

The desktop, mobile and dark-mode homepage direction has been approved and implementation is underway through the existing `visual-refresh` → exact-SHA preview workflow.

Current sequence:
- shared editorial foundations
- Astro 7.3.2 / Node 22 infrastructure
- Barlow Condensed + Inter typography system
- finalize clean `digitful.` SVG logo masters
- rebuild homepage composition against the approved specimen and locked copy
- adapt remaining page types only after homepage review

Material visual departures from this constitution still require a new explicit decision.
