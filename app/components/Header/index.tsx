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
      className="fixed top-0 z-10 flex w-full justify-center"
    >
      <nav className="flex justify-between bg-slate-400t w-full overflow-hidden lg:mx-10 py-10 gap-4 border-b-[1px] border-black">
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
            <p className="font-normal text-black text-lg line-through mix-blend-difference">
              Available for work
            </p>
          </div>
        </motion.div>
        {/* menu */}
        <motion.div
          variants={item}
          className="bg-slate-200t justify-center items-center"
        >
          <div className="flex text-lg gap-4">
           

            <Link href="/">
              <p  className={`${styles.menuLinks} text-black text-base font-normal uppercase relative`}>
                index
              </p>
            </Link>
            <Link href="/about">
              <p  className={`${styles.menuLinks} text-black text-base font-normal uppercase relative`}>
                about
              </p>
            </Link>
            <Link href="/projects">
              <p  className={`${styles.menuLinks} text-black text-base font-normal uppercase relative`}>
                Projects
              </p>
            </Link>
          </div>
        </motion.div>
      </nav>
    </motion.div>
  );
};

export default Header;
