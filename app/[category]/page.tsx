import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CATEGORIES, CATEGORY_BY_SLUG, deliveryFaq } from "../categories";
import { SiteFooter, SiteHeader } from "../components/chrome";
import { PhotoGrid } from "../components/gallery";
import { OrderSteps } from "../components/order";
import { PHOTOS } from "../photos";
import { Arrow, PhoneGlyph, PinGlyph, SectionHead, WhatsAppGlyph } from "../components/ui";
import {
  ADDRESS,
  FOUNDED,
  HOURS,
  MAPS_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  SITE_URL,
  YEARS,
  whatsappUrl,
} from "../site";

type Props = { params: Promise<{ category: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const c = CATEGORY_BY_SLUG[category];
  if (!c) return {};
  const url = `/${c.slug}`;
  return {
    title: { absolute: `${c.metaTitle} | Shahzad Cloth House` },
    description: c.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: `${c.metaTitle} | Shahzad Cloth House`,
      description: c.metaDescription,
      siteName: "Shahzad Cloth House",
      locale: "en_PK",
      images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Shahzad Cloth House, Sialkot" }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${c.metaTitle} | Shahzad Cloth House`,
      description: c.metaDescription,
      images: ["/og.jpg"],
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const c = CATEGORY_BY_SLUG[category];
  if (!c) notFound();

  const pageUrl = `${SITE_URL}/${c.slug}`;
  const faqs = [...c.faqs, deliveryFaq(c)];
  const pageName = `${c.h1.charAt(0).toUpperCase()}${c.h1.slice(1)} ${c.h1Accent}`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: pageName, item: pageUrl },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${pageUrl}#page`,
      url: pageUrl,
      name: pageName,
      description: c.metaDescription,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#store` },
      inLanguage: "en-PK",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];
  const related = c.related.map((slug) => CATEGORY_BY_SLUG[slug]).filter(Boolean);

  return (
    <>
      <SiteHeader />

      <main id="main">
        {/* HERO */}
        <section aria-labelledby="page-title" className="relative bg-navy-night text-cream overflow-hidden">
          <div className="relative mx-auto max-w-[1240px] px-5 md:px-10 pt-8 pb-16 md:pt-10 md:pb-20">
            <nav aria-label="Breadcrumb" className="text-[13px] text-cream/60">
              <ol className="flex items-center gap-2">
                <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
                <li aria-hidden>/</li>
                <li aria-current="page" className="text-cream/90">{c.navLabel}</li>
              </ol>
            </nav>

            <div className="mt-6 md:mt-10 lg:mt-12 grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              <div className="lg:col-span-7">
                <p className="rise eyebrow text-gold">{c.eyebrow}</p>
                <h1 id="page-title" className="rise rise-2 display mt-5 text-[44px] sm:text-[58px] md:text-[70px] leading-[1]">
                  {c.h1.charAt(0).toUpperCase() + c.h1.slice(1)}{" "}
                  <span className="display-italic text-gold-light">{c.h1Accent}</span>
                </h1>
                <p lang="ur" dir="rtl" className="rise rise-3 urdu mt-3 text-[24px] text-gold-light/90 text-right sm:text-left">
                  {c.urdu}
                </p>
                <p className="rise rise-3 mt-4 text-[17px] md:text-[18px] leading-[1.7] text-cream/80 max-w-[580px]">
                  {c.lead}
                </p>
                <div className="rise rise-4 mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href={whatsappUrl(`${c.navLabel.toLowerCase()} fabric.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 bg-[#25D366] text-[#05290F] px-5 py-3 md:px-6 md:py-3.5 rounded-md text-[14px] md:text-[15px] font-semibold hover:brightness-105 transition"
                  >
                    <WhatsAppGlyph className="h-5 w-5" />
                    Ask what&apos;s in stock
                  </a>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="inline-flex items-center gap-2.5 bg-cream text-navy-deep px-5 py-3 md:px-6 md:py-3.5 rounded-md text-[14px] md:text-[15px] font-semibold hover:bg-white transition-colors"
                  >
                    <PhoneGlyph className="h-4 w-4" />
                    Call {PHONE_DISPLAY}
                  </a>
                </div>
                <p className="rise rise-4 mt-5 text-[14px] text-cream/70">
                  <span className="text-gold">Delivery across Pakistan.</span> Order on WhatsApp, or visit the shop in {ADDRESS.city}.
                </p>
              </div>

              <div className="lg:col-span-5 order-first lg:order-none">
                <div className="relative aspect-[3/2] lg:aspect-[4/5] lg:max-h-[560px] w-full overflow-hidden rounded-md bg-navy">
                  <Image
                    src={PHOTOS[c.photo].src}
                    alt={PHOTOS[c.photo].alt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 460px, 92vw"
                    className="object-cover"
                    style={{ objectPosition: PHOTOS[c.photo].pos }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FABRICS */}
        <section aria-labelledby="fabrics-title" className="py-20 md:py-24">
          <div className="mx-auto max-w-[1240px] px-5 md:px-10 grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <SectionHead
                eyebrow="On Our Shelves"
                id="fabrics-title"
                title={
                  c.slug === "uniform-fabric"
                    ? <>What we <span className="display-italic text-navy">supply</span></>
                    : <>What we <span className="display-italic text-navy">keep in stock</span></>
                }
                intro={
                  c.slug === "uniform-fabric"
                    ? "Tell us the colour, the garment and the quantity, and we will match it from the mills and cut it to the metres you need."
                    : "Every bolt is sourced direct from the mills and cut to the length you need, with no minimums. Stock changes with the season, so ask us on WhatsApp before you visit."
                }
              />
            </div>
            <ol className="lg:col-span-8 border-t border-navy/15">
              {c.fabrics.map((f, i) => (
                <li key={f.name} className="grid grid-cols-[44px_1fr] sm:grid-cols-[56px_1fr_auto] gap-x-4 gap-y-3 items-baseline py-6 border-b border-navy/15">
                  <span className="text-[13px] font-semibold tracking-[0.16em] text-gold-dark">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="display text-[24px] md:text-[26px] text-ink">{f.name}</h3>
                    <p className="mt-1.5 text-[15px] leading-[1.65] text-ink/70">{f.note}</p>
                  </div>
                  <a
                    href={whatsappUrl(`${f.name.toLowerCase()}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="col-start-2 sm:col-start-3 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#128C4A] hover:text-[#0B6B37] transition-colors whitespace-nowrap"
                    aria-label={`Ask about ${f.name} on WhatsApp`}
                  >
                    <WhatsAppGlyph className="h-4 w-4" />
                    Ask
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* SHOP PHOTOS */}
        <section aria-labelledby="photos-title" className="pb-20 md:pb-24">
          <div className="mx-auto max-w-[1240px] px-5 md:px-10">
            <SectionHead
              eyebrow="At the Shop"
              id="photos-title"
              title={<>From our <span className="display-italic text-navy">shelves</span></>}
              intro={`Photos from our shop in ${ADDRESS.city}. Ask us on WhatsApp and we will send you photos of what is in stock today.`}
            />
            <PhotoGrid photos={c.gallery} />
          </div>
        </section>

        <OrderSteps topic={c.h1.toLowerCase()} />

        {/* GUIDE */}
        <section aria-labelledby="guide-title" className="relative bg-navy-deep text-cream py-20 md:py-24 overflow-hidden">
          <div className="relative mx-auto max-w-[1240px] px-5 md:px-10">
            <SectionHead
              dark
              eyebrow="Advice from the Counter"
              id="guide-title"
              title={<>{c.guideTitle.split(" ").slice(0, -1).join(" ")} <span className="display-italic text-gold-light">{c.guideTitle.split(" ").slice(-1)}</span></>}
              intro={`${YEARS} years of measuring cloth at the same counter teaches you a few things. Here is what we tell customers.`}
            />
            <div className="mt-12 grid gap-10 md:gap-8 md:grid-cols-3">
              {c.guide.map((g, i) => (
                <article key={g.title} className="border-t border-gold/40 pt-6">
                  <div className="text-[13px] font-semibold tracking-[0.2em] text-gold">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="display mt-4 text-[24px] text-cream">{g.title}</h3>
                  <p className="mt-3 text-[15px] leading-[1.75] text-cream/70">{g.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq-title" className="py-20 md:py-24">
          <div className="mx-auto max-w-[1240px] px-5 md:px-10 grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <SectionHead
                eyebrow="Good to Know"
                id="faq-title"
                title={<>Common <span className="display-italic text-navy">questions</span></>}
              />
            </div>
            <div className="lg:col-span-8 divide-y divide-navy/10 border-y border-navy/10">
              {faqs.map((f, i) => (
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

        {/* RELATED */}
        <section aria-labelledby="related-title" className="bg-sand py-20 md:py-24">
          <div className="mx-auto max-w-[1240px] px-5 md:px-10">
            <SectionHead
              eyebrow="Explore More"
              id="related-title"
              title={<>More from <span className="display-italic text-navy">the shop</span></>}
            />
            <ul className="mt-10 grid gap-5 md:grid-cols-3">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link href={`/${r.slug}`} className="group block">
                    <div className="zoom relative aspect-[3/2] overflow-hidden rounded-md bg-navy/10">
                      <Image
                        src={PHOTOS[r.photo].src}
                        alt=""
                        fill
                        sizes="(min-width: 768px) 380px, 92vw"
                        className="object-cover"
                        style={{ objectPosition: PHOTOS[r.photo].pos }}
                      />
                    </div>
                    <div className="pt-5 flex items-center justify-between gap-4">
                      <div>
                        <div className="text-[11px] tracking-[0.24em] uppercase text-gold-dark font-semibold">{r.eyebrow}</div>
                        <div className="display mt-2 text-[24px] text-ink">
                          {r.h1.charAt(0).toUpperCase() + r.h1.slice(1)}
                        </div>
                      </div>
                      <span className="text-navy shrink-0"><Arrow /></span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* VISIT STRIP */}
        <section aria-labelledby="visit-title" className="py-20 md:py-24">
          <div className="mx-auto max-w-[1240px] px-5 md:px-10">
            <div className="relative rounded-lg overflow-hidden bg-navy-deep text-cream p-8 md:p-12 grid md:grid-cols-12 gap-8 items-center">
              <div className="relative md:col-span-7">
                <p className="eyebrow text-gold">Visit the Shop</p>
                <h2 id="visit-title" className="display mt-4 text-[38px] md:text-[52px]">
                  Feel it in the hand <span className="display-italic text-gold-light">before you buy.</span>
                </h2>
                <p className="mt-4 text-[16px] leading-[1.7] text-cream/70 max-w-[520px]">
                  Shahzad Cloth House, {ADDRESS.street}, {ADDRESS.city}. Family-run since {FOUNDED}.
                </p>
              </div>
              <div className="relative md:col-span-5 space-y-4">
                <ul className="space-y-1 text-[15px]">
                  {HOURS.map((h) => (
                    <li key={h.days} className="flex justify-between gap-4 border-b border-cream/10 pb-2">
                      <span>{h.days}</span>
                      <span className="text-cream/70 text-right">{h.time}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gold text-navy-night px-5 py-3 rounded-md text-[14px] font-semibold hover:bg-gold-light transition-colors"
                  >
                    <PinGlyph className="h-4 w-4" />
                    Get directions
                  </a>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="inline-flex items-center gap-2 border border-cream/30 px-5 py-3 rounded-md text-[14px] font-semibold hover:border-gold hover:text-gold transition-colors"
                  >
                    <PhoneGlyph className="h-4 w-4" />
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
