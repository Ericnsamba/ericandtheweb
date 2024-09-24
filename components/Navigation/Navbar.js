"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "react-feather";
import memojiImage from "../../public/assets/images/ericMemoji.png";
import ButtonMagnetic from "../Atoms/ButtonMagnetic";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className="z-30 transition-all py-4  mx-auto bg-slate-200o w-full">
      <div className="w-full">
        <nav className="w-full relative flex items-center justify-between rounded-xl ">
          <div className="w-full relative flex justify-between items-center">
            <div className="flex">
              <Link href="/">
                <Image
                  className="w-[38px] h-[38px] rounded-full border border-black"
                  src={memojiImage}
                  alt="Picture of the author"
                />
              </Link>
              <div className="flex items-start flex-col	self-center	ml-[10px]">
                <strong className="text-black text-base font-display font-bold leading-[16px] ">
                  Eric & <br />
                  The Web
                </strong>
              </div>
            </div>
            <div className="py-3 px-6 text-black rounded-full">
              Available for work
            </div>
            {/* Primary button with label and both icons */}
            <ButtonMagnetic
              state="primary"
              label="About me"
              // iconLeft={<FiArrowLeft />}
              mode="default"
            />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
