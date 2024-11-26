"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.scss";

const anim = {
  initial: { width: 0, height: 0, },
  open: {
    width: "auto",
    height: "5vw",
    margin: "0 8px",
    transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] },
  },
  closed: { width: 0 },
};

export default function TextImageReveal({ title1, title2, src }: { title1: string; title2: string; src: string }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        setIsActive(true);
      }}
      onMouseLeave={() => {
        setIsActive(false);
      }}
      className={styles.project}
    >
      <p className="text-black uppercase">{title1}</p>
      <motion.div
        variants={anim}
        animate={isActive ? "open" : "closed"}
        className={styles.imgContainer}
      >
        <Image
        className="bg-black w-full h-full object-cover"
          src={src}
          width={1000}
          height={1000}
          alt={"image"}
        />
      </motion.div>
      <p className="text-black uppercase">{title2}</p>
    </div>
  );
}
