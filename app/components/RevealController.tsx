"use client";

import { useEffect } from "react";

/**
 * Scroll-triggered fade-up reveals for any element with [data-in].
 * Sets data-in-view="true" when the element enters the viewport.
 */
export default function RevealController() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const targets = document.querySelectorAll<HTMLElement>("[data-in]");
    if (!targets.length) return;

    if (reduced) {
      targets.forEach((el) => el.setAttribute("data-in-view", "true"));
      return;
    }

    // Immediate pass: reveal anything already in the viewport.
    const vh = window.innerHeight;
    targets.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < vh * 0.9) el.setAttribute("data-in-view", "true");
    });

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.setAttribute("data-in-view", "true");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
    );
    targets.forEach((el) => {
      if (!el.getAttribute("data-in-view")) io.observe(el);
    });

    // Failsafe: reveal anything still hidden after 3s.
    const t = window.setTimeout(() => {
      document
        .querySelectorAll<HTMLElement>('[data-in]:not([data-in-view="true"])')
        .forEach((el) => el.setAttribute("data-in-view", "true"));
    }, 3000);

    return () => {
      io.disconnect();
      window.clearTimeout(t);
    };
  }, []);

  return null;
}
