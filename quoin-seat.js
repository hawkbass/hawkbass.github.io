/* Seats the page on a baseline grid with Quoin, my own tool (quoin.craighawkes.dev),
   so these two designs are measured the way Quoin measures everything else.

   Runs once the fonts are in, again if the window changes shape, and twice more
   shortly after load for anything that arrives late. On the desk it only runs in
   the phone layout: the desktop desk is a scaled camera view, where a baseline
   in screen pixels is not a baseline in the page. Quoin's own undo is used
   before each re-seat, so nothing stacks. Skipped if Quoin didn't load. */
(() => {
  if (window.__quoinSeat) return;
  window.__quoinSeat = true;
  const desk = /\/the-desk\//.test(location.pathname) || location.pathname === "/";
  const phone = matchMedia("(max-width: 760px), (max-aspect-ratio: 4/5)");
  /* Fixed bars and rolling labels sit in boxes cut to one line, where a nudge
     onto the grid would clip the words; the email address is set a letter at a
     time, where seating each letter would scatter it. Both are left alone. */
  const IGNORE = [".dock", ".roll", "nav", "[role=\"tablist\"]", ".em a", ".ch", ".h span", ".sp-cols", ".sp-rows", ".sp-n"];
  let seated = null, timer = 0;
  const run = () => {
    if (!window.quoin) return;
    try { if (seated) seated.undo(); } catch { /* fine */ }
    seated = null;
    if (desk && !phone.matches) return;
    try { seated = window.quoin.seatPage({ ignore: IGNORE }); } catch { seated = null; }
  };
  const later = (ms) => { clearTimeout(timer); timer = setTimeout(() => (window.requestIdleCallback ? requestIdleCallback(run, { timeout: 1500 }) : run()), ms); };
  const start = () => {
    const ready = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
    const idle = window.requestIdleCallback ? (f) => requestIdleCallback(f, { timeout: 2000 }) : (f) => setTimeout(f, 0);
    ready.then(() => { run(); setTimeout(() => idle(run), 2500); setTimeout(() => idle(run), 7000); });
  };
  if (document.readyState === "complete") start(); else addEventListener("load", start);
  addEventListener("resize", () => later(350));
})();
