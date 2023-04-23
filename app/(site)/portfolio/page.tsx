"use client";
import { useEffect, useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "../../../utils/client";
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/navigation";
import { useSkewAnimate } from "../../../hooks/useSkewAnimate";

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
      // useSkewAnimate(".skewElem");
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
  console.log("🚀 ~ file: page.tsx:78 ~ ProjectCard ~ project:", project)
  return (
    <div className="w-full">
      {project
        .sort(
          (a: any, b: any) =>
            new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime()
        )
        .map((proj: projTypes, index: any) => {
          const url =
            proj.mainImage !== undefined
              ? builder.image(proj.mainImage).url().toString()
              : null;

          return (
            <div
              key={index.toString()}
              className="skewElem rounded-[40px] bg-no-repeat overflow-hidden mb-[20px] bg-cover h-[280px]"
              style={{ backgroundImage: `url(${url})` }}
            >
              <a
                href={`portfolio/${proj.slug.current}`}
                className="flex flex-col lg:flex-row grow text-center lg:text-left p-10 text-white items-center justify-between h-full bg-black/60  ease-in-out duration-800"
              >
                <div>
                  <h1 className="text-mobile_header lg:text-h3_text lg:w-3/4, font-bold font-displayText ease-in-out duration-300">
                    {proj.title}
                  </h1>
                </div>
                <div className="flex w-full lg:w-1/3 gap-x-5 justify-center ease-in-out duration-900">
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
