import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GUIDES, GUIDE_BY_SLUG } from "../../guides";
import { SiteFooter, SiteHeader } from "../../components/chrome";
import { OrderSteps } from "../../components/order";
import { PHOTOS } from "../../photos";
import { JsonLd, pageJsonLd, pageMetadata } from "../../seo";
import { Arrow, CallButton, FaqList, RichText, SectionHead, WhatsAppButton } from "../../components/ui";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const g = GUIDE_BY_SLUG[slug];
  if (!g) return {};
  return pageMetadata({
    title: g.metaTitle,
    description: g.metaDescription,
    path: `/guides/${g.slug}`,
    og: g.og,
    ogAlt: PHOTOS[g.photo].alt,
  });
}

const dateLabel = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const g = GUIDE_BY_SLUG[slug];
  if (!g) notFound();

  const more = GUIDES.filter((o) => o.slug !== g.slug);

  return (
    <>
      <SiteHeader current="/guides" />

      <main id="main">
        <article aria-labelledby="page-title">
          <header className="overflow-hidden">
            <div className="mx-auto max-w-[1240px] px-5 md:px-10 pt-6 pb-12 md:pt-8 md:pb-16">
              <nav aria-label="Breadcrumb" className="text-[13px] text-ink/70">
                <ol className="flex flex-wrap items-center gap-2">
                  <li><Link href="/" className="hover:text-navy underline-offset-4 hover:underline">Home</Link></li>
                  <li aria-hidden className="text-gold-text">/</li>
                  <li><Link href="/guides" className="hover:text-navy underline-offset-4 hover:underline">Guides</Link></li>
                  <li aria-hidden className="text-gold-text">/</li>
                  <li aria-current="page" className="font-semibold text-navy-deep">{g.h1}</li>
                </ol>
              </nav>

              <div className="mt-8 md:mt-12 grid lg:grid-cols-12 gap-10 lg:gap-14 lg:items-center">
                <div className="lg:col-span-7">
                  <p className="eyebrow text-gold-text flex items-center gap-3"><span className="diamond" aria-hidden />Fabric Guide</p>
                  <h1 id="page-title" className="display mt-5 text-[42px] sm:text-[54px] lg:text-[62px] leading-[1] text-navy-deep">{g.h1}</h1>
                  <p className="mt-5 text-[17px] md:text-[18px] leading-[1.7] text-ink/80 max-w-[580px]">{g.lead}</p>
                  <p className="mt-5 text-[13px] text-ink/60">
                    By Shahzad Cloth House, Sialkot · <time dateTime={g.updated}>{dateLabel(g.updated)}</time>
                  </p>
                </div>
                <div className="lg:col-span-5">
                  <div className="frame mx-auto w-full max-w-[440px]">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md bg-navy/10">
                      <Image
                        src={PHOTOS[g.photo].src}
                        alt={PHOTOS[g.photo].alt}
                        fill
                        preload
                        fetchPriority="high"
                        sizes="(min-width: 1024px) 440px, 90vw"
                        className="object-cover"
                        style={{ objectPosition: PHOTOS[g.photo].pos }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <div className="bg-white border-y border-navy/10 py-16 md:py-20">
            <div className="mx-auto max-w-[760px] px-5 md:px-10 prose-shop text-[16px] md:text-[17px] leading-[1.8] text-ink/85">
              {g.sections.map((s) => (
                <section key={s.h2} className="mt-12 first:mt-0">
                  <h2 className="display text-[32px] md:text-[38px] leading-[1.1] text-navy-deep">{s.h2}</h2>
                  {s.paras?.map((p) => (
                    <p key={p.slice(0, 32)} className="mt-4"><RichText text={p} /></p>
                  ))}
                  {s.table && (
                    <div className="mt-6 overflow-x-auto rounded-md border border-navy/12">
                      <table className={`w-full ${s.table.head.length > 2 ? "min-w-[520px]" : ""} text-left text-[15px] leading-[1.55]`}>
                        <thead className="bg-ivory text-navy-deep">
                          <tr>
                            {s.table.head.map((h, i) => (
                              <th key={i} scope="col" className="px-4 py-3 font-bold">{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-navy/10">
                          {s.table.rows.map((r) => (
                            <tr key={r[0]}>
                              {r.map((cell, i) =>
                                i === 0 ? (
                                  <th key={i} scope="row" className="px-4 py-3 font-semibold text-navy-deep align-top">{cell}</th>
                                ) : (
                                  <td key={i} className="px-4 py-3 text-ink/80 align-top">{cell}</td>
                                ),
                              )}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                  {s.list && (
                    <ul className="mt-5 space-y-3">
                      {s.list.map((li) => (
                        <li key={li.slice(0, 32)} className="flex gap-3">
                          <span className="diamond mt-[0.6em] shrink-0" aria-hidden />
                          <span><RichText text={li} /></span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {s.after?.map((p) => (
                    <p key={p.slice(0, 32)} className="mt-4"><RichText text={p} /></p>
                  ))}
                </section>
              ))}

              <div className="mt-14 rounded-md border border-gold/60 bg-ivory p-6 md:p-8 not-prose">
                <p className="eyebrow text-gold-text flex items-center gap-3"><span className="diamond" aria-hidden />From our shelves</p>
                <p className="display mt-3 text-[28px] leading-[1.1] text-navy-deep">{g.shop.label}</p>
                <div className="mt-5 grid sm:flex sm:flex-wrap items-center gap-3">
                  <WhatsAppButton topic={`${g.h1.toLowerCase().replace(/\?$/, "")}.`} label="Ask on WhatsApp" />
                  <CallButton />
                </div>
                <Link href={g.shop.href} className="mt-5 inline-flex items-center gap-2 text-[15px] font-bold text-navy hover:text-gold-text">
                  See the collection <Arrow />
                </Link>
              </div>
            </div>
          </div>
        </article>

        <OrderSteps topic={`${g.shop.label.toLowerCase()}.`} />

        <section aria-labelledby="faq-title" className="py-20 md:py-24">
          <div className="mx-auto max-w-[1240px] px-5 md:px-10 grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <SectionHead eyebrow="Good to Know" id="faq-title" title={<>Common <span className="display-italic text-gold-text">questions</span></>} />
            </div>
            <div className="lg:col-span-8">
              <FaqList faqs={g.faqs} />
            </div>
          </div>
        </section>

        <section aria-labelledby="more-title" className="bg-sand py-20 md:py-24">
          <div className="mx-auto max-w-[1240px] px-5 md:px-10">
            <SectionHead eyebrow="Keep Reading" id="more-title" title={<>More fabric <span className="display-italic text-gold-text">guides</span></>} />
            <ul className="mt-10 grid gap-4 sm:gap-5 sm:grid-cols-3">
              {more.map((o) => (
                <li key={o.slug}>
                  <Link href={`/guides/${o.slug}`} className="group block h-full rounded-md border border-navy/12 bg-ivory p-6 hover:border-gold transition-colors">
                    <h3 className="display text-[25px] leading-[1.1] text-navy-deep">{o.h1}</h3>
                    <p className="mt-3 text-[15px] leading-[1.65] text-ink/75">{o.lead}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-[14px] font-bold text-navy group-hover:text-gold-text">Read the guide <Arrow /></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <SiteFooter />

      <JsonLd
        data={pageJsonLd({
          path: `/guides/${g.slug}`,
          name: g.h1,
          description: g.metaDescription,
          photo: g.photo,
          crumbs: [
            { name: "Guides", path: "/guides" },
            { name: g.h1, path: `/guides/${g.slug}` },
          ],
          faqs: g.faqs,
          article: { published: g.published, updated: g.updated },
        })}
      />
    </>
  );
}
