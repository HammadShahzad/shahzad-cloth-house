export const SITE_URL = "https://shahzadclothhouse.com";
export const BUSINESS_NAME = "Shahzad Cloth House";
export const HOME_TITLE = "Shahzad Cloth House Sialkot | Unstitched Fabric Online";
export const HOME_DESCRIPTION =
  "Lawn, wash & wear, karandi, wedding and uniform fabric from a Sialkot cloth house run since 1991. Cut to any length and delivered across Pakistan.";
export const BUSINESS_NAME_URDU = "شہزاد کلاتھ ہاؤس";
export const TAGLINE_URDU = "ورائٹی کا اعلیٰ مرکز";

export const FOUNDED = 1991;
/** Date the page content last changed. Used for the sitemap's lastmod, so bump it when you edit copy. */
export const CONTENT_UPDATED = "2026-10-20";
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

export const PHONE_DISPLAY = "0337 4515580";
export const PHONE_TEL = "+923374515580";
const WHATSAPP_INTL = "923374515580";

export function whatsappUrl(topic = "") {
  const text = `Assalamu alaikum — I saw your website (shahzadclothhouse.com) and wanted to ask about ${topic}`;
  return `https://wa.me/${WHATSAPP_INTL}?text=${encodeURIComponent(text)}`;
}
export const WHATSAPP_URL = whatsappUrl();

export const MAPS_URL = "https://maps.app.goo.gl/LvhtWzgEjP6j29mm8";

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

export const FAQS = [
  {
    q: "Where is Shahzad Cloth House in Sialkot?",
    a: `We are at ${ADDRESS.street}, ${ADDRESS.city}, ${ADDRESS.region}. Use the "Get directions" button on this page to open the shop in Google Maps.`,
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
    q: "I live in Gujrat, Lahore or another city. Can I still order?",
    a: `Yes. Shahzad Cloth House is in ${ADDRESS.city}, at ${ADDRESS.street}, and we send fabric to every city in Pakistan. Message us on WhatsApp at ${PHONE_DISPLAY} and we will send photos, confirm the price and arrange delivery.`,
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
