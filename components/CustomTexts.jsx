'use client';

import { motion } from 'framer-motion';
import { hoverTextContainer, textContainer, textVariant2 } from '../utils/motion';

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`font-normal  text-[24px] text-black ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span  variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const HoverTypingText = ({ title, textStyles }) => (
  <motion.div whileHover={{
    scale: 1.2,
    rotate: [-5, 5, -5, 0],
    transition: { duration: 0.8, ease: "easeOut" }
}}>
  {/* <motion.div whileHover={{ variant: "show" }} variants={hoverTextContainer}> */}
  <motion.p
    variants={textContainer}
    className={`font-normal  text-[18px] text-black ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span  variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
    </motion.div>
);

export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-black ${textStyles}`}
  >
    {title}
  </motion.h2>
);
