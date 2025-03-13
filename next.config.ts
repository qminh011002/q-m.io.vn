import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 's3.ap-southeast-1.amazonaws.com',
				port: '',
				pathname: '/q-m.io/**',
			},
			{
				protocol: 'https',
				hostname: 'upload.wikimedia.org',
				port: '',
				pathname: '/wikipedia/commons/**',
			},
		],
	},
	logging: false,
};

export default nextConfig;
