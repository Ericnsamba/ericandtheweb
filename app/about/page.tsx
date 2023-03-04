"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import Image from "next/image";
import EricPhoto from "../../public/assets/images/Hero_image.jpg";
import Link from "next/link";
// import Splitting from "splitting";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import "./about.css";
import { sanityClient } from "../../utils/client";
import dynamic from "next/dynamic";
import { SplitTextContent } from "../../utils/splitTextContent";

gsap.registerPlugin(ScrollTrigger);
function About() {
  const titleRef = useRef(null);
  const component = useRef(null);
  const slider = useRef();
  const bioCopy = useRef(null);
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    cloneMyTitle(8, "marquee1", "experience__title");
    cloneMyTitle(8, "marquee2", "mentor__title");
    cloneMyTitle(8, "marquee3", "recognition__title");
    sanityClient
      .fetch(`*[_type == "workExperience"]`)
      .then(setExperiences)
      .catch((error) => {
        console.error(error);
      });
  }, []);
  // console.log("======>", experiences);

  useLayoutEffect(() => {
    const timeLine = gsap.timeline({ paused: true });
    const sections = gsap.utils.toArray(".sectionBlock");
    const vw = (coef: number) => window.innerWidth * (coef / 100);
    const vh = (coef: number) => window.innerHeight * (coef / 100);

    let ctx = gsap.context(() => {
      timeLine
        .to(
          [".hero-header.header-1", ".hero-header.header-3"],
          {
            // scale: 2,
            // y: vh(150),
            // xPercent: -150,
          },
          "heroScroll"
        )
        .to(
          ".header-2",
          {
            // scale: 2,
            // y: vh(100),
            // opacity: 0,
            // zIndex: 9,
            // xPercent: "562px ",
          }
          // "heroScroll"
        )
        .to(
          ".image-wrapper",
          {
            scaleY: 2,
            // height: "462px",
            borderRadius: "40px",
          },
          "heroScroll"
        )
        .to(
          ".image-wrapper .image",
          {
            scaleX: 2,
            xPercent: 50,
            borderRadius: "40px",
          },
          "heroScroll"
        )
        .to(
          ".scroll-indicator",
          {
            // scaleX: 2,
            // y: -50,
            opacity: 0,
            yPercent: vh(50),
          },
          "heroScroll"
        );

      ScrollTrigger.create({
        // markers: true,
        animation: timeLine,
        scrub: 1,
        start: "top top",
        trigger: ".main",
        pin: ".pin-wrapper",
        pinSpacing: false,
        end: `${vh(100)}`,
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
          scrub: 5,
          // markers: true,
        },
      });

      desktopTL
        .to(".first", { duration: 12, xPercent: -60 })
        .to(".second", { duration: 12, xPercent: 50 }, "<")
        .to(".cont", { duration: 2 }, "<")
        .to(".cta", { duration: 2 }, "<");

      // createMarquee(10);

      //  const marqueeElements = document.querySelectorAll('.marquee__inner');

      // let currentPosition = 0;

      // function animateMarquee() {
      //   currentPosition -= 1;

      //   marqueeElements.forEach(element => {
      //     element.style.transform = `translateX(${currentPosition}px)`;
      //   });

      //   requestAnimationFrame(animateMarquee);
      // }

      // animateMarquee()

      // ends here

      animatedParagraph();
      // headerAnimation();
    });

    return () => ctx.revert();
    //
  }, []);

  function createMarquee(speed: number) {
    const marqueeElements = document.querySelectorAll(".marquee__inner");

    let currentPosition = 0;

    // function animateMarquee() {
    //   gsap.to(marqueeElements, {
    //     duration: speed,
    //     x: (currentPosition -= 10),
    //     modifiers: {
    //       x: gsap.utils.wrap(-marqueeElements[0].offsetWidth, 0),
    //     },
    //     onComplete: animateMarquee,
    //   });
    // }
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
          },
          {
            ease: "none",
            rotate: 0,
            scrollTrigger: {
              trigger: title,
              start: "top bottom",
              end: "top top",
              scrub: true,
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
            ease: "none",
            opacity: 1,
            stagger: 0.05,
            scrollTrigger: {
              trigger: title,
              start: "top bottom-=20%",
              end: "center top+=20%",
              scrub: true,
            },
          }
        );
      });
    }
  };

  return (
    <div ref={component} className="cont">
      <div className="main">
        <div className="hero-scroller">
          <div className="section">
            <div className="section-wrapper bg-stone-300o">
              <div className="content bg-pink-3000 z-10 mb-16">
                <p className="hero-header header-1 header__title text-[24px]">
                  Hi, I'm Eric
                </p>
                <h1 id="header_title_id" className=" header__title text-green">
                  Product designer
                </h1>
                {/* <h1 className="hero-header header-2">Product designer</h1> */}
                {/* <h1 className="hero-header header-3 lg:text-[10vh] text-[10vh]">
                  & Developer
                </h1> */}
              </div>
              <div className="pin-wrapper ">
                <div
                  className="image-wrapper bg-slate-3000 w-full"
                  id="heroImage"
                >
                  <Image
                    className="image aspect-1"
                    src={EricPhoto}
                    alt="Picture of the author"
                    priority
                  />
                </div>
              </div>
              <div className="scroll-indicator flex flex-col items-center gap-5 my-[60px]">
                <p className="uppercase text-base font-medium text-black">
                  Scroll
                </p>
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
                  />
                </svg> */}
              </div>
            </div>
          </div>
        </div>

        <div className="section copy flex flex-col bg-white ">
          <div className="section-wrapper w-full lg:w-8/12 lg:mx-auto">
            <div id="my-text_container" className="content space-y-[60px]">
              <p
                id="my-text"
                ref={bioCopy}
                data-splitting
                data-effect16
                className="bio_copy copy_4"
              >
                As a skilled Production designer and Front-end developer, I
                bring a unique perspective to the table. <br />
                <br />
                With my proficiency in technologies such as React.js, React
                Native, JavaScript, and Next.js, I am able to seamlessly bridge
                the gap between design and development. <br />
                <br />
                I am passionate about creating visually stunning and
                user-friendly experiences that not only meet but exceed
                expectations. <br />
                <br />I have had the pleasure of working on designs for some of
                the world's leading asset managers, including Generali, Boston
                Partners, Hermes, and CTI, during my time at Kurtosys. My
                experience and dedication to the industry make me a valuable
                asset to any team, and I am always excited for the opportunity
                to bring my skills to any company and create an impact.
              </p>
            </div>
          </div>

          <section
            className="experience__section marquee flex bg-teal-20 w-full lg:w-8/12 lg:mx-auto justify-start items-start overflow-hidden my-[60px]"
            id="vertical"
          >
            {/* Years of experience and Mentor */}
            <div className="flex justify-start items-center w-full h-full bg-violet-3000">
              <div className="flex flex-col justify-between gap-5 ">
                <div
                  id="marquee1"
                  className="marquee__inner w-full lg:w-8/12 flex first"
                >
                  <h3
                    data-splitting
                    data-effect2
                    className="myTitle .experience__title"
                  >
                    <span className="gray_text text-gray px-5">I have</span>6+
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
                    className="myTitle .mentor__title"
                  >
                    <span className="gray_text text-gray px-5">
                      Mentored by
                    </span>
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
                    className="myTitle recognition__title"
                  >
                    <span className="gray_text text-gray px-5">
                      Recognitions
                    </span>
                    Muzli Recognitions
                    <span className="px-3 text-green dark:text-slate-300">
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
        </div>
      </div>

      {/* Work Experience Section */}
      <div className="WorkExperience__section ">
        {WorkExperience(experiences)}
      </div>
    </div>
  );
}

const WorkExperience = (experience: any) => {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // const headings = gsap.utils.toArray(".experience__inner");
      // let offset = 0;
      const headings = gsap.utils.toArray<HTMLElement>(".experience__inner");
      let offset = 0;

      if (headings.length > 0) {
        offset = headings[1].offsetTop - headings[0].offsetTop;
      }

      gsap.set(headings, { yPercent: 200, opacity: 0 });

      headings.forEach((element: any, i) => {
        element.anim = gsap.fromTo(
          element,
          {
            y: 50,
          },
          {
            y: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: "top 70%+=" + offset / 2,
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });
    });

    return () => ctx.revert();
  });

  return (
    <div className="main__experiences bg-lime-2000 mx-auto w-full lg:w-[794px] bg-purple-1000 min-h-[140vh] ">
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
              className="experience__inner flex flex-col lg:flex-row justify-between lg:items-center items-start min-h-[100px] mb-5 bg-white "
            >
              <div className="left__col year w-[285px]">
                <h3 className="year text-gray">
                  {year ? parseInt(year.substring(0, 4)) : ""}
                </h3>
              </div>
              <div className="right__col flex flex_col w-[300px]">
                <p className="year text-black text-[34px]">{proj.company}</p>
                <p className="year text-gray text-sm uppercase">
                  {proj.jobTitle}
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default About;
