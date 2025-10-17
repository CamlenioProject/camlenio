/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"], // 👈 Add this line
  },
};

module.exports = nextConfig;
