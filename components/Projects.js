import React, { useState } from "react";
import userData from "../constants/data";
import Image from 'next/image'

export default function Projects() {
  return (
    <section className=" w-full">
      <div>
        {/* Hover over this div to hide/show <HoverText /> */}
        {/* <HoverableDiv
        handleMouseOver={handleMouseOver}
        handleMouseOut={handleMouseOut}
      /> */}
      </div>
      {/* Grid starts here */}
      <div className=" ">
        <div className="">
          {userData.projects.map((proj, idx) => (
            <ProjectCard
              // className="mb-10"
              title={proj.title}
              link={proj.link}
              imgUrl={proj.imgUrl}
              category={proj.category}
              number={`${idx + 1}`}
              stack={proj.stack}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({
  title,
  link,
  imgUrl,
  number,
  category,
  stack,
  // handleMouseOver,
  // handleMouseOut,
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div>
      {/* <a href={link} className="w-full mb-12 flex hover:scale-125 transition duration-1000"> */}
      <a href={link} className="flex my-5">
        <div className="relative flex justify-between flex-row  ease-in duration-300 mx-auto container px-4 xl:px-12 ">
          <div className="w-full lg:w-1/2 sm:px-0 justify-between flex flex-col py-1">
            <h1
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              className="ease-in-out duration-700 hover:text-[92px] text-[82px] text-gray hover:text-green font-bold"
            >
              {title}
            </h1>
            <p className="text-[16px] text-forestGreen font-bold">
              {category} 
            <span className="mx-4 text-xs bg-green p-2 rounded-lg ">{stack}</span>
            </p>
            {/* <p className="text-7 text-gray-400 font-bold">
          {number.length === 1 ? "0" + number : number}
        </p> */}
          </div>
          <div className=" lg:ml-10 w-full lg:w-1/2 sm:px-0 justify-between flex flex-col py-1">
            {/* { ( */}
            {isHovering && (
              <div className="absolute h-[300px] w-[400px] -top-24 overflow-hidden ease-in duration-300 rounded-2xl">
                  <Image
                    src={imgUrl}
                    alt="portfolio"
                    className="transform hover:scale-2 ease-out object-cover bg-green h-full w-full"
                  />
              </div>
            )}
          </div>
        </div>
      </a>
    </div>
  );
};
