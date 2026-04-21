"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { COLLECTIONS } from "../constants";

export default function CollectionsReel() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Track translates from 0 to -(N-1.2)*card
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["8vw", `calc(-${(COLLECTIONS.length - 1) * 38}vw + 20vw)`],
  );

  return (
    <section ref={ref} className="relative h-[520vh] bg-[#0A1024]">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
        {/* Heading */}
        <div className="absolute top-10 left-0 right-0 z-10 px-6 md:px-14 flex items-end justify-between">
          <div>
            <div className="text-[11px] tracking-[0.42em] uppercase text-[#D4A657]">
              The Catalogue
            </div>
            <h2
              className="mt-3 text-[#FAF7ED]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(40px, 6vw, 84px)",
                lineHeight: 1,
              }}
            >
              Collections{" "}
              <em className="text-[#D4A657]" style={{ fontStyle: "italic" }}>
                on the counter.
              </em>
            </h2>
          </div>
          <div className="hidden md:block text-[10px] tracking-[0.4em] uppercase text-[#FAF7ED]/50">
            Scroll ↓ to browse
          </div>
        </div>

        {/* Horizontal track */}
        <motion.ul
          className="flex items-center gap-[6vw] pt-8"
          style={{ x }}
        >
          {COLLECTIONS.map((c, i) => (
            <motion.li
              key={c.name}
              className="shrink-0 w-[32vw] h-[68vh] relative overflow-hidden rounded-sm"
              style={{ background: c.hue }}
              whileHover={{ y: -10, rotate: -1 }}
              transition={{ type: "spring", stiffness: 220, damping: 16 }}
            >
              {/* Weave texture overlay */}
              <div
                className="absolute inset-0 opacity-30 mix-blend-multiply pointer-events-none"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(90deg, rgba(0,0,0,0.12) 0 1px, transparent 1px 4px), repeating-linear-gradient(0deg, rgba(0,0,0,0.12) 0 1px, transparent 1px 5px)",
                }}
              />

              {/* Number tag */}
              <div className="absolute top-6 left-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#0A1024] text-[#D4A657] flex items-center justify-center text-[11px] font-semibold">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="text-[10px] tracking-[0.32em] uppercase text-[#0A1024]/75">
                  {c.season}
                </div>
              </div>

              {/* Urdu label */}
              <div
                className="absolute top-8 right-7 text-[28px]"
                style={{
                  fontFamily: "var(--font-urdu)",
                  direction: "rtl",
                  color: "#0A1024",
                }}
                aria-hidden
              >
                {c.urdu}
              </div>

              {/* Title */}
              <div className="absolute left-6 right-6 bottom-7">
                <div
                  className="text-[#0A1024]"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(28px, 2.6vw, 44px)",
                    lineHeight: 1,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {c.name}
                </div>
                <div className="mt-3 h-px bg-[#0A1024]/40" />
                <div className="mt-3 text-[10px] tracking-[0.3em] uppercase text-[#0A1024]/75">
                  № {String(i + 1).padStart(2, "0")} · In-store year-round
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        {/* Scroll progress bar */}
        <div className="absolute bottom-8 left-0 right-0 px-10">
          <div className="h-px bg-[#FAF7ED]/15">
            <motion.div
              className="h-full bg-[#D4A657]"
              style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
