import "./globals.css";

import ClientLayout from "@/client-layout";
import { fontVariables } from "@/lib/fonts";
import StructuredData from "@/components/StructuredData";

import { ViewTransitions } from "next-view-transitions";

export const metadata = {
  title: {
    template: '%s | Eric Manasse',
    default: 'Eric Manasse — Product Designer & Design Engineer',
  },
  description: 'London-based Product Designer and Design Engineer with 8+ years of experience creating digital products across fintech, mobility, and consumer apps. Specialized in user-centered design, design systems, and front-end development.',
  keywords: [
    'Product Designer London',
    'UI/UX Designer',
    'Design Engineer',
    'Product Design',
    'User Experience Design',
    'Design Systems',
    'Frontend Developer',
    'Digital Product Designer',
    'Fintech Designer',
    'Mobile App Designer',
    'React Developer',
    'Figma Expert',
    'Eric Manasse',
    'Projiro',
    'London Designer'
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
    title: 'Eric Manasse — Product Designer & Design Engineer',
    description: 'London-based Product Designer and Design Engineer with 8+ years of experience creating digital products across fintech, mobility, and consumer apps.',
    siteName: 'Eric Manasse Portfolio',
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
    title: 'Eric Manasse — Product Designer & Design Engineer',
    description: 'London-based Product Designer and Design Engineer with 8+ years of experience creating digital products across fintech, mobility, and consumer apps.',
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
