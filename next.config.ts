import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required for @vercel/speed-insights/next to work
  experimental: {
    instrumentationHook: true,
  },
};

export default nextConfig;
