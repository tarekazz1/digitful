# Change Budget & Scope Control

Status: **Active**

1. Before implementation, inspect the working tree and establish:
   - The task baseline.
   - The authorized files or areas.
   - N = maximum net LOC increase (added − removed).
   - M = maximum total changed LOC (added + removed).

   Measure N and M from the original task baseline to the final result.

   Preserve pre-existing changes and do not include them in the task's change budget.

   If no scope or budget is provided, propose one before implementation changes; wait for explicit approval. Inspection and preparing a proposal can proceed. Do not assume approval.

2. Both limits apply to the entire task across all affected repositories.

   Count source code, styles, tests, scripts, and configuration.
   Exclude documentation text and binary assets.

   Do not reset or evade the baseline or budget through commits, file moves, formatting changes, generated code, reversions, or splitting the work.

   Ordinary revisions and reversions are allowed. Budgets always use the original baseline-to-final diff, not the sum of intermediate edits.

3. Make only changes necessary to complete the requested task.

   Do not perform unrelated refactoring, dependency updates, file deletion, or behavior changes without explicit approval.

   If necessary work falls outside the authorized scope or would exceed N or M, stop before doing it, explain why, and request approval for the revised scope or budget.

4. Do not sacrifice correctness, readability, tests, or necessary functionality to satisfy the budget.

5. Protect existing functionality.

   Before changing existing behavior, identify functionality that could reasonably be affected and note any relevant pre-existing failures.

   After implementation, verify the requested change and reasonably affected existing functionality using available tests and targeted checks.

   Do not claim a check passed if it was not performed or could not be verified.

6. At completion, report:
   - Added LOC.
   - Removed LOC.
   - Net LOC change.
   - Total changed LOC.
   - Modified files.
   - Any approved scope or budget changes.
   - PASS/FAIL against N, M, and authorized scope.
   - Tests and validation performed.
   - Pre-existing failures and remaining verification limitations.
   - Whether any unrelated functionality was intentionally changed.

7. Passing the change budget does not establish functional correctness.

   Do not declare the task complete if required functionality is broken or verification has failed. If verification is incomplete, report that explicitly.
