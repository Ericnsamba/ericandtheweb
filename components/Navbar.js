import React from "react";
import Link from "next/link";
import Image from "next/image";
import memojiImage from "../public/assets/images/ericMemoji.png";

const NavBar = ({ fixed }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <div className="flex flex-wrap py-2">
      <div className="w-full px-4">
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white rounded-xl border border-slate-200">
          <div className="container mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <div className="flex items-cente">
                <Image
                  className="mr-10"
                  src={memojiImage}
                  alt="Picture of the author"
                  width={60}
                  height={64}
                />

                <div className="flex items-start flex-col	self-center	ml-5">
                  <strong className="text-black font-body">
                    Eric & The Web
                  </strong>
                  <span className="text-slate-300	font-body font-light">
                    Designer & Developer
                  </span>
                </div>
              </div>

              <button
                className="text-green cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <i className="fas fa-bars">Menu</i>
              </button>
            </div>
            <div
              className={
                "lg:flex flex-grow items-center justify-center" +
                (menuOpen ? " flex" : " hidden")
              }
              id="example-navbar-info"
            >
              <div className="flex flex-col lg:flex-row list-none lg:ml-auto lg:w-1/2	px-8 justify-between">
                <Link href="/">
                  <a className="text-center py-4 font-body uppercase text-base	text-ForestGreen opacity-50	hover:opacity-100">
                    Home
                  </a>
                </Link>
                <Link href="/about">
                  <a className="text-center py-4 font-body uppercase text-base	text-ForestGreen opacity-50	hover:opacity-100">
                    About me
                  </a>
                </Link>
                <Link href="/portfolio">
                  <a className="text-center py-4 font-body uppercase text-base	text-ForestGreen opacity-50	hover:opacity-100">
                    Portfolio
                  </a>
                </Link>
                <Link href="/contact">
                  <a className="text-center py-4 font-body uppercase text-base	text-ForestGreen opacity-50	hover:opacity-100">
                    Contact
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
