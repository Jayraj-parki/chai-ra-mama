/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    unoptimized: true,
  },
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true };
    return config;
  },
  pageExtensions: ['page.js', 'js'],
  // basePath: '/admin',
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://the-api.vercel.app/api/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
