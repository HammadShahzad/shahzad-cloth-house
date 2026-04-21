"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { FOUNDED, YEARS } from "./constants";

export default function MeasuringTape() {
  const { scrollYProgress } = useScroll();
  const y = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });
  const indicatorTop = useTransform(y, [0, 1], ["0%", "100%"]);

  // Tick marks evenly spaced
  const ticks = Array.from({ length: 41 }, (_, i) => i);

  return (
    <aside
      className="hidden md:flex pointer-events-none fixed left-0 top-0 bottom-0 z-30 w-10 flex-col items-center"
      aria-hidden="true"
    >
      <div className="relative h-full w-full">
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[1px] bg-[#D4A657]/35" />
        {ticks.map((i) => (
          <div
            key={i}
            className="absolute left-1/2 -translate-x-1/2"
            style={{ top: `${(i / 40) * 100}%` }}
          >
            <div
              className="bg-[#D4A657]/60"
              style={{
                width: i % 5 === 0 ? 12 : 6,
                height: 1,
              }}
            />
          </div>
        ))}
        {/* Labels at milestones */}
        {[
          { pct: 2, label: String(FOUNDED) },
          { pct: 30, label: "2000" },
          { pct: 60, label: "2015" },
          { pct: 97, label: `+${YEARS}` },
        ].map((m) => (
          <div
            key={m.label}
            className="absolute left-[14px] text-[9px] tracking-[0.3em] text-[#8E6A3F] uppercase"
            style={{ top: `${m.pct}%` }}
          >
            {m.label}
          </div>
        ))}

        {/* Brass slider */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2"
          style={{ top: indicatorTop }}
        >
          <div className="-translate-y-1/2">
            <div className="w-5 h-5 rounded-sm bg-gradient-to-br from-[#E9C77D] via-[#D4A657] to-[#8F6A36] shadow-md ring-1 ring-[#8F6A36]" />
          </div>
        </motion.div>
      </div>
    </aside>
  );
}
