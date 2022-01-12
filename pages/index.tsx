import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Eric &amp; the web | Home</title>
        <meta name="description" content="Product designer and app developer website" />
        <link
            rel="preload"
            href="../public/fonts/MonumentExtended-Regular.ttf"
            as="font"
            crossOrigin=""
          />
        <link
            rel="preload"
            href="../public/fonts/MonumentExtended-Bold.ttf"
            as="font"
            crossOrigin=""
          />
        <link
            rel="preload"
            href="../public/fonts/CircularStd-Book.ttf"
            as="font"
            crossOrigin=""
          />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="text-8xl text-green font-bold font-display">Eric &amp; the web</h1>
        <p className="text-sm hover:text-base font-body"> hello</p>
      </main>
    </div>
  );
}
