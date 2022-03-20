import userData from "../constants/data";
import React from "react";

export default function Experience() {
  return (
    <section className="bg-white dark:bg-black">
      <div className="mt-40 mb-10 flex bg-white dark:bg-black items-center justify-center" >
        <h1 className="text-4xl lg:text-7xl text-forestGreen dark:text-green font-bold">
          Experience
        </h1>
      </div>
      <div className="bg-white dark:bg-black -mt-4">
        <div className="  max-w-3xl mx-auto pt-20">
          {/* Experience card */}
          {userData.experience.map((exp, idx) => (
            <>
              <ExperienceCard
                key={idx}
                title={exp.title}
                desc={exp.desc}
                year={exp.year}
                company={exp.company}
                companyLink={exp.companyLink}
              />
              {idx === userData.experience.length - 1 ? null : (
                <div className="divider-container flex flex-col items-center -mt-2">
                  <div className="w-4 h-4 bg-green rounded-full relative z-10">
                    <div className="w-4 h-4 bg-green rounded-full relative z-10 animate-ping"></div>
                  </div>
                  <div className="w-px h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"></div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

const ExperienceCard = ({ title, desc, year, company, companyLink }) => {
  return (
    // <div className="relative experience-card border p-4 rounded-md shadow-xl bg-white dark:bg-black z-10 mx-4">
    <div className="relative experience-card border p-4 rounded-md bg-white dark:bg-black z-10 mx-4">
      <h1 className="absolute -top-10 text-center w-full -left-0 md:-top-10 text-4xl text-gray-200 dark:text-[#313332] font-bold">
        {year}
      </h1>
      <h1 className="font-semibold text-xl text-forestGreen dark:text-green">{title}</h1>
      <a href={companyLink} className="font-semibold text-black dark:text-white">
        <p>{company}</p>
      </a>
      <p className="text-slate-400 dark:text-slate-400 my-2">{desc}</p>
    </div>
  );
};
