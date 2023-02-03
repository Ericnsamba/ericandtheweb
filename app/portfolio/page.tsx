"use client";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { type } from "os";
import { Key, useEffect, useState } from "react";
import Navigation from "../../components/Navigation/Menu";
import NavButton from "../../components/Navigation/NavButton";
import ProjectCard from "../../components/Projects";
import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "../../utils/client";
import { useMediaQuery } from "react-responsive";

type projTypes = {
  slug: { current: string };
  title: string;
  category: string;
  year: string;
  mainImage: any;
};

interface portfolioTypes {
  slug: any;
  title: string;
  category: string;
  year: string;
  description: string;
  app_link?: string;
  web_link?: string;
  brief?: string;
  challenge?: string;
  solution?: string;
  mainImage: string;
  imagesGallery: [];
}

const builder = imageUrlBuilder(sanityClient);

export default function Home() {
  const [portfolioItem, setPortfolioItem] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "portfolio"]{title, slug, link, imgUrl, category, stack, year, publishedAt, mainImage}`
      )
      .then(setPortfolioItem)
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const ContainerVar = {
    hidden: {
      // opacity: 0,
      y: 100,
    },
    show: {
      // opacity: 1,
      y: 0,
      transition: {
        // delay: 0.7,
        duration: 0.6,
        // when: 'beforeChildren',
        staggerChildren: 0.3,
        delayChildren: 0.8,
        ease: "easeInOut",
      },
    },
  };

  // const isDesktop = window.innerWidth > 768; //Add the width you want to check for here (now 768px)
  // console.log("🚀 ~ file: page.tsx:97 ~ Home ~ isMobile", isDesktop)
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const boxVariants = (url: any) => ({
    hover: {
      opacity: 1,
      background: `url(${url})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      borderRadius: 20,
      scale: 1,
      height: 277,
      color: "red",
      // color: "#FFFFFF",
      transition: { duration: 1 },
    },
  });

  const mobileStyles = "";

  const variants = (url: string) => ({
    hover: {
      opacity: 1,
      background: `url(${url})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      borderRadius: 20,
      scale: 1,
      height: 277,
      color: "#FFFFFF",
      transition: { duration: 1 },
    },
  });

  return (
    <div className="flex h-screen gap-x-5 overflow-hidden scrollbar-hide w-full ">
      {/* nav left */}
      <div className="w-2/12 flex-auto lg:flex hidden ">
        <div className="NavigationBar flex justify-start gap-5 w-full h-[400px] items-center self-center">
          <Navigation routeNames={["home", "about me"]} />
        </div>
      </div>

      {/* main body */}
      <div className="lg:w-8/12 w-full px-5 h-screen overflow-hidden overflow-y-scroll scrollbar-hide items-center flex flex-col py-32 ">
        {isDesktop
          ? ProjectCardDeskTop(portfolioItem)
          : ProjectCardMobile(portfolioItem)}
      </div>

      {/* nav right */}
      <div className="w-2/12 flex-auto lg:flex hidden">
        <div className="NavigationBar flex justify-end gap-5 w-full h-[400px] items-center self-center">
          <Navigation routeNames={["get in touch"]} justify="end" />
        </div>
      </div>
    </div>
  );
}

const ProjectCardDeskTop = (project: any) => {
  const ContainerVar = {
    hidden: {
      // opacity: 0,
      y: 100,
    },
    show: {
      // opacity: 1,
      y: 0,
      transition: {
        // delay: 0.7,
        duration: 0.6,
        // when: 'beforeChildren',
        staggerChildren: 0.3,
        delayChildren: 0.8,
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.div
      variants={ContainerVar}
      initial="hidden"
      animate="show"
      className="w-full"
    >
      {project.map((proj: projTypes, index:any) => {
        const url =
          proj.mainImage !== undefined
            ? builder.image(proj.mainImage).url().toString()
            : null;

        return (
          <motion.div
            key={index.toString()}
            className="border-b border-b-slate-100 bg-white bg-no-repeat overflow-hidden"
            // initial={{
            //   background: "transparent",
            // }}
            whileHover={{
              opacity: 1,
              background: `url(${url})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              borderRadius: 20,
              scale: 1,
              height: 277,
              color: "red",
              // color: "#FFFFFF",
              transition: { duration: 1 },
            }}
          >
            <Link
              href={`portfolio/${proj.slug.current}`}
              className="flex flex-col lg:flex-row grow text-center lg:text-left py-10 hover:text-white text-green items-center justify-between h-full hover:bg-black/50  hover:px-16 hover:pr-16 ease-in-out duration-800"
            >
              <div>
                <h1 className="text-[25px] lg:text-[44px]  font-bold font-display ease-in-out duration-300">
                  {proj.title}
                </h1>
              </div>
              <div className="flex w-1/3 gap-x-5 justify-center ease-in-out duration-900">
                <p className="ease-in-out duration-700 text-[14px] uppercase text-gray font-bold">
                  {proj.category}
                </p>
                <p className="ease-in-out duration-700 text-[14px] uppercase text-gray font-bold">
                  {proj.year}
                </p>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
};
const ProjectCardMobile = (project: any) => {
  return (
    <div className="w-full">
      {project.map((proj: projTypes, index: any) => {
        return (
          <div
            key={index.toString()}
            className="border-b border-b-slate-100 bg-white bg-no-repeat overflow-hidden"
          >
            <Link
              href={`portfolio/${proj.slug.current}`}
              className="flex flex-col lg:flex-row grow text-center lg:text-left py-10 hover:text-white text-green items-center justify-between h-full hover:bg-black/50  hover:px-16 hover:pr-16 ease-in-out duration-800"
            >
              <div>
                <h1 className="text-[25px] lg:text-[44px]  font-bold font-display ease-in-out duration-300">
                  {proj.title}
                </h1>
              </div>
              <div className="flex w-1/3 gap-x-5 justify-center ease-in-out duration-900">
                <p className="ease-in-out duration-700 text-[14px] uppercase text-gray font-bold">
                  {proj.category}
                </p>
                <p className="ease-in-out duration-700 text-[14px] uppercase text-gray font-bold">
                  {proj.year}
                </p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
