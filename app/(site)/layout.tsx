"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname, useRouter } from "next/navigation";
import { MobileMenu } from "../../components/Navigation/MobileMenu";
import SplashScreen from "../../components/SplashScreen";
import NavBar from "../../components/Navigation/Navbar";
import "../../styles/globals.css";
import "../../node_modules/locomotive-scroll/src/locomotive-scroll.scss";
import "../../node_modules/mouse-follower/src/scss/index.scss";
import MouseFollower from "mouse-follower";
import AnimatedCursor from "react-animated-cursor";
import localFont from "next/font/local";
import { Rubik } from "next/font/google";
const ClashGrotesk = localFont({
  src: "../../public/fonts/ClashGrotesk-Variable.woff2",
  variable: "--font-displayText",
});

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});

type RootLayoutTypes = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutTypes) {
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

  const [loading, setLoading] = useState(false);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    if (isLoading) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
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
  }, [isLoading]);

  return (
    <html className={`${ClashGrotesk.className} ${rubik.className}`} lang="en">
      <head />
      <body
        data-scroll-container
        ref={ref}
        className={`.mf-container flex bg-white min-h-screen flex-col container mx-auto max-w-screen-xl items-stretch dark:bg-black scrollbar-hide`}
      >
        {isLoading && isPathChange ? (
          <SplashScreen finishLoading={() => setIsLoading(false)} />
        ) : (
          <>
            <AnimatePresence exitBeforeEnter mode="wait">
              <AnimatedCursor
                innerSize={15}
                outerSize={10}
                trailingSpeed={4}
                // color="0, 0, 0"
                // color="134, 255, 115"
                color="100, 4, 125"
                outerAlpha={0}
                innerScale={5}
                outerScale={0.5}
                hasBlendMode={true}
                innerStyle={{
                  mixBlendMode: "exclusion",
                }}
                clickables={[
                  "a",
                  'input[type="text"]',
                  'input[type="email"]',
                  'input[type="number"]',
                  'input[type="submit"]',
                  'input[type="image"]',
                  'input[type="Image"]',
                  "label[for]",
                  "select",
                  "textarea",
                  "button",
                  ".link",
                ]}
              />
              <div className="data-scroll">{children}</div>
              <div className="nav hidden lg:flex bottom-10 fixed self-center">
                <NavBar />
              </div>
              <MobileMenu />
            </AnimatePresence>
          </>
        )}
      </body>
    </html>
  );
}
