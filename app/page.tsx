import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Shahzad Cloth House — Since 1991 | Kashmiri Mohalla, Sialkot",
  description:
    "Shahzad Cloth House — premium unstitched fabric for ladies and gents in Kashmiri Mohalla, Sialkot. Family-run since 1991.",
  alternates: { canonical: "/" },
};

/* ─────────────────── Data ─────────────────── */

const FOUNDED = 1991;
const YEARS = new Date().getFullYear() - FOUNDED;

const PHONE_DISPLAY = "0300 6143230";
const PHONE_TEL = "+923006143230";
const WA_INTL = "923006143230";
const WA_URL = `https://wa.me/${WA_INTL}?text=${encodeURIComponent(
  "Assalamu alaikum — I saw your website (shahzadclothhouse.com) and wanted to ask about ",
)}`;

const MAPS_URL = "https://maps.app.goo.gl/LvhtWzgEjP6j29mm8";
const MAPS_EMBED =
  "https://www.google.com/maps?q=Shahzad+Cloth+House+Kashmiri+Mohalla+Sialkot&output=embed";

const TIKTOK_HANDLE = "shahzadclothhouseskt";
const TIKTOK_URL = `https://www.tiktok.com/@${TIKTOK_HANDLE}`;
const INSTAGRAM_HANDLE = "shahzadclothhouse";
const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_HANDLE}/`;
const FACEBOOK_HANDLE = "shahzadclothhouseskt";
const FACEBOOK_URL = `https://www.facebook.com/${FACEBOOK_HANDLE}/`;

const COLLECTIONS = [
  "Unstitched Lawn",
  "Wash & Wear",
  "Cotton & Linen",
  "Silk & Jacquard",
  "Wedding Wear",
  "Winter Suiting",
];

/* ─────────────────── Page ─────────────────── */

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Collections />
      <Story />
      <Social />
      <Reviews />
      <Visit />
      <Footer />

      {/* Floating WhatsApp — single persistent CTA */}
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Shahzad Cloth House"
        className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-50 inline-flex items-center gap-2 bg-[#25D366] text-white pl-4 pr-5 py-3 rounded-full shadow-[0_8px_24px_rgba(37,211,102,0.35)] hover:scale-105 transition-transform"
      >
        <WhatsAppIcon className="h-5 w-5" />
        <span className="text-[12px] tracking-[0.16em] uppercase font-medium">
          WhatsApp
        </span>
      </a>
    </main>
  );
}

/* ─────────────────── NAV ─────────────────── */

function Nav() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-sm border-b border-[color:var(--color-line)]">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8 py-4 md:py-5 flex items-center justify-between">
        <a href="#top" className="display text-[18px] md:text-[20px] leading-none">
          Shahzad <span className="display-italic">Cloth House</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-[13.5px] text-[color:var(--color-muted)]">
          <a href="#collections" className="hover:text-[color:var(--color-navy)]">Collections</a>
          <a href="#story" className="hover:text-[color:var(--color-navy)]">About</a>
          <a href="#social" className="hover:text-[color:var(--color-navy)]">Social</a>
          <a href="#visit" className="hover:text-[color:var(--color-navy)]">Visit</a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={`tel:${PHONE_TEL}`}
            className="hidden sm:inline-flex items-center gap-1.5 text-[12.5px] tracking-[0.12em] uppercase text-[color:var(--color-ink)] hover:text-[color:var(--color-navy)]"
          >
            <PhoneIcon className="h-3.5 w-3.5" />
            {PHONE_DISPLAY}
          </a>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[color:var(--color-navy)] text-white px-4 py-2 rounded-full text-[12px] tracking-[0.14em] uppercase hover:bg-[color:var(--color-navy-deep)] transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}

/* ─────────────────── HERO ─────────────────── */

function Hero() {
  return (
    <section id="top" className="relative">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8 pt-14 md:pt-24 pb-16 md:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">
          {/* Left */}
          <div className="md:col-span-6 lg:col-span-7 order-2 md:order-1">
            <div
              className="fade-up inline-flex items-center gap-2.5 text-[11px] tracking-[0.32em] uppercase text-[color:var(--color-gold-dark)]"
              style={{ ["--d" as string]: "0ms" }}
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--color-gold)]" />
              Since {FOUNDED} · Kashmiri Mohalla, Sialkot
            </div>

            <h1
              className="display fade-up mt-6 text-[48px] sm:text-[64px] md:text-[76px] lg:text-[92px] text-[color:var(--color-ink)]"
              style={{ ["--d" as string]: "120ms" }}
            >
              Shahzad{" "}
              <span className="display-italic text-[color:var(--color-navy)]">
                Cloth House
              </span>
            </h1>

            <div
              className="urdu fade-up mt-6 text-[28px] md:text-[34px] text-[color:var(--color-navy-deep)]"
              style={{ ["--d" as string]: "220ms" }}
              aria-hidden
            >
              شہزاد کلاتھ ہاؤس
              <div className="urdu text-[18px] md:text-[22px] text-[color:var(--color-gold-dark)] mt-1">
                ورائٹی کا اعلیٰ مرکز
              </div>
            </div>

            <p
              className="fade-up mt-7 max-w-[520px] text-[15.5px] md:text-[17px] leading-[1.6] text-[color:var(--color-muted)]"
              style={{ ["--d" as string]: "320ms" }}
            >
              Ladies &amp; Gents · Premier variety of unstitched fabric.
              A single family shop in Sialkot, {YEARS} years in.
            </p>

            <div
              className="fade-up mt-9 flex flex-wrap items-center gap-3"
              style={{ ["--d" as string]: "420ms" }}
            >
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-full text-[13px] tracking-[0.18em] uppercase"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center gap-2 bg-[color:var(--color-navy)] text-white px-5 py-3 rounded-full text-[13px] tracking-[0.18em] uppercase hover:bg-[color:var(--color-navy-deep)] transition-colors"
              >
                Call {PHONE_DISPLAY}
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[color:var(--color-line)] text-[color:var(--color-ink)] px-5 py-3 rounded-full text-[13px] tracking-[0.18em] uppercase hover:border-[color:var(--color-ink)] transition-colors"
              >
                Directions
              </a>
            </div>
          </div>

          {/* Right — father portrait */}
          <div className="md:col-span-6 lg:col-span-5 order-1 md:order-2">
            <figure
              className="fade-up relative aspect-[4/5] w-full overflow-hidden bg-[color:var(--color-paper-2)]"
              style={{ ["--d" as string]: "200ms" }}
            >
              <Image
                src="/father.jpg"
                alt="The proprietor of Shahzad Cloth House at the counter, Kashmiri Mohalla, Sialkot"
                fill
                sizes="(min-width: 1024px) 42vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover"
                priority
              />
              <div className="absolute left-0 right-0 bottom-0 p-5 bg-gradient-to-t from-black/55 via-black/15 to-transparent text-white">
                <div className="text-[10px] tracking-[0.32em] uppercase text-[color:var(--color-gold)]">
                  The Proprietor
                </div>
                <div className="display text-[20px] mt-1.5">
                  Shahzad Cloth House, Sialkot
                </div>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── COLLECTIONS ─────────────────── */

function Collections() {
  return (
    <section id="collections" className="bg-[color:var(--color-paper-2)] border-y border-[color:var(--color-line)]">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8 py-20 md:py-28">
        <div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
          data-in
        >
          <div>
            <div className="text-[11px] tracking-[0.32em] uppercase text-[color:var(--color-gold-dark)]">
              What we stock
            </div>
            <h2 className="display text-[36px] md:text-[52px] mt-4 text-[color:var(--color-ink)]">
              Collections
            </h2>
          </div>
          <p className="max-w-[380px] text-[14.5px] leading-[1.65] text-[color:var(--color-muted)]">
            Hand-picked bolts from Pakistan&apos;s finest mills. Cut to your length,
            year-round — for ladies and gents.
          </p>
        </div>

        <ul className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[color:var(--color-line)]">
          {COLLECTIONS.map((name, i) => (
            <li
              key={name}
              className="bg-[color:var(--color-paper-2)] px-6 py-10 md:py-14 text-center lift cursor-default"
              data-in
              style={{ ["--d" as string]: `${i * 60}ms` }}
            >
              <div className="text-[10px] tracking-[0.32em] uppercase text-[color:var(--color-gold-dark)]">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="display text-[22px] md:text-[26px] mt-3 text-[color:var(--color-ink)]">
                {name}
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center text-[13px] text-[color:var(--color-muted)]" data-in>
          Looking for something specific?{" "}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[color:var(--color-navy)] underline underline-offset-4 decoration-[color:var(--color-gold)]"
          >
            Ask us on WhatsApp
          </a>
          .
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── STORY ─────────────────── */

function Story() {
  return (
    <section id="story" className="py-20 md:py-28">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-5" data-in>
          <div className="text-[11px] tracking-[0.32em] uppercase text-[color:var(--color-gold-dark)]">
            Since {FOUNDED}
          </div>
          <h2 className="display text-[42px] md:text-[60px] mt-4 leading-[1.02] text-[color:var(--color-ink)]">
            A single shop,<br />
            <span className="display-italic text-[color:var(--color-navy)]">
              kept honestly.
            </span>
          </h2>
        </div>

        <div
          className="md:col-span-7 space-y-5 text-[16px] md:text-[17px] leading-[1.75] text-[color:var(--color-muted)]"
          data-in
          style={{ ["--d" as string]: "120ms" }}
        >
          <p>
            Shahzad Cloth House has stood in Kashmiri Mohalla, Sialkot since{" "}
            <strong className="text-[color:var(--color-ink)]">{FOUNDED}</strong>.
            One shop, one proprietor, one counter — that&apos;s the whole business.
          </p>
          <p>
            We stock premium unstitched fabric for ladies and gents — lawn,
            wash &amp; wear, cotton, linen, silk, jacquard, wedding wear, and
            winter suiting — hand-picked from the country&apos;s finest mills.
          </p>
          <p>
            <span className="display-italic text-[color:var(--color-ink)]">
              Come see the cloth.
            </span>{" "}
            Hold it to the light, feel the hand, take a cup of tea. {YEARS} years
            later, that&apos;s still how we like to do it.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── SOCIAL ─────────────────── */

function Social() {
  return (
    <section
      id="social"
      className="bg-[color:var(--color-paper-2)] border-y border-[color:var(--color-line)] py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10" data-in>
          <div>
            <div className="text-[11px] tracking-[0.32em] uppercase text-[color:var(--color-gold-dark)]">
              Live on social
            </div>
            <h2 className="display text-[36px] md:text-[52px] mt-4 text-[color:var(--color-ink)]">
              New arrivals, weekly
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            <SocialPill href={TIKTOK_URL} label={`@${TIKTOK_HANDLE}`} icon={<TikTokIcon className="h-3.5 w-3.5" />} bg="bg-black" />
            <SocialPill
              href={INSTAGRAM_URL}
              label={`@${INSTAGRAM_HANDLE}`}
              icon={<InstagramIcon className="h-3.5 w-3.5" />}
              bg="bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]"
            />
            <SocialPill href={FACEBOOK_URL} label={`@${FACEBOOK_HANDLE}`} icon={<FacebookIcon className="h-3.5 w-3.5" />} bg="bg-[#1877F2]" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* TikTok */}
          <div
            className="bg-white border border-[color:var(--color-line)] p-4 flex flex-col"
            data-in
          >
            <PanelHeader icon={<TikTokIcon className="h-3.5 w-3.5" />} label={`TikTok · @${TIKTOK_HANDLE}`} />
            <div className="flex-1 min-h-[540px]">
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
            </div>
          </div>

          {/* Instagram */}
          <div
            className="bg-white border border-[color:var(--color-line)] p-4 flex flex-col"
            data-in
            style={{ ["--d" as string]: "80ms" }}
          >
            <PanelHeader icon={<InstagramIcon className="h-3.5 w-3.5" />} label={`Instagram · @${INSTAGRAM_HANDLE}`} />
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-h-[540px] relative overflow-hidden bg-gradient-to-br from-[#FFE5D5] via-[#FCD6E6] to-[#E2D2F2] flex items-center justify-center group"
            >
              <div className="relative text-center px-6">
                <div className="inline-flex p-4 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white shadow-lg group-hover:scale-110 transition-transform">
                  <InstagramIcon className="h-8 w-8" />
                </div>
                <div className="display text-[24px] mt-5">@{INSTAGRAM_HANDLE}</div>
                <div className="text-[13px] mt-2 text-[color:var(--color-muted)]">
                  Latest fabrics on Instagram
                </div>
                <div className="mt-6 inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[color:var(--color-navy)] border-b border-[color:var(--color-navy)] pb-1">
                  Open Instagram →
                </div>
              </div>
            </a>
          </div>

          {/* Facebook */}
          <div
            className="bg-white border border-[color:var(--color-line)] p-4 flex flex-col"
            data-in
            style={{ ["--d" as string]: "160ms" }}
          >
            <PanelHeader icon={<FacebookIcon className="h-3.5 w-3.5" />} label={`Facebook · @${FACEBOOK_HANDLE}`} />
            <div className="flex-1 min-h-[540px] bg-white">
              <iframe
                title="Shahzad Cloth House on Facebook"
                src={`https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(
                  FACEBOOK_URL,
                )}&tabs=timeline&width=380&height=540&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true`}
                width="100%"
                height="540"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                loading="lazy"
                allow="encrypted-media"
              />
            </div>
          </div>
        </div>
      </div>

      <Script
        src="https://www.tiktok.com/embed.js"
        strategy="lazyOnload"
        async
      />
    </section>
  );
}

function SocialPill({
  href,
  label,
  icon,
  bg,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
  bg: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`lift inline-flex items-center gap-2 ${bg} text-white px-4 py-2.5 rounded-full text-[11.5px] tracking-[0.16em] uppercase`}
    >
      {icon}
      {label}
    </a>
  );
}

function PanelHeader({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 mb-3 text-[10.5px] tracking-[0.28em] uppercase text-[color:var(--color-navy)]">
      {icon}
      {label}
    </div>
  );
}

/* ─────────────────── REVIEWS ─────────────────── */

function Reviews() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[820px] px-5 md:px-8 text-center" data-in>
        <div className="text-[11px] tracking-[0.32em] uppercase text-[color:var(--color-gold-dark)]">
          Google Business Profile
        </div>
        <h2 className="display text-[36px] md:text-[52px] mt-4 text-[color:var(--color-ink)]">
          What our{" "}
          <span className="display-italic text-[color:var(--color-navy)]">
            customers
          </span>{" "}
          say
        </h2>
        <div className="mt-6 inline-flex items-center gap-1.5 text-[color:var(--color-gold)]" aria-hidden>
          {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
              <path d="M12 2l2.9 6.9 7.4.6-5.6 4.9 1.7 7.3L12 17.8l-6.4 3.9 1.7-7.3-5.6-4.9 7.4-.6L12 2z" />
            </svg>
          ))}
        </div>
        <p className="mt-5 max-w-[520px] mx-auto text-[15px] leading-[1.7] text-[color:var(--color-muted)]">
          Read honest reviews from Sialkot customers on our Google listing —
          or leave one of your own after your visit.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[color:var(--color-ink)] text-white px-5 py-3 rounded-full text-[13px] tracking-[0.18em] uppercase hover:bg-[color:var(--color-navy-deep)] transition-colors"
          >
            Read Reviews on Google
          </a>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[color:var(--color-line)] text-[color:var(--color-ink)] px-5 py-3 rounded-full text-[13px] tracking-[0.18em] uppercase hover:border-[color:var(--color-ink)] transition-colors"
          >
            Leave a Review
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── VISIT ─────────────────── */

function Visit() {
  return (
    <section id="visit" className="bg-[color:var(--color-paper-2)] border-t border-[color:var(--color-line)] py-20 md:py-28">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
        <div data-in>
          <div className="text-[11px] tracking-[0.32em] uppercase text-[color:var(--color-gold-dark)]">
            The Address
          </div>
          <h2 className="display text-[42px] md:text-[60px] mt-4 leading-[1.02] text-[color:var(--color-ink)]">
            Come see<br />
            <span className="display-italic text-[color:var(--color-navy)]">
              the cloth.
            </span>
          </h2>

          <dl className="mt-10 space-y-5 text-[15px]">
            <Row label="Address">
              Shahzad Cloth House<br />
              Kashmiri Mohalla<br />
              Sialkot, Punjab — 51310, Pakistan
            </Row>
            <Row label="Phone">
              <a href={`tel:${PHONE_TEL}`} className="hover:text-[color:var(--color-navy)]">
                {PHONE_DISPLAY}
              </a>
            </Row>
            <Row label="WhatsApp">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[color:var(--color-navy)]"
              >
                <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                Message on WhatsApp
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
                className="underline underline-offset-[6px] decoration-[color:var(--color-gold)] hover:text-[color:var(--color-navy)]"
              >
                Open in Google Maps ↗
              </a>
            </Row>
          </dl>
        </div>

        <div
          className="relative aspect-[4/5] md:aspect-[5/6] w-full overflow-hidden border border-[color:var(--color-line)] bg-white"
          data-in
          style={{ ["--d" as string]: "120ms" }}
        >
          <iframe
            title="Shahzad Cloth House on Google Maps"
            src={MAPS_EMBED}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-12 gap-4 border-b border-[color:var(--color-line)] pb-4">
      <dt className="col-span-4 md:col-span-3 text-[10px] tracking-[0.3em] uppercase text-[color:var(--color-gold-dark)] pt-1">
        {label}
      </dt>
      <dd className="col-span-8 md:col-span-9 text-[color:var(--color-ink)] leading-[1.65]">
        {children}
      </dd>
    </div>
  );
}

/* ─────────────────── FOOTER ─────────────────── */

function Footer() {
  return (
    <footer className="bg-[color:var(--color-navy-deep)] text-white/85">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8 pt-16 md:pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-6">
            <div className="display text-[44px] md:text-[72px] leading-[0.95]">
              Shahzad{" "}
              <span className="display-italic text-[color:var(--color-gold)]">
                Cloth House
              </span>
            </div>
            <div className="urdu mt-3 text-[22px] text-[color:var(--color-gold)]" aria-hidden>
              شہزاد کلاتھ ہاؤس
            </div>
            <div className="mt-4 text-[11px] tracking-[0.3em] uppercase text-white/55">
              Since {FOUNDED} · Kashmiri Mohalla, Sialkot
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10px] tracking-[0.3em] uppercase text-[color:var(--color-gold)] mb-3">
              Visit
            </div>
            <div className="text-[13.5px] leading-[1.9]">
              Kashmiri Mohalla<br />
              Sialkot — 51310<br />
              Pakistan<br />
              <a href={`tel:${PHONE_TEL}`} className="hover:text-white">{PHONE_DISPLAY}</a>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10px] tracking-[0.3em] uppercase text-[color:var(--color-gold)] mb-3">
              Follow
            </div>
            <ul className="space-y-1.5 text-[13.5px]">
              <li>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white">
                  <InstagramIcon className="h-3.5 w-3.5" /> Instagram
                </a>
              </li>
              <li>
                <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white">
                  <FacebookIcon className="h-3.5 w-3.5" /> Facebook
                </a>
              </li>
              <li>
                <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white">
                  <TikTokIcon className="h-3.5 w-3.5" /> TikTok
                </a>
              </li>
              <li>
                <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white">
                  <WhatsAppIcon className="h-3.5 w-3.5" /> WhatsApp
                </a>
              </li>
              <li>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  Google Maps ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/15 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[11px] tracking-[0.24em] uppercase text-white/55">
          <div>© {FOUNDED} – {new Date().getFullYear()} · Shahzad Cloth House · Sialkot</div>
          <div className="flex items-center gap-2">
            <span>Crafted by</span>
            <a
              href="https://hammadshahzad.com"
              target="_blank"
              rel="noopener noreferrer"
              className="display display-italic normal-case tracking-normal text-[14px] text-[color:var(--color-gold)] hover:text-white transition-colors"
            >
              hammadshahzad.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────── ICONS ─────────────────── */

function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M20.5 3.5A11.7 11.7 0 0 0 12 0C5.4 0 0 5.4 0 12a12 12 0 0 0 1.6 6L0 24l6.2-1.6A12 12 0 0 0 12 24c6.6 0 12-5.4 12-12a11.7 11.7 0 0 0-3.5-8.5zM12 21.8a9.7 9.7 0 0 1-5-1.4l-.36-.21-3.7.97.99-3.6-.24-.37A9.7 9.7 0 1 1 12 21.8zm5.6-7.3c-.3-.16-1.8-.9-2.1-1s-.5-.16-.7.15-.8 1-1 1.2-.4.2-.7 0a8 8 0 0 1-2.4-1.5 9 9 0 0 1-1.7-2.1c-.18-.3 0-.46.13-.6.13-.13.3-.34.45-.5.15-.17.2-.3.3-.5s.05-.37 0-.52c-.07-.14-.7-1.7-1-2.3-.25-.6-.5-.5-.7-.5h-.6c-.2 0-.55.07-.84.37-.3.3-1.1 1.1-1.1 2.7s1.13 3.13 1.3 3.35a12 12 0 0 0 4.7 4.1c.66.28 1.18.45 1.58.58.66.2 1.27.18 1.75.1.53-.07 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.27-.2-.57-.34z" />
    </svg>
  );
}

function TikTokIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M19.6 6.4a4.6 4.6 0 0 1-3.5-1.6V14a4.5 4.5 0 1 1-4.5-4.5c.2 0 .4 0 .6.04v2.36a2.13 2.13 0 1 0 1.5 2.04V2h2.4a4.6 4.6 0 0 0 3.5 4.4v2z" />
    </svg>
  );
}

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.25-1.5 1.55-1.5H17V4.4a22 22 0 0 0-2.4-.13c-2.4 0-4 1.46-4 4.13v2.5H8v3h2.6V21h2.9z" />
    </svg>
  );
}
