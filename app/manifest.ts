import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Shahzad Cloth House",
    short_name: "Shahzad Cloth",
    description: "Unstitched fabric for ladies & gents in Sialkot since 1991.",
    start_url: "/",
    display: "browser",
    background_color: "#0A1740",
    theme_color: "#0A1740",
    icons: [
      { src: "/favicon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
