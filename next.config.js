/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://yoni-jsonsv.fly.dev/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
