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
  cookies: {
    secure: true,
    httpOnly: true,
    domain: '.vercel.app',
    expires: 60 * 60 * 24 , // 1 days
  },
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
