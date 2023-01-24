"use client";

import { motion } from "framer-motion";
import React, { FC } from "react";
import Image from "next/image";
import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";
import profilePhoto from "../public/assets/images/image.svg";
import { HoverTypingText, TypingText } from "../components/CustomTexts";
import NavButton from "../components/Navigation/NavButton";

interface typeDefinition {
  repositories: any;
}

const Home: FC<typeDefinition> = ({ repositories }) => {
  return (
    <section className={`flex gap-5 flex-auto min-h-0`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.centerAlign} w-10/12 `}
      >
        {/* <div className="flex justify-center items-center flex-col relative z-10">
            <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
              Metaverse
            </motion.h1>
            <motion.div
              variants={textVariant(1.2)}
              className="flex flex-row justify-center items-center"
            >
              <h1 className={styles.heroHeading}>Ma</h1>
              <div className={styles.heroDText} />
              <h1 className={styles.heroHeading}>Ness</h1>
            </motion.div>
          </div> */}

        <div className="flex">
          <div className="w-full sm:px-0 flex flex-col justify-center">
            <div className="">
              <TypingText title="I'm Eric," textStyles="text-left" />
              <HoverTypingText title="Dribbble" textStyles={`text-sm uppercase`}/>
              <motion.h1
                variants={textVariant(1.1)}
                className={"text-[52px] text-green"}
              >
                Product Designer
              </motion.h1>
              <motion.div />
            </div>
          </div>

          <div className="w-full  sm:px-0 justify-between flex flex-col">
            <motion.div
              variants={slideIn("top", "tween", 0.2, 1)}
              className="relative w-full"
            >
              <div className="absolute w-full" />

              <Image
                src={profilePhoto}
                alt="Picture of the author"
                className=" object-cover rounded-full z-10 relative"
                // width={'100%'}
                height={800}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className={`${styles.centerAlign} flex gap-5 justify-between w-2/12 grow `}>

        <div className="NavigationBar flex justify-between w-full h-[400px]">
          <NavButton type={"default"} href="./about">
            About Me
          </NavButton>
          <NavButton type={"default"} href="./portfolio">
            my Work
          </NavButton>
          <NavButton type={"default"} href="./contact">
            get in Touch
          </NavButton>
        </div>
      </div>
    </section>
  );
};

export default Home;
