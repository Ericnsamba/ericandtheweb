import type { Metadata } from 'next';
import PortfolioJsonLd from '@/components/PortfolioJsonLd';

export const metadata: Metadata = {
  title: 'Portfolio | Eric and the Web',
  description: 'A curated collection of projects and experiments that showcase my journey through design, ideas, and technology.',
  keywords: ['portfolio', 'web design', 'web development', 'UI/UX', 'digital design', 'creative work'],
  openGraph: {
    title: 'Portfolio | Eric and the Web',
    description: 'A curated collection of projects and experiments that showcase my journey through design, ideas, and technology.',
    url: 'https://ericandtheweb.com/portfolio',
    siteName: 'Eric and the Web',
    images: [
      {
        url: 'https://ericandtheweb.com/portfolio/portfolio_main.jpg',
        width: 1200,
        height: 630,
        alt: 'Eric and the Web Portfolio'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | Eric and the Web',
    description: 'A curated collection of projects and experiments that showcase my journey through design, ideas, and technology.',
    creator: '@ericandtheweb',
    images: ['https://ericandtheweb.com/portfolio/portfolio_main.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://ericandtheweb.com/portfolio',
  },
  authors: [{ name: 'Eric and the Web' }],
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PortfolioJsonLd />
      {children}
    </>
  );
} 