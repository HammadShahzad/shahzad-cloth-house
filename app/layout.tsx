import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope, Noto_Nastaliq_Urdu } from "next/font/google";
import "./globals.css";
import {
  ADDRESS,
  BUSINESS_NAME,
  BUSINESS_NAME_URDU,
  COLLECTIONS,
  FACEBOOK_URL,
  FOUNDED,
  GEO,
  INSTAGRAM_URL,
  MAPS_URL,
  PHONE_TEL,
  PROPRIETOR,
  SITE_URL,
  TIKTOK_URL,
} from "./site";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const nastaliq = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  variable: "--font-nastaliq",
  display: "swap",
  weight: ["400", "700"],
  preload: false,
});

const TITLE = "Shahzad Cloth House Sialkot | Unstitched Fabric, Delivered Across Pakistan";
const DESCRIPTION =
  "Unstitched lawn, wash & wear, silk, wedding, winter and uniform fabric from a Sialkot cloth house run since 1991. Order on WhatsApp, delivered across Pakistan.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s · ${BUSINESS_NAME}`,
  },
  description: DESCRIPTION,
  applicationName: BUSINESS_NAME,
  keywords: [
    "Shahzad Cloth House",
    "cloth house Sialkot",
    "cloth shop Sialkot",
    "fabric shop Sialkot",
    "Chowk Adda Pasrooriyan Sialkot",
    "unstitched fabric Sialkot",
    "lawn suits Sialkot",
    "wash and wear Sialkot",
    "gents suiting Sialkot",
    "bridal fabric Sialkot",
    "karandi Sialkot",
    "unstitched fabric online Pakistan",
    "uniform fabric Sialkot",
    "شہزاد کلاتھ ہاؤس",
  ],
  authors: [{ name: BUSINESS_NAME, url: SITE_URL }],
  creator: BUSINESS_NAME,
  publisher: BUSINESS_NAME,
  category: "shopping",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: SITE_URL,
    siteName: BUSINESS_NAME,
    title: "Shahzad Cloth House · Unstitched Fabric in Sialkot Since 1991",
    description:
      "Lawn, wash & wear, cotton, linen, silk, wedding and winter suiting for ladies & gents, cut to any length at Chowk Adda Pasrooriyan, Sialkot.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Shahzad Cloth House, Sialkot: unstitched fabric for ladies and gents since 1991",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shahzad Cloth House · Sialkot · Since 1991",
    description:
      "Unstitched fabric for ladies & gents at Chowk Adda Pasrooriyan, Sialkot. Lawn, wash & wear, silk, wedding and winter suiting.",
    images: ["/og.jpg"],
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
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  "@id": `${SITE_URL}/#store`,
  name: BUSINESS_NAME,
  alternateName: BUSINESS_NAME_URDU,
  url: SITE_URL,
  image: [`${SITE_URL}/og.jpg`, `${SITE_URL}/photos/shop/shopfront.jpg`, `${SITE_URL}/photos/shop/plain-suiting.jpg`, `${SITE_URL}/father.jpg`],
  logo: `${SITE_URL}/apple-touch-icon.png`,
  description:
    "Family-owned cloth house in Chowk Adda Pasrooriyan, Sialkot, Pakistan, selling unstitched fabric for ladies and gents since 1991: lawn, wash & wear, cotton, linen, silk, wedding wear and winter suiting.",
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
    itemListElement: COLLECTIONS.map((c) => ({
      "@type": "OfferCatalog",
      name: c.name,
      description: c.blurb,
    })),
  },
  sameAs: [MAPS_URL, TIKTOK_URL, INSTAGRAM_URL, FACEBOOK_URL],
};

const siteJsonLd = {
  "@context": "https://schema.org",
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
      className={`${fraunces.variable} ${manrope.variable} ${nastaliq.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(storeJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
      </body>
    </html>
  );
}
