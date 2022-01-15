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
      <iframe className="max-w-full" src='https://my.spline.design/iphone13copy-e971d79210421a5f0b6dbebf8e0fab55/'  width='1000px' height='600px'></iframe>
      </main>
    </div>
  );
}
// Eric & The Web