// HeroSection.tsx
"use client";
import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// import { heading_1 } from "@/utils/styles";
import "./styles.scss";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProjectHero({
  imageURL,
  title,
  year,
}: {
  imageURL: string;
  title: string;
  year: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroImgRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef(null);
  const dateRef = useRef(null);

  useGSAP(
    () => {
      const container = document.querySelector(".wrapper");
      if (!container) return;
      const image = container.querySelector(".wideImage");
      if (!image) return;

      const textTL = gsap.timeline();

      textTL.fromTo(
        titleRef.current,
        { y: 100 },
        { y: 0, duration: 1.5, ease: "power4.out" }
      );

      textTL.fromTo(
        dateRef.current,
        { y: 100 },
        { y: 0, delay: 0.2, duration: 1.5, ease: "power4.out" },
        "-=1.4"
      );

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".proj_hero",
          start: "top 14vh",
          end: "+=400",
          pin: ".wrapper",
          scrub: 1,
        },
      });

      tl.add([
        gsap.fromTo(image, { scale: 1.2 }, { scale: 1 }),
        gsap.to(".imageWrap", {
          clipPath: `polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)`,
        }),
      ]);

      //  Disable animation on mobile
      gsap.matchMedia().add("(max-width: 900px)", () => {
        // Disable animations
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      });
      // 
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="proj_hero w-full overflow-hidden bg-yellow-600t"
    >
      <div className="wrapper lg:h-full">
        <div className="header w-full flex justify-between flex-col lg:flex-row gap-6">
          <h1
            ref={titleRef}
            className={`portfolio_heading text-Lace_Veil break-all capitalize`}
          >
            {title}
          </h1>
          <h1
            ref={dateRef}
            className={`portfolio_heading text-Lace_Veil text-right`}
          >
            {year}
          </h1>
        </div>
        <div
          ref={heroImgRef}
          className="imageWrap bg-back overflow-hidden bg-green-400t"
        >
          <Image
            className="wideImage w-full h-full"
            src={imageURL}
            alt="Hero image"
            layout="responsive"
            width={1920}
            height={1080}
            quality={100}
            priority={true}
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
}
