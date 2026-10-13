// Fabric photography. These are real photographs from Pexels (free to use under
// the Pexels licence) standing in until photos of the shop's own stock replace
// them, so alt text describes the cloth, not a specific shelf at Shahzad Cloth
// House. Sources: pexels.com/photo/<id> for the id noted on each entry.
export const PHOTOS = {
  // 12795275
  "hero-shop": { src: "/photos/fabric-shop.jpg", alt: "A shopkeeper stacking folded unstitched fabric on tall shelves in a cloth shop in Pakistan" },
  // 20531147
  lawn: { src: "/photos/lawn-prints.jpg", alt: "Rolls of printed floral lawn and cotton in pink, cream and red" },
  // 18359546
  "wash-and-wear": { src: "/photos/shirting-shelves.jpg", alt: "Shelves of wash & wear and shirting fabric bolts in white, blue, grey and black" },
  // 30243795
  "cotton-linen": { src: "/photos/cotton-linen-stack.jpg", alt: "Stack of folded cotton and linen in blue, teal, yellow and coral" },
  // 6487380
  "silk-jacquard": { src: "/photos/silk-satin.jpg", alt: "Folded silk and satin in pink, purple, gold and red" },
  // 35533303
  wedding: { src: "/photos/bridal-lehenga.jpg", alt: "Red bridal lehenga and dupatta with heavy embroidery" },
  // 6766360
  winter: { src: "/photos/wool-suiting.jpg", alt: "Stack of folded wool suiting in black, charcoal, brown and herringbone" },
  // 18359537
  uniform: { src: "/photos/plain-fabric-rolls.jpg", alt: "Rolls of plain fabric in navy, royal blue, sky blue, khaki and red" },
  // 4568726
  "order-online": { src: "/photos/packing-order.jpg", alt: "Hands wrapping an order in brown kraft paper for delivery" },
} as const;

export type PhotoKey = keyof typeof PHOTOS;
