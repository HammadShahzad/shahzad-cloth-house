"use client";

import { motion } from "framer-motion";
import Script from "next/script";
import {
  FACEBOOK_HANDLE,
  FACEBOOK_URL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  TIKTOK_HANDLE,
  TIKTOK_URL,
} from "../constants";

export default function SocialWall() {
  return (
    <section className="relative bg-[#FAF7ED] py-28 md:py-40 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="text-[11px] tracking-[0.42em] uppercase text-[#8E6A3F]"
          >
            Live on Social
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-5 text-[#0A1024]"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(40px, 5.5vw, 80px)",
              lineHeight: 1,
            }}
          >
            From the shop floor,{" "}
            <em style={{ fontStyle: "italic", color: "#15235C" }}>
              weekly.
            </em>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* TikTok Polaroid */}
          <Polaroid label={`TikTok · @${TIKTOK_HANDLE}`} href={TIKTOK_URL} rotate={-3} delay={0}>
            <blockquote
              className="tiktok-embed mx-auto"
              cite={TIKTOK_URL}
              data-unique-id={TIKTOK_HANDLE}
              data-embed-from="oembed"
              data-embed-type="creator"
              style={{ maxWidth: "100%", minWidth: 240 }}
            >
              <section>
                <a target="_blank" rel="noopener noreferrer" href={TIKTOK_URL}>
                  @{TIKTOK_HANDLE}
                </a>
              </section>
            </blockquote>
          </Polaroid>

          {/* Instagram Polaroid */}
          <Polaroid
            label={`Instagram · @${INSTAGRAM_HANDLE}`}
            href={INSTAGRAM_URL}
            rotate={2}
            delay={0.15}
          >
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full min-h-[480px] relative overflow-hidden bg-gradient-to-br from-[#FFE5D5] via-[#FCD6E6] to-[#E2D2F2] flex items-center justify-center group"
            >
              <div className="text-center px-6">
                <div className="inline-flex p-4 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white shadow-lg group-hover:scale-110 transition-transform">
                  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
                  </svg>
                </div>
                <div
                  className="mt-5 text-[22px] text-[#0A1024]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  @{INSTAGRAM_HANDLE}
                </div>
                <div className="mt-2 text-[13px] text-[#5A5F73]">
                  Latest fabrics on Instagram
                </div>
                <div className="mt-6 inline-flex items-center gap-2 text-[11px] tracking-[0.24em] uppercase text-[#15235C] border-b border-[#15235C] pb-1">
                  Open Instagram →
                </div>
              </div>
            </a>
          </Polaroid>

          {/* Facebook Polaroid */}
          <Polaroid label={`Facebook · @${FACEBOOK_HANDLE}`} href={FACEBOOK_URL} rotate={-2} delay={0.3}>
            <iframe
              title="Shahzad Cloth House on Facebook"
              src={`https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(
                FACEBOOK_URL,
              )}&tabs=timeline&width=380&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true`}
              width="100%"
              height="500"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              loading="lazy"
              allow="encrypted-media"
            />
          </Polaroid>
        </div>
      </div>

      <Script src="https://www.tiktok.com/embed.js" strategy="lazyOnload" async />
    </section>
  );
}

function Polaroid({
  label,
  href,
  rotate,
  delay,
  children,
}: {
  label: string;
  href: string;
  rotate: number;
  delay: number;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -220, rotate: rotate * 3 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 12,
        delay,
      }}
      className="relative bg-white shadow-[0_24px_40px_-12px_rgba(10,16,36,0.25)] p-3 pb-5"
    >
      {/* Tape */}
      <div
        className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#F4E7C8]/85 shadow-sm"
        style={{ transform: `translateX(-50%) rotate(${-rotate * 1.5}deg)` }}
      />
      <div className="relative bg-[#F4ECD5]">{children}</div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 block text-center text-[11px] tracking-[0.28em] uppercase text-[#0A1024] hover:text-[#15235C]"
      >
        {label}
      </a>
    </motion.div>
  );
}
