"use client";
import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./styles.module.scss";
import Nav from "../Nav";
import TransitionLink from "../TransitionLink";
import Background from "three/src/renderers/common/Background.js";

const menuContainer = {
  open: {
    height: "100vh",
    // backgroundColor: "#eaebeb",
    transition: {
      duration: 0.5,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
  closed: {
    height: "104px",
    transition: {
      duration: 1.5,
      //   delay: 0.75,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const menu = {
  open: {
    height: "24vh",
    transition: {
      duration: 0.75,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
  closed: {
    height: "1vh",
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export default function FullScreenMenu() {
  const [isActive, setIsActive] = useState(false);

  return (
    <motion.div
      className={`flex flex-col z-50 bg-black absolute w-screen`}
      variants={menuContainer}
      initial={"closed"}
      animate={isActive ? "open" : "closed"}
    >
      <div className="nav flex justify-between w-full p-10 relative">
        <div className="w-[48px]">
          <motion.button
            onClick={() => {
              setIsActive(!isActive);
            }}
            className={`text-grey font-normal  text-sm uppercase text-Lace_Veil`}
            initial={"closed"}
            animate={isActive ? "open" : "closed"}
          >
            {isActive ? "Close" : "menu"}
          </motion.button>
        </div>

        <div className="logo">
          <Link scroll={false} href="/">
            <p className="name text-blend_dark text-sm uppercase font-bold">
              © Eric Manasse
            </p>
          </Link>
        </div>

        <div className={``}>
          <TransitionLink
            className={`${styles.menuLinks} text-blend_dark text-sm font-normal uppercase relative`}
            href="/"
            label="Let's Talk"
          />

          {/* <Button
          isActive={isActive}
          toggleMenu={() => {
            setIsActive(!isActive);
          }}
        /> */}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {isActive && (
          <div className="menu p-10">
            <Nav />
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
