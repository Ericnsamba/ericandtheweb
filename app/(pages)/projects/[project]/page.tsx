"use client";
import React, { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { CaseStudyData } from "@/data/caseStudyData";

interface props {
  params: {};
}

const page: FC<props> = ({ params }) => {
  // Find the project based on the slug in params.project
  // Find the project based on the slug in params.project
  const project = CaseStudyData.find((p) => p.slug === params.project);

  if (!project) {
    return (
      <div className="flex justify-center items-center h-screen">
        Project not found
      </div>
    );
  }
  //
  console.log("🚀 ~ page ~ params:", params);
  console.log("🚀 ~ page ~ project:", project);
  console.log("🚀 ~ page ~ projects:", CaseStudyData);

  return (
    <div className="flex flex-col min-h-screen w-full pt-[20vh] px-20">
      <div className="flex flex-col gap-[30vh] mb-10">
        <Link href="/projects">
          <div className="flex">All case studies</div>
        </Link>
        <div className="name_and_date flex w-full justify-between">
          <h1 className="text-9xl uppercase">{project.title}</h1>
          <h1 className="text-9xl uppercase">{project.year}</h1>
        </div>
      </div>

      <div className="cover_img bg-slate-400 w-full h-[60vh]">
        <Image
          src={`/medias/${project.src}`}
          className="h-full w-full object-cover"
          alt={project.title}
          width={1000}
          height={1000}
        />
      </div>

      <div className="container mx-auto flex flex-col">
        {/* Overview */}
        <div className="flex flex-col mt-32 justify-center gap-10 w-8/12 self-center">
          {/* Description */}
          <p className="text-black font-inter font-normal text-lead text-4xl leading-[44px]">
            {project.description}
          </p>

          <div className="flex-col justify-start items-start inline-flex w-full">
            <div className="self-stretch py-4 border-b border-[#0e0f12] inline-flex">
              <div className="w-[302px] text-[#161310] text-2xl">Client</div>
              <div className="text-[#0e0f12] text-2xl">{project.title}</div>
            </div>
            <div className="self-stretch py-4 border-b border-[#0e0f12] inline-flex">
              <div className="w-[302px] text-[#161310] text-2xl">Year</div>
              <div className="text-[#161310] text-2xl">{project.year}</div>
            </div>
            <div className="self-stretch py-4 border-b border-[#0e0f12] inline-flex">
              <div className="w-[302px] text-[#161310] text-2xl">Service</div>
              <div className="text-[#161310] text-2xl">{project.service}</div>
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
        <div className="flex flex-col lg:gap-20 w-8/12 self-center mt-[30vh]">
          {/* Challenges */}
          {project.challenge ? (
            <div className="w-full flex flex-col justify-start items-start gap-6">
              <div className="text-black text-7xl font-medium uppercase">
                Challenge
              </div>
              <div className="text-black text-[32px] font-normal">
                {project.challenge}
              </div>
            </div>
          ) : null}

          {/* Solutions */}
          {project.solution ? (
            <div className="w-full flex flex-col justify-start items-start gap-10">
              <div className="text-black text-7xl font-medium uppercase">
                Solution
              </div>
              <div className="text-black text-[32px] font-normal">
                {project.solution}
              </div>
            </div>
          ) : null}
        </div>
        {/* spacer */}
        <div className="spacer h-[10vh]" />
      </div>
    </div>
  );
};

export default memo(page);
