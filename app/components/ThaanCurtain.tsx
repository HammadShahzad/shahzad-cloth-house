"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "scl-thaan-seen";
const DURATION_MS = 1720; // 120ms delay + 1600ms animation

export default function ThaanCurtain() {
  const [mounted, setMounted] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Skip if already seen this session or reduced motion preferred.
    const seen =
      typeof window !== "undefined" &&
      window.sessionStorage.getItem(STORAGE_KEY);
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (seen || reduced) return;

    setMounted(true);
    window.sessionStorage.setItem(STORAGE_KEY, "1");

    const t = window.setTimeout(() => setHidden(true), DURATION_MS);
    return () => window.clearTimeout(t);
  }, []);

  if (!mounted || hidden) return null;

  return (
    <div className="thaan-curtain" aria-hidden="true" role="presentation">
      {/* Weave texture layer */}
      <div className="thaan-weave" />

      {/* Brand wordmark sitting on the unrolling fabric */}
      <div className="thaan-mark">
        <div className="display text-[36px] md:text-[56px] text-[color:var(--color-oxblood)] leading-none">
          Shahzad <span className="display-italic">Cloth House</span>
        </div>
        <div className="urdu mt-3 text-[20px] md:text-[26px] text-[color:var(--color-oxblood-deep)]">
          شہزاد کلاتھ ہاؤس
        </div>
        <div className="mt-4 text-[10px] tracking-[0.42em] uppercase text-[color:var(--color-gold-dark)]">
          Since 1991 · Sialkot
        </div>
      </div>

      {/* Spindle — the rolling edge of the thaan */}
      <svg
        className="thaan-spindle"
        viewBox="0 0 80 80"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="40" cy="40" r="36" fill="none" stroke="#D4A657" strokeWidth="1" />
        <circle cx="40" cy="40" r="30" fill="none" stroke="#D4A657" strokeWidth="0.6" strokeDasharray="2 3" />
        <circle cx="40" cy="40" r="3" fill="#D4A657" />
        <line x1="40" y1="8" x2="40" y2="16" stroke="#D4A657" strokeWidth="1" />
        <line x1="40" y1="64" x2="40" y2="72" stroke="#D4A657" strokeWidth="1" />
        <line x1="8" y1="40" x2="16" y2="40" stroke="#D4A657" strokeWidth="1" />
        <line x1="64" y1="40" x2="72" y2="40" stroke="#D4A657" strokeWidth="1" />
      </svg>
    </div>
  );
}
