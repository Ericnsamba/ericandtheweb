"use client";
import JobPosition from "@/components/JobPosition";
import Transition from "@/components/Transition";
import Word from "@/components/Animations/Word";
import jobPositions from "@/data/jobPositions";
import { heading_2
  , section_styles} from "@/utils/styles";
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

export default function About() {
  const ref = React.useRef(null);

  useGSAP(() => {
    let revealContainer = document.querySelector(".reveal_overlay");
    if (revealContainer) {
      let image = revealContainer.querySelector(".profile_img");
      gsap.set(revealContainer, { autoAlpha: 1 });
      gsap.to(revealContainer, {
        duration: 0.8,
        y: "100%",
        ease: "expoScale(0.5,7, none)",
        // ease: "Power2.out",
        transformOrigin: "bottom",
      });
      //
      gsap.from(".profile_img", {
        // scale: 1.3,
        // ease: "Power2.out",
        // duration: 1.5,
        // delay: 1.5,
      });
    }
  });

  const paragraph =
    "I am always pushing the boundaries of what's possible in user-centered design. My work spans across the FinTech sector, where I've crafted solutions for industry leaders like Generali, Boston Partners, Hermes, and JP Morgan—transforming complex challenges into elegant, user-focused digital products.";
  return (
    <Transition>
      <div className={`${section_styles}`}>
        <div className="flex flex-col ">
          <div className="flex w-full bg-slate-400t justify-between gap-10 mb-[34vh] flex-col lg:flex-row overflow-hidden">
            <div className="w-full lg:w-6/12 flex flex-col">
              <AnimatedTitle
                title={"Driven by a passion for innovation"}
                className={heading_2 + ""}
              />
            </div>

            <div className="imgContainer w-[360px] h-[420px] overflow-hidden">
              <div className="reveal_overlay w-[360px] h-[420px] bg-background absolute" />
              <Image
                src="/medias/hero_eric.jpg"
                alt="hero image"
                objectFit="cover"
                width={1000}
                height={1000}
                className="profile_img"
                data-scroll
                data-scroll-speed="-2"
              />
            </div>
          </div>

          <div className="lg:grid lg:grid-cols-12 w-full ">
            <div className={`col-start-1 col-span-9`}>
              <SlideUpWords phrase={paragraph} className="" />
            </div>
          </div>
        </div>

        {/* Work experience */}
        <section className="flex flex-col w-full">
          <div className="flex w-full mb-[24vh]">
            <div
              className="w-full text-black lg:w-6/12 overflow-hidden"
              ref={ref}
            >
              <div className=" w-4/12">
                <AnimatedTitle
                  title={" Work Experience"}
                  className={heading_2 + ""}
                />
              </div>
            </div>
          </div>

          <div className="lg:grid lg:grid-cols-12 w-full pb-16 ">
            <div className="col-start-3 col-end-11">
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
