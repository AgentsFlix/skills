// Generated from Tabler Icons 3.47.0 (MIT). Do not edit by hand.
(function () {
  "use strict";

  const symbols = Object.freeze({
    "activity": "    <path d=\"M3 12h4l3 8l4 -16l3 8h4\" />",
    "anticipate": "    <path d=\"M3 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0\" />\n    <path d=\"M19 7a2 2 0 1 0 0 -4a2 2 0 0 0 0 4\" />\n    <path d=\"M11 19h5.5a3.5 3.5 0 0 0 0 -7h-8a3.5 3.5 0 0 1 0 -7h4.5\" />",
    "support": "    <path d=\"M3 20l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c3.255 2.777 3.695 7.266 1.029 10.501c-2.666 3.235 -7.615 4.215 -11.574 2.293l-4.7 1\" />",
    "duration": "    <path d=\"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0\" />\n    <path d=\"M12 7v5l3 3\" />",
    "structure": "    <path d=\"M13 5h8\" />\n    <path d=\"M13 9h5\" />\n    <path d=\"M13 15h8\" />\n    <path d=\"M13 19h5\" />\n    <path d=\"M3 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4\" />\n    <path d=\"M3 15a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4\" />",
    "privacy": "    <path d=\"M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3\" />\n    <path d=\"M11 11a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" />\n    <path d=\"M12 12l0 2.5\" />",
    "previous": "    <path d=\"M5 12l14 0\" />\n    <path d=\"M5 12l6 6\" />\n    <path d=\"M5 12l6 -6\" />",
    "next": "    <path d=\"M5 12l14 0\" />\n    <path d=\"M13 18l6 -6\" />\n    <path d=\"M13 6l6 6\" />",
    "down": "    <path d=\"M12 5l0 14\" />\n    <path d=\"M18 13l-6 6\" />\n    <path d=\"M6 13l6 6\" />",
    "external": "    <path d=\"M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6\" />\n    <path d=\"M11 13l9 -9\" />\n    <path d=\"M15 4h5v5\" />",
    "copy": "    <path d=\"M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666\" />\n    <path d=\"M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1\" />",
    "restart": "    <path d=\"M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4\" />\n    <path d=\"M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4\" />",
    "guide": "    <path d=\"M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12\" />\n    <path d=\"M19 16h-12a2 2 0 0 0 -2 2\" />\n    <path d=\"M9 8h6\" />",
    "information": "    <path d=\"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0\" />\n    <path d=\"M12 9h.01\" />\n    <path d=\"M11 12h1v4h1\" />",
    "success": "    <path d=\"M5 12l5 5l10 -10\" />",
    "warning": "    <path d=\"M12 9v4\" />\n    <path d=\"M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0\" />\n    <path d=\"M12 16h.01\" />",
  });
  const parsedSymbols = new Map();

  function sourceFor(name) {
    if (parsedSymbols.has(name)) return parsedSymbols.get(name);
    const source = new DOMParser().parseFromString(`<svg xmlns="http://www.w3.org/2000/svg">${symbols[name]}</svg>`, "image/svg+xml");
    if (source.querySelector("parsererror")) throw new Error("Invalid AgentFlix icon source: " + name);
    parsedSymbols.set(name, source.documentElement);
    return source.documentElement;
  }

  class AgentFlixIcon extends HTMLElement {
    connectedCallback() {
      if (this.dataset.rendered === "true") return;
      const name = this.getAttribute("name") || "";
      if (!/^[a-z][a-z0-9-]*$/.test(name) || !Object.prototype.hasOwnProperty.call(symbols, name)) throw new Error("Invalid AgentFlix icon name: " + name);

      const label = this.getAttribute("label");
      if (label) {
        this.setAttribute("role", "img");
        this.setAttribute("aria-label", label);
      } else {
        this.setAttribute("aria-hidden", "true");
      }

      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("viewBox", "0 0 24 24");
      svg.setAttribute("focusable", "false");
      svg.setAttribute("aria-hidden", "true");
      Array.from(sourceFor(name).childNodes).forEach(function (child) {
        svg.append(document.importNode(child, true));
      });
      this.replaceChildren(svg);
      this.dataset.rendered = "true";
    }
  }

  function create(name, options) {
    const icon = document.createElement("af-icon");
    icon.setAttribute("name", name);
    if (options?.label) icon.setAttribute("label", options.label);
    if (options?.className) icon.className = options.className;
    return icon;
  }

  if (!customElements.get("af-icon")) customElements.define("af-icon", AgentFlixIcon);
  window.AgentFlixIcons = Object.freeze({ create });
}());
