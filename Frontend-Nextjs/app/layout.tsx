"use client";
import { Transition } from "@headlessui/react";
import { AnimatePresence, motion, usePresence } from "framer-motion";
import gsap from "gsap";
import { usePathname, useRouter } from "next/navigation";
import { type } from "os";
import { useEffect, useRef, useState } from "react";
import NavBar from "../components/Navigation/Navbar";
import "../styles/globals.css";

type RootLayoutTypes = {
  children: React.ReactNode;
};
export default function RootLayout({ children }: RootLayoutTypes) {
  const path = usePathname();
  const router = useRouter();
  console.log("=====>", router);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Used for page transition
    const start = () => {
      setLoading(true)
    }
    const end = () => {
      setLoading(false)
    }
    // router.events.on("routeChangeStart", start)
    // router.events.on("routeChangeComplete", end)
    // router.events.on("routeChangeError", end)
    return () => {
      // router.events.off("routeChangeStart", start)
      // router.events.off("routeChangeComplete", end)
      // router.events.off("routeChangeError", end)
    }
  }, [])

  const bodyVariant = (delay: number) => ({
    initialState: { x: -400, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exitState: { x: -400, opacity: 0 },
    transition: {
      // type: "spring",
      // stiffness: 0,
      // damping: 290,
      type: "tween",
      ease: 'easeIn',
      delay,
    },
  });

  return (
    <html>
      <head />
      <body className="flex bg-white min-h-screen h-full flex-col py-5 container mx-auto max-w-screen-xl items-stretch bg-gradient-to-br from-indigo-50 via-white to-cyan-100 dark:bg-black">
        <AnimatePresence exitBeforeEnter
        mode="wait"
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}>
          {/* <body className="flex bg-white min-h-screen h-full flex-col py-5 container mx-auto max-w-screen-xl items-stretch bg-gradient-to-br from-indigo-50 via-white to-cyan-100"> */}
          <div className="fixed top-0 container mx-auto max-w-screen-xl z-10">
            <NavBar fixed={undefined} />
          </div>
          <motion.div
            key={path}
            variants={bodyVariant(1.7)}
            initial="initialState"
            animate="animate"
            exit="exitState"
            className="layoutChildren flex flex-auto py-24"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  );
}
