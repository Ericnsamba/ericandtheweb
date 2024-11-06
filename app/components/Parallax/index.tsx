// components/Parallax.tsx
import { ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxProps {
  children: ReactNode;
  offset?: number;
}

const Parallax: React.FC<ParallaxProps> = ({ children, offset = 100 }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, offset], [0, -offset]);

  return (
    <motion.div style={{ y }} className="parallax-container relative overflow-hidden">
      {children}
    </motion.div>
  );
};

export default Parallax;