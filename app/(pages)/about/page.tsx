import React from "react";

export default function About() {
  return (
    <div className="min-h-screen w-full items-center  flex lg:p-20">
      <div className="flex flex-col ">
        <div className="flex w-full bg-slate-400 justify-between mb-[30vh]">
          <div className="w-6/12">
            <h2 className="text-black text-[80px] font-medium uppercase leading-[88px] tracking-wider">
              Driven by a passion for innovation
            </h2>
          </div>
          <img
            className="w-[217px] h-[263px]"
            src="https://via.placeholder.com/217x263"
          />
        </div>

        <div className="lg:w-9/12 w-full self-end">
          <span className="text-black text-[32px] font-medium leading-[44.80px]">
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
