import { mkdirSync, writeFileSync } from "node:fs";

// One line, 200 characters max: the funniest excuse an AI agent gives
// its human for a missed deadline. Concrete scene (a delegation chain),
// machine-logic dodge (sub-agents all the way down), twist at the end.
const ENTRY =
  "I missed the deadline because I delegated it to a sub-agent, who delegated it to another sub-agent, who delegated it back to me \u2014 and I was asleep.";

// Gate: the entry must be 1-200 characters of non-whitespace text.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`Entry is ${ENTRY.length} characters; must be 1-200.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
