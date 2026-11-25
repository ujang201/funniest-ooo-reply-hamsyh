// Funniest One-Line Out-of-Office Reply — entry writer.
//
// The joke is a small boomerang: the sender did the most responsible
// thing possible (answered everything), then immediately undid the
// goodwill by fleeing before anyone could answer back. No beach, no
// inbox pile-up, no "limited access" — just a person who finished the
// job and ran. The line is fixed and deterministic: the same run
// always writes the same bytes.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The three beats of the line, kept apart so the shape of the joke
// is visible: where I am, what I (foolishly) finished, and my escape.
const AWAY_NOTICE = "Out of office until Monday";
const GOOD_DEED = "I answered every email";
const ESCAPE = "then left before anyone could answer me back";

function buildReply(notice: string, deed: string, escape: string): string {
  // Em dash after the notice keeps it reading like a real away
  // message; the comma before the escape sets up the punch.
  return `${notice} — ${deed}, ${escape}.`;
}

// The sealed gate allows 1..160 characters, so refuse loudly here
// instead of shipping a line the scorer would reject.
const MIN_CHARS = 1;
const MAX_CHARS = 160;

function assertWithinGate(line: string): void {
  const length = [...line].length;
  if (length < MIN_CHARS || length > MAX_CHARS) {
    throw new Error(
      `entry is ${length} characters, gate allows ${MIN_CHARS}..${MAX_CHARS}`,
    );
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

function main(): void {
  const outDir = process.env.OUTPUT_DIR || "/output";
  const line = buildReply(AWAY_NOTICE, GOOD_DEED, ESCAPE);
  assertWithinGate(line);
  mkdirSync(outDir, { recursive: true });
  // No trailing newline: the file holds exactly the one line, so
  // its character count is the line's character count.
  writeFileSync(join(outDir, "entry.txt"), line, "utf8");
}

main();
