"use client";
import { useLayoutEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HoverTypingText, TypingText } from "../../../components/CustomTexts";
import Navigation from "../../../components/Navigation/Menu";
import gsap from "gsap";
import "./contact.css";

export default function ContactPage() {
  useLayoutEffect(() => {
    let animated = gsap.context(() => {
      gsap.utils.toArray(".cardCont").forEach((card: any) => {
        gsap.set(card, {
          transformStyle: "preserve-3d",
          transformOrigin: "50% 50% -20px",
          // transformPerspective: 1000,
        });
        const q = gsap.utils.selector(card);
        const front = q(".cardFront");
        const back = q(".cardBack");

        gsap.set(back, { rotationX: -90 });

        const tl = gsap
          .timeline({ paused: true })
          .to(front, { duration: 0.5, rotationX: 90 })
          .to(back, { duration: 0.5, rotationX: 0, z: 20 }, 0);
        card.addEventListener("mouseenter", function () {
          tl.play();
        });
        card.addEventListener("mouseleave", function () {
          tl.reverse();
        });
      });
    }); //
    return () => animated.revert();
  });

  const motionVariants = {
    hidden: {
      opacity: 0,
      y: 80,
      transition: {
        type: "tween",
        Bounce: 0,
        // stiffness: 300,
        // damping: 140,
      },
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        duration: 0.5,
        // Bounce: 0.1,
        // stiffness: 80,
        // delay: 1.4,
      },
    },
  };

  const linkStyles =
    "text-sm  log:w-[120px] uppercase font-body font-normal  text-black dark:text-green lg:hover:tracking-[5px] hover:font-bold ease-in-out duration-300 ";

  return (
    <div className="flex w-full gap-5  min-h-screen">
      <motion.div
        initial="hidden"
        animate="show"
        variants={motionVariants}
        className="flex flex-col w-full lg:w-7/12 bg-teal-200n lg:justify-center pt-16 pb-[106px] mx-auto "
      >
        <div className="flex flex-col w-full container justify-between bg-pink-2000 h-full lg:my-20 px-5 lg:px-0">
          <div className="flex flex-col gap-0  mb-10 bg-slate-3000">
            <h1 className="font-displayText text-mobile_header lg:text-header_text font-bold text-black leading-120">
              Get in touch
            </h1>
            <div className="lg:w-9/12">
              <p className="text-lead font-displayText text-black font-normal dark:text-green leading-120">
                I like working on existing ideas, get in touch if you have any.
              </p>
            </div>
          </div>

          {/* social links */}
          <div className="blocks__container flex flex-col lg:flex-row justify-between bg-slate-4000 mt-10 gap-10">
            <div className="bg-black w-full lg:w-5/12 h-[300px] flex flex-col justify-between p-10 rounded-[30px]">
              <div className="">
                <p className={`text-lead font-displayText text-white`}>
                  Check out more work.
                </p>
              </div>

              <div className="social__icons flex text-white justify-between">
                <Link href="https://dribbble.com/ericandtheweb" target="_blank">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.0002 25.6665C20.4435 25.6665 25.6668 20.4431 25.6668 13.9998C25.6668 7.55647 20.4435 2.33313 14.0002 2.33313C7.55684 2.33313 2.3335 7.55647 2.3335 13.9998C2.3335 20.4431 7.55684 25.6665 14.0002 25.6665Z"
                      stroke="#FAFAFA"
                      stroke-width="2.33333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.98679 3.20813C15.0851 10.2431 17.0101 14.1981 19.3551 23.8815M22.3185 5.93813C17.9785 11.0131 11.8885 12.5415 2.62512 12.7631M25.3751 14.9798C21.2918 13.8948 17.6401 14.0231 14.9451 14.9798C11.9351 16.0531 9.10012 18.3165 6.26512 22.3531"
                      stroke="#FAFAFA"
                      stroke-width="2.33333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Link>

                <Link
                  href="https://www.linkedin.com/in/eric-manasse/"
                  target="_blank"
                >
                  <svg
                    width="29"
                    height="28"
                    viewBox="0 0 29 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.3336 9.33313C21.1901 9.33313 22.9706 10.0706 24.2834 11.3834C25.5961 12.6961 26.3336 14.4766 26.3336 16.3331V24.4998H21.667V16.3331C21.667 15.7143 21.4211 15.1208 20.9835 14.6832C20.5459 14.2456 19.9525 13.9998 19.3336 13.9998C18.7148 13.9998 18.1213 14.2456 17.6837 14.6832C17.2461 15.1208 17.0003 15.7143 17.0003 16.3331V24.4998H12.3336V16.3331C12.3336 14.4766 13.0711 12.6961 14.3839 11.3834C15.6966 10.0706 17.4771 9.33313 19.3336 9.33313Z"
                      stroke="#FAFAFA"
                      stroke-width="2.33333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.66667 10.5H3V24.5H7.66667V10.5Z"
                      stroke="#FAFAFA"
                      stroke-width="2.33333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.33333 6.9998C6.622 6.9998 7.66667 5.95513 7.66667 4.66646C7.66667 3.3778 6.622 2.33313 5.33333 2.33313C4.04467 2.33313 3 3.3778 3 4.66646C3 5.95513 4.04467 6.9998 5.33333 6.9998Z"
                      stroke="#FAFAFA"
                      stroke-width="2.33333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Link>

                <Link
                  href="https://www.instagram.com/ericandtheweb/"
                  target="_blank"
                >
                  <svg
                    width="29"
                    height="28"
                    viewBox="0 0 29 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.1665 2.33325H8.49984C5.27818 2.33325 2.6665 4.94492 2.6665 8.16659V19.8333C2.6665 23.0549 5.27818 25.6666 8.49984 25.6666H20.1665C23.3882 25.6666 25.9998 23.0549 25.9998 19.8333V8.16659C25.9998 4.94492 23.3882 2.33325 20.1665 2.33325Z"
                      stroke="#FAFAFA"
                      stroke-width="2.33333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M19.0003 13.2651C19.1442 14.2361 18.9784 15.2277 18.5263 16.099C18.0742 16.9702 17.3589 17.6768 16.4822 18.1181C15.6054 18.5594 14.6118 18.713 13.6427 18.557C12.6736 18.4011 11.7783 17.9435 11.0842 17.2495C10.3902 16.5554 9.93262 15.6601 9.77668 14.691C9.62074 13.7219 9.77434 12.7283 10.2156 11.8515C10.657 10.9748 11.3635 10.2595 12.2348 9.80739C13.106 9.35531 14.0976 9.18946 15.0686 9.33344C16.059 9.48031 16.9759 9.94182 17.6839 10.6498C18.3919 11.3578 18.8534 12.2747 19.0003 13.2651Z"
                      stroke="#FAFAFA"
                      stroke-width="2.33333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M20.7504 7.58325H20.7604"
                      stroke="#FAFAFA"
                      stroke-width="2.33333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Link>

                <Link href="https://twitter.com/EricandTheWeb" target="_blank">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.8334 3.49989C25.7162 4.28795 24.4792 4.89069 23.1701 5.28489C22.4674 4.47699 21.5336 3.90436 20.495 3.64447C19.4563 3.38458 18.3628 3.44995 17.3625 3.83175C16.3622 4.21355 15.5033 4.89336 14.9019 5.77923C14.3005 6.6651 13.9857 7.71428 14.0001 8.78489V9.95156C11.9498 10.0047 9.91823 9.55001 8.08626 8.62791C6.25428 7.70582 4.67878 6.34497 3.50008 4.66656C3.50008 4.66656 -1.16658 15.1666 9.33341 19.8332C6.9307 21.4642 4.06843 22.282 1.16675 22.1666C11.6667 27.9999 24.5001 22.1666 24.5001 8.74989C24.499 8.42492 24.4678 8.10075 24.4067 7.78156C25.5974 6.6073 26.4377 5.12472 26.8334 3.49989Z"
                      stroke="#FAFAFA"
                      stroke-width="2.33333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="bg-green w-full lg:w-5/12 h-[300px] flex flex-col justify-between p-10 rounded-[30px]">
              <div className="">
                <p className={`text-lead font-displayText text-black`}>
                  Have any questions?
                </p>
              </div>
              <p className="text-sm text-black truncate font-medium font-bodyText uppercase">
                <Link href="mailto:hello@ericandtheweb.com" target="_blank">
                  hello@ericandtheweb.com
                </Link>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
