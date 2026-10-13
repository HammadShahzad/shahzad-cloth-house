import type { MetadataRoute } from "next";
import { CATEGORIES } from "./categories";
import { SITE_URL } from "./site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      images: [`${SITE_URL}/fabrics-ladies-gents.jpg`, `${SITE_URL}/father.jpg`],
    },
    ...CATEGORIES.map((c) => ({
      url: `${SITE_URL}/${c.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
