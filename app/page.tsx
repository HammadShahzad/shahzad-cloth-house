import Image from "next/image";
import Link from "next/link";
import { CATEGORIES } from "./categories";
import { PHOTOS, SHOP_GALLERY } from "./photos";
import { PhotoGrid } from "./components/gallery";
import { SiteFooter, SiteHeader } from "./components/chrome";
import { OrderSteps } from "./components/order";
import { JsonLd, pageJsonLd, pageMetadata } from "./seo";
import {
  Arrow,
  BadgeGlyph,
  CallButton,
  ChatGlyph,
  ClockGlyph,
  FacebookGlyph,
  FaqList,
  GoogleLogo,
  InfoRow,
  InstagramGlyph,
  PhoneGlyph,
  PinGlyph,
  RichText,
  ScissorsGlyph,
  SectionHead,
  StarGlyph,
  TikTokGlyph,
  TruckGlyph,
  WhatsAppButton,
} from "./components/ui";
import {
  ADDRESS,
  BUSINESS_NAME_URDU,
  FACEBOOK_HANDLE,
  FACEBOOK_URL,
  FAQS,
  FOUNDED,
  HOME_DESCRIPTION,
  HOME_TITLE,
  HOURS,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  MAPS_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  PROPRIETOR,
  TAGLINE_URDU,
  TIKTOK_HANDLE,
  TIKTOK_URL,
  YEARS,
} from "./site";

export const metadata = pageMetadata({
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  path: "/",
  og: "home",
  ogAlt: "Shelves of suiting at Shahzad Cloth House, Sialkot",
});

const SEASONS = [
  { k: "Summer", v: "Lawn, cotton, linen and wash & wear", href: "/lawn" },
  { k: "Winter", v: "Karandi, wool blends, velvet and embroidered suits", href: "/winter-collection" },
  { k: "Eid & weddings", v: "Raw silk, jacquard, zari and embroidered panels", href: "/wedding-fabric" },
  { k: "Every day", v: "Gents wash & wear, shirting and suiting", href: "/gents-fabric" },
  { k: "Bulk", v: "School, office and hospital uniform fabric", href: "/uniform-fabric" },
];

export default function Home() {
  return (
    <>
      <SiteHeader current="/" />

      <main id="main">
        {/* HERO */}
        <section aria-labelledby="hero-title" className="relative overflow-hidden">
          <div className="mx-auto max-w-[1240px] px-5 md:px-10 pt-10 pb-16 md:pt-16 lg:pt-20 lg:pb-24 grid gap-12 lg:grid-cols-12 lg:gap-10 lg:items-center">
            <div className="lg:col-span-6">
              <p className="eyebrow text-gold-text flex items-center gap-3">
                <span className="diamond" aria-hidden />
                Est. {FOUNDED} · {ADDRESS.street}
              </p>
              <h1 id="hero-title" className="mt-5">
                <span className="block text-[15px] md:text-[16px] font-bold tracking-[0.06em] text-navy">
                  Shahzad Cloth House, {ADDRESS.city}
                </span>
                <span className="display block mt-3 text-[50px] sm:text-[64px] lg:text-[76px] leading-[0.98] text-navy-deep">
                  Unstitched fabric, <span className="display-italic text-gold-text">cut to your length.</span>
                </span>
              </h1>
              <p className="mt-6 text-[17px] md:text-[18px] leading-[1.7] text-ink/80 max-w-[540px]">
                Lawn, wash &amp; wear, karandi, silk, wedding and uniform fabric for ladies and gents. Chosen bolt by bolt
                since {FOUNDED}, ordered on WhatsApp and delivered across Pakistan.
              </p>
              <div className="mt-8 grid sm:flex sm:flex-wrap items-center gap-3">
                <WhatsAppButton />
                <CallButton />
              </div>
              <p lang="ur" dir="rtl" className="urdu mt-7 text-[22px] md:text-[24px] text-navy text-left">
                {BUSINESS_NAME_URDU} <span className="text-gold-text text-[0.8em]">· {TAGLINE_URDU}</span>
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="relative mx-auto max-w-[560px] aspect-[6/6.4]">
                <div className="frame absolute right-0 top-0 w-[78%] h-[86%]">
                  <div className="relative h-full overflow-hidden rounded-md bg-navy/10">
                    <Image
                      src={PHOTOS["suiting-close"].src}
                      alt={PHOTOS["suiting-close"].alt}
                      fill
                      preload
                      fetchPriority="high"
                      sizes="(min-width: 1024px) 440px, 72vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="absolute left-0 bottom-0 w-[44%] h-[50%] rounded-md overflow-hidden border-[6px] border-ivory bg-navy/10 shadow-[0_24px_50px_-24px_rgba(7,15,43,0.5)]">
                  <Image
                    src={PHOTOS.velvet.src}
                    alt={PHOTOS.velvet.alt}
                    fill
                    sizes="(min-width: 1024px) 250px, 42vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute left-[4%] top-[10%] bg-navy-deep text-cream rounded-md px-4 py-3 md:px-5 md:py-4 shadow-[0_20px_40px_-20px_rgba(7,15,43,0.6)]">
                  <div className="display text-[34px] md:text-[42px] leading-none text-gold-light">{YEARS}+</div>
                  <div className="mt-1 text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-cream/80">years in Sialkot</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST STRIP */}
        <section aria-label="Why shop with us" className="border-y border-navy/10 bg-white">
          <ul className="mx-auto max-w-[1240px] px-5 md:px-10 py-7 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6">
            <Trust icon={<BadgeGlyph className="h-6 w-6" />} t={`Family-run since ${FOUNDED}`} d="Same counter, same family" />
            <Trust icon={<ScissorsGlyph className="h-6 w-6" />} t="Cut to any length" d="No minimum length" />
            <Trust icon={<ChatGlyph className="h-6 w-6" />} t="Price on WhatsApp" d="Confirmed before we cut" />
            <Trust icon={<TruckGlyph className="h-6 w-6" />} t="Delivered across Pakistan" d="Or collect in Sialkot" />
          </ul>
        </section>

        {/* SHOP BY FABRIC */}
        <section id="collections" aria-labelledby="collections-title" className="py-20 md:py-28">
          <div className="mx-auto max-w-[1240px] px-5 md:px-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <SectionHead
                eyebrow="Shop by Fabric"
                id="collections-title"
                title={<>Six collections, <span className="display-italic text-gold-text">one counter</span></>}
                intro="Every bolt is sourced from the mills and cut to the length you need. Pick a collection to see what we keep in stock."
              />
              <Link href="/order-online" className="group shrink-0 inline-flex items-center gap-2 text-[15px] font-bold text-navy hover:text-gold-text transition-colors">
                How ordering online works <Arrow />
              </Link>
            </div>

            <ul className="mt-12 grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
              {CATEGORIES.map((c) => (
                <li key={c.slug}>
                  <Link href={`/${c.slug}`} className="group zoom relative block aspect-[4/5] overflow-hidden rounded-md bg-navy">
                    <Image
                      src={PHOTOS[c.photo].src}
                      alt={PHOTOS[c.photo].alt}
                      fill
                      sizes="(min-width: 1240px) 380px, (min-width: 1024px) 31vw, 46vw"
                      className="object-cover"
                      style={{ objectPosition: PHOTOS[c.photo].pos }}
                    />
                    <div className="absolute inset-0 shade-bottom" aria-hidden />
                    <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 text-cream">
                      <div className="flex items-end justify-between gap-3">
                        <p className="hidden sm:block text-[11px] font-bold tracking-[0.2em] uppercase text-gold-light">{c.season}</p>
                        <span lang="ur" dir="rtl" className="urdu hidden sm:block text-[18px] leading-none text-cream/85">{c.urdu}</span>
                      </div>
                      <h3 className="display sm:mt-2 text-[20px] sm:text-[30px] leading-[1.08]">
                        {c.h1.charAt(0).toUpperCase() + c.h1.slice(1)}
                      </h3>
                      <p className="hidden sm:block mt-2 text-[13px] text-cream/80 truncate">
                        {c.fabrics.slice(0, 3).map((f) => f.name).join(" · ")}
                      </p>
                      <span className="mt-2 sm:mt-4 inline-flex items-center gap-2 text-[13px] sm:text-[14px] font-bold text-gold-light sm:border-b sm:border-gold-light/60 sm:pb-0.5">
                        <span className="hidden sm:inline">See the collection</span> <Arrow />
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* STORY */}
        <section id="story" aria-labelledby="story-title" className="bg-white border-y border-navy/10 py-20 md:py-28">
          <div className="mx-auto max-w-[1240px] px-5 md:px-10 grid lg:grid-cols-12 gap-14 lg:gap-16 items-center">
            <figure className="lg:col-span-5 mx-auto w-full max-w-[420px]">
              <div className="frame">
                <div className="relative overflow-hidden rounded-md aspect-[4/5] bg-navy/10">
                  <Image
                    src="/father.jpg"
                    alt={`${PROPRIETOR}, proprietor of Shahzad Cloth House, at the shop counter in ${ADDRESS.city}`}
                    fill
                    sizes="(min-width: 1024px) 420px, 90vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <figcaption className="mt-7">
                <span className="display block text-[24px] text-navy-deep">{PROPRIETOR}</span>
                <span className="block mt-1 text-[11px] font-bold tracking-[0.24em] uppercase text-ink/65">Proprietor · since {FOUNDED}</span>
              </figcaption>
            </figure>

            <div className="lg:col-span-7">
              <SectionHead
                eyebrow="Our Story"
                id="story-title"
                title={<>{YEARS} years of cloth, <span className="display-italic text-gold-text">kept honestly.</span></>}
              />
              <div className="mt-7 space-y-5 text-[17px] leading-[1.8] text-ink/80 max-w-[620px]">
                <p>
                  Shahzad Cloth House opened its shutters in {FOUNDED}: a narrow door on a narrow lane at{" "}
                  {ADDRESS.street}, {ADDRESS.city}. My father, <strong className="text-navy-deep">{PROPRIETOR}</strong>,
                  measured his first thaan that summer. {YEARS} years on, the measuring tape is the same, the eye is
                  sharper, and the faces at the counter (aunts, nieces, grandsons) keep returning.
                </p>
                <p>
                  We buy direct, we keep lean, and we refuse what we wouldn&apos;t hand to family. If a bolt has a slub we
                  don&apos;t like, it goes back. If a print misregisters by a hair, it goes back.
                </p>
              </div>
              <blockquote className="mt-9 border-l-2 border-gold pl-6 max-w-[620px]">
                <p className="display-italic text-[28px] md:text-[34px] leading-[1.2] text-navy">
                  &ldquo;The cloth that stays on our shelves has earned the shelf.&rdquo;
                </p>
              </blockquote>
            </div>
          </div>
        </section>

        {/* WHAT WE SELL (plain-language guide, with links to every collection) */}
        <section aria-labelledby="guide-title" className="py-20 md:py-28">
          <div className="mx-auto max-w-[1240px] px-5 md:px-10 grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6">
              <SectionHead
                eyebrow="The Cloth House"
                id="guide-title"
                title={<>Fabric for <span className="display-italic text-gold-text">every season</span></>}
              />
              <div className="prose-shop mt-7 text-[17px] leading-[1.8] text-ink/80">
                <p>
                  <RichText text={`Shahzad Cloth House is a family cloth shop at ${ADDRESS.street}, ${ADDRESS.city}. We sell unstitched fabric for [ladies](/ladies-fabric) and [gents](/gents-fabric): printed and embroidered [lawn](/lawn) for summer, wash & wear and cotton for every day, [karandi and winter suiting](/winter-collection) for the cold months, and [bridal and groom fabric](/wedding-fabric) for weddings.`} />
                </p>
                <p>
                  <RichText text={`Customers outside Sialkot [order online](/order-online) on WhatsApp. Tell us the fabric, colour and length, we send photos and confirm the price, and we deliver anywhere in Pakistan. Schools and offices order [uniform fabric](/uniform-fabric) in bulk the same way.`} />
                </p>
              </div>
            </div>
            <dl className="lg:col-span-6 lg:pt-16 divide-y divide-navy/12 border-y border-navy/12">
              {SEASONS.map((s) => (
                <div key={s.k} className="py-5 grid grid-cols-[120px_1fr_auto] sm:grid-cols-[150px_1fr_auto] gap-4 items-center">
                  <dt className="eyebrow text-gold-text">{s.k}</dt>
                  <dd className="text-[16px] font-semibold text-navy-deep">{s.v}</dd>
                  <dd>
                    <Link href={s.href} className="group grid place-items-center h-10 w-10 rounded-full border border-navy/20 text-navy hover:bg-navy hover:text-cream transition-colors">
                      <Arrow />
                      <span className="sr-only">See {s.v}</span>
                    </Link>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <OrderSteps />

        {/* INSIDE THE SHOP */}
        <section id="inside" aria-labelledby="inside-title" className="py-20 md:py-28">
          <div className="mx-auto max-w-[1240px] px-5 md:px-10">
            <SectionHead
              eyebrow="Inside the Shop"
              id="inside-title"
              title={<>A look around <span className="display-italic text-gold-text">the shop</span></>}
              intro={`Real photos from our counter at ${ADDRESS.street}, ${ADDRESS.city}. What you see here is what we keep on the shelves.`}
            />
            <PhotoGrid photos={SHOP_GALLERY} />
          </div>
        </section>

        {/* PROMISES */}
        <section aria-labelledby="promise-title" className="bg-navy-deep text-cream py-20 md:py-28">
          <div className="mx-auto max-w-[1240px] px-5 md:px-10">
            <SectionHead
              dark
              eyebrow="The Standard"
              id="promise-title"
              title={<>What a <span className="display-italic text-gold-light">good thaan</span> feels like</>}
              intro={`Three principles we refuse to bend on. They're why the shop is still here ${YEARS} years later.`}
            />
            <div className="mt-14 grid gap-10 md:gap-8 md:grid-cols-3">
              {[
                { n: "01", t: "Hand-picked at the mill", d: "We source directly, bolt by bolt. Machines don't know a bad weave. We do, and we send it back." },
                { n: "02", t: "One fair price, stated", d: "No inflated tags to discount from. The price we quote on WhatsApp is the price you pay." },
                { n: "03", t: "A promise behind every cut", d: `If it doesn't hold its colour, its hand, or its word, bring it back. That's been the promise since ${FOUNDED}.` },
              ].map((v) => (
                <article key={v.n} className="border-t border-gold/50 pt-6">
                  <div className="display text-[40px] leading-none text-gold">{v.n}</div>
                  <h3 className="display mt-4 text-[28px] text-cream">{v.t}</h3>
                  <p className="mt-3 text-[15px] leading-[1.75] text-cream/80">{v.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* REVIEWS + SOCIAL */}
        <section id="reviews" aria-labelledby="reviews-title" className="py-20 md:py-28">
          <div className="mx-auto max-w-[1240px] px-5 md:px-10 grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-7 rounded-lg bg-white border border-navy/10 p-8 md:p-12">
              <GoogleLogo className="h-7" />
              <h2 id="reviews-title" className="display mt-6 text-[38px] md:text-[48px] leading-[1.05] text-navy-deep">
                What our <span className="display-italic text-gold-text">customers</span> say
              </h2>
              <div className="mt-4 flex gap-1 text-gold" aria-hidden>
                {[0, 1, 2, 3, 4].map((i) => (
                  <StarGlyph key={i} className="h-5 w-5" />
                ))}
              </div>
              <p className="mt-4 text-[16px] leading-[1.7] text-ink/75 max-w-[460px]">
                Read reviews from our customers on Google, or leave one of your own after your visit or delivery.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full bg-navy text-cream px-6 py-3.5 text-[15px] font-semibold hover:bg-navy-deep transition-colors">
                  Read reviews on Google
                </a>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full border border-navy/25 text-navy-deep px-6 py-3.5 text-[15px] font-semibold hover:border-navy transition-colors">
                  Leave a review
                </a>
              </div>
            </div>
            <div className="lg:col-span-5 rounded-lg bg-navy-deep text-cream p-8 md:p-10">
              <h2 className="display text-[32px] md:text-[38px] leading-[1.05]">
                Follow <span className="display-italic text-gold-light">the shop</span>
              </h2>
              <p className="mt-3 text-[15px] leading-[1.7] text-cream/80">Fresh arrivals, offers and life at the counter.</p>
              <ul className="mt-6 divide-y divide-cream/15 border-y border-cream/15">
                <Social href={TIKTOK_URL} icon={<TikTokGlyph className="h-5 w-5" />} name="TikTok" handle={`@${TIKTOK_HANDLE}`} />
                <Social href={INSTAGRAM_URL} icon={<InstagramGlyph className="h-5 w-5" />} name="Instagram" handle={`@${INSTAGRAM_HANDLE}`} />
                <Social href={FACEBOOK_URL} icon={<FacebookGlyph className="h-5 w-5" />} name="Facebook" handle={`@${FACEBOOK_HANDLE}`} />
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" aria-labelledby="faq-title" className="pb-20 md:pb-28">
          <div className="mx-auto max-w-[1240px] px-5 md:px-10 grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <SectionHead
                eyebrow="Good to Know"
                id="faq-title"
                title={<>Questions, <span className="display-italic text-gold-text">answered</span></>}
                intro="Still unsure? Call or WhatsApp us. We are happy to help before you visit or order."
              />
            </div>
            <div className="lg:col-span-8">
              <FaqList faqs={FAQS} />
            </div>
          </div>
        </section>

        {/* VISIT */}
        <section id="visit" aria-labelledby="visit-title" className="pb-20 md:pb-28">
          <div className="mx-auto max-w-[1240px] px-5 md:px-10">
            <div className="grid lg:grid-cols-12 rounded-lg overflow-hidden bg-white border border-navy/10">
              <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[400px] bg-navy">
                <Image
                  src={PHOTOS.shopfront.src}
                  alt={PHOTOS.shopfront.alt}
                  fill
                  sizes="(min-width: 1240px) 720px, (min-width: 1024px) 58vw, 100vw"
                  className="object-cover object-[center_45%]"
                />
              </div>
              <div className="lg:col-span-5 p-8 md:p-12">
                <p className="eyebrow text-gold-text flex items-center gap-3"><span className="diamond" aria-hidden />Visit the Shop</p>
                <h2 id="visit-title" className="display mt-4 text-[40px] md:text-[52px] leading-[1.02] text-navy-deep">
                  Come <span className="display-italic text-gold-text">feel</span> the cloth.
                </h2>
                <p className="mt-4 text-[16px] leading-[1.7] text-ink/75">
                  Fabric belongs in the hand. Unroll a thaan, hold it to the light, and take a cup of tea.
                </p>
                <address className="not-italic mt-8 space-y-5 text-[15px] text-ink">
                  <InfoRow icon={<PinGlyph className="h-4 w-4" />} label="Address">
                    Shahzad Cloth House<br />
                    {ADDRESS.street}, {ADDRESS.city}, {ADDRESS.region}
                  </InfoRow>
                  <InfoRow icon={<ClockGlyph className="h-4 w-4" />} label="Hours">
                    {HOURS.map((h) => (
                      <span key={h.days} className="block">
                        {h.days}: <span className="text-ink/70">{h.time}</span>
                      </span>
                    ))}
                  </InfoRow>
                  <InfoRow icon={<PhoneGlyph className="h-4 w-4" />} label="Phone & WhatsApp">
                    <a href={`tel:${PHONE_TEL}`} className="font-semibold hover:text-gold-text transition-colors">{PHONE_DISPLAY}</a>
                  </InfoRow>
                </address>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold text-navy-night px-6 py-3.5 text-[15px] font-semibold hover:bg-gold-light transition-colors"
                >
                  <PinGlyph className="h-4 w-4" />
                  Get directions on Google Maps
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

      <JsonLd
        data={pageJsonLd({
          path: "/",
          name: HOME_TITLE,
          description: HOME_DESCRIPTION,
          photo: "hero-shop",
          crumbs: [],
          faqs: FAQS,
        })}
      />
    </>
  );
}

/* ───────────── helpers ───────────── */

function Trust({ icon, t, d }: { icon: React.ReactNode; t: string; d: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="text-gold-text shrink-0 mt-0.5">{icon}</span>
      <span>
        <span className="block text-[14px] md:text-[15px] font-bold text-navy-deep">{t}</span>
        <span className="block text-[13px] text-ink/70">{d}</span>
      </span>
    </li>
  );
}

function Social({ href, icon, name, handle }: { href: string; icon: React.ReactNode; name: string; handle: string }) {
  return (
    <li>
      <a href={href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 py-4 hover:text-gold-light transition-colors">
        <span className="h-10 w-10 shrink-0 rounded-full border border-gold/50 text-gold-light grid place-items-center">{icon}</span>
        <span className="flex-1 min-w-0">
          <span className="block text-[15px] font-bold">{name}</span>
          <span className="block text-[13px] text-cream/75 truncate">{handle}</span>
        </span>
        <Arrow />
      </a>
    </li>
  );
}
