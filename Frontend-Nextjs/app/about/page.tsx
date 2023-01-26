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
import { useEffect } from "react";
import NavButton from "../../components/Navigation/NavButton";
import LocomotiveScroll from "locomotive-scroll";

export default function AboutPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // const scroll = new LocomotiveScroll({
  //   el: document.querySelector("[data-scroll-container]"),
  //   smooth: true,
  //   tablet: { smooth: true },
  //   smartphone: { smooth: true }
  // });

  useEffect(() => {}, []);

  return (
    <div className={` ${styles.container} flex mb-[80px] h-full gap-x-5`}>
      <div className="w-3/12">
        <div className="NavigationBar flex justify-between w-full h-[400px] items-center">
          <NavButton type={"default"} href="./">
            home
          </NavButton>
        </div>
      </div>
      <motion.div className="progress-bar" style={{ scaleX }} />

      <div className="mx-auto container w-6/12 flex flex-col gap-16">
        <div className="w-full flex flex-col gap-10">
          {/* <img className="picture" src="https://picsum.photos/800/500" alt="tadaam" /> */}
          <Image
            className="rounded-2xl w-full h-[285px] object-cover"
            src={EricPhoto}
            alt="Picture of the author"
            priority
          />

          <div className="flex flex-col gap-5">
            <p className="text-[34px] text-black dark:text-green font-normal">
              I'm Eric, a product designer and app developer.
            </p>
            <p className="text-base text-black dark:text-green font-normal">
              I have spent the last 4 years designing & building web
              applications for some of the world's biggest asset managers like
              Generali, Boston Partners, CTI and many others, whilst working at
              Kurtosys. I’m always learning more, i am pretty much a javaScript
              and its frameworks lover. I am passionate about beautiful, clean
              and minimal designs. I learn quickly and i don't sleep till i
              solve a bug or i am happy with my design.
            </p>
          </div>
        </div>

        <div className="flex justify-between w-full ">
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
        </div>

        <div className="justify-between flex flex-col gap-10 mb-[60px]">
          <h1 className="text-green text-[25px]">Work and Experience</h1>
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
        </div>
      </div>

      <div className="w-3/12 flex-auto">
        <div className="NavigationBar flex justify-end gap-5 w-full h-[400px] items-center">
          <NavButton type={"default"} href="./portfolio">
            my Work
          </NavButton>
          <NavButton type={"default"} href="./contact">
            get in Touch
          </NavButton>
        </div>
      </div>
    </div>
  );
}
