import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";


export default function PageNotfound() {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() =>{
            router.push('/')
        }, 4000)
    }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Eric &amp; the web | Page Not found</title>
        <meta name="description" content="Product designer and app developer website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="lg:text-8xl text-6xl text-green font-bold font-display">Page Not found</h1>
        <p className="text-sm hover:text-base font-body"> hello</p>
      </main>
    </div>
  );
}