/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  optimizeFonts: true,
  experimental: {
    appDir: true,
  },
  images: {
		domains: ['cdn.sanity.io'],
		loader: 'custom'
	},
}
