import Image from "next/image";
import Link from "next/link";
import { CATEGORIES } from "../categories";
import { SiteFooter, SiteHeader } from "../components/chrome";
import { OrderSteps } from "../components/order";
import { PhotoGrid } from "../components/gallery";
import { Arrow, CallButton, FaqList, SectionHead, WhatsAppButton } from "../components/ui";
import { PHOTOS } from "../photos";
import { JsonLd, pageJsonLd, pageMetadata } from "../seo";
import { ADDRESS, FOUNDED, PHONE_DISPLAY } from "../site";

const TITLE = "Unstitched Fabric Online in Pakistan | Shahzad Cloth House";
const DESCRIPTION =
  "Order lawn, wash & wear, karandi, wedding and uniform fabric on WhatsApp from a Sialkot cloth house. Cut to any length and delivered across Pakistan.";

export const metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/order-online",
  og: "order-online",
  ogAlt: PHOTOS["order-online"].alt,
});

const FAQS = [
  {
    q: "How do I order fabric online?",
    a: `Message us on WhatsApp at ${PHONE_DISPLAY} with the fabric, colour and length you want, or send a photo. We confirm what is in stock, agree the price and delivery with you, then cut and send your order.`,
  },
  {
    q: "Do you deliver everywhere in Pakistan?",
    a: `Yes. We send orders from our shop in ${ADDRESS.city} to customers anywhere in Pakistan, whether you are in Lahore, Karachi, Islamabad, Gujranwala, Gujrat or a smaller town.`,
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
    q: "Can I buy fabric by the metre?",
    a: "Yes. Every bolt is cut to the length you ask for, with no minimum, so you can order by the metre or by the suit.",
  },
  {
    q: "Do you take bulk or wholesale orders?",
    a: "Yes. We take larger orders for schools, offices, hospitals, shops and family weddings. Tell us the fabric and quantity on WhatsApp and we will quote.",
  },
];

export default function OrderOnlinePage() {
  return (
    <>
      <SiteHeader current="/order-online" />

      <main id="main">
        {/* HERO */}
        <section aria-labelledby="page-title" className="overflow-hidden">
          <div className="mx-auto max-w-[1240px] px-5 md:px-10 pt-6 pb-16 md:pt-8 md:pb-24">
            <nav aria-label="Breadcrumb" className="text-[13px] text-ink/70">
              <ol className="flex items-center gap-2">
                <li><Link href="/" className="hover:text-navy underline-offset-4 hover:underline">Home</Link></li>
                <li aria-hidden className="text-gold-text">/</li>
                <li aria-current="page" className="font-semibold text-navy-deep">Order online</li>
              </ol>
            </nav>

            <div className="mt-8 md:mt-12 grid lg:grid-cols-12 gap-12 lg:gap-14 lg:items-center">
              <div className="lg:col-span-7">
                <p className="eyebrow text-gold-text flex items-center gap-3"><span className="diamond" aria-hidden />Order Online · Since {FOUNDED}</p>
                <h1 id="page-title" className="display mt-5 text-[44px] sm:text-[58px] lg:text-[66px] leading-[1] text-navy-deep">
                  Unstitched fabric online, <span className="display-italic text-gold-text">delivered across Pakistan</span>
                </h1>
                <p className="mt-6 text-[17px] md:text-[18px] leading-[1.7] text-ink/80 max-w-[580px]">
                  Lawn, wash &amp; wear, karandi, wedding and uniform fabric from our shop in {ADDRESS.city}, cut to the
                  length you need. Tell us what you want on WhatsApp and we will send it to your door.
                </p>
                <div className="mt-8 grid sm:flex sm:flex-wrap items-center gap-3">
                  <WhatsAppButton topic="ordering fabric for delivery." />
                  <CallButton />
                </div>
                <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[14px] font-semibold text-navy-deep">
                  {["Photos before you buy", "Price confirmed first", "Any length, no minimum"].map((t) => (
                    <li key={t} className="flex items-center gap-2"><span className="diamond" aria-hidden />{t}</li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-5">
                <div className="frame mx-auto w-full max-w-[440px]">
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md bg-navy/10">
                    <Image
                      src={PHOTOS["order-online"].src}
                      alt={PHOTOS["order-online"].alt}
                      fill
                      preload
                      fetchPriority="high"
                      sizes="(min-width: 1024px) 440px, 90vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <OrderSteps title={<>How ordering <span className="display-italic text-gold-text">works</span></>} photo="packing-urdu" />

        {/* WHAT YOU CAN ORDER */}
        <section aria-labelledby="shop-title" className="py-20 md:py-24">
          <div className="mx-auto max-w-[1240px] px-5 md:px-10">
            <SectionHead
              eyebrow="What You Can Order"
              id="shop-title"
              title={<>Every fabric on our <span className="display-italic text-gold-text">shelves</span></>}
              intro="Everything we keep at the shop can be ordered for delivery, cut to the length you ask for."
            />
            <ul className="mt-12 grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
              {CATEGORIES.map((c) => (
                <li key={c.slug}>
                  <Link href={`/${c.slug}`} className="group zoom relative block aspect-[4/5] sm:aspect-[3/2] lg:aspect-[4/3] overflow-hidden rounded-md bg-navy">
                    <Image
                      src={PHOTOS[c.photo].src}
                      alt=""
                      fill
                      sizes="(min-width: 1240px) 380px, (min-width: 1024px) 31vw, 46vw"
                      className="object-cover"
                      style={{ objectPosition: PHOTOS[c.photo].pos }}
                    />
                    <div className="absolute inset-0 shade-bottom" aria-hidden />
                    <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 text-cream">
                      <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-gold-light">{c.eyebrow}</p>
                      <h3 className="display mt-2 text-[21px] sm:text-[26px] leading-[1.05]">
                        {c.h1.charAt(0).toUpperCase() + c.h1.slice(1)}
                      </h3>
                      <span className="mt-2 hidden sm:inline-flex items-center gap-2 text-[14px] font-bold text-gold-light">
                        See the collection <Arrow />
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FROM THE COUNTER */}
        <section aria-labelledby="counter-title" className="bg-white border-y border-navy/10 py-20 md:py-24">
          <div className="mx-auto max-w-[1240px] px-5 md:px-10">
            <SectionHead
              eyebrow="From Our Counter"
              id="counter-title"
              title={<>Cut, packed and <span className="display-italic text-gold-text">sent to you</span></>}
              intro={`Every order is measured and cut at our counter in ${ADDRESS.city}, then packed in our own bag and sent to your door.`}
            />
            <PhotoGrid photos={["thaan-2", "lawn", "gents-counter", "shopfront"]} />
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
                className="group inline-flex items-center gap-2 rounded-full bg-gold text-navy-night px-6 py-3.5 text-[15px] font-semibold hover:bg-gold-light transition-colors"
              >
                See uniform fabric <Arrow />
              </Link>
              <WhatsAppButton topic="a bulk fabric order." label="Ask for a quote" />
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
                title={<>Ordering <span className="display-italic text-gold-text">questions</span></>}
              />
            </div>
            <div className="lg:col-span-8">
              <FaqList faqs={FAQS} />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

      <JsonLd
        data={pageJsonLd({
          path: "/order-online",
          name: "Order unstitched fabric online",
          description: DESCRIPTION,
          photo: "order-online",
          crumbs: [{ name: "Order online", path: "/order-online" }],
          faqs: FAQS,
        })}
      />
    </>
  );
}
