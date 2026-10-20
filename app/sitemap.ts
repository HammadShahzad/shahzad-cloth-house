import type { MetadataRoute } from "next";
import { CATEGORIES } from "./categories";
import { PHOTOS, SHOP_GALLERY } from "./photos";
import { CONTENT_UPDATED, SITE_URL } from "./site";

// A fixed date, so Google can trust lastmod. Bump CONTENT_UPDATED in site.ts when page copy changes.
const lastModified = new Date(CONTENT_UPDATED);
const abs = (src: string) => `${SITE_URL}${src}`;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      images: [PHOTOS.shopfront.src, PHOTOS["suiting-close"].src, "/father.jpg", ...SHOP_GALLERY.map((k) => PHOTOS[k].src)].map(abs),
    },
    {
      url: `${SITE_URL}/order-online`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      images: [PHOTOS["order-online"].src, PHOTOS["packing-urdu"].src].map(abs),
    },
    ...CATEGORIES.map((c) => ({
      url: `${SITE_URL}/${c.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [...new Set([c.photo, ...c.gallery])].map((k) => abs(PHOTOS[k].src)),
    })),
  ];
}
