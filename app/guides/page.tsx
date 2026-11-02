import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GUIDES } from "../guides";
import { SiteFooter, SiteHeader } from "../components/chrome";
import { PHOTOS } from "../photos";
import { JsonLd, pageJsonLd, pageMetadata } from "../seo";
import { Arrow } from "../components/ui";
import { YEARS } from "../site";

const TITLE = "Fabric Guides from Sialkot | Shahzad Cloth House";
const DESCRIPTION =
  "Plain advice from a Sialkot cloth house: how much cloth a suit needs, karandi vs khaddar, wedding fabric for every function and caring for wash and wear.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/guides",
  og: "home",
  ogAlt: PHOTOS.thaan.alt,
});

export default function GuidesIndex() {
  return (
    <>
      <SiteHeader current="/guides" />

      <main id="main">
        <section aria-labelledby="page-title" className="overflow-hidden">
          <div className="mx-auto max-w-[1240px] px-5 md:px-10 pt-6 pb-16 md:pt-8 md:pb-20">
            <nav aria-label="Breadcrumb" className="text-[13px] text-ink/70">
              <ol className="flex items-center gap-2">
                <li><Link href="/" className="hover:text-navy underline-offset-4 hover:underline">Home</Link></li>
                <li aria-hidden className="text-gold-text">/</li>
                <li aria-current="page" className="font-semibold text-navy-deep">Guides</li>
              </ol>
            </nav>
            <div className="mt-8 md:mt-12 max-w-[760px]">
              <p className="eyebrow text-gold-text flex items-center gap-3"><span className="diamond" aria-hidden />Advice from the Counter</p>
              <h1 id="page-title" className="display mt-5 text-[46px] sm:text-[60px] leading-[0.98] text-navy-deep">
                Fabric <span className="display-italic text-gold-text">guides</span>
              </h1>
              <p className="mt-5 text-[17px] md:text-[18px] leading-[1.7] text-ink/80">
                {YEARS} years of cutting cloth at the same counter in Sialkot. These are the questions customers ask us most, answered plainly.
              </p>
            </div>
          </div>
        </section>

        <section aria-label="All guides" className="bg-white border-y border-navy/10 py-16 md:py-20">
          <ul className="mx-auto max-w-[1240px] px-5 md:px-10 grid gap-6 sm:grid-cols-2">
            {GUIDES.map((g) => (
              <li key={g.slug}>
                <Link href={`/guides/${g.slug}`} className="group zoom block h-full overflow-hidden rounded-md border border-navy/12 bg-ivory hover:border-gold transition-colors">
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-navy/10">
                    <Image
                      src={PHOTOS[g.photo].src}
                      alt=""
                      fill
                      sizes="(min-width: 1240px) 580px, (min-width: 640px) 46vw, 92vw"
                      className="object-cover"
                      style={{ objectPosition: PHOTOS[g.photo].pos }}
                    />
                  </div>
                  <div className="p-6 md:p-7">
                    <h2 className="display text-[28px] md:text-[32px] leading-[1.08] text-navy-deep">{g.h1}</h2>
                    <p className="mt-3 text-[15px] leading-[1.7] text-ink/75">{g.lead}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-[14px] font-bold text-navy group-hover:text-gold-text">Read the guide <Arrow /></span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <SiteFooter />

      <JsonLd
        data={pageJsonLd({
          type: "CollectionPage",
          path: "/guides",
          name: "Fabric guides",
          description: DESCRIPTION,
          photo: "thaan",
          crumbs: [{ name: "Guides", path: "/guides" }],
          faqs: [],
        })}
      />
    </>
  );
}
