"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const TAG = "LADIES & GENTS · PREMIER VARIETY · SINCE 1991";

export default function BoltRoll() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Bolt rolls 0 → 100vw
  const boltX = useTransform(scrollYProgress, [0, 1], ["-14%", "114%"]);
  const boltRot = useTransform(scrollYProgress, [0, 1], [0, 1440]);

  // Fabric extends from the bolt leftward — width grows
  const fabricWidth = useTransform(scrollYProgress, [0, 1], ["0%", "108%"]);

  // Tagline types on from 0.35 → 0.95
  const tagReveal = useTransform(scrollYProgress, [0.35, 0.95], [0, TAG.length]);

  return (
    <section ref={ref} className="relative h-[260vh] bg-[#FAF7ED]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        {/* Unrolled fabric */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 h-[56vh] left-0 origin-left overflow-hidden"
          style={{
            width: fabricWidth,
            background:
              "repeating-linear-gradient(90deg, #15235C 0 1px, transparent 1px 6px), repeating-linear-gradient(0deg, #15235C 0 1px, transparent 1px 6px), #eadfc8",
            backgroundBlendMode: "multiply",
            boxShadow: "0 30px 80px rgba(21,35,92,0.12)",
          }}
        >
          {/* Typed tagline on the fabric */}
          <div className="absolute inset-0 flex items-center px-[8%]">
            <motion.div
              className="text-[#0A1024]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 5vw, 72px)",
                letterSpacing: "-0.02em",
                lineHeight: 1.02,
              }}
            >
              <TypedText value={tagReveal} text={TAG} />
            </motion.div>
          </div>
        </motion.div>

        {/* The rolling bolt */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 z-10"
          style={{ left: boltX }}
        >
          <motion.div
            style={{ rotate: boltRot }}
            className="relative"
          >
            <div
              className="w-[52vh] h-[52vh] rounded-full shadow-[0_24px_60px_rgba(21,35,92,0.35)]"
              style={{
                background: `
                  conic-gradient(from 0deg,
                    #15235C 0deg, #1a2a6c 60deg,
                    #15235C 120deg, #1a2a6c 180deg,
                    #15235C 240deg, #1a2a6c 300deg,
                    #15235C 360deg),
                  radial-gradient(circle at 30% 30%, rgba(255,255,255,0.15), transparent 60%)`,
                backgroundBlendMode: "overlay",
                border: "3px solid #D4A657",
              }}
            />
            {/* Bolt end-cap highlight */}
            <div className="absolute inset-[14%] rounded-full border-2 border-[#D4A657]/50" />
            <div className="absolute inset-[30%] rounded-full bg-[#0A1740] border border-[#D4A657]" />
          </motion.div>
        </motion.div>

        {/* Floor shadow */}
        <div className="absolute left-0 right-0 bottom-[16vh] h-10 bg-gradient-to-b from-[#8E6A3F]/20 to-transparent pointer-events-none" />
      </div>
    </section>
  );
}

// Incremental text reveal tied to a MotionValue
function TypedText({
  value,
  text,
}: {
  value: ReturnType<typeof useTransform<number, number>>;
  text: string;
}) {
  const sliced = useTransform(value, (v) => text.slice(0, Math.round(v)));
  return <motion.span>{sliced}</motion.span>;
}
