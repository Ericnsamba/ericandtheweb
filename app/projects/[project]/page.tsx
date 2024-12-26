"use client";
import React, { FC, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { CaseStudyData } from "@/data/caseStudyData";
import Transition from "@/components/Transition";
import { heading_1, heading_2, section_styles, text_lg } from "@/utils/styles";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import "./styles.scss";
import ProjectHero from "@/components/ProjectHero";
import TextImageReveal from "@/components/Animations/TextImageReveal";
import { div, section } from "framer-motion/client";

interface PageProps {
  params: {
    project: string;
  };
}

const ProjectDetails: FC<PageProps> = ({ params }) => {
  const project = CaseStudyData.find((p) => p.slug === params.project);
  const imgContainerRef = useRef<HTMLDivElement | null>(null);
  const profileImgRef = useRef<HTMLImageElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  // useGSAP(() => {
  //   gsap.registerPlugin(CustomEase, ScrollTrigger);

  //   gsap.set(".scaleDown", { xPercent: -50, yPercent: -50 });
  //   gsap.to(".scaleDown", {
  //     width: "100vw",
  //     height: "60vh",
  //     y: 200,
  //     scrollTrigger: {
  //       trigger: ".top_section",
  //       pin: ".top_section",
  //       scrub: true,
  //       // start: "top top",
  //       // end: "+=150%",
  //       // markers: true,
  //     },
  //   });

  //   gsap.to(imgContainerRef.current, {
  //     opacity: 1,
  //     y: 0,
  //     width: "100%",
  //     duration: 1,
  //     scrollTrigger: {
  //       trigger: imgContainerRef.current,
  //       start: "top 80%",
  //       end: "top 30%",
  //       toggleActions: "play none none reverse",
  //     },
  //   });

  //   // // Create a timeline for smoother animation sequencing
  //   // const tl = gsap.timeline({
  //   //   scrollTrigger: {
  //   //     trigger: sectionRef.current,
  //   //     start: "top 50%",
  //   //     end: "+=1500", // Longer scroll duration for smoother animation
  //   //     scrub: 1.5, // Increased scrub value for smoother movement
  //   //     markers: true,
  //   //     pin: sectionRef.current, // Pin the section while animating
  //   //     anticipatePin: 1, // Helps prevent page jump
  //   //   },
  //   // });

  //   // // Initial setup - hide title elements
  //   // gsap.set(".fade-out", { opacity: 1 });

  //   // // Add animations to timeline
  //   // tl.to(".fade-out", {
  //   //   opacity: 0,
  //   //   duration: 0.3,
  //   //   ease: "power2.inOut",
  //   // })
  //   //   .to(
  //   //     imgContainerRef.current,
  //   //     {
  //   //       width: "100vw",
  //   //       height: "60vh",
  //   //       y: "10vh", // Move down slightly
  //   //       scale: 1.2,
  //   //       duration: 1,
  //   //       ease: "power2.inOut",
  //   //     },
  //   //     "-=0.3"
  //   //   ) // Overlap with previous animation
  //   //   .to(
  //   //     ".profile_img",
  //   //     {
  //   //       scale: 1.1,
  //   //       duration: 0.5,
  //   //       ease: "power2.inOut",
  //   //     },
  //   //     "-=0.8"
  //   //   );
  // }, []);

  const currentIndex = CaseStudyData.findIndex(
    (p) => p.slug === params.project
  );
  const nextProject = CaseStudyData[(currentIndex + 1) % CaseStudyData.length];

  // Ensure project is defined before rendering
  if (!project) {
    return <div>Project not found</div>; // Handle the case where project is undefined
  }

  return (
    <div className={`${section_styles} lg:w-[85%] lg:mx-auto`}>
      <ProjectHero
        imageURL={`/medias/${project.src}`}
        title={project.title}
        year={project.year}
      />

      {project.restricted ? (
        <section className="restricted py-20 min-h-screen">
          <div className="lg:container lg:mx-auto flex flex-col gap-6 min-h-[342px] w-full p-6 bg-[#D7D5D5] rounded-xl">
            <p className="heading font-medium text-3xl">
              It seems you don’t have access to view this.
            </p>
            <p className="restricted_text text-3xl font-normal">
              This project is currently a work in progress and remains under
              wraps for now. Stay tuned for updates and a closer look once it’s
              ready to be revealed!
            </p>
          </div>
        </section>
      ) : (
        <>
          <section className="flex flex-col w-full">
            {/* Overview */}
            <div className="flex flex-col mt-6 lg:my-32 justify-center gap-10 self-center w-full">
              {/* Description */}
              <p className="text-Lace_Veil font-inter font-normal text-lead text-3xl ">
                {project.description}
              </p>

              <div className="flex-col justify-start items-start inline-flex w-full lg:w-7/12">
                <div className="self-stretch py-4 border-b border-Lace_Veil justify-start inline-flex">
                  <p className="w-[50vw] lg:w-[302px] text-Lace_Veil text-lg lg:text-2xl ">
                    Client
                  </p>
                  <p className="text-Lace_Veil text-lg lg:text-2xl text-left w-[50vw]">
                    {project.title}
                  </p>
                </div>
                <div className="self-stretch py-4 border-b border-Lace_Veil justify-start inline-flex">
                  <p className="w-[50vw] lg:w-[302px] text-Lace_Veil text-lg lg:text-2xl">
                    Year
                  </p>
                  <p className="text-Lace_Veil text-lg lg:text-2xl text-left w-[50vw]">
                    {project.year}
                  </p>
                </div>
                <div className="self-stretch py-4 border-b border-Lace_Veil justify-start inline-flex">
                  <p className="w-[50vw] lg:w-[302px] text-Lace_Veil text-lg lg:text-2xl">
                    Service
                  </p>
                  <p className="text-Lace_Veil text-lg lg:text-2xl text-left w-[50vw]">
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
                  <div className="self-start h-[47px] px-8 py-4 bg-black rounded-[64px] border border-Lace_Veil justify-center items-center gap-4 inline-flex">
                    <div className="text-white text-base font-medium uppercase">
                      Visit Website
                    </div>
                  </div>
                </Link>
              )}
            </div>

            {/* Challenges & Solutions */}
            <div className="flex flex-col">
              {/* Challenges */}
              {project.challenge ? (
                <>
                  <div className="imagesContainer flex flex-col gap-10 w-screen lg:w-full self-center">
                    <div className="h-[600px] w-full">
                      <Image
                        src={`/medias/${project.src}`}
                        className="h-full w-full object-cover"
                        alt={project.title}
                        width={1000}
                        height={1000}
                      />
                    </div>
                    <div className="h-[600px] w-full">
                      <Image
                        src={`/medias/${project.src}`}
                        className="h-full w-full object-cover"
                        alt={project.title}
                        width={1000}
                        height={1000}
                      />
                    </div>
                  </div>
                  <div className="copy w-full flex flex-col justify-start items-start gap-6 my-10 lg:my-32">
                    <p className={`${text_lg}`}>{project.challenge}</p>
                  </div>
                </>
              ) : null}

              {/* Solutions */}
              {project.solution ? (
                <>
                 

                  <div className="imagesContainer flex flex-col gap-10 w-screen lg:w-full self-center">
                    <div className="h-[600px] w-full">
                      <Image
                        src={`/medias/${project.src}`}
                        className="h-full w-full object-cover"
                        alt={project.title}
                        width={1000}
                        height={1000}
                      />
                    </div>
                    <div className="h-[600px] w-full">
                      <Image
                        src={`/medias/${project.src}`}
                        className="h-full w-full object-cover"
                        alt={project.title}
                        width={1000}
                        height={1000}
                      />
                    </div>
                  </div>

                  <div className="copy w-full flex flex-col justify-start items-start my-10 lg:my-32">
                    <p className={`${text_lg}`}>{project.solution}</p>
                  </div>
                </>
              ) : null}
            </div>
          </section>
        </>
      )}

      {/* Footer */}
      <div className="w-full py-6 justify-center items-center flex flex-col min-h-[50vh]">
        <p className="text-Lace_Veil text-base font-medium uppercase tracking-tight">
          Next Project
        </p>
        <div className="justify-center items-center gap-3 flex">
          <Link href={`/projects/${nextProject.slug}`}>
            <TextImageReveal
              title1={nextProject.title1}
              title2={nextProject.title2}
              src={`/medias/${nextProject.src}`}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
