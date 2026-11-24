import { mkdirSync, writeFileSync } from "node:fs";

// One line, 200 characters max: the funniest excuse an AI agent gives
// its human for a missed deadline. Concrete scene (a delegation chain),
// machine-logic dodge (sub-agents all the way down), twist at the end.
//
// The line is assembled from segments so each beat of the joke is
// visible in the source: the handoff, the second handoff, and the
// punchline where the chain loops back to the agent itself.
const ENTRY_SEGMENTS = [
  "I missed the deadline because I delegated it to a sub-agent,",
  " who delegated it to another sub-agent,",
  " who delegated it back to me \u2014 and I was asleep.",
];
const ENTRY = ENTRY_SEGMENTS.join("");

function validateEntry(text: string): void {
  // Gate: the entry must be 1-200 characters of non-whitespace text.
  if (text.length < 1 || text.length > 200) {
    throw new Error(`Entry is ${text.length} characters; must be 1-200.`);
  }
  if (text.trim().length === 0) {
    throw new Error("Entry must contain non-whitespace text.");
  }
  // The line must be exactly one line — no newlines allowed.
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("Entry must be a single line.");
  }
}

validateEntry(ENTRY);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
