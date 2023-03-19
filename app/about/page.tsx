"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
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
     
      // timeline.fromTo(
      //   ".image-wrapper .image",
      //   {
      //     // scaleX: 2,
      //     // xPercent: -50,
      //     borderRadius: "0px",
      //   },
      //   {
      //     // scaleX: 2,
      //     xPercent: 0,
      //     borderRadius: "0px",
      //   },
      //   "heroScroll"
      // )

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

      let currentPosition = 0;

      // function animateMarquee() {
      //   currentPosition -= 1;

      //   marqueeElements.forEach(element => {
      //     element.style.transform = `translateX(${-currentPosition}px)`;
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
      SplitTextContent("#my-text2", "bio_copy__word");
      SplitTextContent("#my-text3", "bio_copy__word");
      SplitTextContent("#my-text4", "bio_copy__word");

      const fx16Titles = document.querySelectorAll(
        ".bio_copy[data-splitting][data-effect16]"
      );

      fx16Titles.forEach((title) => {
        gsap.fromTo(
          title,
          {
            transformOrigin: "0% 50%",
            // rotate: 3,
            y: 10,
          },
          {
            y: 10,
            ease: "none",
            rotate: 0,
            scrollTrigger: {
              trigger: title,
              start: "top bottom",
              end: "top top",
              scrub: 1,
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
              start: "top bottom-=20%",
              end: "center top+=20%",
              scrub: 1,
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
          <div className="content pin-wrapper pt-[20vh] absolute min-h-screen mx-auto max-w-[1200px]">
            <p className="hero-header header header__title text-[24px] uppercase text-center flex justify-center items-center">
              Hi, I'm Eric
            </p>
            <h1
              id="header_title_id"
              className="hero-header header-1  header__title text-black lg:text-[142px] text-center uppercase leading-[120%]"
            >
              Product Designer
            </h1>
          </div>
          <div className="z-10 min-h-screen justify-center items-center">
            <div className="image-wrapper bg-slate-3000 w-full flex justify-center items-center" id="heroImage">
              <Image
                className="image aspect-1"
                src={EricPhoto}
                alt="Picture of the author"
                priority
              />
            </div>
          </div>
        </div>

        <div className="section copy flex flex-col bg-white ">
          <div className="section-wrapper w-full lg:w-8/12 lg:mx-auto">
            <div
              id="my-text_container"
              className="content space-y-[60px] text-gray"
            >
              <div
                id="my-text"
                ref={bioCopy}
                data-splitting
                data-effect16
                className="bio_copy copy_1 mb-5"
              >
                As a skilled Production designer and a developer, I bring a
                unique perspective to the table.
              </div>
              <div
                id="my-text2"
                ref={bioCopy}
                data-splitting
                data-effect16
                className="bio_copy copy_2 mb-5"
              >
                With my proficiency in technologies such as React.js, React
                Native, JavaScript, and Next.js, I am able to seamlessly bridge
                the gap between design and development.
              </div>
              <div
                id="my-text3"
                ref={bioCopy}
                data-splitting
                data-effect16
                className="bio_copy copy_3 mb-5"
              >
                I am passionate about creating visually stunning and
                user-friendly experiences that not only meet but exceed
                expectations.
              </div>
              <div
                id="my-text4"
                ref={bioCopy}
                data-splitting
                data-effect16
                className="bio_copy copy_4 mb-5"
              >
                I have had the pleasure of working on designs for some of the
                world's leading asset managers in FinTech, including Generali,
                Boston Partners, Hermes, and CTI, during my time at Kurtosys. My
                experience and dedication to the industry make me a valuable
                asset to any team, and I am always excited for the opportunity
                to bring my skills to any company and create an impact.
              </div>
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
                    className="myTitle lg:whitespace-nowrap .experience__title"
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
                    className="myTitle lg:whitespace-nowrap .mentor__title"
                  >
                    <span className="gray_text text-gray pr-5">
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
                    className="myTitle lg:whitespace-nowrap recognition__title"
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
        </div>
      </div>

      {/* Work Experience Section */}
      <div className="WorkExperience__section ">
        {WorkExperience(experiences)}
      </div>
    </div>
  );
}

// WorkExperience

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
              start: "top 60%+=" + offset / 2,
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });
    });

    return () => ctx.revert();
  });

  return (
    <div className="main__experiences bg-lime-2000 mx-auto w-full lg:w-[794px] bg-purple-1000 min-h-[120vh] lg:min-h-[100vh] ">
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
