import React, { useLayoutEffect, useRef } from "react";
import classNames from "classnames";
import gsap from "gsap";
import "./Atoms.css";

// Define the props for the Button component
interface ButtonProps {
  state: "primary" | "secondary" | "accent";
  label?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  mode?: "default" | "contrast";
}

const ButtonMagnetic: React.FC<ButtonProps> = ({
  state,
  label,
  iconLeft,
  iconRight,
  mode = "default",
}) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  // useLayoutEffect(() => {
  //   let animated = gsap.context(() => {
  //     let btn = document.querySelectorAll(".btn").forEach((btn) => {
  //       btn.addEventListener("mousemove", (e) => {
  //         let x = e.offsetX;
  //         let y = e.offsetY;
  //         let btnWidth = btn.clientWidth;
  //         let btnHeight = btn.clientHeight;
  //         let transX = x - btnWidth / 2;
  //         let transY = y - btnHeight / 2;
  //         btn.style.transform = `translateX(${transX}px) translateY(${transY}px)`;
      
  //         let mx = e.pageX - btn.offsetLeft;
  //         let my = e.pageY - btn.offsetTop;
  //         btn.style.setProperty("--x", mx + "px");
  //         btn.style.setProperty("--y", my + "px");
  //       });
  //       btn.addEventListener("mouseout", (e) => {
  //         btn.style.transform = "";
  //       });
  //     });
      
  //   });

  //   return () => animated.revert();
  // }, []);


  useLayoutEffect(() => {
    const buttons = buttonRef.current?.querySelectorAll(".btn");

    const handleMouseMove = (e: MouseEvent, btn: HTMLDivElement) => {
      const x = e.offsetX;
      const y = e.offsetY;
      const btnWidth = btn.clientWidth;
      const btnHeight = btn.clientHeight;
      const transX = x - btnWidth / 2;
      const transY = y - btnHeight / 2;
      
      btn.style.transform = `translateX(${transX}px) translateY(${transY}px)`;

      const mx = e.pageX - btn.offsetLeft;
      const my = e.pageY - btn.offsetTop;

      btn.style.setProperty("--x", mx + "px");
      btn.style.setProperty("--y", my + "px");
    };

    const handleMouseOut = (btn: HTMLDivElement) => {
      btn.style.transform = "";
    };

    const animated = gsap.context(() => {
      buttons?.forEach((btn) => {
        btn.addEventListener("mousemove", (e) => handleMouseMove(e as MouseEvent, btn as HTMLDivElement));
        btn.addEventListener("mouseout", () => handleMouseOut(btn as HTMLDivElement));
      });
    }, buttonRef);

    return () => {
      animated.revert();
      buttons?.forEach((btn) => {
        btn.removeEventListener("mousemove", (e) => handleMouseMove(e as MouseEvent, btn as HTMLDivElement));
        btn.removeEventListener("mouseout", () => handleMouseOut(btn as HTMLDivElement));
      });
    };
  }, []);

  // =============================================================================

  // =============================================================================

  // Define the button styles based on the state and mode
  const buttonStyles = classNames(
    "btn button px-6 py-3 flex items-center justify-center rounded-[64px] transition-all btn overflow-hidden",
    {
      // Primary state styles
      "Primary bg-black text-white hover:bg-gray-900":
        state === "primary" && mode === "default",
      "Primary bg-white text-black hover:bg-gray-200":
        state === "primary" && mode === "contrast",

      // Secondary state styles
      "Secondary border-2 border-black text-black bg-transparent hover:bg-black hover:text-white":
        state === "secondary" && mode === "default",
      "Secondary border-2 border-white text-white bg-transparent hover:bg-white hover:text-black":
        state === "secondary" && mode === "contrast",

      // Accent state styles (customizable color)
      "Accent bg-blue-500 text-white hover:bg-blue-600":
        state === "accent" && mode === "default",
      "Accent bg-yellow-500 text-black hover:bg-yellow-600":
        state === "accent" && mode === "contrast",
    }
  );

  return (
    <button className={buttonStyles}>
      {/* Icon Left */}
      {iconLeft && <span className="mr-2">{iconLeft}</span>}

      {/* Label */}
      {label && <span>{label}</span>}

      {/* Icon Right */}
      {iconRight && <span className="ml-2">{iconRight}</span>}
    </button>
  );
};

export default ButtonMagnetic;
