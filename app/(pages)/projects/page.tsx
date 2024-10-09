import Project from "@/components/project";
import ProjectData from "@/data/portfolioData"; // Correct named import
import { Key } from "react";

export default function Home() {
  return (
    <main className={``}>
      <div className="p-20 bg-yellow-500t flex flex-col gap-[30vh] pt-56">
        <div>
          <h2 className="text-black text-7xl uppercase">
            Featured
            <br />
            Work
          </h2>
        </div>
        <div className="flex w-full gap-x-24 bg-neutral-300t justify-end">
          <p className="text-black text-lg font-medium">Selected Projects</p>
          <div className="bg-slate-200t w-6/12 self-end">
            <p className="text-black text-4xl ">
              A selected set of experiments I&apos;m building as I navigate
              through ideas and technologies. I learn by testing out and
              building based on concepts and techniques.
            </p>
          </div>
        </div>
      </div>

      <div className={`project_container w-[100%] lg:p-20`}>
        {ProjectData.map((project: { title1: Key | null | undefined }) => {
          return <Project project={project} key={project.title1} />;
        })}
      </div>
    </main>
  );
}