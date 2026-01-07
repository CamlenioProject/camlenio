/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["http://localhost:3000", "http://192.168.1.28:3000"],
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
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
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "blogs.camlenio.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

module.exports = nextConfig;
