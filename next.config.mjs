/** @type {import('next').NextConfig} */
const nextConfig = {};

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  basePath: isProd ? '/web' : '',
  assetPrefix: isProd ? '/web/' : '',
};

export default nextConfig;
