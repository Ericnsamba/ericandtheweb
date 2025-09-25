import "./globals.css";

import ClientLayout from "@/client-layout";
import { fontVariables } from "@/lib/fonts";
import StructuredData from "@/components/StructuredData";

import { ViewTransitions } from "next-view-transitions";

export const metadata = {
  title: {
    template: '%s | Eric Manasse',
    default: 'Freelance UI/UX Designer & Web Developer London | Eric Manasse',
  },
  description: 'Freelance UI/UX designer and web developer in London. 8+ years creating digital products for fintech, startups & brands. Expert in product design, web development, and design systems.',
  keywords: [
    'freelance UI/UX designer London',
    'freelance web designer',
    'freelance product designer',
    'Product Designer London',
    'UI/UX Designer',
    'Design Engineer',
    'Product Design',
    'User Experience Design',
    'hire UI/UX designer',
    'London web developer',
    'freelance design consultant',
    'product design services',
    'web development portfolio',
    'startup designer',
    'fintech UX designer',
    'design systems expert',
    'React developer London',
    'Figma consultant',
    'Eric Manasse designer',
    'remote product designer',
    'design engineer freelance'
  ],
  authors: [{ name: 'Eric Manasse', url: 'https://ericandtheweb.com' }],
  creator: 'Eric Manasse',
  publisher: 'Eric Manasse',
  metadataBase: new URL('https://ericandtheweb.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://ericandtheweb.com',
    title: 'Freelance UI/UX Designer & Web Developer London | Eric Manasse',
    description: 'Hire a freelance UI/UX designer and web developer in London. 8+ years creating digital products for fintech, startups & brands. Available for projects.',
    siteName: 'Eric Manasse - Freelance Designer & Developer',
    images: [
      {
        url: '/trail-images/img1.jpg',
        width: 1200,
        height: 630,
        alt: 'Eric Manasse - Product Designer and Design Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Freelance UI/UX Designer & Web Developer London | Eric Manasse',
    description: 'Hire a freelance UI/UX designer and web developer in London. 8+ years creating digital products for fintech, startups & brands.',
    creator: '@ericandtheweb',
    images: ['/trail-images/img1.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#1a1a1a' },
    ],
  },
  manifest: '/site.webmanifest',
  category: 'Design',
  classification: 'Business',
  referrer: 'origin-when-cross-origin',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className={fontVariables}>
        <ViewTransitions>
          <ClientLayout>{children}</ClientLayout>
        </ViewTransitions>
      </body>
    </html>
  );
}
