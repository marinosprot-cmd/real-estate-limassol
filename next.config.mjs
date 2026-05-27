/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/real-estate-limassol',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
};

export default nextConfig;