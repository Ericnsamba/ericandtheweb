"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "react-feather";
import memojiImage from "../../public/assets/images/ericMemoji.png";
import ToggleButton from "../ToggleButton";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className="backdrop-blur-lg bg-white/10 z-30 transition-all py-4 px-5 lg:px-0 fixed w-full mx-auto max-w-screen-xl">
      {/* <div className="flex flex-wrap py-2"> */}
      <div className="w-full">
        <nav className="w-full relative flex items-center justify-between rounded-xl ">
          <div className="w-full relative flex justify-between items-center">
            <div className="flex">
              <Link href="/">
                <Image
                  className="w-[40px] h-[40px] lg:w-[64px] lg:h-[64px]"
                  src={memojiImage}
                  alt="Picture of the author"
                  // width={60}
                  // height={64}
                />
              </Link>
              <div className="flex items-start flex-col	self-center	ml-5">
                <strong className="text-black lg:text-[20px] text-xs font-normal font-display">
                  Eric & The Web
                </strong>
                <span className="text-slate-400 text-xs lg:text-base uppercase	font-body font-light pt-2">
                  Designer & Developer
                </span>
              </div>
            </div>

            <div>
              <ToggleButton />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
