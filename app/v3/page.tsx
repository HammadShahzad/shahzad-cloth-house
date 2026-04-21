import { WA_URL } from "./constants";
import Parcel from "./sections/Parcel";
import NameReveal from "./sections/NameReveal";
import BoltRoll from "./sections/BoltRoll";
import YearsCounter from "./sections/YearsCounter";
import FatherReveal from "./sections/FatherReveal";
import CollectionsReel from "./sections/CollectionsReel";
import ThreadedValues from "./sections/ThreadedValues";
import SocialWall from "./sections/SocialWall";
import ReviewsCard from "./sections/ReviewsCard";
import VisitMap from "./sections/VisitMap";
import FooterDrape from "./sections/FooterDrape";

export default function V3Home() {
  return (
    <main className="relative bg-[#FAF7ED]">
      <Parcel />
      <NameReveal />
      <BoltRoll />
      <YearsCounter />
      <FatherReveal />
      <CollectionsReel />
      <ThreadedValues />
      <SocialWall />
      <ReviewsCard />
      <VisitMap />
      <FooterDrape />

      {/* Floating WhatsApp */}
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Shahzad Cloth House"
        className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-50 inline-flex items-center gap-2 bg-[#25D366] text-white pl-4 pr-5 py-3 rounded-full shadow-[0_8px_24px_rgba(37,211,102,0.4)] hover:scale-105 transition-transform"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
          <path d="M20.5 3.5A11.7 11.7 0 0 0 12 0C5.4 0 0 5.4 0 12a12 12 0 0 0 1.6 6L0 24l6.2-1.6A12 12 0 0 0 12 24c6.6 0 12-5.4 12-12a11.7 11.7 0 0 0-3.5-8.5zM12 21.8a9.7 9.7 0 0 1-5-1.4l-.36-.21-3.7.97.99-3.6-.24-.37A9.7 9.7 0 1 1 12 21.8zm5.6-7.3c-.3-.16-1.8-.9-2.1-1s-.5-.16-.7.15-.8 1-1 1.2-.4.2-.7 0a8 8 0 0 1-2.4-1.5 9 9 0 0 1-1.7-2.1c-.18-.3 0-.46.13-.6.13-.13.3-.34.45-.5.15-.17.2-.3.3-.5s.05-.37 0-.52c-.07-.14-.7-1.7-1-2.3-.25-.6-.5-.5-.7-.5h-.6c-.2 0-.55.07-.84.37-.3.3-1.1 1.1-1.1 2.7s1.13 3.13 1.3 3.35a12 12 0 0 0 4.7 4.1c.66.28 1.18.45 1.58.58.66.2 1.27.18 1.75.1.53-.07 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.27-.2-.57-.34z" />
        </svg>
        <span className="text-[12px] tracking-[0.16em] uppercase font-medium">
          WhatsApp
        </span>
      </a>
    </main>
  );
}
