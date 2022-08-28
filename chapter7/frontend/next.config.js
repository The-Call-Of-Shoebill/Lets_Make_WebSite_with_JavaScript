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
    site_IP_Address: 'http://10.10.10.173/',
  }
}

module.exports = nextConfig
