"use client";
import React, { useState } from "react";
import styles from "./style.module.css";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const anim = {
  initial: { width: 0 },
  open: {
    width: "auto",
    height: "5vw",
    margin: "0 08px",
    transition: {
      duration: 0.5,
      ease: [0.23, 1, 0.32, 1],
    },
  },
  closed: { width: 0 },
};

type Project = {
  title1: string;
  title2: string;
  src: string;
  slug: string;
};

export default function Index({ project }: { project: Project }) {
  const [isActive, setIsActive] = useState(false);

  const { title1, title2, src } = project;
  return (
    <Link className="link_item" href={`/portfolio/${project.slug}`}>
      <div
        onMouseEnter={() => {
          setIsActive(true);
        }}
        onMouseLeave={() => {
          setIsActive(false);
        }}
        className={styles.project}
      >
        <p className="text-Lace_Veil uppercase font-medium">{title1}</p>
        <motion.div
          variants={anim}
          animate={isActive ? "open" : "closed"}
          className={styles.imgContainer}
        >
          <Image
          className="object-cover aspect-video"
            src={`/${project.slug}/${src}`}
            width={1000}
            height={1000}
            alt={project.slug}
          />
        </motion.div>
        <p className="text-Lace_Veil uppercase font-medium">{title2}</p>
      </div>
    </Link>
  );
}
