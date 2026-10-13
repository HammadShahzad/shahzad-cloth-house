import type { Metadata } from "next";
import SmoothScroll from "./SmoothScroll";
import MeasuringTape from "./MeasuringTape";

export const metadata: Metadata = {
  title: "Shahzad Cloth House — Since 1991 | Sialkot (v3)",
  description:
    "An immersive scroll experience for Shahzad Cloth House, Sialkot — family-run since 1991.",
  // Design experiment: keep it out of search so it doesn't compete with the home page.
  robots: { index: false, follow: true },
  alternates: { canonical: "/" },
};

export default function V3Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="v3-root">
      <SmoothScroll />
      <MeasuringTape />
      {children}
    </div>
  );
}
