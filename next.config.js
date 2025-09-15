/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: ['api.starlynthrillingadventures.com'],
    unoptimized: true,
  }
}

module.exports = nextConfig
