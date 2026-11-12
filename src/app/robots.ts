import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/admin-dashboard',
        '/community-dashboard',
        '/api/',
      ],
    },
    sitemap: 'https://muhammad-saquib-portfolio.vercel.app/sitemap.xml',
  };
}
