"use client";
import { motion } from "framer-motion";
import { slide, opacity, perspective } from "./anim";
import "./styles.css";
import Header from "@/components/Header";
import { usePathname } from "next/navigation";
import AnimatedLetters from "../Animations/AnimatedLetters";

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

const text = {
  initial: {
    opacity: 1,
  },
  enter: {
    top: 1000,
  },
};

const Transition: React.FC<TransitionProps> = ({ children }) => {
  const routes = {
    "/": "Index",
    "/about": "about",
    "/projects": "projects",
  };
  const router = usePathname();
  console.log("🚀 ~ router ===>", routes[router]);
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
            staggerChildren: 0.5,
          }}
        >
          <div className="hidden lg:flex">
            <Header />
          </div>
        </motion.div>

        <motion.div className="">{children}</motion.div>
      </motion.div>

      <motion.div
        className="slide-in bg-yellow-400t bg-black"
        initial={{
          scaleY: 1,
        }}
        animate={{
          scaleY: 0,
        }}
        exit={{
          opacity: 0,
          scaleY: 1,
        }}
        transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
      >
      </motion.div>
      {/* <motion.h1
          className="route text-background uppercase origin-top"
          {...anim(text)} // animated route name
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        >
          {routes[router]}
        </motion.h1> */}
      <motion.div
        className="slide-out bg-black"
        initial={{
          scaleY: 1
        }} // Opposite of slide-in
        animate={{
          scaleY: 0
        }}
        exit={{
          scaleY: 0
        }}
        transition={{delay: 1, duration: 2, ease: [0.22, 1, 0.36, 1] }}
      >
        <AnimatedLetters title={`${{...anim(text)}}`} className={"route text-8xl text-background uppercase block flex-row"}/>
        {/* <motion.h1
          className="route text-background uppercase"
          {...anim(text)} // animated route name
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        >
          {routes[router]}
        </motion.h1> */}
      </motion.div>
    </>
  );
};

export default Transition;
