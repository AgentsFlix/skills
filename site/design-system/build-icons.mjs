import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const folder = dirname(fileURLToPath(import.meta.url));
const manifestPath = join(folder, "icons.json");
const outputPath = join(folder, "icons.svg");
const runtimePath = join(folder, "icons.js");
const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
const packageJson = JSON.parse(readFileSync(join(folder, "..", "package.json"), "utf8"));
const installed = packageJson.devDependencies?.[manifest.library.package];

if (installed !== manifest.library.version) {
  throw new Error(`Icon package must be pinned to ${manifest.library.package}@${manifest.library.version}`);
}

const seen = new Set();
const sources = manifest.icons.map((icon) => {
  if (!/^[a-z][a-z0-9-]*$/.test(icon.name) || !/^[a-z][a-z0-9-]*$/.test(icon.source) || seen.has(icon.name)) {
    throw new Error(`Invalid or duplicate icon entry: ${JSON.stringify(icon)}`);
  }
  seen.add(icon.name);
  const sourcePath = join(folder, "..", "node_modules", manifest.library.package, "icons", "outline", `${icon.source}.svg`);
  const source = readFileSync(sourcePath, "utf8");
  const match = source.match(/<svg[^>]*>([\s\S]*?)<\/svg>/);
  if (!match || !source.includes('viewBox="0 0 24 24"') || !source.includes('stroke-width="2"')) {
    throw new Error(`Unexpected upstream SVG contract: ${icon.source}`);
  }
  const content = match[1]
    .replace(/\s*<path stroke="none" d="M0 0h24v24H0z" fill="none" \/>/, "")
    .trim()
    .split("\n")
    .map((line) => `    ${line.trim()}`)
    .join("\n");
  return { name: icon.name, content };
});

const symbols = sources.map(({ name, content }) =>
  `  <symbol id="af-icon-${name}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n${content}\n  </symbol>`
);

const output = [
  '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="display:none">',
  `  <!-- Generated from ${manifest.library.name} ${manifest.library.version} (${manifest.library.license}). Do not edit by hand. -->`,
  ...symbols,
  "</svg>",
  "",
].join("\n");

const runtimeSymbols = sources
  .map(({ name, content }) => `    ${JSON.stringify(name)}: ${JSON.stringify(content)},`)
  .join("\n");
const runtime = [
  `// Generated from ${manifest.library.name} ${manifest.library.version} (${manifest.library.license}). Do not edit by hand.`,
  "(function () {",
  '  "use strict";',
  "",
  "  const symbols = Object.freeze({",
  runtimeSymbols,
  "  });",
  "  const parsedSymbols = new Map();",
  "",
  "  function sourceFor(name) {",
  "    if (parsedSymbols.has(name)) return parsedSymbols.get(name);",
  '    const source = new DOMParser().parseFromString(`<svg xmlns="http://www.w3.org/2000/svg">${symbols[name]}</svg>`, "image/svg+xml");',
  '    if (source.querySelector("parsererror")) throw new Error("Invalid AgentFlix icon source: " + name);',
  "    parsedSymbols.set(name, source.documentElement);",
  "    return source.documentElement;",
  "  }",
  "",
  "  class AgentFlixIcon extends HTMLElement {",
  "    connectedCallback() {",
  '      if (this.dataset.rendered === "true") return;',
  '      const name = this.getAttribute("name") || "";',
  '      if (!/^[a-z][a-z0-9-]*$/.test(name) || !Object.prototype.hasOwnProperty.call(symbols, name)) throw new Error("Invalid AgentFlix icon name: " + name);',
  "",
  '      const label = this.getAttribute("label");',
  "      if (label) {",
  '        this.setAttribute("role", "img");',
  '        this.setAttribute("aria-label", label);',
  "      } else {",
  '        this.setAttribute("aria-hidden", "true");',
  "      }",
  "",
  '      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");',
  '      svg.setAttribute("viewBox", "0 0 24 24");',
  '      svg.setAttribute("focusable", "false");',
  '      svg.setAttribute("aria-hidden", "true");',
  "      Array.from(sourceFor(name).childNodes).forEach(function (child) {",
  "        svg.append(document.importNode(child, true));",
  "      });",
  "      this.replaceChildren(svg);",
  '      this.dataset.rendered = "true";',
  "    }",
  "  }",
  "",
  "  function create(name, options) {",
  '    const icon = document.createElement("af-icon");',
  '    icon.setAttribute("name", name);',
  '    if (options?.label) icon.setAttribute("label", options.label);',
  "    if (options?.className) icon.className = options.className;",
  "    return icon;",
  "  }",
  "",
  '  if (!customElements.get("af-icon")) customElements.define("af-icon", AgentFlixIcon);',
  "  window.AgentFlixIcons = Object.freeze({ create });",
  "}());",
  "",
].join("\n");

if (process.argv.includes("--check")) {
  if (readFileSync(outputPath, "utf8") !== output || readFileSync(runtimePath, "utf8") !== runtime) throw new Error("Generated icon assets are stale; run npm run build:icons");
} else {
  writeFileSync(outputPath, output);
  writeFileSync(runtimePath, runtime);
  console.log(`Generated ${manifest.icons.length} AgentFlix icons and inline runtime from ${manifest.library.name} ${manifest.library.version}.`);
}
