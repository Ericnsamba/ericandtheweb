"use client";
import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";

const page = ({ params }) => {
  // console.log("🚀 ~ page ~ params:", params)
  return (
    <div className="flex flex-col min-h-screen w-full  pt-[20vh] px-20">
      <div className="flex flex-col gap-[30vh] mb-10">
        <Link href="/projects">
          <div className="flex">All case studies</div>
        </Link>
        <div className="name_and_date flex w-full justify-between bg-slate-30t0">
          <h1 className="text-9xl uppercase">{params.project}</h1>
          <h1 className="text-9xl uppercase">2022</h1>
        </div>
      </div>
      <div className="cover_img bg-slate-400 w-full h-[60vh]">
        <Image src={`/medias/deux_huit_huit.jpeg`} className="h-full w-full object-cover" alt={""} width={1000} height={1000}/>
      </div>

      <div className="container mx-auto flex flex-col ">
        {/* overview */}
        <div className="flex flex-col mt-32  bg-slate-100t justify-center items-center gap-10 w-8/12 self-center">
          {/* desc */}
          <p className="text-black font-inter font-normal text-lead text-4xl leading-[44px]">
            Solve.money is a financial application that allows businesses to
            apply for a loan and get pre-approved within seconds. The company
            was seeking to improve the user experience of their dashboard and
            hired me as a Product Designer to help with this task.
          </p>

          <div className="flex-col justify-start items-start inline-flex w-full">
            <div className="self-stretch py-4 border-b border-[#0e0f12] justify-start items-end gap-6 inline-flex">
              <div className="w-[302px] text-[#161310] text-2xl font-normal font-inter leading-[44px]">
                Client
              </div>
              <div className="text-[#0e0f12] text-2xl font-normal font-inter leading-[46px]">
                Solve.money
              </div>
            </div>
            <div className="self-stretch py-4 border-b border-[#0e0f12] justify-start items-center gap-6 inline-flex">
              <div className="w-[302px] text-[#161310] text-2xl font-normal font-inter leading-[44px]">
                Year
              </div>
              <div className="text-[#161310] text-2xl font-normal font-inter leading-[44px]">
                2022
              </div>
            </div>
            <div className="self-stretch py-4 border-b border-[#0e0f12] justify-start items-center gap-6 inline-flex">
              <div className="w-[302px] text-[#161310] text-2xl font-normal font-inter leading-[44px]">
                Service
              </div>
              <div className="text-[#161310] text-2xl font-normal font-inter leading-[44px]">
                Web Design, Web Development
              </div>
            </div>
          </div>

          <div className="self-start h-[47px] px-8 py-4 bg-black rounded-[64px] border border-black justify-center items-center gap-4 inline-flex">
            <div className="text-white text-base font-medium font-inter uppercase leading-tight tracking-tight">
              Visit Website
            </div>
          </div>
        </div>

        {/* Challenges & Solutions */}
        <div className="flex flex-col lg:gap-20 w-8/12 bg-slate-100t self-center mt-[30vh]">
          {/* Challenges */}
          <div className="w-[1062px] h-[361px] flex-col justify-start items-start gap-6 inline-flex">
            <div className="self-stretch h-[117px] text-[#1a1a1a] text-7xl font-medium font-inter uppercase leading-[86.40px] tracking-wider">
              Challenge
            </div>
            <div className="self-stretch text-[#161310] text-[32px] font-medium font-inter leading-[44px]">
              The main challenge was to create a user-friendly and intuitive
              experience for the dashboard. The current design was not meeting
              the user&apos;s needs and was causing confusion and frustration.
              The company recognized that a better user experience would
              increase the platform&apos;s adoption and retention rate.
            </div>
          </div>
          {/* Solutions */}
          <div className="w-[1062px] h-[566px] flex-col justify-start items-start gap-10 inline-flex">
            <div className="self-stretch text-[#1a1a1a] text-7xl font-medium font-inter uppercase leading-[86.40px] tracking-wider">
              Solution
            </div>
            <div className="self-stretch">
              <span className="text-[#161310] text-[32px] font-medium font-inter leading-[44px]">
                To solve this challenge, I applied Jakob&apos;s Law, which
                states that users prefer websites to function similarly to other
                sites they are already familiar with. By understanding the
                user&apos;s behavior, I was able to create a more intuitive and
                seamless experience for the users of Solve.money.
              </span>
              <span className="text-[#8b8c8e] text-[32px] font-medium font-inter leading-[44px]">
                I worked closely with the development team to ensure that the
                design was implemented correctly and was able to create a new
                user interface that was easy to navigate, and the actions were
                easy to understand. This helped to increase the platform&apos;s
                adoption and retention rate and also helped to improve the
                overall user experience.
              </span>
            </div>
          </div>
        </div>
        <div className="spacer min-h-screen" />
      </div>
    </div>
  );
};

export default page;
