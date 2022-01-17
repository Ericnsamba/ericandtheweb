import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { Key, useEffect } from "react";
import { Motion, spring, StaggeredMotion } from "react-motion";

import styles from "../styles/Home.module.css";

export default function PageNotfound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 4000);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Eric &amp; the web | Page Not found</title>
        <meta
          name="description"
          content="Product designer and app developer website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main} id="content">
        <StaggeredMotion
          defaultStyles={[{ h: 0, size: 0 }]}
          styles={() =>
            prevInterpolatedStyles.map((_, i) => {
              return i === 0
                ? { h: spring(100), size: spring(100) }
                : { size: spring(prevInterpolatedStyles[i - 1].size) };
            })
          }
        >
          {() => (
            <div>
              {interpolatingStyles.map(
                () => (
                  // <div key={i} style={{ border: '1px solid', height: style.h }} />
                  <h1
                    style={{ fontSize: style.size }}
                    className="lg:text-8xl text-green font-bold font-display"
                  >
                    Page Not found
                  </h1>
                )
              )}
            </div>
          )}
        </StaggeredMotion>

        <p className="text-sm hover:text-base font-body"> hello</p>
      </main>
    </div>
  );
}
