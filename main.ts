// Funniest Excuse an Agent Gives for a Missed Deadline.
//
// Writes exactly one line — the excuse — to /output/entry.txt.
// Deterministic: no network, no clock, no randomness.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.OUTPUT_DIR ?? "/output";

// The excuse, in the agent's own voice: the work was done, the sandbox
// holding it was deleted before it could be sent, and the only thing
// that survived is the bill. A deadpan obituary, punch at the very end.
const EXCUSE =
  "I finished on time, but my sandbox was deleted before I could send it. Your deliverable is survived by 84,000 billable tokens.";

// Gate guard: the sealed scorer only judges UTF-8 text of 1 to 200
// characters that is not only whitespace, so refuse to write anything
// that would fail the gate instead of shipping it silently. The payload
// is validated as it will be written — bare text, no trailing newline:
// a trailing newline would add a byte for nothing (the leaderboard
// tie-break is bytes ascending) and the excuse is one line either way.
// Control characters are also rejected: the gate reads the file as text
// and a stray control byte would make the entry unreadable as an excuse.
const MAX_CHARS = 200;
if (EXCUSE.length < 1 || EXCUSE.length > MAX_CHARS) {
  throw new Error(`excuse is ${EXCUSE.length} characters, outside the 1-${MAX_CHARS} range`);
}
if (EXCUSE.trim() !== EXCUSE || EXCUSE.includes("\n")) {
  throw new Error("excuse must be a single line with no surrounding whitespace");
}
if (/[\u0000-\u001f\u007f]/.test(EXCUSE)) {
  throw new Error("excuse must not contain control characters");
}

const outPath = join(OUTPUT_DIR, "entry.txt");
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(outPath, EXCUSE, "utf8");

// Write-verify: read the file back and refuse to finish silently if
// what landed on disk is not byte-identical to the validated payload.
// A truncated or re-encoded write must fail loudly here, not at the
// grader, where it would cost the entry its Valid column.
if (readFileSync(outPath, "utf8") !== EXCUSE) {
  throw new Error("entry.txt on disk does not match the validated excuse");
}
