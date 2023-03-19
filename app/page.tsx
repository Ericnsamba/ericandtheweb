"use client";
import React, { FC, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import profilePhoto from "../public/assets/images/Hero_image.jpg";
import gsap, { TimelineMax } from "gsap";
// import styles from "../styles";
// import { slideIn, staggerContainer, textVariant } from "../utils/motion";
// import { HoverTypingText, TypingText } from "../components/CustomTexts";

const Home = () => {
  useLayoutEffect(() => {
    let animated = gsap.context(() => {
      const timeLine = gsap.timeline({ paused: true });

      gsap.fromTo(
        ".hero__image",
        {
          // width: 190,
          // x: -500,
          opacity: 0,
          y: -500
        },
        {
          y: 0,
          opacity: 1,
          // width: 504,
          delay: "0.8",
          x: 0,
          duration: 1,
          // ease: "Power4.easeIn",
          ease: "bounce.out",
        }
      );
      gsap.fromTo(
        ".hero__image",
        {
          width: 190,
          opacity: 0,
        },
        {
          opacity: 1,
          width: 504,
          delay: "1.8",
          duration: 2.5,
          ease: "elastic.out(1, 0.5)",
        }
      );
    }); //
    return () => animated.revert();
  });

  return (
    <motion.section className={`flex flex-auto h-screen overflow-hidden px-5`}>
      <div
        className={`flex flex-col w-full mx-auto bg-red-2000 justify-center items-center gap-[48px]`}
      >
        {/* top row */}
        <div className="w-full flex flex-col lg:flex-row justify-center items-center lg:items-center gap-[40px] lg:gap-[48px] mb-8">
          <h1
            className={"lg:text-[140px] text-black leading-[100%]"}
          >
            Eric
          </h1>
          <div className="h-[190px]">
            <Image
              src={profilePhoto}
              alt="Picture of the author"
              className="hero__image rounded-full object-cover  h-full self-center"
              // className="hero__image rounded-full object-cover w-[504px] h-full self-center"
            />
          </div>
        </div>

        {/* bottom row */}
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-[40px] lg:gap-[48px] h-[190px]">
          <div className="portfolio py-9 px-24 bg-green text-5xl rounded-full h-full flex justify-center items-center">
            Portfolio
          </div>
          <h1
            className={"lg:text-[140px] text-black leading-[100%]"}
          >
            Manasse
          </h1>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
