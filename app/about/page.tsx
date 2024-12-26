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
import TextImageReveal from "@/components/Animations/TextImageReveal";
import SectionHeader from "@/components/SectionHeader";
import Footer from "@/components/Footer/Footer";


export default function About() {
  const container = useRef();
  const aboutCopyRef = useRef(null);
  const ref = useRef(null);
  const heroImgRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(CustomEase, ScrollTrigger);
    CustomEase.create(
      "hop2",
      "M0,0 C0.354,0 0.464,0.133 0.498,0.502 0.532,0.872 0.651,1 1,1"
    );

    
    


    if (heroImgRef.current) {
      ScrollTrigger.create({
        trigger: heroImgRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          const scale = 1 + self.progress * 0.5;
          gsap.to(heroImgRef.current.querySelector("img"), {
            scale: scale,
            ease: "none",
            duration: 0.1,
          });
        },
      });
    }

    // return () => {
    //   ScrollTrigger.getAll().forEach((t) => t.kill());
    //   [aboutCopyRef, cvHeaderRef, cvListRef].forEach((ref) => {
    //     if (ref.current) {
    //       const splitTexts = ref.current.querySelectorAll("h1, h2, h3");
    //       splitTexts.forEach((text) => {
    //         if (text.splitType && text.splitType.revert) {
    //           text.splitType.revert();
    //         }
    //         text.querySelectorAll(".line-wrapper").forEach((wrapper) => {
    //           wrapper.replaceWith(...wrapper.childNodes);
    //         });
    //       });
    //     }
    //   });
    // };
  }, []);

  useGSAP(() => {
    gsap.registerPlugin(CustomEase);
    const revealContainer = document.querySelector(".reveal_overlay");
    if (revealContainer) {
      // let image = revealContainer.querySelector(".profile_img");
      gsap.set(revealContainer, { autoAlpha: 1 });
      gsap.to(revealContainer, {
        delay: 1,
        duration: 2.5,
        y: "100%",
        // scaleX: "50%",
        ease: CustomEase.create(
          "custom",
          "M0,0 C0.11,0.494 0.163,0.78 0.3,0.9 0.397,0.986 0.504,1 1,1 "
        ),
        transformOrigin: "bottom",
        // markers: true,
      });
    }

    gsap.to(".about-portrait", {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      delay: 0.8,
      duration: 1,
      ease: "hop",
    });

    gsap.to(".about-portrait", {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      delay: 0.8,
      duration: 1,
      ease: "hop",
    });

    gsap.to(".about-copy-wrapper .about-copy-title h1", {
      y: 0,
      delay: 1,
      duration: 1.5,
      ease: "power4.out",
    });

    
  },{ scope: container });

  const paragraph =
    "I am always pushing the boundaries of what's possible in user-centered design. My work spans across the FinTech sector, where I've crafted solutions for industry leaders like Generali, Boston Partners, Hermes, and JP Morgan—transforming complex challenges into elegant, user-focused digital products.";
  // const headerStyle =
  //   "text-black text-[40px] leading-[48px] lg:text-[56px] font-medium lg:leading-[64px] tracking-wider ";

  return (
    <div className={`${section_styles} gap-32`} ref={container}>
      <section className="intro hidden">
      <div className="about-intro hidden">
            <div className="col about-portrait-img">
              <div className="about-portrait">
                <img src="/medias/hero_eric.jpg" alt="Portrait" className="w-[340px] h-[547px] object-cover"/>
              </div>
            </div>
            <div className="col about-copy-wrapper">
              <div className="about-copy-title">
                <h1>Bio</h1>
              </div>

              <div className="about-copy" ref={aboutCopyRef}>
                <p className="text-Lace_Veil">
                  Passionate about crafting immersive digital experiences,
                  Stefan Markovic blends design and code to push the boundaries
                  of what’s possible on the web. His approach focuses on
                  creating seamless, responsive, and engaging interfaces that
                  leave a lasting impact.
                </p>
                <br />
                <p className="text-Lace_Veil">
                  With a strong foundation in JavaScript, React, and modern web
                  technologies, Stefan excels at turning complex ideas into
                  interactive realities. Whether it's a sleek portfolio site, a
                  dynamic web app, or a mesmerizing animation, he approaches
                  each project with creativity and technical precision.
                </p>
                <br />
                <p className="text-Lace_Veil">
                  Driven by curiosity and innovation, Stefan constantly explores
                  new tools, techniques, and frameworks. He’s not just a
                  developer—he’s a problem solver, ready to bring your vision to
                  life with a unique and modern touch.
                </p>
              </div>
            </div>
          </div>
      </section>
      <section className="flex flex-col gap-20 min-h-[calc(100vh-14vh)] w-full  justify-between">
        <div className="flex w-full min-h-[86vh] self-stretch gap-32 flex-col lg:flex-row overflow-hidden">
          {/* left col */}
          <div className="left_col flex flex-col gap-2">
            <div className="imgContainer relative flex flex-col w-[360px] h-[547px] overflow-hidden self-end">
              <div className="reveal_overlay absolute inset-0 w-full h-full bg-black" />
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
                <div className="SelfPortrait text-Lace_Veil text-sm font-bold uppercase leading-normal">
                  self portrait
                </div>
                <div className=" text-Lace_Veil text-sm font-bold uppercase leading-normal">
                  2024
                </div>
              </div>
            </div>
          </div>

          {/* right_col */}
          <div className="right_col w-full lg:w-6/12 flex flex-col gap-32 justify-between bg-red-200t">
            <div className="flex flex-col gap-32">
            <div className="about-copy-title">
                <h1 className="title text-Lace_Veil">Bio</h1>
              </div>

              <div className={`col-start-1 col-span-9 flex flex-col gap-6`}>
                <SlideUpWords
                  phrase={
                    "Hi, I’m Eric—a Designer and Developer based in London with a passion for crafting user-centered digital experiences. My work spans various industries, from designing and developing asset management platforms for leading financial firms to partnering with fast-paced startups, delivering innovative solutions while keeping users at the heart of every project."
                  }
                  className="text-2xl"
                />
                <SlideUpWords
                  phrase={
                    "Currently, I’m part of a dynamic design studio where collaboration and creativity thrive. Together, we challenge each other to push boundaries and elevate our craft, all while having fun along the way. Recently, we’ve been collaborating with one of the world’s most prestigious automotive brands, delivering luxury-driven digital experiences."
                  }
                  className="text-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hero">
      <div className="about-hero-img w-screen h-[75vh] overflow-hidden my-32" ref={heroImgRef}>
          <img src="/medias/hero_eric.jpg" alt="Portrait" />
        </div>
      </section>

      {/* Work experience */}
      <section className="flex flex-col w-full min-h-screen bg-slate-300t">
        <div className="flex w-full ">
          <div className="w-full text-Lace_Veil overflow-hidden" ref={ref}>
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

      {/* footer */}
      {/* <section className="footer">
        <Footer/>
      </section> */}
    </div>
  );
}
