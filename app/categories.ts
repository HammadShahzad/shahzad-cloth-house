import type { PhotoKey } from "./photos";
import { FOUNDED, PHONE_DISPLAY } from "./site";

export type Fabric = { name: string; note: string };
export type Category = {
  slug: string;
  navLabel: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  h1Accent: string;
  lead: string;
  urdu: string;
  photo: PhotoKey;
  season: string;
  fabrics: Fabric[];
  guideTitle: string;
  guide: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
  related: string[];
};

export const CATEGORIES: Category[] = [
  {
    slug: "ladies-fabric",
    navLabel: "Ladies",
    metaTitle: "Ladies Unstitched Suits in Sialkot, Delivered Across Pakistan",
    metaDescription:
      "Ladies unstitched suits from Sialkot: lawn, cotton, linen, raw silk, katan, jacquard and embroidered panels, cut to any length. Order on WhatsApp, delivered across Pakistan.",
    eyebrow: "Ladies Collection",
    h1: "Ladies unstitched fabric",
    h1Accent: "in Sialkot",
    lead:
      "Everyday lawn and cotton, festive silk and jacquard, and embroidered panels for the occasions that matter. Every bolt is hand-picked at the mill and cut to the length your tailor asks for.",
    urdu: "لیڈیز ان سلا کپڑا",
    photo: "silk-jacquard",
    season: "All Seasons",
    fabrics: [
      { name: "Unstitched Lawn", note: "Prints, embroidered panels and chikankari for spring and summer." },
      { name: "Cotton & Linen", note: "Long-staple cotton and pure linen with a softened hand for kurtas and suits." },
      { name: "Wash & Wear", note: "Easy-care women's wash & wear in quiet, wearable tones, year-round." },
      { name: "Raw Silk & Katan", note: "Rich, structured silks for Eid, dawats and festive suits." },
      { name: "Banarsi Jacquard & Brocade", note: "Woven patterns with real depth, kept for formal wear." },
      { name: "Embroidered Panels", note: "Hand-embroidered and zari panels with coordinated dupattas." },
    ],
    guideTitle: "Choosing the right fabric",
    guide: [
      {
        title: "For everyday wear",
        body: "Lawn and cotton breathe best in Sialkot's long summers. Linen and wash & wear hold their shape and need less ironing when you are busy.",
      },
      {
        title: "For Eid and dawats",
        body: "Raw silk, katan and jacquard have the weight and sheen that photograph well. Pair a plain silk shirt with an embroidered dupatta to keep it elegant.",
      },
      {
        title: "Getting the length right",
        body: "Bring your tailor's measurement or a suit that fits you well. We cut exactly what you need, with no minimum length.",
      },
    ],
    faqs: [
      {
        q: "Do you sell ladies unstitched suits in Sialkot?",
        a: "Yes. We keep ladies unstitched fabric year-round: lawn, cotton, linen, wash & wear, raw silk, katan, jacquard and embroidered panels, cut to any length.",
      },
      {
        q: "Can I buy just the shirt fabric or just a dupatta?",
        a: "Yes. There is no minimum length, so you can buy a single piece, a shirt length or a full suit.",
      },
      {
        q: "Can I see the latest ladies fabrics before visiting?",
        a: `Yes. Message us on WhatsApp at ${PHONE_DISPLAY} with the fabric, colour or occasion you have in mind and we will tell you what we have.`,
      },
    ],
    related: ["lawn", "wedding-fabric", "gents-fabric"],
  },
  {
    slug: "gents-fabric",
    navLabel: "Gents",
    metaTitle: "Gents Wash and Wear & Suiting Fabric, Sialkot and Online",
    metaDescription:
      "Gents wash & wear, cotton, linen, shirting and winter suiting from Sialkot. Shalwar kameez fabric cut to any length, ordered on WhatsApp and delivered across Pakistan.",
    eyebrow: "Gents Collection",
    h1: "Gents suiting & wash and wear",
    h1Accent: "in Sialkot",
    lead:
      "The fabric behind a shalwar kameez that still looks right at the end of a long day. Our signature wash & wear, crisp cotton and linen, shirting, and wool blends for winter.",
    urdu: "جینٹس سوٹنگ",
    photo: "wash-and-wear",
    season: "All Seasons",
    fabrics: [
      { name: "Wash & Wear", note: "Our signature: easy-care, wrinkle-resistant, in a spectrum of quiet tones." },
      { name: "Cotton", note: "Long-staple cotton for summer shalwar kameez and kurtas." },
      { name: "Linen", note: "Pure linen with a softened hand for warm weather." },
      { name: "Men's Shirting", note: "Shirting lengths for office and everyday wear." },
      { name: "Winter Suiting & Karandi", note: "Wool blends and karandi with the weight a winter suit needs." },
      { name: "Groom Fabric", note: "Fabric for the groom's wedding-day outfit, chosen at the counter." },
    ],
    guideTitle: "Choosing the right fabric",
    guide: [
      {
        title: "Wash & wear or cotton?",
        body: "Wash & wear keeps its press and dries quickly, so it suits office and travel days. Cotton breathes better in peak summer and softens with every wash.",
      },
      {
        title: "Colours that work",
        body: "White, off-white, greys and soft blues are the everyday staples. For weddings and Eid, deeper tones like charcoal, navy and maroon stand out.",
      },
      {
        title: "How much to buy",
        body: "A typical adult shalwar kameez takes roughly 4 to 4.5 metres, depending on height and cut. Tell us your tailor's measurement and we cut exactly that.",
      },
    ],
    faqs: [
      {
        q: "Where can I buy wash and wear fabric in Sialkot?",
        a: "At Shahzad Cloth House, Chowk Adda Pasrooriyan, Sialkot. Wash & wear is our signature fabric and we keep it in stock all year.",
      },
      {
        q: "Do you have winter suiting for men?",
        a: "Yes. Our winter suiting includes wool blends and karandi for shalwar kameez and suits in the cold months.",
      },
      {
        q: "Can you cut a single suit length?",
        a: "Yes. There is no minimum, so we can cut one suit length or several for the family.",
      },
    ],
    related: ["winter-collection", "wedding-fabric", "ladies-fabric"],
  },
  {
    slug: "lawn",
    navLabel: "Lawn",
    metaTitle: "Unstitched Lawn Suits Online in Pakistan, From Sialkot",
    metaDescription:
      "Unstitched lawn suits from Sialkot: printed lawn, embroidered panels and chikankari, cut to any length. Order on WhatsApp with delivery across Pakistan.",
    eyebrow: "Spring · Summer",
    h1: "Unstitched lawn suits",
    h1Accent: "in Sialkot",
    lead:
      "Breathable summer lawn from the country's finest mills. Prints, embroidered panels and chikankari, chosen bolt by bolt so the colour holds and the hand stays soft after every wash.",
    urdu: "لان سوٹ",
    photo: "lawn",
    season: "Spring · Summer",
    fabrics: [
      { name: "Printed Lawn", note: "Fresh summer prints for everyday suits." },
      { name: "Embroidered Lawn", note: "Lawn with embroidered panels for something special." },
      { name: "Chikankari", note: "Delicate thread work on light lawn, cool enough for June." },
    ],
    guideTitle: "What makes good lawn",
    guide: [
      {
        title: "Feel the weave",
        body: "Good lawn is fine and tightly woven, so it feels smooth and light without being see-through. Hold it to the light at the counter and you will see the difference.",
      },
      {
        title: "Check the print",
        body: "Sharp edges and even colour mean the print will last. We send back any bolt where the print misregisters, even by a hair.",
      },
      {
        title: "Plan your season",
        body: "Lawn is a spring and summer fabric. Message us on WhatsApp to ask what is on the shelves before you visit.",
      },
    ],
    faqs: [
      {
        q: "When is lawn in season?",
        a: "Lawn is a spring and summer fabric. Message us on WhatsApp to ask what is in stock right now.",
      },
      {
        q: "Do you have embroidered and chikankari lawn?",
        a: "Yes. Alongside printed lawn we keep embroidered panels and chikankari.",
      },
      {
        q: "Is there a minimum length for lawn?",
        a: "No. We cut lawn to whatever length you need.",
      },
    ],
    related: ["ladies-fabric", "wedding-fabric", "gents-fabric"],
  },
  {
    slug: "winter-collection",
    navLabel: "Winter",
    metaTitle: "Karandi & Winter Suiting Fabric, Sialkot and Online",
    metaDescription:
      "Karandi and wool-blend winter suiting from Sialkot, for men and ladies, cut to any length. Order on WhatsApp and we deliver across Pakistan.",
    eyebrow: "Autumn · Winter",
    h1: "Winter suiting & karandi",
    h1Accent: "in Sialkot",
    lead:
      "When the cold sets in, the fabric has to do the work. Karandi and wool blends with the weight and drape we trust for a winter suit, chosen by hand like everything else on our shelves.",
    urdu: "سردی کا سوٹنگ",
    photo: "winter",
    season: "Autumn · Winter",
    fabrics: [
      { name: "Karandi", note: "A textured, warm weave that drapes well, for winter shalwar kameez." },
      { name: "Wool Blends", note: "Warmth without bulk, for suits that look sharp all day." },
    ],
    guideTitle: "Choosing winter fabric",
    guide: [
      {
        title: "Weight and warmth",
        body: "Heavier karandi and wool blends hold warmth through Sialkot's foggy December mornings. Lighter blends work for autumn and early spring.",
      },
      {
        title: "Colours for winter",
        body: "Charcoal, browns, deep greens and navy are the winter classics, and they hide the wear of a long season.",
      },
      {
        title: "Order early",
        body: "Tailors get busy as the weather turns. Pick your fabric early in the season so your suit is ready when you need it.",
      },
    ],
    faqs: [
      {
        q: "Do you sell karandi in Sialkot?",
        a: "Yes. Karandi and wool-blend winter suiting are in stock from autumn at our shop in Chowk Adda Pasrooriyan, Sialkot.",
      },
      {
        q: "What is karandi?",
        a: "Karandi is a textured, medium-to-heavy weave that is warmer than summer cotton and drapes well, which is why it is a winter favourite for shalwar kameez.",
      },
      {
        q: "Can I check what winter stock you have before I visit?",
        a: `Yes. Message us on WhatsApp at ${PHONE_DISPLAY} and we will tell you what is on the shelves.`,
      },
    ],
    related: ["gents-fabric", "wedding-fabric", "ladies-fabric"],
  },
  {
    slug: "wedding-fabric",
    navLabel: "Wedding",
    metaTitle: "Bridal & Groom Wedding Fabric, Sialkot and Online",
    metaDescription:
      "Bridal and groom fabric from Sialkot: hand-embroidered panels, zari work, raw silk, jacquard, brocade and dupattas. Visit by appointment or order on WhatsApp.",
    eyebrow: "By Appointment",
    h1: "Bridal & groom fabric",
    h1Accent: "in Sialkot",
    lead:
      "Wedding fabric deserves time at the counter. Hand-embroidered panels, zari work, raw silk and brocade, with coordinated dupattas, chosen with you and your family one bolt at a time.",
    urdu: "شادی کا لباس",
    photo: "wedding",
    season: "By Appointment",
    fabrics: [
      { name: "Hand-Embroidered Panels", note: "Bridal panels with hand embroidery for the barat and walima." },
      { name: "Zari Work", note: "Metallic thread work that catches the light at evening functions." },
      { name: "Raw Silk & Katan", note: "Rich silks for mehndi, nikah and the family's festive suits." },
      { name: "Banarsi Jacquard & Brocade", note: "Woven brocades for formal wear and wedding functions." },
      { name: "Coordinated Dupattas", note: "Dupattas chosen to match your shirt and panels." },
      { name: "Groom Fabric", note: "Fabric for the groom's wedding-day outfit, matched to the bride's colours." },
    ],
    guideTitle: "Planning wedding fabric",
    guide: [
      {
        title: "Book a time",
        body: "Wedding wear is by appointment, so you get the counter and our full attention. Call or WhatsApp us to arrange a time that suits your family.",
      },
      {
        title: "Bring the colour story",
        body: "Bring photos, swatches or your theme colours for each function. It is easier to match mehndi, barat and walima when we see the whole plan.",
      },
      {
        title: "Leave time for the tailor",
        body: "Embroidered and heavy fabrics take longer to stitch. Choose your wedding fabric well before the date so your tailor is not rushed.",
      },
    ],
    faqs: [
      {
        q: "Do you have bridal fabric in Sialkot?",
        a: "Yes. We keep bridal and groom fabric: hand-embroidered panels, zari work, raw silk, jacquard, brocade and coordinated dupattas.",
      },
      {
        q: "Do I need an appointment?",
        a: "Wedding wear is by appointment so we can give you the time it needs. Call or WhatsApp us to book.",
      },
      {
        q: "Can the whole family shop for the wedding together?",
        a: `Yes. Families have been choosing their wedding fabric at our counter since ${FOUNDED}. We can help coordinate colours across every function.`,
      },
    ],
    related: ["ladies-fabric", "gents-fabric", "winter-collection"],
  },
  {
    slug: "uniform-fabric",
    navLabel: "Uniforms",
    metaTitle: "Uniform Fabric for Schools, Offices & Hospitals in Sialkot",
    metaDescription:
      "School, office, hospital and staff uniform fabric from Sialkot, by the suit or in bulk. Tell us the colour and quantity on WhatsApp; we deliver across Pakistan.",
    eyebrow: "Bulk & Custom Orders",
    h1: "Uniform fabric",
    h1Accent: "in Sialkot",
    lead:
      "Fabric for school, office, hospital and staff uniforms, for one person or a whole team. Send us the colour, the garment and how many you need, and we will match it and quote on WhatsApp.",
    urdu: "یونیفارم کا کپڑا",
    photo: "uniform",
    season: "Bulk Orders",
    fabrics: [
      { name: "School Uniforms", note: "Shirting, trouser and shalwar kameez fabric in your school's colours, for one child or a whole class." },
      { name: "Office & Staff Uniforms", note: "Wash & wear and suiting that keep their press through a working day." },
      { name: "Hospital & Clinic Wear", note: "Easy-wash fabric in the plain colours used for scrubs, coats and staff uniforms." },
      { name: "Security & Driver Uniforms", note: "Khaki, grey and navy fabric for guards, drivers and support staff." },
      { name: "Match an Existing Uniform", note: "Send a photo or bring a sample, and we will match the colour and weight as closely as we can." },
    ],
    guideTitle: "Ordering uniform fabric",
    guide: [
      {
        title: "Start with a sample",
        body: "A photo of the current uniform, or a swatch from an old one, is the quickest way to match colour and weight.",
      },
      {
        title: "Tell us the count",
        body: "Let us know how many uniforms and roughly which sizes. We work out the metres so you buy enough without waste.",
      },
      {
        title: "Order before the rush",
        body: "Schools and tailors get busy before a new term. Place bulk orders early so the fabric and the stitching are both ready on time.",
      },
    ],
    faqs: [
      {
        q: "Do you take bulk uniform fabric orders?",
        a: `Yes. We cut uniform fabric for single orders and for schools, offices and hospitals in bulk. Message us on WhatsApp at ${PHONE_DISPLAY} with the colour, the garment and the quantity, and we will confirm stock and price.`,
      },
      {
        q: "Can you match our existing uniform colour?",
        a: "Send us a photo or bring a sample to the shop and we will match the colour and weight as closely as we can.",
      },
      {
        q: "Is there a minimum quantity?",
        a: "No. We can cut fabric for one uniform or for a whole school.",
      },
    ],
    related: ["gents-fabric", "ladies-fabric", "winter-collection"],
  },
];

export const CATEGORY_BY_SLUG = Object.fromEntries(CATEGORIES.map((c) => [c.slug, c]));

/** Every category page also answers the delivery question, for people searching outside Sialkot. */
export function deliveryFaq(c: Category) {
  return {
    q: `Do you deliver ${c.h1.toLowerCase()} outside Sialkot?`,
    a: `Yes, we deliver across Pakistan. Message us on WhatsApp at ${PHONE_DISPLAY} with the fabric, colour and length you need, and we will confirm stock, price and delivery before we send it.`,
  };
}

/** Which category page each home-page collection card links to. */
export const COLLECTION_TO_CATEGORY: Record<string, string> = {
  lawn: "lawn",
  "wash-and-wear": "gents-fabric",
  "cotton-linen": "ladies-fabric",
  "silk-jacquard": "ladies-fabric",
  wedding: "wedding-fabric",
  "winter-suiting": "winter-collection",
};
