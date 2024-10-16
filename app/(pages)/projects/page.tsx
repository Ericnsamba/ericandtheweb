import { Key } from "react";
import Project from "@/components/project";
import ProjectData from "@/data/portfolioData"; // Correct named import
import Transition from "@/components/Transition";
import { heading_2 } from "@/utils/styles";
// import "./styles"

export default function Projects() {
  return (
    <Transition>
      <section className={`pb-[10vh] p-6 lg:px-20`}>
        <div className=" bg-yellow-500t flex flex-col gap-[30vh] lg:pt-[20vh] pb-[10vh] lg:pb-10">
          <div>
            <h2 className={`${heading_2}`}>
              Featured
              <br />
              Work
            </h2>
          </div>
          <div className="flex flex-col w-full gap-x-24 bg-neutral-300t justify-end lg:flex-row">
            {/* <p className="text-black text-lg font-medium mb-6">Selected Projects</p> */}
            <div className="bg-slate-200t w-full lg:w-6/12 lg:self-end">
              <p className="text-black text-4xl ">
                A selected set of experiments I&apos;m building as I navigate
                through ideas and technologies. I learn by testing out and
                building based on concepts and techniques.
              </p>
            </div>
          </div>
        </div>

        <div className={`project_container w-full lg:p-20`}>
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
        </div>
      </section>
    </Transition>
      
  );
}
