import type { PhotoKey } from "./photos";

export const SITE_URL = "https://shahzadclothhouse.com";
export const BUSINESS_NAME = "Shahzad Cloth House";
export const BUSINESS_NAME_URDU = "شہزاد کلاتھ ہاؤس";
export const TAGLINE_URDU = "ورائٹی کا اعلیٰ مرکز";

export const FOUNDED = 1991;
export const YEARS = new Date().getFullYear() - FOUNDED;
export const PROPRIETOR = "Shahzad Ahmad";

export const ADDRESS = {
  street: "Chowk Adda Pasrooriyan",
  city: "Sialkot",
  region: "Punjab",
  country: "Pakistan",
  countryCode: "PK",
};
export const GEO = { lat: 32.4945, lng: 74.5229 };

export const PHONE_DISPLAY = "0300 6143230";
export const PHONE_TEL = "+923006143230";
const WHATSAPP_INTL = "923006143230";

export function whatsappUrl(topic = "") {
  const text = `Assalamu alaikum — I saw your website (shahzadclothhouse.com) and wanted to ask about ${topic}`;
  return `https://wa.me/${WHATSAPP_INTL}?text=${encodeURIComponent(text)}`;
}
export const WHATSAPP_URL = whatsappUrl();

export const MAPS_URL = "https://maps.app.goo.gl/LvhtWzgEjP6j29mm8";
export const MAPS_EMBED =
  "https://www.google.com/maps?q=Shahzad+Cloth+House+Chowk+Adda+Pasrooriyan+Sialkot&output=embed";

export const TIKTOK_HANDLE = "shahzadclothhouseskt";
export const TIKTOK_URL = `https://www.tiktok.com/@${TIKTOK_HANDLE}`;
export const INSTAGRAM_HANDLE = "shahzadclothhouse";
export const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_HANDLE}/`;
export const FACEBOOK_HANDLE = "shahzadclothhouseskt";
export const FACEBOOK_URL = `https://www.facebook.com/${FACEBOOK_HANDLE}/`;

export const HOURS = [
  { days: "Saturday – Thursday", time: "10:00 am – 10:00 pm" },
  { days: "Friday", time: "Open after Jumu'ah prayers" },
];

export type Collection = {
  slug: string;
  name: string;
  urdu: string;
  for: string;
  season: string;
  blurb: string;
  photo: PhotoKey;
};

export const COLLECTIONS: Collection[] = [
  {
    slug: "lawn",
    name: "Unstitched Lawn",
    urdu: "لان",
    for: "Ladies",
    season: "Spring · Summer",
    blurb:
      "Breathable summer lawn from the country's finest mills: prints, embroidered panels and chikankari, cut to your length.",
    photo: "lawn",
  },
  {
    slug: "wash-and-wear",
    name: "Wash & Wear",
    urdu: "واش اینڈ ویئر",
    for: "Ladies & Gents",
    season: "All Seasons",
    blurb:
      "Our signature men's and women's wash & wear for shalwar kameez, in quiet, wearable tones that hold up year-round.",
    photo: "wash-and-wear",
  },
  {
    slug: "cotton-linen",
    name: "Cotton & Linen",
    urdu: "کاٹن و لِنن",
    for: "Ladies & Gents",
    season: "Warm Weather",
    blurb:
      "Long-staple cotton and pure linen with a softened hand, cut in lengths for suits, kurtas and shirting.",
    photo: "cotton-linen",
  },
  {
    slug: "silk-jacquard",
    name: "Silk & Jacquard",
    urdu: "ریشم و جیکارڈ",
    for: "Ladies",
    season: "Formal · Festive",
    blurb:
      "Raw silk, katan, banarsi jacquard and brocade, kept for Eid, mehndi and every occasion that deserves it.",
    photo: "silk-jacquard",
  },
  {
    slug: "wedding",
    name: "Wedding Wear",
    urdu: "شادی کا لباس",
    for: "Bride & Groom",
    season: "By Appointment",
    blurb:
      "Bridal and groom fabric: hand-embroidered panels, zari work and coordinated dupattas, chosen with you at the counter.",
    photo: "wedding",
  },
  {
    slug: "winter-suiting",
    name: "Winter Suiting",
    urdu: "سردی کا سوٹنگ",
    for: "Ladies & Gents",
    season: "Autumn · Winter",
    blurb:
      "Wool blends and karandi for the cold months, with the weight and drape we trust for a winter suit.",
    photo: "winter",
  },
];

export const FAQS = [
  {
    q: "Where is Shahzad Cloth House in Sialkot?",
    a: `We are at ${ADDRESS.street}, ${ADDRESS.city}, ${ADDRESS.region}. Tap "Directions" anywhere on this page to open the shop in Google Maps.`,
  },
  {
    q: "What are your opening hours?",
    a: "Saturday to Thursday, 10:00 am to 10:00 pm. On Friday the shop opens after Jumu'ah prayers.",
  },
  {
    q: "What kind of fabric do you sell?",
    a: "Unstitched fabric for ladies and gents: lawn, wash & wear, cotton and linen, silk and jacquard, bridal and groom fabric, winter suiting such as karandi and wool blends, and uniform fabric.",
  },
  {
    q: "Is there a minimum length I have to buy?",
    a: "No. Every bolt is cut to the length you need, with no minimums.",
  },
  {
    q: "Do you deliver outside Sialkot?",
    a: `Yes, we deliver across Pakistan. Message us on WhatsApp at ${PHONE_DISPLAY} with the fabric, colour and length you need, and we will confirm stock, price and delivery before we send it.`,
  },
  {
    q: "Do you take bulk or uniform orders?",
    a: "Yes. We cut fabric for schools, offices, hospitals and family weddings in bulk. Tell us the colour and quantity on WhatsApp and we will quote.",
  },
  {
    q: "Can I ask about a fabric on WhatsApp before visiting?",
    a: `Yes. Message us on WhatsApp at ${PHONE_DISPLAY} with the fabric, colour or occasion you have in mind and we will tell you what we have.`,
  },
  {
    q: "Do you have bridal and groom fabric?",
    a: "Yes. Wedding wear is by appointment: hand-embroidered panels, zari work and coordinated dupattas. Message or call us to arrange a time.",
  },
  {
    q: "How long has the shop been open?",
    a: `Since ${FOUNDED}. Shahzad Cloth House is family-run by ${PROPRIETOR}, who has been measuring cloth at the same counter for over ${YEARS} years.`,
  },
];
