/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/reimagine-education_2025",
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
