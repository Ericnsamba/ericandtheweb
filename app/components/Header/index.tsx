"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import styles from "./styles.module.scss";
import MenuLinks from "./menuLinks";

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
          y: "-90%",
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
      className="fixed top-0 z-10 flex w-full justify-center"
    >
      <nav className="flex justify-between bg-slate-400t w-full px-6 overflow-hidden lg:px-10 pt-10 gap-4">
        <motion.div className={styles.link} variants={item}>
          <Link scroll={false} href="/">
            <div className={styles.logo}>
                <p className={styles.copyright}>©</p>
                <div className={styles.name}>
                    <p className={styles.codeBy}>Code by</p>
                    <p className={styles.eric}>Eric</p>
                    <p className={styles.manasse}>Manasse</p>
                </div>
            </div>
          </Link>
        </motion.div>

        {/* work with me */}
        <motion.div variants={item}>
          <div className="flex gap-1 z-10">
            <p className="font-normal text-black text-lg line-through">
              Available for work
            </p>
          </div>
        </motion.div>
        {/* menu */}
        <motion.div variants={item} className="bg-slate-200t justify-center items-center">
          <div className="flex text-lg gap-4">
            <MenuLinks
              className="text-black text-lg font-normal"
              menuName="index"
              href="/"
            />
            <MenuLinks
              className="text-black text-lg font-normal"
              menuName="about"
              href="/about"
            />
            <MenuLinks
              className="text-black text-lg font-normal"
              menuName="projects"
              href="/projects"
            />
          </div>
        </motion.div>
      </nav>
    </motion.div>
  );
};

export default Header;
