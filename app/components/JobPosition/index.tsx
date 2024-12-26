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
    <>
      <motion.div
        className={`${className} className="Experience py-6 border-b border-Lace_Veil flex justify-between items-start"`}
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        exit={{ y: 48, opacity: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
      >
        <div className="position_wrapper flex flex-col justify-start items-start gap-2 flex-1">
          <p className="position_label text-Lace_Veil text-sm font-normal leading-snug">
            Position
          </p>
          <p className="position text-Lace_Veil text-base font-medium uppercase leading-snug">
            {position}
          </p>
        </div>
        <div className="companyName_wrapper flex flex-col justify-start items-start gap-2 flex-1">
          <p className="companyName_label text-Lace_Veil text-sm font-normal leading-snug">
            Company
          </p>
          <p className="companyName text-Lace_Veil text-base font-medium uppercase leading-snug">
            {company}
          </p>
        </div>
        <div className="Year_wrapper flex flex-col justify-start items-start gap-2 flex-[0.5]">
          <p className="year_label text-Lace_Veil text-sm font-normal leading-snug">
            Year
          </p>
          <p className="Current text-Lace_Veil text-base font-medium uppercase leading-snug">
            {duration}
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default JobPosition;
