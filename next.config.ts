/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'], // Add the domain for external images
  },
  env: {
    EMAIL: process.env.EMAIL,
    EMAIL_PASS: process.env.EMAIL_PASS,
    SCRIPT_URL: process.env.SCRIPT_URL,
  },
};

export default nextConfig;

