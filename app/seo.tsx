import type { Metadata } from "next";
import { PHOTOS, type PhotoKey } from "./photos";
import { BUSINESS_NAME, SITE_URL } from "./site";

/** Social preview images live in public/og/ and are made by scripts/make-og.py. */
export const ogImagePath = (name: string) => `/og/${name}.jpg`;

/** Title, description, canonical and social tags for one page. */
export function pageMetadata({
  title,
  description,
  path,
  og,
  ogAlt,
}: {
  title: string;
  description: string;
  path: string;
  og: string;
  ogAlt: string;
}): Metadata {
  const image = { url: ogImagePath(og), width: 1200, height: 630, alt: ogAlt, type: "image/jpeg" };
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_PK",
      url: path,
      siteName: BUSINESS_NAME,
      title,
      description,
      images: [image],
    },
    twitter: { card: "summary_large_image", title, description, images: [image.url] },
  };
}

type Crumb = { name: string; path: string };
type Faq = { q: string; a: string };

/**
 * One JSON-LD graph per page: the web page, its breadcrumb and its FAQ.
 * The store and the website themselves are described once, in the root layout.
 */
export function pageJsonLd({
  type = "WebPage",
  path,
  name,
  description,
  photo,
  crumbs,
  faqs,
}: {
  type?: "WebPage" | "CollectionPage";
  path: string;
  name: string;
  description: string;
  photo: PhotoKey;
  crumbs: Crumb[];
  faqs: Faq[];
}) {
  const url = `${SITE_URL}${path}`;
  const all = [{ name: "Home", path: "/" }, ...crumbs];
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": type,
        "@id": `${url}#webpage`,
        url,
        name,
        description,
        inLanguage: "en-PK",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#store` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${SITE_URL}${PHOTOS[photo].src}`,
          caption: PHOTOS[photo].alt,
        },
        ...(crumbs.length ? { breadcrumb: { "@id": `${url}#breadcrumb` } } : {}),
      },
      ...(crumbs.length
        ? [
            {
              "@type": "BreadcrumbList",
              "@id": `${url}#breadcrumb`,
              itemListElement: all.map((c, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: c.name,
                item: `${SITE_URL}${c.path === "/" ? "/" : c.path}`,
              })),
            },
          ]
        : []),
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        isPartOf: { "@id": `${url}#webpage` },
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
}

/** Renders JSON-LD safely (escapes "<" so text can never close the script tag). */
export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
