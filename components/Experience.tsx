import userData from "../constants/data";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "../utils/client";

type experienceTypes = {
  logo: any;
  jobTitle: string;
  url: string;
  company: string;
  year: string;
}

const builder = imageUrlBuilder(sanityClient);

export default function Experience() {
  const [experienceData, setExperienceData] = useState([]);
  // console.log("🚀 ~ file: Experience.tsx:8 ~ Experience ~ experienceData", experienceData)
  // const url = (link) => {
  //   if (link) {
  //     console.log("======> link", link);
  //     // return builder.image(link.mainImage).url().toString()
  //   }
  // };

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "workExperience"]{company, jobTitle, url, logo, year, createdAt}`
      )
      .then(setExperienceData)
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="">
      <div className="flex flex-col gap-10">
        {/* Experience card */}
        {experienceData.map((exp: experienceTypes, idx) => {
          const url =
            exp.logo !== null
              ? builder.image(exp.logo).url().toString()
              : null;

          return (
            <>
              <ExperienceCard
                key={idx}
                jobTitle={exp.jobTitle}
                // desc={exp.desc}
                year={exp.year}
                company={exp.company}
                url={exp.url}
                logo={url}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}

const ExperienceCard = ({ jobTitle, url, year, company, logo }: any) => {
  return (
    <div className="flex flex-row gap-5  ">
      <div className=" bg-white rounded-full border border-gray2 justify-center items-center flex p-[5px] w-10 h-10">
        {/* <div
          className={`object-cover url(${url}) bg-slate-300 rounded-full w-full h-full`}
          
        /> */}
        <img
          className="object-cover bg-slate-300 rounded-full w-full h-full"
          src={logo}
          // width={40} height={40}
        />
      </div>
      <div className="flex flex-col gap-4 ">
        <h1 className="text-black text-lg lg:text-[24px] font-bold">{company}</h1>
        <div className="flex gap-5 justify-between lg:justify-start">
          <p className="font-body font-normal text-xs lg:text-sm uppercase  text-gray">
            {jobTitle}
          </p>
          <p className="font-body font-normal text-xs lg:text-sm uppercase  text-gray text-right">
            {year}
          </p>
        </div>
      </div>
    </div>
  );
};
