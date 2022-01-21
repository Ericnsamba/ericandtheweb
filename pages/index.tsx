import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import SvgAnimation from "../components/SvgAnimation"
import EricPhoto from "../public/assets/images/eric-picture.png";


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Eric &amp; the web | Coming soon</title>
        <meta name="description" content="Product designer and app developer website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="landing-hero py-20">
          <h1 className="UltralightFontSize lg:text-9xl text-5xl text-forestGreen dark:text-green font-display">
            Website coming soon
          </h1>
          <p className="text-forestGreen dark:text-green ">hello@ericandthweb.com</p>
        </div>
      </main>
    </div>
  );
}
// Eric & The Web