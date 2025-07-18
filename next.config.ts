import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    dirs: ['pages', 'utils'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
  env: {
    admin: process.env.ADMIN_USER,
    pass: process.env.ADMIN_PASS,
  }

};

export default nextConfig;
