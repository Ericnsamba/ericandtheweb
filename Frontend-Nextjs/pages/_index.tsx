import React , { FC}from "react";
import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import userData from "../constants/data";
import getLatestRepos from "../lib/getLatestRepos";
import Explore from "../sections/Explore";

interface typeDefinition {
  repositories: any;
}

  const Home: FC<typeDefinition> = ({repositories}) => {
  return (
    <main className={''}>
        <Hero/>
    </main>
  );
}

export default  Home;
