"use client";

import { motion } from "framer-motion";
import React, { FC } from "react";
import Image from "next/image";
import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";
import profilePhoto from "../public/assets/images/Hero-placeholder.png";
import { HoverTypingText, TypingText } from "../components/CustomTexts";
import NavButton from "../components/Navigation/NavButton";
import Navigation from "../components/Navigation/Menu";

interface typeDefinition {
  repositories: any;
}

const Home: FC<typeDefinition> = ({ repositories }) => {
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
    <motion.section className={`flex lg:gap-5 flex-auto h-screen overflow-hidden pt-[134px] lg:py-0`}>
      <motion.div
        exit={{ x: 400, opacity: 0 }}
        // viewport={{ once: false, amount: 0.25 }}
        className={` lg:w-10/12  w-full px-5 lg:px-0`}
      >
        <div className="flex flex-col lg:flex-row w-full">
          {/* <div className="w-full sm:px-0 flex flex-col justify-center"> */}
          <div className="w-full lg:w-1/2 sm:px-0 justify-start flex flex-col lg:justify-center">
            <div className="">
              {/* <TypingText title="I'm Eric," textStyles="text-left" /> */}
              <p className="text-black text-[24px]">I'm Eric</p>
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
            // className="w-full relative -top-5 overflow-hidden justify-between flex flex-col bg-fuchsia-200"
            className="w-full lg:w-1/2 sm:px-0 justify-start flex flex-col lg:justify-center"
            // className="w-full lg:w-1/2 sm:px-0 justify-between flex flex-col relative -top-12 overflow-hidden"
          >
            <div className="w-full  sm:px-0 flex flex-col justify-center bg-fuchsia-3000">
              <Image
                src={profilePhoto}
                alt="Picture of the author"
                className="object-cover w-11/12 self-center"
              />
            </div>
          </motion.div>
        </div>

      </motion.div>

      <div
        className={`${styles.centerAlign} hidden lg:flex gap-5 justify-between w-2/12 grow `}
      >
        <motion.div
          variants={navContainerVar}
          initial="hidden"
          animate="show"
          className="NavigationBar flex justify-between w-full h-[400px]"
        >
          <Navigation routeNames={["about me", "my work", "get in touch"]} />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Home;
