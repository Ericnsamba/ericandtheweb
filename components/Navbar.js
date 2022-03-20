import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "react-feather";
import memojiImage from "../public/assets/images/ericMemoji.png";
import ToggleButton from "../components/ToggleButton";

const NavBar = ({ fixed }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className="flex flex-wrap py-2 mt-3">
      <div className="w-full px-4">
      <div className="lg:hidden flex justify-end mb-2">
                  <ToggleButton />
                </div>
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3  rounded-xl border border-slate-200 ">
          <div className="container mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <div className="flex items-cente">
                <Link href="/">
                  <Image
                    className="mr-10"
                    src={memojiImage}
                    alt="Picture of the author"
                    width={60}
                    height={64}
                  />
                </Link>
                <div className="flex items-start flex-col	self-center	ml-5">
                  <strong className="text-forestGreen dark:text-green font-display font-body">
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
            <div
              className={
                "lg:flex flex-grow items-center justify-center" +
                (menuOpen ? " flex" : " hidden")
              }
              id="example-navbar-info"
            >
              <div className="flex flex-col items-center lg:flex-row list-none lg:ml-auto lg:w-1/2	px-8 justify-between">
                <Link href="/">
                  <a
                    onClick={() => setMenuOpen(false)}
                    className="menuItems text-center py-4 font-body uppercase text-sm	text-forestGreen dark:text-green opacity-50	hover:opacity-100"
                  >
                    Home
                  </a>
                </Link>
                <Link href="/about">
                  <a
                    onClick={() => setMenuOpen(false)}
                    className="menuItems text-center py-4 font-body uppercase text-sm	text-forestGreen dark:text-green opacity-50	hover:opacity-100"
                  >
                    About me
                  </a>
                </Link>
                {/* <Link href="/portfolio">
                  <a
                    onClick={() => setMenuOpen(false)}
                    className="menuItems text-center py-4 font-body uppercase text-sm	text-forestGreen dark:text-green opacity-50	hover:opacity-100"
                  >
                    Portfolio
                  </a>
                </Link> */}
                <Link href="/contact">
                  <a
                    onClick={() => setMenuOpen(false)}
                    className="menuItems text-center py-4 font-body uppercase text-sm	text-forestGreen dark:text-green opacity-50	hover:opacity-100"
                  >
                    Contact
                  </a>
                </Link>
                <div className="lg:flex hidden">
                  <ToggleButton />
                </div>
                {/* <ToggleButton className="menuItems"/> */}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
