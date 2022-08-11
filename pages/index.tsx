import React , { FC}from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import SvgAnimation from "../components/SvgAnimation"
import EricPhoto from "../public/assets/images/eric-picture.png";
import LatestCode from "../components/LatestCode";
import Hero from "../components/Hero";
import userData from "../constants/data";
import getLatestRepos from "../lib/getLatestRepos";

interface typeDefinition {
  repositories: any;
}

  const Home: FC<typeDefinition> = ({repositories}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Eric &amp; the web | Home</title>
        <meta name="description" content="Product designer and app developer website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* Hero section */}
        <div className="landing-hero py-0 h-70v">
          <h1 className="lg:text-9xl text-5xl text-green dark:text-green font-display">
            Creative
          </h1>

          <div className="flex py-4">
            <div className="flex">
              <SvgAnimation className="hidden lg:flex" />
              <span className="hidden lg:flex font-display p-1 h-9  mx-3 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-forestGreen dark:before:bg-green relative inline-block">
                <span className="relative text-white dark:text-forestGreen text-3xl">and</span>
              </span>
            </div>
            {/* mobile */}
            <h1 className="lg:hidden text-5xl text-forestGreen dark:text-green font-display ">
              Developer
              <span className="px-2 my-1 mx-2 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-forestGreen dark:before:bg-green relative inline-block">
                <span className="relative text-white dark:text-forestGreen text-3xl">and</span>
              </span>
            </h1>
          </div>

          <h1 className="lg:text-9xl text-5xl text-green dark:text-green font-display">
            Designer
          </h1>

        </div>
        
        {/* Hero section */}
       {/* <Hero /> */}

        <div className="container my-8 bg-slate-50 dark:bg-[#313332] rounded-3xl">
          <LatestCode repositories={repositories} />
        </div>

      </main>
    </div>
  );
}

export default  Home;

export const getServerSideProps = async () => {
  console.log(process.env.GITHUB_AUTH_TOKEN);
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(userData, token);
  // console.log("REPOSITORIES", repositories);

  return {
    props: {
      repositories,
    },
  };
};
// Eric & The Web