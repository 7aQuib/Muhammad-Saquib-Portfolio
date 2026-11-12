import type { MetadataRoute } from 'next';
import caseStudies from '@/data/caseStudies.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://muhammad-saquib-portfolio.vercel.app';

  // Real 5 project case studies
  const projectUrls: MetadataRoute.Sitemap = caseStudies.map((study) => ({
    url: `${baseUrl}/project/${study.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // 4 Core services
  const serviceSlugs = ['branding-identity', 'packaging-design', 'social-media-kits', 'printing-design'];
  const serviceUrls: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/service/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...serviceUrls,
    ...projectUrls,
  ];
}
