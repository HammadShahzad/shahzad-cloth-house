import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Put the (small) stylesheet inside each page, so the first paint doesn't wait for a CSS request.
  experimental: { inlineCss: true },
  images: {
    formats: ["image/avif", "image/webp"],
    // Fabric photos are full of detail; 65 keeps them sharp at a smaller size than the default 75.
    qualities: [65],
    // 320 fits small phone tiles better than jumping straight to 384.
    imageSizes: [64, 96, 128, 256, 320, 384],
  },
};

export default nextConfig;
