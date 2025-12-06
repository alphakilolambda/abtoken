/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pages için base path (repo adınızı buraya yazın)
  // Örnek: basePath: '/newagent' (eğer repo adı newagent ise)
  // Eğer custom domain kullanacaksanız basePath'i kaldırın
  // basePath: '/newagent',
  // trailingSlash: true,
}

module.exports = nextConfig

