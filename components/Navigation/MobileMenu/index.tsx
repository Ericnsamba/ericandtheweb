import React, { useEffect, useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { useDimensions } from "../../../utils/use-dimensions";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export const MobileMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const path = usePathname();

  useEffect(() => {
     toggleOpen(0);
  }, [path]);

  const sidebar = {
    open: (height = 100) => ({
      scale: 1,
      opacity: 1,
      height: 238,
      width: 160,
      transition: {
        type: "spring",
        bounce: 0.2,
        restDelta: 1,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    }),
    closed: {
      // scale: 0,
      // opacity: 0,
      width: 48,
      height: 48,
      transition: {
        delay: 0.2,
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1,
        delayChildren: 0.6,
      },
    },
  };

  

  const menuItemsVariation = {
    open: { scale: [0, 1], y: [100, 0], opacity: [0, 1] },
  };

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className="flex justify-center items-center rounded-xl fixed bottom-5 self-center lg:hidden "
    >
      <motion.div className="background bg-white" variants={sidebar}>
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } ease-in-out duration-800 flex-col gap-5`}
        >
          <Link href="/">
            <motion.p
              variants={menuItemsVariation}
              className={`${
                path == "/" ? "text-green" : ""
              } text-sm text-black uppercase font-bold text-center`}
            >
              Home
            </motion.p>
          </Link>
          <Link href="/about">
            <motion.p
              variants={menuItemsVariation}
              className={`${
                path == "/about" ? "text-green" : ""
              } text-sm text-black uppercase font-bold text-center`}
            >
              About me
            </motion.p>
          </Link>
          <Link href="/portfolio">
            <motion.p
              variants={menuItemsVariation}
              className={`${
                path == "/portfolio" ? "text-green" : ""
              } text-sm text-black uppercase font-bold text-center`}
            >
              Portfolio
            </motion.p>
          </Link>
          <Link href="/contact">
            <motion.p
              variants={menuItemsVariation}
              className={`${
                path == "/contact" ? "text-green" : ""
              } text-sm text-black uppercase font-bold text-center`}
            >
              contact
            </motion.p>
          </Link>
        </div>
      </motion.div>
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.div>
  );
};
