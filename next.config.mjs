/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  allowedDevOrigins: ["http://localhost:3000", "http://192.168.1.7:3000"],
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
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 85],
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
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
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
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: *.googletagmanager.com *.facebook.net *.facebook.com va.vercel-scripts.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: *.cloudinary.com *.facebook.com blogs.camlenio.com images.unsplash.com lh3.googleusercontent.com; media-src 'self' *.cloudinary.com; connect-src 'self' cdn.jsdelivr.net *.facebook.com *.google-analytics.com blogs.camlenio.com; font-src 'self' data:;frame-src 'self' https://www.google.com https://maps.google.com https://maps.googleapis.com; worker-src 'self' blob:;",
          },
        ],
      },
    ];
  },
  experimental: {
    optimizePackageImports: ["react-icons", "lucide-react", "@heroicons/react"],
  },
};

export default nextConfig;
