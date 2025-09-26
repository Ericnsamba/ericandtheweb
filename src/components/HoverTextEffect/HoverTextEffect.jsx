"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import "./HoverTextEffect.css";

gsap.registerPlugin(SplitText);

const HoverTextEffect = ({ text, className = "", as = "span", href, ...props }) => {
  const linkRef = useRef(null);

  useGSAP(() => {
    const link = linkRef.current;
    if (!link) return;

    // Get both elements (visible and animated versions)
    const elements = link.querySelectorAll(`${as}`);
    const visibleElement = elements[0];
    const animatedElement = elements[1];

    // Create SplitText for both elements
    const visibleSplit = new SplitText(visibleElement, { type: "chars" });
    const animatedSplit = new SplitText(animatedElement, { type: "chars" });

    // Add char class to all characters
    visibleSplit.chars.forEach((char) => {
      char.classList.add("char");
    });
    animatedSplit.chars.forEach((char) => {
      char.classList.add("char");
    });

    // Set initial state - animated text starts below
    gsap.set(animatedSplit.chars, { y: "110%" });

    const handleMouseEnter = () => {
      // Move visible text up
      gsap.to(visibleSplit.chars, {
        y: "-110%",
        stagger: 0.05,
        duration: 0.8,
        ease: "expo.inOut",
      });

      // Move animated text into view
      gsap.to(animatedSplit.chars, {
        y: "0%",
        stagger: 0.05,
        duration: 0.8,
        ease: "expo.inOut",
      });
    };

    const handleMouseLeave = () => {
      // Move animated text down
      gsap.to(animatedSplit.chars, {
        y: "110%",
        stagger: 0.05,
        duration: 0.8,
        ease: "expo.inOut",
      });

      // Move visible text back to center
      gsap.to(visibleSplit.chars, {
        y: "0%",
        stagger: 0.05,
        duration: 0.8,
        ease: "expo.inOut",
      });
    };

    link.addEventListener("mouseenter", handleMouseEnter);
    link.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      link.removeEventListener("mouseenter", handleMouseEnter);
      link.removeEventListener("mouseleave", handleMouseLeave);
      visibleSplit.revert();
      animatedSplit.revert();
    };
  }, [as]);

  const Tag = as;

  return (
    <div className={`hover-text-effect ${className}`} {...props}>
      <a ref={linkRef} href={href}>
        <Tag>{text}</Tag>
        <Tag>{text}</Tag>
      </a>
    </div>
  );
};

export default HoverTextEffect;