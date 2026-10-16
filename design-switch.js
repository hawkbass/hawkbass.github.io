/* Two designs, one site.

   Which one opens at "/" is my call and lives in HOME below: it's the
   whole of next week's switch, one word, then a rebuild. Which one a visitor
   sees once they've tried both is theirs, kept in localStorage on their own
   device and never sent anywhere.

   Loaded in <head>, before anything paints, so a visitor who picked the other
   design is sent there before the wrong one flashes up. It also catches the
   old home page's anchors (/#contact and friends, still linked from the inner
   pages) and points them at the matching section of whichever design this is. */
(() => {
  const HOME = "the-desk";
  const KEY = "ch-design";
  const DESIGNS = { "the-desk": "My Desk", "one-screen": "My Designs" };
  const ALIAS = {
    "the-desk": { contact: "contact", about: "about", money: "web", wrong: "proof" },
    "one-screen": { contact: "hire", about: "hire", money: "web", wrong: "quoin" },
  };
  const urlFor = (d) => (d === HOME ? "/" : `/${d}/`);
  const here = location.pathname.replace(/\/+$/, "/").split("/")[1] || HOME;
  const current = DESIGNS[here] ? here : HOME;

  // the design this visitor is looking at right now, so the inner pages they open from it are drawn in it
  if (DESIGNS[here]) { try { sessionStorage.setItem("ch-viewing", here); } catch { /* fine */ } }

  let pick = null;
  try { pick = localStorage.getItem(KEY); } catch { /* private window: the default it is */ }

  if (location.pathname === "/" && pick && pick !== HOME && DESIGNS[pick]) {
    location.replace(urlFor(pick) + location.hash);
    return;
  }

  const want = location.hash.slice(1);
  const to = ALIAS[current][want];
  if (to && to !== want) history.replaceState(null, "", "#" + to);

  // A switch is any element with data-design-switch="<design>". Its href is set
  // here so it's right whatever HOME is this week, and it works without this
  // script too, it just won't be remembered.
  const wire = () => {
    for (const a of document.querySelectorAll("[data-design-switch]")) {
      a.href = urlFor(a.dataset.designSwitch);
    }
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", wire);
  else wire();

  /* The switch itself, drawn as a pair of moves rather than a cut.
     Desk to Designs: the desk melts, every object dripping off the bottom of
     the screen at its own pace, and then Designs pours in from the top as a
     liquid edge with drips of its own. Designs to Desk: the page lets go and
     falls away, and the desk is dropped in object by object, tumbling and
     landing. Each page plays its own half (see the "ch-leave" and
     data-ch-from hooks in their scripts); this file only stages the handover
     and the pour, a cross-document view transition. Everything that moves is
     a transform or an opacity so it stays on the compositor, which is what
     keeps it smooth on integrated graphics. A browser without view
     transitions, or a visitor who asked for reduced motion, gets the page
     change and nothing else. */
  const VT = "ch-vt";
  const calm = matchMedia("(prefers-reduced-motion: reduce)");
  const root = document.documentElement;
  if (!calm.matches) {
    // arriving from the other design: say so before the first paint, so the page can start from its "before" state
    try {
      const at = sessionStorage.getItem(VT); sessionStorage.removeItem(VT);
      if (at) { const [from, t] = at.split(","); if (DESIGNS[from] && Date.now() - Number(t) < 4000) { root.dataset.chFrom = from; root.dataset.chTo = current; root.dataset.chVt = "1"; } }
    } catch { /* fine */ }
    // the pour: a wavy liquid edge, drawn as a polygon, fingers running ahead of one another as it falls
    const N = 61, edge = (k) => Array.from({ length: N }, (_, i) => {
      // narrow rounded fingers (a cubed sine has soft tips), some running longer than others
      const bump = Math.pow(0.5 + 0.5 * Math.sin(i * 0.52 + 0.4), 3), len = 0.6 + 0.4 * Math.sin(i * 0.09 + 2), wob = 0.08 * Math.sin(i * 0.17);
      return Math.max(0, k * (0.3 + (0.9 * bump * len) + wob)).toFixed(1) + "%";
    });
    const poly = (k) => "polygon(0% 0%, " + edge(k).map((y, i) => (i * 100 / (N - 1)).toFixed(1) + "% " + y).join(", ") + ", 100% 0%)";
    const css = document.createElement("style");
    css.textContent = `
      @view-transition { navigation: auto; }
      html:not([data-ch-vt]) ::view-transition-group(root),
      html:not([data-ch-vt]) ::view-transition-old(root),
      html:not([data-ch-vt]) ::view-transition-new(root) { animation: none; }
      ::view-transition-old(root), ::view-transition-new(root) { mix-blend-mode: normal; animation: none; }
      html[data-ch-to="one-screen"]::view-transition-new(root) { animation: ch-pour 1000ms cubic-bezier(.55,.05,.45,1) both; }
      html[data-ch-to="the-desk"]::view-transition-new(root) { animation: ch-in 320ms ease-out both; }
      @keyframes ch-pour { 0% { clip-path: ${poly(0)}; } 40% { clip-path: ${poly(55)}; } 75% { clip-path: ${poly(120)}; } 100% { clip-path: ${poly(260)}; } }
      @keyframes ch-in { from { opacity: 0; } to { opacity: 1; } }
      /* the desk is empty until its objects are dropped in */
      html[data-ch-from="one-screen"][data-ch-fall] .o:not(.zone), html[data-ch-from="one-screen"][data-ch-fall] .m-obj { opacity: 0; }
    `;
    document.head.appendChild(css);
    root.dataset.chFall = "1";
    // if nothing on this page picks the fall up, don't leave the desk hidden
    setTimeout(() => { delete root.dataset.chFall; }, 3000);
  }

  document.addEventListener("click", (e) => {
    const a = e.target.closest && e.target.closest("[data-design-switch]");
    if (!a || e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const next = a.dataset.designSwitch;
    if (!DESIGNS[next]) return;
    e.preventDefault();
    try { localStorage.setItem(KEY, next); } catch { /* still go, just unremembered */ }
    // the page you're leaving gets to play its half first, and says how long it needs
    const leave = { to: next, ms: 0 };
    if (!calm.matches) {
      document.dispatchEvent(new CustomEvent("ch-leave", { detail: leave }));
      try { sessionStorage.setItem(VT, current + "," + Date.now()); } catch { /* fine */ }
      root.dataset.chVt = "1";
    }
    // the stamp is taken when the new page is about to load, not when the button was pressed
    const go = () => {
      try { if (!calm.matches) sessionStorage.setItem(VT, current + "," + Date.now()); } catch { /* fine */ }
      // "/" now sends this visitor on to their pick, so it takes the place of "/" in the history rather than sitting
      // after it: otherwise Back lands on "/", which redirects straight forward again and Back looks dead
      if (location.pathname === "/" && next !== HOME) location.replace(urlFor(next));
      else location.assign(urlFor(next));
    };
    if (leave.ms > 0) setTimeout(go, leave.ms); else go();
  });
})();
