import Link from "next/link";
import { CATEGORIES } from "../categories";
import {
  ADDRESS,
  BUSINESS_NAME_URDU,
  FACEBOOK_URL,
  FOUNDED,
  INSTAGRAM_URL,
  MAPS_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  TIKTOK_URL,
  WHATSAPP_URL,
} from "../site";
import { Monogram, PhoneGlyph, PinGlyph, WhatsAppGlyph } from "./ui";

const NAV = [
  ...CATEGORIES.filter((c) => c.slug !== "lawn").map((c) => ({ href: `/${c.slug}`, label: c.navLabel })),
  { href: "/lawn", label: "Lawn" },
  { href: "/#visit", label: "Visit" },
];

export function SiteHeader() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-gold focus:text-navy-night focus:px-4 focus:py-2 focus:rounded-full"
      >
        Skip to content
      </a>

      {/* UTILITY BAR */}
      <div className="bg-navy-night text-cream/75 text-[12px]">
        <div className="mx-auto max-w-[1240px] px-5 md:px-10 h-9 flex items-center justify-between gap-4">
          <p className="truncate">
            <span className="text-gold">Open</span> Sat – Thu, 10 am – 10 pm
            <span className="hidden sm:inline"> · Friday after Jumu&apos;ah</span>
          </p>
          <a href={`tel:${PHONE_TEL}`} className="shrink-0 hover:text-gold transition-colors">
            <PhoneGlyph className="inline h-3 w-3 mr-1.5 -mt-0.5" />
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-40 bg-navy-deep/95 backdrop-blur-md border-b border-gold/15">
        <div className="mx-auto max-w-[1240px] px-5 md:px-10 h-16 md:h-[72px] flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3 text-cream" aria-label="Shahzad Cloth House home">
            <Monogram className="h-9 w-9 text-gold shrink-0" />
            <span className="display text-[19px] md:text-[21px] leading-none">
              Shahzad <span className="display-italic text-gold-light">Cloth House</span>
            </span>
          </Link>
          <nav aria-label="Main" className="hidden lg:flex items-center gap-7 text-[14px] text-cream/75">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} className="hover:text-gold transition-colors">
                {n.label}
              </Link>
            ))}
          </nav>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-gold text-navy-night px-4 py-2.5 rounded-md text-[13px] font-semibold hover:bg-gold-light transition-colors"
          >
            <WhatsAppGlyph className="h-4 w-4" />
            Ask on WhatsApp
          </a>
        </div>
        {/* Category links on small screens */}
        <nav aria-label="Collections" className="lg:hidden border-t border-gold/10 overflow-x-auto">
          <div className="flex gap-6 px-5 md:px-10 h-11 items-center text-[13px] text-cream/75 whitespace-nowrap">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} className="hover:text-gold transition-colors">
                {n.label}
              </Link>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <>
      <footer className="bg-navy-night text-cream/75 pt-16 pb-28 md:pb-10">
        <div className="mx-auto max-w-[1240px] px-5 md:px-10">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-6">
              <div className="flex items-center gap-3">
                <Monogram className="h-11 w-11 text-gold" />
                <div className="display text-[30px] text-cream">
                  Shahzad <span className="display-italic foil">Cloth House</span>
                </div>
              </div>
              <p lang="ur" dir="rtl" className="urdu mt-3 text-[24px] text-gold text-left">
                {BUSINESS_NAME_URDU}
              </p>
              <p className="mt-3 text-[14px] leading-[1.7] max-w-[360px]">
                Unstitched fabric for ladies and gents in {ADDRESS.city}, family-run since {FOUNDED}.
              </p>
            </div>
            <FooterCol title="Shop">
              {CATEGORIES.map((c) => (
                <li key={c.slug}>
                  <Link href={`/${c.slug}`} className="hover:text-gold transition-colors">
                    {c.h1.charAt(0).toUpperCase() + c.h1.slice(1)}
                  </Link>
                </li>
              ))}
            </FooterCol>
            <FooterCol title="Visit">
              <li>{ADDRESS.street}</li>
              <li>{ADDRESS.city}, {ADDRESS.region}</li>
              <li className="pt-2">Sat – Thu · 10 am – 10 pm</li>
              <li>Friday after Jumu&apos;ah</li>
              <li className="pt-2">
                <a href={`tel:${PHONE_TEL}`} className="hover:text-gold transition-colors">{PHONE_DISPLAY}</a>
              </li>
            </FooterCol>
            <FooterCol title="Follow">
              <li><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Instagram</a></li>
              <li><a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Facebook</a></li>
              <li><a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">TikTok</a></li>
              <li><a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Google Maps</a></li>
            </FooterCol>
          </div>

          <div className="mt-14 pt-6 border-t border-cream/10 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-[12px] text-cream/50">
            <p>© {FOUNDED} – {new Date().getFullYear()} Shahzad Cloth House, {ADDRESS.city}</p>
            <p>
              Crafted by{" "}
              <a href="https://hammadshahzad.com" target="_blank" rel="noopener noreferrer" className="display-italic text-[14px] text-gold hover:text-cream transition-colors">
                hammadshahzad.com
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* MOBILE ACTION BAR */}
      <nav
        aria-label="Quick contact"
        className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-navy-deep/95 backdrop-blur-md border-t border-gold/20 pb-[env(safe-area-inset-bottom)]"
      >
        <div className="grid grid-cols-3 text-[12px] font-semibold text-cream">
          <a href={`tel:${PHONE_TEL}`} className="flex flex-col items-center gap-1 py-3">
            <PhoneGlyph className="h-5 w-5 text-gold" /> Call
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 py-3 bg-[#25D366] text-[#05290F]">
            <WhatsAppGlyph className="h-5 w-5" /> WhatsApp
          </a>
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 py-3">
            <PinGlyph className="h-5 w-5 text-gold" /> Directions
          </a>
        </div>
      </nav>
    </>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="md:col-span-2">
      <div className="text-[11px] tracking-[0.3em] uppercase text-gold mb-4">{title}</div>
      <ul className="space-y-2 text-[14px]">{children}</ul>
    </div>
  );
}
