import React from "react";
import Link from "next/link";
import "./MenuBar.css";
import MenuBtn from "../MenuBtn/MenuBtn";

const MenuBar = ({ isOpen, toggleMenu, closeMenu }) => {
  return (
    <div className="menu-bar">
      <div className="menu-toggle-wrapper">
        <MenuBtn isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>

      <div className="logo text-Lace_Veil" onClick={closeMenu}>
        <Link href="/">
        <p className="text-Lace_Veil font-bold">Eric Manasse</p></Link>
      </div>

      <div className="portfolio-year">
        <p className="text-Lace_Veil">&copy; 2024</p>
      </div>
    </div>
  );
};

export default MenuBar;
