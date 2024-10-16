"use client";
import { useEffect } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
// import Header from "@/components/Header";
import Lenis from "lenis";
import Head from "@/components/Head";
import Footer from "@/components/Footer";
import {
  // motion,
  // useScroll,
  // useSpring,
  // useTransform,
  // MotionValue,
  AnimatePresence,
} from "framer-motion";
import MobileMenu from "./components/Header/Mobile";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <html lang="en">
        <Head pageProp={undefined} Component={undefined} />
        <body className={`${inter.variable} antialiased`}>
          <div className="lg:hidden">
            <MobileMenu />
          </div>
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </AnimatePresence>
  );
}
