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
      {
        protocol: 'https',
        hostname: 'api.dicebear.com',
      },
    ],
  },
  async redirects() {
    return [
      // 301 Permanent Redirects for legacy mockup project URLs to resolve Google Search Console 404 errors
      {
        source: '/project/lumina-organics',
        destination: '/project/packaging-solution',
        permanent: true,
      },
      {
        source: '/project/fintech-startup',
        destination: '/project/identity-design',
        permanent: true,
      },
      {
        source: '/project/aura-creative',
        destination: '/project/social-media-creative',
        permanent: true,
      },
      {
        source: '/project/botanical-wonders',
        destination: '/project/print-media',
        permanent: true,
      },
      // Clean 301 redirects for aliases and legacy navigation
      {
        source: '/portfolio',
        destination: '/#projects',
        permanent: true,
      },
      {
        source: '/projects',
        destination: '/#projects',
        permanent: true,
      },
      {
        source: '/work',
        destination: '/#projects',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/#services',
        permanent: true,
      },
      {
        source: '/service',
        destination: '/#services',
        permanent: true,
      },
      {
        source: '/gallery',
        destination: '/#projects',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
