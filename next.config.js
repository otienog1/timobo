/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    domains: ['api.starlynthrillingadventures.com'],
    unoptimized: true,
  }
}

module.exports = nextConfig
