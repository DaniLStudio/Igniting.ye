import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove output: 'export' for Vercel deployment
  // output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Remove assetPrefix for Vercel deployment
  // assetPrefix: process.env.NODE_ENV === 'production'
  //   ? `https://danilstudio.github.io/Igniting.ye`
  //   : '',
};

export default nextConfig;