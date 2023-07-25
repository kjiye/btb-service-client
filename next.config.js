/** @type {import('next').NextConfig} */
/*
const nextConfig = {
  // experimental: {
  //   serverActions: true,
  // },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "4000",
      },
    ],
  },
  webpack: (config, { isServer }) => {
    // eslint-disable-next-line space-before-blocks
    if (isServer) {
      config.externals = nodeExternals();
    }

    return config;
  },
};
module.exports = nextConfig;
*/

const nextConfig = {
  // output: "export",
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "test.artemeta.art",
      },
    ],
  },
};

module.exports = {
  ...nextConfig,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "upgrade-insecure-requests",
          },
        ],
      },
    ];
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.externals.push({
      "utf-8-validate": "commonjs utf-8-validate",
      bufferutil: "commonjs bufferutil",
    });

    return config;
  },
};
