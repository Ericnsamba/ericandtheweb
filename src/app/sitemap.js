import { caseStudies } from '@/data/case-studies';

export default function sitemap() {
  const baseUrl = 'https://ericandtheweb.com';

  // Static pages
  const routes = [
    '',
    '/case-studies',
    '/contact',
    '/services',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/services' ? 0.9 : 0.8,
  }));

  // Dynamic case study pages
  const caseStudyRoutes = caseStudies.map((caseStudy) => ({
    url: `${baseUrl}/case-studies/${caseStudy.id}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...routes, ...caseStudyRoutes];
}