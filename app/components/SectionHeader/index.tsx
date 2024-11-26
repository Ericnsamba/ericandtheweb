import React from "react";
import { heading_2 } from "@/utils/styles";
import AnimatedTitle from "../Animations/AnimatedTitle";

interface SectionHeaderProps {
    sectionTitle: string;
}

export default function SectionHeader({sectionTitle}: SectionHeaderProps) {
  return (
    <div className="w-full py-10 border-b-[1px] border-black ">
      <AnimatedTitle title={ sectionTitle} className={heading_2 + ""} />
    </div>
  );
}
