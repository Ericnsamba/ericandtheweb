import React from "react";
import styles from "./bubbleText.module.css";

// Define the props type for BubbleText
interface BubbleTextProps {
  text: string;
  className?: string;
}

const BubbleText: React.FC<BubbleTextProps> = ({ text, className }) => {
  return (
    <h2 className={`${className} cursor-pointer text-Lace_Veil`}>
      {text.split("").map((char, idx) => (
        <span className={styles.hoverText} key={idx}>
          {char}
        </span>
      ))}
    </h2>
  );
};

export default BubbleText;