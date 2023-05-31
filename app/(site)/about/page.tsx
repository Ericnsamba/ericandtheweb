"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import Link from "next/link";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import "./about.css";
import { sanityClient } from "../../../utils/client";
import { SplitTextContent } from "../../../utils/splitTextContent";
import { motion, useScroll, useTransform } from "framer-motion";
import CopyToClipboard from "../../../components/CopyToClipboard";
import { RevealAnimation } from "../../../utils/revealAnimation";

gsap.registerPlugin(ScrollTrigger);
function About() {
  const titleRef = useRef(null);
  const component = useRef(null);
  const [experiences, setExperiences] = useState([]);
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

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

    let ctx = gsap.context(() => {
      //
      ScrollTrigger.create({
        // markers: true,
        animation: timeLine,
        scrub: 1,
        start: "top top",
        trigger: ".main",
        pin: ".content",
        end: "+=500",
      });

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

      gsap.to(".hero__img", {
        backgroundPosition: "0% 80%",
        ease: "none",
        scrollTrigger: {
          trigger: ".hero__img",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          // markers: true,
        },
      });

      changeText();
      animatedParagraph();
      revealElements();
      RevealAnimation(".header", 0.4, 1.5, 120);
    });

    return () => ctx.revert();
    //
  }, []);

  const revealElements = () => {
    SplitTextContent("#large_text", "myTitle");

    const fx16Titles = document.querySelectorAll(
      ".myTitle[data-splitting][data-effect16]"
    );
    fx16Titles.forEach((title) => {
      gsap.from(title.querySelectorAll(".myTitle"), {
        // color: "#86FF73",
        opacity: 0.4,
        delay: 2,
        duration: 1.5,
        yPercent: 100,
        ease: "power4",
        stagger: 0.1,
        scrollTrigger: {
          trigger: title,
          start: "top bottom-=20%",
          scrub: 1.6,
          // pinSpacing: false,
          // markers: true,
        },
      });
    });
  };

  const animatedParagraph = () => {
    if (typeof window !== "undefined") {
      SplitTextContent("#my-text", "bio_copy__word");

      const fx16Titles = document.querySelectorAll(".bio_copy");

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
              scrub: 1.8,
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
              scrub: 1.8,
              pinSpacing: false,
              // markers: true,
            },
          }
        );
      });
    }
  };

  // header
  // const animatedHeader = () => {
  //   if (typeof window !== "undefined") {
  //     SplitTextContent("#my-header", "header__char", "char");

  //     const headerTitle = document.querySelectorAll(".header");

  //     headerTitle.forEach((title) => {
  //       gsap.fromTo(
  //         title.querySelectorAll(".header__char"),
  //         {
  //           y: 100,
  //           opacity: 0,
  //         },
  //         {
  //           y: 0,
  //           opacity: 1,
  //           stagger: 0.04,
  //           duration: 2,
  //           ease: "power4.out",
  //           transformOrigin: "0% 50%",
  //         }
  //       );
  //     });
  //   }
  // };

  const changeText = () => {
    const texts = ["Product Designer", "Creative Developer", "UI UX Designer"]; // Array of text strings
    let index = 0; // Index of current text

    setInterval(() => {
      index = (index + 1) % texts.length; // Increment index and loop back to beginning
      const newText = texts[index];

      // Animate the header element with the new text content
      if (typeof window !== "undefined") {
        // SplitTextContent("#my-header", "header__char", "char");

        const headerTitle = document.querySelectorAll(".header");

        headerTitle.forEach((title) => {
          title.textContent = newText;
          gsap.fromTo(
            title.querySelectorAll(".header__char"),
            {
              y: 100,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              stagger: 0.04,
              duration: 2,
              ease: "power4.out",
              transformOrigin: "0% 50%",
            }
          );
        });
      }
    }, 2000); // Repeat every 2 seconds
  };

  return (
    <div ref={component} className="cont">
      <div className="main">
        <motion.section
          className={`flex flex-auto min-h-screen overflow-hidden pt-10 pb-24 bg-fuchsia-1000`}
        >
          <div
            className={`flex flex-col w-full mx-auto bg-red-2000 justify-center items-center px-5 lg:px-0`}
          >
            <div className="header_container overflow-hidden">
              <h1
                id="my-header"
                className="header flex text-mobile_header lg:text-header_text font-displayText font-bold text-black text-center"
              >
                Product Designer
              </h1>
            </div>

            <p className="text-lead font-displayText text-gray mb-5">
              Based in London
            </p>
            {/* top row */}
            <div className="flex rounded-full border-black border p-[10px] w-fit space-x-5 justify-between items-center mb-[60px]">
              <p className="font-body text-black pl-[10px]">
                hello@ericandthweb.com
              </p>
              <CopyToClipboard text="hello@ericandthweb.com" />
            </div>

            {/* bottom row */}
            <motion.div
              style={{ y }}
              className={`cursor__grow hero__img w-full h-[426px] lg:w-6/12 lg:h-[626px] rounded-[60px] lg:rounded-[120px] bg-gray p-10 items-center justify-end flex flex-col bg-no-repeat `}
            >
              <div className="cursor__grow bg-green text-black font-displayText text-mobile_lead lg:text-lead px-[30px] lg:px-[60px] py-5 lg:py-10 rounded-full bg-cover">
                Eric Manasse
              </div>
            </motion.div>
          </div>
        </motion.section>

        <div className="section2 copy bg-fuchsia-1000 flex flex-col justify-center bg-pink-200h min-h-[60vh] my-10 px-5 lg:px-0">
          <div className=" w-full lg:w-8/12 lg:mx-auto flex flex-col">
            <div
              id="my-text"
              className="cursor__grow bio_copy font-displayText text-mobile_lead lg:text-lead"
            >
              As a Production designer and Front-end developer, I bring a unique
              perspective to the table. With my proficiency in technologies such
              as React.js, React Native, JavaScript, and Next.js, I am able to
              seamlessly bridge the gap between design and development. I am
              passionate about creating visually stunning and user-centred
              experiences. I have had the pleasure of working on designs for
              some of the world's leading asset managers, including Generali,
              Boston Partners, Hermes, and JP Morgan within the FinTech
              industry.
            </div>
            <Link
              href="https://read.cv/eric_manasse"
              target="_blank"
              className="w-fit cursor__grow change__bg"
            >
              <div className="cursor__grow button p-5 px-8 text-[24px] text-black border-1 border w-fit rounded-full mt-10 ">
                View Resume
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* ================== Horizontal scroll section ===============================*/}

      <div id="container" className="section__container pt-20">
        {/* ======== large text section */}
        <section
          className="experience__section marquee flex bg-teal-20 lg:mx-auto justify-center items-start overflow-hidden mb-[60px] px-5 lg:px-0"
          id="vertical"
        >
          {/* Years of experience and Mentor */}
          <div className="flex justify-center items-center w-full lg:w-[80vw] h-full bg-violet-1000">
            <div className="flex flex-col justify-center gap-5 items-center">
              <div
                id="marquee3"
                className="marquee__inner w-full lg:w-8/12 flex items-center"
              >
                <h1
                  id="large_text"
                  data-splitting
                  data-effect16
                  className="myTitle text-mobile_header lg:text-header_text recognition__title font-bold font-displayText flex"
                >
                  I have 6+ Years Experience, Mentored by Tim Gaud, Recognitions
                  By Muzli
                  <span className="cursor__grow bg-green p-10 px-12 text-[54px] text-black rounded-full">
                    <a href="https://medium.muz.li/made-with-studio-67-21849f2f5cc4">
                      #33
                    </a>
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <div className="WorkExperience__section px-5n lg:px-0 min-h-screen bg-purple-2000 justify-center items-center flex flex-col ">
          {WorkExperience(experiences)}
        </div>
      </div>
    </div>
  );
}

// WorkExperience

const WorkExperience = (experience: any) => {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // headings.forEach((element: any, i) => {
      //   element.anim = gsap.fromTo(
      //     element,
      //     {
      //       delay: 2,
      //     duration: 1.5,
      //     yPercent: 100,
      //     ease: "power4",
      //   },
      //   {
      //     yPercent: 20,
      //     y: -20,
      //     opacity: 1,
      //     stagger: 0.2,
      //     ease: "power4",
      //       scrollTrigger: {
      //         trigger: element,
      //         start: "top 90%+=" + offset/2,
      //         toggleActions: "play reverse play reverse",
      //       },
      //     }
      //   );
      // });

      gsap.set(".main__experiences", {
        translateY: -60,
        rotationX: 45,
        scaleX: 0.8,
        z: -300,
        transformOrigin: "bottom",
      });
      const tl = gsap.timeline({
        scale: true,
        scrollTrigger: {
          // markers: true,
          trigger: ".main__experiences",
          scrub: 1.6,
          start: "top 60%",
          end: "bottom 90%",
          pinSpacing: false,
          // end: "+=1200 bottom"
        },
      });

      tl.to(".main__experiences", {
        y: -100,
        rotateZ: 0,
        rotateX: 0,
        scaleX: 1,
        scaleY: 1,
        ease: "none",
        transformOrigin: "bottom",
      });
    });

    return () => ctx.revert();
  });

  return (
    <div className="main__experiences flex flex-col lg:flex-row bg-black w-full lg:w-10/12  border border-black p-10 lg:p-20 rounded-[40px] lg:rounded-[80px]">
      {/* <h1 className="experience text-mobile_header text-left w-full lg:w-4/12 text-white lg:text-h3_text font-displayText font-bold mb-10">
        My Work <br /> <span className="text-green">Experience</span>
      </h1> */}

      <div className="flex flex-col w-full">
        {experience
          .sort(
            (a: any, b: any) =>
              new Date(a._createdAt).getTime() -
              new Date(b._createdAt).getTime()
          )
          .map((proj: any, index: any) => {
            const year = proj.year;
            return (
              <div
                key={index.toString()}
                className="experience__inner flex  min-h-[100px] mb-5 border-gray border-b last:border-0"
              >
                <div className="right__col flex flex_col w-full items-center lg:items-start">
                  <p className="year font-displayText text-white text-[34px]">
                    {proj.jobTitle}
                  </p>
                </div>
                <div className="left__col year w-full flex items-center justify-between py-5">
                  <p className="year text-gray text-lg uppercase">
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
    </div>
  );
};

export default About;
