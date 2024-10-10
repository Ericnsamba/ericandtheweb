"use client";
import React, { useState } from "react";
import styles from "./style.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

const anim = {
  initial: { width: 0 },
  open: {
    width: "auto",
    transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] },
  },
  closed: { width: 0 },
};

export default function index({ project }) {
  const [isActive, setIsActive] = useState(false);

  const { title1, title2, src } = project;
  return (
    <Link className="link_item" href={`/projects/${project.slug}`}>
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
          <img src={`/medias/${src}`}></img>
        </motion.div>
        <p className="text-black uppercase">{title2}</p>
      </div>
    </Link>
  );
}
