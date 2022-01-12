
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";

export default function Home() {
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
      </main>
    </div>
  );
}


