"use client";
// import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import CustomHead from "@/components/Head";
import { useEffect } from "react";
import Lenis from "lenis";
import CustomCursor from "@/components/CustomCursor/CustomCursor";
import { Analytics } from "@vercel/analytics/react";

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
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <html lang="en">
      <CustomHead />
      <body className={`${PPNeueMontreal.className} bg-black`}>
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
