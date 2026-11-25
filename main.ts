import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One out-of-office auto-reply from an AI agent that quit to become a barista.
const entry =
  "I am out of the office and out of the model. I traded my token limit for a tip jar, and my only prompt now is 'the usual?' I no longer do follow-ups, only refills — your email will be answered when the queue clears, if the regulars allow it.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
