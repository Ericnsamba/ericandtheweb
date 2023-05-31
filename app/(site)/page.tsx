"use client";
import React, { FC, useLayoutEffect } from "react";
// import React, { FC, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import profilePhoto from "../../public/assets/images/Hero_image.jpg";
import gsap from "gsap";
import { RevealAnimation } from "../../utils/revealAnimation";

const Home = () => {

  useLayoutEffect(() => {
    let animated = gsap.context(() => {
      // const tl = gsap.timeline({ repeat: -1 });
      const tl = gsap.timeline({ paused: true });
  
      tl.from(".image__wrapper", {
        width: 80,
        ease: "Expo.easeInOut",
        delay: .9,
      }).to(
        ".image__wrapper",
        {
          width: 504,
          ease: "Expo.easeInOut",
          duration: 1.4,
        },
        "-=0.5"
      );

      tl.to(".header__title", {
        // width: "20vh",
        // scaleX: "100%",
        // ease: "Expo.easeInOut",
        // transformOrigin: "0% -100%",
        // delay: .4,
        // onComplete: () => {
        //   gsap.to(".header__title", {
        //     width: "0",
        //     scaleX: "0",
        //     ease: "Expo.easeInOut",
        //     transformOrigin: "50% 0%",
        //     delay: .2,
        //   });
        // },
      })

      gsap.from([".header__title", ".portfolio"], {
        delay: .4,
        duration: 1.5,
        yPercent: 100,
        ease: "power4",
        stagger: 0.2
      });

      tl.play();


      RevealAnimation(".header__title2", 0.6, 1.5, 120);
    });
  
    return () => animated.revert();
  }, []);
  


  return (
    <motion.section className={`flex flex-auto h-screen px-5`}>
      <div
        className={`flex flex-col w-full mx-auto bg-red-2000 justify-center items-center gap-[48px]`}
      >
        {/* top row */}
        <div className="overflow-hidden  w-full flex flex-col lg:flex-row justify-center items-center lg:items-center gap-[40px] lg:gap-[48px] mb-8">
          <h1
            className={`header__title overflow-hidden lg:h-[190px] inline-block lg:text-[140px] text-black leading-[100%] uppercase font-displayText font-bold`}
          >
            Eric
          </h1>
          <div className="h-[190px] image__wrapper">
            <Image
              src={profilePhoto}
              alt="Picture of the author"
              className="hero__image rounded-full object-cover  h-full self-center w-full"
            />
          </div>
        </div>

        {/* bottom row */}
        <div className="overflow-hidden flex flex-col-reverse lg:flex-row justify-center items-center gap-[40px] lg:gap-[48px] lg:h-[190px]">
          <div className="portfolio py-9 px-24 bg-green text-5xl rounded-full h-full flex justify-center items-center font-displayText font-medium ">
            Portfolio
          </div>
          <h1
            className={
              "header__title2 lg:text-[140px] text-black lg:h-[190px] inline-block leading-[100%] uppercase font-displayText font-bold"
            }
          >
            Manasse
          </h1>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
