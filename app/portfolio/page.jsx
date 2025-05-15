"use client";
import React from "react";
// import Project from "@/components/project";
import { section_styles } from "@/utils/styles";
import Project from "@/components/project";
import { CaseStudyData } from "@/data/caseStudyData";
import AnimatedText from "@/components/Animations/AnimatedText";
// import "./styles"

export default function Projects() {
  const paragraph =
    "A curated collection of projects and experiments that showcase my journey through design, ideas, and technology. Each piece reflects my approach to learning exploring concepts, testing possibilities, and building to bring ideas to life.";
  return (
    <div className={`${section_styles} gap-10`}>
      <section className="flex flex-col gap-[30vh] bg-grey_11 w-full">
        <div className="w-full lg:w-6/12 flex flex-col overflow-hidden">
          <div className=" ">
            <AnimatedText
            text={"Featured Work"}
            tag="h1"
            className="text-Lace_Veil w-1/2"
            delay={0.4}
            duration={1.2}
            stagger={0.2}
            once={false}
            // reverseAnimation={true}
            // reverseDelay={0}
            // reverseDuration={0.4}
            animationType="words"
            mask={true}
          />
          </div>
        </div>
        <div className="flex flex-col w-full gap-x-24 bg-neutral-300t justify-end lg:flex-row">
          <div className="bg-slate-200t w-full lg:w-6/12 lg:self-end">
          <AnimatedText
            text={paragraph}
            tag="p"
            className="text-Lace_Veil text-2xl"
            delay={0.8}
            duration={1.2}
            stagger={0.2}
            once={false}
            // reverseAnimation={true}
            // reverseDelay={0}
            // reverseDuration={0.4}
            animationType="lines"
            mask={true}
          />
          </div>
        </div>
      </section>

      <section className={`project_container w-full`}>
        {CaseStudyData.map((project) => {
          return (
            <div
              className="project_item border-Lace_Veil border-t-[1px] last-of-type:border-b-[1px]"
              key={project.title1}
            >
              <Project project={project} />
            </div>
          );
        })}
      </section>
      <div className="spacer h-[50vh]"/>
    </div>
  );
}
