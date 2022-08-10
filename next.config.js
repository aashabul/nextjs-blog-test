/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["media.graphassets.com"],
    formats: ["image/webp"],
  },
};

module.exports = nextConfig;
