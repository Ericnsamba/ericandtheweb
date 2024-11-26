// HeroSection.tsx
"use client";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { heading_1, heading_2, section_styles, text_lg } from "@/utils/styles";
import "./styles.scss";
import Image from "next/image";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProjectHero({ imageURL, title, year }: { imageURL: string; title: string; year: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = document.querySelector(".wrapper");
      const modal = document.querySelector(".modal");
      const image = container.querySelector(".wideImage");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".proj_hero",
          start: "top 14vh",
          end: "+=400",
          pin: ".wrapper",
          scrub: 1,
          // markers: true,
        },
      });

      tl.add([
        
        // const animation = gsap.to(".photo:not(:first-child)", {
        //   opacity: 1,
        //   scale: 1,
        //   duration: 1,
        //   stagger: 1,
        // });
  
        gsap.fromTo(image, { scale: 1.1 }, { scale: 1 }),
        gsap.fromTo(
          ".imageWrap",
          { clipPath: `polygon(20% 20%, 80% 20%, 80% 80%, 20% 80%)` },
          { clipPath: `polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)` }
        )
      ]);
      

    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="proj_hero bg-red-300t w-full">
      <div className="wrapper pt-[14vh]t bg-green-300i">
        <div className="header w-full flex justify-between flex-col lg:flex-row gap-6">
          <h1 className={`heading ${heading_1} break-all`}>{title}</h1>
          <h1 className={`heading ${heading_1} text-right`}>{year}</h1>
        </div>
        <div className="imageWrap bg-coral">
          <Image
            className="wideImage w-full h-full"
            src={imageURL}
            alt="Hero image"
            layout="responsive"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
}
