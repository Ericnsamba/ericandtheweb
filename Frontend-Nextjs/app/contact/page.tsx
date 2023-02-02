"use client";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import NavButton from "../../components/Navigation/NavButton";
import { motion } from "framer-motion";
import {
  bodyVariants,
  hoverTextContainer,
  hoverTextVariant,
  textContainer,
  textVariant2,
} from "../../utils/motion";
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

  const menuItemsVar = {
    hidden: {
      y: -800,
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

  const motionVariants = {
    hidden: {
      opacity: 0,
      x: 80,
      transition: {
        type: "tween",
        Bounce: 0,
        // stiffness: 300,
        // damping: 140,
      },
    },
    show: {
      opacity: 1,
      x: 0,
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
    "text-sm uppercase font-body font-normal  text-black dark:text-green hover:tracking-[5px] hover:font-bold ease-in-out duration-300 ";

  return (
    <div className="flex w-full gap-5">
      <div className="w-3/12  items-center hidden lg:flex">
        <motion.div
          variants={navContainerVar}
          initial="hidden"
          animate="show"
          className="NavigationBar flex gap-5 w-full h-[400px] "
        >
          <Navigation routeNames={["home", "about me", "my work"]} />
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        animate="show"
        // exit="exitState"
        variants={motionVariants}
        className="flex flex-col w-full lg:w-9/12 bg-teal-200n lg:justify-center py-[106px]"
      >
        <div className="flex flex-col w-full container lg:w-6/12 gap-y-20 lg:pb-10 p-5">
          <div className="flex flex-col gap-10">
            <h1 className="lg:text-[54px] text-[25px] text-green whitespace-nowrap">
              Get in touch
            </h1>

            <div className="">
              <p className="text-[34px] text-black font-normal dark:text-green leading-120">
                I like working on existing ideas, get in touch if you have any.
              </p>
            </div>
          </div>

          <div className="w-full">
            <ul role="list" className="flex flex-row gap-5 flex-wrap">
            <li className="flex">
                <div className="overflow-hidden">
                  <p className="text-sm uppercase font-body font-normal  text-black dark:text-green">
                    Lets Chat
                  </p>
                  <p className="text-base text-slate-400 truncate font-light font-body">
                    <Link href="hello@ericandtheweb.com" target="_blank">
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
                    Based in London
                  </p>
                </div>
              </li>
              
            </ul>
          </div>

          {/* social links */}
          <div className="flex w-full flex-row justify-between flex-wrap gap-5">
            <Link href="https://twitter.com/EricandTheWeb" target="_blank">
              <p className={`${linkStyles}`}>Twitter</p>
            </Link>
            <Link
              href="https://www.instagram.com/ericandtheweb/"
              target="_blank"
            >
              <p className={`${linkStyles}`}>Instagram</p>
            </Link>
            <Link
              href="https://www.linkedin.com/in/eric-manasse/"
              target="_blank"
            >
              <p className={`${linkStyles}`}>LinkedIn</p>
            </Link>
            <Link href="https://dribbble.com/ericandtheweb" target="_blank">
              <p className={`${linkStyles}`}>Dribbble</p>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
