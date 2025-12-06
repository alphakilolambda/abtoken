/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Custom domain kullanıldığı için basePath kaldırıldı
  trailingSlash: true,
}

module.exports = nextConfig

