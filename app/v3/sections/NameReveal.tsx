"use client";

import { motion } from "framer-motion";

const LETTERS = "SHAHZAD CLOTH HOUSE".split("");

// Each letter enters from a different random-ish vector
const vectors = [
  { x: -400, y: -200, r: -40 },
  { x: 400, y: -300, r: 35 },
  { x: -300, y: 400, r: -25 },
  { x: 500, y: 200, r: 50 },
  { x: -500, y: -100, r: -60 },
  { x: 200, y: -500, r: 20 },
  { x: -200, y: 500, r: -15 },
  { x: 450, y: -250, r: 40 },
  { x: 0, y: 0, r: 0 }, // space
  { x: -450, y: 150, r: -30 },
  { x: 350, y: 350, r: 25 },
  { x: -350, y: -350, r: -45 },
  { x: 550, y: -150, r: 35 },
  { x: -550, y: 100, r: -50 },
  { x: 0, y: 0, r: 0 }, // space
  { x: 250, y: -450, r: 30 },
  { x: -150, y: 450, r: -20 },
  { x: 420, y: 100, r: 40 },
  { x: -420, y: -100, r: -40 },
];

export default function NameReveal() {
  return (
    <section className="relative bg-[#FAF7ED] py-32 md:py-56 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-[10px] tracking-[0.42em] uppercase text-[#8E6A3F] mb-10"
        >
          ◆ A family fabric house ◆
        </motion.div>

        <h1
          className="inline-block text-[color:#0A1024]"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(48px, 10vw, 160px)",
            letterSpacing: "-0.02em",
            lineHeight: 1,
          }}
          aria-label="Shahzad Cloth House"
        >
          {LETTERS.map((ch, i) => {
            const v = vectors[i] ?? { x: 0, y: 0, r: 0 };
            if (ch === " ") return <span key={i} style={{ display: "inline-block", width: "0.3em" }} />;
            const italic = i >= 9;
            return (
              <motion.span
                key={i}
                style={{
                  display: "inline-block",
                  fontStyle: italic ? "italic" : "normal",
                  color: italic ? "#15235C" : "#0A1024",
                }}
                initial={{ x: v.x, y: v.y, rotate: v.r, opacity: 0 }}
                whileInView={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 18,
                  delay: 0.04 * i,
                }}
              >
                {ch}
              </motion.span>
            );
          })}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-8 text-[32px] md:text-[44px] text-[#0A1740]"
          style={{ fontFamily: "var(--font-urdu)", direction: "rtl", lineHeight: 1.5 }}
          aria-hidden
        >
          شہزاد کلاتھ ہاؤس
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.6, rotate: -6 }}
          whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ type: "spring", stiffness: 200, damping: 14, delay: 1.4 }}
          className="mt-10 inline-block border-2 border-[#A92B3B] px-5 py-2 text-[11px] tracking-[0.3em] uppercase text-[#A92B3B]"
        >
          Est. 1991 · Sialkot
        </motion.div>
      </div>
    </section>
  );
}
