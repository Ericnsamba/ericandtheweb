import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import "./style.css";
import MenuLinks from "../menuLinks";

const Header = () => {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 50) {
      setIsHidden(difference > 0);

      lastYRef.current = y;
    }
  });

  return (
    <motion.div
      animate={isHidden ? "hidden" : "visible"}
      whileHover="visible"
      onFocusCapture={() => setIsHidden(false)}
      variants={{
        hidden: {
          y: "-90%",
        },
        visible: {
          y: "0%",
        },
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 z-10 flex w-full justify-center pt-3"
    >
      <nav className="flex justify-between bg-slate-400t w-full px-20 pt-10 gap-4">
        <Link className="link font-medium text-black" scroll={false} href="/">
          <div>
            <p className="text-grey-1 font-bold text-grey_1 text-lg">
              Eric Manasse
            </p>
            <div className="flex gap-1 z-10">
              <p className="text-grey font-medium text-black text-lg uppercase">
                Designer, Developer
              </p>
            </div>
          </div>
        </Link>
        <div>
          <p className="text-grey-1 font-bold text-grey_1 text-lg">
            work with me
          </p>
          <div className="flex gap-1 z-10">
            <p className="font-medium text-black text-lg uppercase">
              available for work
            </p>
          </div>
        </div>
        <div>
          <p className="flex text-grey-1 font-bold text-grey_1 text-lg">
            Navigation
          </p>
          <div className="flex text-lg gap-4">
            <MenuLinks menuName="index" href="/"/> 
            <MenuLinks menuName="about" href="about"/> 
            <MenuLinks menuName="projects" href="projects"/> 
          </div>
        </div>
      </nav>
    </motion.div>
  );
};

export default Header;
