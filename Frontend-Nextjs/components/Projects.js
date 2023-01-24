import React, { useEffect, useState } from "react";
import Image from "next/image";
import ArrowUp from "../public/assets/icons/icon-up-right.svg";
import Link from "next/link";
import { sanityClient } from "../utils/client";

export default function Projects({ portfolio }) {
  const [portfolioItems, setPortfolioItems] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "portfolio"]{title, slug, link, imgUrl, category, stack, year}`
      )
      .then(setPortfolioItems)
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // console.log("🚀 ~ file: Projects.js:9 ~ Projects ~ portfolio", portfolio)
  return (
    <section className=" w-full">
      <div>
        {/* Hover over this div to hide/show <HoverText /> */}
        {/* <HoverableDiv
        handleMouseOver={handleMouseOver}
        handleMouseOut={handleMouseOut}
      /> */}
      </div>
      {/* Grid starts here */}

      <div className="">
        {portfolioItems.map((proj, index) => (
          <div
            className="flex grow py-10 border-b border-b-slate-100 items-center justify-between"
            key={index}
          >
            <Link href={`portfolio/${proj.slug.current}`}>
              <div
                // onMouseOver={handleMouseOver}
                // onMouseOut={handleMouseOut}
                className="ease-in-out duration-700 text-[44px] text-green hover:text-green font-bold font-display"
              >
                {proj.title}
              </div>
            </Link>
            <div className="flex w-1/3 gap-x-5">
              <p className="ease-in-out duration-700 text-[14px] uppercase text-gray font-bold">
                {proj.category}
              </p>
              <p className="ease-in-out duration-700 text-[14px] uppercase text-gray font-bold">
                {proj.year}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const ProjectCard = ({
  title,
  link,
  imgUrl,
  number,
  category,
  stack,
  slug,
  // handleMouseOver,
  // handleMouseOut,
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div className="flex grow py-6 border-b border-b-slate-100">
      <div className="relative flex justify-between flex-row  ease-in duration-300 mx-auto container px-4 xl:px-12 ">
        <div className="w-full  sm:px-0 justify-between flex flex-row py-1">
          <div className="w-[387px] ">
            <p className="text-[16px] text-forestGreen font-bold">{category}</p>
            <div
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              className="ease-in-out duration-700 text-[44px] text-green hover:text-green font-bold"
            >
              {title}
            </div>
          </div>

          <div className="text-black text-base flex items-center  max-w-[280px] mx-10  text-left">
            I like working on existing ideas, get in touch if you have any. 😎
          </div>

          <div className="flex items-center justify-end">
            <Link href={`portfolio/${slug}`} className="cursor-pointer">
              <Image
                src={ArrowUp}
                alt="portfolio"
                className="transform hover:scale-2 ease-out  h-[36px] w-[36px]"
              />
            </Link>
          </div>
        </div>
        {/* <div className=" lg:ml-10 w-full lg:w-1/2 sm:px-0 justify-between flex flex-col py-1">
            {isHovering && (
              <div className="absolute h-[300px] w-[400px] -top-24 overflow-hidden ease-in duration-300 rounded-2xl">
                <Image
                  src={imgUrl}
                  alt="portfolio"
                  className="transform hover:scale-2 ease-out object-cover bg-green h-full w-full"
                />
              </div>
            )}
          </div> */}
      </div>
    </div>
  );
};
