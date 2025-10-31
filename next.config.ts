/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/blogs/:path*",
        destination: "https://blogs.camlenio.com/:path*",
        permanent: true,
      },
    ];
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
