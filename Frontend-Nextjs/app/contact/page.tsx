"use client";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import NavButton from "../../components/Navigation/NavButton";
import { motion } from "framer-motion";
import {
  hoverTextContainer,
  hoverTextVariant,
  textContainer,
  textVariant2,
} from "../../utils/motion";
import { HoverTypingText, TypingText } from "../../components/CustomTexts";

export default function ContactPage() {
  return (
    <div className="flex w-full gap-5">
      <div className="w-3/12 flex items-center">
        <div className="NavigationBar flex gap-5 w-full h-[400px] ">
          <NavButton type={"default"} href="./">
            Home
          </NavButton>
          <NavButton type={"default"} href="../portfolio">
            my Work
          </NavButton>
          <NavButton type={"default"} href="../contact">
            My work
          </NavButton>
        </div>
      </div>

      <div className="flex flex-col w-9/12 bg-teal-200n justify-center">
        <div className="flex flex-col  w-6/12 gap-y-20 pb-10">
          <div className="flex flex-col gap-10">
            <h1 className="text-[54px] text-green whitespace-nowrap">
              Get in touch
            </h1>

            <div className="">
              <p className="text-[34px] text-black font-normal dark:text-green leading-120">
                I like working on existing ideas, get in touch if you have any.
              </p>
            </div>
          </div>

          <div className="w-full">
            <ul role="list" className="flex flex-row justify-between">
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
              <li className="flex">
                <div className="overflow-hidden">
                  <p className="text-sm uppercase font-body font-normal  text-black dark:text-green">
                    Lets Chat
                  </p>
                  <p className="text-base text-slate-400 truncate font-light font-body">
                    hello@ericandthweb.com
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="flex w-full flex-row justify-between">
            <Link href="https://twitter.com/EricandTheWeb" target="_blank">
              <p className="text-sm uppercase font-body font-normal  text-black dark:text-green">
                Twitter
              </p>
            </Link>
            <Link
              href="https://www.instagram.com/ericandtheweb/"
              target="_blank"
            >
              <p className="text-sm uppercase font-body font-normal  text-black dark:text-green">
                Instagram
              </p>
            </Link>
            <Link
              href="https://www.linkedin.com/in/eric-manasse/"
              target="_blank"
            >
              <p className="text-sm uppercase font-body font-normal  text-black dark:text-green">
                LinkedIn
              </p>
            </Link>
            <Link href="https://dribbble.com/ericandtheweb" target="_blank">
              <p className="text-sm uppercase font-body font-normal  text-black dark:text-green">
                Dribbble
              </p>
            </Link>

            {/* <Link href="https://dribbble.com/ericandtheweb" target="_blank">
             
                  <HoverTypingText title="Dribbble" textStyles={`text-sm uppercase`}/>
                  <TypingText title="I'm Eric," textStyles="text-left" />

            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}
