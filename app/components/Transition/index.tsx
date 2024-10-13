"use client";
import { motion } from "framer-motion";
import { slide, opacity, perspective } from "./anim";
import "./styles.css";
import Header from "@/components/Header";

interface TransitionProps {
  children: React.ReactNode;
}

const anim = (variants) => {
  return {
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants,
  };
};

const Transition: React.FC<TransitionProps> = ({ children }) => {
  return (
    <>
      <motion.div className="">
        <motion.div
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        exit={{ y: -200 }}
        transition={{ 
            duration: 1, 
            ease: [0.22, 1, 0.36, 1], 
            delay: 0.6,
            staggerChildren: 0.5
            }} >
        <Header />
        </motion.div>

        <motion.div className="" >
          {children}
        </motion.div>
      </motion.div>

      <motion.div
        className="slide-in"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="slide-out"
        initial={{ scaleY: 1 }} // Opposite of slide-in
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
};

export default Transition;
