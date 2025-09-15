// next.config.js
/** @type {import('next').NextConfig} */
const repoName = "https://github.com/mshuecodev/authentication-firebase.git" // replace with your actual repo name

const nextConfig = {
	output: "export",
	images: {
		unoptimized: true
	},
	basePath: process.env.NODE_ENV === "production" ? `/${repoName}` : "",
	assetPrefix: process.env.NODE_ENV === "production" ? `/${repoName}/` : ""
}

module.exports = nextConfig
