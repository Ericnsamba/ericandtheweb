import React from "react";
import Link from "next/link";
import "./MenuBar.css";
import MenuBtn from "../MenuBtn/MenuBtn";

const MenuBar = ({ isOpen, toggleMenu, closeMenu }) => {
  return (
    <div className="menu-bar mix-blend-difference p-6 lg:p-10">
      <div className="menu-toggle-wrapper w-16">
        <MenuBtn isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>

      <div className="logo text-Lace_Veil" onClick={closeMenu}>
        <Link href="/">
        <p className="text-Lace_Veil font-bold  text-center">Eric Manasse</p></Link>
      </div>

      <div className="portfolio-year w-16">
      <Link href="/portfolio">
      <p className="Portfolio_text text-coral ">Portfolio</p>
      </Link>
        
      </div>
    </div>
  );
};

export default MenuBar;
