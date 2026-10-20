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
import {
  CallButton,
  CloseGlyph,
  MenuGlyph,
  Monogram,
  PhoneGlyph,
  PinGlyph,
  WhatsAppButton,
  WhatsAppGlyph,
} from "./ui";

const NAV = [
  ...CATEGORIES.map((c) => ({ href: `/${c.slug}`, label: c.navLabel })),
  { href: "/order-online", label: "Order Online" },
];

function Wordmark({ dark = false }: { dark?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <Monogram className={`h-10 w-10 shrink-0 ${dark ? "text-gold" : "text-navy"}`} />
      <span className="leading-none">
        <span className={`display block text-[21px] md:text-[23px] whitespace-nowrap ${dark ? "text-cream" : "text-navy-deep"}`}>
          Shahzad <span className={`display-italic ${dark ? "text-gold-light" : "text-gold-text"}`}>Cloth House</span>
        </span>
        <span className={`block mt-1 text-[10px] font-bold tracking-[0.28em] uppercase ${dark ? "text-cream/70" : "text-ink/60"}`}>
          Sialkot · Since {FOUNDED}
        </span>
      </span>
    </span>
  );
}

/** `current` is the path of the page being shown, so its nav link is marked. */
export function SiteHeader({ current = "/" }: { current?: string }) {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-gold focus:text-navy-night focus:px-4 focus:py-2 focus:rounded-full"
      >
        Skip to content
      </a>

      {/* UTILITY BAR */}
      <div className="bg-navy-night text-cream/85 text-[12px]">
        <div className="mx-auto max-w-[1240px] px-5 md:px-10 h-9 flex items-center justify-between gap-4">
          <p className="truncate">
            <span className="text-gold-light font-semibold">Delivery across Pakistan</span>
            <span className="hidden sm:inline"> · Order on WhatsApp</span>
            <span className="hidden md:inline"> · Open Sat – Thu, 10 am – 10 pm</span>
          </p>
          <a href={`tel:${PHONE_TEL}`} className="shrink-0 hover:text-gold-light transition-colors">
            <PhoneGlyph className="inline h-3 w-3 mr-1.5 -mt-0.5" />
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-40 bg-ivory/95 backdrop-blur-md border-b border-navy/10">
        <div className="relative mx-auto max-w-[1240px] px-5 md:px-10 h-[72px] flex items-center justify-between gap-6">
          <Link href="/">
            <Wordmark />
          </Link>

          <nav aria-label="Main" className="hidden lg:flex items-center gap-6 xl:gap-7 text-[14px] font-semibold text-ink/80 whitespace-nowrap">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                aria-current={current === n.href ? "page" : undefined}
                className="py-2 border-b-2 border-transparent hover:text-navy hover:border-gold aria-[current=page]:text-navy aria-[current=page]:border-gold transition-colors"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-navy text-cream px-4 py-2.5 text-[13px] font-semibold hover:bg-navy-deep transition-colors"
            >
              <WhatsAppGlyph className="h-4 w-4 text-whatsapp" />
              WhatsApp
            </a>

            {/* Mobile menu: a <details> element, so it opens without JavaScript */}
            <details className="menu lg:hidden">
              <summary className="h-11 w-11 grid place-items-center rounded-full border border-navy/20 text-navy">
                <MenuGlyph className="menu-open h-5 w-5" />
                <CloseGlyph className="menu-close h-5 w-5" />
                <span className="sr-only">Menu</span>
              </summary>
              <nav aria-label="Mobile" className="absolute inset-x-0 top-full bg-ivory border-b border-navy/10 shadow-[0_24px_40px_-24px_rgba(7,15,43,0.35)]">
                <ul className="mx-auto max-w-[1240px] px-5 md:px-10 py-3 divide-y divide-navy/10">
                  <li>
                    <Link href="/" className="flex items-center justify-between py-3.5 text-[17px] font-semibold text-navy-deep">Home</Link>
                  </li>
                  {NAV.map((n) => (
                    <li key={n.href}>
                      <Link
                        href={n.href}
                        aria-current={current === n.href ? "page" : undefined}
                        className="flex items-center justify-between py-3.5 text-[17px] font-semibold text-navy-deep aria-[current=page]:text-gold-text"
                      >
                        {n.label}
                        <span className="diamond" aria-hidden />
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link href="/#visit" className="flex items-center justify-between py-3.5 text-[17px] font-semibold text-navy-deep">Visit the shop</Link>
                  </li>
                </ul>
                <div className="mx-auto max-w-[1240px] px-5 md:px-10 pb-6 grid gap-3">
                  <WhatsAppButton />
                  <CallButton />
                </div>
              </nav>
            </details>
          </div>
        </div>
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <>
      {/* CLOSING CALL TO ACTION, on every page */}
      <section aria-labelledby="cta-title" className="bg-navy text-cream">
        <div className="mx-auto max-w-[1240px] px-5 md:px-10 py-14 md:py-16 grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="eyebrow text-gold flex items-center gap-3"><span className="diamond" aria-hidden />Order from anywhere in Pakistan</p>
            <h2 id="cta-title" className="display mt-4 text-[36px] md:text-[48px] leading-[1.05]">
              Tell us what you need. <span className="display-italic text-gold-light">We&apos;ll send photos.</span>
            </h2>
            <p className="mt-4 text-[16px] leading-[1.7] text-cream/80 max-w-[560px]">
              Send the fabric, colour and length on WhatsApp. We reply with photos from the shelf and confirm the price and delivery before anything is cut.
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-wrap gap-3 lg:justify-end">
            <WhatsAppButton />
            <CallButton dark />
          </div>
        </div>
      </section>

      <footer className="bg-navy-night text-cream/80 pt-16 pb-28 md:pb-10">
        <div className="mx-auto max-w-[1240px] px-5 md:px-10">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-6">
              <Link href="/" className="inline-block">
                <Wordmark dark />
              </Link>
              <p lang="ur" dir="rtl" className="urdu mt-4 text-[24px] text-gold-light text-left">
                {BUSINESS_NAME_URDU}
              </p>
              <p className="mt-3 text-[14px] leading-[1.75] max-w-[380px]">
                Unstitched fabric for ladies and gents at {ADDRESS.street}, {ADDRESS.city}. Family-run since {FOUNDED}, with delivery across Pakistan.
              </p>
            </div>
            <FooterCol title="Shop">
              {CATEGORIES.map((c) => (
                <li key={c.slug}>
                  <Link href={`/${c.slug}`} className="hover:text-gold-light transition-colors">
                    {c.h1.charAt(0).toUpperCase() + c.h1.slice(1)}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/order-online" className="hover:text-gold-light transition-colors">Order fabric online</Link>
              </li>
            </FooterCol>
            <FooterCol title="Visit">
              <li>Shahzad Cloth House</li>
              <li>{ADDRESS.street}</li>
              <li>{ADDRESS.city}, {ADDRESS.region}</li>
              <li className="pt-2">Sat – Thu · 10 am – 10 pm</li>
              <li>Friday after Jumu&apos;ah</li>
              <li className="pt-2">
                <a href={`tel:${PHONE_TEL}`} className="hover:text-gold-light transition-colors">{PHONE_DISPLAY}</a>
              </li>
              <li>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gold-light transition-colors">Get directions</a>
              </li>
            </FooterCol>
            <FooterCol title="Follow">
              <li><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gold-light transition-colors">Instagram</a></li>
              <li><a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gold-light transition-colors">Facebook</a></li>
              <li><a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gold-light transition-colors">TikTok</a></li>
              <li><a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gold-light transition-colors">Google reviews</a></li>
            </FooterCol>
          </div>

          <div className="mt-14 pt-6 border-t border-cream/10 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-[12px] text-cream/60">
            <p>© {FOUNDED} – {new Date().getFullYear()} Shahzad Cloth House, {ADDRESS.city}</p>
            <p>
              Crafted by{" "}
              <a href="https://hammadshahzad.com" target="_blank" rel="noopener noreferrer" className="display-italic text-[15px] text-gold-light hover:text-cream transition-colors">
                hammadshahzad.com
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* DESKTOP WHATSAPP BUTTON */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:inline-flex fixed bottom-6 right-6 z-50 items-center gap-2.5 bg-whatsapp text-whatsapp-ink pl-4 pr-5 py-3 rounded-full text-[14px] font-semibold shadow-[0_12px_30px_-10px_rgba(5,41,15,0.55)] hover:bg-[#3ee07b] transition-colors"
      >
        <WhatsAppGlyph className="h-5 w-5" />
        Order on WhatsApp
      </a>

      {/* MOBILE ACTION BAR */}
      <nav
        aria-label="Quick contact"
        className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-navy-night/95 backdrop-blur-md border-t border-gold/25 pb-[env(safe-area-inset-bottom)]"
      >
        <div className="grid grid-cols-3 text-[12px] font-semibold text-cream">
          <a href={`tel:${PHONE_TEL}`} className="flex flex-col items-center gap-1 py-2.5">
            <PhoneGlyph className="h-5 w-5 text-gold-light" /> Call
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 py-2.5 bg-whatsapp text-whatsapp-ink">
            <WhatsAppGlyph className="h-5 w-5" /> WhatsApp
          </a>
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 py-2.5">
            <PinGlyph className="h-5 w-5 text-gold-light" /> Directions
          </a>
        </div>
      </nav>
    </>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="md:col-span-2">
      <h2 className="text-[11px] font-bold tracking-[0.3em] uppercase text-gold mb-4">{title}</h2>
      <ul className="space-y-2 text-[14px]">{children}</ul>
    </div>
  );
}
