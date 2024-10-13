import JobPosition from "@/components/JobPosition";
import Transition from "@/components/Transition";
import jobPositions from "@/data/jobPositions";
import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <Transition>
      <div className="min-h-screen w-full items-center  flex flex-col lg:p-20 lg:pt-[24vh] gap-[24vh]">
        <div className="flex flex-col ">
          <div className="flex w-full bg-slate-400t justify-between mb-[24vh]">
            <div className="w-6/12">
              <h2 className="text-black text-[80px] font-medium uppercase leading-[88px] tracking-wider">
                Driven by a passion for innovation
              </h2>
            </div>
            <Image
              width={1000}
              height={1000}
              className="w-[217px] h-[263px] object-cover"
              src="/medias/mambo_mambo.jpeg"
              alt={""}
            />
          </div>

          <div className="grid grid-cols-12 w-full ">
            <div className="col-start-3 col-span-9 ">
              <span className="text-black text-[32px] font-medium leading-[44.80px]">
                Additionally, I have collaborated within the EV Vehicles sector,
                designing cutting-edge digital experiences for one of the
                world’s most renowned vehicle brands,
              </span>
              <span className=" text-[32px] font-normal font-inter leading-[44.80px]">
                known for their luxury and engineering excellence. This work
                further exemplifies my ability to deliver seamless, innovative
                solutions across diverse industries.
              </span>
            </div>
          </div>
        </div>
        {/* Work experience */}
        {/* <section className="flex flex-col bg-slate-500t w-full">
          <div className="flex w-full mb-[24vh]">
            <div className="w-6/12">
              <h2 className="text-black text-[80px] font-medium uppercase leading-[88px] tracking-wider">
                Work <br />
                experience
              </h2>
            </div>
          </div>

          <div className="lg:w-8/12 w-full self-center">
            <div>
              <JobPosition
                position="Senior Product Designer"
                duration="2022 - Current"
                company="The Bang"
              />
              <JobPosition
                position="Senior Product Designer"
                duration="2022 - Current"
                company="The Bang"
              />
              <JobPosition
                position="Senior Product Designer"
                duration="2022 - Current"
                company="The Bang"
              />
            </div>
          </div>
        </section> */}

        {/* Work experience */}
        <section className="flex flex-col w-full">
          <div className="flex w-full mb-[24vh]">
            <div className="w-6/12">
              <h2 className="text-black text-[80px] font-medium uppercase leading-[88px] tracking-wider">
                Work <br />
                experience
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-12 w-full ">
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
