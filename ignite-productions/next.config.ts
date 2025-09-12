import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' 
    ? `https://${process.env.GITHUB_REPOSITORY_OWNER || 'your-username'}.github.io/${process.env.GITHUB_REPOSITORY?.split('/')[1] || 'ignite-productions'}`
    : '',
};

export default nextConfig;