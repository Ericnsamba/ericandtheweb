import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import { Camera, Dribbble, GitHub, Twitter, Linkedin, Instagram } from "react-feather";

const Footer = () => {
  const [mode, setMode] = useState("auto");
  return (
    <div className="mt-10  mb-6 lg:mb-0">
      <footer id="footer" className="relative z-50">
        <div className="border-gray-200 dark:border-gray-700 py-2">
          <div className="mx-auto container px-4 xl:px-12 2xl:px-4">
            <div className="lg:flex">
              <div className="w-full lg:w-1/2 flex items-start lg:justify-start justify-center">
                {/* footer icons */}
                <div className="flex items-center mb-6">
                  <a href="https://github.com/Ericnsamba" target="_blank">
                    <div className="px-4">
                      <GitHub  size={24} className="text-black cursor-pointer hover:text-green "/>
                    </div>
                  </a>
                  <a href="https://twitter.com/EricandTheWeb" target="_blank">
                    <div className="px-4">
                      <Twitter  size={24} className="text-black cursor-pointer hover:text-green "/>
                    </div>
                  </a>
                  <a href="https://www.instagram.com/ericandtheweb/" target="_blank">
                    <div className="px-4">
                      <Instagram  size={24} className="text-black cursor-pointer hover:text-green "/>
                    </div>
                  </a>
                  <a href="https://www.linkedin.com/in/eric-manasse/" target="_blank">
                    <div className="px-4">
                      <Linkedin  size={24} className="text-black cursor-pointer hover:text-green "/>
                    </div>
                  </a>
                  <a href="https://dribbble.com/ericandtheweb" target="_blank">
                    <div className="px-4">
                      <Dribbble  size={24} className="text-black cursor-pointer hover:text-green "/>
                    </div>
                  </a>


                </div>
              </div>
              <div className="w-full lg:w-1/2 lg:mb-0 flex lg:justify-end justify-center items-start">
                <ul>
                  <li>
                    <Link href="javascript:void(0)">
                      <a className="text-base font-bold text-body lg:text-sm leading-none text-black">
                        MY CV
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
