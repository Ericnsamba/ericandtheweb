import React from "react";

export default function About() {
  return (
    <div className="min-h-screen w-full justify-center items-center bg-slate-400t flex">
      <div className="w-[1440px] h-[982px] relative ">
        <img
          className="w-[217px] h-[263px] left-[1143px] top-[221px] absolute"
          src="https://via.placeholder.com/217x263"
        />
        <div className="w-[737px] h-[258px] left-[80px] top-[221px] absolute text-[#161310] text-[80px] font-medium font-['Inter'] uppercase leading-[88px] tracking-wider">
          Driven by a passion for innovation{" "}
        </div>
        <div className="w-[1063px] h-[258px] left-[297px] top-[644px] absolute">
          <span className="text-[#161310] text-[32px] font-medium font-['Inter'] leading-[44.80px]">
            Additionally, I have collaborated within the EV Vehicles sector,
            designing cutting-edge digital experiences for one of the world’s
            most renowned vehicle brands,
          </span>
          <span className=" text-[32px] font-medium font-['Inter'] leading-[44.80px]">
            known for their luxury and engineering excellence. This work further
            exemplifies my ability to deliver seamless, innovative solutions
            across diverse industries.
          </span>
        </div>
      </div>
    </div>
  );
}
