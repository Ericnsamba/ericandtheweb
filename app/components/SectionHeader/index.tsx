import React from "react";
import AnimatedText from "../Animations/AnimatedText";

interface SectionHeaderProps {
  sectionTitle: string;
}

export default function SectionHeader({ sectionTitle }: SectionHeaderProps) {
  return (
    <div className="w-full py-10 border-b-[1px] border-Lace_Veil ">
      <AnimatedText
        text={sectionTitle}
        tag="h1"
        className="text-Lace_Veil"
        delay={0.2}
        duration={1.4}
        stagger={0.3}
        animationType="words"
        mask={true}
      />
    </div>
  );
}
