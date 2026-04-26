'use strict';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { 
    domains: ['example.com'], // specify allowed image domains here
  },
};

module.exports = nextConfig;