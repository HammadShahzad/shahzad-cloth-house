import type { MetadataRoute } from "next";
import { CATEGORIES } from "./categories";
import { PHOTOS, SHOP_GALLERY } from "./photos";
import { SITE_URL } from "./site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      images: [PHOTOS.shopfront.src, PHOTOS["hero-shop"].src, "/father.jpg", ...SHOP_GALLERY.map((k) => PHOTOS[k].src)].map((src) => `${SITE_URL}${src}`),
    },
    {
      url: `${SITE_URL}/order-online`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      images: [`${SITE_URL}${PHOTOS["order-online"].src}`],
    },
    ...CATEGORIES.map((c) => ({
      url: `${SITE_URL}/${c.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [c.photo, ...c.gallery].map((k) => `${SITE_URL}${PHOTOS[k].src}`),
    })),
  ];
}
