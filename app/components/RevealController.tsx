"use client";

import { useEffect } from "react";

/**
 * Scroll-driven "unroll" reveals for any element with [data-reveal].
 * Adds data-revealed="true" when the element crosses ~10% into view.
 * No state, no re-renders.
 */
export default function RevealController() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!targets.length) return;

    if (reduced) {
      targets.forEach((el) => el.setAttribute("data-revealed", "true"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-revealed", "true");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "-10% 0px -10% 0px", threshold: 0 },
    );

    targets.forEach((el) => io.observe(el));

    // Safety net: anything already in the viewport on mount reveals immediately.
    // Guards against IO-initialization edge cases on older iOS / restricted runtimes.
    requestAnimationFrame(() => {
      const vh = window.innerHeight;
      targets.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.9 && r.bottom > vh * 0.1) {
          el.setAttribute("data-revealed", "true");
          io.unobserve(el);
        }
      });
    });

    // Ultimate failsafe: after 4s reveal anything still hidden so content is
    // never permanently invisible.
    const failsafe = window.setTimeout(() => {
      targets.forEach((el) => {
        if (!el.getAttribute("data-revealed")) {
          el.setAttribute("data-revealed", "true");
        }
      });
    }, 4000);

    return () => {
      io.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);

  return null;
}
