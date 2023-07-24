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
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "54.249.51.124",
        port: "4555",
      },
    ],
  },
};

module.exports = {
  ...nextConfig,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.externals.push({
        bufferutil: "bufferutil",
        "utf-8-validate": "utf-8-validate",
        "supports-color": "supports-color",
      });
    }

    return config;
  },
};
