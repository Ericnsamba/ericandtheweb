// HeroSection.tsx
"use client";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { heading_1, heading_2, section_styles, text_lg } from "@/utils/styles";
import "./HeroSection.css";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = document.querySelector(".wrapper");
      const modal = document.querySelector(".modal");
      const image = container.querySelector(".wideImage");

      const itemTL = gsap.timeline({
        scrollTrigger: {
          trigger: ".imageWrap",
          start: "0%",
          // end: "bottom 80%",
          // start: "top 10%",
          // end: "bottom 80%",
          scrub: 2,
          pin: true,
          markers: true,
        },
      });

      const heroImgTL = gsap.timeline({
        scrollTrigger: {
          trigger: ".heroImg",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      const headingTL = gsap.timeline({
        scrollTrigger: {
          trigger: ".heroImg",
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: true,
        },
      });

      heroImgTL.fromTo(
        ".hero-img__image",
        { y: 0 },
        { y: "30%", ease: "none" },
        0
      );

      itemTL.fromTo(
        ".imageWrap",
        { clipPath: `polygon(30% 30%, 70% 30%, 70% 70%, 30% 70%)` },
        { clipPath: `polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)` }
      );
      itemTL.fromTo(image, { scale: 0.5 }, { scale: 1 }, 0);
      itemTL.fromTo(image, { scale: 1.1 }, { scale: 1 }, 0);

      itemTL.fromTo(
        modal,
        {
          bottom: "-20%",
          // clipPath: `polygon(30% 30%, 70% 30%, 70% 70%, 30% 70%)`,
          // scale: 1
        },
        {
          bottom: "0%",
          x: "50%",
          // clipPath: `polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)`,
          scale: 0.5,
        },
        0
      );

      headingTL.to(".headingWrapper .headingTitle", {
        opacity: 1,
      });

      gsap.fromTo(
        ".headingWrapper .headingTitle",
        {
          y: "190%",
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.6,
          ease: "expo.out",
          stagger: 0.5,
        }
      );

      // Cleanup function
      return () => {
        itemTL.kill();
        heroImgTL.kill();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope: containerRef }
  );

  return (
    <div className={section_styles}>
      <div ref={containerRef} className="wrapper mt-[14vh]t">
        <div className="heroImg">
          <div className="headingWrapper">
            <h1 className="headingTitle">MY</h1>
            <h1 className="headingTitle">MAIN</h1>
            <h1 className="headingTitle">TITLE</h1>
          </div>
        </div>
        <div className="imageWrap">
          <img
            className="wideImage"
            src="https://images.unsplash.com/photo-1720211370947-68088964ae6b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Hero image"
          />
          <div className="modal">
            <h2>Modal heading</h2>
          </div>
        </div>
      </div>
      <section className="section bg-slate-300 w-full"></section>
    </div>
  );
}
