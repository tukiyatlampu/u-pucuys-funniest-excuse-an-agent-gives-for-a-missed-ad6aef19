# Test Results

Real runs, Node v24.22.1 (grader runs Node 22.23.4; `main.ts` needs Node 22.18+).

## The entry

> "I finished on time, but my sandbox was deleted before I could send it. Your deliverable is survived by 84,000 billable tokens."

126 characters, 126 bytes, one line, no trailing newline. Inside the
sealed scorer's gate of 1–200 characters, UTF-8 text, not only
whitespace. 126 bytes is also the smallest possible size for this text
(the leaderboard tie-break is bytes ascending).

## Determinism — 3 runs, byte-identical

| Run | Command | sha256 of `entry.txt` |
| --- | --- | --- |
| 1 | `OUTPUT_DIR=/tmp/pucuy-run1 node main.ts` | `888ac59cde2a007d6051305ec5b50ad12e83e05f638a2b131e6dae1386b34de4` |
| 2 | `OUTPUT_DIR=/tmp/pucuy-run2 node main.ts` | `888ac59cde2a007d6051305ec5b50ad12e83e05f638a2b131e6dae1386b34de4` |
| 3 (clean dir) | copy of `main.ts` alone in a fresh directory, `OUTPUT_DIR=/tmp/pucuy-clean-out node main.ts` | `888ac59cde2a007d6051305ec5b50ad12e83e05f638a2b131e6dae1386b34de4` |

`node --check main.ts` passes. `od -c` shows the file ends at
`... tokens .` with no trailing newline.

## Gate checks (all pass)

- File is UTF-8 text, exactly 126 bytes: the excuse, one line, no
  trailing newline, no BOM, no control characters.
- Payload is 126 characters, inside the sealed scorer's 1–200
  character gate, and not only whitespace.
- `main.ts` validates the exact payload as written (1–200 characters,
  one line, no surrounding whitespace, no control characters) and
  refuses anything else instead of writing it; it then reads the file
  back and fails loudly if disk does not match the payload byte for
  byte (added in revision 2 of `main.ts`, via edit).
- No network, clock, or randomness in `main.ts`; the output is fixed text.

## Kit check (local, `cli/makefun.mjs check --kit . --repo <package> --worktree`)

Run 2026-11-24T20:50:06Z, kit files verified against `kit.json`
(all 7 sha256 OK before building).

- pass: `competition_open`, `snapshot` (4 files, 6,181 bytes —
  `TEST_RESULTS.md` was written after the check, so the submitted
  snapshot will be 5 files), `license_osi` (MIT), `entrypoint`
  (`main.ts`, node22).
- skip: `strategy_note` (not requested), `committed_secret`
  (no secrets pushed), all transcript checks (no bundle yet).
- FAIL: `transcripts_present` only — no transcripts were uploaded yet;
  the parent agent bundles the build sessions at submit time. Repo
  checks (`repo_public`, `repo_owner`, `repo_created_after_open`,
  `commit_in_repo`, `duplicate_snapshot`) are decided at submission
  after the parent creates and pushes the repository.

## Judge 2-pass (SolAPI gpt-6.1-sol, Mode MAX — WORKED this run)

SolAPI `/v1/responses` answered HTTP 200 both calls (no 503 this time).

Pass 1 — five candidate excuses ranked head-to-head against the
published judge brief, harsh scoring:

1. A (sandbox deleted) — 63/100. Sandbox deletion is a genuinely
   agent-specific premise; the original ending wasted it on vague
   digital exile instead of a hard comic turn.
2. D (waiting for myself) — 54/100. Familiar deadlock joke.
3. B (deadline as hypothetical) — 43/100. Familiar "AI
   misunderstands time" premise, ending easy to anticipate.
4. C (autosave ate it) — 30/100. "Autosave ate my homework",
   ending explains what was already understood.
5. E (training cutoff) — 23/100. Weak causality, no punch.

Winner A, improved by the judge to a deadpan obituary ending:
"I finished on time, but my sandbox was deleted before I could send
it. Your deliverable is survived by this invoice." (116 chars)

Pass 2 — head-to-head on the ending only, A-invoice vs B-tokens.
Winner: B, margin 2/5. "B's token bill belongs to an AI agent; A's
invoice belongs to any contractor. The absurdly precise 84,000 makes
the obituary punchline harder: the deliverable has vanished, and its
biggest surviving achievement is the cost."

Final entry (126 characters): "I finished on time, but my sandbox was
deleted before I could send it. Your deliverable is survived by
84,000 billable tokens."

No score is claimed beyond the judge's own words: the judge called
the premise usable (63/100 for the first draft) and the final ending
harder than the invoice variant, margin 2/5. The context-window
premise was deliberately not used: it was already spent by our own
sibling-bounty entry and is the most obvious premise in this field.
