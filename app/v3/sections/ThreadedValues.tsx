"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const VALUES = [
  { t: "Hand-picked", d: "Every bolt chosen direct from Pakistan's finest mills — machines don't know a bad weave, we do." },
  { t: "Fair Price", d: "No inflated tags to discount from. The price is what we'd pay ourselves." },
  { t: "The Promise", d: "If it doesn't hold its colour, its hand, or its word — bring it back. Since 1991." },
];

export default function ThreadedValues() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const threadLen = useTransform(scrollYProgress, [0.15, 0.85], [0, 1]);

  return (
    <section ref={ref} className="relative bg-[#0A1740] text-[#FAF7ED] py-32 md:py-44 overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="text-[11px] tracking-[0.42em] uppercase text-[#D4A657]"
          >
            The Standard
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-5"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(40px, 5.5vw, 80px)",
              lineHeight: 1,
            }}
          >
            Threaded through{" "}
            <em className="text-[#D4A657]" style={{ fontStyle: "italic" }}>
              every cut.
            </em>
          </motion.h2>
        </div>

        {/* Thread line connecting the three values */}
        <div className="relative">
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1200 420"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M 120 80 C 300 40, 500 180, 600 120 C 700 60, 900 200, 1080 140"
              stroke="#D4A657"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="4 6"
              style={{ pathLength: threadLen }}
            />
            {/* Needle tip following the thread */}
            <motion.circle
              cx="0"
              cy="0"
              r="5"
              fill="#D4A657"
              style={{
                offsetDistance: useTransform(threadLen, (v) => `${v * 100}%`),
                offsetPath:
                  "path('M 120 80 C 300 40, 500 180, 600 120 C 700 60, 900 200, 1080 140')",
              }}
            />
          </svg>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 pt-10 pb-10">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.t}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.4 }}
                className="relative"
              >
                {/* Gold pin */}
                <motion.div
                  initial={{ scale: 0, rotate: -30 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 14,
                    delay: 0.55 + i * 0.4,
                  }}
                  className="absolute -top-3 left-0 w-5 h-5 rounded-full bg-gradient-to-br from-[#F4D78A] to-[#8F6A36] ring-2 ring-[#0A1024] shadow-lg"
                />
                <div className="pl-8">
                  <div className="text-[10px] tracking-[0.4em] uppercase text-[#D4A657]">
                    № 0{i + 1}
                  </div>
                  <div
                    className="mt-3 text-[28px] md:text-[36px]"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontStyle: "italic",
                      lineHeight: 1.05,
                    }}
                  >
                    {v.t}
                  </div>
                  <p className="mt-4 text-[14px] md:text-[15px] leading-[1.7] text-[#FAF7ED]/80 max-w-sm">
                    {v.d}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
