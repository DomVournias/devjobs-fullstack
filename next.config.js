/** @type {import('next').NextConfig} */
// next.config.js
const nextConfig = {
  // Your configurations go here
  env: {
    BASE_URL: process.env.BASE_URL || "http://localhost:3000",
  },
};

module.exports = nextConfig;
