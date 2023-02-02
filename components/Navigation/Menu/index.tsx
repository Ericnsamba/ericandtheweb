import React from "react";
import Link from "next/link";
import styles from "./menuStyles.module.css";
import { motion } from "framer-motion";

type navTypes = {
    routeNames: string[],
    justify?: string,
}

const Navigation = ({ routeNames, justify }: navTypes) => {
  return (
    <motion.div className={`${styles.container} w-full max-w-[220px] justify-${justify ?? "start" }`}>
      {routeNames.map((route, index) => {
        let href = "";
        if (route === "about me") {
          href = "../about";
        } else if (route === "my work") {
          href = "../portfolio";
        } else if (route === "get in touch") {
          href = "../contact";
        } else {
          href = "../";
        }
        return (
            <Link key={index} href={href} className={`${styles.menuItem} rounded-2xl border  hover:text-green border-gray2 hover:border-green`}>
              <p className={`${styles.menuText} font-body font-medium text-[14px]`}>{route}</p>
            </Link>
        );
      })}
    </motion.div>
  );
};

export default Navigation;
