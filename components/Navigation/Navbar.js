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
    <div className="bg-black/60 border border-black/20 backdrop-blur-lg z-30 transition-all py-4 px-5 rounded-[20px]   mx-auto w-[794px]">
      <div className="w-full">
        <nav className="w-full relative flex items-center justify-between rounded-xl ">
          <div className="w-full relative flex justify-between items-center">
            <div className="flex">
              <Link href="/">
                <Image
                  className="w-[38px] h-[38px]"
                  src={memojiImage}
                  alt="Picture of the author"
                />
              </Link>
              <div className="flex items-start flex-col	self-center	ml-5">
                <strong className="text-gray text-xs font-normal font-display">
                  Eric & The Web
                </strong>
                <span className="text-white/70 text-[10px] uppercase	font-body font-light pt-[4px]">
                  Designer & Developer
                </span>
              </div>
            </div>

            <div>
              <Navigation
                routeNames={["home", "about me", "portfolio", "get in touch"]}
              />
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
