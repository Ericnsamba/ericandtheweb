"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CustomEase from "gsap/CustomEase";
import "./home.css";
import { SplitText } from "./utils/SplitText";
import Footer from "./components/Footer/Footer";

let isInitialLoad = true;

const HomePage = () => {
  const containerRef = useRef(null);
  const preloaderRef = useRef(null);
  const progressBarRef = useRef(null);
  const [showPreloader,] = useState(isInitialLoad);
  // const [showPreloader, setShowPreloader] = useState(isInitialLoad);
  const [isTextSplit, setIsTextSplit] = useState(false);

  useLayoutEffect(() => {
    gsap.registerPlugin(CustomEase);
    CustomEase.create(
      "hop-main",
      "M0,0 C0.354,0 0.464,0.133 0.498,0.502 0.532,0.872 0.651,1 1,1"
    );
  }, []);

  useEffect(() => {
    return () => {
      isInitialLoad = false;
    };
  }, []);

  useGSAP(
    () => {
      if (showPreloader) {
        const tl = gsap.timeline({
          onComplete: () => {
            // setShowPreloader(false)
          },
        });

        tl.to(progressBarRef.current, {
          scaleX: 1,
          duration: 4,
          ease: "power1.inOut",
        });

        tl.set(progressBarRef.current, { transformOrigin: "right" }).to(
          progressBarRef.current,
          {
            scaleX: 0,
            duration: 1,
            ease: "power2.in",
          }
        );

        tl.to(preloaderRef.current, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 1.5,
          ease: "hop-main",
        });
      }

      gsap.to(".hero-title .line h1", {
        y: 0,
        stagger: 0.1,
        delay: showPreloader ? 5.75 : 1,
        duration: 1.5,
        ease: "power4.out",
      });

      headingAnim();
      
      if(showPreloader) {
        loadingTextAnim();
      }
    },
    { scope: containerRef, dependencies: [showPreloader] }
  );

  const headingAnim = () => {
    SplitText("#heading_1", "header__char", "char");
    setIsTextSplit(true);
    gsap.from(".header__char", {
      duration: 0.6,
      yPercent: 100,
      stagger: 0.04,
      delay: showPreloader ? 5.75 : 0,
      type: "tween",
      ease: "[0.76, 0, 0.24, 1]",
    });
  };
  const loadingTextAnim = () => {
    SplitText("#loading_text", "loading_char", "char");
    setIsTextSplit(true);
    gsap.from(".loading_char", {
      duration: 0.6,
      yPercent: 100,
      stagger: 0.04,
      type: "tween",
      ease: "[0.76, 0, 0.24, 1]",
    });
  };

  return (
    <>
      {showPreloader && (
        <div className="pre-loader" ref={preloaderRef}>
          <div className="progress-bar" ref={progressBarRef}></div>
          <div className="text-wrapper flex w-full h-full text-Lace_Veil justify-center items-center">
            <div className="text_container">
              <p style={{ visibility: isTextSplit ? "visible" : "hidden" }}
               id="loading_text" className="text flex">Loading...</p>
            </div>
          </div>
        </div>
      )}
      <main
        ref={containerRef}
        className="lg:h-screen h-svh flex flex-col justify-center items-center p-8 relative overflow-hidden pt-[96px]"
      >
        <div>
          <div className="flex flex-col gap-[4vw] bg-amber-800t relative">
            <h1 className="heading designer text-grey_1">
              designer
            </h1>
            <div className="animated_wrapper bg-black transform -translate-x-1/2 -translate-y-1/2">
              <h1
                id="heading_1"
                className="animated_name eric text-coral text-[12vw] font-medium uppercase"
                style={{ visibility: isTextSplit ? "visible" : "hidden" }}
              >
                Eric Manasse
              </h1>
            </div>
            <h1 className="heading developer  text-grey_1">
              Developer
            </h1>
          </div>
        </div>

        <div className="home_footer block">
          <Footer />
        </div>
      </main>
    </>
  );
};

export default HomePage;
