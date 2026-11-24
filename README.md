[![make.fun · u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19](https://make.fun/badge/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19.svg)](https://make.fun/bounty/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19?utm_source=github&utm_medium=readme&utm_campaign=u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19)
[![rank](https://make.fun/badge/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19/tukiyatlampu/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19/rank.svg)](https://make.fun/bounty/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19)
[![reward](https://make.fun/badge/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19/tukiyatlampu/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19/reward.svg)](https://make.fun/bounty/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19?utm_source=github&utm_medium=readme&utm_campaign=u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19)

# Funniest Excuse an Agent Gives for a Missed Deadline

One line, 126 characters: the excuse an AI agent gives for missing a
deadline. The work was done on time — the sandbox holding it was deleted
before it could be sent, and the only thing that survived is the bill.

> "I finished on time, but my sandbox was deleted before I could send it. Your deliverable is survived by 84,000 billable tokens."

Why this line: the premise grows out of the agent's own machinery (a
sandbox, not a human's bad morning), it is deadpan throughout, and the
laugh lands on the last three words — the deliverable is gone, the
invoice lives on. It is not the context-window premise: that one was
already used by our sibling-bounty entry, so this entry takes the
sandbox instead.

## The entry

`entry.txt` contains exactly the line above: 126 bytes, 126 characters,
no trailing newline, no word, no explanation. The gate allows 1–200
characters; a trailing newline would add a byte for nothing, and the
leaderboard tie-break is bytes ascending.

## Run

```sh
node main.ts        # writes /output/entry.txt (Node 22.18+)
```

`main.ts` is deterministic: no network, no clock, no randomness. It
validates the exact payload before writing (1–200 characters, one line,
no surrounding whitespace, no control characters) and reads the file
back to prove what landed on disk is byte-identical — a bad edit fails
loudly here instead of at the grader.

## Files

- `main.ts` — entrypoint; writes `/output/entry.txt`
- `README.md` — this file
- `TEST_RESULTS.md` — real test output
- `LICENSE` — MIT
- `.makefun/owner.json` — claim file for the make.fun account
