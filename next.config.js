/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  serverExternalPackages: [
    'jsdom',
    'canvas',
    'dompurify',
    'isomorphic-dompurify'
  ],
};

module.exports = nextConfig;