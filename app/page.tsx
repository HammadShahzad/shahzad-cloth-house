import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { COLLECTION_TO_CATEGORY } from "./categories";
import { SiteFooter, SiteHeader } from "./components/chrome";
import {
  Arrow,
  ClockGlyph,
  FacebookGlyph,
  GoogleLogo,
  InfoRow,
  InstagramGlyph,
  PhoneGlyph,
  PinGlyph,
  SectionHead,
  SocialPill,
  StarGlyph,
  TikTokGlyph,
  WhatsAppGlyph,
} from "./components/ui";
import {
  ADDRESS,
  BUSINESS_NAME_URDU,
  COLLECTIONS,
  FACEBOOK_HANDLE,
  FACEBOOK_URL,
  FAQS,
  FOUNDED,
  GEO,
  HOURS,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  MAPS_EMBED,
  MAPS_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  PROPRIETOR,
  SITE_URL,
  TAGLINE_URDU,
  TIKTOK_HANDLE,
  TIKTOK_URL,
  WHATSAPP_URL,
  YEARS,
  whatsappUrl,
} from "./site";

const FABRIC_WORDS = [
  "Lawn",
  "Wash & Wear",
  "Cotton",
  "Linen",
  "Raw Silk",
  "Katan",
  "Jacquard",
  "Brocade",
  "Chikankari",
  "Zari Work",
  "Karandi",
  "Wool Blend",
  "Shirting",
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id="main">
        {/* HERO */}
        <section id="top" aria-labelledby="hero-title" className="relative hero-glow text-cream overflow-hidden">
          <div className="absolute inset-0 weave" aria-hidden />
          <div className="relative mx-auto max-w-[1240px] px-5 md:px-10 pt-14 pb-20 md:pt-20 md:pb-28 grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            <div className="lg:col-span-7">
              <p className="rise eyebrow text-gold">
                Est. {FOUNDED} · <span className="hidden sm:inline">{ADDRESS.street} · </span>{ADDRESS.city}
              </p>

              <h1 id="hero-title" className="rise rise-2 mt-6">
                <span className="display block text-[54px] sm:text-[72px] md:text-[92px] leading-[0.92]">
                  Shahzad <span className="display-italic foil">Cloth House</span>
                </span>
                <span className="block mt-5 text-[19px] md:text-[23px] leading-[1.4] font-medium text-cream/90 max-w-[560px]">
                  Unstitched fabric for ladies &amp; gents in Sialkot, chosen bolt by bolt since {FOUNDED}.
                </span>
              </h1>

              <p lang="ur" className="rise rise-3 urdu mt-5 text-[26px] md:text-[30px] text-gold-light text-right sm:text-left" dir="rtl">
                {BUSINESS_NAME_URDU} <span className="text-cream/60 text-[0.7em]">· {TAGLINE_URDU}</span>
              </p>

              <div className="rise rise-4 mt-9 flex flex-wrap items-center gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-[#25D366] text-[#05290F] px-5 py-3 md:px-6 md:py-3.5 rounded-full text-[14px] md:text-[15px] font-semibold shadow-[0_10px_30px_-10px_rgba(37,211,102,0.6)] hover:brightness-105 transition"
                >
                  <WhatsAppGlyph className="h-5 w-5" />
                  WhatsApp us
                </a>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="inline-flex items-center gap-2.5 bg-cream text-navy-deep px-5 py-3 md:px-6 md:py-3.5 rounded-full text-[14px] md:text-[15px] font-semibold hover:bg-white transition-colors"
                >
                  <PhoneGlyph className="h-4 w-4" />
                  Call {PHONE_DISPLAY}
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-cream/30 text-cream px-5 py-3 md:px-6 md:py-3.5 rounded-full text-[14px] md:text-[15px] font-semibold hover:border-gold hover:text-gold transition-colors"
                >
                  <PinGlyph className="h-4 w-4" />
                  Directions
                </a>
              </div>

              <dl className="mt-12 grid grid-cols-3 gap-x-4 max-w-[560px] border-t border-cream/15 pt-6">
                <HeroStat k="Years in Sialkot" v={`${YEARS}+`} />
                <HeroStat k="Fabric families" v="6" />
                <HeroStat k="Minimum length" v="None" />
              </dl>
            </div>

            <div className="lg:col-span-5 relative mx-auto w-full max-w-[340px] sm:max-w-[460px]">
              <div className="absolute -inset-3 arch border border-gold/40" aria-hidden />
              <div className="relative arch overflow-hidden aspect-[4/5] bg-navy shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)]">
                <Image
                  src="/fabrics-ladies-gents.jpg"
                  alt="Folded embroidered ladies' fabric and grey and navy gents' suiting on the counter at Shahzad Cloth House, Sialkot"
                  fill
                  priority
                  sizes="(min-width: 1024px) 460px, 90vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-night/70 via-transparent to-transparent" aria-hidden />
                <div className="absolute bottom-5 inset-x-5 flex items-end justify-between text-[11px] tracking-[0.2em] uppercase text-cream/90">
                  <span>Ladies</span>
                  <span className="display-italic normal-case tracking-normal text-[15px] text-gold-light">&amp;</span>
                  <span>Gents</span>
                </div>
              </div>
              <div className="absolute -left-4 sm:-left-8 top-10 bg-cream text-navy-deep rounded-2xl px-4 py-3 shadow-xl rotate-[-4deg]">
                <div className="display text-[30px] leading-none">{FOUNDED}</div>
                <div className="text-[10px] tracking-[0.24em] uppercase mt-1 text-navy/70">Family-run</div>
              </div>
            </div>
          </div>
        </section>

        {/* FABRIC MARQUEE */}
        <div className="bg-gold text-navy-night overflow-hidden py-4 border-y border-gold-dark/40" aria-hidden>
          <div className="marquee-track flex w-max">
            {[0, 1].map((k) => (
              <div key={k} className="flex shrink-0">
                {FABRIC_WORDS.map((w) => (
                  <span key={`${k}-${w}`} className="display-italic text-[22px] md:text-[26px] px-6 whitespace-nowrap">
                    {w} <span className="not-italic text-navy/50 pl-6">✶</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* COLLECTIONS */}
        <section id="collections" aria-labelledby="collections-title" className="py-20 md:py-28">
          <div className="mx-auto max-w-[1240px] px-5 md:px-10">
            <SectionHead
              eyebrow="The Catalogue"
              id="collections-title"
              title={<>Unstitched fabric, <span className="display-italic text-navy">cut to your length</span></>}
              intro="Six fabric families we keep in stock year-round. Every bolt is sourced direct from the mills and cut to the length you need, with no minimums."
            />

            <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {COLLECTIONS.map((c, i) => (
                <li key={c.slug}>
                  <article className="group h-full flex flex-col bg-white rounded-[22px] overflow-hidden border border-navy/10 shadow-[0_1px_0_rgba(10,16,36,0.04)] hover:shadow-[0_24px_50px_-28px_rgba(10,23,64,0.45)] hover:-translate-y-1 transition duration-500">
                    <div className={`swatch ${c.swatch} aspect-[16/10]`}>
                      <div className="absolute inset-x-0 top-0 z-[2] flex items-start justify-between p-5">
                        <span className="bg-white/90 backdrop-blur text-navy-deep rounded-full px-3 py-1 text-[11px] font-semibold tracking-[0.12em] uppercase">
                          {c.for}
                        </span>
                        <span className="display-italic text-[22px] text-white/90 drop-shadow">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <span lang="ur" dir="rtl" className="urdu absolute bottom-3 right-5 z-[2] text-[24px] text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]">
                        {c.urdu}
                      </span>
                    </div>
                    <div className="flex-1 flex flex-col p-6 md:p-7">
                      <h3 className="display text-[30px] md:text-[32px] text-ink">
                        <Link href={`/${COLLECTION_TO_CATEGORY[c.slug]}`} className="hover:text-navy transition-colors">
                          {c.name}
                        </Link>
                      </h3>
                      <p className="mt-1 text-[12px] tracking-[0.2em] uppercase text-gold-dark font-semibold">{c.season}</p>
                      <p className="mt-4 text-[15px] leading-[1.7] text-ink/70 flex-1">{c.blurb}</p>
                      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                        <Link
                          href={`/${COLLECTION_TO_CATEGORY[c.slug]}`}
                          className="inline-flex items-center gap-2 text-[14px] font-semibold text-navy hover:text-gold-dark transition-colors"
                          aria-label={`See ${c.name}`}
                        >
                          See the collection
                          <Arrow />
                        </Link>
                        <a
                          href={whatsappUrl(`${c.name.toLowerCase()}.`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#128C4A] hover:text-[#0B6B37] transition-colors"
                          aria-label={`Ask about ${c.name} on WhatsApp`}
                        >
                          <WhatsAppGlyph className="h-4 w-4" />
                          Ask
                        </a>
                      </div>
                    </div>
                  </article>
                </li>
              ))}
            </ul>

            <p className="mt-12 text-center text-[16px] text-ink/70">
              Looking for something specific?{" "}
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4 hover:text-gold-dark">
                Tell us on WhatsApp
              </a>
              . Chances are, we can source it.
            </p>
          </div>
        </section>

        {/* STORY */}
        <section id="story" aria-labelledby="story-title" className="relative bg-sand py-20 md:py-28 overflow-hidden">
          <div className="mx-auto max-w-[1240px] px-5 md:px-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <figure className="lg:col-span-5 mx-auto w-full max-w-[440px]">
              <div className="relative">
                <div className="absolute -inset-3 arch border border-gold-dark/40" aria-hidden />
                <div className="relative arch overflow-hidden aspect-[4/5] bg-navy/10">
                  <Image
                    src="/father.jpg"
                    alt={`${PROPRIETOR}, proprietor of Shahzad Cloth House, at the shop counter in ${ADDRESS.city}`}
                    fill
                    sizes="(min-width: 1024px) 440px, 90vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <figcaption className="mt-6 text-center">
                <span className="display text-[22px] text-ink">{PROPRIETOR}</span>
                <span className="block mt-1 text-[12px] tracking-[0.24em] uppercase text-ink/55">Proprietor · since {FOUNDED}</span>
              </figcaption>
            </figure>

            <div className="lg:col-span-7">
              <p className="eyebrow text-gold-dark">Our Story</p>
              <h2 id="story-title" className="display mt-4 text-[44px] md:text-[64px] text-ink">
                {YEARS} years of cloth,{" "}
                <span className="display-italic text-navy">kept honestly.</span>
              </h2>
              <div className="mt-8 space-y-5 text-[17px] leading-[1.8] text-ink/80 max-w-[620px]">
                <p>
                  Shahzad Cloth House opened its shutters in {FOUNDED}: a narrow
                  door on a narrow lane at {ADDRESS.street}, {ADDRESS.city}. My
                  father, <strong className="text-ink">{PROPRIETOR}</strong>,
                  measured his first thaan that summer. {YEARS} years on, the
                  measuring tape is the same, the eye is sharper, and the faces at
                  the counter (aunts, nieces, grandsons) keep returning.
                </p>
                <p>
                  We buy direct, we keep lean, and we refuse what we wouldn&apos;t
                  hand to family. If a bolt has a slub we don&apos;t like, it goes
                  back. If a print misregisters by a hair, it goes back.
                </p>
              </div>
              <blockquote className="mt-10 border-l-2 border-gold pl-6 max-w-[620px]">
                <p className="display-italic text-[26px] md:text-[32px] leading-[1.25] text-navy">
                  &ldquo;The cloth that stays on our shelves has earned the shelf.&rdquo;
                </p>
              </blockquote>
            </div>
          </div>
        </section>

        {/* PROMISES */}
        <section aria-labelledby="promise-title" className="relative bg-navy-deep text-cream py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 weave" aria-hidden />
          <div className="relative mx-auto max-w-[1240px] px-5 md:px-10">
            <SectionHead
              dark
              eyebrow="The Standard"
              id="promise-title"
              title={<>What a <span className="display-italic text-gold-light">good thaan</span> feels like</>}
              intro={`Three principles we refuse to bend on. They're why the shop is still here ${YEARS} years later, and why our first customers keep walking back through the door.`}
            />
            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {[
                {
                  n: "I",
                  t: "Hand-picked at the mill",
                  d: "We source directly, bolt by bolt. Machines don't know a bad weave. We do, and we send it back.",
                },
                {
                  n: "II",
                  t: "One fair price, stated",
                  d: "No inflated tags to discount from. The price you see is the price we'd pay at a neighbour's shop.",
                },
                {
                  n: "III",
                  t: "A promise behind every cut",
                  d: `If it doesn't hold its colour, its hand, or its word, bring it back. That's been the promise since ${FOUNDED}.`,
                },
              ].map((v) => (
                <article key={v.n} className="rounded-[22px] border border-gold/25 bg-white/[0.03] p-7 md:p-8">
                  <div className="display-italic text-[52px] leading-none text-gold">{v.n}</div>
                  <h3 className="display mt-6 text-[26px] text-cream">{v.t}</h3>
                  <p className="mt-3 text-[15px] leading-[1.75] text-cream/70">{v.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section id="reviews" aria-labelledby="reviews-title" className="py-20 md:py-28">
          <div className="mx-auto max-w-[1240px] px-5 md:px-10">
            <div className="relative rounded-[28px] bg-white border border-navy/10 px-6 py-14 md:px-16 md:py-16 text-center overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#4285F4] via-[#EA4335] via-50% to-[#34A853]" aria-hidden />
              <GoogleLogo className="h-7 mx-auto" />
              <h2 id="reviews-title" className="display mt-6 text-[36px] md:text-[52px] text-ink">
                What our <span className="display-italic text-navy">customers</span> say
              </h2>
              <div className="mt-5 inline-flex gap-1.5 text-gold" aria-hidden>
                {[0, 1, 2, 3, 4].map((i) => (
                  <StarGlyph key={i} className="h-6 w-6" />
                ))}
              </div>
              <p className="mt-5 text-[16px] leading-[1.7] text-ink/70 max-w-[520px] mx-auto">
                Read honest reviews from Sialkot customers on our Google Business
                Profile, or leave one of your own after your visit.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-navy text-cream px-6 py-3.5 rounded-full text-[15px] font-semibold hover:bg-navy-deep transition-colors"
                >
                  Read reviews on Google
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-navy/25 text-navy px-6 py-3.5 rounded-full text-[15px] font-semibold hover:border-navy transition-colors"
                >
                  Leave a review
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SOCIAL */}
        <section id="social" aria-labelledby="social-title" className="bg-sand py-20 md:py-28">
          <div className="mx-auto max-w-[1240px] px-5 md:px-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
              <SectionHead
                eyebrow="Watch the Shop"
                id="social-title"
                title={<>New arrivals, <span className="display-italic text-navy">live on social</span></>}
                intro="Fabric in motion, fresh stock and life on the shop floor. Follow us for discount deals."
              />
              <div className="flex flex-wrap gap-2 shrink-0">
                <SocialPill href={TIKTOK_URL} className="bg-ink text-cream">
                  <TikTokGlyph className="h-4 w-4" /> TikTok
                </SocialPill>
                <SocialPill href={INSTAGRAM_URL} className="bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white">
                  <InstagramGlyph className="h-4 w-4" /> Instagram
                </SocialPill>
                <SocialPill href={FACEBOOK_URL} className="bg-[#1877F2] text-white">
                  <FacebookGlyph className="h-4 w-4" /> Facebook
                </SocialPill>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-5">
              <SocialCard label={<><TikTokGlyph className="h-4 w-4" /> TikTok · @{TIKTOK_HANDLE}</>}>
                <div className="min-h-[520px]">
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
              </SocialCard>

              <SocialCard label={<><InstagramGlyph className="h-4 w-4" /> Instagram · @{INSTAGRAM_HANDLE}</>}>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group min-h-[520px] h-full rounded-2xl relative overflow-hidden bg-gradient-to-br from-[#FFE5D5] via-[#FCD6E6] to-[#E2D2F2] flex items-center justify-center"
                >
                  <div className="relative text-center px-6">
                    <div className="inline-flex p-4 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white shadow-lg group-hover:scale-110 transition-transform">
                      <InstagramGlyph className="h-8 w-8" />
                    </div>
                    <div className="display text-[28px] mt-6 text-ink">@{INSTAGRAM_HANDLE}</div>
                    <div className="text-[14px] mt-2 text-ink/70">See the latest fabrics on Instagram</div>
                    <div className="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold text-navy border-b border-navy pb-1">
                      Open Instagram <Arrow />
                    </div>
                  </div>
                </a>
              </SocialCard>

              <SocialCard label={<><FacebookGlyph className="h-4 w-4" /> Facebook · @{FACEBOOK_HANDLE}</>}>
                <div className="min-h-[520px] bg-white rounded-2xl flex items-center justify-center overflow-hidden">
                  <iframe
                    title="Shahzad Cloth House on Facebook"
                    src={`https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(
                      FACEBOOK_URL,
                    )}&tabs=timeline&width=340&height=520&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true`}
                    width="340"
                    height="520"
                    style={{ border: "none", overflow: "hidden", maxWidth: "100%" }}
                    scrolling="no"
                    loading="lazy"
                    allow="encrypted-media; fullscreen"
                  />
                </div>
              </SocialCard>
            </div>
          </div>
          <Script src="https://www.tiktok.com/embed.js" strategy="lazyOnload" />
        </section>

        {/* FAQ */}
        <section id="faq" aria-labelledby="faq-title" className="py-20 md:py-28">
          <div className="mx-auto max-w-[1240px] px-5 md:px-10 grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <SectionHead
                eyebrow="Good to Know"
                id="faq-title"
                title={<>Questions, <span className="display-italic text-navy">answered</span></>}
                intro="Still unsure? Call or WhatsApp us. We are happy to help before you visit."
              />
            </div>
            <div className="lg:col-span-8 divide-y divide-navy/10 border-y border-navy/10">
              {FAQS.map((f, i) => (
                <details key={f.q} className="group py-1" open={i === 0}>
                  <summary className="flex items-center justify-between gap-6 py-5">
                    <h3 className="text-[17px] md:text-[19px] font-semibold text-ink">{f.q}</h3>
                    <span className="faq-plus shrink-0 h-9 w-9 rounded-full border border-navy/20 grid place-items-center text-navy text-[20px] leading-none transition-transform duration-300" aria-hidden>
                      +
                    </span>
                  </summary>
                  <p className="pb-6 pr-14 text-[16px] leading-[1.75] text-ink/70">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* VISIT */}
        <section id="visit" aria-labelledby="visit-title" className="pb-24 md:pb-32">
          <div className="mx-auto max-w-[1240px] px-5 md:px-10">
            <div className="grid lg:grid-cols-12 rounded-[28px] overflow-hidden bg-navy-deep text-cream">
              <div className="lg:col-span-5 relative p-8 md:p-12">
                <div className="absolute inset-0 weave" aria-hidden />
                <div className="relative">
                  <p className="eyebrow text-gold">Visit the Shop</p>
                  <h2 id="visit-title" className="display mt-4 text-[44px] md:text-[60px]">
                    Come <span className="display-italic text-gold-light">feel</span> the cloth.
                  </h2>
                  <p className="mt-5 text-[16px] leading-[1.75] text-cream/70">
                    Fabric belongs in the hand, not on a screen. Visit the shop,
                    unroll a thaan, hold it to the light, and take a cup of tea.
                  </p>

                  <address className="not-italic mt-9 space-y-6 text-[15px]">
                    <InfoRow icon={<PinGlyph className="h-4 w-4" />} label="Address">
                      Shahzad Cloth House<br />
                      {ADDRESS.street}, {ADDRESS.city}<br />
                      {ADDRESS.region}, {ADDRESS.country}
                    </InfoRow>
                    <InfoRow icon={<ClockGlyph className="h-4 w-4" />} label="Hours">
                      {HOURS.map((h) => (
                        <span key={h.days} className="flex flex-wrap justify-between gap-x-6">
                          <span>{h.days}</span>
                          <span className="text-cream/70">{h.time}</span>
                        </span>
                      ))}
                    </InfoRow>
                    <InfoRow icon={<PhoneGlyph className="h-4 w-4" />} label="Phone & WhatsApp">
                      <a href={`tel:${PHONE_TEL}`} className="hover:text-gold transition-colors">
                        {PHONE_DISPLAY}
                      </a>
                    </InfoRow>
                  </address>

                  <div className="mt-9 flex flex-wrap gap-3">
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gold text-navy-night px-6 py-3.5 rounded-full text-[15px] font-semibold hover:bg-gold-light transition-colors"
                    >
                      <PinGlyph className="h-4 w-4" />
                      Get directions
                    </a>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-cream/30 px-6 py-3.5 rounded-full text-[15px] font-semibold hover:border-gold hover:text-gold transition-colors"
                    >
                      <WhatsAppGlyph className="h-4 w-4" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7 relative min-h-[380px] lg:min-h-full bg-navy">
                <iframe
                  title={`Map: Shahzad Cloth House, ${ADDRESS.street}, ${ADDRESS.city}`}
                  src={MAPS_EMBED}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full"
                  allowFullScreen
                />
                <div className="pointer-events-none absolute bottom-4 right-4 bg-navy-deep/90 text-gold px-3 py-2 rounded-full text-[11px] tracking-[0.2em] uppercase">
                  {GEO.lat.toFixed(3)}° N · {GEO.lng.toFixed(3)}° E
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}

/* ───────────── helpers ───────────── */

function HeroStat({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex flex-col-reverse justify-end">
      <dt className="mt-2 text-[10px] md:text-[11px] tracking-[0.14em] md:tracking-[0.18em] uppercase text-cream/60">{k}</dt>
      <dd className="display text-[34px] md:text-[42px] leading-none text-gold-light">{v}</dd>
    </div>
  );
}

function SocialCard({ label, children }: { label: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-[22px] border border-navy/10 p-4 flex flex-col">
      <div className="flex items-center gap-2 mb-3 px-1 text-[12px] font-semibold tracking-[0.12em] uppercase text-navy">
        {label}
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}
