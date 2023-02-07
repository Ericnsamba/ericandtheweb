import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles  from "../../styles/buttonStyles.module.css";

interface Props {
  children: React.ReactNode;
  onClick: any;
  title: string;
  disabled?: boolean;
  state?: "default" | "cancel" | "outlined" | "success" | "underlined";
  size?: "small" | "medium" | "large";
  type: "primary" | "secondary" | "danger";
  iconRight?: any;
  iconLeft?: any;
  showIconLeft?: boolean;
  showIconRight?: boolean;
  target?: string;
}

const Button = (props: Props) => {
  let className =
  "button-pil flex flex-row gap-2 bg-green/10 dark:bg-white hover:bg-green ";
    // "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";
  if (props.type === "secondary") {
    className =
      "bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded";
  }
  if (props.type === "danger") {
    className =
      "bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded";
  }

  return (
    <Link className="self-center" href={props.onClick} target={`${props.target}`} >
      <div className={`${styles.buttonPill} bg-green/20 dark:bg-white`}>
      {/* <div className={`${className} min-w-[166px] w-max  py-[13px] px-[20px] justify-center items-center rounded-full transition-all`}> */}
        {props.showIconLeft ? (
          <Image
            className="bg-black rounded-2xl w-[24px] h-[24px] object-cover"
            src={props.iconLeft}
            alt="Picture of the author"
            priority
          />
        ) : null}
        <div className="text-forestGreen font-bold text-base text-center">
          {props.title}
        </div>
        {props.showIconRight ? (
          <Image
            className="bg-slate-200 rounded-2xl w-[24px] h-[24px] object-cover"
            src={props.iconRight}
            priority
            alt={""}
          />
        ) : null}
      </div>
    </Link>
  );
};

export default Button;
