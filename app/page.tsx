import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";

const TIKTOK_HANDLE = "shahzadclothhouseskt";
const TIKTOK_URL = `https://www.tiktok.com/@${TIKTOK_HANDLE}`;
const INSTAGRAM_HANDLE = "shahzadclothhouse";
const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_HANDLE}/`;
const FACEBOOK_HANDLE = "shahzadclothhouseskt";
const FACEBOOK_URL = `https://www.facebook.com/${FACEBOOK_HANDLE}/`;

const FOUNDED = 1991;
const YEARS = new Date().getFullYear() - FOUNDED;

const PHONE_DISPLAY = "0300 6143230";
const PHONE_TEL = "+923006143230";
const WHATSAPP_INTL = "923006143230";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_INTL}?text=${encodeURIComponent(
  "Assalamu alaikum — I saw your website (shahzadclothhouse.com) and wanted to ask about ",
)}`;

export const metadata: Metadata = {
  title: "Shahzad Cloth House — Fabric Heritage Since 1991 | Sialkot",
  description:
    "Family-run fabric house in Chowk Adda Pasrooriyan, Sialkot. Premium unstitched cloth — lawn, cotton, linen, silk, wash & wear, suiting, and wedding wear — curated since 1991.",
  alternates: { canonical: "/" },
};

const MAPS_URL = "https://maps.app.goo.gl/LvhtWzgEjP6j29mm8";
const MAPS_EMBED =
  "https://www.google.com/maps?q=Shahzad+Cloth+House+Chowk+Adda+Pasrooriyan+Sialkot&output=embed";

const PROPRIETOR = "Shahzad Ahmad";
const ADDRESS_LINE = "Chowk Adda Pasrooriyan";

const collections = [
  {
    n: "01",
    name: "Unstitched Lawn",
    urdu: "لان",
    blurb:
      "Breathable summer weaves from the country's finest mills — prints, embroidered panels, and chikankari.",
    season: "Spring · Summer",
  },
  {
    n: "02",
    name: "Wash & Wear",
    urdu: "واش اینڈ ویئر",
    blurb:
      "Signature men's and women's wash & wear in a spectrum of quiet, wearable tones. Year-round.",
    season: "All Seasons",
  },
  {
    n: "03",
    name: "Cotton & Linen",
    urdu: "کاٹن و لِنن",
    blurb:
      "Long-staple cotton and pure linen with a softened hand — cut in lengths for suits and kurtas.",
    season: "Warm Weather",
  },
  {
    n: "04",
    name: "Silk & Jacquard",
    urdu: "ریشم و جیکارڈ",
    blurb:
      "Raw silks, katan, banarsi jacquards and brocades — reserved for occasion and ceremony.",
    season: "Formal · Festive",
  },
  {
    n: "05",
    name: "Wedding Wear",
    urdu: "شادی کا لباس",
    blurb:
      "Bridal and groom fabrics — hand-embroidered panels, zari work, and coordinated dupattas.",
    season: "By Appointment",
  },
  {
    n: "06",
    name: "Winter Suiting",
    urdu: "سردی کا سوٹنگ",
    blurb:
      "Wool-blends and karandi for the cold months, finished with the weight and drape we trust.",
    season: "Autumn · Winter",
  },
];

export default function Home() {
  return (
    <main className="relative overflow-clip">
      {/* NAV */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-sm border-b border-[color:var(--color-ink)]/10">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-5 flex items-center justify-between">
          <a href="#top" className="display text-[18px] md:text-[20px] text-[color:var(--color-ink)]" aria-label="Shahzad Cloth House — home">
            Shahzad <span className="display-italic">Cloth House</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-[13px] text-[color:var(--color-ink)]/75">
            <a href="#collections" className="hover:text-[color:var(--color-oxblood)]">Collections</a>
            <a href="#watch" className="hover:text-[color:var(--color-oxblood)]">Social</a>
            <a href="#visit" className="hover:text-[color:var(--color-oxblood)]">Visit</a>
          </nav>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[color:var(--color-oxblood)] text-white px-4 py-2 rounded-full text-[12px] tracking-[0.16em] uppercase hover:bg-[color:var(--color-oxblood-deep)] transition-colors"
          >
            <WhatsAppGlyph className="h-3.5 w-3.5" />
            WhatsApp
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative">
        <div className="mx-auto max-w-[900px] px-6 md:px-10 pt-20 md:pt-32 pb-20 md:pb-28 text-center">
          <div className="text-[11px] tracking-[0.38em] uppercase text-[color:var(--color-oxblood)]">
            Since 1991 · Chowk Adda Pasrooriyan · Sialkot
          </div>

          <h1 className="display mt-10 text-[color:var(--color-ink)] text-[60px] md:text-[104px] leading-[0.95]">
            Shahzad <span className="display-italic text-[color:var(--color-oxblood)]">Cloth House</span>
          </h1>

          <div className="urdu mt-8 text-[32px] md:text-[40px] text-[color:var(--color-oxblood-deep)]" aria-hidden>
            شہزاد کلاتھ ہاؤس
          </div>
          <div className="urdu text-[18px] md:text-[22px] text-[color:var(--color-gold-dark)] mt-1" aria-hidden>
            ورائٹی کا اعلیٰ مرکز
          </div>

          <p className="mt-8 max-w-xl mx-auto text-[16px] md:text-[18px] leading-[1.6] text-[color:var(--color-ink)]/75">
            Ladies &amp; Gents · Premier variety of unstitched fabric,
            family-run since 1991.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3.5 rounded-full text-[13px] tracking-[0.2em] uppercase"
            >
              <WhatsAppGlyph className="h-4 w-4" />
              WhatsApp
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 bg-[color:var(--color-oxblood)] text-white px-6 py-3.5 rounded-full text-[13px] tracking-[0.2em] uppercase hover:bg-[color:var(--color-oxblood-deep)] transition-colors"
            >
              Call {PHONE_DISPLAY}
            </a>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[color:var(--color-ink)]/25 text-[color:var(--color-ink)] px-6 py-3.5 rounded-full text-[13px] tracking-[0.2em] uppercase hover:border-[color:var(--color-ink)] transition-colors"
            >
              Directions
            </a>
          </div>
        </div>
      </section>

      {/* LEGACY */}
      <section id="legacy" className="relative py-24 md:py-36">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4 md:sticky md:top-28 self-start">
            <div className="text-[11px] tracking-[0.42em] uppercase text-[color:var(--color-oxblood)]">
              The Legacy
            </div>
            <h2 className="display text-[56px] md:text-[76px] mt-4 text-[color:var(--color-ink)]">
              {YEARS} years<br />
              <span className="display-italic text-[color:var(--color-oxblood)]">of cloth</span>,<br />
              kept honestly.
            </h2>
            <figure className="mt-8 relative">
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-[color:var(--color-oxblood)]/30 bg-[color:var(--color-cream)]">
                <Image
                  src="/father.jpg"
                  alt="The proprietor of Shahzad Cloth House at the shop counter, Chowk Adda Pasrooriyan, Sialkot"
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                  priority={false}
                />
                <div className="absolute top-3 left-3 bg-[color:var(--color-bone)]/90 backdrop-blur px-2.5 py-1 text-[9px] tracking-[0.32em] uppercase text-[color:var(--color-oxblood)]">
                  At the Shop · Sialkot
                </div>
              </div>
              <figcaption className="mt-3 flex items-baseline justify-between gap-3 text-[11px] tracking-[0.28em] uppercase text-[color:var(--color-ink)]/60">
                <span>{PROPRIETOR} · Proprietor</span>
                <span className="display display-italic text-[14px] tracking-normal text-[color:var(--color-gold-dark)] normal-case">
                  Since 1991
                </span>
              </figcaption>
            </figure>
          </div>

          <div className="col-span-12 md:col-span-7 md:col-start-6 text-[17px] leading-[1.75] text-[color:var(--color-ink)]/90 space-y-6">
            <p className="text-[20px] leading-[1.6]">
              <span className="display float-left text-[92px] leading-[0.8] pr-3 pt-2 text-[color:var(--color-oxblood)]">S</span>
              halzad Cloth House opened its shutters in <strong className="display-italic">1991</strong>,
              a narrow door on a narrow lane at Chowk Adda Pasrooriyan, Sialkot.
              My father, <strong>{PROPRIETOR}</strong>, measured his first thaan
              that summer; {YEARS} years on, the
              measuring tape is the same, the eye is sharper, and the faces at
              the counter — aunts, nieces, grandsons — keep returning.
            </p>
            <p>
              We buy direct, we keep lean, we refuse what we wouldn't hand to
              family. If a bolt has a slub we don't like, it goes back. If a
              print misregisters by a hair, it goes back. The cloth that stays
              on our shelves has earned the shelf.
            </p>
            <p>
              The shop is small on purpose. A conversation over cloth is what
              we sell — one pair of hands unrolling a thaan, one honest price,
              one promise behind it. <span className="display-italic">That's the whole business.</span>
            </p>

            <div className="pt-8 grid grid-cols-3 gap-6 border-t border-[color:var(--color-oxblood)]/15">
              <Stat k="Since" v="1991" />
              <Stat k="Proprietor" v="One" />
              <Stat k="Returning Customers" v="∞" />
            </div>
          </div>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section id="collections" className="relative bg-[color:var(--color-oxblood)] text-[color:var(--color-cream)] py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.09]" aria-hidden>
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="weave" width="14" height="14" patternUnits="userSpaceOnUse">
                <path d="M0 7H14M7 0V14" stroke="#F7F1E3" strokeWidth="0.6" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#weave)" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
            <div>
              <div className="text-[11px] tracking-[0.42em] uppercase text-[color:var(--color-gold)]">
                The Catalogue
              </div>
              <h2 className="display text-[56px] md:text-[90px] leading-[0.92] mt-4">
                The <span className="display-italic foil">Collections</span>
              </h2>
            </div>
            <p className="max-w-md text-[16px] leading-[1.65] text-[color:var(--color-cream)]/80">
              Six disciplines we keep in stock, year-round. Every bolt is
              sourced direct and cut to your length — no minimums, no theatre.
            </p>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[color:var(--color-gold)]/30">
            {collections.map((c) => (
              <li
                key={c.name}
                className="group bg-[color:var(--color-oxblood)] border-b border-r border-[color:var(--color-gold)]/30 p-8 md:p-10 relative transition-colors duration-300 hover:bg-[color:var(--color-oxblood-deep)]"
              >
                <div className="flex items-start justify-between">
                  <span className="display display-italic text-[28px] text-[color:var(--color-gold)]">
                    {c.n}
                  </span>
                  <span className="urdu text-[22px] text-[color:var(--color-cream)]/80" aria-hidden>
                    {c.urdu}
                  </span>
                </div>
                <h3 className="display text-[36px] md:text-[44px] leading-[1] mt-10">
                  {c.name}
                </h3>
                <p className="mt-4 text-[14px] leading-[1.7] text-[color:var(--color-cream)]/75">
                  {c.blurb}
                </p>
                <div className="mt-8 flex items-center justify-between text-[11px] tracking-[0.3em] uppercase text-[color:var(--color-gold)]">
                  <span>{c.season}</span>
                  <span className="transition-transform group-hover:translate-x-1">—→</span>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-16 text-center text-[13px] tracking-[0.3em] uppercase text-[color:var(--color-cream)]/70">
            Not seeing what you need? Tell us — chances are, we can source it.
          </div>
        </div>
      </section>

      {/* CRAFT / VALUES */}
      <section id="craft" className="relative py-24 md:py-36">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-5">
            <div className="text-[11px] tracking-[0.42em] uppercase text-[color:var(--color-oxblood)]">
              The Standard
            </div>
            <h2 className="display text-[56px] md:text-[84px] leading-[0.92] mt-4 text-[color:var(--color-ink)]">
              What a <span className="display-italic text-[color:var(--color-oxblood)]">good thaan</span> feels like
            </h2>
            <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--color-ink)]/80 max-w-md">
              Three principles we refuse to bend on. They're why the shop is
              still here {YEARS} years later — and why our first
              customers keep walking back through the door.
            </p>
          </div>

          <div className="col-span-12 md:col-span-7 grid grid-cols-1 gap-[1px] bg-[color:var(--color-oxblood)]/20">
            {[
              {
                n: "I",
                t: "Hand-picked at the Mill",
                d: "We source directly, bolt by bolt. Machines don't know a bad weave — we do, and we send it back.",
              },
              {
                n: "II",
                t: "One Fair Price, Stated",
                d: "No inflated tags to discount from. The price you see is the price we'd pay at a neighbour's shop.",
              },
              {
                n: "III",
                t: "A Promise Behind Every Cut",
                d: "If it doesn't hold its colour, its hand, or its word — bring it back. That's the promise since 1991.",
              },
            ].map((v) => (
              <article
                key={v.n}
                className="bg-[color:var(--color-bone)] p-8 md:p-10 grid grid-cols-12 gap-4 items-start"
              >
                <div className="col-span-2 display display-italic text-[56px] md:text-[72px] leading-none text-[color:var(--color-gold-dark)]">
                  {v.n}
                </div>
                <div className="col-span-10">
                  <h3 className="display text-[26px] md:text-[32px] leading-[1.1] text-[color:var(--color-ink)]">
                    {v.t}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.7] text-[color:var(--color-ink)]/75">
                    {v.d}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GOOGLE REVIEWS */}
      <section className="relative py-20 md:py-28 bg-[color:var(--color-cream)] border-y border-[color:var(--color-oxblood)]/15">
        <div className="mx-auto max-w-[900px] px-6 md:px-10 text-center">
          <GoogleLogo className="h-8 mx-auto" />
          <div className="mt-5 text-[11px] tracking-[0.36em] uppercase text-[color:var(--color-oxblood)]">
            Reviews · Google Business Profile
          </div>
          <h2 className="display text-[38px] md:text-[52px] leading-[1.05] text-[color:var(--color-ink)] mt-5">
            What our <span className="display-italic text-[color:var(--color-oxblood)]">customers</span> say
          </h2>
          <div className="mt-6 inline-flex items-center gap-2 text-[color:var(--color-gold-dark)]" aria-hidden>
            {[0, 1, 2, 3, 4].map((i) => (
              <svg key={i} viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                <path d="M12 2l2.9 6.9 7.4.6-5.6 4.9 1.7 7.3L12 17.8l-6.4 3.9 1.7-7.3-5.6-4.9 7.4-.6L12 2z" />
              </svg>
            ))}
          </div>
          <p className="mt-6 text-[15px] md:text-[16px] leading-[1.7] text-[color:var(--color-ink)]/75 max-w-lg mx-auto">
            Read honest reviews from Sialkot customers on our Google listing —
            or leave one of your own after your visit.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[color:var(--color-ink)] text-white px-6 py-3.5 rounded-full text-[13px] tracking-[0.2em] uppercase hover:bg-[color:var(--color-oxblood-deep)] transition-colors"
            >
              Read Reviews on Google
            </a>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[color:var(--color-ink)]/25 text-[color:var(--color-ink)] px-6 py-3.5 rounded-full text-[13px] tracking-[0.2em] uppercase hover:border-[color:var(--color-ink)] transition-colors"
            >
              Leave a Review
            </a>
          </div>
        </div>
      </section>

      {/* SOCIAL FEEDS */}
      <section id="watch" className="relative py-24 md:py-36 bg-[color:var(--color-bone-2)]/60 border-y border-[color:var(--color-oxblood)]/15">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
            <div>
              <div className="text-[11px] tracking-[0.42em] uppercase text-[color:var(--color-oxblood)]">
                Watch the Shop
              </div>
              <h2 className="display text-[56px] md:text-[84px] leading-[0.92] mt-4 text-[color:var(--color-ink)]">
                Live on <span className="display-italic text-[color:var(--color-oxblood)]">social</span>
              </h2>
              <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--color-ink)]/80 max-w-md">
                New arrivals, fabric in motion, and life on the shop floor — posted across TikTok, Instagram, and Facebook.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 self-start">
              <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className="lift inline-flex items-center gap-2 bg-[color:var(--color-ink)] text-[color:var(--color-bone)] px-4 py-3 rounded-full text-[12px] tracking-[0.18em] uppercase">
                <TikTokGlyph className="h-3.5 w-3.5" /> TikTok
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="lift inline-flex items-center gap-2 bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white px-4 py-3 rounded-full text-[12px] tracking-[0.18em] uppercase">
                <InstagramGlyph className="h-3.5 w-3.5" /> Instagram
              </a>
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="lift inline-flex items-center gap-2 bg-[#1877F2] text-white px-4 py-3 rounded-full text-[12px] tracking-[0.18em] uppercase">
                <FacebookGlyph className="h-3.5 w-3.5" /> Facebook
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* TikTok embed */}
            <div className="bg-[color:var(--color-cream)] border border-[color:var(--color-oxblood)]/20 p-4 flex flex-col">
              <div className="flex items-center gap-2 mb-3 text-[11px] tracking-[0.28em] uppercase text-[color:var(--color-oxblood)]">
                <TikTokGlyph className="h-3.5 w-3.5" /> TikTok · @{TIKTOK_HANDLE}
              </div>
              <div className="flex-1 min-h-[520px]">
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

            {/* Instagram CTA (no official embed) */}
            <div className="bg-[color:var(--color-cream)] border border-[color:var(--color-oxblood)]/20 p-4 flex flex-col">
              <div className="flex items-center gap-2 mb-3 text-[11px] tracking-[0.28em] uppercase text-[color:var(--color-oxblood)]">
                <InstagramGlyph className="h-3.5 w-3.5" /> Instagram · @{INSTAGRAM_HANDLE}
              </div>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-h-[520px] relative overflow-hidden bg-gradient-to-br from-[#FFE5D5] via-[#FCD6E6] to-[#E2D2F2] flex items-center justify-center group"
              >
                <div className="absolute inset-0 opacity-50" aria-hidden>
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="igdots" width="22" height="22" patternUnits="userSpaceOnUse">
                        <circle cx="11" cy="11" r="1" fill="#5B1A1A" opacity="0.18" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#igdots)" />
                  </svg>
                </div>
                <div className="relative text-center px-6">
                  <div className="inline-flex p-4 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white shadow-lg group-hover:scale-110 transition-transform">
                    <InstagramGlyph className="h-8 w-8" />
                  </div>
                  <div className="display text-[28px] mt-6 text-[color:var(--color-ink)]">
                    @{INSTAGRAM_HANDLE}
                  </div>
                  <div className="text-[13px] mt-2 text-[color:var(--color-ink)]/75">
                    See the latest fabrics on Instagram
                  </div>
                  <div className="mt-6 inline-flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase text-[color:var(--color-oxblood)] border-b border-[color:var(--color-oxblood)] pb-1">
                    Open Instagram <Arrow />
                  </div>
                </div>
              </a>
            </div>

            {/* Facebook CTA card */}
            <div className="bg-[color:var(--color-cream)] border border-[color:var(--color-oxblood)]/20 p-4 flex flex-col">
              <div className="flex items-center gap-2 mb-3 text-[11px] tracking-[0.28em] uppercase text-[color:var(--color-oxblood)]">
                <FacebookGlyph className="h-3.5 w-3.5" /> Facebook · @{FACEBOOK_HANDLE}
              </div>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-h-[520px] relative overflow-hidden bg-gradient-to-br from-[#1877F2] to-[#0B4CB5] text-white flex items-center justify-center group"
                aria-label="Open Shahzad Cloth House on Facebook"
              >
                {/* dotted texture */}
                <div className="absolute inset-0 opacity-25" aria-hidden>
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="fbdots" width="22" height="22" patternUnits="userSpaceOnUse">
                        <circle cx="11" cy="11" r="1" fill="#FFFFFF" opacity="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#fbdots)" />
                  </svg>
                </div>
                <div className="relative text-center px-6">
                  <div className="inline-flex p-4 rounded-full bg-white/15 backdrop-blur shadow-lg group-hover:scale-110 transition-transform">
                    <FacebookGlyph className="h-8 w-8" />
                  </div>
                  <div className="display text-[28px] mt-6">
                    @{FACEBOOK_HANDLE}
                  </div>
                  <div className="text-[13px] mt-2 opacity-85">
                    Latest posts on Facebook
                  </div>
                  <div className="mt-6 inline-flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase border-b border-white pb-1">
                    Open Facebook <Arrow />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <Script
          src="https://www.tiktok.com/embed.js"
          strategy="lazyOnload"
          async
        />
      </section>

      {/* VISIT */}
      <section id="visit" className="relative py-24 md:py-36">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-5">
            <div className="text-[11px] tracking-[0.42em] uppercase text-[color:var(--color-oxblood)]">
              The Address
            </div>
            <h2 className="display text-[56px] md:text-[84px] leading-[0.92] mt-4 text-[color:var(--color-ink)]">
              Come <span className="display-italic text-[color:var(--color-oxblood)]">see</span><br />
              the cloth.
            </h2>
            <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--color-ink)]/80 max-w-md">
              Fabric belongs in the hand, not on a screen. Visit the shop —
              unroll a thaan, hold it to the light, take a cup of tea.
            </p>

            <dl className="mt-10 space-y-6 text-[15px]">
              <VisitRow label="Address">
                Shahzad Cloth House<br />
                Chowk Adda Pasrooriyan<br />
                Sialkot, Punjab<br />
                Pakistan
              </VisitRow>
              <VisitRow label="Hours">
                Mon · Tue · Wed · Thu — 10:00 – 22:00<br />
                Saturday · Sunday — 10:00 – 22:00<br />
                Friday — Closed for prayers, open after Jumuah
              </VisitRow>
              <VisitRow label="Phone">
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="hover:text-[color:var(--color-oxblood)]"
                >
                  {PHONE_DISPLAY}
                </a>
              </VisitRow>
              <VisitRow label="WhatsApp">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[color:var(--color-oxblood)]"
                >
                  <WhatsAppGlyph className="h-4 w-4 text-[#25D366]" />
                  Message us on WhatsApp
                </a>
              </VisitRow>
              <VisitRow label="Directions">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-[color:var(--color-gold)] underline-offset-[6px] hover:text-[color:var(--color-oxblood)]"
                >
                  Open in Google Maps ↗
                </a>
              </VisitRow>
            </dl>
          </div>

          <div className="col-span-12 md:col-span-7">
            <div className="relative aspect-[4/5] md:aspect-[5/6] w-full overflow-hidden border border-[color:var(--color-oxblood)]/25 bg-[color:var(--color-cream)]">
              <iframe
                title="Shahzad Cloth House — Chowk Adda Pasrooriyan, Sialkot"
                src={MAPS_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full grayscale contrast-[1.05] sepia-[0.15]"
                allowFullScreen
              />
              <div className="absolute top-4 left-4 bg-[color:var(--color-bone)]/90 backdrop-blur px-3 py-2 text-[10px] tracking-[0.35em] uppercase text-[color:var(--color-oxblood)]">
                Adda Pasrooriyan · Sialkot
              </div>
              <div className="absolute bottom-4 right-4 bg-[color:var(--color-oxblood)] text-[color:var(--color-cream)] px-3 py-2 text-[10px] tracking-[0.35em] uppercase">
                32.494° N · 74.523° E
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative bg-[color:var(--color-ink)] text-[color:var(--color-bone)]/85 pt-20 pb-8">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-6">
              <div className="display text-[80px] md:text-[140px] leading-[0.82]">
                Shahzad<br />
                <span className="display-italic foil">Cloth House</span>
              </div>
              <div className="urdu text-[26px] mt-4 text-[color:var(--color-gold)]" aria-hidden>
                شہزاد کلاتھ ہاؤس
              </div>
            </div>

            <div className="col-span-6 md:col-span-2 text-[13px] leading-[2]">
              <div className="text-[10px] tracking-[0.35em] uppercase text-[color:var(--color-gold)] mb-3">Visit</div>
              <p>
                Chowk Adda Pasrooriyan<br />
                Sialkot · Punjab<br />
                Pakistan
              </p>
            </div>
            <div className="col-span-6 md:col-span-2 text-[13px] leading-[2]">
              <div className="text-[10px] tracking-[0.35em] uppercase text-[color:var(--color-gold)] mb-3">Hours</div>
              <p>
                Sat — Thu<br />
                10:00 – 22:00<br />
                Friday (after prayers)
              </p>
            </div>
            <div className="col-span-12 md:col-span-2 text-[13px] leading-[2]">
              <div className="text-[10px] tracking-[0.35em] uppercase text-[color:var(--color-gold)] mb-3">Follow</div>
              <ul className="space-y-1">
                <li>
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-[color:var(--color-gold)]">
                    <InstagramGlyph className="h-3.5 w-3.5" /> Instagram
                  </a>
                </li>
                <li>
                  <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-[color:var(--color-gold)]">
                    <FacebookGlyph className="h-3.5 w-3.5" /> Facebook
                  </a>
                </li>
                <li>
                  <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-[color:var(--color-gold)]">
                    <TikTokGlyph className="h-3.5 w-3.5" /> TikTok
                  </a>
                </li>
                <li>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-[color:var(--color-gold)]">
                    <WhatsAppGlyph className="h-3.5 w-3.5" /> WhatsApp
                  </a>
                </li>
                <li>
                  <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[color:var(--color-gold)]">
                    Google Maps
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6 pt-8 border-t border-[color:var(--color-bone)]/20 text-[11px] tracking-[0.28em] uppercase text-[color:var(--color-bone)]/60">
            <div>© 1991 – {new Date().getFullYear()} · Shahzad Cloth House · Sialkot</div>
            <div className="flex items-center gap-2">
              <span>Crafted by</span>
              <a
                href="https://hammadshahzad.com"
                target="_blank"
                rel="noopener noreferrer"
                className="display display-italic normal-case tracking-normal text-[14px] text-[color:var(--color-gold)] hover:text-[color:var(--color-bone)] transition-colors"
              >
                hammadshahzad.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* ───────────── helpers ───────────── */

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <dt className="text-[10px] tracking-[0.3em] uppercase text-[color:var(--color-ink)]/55">{k}</dt>
      <dd className="display display-italic text-[16px] text-[color:var(--color-ink)]">{v}</dd>
    </div>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="display text-[40px] md:text-[52px] leading-none text-[color:var(--color-oxblood)]">{v}</div>
      <div className="mt-2 text-[10px] tracking-[0.3em] uppercase text-[color:var(--color-ink)]/60">{k}</div>
    </div>
  );
}

function VisitRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-12 gap-4 border-b border-[color:var(--color-oxblood)]/15 pb-5">
      <dt className="col-span-4 md:col-span-3 text-[10px] tracking-[0.32em] uppercase text-[color:var(--color-oxblood)] pt-1">{label}</dt>
      <dd className="col-span-8 md:col-span-9 text-[color:var(--color-ink)]/90 leading-[1.7]">{children}</dd>
    </div>
  );
}

function Divider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`} aria-hidden>
      <span className="flex-1 h-px bg-current" />
      <span className="display display-italic text-[14px]">✶</span>
      <span className="flex-1 h-px bg-current" />
    </div>
  );
}

function InstagramGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.25-1.5 1.55-1.5H17V4.4a22 22 0 0 0-2.4-.13c-2.4 0-4 1.46-4 4.13v2.5H8v3h2.6V21h2.9z" />
    </svg>
  );
}

function WhatsAppGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M20.5 3.5A11.7 11.7 0 0 0 12 0C5.4 0 0 5.4 0 12a12 12 0 0 0 1.6 6L0 24l6.2-1.6A12 12 0 0 0 12 24c6.6 0 12-5.4 12-12a11.7 11.7 0 0 0-3.5-8.5zM12 21.8a9.7 9.7 0 0 1-5-1.4l-.36-.21-3.7.97.99-3.6-.24-.37A9.7 9.7 0 1 1 12 21.8zm5.6-7.3c-.3-.16-1.8-.9-2.1-1s-.5-.16-.7.15-.8 1-1 1.2-.4.2-.7 0a8 8 0 0 1-2.4-1.5 9 9 0 0 1-1.7-2.1c-.18-.3 0-.46.13-.6.13-.13.3-.34.45-.5.15-.17.2-.3.3-.5s.05-.37 0-.52c-.07-.14-.7-1.7-1-2.3-.25-.6-.5-.5-.7-.5h-.6c-.2 0-.55.07-.84.37-.3.3-1.1 1.1-1.1 2.7s1.13 3.13 1.3 3.35a12 12 0 0 0 4.7 4.1c.66.28 1.18.45 1.58.58.66.2 1.27.18 1.75.1.53-.07 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.27-.2-.57-.34z" />
    </svg>
  );
}

function TikTokGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M19.6 6.4a4.6 4.6 0 0 1-3.5-1.6V14a4.5 4.5 0 1 1-4.5-4.5c.2 0 .4 0 .6.04v2.36a2.13 2.13 0 1 0 1.5 2.04V2h2.4a4.6 4.6 0 0 0 3.5 4.4v2z" />
    </svg>
  );
}

function GoogleLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 272 92" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="Google">
      <path fill="#EA4335" d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
      <path fill="#FBBC05" d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
      <path fill="#4285F4" d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"/>
      <path fill="#34A853" d="M225 3v65h-9.5V3h9.5z"/>
      <path fill="#EA4335" d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"/>
      <path fill="#4285F4" d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91S16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z"/>
    </svg>
  );
}

function Arrow() {
  return (
    <svg width="18" height="10" viewBox="0 0 18 10" fill="none" aria-hidden>
      <path d="M0 5H17M17 5L13 1M17 5L13 9" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function Monogram({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <circle cx="20" cy="20" r="19" fill="none" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="20" cy="20" r="15.5" fill="none" stroke="currentColor" strokeWidth="0.4" />
      <text
        x="20" y="25"
        textAnchor="middle"
        fontFamily="Fraunces, serif"
        fontStyle="italic"
        fontSize="17"
        fill="currentColor"
      >
        S
      </text>
    </svg>
  );
}

function StampMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden>
      <defs>
        <path
          id="circle"
          d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0"
        />
      </defs>
      <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="50" cy="50" r="36" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 3" />
      <text fontSize="8.2" fill="currentColor" letterSpacing="3">
        <textPath href="#circle" startOffset="0">
          SHAHZAD · CLOTH · HOUSE · SIALKOT · EST. 1991 ·
        </textPath>
      </text>
      <text x="50" y="55" textAnchor="middle" fontFamily="Fraunces, serif" fontStyle="italic" fontSize="16" fill="currentColor">S</text>
    </svg>
  );
}

function LedgerSVG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 120" className={className} aria-hidden>
      {Array.from({ length: 34 }).map((_, i) => {
        const x = (i / 33) * 270 + 5;
        const h = 20 + ((i * 37) % 60);
        return (
          <line key={i} x1={x} y1={110} x2={x} y2={110 - h} stroke="currentColor" strokeWidth="1.2" />
        );
      })}
      <line x1="5" y1="110" x2="275" y2="110" stroke="currentColor" strokeWidth="0.8" />
      <text x="5" y="10" fontSize="8" fill="currentColor" letterSpacing="2">1991</text>
      <text x="230" y="10" fontSize="8" fill="currentColor" letterSpacing="2">TODAY</text>
    </svg>
  );
}
