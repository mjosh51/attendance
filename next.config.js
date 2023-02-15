/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: { ignoreDuringBuilds: true },
  images: {
    domains: ['res.cloudinary.com'],
  },
  poweredByHeader: false,
};

module.exports = nextConfig;
