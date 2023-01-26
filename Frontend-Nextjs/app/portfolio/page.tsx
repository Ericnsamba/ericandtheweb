"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ProjectCard from "../../components/Projects";
import { sanityClient } from "../../utils/client";

export default function Home() {
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

  return (
    <div className="mx-auto flex w-full">
      <div className="w-2/12 "></div>
      <div className="w-8/12">
        <div className="">
          {portfolioItems.map((proj, index) => (
            <div
              className="flex grow py-10 border-b border-b-slate-100 items-center justify-between"
              key={index}
            >
              <Link href={`portfolio/${proj.slug.current}`}>
                <div className="ease-in-out duration-700 text-[44px] text-green hover:text-green font-bold font-display">
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
      </div>
      <div className="w-2/12"></div>
    </div>
  );
}
