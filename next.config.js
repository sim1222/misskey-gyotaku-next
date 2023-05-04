/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	compiler: {
		emotion: true
	},
	env: {
		API_ENDPOINT: process.env.API_ENDPOINT,
	}
}

module.exports = nextConfig
