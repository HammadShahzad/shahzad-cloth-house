"use client";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { YEARS } from "../constants";

export default function YearsCounter() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { amount: 0.5, once: true });

  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toString());

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, YEARS, {
      duration: 2.2,
      ease: [0.22, 1, 0.36, 1],
    });
    return () => controls.stop();
  }, [inView, count]);

  return (
    <section ref={ref} className="relative bg-[#0A1740] text-[#FAF7ED] py-40 overflow-hidden">
      {/* Gold ticks */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-24 pointer-events-none">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, transparent 0 64px, rgba(212,166,87,0.35) 64px 65px)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-[11px] tracking-[0.42em] uppercase text-[#D4A657] mb-8"
        >
          At one counter, in Sialkot
        </motion.div>

        <div className="flex items-baseline justify-center gap-4">
          <motion.span
            className="text-[#FAF7ED]"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(160px, 28vw, 400px)",
              lineHeight: 1,
              letterSpacing: "-0.04em",
            }}
          >
            {rounded}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 2 }}
            className="text-[#D4A657]"
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "clamp(40px, 6vw, 100px)",
            }}
          >
            years
          </motion.span>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="mt-6 text-[14px] md:text-[15px] tracking-[0.2em] uppercase text-[#FAF7ED]/70"
        >
          A single shop · A single proprietor · Since 1991
        </motion.div>
      </div>
    </section>
  );
}
