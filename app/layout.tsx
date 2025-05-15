import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import CustomCursor from "@/components/CustomCursor/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import JsonLdScripts from "@/components/JsonLd";

// Define metadata for SEO
export const metadata: Metadata = {
  title: {
    template: '%s | Eric and the Web',
    default: 'Eric and the Web',
  },
  description: 'UI/UX Product Designer and Developer based in London',
  keywords: ['UI/UX designer', 'web developer', 'product designer', 'London', 'portfolio'],
  authors: [{ name: 'Eric and the Web' }],
  creator: 'Eric and the Web',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ericandtheweb.com',
    title: 'Eric and the Web',
    description: 'UI/UX Product Designer and Developer based in London',
    siteName: 'Eric and the Web',
    images: [
      {
        url: 'https://ericandtheweb.com/medias/eric_hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Eric and the Web',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eric and the Web',
    description: 'UI/UX Product Designer and Developer based in London',
    creator: '@ericandtheweb',
    images: ['https://ericandtheweb.com/medias/eric_hero.jpg'],
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
  viewport: {
    width: 'device-width',
    initialScale: 1,
    viewportFit: 'cover',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
};

const PPNeueMontreal = localFont({
  src: [
    {
      path: "./fonts/PPNeueMontreal-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/PPNeueMontreal-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/PPNeueMontreal-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${PPNeueMontreal.className} bg-black`}>
        <JsonLdScripts />
        <SmoothScroll />
        <div className="hidden lg:block">
          <CustomCursor />
        </div>
        <main className="w-full">
          <Menu />
          {children}
          <div className="hidden lg:block">
            <Footer />
          </div>
        </main>
        <Analytics />
      </body>
    </html>
  );
}
