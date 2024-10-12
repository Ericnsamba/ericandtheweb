import React from "react";
import MenuLinks from "@/components/menuLinks";
import Magnetic from "../Animations/Magnetic";

export default function Footer() {
  return (
    <div
      className="bg-black flex items-center justify-center  relative h-screen"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 h-screen w-full flex-col justify-between items-center inline-flex lg:px-20 py-10">
        <div className="self-stretch justify-between items-start inline-flex">
          <h6 className=" text-background font-medium font-inter">
            Reach out via email or connect
            <br /> with me on LinkedIn
          </h6>
          <h6 className="text-background font-medium font-inter">
            Drop me a message
          </h6>
        </div>
        <div className="justify-start items-center gap-[100px] inline-flex">
          <div className="w-[845px] text-background text-[88px] font-medium font-inter underline uppercase leading-[96.80px] tracking-widest">
            Hello@ericand
            <br />
            theweb.com
          </div>
          <Magnetic>
            <button className="w-[117px] h-[117px] p-8 bg-background rounded-[176px] border-black justify-center items-center gap-2 flex">
              <div className="text-center text-black text-base font-medium font-inter uppercase leading-normal tracking-tight">
                Copy
                <br />
                email
              </div>
            </button>
            
          </Magnetic>
        </div>
        <div className="self-stretch h-[46px] justify-between items-center inline-flex">
          <div className="text-background text-base font-medium font-inter leading-normal">
            © Design and Developed by Eric. Powered by Nextjs & Vercel.
          </div>
          <div className="justify-start items-start gap-6 flex">
            <MenuLinks
              className="text-background text-base"
              menuName="LinkedIn"
              href="/"
            />
            <MenuLinks
              className="text-background text-base"
              menuName="X(Twitter)"
              href="/"
            />
            <MenuLinks
              className="text-background text-base"
              menuName="Instagram"
              href="/"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
