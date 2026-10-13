import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CATEGORIES, CATEGORY_BY_SLUG } from "../categories";
import { SiteFooter, SiteHeader } from "../components/chrome";
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
      mainEntity: c.faqs.map((f) => ({
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
        <section aria-labelledby="page-title" className="relative hero-glow text-cream overflow-hidden">
          <div className="absolute inset-0 weave" aria-hidden />
          <div className="relative mx-auto max-w-[1240px] px-5 md:px-10 pt-8 pb-16 md:pt-10 md:pb-24">
            <nav aria-label="Breadcrumb" className="text-[13px] text-cream/60">
              <ol className="flex items-center gap-2">
                <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
                <li aria-hidden>/</li>
                <li aria-current="page" className="text-cream/90">{c.navLabel}</li>
              </ol>
            </nav>

            <div className="mt-10 md:mt-14 grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
              <div className="lg:col-span-7">
                <p className="rise eyebrow text-gold">{c.eyebrow}</p>
                <h1 id="page-title" className="rise rise-2 display mt-5 text-[46px] sm:text-[60px] md:text-[76px] leading-[0.95]">
                  {c.h1.charAt(0).toUpperCase() + c.h1.slice(1)}{" "}
                  <span className="display-italic foil">{c.h1Accent}</span>
                </h1>
                <p className="rise rise-3 mt-6 text-[17px] md:text-[19px] leading-[1.65] text-cream/80 max-w-[580px]">
                  {c.lead}
                </p>
                <div className="rise rise-4 mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href={whatsappUrl(`${c.navLabel.toLowerCase()} fabric.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 bg-[#25D366] text-[#05290F] px-5 py-3 md:px-6 md:py-3.5 rounded-full text-[14px] md:text-[15px] font-semibold shadow-[0_10px_30px_-10px_rgba(37,211,102,0.6)] hover:brightness-105 transition"
                  >
                    <WhatsAppGlyph className="h-5 w-5" />
                    Ask what&apos;s in stock
                  </a>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="inline-flex items-center gap-2.5 bg-cream text-navy-deep px-5 py-3 md:px-6 md:py-3.5 rounded-full text-[14px] md:text-[15px] font-semibold hover:bg-white transition-colors"
                  >
                    <PhoneGlyph className="h-4 w-4" />
                    Call {PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 relative mx-auto w-full max-w-[300px] sm:max-w-[380px]">
                <div className="absolute -inset-3 arch border border-gold/40" aria-hidden />
                <div className={`group swatch ${c.swatch} relative arch aspect-[4/5] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)]`}>
                  <div className="absolute inset-0 z-[2] bg-gradient-to-t from-navy-night/60 via-transparent to-transparent" aria-hidden />
                  <span lang="ur" dir="rtl" className="urdu absolute bottom-5 inset-x-0 z-[3] text-center text-[30px] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                    {c.urdu}
                  </span>
                </div>
                <div className="absolute -left-4 sm:-left-8 top-8 bg-cream text-navy-deep rounded-2xl px-4 py-3 shadow-xl rotate-[-4deg] z-[4]">
                  <div className="text-[10px] tracking-[0.24em] uppercase text-navy/70">Season</div>
                  <div className="display text-[20px] leading-tight mt-0.5">{c.season}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FABRICS */}
        <section aria-labelledby="fabrics-title" className="py-20 md:py-24">
          <div className="mx-auto max-w-[1240px] px-5 md:px-10">
            <SectionHead
              eyebrow="On Our Shelves"
              id="fabrics-title"
              title={<>What we <span className="display-italic text-navy">keep in stock</span></>}
              intro="Every bolt is sourced direct from the mills and cut to the length you need, with no minimums. Stock changes with the season, so ask us on WhatsApp before you visit."
            />
            <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {c.fabrics.map((f) => (
                <li key={f.name}>
                  <article className="group h-full flex bg-white rounded-[20px] overflow-hidden border border-navy/10 hover:shadow-[0_24px_50px_-28px_rgba(10,23,64,0.45)] transition duration-500">
                    <div className={`swatch ${f.swatch} w-24 sm:w-28 shrink-0`} aria-hidden />
                    <div className="flex-1 p-5 md:p-6 flex flex-col">
                      <h3 className="display text-[24px] text-ink">{f.name}</h3>
                      <p className="mt-2 text-[14.5px] leading-[1.65] text-ink/70 flex-1">{f.note}</p>
                      <a
                        href={whatsappUrl(`${f.name.toLowerCase()}.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#128C4A] hover:text-[#0B6B37] transition-colors"
                        aria-label={`Ask about ${f.name} on WhatsApp`}
                      >
                        <WhatsAppGlyph className="h-4 w-4" />
                        Ask about {f.name.toLowerCase()}
                      </a>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* GUIDE */}
        <section aria-labelledby="guide-title" className="relative bg-navy-deep text-cream py-20 md:py-24 overflow-hidden">
          <div className="absolute inset-0 weave" aria-hidden />
          <div className="relative mx-auto max-w-[1240px] px-5 md:px-10">
            <SectionHead
              dark
              eyebrow="Advice from the Counter"
              id="guide-title"
              title={<>{c.guideTitle.split(" ").slice(0, -1).join(" ")} <span className="display-italic text-gold-light">{c.guideTitle.split(" ").slice(-1)}</span></>}
              intro={`${YEARS} years of measuring cloth at the same counter teaches you a few things. Here is what we tell customers.`}
            />
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {c.guide.map((g, i) => (
                <article key={g.title} className="rounded-[22px] border border-gold/25 bg-white/[0.03] p-7 md:p-8">
                  <div className="display-italic text-[44px] leading-none text-gold">{["I", "II", "III"][i]}</div>
                  <h3 className="display mt-5 text-[24px] text-cream">{g.title}</h3>
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
              {c.faqs.map((f, i) => (
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
                  <Link href={`/${r.slug}`} className="group block bg-white rounded-[20px] overflow-hidden border border-navy/10 hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(10,23,64,0.45)] transition duration-500">
                    <div className={`swatch ${r.swatch} aspect-[16/7]`} aria-hidden />
                    <div className="p-6 flex items-center justify-between gap-4">
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
            <div className="relative rounded-[28px] overflow-hidden bg-navy-deep text-cream p-8 md:p-12 grid md:grid-cols-12 gap-8 items-center">
              <div className="absolute inset-0 weave" aria-hidden />
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
                    className="inline-flex items-center gap-2 bg-gold text-navy-night px-5 py-3 rounded-full text-[14px] font-semibold hover:bg-gold-light transition-colors"
                  >
                    <PinGlyph className="h-4 w-4" />
                    Get directions
                  </a>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="inline-flex items-center gap-2 border border-cream/30 px-5 py-3 rounded-full text-[14px] font-semibold hover:border-gold hover:text-gold transition-colors"
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
