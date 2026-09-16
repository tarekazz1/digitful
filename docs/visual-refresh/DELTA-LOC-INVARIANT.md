# ΔLOC Invariant

Status: **Active**

This file defines a hard implementation constraint for the Digitful project.

## Rule

For every approved implementation, feature, or refactor:

```text
ΔLOC ≤ N
```

where:

```text
ΔLOC = LOC(added) - LOC(removed)
```

`N` is the maximum net increase in lines of code allowed for that task.

The value of `N` is set by the user for each task. It is not a suggestion, target, or guideline. It is a hard invariant.

Examples of possible task budgets:

- normal feature or refactor: `N ≈ 300`
- larger implementation: `N ≈ 600–700`

These are examples only, not automatic defaults.

## Enforcement

1. **N must be known before implementation starts.** If the user has not specified `N`, ask for it rather than silently choosing one.
2. **Measure the whole approved task, not individual commits.** Compare the task's agreed base state with the final implementation candidate.
3. **Do not game the invariant by splitting one logical change across multiple commits.** The task-level ΔLOC is what matters.
4. **Verify the actual diff before calling the task complete.** If `ΔLOC > N`, the implementation does not satisfy the task even if it builds, deploys, or looks correct.
5. **If the requested result cannot reasonably fit within N, stop and say so before expanding scope.** Do not silently exceed the limit.
6. **Large churn is still worth flagging.** A small ΔLOC can hide substantial additions and removals, so total added/removed lines should also be reported when unusually high.

## Counting scope

Use the Git diff for the full approved task as the source of truth.

Count implementation code that is part of the change, including source, styles, templates, tests, scripts, and configuration code. Documentation text and binary assets are not LOC. Generated or machine-managed text files are not silently exempted: if excluding one materially changes the measurement, agree that exclusion before implementation.

## Completion report

Every implementation/refactor completion report should include:

```text
N: <task limit>
LOC added: <A>
LOC removed: <R>
ΔLOC: <A - R>
Invariant: PASS | FAIL
```

A task is not complete when the invariant is `FAIL`.
