// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://site-inovar-teste.pages.dev"
      : "",
  basePath: "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
