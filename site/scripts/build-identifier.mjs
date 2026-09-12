import { mkdir, rm, writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const outputPath = fileURLToPath(
  new URL("../.well-known/agentflix-build.json", import.meta.url),
);
const sha = process.env.VERCEL_GIT_COMMIT_SHA;

if (!/^[0-9a-fA-F]{40}$/.test(sha ?? "")) {
  await rm(outputPath, { force: true });
  console.error(
    "VERCEL_GIT_COMMIT_SHA must be a 40-character hexadecimal Git SHA.",
  );
  process.exitCode = 1;
} else {
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, `${JSON.stringify({ sha })}\n`, "utf8");
  console.log("Generated .well-known/agentflix-build.json.");
}
