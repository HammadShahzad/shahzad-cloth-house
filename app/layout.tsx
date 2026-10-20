import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { CATEGORIES } from "./categories";
import { JsonLd, ogImagePath } from "./seo";
import {
  ADDRESS,
  BUSINESS_NAME,
  BUSINESS_NAME_URDU,
  FACEBOOK_URL,
  FOUNDED,
  GEO,
  HOME_DESCRIPTION,
  HOME_TITLE,
  INSTAGRAM_URL,
  MAPS_URL,
  PHONE_TEL,
  PROPRIETOR,
  SITE_URL,
  TIKTOK_URL,
} from "./site";

// Headings use Cormorant at one weight, upright and italic. Two files instead of a whole family.
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: "600",
  style: "normal",
});

const cormorantItalic = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant-italic",
  display: "swap",
  weight: "500",
  style: "italic",
  preload: false,
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

// Only the Urdu words the site shows. Rebuild with scripts/subset-urdu.py after changing Urdu text.
const nastaliq = localFont({
  src: "./fonts/nastaliq-subset.woff2",
  variable: "--font-nastaliq",
  display: "swap",
  preload: false,
});

const TITLE = HOME_TITLE;
const DESCRIPTION = HOME_DESCRIPTION;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s · ${BUSINESS_NAME}`,
  },
  description: DESCRIPTION,
  applicationName: BUSINESS_NAME,
  authors: [{ name: BUSINESS_NAME, url: SITE_URL }],
  creator: BUSINESS_NAME,
  publisher: BUSINESS_NAME,
  category: "shopping",
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "/",
    siteName: BUSINESS_NAME,
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: ogImagePath("home"), width: 1200, height: 630, alt: "Suiting shelves at Shahzad Cloth House, Sialkot", type: "image/jpeg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [ogImagePath("home")],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: "/apple-touch-icon.png",
  },
  formatDetection: {
    email: false,
    telephone: true,
    address: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0A1740",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const storeJsonLd = {
  "@type": "ClothingStore",
  "@id": `${SITE_URL}/#store`,
  name: BUSINESS_NAME,
  alternateName: BUSINESS_NAME_URDU,
  url: SITE_URL,
  image: [`${SITE_URL}/photos/shop/shopfront.jpg`, `${SITE_URL}/photos/shop/plain-suiting.jpg`, `${SITE_URL}/photos/shop/suiting-wall.jpg`, `${SITE_URL}/father.jpg`],
  logo: { "@type": "ImageObject", url: `${SITE_URL}/apple-touch-icon.png`, width: 180, height: 180 },
  description:
    "Family-run cloth house at Chowk Adda Pasrooriyan, Sialkot, selling unstitched fabric for ladies and gents since 1991: lawn, wash & wear, cotton, linen, silk, wedding, winter and uniform fabric. Orders are taken on WhatsApp and delivered across Pakistan.",
  slogan: "Fabric Heritage Since 1991",
  foundingDate: String(FOUNDED),
  priceRange: "₨₨",
  currenciesAccepted: "PKR",
  paymentAccepted: "Cash, Bank Transfer",
  telephone: PHONE_TEL,
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: PHONE_TEL,
      contactType: "customer service",
      areaServed: "PK",
      availableLanguage: ["English", "Urdu", "Punjabi"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: ADDRESS.street,
    addressLocality: ADDRESS.city,
    addressRegion: ADDRESS.region,
    addressCountry: ADDRESS.countryCode,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: GEO.lat,
    longitude: GEO.lng,
  },
  areaServed: [
    { "@type": "City", name: "Sialkot" },
    { "@type": "Country", name: "Pakistan" },
  ],
  hasMap: MAPS_URL,
  founder: { "@type": "Person", name: PROPRIETOR },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "10:00",
      closes: "22:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Unstitched fabric",
    itemListElement: CATEGORIES.map((c) => ({
      "@type": "OfferCatalog",
      name: c.navLabel === "Uniforms" ? "Uniform fabric" : `${c.h1.charAt(0).toUpperCase()}${c.h1.slice(1)}`,
      url: `${SITE_URL}/${c.slug}`,
    })),
  },
  knowsLanguage: ["en", "ur", "pa"],
  sameAs: [MAPS_URL, TIKTOK_URL, INSTAGRAM_URL, FACEBOOK_URL],
};

const siteJsonLd = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: BUSINESS_NAME,
  alternateName: BUSINESS_NAME_URDU,
  inLanguage: "en-PK",
  publisher: { "@id": `${SITE_URL}/#store` },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-PK"
      className={`${cormorant.variable} ${cormorantItalic.variable} ${manrope.variable} ${nastaliq.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        {children}
        <JsonLd data={{ "@context": "https://schema.org", "@graph": [storeJsonLd, siteJsonLd] }} />
      </body>
    </html>
  );
}
