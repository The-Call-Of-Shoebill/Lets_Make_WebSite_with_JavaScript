/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  env: {
    pathDirectory: process.cwd() + '/content',
  }
}

module.exports = nextConfig
