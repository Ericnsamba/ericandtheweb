"use client";
import React, { useEffect, useRef } from "react";
import JobPosition from "@/components/JobPosition";
import jobPositions from "@/data/jobPositions";
import { section_styles } from "@/utils/styles";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./styles.scss";
import SlideUpWords from "@/components/Animations/Word/SlideUpWords";
import SectionHeader from "@/components/SectionHeader";
import AnimatedTitle from "@/components/Animations/AnimatedTitle";
// import TextImageReveal from "@/components/Animations/TextImageReveal";
// import Footer from "@/components/Footer/Footer";

export default function About() {
  const container = useRef<HTMLDivElement>(null);
  // const aboutCopyRef = useRef(null);
  const ref = useRef(null);
  const heroImgRef = useRef<HTMLDivElement>(null);

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

  useGSAP(
    () => {
      gsap.registerPlugin(CustomEase);
      gsap.to(".about-portrait", {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        delay: 0.6,
        duration: 1.2,
        ease: "hop",
      });

      gsap.to(".about-copy-wrapper .about-copy-title h1", {
        y: 0,
        delay: 1,
        duration: 1.5,
        ease: "power4.out",
      });
    },
    { scope: container }
  );

  return (
    <div className={`${section_styles} gap-32`} ref={container}>
      <section className="flex flex-col gap-20 min-h-[calc(100vh-14vh)] w-full  justify-between">
        <div className="flex w-full min-h-[86vh] self-stretch gap-32 flex-col lg:flex-row overflow-hidden">
          {/* left col */}
          <div className="left_col flex flex-col gap-2">
            <div className="imgContainer relative flex flex-col w-full lg:w-[360px] h-[547px] overflow-hidden self-end">
              <Image
                src="/medias/hero_eric.jpg"
                alt="hero image"
                objectFit="cover"
                width={1000}
                height={1000}
                className="about-portrait self-end"
              />
              <div className="image_footer w-full h-6 justify-between items-center inline-flex bg-background pt-2">
                <p className="SelfPortrait text-Lace_Veil text-sm font-bold uppercase leading-normal">
                  self portrait
                </p>
                <p className=" text-Lace_Veil text-sm font-bold uppercase leading-normal">
                  2024
                </p>
              </div>
            </div>
          </div>

          {/* right_col */}
          <div className="right_col w-full lg:w-6/12 flex flex-col gap-10 lg:gap-32 justify-between bg-red-200t">
            <div className="flex flex-col gap-10 lg:gap-32">
              <div className="about-copy-title lg:max-w-[80%]">
                <AnimatedTitle
                  title={
                    "Product Designer with over 8 years of experience across design and development."
                  }
                  className={"title text-Lace_Veil text-4xl lg:text-[40px] font-medium"}
                />
              </div>

              <div className={`col-start-1 col-span-9 flex flex-col gap-6`}>
                <SlideUpWords
                  phrase={
                    "Hi, I’m Eric Manasse, a Product Designer & Developer based in London. I’ve worked across industries, from creating asset management platforms for financial firms to designing innovative solutions for startups. Recently, I’ve contributed to the EV sector, crafting digital experiences for a globally renowned luxury vehicle brand. With a background in software development, I excel at bridging design and development, ensuring features are both visually engaging and technically feasible."
                  }
                  className="text-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hero">
        <div
          className="about-hero-img w-screen h-[75vh] overflow-hidden my-32 relative"
          ref={heroImgRef}
        >
          <Image
            src="/about/hero_bg.jpg"
            alt="Portrait"
            fill
            className="hero_bg object-cover"
            priority
          />
        </div>
      </section>

      {/* Work experience */}
      <section className="flex flex-col w-full min-h-screen bg-slate-300t">
        <div className="flex w-full ">
          <div className="w-full text-Lace_Veil overflow-hidden" ref={ref}>
            <div className=" w-full">
              <SectionHeader sectionTitle={"Work Experience"} />
            </div>
          </div>
        </div>

        <div className="flex justify-end w-full pb-16 ">
          <div className="w-full lg:w-1/2">
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
  );
}
