import { MetadataRoute } from 'next';
import { CaseStudyData } from '@/data/caseStudyData';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://ericandtheweb.com';
  
  // Create the main routes
  const routes = [
    '',
    '/portfolio',
    '/about',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));
  
  // Add portfolio project routes
  const portfolioRoutes = CaseStudyData.map((project) => ({
    url: `${baseUrl}/portfolio/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));
  
  return [...routes, ...portfolioRoutes];
} 