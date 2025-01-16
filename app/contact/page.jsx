"use client";
import React, { useEffect, useRef } from "react";
import "./contact.css";

import { gsap } from "gsap";
import Link from "next/link";
import { socials } from "@/components/Menu/menuContent";
// import AnimatedTitle from "@/components/Animations/AnimatedTitle";

const Page = () => {
  const container = useRef();
  const headerRef = useRef();
  const sectionsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(headerRef.current, {
        y: 0,
        duration: 1,
        delay: 1,
        ease: "power3.out",
      });

      gsap.delayedCall(1.1, () => {
        sectionsRef.current.forEach((section) => {
          gsap.to(section.querySelectorAll("p"), {
            y: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out",
          });
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section className="p-6 lg:p-10 pt-28 h-screen flex">
      <div
        className="contact-page flex flex-col justify-center lg:justify-end lg:pb-48 pb-20"
        ref={container}
      >
        <div className="contact-header absolute top-[96px]">
          {/* <AnimatedTitle title={"Contact"} className={"text-Lace_Veil"} /> */}
        </div>
        <div className="mainContainer ">
          <div className="col ">
            <div className="where" ref={(el) => (sectionsRef.current[0] = el)}>
              <div className="title">
                <p className="text-grey_2">Who</p>
              </div>
              <div className="item">
                <p>Eric Manasse</p>
              </div>
              <div className="item">
                <p>Specialized in UX / UI and</p>
              </div>
              <div className="item">
                <p>Software Development.</p>
              </div>
            </div>
            <div className="vat" ref={(el) => (sectionsRef.current[1] = el)}>
              <div className="title">
                <p className="text-grey_2">Where</p>
              </div>
              <div className="item">
                <p>Based in London</p>
              </div>
            </div>
          </div>

          <div className="col flex mb-10 lg:mb-0 bg-slate-500t px-0">
            <div
              className="socials"
              ref={(el) => (sectionsRef.current[2] = el)}
            >
              <div className="title">
                <p className="text-grey_2">Socials</p>
              </div>
              <div className="item">
                <p className="text-lg text-Lace_Veil">
                  <Link
                    href={socials[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {socials[0].label}
                  </Link>
                </p>
              </div>
              <div className="item">
                <p className="text-lg text-Lace_Veil">
                  <Link
                    href={socials[1].url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {socials[1].label}
                  </Link>
                </p>
              </div>
              <div className="item">
                <p className="text-lg text-Lace_Veil">
                  <Link
                    href={socials[3].url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {socials[3].label}
                  </Link>
                </p>
              </div>
              <div className="item">
                <p className="text-lg text-Lace_Veil">
                  <Link
                    href={socials[2].url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {socials[2].label}
                  </Link>
                </p>
              </div>
            </div>
            <div className="mail" ref={(el) => (sectionsRef.current[3] = el)}>
              <div className="title">
                <p className="text-grey_2">Mail</p>
              </div>
              <div className="item">
                <p>
                  <a href="#">hello@ericandtheweb.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;

// import React from "react";
// import MenuLinks from "@/components/Header/menuLinks";
// // import Magnetic from "../Animations/Magnetic/index";
// import { heading_1 } from "@/utils/styles";
// import Magnetic from "@/components/Animations/Magnetic";

// export default function ContactPage () {
//   return (
//     <main
//       className="bg-black flex items-center justify-center h-screen lg:px-10 py-24 b"
//       style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
//     >
//       <div className="h-full w-full flex-col justify-between items-center inline-flex bg-amber-500t">
//         <div className="self-stretch justify-between items-start inline-flex">
//           <h6 className=" text-Lace_Veil font-medium font-inter">
//             Reach out via email or connect
//             <br /> with me on LinkedIn
//           </h6>
//           <h6 className="text-Lace_Veil font-medium hidden lg:block">
//             Drop me a message
//           </h6>
//         </div>
//         <div className="w-full lg:justify-center items-center lg:items-center lg:gap-[100px] lg:inline-flex lg:flex-row flex flex-col  gap-10 self-center">
//           <h1 className={`${heading_1} text-Lace_Veil underline`}>
//             Hello@ericand
//             <br />
//             theweb.com
//           </h1>
//           <Magnetic>
//             <button className="w-[117px] h-[117px] p-8 bg-Lace_Veil rounded-[176px] border-Lace_Veil justify-center items-center gap-2 flex">
//               <p className="text-black font-medium uppercase">
//                 Copy
//                 <br />
//                 email
//               </p>
//             </button>

//           </Magnetic>
//         </div>
//         <div className="hidden self-stretch gap-6  flex-col lg:flex-row justify-between items-start lg:items-center lg:inline-flex">
//           <div className="text-Lace_Veil text-base font-medium leading-normal">
//             © Design and Developed by Eric. Powered by Nextjs & Vercel.
//           </div>
//           <div className="justify-start items-start gap-6 flex">
//             <MenuLinks
//               className="text-Lace_Veil text-base"
//               menuName="LinkedIn"
//               href="/"
//             />
//             <MenuLinks
//               className="text-Lace_Veil text-base"
//               menuName="X(Twitter)"
//               href="/"
//             />
//             <MenuLinks
//               className="text-Lace_Veil text-base"
//               menuName="Instagram"
//               href="/"
//             />
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }
