"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  MAPS_EMBED,
  MAPS_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  WA_URL,
} from "../constants";

export default function VisitMap() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Sheer cloth slides up off the map
  const sheerY = useTransform(scrollYProgress, [0.2, 0.6], ["0%", "-105%"]);
  const sheerRot = useTransform(scrollYProgress, [0.2, 0.6], [0, -4]);

  return (
    <section
      ref={ref}
      className="relative bg-[#FAF7ED] py-28 md:py-40 overflow-hidden"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
        <div className="md:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-[11px] tracking-[0.42em] uppercase text-[#8E6A3F]"
          >
            The Address
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-5 text-[#0A1024]"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(40px, 5.5vw, 78px)",
              lineHeight: 1,
              letterSpacing: "-0.02em",
            }}
          >
            Come{" "}
            <em style={{ fontStyle: "italic", color: "#15235C" }}>
              see
            </em>{" "}
            the cloth.
          </motion.h2>

          {/* Postmark stamp */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -14 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -8 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.4 }}
            className="mt-10 inline-block border-2 border-[#A92B3B] px-4 py-3 text-[#A92B3B]"
          >
            <div className="text-[9px] tracking-[0.32em] uppercase text-center">
              Shahzad Cloth House
            </div>
            <div
              className="text-[18px] leading-none mt-1"
              style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}
            >
              Sialkot · Punjab
            </div>
            <div className="text-[9px] tracking-[0.28em] uppercase text-center mt-1">
              PK · 51310
            </div>
          </motion.div>

          <dl className="mt-10 space-y-5 text-[14.5px]">
            <Row label="Address">
              Kashmiri Mohalla<br />
              Sialkot, Punjab — 51310, Pakistan
            </Row>
            <Row label="Phone">
              <a href={`tel:${PHONE_TEL}`} className="text-[#0A1024] hover:text-[#15235C]">
                {PHONE_DISPLAY}
              </a>
            </Row>
            <Row label="WhatsApp">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0A1024] hover:text-[#15235C]"
              >
                Message on WhatsApp →
              </a>
            </Row>
            <Row label="Hours">
              Saturday – Thursday: 10:00 – 22:00<br />
              Friday: after Jumuah prayers
            </Row>
            <Row label="Directions">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-[6px] decoration-[#D4A657] text-[#0A1024] hover:text-[#15235C]"
              >
                Open in Google Maps ↗
              </a>
            </Row>
          </dl>
        </div>

        <div className="md:col-span-7">
          <div className="relative aspect-[4/5] md:aspect-[5/6] w-full overflow-hidden border border-[#0A1024]/15 bg-[#F4ECD5]">
            <iframe
              title="Shahzad Cloth House on Google Maps"
              src={MAPS_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
              allowFullScreen
            />

            {/* Sheer cloth overlay — slides up and off */}
            <motion.div
              className="absolute inset-0 origin-top pointer-events-none"
              style={{
                y: sheerY,
                rotate: sheerRot,
                background:
                  "repeating-linear-gradient(90deg, rgba(21,35,92,0.06) 0 1px, transparent 1px 6px), repeating-linear-gradient(0deg, rgba(142,106,63,0.06) 0 1px, transparent 1px 8px), rgba(244,236,213,0.94)",
                backgroundBlendMode: "multiply",
              }}
            >
              <div className="absolute inset-x-0 top-8 text-center text-[10px] tracking-[0.42em] uppercase text-[#8E6A3F]">
                Lift the cloth ↓
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-12 gap-4 border-b border-[#0A1024]/15 pb-4">
      <dt className="col-span-4 md:col-span-3 text-[10px] tracking-[0.3em] uppercase text-[#8E6A3F] pt-1">
        {label}
      </dt>
      <dd className="col-span-8 md:col-span-9 leading-[1.65]">{children}</dd>
    </div>
  );
}
