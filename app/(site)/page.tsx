"use client";
import React, { FC, useLayoutEffect } from "react";
// import React, { FC, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import profilePhoto from "../../public/assets/images/Hero_image.jpg";
import gsap from "gsap";

const Home = () => {

  // useLayoutEffect(() => {
  //   let animated = gsap.context(() => {
  //     const tl = gsap.timeline({ repeat: -1 });

  //     tl.from(".image__wrapper", {
  //       width: 180,
  //       ease: "Expo.easeInOut",
  //       delay: 1,
  //     }).to(
  //       ".image__wrapper",
  //       {
  //         width: 504,
  //         ease: "Expo.easeInOut",
  //         duration: 3,
  //         yoyo: true,
  //         transformOrigin: "center bottom",
  //       },
  //       "-=0.5"
  //     );

  //     tl.play();
  //   });

  //   return () => animated.revert();
  // });

  useLayoutEffect(() => {
    let animated = gsap.context(() => {
      // const tl = gsap.timeline({ repeat: -1 });
      const tl = gsap.timeline({ paused: true });
  
      tl.from(".image__wrapper", {
        width: 80,
        ease: "Expo.easeInOut",
        delay: .4,
      }).to(
        ".image__wrapper",
        {
          width: 504,
          ease: "Expo.easeInOut",
          duration: 1.4,
          // // yoyo: true,
          // transformOrigin: "center bottom",
          // onComplete: () => {
          //   gsap.to(".portfolio", {
          //     width: 384,
          //     fontFamily: 34,
          //     ease: "Expo.easeInOut",
          //     duration: 2,
          //     transformOrigin: "center bottom",
          //   });
          // },
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

      tl.play();
    });
  
    return () => animated.revert();
  }, []);
  


  return (
    <motion.section className={`flex flex-auto h-screen overflow-hidden px-5`}>
      <div
        className={`flex flex-col w-full mx-auto bg-red-2000 justify-center items-center gap-[48px]`}
      >
        {/* top row */}
        <div className="w-full flex flex-col lg:flex-row justify-center items-center lg:items-center gap-[40px] lg:gap-[48px] mb-8">
          <h1
            className={`header__title lg:text-[140px] text-black leading-[100%] uppercase font-displayText font-bold`}
          >
            Eric
          </h1>
          <div className="h-[190px] image__wrapper">
            <Image
              src={profilePhoto}
              alt="Picture of the author"
              className="hero__image rounded-full object-cover  h-full self-center"
            />
          </div>
        </div>

        {/* bottom row */}
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-[40px] lg:gap-[48px] h-[190px]">
          <div className="portfolio py-9 px-24 bg-green text-5xl rounded-full h-full flex justify-center items-center font-displayText font-medium ">
            Portfolio
          </div>
          <h1
            className={
              "lg:text-[140px] text-black leading-[100%] uppercase font-displayText font-bold"
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
