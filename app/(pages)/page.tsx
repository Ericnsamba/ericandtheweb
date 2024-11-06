"use client";
import BubbleText from "@/components/Animations/BubbleText";
import Transition from "@/components/Transition/index";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedLetters from "@/components/Animations/AnimatedLetters";
import { heading_1, heading_2 } from "@/utils/styles";
import "./page.css";
import AnimatedTitle from "@/components/Animations/AnimatedTitle";

const Home = () => {
  const lg_row1 =
    "lg:col-start-3 lg:col-span-10 lg:items-center lg:inline-flex lg:flex-row lg:pr-6 lg:gap-[2vw]";
  const lg_row2 =
    "lg:col-start-1 lg:col-span-10  lg:items-center lg:inline-flex lg:flex-row lg:gap-[2vw] lg:pl-6";

  const hero_imageStyle = "w-[158.75vw] h-[40.83vh] bg-slate-400 object-cover";
  const img_container =
    "flex w-[36.1vw] h-[188px] lg:w-[36vw] lg:h-[188px] bg-slate-400 object-cover overflow-hidden";

  return (
    <section className="h-full lg:min-h-screen px-6 lg:px-20 lg:pt-[20vh] py-10 z-10">
      <div className="flex flex-col gap-6 justify-between lg:gap-[10vh] w-full bg-fuchsia-900t h-full z-10">
        {/* Adjusted the grid to explicitly define rows */}
        <div className="hero flex flex-col gap-4 lg:grid lg:grid-cols-12 lg:grid-rows-2 w-full lg:gap-y-6 bg-">
          {/* row 1 */}
          <div
            className={`flex flex-col-reverse gap-6  justify-end ${lg_row1} bg-blue-500t`}
          >
            <div className="flex flex-col w-[36.1vw] h-[188px] bg-fuchsia-500t justify-start items-start overflow-hidden ">
              <div className={`image w-[58.75vw] h-[401px]`}>
                {/* <div className={`w-[58.75vw] h-[188px] justify-end items-end`}> */}
                <Image
                  // className={`w-[1570px]`}
                  src="/medias/hero_eric.jpg" //"/medias/mambo_mambo.jpeg"
                  alt="Eric Manasse"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>

            <div className="flex-col inline-flex justify-start items-start lg:gap-6 overflow-hidden ">
            <AnimatedTitle
                title={"Eric Manasse"}
                className={heading_1 + ""}
              />

              {/* <AnimatedLetters title="Eric" className={heading_1} />
              <AnimatedLetters title="Manasse" className={heading_1} /> */}
            </div>
          </div>

          {/* row 2 */}
          <div
            className={`flex flex-col-reverse gap-6 items-end justify-start bg-slate-300t ${lg_row2}`}
          >
            <div className="flex-col justify-start items-start lg:gap-6 inline-flex overflow-hidden">
              {/* <h1 className="text-black text-6xl lg:text-8xl font-medium font-inter uppercase lg:leading-[86.40px] tracking-widest">
                  Product
                </h1>
                <h1 className="text-black text-6xl lg:text-8xl font-medium font-inter uppercase lg:leading-[86.40px] tracking-widest">
                  Designer
                </h1> */}
              <AnimatedLetters title="Product" className={heading_1} />
              <AnimatedLetters title="Designer" className={heading_1} />
            </div>

            <div className="flex flex-col w-[36.1vw] h-[188px] bg-fuchsia-500 justify-end items-end overflow-hidden ">
              <div className={`w-[58.75vw] h-[401px]`}>
                {/* <div className={`w-[58.75vw] h-[188px] justify-end items-end`}> */}
                <Image
                  // className={`w-[1570px]`}
                  src="/medias/hero_eric.jpg" //"/medias/mambo_mambo.jpeg"
                  alt="Eric Manasse"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
            {/* <motion.div
                className="image-MotionDiv origin-left"
                initial={{ width: 0, opacity: 1 }}
                animate={{ width: "36vw", opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 1, delay: 2 }}
              >
                <Image
                  className={hero_imageStyle}
                  src="/medias/hero_eric.jpg"
                  alt="Eric Manasse"
                  width={1000}
                  height={1000}
                />
              </motion.div> */}
          </div>
        </div>

        {/* bottom hero */}
        <div className="w-full justify-between gap-6 flex flex-col md:flex-row mt-16 bottom-0 relative items-start lg:items-end lg:flex-row">
          <p className="text-black text-2xl font-normal font-inter capitalize  tracking-wide">
            Based in London, UK
            <br />
            Specialised in UX / UI and <br />
            Software Development.
          </p>
          <div className="self-end justify-center items-center gap-2 flex">
            <p>
              <span className="text-black text-base font-bold font-inter uppercase leading-snug tracking-tight">
                Scroll
              </span>
              <span className="text-black text-base font-normal font-inter uppercase leading-snug tracking-tight">
                to See more.
              </span>
            </p>
          </div>
        </div>
      </div>
      {/* ===== */}
      <div className="hero_image flex flex-col content-center w-full h-screen bg-fuchsia-400 fixed top-0 -z-[1]">
        <div className="flex justify-center items-center w-[58.75vw] h-full bg-slate-200 self-center">
          <Image
            className={`h-full w-full object-cover`}
            src="/medias/hero_eric.jpg"
            alt="Eric Manasse"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
