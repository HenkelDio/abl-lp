import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  images: {
    unoptimized: true,
    domains: ['flowbite.s3.amazonaws.com'],
  },
  output: 'export',
  webpack: (config) => {
    config.resolve.alias['@components'] = path.join(process.cwd(), 'src/app/components');
    config.resolve.alias['@pages'] = path.join(process.cwd(), 'src/app/pages');
    return config;
  },
};

export default nextConfig;
