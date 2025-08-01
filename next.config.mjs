const isProd = process.env.NODE_ENV === "production";

// Use environment variable to determine base path
// For root deployment, BASE_PATH should be empty
// For GitHub Pages, BASE_PATH should be "/reimagine-education_2025"
const BASE_PATH = process.env.BASE_PATH || (isProd ? "" : "");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only use static export for production builds
  ...(isProd && { output: "export" }),
  assetPrefix: isProd ? BASE_PATH : "",
  basePath: isProd ? BASE_PATH : "",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: isProd,
  },
};

export default nextConfig;
