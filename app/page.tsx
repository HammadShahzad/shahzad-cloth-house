import Image from "next/image";
import Link from "next/link";
import { COLLECTION_TO_CATEGORY } from "./categories";
import { PHOTOS, type PhotoKey } from "./photos";
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
        <section id="top" aria-labelledby="hero-title" className="relative bg-navy-night text-cream overflow-hidden">
          <Image
            src={PHOTOS["hero-shop"].src}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[70%_center]"
          />
          <div className="absolute inset-0 photo-shade" aria-hidden />
          <div className="relative mx-auto max-w-[1240px] px-5 md:px-10 pt-40 pb-16 sm:pt-48 lg:pt-28 lg:pb-28 min-h-[640px] lg:min-h-[680px] flex items-end lg:items-center">
            <div className="max-w-[640px]">
              <p className="rise eyebrow text-gold">
                Est. {FOUNDED} · <span className="hidden sm:inline">{ADDRESS.street} · </span>{ADDRESS.city}
              </p>

              <h1 id="hero-title" className="rise rise-2 mt-6">
                <span className="display block text-[50px] sm:text-[68px] md:text-[84px] leading-[0.98]">
                  Shahzad <span className="display-italic text-gold-light">Cloth House</span>
                </span>
                <span className="block mt-5 text-[18px] md:text-[21px] leading-[1.5] font-medium text-cream/90 max-w-[540px]">
                  Unstitched fabric for ladies &amp; gents in Sialkot, chosen bolt by bolt since {FOUNDED}.
                </span>
              </h1>

              <p lang="ur" className="rise rise-3 urdu mt-4 text-[24px] md:text-[28px] text-gold-light text-right sm:text-left" dir="rtl">
                {BUSINESS_NAME_URDU} <span className="text-cream/60 text-[0.7em]">· {TAGLINE_URDU}</span>
              </p>

              <div className="rise rise-4 mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-[#25D366] text-[#05290F] px-5 py-3 md:px-6 md:py-3.5 rounded-md text-[14px] md:text-[15px] font-semibold hover:brightness-105 transition"
                >
                  <WhatsAppGlyph className="h-5 w-5" />
                  WhatsApp us
                </a>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="inline-flex items-center gap-2.5 bg-cream text-navy-deep px-5 py-3 md:px-6 md:py-3.5 rounded-md text-[14px] md:text-[15px] font-semibold hover:bg-white transition-colors"
                >
                  <PhoneGlyph className="h-4 w-4" />
                  Call {PHONE_DISPLAY}
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-cream/40 text-cream px-5 py-3 md:px-6 md:py-3.5 rounded-md text-[14px] md:text-[15px] font-semibold hover:border-gold hover:text-gold transition-colors"
                >
                  <PinGlyph className="h-4 w-4" />
                  Directions
                </a>
              </div>

              <dl className="mt-12 grid grid-cols-3 gap-x-4 max-w-[540px] border-t border-cream/20 pt-6">
                <HeroStat k="Years in Sialkot" v={`${YEARS}+`} />
                <HeroStat k="Fabric families" v="6" />
                <HeroStat k="Minimum length" v="None" />
              </dl>
            </div>
          </div>
        </section>

        {/* TRUST STRIP */}
        <div className="bg-navy-deep text-cream/80 border-y border-gold/20">
          <ul className="mx-auto max-w-[1240px] px-5 md:px-10 py-4 grid grid-cols-2 md:grid-cols-4 gap-y-2 gap-x-6 text-[12px] md:text-[13px] tracking-[0.12em] uppercase">
            <li>Family-run since {FOUNDED}</li>
            <li>Cut to any length</li>
            <li>Ladies &amp; gents</li>
            <li>{ADDRESS.street}</li>
          </ul>
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

            <ul className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {COLLECTIONS.map((c) => {
                const href = `/${COLLECTION_TO_CATEGORY[c.slug]}`;
                return (
                  <li key={c.slug}>
                    <article className="group h-full flex flex-col">
                      <Link href={href} tabIndex={-1} aria-hidden className="zoom relative block aspect-[4/5] overflow-hidden rounded-md bg-sand">
                        <Image
                          src={PHOTOS[c.photo].src}
                          alt={PHOTOS[c.photo].alt}
                          fill
                          sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 92vw"
                          className="object-cover"
                        />
                        <span className="absolute top-4 left-4 bg-white/95 text-navy-deep rounded-sm px-2.5 py-1 text-[11px] font-semibold tracking-[0.14em] uppercase">
                          {c.for}
                        </span>
                      </Link>
                      <div className="flex-1 flex flex-col pt-5">
                        <div className="flex items-baseline justify-between gap-4">
                          <p className="text-[12px] tracking-[0.2em] uppercase text-gold-dark font-semibold">{c.season}</p>
                          <span lang="ur" dir="rtl" className="urdu text-[18px] text-ink/50 leading-none">{c.urdu}</span>
                        </div>
                        <h3 className="display mt-2 text-[28px] md:text-[30px] text-ink">
                          <Link href={href} className="hover:text-navy transition-colors">
                            {c.name}
                          </Link>
                        </h3>
                        <p className="mt-3 text-[15px] leading-[1.7] text-ink/70 flex-1">{c.blurb}</p>
                        <div className="mt-5 pt-4 border-t border-navy/10 flex flex-wrap items-center justify-between gap-3">
                          <Link
                            href={href}
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
                );
              })}
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
                <div className="relative overflow-hidden rounded-md aspect-[4/5] bg-navy/10">
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
          <div className="relative mx-auto max-w-[1240px] px-5 md:px-10">
            <SectionHead
              dark
              eyebrow="The Standard"
              id="promise-title"
              title={<>What a <span className="display-italic text-gold-light">good thaan</span> feels like</>}
              intro={`Three principles we refuse to bend on. They're why the shop is still here ${YEARS} years later, and why our first customers keep walking back through the door.`}
            />
            <div className="mt-14 grid gap-10 md:gap-8 md:grid-cols-3">
              {[
                {
                  n: "01",
                  t: "Hand-picked at the mill",
                  d: "We source directly, bolt by bolt. Machines don't know a bad weave. We do, and we send it back.",
                },
                {
                  n: "02",
                  t: "One fair price, stated",
                  d: "No inflated tags to discount from. The price you see is the price we'd pay at a neighbour's shop.",
                },
                {
                  n: "03",
                  t: "A promise behind every cut",
                  d: `If it doesn't hold its colour, its hand, or its word, bring it back. That's been the promise since ${FOUNDED}.`,
                },
              ].map((v) => (
                <article key={v.n} className="border-t border-gold/40 pt-6">
                  <div className="text-[13px] font-semibold tracking-[0.2em] text-gold">{v.n}</div>
                  <h3 className="display mt-4 text-[26px] text-cream">{v.t}</h3>
                  <p className="mt-3 text-[15px] leading-[1.75] text-cream/70">{v.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section id="reviews" aria-labelledby="reviews-title" className="py-20 md:py-28">
          <div className="mx-auto max-w-[1240px] px-5 md:px-10">
            <div className="relative rounded-lg bg-white border border-navy/10 px-6 py-14 md:px-16 md:py-16 text-center overflow-hidden">
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
                  className="inline-flex items-center gap-2 bg-navy text-cream px-6 py-3.5 rounded-md text-[15px] font-semibold hover:bg-navy-deep transition-colors"
                >
                  Read reviews on Google
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-navy/25 text-navy px-6 py-3.5 rounded-md text-[15px] font-semibold hover:border-navy transition-colors"
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
            <div>
              <SectionHead
                eyebrow="Watch the Shop"
                id="social-title"
                title={<>New arrivals, <span className="display-italic text-navy">live on social</span></>}
                intro="Fabric in motion, fresh stock and life on the shop floor. Follow us for discount deals."
              />
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
              <SocialCard
                href={TIKTOK_URL}
                photo="winter"
                icon={<TikTokGlyph className="h-7 w-7" />}
                handle={`@${TIKTOK_HANDLE}`}
                line="Fabric in motion and new stock on TikTok"
                cta="Watch on TikTok"
              />
              <SocialCard
                href={INSTAGRAM_URL}
                photo="lawn"
                icon={<InstagramGlyph className="h-7 w-7" />}
                handle={`@${INSTAGRAM_HANDLE}`}
                line="See the latest fabrics on Instagram"
                cta="Open Instagram"
              />
              <SocialCard
                href={FACEBOOK_URL}
                photo="wedding"
                icon={<FacebookGlyph className="h-7 w-7" />}
                handle={`@${FACEBOOK_HANDLE}`}
                line="Offers and shop news on Facebook"
                cta="Visit our Facebook page"
              />
            </div>
          </div>
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
            <div className="grid lg:grid-cols-12 rounded-lg overflow-hidden bg-navy-deep text-cream">
              <div className="lg:col-span-5 relative p-8 md:p-12">
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
                      className="inline-flex items-center gap-2 bg-gold text-navy-night px-6 py-3.5 rounded-md text-[15px] font-semibold hover:bg-gold-light transition-colors"
                    >
                      <PinGlyph className="h-4 w-4" />
                      Get directions
                    </a>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-cream/30 px-6 py-3.5 rounded-md text-[15px] font-semibold hover:border-gold hover:text-gold transition-colors"
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
                <div className="pointer-events-none absolute bottom-4 right-4 bg-navy-deep/90 text-gold px-3 py-2 rounded-sm text-[11px] tracking-[0.2em] uppercase">
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

function SocialCard({
  href,
  photo,
  icon,
  handle,
  line,
  cta,
}: {
  href: string;
  photo: PhotoKey;
  icon: React.ReactNode;
  handle: string;
  line: string;
  cta: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group zoom relative flex items-end min-h-[420px] md:min-h-[480px] rounded-md overflow-hidden bg-navy"
    >
      <Image src={PHOTOS[photo].src} alt="" fill sizes="(min-width: 768px) 380px, 92vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-night/90 via-navy-night/30 to-transparent" aria-hidden />
      <div className="relative p-6 text-cream">
        {icon}
        <div className="display text-[26px] mt-4 break-words">{handle}</div>
        <div className="text-[14px] mt-1 text-cream/80">{line}</div>
        <div className="mt-5 inline-flex items-center gap-2 text-[14px] font-semibold text-gold-light border-b border-gold-light pb-1">
          {cta} <Arrow />
        </div>
      </div>
    </a>
  );
}
