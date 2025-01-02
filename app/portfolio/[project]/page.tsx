"use client";
import React, { FC, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { CaseStudyData } from "@/data/caseStudyData";
import { section_styles } from "@/utils/styles";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import "./styles.scss";
import ProjectHero from "@/components/ProjectHero";
import TextImageReveal from "@/components/Animations/TextImageReveal";
import SlideUpWords from "@/components/Animations/Word/SlideUpWords";
import { restrictedMessage, restrictedTitle } from "./content";
// import { div, section } from "framer-motion/client";
// import MenuLinks from "@/components/MenuLinks";

interface PageProps {
  params: {
    project: string;
  };
}

const ProjectDetails: FC<PageProps> = ({ params }) => {
  const project = CaseStudyData.find((p) => p.slug === params.project);
  // const profileImgRef = useRef<HTMLImageElement | null>(null);
  // const sectionRef = useRef<HTMLElement | null>(null);
  const heroImgRef = useRef<HTMLDivElement | null>(null);
  const imgRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(CustomEase, ScrollTrigger);
    CustomEase.create(
      "hop2",
      "M0,0 C0.354,0 0.464,0.133 0.498,0.502 0.532,0.872 0.651,1 1,1"
    );

    if (heroImgRef.current) {
      const heroImg = heroImgRef.current.querySelector(".hero_bg");
      if (heroImg) {
        ScrollTrigger.create({
          trigger: heroImgRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          onUpdate: (self) => {
            const scale = 1 + self.progress * 0.5;
            gsap.to(heroImg, {
              scale: scale,
              ease: "none",
              duration: 0.1,
            });
          },
        });
      }
    }
  }, []);

  useGSAP(() => {
    imgRefs.current.forEach((img) => {
      gsap.fromTo(
        img,
        { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" },
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: img,
            start: "top 50%",
          },
        }
      );
    });
  }, []);

  const currentIndex = CaseStudyData.findIndex(
    (p) => p.slug === params.project
  );
  const nextProject = CaseStudyData[(currentIndex + 1) % CaseStudyData.length];

  // Ensure project is defined before rendering
  if (!project) {
    return <div>Project not found</div>; // Handle the case where project is undefined
  }
  // console.log("🚀 ~ project:", `/${project.slug}/${project.img_1}`);
  return (
    <div className={`${section_styles} lg:w-[85%] lg:mx-auto`}>
      <ProjectHero
        imageURL={`/${project.slug}/${project.src}`}
        title={project.title}
        year={project.year}
      />

      {project.restricted ? (
        <section className="restricted py-20">
          <div className="lg:container lg:mx-auto flex flex-col gap-6 min-h-[342px] w-full p-10 bg-[#2F2F2F] rounded-xl">
            <SlideUpWords
              phrase={restrictedTitle}
              className="font-[800] text-2xl"
            />
            <SlideUpWords
              phrase={restrictedMessage}
              className="restricted_text font-medium"
            />
          </div>
        </section>
      ) : (
        <>
          <section className="flex flex-col w-full">
            {/* Overview */}
            <div className="flex flex-col mt-6 lg:my-32 justify-center gap-10 self-center w-full">
              {/* Description */}
              <SlideUpWords
                phrase={project.description}
                className="text-Lace_Veil text-2xl lg:text-3xl font-medium"
              />

              <div className="flex-col justify-start items-start inline-flex w-full lg:w-7/12">
                <div className="self-stretch py-4 border-b border-Lace_Veil justify-start inline-flex">
                  <p className="w-[50vw] lg:w-[302px] text-Lace_Veil text-lg">
                    Client
                  </p>
                  <p className="text-Lace_Veil text-lg text-left w-[50vw] capitalize">
                    {project.title}
                  </p>
                </div>
                <div className="self-stretch py-4 border-b border-Lace_Veil justify-start inline-flex">
                  <p className="w-[50vw] lg:w-[302px] text-Lace_Veil text-lg">
                    Year
                  </p>
                  <p className="text-Lace_Veil text-lg text-left w-[50vw]">
                    {project.year}
                  </p>
                </div>
                <div className="self-stretch py-4 border-b border-Lace_Veil justify-start inline-flex">
                  <p className="w-[50vw] lg:w-[302px] text-Lace_Veil text-lg">
                    Service
                  </p>
                  <p className="text-Lace_Veil text-lg text-left w-[50vw]">
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

            {/* images */}
            <div className="imagesContainer flex flex-col gap-16 w-screen lg:w-full self-center pt-10">
              {project.img_1 && (
                <div
                  className="img img-1 h-[300px] lg:h-[780px] w-full"
                  ref={(el) => {
                    imgRefs.current[1] = el;
                  }}
                >
                  <Image
                    src={`/${project.slug}/${project.img_1}`}
                    className="h-full w-full object-cover"
                    alt={project.title}
                    width={1000}
                    height={1000}
                  />
                </div>
              )}

              {project.img_2 && (
                <div
                  className="img img-2 h-[300px] lg:h-[780px] w-full"
                  ref={(el) => {
                    imgRefs.current[2] = el;
                  }}
                >
                  <Image
                    src={`/${project.slug}/${project.img_2}`}
                    className="h-full w-full object-cover"
                    alt={project.title}
                    width={1000}
                    height={1000}
                  />
                </div>
              )}
              {project.img_3 && (
                <div
                  className="img img-3 h-[300px] lg:h-[780px] w-full"
                  ref={(el) => {
                    imgRefs.current[3] = el;
                  }}
                >
                  <Image
                    src={`/${project.slug}/${project.img_3}`}
                    className="h-full w-full object-cover"
                    alt={project.title}
                    width={1000}
                    height={1000}
                  />
                </div>
              )}
            </div>
          </section>
        </>
      )}

      {/* Footer */}
      <div className="w-full py-6 justify-center items-center flex flex-col min-h-[50vh]">
        <p className="text-grey_2 font-medium text-lg">Next Project</p>
        <div className="justify-center items-center gap-3 flex">
          <Link href={`/portfolio/${nextProject.slug}`}>
            <TextImageReveal
              title1={nextProject.title1}
              title2={nextProject.title2}
              src={`/${nextProject.slug}/${nextProject.src}`}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
