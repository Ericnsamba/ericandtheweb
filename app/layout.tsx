"use client";
// require('dotenv').config()
import { Transition } from "@headlessui/react";
import { AnimatePresence, motion, usePresence } from "framer-motion";
import gsap from "gsap";
import { usePathname, useRouter } from "next/navigation";
import { type } from "os";
import { useEffect, useRef, useState } from "react";
import { MobileMenu } from "../components/Navigation/MobileMenu";
import NavBar from "../components/Navigation/Navbar";
import "../styles/globals.css";
// import "../styles/locomotive.module.css";

type RootLayoutTypes = {
  children: React.ReactNode;
};
export default function RootLayout({ children }: RootLayoutTypes) {
  const path = usePathname();
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // let scroll: import("locomotive-scroll");
    // import("locomotive-scroll").then((locomotiveModule) => {
    //     scroll = new locomotiveModule.default({
    //         el: document.querySelector("[data-scroll-container]"),
    //         smooth: true,
    //         smoothMobile: false,
    //         resetNativeScroll: true
    //     });
    // });
    // // `useEffect`'s cleanup phase
    // return () => {
    //     if (scroll) scroll.destroy();
    // }
  });

  const bodyVariant = (delay: number) => ({
    // initialState: { x: 80, opacity: 0 },
    // animate: { x: 0, opacity: 1 },
    // exitState: { x: -200, opacity: 0 },
    transition: {
      duration: 0.5,
      type: "linear",
      ease: "easeIn",
      delay,
    },
  });

  return (
    <html>
      <head />
      <body className="flex bg-white min-h-screen h-full flex-col container mx-auto max-w-screen-xl items-stretch  dark:bg-black scrollbar-hide bg-gradient-to-br from-white via-white to-green/20">
        <AnimatePresence
          exitBeforeEnter
          mode="wait"
          // initial={false}
        >
          <motion.div
            key={path}
            variants={bodyVariant(0.5)}
            initial="initialState"
            animate="animate"
            exit="exitState"
            className="layoutChildren flex flex-auto "
          >
            {children}
          </motion.div>
          <div className="hidden lg:flex bottom-10 fixed self-center">
            <NavBar />
          </div>
          <MobileMenu />
        </AnimatePresence>
      </body>
    </html>
  );
}
