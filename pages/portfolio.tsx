
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { ThemeProvider, useTheme } from "next-themes";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";

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
        <h1 className="lg:text-8xl text-6xl text-green font-bold font-display">Portfolio</h1>
        <p className="text-sm hover:text-base font-body"> hello</p>

        <div className="bg-white dark:bg-black">
      <div className="py-20 flex flex-col items-center justify-center">
        <h1 className="text-5xl text-center text-gray-800 dark:text-gray-100 font-bold">
          Next Themes + Tailwind Dark Mode
        </h1>

        <button
          className="mt-16 px-4 py-2 text-white dark:text-black bg-black dark:bg-white font-semibold rounded-md"
          onClick={() => {
            setTheme(theme === 'light' ? 'dark' : 'light')
          }}
        >
          Change Theme
        </button>
      </div>
    </div>
      </main>
    </div>
  );
}


