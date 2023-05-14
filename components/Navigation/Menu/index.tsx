import React from "react";
import Link from "next/link";
import styles from "./menuStyles.module.css";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

type navTypes = {
    routeNames: string[],
    justify?: string,
}

const Navigation = ({ routeNames }: navTypes) => {
  const path = usePathname();
  return (
    <motion.div className={`${''} w-full flex gap-5 items-center`}>
      {routeNames.map((route, index) => {
        let href = "";
        if (route === "about me") {
          href = "/about";
        } else if (route === "my work" || route == "portfolio") {
          href = "/portfolio";
        } else if (route === "get in touch") {
          href = "/contact";
        } else {
          href = "/";
        }
        return (
            <Link key={index} href={href} className={`cursor__grow ${path === href ? "text-green rounded-[10px] border border-green py-[10px] px-5" : "text-white"} capitalize hover:text-green ease-in-out duration-300`}>
              <p className={`cursor__grow font-bodyText font-normal text-sm`}>{route}</p>
            </Link>
        );
      })}
    </motion.div>
  );
};

export default Navigation;

