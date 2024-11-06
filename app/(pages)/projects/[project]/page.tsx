"use client";
import React, { memo, FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { CaseStudyData } from "@/data/caseStudyData";
import Transition from "@/components/Transition";
import { heading_1, heading_2, section_styles, text_lg } from "@/utils/styles";

interface pageProps {
  params: any;
}

const page: FC<pageProps> = ({ params }) => {
  // Find the project based on the slug in params.project
  const project = CaseStudyData.find((p) => p.slug === params.project);

  // Add this: Find the index of current project and determine next project
  const currentIndex = CaseStudyData.findIndex(
    (p) => p.slug === params.project
  );
  const nextProject = CaseStudyData[(currentIndex + 1) % CaseStudyData.length];

  if (!project) {
    return (
      <div className="flex justify-center items-center h-screen">
        Project not found
      </div>
    );
  }

  return (
    <Transition>
      <section className={section_styles}>
        <div className="flex flex-col w-full gap-[30vh] mb-10">
          <Link href="/projects">
            <p className="flex font-medium">All case studies</p>
          </Link>
          <div className="name_and_date flex w-full justify-between flex-col lg:flex-row gap-6">
            <h1 className={`${heading_1}`}>{project.title}</h1>
            <h1 className={`${heading_1}`}>{project.year}</h1>
          </div>
        </div>

        <div className="cover_img bg-slate-400 w-screen h-[35vh] lg:w-full lg:h-[557px] self-center">
          <Image
            src={`/medias/${project.src}`}
            className="h-full w-full object-cover"
            alt={project.title}
            width={1000}
            height={1000}
          />
        </div>

        <div className="lg:container lg:mx-auto flex flex-col gap-32 w-full">
          {/* Overview */}
          <div className="flex flex-col mt-6 lg:mt-32 justify-center gap-10 lg:w-8/12 self-center w-full">
            {/* Description */}
            <p className="text-black font-inter font-normal text-lead text-3xl ">
              {project.description}
            </p>

            <div className="flex-col justify-start items-start inline-flex w-full">
              <div className="self-stretch py-4 border-b border-black justify-start inline-flex">
                <p className="w-[50vw] lg:w-[302px] text-black text-lg lg:text-2xl ">
                  Client
                </p>
                <p className="text-black text-lg lg:text-2xl text-left w-[50vw]">
                  {project.title}
                </p>
              </div>
              <div className="self-stretch py-4 border-b border-black justify-start inline-flex">
                <p className="w-[50vw] lg:w-[302px] text-black text-lg lg:text-2xl">
                  Year
                </p>
                <p className="text-black text-lg lg:text-2xl text-left w-[50vw]">
                  {project.year}
                </p>
              </div>
              <div className="self-stretch py-4 border-b border-black justify-start inline-flex">
                <p className="w-[50vw] lg:w-[302px] text-black text-lg lg:text-2xl">
                  Service
                </p>
                <p className="text-black text-lg lg:text-2xl text-left w-[50vw]">
                  {project.service}
                </p>
              </div>
            </div>

            {project.url && (
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start"
              >
                <div className="self-start h-[47px] px-8 py-4 bg-black rounded-[64px] border border-black justify-center items-center gap-4 inline-flex">
                  <div className="text-white text-base font-medium uppercase">
                    Visit Website
                  </div>
                </div>
              </Link>
            )}
          </div>

          {/* Challenges & Solutions */}
          <div className="flex flex-col gap-20 lg:w-8/12 lg:self-center ">
            {/* Challenges */}
            {project.challenge ? (
              <div className="w-full flex flex-col justify-start items-start gap-6">
                <h2 className={`${heading_2}`}>Challenge</h2>
                <div className={`${text_lg}`}>{project.challenge}</div>
              </div>
            ) : null}

            {/* Solutions */}
            {project.solution ? (
              <div className="w-full flex flex-col justify-start items-start gap-10">
                <div className={`${heading_2}`}>Solution</div>
                <div className={`${text_lg}`}>{project.solution}</div>
              </div>
            ) : null}

            {project.solution ? (
              <div className="cover_img bg-slate-400 w-screen h-[35vh] lg:w-full lg:h-[60vh] self-center">
                <Image
                  src={`/medias/${project.src}`}
                  className="h-full w-full object-cover"
                  alt={project.title}
                  width={1000}
                  height={1000}
                />
              </div>
            ) : null}

            {/* outcome visuals */}
            <div className="w-full py-6 justify-between items-center inline-flex">
              <Link href="/">
                <p className="text-black text-base font-medium capitalize tracking-tight">
                  Back to home
                </p>
              </Link>
              <div className="justify-center items-center gap-3 flex">
                <Link href={`/projects/${nextProject.slug}`}>
                  <button className="text-grey_1 text-base font-medium capitalize tracking-tight">
                    Next Project
                  </button>
                </Link>
                <div className="w-6 h-6 flex-col justify-start items-start inline-flex">
                  <div className="w-6 h-6 bg-black" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Transition>
  );
};

export default memo(page);
