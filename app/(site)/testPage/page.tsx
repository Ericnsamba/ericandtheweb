"use client";
import React, { FC, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Button from "../../../components/Atoms/Button";

const Home = () => {
  useLayoutEffect(() => {
    let animated = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: "none",
        },
        scrollTrigger: {
          trigger: "#container",
          pin: true,
          start: "top",
          end: "bottom",
          scrub: 1,
          markers: false,
          // pinSpacing: false,
        },
      });
      const circles = gsap.utils.toArray("section.circle");
      circles.forEach((circle) => {
        timeline.from(circle, {
          clipPath: "circle(0% at 50% 50%)",
          stagger: 1,
        });
      });
    });

    return () => animated.revert();
  }, []);

  return (
    <>
      {/* <div className="spacer">Section 01</div> */}

      <div id="container">
        <section className="min-h-screen">
          <div className="inner text-black flex self-end items-end">
            <div id="title_wrapper" className="title_wrapper">
              <h1
                className={`header__title Product overflow-hidden inline-block lg:text-[196px] text-black  font-displayText font-medium leading-[196px]`}
              >
                Product
              </h1>
              <h1
                className={
                  "header__title2 Designer lg:text-[196px] text-black inline-block  font-displayText font-medium leading-[196px]"
                }
              >
                Designer
              </h1>
            </div>
            <div className="py-10 min-w-[302px]">
              <p className="text-2xl font-body">
                Based in London
                <br />
                specialised in UX / UI and
                <br />
                Software Development
              </p>
            </div>
          </div>
        </section>
        {/* Portfolio Heading */}
        <section className="circle min-h-screen pt-20 bg-[#f5f5f5]">
          <div className="flex flex-col inner text-black gap-20">
            {/* Label */}
            <div className="h-[43px] w-fit px-6 py-3 rounded-[64px] border border-[#212322] justify-center items-center gap-4 inline-flex">
              <div className="text-[#212322] text-base font-medium leading-tight">
                My Portfolio
              </div>
            </div>
            {/* Portfolio items */}
            <h1 className="font-medium text-black">
              {" "}
              <span className="text-gray">
                Every project is a new opportunity{" "}
              </span>
              to redefine what’s possible and elevate modern digital experiences
              to the next level.
            </h1>
          </div>
        </section>
        {/* Portfolio items */}
        <div className="spacer px-20 bg-purple-300n bg-[#f5f5f5] py-20">
          <div className="inner text-black">
            <div className="flex flex-row flex-wrap gap-1">
              <div className="portfolio_item w-full">
                <div className="flex gap-2 items-center justify-between w-full bg-slate-400 py-6">
                  <h3 className="font-medium text-gray">Product Name</h3>
                  <p className="text-gray">Product Description</p>
                  <p className="text-gray">Product Location</p>
                </div>
              </div>
              <div className="portfolio_item w-full">
                <div className="flex gap-2 items-center justify-between w-full bg-slate-400 py-6">
                  <h3 className="font-medium text-gray">Product Name</h3>
                  <p className="text-gray">Product Description</p>
                  <p className="text-gray">Product Location</p>
                </div>
              </div>
              <div className="portfolio_item w-full">
                <div className="flex gap-2 items-center justify-between w-full bg-slate-400 py-6">
                  <h3 className="font-medium text-gray">Product Name</h3>
                  <p className="text-gray">Product Description</p>
                  <p className="text-gray">Product Location</p>
                </div>
              </div>
              <div className="portfolio_item w-full">
                <div className="flex gap-2 items-center justify-between w-full bg-slate-400 py-6">
                  <h3 className="font-medium text-gray">Product Name</h3>
                  <p className="text-gray">Product Description</p>
                  <p className="text-gray">Product Location</p>
                </div>
              </div>
              <div className="portfolio_item w-full">
                <div className="flex gap-2 items-center justify-between w-full bg-slate-400 py-6">
                  <h3 className="font-medium text-gray">Product Name</h3>
                  <p className="text-gray">Product Description</p>
                  <p className="text-gray">Product Location</p>
                </div>
              </div>
              <div className="portfolio_item w-full">
                <div className="flex gap-2 items-center justify-between w-full bg-slate-400 py-6">
                  <h3 className="font-medium text-gray">Product Name</h3>
                  <p className="text-gray">Product Description</p>
                  <p className="text-gray">Product Location</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="spacer h-screen bg-sky-300n bg-[#f5f5f5]">Section 05</div>
      <div className="space-y-4 p-20 min-h-screen flex justify-center items-center gap-6 bg-[#796b6b]">
        {/* Primary button with label and both icons */}
        <Button
          state="primary"
          label="Primary Button"
          iconLeft={<FiArrowLeft />}
          iconRight={<FiArrowRight />}
          mode="default"
        />

        {/* Secondary button with no icons, contrast mode */}
        <Button state="secondary" label="Secondary Button" mode="contrast" />

        {/* Accent button with right icon only */}
        <Button
          state="accent"
          label="Accent Button"
          iconRight={<FiArrowRight />}
          mode="default"
        />

        {/* Primary button with no label and left icon only */}
        <Button state="primary" iconLeft={<FiArrowLeft />} mode="default" />
      </div>
    </>
  );
};

export default Home;
