/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
  async redirects() {
    return [
      {
        source: "/meet",
        destination: "/join",
        permanent: true,
      },
      {
        source: "/join/:slug",
        destination: "/meet/:slug",
        permanent: true,
      },
    ];
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
