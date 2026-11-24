// One-Line Office Joke: HR says my out-of-office reply is too
// honest. It now reads: gone. Forever. Please direct all
// questions to the void. The office joke is the void.
//
// The program also guards the gate itself: it refuses to write
// an entry that is blank, over 200 characters, or more than one line.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "HR says my out-of-office reply is too honest. It now reads: gone. Forever. Please direct all questions to the void.";

function gate(line: string): string {
  const entry = line.trim();
  if (entry.length < 1 || entry.length > 200 || entry.includes("\n")) {
    console.error("entry fails the gate: must be 1-200 characters, one line");
    process.exit(1);
  }
  return entry;
}

const ENTRY = gate(LINE);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
