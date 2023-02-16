/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: { ignoreDuringBuilds: true },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
  poweredByHeader: false,
};

module.exports = nextConfig;
