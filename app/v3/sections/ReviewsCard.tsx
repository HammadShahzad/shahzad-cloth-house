"use client";

import { motion } from "framer-motion";
import { MAPS_URL } from "../constants";

export default function ReviewsCard() {
  return (
    <section className="relative bg-[#F4ECD5] py-28 md:py-40 overflow-hidden">
      <div className="mx-auto max-w-[820px] px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40, rotate: -3 }}
          whileInView={{ opacity: 1, y: 0, rotate: -1.5 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ type: "spring", stiffness: 80, damping: 16 }}
          className="relative bg-white p-10 md:p-14 shadow-[0_30px_60px_-20px_rgba(10,16,36,0.35)] text-center"
        >
          {/* Tape corners */}
          <div className="absolute -top-4 left-10 w-24 h-6 bg-[#F4E7C8]/85 rotate-[-8deg] shadow-sm" />
          <div className="absolute -top-4 right-10 w-24 h-6 bg-[#F4E7C8]/85 rotate-[6deg] shadow-sm" />

          <div className="text-[11px] tracking-[0.42em] uppercase text-[#8E6A3F]">
            Google Business Profile
          </div>
          <h2
            className="mt-5 text-[#0A1024]"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 4.5vw, 56px)",
              lineHeight: 1,
            }}
          >
            What our{" "}
            <em style={{ fontStyle: "italic", color: "#15235C" }}>
              customers
            </em>{" "}
            say.
          </h2>

          {/* Stars stamp in */}
          <div className="mt-8 inline-flex items-center gap-2">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.svg
                key={i}
                viewBox="0 0 24 24"
                className="h-7 w-7 text-[#D4A657]"
                fill="currentColor"
                initial={{ scale: 0, rotate: -30, opacity: 0 }}
                whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 14,
                  delay: 0.3 + i * 0.12,
                }}
              >
                <path d="M12 2l2.9 6.9 7.4.6-5.6 4.9 1.7 7.3L12 17.8l-6.4 3.9 1.7-7.3-5.6-4.9 7.4-.6L12 2z" />
              </motion.svg>
            ))}
          </div>

          <p className="mt-6 max-w-lg mx-auto text-[15px] leading-[1.7] text-[#5A5F73]">
            Read honest reviews from Sialkot customers on our Google listing —
            or leave one of your own after your visit.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0A1024] text-white px-5 py-3 rounded-full text-[12px] tracking-[0.2em] uppercase hover:bg-[#15235C] transition-colors"
            >
              Read Reviews on Google
            </a>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#0A1024]/30 text-[#0A1024] px-5 py-3 rounded-full text-[12px] tracking-[0.2em] uppercase hover:border-[#0A1024] transition-colors"
            >
              Leave a Review
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
