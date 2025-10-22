import type { NextConfig } from "next";

// Only set basePath/assetPrefix for project pages (served under /repo-name/)
// For user/organization pages (served at root), leave these unset.
const isProjectPages = process.env.PROJECT_PAGES === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(isProjectPages
    ? {
        // Replace with your repo name when using project pages
        basePath: '/karthikappana35.github.io',
        assetPrefix: '/karthikappana35.github.io/',
      }
    : {}),
};

export default nextConfig;
