import type { PhotoKey } from "./photos";
import { PHONE_DISPLAY } from "./site";

// Fabric guides at /guides. Text uses [label](/path) for internal links (see RichText).
// Keep to fabrics the shop lists on its category pages, and never quote prices:
// prices are confirmed on WhatsApp per order.

export type GuideSection = {
  h2: string;
  paras?: string[];
  list?: string[];
  table?: { head: string[]; rows: string[][] };
  /** Paragraphs shown after the table and list. */
  after?: string[];
};

export type Guide = {
  slug: string;
  /** Full <title>, primary keyword first, under about 60 characters. */
  metaTitle: string;
  metaDescription: string;
  h1: string;
  /** Short line under the title and on the guides index. */
  lead: string;
  photo: PhotoKey;
  /** Social image from public/og/, reused from the matching category page. */
  og: string;
  published: string;
  updated: string;
  /** Category the guide sells into; shown as the main call to action. */
  shop: { label: string; href: string };
  /** Other category pages that link to this guide. */
  alsoOn?: string[];
  sections: GuideSection[];
  faqs: { q: string; a: string }[];
};

export const GUIDES: Guide[] = [
  {
    slug: "how-much-cloth-for-shalwar-kameez",
    metaTitle: "How Much Cloth for a Shalwar Kameez? Metres Guide",
    metaDescription:
      "How many metres you need for a gents shalwar kameez, a ladies three-piece suit and children's suits, and what changes the length, from a Sialkot cloth house.",
    h1: "How much cloth for a shalwar kameez?",
    lead: "Metres for men, ladies and children, and the things that change the length, from the counter where we cut it every day.",
    photo: "thaan-2",
    og: "gents-fabric",
    published: "2026-11-03",
    updated: "2026-11-03",
    shop: { label: "Gents suiting & wash and wear", href: "/gents-fabric" },
    alsoOn: ["/ladies-fabric", "/uniform-fabric"],
    sections: [
      {
        h2: "The quick answer",
        paras: [
          "These are the lengths most tailors ask for, for an adult of average height in fabric of normal width. Use them to plan, then check with your tailor, because the cut matters as much as the size.",
        ],
        table: {
          head: ["Outfit", "Usual length"],
          rows: [
            ["Gents shalwar kameez (both pieces)", "4 to 4.5 metres"],
            ["Gents kameez or kurta only", "About 2.25 to 2.5 metres"],
            ["Gents shalwar only", "About 2 metres"],
            ["Waistcoat", "About 1 to 1.25 metres"],
            ["Ladies shirt", "2.5 to 3 metres"],
            ["Ladies shalwar or trouser", "2 to 2.5 metres"],
            ["Dupatta", "About 2.5 metres"],
            ["Children's suit", "Ask with the child's age and height"],
          ],
        },
      },
      {
        h2: "Metres or gaz?",
        paras: [
          "Many tailors in Pakistan still measure in gaz (yards). One gaz is about 0.91 metres, so 4.5 gaz is just over 4 metres. If your tailor gives you a length in gaz, send it to us as it is and we will cut to that.",
        ],
      },
      {
        h2: "What changes the length",
        list: [
          "Height and build. Taller or broader customers usually need an extra half metre for a gents suit.",
          "The cut. A wide, traditional shalwar takes more cloth than a straight trouser. A long kameez with a wide hem takes more than a short kurta.",
          "Fabric width. Narrower cloth needs more length for the same garment. Wash & wear and suiting are usually wider than lawn, so the same suit can need less.",
          "Prints and borders. Matching a print across the seams, or placing a border on the hem, uses extra cloth.",
          "Shrinkage. Cotton and lawn can shrink a little in the first wash. Many tailors wash cotton before cutting, so a little extra length is worth it.",
        ],
      },
      {
        h2: "Ladies unstitched suits",
        paras: [
          "Most ready-packed ladies suits already come as a shirt, a dupatta and a trouser piece. When you buy from the [ladies fabric](/ladies-fabric) shelves by the metre, plan the three pieces separately using the table above. Kameez lengths and sleeve styles change with fashion, so ask your tailor for the shirt length first.",
        ],
      },
      {
        h2: "Buying for the whole family",
        paras: [
          "For weddings and Eid, families often buy matching suits for everyone. Add up each person's length and buy it from the same thaan, so the colour matches exactly. Two bolts of the same shade can differ slightly from one dye batch to the next. See our [wedding fabric checklist](/guides/wedding-fabric-checklist) if you are planning for a wedding.",
        ],
      },
      {
        h2: "How we cut it",
        paras: [
          "There is no minimum. We cut exactly the length you ask for, whether that is one shirt piece or fabric for a whole family. If you are not sure, send us your tailor's measurement, or a photo of a suit that fits you well, on WhatsApp.",
          "Outside Sialkot? [Order fabric online](/order-online): tell us the fabric and length on WhatsApp, we confirm the price and delivery, and we send it anywhere in Pakistan.",
        ],
      },
    ],
    faqs: [
      {
        q: "How many metres do I need for a gents shalwar kameez?",
        a: "Usually 4 to 4.5 metres for an adult of average height. Taller customers and wide traditional shalwars can need a little more.",
      },
      {
        q: "How many metres are in a ladies three-piece suit?",
        a: "Roughly 2.5 to 3 metres for the shirt, 2 to 2.5 metres for the trouser and about 2.5 metres for the dupatta, depending on the cut.",
      },
      {
        q: "Can I buy less than a full suit?",
        a: "Yes. There is no minimum length, so you can buy a single shirt piece, a shalwar length or a dupatta.",
      },
      {
        q: "Can you work out the length for me?",
        a: `Yes. Send your tailor's measurement or a photo of a suit that fits well on WhatsApp at ${PHONE_DISPLAY}, and we will tell you how much to buy.`,
      },
    ],
  },
  {
    slug: "karandi-vs-khaddar",
    metaTitle: "Karandi vs Khaddar vs Wool Blend: Winter Suit Fabric",
    metaDescription:
      "Karandi, khaddar or wool blend? How the three winter fabrics differ in warmth, feel and care, and which one suits daily wear or a wedding.",
    h1: "Karandi, khaddar or wool blend?",
    lead: "How the three winter fabrics differ in warmth, feel and care, and which one fits the suit you have in mind.",
    photo: "winter",
    og: "winter-collection",
    published: "2026-11-03",
    updated: "2026-11-03",
    shop: { label: "Winter suiting & karandi", href: "/winter-collection" },
    sections: [
      {
        h2: "The short version",
        table: {
          head: ["", "Karandi", "Khaddar", "Wool blend"],
          rows: [
            ["Feel", "Textured, slightly coarse weave", "Thick, matte cotton that softens with washing", "Smooth, with a soft drape"],
            ["Best for", "Everyday winter shalwar kameez", "Casual and printed winter suits", "Formal days, weddings, waistcoats"],
            ["Holds a press", "Well", "Less well, creases more", "Well"],
            ["Care", "Easy", "Easy, may shrink at first", "Gentle wash, cool iron"],
          ],
        },
      },
      {
        h2: "Karandi",
        paras: [
          "Karandi is the winter staple for gents shalwar kameez in Punjab. The weave has a visible texture that gives it character and hides small creases, and it has enough weight to keep the cold off on foggy mornings.",
          "The blend behind the name changes from mill to mill, so two karandis can feel quite different in the hand. Feel the weight before you buy, or ask us to describe it on WhatsApp. Heavier karandi suits December and January. Lighter ones work for autumn and early spring.",
        ],
      },
      {
        h2: "Khaddar",
        paras: [
          "Khaddar is a thick, plain cotton weave with a matte, homespun look. It breathes better than karandi, softens with every wash and is a favourite for printed ladies winter suits and relaxed gents kurtas.",
          "Because it is mostly cotton, khaddar creases more and can shrink a little in the first wash. Many tailors wash it before cutting, so buy a little extra length.",
        ],
      },
      {
        h2: "Wool blend",
        paras: [
          "Wool-blend suiting is the smartest of the three. It drapes well, feels smooth and gives good warmth without bulk, which is why it is the usual choice for waistcoats, formal suits and wedding functions.",
          "It needs a little more care: wash gently, or dry-clean if the label says so, and press with a cool iron through a cloth.",
        ],
      },
      {
        h2: "Which one should you buy?",
        list: [
          "For office and everyday winter wear: karandi. It looks neat all day and needs little ironing.",
          "For a soft, casual suit, or a printed ladies winter suit: khaddar.",
          "For weddings, dawats and a waistcoat over your kameez: wool blend. For a winter wedding, see also our [wedding fabric checklist](/guides/wedding-fabric-checklist).",
        ],
        after: [
          "Warmth depends more on the weight of the cloth than on its name. A heavy khaddar can be as warm as a light karandi, so judge the fabric in your hand, not only the label.",
        ],
      },
      {
        h2: "Colours for winter",
        paras: [
          "Charcoal, browns, deep greens and navy are the winter classics, and they hide the wear of a long season. Black and maroon are popular for evening functions.",
        ],
      },
      {
        h2: "What we keep",
        paras: [
          "At our shop in Sialkot we keep karandi and wool-blend suiting for men, and embroidered winter suits and velvet for ladies. Stock changes through the season, so message us on WhatsApp and we will send photos of what is on the shelves today. See the full [winter collection](/winter-collection), and check [how much cloth a shalwar kameez needs](/guides/how-much-cloth-for-shalwar-kameez) before you order.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is karandi warmer than khaddar?",
        a: "It depends on the weight. Karandi usually feels warmer and keeps its shape better, but a heavy khaddar can be just as warm as a light karandi.",
      },
      {
        q: "Which winter fabric needs the least ironing?",
        a: "Karandi and wool blends hold a press much better than khaddar, which is mostly cotton and creases more easily.",
      },
      {
        q: "How much karandi do I need for a shalwar kameez?",
        a: "Usually 4 to 4.5 metres for an adult. Tell us your tailor's measurement and we will cut exactly that.",
      },
      {
        q: "Do you deliver winter fabric outside Sialkot?",
        a: `Yes. Message us on WhatsApp at ${PHONE_DISPLAY} with the fabric, colour and length, and we confirm the price and deliver anywhere in Pakistan.`,
      },
    ],
  },
  {
    slug: "wedding-fabric-checklist",
    metaTitle: "Wedding Fabric Checklist for Mehndi, Barat and Walima",
    metaDescription:
      "A wedding fabric checklist for the bride, the groom and the family: what to choose for mehndi, barat and walima, how to match colours, and when to buy.",
    h1: "Wedding fabric checklist",
    lead: "What to choose for mehndi, barat and walima, for the bride, the groom and the family, and how to keep every colour matched.",
    photo: "wedding-hero",
    og: "wedding-fabric",
    published: "2026-11-03",
    updated: "2026-11-03",
    shop: { label: "Bridal & groom fabric", href: "/wedding-fabric" },
    alsoOn: ["/ladies-fabric"],
    sections: [
      {
        h2: "Start with a plan for each function",
        paras: [
          "Write down every function, who needs an outfit for it and the colour theme. Bring that list to the counter, or send it on WhatsApp. It is much easier to match fabric across the mehndi, barat and walima when we can see the whole plan at once.",
        ],
        table: {
          head: ["Function", "Bride", "Groom", "Family"],
          rows: [
            ["Mehndi", "Bright embroidered suits, raw silk or katan", "Kurta in cotton or raw silk, with a waistcoat", "Matching colours in lighter fabrics"],
            ["Barat", "Hand-embroidered panels and zari work, with a matching dupatta", "Groom fabric matched to the bride's colours: jacquard, raw silk, or velvet in winter", "Festive suits in silk, jacquard or embroidered fabric"],
            ["Walima", "Embroidered panels in softer colours", "Wool-blend suiting or jacquard, often with a waistcoat", "Embroidered suits and formal suiting"],
          ],
        },
      },
      {
        h2: "The bride",
        list: [
          "Barat: hand-embroidered panels and zari work are the centre of the wedding wardrobe. Choose the panel first, then match the dupatta and the plain fabric to it.",
          "Walima: lighter colours and embroidered panels that are less heavy than the barat outfit.",
          "Mehndi and dholki: brighter colours and lighter fabrics you can move in. See our [ladies fabric](/ladies-fabric) for these outfits.",
        ],
      },
      {
        h2: "The groom",
        paras: [
          "Choose the groom's fabric after the bride's colours are fixed, so the two outfits work together in photos. Jacquard and raw silk suit the barat. In a winter wedding, velvet and wool blends add warmth and weight. For the mehndi, a cotton or raw silk kurta with a waistcoat is the usual choice. Our [gents fabric](/gents-fabric) page has everyday suiting for the rest of the week.",
        ],
      },
      {
        h2: "The family",
        list: [
          "Buy matching suits from the same thaan. Two bolts of the same shade can differ slightly between dye batches, and the difference shows in group photos.",
          "Buy all the lengths at once. We cut each person's length from the same bolt, with no minimum.",
          "Add up the metres before you come. Our guide to [how much cloth a shalwar kameez needs](/guides/how-much-cloth-for-shalwar-kameez) has the usual lengths.",
        ],
      },
      {
        h2: "Winter weddings",
        paras: [
          "Most weddings in Pakistan fall in the cooler months, so think about warmth as well as looks. Embroidered velvet is the classic choice for evening functions, and wool blends keep the men comfortable at outdoor events. Our [winter fabric guide](/guides/karandi-vs-khaddar) explains the difference between karandi, khaddar and wool blend.",
        ],
      },
      {
        h2: "When to buy",
        paras: [
          "Embroidered and heavy fabrics take longer to stitch, and tailors get fully booked in wedding season. Choose your fabric well before the date so nobody is rushed, and leave time for a fitting.",
          "Wedding wear at our shop is by appointment, so you get the counter and our full attention. Call or WhatsApp us to book a time, or ask for photos before you travel. We also deliver wedding orders across Pakistan. See our [bridal and groom fabric](/wedding-fabric).",
        ],
      },
    ],
    faqs: [
      {
        q: "What fabric is best for a barat dress?",
        a: "Hand-embroidered panels and zari work are the usual choice for the bride, with a matching dupatta. For the groom, jacquard or raw silk, or velvet for a winter wedding.",
      },
      {
        q: "How do we make sure the family's suits match?",
        a: "Buy every length from the same thaan at the same time. Different bolts of the same colour can vary slightly between dye batches.",
      },
      {
        q: "Do I need an appointment for wedding fabric?",
        a: `Wedding wear is by appointment so we can give you the time it needs. Call or WhatsApp us at ${PHONE_DISPLAY} to book.`,
      },
      {
        q: "Can you send wedding fabric to another city?",
        a: "Yes. We send photos on WhatsApp, confirm the price, and deliver wedding orders anywhere in Pakistan.",
      },
    ],
  },
  {
    slug: "wash-and-wear-fabric-guide",
    metaTitle: "Wash and Wear Fabric Guide: Choosing and Care",
    metaDescription:
      "What wash and wear fabric is, how it compares with cotton, how to choose a good one for a shalwar kameez and how to wash and iron it so it lasts.",
    h1: "Wash and wear fabric guide",
    lead: "What it is, how it compares with cotton, how to pick a good one and how to look after it so it lasts.",
    photo: "wash-and-wear",
    og: "gents-fabric",
    published: "2026-11-03",
    updated: "2026-11-03",
    shop: { label: "Gents suiting & wash and wear", href: "/gents-fabric" },
    sections: [
      {
        h2: "What wash and wear is",
        paras: [
          "Wash and wear is a blended suiting, usually polyester mixed with cotton or viscose, finished so that it resists creases. You wash it, hang it up and it is ready to wear with little or no ironing. That is why it is the fabric most of our gents customers come in for, for office days, travel and everyday shalwar kameez.",
        ],
      },
      {
        h2: "Wash and wear or cotton?",
        table: {
          head: ["", "Wash and wear", "Cotton"],
          rows: [
            ["Creases", "Resists creases, keeps its press", "Creases easily, needs ironing"],
            ["Drying", "Dries quickly", "Slower to dry"],
            ["In peak summer", "Warmer, breathes less", "Breathes better, softens with washing"],
            ["Best for", "Office, travel, all-day wear", "Hot days and relaxed wear"],
          ],
        },
        after: [
          "Many customers keep both: wash and wear for working days and cotton or linen for the hottest weeks of summer.",
        ],
      },
      {
        h2: "How to choose a good one",
        list: [
          "Feel the weight. Lighter wash and wear is cooler in summer. A heavier one drapes better and suits autumn and winter.",
          "Check the finish. Some have a matte, cotton-like face and some a slight sheen. Matte looks more natural for daily wear.",
          "Hold whites up to the light. Light colours should not be see-through when worn.",
          "Crush a corner in your hand. A good wash and wear springs back without leaving sharp creases.",
          "Pick colours for the job. White, off-white, greys and soft blues are the everyday staples. Charcoal, navy and maroon stand out for Eid and weddings.",
        ],
      },
      {
        h2: "How to wash and iron it",
        list: [
          "Wash in cool or warm water, not hot. Hot water can set creases into the fabric.",
          "Use a gentle spin, and don't wring it out.",
          "Hang it straight away and dry it in the shade. Strong sun can fade dark colours.",
          "If you iron, use a low to medium heat and iron on the reverse side, or through a cloth. Too much heat makes the fabric shine.",
        ],
      },
      {
        h2: "How much to buy",
        paras: [
          "A typical adult shalwar kameez takes roughly 4 to 4.5 metres, depending on height and cut. Our guide to [how much cloth a shalwar kameez needs](/guides/how-much-cloth-for-shalwar-kameez) covers every outfit, from a kurta to a family order.",
        ],
      },
      {
        h2: "Wash and wear at our shop",
        paras: [
          "We keep wash and wear in stock all year at our shop in Sialkot, in whites, greys, blues and darker tones, and cut it to any length. See our [gents suiting and wash and wear](/gents-fabric), or [order online](/order-online): tell us the colour and length on WhatsApp and we deliver anywhere in Pakistan. For staff or school orders in bulk, see [uniform fabric](/uniform-fabric).",
        ],
      },
    ],
    faqs: [
      {
        q: "Does wash and wear need ironing?",
        a: "Usually very little. Hang it up straight after washing and most creases drop out. A quick press on low heat gives it a sharp finish.",
      },
      {
        q: "Is wash and wear good for summer?",
        a: "It works well on most days, but cotton and linen breathe better in the hottest weeks of summer.",
      },
      {
        q: "How do I stop wash and wear from shining?",
        a: "Iron on low to medium heat, on the reverse side or through a thin cloth. High heat makes the surface shine.",
      },
      {
        q: "Do you sell wash and wear outside Sialkot?",
        a: `Yes. Message us on WhatsApp at ${PHONE_DISPLAY} with the colour and length, and we confirm the price and deliver across Pakistan.`,
      },
    ],
  },
  {
    slug: "school-uniform-fabric",
    metaTitle: "School Uniform Fabric: How to Order in Bulk",
    metaDescription:
      "How to order school uniform fabric in bulk: matching the colour, choosing fabric for shirts and trousers, and working out the metres before the new session.",
    h1: "Ordering school uniform fabric in bulk",
    lead: "Matching the colour, choosing the right fabric for each garment, working out the metres and getting it all ready before the new session.",
    photo: "uniform",
    og: "uniform-fabric",
    published: "2026-11-03",
    updated: "2026-11-03",
    shop: { label: "Uniform fabric", href: "/uniform-fabric" },
    sections: [
      {
        h2: "Start with a sample",
        paras: [
          "The quickest way to match a uniform is to start from the one you already have. Send us a clear photo in daylight, or bring a swatch or an old shirt to the shop. Photos taken indoors under tube lights can make grey look blue and navy look black, so daylight matters.",
        ],
      },
      {
        h2: "Choose the fabric for each garment",
        table: {
          head: ["Garment", "Usual fabric", "Usual colours"],
          rows: [
            ["Shirts", "Shirting or light wash & wear", "White, sky blue"],
            ["Trousers and shalwar", "Wash & wear or suiting", "Grey, navy, black, khaki"],
            ["Shalwar kameez uniforms", "Wash & wear", "White, grey, sky blue"],
            ["Winter blazers and sweater layers", "Heavier suiting", "Navy, maroon, black"],
          ],
        },
        after: [
          "Wash & wear is the usual choice for uniforms because it keeps its press through a school day and survives frequent washing. Our [wash and wear guide](/guides/wash-and-wear-fabric-guide) explains what to look for.",
        ],
      },
      {
        h2: "Work out the metres",
        list: [
          "Count the uniforms by rough size: small, medium and large children, plus any staff.",
          "Ask the tailor for the length of one shirt and one trouser or shalwar in each size.",
          "Multiply and add a little extra for new admissions during the year.",
          "Send us the counts on WhatsApp and we will work out the total with you, so you buy enough without waste. For adult lengths, see [how much cloth a shalwar kameez needs](/guides/how-much-cloth-for-shalwar-kameez).",
        ],
      },
      {
        h2: "Buy it all from the same batch",
        paras: [
          "The same colour can vary slightly from one dye batch to the next, and on a row of children in uniform the difference shows. Order the whole quantity at once so it comes from the same batch, and keep a few spare metres for repairs and late admissions.",
        ],
      },
      {
        h2: "Order before the rush",
        paras: [
          "Schools, parents and tailors all get busy before a new session and after the summer break. Place bulk orders a few weeks early so the fabric is cut and the stitching is finished on time.",
        ],
      },
      {
        h2: "How bulk orders work with us",
        paras: [
          "Send us the colour, the garment and how many you need on WhatsApp. We check the shelves, send photos, confirm the price and delivery, and cut the full order to length. We deliver bulk orders across Pakistan, or you can collect from our shop at Chowk Adda Pasrooriyan, Sialkot. There is no minimum, so we also cut fabric for a single uniform. See our [uniform fabric](/uniform-fabric) page for office, hospital and staff uniforms too.",
        ],
      },
    ],
    faqs: [
      {
        q: "Which fabric is best for school uniforms?",
        a: "Wash & wear is the most common choice for trousers, shalwar kameez and shirts because it keeps its press and washes well. Some schools prefer shirting for white shirts.",
      },
      {
        q: "Can you match our school's uniform colour?",
        a: "Send a daylight photo or bring a sample to the shop and we will match the colour and weight as closely as we can.",
      },
      {
        q: "Is there a minimum order for uniform fabric?",
        a: "No. We cut fabric for one uniform or for a whole school.",
      },
      {
        q: "Do you deliver uniform fabric to other cities?",
        a: `Yes. Message us on WhatsApp at ${PHONE_DISPLAY} with the colour, garment and quantity, and we confirm the price and deliver across Pakistan.`,
      },
    ],
  },
  {
    slug: "velvet-for-winter-weddings",
    metaTitle: "Velvet for Winter Weddings: Colours, Weight and Care",
    metaDescription:
      "Choosing velvet for a winter wedding: the colours that work, how heavy to go, what to pair it with, and how to store and press velvet so the pile stays rich.",
    h1: "Velvet for winter weddings",
    lead: "The colours that work, how heavy to go, what to pair it with and how to look after it so the pile stays rich.",
    photo: "velvet-side",
    og: "wedding-fabric",
    published: "2026-11-03",
    updated: "2026-11-03",
    shop: { label: "Bridal & groom fabric", href: "/wedding-fabric" },
    alsoOn: ["/winter-collection"],
    sections: [
      {
        h2: "Why velvet in winter",
        paras: [
          "Velvet is warm, it has weight and it catches the light at evening functions in a way few fabrics can. That makes it a favourite for winter barats, walimas and dinners, when an outfit has to look rich and keep out the cold.",
        ],
      },
      {
        h2: "Colours that work",
        list: [
          "Maroon and deep red, the classic wedding velvet.",
          "Black, especially with white or gold thread work.",
          "Navy, deep green and purple for something less expected.",
          "Mustard and other warm tones for a family member's outfit or a mehndi in the cold.",
        ],
        after: [
          "Velvet looks darker in the evening and richer in daylight, so if you can, look at the colour under both before you decide.",
        ],
      },
      {
        h2: "How heavy to go",
        paras: [
          "Heavier velvet holds structure and suits a shirt or a waistcoat for the main function. It is warm, so for an indoor event it can feel too much worn from head to toe.",
          "A common balance is a velvet shirt with a lighter trouser and dupatta in raw silk, katan or jacquard. The velvet carries the look, and the outfit stays comfortable through a long evening.",
        ],
      },
      {
        h2: "Embroidery on velvet",
        paras: [
          "Thread work shows beautifully on velvet's soft pile. White thread gives a clean, modern look, and gold thread or zari reads as more formal. Look at the back of the work: tight, even stitches with no loose ends last much longer. Our [wedding fabric checklist](/guides/wedding-fabric-checklist) covers matching it across every function.",
        ],
      },
      {
        h2: "For the groom",
        paras: [
          "A velvet waistcoat over a plain kameez is the simplest way for the groom or his family to bring velvet into a winter wedding. Match its colour to the bride's outfit and keep the kameez quiet. For the rest of the winter wardrobe, see [karandi, khaddar or wool blend](/guides/karandi-vs-khaddar).",
        ],
      },
      {
        h2: "How to look after velvet",
        list: [
          "Hang it, don't fold it. Hard folds crush the pile and can leave a mark.",
          "Steam it from the reverse side instead of pressing an iron on the face.",
          "Dry-clean embroidered velvet rather than washing it at home.",
          "Brush the pile gently in one direction if it gets flattened.",
        ],
      },
      {
        h2: "Velvet at our shop",
        paras: [
          "We keep embroidered velvet suits and velvet with white and gold thread work in the winter season. Stock changes quickly as wedding season goes on, so message us on WhatsApp and we will send photos of what is in today. Wedding wear is by appointment. See our [bridal and groom fabric](/wedding-fabric) and the [winter collection](/winter-collection).",
        ],
      },
    ],
    faqs: [
      {
        q: "Is velvet good for a winter wedding?",
        a: "Yes. It is warm, holds its shape and has a rich sheen under evening lights, which is why it is popular for winter barats and walimas.",
      },
      {
        q: "What should I pair a velvet shirt with?",
        a: "A lighter trouser and dupatta in raw silk, katan or jacquard, so the outfit isn't too heavy or too warm to wear all evening.",
      },
      {
        q: "How do I remove creases from velvet?",
        a: "Steam it from the reverse side. Don't press an iron directly on the face, because it flattens the pile.",
      },
      {
        q: "Can you send velvet to another city?",
        a: `Yes. Message us on WhatsApp at ${PHONE_DISPLAY} for photos and prices, and we deliver across Pakistan.`,
      },
    ],
  },
  {
    slug: "how-to-check-fabric-quality",
    metaTitle: "How to Check Fabric Quality Before You Buy",
    metaDescription:
      "Simple checks for lawn, cotton, wash and wear and embroidered suits before you buy, at the counter or on WhatsApp, from a Sialkot cloth house.",
    h1: "How to check fabric quality before you buy",
    lead: "Simple checks for lawn, cotton, wash and wear and embroidery, whether you are at the counter or buying on WhatsApp.",
    photo: "lawn-spread",
    og: "order-online",
    published: "2026-11-03",
    updated: "2026-11-03",
    shop: { label: "Order fabric online", href: "/order-online" },
    alsoOn: ["/lawn"],
    sections: [
      {
        h2: "Checks that work on any fabric",
        list: [
          "Hold it up to the light. An even weave with no thin patches or slubs where they shouldn't be is a good sign. Light colours should not be see-through when worn.",
          "Feel both sides. Good fabric feels even across the width, not stiff in one place and limp in another.",
          "Look at the edges. A neat, straight selvedge usually means careful weaving and finishing.",
          "Check the colour in daylight. Shop lights and phone screens both change colours.",
        ],
      },
      {
        h2: "Lawn and cotton",
        list: [
          "Look at the back of a print. On good lawn the print comes through well and the colours stay sharp at the edges.",
          "Rub a damp white cloth on a dark corner. If colour comes off, it may bleed in the first wash.",
          "Crush a corner in your hand. All cotton creases, but a good one softens rather than staying papery.",
          "Expect a little shrinkage. Many tailors wash cotton and lawn before cutting.",
        ],
        after: [
          "See our [lawn](/lawn) for the summer season.",
        ],
      },
      {
        h2: "Wash and wear",
        list: [
          "Crush it and let go. A good wash and wear springs back without sharp creases.",
          "Rub two layers together. Fabric that starts to fluff or pill straight away will look tired quickly.",
          "Hold whites up to the light to check they aren't see-through.",
        ],
        after: [
          "Our [wash and wear guide](/guides/wash-and-wear-fabric-guide) covers choosing and care in more detail.",
        ],
      },
      {
        h2: "Embroidered suits and panels",
        list: [
          "Turn it over. Neat, tight stitches on the back with no long loose threads will last.",
          "Check the embroidery lies flat and doesn't pucker the fabric around it.",
          "On zari and metallic work, look for even thread with no dull or broken patches.",
          "Make sure the dupatta and the plain fabric match the panel in daylight.",
        ],
      },
      {
        h2: "Buying on WhatsApp",
        paras: [
          "You can't feel fabric through a phone, so ask for the things that stand in for your hands. Good shops won't mind.",
        ],
        list: [
          "Photos in daylight, not only under shop lights.",
          "A close-up of the weave and of the back of any embroidery.",
          "A short video moving the fabric, so you can see the drape and sheen.",
          "A photo next to something white, so you can judge the true colour.",
          "The price and delivery confirmed before anything is cut.",
        ],
        after: [
          "That is how we take orders from customers outside Sialkot: you tell us what you need, we send photos from the shelf and agree the price and delivery before we cut. See how to [order fabric online](/order-online).",
        ],
      },
    ],
    faqs: [
      {
        q: "How can I tell if lawn is good quality?",
        a: "Hold it to the light for an even weave, check the print is sharp on the back, and rub a damp white cloth on a dark corner to check the colour doesn't come off.",
      },
      {
        q: "How do I check fabric when buying online?",
        a: "Ask for daylight photos, a close-up of the weave and the back of any embroidery, and a short video of the fabric moving. Agree the price before anything is cut.",
      },
      {
        q: "Will you send photos before I order?",
        a: `Yes. Message us on WhatsApp at ${PHONE_DISPLAY} and we will send photos from the shelf before you decide.`,
      },
    ],
  },
];

export const GUIDE_BY_SLUG = Object.fromEntries(GUIDES.map((g) => [g.slug, g]));

/** Guides to link from a category page. */
export const guidesFor = (href: string) => GUIDES.filter((g) => g.shop.href === href || g.alsoOn?.includes(href));
