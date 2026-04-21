"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Parcel() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // String untie: pathLength drops from 1 → 0 as we scroll 0–0.35
  const stringLen = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const stringOpacity = useTransform(scrollYProgress, [0.3, 0.45], [1, 0]);

  // 4 paper flaps fold outward 0.25–0.75
  const tl = useTransform(scrollYProgress, [0.25, 0.75], [0, -95]);
  const tr = useTransform(scrollYProgress, [0.25, 0.75], [0, 95]);
  const bl = useTransform(scrollYProgress, [0.3, 0.8], [0, 95]);
  const br = useTransform(scrollYProgress, [0.3, 0.8], [0, -95]);

  // Paper fades 0.7–0.95
  const paperOpacity = useTransform(scrollYProgress, [0.7, 0.95], [1, 0]);
  const labelOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const revealOpacity = useTransform(scrollYProgress, [0.75, 1], [0, 1]);
  const revealScale = useTransform(scrollYProgress, [0.75, 1], [0.9, 1]);

  return (
    <section
      ref={ref}
      className="relative h-[220vh]"
      style={{ background: "#FAF7ED" }}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Hint */}
        <motion.div
          className="absolute top-10 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.4em] uppercase text-[#8E6A3F]"
          style={{ opacity: labelOpacity }}
        >
          Scroll to unwrap ↓
        </motion.div>

        {/* Parcel */}
        <motion.div
          className="relative"
          style={{ width: 360, height: 360, opacity: paperOpacity }}
        >
          {/* Back of the parcel (cream) */}
          <div className="absolute inset-0 bg-[#F4ECD5] shadow-[0_20px_60px_rgba(142,106,63,0.25)]" />

          {/* 4 paper flaps */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[#B08A5C] to-[#8E6A3F] origin-top"
            style={{ rotateX: tl, clipPath: "polygon(0 0, 100% 0, 50% 50%)" }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-bl from-[#B08A5C] to-[#8E6A3F] origin-top"
            style={{ rotateX: tr, clipPath: "polygon(100% 0, 100% 100%, 50% 50%)" }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-tl from-[#B08A5C] to-[#8E6A3F] origin-bottom"
            style={{ rotateX: bl, clipPath: "polygon(0 100%, 100% 100%, 50% 50%)" }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-[#B08A5C] to-[#8E6A3F] origin-bottom"
            style={{ rotateX: br, clipPath: "polygon(0 0, 0 100%, 50% 50%)" }}
          />

          {/* Urdu label on the top flap */}
          <motion.div
            className="absolute inset-x-0 top-[22%] flex items-center justify-center pointer-events-none"
            style={{ opacity: labelOpacity }}
          >
            <div className="bg-[#F5EAD1] border border-[#8E6A3F]/50 px-3 py-1 text-[10px] tracking-[0.3em] uppercase text-[#8E6A3F] rotate-[-3deg]">
              شہزاد · Sialkot · 1991
            </div>
          </motion.div>

          {/* Cross-tied string */}
          <svg
            className="absolute inset-0 pointer-events-none"
            viewBox="0 0 360 360"
          >
            <motion.path
              d="M 180 0 L 180 360"
              stroke="#3b2a16"
              strokeWidth="3"
              fill="none"
              style={{ pathLength: stringLen, opacity: stringOpacity }}
            />
            <motion.path
              d="M 0 180 L 360 180"
              stroke="#3b2a16"
              strokeWidth="3"
              fill="none"
              style={{ pathLength: stringLen, opacity: stringOpacity }}
            />
            {/* Bow at center */}
            <motion.g style={{ opacity: stringOpacity }}>
              <motion.path
                d="M 180 180 Q 150 150, 165 175 Q 180 200, 195 175 Q 210 150, 180 180"
                stroke="#3b2a16"
                strokeWidth="3"
                fill="none"
                style={{ pathLength: stringLen }}
              />
              <motion.path
                d="M 180 180 L 172 210"
                stroke="#3b2a16"
                strokeWidth="3"
                fill="none"
                style={{ pathLength: stringLen }}
              />
              <motion.path
                d="M 180 180 L 188 210"
                stroke="#3b2a16"
                strokeWidth="3"
                fill="none"
                style={{ pathLength: stringLen }}
              />
            </motion.g>
          </svg>
        </motion.div>

        {/* Reveal behind */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
          style={{ opacity: revealOpacity, scale: revealScale }}
        >
          <div className="text-[10px] tracking-[0.42em] uppercase text-[#8E6A3F]">
            Est. 1991 · Kashmiri Mohalla · Sialkot
          </div>
          <div
            className="mt-6 text-[56px] md:text-[84px] leading-none text-[#0A1024]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Shahzad{" "}
            <em
              className="not-italic"
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                color: "#15235C",
              }}
            >
              Cloth House
            </em>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
