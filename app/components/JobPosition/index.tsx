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
    <div
      className={`${className} w-full py-6 border-b border-black justify-between items-end inline-flex`}
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
    </div>
  );
};

export default JobPosition;
