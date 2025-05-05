import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: {
    autoPrerender: false, // Disable the auto-prerender indicator
    buildActivity: false,  // Disable the build activity indicator (Next.js 14.1+)
  }
};

export default nextConfig;
