import JobPosition from "@/components/JobPosition";
import Transition from "@/components/Transition";
import jobPositions from "@/data/jobPositions";
import { heading_2, text_lg } from "@/utils/styles";
import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <Transition>
      <div className="min-h-screen w-full items-center  flex flex-col  p-6 lg:p-20 lg:pt-[24vh] gap-[24vh]">
        <div className="flex flex-col ">
          <div className="flex w-full bg-slate-400t justify-between gap-10 mb-[24vh] flex-col lg:flex-row">
            <div className="w-full lg:w-6/12">
              <h2 className={`${heading_2}`}>
                Driven by a passion for innovation
              </h2>
            </div>
            <Image
              width={1000}
              height={1000}
              className="w-[217px] h-[263px] object-cover self-end"
              src="/medias/mambo_mambo.jpeg"
              alt={"eric"}
            />
          </div>

          <div className="lg:grid lg:grid-cols-12 w-full ">
            <p className={`${text_lg} col-start-3 col-span-9 `}>
              <span className="text-black ">
                Additionally, I have collaborated within the EV Vehicles sector,
                designing cutting-edge digital experiences for one of the
                world’s most renowned vehicle brands,
              </span>
              <span className="">
                known for their luxury and engineering excellence. This work
                further exemplifies my ability to deliver seamless, innovative
                solutions across perse industries.
              </span>
            </p>
          </div>
        </div>

        {/* Work experience */}
        <section className="flex flex-col w-full">
          <div className="flex w-full mb-[24vh]">
            <div className="w-full text-black  lg:w-6/12">
              <h2 className="text-black text-[40px] leading-[44px] lg:text-[80px] font-medium uppercase lg:leading-[88px] tracking-wider">
                Work <br />
                experience
              </h2>
            </div>
          </div>

          <div className="lg:grid lg:grid-cols-12 w-full pb-16 ">
            <div className="col-start-3 col-end-11">
              <div>
                {jobPositions.map((job, index) => (
                  <JobPosition
                    key={index}
                    position={job.position}
                    duration={job.duration}
                    company={job.company}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Transition>
  );
}
