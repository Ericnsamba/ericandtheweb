"use client";

// import { animatePageIn } from "@/utils/animations"
import { useEffect } from "react";
// import { animatePageIn } from "./utils/animations";
import Lenis from "lenis";
import { AnimatePresence } from "framer-motion";
// import Footer from "./components/Footer/Footer";
// import Menu from "./components/Menu/Menu";

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
      <div>{children}</div>
    </AnimatePresence>
  );
}
