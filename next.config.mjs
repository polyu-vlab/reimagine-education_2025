const isProd = process.env.NODE_ENV === "production";

const BASE_PATH = "/reimagine-education_2025";

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
