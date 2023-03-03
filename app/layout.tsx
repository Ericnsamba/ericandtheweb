"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, usePresence } from "framer-motion";
import gsap from "gsap";
// import { gsap } from "gsap";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname, useRouter } from "next/navigation";
import { MobileMenu } from "../components/Navigation/MobileMenu";
import NavBar from "../components/Navigation/Navbar";
import "../styles/globals.css";
import "../node_modules/locomotive-scroll/src/locomotive-scroll.scss";

type RootLayoutTypes = {
  children: React.ReactNode;
};
export default function RootLayout({ children }: RootLayoutTypes) {
  const path = usePathname();
  const router = useRouter();
  const ref = useRef(null);

  const [loading, setLoading] = useState(false);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      // direction: "vertical", // vertical, horizontal
      // gestureDirection: "vertical", // vertical, horizontal, both
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: any) {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  return (
    <html>
      <head />
      <body data-scroll-container ref={ref} className="flex bg-white min-h-screen flex-col container mx-auto max-w-screen-xl items-stretch dark:bg-black scrollbar-hide ">
      {/* <body className="flex bg-white min-h-screen h-full flex-col container mx-auto max-w-screen-xl items-stretch dark:bg-black scrollbar-hide bg-gradient-to-br from-white via-white to-green/20"> */}
        <AnimatePresence
          exitBeforeEnter
          mode="wait"
        >
          <div className="data-scroll">{children}</div>

          <div className="nav hidden lg:flex bottom-10 fixed self-center">
            <NavBar />
          </div>
          <MobileMenu />
        </AnimatePresence>
      </body>
    </html>
  );
}
