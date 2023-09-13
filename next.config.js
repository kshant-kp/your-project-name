// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig


const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler : {
      styledComponents : true,
    },
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"]
      });
  
      config.resolve.fallback = {...config.resolve.fallback,fs: false};
  
      return config;
    }
    
  }
  
  module.exports = nextConfig
  
