"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import Image from "next/image";
import EricPhoto from "../../../public/assets/images/Hero_image.jpg";
import Link from "next/link";
// import Splitting from "splitting";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import "./about.css";
import { sanityClient } from "../../../utils/client";
import { SplitTextContent } from "../../../utils/splitTextContent";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);
function About() {
  const titleRef = useRef(null);
  const component = useRef(null);
  const slider = useRef();
  const bioCopy = useRef(null);
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "workExperience"]`)
      .then(setExperiences)
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useLayoutEffect(() => {
    const timeLine = gsap.timeline({ paused: true });
    const sections = gsap.utils.toArray(".sectionBlock");
    const vw = (coef: number) => window.innerWidth * (coef / 100);
    const vh = (coef: number) => window.innerHeight * (coef / 100);

    let ctx = gsap.context(() => {
      //
      ScrollTrigger.create({
        // markers: true,
        animation: timeLine,
        scrub: 1,
        start: "top top",
        trigger: ".main",
        pin: ".content",
        // pinSpacing: false,
        // end: `${vh(150)}`,
        end: "+=500",
      });

      // let panels = gsap.utils.toArray(".panel");
      // gsap.to(panels, {
      //   xPercent: -100 * (panels.length - 1),
      //   ease: "none",
      //   scrollTrigger: {
      //     markers: true,
      //     start: "top 20%",
      //     trigger: slider.current,
      //     pin: true,
      //     scrub: 1,
      //     snap: 1 / (panels.length - 1),
      //     // pinSpacing: false,
      //     end: () => "+=" + slider.current.offsetWidth,
      //   },
      // });

      // ScrollTrigger.refresh();

      let desktopTL = gsap.timeline({
        scrollTrigger: {
          trigger: ".marquee",
          start: "top center",
          // start: "top 40%",
          scrub: 7,
          // markers: true,
        },
      });

      desktopTL.fromTo(
        ".first",
        {
          // duration: 12,
          // xPercent: -60
        },
        {
          xPercent: 0,
          scrollTrigger: {
            trigger: ".marquee",
            start: "top 40%",
            // start: "top 40%",
            scrub: 7,
            // markers: true,
          },
        }
      );

      const marqueeElements = document.querySelectorAll(".marquee__inner");

      animatedParagraph();
      sectionAnimation();
      // headerAnimation();
    });

    return () => ctx.revert();
    //
  }, []);

  const sectionAnimation = () => {
    const container = document.getElementById("container");

    if (!container) {
      console.error("Could not find element with ID 'section__container'");
      return;
    }

    gsap.to(container, {
      xPercent: -100,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: true,
        // scrub: 4,
        // snap: true,
        // start: "top top",
        end: () => "+=" + container.offsetWidth,
      },
    });
  };

  function createMarquee(speed: number) {
    const marqueeElements = document.querySelectorAll(".marquee__inner");

    let currentPosition = 0;
    function animateMarquee() {
      gsap.to(marqueeElements, {
        duration: speed,
        x: (currentPosition -= 10),
        modifiers: {
          x: gsap.utils.wrap(-marqueeElements[0].clientWidth, 0),
          // OR x: gsap.utils.wrap(-marqueeElements[0].scrollWidth, 0),
        },
        onComplete: animateMarquee,
      });
    }

    animateMarquee();
  }

  const cloneMyTitle = (
    numClones: number,
    containerId: string,
    title: string
  ) => {
    const container = document.getElementById(containerId);

    // console.log(`Container element with ID ".${title}"`);
    if (!container) {
      console.error(`Container element with ID "${containerId}" not found.`);
      return;
    }

    const myTitle = document.querySelector(`.${title}`);

    for (let i = 0; i < numClones; i++) {
      const clone = myTitle?.cloneNode(true);
      if (clone instanceof Node) {
        container.appendChild(clone);
      }
    }
  };

  const animatedParagraph = () => {
    if (typeof window !== "undefined") {
      SplitTextContent("#my-text", "bio_copy__word");

      const fx16Titles = document.querySelectorAll(
        ".bio_copy[data-splitting][data-effect16]"
      );

      fx16Titles.forEach((title) => {
        gsap.fromTo(
          title,
          {
            transformOrigin: "0% 50%",
            // rotate: 3,
            // y: 10,
          },
          {
            // y: 10,
            ease: "none",
            rotate: 0,
            scrollTrigger: {
              trigger: title,
              start: "top bottom",
              end: "top top",
              scrub: 1.4,
            },
          }
        );

        gsap.fromTo(
          title.querySelectorAll(".bio_copy__word"),
          {
            "will-change": "opacity",
            opacity: 0.1,
          },
          {
            color: "#212322",
            opacity: 1,
            stagger: 0.05,
            // ease: "none",
            ease: "circ.out",
            scrollTrigger: {
              trigger: title,
              // start: "top bottom-=20%",
              // start: "top center",
              end: "center top+=30%",
              // end: "center top",
              scrub: 1.4,
              pinSpacing: false,
              // markers: true,
            },
          }
        );
      });
    }
  };

  return (
    <div ref={component} className="cont">
      <div className="main">
        <motion.section
          className={`flex flex-auto h-screen overflow-hidden pt-10 bg-fuchsia-1000`}
        >
          <div
            className={`flex flex-col w-full mx-auto bg-red-2000 justify-center items-center`}
          >
            <h1 className="header font-displayText font-bold text-black">
              Product Designer
            </h1>

            <p className="text-lead font-displayText text-gray mb-5">
              Based in London
            </p>
            {/* top row */}
            <div className="flex rounded-full border-black border p-[10px] w-5/12 justify-between items-center mb-[60px]">
              <p className="font-body text-black pl-[10px]">
                hello@ericandthweb.com
              </p>
              <p className="font-body bg-green text-black p-[10px] px-[20px] text-base font-normal rounded-full">
                copy email
              </p>
            </div>

            {/* bottom row */}
            <div
              className={`here__img w-6/12 h-[626px] rounded-[120px] bg-gray p-10 items-center justify-end flex flex-col bg-no-repeat `}
            >
              <div className="bg-green text-black font-displayText text-lead px-[60px] py-10 rounded-full bg-cover">
                Eric Manasse
              </div>
            </div>
          </div>
        </motion.section>

        <div className="section2 copy bg-fuchsia-1000 flex flex-col justify-center bg-pink-200h h-[60vh]">
          <div className=" w-full lg:w-8/12 lg:mx-auto">
            <div
              id="my-text"
              ref={bioCopy}
              data-splitting
              data-effect16
              className="bio_copy font-displayText text-lead"
            >
              I have had the pleasure of working on designs for some of the
              world's leading asset managers in FinTech, including Generali,
              Boston Partners, Hermes, and CTI, during my time at Kurtosys. My
              experience and dedication to the industry make me a valuable asset
              to any team, and I am always excited for the opportunity to bring
              my skills to any company and create an impact.
            </div>
          </div>
        </div>
      </div>

      {/* ================== Horizontal scroll section ===============================*/}

      <div id="container" className="section__container pt-20">
        {/* ======== large text section */}
        <section
          className="experience__section marquee flex bg-teal-20 w-[80vw] h-screen lg:mx-auto justify-center items-start overflow-hidden mb-[60px"
          id="vertical"
        >
          {/* Years of experience and Mentor */}
          <div className="flex justify-start items-start w-[80vw] h-full bg-violet-3000">
            <div className="flex flex-col justify-between gap-5 ">
              <div
                id="marquee1"
                className="marquee__inner w-full lg:w-8/12 flex first"
              >
                <h3
                  data-splitting
                  data-effect2
                  className="myTitle lg:whitespace-nowrap .experience__title font-bold font-displayText text-[6vw] "
                >
                  <span className="gray_text text-gray pr-5">I have</span>6+
                  Years Experience
                </h3>
              </div>

              <div
                id="marquee2"
                className="marquee__inner w-full lg:w-8/12 flex second"
              >
                <h3
                  data-splitting
                  data-effect2
                  className="myTitle lg:whitespace-nowrap .mentor__title font-bold font-displayText text-[6vw]"
                >
                  <span className="gray_text text-gray pr-5">Mentored by</span>
                  <Link href="https://www.linkedin.com/in/tim-gaud/">
                    Tim Gaud
                  </Link>
                </h3>
              </div>

              <div
                id="marquee3"
                className="marquee__inner w-full lg:w-8/12 flex first"
              >
                <h3
                  data-splitting
                  data-effect2
                  className="myTitle lg:whitespace-nowrap recognition__title font-bold font-displayText text-[6vw]"
                >
                  Recognitions By
                  <span className="gray_text text-gray px-5">Muzli</span>
                  <span className="pr-3 text-green dark:text-slate-300">
                    <a href="https://medium.muz.li/made-with-studio-67-21849f2f5cc4">
                      #33
                    </a>
                  </span>
                </h3>
              </div>
              {/*  */}
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <div className="WorkExperience__section  w-[80vw] h-full bg-purple-2000 justify-start items-start flex">
          {WorkExperience(experiences)}
        </div>

        {/* <div className="spacer w-full h-full bg-fuchsia-2000"></div> */}
      </div>

      {/* <div className="spacer h-[20vh]"></div> */}
    </div>
  );
}

// WorkExperience

const WorkExperience = (experience: any) => {
  // useLayoutEffect(() => {
  //   let ctx = gsap.context(() => {
  //     // const headings = gsap.utils.toArray(".experience__inner");
  //     // let offset = 0;
  //     const headings = gsap.utils.toArray<HTMLElement>(".experience__inner");
  //     let offset = 0;

  //     if (headings.length > 0) {
  //       offset = headings[1].offsetTop - headings[0].offsetTop;
  //     }

  //     gsap.set(headings, { yPercent: 200, opacity: 0 });

  //     headings.forEach((element: any, i) => {
  //       element.anim = gsap.fromTo(
  //         element,
  //         {
  //           y: 50,
  //         },
  //         {
  //           y: 0,
  //           opacity: 1,
  //           ease: "none",
  //           scrollTrigger: {
  //             trigger: element,
  //             start: "top 60%+=" + offset / 2,
  //             toggleActions: "play reverse play reverse",
  //           },
  //         }
  //       );
  //     });
  //   });

  //   return () => ctx.revert();
  // });

  return (
    <div className="main__experiences bg-lime-2000 w-8/12 bg-purple-1000 border border-black p-20 rounded-[80px]">
      {experience
        .sort(
          (a: any, b: any) =>
            new Date(a._createdAt).getTime() - new Date(b._createdAt).getTime()
        )
        .map((proj: any, index: any) => {
          const year = proj.year;
          return (
            <div
              key={index.toString()}
              className="experience__inner flex  min-h-[100px] mb-5 border-gray border-b"
            >
              <div className="right__col flex flex_col w-full items-center lg:items-start">
                <p className="year font-displayText text-black text-[34px]">
                  {proj.jobTitle}
                </p>
              </div>
              <div className="left__col year w-full flex items-center justify-between ">
                <p className="year text-black text-lg uppercase">
                  {proj.company}
                </p>
                <p className="year text-gray text-center lg:text-left">
                  {year ? parseInt(year.substring(0, 4)) : ""}
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default About;
