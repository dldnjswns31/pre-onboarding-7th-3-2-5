/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://december-server.fly.dev/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
