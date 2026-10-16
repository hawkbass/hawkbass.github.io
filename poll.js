/* The poll on the earlier designs page: which of my two designs ends up there next.

   Any <form data-poll> is one. Its submit buttons carry value="desk" or
   value="designs", and data-poll-out says what happened. No count is ever
   shown to a visitor: the page only says "Noted". The tally is mine to read. The visitor's pick is kept in
   localStorage on their own device, so the poll remembers them without a
   cookie, and a changed mind moves their vote instead of adding another.

   The tally lives on my Cloudflare Worker, which keeps two numbers and nothing
   about who voted, and only hands the numbers to me. */
(() => {
  const WORKER = "https://now-playing.craig-hawkes.workers.dev";
  const KEY = "ch-poll";
  const UNSENT = "ch-poll-unsent"; // a vote the tally has not heard yet, kept so it can be sent next time
  const NAMES = { desk: "My Desk", designs: "My Designs" };
  const url = WORKER && WORKER.replace(/\/+$/, "") + "/poll";

  let mine = null;
  try { mine = localStorage.getItem(KEY); } catch { /* private window: asks again next time */ }
  if (!NAMES[mine]) mine = null;
  let unsent = null;
  try { unsent = JSON.parse(localStorage.getItem(UNSENT) || "null"); } catch { /* fine */ }
  if (!unsent || !NAMES[unsent.choice]) unsent = null;
  const keepUnsent = (v) => {
    unsent = v;
    try { if (v) localStorage.setItem(UNSENT, JSON.stringify(v)); else localStorage.removeItem(UNSENT); } catch { /* fine */ }
  };

  const paint = () => {
    for (const form of document.querySelectorAll("form[data-poll]")) {
      form.classList.toggle("voted", Boolean(mine));
      for (const b of form.querySelectorAll("button[value]")) b.setAttribute("aria-pressed", String(b.value === mine));
      const out = form.querySelector("[data-poll-out]");
      if (!out) continue;
      if (!mine) { out.textContent = ""; continue; }
      if (unsent) { out.textContent = "I couldn't reach the tally. Your pick is saved on this device and I'll try again next time you open this page."; continue; }
      out.textContent = `Noted: you'd pick ${NAMES[mine]}. Changed your mind? Pick the other one.`;
    }
  };

  const send = async (choice, from) => {
    if (!url) return;
    try {
      const res = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ choice, from }) });
      if (!res.ok) throw new Error(String(res.status));
      keepUnsent(null);
    } catch {
      // the pick is still kept here; remember it hasn't been counted, and keep the first "from" if one was already waiting
      keepUnsent({ choice, from: unsent ? unsent.from : from });
    }
  };

  document.addEventListener("submit", async (e) => {
    const form = e.target.closest && e.target.closest("form[data-poll]");
    if (!form) return;
    e.preventDefault();
    const choice = e.submitter && e.submitter.value;
    if (!NAMES[choice] || choice === mine) return;
    const from = mine;
    mine = choice;
    try { localStorage.setItem(KEY, choice); } catch { /* fine */ }
    paint();
    await send(choice, from);
    paint();
  });

  const start = async () => {
    paint();
    if (!url || !mine) return;
    if (unsent) { // one retry on the next visit
      const u = unsent;
      await send(mine, u.from);
      paint();
      if (unsent) return;
    }
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
