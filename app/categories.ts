import { FOUNDED, PHONE_DISPLAY } from "./site";

export type Fabric = { name: string; note: string; swatch: string };
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
  swatch: string;
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
    metaTitle: "Ladies Unstitched Suits Fabric in Sialkot",
    metaDescription:
      "Ladies unstitched fabric in Sialkot: lawn, cotton, linen, raw silk, katan, jacquard and embroidered panels, cut to any length at Shahzad Cloth House since 1991.",
    eyebrow: "Ladies Collection",
    h1: "Ladies unstitched fabric",
    h1Accent: "in Sialkot",
    lead:
      "Everyday lawn and cotton, festive silk and jacquard, and embroidered panels for the occasions that matter. Every bolt is hand-picked at the mill and cut to the length your tailor asks for.",
    urdu: "لیڈیز ان سلا کپڑا",
    swatch: "swatch-lawn",
    season: "All Seasons",
    fabrics: [
      { name: "Unstitched Lawn", note: "Prints, embroidered panels and chikankari for spring and summer.", swatch: "swatch-lawn" },
      { name: "Cotton & Linen", note: "Long-staple cotton and pure linen with a softened hand for kurtas and suits.", swatch: "swatch-linen" },
      { name: "Wash & Wear", note: "Easy-care women's wash & wear in quiet, wearable tones, year-round.", swatch: "swatch-washwear" },
      { name: "Raw Silk & Katan", note: "Rich, structured silks for Eid, dawats and festive suits.", swatch: "swatch-silk" },
      { name: "Banarsi Jacquard & Brocade", note: "Woven patterns with real depth, kept for formal wear.", swatch: "swatch-silk" },
      { name: "Embroidered Panels", note: "Hand-embroidered and zari panels with coordinated dupattas.", swatch: "swatch-wedding" },
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
    metaTitle: "Gents Suiting & Wash and Wear Fabric in Sialkot",
    metaDescription:
      "Gents wash & wear, cotton, linen, shirting and winter suiting in Sialkot. Shalwar kameez fabric cut to any length at Shahzad Cloth House, Chowk Adda Pasrooriyan.",
    eyebrow: "Gents Collection",
    h1: "Gents suiting & wash and wear",
    h1Accent: "in Sialkot",
    lead:
      "The fabric behind a shalwar kameez that still looks right at the end of a long day. Our signature wash & wear, crisp cotton and linen, shirting, and wool blends for winter.",
    urdu: "جینٹس سوٹنگ",
    swatch: "swatch-washwear",
    season: "All Seasons",
    fabrics: [
      { name: "Wash & Wear", note: "Our signature: easy-care, wrinkle-resistant, in a spectrum of quiet tones.", swatch: "swatch-washwear" },
      { name: "Cotton", note: "Long-staple cotton for summer shalwar kameez and kurtas.", swatch: "swatch-linen" },
      { name: "Linen", note: "Pure linen with a softened hand for warm weather.", swatch: "swatch-linen" },
      { name: "Men's Shirting", note: "Shirting lengths for office and everyday wear.", swatch: "swatch-washwear" },
      { name: "Winter Suiting & Karandi", note: "Wool blends and karandi with the weight a winter suit needs.", swatch: "swatch-winter" },
      { name: "Groom Fabric", note: "Fabric for the groom's wedding-day outfit, chosen at the counter.", swatch: "swatch-wedding" },
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
    metaTitle: "Unstitched Lawn Suits in Sialkot",
    metaDescription:
      "Unstitched lawn in Sialkot: printed lawn, embroidered panels and chikankari from Pakistan's finest mills, cut to any length at Shahzad Cloth House since 1991.",
    eyebrow: "Spring · Summer",
    h1: "Unstitched lawn suits",
    h1Accent: "in Sialkot",
    lead:
      "Breathable summer lawn from the country's finest mills. Prints, embroidered panels and chikankari, chosen bolt by bolt so the colour holds and the hand stays soft after every wash.",
    urdu: "لان سوٹ",
    swatch: "swatch-lawn",
    season: "Spring · Summer",
    fabrics: [
      { name: "Printed Lawn", note: "Fresh summer prints for everyday suits.", swatch: "swatch-lawn" },
      { name: "Embroidered Lawn", note: "Lawn with embroidered panels for something special.", swatch: "swatch-lawn" },
      { name: "Chikankari", note: "Delicate thread work on light lawn, cool enough for June.", swatch: "swatch-linen" },
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
    metaTitle: "Winter Suiting & Karandi Fabric in Sialkot",
    metaDescription:
      "Winter suiting in Sialkot: karandi and wool blends with real weight and drape, cut to any length at Shahzad Cloth House, Chowk Adda Pasrooriyan. Since 1991.",
    eyebrow: "Autumn · Winter",
    h1: "Winter suiting & karandi",
    h1Accent: "in Sialkot",
    lead:
      "When the cold sets in, the fabric has to do the work. Karandi and wool blends with the weight and drape we trust for a winter suit, chosen by hand like everything else on our shelves.",
    urdu: "سردی کا سوٹنگ",
    swatch: "swatch-winter",
    season: "Autumn · Winter",
    fabrics: [
      { name: "Karandi", note: "A textured, warm weave that drapes well, for winter shalwar kameez.", swatch: "swatch-winter" },
      { name: "Wool Blends", note: "Warmth without bulk, for suits that look sharp all day.", swatch: "swatch-winter" },
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
    metaTitle: "Bridal & Groom Wedding Fabric in Sialkot",
    metaDescription:
      "Bridal and groom fabric in Sialkot: hand-embroidered panels, zari work, raw silk, jacquard, brocade and coordinated dupattas. By appointment at Shahzad Cloth House.",
    eyebrow: "By Appointment",
    h1: "Bridal & groom fabric",
    h1Accent: "in Sialkot",
    lead:
      "Wedding fabric deserves time at the counter. Hand-embroidered panels, zari work, raw silk and brocade, with coordinated dupattas, chosen with you and your family one bolt at a time.",
    urdu: "شادی کا لباس",
    swatch: "swatch-wedding",
    season: "By Appointment",
    fabrics: [
      { name: "Hand-Embroidered Panels", note: "Bridal panels with hand embroidery for the barat and walima.", swatch: "swatch-wedding" },
      { name: "Zari Work", note: "Metallic thread work that catches the light at evening functions.", swatch: "swatch-wedding" },
      { name: "Raw Silk & Katan", note: "Rich silks for mehndi, nikah and the family's festive suits.", swatch: "swatch-silk" },
      { name: "Banarsi Jacquard & Brocade", note: "Woven brocades for formal wear and wedding functions.", swatch: "swatch-silk" },
      { name: "Coordinated Dupattas", note: "Dupattas chosen to match your shirt and panels.", swatch: "swatch-wedding" },
      { name: "Groom Fabric", note: "Fabric for the groom's wedding-day outfit, matched to the bride's colours.", swatch: "swatch-winter" },
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
];

export const CATEGORY_BY_SLUG = Object.fromEntries(CATEGORIES.map((c) => [c.slug, c]));

/** Which category page each home-page collection card links to. */
export const COLLECTION_TO_CATEGORY: Record<string, string> = {
  lawn: "lawn",
  "wash-and-wear": "gents-fabric",
  "cotton-linen": "ladies-fabric",
  "silk-jacquard": "ladies-fabric",
  wedding: "wedding-fabric",
  "winter-suiting": "winter-collection",
};
