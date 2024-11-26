"use client";
import JobPosition from "@/components/JobPosition";
import Transition from "@/components/Transition";
import Word from "@/components/Animations/Word";
import jobPositions from "@/data/jobPositions";
import {
  heading_1,
  heading_2,
  heading_3,
  section_styles,
} from "@/utils/styles";
import Image from "next/image";
import React from "react";
import AnimatedTitle from "@/components/Animations/AnimatedTitle";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./styles.scss";
import SlideUpWords from "@/components/Animations/Word/SlideUpWords";
import { motion } from "framer-motion";
import ScrollTrigger from "gsap/ScrollTrigger";
import Parallax from "@/components/Parallax";
import { CustomEase } from "gsap/CustomEase";
import TextImageReveal from "@/components/Animations/TextImageReveal";
import SectionHeader from "@/components/SectionHeader";

export default function About() {
  const ref = React.useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(CustomEase);
    let revealContainer = document.querySelector(".reveal_overlay");
    if (revealContainer) {
      let image = revealContainer.querySelector(".profile_img");
      gsap.set(revealContainer, { autoAlpha: 1 });
      gsap.to(revealContainer, {
        duration: 2.5,
        y: "100%",
        ease: CustomEase.create(
          "custom",
          "M0,0 C0.11,0.494 0.163,0.78 0.3,0.9 0.397,0.986 0.504,1 1,1 "
        ),
        transformOrigin: "bottom",
        markers: true,
      });
    }
  });

  const paragraph =
    "I am always pushing the boundaries of what's possible in user-centered design. My work spans across the FinTech sector, where I've crafted solutions for industry leaders like Generali, Boston Partners, Hermes, and JP Morgan—transforming complex challenges into elegant, user-focused digital products.";
  const headerStyle =
    "text-black text-[40px] leading-[48px] lg:text-[56px] font-medium lg:leading-[64px] tracking-wider ";
  return (
    <Transition>
      <div className={`${section_styles} gap-32`}>
        <section className="flex flex-col gap-20 min-h-[calc(100vh-14vh)] w-full  justify-between">
          <div className="flex w-full min-h-[86vh] self-stretch justify-between gap-10 flex-col lg:flex-row overflow-hidden">
            <div className="left_col flex flex-col gap-2">
              <div className="imgContainer relative flex flex-col w-[360px] h-[547px] overflow-hidden self-end">
                <div className="reveal_overlay absolute inset-0 w-full h-full bg-background" />
                <Image
                  src="/medias/hero_eric.jpg"
                  alt="hero image"
                  objectFit="cover"
                  width={1000}
                  height={1000}
                  className="profile_img self-end"
                  data-scroll
                  data-scroll-speed="-2"
                />
                <div className="image_footer w-full h-6 justify-between items-center inline-flex bg-background pt-2">
                  <div className="SelfPortrait text-neutral-800 text-sm font-bold uppercase leading-normal">
                    self portrait
                  </div>
                  <div className=" text-neutral-800 text-sm font-bold uppercase leading-normal">
                    2024
                  </div>
                </div>
              </div>
            </div>

            {/* right_col */}
            <div className="right_col w-full lg:w-8/12 flex flex-col gap-10 justify-between">
              <div className="flex flex-col gap-10">
                <div className="flex w-full bg-teal-300t justify-between items-end">
                  <div className="info w-fit flex flex-col justify-start items-start self-end">
                    <p className="text-Brand-Black text-base font-bold uppercase ">
                      Eric Manasse
                    </p>
                    <p className="text-Brand-Black text-base font-bold uppercase ">
                      London, uk
                    </p>
                    <p className="text-Brand-Black text-base font-bold uppercase ">
                      @ericandtheweb
                    </p>
                  </div>

                  <p className="text-Brand-Black text-base font-bold uppercase ">
                    Hello@ericandtheweb.com
                  </p>
                </div>

                <div className={`col-start-1 col-span-9 flex flex-col gap-6`}>
                  {/* <p className="text-4xl font-bold">Designer, Developer</p> */}
                  <SlideUpWords
                    phrase={"Designer, Developer"}
                    className="text-2xl"
                  />
                  <SlideUpWords phrase={paragraph} className="text-2xl" />
                </div>
              </div>
              <div className="right_footer flex items-end justify-end pb-6">
                {/* <AnimatedTitle
                  title={"About"}
                  className={"text-base uppercase self-end w-full"}
                  // className={heading_3 + " uppercase self-end w-full"}
                /> */}
                <TextImageReveal
                  title1={"ab"}
                  title2={"out"}
                  src="/medias/hero_eric.jpg"
                />
              </div>
            </div>
          </div>

          {/* <div className="lg:grid lg:grid-cols-12 w-full flex mt-10"> */}
          {/* <div className="section_footer w-full flex  justify-between pb-6 bg-orange-200b">
            <AnimatedTitle
              title={"About"}
              className={heading_3 + " uppercase "}
            />
            <div className="flex items-end ">
              <div className="dot w-3 h-3 bg-black mb-4 mr-2" />
              <AnimatedTitle
                title={"emn"}
                className={heading_3 + " uppercase font-bold"}
              />
            </div>
          </div> */}
        </section>

        {/* Work experience */}
        <section className="flex flex-col w-full">
          <div className="flex w-full ">
            <div className="w-full text-black overflow-hidden" ref={ref}>
              <div className=" w-full">
                <SectionHeader sectionTitle={" Work Experience"} />
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
    </Transition>
  );
}
