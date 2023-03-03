"use client";

import { useContext, useEffect, useRef } from "react";
import {
  motion,
  MotionValue,
  useAnimation,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import EricPhoto from "../../public/assets/images/eric-picture.png";
import downloadIcon from "../../public/assets/icons/Icons-up-right.svg";
// import {IconExperience, IconMentor, IconRecognitions} from "../public/assets/icons";
import Experience from "../../components/Experience";
import IconExperience from "../../public/assets/icons/IconExperience.svg";
import IconMentor from "../../public/assets/icons/IconMentor.svg";
import IconRecognitions from "../../public/assets/icons/IconRecognitions.svg";
import Link from "next/link";
import Button from "../../components/Atoms/Button";
import NavButton from "../../components/Navigation/NavButton";
import LocomotiveScroll from "locomotive-scroll";
// import { bodyVariants, childVariants, navVariants } from "../../utils/motion";
import { navVariants, bodyVariants } from "../../utils/motion";
import Navigation from "../../components/Navigation/Menu";
import { SmoothScrollContext } from "../../hooks/SmoothScroll.context";
import { useInView } from "react-intersection-observer";

export default function AboutPage() {
  const { scrollYProgress, scrollY } = useScroll();
  const scrollRef = useRef(null);
  // const scaleX = useSpring(scrollYProgress, {
  //   stiffness: 100,
  //   damping: 30,
  //   restDelta: 0.001,
  // });

  const { scroll } = useContext(SmoothScrollContext);

  useEffect(() => {}, []);

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

  function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
  }

  let y = useTransform(scrollY, [0, 500], ["50%", "0%"]);
  // const y = useParallax(scrollYProgress, 30);
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  const boxVariant = {
    visible: {
      opacity: 1,
      y: 1,
      transition: { duration: 1 },
    },
    hidden: {
      opacity: 0,
      y: -80,
    },
  };

  const imageVariant = {
    visible: {
      opacity: 1,
      // height: 285,
      transition: { duration: 1 },
    },
    hidden: {
      opacity: 1,
      // height: 210,
    },
  };

  return (
    <motion.div
      // data-scroll-section
      //   variants={navVariants}
      className={`flex`}
    >
      {/* Body section */}
      <motion.div
        initial="hidden"
        animate="show"
        // exit="exitState"
        variants={bodyVariants}
        className="mx-auto container w-full lg:w-8/12 flex flex-col gap-16 py-32 overflow-y-scroll scrollbar-hide px-5"
      >
        <motion.div
          variants={childVariants}
          className="w-full flex flex-col gap-10"
        >
          <motion.div 
          // style={{ height: -y }} 
          ref={ref}
         variants={imageVariant}
         initial="hidden"
         animate={control}
          className="coverImg bg-green">
            <Image
              className="rounded-2xl w-full h-[485px] object-cover aspect-1"
              src={EricPhoto}
              alt="Picture of the author"
              priority
            />
          </motion.div>

          <motion.div variants={childVariants} className="flex flex-col gap-5">
            <p className="text-[34px] text-black dark:text-green font-normal">
              I'm Eric, a product designer and a creative developer.
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

        {/* Years of experience and Mentor */}
        <motion.div
          variants={childVariants}
          className="flex justify-between gap-5 w-[600px]"
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
          ref={ref}
          variants={boxVariant}
          initial="hidden"
          animate={control}
          // variants={childVariants}
          className="justify-between flex flex-col gap-10 mb-[60px]"
        >
          <h1 className="text-green text-[25px]">Work Experience</h1>
          <div className="">
            <Experience />
          </div>
          <Button
            title="My Digital CV"
            onClick={"https://read.cv/eric_manasse"}
            showIconRight
            iconRight={downloadIcon}
            children={undefined}
            type={"primary"}
            target="_blank"
          />
        </motion.div>
      </motion.div>
      {/* Body section ends here */}
    </motion.div>
  );
}
