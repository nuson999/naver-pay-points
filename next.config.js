/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  async rewrites() {
    return [
      {
        source: "/proxy/:path*",
        destination: `https://raw.githubusercontent.com/:path*`,
      },
    ];
  },
  trailingSlash: true,
};

module.exports = nextConfig;
