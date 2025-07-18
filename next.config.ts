import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    admin: process.env.ADMIN_USER,
    pass: process.env.ADMIN_PASS,
  }
};

export default nextConfig;
