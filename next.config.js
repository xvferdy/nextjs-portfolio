/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["media0.giphy.com"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
