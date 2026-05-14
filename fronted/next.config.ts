import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['172.16.11.16'],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drive.google.com",
      },
      {
        protocol: "https",
        hostname: "tse4.mm.bing.net",
      }, {
        protocol: "https",
        hostname: "chatgpt.com",
      },
    ],
  }
};

export default nextConfig;
