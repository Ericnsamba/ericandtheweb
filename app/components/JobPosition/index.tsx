import { motion } from "framer-motion";
import React from "react";

interface JobPositionProps {
  position: string;
  duration: string;
  company: string;
  className?: string;
}

const JobPosition: React.FC<JobPositionProps> = ({
  position,
  duration,
  company,
  className,
}) => {
  return (
    <motion.div
      className={`${className} w-full py-6 border-b border-black justify-between items-end inline-flex`}
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      exit={{y: 48, opacity: 0}}
      transition={{ ease: "easeInOut", duration: 1}}
    >
      <div className="flex-col justify-start items-start gap-3 inline-flex">
        <p className="self-stretch text-black text-2xl font-medium leading-[28px] tracking-tight">
          {position}
        </p>
        <p className="self-stretch text-grey_1 text-base font-normal leading-snug">
          {company}
        </p>
      </div>
      <div className="justify-start items-end gap-6 flex">
        <p className="text-grey_1 text-base font-normal leading-snug">
        {duration}
        </p>
      </div>
    </motion.div>
  );
};

export default JobPosition;
