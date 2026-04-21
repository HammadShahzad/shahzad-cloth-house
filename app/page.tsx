import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shahzad Cloth House — Fabric Heritage Since 1992 | Sialkot",
  description:
    "Family-run fabric house in Kashmiri Mohalla, Sialkot. Premium unstitched cloth — lawn, cotton, linen, silk, wash & wear, suiting, and wedding wear — curated since 1992.",
  alternates: { canonical: "/" },
};

const MAPS_URL = "https://maps.app.goo.gl/LvhtWzgEjP6j29mm8";
const MAPS_EMBED =
  "https://www.google.com/maps?q=Shahzad+Cloth+House+Kashmiri+Mohalla+Sialkot&output=embed";

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
      <header className="sticky top-0 z-40 backdrop-blur-sm bg-[color:var(--color-bone)]/72 border-b border-[color:var(--color-oxblood)]/12">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-4 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3" aria-label="Shahzad Cloth House — home">
            <Monogram className="h-9 w-9 text-[color:var(--color-oxblood)]" />
            <div className="leading-none">
              <div className="display text-[20px] md:text-[22px] text-[color:var(--color-ink)]">
                Shahzad <span className="display-italic">Cloth House</span>
              </div>
              <div className="text-[10px] tracking-[0.32em] uppercase text-[color:var(--color-oxblood)]/80 mt-1">
                Est. MCMXCII · Sialkot
              </div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-9 text-[13px] tracking-wide text-[color:var(--color-ink)]/80">
            <a href="#legacy" className="hover:text-[color:var(--color-oxblood)] transition-colors">Legacy</a>
            <a href="#collections" className="hover:text-[color:var(--color-oxblood)] transition-colors">Collections</a>
            <a href="#craft" className="hover:text-[color:var(--color-oxblood)] transition-colors">Craft</a>
            <a href="#visit" className="hover:text-[color:var(--color-oxblood)] transition-colors">Visit</a>
          </nav>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-[color:var(--color-oxblood)] text-[color:var(--color-oxblood)] px-4 py-2 text-[12px] tracking-[0.18em] uppercase hover:bg-[color:var(--color-oxblood)] hover:text-[color:var(--color-cream)] transition-colors"
          >
            Visit the Store
            <span aria-hidden className="transition-transform group-hover:translate-x-0.5">↗</span>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 pt-10 md:pt-16 pb-16 md:pb-24 grid grid-cols-12 gap-x-6 gap-y-10">
          {/* Left rail — vertical label */}
          <div className="col-span-12 md:col-span-1 flex md:flex-col items-start md:items-center justify-between md:justify-start gap-6">
            <div className="md:rotate-180 md:[writing-mode:vertical-rl] text-[11px] tracking-[0.4em] uppercase text-[color:var(--color-oxblood)]/80">
              Vol. XXXIII — A Catalogue of Cloth
            </div>
            <div className="hidden md:block h-40 w-px bg-[color:var(--color-oxblood)]/25" />
            <div className="md:rotate-180 md:[writing-mode:vertical-rl] text-[11px] tracking-[0.35em] uppercase text-[color:var(--color-ink)]/60">
              Sialkot · Punjab · Pakistan
            </div>
          </div>

          {/* Main heading */}
          <div className="col-span-12 md:col-span-8">
            <div className="fade text-[11px] tracking-[0.42em] uppercase text-[color:var(--color-oxblood)] mb-7">
              <span className="inline-block align-middle mr-3">◆</span>
              A Family Fabric House · Since 1992
              <span className="inline-block align-middle ml-3">◆</span>
            </div>

            <h1 className="display text-[color:var(--color-ink)] text-[18vw] md:text-[13.5vw] leading-[0.82]">
              <span className="block rise">Shahzad</span>
              <span className="block rise display-italic text-[color:var(--color-oxblood)]" style={{ animationDelay: "120ms" }}>
                Cloth&nbsp;House
              </span>
            </h1>

            <div className="mt-8 origin-left h-px bg-[color:var(--color-oxblood)]/50 draw" />

            <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
              <p className="md:col-span-7 text-[17px] md:text-[19px] leading-[1.55] text-[color:var(--color-ink)]/85">
                Three generations of a single Sialkot shop, a ledger of fabric
                kept faithfully since <em className="display-italic">nineteen ninety-two</em>.
                We stock the cloth we would wear ourselves — nothing we wouldn't.
              </p>
              <div className="md:col-span-5 urdu text-[28px] md:text-[34px] text-[color:var(--color-oxblood-deep)]" aria-hidden>
                شہزاد کلاتھ ہاؤس
                <div className="text-[13px] tracking-normal mt-1 text-[color:var(--color-ink)]/60" dir="ltr">
                  Shahzad Cloth House — Kashmiri Mohalla, Sialkot
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="lift inline-flex items-center gap-3 bg-[color:var(--color-oxblood)] text-[color:var(--color-cream)] px-6 py-4 rounded-full text-[13px] tracking-[0.22em] uppercase"
              >
                Find the Shop
                <Arrow />
              </a>
              <a
                href="#collections"
                className="inline-flex items-center gap-3 border border-[color:var(--color-ink)]/35 text-[color:var(--color-ink)] px-6 py-4 rounded-full text-[13px] tracking-[0.22em] uppercase hover:border-[color:var(--color-ink)] transition-colors"
              >
                Browse the Cloth
              </a>
            </div>
          </div>

          {/* Right rail — 1992 dossier */}
          <aside className="col-span-12 md:col-span-3 relative">
            <div className="frame-corner relative p-6 md:p-7 bg-[color:var(--color-cream)]/65 h-full">
              <div className="flex items-start justify-between">
                <div className="text-[10px] tracking-[0.34em] uppercase text-[color:var(--color-oxblood)]">Dossier №1</div>
                <div className="spinslow" aria-hidden>
                  <StampMark className="h-16 w-16 text-[color:var(--color-oxblood)]/70" />
                </div>
              </div>
              <div className="mt-4">
                <div className="display text-[76px] leading-none text-[color:var(--color-ink)]">1992</div>
                <div className="text-[11px] tracking-[0.3em] uppercase text-[color:var(--color-ink)]/60 mt-1">
                  Founded · Sialkot
                </div>
              </div>
              <Divider className="my-5 text-[color:var(--color-oxblood)]/40" />
              <dl className="space-y-3 text-[13px]">
                <Row k="Discipline" v="Unstitched Fabric" />
                <Row k="Generations" v="Three" />
                <Row k="Mills" v="Pakistan" />
                <Row k="Ethos" v="Honesty of Hand" />
              </dl>
              <Divider className="my-5 text-[color:var(--color-oxblood)]/40" />
              <a href={`tel:+92000000000`} className="block text-[12px] tracking-[0.22em] uppercase text-[color:var(--color-oxblood)]">
                Call the Shop →
              </a>
            </div>
          </aside>
        </div>

        {/* Marquee */}
        <div className="border-y border-[color:var(--color-oxblood)]/20 bg-[color:var(--color-cream)]/60 overflow-hidden">
          <div className="marquee-track flex whitespace-nowrap py-4">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex shrink-0 items-center gap-10 pr-10 text-[color:var(--color-oxblood)]">
                {[
                  "Lawn",
                  "Karandi",
                  "Khaddar",
                  "Wash & Wear",
                  "Cotton",
                  "Linen",
                  "Raw Silk",
                  "Banarsi",
                  "Chikankari",
                  "Wool-Blend",
                  "Zari",
                  "Organza",
                ].map((w) => (
                  <span key={w} className="display text-[44px] md:text-[56px] leading-none display-italic">
                    {w}
                    <span className="inline-block mx-6 align-middle text-[color:var(--color-gold)]">✶</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEGACY */}
      <section id="legacy" className="relative py-24 md:py-36">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4 md:sticky md:top-28 self-start">
            <div className="text-[11px] tracking-[0.42em] uppercase text-[color:var(--color-oxblood)]">
              Ch. I — The Legacy
            </div>
            <h2 className="display text-[56px] md:text-[76px] mt-4 text-[color:var(--color-ink)]">
              Three decades<br />
              <span className="display-italic text-[color:var(--color-oxblood)]">of cloth</span>,<br />
              kept honestly.
            </h2>
            <LedgerSVG className="mt-8 w-[280px] text-[color:var(--color-oxblood)]/60" />
          </div>

          <div className="col-span-12 md:col-span-7 md:col-start-6 text-[17px] leading-[1.75] text-[color:var(--color-ink)]/90 space-y-6">
            <p className="text-[20px] leading-[1.6]">
              <span className="display float-left text-[92px] leading-[0.8] pr-3 pt-2 text-[color:var(--color-oxblood)]">S</span>
              halzad Cloth House opened its shutters in <strong className="display-italic">1992</strong>,
              a narrow door on a narrow lane in Kashmiri Mohalla. My father
              measured his first thaan that summer; thirty-odd years on, the
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
              <Stat k="Since" v="1992" />
              <Stat k="Generations" v="III" />
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
                Ch. II — The Catalogue
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

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[color:var(--color-cream)]/15">
            {collections.map((c) => (
              <li
                key={c.name}
                className="group bg-[color:var(--color-oxblood)] p-8 md:p-10 relative lift"
              >
                <div className="flex items-start justify-between">
                  <span className="display display-italic text-[28px] text-[color:var(--color-gold)]">
                    № {c.n}
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
              Ch. III — The Standard
            </div>
            <h2 className="display text-[56px] md:text-[84px] leading-[0.92] mt-4 text-[color:var(--color-ink)]">
              What a <span className="display-italic text-[color:var(--color-oxblood)]">good thaan</span> feels like
            </h2>
            <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--color-ink)]/80 max-w-md">
              Three principles we refuse to bend on. They're why the shop is
              still here after thirty-odd years — and why the sons and
              grandsons of our first customers still walk through the door.
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
                d: "If it doesn't hold its colour, its hand, or its word — bring it back. Thirty-three years of that promise.",
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

      {/* TESTIMONIAL */}
      <section className="relative py-20 md:py-28 bg-[color:var(--color-cream)] border-y border-[color:var(--color-oxblood)]/15">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10 text-center">
          <div className="display display-italic text-[color:var(--color-gold)] text-[44px] leading-none">“</div>
          <blockquote className="display text-[32px] md:text-[52px] leading-[1.1] text-[color:var(--color-ink)] mt-2">
            My mother bought my wedding cloth here in <span className="display-italic text-[color:var(--color-oxblood)]">1998</span>.
            Last month I brought my daughter. Same shop, same promise.
          </blockquote>
          <div className="mt-8 text-[11px] tracking-[0.4em] uppercase text-[color:var(--color-ink)]/60">
            — A returning customer, Sialkot
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="relative py-24 md:py-36">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-5">
            <div className="text-[11px] tracking-[0.42em] uppercase text-[color:var(--color-oxblood)]">
              Ch. IV — The Address
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
                Kashmiri Mohalla<br />
                Sialkot, Punjab — 51310<br />
                Pakistan
              </VisitRow>
              <VisitRow label="Hours">
                Mon · Tue · Wed · Thu — 10:00 – 22:00<br />
                Saturday · Sunday — 10:00 – 22:00<br />
                Friday — Closed for prayers, open after Jumuah
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
                title="Shahzad Cloth House — Kashmiri Mohalla, Sialkot"
                src={MAPS_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full grayscale contrast-[1.05] sepia-[0.15]"
                allowFullScreen
              />
              <div className="absolute top-4 left-4 bg-[color:var(--color-bone)]/90 backdrop-blur px-3 py-2 text-[10px] tracking-[0.35em] uppercase text-[color:var(--color-oxblood)]">
                Kashmiri Mohalla · Sialkot
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
                Kashmiri Mohalla<br />
                Sialkot 51310<br />
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
              <div className="text-[10px] tracking-[0.35em] uppercase text-[color:var(--color-gold)] mb-3">Contact</div>
              <p>
                <a href={MAPS_URL} className="underline underline-offset-4 decoration-[color:var(--color-gold)]/60 hover:text-[color:var(--color-gold)]">
                  Google Maps
                </a>
                <br />
                shahzadclothhouse.com
              </p>
            </div>
          </div>

          <div className="mt-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6 pt-8 border-t border-[color:var(--color-bone)]/20 text-[11px] tracking-[0.28em] uppercase text-[color:var(--color-bone)]/60">
            <div>© MCMXCII – {new Date().getFullYear()} · Shahzad Cloth House · A family business, Sialkot</div>
            <div>Designed with care · Cloth kept honestly</div>
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
          SHAHZAD · CLOTH · HOUSE · SIALKOT · EST. 1992 ·
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
      <text x="5" y="10" fontSize="8" fill="currentColor" letterSpacing="2">1992</text>
      <text x="230" y="10" fontSize="8" fill="currentColor" letterSpacing="2">TODAY</text>
    </svg>
  );
}
