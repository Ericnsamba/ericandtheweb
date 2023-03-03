"use client";
import { useEffect, useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "../../utils/client";
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/navigation";
import { useSkewAnimate } from "../../hooks/useSkewAnimate";

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
  const router = useRouter();
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

  const isDesktop = useMediaQuery({ minWidth: 768 });

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // WorkExperienceSection();
      useSkewAnimate(".skewElem")
      // 
    });

    return () => ctx.revert();
  });

  return (
    <div className="flex min-h-screen  gap-x-5 overflow-hidden scrollbar-hide w-full mb-[10px]">
      {/* main body */}
      <div className="lg:w-8/12 w-full px-5 items-center flex flex-col py-32 mx-auto bg-cyan-2000 ">
        {ProjectCard(portfolioItem)}
      </div>
    </div>
  );
}

const ProjectCard = (project: any) => {
  const ContainerVar = {
    hidden: {
      y: 100,
    },
    show: {
      y: 0,
      transition: {
        // delay: 0.7,
        duration: 0.6,
        staggerChildren: 0.3,
        delayChildren: 0.8,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div className="w-full">
      {project.map((proj: projTypes, index: any) => {
        const url =
          proj.mainImage !== undefined
            ? builder.image(proj.mainImage).url().toString()
            : null;

        return (
          <div
            key={index.toString()}
            className="skewElem rounded-[20px] bg-no-repeat overflow-hidden mb-[10px] bg-cover h-[277px]"
            style={{ backgroundImage: `url(${url})` }}
          >
            <a
              href={`portfolio/${proj.slug.current}`}
              className="flex flex-col lg:flex-row grow text-center lg:text-left py-10 text-white items-center justify-between h-full bg-black/60  px-16 pr-16 ease-in-out duration-800"
            >
              <div>
                <h1 className="text-[25px] lg:text-[44px]  font-bold font-display ease-in-out duration-300">
                  {proj.title}
                </h1>
              </div>
              <div className="flex w-1/3 gap-x-5 justify-center ease-in-out duration-900">
                <p className="ease-in-out duration-700 text-[14px] uppercase font-bold">
                  {proj.category}
                </p>
                <p className="ease-in-out duration-700 text-[14px] uppercase font-bold">
                  {proj.year}
                </p>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
};
