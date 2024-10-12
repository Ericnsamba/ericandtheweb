// "use client"
import React, { Children } from "react";
import Link from "next/link";
import styles from "./menuStyles.module.css";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useRouter, withRouter } from "next/router";

type navTypes = {
  className?: string;
  menuName: string;
  href: string;
};

const MenuLinks = ({ menuName, href, className = "" }: navTypes) => {
  // const router = useRouter()
  // console.log("🚀 ~ router.asPath ===>:", router)
  // console.log("🚀 ~ usePathname ===>:", usePathname)
  //   const path = usePathname();
  const DURATION = 0.25;
  //   const STAGGER = 0.025;

  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className="relative flex  whitespace-nowrap  gap-4 overflow-hidden"
    >
      <Link
        href={href}
        className={`cursor__grow flex flex-col justify-start h-auto bg-lime-3003 overflow-hidden gap-0 ${className}`}
      >
        <motion.p
          className={`cursor__grow menu_link font-medium`}
          variants={{
            initial: {
              y: 0,
            },
            hovered: {
              y: "-100%",
            },
          }}
          transition={{
            duration: DURATION,
            ease: "easeInOut",
            delay: 0.045,
          }}
        >
          {menuName}
        </motion.p>
        <motion.p
          className={`cursor__grow menu_link font-medium absolute inset-0`}
          variants={{
            initial: {
              y: "100%",
            },
            hovered: {
              y: 0,
            },
          }}
          transition={{
            duration: DURATION,
            ease: "easeInOut",
            delay: 0.045,
          }}
        >
          {menuName}
        </motion.p>
      </Link>
    </motion.div>
  );
};

export default MenuLinks;
