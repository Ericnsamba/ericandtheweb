"use client";

import { motion } from "framer-motion";
import React, { FC } from "react";
import Image from "next/image";
import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";
import profilePhoto from "../public/assets/images/Hero_image.jpg";
import { HoverTypingText, TypingText } from "../components/CustomTexts";

const Home = () => {
  const navContainerVar = {
    hidden: {
      // y: -100,
      // scale: 0
    },
    show: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const heroImageVar = {
    hidden: {
      x: -350,
      // scale: 0,
      opacity: 0,
    },
    show: {
      x: 0,
      // scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        ease: "easeInOut",
        duration: 0.8,
        // delay: 1,
      },
    },
  };

  return (
    <motion.section
      className={`flex lg:gap-5 flex-auto h-screen overflow-hidden pt-[134px] lg:py-0`}
    >
      <motion.div
        exit={{ x: 400, opacity: 0 }}
        // viewport={{ once: false, amount: 0.25 }}
        className={` lg:w-10/12  w-full px-5 lg:px-0 mx-auto `}
      >
        {/* left side */}
        <div className="flex flex-col lg:flex-row w-full h-full ">
          <div className="w-full lg:w-1/2 sm:px-0 justify-start flex flex-col lg:justify-center z-10">
            <div className="">
              <TypingText title="I'm Eric," textStyles="text-left" />
              {/* <p className="text-black text-[24px]">I'm Eric</p> */}
              <motion.h1
                variants={textVariant(1)}
                className={"lg:text-[52px] text-[52px] text-green"}
              >
                Product Designer
              </motion.h1>
              <motion.div />
            </div>
          </div>

          <motion.div
            variants={heroImageVar}
            initial="hidden"
            animate="show"
            className="w-full lg:w-1/2 flex lg:justify-end bg-emerald-1000 justify-end relative -top-[36px] lg:top-0 lg:py-24"
          >
            <div className="w-full h-full lg:w-auto lg:h-auto sm:px-0 flex flex-col justify-center bg-fuchsia-3000">
              <Image
                src={profilePhoto}
                alt="Picture of the author"
                // className="object-cover w-[80%] h-full self-center"
                className="rounded-[20px] object-cover w-full h-[572px] self-center"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
      {/*  */}
    </motion.section>
  );
};

export default Home;
