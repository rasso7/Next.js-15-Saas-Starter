import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    // Add rule to handle SVGs as React components
    config.module.rules.push({
      test: /\.svg$/, // Target .svg files
      use: ["@svgr/webpack"], // Use @svgr/webpack loader
    });
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
      },
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
    ],
  },
};

export default nextConfig;
