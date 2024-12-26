"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import styles from "./styles.module.scss";
import MenuLinks from "./menuLinks";
import TransitionLink from "../TransitionLink";
import FullScreenMenu from "../FullScreenMenu";

const Header = ({}) => {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 40) {
      setIsHidden(difference > 0);
      lastYRef.current = y;
    }
  });

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1, scale: 12 },
  };

  return (
    <motion.div
      animate={isHidden ? "hidden" : "visible"}
      whileHover="visible"
      onFocusCapture={() => setIsHidden(false)}
      variants={{
        hidden: {
          y: "-100%",
        },
        visible: {
          y: "0%",
        },
      }}
      transition={{
        duration: 0.3,
        delayChildren: 0.5,
        staggerDirection: -1,
      }}
      className="fixed z-[5] flex w-full justify-center mix-blend-difference bg-lime-200t"
    >
      <nav className="flex justify-between bg-slate-400t w-full overflow-hidden lg:mx-10 py-10 gap-4">
        <motion.div className={styles.link} variants={item}>
          <FullScreenMenu />
        </motion.div>

        {/* work with me */}
        <motion.div variants={item}>
          <Link scroll={false} href="/">
            <p className="name text-blend_dark text-sm uppercase font-bold">
              © Eric Manasse
            </p>
          </Link>

          {/* <div className="flex gap-1 z-10">
            <p className="font-normal text-Lace_Veil text-sm line-through font-sans">
              Available for work
            </p>
          </div> */}
        </motion.div>

        {/* menu */}
        <motion.div
          variants={item}
          className="bg-slate-200t justify-center items-center"
        >
          <TransitionLink
            className={`${styles.menuLinks} text-blend_dark text-sm font-normal uppercase relative`}
            href="/"
            label="Let's Talk"
          />
          {/* <div className="flex text-lg gap-4">
            <div className="flex gap-5">
              <TransitionLink className={`${styles.menuLinks} text-blend_dark text-sm font-normal uppercase relative`} href="/" label="Home" />
              <TransitionLink className={`${styles.menuLinks} text-blend_dark text-sm font-normal uppercase relative`} href="/about" label="About" />
              <TransitionLink className={`${styles.menuLinks} text-blend_dark text-sm font-normal uppercase relative`} href="/projects" label="Projects" />
            </div>
          </div> */}
        </motion.div>
      </nav>
    </motion.div>
  );
};

export default Header;
