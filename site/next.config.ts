import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d395js6c4h8h6h.cloudfront.net",
      },
    ],
  },
};

export default nextConfig;
