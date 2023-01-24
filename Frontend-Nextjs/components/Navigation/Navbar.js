'use client'
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "react-feather";
import memojiImage from "../../public/assets/images/ericMemoji.png";
import ToggleButton from "../ToggleButton";

const NavBar = ({ fixed }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className="backdrop-blur-xl z-30 transition-all py-4">
    {/* <div className="flex flex-wrap py-2"> */}
      <div className="w-full">
        <nav className="relative flex flex-wrap items-center justify-between rounded-xl ">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div className="flex">
              <Link href="/">
                <Image
                  className=""
                  src={memojiImage}
                  alt="Picture of the author"
                  width={60}
                  height={64}
                />
              </Link>
              <div className="flex items-start flex-col	self-center	ml-5">
                <strong className="text-black text-[20px] font-normal font-display">
                  Eric & The Web
                </strong>
                <span className="text-slate-400	font-body font-light">
                  Designer & Developer
                </span>
              </div>
            </div>

            <button
              className="text-green cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div className="px-4">
                {menuOpen === true ? (
                  <X
                    size={24}
                    className="text-forestGreen dark:text-green cursor-pointer hover:text-green motion-reduce:animate-bounce	"
                  />
                ) : (
                  <Menu
                    size={24}
                    className="text-forestGreen dark:text-green cursor-pointer hover:text-green "
                  />
                )}
              </div>
            </button>
          </div>
          <div>
            <ToggleButton />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
