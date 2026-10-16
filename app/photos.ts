// Photos taken at Shahzad Cloth House, Chowk Adda Pasrooriyan, Sialkot.
export const PHOTOS = {
  "hero-shop": { src: "/photos/shop-interior.jpg", alt: "Pulling a thaan from floor-to-ceiling shelves of suiting at Shahzad Cloth House" },
  shopfront: { src: "/photos/shop-front.jpg", alt: "The front of Shahzad Cloth House in Sialkot, with its Urdu signboards and phone number 0300 6143230" },
  lawn: { src: "/photos/shop-lawn.jpg", alt: "Printed and embroidered unstitched lawn suits laid out on the counter at Shahzad Cloth House" },
  "wash-and-wear": { src: "/photos/shop-gents.jpg", alt: "Laying out gents suiting on the counter in front of shelves of wash & wear at Shahzad Cloth House" },
  "cotton-linen": { src: "/photos/shop-cotton.jpg", alt: "Rolls of cotton and linen in sky blue, sand, grey and pink at Shahzad Cloth House" },
  "silk-jacquard": { src: "/photos/shop-jacquard.jpg", alt: "Purple jacquard fabric with a woven gold pattern, spread out at Shahzad Cloth House" },
  wedding: { src: "/photos/shop-formal-suit.jpg", alt: "Embroidered velvet suit with matching dupatta on a mannequin at Shahzad Cloth House" },
  winter: { src: "/photos/shop-winter.jpg", alt: "Stacks of embroidered winter suits in maroon, mustard, navy and purple at Shahzad Cloth House" },
  uniform: { src: "/photos/shop-plain-suiting.jpg", alt: "Shelves of plain suiting in white, grey, navy, black and khaki at Shahzad Cloth House" },
  "order-online": { src: "/photos/shop-packing.jpg", alt: "Packing an order in a Shahzad Cloth House bag at the shop counter" },
} as const;

export type PhotoKey = keyof typeof PHOTOS;
