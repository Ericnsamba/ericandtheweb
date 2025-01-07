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
      duration: 2.4,
      autoRaf: true,
    });

    // Listen for the scroll event and log the event data
    lenis.on("scroll", (e) => {
      console.log(e);
    });
  }, []);

  return (
    <html lang="en">
      <CustomHead />
      <body className={`${PPNeueMontreal.className} bg-black`}>
        <CustomCursor />
        <main className="w-full">
          <Menu />
          {children}
          <div className="hidden lg:block">
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
