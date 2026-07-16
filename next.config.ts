import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    // Enables the SWC compiler for styled-components (used by Sanity Studio),
    // which prevents Next.js from falling back to the much slower Babel compiler.
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
