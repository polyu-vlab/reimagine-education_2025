const isProd = process.env.NODE_ENV === "production";

const BASE_PATH = "/reimagine-education_2025";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix: isProd ? BASE_PATH : "",
  basePath: BASE_PATH,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
