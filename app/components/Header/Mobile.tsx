"use client";
import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Button from "../Button";
import styles from "./style.module.scss";
import Nav from "../Nav";

const menuContainer = {
  open: {
    backgroundColor: "#212322",
    transition: {
      duration: 0.75,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
  closed: {
    backgroundColor: "#ededed",

    transition: {
      duration: 0.35,
      delay: 0.75,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const textColor = {
  open: {
    color: "#ededed",
    transition: {
      duration: 0.75,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
  closed: {
    color: "#212322",
    transition: {
      duration: 0.35,
      delay: 0.75,
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

export default function MobileMenu() {
  const [isActive, setIsActive] = useState(false);

  return (
    <motion.div
      className={`flex p-6  flex-col relative`}
      variants={menuContainer}
      initial={"closed"}
      animate={isActive ? "open" : "closed"}
    >
      <div className={`flex  flex-col`}>
        <div className="flex justify-between w-full">
          <Link scroll={false} href="/">
            <div>
              <p className="text-grey-1 font-bold text-grey_1 text-lg">
                Eric Manasse
              </p>
              <div className="flex gap-1 z-10">
                <motion.p
                  className={`text-grey font-medium  text-lg`}
                  variants={textColor}
                  initial={"closed"}
                  animate={isActive ? "open" : "closed"}
                >
                  Designer, Developer
                </motion.p>
              </div>
            </div>
          </Link>
          <div>
            <p className="text-grey-1 font-bold text-grey_1 text-lg">
              Navigation
            </p>
            <div className="flex gap-1 z-10 justify-end">
              <motion.button
                onClick={() => {
                  setIsActive(!isActive);
                }}
                className={`text-grey font-medium  text-lg`}
                variants={textColor}
                initial={"closed"}
                animate={isActive ? "open" : "closed"}
              >
                {isActive ? "Close" : "Open"}
              </motion.button>
            </div>
          </div>
        </div>
        <div className={``}>
          <motion.div
            className={styles.menu}
            variants={menu}
            animate={isActive ? "open" : "closed"}
            initial="closed"
          >
            <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
          </motion.div>

          {/* <Button
          isActive={isActive}
          toggleMenu={() => {
            setIsActive(!isActive);
          }}
        /> */}
        </div>
      </div>
    </motion.div>
  );
}
