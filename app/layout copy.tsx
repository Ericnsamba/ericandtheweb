"use client";
import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
// import Header from "@/components/Header";
import Lenis from "lenis";
import Head from "@/components/Head";
import Footer from "@/components/Footer";
import { usePathname, useRouter } from "next/navigation";
import {
  motion,
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

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname();
  const router = useRouter();
  const ref = useRef(null);
  const pathname = usePathname();
  const isPathChange =
    pathname === "/" ||
    pathname === "/about" ||
    pathname === "/portfolio" ||
    pathname === "contact";
  const [isLoading, setIsLoading] = useState(isPathChange);

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
      <body className={`${inter.variable} antialiased`}>
        <AnimatePresence  mode="wait">
          {isLoading && isPathChange ? (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-blue-500"
              initial={{
                y: "100vh",
              }}
              animate={{
                y: "10vh",
              }}
              exit={{
                y: 0,
                transition: {
                  duration: 2,
                  // ease: [0.76, 0, 0.24, 1],
                },
              }}
              transition={{
                duration: 2,
                ease: [0.76, 0, 0.24, 1],
              }}
            ></motion.div>
          ) : (
            <>
              <>
                <div className="lg:hidden">
                  <MobileMenu />
                </div>
                <main>{children}</main>
                <Footer />
              </>
            </>
          )}
        </AnimatePresence>
      </body>
    </html>
  );
}
