"use client";
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Lenis from "lenis";
import { useEffect, useRef } from "react";
import Head from "@/components/Head";
import Footer from "@/components/Footer";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";

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

  function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
  }

    // animate the header based on scroll position
    const targetRef= useRef<HTMLDivElement>(null);
    const scrollRef = useRef(null);
    const { scrollYProgress } = useScroll({ 
      target: targetRef,
      offset: ["end end", "end start"],
    });
    // const y = useParallax(scrollYProgress, -1);



  return (
    <html lang="en">
      <Head pageProp={undefined} Component={undefined} />

      <body className={`${inter.variable} antialiased`}>
          <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
