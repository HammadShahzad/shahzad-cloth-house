import type { PhotoKey } from "./photos";
import { FOUNDED, PHONE_DISPLAY } from "./site";

export type Fabric = { name: string; note: string };
export type Category = {
  slug: string;
  navLabel: string;
  /** On wide screens, list this page under the header's "More" menu instead of the main row. */
  navMore?: boolean;
  /** The full <title>, brand included. Keep it under about 60 characters. */
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  h1Accent: string;
  lead: string;
  urdu: string;
  photo: PhotoKey;
  gallery: PhotoKey[];
  season: string;
  /** Two short paragraphs under the hero. Plain text; [label](/path) becomes an internal link. */
  about: string[];
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
    metaTitle: "Ladies Unstitched Suits Online, Sialkot | Shahzad Cloth House",
    metaDescription:
      "Shahzad Cloth House, Sialkot: ladies lawn, cotton, raw silk, katan, jacquard and embroidered panels, cut to any length and delivered across Pakistan.",
    eyebrow: "Ladies Collection",
    h1: "Ladies unstitched fabric",
    h1Accent: "in Sialkot",
    lead:
      "Everyday lawn and cotton, festive silk and jacquard, and embroidered panels for the occasions that matter. Every bolt is hand-picked at the mill and cut to the length your tailor asks for.",
    urdu: "لیڈیز ان سلا کپڑا",
    photo: "ladies",
    gallery: ["ladies-close", "lawn-wall", "velvet", "lawn-spread"],
    season: "All Seasons",
    about: [
      "Shahzad Cloth House has sold ladies unstitched fabric from Chowk Adda Pasrooriyan in Sialkot since 1991. The shelves hold everyday [lawn](/lawn) and cotton for summer, wash & wear for busy days, and [raw silk](/raw-silk), katan and jacquard for Eid and dawats.",
      "You choose the fabric and the length, and your tailor does the rest. Buy a single shirt piece, a three-piece suit or enough for the whole family. If you live outside Sialkot, send us a message on WhatsApp and we will send photos, confirm the price and deliver anywhere in Pakistan. Planning a wedding? See our [bridal and groom fabric](/wedding-fabric).",
    ],
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
    metaTitle: "Wash and Wear & Gents Suiting, Sialkot | Shahzad Cloth House",
    metaDescription:
      "Gents wash & wear, cotton, linen, shirting and karandi from Sialkot. Shalwar kameez fabric cut to any length, ordered on WhatsApp, delivered across Pakistan.",
    eyebrow: "Gents Collection",
    h1: "Gents suiting & wash and wear",
    h1Accent: "in Sialkot",
    lead:
      "The fabric behind a shalwar kameez that still looks right at the end of a long day. Our signature wash & wear, crisp cotton and linen, shirting, and wool blends for winter.",
    urdu: "جینٹس سوٹنگ",
    photo: "gents",
    gallery: ["thaan-2", "suiting-close", "cotton-light", "gents-black"],
    season: "All Seasons",
    about: [
      "Wash & wear is the fabric most of our gents customers come in for, and we keep it in stock all year in whites, greys, blues and darker tones. Alongside it we keep long-staple cotton and linen for summer, white [latha](/latha) and [boski](/boski) for Jumma and Eid, shirting lengths, and karandi and wool blends for [winter suits](/winter-collection).",
      "Every shalwar kameez length is cut at our counter in Sialkot, so you buy exactly what your tailor asks for. Order on WhatsApp and we deliver across Pakistan, or visit the shop at Chowk Adda Pasrooriyan. For staff or school orders, see [uniform fabric](/uniform-fabric).",
    ],
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
    metaTitle: "Unstitched Lawn Suits Online, Sialkot | Shahzad Cloth House",
    metaDescription:
      "Unstitched lawn suits from Sialkot: printed lawn, embroidered panels and chikankari, cut to any length. Order on WhatsApp with delivery across Pakistan.",
    eyebrow: "Spring · Summer",
    h1: "Unstitched lawn suits",
    h1Accent: "in Sialkot",
    lead:
      "Breathable summer lawn from the country's finest mills. Prints, embroidered panels and chikankari, chosen bolt by bolt so the colour holds and the hand stays soft after every wash.",
    urdu: "لان سوٹ",
    photo: "lawn-spread",
    gallery: ["lawn", "lawn-wall", "packed-suits", "ladies"],
    season: "Spring · Summer",
    about: [
      "Lawn is the fabric of a Pakistani summer: light, breathable and printed in colours that last the season. We keep printed lawn, lawn with embroidered panels and chikankari, packed as three-piece unstitched suits or cut from the bolt.",
      "Message us on WhatsApp to see what is on the shelves this week. We send photos, confirm the price and deliver your lawn suits anywhere in Pakistan, or you can pick them up from the shop in Sialkot. Looking for something heavier for Eid? See our [ladies fabric](/ladies-fabric).",
    ],
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
    metaTitle: "Karandi & Winter Fabric, Sialkot | Shahzad Cloth House",
    metaDescription:
      "Karandi and wool-blend winter suiting for men and ladies, cut to any length in Sialkot. WhatsApp us for photos and prices; delivery across Pakistan.",
    eyebrow: "Autumn · Winter",
    h1: "Winter suiting & karandi",
    h1Accent: "in Sialkot",
    lead:
      "When the cold sets in, the fabric has to do the work. Karandi and wool blends with the weight and drape we trust for a winter suit, chosen by hand like everything else on our shelves.",
    urdu: "سردی کا سوٹنگ",
    photo: "winter",
    gallery: ["velvet-front", "velvet-shop", "gents-black", "packed-suits"],
    season: "Autumn · Winter",
    about: [
      "When the fog settles over Sialkot, people come to us for karandi, wool-blend suiting and embroidered winter suits. Karandi is the winter staple for shalwar kameez: textured, warm and easy to drape. Our embroidered winter suits and velvet come in deep maroon, mustard, navy and black.",
      "Winter stock arrives in autumn and the best colours go early. Order on WhatsApp and we deliver across Pakistan, or visit the shop at Chowk Adda Pasrooriyan. For everyday gents fabric see [wash & wear and suiting](/gents-fabric).",
    ],
    fabrics: [
      { name: "Karandi", note: "A textured, warm weave that drapes well, for winter shalwar kameez." },
      { name: "Wool Blends", note: "Warmth without bulk, for suits that look sharp all day." },
      { name: "Embroidered Winter Suits", note: "Three-piece ladies suits with thread work, in deep winter colours." },
      { name: "Velvet", note: "Embroidered velvet suits and dupattas for winter weddings and evening functions." },
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
    metaTitle: "Bridal & Groom Wedding Fabric, Sialkot | Shahzad Cloth House",
    metaDescription:
      "Wedding fabric for bride, groom and family: embroidered panels, zari, raw silk, jacquard and velvet. Visit our Sialkot shop or WhatsApp us for photos.",
    eyebrow: "By Appointment",
    h1: "Bridal & groom fabric",
    h1Accent: "in Sialkot",
    lead:
      "Wedding fabric deserves time at the counter. Hand-embroidered panels, zari work, raw silk and brocade, with coordinated dupattas, chosen with you and your family one bolt at a time.",
    urdu: "شادی کا لباس",
    photo: "wedding-hero",
    gallery: ["wedding", "velvet-side", "silk-jacquard", "ladies-close"],
    season: "By Appointment",
    about: [
      "Families have chosen their wedding fabric at our counter since 1991. For the bride there are hand-embroidered panels, zari work, [raw silk](/raw-silk), jacquard and embroidered velvet, with dupattas matched to each shirt. For the groom and the family there is [boski](/boski), suiting and festive fabric in matching colours.",
      "Wedding wear is by appointment, so you get the counter and our full attention. Call or WhatsApp us to book a time, or to see photos before you travel. We also deliver wedding orders across Pakistan. See [ladies fabric](/ladies-fabric) for mehndi and dholki outfits.",
    ],
    fabrics: [
      { name: "Hand-Embroidered Panels", note: "Bridal panels with hand embroidery for the barat and walima." },
      { name: "Zari Work", note: "Metallic thread work that catches the light at evening functions." },
      { name: "Raw Silk & Katan", note: "Rich silks for mehndi, nikah and the family's festive suits." },
      { name: "Banarsi Jacquard & Brocade", note: "Woven brocades for formal wear and wedding functions." },
      { name: "Embroidered Velvet", note: "Velvet with white and gold thread work for winter weddings." },
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
    metaTitle: "Uniform Shop in Sialkot: School & Office Uniform Fabric",
    metaDescription:
      "Uniform shop in Sialkot for school, office and hospital uniform fabric, by the suit or in bulk. WhatsApp the colour and count; delivery across Pakistan.",
    eyebrow: "Bulk & Custom Orders",
    h1: "Uniform fabric",
    h1Accent: "in Sialkot",
    lead:
      "Fabric for school, office, hospital and staff uniforms, for one person or a whole team. Send us the colour, the garment and how many you need, and we will match it and quote on WhatsApp.",
    urdu: "یونیفارم کا کپڑا",
    photo: "uniform",
    gallery: ["suiting-wall", "wash-and-wear", "cotton-linen", "order-online"],
    season: "Bulk Orders",
    about: [
      "We cut uniform fabric for schools, offices, hospitals and security staff, by the suit or in bulk. We keep plain suiting, shirting and wash & wear in the colours uniforms use most, including white, grey, navy, black and khaki.",
      "Send a photo of the current uniform and tell us how many you need, and we will match the colour and work out the metres on WhatsApp. We deliver bulk orders across Pakistan. Need fabric for staff shalwar kameez? See [gents wash & wear](/gents-fabric).",
    ],
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
        q: "Is Shahzad Cloth House a uniform shop in Sialkot?",
        a: "Yes. We sell uniform fabric from our shop at Chowk Adda Pasrooriyan, Sialkot: plain suiting, shirting and wash & wear in white, grey, navy, black and khaki for school, office, hospital and staff uniforms, cut to length for your tailor.",
      },
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
  {
    slug: "boski",
    navLabel: "Boski",
    navMore: true,
    metaTitle: "Boski Cloth & Boski Suits, Sialkot | Shahzad Cloth House",
    metaDescription:
      "Boski cloth for gents shalwar kameez and kurtas in cream and golden shades, cut to any length in Sialkot. Order on WhatsApp; delivery across Pakistan.",
    eyebrow: "Eid · Jumma · Weddings",
    h1: "Boski fabric",
    h1Accent: "in Sialkot",
    lead:
      "Boski has been the fabric for a special shalwar kameez for generations: smooth in the hand, with a soft natural sheen and the classic cream-to-golden colour. We cut it at the counter to the length your tailor asks for.",
    urdu: "بوسکی",
    photo: "gents-shelves-white",
    gallery: ["boxed-suits", "thaan", "gents-counter", "packing-urdu"],
    season: "Eid · Weddings",
    about: [
      "Boski is the fabric many families still choose for Eid, Jumma and weddings. It has a smooth hand and a quiet sheen, and it is best known in cream, off-white and golden tones. Men wear it as a shalwar kameez or a kurta, often with a waistcoat for a dawat or the mehndi.",
      "We keep boski at our shop in Chowk Adda Pasrooriyan, Sialkot, and cut it to the length you need. Message us on WhatsApp for photos of the shades in stock and the price, and we deliver anywhere in Pakistan. For everyday suits see [gents wash & wear](/gents-fabric), and for crisp white cotton see [latha](/latha).",
    ],
    fabrics: [
      { name: "Cream & Off-White Boski", note: "The classic shades for Eid and Jumma, with a soft natural sheen." },
      { name: "Golden Boski", note: "The traditional golden tone boski is known for, made for weddings and evening dawats." },
      { name: "Boski for the Groom & Family", note: "Matching lengths for the groom and the men of the family at the nikah or mehndi." },
      { name: "Kurta Lengths", note: "Shorter lengths for a boski kurta to wear with a waistcoat." },
    ],
    guideTitle: "Wearing boski well",
    guide: [
      {
        title: "Pick the shade",
        body: "Cream and off-white are easy to wear in daylight and at Jumma. Golden tones stand out at evening dawats and weddings, especially with a dark waistcoat.",
      },
      {
        title: "Look after the sheen",
        body: "Boski keeps its sheen best with a gentle hand wash or dry cleaning, and a cool iron on the reverse side. Ask your tailor whether to pre-wash before cutting.",
      },
      {
        title: "How much to buy",
        body: "A typical adult shalwar kameez takes roughly 4 to 4.5 metres, depending on height and cut. Bring your tailor's measurement and we cut exactly that.",
      },
    ],
    faqs: [
      {
        q: "Do you sell boski in Sialkot?",
        a: "Yes. We keep boski cloth at our shop in Chowk Adda Pasrooriyan, Sialkot, cut to any length for shalwar kameez and kurtas.",
      },
      {
        q: "What is boski?",
        a: "Boski is a smooth fabric with a soft natural sheen, traditionally in cream and golden shades. It has long been a favourite for men's shalwar kameez at Eid, Jumma and weddings.",
      },
      {
        q: "Can I see the boski shades before I order?",
        a: `Yes. Message us on WhatsApp at ${PHONE_DISPLAY} and we will send photos of the shades in stock today.`,
      },
    ],
    related: ["latha", "gents-fabric", "wedding-fabric"],
  },
  {
    slug: "latha",
    navLabel: "Latha",
    navMore: true,
    metaTitle: "White Latha Cloth, Sialkot | Shahzad Cloth House",
    metaDescription:
      "White latha cloth for a crisp, starched gents shalwar kameez, cut to any length in Sialkot. Order on WhatsApp with delivery across Pakistan.",
    eyebrow: "Crisp White Cotton",
    h1: "Latha cloth",
    h1Accent: "in Sialkot",
    lead:
      "Latha is the crisp white cotton behind a starched shalwar kameez that looks fresh all day. A favourite for Jumma, Eid and the summer months, cut at our counter to the length your tailor needs.",
    urdu: "لٹھا",
    photo: "boxed-suits",
    gallery: ["boxed-suits-close", "gents-shelves-white", "cotton-light", "order-online"],
    season: "Jumma · Eid",
    about: [
      "Latha is a smooth, tightly woven cotton, and white latha is the classic choice for a starched shalwar kameez. It breathes well in the heat and takes starch evenly, so the suit stays crisp through a long day. Many men keep a white latha suit for Jumma and Eid, and buy matching lengths for the whole family.",
      "We keep latha at our shop in Chowk Adda Pasrooriyan, Sialkot, and cut it to any length. Message us on WhatsApp for the price and what is in today, and we deliver anywhere in Pakistan. For a fabric with more sheen see [boski](/boski), or browse all [gents fabric](/gents-fabric).",
    ],
    fabrics: [
      { name: "White Latha", note: "Bright white cotton for the classic starched shalwar kameez." },
      { name: "Latha for Jumma & Eid", note: "The fresh white suit many men keep for Fridays and Eid morning." },
      { name: "Family Lengths", note: "Matching latha for fathers, sons and brothers, cut in one go." },
      { name: "Kurta Lengths", note: "Shorter lengths for a cool white kurta in summer." },
    ],
    guideTitle: "Getting latha right",
    guide: [
      {
        title: "Starch for the crisp look",
        body: "Latha looks its sharpest lightly starched and pressed. Starch it after washing and iron while it is still slightly damp.",
      },
      {
        title: "Wash before stitching",
        body: "Cotton can shrink a little on the first wash. Many tailors pre-wash latha before cutting, so the finished suit keeps its fit.",
      },
      {
        title: "How much to buy",
        body: "A typical adult shalwar kameez takes roughly 4 to 4.5 metres, depending on height and cut. Tell us your tailor's measurement and we cut exactly that.",
      },
    ],
    faqs: [
      {
        q: "Do you sell latha cloth in Sialkot?",
        a: "Yes. We keep white latha at our shop in Chowk Adda Pasrooriyan, Sialkot, cut to any length for shalwar kameez and kurtas.",
      },
      {
        q: "What is latha?",
        a: "Latha is a smooth, tightly woven cotton, usually white. It is a favourite for men's shalwar kameez because it breathes in summer and takes starch well for a crisp look.",
      },
      {
        q: "Can I buy latha for the whole family?",
        a: `Yes. There is no minimum, so we can cut one suit length or matching lengths for the whole family. For larger orders, message us on WhatsApp at ${PHONE_DISPLAY} first.`,
      },
    ],
    related: ["boski", "gents-fabric", "uniform-fabric"],
  },
  {
    slug: "raw-silk",
    navLabel: "Raw Silk",
    navMore: true,
    metaTitle: "Raw Silk Fabric Online, Sialkot | Shahzad Cloth House",
    metaDescription:
      "Raw silk and katan for ladies festive suits and gents mehndi kurtas, cut to any length in Sialkot. Order on WhatsApp; delivery across Pakistan.",
    eyebrow: "Eid · Festive",
    h1: "Raw silk fabric",
    h1Accent: "in Sialkot",
    lead:
      "Raw silk has the texture and quiet sheen that make an Eid or mehndi outfit feel special. Raw silk and katan for ladies shirts, trousers and dupattas, and for gents kurtas, cut to the length you need.",
    urdu: "را سلک",
    photo: "silk-jacquard",
    gallery: ["festive-counter", "wedding", "velvet-side", "ladies-close"],
    season: "Festive",
    about: [
      "Raw silk has a slightly textured surface and a soft sheen, with enough body to hold the shape of a shirt or a trouser. It is a favourite for Eid, dawats, the mehndi and the nikah, and it pairs well with an embroidered dupatta. We keep katan alongside it for a smoother, shinier finish.",
      "We cut raw silk at our counter in Sialkot for ladies suits and for gents kurtas, often worn with a waistcoat at the mehndi. Message us on WhatsApp with the colour and length, and we will send photos, confirm the price and deliver anywhere in Pakistan. Planning a wedding? See [bridal and groom fabric](/wedding-fabric), or browse all [ladies fabric](/ladies-fabric).",
    ],
    fabrics: [
      { name: "Plain Raw Silk", note: "Textured silk with a soft sheen for shirts, trousers and full festive suits." },
      { name: "Katan", note: "A smoother, shinier silk weave for dupattas and formal suits." },
      { name: "Raw Silk for Mehndi & Nikah", note: "Rich colours that photograph well at wedding functions." },
      { name: "Gents Raw Silk Kurtas", note: "Kurta lengths for the groom and family, to wear with a waistcoat." },
    ],
    guideTitle: "Choosing raw silk",
    guide: [
      {
        title: "Keep it simple",
        body: "A plain raw silk shirt with an embroidered or jacquard dupatta looks rich without feeling heavy. Let one piece carry the detail.",
      },
      {
        title: "Look after the sheen",
        body: "Dry clean raw silk, or hand wash it gently in cold water if your tailor agrees. Iron on the reverse at low heat to protect the finish.",
      },
      {
        title: "Colours for the occasion",
        body: "Deep maroon, emerald and navy suit evening and winter functions. Mustard, pastels and soft gold work well for the mehndi and daytime Eid.",
      },
    ],
    faqs: [
      {
        q: "Do you sell raw silk fabric in Sialkot?",
        a: "Yes. We keep raw silk and katan at our shop in Chowk Adda Pasrooriyan, Sialkot, cut to any length for ladies suits and gents kurtas.",
      },
      {
        q: "What is the difference between raw silk and katan?",
        a: "Raw silk has a slightly textured surface, a soft sheen and more body. Katan is smoother and shinier. Both are used for festive and wedding wear.",
      },
      {
        q: "Can I buy just a raw silk trouser or dupatta length?",
        a: "Yes. There is no minimum length, so you can buy a single piece, a shirt length or a full suit.",
      },
    ],
    related: ["ladies-fabric", "wedding-fabric", "boski"],
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
