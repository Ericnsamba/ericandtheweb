"use client";
import React, { useRef } from "react";
import "./MenuBtn.css";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const MenuBtn = ({ isOpen, toggleMenu }) => {
  const container = useRef();
  const menuBtnOpen = useRef(null);
  const menuBtnClose = useRef(null);

  useGSAP(
    () => {
      gsap.to(menuBtnOpen.current, {
        y: isOpen ? -24 : 0,
        duration: 1,
        delay: 0.75,
        ease: "power2.out",
      });
      gsap.to(menuBtnClose.current, {
        y: isOpen ? 0 : 24,
        duration: 1,
        delay: 0.75,
        ease: "power2.out",
      });
    },
    [isOpen],
    { scope: container }
  );

  return (
    <div
      ref={container}
      className={`menu-toggle ${isOpen ? "opened" : "closed"}`}
      onClick={toggleMenu}
    >
      <div className="menu-copy">
        <p id="menu-open" ref={menuBtnOpen} className="text-grey_1 ">
          <a>Menu</a>
        </p>
        <p id="menu-text" ref={menuBtnClose} className="text-Lace_Veil ">
          <a>Close</a>
        </p>
      </div>
    </div>
  );
};

export default MenuBtn;
