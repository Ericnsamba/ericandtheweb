"use client";

// import { animatePageIn } from "@/utils/animations"
import { useEffect } from "react";
import { animatePageIn } from "./utils/animations";
import Lenis from "lenis";
import { AnimatePresence } from "framer-motion";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    // animatePageIn();
  }, []);

  return (
    <AnimatePresence mode="wait">
      <div>
        {/* <div
          id="banner-1"
          className="min-h-screen bg-Lace_Veil z-[12] fixed top-0 left-0 w-1/4"
        />
        <div
          id="banner-2"
          className="min-h-screen bg-Lace_Veil z-[12] fixed top-0 left-1/4 w-1/4"
        />
        <div
          id="banner-3"
          className="min-h-screen bg-Lace_Veil z-[12] fixed top-0 left-2/4 w-1/4"
        />
        <div
          id="banner-4"
          className="min-h-screen bg-Lace_Veil z-[12] fixed top-0 left-3/4 w-1/4"
        /> */}

        <>
        <Menu />
          {children}
          <Footer />
           {/* <Footer /> */}
          {/* {window.location.pathname !== '/' && <Footer />} */}
        </>
      </div>
    </AnimatePresence>
  );
}
