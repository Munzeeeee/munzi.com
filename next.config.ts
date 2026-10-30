import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "cdn.jsdelivr.net" },
    ],
  },
  async rewrites() {
    return [
      { source: "/onboarding", destination: "/onboarding.html" },
      { source: "/web-design-uae", destination: "/landing-web-design-uae.html" },
    ];
  },
};

export default nextConfig;
