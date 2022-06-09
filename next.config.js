/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['is3.cloudhost.id'],
    loader: 'akamai',
    path: ''
  },
}

module.exports = nextConfig
