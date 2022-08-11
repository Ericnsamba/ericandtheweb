import React, { useState } from "react";
// import { motion } from "framer-motion"
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { Camera, Dribbble, GitHub, Twitter, Linkedin, Instagram } from "react-feather";

const Footer = () => {
  const [mode, setMode] = useState("auto");
  return (
    <div className="mt-10  mb-6 lg:mb-0 border-t border-slate-100 dark:border-[#313332]">
      <footer id="footer" className="relative z-50">
        <div className="border-gray-200 dark:border-gray-700 py-2">
          <div className="mx-auto container px-4 xl:px-12 2xl:px-4">
            <div className="lg:flex">
              <div className="w-full lg:w-1/2 flex items-start justify-start ">
              <ul>
                  <li className="py-8">
                    <Link href="https://read.cv/join/eric_manasse">
                      <a className="text-sm font-bold text-body lg:text-sm leading-none text-forestGreen dark:text-green">
                        MY CV
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>

                {/* footer icons */}
              <div className="w-full lg:w-1/2 lg:mb-0 flex lg:justify-end justify-start items-center">
                <div className="flex items-center">
                  <a href="https://github.com/Ericnsamba" target="_blank">
                    <div className="pr-4 hover:animate-bounce ease-in duration-300">
                      <GitHub  size={24} className="text-forestGreen dark:text-green cursor-pointer hover:text-green "/>
                    </div>
                  </a>
                  <a href="https://twitter.com/EricandTheWeb" target="_blank">
                    <div className="px-4 hover:animate-bounce ease-in duration-300">
                      <Twitter  size={24} className="text-forestGreen dark:text-green cursor-pointer hover:text-green "/>
                    </div>
                  </a>
                  <a href="https://www.instagram.com/ericandtheweb/" target="_blank">
                    <div className="px-4 hover:animate-bounce ease-in duration-300">
                      <Instagram  size={24} className="text-forestGreen dark:text-green cursor-pointer hover:text-green "/>
                    </div>
                  </a>
                  <a href="https://www.linkedin.com/in/eric-manasse/" target="_blank">
                    <div className="px-4 hover:animate-bounce ease-in duration-300">
                      <Linkedin  size={24} className="text-forestGreen dark:text-green cursor-pointer hover:text-green "/>
                    </div>
                  </a>
                  <a href="https://dribbble.com/ericandtheweb ease-in duration-300" target="_blank" >
                    <div className="px-4 hover:animate-bounce ease-in duration-300">
                      <Dribbble  size={24} className="ease-in duration-300 text-forestGreen dark:text-green cursor-pointer hover:text-green "/>
                    </div>
                  </a>


                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
