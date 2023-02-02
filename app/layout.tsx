"use client";
require('dotenv').config()
import { Transition } from "@headlessui/react";
import { AnimatePresence, motion, usePresence } from "framer-motion";
import gsap from "gsap";
import { usePathname, useRouter } from "next/navigation";
import { type } from "os";
import { useEffect, useRef, useState } from "react";
import { MobileMenu } from "../components/Navigation/MobileMenu";
import NavBar from "../components/Navigation/Navbar";
import "../styles/globals.css";

type RootLayoutTypes = {
  children: React.ReactNode;
};
export default function RootLayout({ children }: RootLayoutTypes) {
  const path = usePathname();
  const router = useRouter();
  // console.log("=====>", router);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Used for page transition
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
  }, []);

  const bodyVariant = (delay: number) => ({
    // initialState: { x: 80, opacity: 0 },
    // animate: { x: 0, opacity: 1 },
    // exitState: { x: -200, opacity: 0 },
    transition: {
      duration: 0.5,
      type: 'linear',
      ease: "easeIn",
      delay,
    },
  });

  return (
    <html>
      <head />
      <body className="flex bg-white min-h-screen h-full flex-col container mx-auto max-w-screen-xl items-stretch  dark:bg-black scrollbar-hide">
        <AnimatePresence
          exitBeforeEnter
          mode="wait"
          // initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          {/* <body className="flex bg-white min-h-screen h-full flex-col py-5 container mx-auto max-w-screen-xl items-stretch bg-gradient-to-br from-indigo-50 via-white to-cyan-100"> */}
          <motion.div className="fixed top-0 container mx-auto max-w-screen-xl z-10">
            <NavBar fixed={undefined} />
          </motion.div>
          <motion.div
            key={path}
            variants={bodyVariant(.5)}
            initial="initialState"
            animate="animate"
            exit="exitState"
            className="layoutChildren flex flex-auto "
          >
            {children}
          </motion.div>
          <MobileMenu/>
        </AnimatePresence>
      </body>
    </html>
  );
}
