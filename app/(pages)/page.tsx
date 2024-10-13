"use client";

import Transition from "@/components/Transition";

// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import { useRouter } from 'next/router';

const Home = () => {
  // const router = useRouter()
  // console.log("🚀 ~ router ===>:", router)

  return (
    <Transition>
      <div className="min-h-screen px-20 pt-[20vh]">
        <main className="container mx-auto flex flex-col gap-[10vh] row-start-2 items-center sm:items-start w-full bg-red-200t">
          <div className="hero flex flex-col gap-6 bg-yellow-200t w-full">
            <div className="h-[204px] justify-start items-center inline-flex self-end gap-[2vw]">
              <img
                className="w-[520px] h-[188px]"
                src="https://via.placeholder.com/520x188"
              />
              <div className="flex-col justify-start items-start gap-8 inline-flex">
                <div className="text-black text-8xl font-medium font-inter uppercase leading-[86.40px] tracking-widest">
                  Eric
                </div>
                <div className="text-center text-black text-8xl font-medium font-inter uppercase leading-[86.40px] tracking-widest">
                  Manasse
                </div>
              </div>
            </div>
            {/*  */}
            <div className="justify-start items-center gap-[2vw] inline-flex self-start">
              <div className=" flex-col justify-start items-start gap-[31px] inline-flex">
                <h1 className="text-black text-8xl font-medium font-inter uppercase leading-[86.40px] tracking-widest">
                  product
                </h1>
                <h1 className="text-center text-black text-8xl font-medium font-inter uppercase leading-[86.40px] tracking-widest">
                  designer
                </h1>
              </div>
              <img
                className="w-[520px] h-[187px]"
                src="https://via.placeholder.com/520x187"
              />
            </div>
          </div>

          {/* bottom hero */}
          <div className="w-full justify-between flex bg-fuchsia-300t bottom-0 relative items-end">
            <p className="text-black text-2xl font-normal font-Inter capitalize leading-[32px] tracking-wide">
              Based in London,Uk
              <br />
              specialised in UX / UI and <br />
              Software Development.
            </p>
            <div className="p-2 justify-center items-center gap-2 flex">
              <div>
                <span className="text-black text-base font-bold font-inter uppercase leading-snug tracking-tight">
                  Scroll
                </span>
                <span className="text-black text-base font-normal font-inter uppercase leading-snug tracking-tight">
                  to See more.
                </span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Transition>
  );
};

export default Home;
