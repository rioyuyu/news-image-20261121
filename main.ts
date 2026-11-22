// news-image-20261121: the broadsheet "The World in One Day" for Saturday
// 21 November 2026 lives in this repository as entry.png; this program
// copies it to the output directory the grader provides.
// Node 22, standard library only. Run it with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL("./entry.png", import.meta.url), join(outDir, "entry.png"));
