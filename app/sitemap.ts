import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://shahzadclothhouse.com";
  const lastModified = new Date();
  return [
    {
      url: `${base}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          "en-PK": `${base}/`,
          "ur-PK": `${base}/`,
        },
      },
    },
  ];
}
