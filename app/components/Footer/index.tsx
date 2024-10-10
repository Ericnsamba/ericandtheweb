import React from "react";

export default function Footer() {
  return (
    <div
      className="bg-black flex items-center justify-center  relative h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 h-[800px] w-full flex-col justify-start items-center gap-[157px] inline-flex lg:p-20">
        <div className="self-stretch justify-between items-start inline-flex">
          <div className="w-[411px] text-background text-2xl font-medium font-inter leading-loose">
            Reach out via email or connect with me on LinkedIn
          </div>
          <div className="text-background text-[22px] font-medium font-inter leading-[44.80px]">
            Drop me a message
          </div>
        </div>
        <div className="justify-start items-center gap-[100px] inline-flex">
          <div className="w-[845px] text-background text-[88px] font-medium font-inter underline uppercase leading-[96.80px] tracking-widest">
            Hello@ericand
            <br />
            theweb.com
          </div>
          <div className="w-[117px] h-[117px] p-8 bg-background rounded-[176px] border-black justify-center items-center gap-2 flex">
            <div className="text-center text-black text-base font-medium font-inter uppercase leading-normal tracking-tight">
              Copy
              <br />
              email
            </div>
          </div>
        </div>
        <div className="self-stretch h-[46px] justify-between items-center inline-flex">
          <div className="text-background text-base font-medium font-inter leading-normal">
            © Design and Developed by Eric. Powered by Nextjs & Vercel.
          </div>
          <div className="justify-start items-start gap-6 flex">
            <div className="text-background text-base font-medium font-inter">
              LinkedIn
            </div>
            <div className="text-background text-base font-medium font-inter">
              X(Twitter)
            </div>
            <div className="text-background text-base font-medium font-inter">
              Instagram
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
