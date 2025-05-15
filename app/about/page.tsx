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
import SectionHeader from "@/components/SectionHeader";
import AnimatedText from "@/components/Animations/AnimatedText";

export default function About() {
  const container = useRef<HTMLDivElement>(null);
  const ref = useRef(null);
  const heroImgRef = useRef<HTMLDivElement>(null);
  const aboutMe = "Hi I'm Eric,  a product designer with a background in development. As designer I play an active role in the product development process, from shaping ideas, designing end-to-end flows, and collaborating with cross-functional teams to deliver elegant solutions that drive impact. Recently, I’ve contributed to the EV sector, crafting digital experiences for a globally renowned luxury vehicle brand. I'm fluent in tools like Figma & design systems, React.js, React Native, Next.js, HTML/CSS, JavaScript, and TailwindCSS. I am a self-driven, self-motivated designer with a growth mindset. Right now, I run a newly founded Design Studio where I help startups and modern businesses build bold, high-impact digital products.";

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
        duration: 1.8,
        ease: "hop",
      });
      gsap.from(".about-portrait", {
        delay: 1,
        duration: 1,
        scale: 1.2,
        transformOrigin: "center center",
        ease: "ExpoScaleEase",
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
                loading="eager"
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
                <AnimatedText
                  text={
                    "Product Designer with over 8 years of experience across design and development."
                  }
                  tag="h2"
                  className="title text-Lace_Veil text-4xl lg:text-[40px] font-medium"
                  delay={0.8}
                  duration={1.4}
                  stagger={0.1}
                  once={false}
                  // reverseAnimation={true}
                  // reverseDelay={0}
                  // reverseDuration={0.4}
                  animationType="words"
                  mask={true}
                />
              </div>

              <div className={`col-start-1 col-span-9 flex flex-col gap-6`}>
                <AnimatedText
                  text={aboutMe}
                  tag="h2"
                  className="text-Lace_Veil text-2xl"
                  delay={2}
                  duration={1.4}
                  stagger={0.2}
                  animationType="lines"
                  mask={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hero">
        <div
          className="about-hero-img w-screen h-[80vh] lg:h-screen overflow-hidden my-32 relative"
          ref={heroImgRef}
        >
          <Image
            src="/about/hero_bg.jpg"
            alt="Portrait"
            fill
            className="hero_bg object-cover"
            priority
            loading="eager"
          />
        </div>
      </section>

      {/* Work experience */}
      <section className="flex flex-col w-full min-h-screen bg-slate-300t">
        <div className="flex w-full ">
          <div className="w-full text-Lace_Veil overflow-hidden" ref={ref}>
            <SectionHeader sectionTitle={"Work Experience"} />
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
