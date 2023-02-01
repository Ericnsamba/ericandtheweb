"use client";

import Image from "next/image";
import styles from "../../styles/Home.module.css";
import EricPhoto from "../../public/assets/images/eric-picture.png";
import downloadIcon from "../../public/assets/icons/Icons-download.svg";
// import {IconExperience, IconMentor, IconRecognitions} from "../public/assets/icons";
import Experience from "../../components/Experience";
import IconExperience from "../../public/assets/icons/IconExperience.svg";
import IconMentor from "../../public/assets/icons/IconMentor.svg";
import IconRecognitions from "../../public/assets/icons/IconRecognitions.svg";
import Link from "next/link";
import Button from "../../components/Atoms/Button";
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import NavButton from "../../components/Navigation/NavButton";
import LocomotiveScroll from "locomotive-scroll";
// import { bodyVariants, childVariants, navVariants } from "../../utils/motion";
import { navVariants, bodyVariants } from "../../utils/motion";
import Navigation from "../../components/Navigation/Menu";

export default function AboutPage() {
  const { scrollYProgress } = useScroll();
  const scrollRef = useRef(null);
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {}, []);

  const bodyVariantshh = {
    hidden: {
      // y: 200,
      // scale: 0
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4,
        durations: 0.8,
        type: "spring",
        stiffness: 80,
      },
    },
  };

  const childVariants = {
    hidden: {
      y: 180,
    },
    show: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 90,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={navVariants}
      className={`flex h-screen gap-x-5 overflow-hidden`}
    >
      <div className="w-3/12  bg-teal-8000 flex">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ root: scrollRef }}
          className="NavigationBar flex justify-between w-full h-[400px] items-center self-center "
        >
          <Navigation routeNames={["home"]} />
        </motion.div>
        {/* <motion.div className="progress-bar h-5 bg-teal-500" style={{ scaleX: scrollYProgress }} /> */}
      </div>

      <motion.div
        initial="hidden"
        animate="show"
        // exit="exitState"
        variants={bodyVariants}
        className="mx-auto container w-6/12 flex flex-col gap-16 py-32 overflow-y-scroll scrollbar-hide"
      >
        <motion.div
          variants={childVariants}
          className="w-full flex flex-col gap-10"
        >
          {/* <img className="picture" src="https://picsum.photos/800/500" alt="tadaam" /> */}
          <Image
            className="rounded-2xl w-full h-[285px] object-cover"
            src={EricPhoto}
            alt="Picture of the author"
            priority
          />

          <motion.div variants={childVariants} className="flex flex-col gap-5">
            <p className="text-[34px] text-black dark:text-green font-normal">
              I'm Eric, a product designer and app developer.
            </p>
            <p className="text-base text-black dark:text-green font-normal">
              As a skilled Production designer and Front-end developer, I bring
              a unique perspective to the table. With my proficiency in
              technologies such as React.js, React Native, JavaScript, and
              Next.js, I am able to seamlessly bridge the gap between design and
              development. I am passionate about creating visually stunning and
              user-friendly experiences that not only meet but exceed
              expectations. I have had the pleasure of working on designs for
              some of the world's leading asset managers, including Generali,
              Boston Partners, Hermes, and CTI, during my time at Kurtosys. My
              experience and dedication to the industry make me a valuable asset
              to any team, and I am excited for the opportunity to bring my
              skills to your company.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={childVariants}
          className="flex justify-between w-full "
        >
          <div className="">
            <Image
              className="w-[42px] h-[42px] pb-[10px]"
              src={IconExperience}
              alt="icon experience"
            />
            <p className="text-base text-black dark:text-slate-300 font-bold">
              6+ Years
            </p>
          </div>
          <div className="">
            <Image
              className="w-[42px] h-[42px] pb-[10px]"
              src={IconMentor}
              alt="icon experience"
            />
            <p className="text-base text-black dark:text-slate-300 font-bold">
              <Link href="https://www.linkedin.com/in/tim-gaud/">Tim Gaud</Link>
            </p>
          </div>
          <div className="">
            <Image
              className="w-[42px] h-[42px] pb-[10px]"
              src={IconRecognitions}
              alt="icon experience"
            />
            <p className="text-base text-black dark:text-slate-300 font-bold">
              Muzli Recognitions
              <span className="text-base px-3 text-green dark:text-slate-300">
                <a href="https://medium.muz.li/made-with-studio-67-21849f2f5cc4">
                  #33
                </a>
              </span>
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={childVariants}
          className="justify-between flex flex-col gap-10 mb-[60px]"
        >
          <h1 className="text-green text-[25px]">Work Experience</h1>
          <div className="">
            <Experience />
          </div>
          <Button
            title="Download CV"
            onClick={() => console.log("Download CV")}
            showIconRight
            iconRight={downloadIcon}
            children={undefined}
            type={"primary"}
          />
        </motion.div>
      </motion.div>

      <motion.div variants={childVariants} className="w-3/12 flex-auto flex ">
        <div className="NavigationBar flex justify-end gap-5 w-full h-[400px] items-center self-center">
          <Navigation routeNames={["my work", "get in touch"]} justify="end" />
        </div>
      </motion.div>
    </motion.div>
  );
}
