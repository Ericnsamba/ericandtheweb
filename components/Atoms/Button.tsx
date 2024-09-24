import React, { useLayoutEffect } from "react";
import classNames from "classnames";
import gsap from "gsap";
import "./Atoms.css";
// Magnetic Pastel button

// Define the props for the Button component
interface ButtonProps {
  state: "primary" | "secondary" | "accent";
  label?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  mode?: "default" | "contrast";
}

const Button: React.FC<ButtonProps> = ({
  state,
  label,
  iconLeft,
  iconRight,
  mode = "default",
}) => {
  useLayoutEffect(() => {
    let animated = gsap.context(() => {
      // const tl = gsap.timeline({ paused: true });

      // const buttons = gsap.utils.toArray(".button");
      // buttons.forEach((item:any) => {
      //   let span = item.querySelector("span");
      //   let tl = gsap.timeline({ paused: true });

      //   tl.to(span, { duration: 0.4, yPercent: -150, ease: "power4.in" });
      //   tl.set(span, { yPercent: 150 });
      //   tl.to(span, { duration: 0.4, yPercent: 0 });

      //   item.addEventListener("mouseenter", () => tl.play(0));
      // });
    });

    return () => animated.revert();
  }, []);

  // =============================================================================

  // =============================================================================

  // Define the button styles based on the state and mode
  const buttonStyles = classNames(
    "button px-6 py-3 flex items-center justify-center rounded-[64px] transition-all btn overflow-hidden",
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

export default Button;
