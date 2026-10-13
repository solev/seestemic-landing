/**
 * Hero app window: plays one helper doing a job from start to finish, then
 * lets visitors switch between example helpers. Without JavaScript, or with
 * reduced motion, every thread simply shows its finished state.
 */
export function initDemo() {
  const root = document.querySelector<HTMLElement>("[data-demo]");
  if (!root) return;

  const tabs = Array.from(root.querySelectorAll<HTMLButtonElement>("[data-thread-tab]"));
  const panels = Array.from(root.querySelectorAll<HTMLElement>("[data-thread]"));
  const list = root.querySelector<HTMLElement>(".side-list");
  const replay = root.querySelector<HTMLButtonElement>("[data-demo-replay]");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  const played = new Set<string>();
  let timers: number[] = [];
  let active: HTMLElement | null = null;

  const later = (ms: number, fn: () => void) => {
    timers.push(window.setTimeout(fn, ms));
  };

  const reveal = (el: Element | null | undefined) => el?.classList.add("is-in");

  function settle() {
    timers.forEach((id) => window.clearTimeout(id));
    timers = [];
    for (const panel of panels) {
      if (!panel.hasAttribute("data-playing")) continue;
      const status = panel.querySelector<HTMLElement>("[data-doc-status]");
      if (status) status.textContent = status.dataset.final ?? status.textContent;
      panel.querySelector<HTMLElement>("[data-doc]")?.removeAttribute("data-sent");
      const field = panel.querySelector<HTMLElement>("[data-composer-text]");
      if (field) field.textContent = "";
      panel.querySelector(".composer")?.classList.remove("has-text", "is-typing");
      panel.querySelector(".is-typing")?.classList.remove("is-typing");
      panel.removeAttribute("data-playing");
      panel.removeAttribute("data-prestart");
    }
    active = null;
    if (replay) replay.hidden = reduce.matches;
  }

  function play(panel: HTMLElement, speed = 1) {
    settle();
    if (reduce.matches) return;
    active = panel;
    played.add(panel.dataset.thread ?? "");
    if (replay) replay.hidden = true;

    panel
      .querySelectorAll(".is-in, .is-running, .is-done, .is-typing")
      .forEach((el) => el.classList.remove("is-in", "is-running", "is-done", "is-typing"));
    panel.setAttribute("data-playing", "");
    panel.removeAttribute("data-prestart");

    const doc = panel.querySelector<HTMLElement>("[data-doc]");
    const status = panel.querySelector<HTMLElement>("[data-doc-status]");
    const owner = panel.querySelector<HTMLElement>('[data-reveal="owner"]');
    const steps = Array.from(panel.querySelectorAll<HTMLElement>("[data-step]"));
    if (doc?.hasAttribute("data-has-sent")) doc.dataset.sent = "false";
    if (status) status.textContent = owner ? "Drafting…" : "Working…";

    let clock = 220;
    later(clock, () => reveal(panel.querySelector('[data-reveal="intro"]')));
    clock += 600 * speed;

    steps.forEach((step, index) => {
      const n = index + 1;
      later(clock, () => {
        step.classList.add("is-in", "is-running");
        if (n === 1) reveal(doc);
      });
      clock += 680 * speed;
      later(clock, () => {
        step.classList.remove("is-running");
        step.classList.add("is-done");
        panel.querySelectorAll(`[data-after-step="${n}"]`).forEach(reveal);
      });
      clock += 140 * speed;
    });

    later(clock, () => {
      if (status) status.textContent = owner ? "Ready for you" : (status.dataset.final ?? "");
    });

    const ask = panel.querySelector('[data-reveal="ask"]');
    if (ask) {
      clock += 380;
      later(clock, () => reveal(ask));
    }

    if (owner) {
      const text = owner.textContent?.trim() ?? "";
      const composer = panel.querySelector(".composer");
      const field = panel.querySelector<HTMLElement>("[data-composer-text]");
      const send = panel.querySelector("[data-composer-send]");
      const perChar = 32;

      clock += 1000;
      later(clock, () => composer?.classList.add("is-typing"));
      for (let c = 1; c <= text.length; c += 1) {
        later(clock + c * perChar, () => {
          if (field) field.textContent = text.slice(0, c);
          composer?.classList.add("has-text");
        });
      }
      clock += text.length * perChar + 420;
      later(clock, () => send?.classList.add("is-pressed"));
      clock += 170;
      later(clock, () => {
        send?.classList.remove("is-pressed");
        composer?.classList.remove("is-typing", "has-text");
        if (field) field.textContent = "";
        reveal(owner);
      });
      clock += 650;
      later(clock, () => {
        if (doc) doc.dataset.sent = "true";
        if (status) status.textContent = status.dataset.final ?? "";
        reveal(panel.querySelector('[data-reveal="system"]'));
      });
    }

    const reply = panel.querySelector('[data-reveal="reply"]');
    clock += owner ? 600 : 260;
    later(clock, () => reply?.classList.add("is-typing"));
    clock += owner ? 1050 : 650;
    later(clock, () => {
      reply?.classList.remove("is-typing");
      reveal(reply);
    });
    clock += 650;
    later(clock, () => {
      if (active === panel) settle();
    });
  }

  function select(index: number, focus = false) {
    const tab = tabs[index];
    const id = tab?.dataset.threadTab;
    if (!tab || !id) return;
    tabs.forEach((item, i) => {
      const on = i === index;
      item.setAttribute("aria-selected", String(on));
      item.tabIndex = on ? 0 : -1;
    });
    panels.forEach((panel) => {
      panel.hidden = panel.dataset.thread !== id;
    });
    if (focus) tab.focus({ preventScroll: true });
    if (list && list.scrollWidth > list.clientWidth) {
      const left = tab.offsetLeft - (list.clientWidth - tab.offsetWidth) / 2;
      list.scrollTo({ left, behavior: reduce.matches ? "auto" : "smooth" });
    }
    const panel = panels.find((item) => item.dataset.thread === id);
    if (!panel) return;
    if (played.has(id)) settle();
    else play(panel, 0.55);
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => select(index));
    tab.addEventListener("keydown", (event) => {
      const keys: Record<string, number> = {
        ArrowDown: (index + 1) % tabs.length,
        ArrowRight: (index + 1) % tabs.length,
        ArrowUp: (index - 1 + tabs.length) % tabs.length,
        ArrowLeft: (index - 1 + tabs.length) % tabs.length,
        Home: 0,
        End: tabs.length - 1,
      };
      if (!(event.key in keys)) return;
      event.preventDefault();
      select(keys[event.key], true);
    });
  });

  replay?.addEventListener("click", () => {
    const panel = panels.find((item) => !item.hidden);
    if (panel) play(panel, panel === panels[0] ? 1 : 0.55);
  });

  if (reduce.matches) {
    settle();
    return;
  }

  // The player is alive, so the no-JS safety timer is no longer needed: the first
  // thread waits at its start frame until it is actually on screen.
  const first = panels[0];
  first?.removeAttribute("data-prestart");
  const observer = new IntersectionObserver(
    (entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      observer.disconnect();
      if (first && !first.hidden && !played.has(first.dataset.thread ?? "")) play(first, 1);
    },
    { threshold: 0.15 },
  );
  observer.observe(root);
}
