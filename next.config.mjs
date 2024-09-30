/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['gateway.pinata.cloud', 'th.bing.com', 'crowdfunding.infura-ipfs.io', 'ipfs.infura.io']
    },
    compiler: {
      styledComponents: true,
    },
  }
  
  export default nextConfig;
