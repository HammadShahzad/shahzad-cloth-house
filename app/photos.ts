// Fabric photography. These are AI-generated stand-ins (Claivra) until real
// photos of the shop's own stock replace them, so alt text describes the
// cloth, not a specific shelf at Shahzad Cloth House.
export const PHOTOS = {
  "hero-shop": {
    src: "/photos/hero-shop.jpg",
    alt: "Shelves of folded fabric bolts behind a wooden cloth-shop counter",
  },
  lawn: {
    src: "/photos/lawn.jpg",
    alt: "Folded unstitched lawn in soft floral prints with an embroidered neckline",
  },
  "wash-and-wear": {
    src: "/photos/wash-and-wear.jpg",
    alt: "Stack of folded wash & wear suiting in white, cream, grey and blue with a measuring tape",
  },
  "cotton-linen": {
    src: "/photos/cotton-linen.jpg",
    alt: "Folded cotton and linen in white, oatmeal, sage and sky blue",
  },
  "silk-jacquard": {
    src: "/photos/silk-jacquard.jpg",
    alt: "Teal, emerald, rose and gold silk and jacquard fabric with woven patterns",
  },
  wedding: {
    src: "/photos/wedding.jpg",
    alt: "Deep red bridal fabric with gold zari embroidery and a matching dupatta",
  },
  winter: {
    src: "/photos/winter.jpg",
    alt: "Folded karandi and wool-blend winter fabric in charcoal, brown, olive and navy",
  },
} as const;

export type PhotoKey = keyof typeof PHOTOS;
