import type { NextConfig } from "next";

// Only set basePath/assetPrefix when deploying to GitHub Pages
const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(isGithubPages
    ? {
        basePath: '/karthik-portfolio',
        assetPrefix: '/karthik-portfolio/',
      }
    : {}),
};

export default nextConfig;
