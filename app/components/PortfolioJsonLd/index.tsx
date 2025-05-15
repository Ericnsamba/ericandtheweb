"use client";
import Script from "next/script";

export default function PortfolioJsonLd() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://ericandtheweb.com";
  
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    'name': 'Portfolio | Eric and the Web',
    'description': 'A curated collection of projects and experiments that showcase my journey through design, ideas, and technology.',
    'url': `${baseUrl}/portfolio`,
    'image': `${baseUrl}/portfolio/portfolio_main.jpg`,
    'author': {
      '@type': 'Person',
      'name': 'Eric and the Web'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Eric and the Web',
      'logo': {
        '@type': 'ImageObject',
        'url': `${baseUrl}/logo.png`
      }
    },
    'isPartOf': {
      '@type': 'WebSite',
      'name': 'Eric and the Web',
      'url': `${baseUrl}`
    }
  };

  return (
    <Script
      id="portfolio-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
} 