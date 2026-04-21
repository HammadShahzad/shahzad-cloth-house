"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function FatherReveal() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Cream sheet lifts up + rotates off
  const sheetY = useTransform(scrollYProgress, [0.2, 0.7], ["0%", "-110%"]);
  const sheetRot = useTransform(scrollYProgress, [0.2, 0.7], [0, -8]);
  const sheetOpacity = useTransform(scrollYProgress, [0.55, 0.8], [1, 0]);

  const captionOp = useTransform(scrollYProgress, [0.55, 0.75], [0, 1]);
  const captionY = useTransform(scrollYProgress, [0.55, 0.75], [20, 0]);

  return (
    <section ref={ref} className="relative bg-[#FAF7ED] py-28 md:py-40">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5 order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8 }}
            className="text-[11px] tracking-[0.42em] uppercase text-[#8E6A3F]"
          >
            The Proprietor
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-5 text-[#0A1024]"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(40px, 5.5vw, 76px)",
              lineHeight: 1,
              letterSpacing: "-0.02em",
            }}
          >
            At the{" "}
            <em
              style={{ fontStyle: "italic", color: "#15235C" }}
            >
              counter.
            </em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 text-[16px] leading-[1.75] text-[#5A5F73] max-w-md"
          >
            The same hands have measured every thaan in this shop since 1991 —
            one proprietor, one counter, one standard of cloth.
          </motion.p>
        </div>

        <div className="md:col-span-7 order-1 md:order-2">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#EAD9B8]">
            {/* Portrait underneath */}
            <Image
              src="/father.jpg"
              alt="The proprietor at the counter, Shahzad Cloth House, Kashmiri Mohalla, Sialkot"
              fill
              sizes="(min-width: 768px) 60vw, 100vw"
              className="object-cover"
              priority={false}
            />

            {/* Cloth cover — a cream sheet that lifts off */}
            <motion.div
              className="absolute inset-0 origin-top"
              style={{
                y: sheetY,
                rotate: sheetRot,
                opacity: sheetOpacity,
                background:
                  "repeating-linear-gradient(90deg, rgba(21,35,92,0.04) 0 1px, transparent 1px 8px), repeating-linear-gradient(0deg, rgba(142,106,63,0.05) 0 1px, transparent 1px 10px), #F4ECD5",
                backgroundBlendMode: "multiply",
                boxShadow: "0 30px 60px rgba(142,106,63,0.18)",
              }}
            >
              <div className="absolute inset-x-0 top-6 text-center text-[10px] tracking-[0.42em] uppercase text-[#8E6A3F]">
                Lift the cloth ↓
              </div>
            </motion.div>

            {/* Caption overlay (appears after cloth lifts) */}
            <motion.div
              className="absolute left-0 right-0 bottom-0 p-6 bg-gradient-to-t from-black/60 via-black/10 to-transparent text-white"
              style={{ opacity: captionOp, y: captionY }}
            >
              <div className="text-[10px] tracking-[0.32em] uppercase text-[#D4A657]">
                The Proprietor
              </div>
              <div
                className="mt-1 text-[20px]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Shahzad Cloth House · Sialkot · Since 1991
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
