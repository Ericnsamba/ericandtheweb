"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { fadeIn } from "../utils/motion";

const ExploreCard = ({ id, title, index, active, handleClick, children }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className={`relative  rounded-2xl  ${
      active === id ? "flex flex-auto" : "w-[50px]"
      // active === id ? "flex flex-auto" : "w-[50px]"
    } flex  h-[780px] transition-[flex] duration-[0.8s] ease-out-flex overflow-hidden overflow-y-scroll`}
    // active === id ? "lg:flex-[6.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
    // } flex  min-w-[50px] h-[780px] transition-[flex] duration-[0.7s] ease-out-flex overflow-hidden overflow-y-scroll`}
    onClick={() => {
      handleClick(id);
      // console.log("id clicked", id);
    }}
  >
    {active !== id ? (
      // <div className="flex justify-center items-center cursor-pointer w-full rounded-2xl border border-[#F4F4F5] bg-amber-300">
      <div className="flex justify-center items-center ">
        <div className="flex w-[50px]  grow justify-center items-center  min-h-[400px] cursor-pointer rounded-2xl border border-[#F4F4F5]">
          <p className="-rotate-90 whitespace-nowrap uppercase font-semibold sm:text-[14px] text-[14px] text-forestGreen">
            {title}
          </p>
        </div>
      </div>
    ) : (
      <div className="bg-amber-10m0 rounded-b-[24px] grow items-center  container ">{children}</div>
    )}
  </motion.div>
);

export default ExploreCard;
