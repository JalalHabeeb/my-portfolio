/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Next 16 only accepts quality values listed here; the site uses 95.
    qualities: [75, 95],
  },
};

module.exports = nextConfig;
