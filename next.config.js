/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pages için base path
  basePath: '/abtoken',
  trailingSlash: true,
}

module.exports = nextConfig

