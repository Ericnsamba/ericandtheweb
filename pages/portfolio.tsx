
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { ThemeProvider, useTheme } from "next-themes";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import ProjectCard from "../components/Projects";

export default function Home() {
  const { theme, setTheme } = useTheme()
  return (
    <div className={styles.container}>
      <Head>
        <title>Eric &amp; the web | Portfolio</title>
        <meta name="description" content="Product designer and app developer website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="mx-auto container px-4 xl:px-12 2xl:px-4 ">
        <ProjectCard/>
        </div>
      </main>
    </div>
  );
}


