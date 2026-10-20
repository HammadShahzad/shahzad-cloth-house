import type { Metadata } from "next";
import Link from "next/link";
import { CATEGORIES } from "./categories";
import { SiteFooter, SiteHeader } from "./components/chrome";
import { LinkButton, WhatsAppButton } from "./components/ui";

export const metadata: Metadata = {
  title: { absolute: "Page not found | Shahzad Cloth House" },
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="mx-auto max-w-[1240px] px-5 md:px-10 py-24 md:py-32">
        <p className="eyebrow text-gold-text flex items-center gap-3"><span className="diamond" aria-hidden />Page not found</p>
        <h1 className="display mt-5 text-[46px] md:text-[64px] leading-[1] text-navy-deep max-w-[760px]">
          This page has been <span className="display-italic text-gold-text">folded away.</span>
        </h1>
        <p className="mt-6 text-[17px] leading-[1.7] text-ink/80 max-w-[560px]">
          The link may be old or mistyped. Pick a collection below, or tell us on WhatsApp what you are looking for.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <LinkButton href="/">Back to the home page</LinkButton>
          <WhatsAppButton label="Ask on WhatsApp" />
        </div>
        <ul className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 border-t border-navy/12">
          {CATEGORIES.map((c) => (
            <li key={c.slug} className="border-b border-navy/12">
              <Link href={`/${c.slug}`} className="flex items-center justify-between py-4 text-[17px] font-semibold text-navy-deep hover:text-gold-text">
                {c.h1.charAt(0).toUpperCase() + c.h1.slice(1)}
                <span className="diamond" aria-hidden />
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <SiteFooter />
    </>
  );
}
