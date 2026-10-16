"use strict";
var quoin = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // tools/quoin/index.ts
  var index_exports = {};
  __export(index_exports, {
    DEFAULT_GRID: () => DEFAULT_GRID,
    baselineWithinLineBox: () => baselineWithinLineBox,
    capHeightIsRasterised: () => capHeightIsRasterised,
    capOvershoot: () => capOvershoot,
    checkBaseline: () => checkBaseline,
    descenderSlack: () => descenderSlack,
    describe: () => describe,
    exportCss: () => exportCss,
    exportCssVerified: () => exportCssVerified,
    fontIsAvailable: () => fontIsAvailable,
    fontShorthand: () => fontShorthand,
    measureFont: () => measureFont,
    offGrid: () => offGrid,
    seatPage: () => seatPage,
    seatingPadding: () => seatingPadding,
    snapLineHeight: () => snapLineHeight,
    summarise: () => summarise,
    textBlocks: () => textBlocks,
    verifyGrid: () => verifyGrid
  });

  // tools/quoin/metrics.ts
  var sharedContext = null;
  function context() {
    if (sharedContext) return sharedContext;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d", { willReadFrequently: false });
    if (!ctx) throw new Error("quoin: no 2d context, cannot measure font metrics");
    sharedContext = ctx;
    return ctx;
  }
  var SIZE_TOKEN = /(-?[\d.]+)(px|pt|pc|in|cm|mm|q|em|rem|ex|ch|vw|vh|vmin|vmax)\b/i;
  function fontSizeFromShorthand(shorthand) {
    const beforeLeading = shorthand.split("/")[0] ?? shorthand;
    const match = SIZE_TOKEN.exec(beforeLeading);
    if (!match) return null;
    const value = Number.parseFloat(match[1]);
    return Number.isFinite(value) ? value : null;
  }
  function measureFont(font, fontSize) {
    const ctx = context();
    ctx.font = font;
    const resolved = ctx.font;
    const box = ctx.measureText("Hxp");
    const caps = ctx.measureText("H");
    const lower = ctx.measureText("x");
    const size = fontSize !== void 0 && Number.isFinite(fontSize) && fontSize > 0 ? fontSize : fontSizeFromShorthand(resolved) ?? fontSizeFromShorthand(font) ?? 16;
    return {
      ascent: box.fontBoundingBoxAscent,
      descent: box.fontBoundingBoxDescent,
      capHeight: caps.actualBoundingBoxAscent,
      xHeight: lower.actualBoundingBoxAscent,
      fontSize: size,
      font: resolved
    };
  }
  var GENERIC_FAMILY = /^(serif|sans-serif|monospace|cursive|fantasy|system-ui|ui-serif|ui-sans-serif|ui-monospace|ui-rounded|math|emoji|fangsong|inherit|initial|unset)$/i;
  function quoteFamily(stack) {
    return stack.split(",").map((part) => {
      const name = part.trim();
      if (name === "") return name;
      if (/^["']/.test(name)) return name;
      if (GENERIC_FAMILY.test(name)) return name;
      return `"${name}"`;
    }).filter((part) => part !== "").join(", ");
  }
  function fontShorthand(style) {
    const { fontStyle, fontWeight, fontSize, fontFamily } = style;
    return `${fontStyle} ${fontWeight} ${fontSize} ${quoteFamily(fontFamily)}`.trim();
  }
  function baselineWithinLineBox(metrics, lineHeight) {
    const contentHeight = metrics.ascent + metrics.descent;
    const halfLeading = (lineHeight - contentHeight) / 2;
    return halfLeading + metrics.ascent;
  }
  function capOvershoot(metrics, lineHeight) {
    return baselineWithinLineBox(metrics, lineHeight) - metrics.capHeight;
  }
  function fontIsAvailable(family, size = 48) {
    const ctx = context();
    const probe = "HAMBURGEFONSTIVhamburgefonstiv";
    ctx.font = `${size}px "${family}", monospace`;
    const withMono = ctx.measureText(probe).width;
    ctx.font = `${size}px "${family}", serif`;
    const withSerif = ctx.measureText(probe).width;
    if (!withMono || !withSerif) return false;
    return Math.abs(withMono - withSerif) < 0.5;
  }
  function capHeightIsRasterised(family = "serif", sizes = [12, 13, 17, 19, 23]) {
    const ctx = context();
    return sizes.every((size) => {
      ctx.font = `400 ${size}px ${family}`;
      return Number.isInteger(ctx.measureText("H").actualBoundingBoxAscent);
    });
  }
  function descenderSlack(metrics, lineHeight) {
    const baseline = baselineWithinLineBox(metrics, lineHeight);
    return lineHeight - baseline - metrics.descent;
  }

  // tools/quoin/grid.ts
  var DEFAULT_GRID = {
    pitch: 8,
    tolerance: 0.5,
    origin: 0
  };
  function checkBaseline(baseline, grid = DEFAULT_GRID) {
    const fromOrigin = baseline - grid.origin;
    const nearestIndex = Math.round(fromOrigin / grid.pitch);
    const nearest = grid.origin + nearestIndex * grid.pitch;
    const drift = baseline - nearest;
    return {
      baseline,
      nearest,
      drift,
      onGrid: Math.abs(drift) <= grid.tolerance
    };
  }
  function snapLineHeight(preferred, grid = DEFAULT_GRID) {
    const steps = Math.ceil(preferred / grid.pitch);
    return Math.max(1, steps) * grid.pitch;
  }
  function seatingPadding(baselineWithinBox, blockTop, grid = DEFAULT_GRID) {
    const current = blockTop + baselineWithinBox;
    const { drift } = checkBaseline(current, grid);
    const top = drift <= 0 ? -drift : grid.pitch - drift;
    return { top, bottom: grid.pitch - top };
  }
  function summarise(results) {
    const off = results.filter((r) => !r.onGrid);
    const drifts = off.map((r) => Math.round(r.drift * 100) / 100);
    const unique = new Set(drifts);
    return {
      total: results.length,
      onGrid: results.length - off.length,
      offGrid: off.length,
      worst: off.reduce((max, r) => Math.max(max, Math.abs(r.drift)), 0),
      systematic: off.length > 1 && unique.size === 1
    };
  }

  // tools/quoin/verify.ts
  var NON_TEXT = /* @__PURE__ */ new Set([
    "SCRIPT",
    "STYLE",
    "NOSCRIPT",
    "TEMPLATE",
    "svg",
    "SVG",
    "CANVAS",
    "IFRAME",
    "OPTION",
    "TEXTAREA",
    "CODE",
    "PRE",
    "KBD",
    "SAMP"
  ]);
  function textBlocks(root = document.body, ignore = []) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, {
      acceptNode(node) {
        const el = node;
        if (NON_TEXT.has(el.tagName)) return NodeFilter.FILTER_REJECT;
        if (ignore.some((sel) => el.matches(sel))) return NodeFilter.FILTER_REJECT;
        const style = getComputedStyle(el);
        if (style.display === "none" || style.visibility === "hidden") {
          return NodeFilter.FILTER_REJECT;
        }
        const ownsText = [...el.childNodes].some(
          (child) => child.nodeType === Node.TEXT_NODE && child.textContent?.trim()
        );
        return ownsText ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      }
    });
    const found = [];
    let current = walker.nextNode();
    while (current) {
      found.push(current);
      current = walker.nextNode();
    }
    return found;
  }
  function describe(el) {
    const parts = [];
    let node = el;
    let depth = 0;
    while (node && depth < 3) {
      const tag = node.tagName.toLowerCase();
      const id = node.id ? `#${node.id}` : "";
      const cls = typeof node.className === "string" && node.className.trim() ? `.${node.className.trim().split(/\s+/)[0]}` : "";
      parts.unshift(`${tag}${id}${cls}`);
      if (node.id) break;
      node = node.parentElement;
      depth++;
    }
    return parts.join(" > ");
  }
  function matchesOnly(selector, el, root) {
    try {
      const found = root.querySelectorAll(selector);
      return found.length === 1 && found[0] === el;
    } catch {
      return false;
    }
  }
  function selectorFor(el, root = document) {
    if (!el.isConnected) return null;
    if (el.id) {
      const byId = `#${CSS.escape(el.id)}`;
      if (matchesOnly(byId, el, root)) return byId;
    }
    const parts = [];
    let node = el;
    while (node && node !== document.documentElement) {
      if (node.id) {
        const anchor = `#${CSS.escape(node.id)}`;
        if (matchesOnly(anchor, node, root)) {
          parts.unshift(anchor);
          break;
        }
      }
      const tag = node.tagName.toLowerCase();
      const parent = node.parentElement;
      if (!parent) {
        parts.unshift(tag);
        break;
      }
      const sameTag = [...parent.children].filter((c) => c.tagName === node.tagName);
      parts.unshift(
        sameTag.length > 1 ? `${tag}:nth-of-type(${sameTag.indexOf(node) + 1})` : tag
      );
      node = parent;
    }
    const selector = parts.join(" > ");
    return selector && matchesOnly(selector, el, root) ? selector : null;
  }
  function verifyGrid(options = {}) {
    const grid = {
      pitch: options.pitch ?? DEFAULT_GRID.pitch,
      tolerance: options.tolerance ?? DEFAULT_GRID.tolerance,
      origin: options.origin ?? DEFAULT_GRID.origin
    };
    const root = options.root ?? document.body;
    const ignore = options.ignore ?? [];
    const results = [];
    const metricCache = /* @__PURE__ */ new Map();
    for (const el of textBlocks(root, ignore)) {
      const rect = el.getBoundingClientRect();
      if (rect.height <= 0) continue;
      const style = getComputedStyle(el);
      const shorthand = fontShorthand(style);
      const fontSize = parseFloat(style.fontSize);
      let metrics = metricCache.get(shorthand);
      if (!metrics) {
        metrics = measureFont(shorthand, fontSize);
        metricCache.set(shorthand, metrics);
      }
      const lineHeight = parseFloat(style.lineHeight) || fontSize * 1.2;
      const within = baselineWithinLineBox(metrics, lineHeight);
      const borderTop = parseFloat(style.borderTopWidth) || 0;
      const padTop = parseFloat(style.paddingTop) || 0;
      const absolute = rect.top + window.scrollY + borderTop + padTop + within;
      const check = checkBaseline(absolute, grid);
      results.push({
        ...check,
        path: describe(el),
        sample: (el.textContent || "").trim().slice(0, 40),
        fontSize,
        lineHeight,
        resolvedFont: metrics.font
      });
    }
    return { results, report: summarise(results), grid };
  }
  function offGrid(results, limit = 10) {
    return results.filter((r) => !r.onGrid).sort((a, b) => Math.abs(b.drift) - Math.abs(a.drift)).slice(0, limit);
  }

  // tools/quoin/seat.ts
  var STAMP = "data-quoin-seat";
  function seatPage(options = {}) {
    const grid = {
      pitch: options.pitch ?? DEFAULT_GRID.pitch,
      tolerance: options.tolerance ?? DEFAULT_GRID.tolerance,
      origin: options.origin ?? DEFAULT_GRID.origin
    };
    const root = options.root ?? document.body;
    const mode = options.mode ?? "full";
    const maxGrowth = options.maxLeadingGrowth ?? 1.35;
    const maxPasses = options.maxPasses ?? 5;
    const original = /* @__PURE__ */ new Map();
    const records = /* @__PURE__ */ new Map();
    let passes = 0;
    for (let pass = 0; pass < maxPasses; pass++) {
      passes = pass + 1;
      const moved = seatOnce(
        root,
        options.ignore ?? [],
        grid,
        mode,
        maxGrowth,
        original,
        records
      );
      if (moved === 0) break;
    }
    const blocks = [...records.values()];
    return {
      blocks,
      grid,
      mode,
      passes,
      undo() {
        for (const [el, was] of original) {
          el.style.paddingTop = was.padding;
          el.style.lineHeight = was.lineHeight;
          el.style.position = was.position;
          el.style.top = was.top;
          el.removeAttribute(STAMP);
        }
      }
    };
  }
  function seatOnce(root, ignore, grid, mode, maxGrowth, original, records) {
    let moved = 0;
    let index = 0;
    for (const node of textBlocks(root, ignore)) {
      const el = node;
      if (el.getBoundingClientRect().height <= 0) continue;
      const style = getComputedStyle(el);
      const fontSize = parseFloat(style.fontSize);
      const leadingFrom = parseFloat(style.lineHeight) || fontSize * 1.2;
      let leadingTo = leadingFrom;
      let partial = false;
      if (mode === "full") {
        const snapped = snapLineHeight(leadingFrom, grid);
        if (snapped / leadingFrom <= maxGrowth) {
          leadingTo = snapped;
        } else {
          partial = true;
        }
      }
      if (!original.has(el)) {
        original.set(el, {
          padding: el.style.paddingTop,
          lineHeight: el.style.lineHeight,
          position: el.style.position,
          top: el.style.top
        });
      }
      const was = original.get(el);
      if (leadingTo !== leadingFrom) el.style.lineHeight = `${leadingTo}px`;
      const nowStyle = getComputedStyle(el);
      const metrics = measureFont(
        fontShorthand(nowStyle),
        parseFloat(nowStyle.fontSize)
      );
      const within = baselineWithinLineBox(metrics, leadingTo);
      const firstBaseline = () => {
        const cs = getComputedStyle(el);
        const rect = el.getBoundingClientRect();
        return rect.top + window.scrollY + (parseFloat(cs.borderTopWidth) || 0) + (parseFloat(cs.paddingTop) || 0) + within;
      };
      const driftBefore = checkBaseline(firstBaseline(), grid).drift;
      const needed = (d) => d <= 0 ? -d : grid.pitch - d;
      const stamp = String(index);
      index++;
      if (Math.abs(driftBefore) <= grid.tolerance) {
        el.setAttribute(STAMP, stamp);
        const prior = records.get(el);
        if (prior) prior.driftAfter = round(driftBefore);
        else {
          records.set(el, {
            path: describe(el),
            selector: selectorFor(el),
            sample: (el.textContent || "").trim().slice(0, 40),
            lever: "padding",
            padTop: 0,
            padTopTo: round(parseFloat(getComputedStyle(el).paddingTop) || 0),
            offset: 0,
            leadingFrom: round(leadingFrom),
            leadingTo: round(leadingTo),
            driftBefore: round(driftBefore),
            driftAfter: round(driftBefore),
            partial
          });
        }
        continue;
      }
      moved++;
      let lever = "padding";
      const existingPad = parseFloat(getComputedStyle(el).paddingTop) || 0;
      el.style.paddingTop = `${existingPad + needed(driftBefore)}px`;
      if (Math.abs(checkBaseline(firstBaseline(), grid).drift) > grid.tolerance) {
        el.style.paddingTop = was.padding;
        if (getComputedStyle(el).position === "static" || el.style.position === "relative") {
          const existingTop = parseFloat(el.style.top) || 0;
          const shift = existingTop + needed(checkBaseline(firstBaseline(), grid).drift);
          el.style.position = "relative";
          el.style.top = `${round(shift)}px`;
          lever = "offset";
          if (Math.abs(checkBaseline(firstBaseline(), grid).drift) > grid.tolerance) {
            el.style.position = was.position;
            el.style.top = was.top;
            lever = "none";
          }
        } else {
          lever = "none";
        }
      }
      el.setAttribute(STAMP, stamp);
      const nowPad = parseFloat(getComputedStyle(el).paddingTop) || 0;
      const finalPad = nowPad - existingPad;
      const existing = records.get(el);
      const nowOffset = el.style.position === "relative" ? parseFloat(el.style.top) || 0 : 0;
      records.set(el, {
        path: existing?.path ?? describe(el),
        selector: existing?.selector ?? selectorFor(el),
        sample: existing?.sample ?? (el.textContent || "").trim().slice(0, 40),
        lever,
        padTop: round((existing?.padTop ?? 0) + finalPad),
        padTopTo: round(nowPad),
        offset: round(nowOffset),
        leadingFrom: round(existing?.leadingFrom ?? leadingFrom),
        leadingTo: round(leadingTo),
        // The first sweep's reading is the one that describes the original page.
        driftBefore: existing?.driftBefore ?? round(driftBefore),
        driftAfter: round(checkBaseline(firstBaseline(), grid).drift),
        partial
      });
    }
    return moved;
  }
  function exportCss(result, options = {}) {
    const important = options.important ?? false;
    const escalate = options.escalate;
    const flagFor = (selector, property) => important || selector && escalate?.has(`${selector} ${property}`) ? " !important" : "";
    const lines = [
      `/* Generated by quoin. Grid: ${result.grid.pitch}px, mode: ${result.mode}. */`,
      `/* Applies to the DOM as measured. Re-run after changing type or copy. */`,
      ...important || escalate?.size ? [
        `/* !important where the page overruled the rule. These were inline`,
        ` * styles, which outrank everything; a structural selector loses to`,
        ` * any class, and one lost line-height takes every block below it off`,
        ` * the grid. Applied only where it was measured to be needed. */`
      ] : [],
      ""
    ];
    const unaddressable = [];
    result.blocks.forEach((block) => {
      const declarations = [];
      if (block.leadingTo !== block.leadingFrom) {
        declarations.push(
          `  line-height: ${block.leadingTo}px${flagFor(block.selector, "line-height")};`
        );
      }
      if (block.padTop > 0.01) {
        declarations.push(
          `  padding-top: ${block.padTopTo}px${flagFor(block.selector, "padding-top")};`
        );
      }
      if (block.offset !== 0) {
        declarations.push(
          `  position: relative${flagFor(block.selector, "position")};`,
          `  top: ${block.offset}px${flagFor(block.selector, "top")};`
        );
      }
      if (!declarations.length) return;
      if (!block.selector) {
        unaddressable.push(`${block.path} "${block.sample.slice(0, 24)}"`);
        return;
      }
      lines.push(`/* ${block.path} "${block.sample.slice(0, 24)}" */`);
      lines.push(`${block.selector} {`, ...declarations, "}", "");
    });
    if (unaddressable.length) {
      lines.push(
        `/* ${unaddressable.length} ${unaddressable.length === 1 ? "block is" : "blocks are"} corrected on the page and not in this stylesheet, because nothing in`,
        ` * the document selects ${unaddressable.length === 1 ? "it" : "them"} on its own. A block inside a shadow root`,
        " * looks like this. They are listed so the gap is visible rather than",
        " * silent:",
        " *",
        ...unaddressable.map((where) => ` *   ${where}`),
        " */",
        ""
      );
    }
    return lines.join("\n");
  }
  function round(n) {
    return Math.round(n * 100) / 100;
  }
  function checkExport(result, css) {
    const style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);
    const lost = [];
    let unmatched = 0;
    let onGrid = 0;
    let total = 0;
    const near = (a, b) => Math.abs(a - b) < 0.5;
    try {
      for (const block of result.blocks) {
        if (!block.selector) continue;
        const el = document.querySelector(block.selector);
        if (!el) {
          unmatched++;
          continue;
        }
        const cs = getComputedStyle(el);
        if (block.leadingTo !== block.leadingFrom) {
          const got = parseFloat(cs.lineHeight);
          if (!near(got, block.leadingTo)) {
            lost.push({
              selector: block.selector,
              property: "line-height",
              wanted: block.leadingTo,
              got
            });
          }
        }
        if (block.padTop > 0.01) {
          const got = parseFloat(cs.paddingTop) || 0;
          if (!near(got, block.padTopTo)) {
            lost.push({
              selector: block.selector,
              property: "padding-top",
              wanted: block.padTopTo,
              got
            });
          }
        }
        if (block.offset !== 0) {
          const got = parseFloat(cs.top) || 0;
          if (!near(got, block.offset)) {
            lost.push({
              selector: block.selector,
              property: "top",
              wanted: block.offset,
              got
            });
          }
        }
      }
      const measured = verifyGrid({
        pitch: result.grid.pitch,
        tolerance: result.grid.tolerance
      });
      onGrid = measured.report.onGrid;
      total = measured.report.total;
    } finally {
      style.remove();
    }
    return { lost, unmatched, onGrid, total };
  }
  function exportCssVerified(result, options = {}) {
    result.undo();
    const plain = exportCss(result, options);
    const first = checkExport(result, plain);
    if (options.important || first.lost.length === 0) {
      return { css: plain, check: first, escalated: 0 };
    }
    const escalate = new Set(first.lost.map((l) => `${l.selector} ${l.property}`));
    const css = exportCss(result, { ...options, escalate });
    return { css, check: checkExport(result, css), escalated: escalate.size };
  }
  return __toCommonJS(index_exports);
})();
