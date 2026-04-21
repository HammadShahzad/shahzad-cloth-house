import type { Metadata } from "next";
import SmoothScroll from "./SmoothScroll";
import MeasuringTape from "./MeasuringTape";

export const metadata: Metadata = {
  title: "Shahzad Cloth House — Since 1991 | Sialkot (v3)",
  description:
    "An immersive scroll experience for Shahzad Cloth House, Kashmiri Mohalla, Sialkot — family-run since 1991.",
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
