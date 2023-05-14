"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "react-feather";
import memojiImage from "../../public/assets/images/ericMemoji.png";
import ToggleButton from "../ToggleButton";
import Navigation from "./Menu";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className="bg-pureBlack/40 border border-black/20 backdrop-blur-lg z-30 transition-all py-4 px-5 rounded-[20px]   mx-auto w-[794px]">
      <div className="w-full">
        <nav className="w-full relative flex items-center justify-between rounded-xl ">
          <div className="w-full relative flex justify-between items-center">
            <div className="flex">
              <Link href="/">
                <Image
                  className="w-[38px] h-[38px] rounded-full border border-gray"
                  src={memojiImage}
                  alt="Picture of the author"
                />
              </Link>
              <div className="flex items-start flex-col	self-center	ml-[10px]">
                <strong className="text-gray2 text-sm font-display font-bold">
                  Eric & <br />
                  The Web
                </strong>
              </div>
            </div>

            <div>
              <Navigation
                routeNames={["home", "about me", "portfolio", "get in touch"]}
              />
            </div>

            <div>
              {/* <ToggleButton /> */}
              <Link href="https://read.cv/eric_manasse" target="_blank" className="cursor__grow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-gray2 cursor__grow"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
