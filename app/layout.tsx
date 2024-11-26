"use client";
import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
// import Header from "@/components/Header";
import Lenis from "lenis";
import Head from "@/components/Head";
import Footer from "@/components/Footer";
import {
  motion,
  // useScroll,
  // useSpring,
  // useTransform,
  // MotionValue,
  AnimatePresence,
} from "framer-motion";
import MobileMenu from "./components/Header/Mobile";
import Header from "./components/Header";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Simulate loading completion
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <html lang="en">
      <Head pageProp={undefined} Component={undefined} />
      <body className={`${inter.variable} font-sans antialiased`}>
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-blue-500"
              initial={{
                y: "100vh",
              }}
              animate={{
                y: "0vh",
              }}
              exit={{
                y: 0,
                transition: {
                  duration: 5,
                  // ease: [0.76, 0, 0.24, 1],
                },
              }}
              transition={{
                duration: 2,
                ease: [0.76, 0, 0.24, 1],
              }}
            >
              
            </motion.div>
          ) : (
            <>
              <div className="lg:hidden">
                <MobileMenu />
              </div>
              <div className="hidden lg:block">
              <Header />
              </div>

              <main>{children}</main>
              <Footer />
            </>
          )}
        </AnimatePresence>
      </body>
    </html>
  );
}
