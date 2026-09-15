# Digitful Visual Refresh — Decision Log

This file records approved or working decisions so the rationale survives across chats and contributors.

## D001 — Use a separate preview environment
**Status:** Approved

**Decision:** Keep `digitful.ca` on the production `main` branch. Use a separate public repository (`tarekazz1/digitful-preview`) and `preview.digitful.ca` for review builds.

**Why:** Gives a safe, realistic place to review changes on phone/desktop before production. Prevents design experiments from reaching the live site.

**Constraints:** Preview must not pollute production analytics or accept live form submissions.

---

## D002 — Track every preview by exact source commit
**Status:** Approved

**Decision:** The preview repo pins the Digitful source to an exact commit SHA rather than loosely following a branch.

**Why:** Every previewed version can be reproduced and traced later. It also creates a clean audit trail of what was actually reviewed.

---

## D003 — One material change at a time
**Status:** Approved

**Decision:** Avoid large redesign batches. Objective fixes and subjective visual experiments should be isolated, previewed, reviewed, then kept/adjusted/rejected.

**Why:** Makes regressions and aesthetic decisions traceable and reversible.

---

## D004 — Design direction
**Status:** Working direction approved for testing

**Decision:** Move Digitful away from generic AI/SaaS styling and toward a modern consulting / technical-practice feel.

**Interpretation:**
- Less cardification.
- Fewer decorative glows.
- Less reliance on boxed icons.
- More restrained radius and colour use.
- More hierarchy from typography, spacing and composition.
- More deliberate page-specific composition.

**What this does NOT mean:** A full redesign from scratch or wholesale visual changes without preview approval.

---

## D005 — Treat visual simplification as subtraction
**Status:** Approved

**Decision:** Prefer removing unnecessary decorative treatment before adding new visual elements.

**Test:** An element should communicate structure, meaning, hierarchy or action. If it only makes a section look more decorated, it is a candidate for removal.

---

## D006 — Preserve current functional behaviour during visual/performance work
**Status:** Approved

**Decision:** No visual or performance improvement is accepted if it breaks current navigation, diagnostic functionality, contact workflow, analytics/measurement, theme behaviour, responsive behaviour, SEO output, or current CLS stability.

---

## D007 — Bootstrap Icons caveat
**Status:** Approved

**Decision:** Do not approve exact icon sizing/weight/alignment from the original local visual-QA screenshots because the external Bootstrap Icons font was not loaded in that environment.

**Requirement:** Icon decisions must be visually verified on the real preview site. Later SVG migration can combine visual cleanup with the PageSpeed icon-font improvement.

---

## D008 — Security hardening is separate
**Status:** Approved

**Decision:** CSP/HSTS/COOP/frame-control/Trusted-Types hardening is not part of this visual/PageSpeed project.

**Why:** It has separate integration risk with GTM, Google Fonts, jsDelivr, FormSubmit, the PageSpeed Worker, and inline scripts.

---

## D009 — Contact links use theme-aware colour
**Status:** Approved — KEEP

**Decision:** Replace the forced Bootstrap `link-light` class on the Contact page email and phone links with a contact-specific theme-aware link style using `var(--site-text)` and `var(--site-accent-soft)` for hover/focus.

**Why:** The old forced-white links became nearly invisible in light mode. The previewed change keeps them readable in both themes without changing the contact workflow.

**Reviewed source commit:** `2ebd6614be8c7ea1c0f7d841fe8111ff3ec0cc92`

**User decision:** KEEP after live preview review on `preview.digitful.ca`.

---

## D010 — Logo links have a stable accessible name
**Status:** Approved — KEEP

**Decision:** Add `aria-label="Digitful home"` to the reusable logo link in `src/components/Logo.astro`.

**Why:** The site swaps between two logo images for dark/light themes. The accessible name should remain stable regardless of which visual logo is shown. This addresses the Lighthouse/Agentic discernible-link issue without changing the visible design or navigation destination.

**Reviewed source commit:** `b9f1d47898b0481bb1cadf346c46fd49dfba1033`

**Preview deployment run:** `34956432099` — successful.

**User decision:** KEEP after live preview review on `preview.digitful.ca`.

---

## D011 — Footer copyright uses stronger muted text contrast
**Status:** Approved — KEEP

**Decision:** Give only the footer copyright text a dedicated class using `color: var(--site-text-muted)`.

**Why:** The previous `var(--site-text-dim)` treatment was too low-contrast. This corrects the accessibility issue without redesigning the footer or changing its layout, links, logo, spacing, background, or structure.

**Reviewed source commit:** `51c3f18531cd49b26df6d65b18807d9bc5867baf`

**Preview deployment run:** `34957277115` — successful.

**User decision:** KEEP after live preview review on `preview.digitful.ca`.

---

## D012 — Short pages keep the footer at the viewport bottom
**Status:** Approved — KEEP

**Decision:** Use a vertical flex layout on the shared `.site-shell` and let `#main-content` grow into unused viewport height.

**Why:** The Thank-you page is short, so the footer previously floated above the bottom of the viewport. The shared flex-shell correction fixes short-page layout without changing footer styling or page copy, while long pages continue to flow normally.

**Reviewed source commit:** `939a771c5ed93cf6ca80a1de1046ddcaed247f44`

**Preview deployment run:** `34957902972` — successful.

**User decision:** KEEP after live preview review on `preview.digitful.ca`.

---

## Pending decisions
The following are NOT approved design changes yet. They are experiments to test visually:
- Degree of glow removal.
- Final radius scale.
- Which cards/surfaces should be removed.
- Whether service/category colour coding should be reduced or retained.
- Final SVG/icon treatment.
- Final typography refinements.
- Final page-composition differences among service pages.
