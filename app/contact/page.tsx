"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HoverTypingText, TypingText } from "../../components/CustomTexts";
import Navigation from "../../components/Navigation/Menu";

export default function ContactPage() {
  const navContainerVar = {
    hidden: {
      // y: -100,
      // scale: 0
    },
    show: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.8,
      },
    },
  };

  const motionVariants = {
    hidden: {
      opacity: 0,
      y: 80,
      transition: {
        type: "tween",
        Bounce: 0,
        // stiffness: 300,
        // damping: 140,
      },
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        duration: 0.5,
        // Bounce: 0.1,
        // stiffness: 80,
        // delay: 1.4,
      },
    },
  };

  const linkStyles =
    "text-sm  log:w-[120px] uppercase font-body font-normal  text-black dark:text-green lg:hover:tracking-[5px] hover:font-bold ease-in-out duration-300 ";

  return (
    <div className="flex w-full gap-5  min-h-screen">

      <motion.div
        initial="hidden"
        animate="show"
        variants={motionVariants}
        className="flex flex-col w-full lg:w-7/12 bg-teal-200n lg:justify-center pb-[106px] mx-auto "
      >
        <div className="flex flex-col w-full container  gap-y-20 lg:pb-10 p-5 ">
          <div className="flex flex-col gap-10">
            <h1 className="lg:text-[62px] text-[25px] text-black whitespace-nowrap">
              Get in touch
            </h1>

            <div className="lg:w-9/12">
              <p className="text-[34px] text-black font-normal dark:text-green leading-120">
                I like working on existing ideas, get in touch if you have any.
              </p>
            </div>
          </div>

          <div className="w-full">
            <ul
              role="list"
              className="flex flex-col lg:flex-row gap-5 flex-wrap"
            >
              <li className="flex">
                <div className="overflow-hidden">
                  <p className="text-sm uppercase font-body font-normal  text-black dark:text-green">
                  Lets Chat
                  </p>
                  <p className="text-base text-slate-400 truncate font-light font-body">
                    <Link href="mailto:hello@ericandtheweb.com" target="_blank">
                      hello@ericandtheweb.com
                    </Link>
                  </p>
                </div>
              </li>
              <li className="flex">
                <div className="overflow-hidden">
                  <p className="text-sm uppercase font-body font-normal  text-black dark:text-green">
                  Location
                  </p>
                  <p className="text-base text-slate-400 truncate font-light font-body">
                    London, UK
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* social links */}
          <div className="flex w-full flex-row  flex-wrap lg:flex-nowrap gap-5 lg:gap-0 lg:justify-between lg:w-6/12">
            <Link href="https://twitter.com/EricandTheWeb" target="_blank">
              <p className={`${linkStyles}`}>Twitter</p>
            </Link>
            <Link
              href="https://www.instagram.com/ericandtheweb/"
              target="_blank"
            >
              <p className={`${linkStyles} text-center`}>Instagram</p>
            </Link>
            <Link
              href="https://www.linkedin.com/in/eric-manasse/"
              target="_blank"
            >
              <p className={`${linkStyles} text-center`}>LinkedIn</p>
            </Link>
            <Link href="https://dribbble.com/ericandtheweb" target="_blank">
              <p className={`${linkStyles} text-center`}>Dribbble</p>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
