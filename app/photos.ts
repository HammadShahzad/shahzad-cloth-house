// Photos taken at Shahzad Cloth House, Chowk Adda Pasrooriyan, Sialkot.
// `pos` is the object-position to use when a photo is cropped into a tile.
type Photo = { src: string; alt: string; caption: string; pos?: string };

const shop = (file: string) => `/photos/shop/${file}.jpg`;

const ALL = {
  "hero-shop": { src: shop("plain-suiting"), alt: "Shelves of suiting in every shade at Shahzad Cloth House, Sialkot", caption: "Suiting in every shade" },
  "suiting-wall": { src: shop("suiting-wall"), alt: "Floor-to-ceiling shelves of suiting behind the counter at Shahzad Cloth House", caption: "The suiting wall behind our counter" },
  shopfront: { src: shop("shopfront"), alt: "The front of Shahzad Cloth House in Sialkot, with its Urdu signboards", caption: "Our shop at Chowk Adda Pasrooriyan" },
  lawn: { src: shop("lawn-on-counter"), alt: "Printed and embroidered lawn suits on the counter in front of shelves of packed lawn at Shahzad Cloth House", caption: "Lawn suits opened out on the counter" },
  "wash-and-wear": { src: shop("suiting-stack"), alt: "Folded wash & wear suiting in grey, sand, peach and blue at Shahzad Cloth House", caption: "Wash & wear in quiet, everyday tones" },
  "cotton-linen": { src: shop("cotton-rolls"), alt: "Rolls of cotton and linen in sky blue, sand, grey and pink at Shahzad Cloth House", caption: "Cotton and linen on the roll" },
  "silk-jacquard": { src: shop("jacquard"), alt: "Purple jacquard fabric with a woven gold pattern, spread out at Shahzad Cloth House", caption: "Jacquard with a woven gold pattern" },
  wedding: { src: shop("embroidered-boxes"), alt: "Boxed embroidered suits in green, black, blue, yellow and red at Shahzad Cloth House", caption: "Boxed embroidered suits for weddings and Eid" },
  "wedding-hero": { src: shop("embroidered-boxes-2"), alt: "Embroidered festive suits in blue, red, black and yellow boxes at Shahzad Cloth House", caption: "Festive embroidered suits" },
  winter: { src: shop("winter-stacks"), alt: "Stacks of embroidered winter suits in maroon, mustard, navy and purple at Shahzad Cloth House", caption: "Embroidered winter suits" },
  uniform: { src: shop("plain-suiting"), alt: "Shelves of plain suiting in white, grey, navy, black and khaki at Shahzad Cloth House", caption: "Plain suiting for uniforms" },
  ladies: { src: shop("ladies-shelves"), alt: "Shelves of embroidered and printed ladies suits at Shahzad Cloth House", caption: "Ladies suits, shelf after shelf" },
  "ladies-close": { src: shop("ladies-shelves-close"), alt: "Embroidered ladies suits folded on the shelves at Shahzad Cloth House", caption: "Embroidered ladies suits" },
  "lawn-wall": { src: shop("printed-suits-wall"), alt: "A wall of packed printed lawn suits at Shahzad Cloth House", caption: "A wall of packed lawn suits" },
  "packed-suits": { src: shop("packed-suits"), alt: "Packed unstitched suits in green, pink, purple and gold at Shahzad Cloth House", caption: "New stock, still in the pack" },
  "lawn-spread": { src: shop("printed-suits-spread"), alt: "Printed lawn suits spread across the counter at Shahzad Cloth House", caption: "Printed suits spread for a customer" },
  gents: { src: shop("gents-counter"), alt: "Opening a length of black suiting at the counter, in front of shelves of gents wash & wear at Shahzad Cloth House", caption: "Opening a suit length at the counter", pos: "30% center" },
  "gents-counter": { src: shop("gents-counter-2"), alt: "Laying out gents suiting on the counter at Shahzad Cloth House", caption: "Laying out suiting for a customer", pos: "30% center" },
  "gents-black": { src: shop("gents-counter-3"), alt: "Folding black suiting on the counter at Shahzad Cloth House", caption: "Black suiting, folded at the counter", pos: "20% center" },
  "suiting-close": { src: shop("suiting-close"), alt: "Close-up of folded gents suiting in grey, green, blue and brown at Shahzad Cloth House", caption: "Gents suiting, up close" },
  "cotton-light": { src: shop("cotton-rolls-light"), alt: "Rolls of light cotton and wash & wear in pastel shades at Shahzad Cloth House", caption: "Light cottons for summer" },
  thaan: { src: shop("thaan"), alt: "Pulling a thaan of suiting from the shelves at Shahzad Cloth House", caption: "Pulling a thaan from the suiting wall", pos: "left center" },
  "thaan-2": { src: shop("thaan-2"), alt: "Taking a thaan down from the suiting shelves at Shahzad Cloth House", caption: "Every bolt is cut to your length", pos: "left center" },
  velvet: { src: shop("velvet-suit"), alt: "Embroidered velvet suit with matching dupatta on a mannequin at Shahzad Cloth House", caption: "Embroidered velvet suit" },
  "velvet-front": { src: shop("velvet-suit-front"), alt: "Close view of an embroidered velvet suit on a mannequin at Shahzad Cloth House", caption: "Velvet with white thread work" },
  "velvet-side": { src: shop("velvet-suit-side"), alt: "Embroidered velvet suit with dupatta on display at Shahzad Cloth House", caption: "Velvet for winter weddings" },
  "velvet-shop": { src: shop("velvet-suit-shop"), alt: "Embroidered velvet suit on display in the shop at Shahzad Cloth House", caption: "Velvet on display in the shop" },
  "order-online": { src: shop("packing"), alt: "Packing an order in a Shahzad Cloth House bag at the shop counter", caption: "Packing an order for delivery" },
  "packing-urdu": { src: shop("packing-urdu-bag"), alt: "Putting fabric into a Shahzad Cloth House bag with the shop name in Urdu", caption: "Packed in our own bag" },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof ALL;
export const PHOTOS: Record<PhotoKey, Photo> = ALL;

// The home page gallery.
export const SHOP_GALLERY: PhotoKey[] = [
  "thaan", "ladies", "velvet", "gents-counter",
  "wedding-hero", "suiting-close", "lawn-wall", "packing-urdu",
];
