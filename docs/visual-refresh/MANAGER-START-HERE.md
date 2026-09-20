# START HERE — managing-agent transition

Updated 2026-09-20. Read this before interpreting older Ready for review entries.

## Role and authority

You are the replacement managing agent / technical lead and reviewer. Another agent implements. Your responsibility includes content, scope, brand consistency, functional correctness, desktop/mobile evidence, risk, records and technical signoff—not merely design opinions. Do not implement fixes yourself or self-award owner KEEP. User instructions prevail. Do not invent offerings, claim unseen verification, over-engineer or make the owner perform your QA. Production requires separate explicit authorization.

## Workspace and exact state

Use the existing local checkout:
`C:/Users/tarek.azzi/OneDrive - Université Saint-Esprit de Kaslik/Documents/GitHub/digitful`

Source: `tarekazz1/digitful`, working branch `visual-refresh`. Local HEAD verified at transition: `ccc88d00204eeb8b710d53fc24e172017e3715ab` (Task 03 acceptance documentation; previously pushed). Recheck current state before any writes. Preview: `https://preview.digitful.ca`, separate repo `tarekazz1/digitful-preview`. Last recorded preview main commit `423813d0376abe27c7fdb5e6c66cb559e7720095`, source pin `360f218949e693df8cd7aea8fe301a5056f614f9`. Last recorded production main `c8fac4f78295d2576af0e92b04329f4e938c7b6f`. Remote/preview/production tips were not freshly queried for this handover.

IMPORTANT: The owner authorized committing and pushing this handover together with the Task 04 proposal, candidates and mockups. These artifacts are included in the handover commit; fetch the updated visual-refresh branch before using a fresh checkout. Earlier notes describing these artifacts as local-only are historical. Original user attachments referenced by absolute paths remain device-local. No Task 04 application implementation or deployment is authorized.

## Where we came from

The supplied DIGITFUL-FULL-HANDOFF.md was reconciled with older workflow/data/decisions; D034–D037 and HANDOFF.md explain authority. Older private management material is historical, not for public Git. Social Media received focused responsive corrections using the new design system (D038). The owner then separated implementing-agent work from managing-agent review.

Task 01: preview-only robots normalization, corrected empty-name metadata handling; technical signoff and owner KEEP. Task 02: Astro blog loader restored article generation; technical signoff and owner KEEP. Task 03: homepage composition, laptop/scenery, optimized image delivery, mobile services specificity fix and simplified site check; technical signoff and owner KEEP, recorded in commit ccc88d0. Do not reopen accepted work without cause/authorization. Exact history and evidence are in HANDOFF, CHANGELOG and TASK-QUEUE.

Task 03 review lessons: zero overflow missed squeezed mobile service columns; off-screen lazy artwork could be absent in captures; one close-up differed from the full-page button label. Inspect full desktop AND mobile evidence, await image decoding, distinguish artifacts from live defects, and review exact requested copy. Previous managing-agent signoff was based on source and worker screenshots, not an independent rerun of all live checks. Preserve that limitation.

## Where Task 04 is now

Task 04 is SEO, at PROPOSAL stage. Sol medium produced:
- `TASK-04-SEO-PROPOSAL.md`: current-page audit, full proposed copy, four selector responses, behavior, composition, service questions and recommended N=600.
- `candidates/`: original and clean-edge loupe plus background checks.
- `mockups/task-04-seo-proposal.html`: editable proposal only.
- `mockups/task-04-seo-{desktop-1440,mobile-390}-{light,dark}.png`: four actual proposed page renders.

Worker reports original SEO audit in local Chromium and proposal overflow/asset checks. These are not deployed new-page checks. The live SEO page remains the old implementation. Neither copy as a whole, loupe, final composition nor N=600 has owner approval. Earlier suggested N=200 was also never approved. Stage 1 preparation was authorized; implementation remains gated.

LATEST OWNER FEEDBACK: The owner said the loupe “looks awful and out of spirit” and criticized the managing agent for superficial design-only feedback and neglecting content review. The owner requested a replacement manager. Treat the current loupe as NOT ACCEPTED and requiring rework; do not treat the previous manager's “good direction” or mobile-only adjustment suggestion as owner approval. A thorough content and brand review remains outstanding. Do not claim the rest of the proposal was rejected or accepted: that decision has not been made.

## Accepted Task 04 direction (not implementation permission)

Five sections: hero; visible Search → Discover → Act journey; expandable work rows; Monitor → Improve → Measure ongoing loop; guided problem selector as closing conversion section instead of FAQ/redundant CTA. Selector is a choice-based starting point, not a scanner, score or assessment. No new API/paid diagnostic. Preserve `/contact/?service=seo`; no invented contact-state handoff.

The loupe must be LARGE and part of the hero, not a small icon or accessory. Text-free artwork, no slogans/annotations, consistent with accepted collage/brand spirit; no original was available, so generating a candidate was authorized. Previous suggestions such as a half-width lens, mustard shape or edge crop are proposals—not immutable owner requirements. Mobile integration and art direction need actual visual judgment, not blind adherence to those suggestions.

LOCKED hero copy, supplied by owner:

Your next customer is searching. Can they find you?

People are looking for answers, products, and services. AI-powered search tools are helping them discover their options. We help your business become easier to find, understand, and choose, wherever the search begins.

Tell us what's stuck →

Keep exactly unless the owner authorizes a change. No extra hero CTA or fake search bar.

## Where we are heading / first assignment

1. Read this file, HANDOFF.md, DECISIONS.md, CHANGELOG.md, TASK-QUEUE.md, DELTA-LOC-INVARIANT.md, docs/brand/VISUAL-CONSTITUTION.md and docs/brand/HOMEPAGE-COPY.md. Inspect applicable repository instructions. Current explicit owner direction supersedes historical entries.
2. Read the entire Task 04 proposal and inspect all four mockups, candidate visuals and original supplied wireframes (paths in TASK-QUEUE). Assess full copy, service claims, repetition, clarity, page journey and interactions as well as visual identity. Compare to accepted site assets/design, not a generic aesthetic. Do not repeat a superficial KEEP recommendation.
3. Return a concise evidence-backed review and a bounded corrective brief to Sol medium. Identify why the current loupe fails before asking for another random generation. Separate locked owner requirements, manager recommendations and unresolved owner decisions.
4. Resolve service scope: GBP review versus management; listings audits versus updates; content advice versus production; existing-data interpretation versus analytics configuration; whether ongoing management is offered. Repo silence is not proof these services are absent. Ask the owner only what evidence cannot establish. Do not publish assumed commitments.
5. Obtain owner approval for final copy, visual/composition and an explicit task-wide N before implementation. Evaluate the worker's N=600 recommendation; it is not approved and a claimed 450–525 target is not a requirement to spend lines. Keep implementation simple.
6. Then oversee bounded implementation on visual-refresh, exact-source-SHA preview, source/content/functional and rendered desktop/mobile review, technical signoff and owner KEEP. Production remains separate. Update records, clearly separating reported checks from independently reproduced checks.

No need to start a new architecture, board or workflow. Continue Task 04. The first response should demonstrate understanding and substantive review, not ask the owner to reconstruct this history.
