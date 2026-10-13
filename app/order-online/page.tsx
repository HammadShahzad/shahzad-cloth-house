import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CATEGORIES } from "../categories";
import { SiteFooter, SiteHeader } from "../components/chrome";
import { OrderSteps } from "../components/order";
import { Arrow, PhoneGlyph, SectionHead, WhatsAppGlyph } from "../components/ui";
import { PHOTOS } from "../photos";
import { ADDRESS, FOUNDED, PHONE_DISPLAY, PHONE_TEL, SITE_URL, whatsappUrl } from "../site";

const TITLE = "Order Unstitched Fabric Online in Pakistan | Shahzad Cloth House";
const DESCRIPTION =
  "Order unstitched lawn, wash & wear, karandi, wedding and uniform fabric on WhatsApp from a Sialkot cloth house run since 1991. Cut to any length and delivered across Pakistan.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/order-online" },
  openGraph: {
    type: "website",
    url: "/order-online",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Shahzad Cloth House",
    locale: "en_PK",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Shahzad Cloth House, Sialkot" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/og.jpg"] },
};

const FAQS = [
  {
    q: "How do I order fabric online?",
    a: `Message us on WhatsApp at ${PHONE_DISPLAY} with the fabric, colour and length you want, or send a photo. We confirm what is in stock, agree the price and delivery with you, then cut and send your order.`,
  },
  {
    q: "Do you deliver everywhere in Pakistan?",
    a: `Yes. We send orders from our shop in ${ADDRESS.city} to customers across Pakistan.`,
  },
  {
    q: "How much is delivery and how long does it take?",
    a: "It depends on your city and the size of the order. We tell you the delivery charge and timing on WhatsApp before you confirm.",
  },
  {
    q: "How do I pay?",
    a: "We agree payment with you on WhatsApp when you place your order.",
  },
  {
    q: "Can I see the fabric before I order?",
    a: "Yes. Ask us on WhatsApp and we will send you photos of the fabric and help you choose the right length.",
  },
  {
    q: "Do you take bulk orders?",
    a: "Yes. We take larger orders for schools, offices, hospitals, shops and family weddings. Tell us the fabric and quantity on WhatsApp and we will quote.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Order online", item: `${SITE_URL}/order-online` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  },
];

export default function OrderOnlinePage() {
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
                <li aria-current="page" className="text-cream/90">Order online</li>
              </ol>
            </nav>

            <div className="mt-6 md:mt-10 lg:mt-12 grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              <div className="lg:col-span-7">
                <p className="rise eyebrow text-gold">Order Online · Since {FOUNDED}</p>
                <h1 id="page-title" className="rise rise-2 display mt-5 text-[42px] sm:text-[56px] md:text-[66px] leading-[1.02]">
                  Unstitched fabric online,{" "}
                  <span className="display-italic text-gold-light">delivered across Pakistan</span>
                </h1>
                <p className="rise rise-3 mt-6 text-[17px] md:text-[18px] leading-[1.7] text-cream/80 max-w-[580px]">
                  Lawn, wash &amp; wear, karandi, wedding and uniform fabric from our shop in {ADDRESS.city}, cut to the
                  length you need. Tell us what you want on WhatsApp and we will send it to your door.
                </p>
                <div className="rise rise-4 mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href={whatsappUrl("ordering fabric for delivery.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 bg-[#25D366] text-[#05290F] px-5 py-3 md:px-6 md:py-3.5 rounded-md text-[14px] md:text-[15px] font-semibold hover:brightness-105 transition"
                  >
                    <WhatsAppGlyph className="h-5 w-5" />
                    Order on WhatsApp
                  </a>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="inline-flex items-center gap-2.5 bg-cream text-navy-deep px-5 py-3 md:px-6 md:py-3.5 rounded-md text-[14px] md:text-[15px] font-semibold hover:bg-white transition-colors"
                  >
                    <PhoneGlyph className="h-4 w-4" />
                    Call {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
              <div className="lg:col-span-5 order-first lg:order-none">
                <div className="relative aspect-[3/2] lg:aspect-[4/5] lg:max-h-[560px] w-full overflow-hidden rounded-md bg-navy">
                  <Image
                    src={PHOTOS["order-online"].src}
                    alt={PHOTOS["order-online"].alt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 460px, 92vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <OrderSteps title={<>How ordering <span className="display-italic text-navy">works</span></>} />

        {/* WHAT YOU CAN ORDER */}
        <section aria-labelledby="shop-title" className="py-20 md:py-24">
          <div className="mx-auto max-w-[1240px] px-5 md:px-10">
            <SectionHead
              eyebrow="What You Can Order"
              id="shop-title"
              title={<>Every fabric on our <span className="display-italic text-navy">shelves</span></>}
              intro="Everything we keep at the shop can be ordered for delivery, cut to the length you ask for."
            />
            <ul className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {CATEGORIES.map((c) => (
                <li key={c.slug}>
                  <Link href={`/${c.slug}`} className="group block">
                    <div className="zoom relative aspect-[3/2] overflow-hidden rounded-md bg-navy/10">
                      <Image src={PHOTOS[c.photo].src} alt="" fill sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 92vw" className="object-cover" />
                    </div>
                    <div className="pt-5 flex items-center justify-between gap-4">
                      <div>
                        <div className="text-[11px] tracking-[0.24em] uppercase text-gold-dark font-semibold">{c.eyebrow}</div>
                        <div className="display mt-2 text-[24px] text-ink">{c.h1.charAt(0).toUpperCase() + c.h1.slice(1)}</div>
                      </div>
                      <span className="text-navy shrink-0"><Arrow /></span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* BULK */}
        <section aria-labelledby="bulk-title" className="bg-navy-deep text-cream py-20 md:py-24">
          <div className="mx-auto max-w-[1240px] px-5 md:px-10 grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <SectionHead
                dark
                eyebrow="Bulk & Custom Orders"
                id="bulk-title"
                title={<>Buying for a school, an office <span className="display-italic text-gold-light">or a wedding?</span></>}
                intro="We cut fabric for whole classes, staff teams, shops and family weddings. Tell us the fabric, colour and quantity, and we will quote on WhatsApp."
              />
            </div>
            <div className="lg:col-span-5 flex flex-wrap gap-3 lg:justify-end">
              <Link
                href="/uniform-fabric"
                className="inline-flex items-center gap-2 bg-gold text-navy-night px-6 py-3.5 rounded-md text-[15px] font-semibold hover:bg-gold-light transition-colors"
              >
                Uniform fabric <Arrow />
              </Link>
              <a
                href={whatsappUrl("a bulk fabric order.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-cream/30 px-6 py-3.5 rounded-md text-[15px] font-semibold hover:border-gold hover:text-gold transition-colors"
              >
                <WhatsAppGlyph className="h-4 w-4" />
                Ask for a quote
              </a>
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
                title={<>Ordering <span className="display-italic text-navy">questions</span></>}
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
      </main>

      <SiteFooter />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
