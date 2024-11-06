import React from 'react';
import { motion, Variants } from 'framer-motion';

// Define the props interface
interface AnimatedLettersProps {
  title: string;
  className: string;
  disabled?: boolean;
  banner?: Variants;
  letterAni?: Variants;
}

const AnimatedLetters: React.FC<AnimatedLettersProps> = ({ title, className }) => {
  // Banner animation variant
  const banner: Variants = {
    animate: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  // Letter animation variant
  const letterAni: Variants = {
    initial: { y: 400 },
    animate: {
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 0.4,
      },
    },
  };

  return (
    <motion.span
      className='row-title flex'
      variants={banner}
      initial='initial'
      animate='animate'
    >
      {Array.from(title).map((letter, index) => (
        <motion.span
          className={`${className} row-letter inline-flex whitespace-nowrap`}
          variants={letterAni}
          key={index}
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default AnimatedLetters;