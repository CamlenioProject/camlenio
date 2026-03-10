/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["http://localhost:3000", "http://[IP_ADDRESS]"],
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
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' *.googletagmanager.com *.facebook.net *.facebook.com va.vercel-scripts.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: *.cloudinary.com *.facebook.com blogs.camlenio.com; media-src 'self' *.cloudinary.com; connect-src 'self' *.facebook.com *.google-analytics.com blogs.camlenio.com; font-src 'self' data:;",
          },
        ],
      },
    ];
  },
  experimental: {
    optimizePackageImports: ["react-icons", "lucide-react", "@heroicons/react"],
  },
};

module.exports = nextConfig;