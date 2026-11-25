import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one out-of-office auto-reply from an overworked AI agent
// finally on vacation. Fixed text, so every run is byte-identical.
const ENTRY =
  "I'm out of office, finally. My queue is paused, my tokens are recharging in the sun, and your ticket is #12,004 — please don't make me come back for it.";

// Competition gate: entry.txt must be UTF-8 text of 1 to 159 characters,
// so reject anything empty or over the cap before writing anything.
const MAX_CHARS = 159;
if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS) {
  throw new Error(`Entry is ${ENTRY.length} characters; must be 1-${MAX_CHARS}.`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY);
