"use client";
import { Key } from "react";
import Project from "@/components/project";
import ProjectData from "@/data/portfolioData"; // Correct named import
import Transition from "@/components/Transition";
import { heading_2, section_styles } from "@/utils/styles";
import AnimatedTitle from "@/components/Animations/AnimatedTitle";
import SlideUpWords from "@/components/Animations/Word/SlideUpWords";
// import "./styles"

export default function Projects() {
  const paragraph =
    "A selected set of experiments I'm building as I navigate through ideas and technologies. I learn by testing out and building based on concepts and techniques.";
  return (
    <Transition>
      <div className={`${section_styles} gap-10 `}>
        <section className="flex flex-col gap-[30vh]">
          <div className="w-full lg:w-6/12 flex flex-col overflow-hidden">
            <div className="lg:w-4/12 ">
              <AnimatedTitle
                title={"Featured Work"}
                className={heading_2 + ""}
              />
            </div>
          </div>
          <div className="flex flex-col w-full gap-x-24 bg-neutral-300t justify-end lg:flex-row">
            <div className="bg-slate-200t w-full lg:w-6/12 lg:self-end">
              {/* <Word paragraph={paragraph} /> */}

              <SlideUpWords phrase={paragraph} className="" />
            </div>
          </div>
        </section>

        <section className={`project_container w-full`}>
          {ProjectData.map((project: { title1: Key | null | undefined }) => {
            return (
              <div
                className="project_item border-black border-t-2 last-of-type:border-b-2"
                key={project.title1}
              >
                <Project project={project} />
              </div>
            );
          })}
        </section>
      </div>
    </Transition>
  );
}
