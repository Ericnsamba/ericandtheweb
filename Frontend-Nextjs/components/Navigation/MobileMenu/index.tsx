import React, { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { useDimensions } from "../../../utils/use-dimensions";
import Link from "next/link";

export const MobileMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const sidebar = {
    open: (height = 100) => ({
      scale: 1,
      opacity: 1,
      height: 238,
      width: 160,
      transition: {
        type: "spring",
        bounce: 0.4,
        // stiffness: 100,
        restDelta: 1,
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
      },
    },
  };

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      // className="bg-green flex w-full"
      className="flex justify-center items-center rounded-xl fixed bottom-5 self-center lg:hidden "
    >
      <motion.div className="background bg-white" variants={sidebar}>
        <div
          className={`${isOpen ? "flex" : "hidden"} ease-in-out duration-800 flex-col gap-5`}
        >
          <Link href="../">
            <p className="text-sm text-black uppercase font-bold text-center">Home</p>
          </Link>
          <Link href="../about">
            <p className="text-sm text-black uppercase font-bold text-center">About me</p>
          </Link>
          <Link href="../portfolio">
            <p className="text-sm text-black uppercase font-bold text-center">Portfolio</p>
          </Link>
          <Link href="../contact">
            <p className="text-sm text-black uppercase font-bold text-center">contact</p>
          </Link>
        </div>
      </motion.div>
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.div>
  );
};
