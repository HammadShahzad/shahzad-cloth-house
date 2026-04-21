"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  FACEBOOK_URL,
  FOUNDED,
  INSTAGRAM_URL,
  MAPS_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  TIKTOK_URL,
  WA_URL,
} from "../constants";

export default function FooterDrape() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const drapeY = useTransform(scrollYProgress, [0, 0.7], ["-100%", "0%"]);

  return (
    <footer
      ref={ref}
      className="relative overflow-hidden bg-[#0A1740] text-[#FAF7ED]"
    >
      {/* The drape descending from top */}
      <motion.div
        className="pointer-events-none absolute inset-0 origin-top"
        style={{
          y: drapeY,
          background:
            "repeating-linear-gradient(90deg, rgba(212,166,87,0.05) 0 1px, transparent 1px 5px), repeating-linear-gradient(0deg, rgba(212,166,87,0.04) 0 1px, transparent 1px 7px), linear-gradient(180deg, #15235C 0%, #0A1740 70%)",
        }}
      >
        {/* Pleated top edge */}
        <svg
          className="absolute top-0 left-0 right-0 w-full h-10 text-[#0A1740]"
          viewBox="0 0 1200 30"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 Q30,30 60,0 Q90,30 120,0 Q150,30 180,0 Q210,30 240,0 Q270,30 300,0 Q330,30 360,0 Q390,30 420,0 Q450,30 480,0 Q510,30 540,0 Q570,30 600,0 Q630,30 660,0 Q690,30 720,0 Q750,30 780,0 Q810,30 840,0 Q870,30 900,0 Q930,30 960,0 Q990,30 1020,0 Q1050,30 1080,0 Q1110,30 1140,0 Q1170,30 1200,0 L1200,30 L0,30 Z"
            fill="currentColor"
            style={{ transform: "scaleY(-1)", transformOrigin: "center" }}
          />
        </svg>
        {/* Brass pins along top */}
        <div className="absolute top-3 left-0 right-0 flex justify-around px-10">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full bg-gradient-to-br from-[#F4D78A] to-[#8F6A36] ring-1 ring-[#0A1024] shadow"
            />
          ))}
        </div>
      </motion.div>

      <div className="relative mx-auto max-w-[1240px] px-6 md:px-10 pt-28 md:pt-36 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-6">
            <div
              className="text-[44px] md:text-[88px] leading-[0.92]"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
            >
              Shahzad{" "}
              <em
                className="text-[#D4A657]"
                style={{ fontStyle: "italic" }}
              >
                Cloth House
              </em>
            </div>
            <div
              className="mt-3 text-[22px] md:text-[26px] text-[#D4A657]"
              style={{ fontFamily: "var(--font-urdu)", direction: "rtl" }}
              aria-hidden
            >
              شہزاد کلاتھ ہاؤس
            </div>
            <div className="mt-4 text-[11px] tracking-[0.32em] uppercase text-[#FAF7ED]/55">
              Since {FOUNDED} · Kashmiri Mohalla, Sialkot
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10px] tracking-[0.32em] uppercase text-[#D4A657] mb-3">
              Visit
            </div>
            <div className="text-[13.5px] leading-[1.85]">
              Kashmiri Mohalla<br />
              Sialkot — 51310<br />
              Pakistan<br />
              <a href={`tel:${PHONE_TEL}`} className="hover:text-white">
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10px] tracking-[0.32em] uppercase text-[#D4A657] mb-3">
              Follow
            </div>
            <ul className="space-y-1.5 text-[13.5px]">
              <li><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a></li>
              <li><a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">Facebook</a></li>
              <li><a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">TikTok</a></li>
              <li><a href={WA_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">WhatsApp</a></li>
              <li><a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">Google Maps ↗</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/15 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[11px] tracking-[0.24em] uppercase text-[#FAF7ED]/55">
          <div>© {FOUNDED} – {new Date().getFullYear()} · Shahzad Cloth House · Sialkot</div>
          <div className="flex items-center gap-2">
            <span>Crafted by</span>
            <a
              href="https://hammadshahzad.com"
              target="_blank"
              rel="noopener noreferrer"
              className="normal-case tracking-normal text-[14px] text-[#D4A657] hover:text-white transition-colors"
              style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}
            >
              hammadshahzad.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
