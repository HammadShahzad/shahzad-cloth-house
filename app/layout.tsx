import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope, Noto_Nastaliq_Urdu } from "next/font/google";
import Script from "next/script";
import "./globals.css";

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
});

const SITE_URL = "https://shahzadclothhouse.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Shahzad Cloth House — Fabric Heritage Since 1991 | Sialkot, Pakistan",
    template: "%s · Shahzad Cloth House",
  },
  description:
    "Shahzad Cloth House — family-run fabric house since 1991 in Chowk Adda Pasrooriyan, Sialkot, Pakistan. Premium unstitched cloth: lawn, cotton, linen, silk, wash & wear, suiting, and wedding wear from the country's finest mills.",
  applicationName: "Shahzad Cloth House",
  keywords: [
    "Shahzad Cloth House",
    "cloth house Sialkot",
    "fabric shop Sialkot",
    "Chowk Adda Pasrooriyan Sialkot",
    "unstitched fabric Pakistan",
    "lawn suits Sialkot",
    "wash and wear fabric",
    "men's suiting Sialkot",
    "wedding fabric Pakistan",
    "dress material Sialkot",
    "Pakistani fabric store",
    "cotton linen silk Pakistan",
    "shahzadclothhouse.com",
  ],
  authors: [{ name: "Shahzad Cloth House" }],
  creator: "Shahzad Cloth House",
  publisher: "Shahzad Cloth House",
  category: "shopping",
  alternates: {
    canonical: "/",
    languages: {
      "en-PK": "/",
      "ur-PK": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: SITE_URL,
    siteName: "Shahzad Cloth House",
    title: "Shahzad Cloth House — Fabric Heritage Since 1991",
    description:
      "A family fabric house in Chowk Adda Pasrooriyan, Sialkot, serving customers since 1991. Lawn, suiting, silk, linen, wedding wear — handpicked from Pakistan's finest mills.",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "Shahzad Cloth House — Since 1991",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shahzad Cloth House — Since 1991",
    description:
      "Family fabric house in Chowk Adda Pasrooriyan, Sialkot. Premium unstitched cloth from Pakistan's finest mills.",
    images: ["/og.svg"],
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
    apple: "/apple-touch-icon.svg",
  },
  formatDetection: {
    email: true,
    telephone: true,
    address: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#15235C",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const storeJsonLd = {
  "@context": "https://schema.org",
  "@type": ["ClothingStore", "LocalBusiness"],
  "@id": `${SITE_URL}#store`,
  name: "Shahzad Cloth House",
  alternateName: "شہزاد کلاتھ ہاؤس",
  url: SITE_URL,
  image: `${SITE_URL}/og.svg`,
  logo: `${SITE_URL}/favicon.svg`,
  description:
    "Family-owned fabric house in Chowk Adda Pasrooriyan, Sialkot, Pakistan — offering premium unstitched cloth (lawn, cotton, linen, silk, suiting, and wedding wear) since 1991.",
  slogan: "Fabric Heritage Since 1991",
  foundingDate: "1991",
  priceRange: "₨₨",
  currenciesAccepted: "PKR",
  paymentAccepted: "Cash, Bank Transfer",
  telephone: "+923006143230",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+923006143230",
      contactType: "customer service",
      areaServed: "PK",
      availableLanguage: ["English", "Urdu", "Punjabi"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Chowk Adda Pasrooriyan",
    addressLocality: "Sialkot",
    addressRegion: "Punjab",
    addressCountry: "PK",
  },
  founder: {
    "@type": "Person",
    name: "Shahzad Ahmad",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 32.4945,
    longitude: 74.5229,
  },
  hasMap: "https://maps.app.goo.gl/LvhtWzgEjP6j29mm8",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Saturday",
        "Sunday",
      ],
      opens: "10:00",
      closes: "22:00",
    },
  ],
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Product", name: "Unstitched Lawn" } },
    { "@type": "Offer", itemOffered: { "@type": "Product", name: "Wash & Wear Suiting" } },
    { "@type": "Offer", itemOffered: { "@type": "Product", name: "Premium Cotton & Linen" } },
    { "@type": "Offer", itemOffered: { "@type": "Product", name: "Silk & Embroidered Fabric" } },
    { "@type": "Offer", itemOffered: { "@type": "Product", name: "Wedding Wear" } },
    { "@type": "Offer", itemOffered: { "@type": "Product", name: "Men's Shirting" } },
  ],
  sameAs: [
    "https://maps.app.goo.gl/LvhtWzgEjP6j29mm8",
    "https://www.tiktok.com/@shahzadclothhouseskt",
    "https://www.instagram.com/shahzadclothhouse/",
    "https://www.facebook.com/shahzadclothhouseskt/",
  ],
};

const siteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: SITE_URL,
  name: "Shahzad Cloth House",
  inLanguage: ["en-PK", "ur-PK"],
  publisher: { "@id": `${SITE_URL}#store` },
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
      <body className="grain" suppressHydrationWarning>
        {children}
        <Script
          id="ld-store"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify(storeJsonLd)}
        </Script>
        <Script
          id="ld-site"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify(siteJsonLd)}
        </Script>
      </body>
    </html>
  );
}
