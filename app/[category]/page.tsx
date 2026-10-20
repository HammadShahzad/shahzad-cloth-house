import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CATEGORIES, CATEGORY_BY_SLUG, deliveryFaq, type Category } from "../categories";
import { SiteFooter, SiteHeader } from "../components/chrome";
import { PhotoGrid } from "../components/gallery";
import { OrderSteps } from "../components/order";
import { PHOTOS } from "../photos";
import { JsonLd, pageJsonLd, pageMetadata } from "../seo";
import {
  Arrow,
  CallButton,
  FaqList,
  PinGlyph,
  RichText,
  SectionHead,
  WhatsAppButton,
  WhatsAppGlyph,
} from "../components/ui";
import { ADDRESS, FOUNDED, HOURS, MAPS_URL, YEARS, whatsappUrl } from "../site";

type Props = { params: Promise<{ category: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ category: c.slug }));
}

const heading = (c: Category) => `${c.h1.charAt(0).toUpperCase()}${c.h1.slice(1)}`;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const c = CATEGORY_BY_SLUG[category];
  if (!c) return {};
  return pageMetadata({
    title: c.metaTitle,
    description: c.metaDescription,
    path: `/${c.slug}`,
    og: c.slug,
    ogAlt: PHOTOS[c.photo].alt,
  });
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const c = CATEGORY_BY_SLUG[category];
  if (!c) notFound();

  const faqs = [...c.faqs, deliveryFaq(c)];
  const related = c.related.map((slug) => CATEGORY_BY_SLUG[slug]).filter(Boolean);
  const isUniform = c.slug === "uniform-fabric";

  return (
    <>
      <SiteHeader current={`/${c.slug}`} />

      <main id="main">
        {/* HERO */}
        <section aria-labelledby="page-title" className="overflow-hidden">
          <div className="mx-auto max-w-[1240px] px-5 md:px-10 pt-6 pb-16 md:pt-8 md:pb-24">
            <nav aria-label="Breadcrumb" className="text-[13px] text-ink/70">
              <ol className="flex items-center gap-2">
                <li><Link href="/" className="hover:text-navy underline-offset-4 hover:underline">Home</Link></li>
                <li aria-hidden className="text-gold-text">/</li>
                <li aria-current="page" className="font-semibold text-navy-deep">{c.navLabel}</li>
              </ol>
            </nav>

            <div className="mt-8 md:mt-12 grid lg:grid-cols-12 gap-12 lg:gap-14 lg:items-center">
              <div className="lg:col-span-7">
                <p className="eyebrow text-gold-text flex items-center gap-3"><span className="diamond" aria-hidden />{c.eyebrow}</p>
                <h1 id="page-title" className="display mt-5 text-[46px] sm:text-[60px] lg:text-[70px] leading-[0.98] text-navy-deep">
                  {heading(c)} <span className="display-italic text-gold-text">{c.h1Accent}</span>
                </h1>
                <p lang="ur" dir="rtl" className="urdu mt-3 text-[24px] text-navy text-left">{c.urdu}</p>
                <p className="mt-4 text-[17px] md:text-[18px] leading-[1.7] text-ink/80 max-w-[580px]">{c.lead}</p>
                <div className="mt-8 grid sm:flex sm:flex-wrap items-center gap-3">
                  <WhatsAppButton topic={`${c.navLabel.toLowerCase()} fabric.`} label="Ask what's in stock" />
                  <CallButton />
                </div>
                <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[14px] font-semibold text-navy-deep">
                  {["Delivery across Pakistan", "Cut to any length", `In ${ADDRESS.city} since ${FOUNDED}`].map((t) => (
                    <li key={t} className="flex items-center gap-2"><span className="diamond" aria-hidden />{t}</li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-5">
                <div className="frame mx-auto w-full max-w-[440px]">
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md bg-navy/10">
                    <Image
                      src={PHOTOS[c.photo].src}
                      alt={PHOTOS[c.photo].alt}
                      fill
                      preload
                      fetchPriority="high"
                      sizes="(min-width: 1024px) 440px, 90vw"
                      className="object-cover"
                      style={{ objectPosition: PHOTOS[c.photo].pos }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT + FABRICS */}
        <section aria-labelledby="fabrics-title" className="bg-white border-y border-navy/10 py-20 md:py-24">
          <div className="mx-auto max-w-[1240px] px-5 md:px-10 grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <SectionHead
                eyebrow="On Our Shelves"
                id="fabrics-title"
                title={isUniform
                  ? <>What we <span className="display-italic text-gold-text">supply</span></>
                  : <>What we <span className="display-italic text-gold-text">keep in stock</span></>}
              />
              <div className="prose-shop mt-6 text-[16px] md:text-[17px] leading-[1.8] text-ink/80">
                {c.about.map((p) => (
                  <p key={p.slice(0, 24)}><RichText text={p} /></p>
                ))}
              </div>
            </div>
            <ul className="lg:col-span-7 grid sm:grid-cols-2 gap-4 content-start">
              {c.fabrics.map((f, i) => (
                <li key={f.name} className="rounded-md border border-navy/12 bg-ivory p-6 flex flex-col">
                  <span className="display text-[22px] leading-none text-gold-text" aria-hidden>{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="display mt-3 text-[26px] leading-[1.1] text-navy-deep">{f.name}</h3>
                  <p className="mt-2 text-[15px] leading-[1.65] text-ink/75 flex-1">{f.note}</p>
                  <a
                    href={whatsappUrl(`${f.name.toLowerCase()}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-[14px] font-bold text-whatsapp-text hover:text-navy transition-colors"
                  >
                    <WhatsAppGlyph className="h-4 w-4" />
                    Ask on WhatsApp<span className="sr-only"> about {f.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SHOP PHOTOS */}
        <section aria-labelledby="photos-title" className="py-20 md:py-24">
          <div className="mx-auto max-w-[1240px] px-5 md:px-10">
            <SectionHead
              eyebrow="At the Shop"
              id="photos-title"
              title={<>From our <span className="display-italic text-gold-text">shelves</span></>}
              intro={`Photos from our shop in ${ADDRESS.city}. Ask us on WhatsApp and we will send photos of what is in stock today.`}
            />
            <PhotoGrid photos={c.gallery} />
          </div>
        </section>

        {/* GUIDE */}
        <section aria-labelledby="guide-title" className="bg-navy-deep text-cream py-20 md:py-24">
          <div className="mx-auto max-w-[1240px] px-5 md:px-10">
            <SectionHead
              dark
              eyebrow="Advice from the Counter"
              id="guide-title"
              title={<>{c.guideTitle.split(" ").slice(0, -1).join(" ")} <span className="display-italic text-gold-light">{c.guideTitle.split(" ").slice(-1)}</span></>}
              intro={`${YEARS} years of measuring cloth at the same counter teaches you a few things. Here is what we tell customers.`}
            />
            <div className="mt-12 grid gap-10 md:gap-8 md:grid-cols-3">
              {c.guide.map((g, i) => (
                <article key={g.title} className="border-t border-gold/50 pt-6">
                  <div className="display text-[36px] leading-none text-gold">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="display mt-4 text-[27px] text-cream">{g.title}</h3>
                  <p className="mt-3 text-[15px] leading-[1.75] text-cream/80">{g.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <OrderSteps topic={c.h1.toLowerCase()} />

        {/* FAQ */}
        <section aria-labelledby="faq-title" className="py-20 md:py-24">
          <div className="mx-auto max-w-[1240px] px-5 md:px-10 grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <SectionHead
                eyebrow="Good to Know"
                id="faq-title"
                title={<>Common <span className="display-italic text-gold-text">questions</span></>}
              />
            </div>
            <div className="lg:col-span-8">
              <FaqList faqs={faqs} />
            </div>
          </div>
        </section>

        {/* RELATED */}
        <section aria-labelledby="related-title" className="bg-sand py-20 md:py-24">
          <div className="mx-auto max-w-[1240px] px-5 md:px-10">
            <SectionHead
              eyebrow="Explore More"
              id="related-title"
              title={<>More from <span className="display-italic text-gold-text">the shop</span></>}
            />
            <ul className="mt-10 grid gap-4 sm:gap-5 sm:grid-cols-3">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link href={`/${r.slug}`} className="group zoom relative block aspect-[3/2] sm:aspect-[4/5] overflow-hidden rounded-md bg-navy">
                    <Image
                      src={PHOTOS[r.photo].src}
                      alt=""
                      fill
                      sizes="(min-width: 1240px) 380px, (min-width: 640px) 31vw, 92vw"
                      className="object-cover"
                      style={{ objectPosition: PHOTOS[r.photo].pos }}
                    />
                    <div className="absolute inset-0 shade-bottom" aria-hidden />
                    <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 text-cream">
                      <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-gold-light">{r.eyebrow}</p>
                      <h3 className="display mt-2 text-[26px] leading-[1.05]">{heading(r)}</h3>
                      <span className="mt-3 inline-flex items-center gap-2 text-[14px] font-bold text-gold-light">
                        See the collection <Arrow />
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* VISIT STRIP */}
        <section aria-labelledby="visit-title" className="py-16 md:py-20">
          <div className="mx-auto max-w-[1240px] px-5 md:px-10">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7">
                <p className="eyebrow text-gold-text flex items-center gap-3"><span className="diamond" aria-hidden />Visit the Shop</p>
                <h2 id="visit-title" className="display mt-4 text-[38px] md:text-[48px] leading-[1.05] text-navy-deep">
                  Feel it in the hand <span className="display-italic text-gold-text">before you buy.</span>
                </h2>
                <p className="mt-4 text-[16px] leading-[1.7] text-ink/75 max-w-[520px]">
                  Shahzad Cloth House, {ADDRESS.street}, {ADDRESS.city}. Family-run since {FOUNDED}.
                </p>
              </div>
              <div className="md:col-span-5 space-y-4">
                <ul className="space-y-1 text-[15px]">
                  {HOURS.map((h) => (
                    <li key={h.days} className="flex justify-between gap-4 border-b border-navy/12 pb-2">
                      <span className="font-semibold text-navy-deep">{h.days}</span>
                      <span className="text-ink/70 text-right">{h.time}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gold text-navy-night px-6 py-3.5 text-[15px] font-semibold hover:bg-gold-light transition-colors"
                >
                  <PinGlyph className="h-4 w-4" />
                  Get directions
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

      <JsonLd
        data={pageJsonLd({
          type: "CollectionPage",
          path: `/${c.slug}`,
          name: `${heading(c)} ${c.h1Accent}`,
          description: c.metaDescription,
          photo: c.photo,
          crumbs: [{ name: heading(c), path: `/${c.slug}` }],
          faqs,
        })}
      />
    </>
  );
}
