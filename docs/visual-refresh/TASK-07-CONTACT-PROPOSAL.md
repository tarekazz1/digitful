# Task 07 — Contact and Thank-you: inspection and proposed direction

## Task 07 — implementation authorized; local checks passed — 2026-10-24

Owner approved N180/M400, scoped commit/push and exact-SHA preview publication, including removing `_captcha=false` to restore FormSubmit CAPTCHA. The reviewed composition and exact revised copy/prefill are implemented only in contact.astro, thank-you.astro and toggleButtons.js; BaseLayout/shared code and prior work are preserved. Local build (25 pages) and 20 width/theme states, six keyboard states, form contracts/validation/context and safeguards pass. Total including retained checker/preview pin: +250/-90/net160/changed340, scope/N/M PASS. Preview publication is in progress; see TASK-07-IMPLEMENTATION.md for the immutable baselines and subsequent release receipt. No form/diagnostic submitted; CAPTCHA completion, delivery and post-submit redirect unverified. No managing-agent signoff, owner KEEP or production change.


## Owner-approved wording revision — 2026-10-24

The owner approved the managing-agent wording recommendations. This section supersedes earlier “unapproved copy” statements and the initial brief’s wording-preservation requirement for these specific strings.

| Element | Approved replacement |
| --- | --- |
| Contact headline | Tell us what’s stuck. |
| Supporting sentence | The messy version is fine. Tell us what you’d like to change. |
| Service-selection prompt | What would you like help with? Select any that fit. |
| Message field label and placeholder | What’s getting in the way? |
| Contact meta description | Talk to Digitful about social media, SEO, paid ads, or process automation. Tell us what’s stuck. |

Approved diagnostic-prefilled message template:
- Website: [existing URL]
- Help with: [existing selected service label, when present]
- Device: [existing mobile/desktop value, when present]
- What’s not working:
- What I’d like to change:

Bracketed descriptions identify existing runtime values; do not print placeholders or invent values. Omit optional context lines when their values are absent. Preserve hidden field names/values, service tokens, query keys, action/method, redirect, validation, multi-selection and message editability.

Keep the reviewed composition, Thank-you wording, contact/legal details, reply-time promise and submit label. Next action is applying these changes to the standalone proposal and refreshing renders/checks in the existing Task 07. This approval does not authorize application implementation, its N/M budget, commit/push or deployment. Suggested N180/M400 remains unapproved. No copy has been applied by the managing agent.

## Independent managing-agent proposal review — 2026-10-24

Layout/prototype review passed; no blocking design defect observed. Eight worker full-page images viewed, twenty fresh width/theme states checked, and four fresh representative renders inspected. Keyboard focus, service preselection/multi-selection, diagnostic context/editability and native validation pass without submission. Evidence and exact proposed wording: `C:/Users/tarek.azzi/.codex/visualizations/2026/09/17/01a0ae53-e8af-7181-85da-dc4c0ced41e8/task-07-manager-review/REVIEW.md`. Chromium emulation only; this is not implemented-page/delivery signoff.

Recommend a targeted, unapproved copy pass: headline “Tell us what’s stuck.”; support “The messy version is fine. Tell us what you’d like to change.”; service prompt “What would you like help with? Select any that fit.”; message label “What’s getting in the way?”. Keep Thank-you wording, contact/legal details, reply-time promise and submit label. Also replace the old Contact metadata taxonomy and simplify the consulting-style diagnostic-prefilled message while preserving all underlying context/fields. The complete proposed replacements are in the review report.

These suggestions are not approved copy and have not been applied to the mockup or application. Owner review, final proposal acceptance and implementation N/M/publication approval remain pending. N180/M400 is still only the worker’s suggested ceiling. No application edits, commit, push, deployment or owner KEEP here.

Updated 2026-10-24. **Inspection complete; owner requested the Task 07 visual-proposal prompt.** No application edits, implementation budget, commit/push or deployment authorized. Suggested worker: **Sol, medium effort**.

## Authority and current state
Use the existing Digitful checkout on visual-refresh. Follow repository instructions, HANDOFF/TASK-QUEUE, DELTA-LOC-INVARIANT and docs/brand/VISUAL-CONSTITUTION.md. Current preview source is 3436b31c6586f3513786ba6b552204b580fc9b0a; local HEAD remains older with pre-existing changes and must not be reset to synchronize it. Task 06 is technically signed off and owner KEEP. The separate homepage surgical text fix now has independent technical signoff; owner APPROVED / KEEP was recorded on 2026-10-24.

Targets: src/pages/contact.astro and src/pages/thank-you.astro. public/scripts/toggleButtons.js is relevant only to the proposed keyboard-focus correction. Inspect current remote/working state again before implementation. Preserve existing service pages, shared shell and unrelated local work.

## Verified findings
- Contact repeats “Share what is working, what is unclear, and what needs attention.” above and inside the form.
- Centered hero, separate bordered form shell, lower contact cards and large gaps create a long page. Four stacked service buttons add mobile height.
- Existing blue/purple accents on Contact/Thank-you are outside the established paper/ink/coral/teal/mustard palette.
- All four service query values preselect properly; toggles update aria-pressed and hidden service data. Keyboard activation drops focus to BODY because the click handler calls this.blur().
- Diagnostic query values populate the existing hidden fields and editable message correctly. Native required/email/privacy validation works. Form delivery/redirect was not submitted or verified.
- No overflow or browser errors observed across ten width/theme states per route. Menu/theme and accessible theme labels work after waiting for transitions.

## Proposed composition — not implementation approval
Contact: one editorial two-column section on desktop. Left: existing Contact eyebrow, headline, one supporting sentence, reply time and existing direct contact details in a compact unboxed group. Right: the existing form, with its outlined fields and coral submit button; remove the outer card treatment and duplicate form introduction. Mobile: intro, form, then direct contact details, with reduced gaps and readable full-width inputs. Try a compact two-column service selector if labels fit at 320px; otherwise wrap naturally. Keep its multi-select behavior and visible selected/focus states.

Retain the existing headline “Tell us where growth feels stuck.” and exactly one existing supporting sentence. Keep field labels, names, required/optional status, service tokens, email, phone, location wording, privacy link and existing 1–2-business-day response promise. This is a composition correction, not a rewrite or permission to add service-area, response-speed or integration claims.

Thank-you: a simple confirmation composition in the same typography and palette. Keep “Message received”, “Thanks for reaching out.”, the existing review/reply sentence and the home link. Propose removing only the redundant “You will hear from us soon.” Replace the blue confirmation treatment with an ink check on a restrained mustard accent. Keep it compact; the form is the primary visual on this journey and needs no generated illustration.

Keyboard correction: preserve focus on service buttons after keyboard activation; keep the same selected tokens, aria-pressed updates and multi-select logic. Treat this as a small explicit behavior correction requiring inclusion in the approved implementation scope.

## Protected behavior
Preserve all form inputs/hidden names, services synchronization, query preselection, snapshot/source/strategy handoff and editable message, honeypot/captcha settings, privacy validation, action/method and production _next redirect. Keep preview submission guard and crawl/tracking safeguards. Do not send test messages or run real diagnostics as part of proposal checks. Production delivery testing requires its own authorized test.

## Next stage
The requested next assignment is the visual-proposal stage: use TASK-07-VISUAL-PROPOSAL-PROMPT.md to prepare one editable desktop/mobile light/dark proposal and verify the actual renders. Do not implement from this document alone. From the agreed proposal/current source, propose a proportionate scope and N/M ceilings before implementation; historical Task 06 allowances do not apply. Reuse current tooling and styles without a framework, dependency change or broad shared-style refactor.

Evidence: C:/Users/tarek.azzi/.codex/visualizations/2026/09/17/01a0ae53-e8af-7181-85da-dc4c0ced41e8/contact-next-review/REVIEW.md, checks.json, menu-followup.json and 12 full-page PNGs. Chromium emulation only; no physical-device/other-browser or delivery testing.

## Rendered visual proposal — 2026-10-24

**Ready for managing-agent and owner review — proposal only.** One editable two-view standalone: [mockups/task-07-proposal.html](mockups/task-07-proposal.html) (`?page=contact` or `?page=thank-you`, `&theme=light|dark`); [review notes](mockups/task-07-review.md), [bundle](mockups/task-07-review-bundle.zip), [checks](mockups/task-07-checks.json). Eight full-page `task-07-{contact|thank-you}-{1440|390}-{light|dark}.png` renders inspected and supplied as actual images. Open desktop intro/details and form, mobile intro/form/details, compact two-column service choices, one introduction, exact preserved wording and mustard/ink confirmation are demonstrated.

Live pages inspected afresh; source/pin 3436b31c6586f3513786ba6b552204b580fc9b0a, preview HEAD db8ca20578b120e70482e6dca17f2dedb27c1b59; older local HEAD/pre-existing changes preserved. Twenty Chromium width/theme states pass, including 320/768/1024px spot checks, overflow, labels, contrast (minimum tested text 4.94:1), Space/Enter focus retention, all four preselection values, multi-selection, editable diagnostic handoff and native required/email/privacy validation. Form attributes/fields equal the live contract; local submission is guarded. No forms submitted or diagnostics run. Chromium emulation only; no delivery/redirect or physical-device/other-browser verification.

Smallest suggested later scope: contact.astro and thank-you.astro page-scoped composition/styles, plus removing this.blur() in public/scripts/toggleButtons.js. Suggested unapproved ceilings: N=180/M=400, including retained checks and any separately authorized preview-pin change. No implementation budget approval inferred. Application/config delta +0/-0/net0/changed0; no dependencies, commit, push or deployment. Full preservation/accounting evidence: mockups/task-07-scope-check.json. No technical signoff or owner KEEP awarded.

## Approved wording applied — revised proposal — 2026-10-24

**Ready for managing-agent review — revised proposal.** Applied the exact owner-approved Contact visible strings, meta description and diagnostic-prefill template to the standalone only; optional context lines are omitted when absent. Reviewed CSS/layout and Thank-you markup/copy are unchanged. Generator and wording expectations are refreshed. Prior proposal/evidence preserved in mockups/task-07-before-wording.zip; current bundle is mockups/task-07-review-bundle.zip.

Checks PASS: twenty page/width/theme states including 320px; exact wording/metadata; six keyboard width/theme states at 320/390/1440px with focus retention and multi-selection; four preselection values; editable handoff and seven optional-context cases; form-contract/validation, contrast and overflow. Eight refreshed 1440/390px light/dark full-page renders inspected and attached as images. Evidence: mockups/task-07-wording-review.md, task-07-checks.json and task-07-wording-review.json. Application/config +0/-0/net0/changed0; pre-existing work preserved. No submissions, diagnostics, dependencies, commit/push or deployment. Chromium emulation only; no delivery/redirect verification. Implementation/N180/M400 remains unapproved; no technical signoff or KEEP awarded.

Proposal-only HTML/JS/generator/check revision: +70/-21/net+49/changed91. Reviewed CSS/shell and Thank-you markup are identical; original Task 07 baseline retained. These are proposal artifacts, not approved application implementation.
