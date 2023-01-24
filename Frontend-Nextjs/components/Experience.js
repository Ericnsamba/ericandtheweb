import userData from "../constants/data";
import React from "react";
import Image from "next/image";

export default function Experience() {
  return (
    <section className="">
      <div className="">
        <div className="flex flex-col gap-10">
          {/* Experience card */}
          {userData.experience.map((exp, idx) => (
            <>
              <ExperienceCard
                key={idx}
                jobTitle={exp.title}
                desc={exp.desc}
                year={exp.year}
                company={exp.company}
                companyLink={exp.companyLink}
                logo={exp.logo}
              />
              {/* {idx === userData.experience.length - 1 ? null : (
                <div className="divider-container flex flex-col items-center -mt-2">
                  <div className="w-4 h-4 bg-green rounded-full relative z-10">
                    <div className="w-4 h-4 bg-green rounded-full relative z-10 animate-ping"></div>
                  </div>
                  <div className="w-px h-24 bg-slate-200 dark:bg-[#313332] rounded-full -mt-2"></div>
                </div>
              )} */}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

const ExperienceCard = ({ jobTitle, desc, year, company, logo }) => {
  return (
    <div className="flex flex-row gap-5 items-start ">
      <div className=" bg-white rounded-full border border-gray2 justify-center items-center flex p-[5px]">
        <Image
          className="w-[30px] h-[30px] bg-slate-300 rounded-full"
          src={logo}
          width={30}
          height={30}
        />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-black text-[24px] font-bold">{company}</h1>
        <div className="flex gap-5">
          <p className="font-body font-normal text-[14px] uppercase  text-gray">
            {jobTitle}
          </p>
          <p className="font-body font-normal text-[14px] uppercase  text-gray">
            {year}
          </p>
        </div>
      </div>
    </div>
  );
};
