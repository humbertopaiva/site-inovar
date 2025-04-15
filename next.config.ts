// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    domains: ["img.freepik.com", "static.wixstatic.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.freepik.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
