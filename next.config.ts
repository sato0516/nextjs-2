import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.dog.ceo',
      }
    ]
  },
  //本番環境エラー回避のため、Prisma Client を webpack バンドルから外す
  webpack: (config) => {
    config.externals = config.externals || [];

    if (Array.isArray(config.externals)) {
      config.externals.push({
        ".prisma/client": "commonjs .prisma/client",
        "@prisma/client": "commonjs @prisma/client",
      });
    }

    return config;
  },
};

export default nextConfig;
