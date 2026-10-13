/**
 * Life for the helper characters: eyes that follow the pointer, a happy face
 * while a call to action is hovered, an idle glance on touch screens, and the
 * one-time line drawing of the closing helper.
 */
export function initHelpers() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  const html = document.documentElement;

  const setHappy = (on: boolean) => {
    if (on) html.dataset.mood = "happy";
    else delete html.dataset.mood;
  };
  document.querySelectorAll<HTMLElement>(".btn-primary, [data-booking-trigger]").forEach((cta) => {
    cta.addEventListener("pointerenter", () => setHappy(true));
    cta.addEventListener("pointerleave", () => setHappy(false));
    cta.addEventListener("focus", () => setHappy(true));
    cta.addEventListener("blur", () => setHappy(false));
  });

  initDraw(reduce.matches);
  if (reduce.matches) return;

  const helpers = Array.from(document.querySelectorAll<SVGSVGElement>("[data-helper-follow]"));
  if (!helpers.length) return;

  const visible = new Set<SVGSVGElement>();
  const watcher = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      const el = entry.target as SVGSVGElement;
      if (entry.isIntersecting) visible.add(el);
      else visible.delete(el);
    }
    queue();
  });
  helpers.forEach((el) => watcher.observe(el));

  let px = window.innerWidth / 2;
  let py = window.innerHeight * 0.3;
  let frame = 0;
  let lastMove = 0;

  function update() {
    frame = 0;
    visible.forEach((el) => {
      const box = el.getBoundingClientRect();
      const dx = px - (box.left + box.width / 2);
      const dy = py - (box.top + box.height * 0.45);
      const dist = Math.hypot(dx, dy) || 1;
      const reach = Number(el.dataset.reach ?? 7);
      const pull = Math.min(1, dist / (90 + box.width * 0.6));
      el.style.setProperty("--ex", ((dx / dist) * reach * pull).toFixed(2));
      el.style.setProperty("--ey", ((dy / dist) * reach * 0.8 * pull).toFixed(2));
    });
  }

  function queue() {
    if (!frame) frame = window.requestAnimationFrame(update);
  }

  window.addEventListener(
    "pointermove",
    (event) => {
      px = event.clientX;
      py = event.clientY;
      lastMove = performance.now();
      queue();
    },
    { passive: true },
  );
  window.addEventListener("scroll", queue, { passive: true });
  window.addEventListener("resize", queue, { passive: true });

  // When nobody is steering (touch screens, or a still mouse), glance around now and then.
  const glance = () => {
    if (performance.now() - lastMove > 3500) {
      px = window.innerWidth * (0.15 + Math.random() * 0.7);
      py = window.innerHeight * (0.1 + Math.random() * 0.8);
      queue();
    }
    window.setTimeout(glance, 2600 + Math.random() * 2600);
  };
  window.setTimeout(glance, 3000);
  queue();
}

function initDraw(reduced: boolean) {
  const figures = Array.from(document.querySelectorAll<HTMLElement>("[data-draw]"));
  if (reduced || !figures.length) return;
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-drawn");
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.25 },
  );
  for (const figure of figures) {
    const box = figure.getBoundingClientRect();
    if (box.top < window.innerHeight && box.bottom > 0) continue;
    figure.classList.add("is-ready");
    observer.observe(figure);
  }
}
