"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
// import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CustomEase from "gsap/CustomEase";
import "../home.css";

let isInitialLoad = true;

const HomePage = () => {
  const containerRef = useRef(null);
  const preloaderRef = useRef(null);
  const progressBarRef = useRef(null);
  const [showPreloader] = useState(isInitialLoad);

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

      // Animation starts 0.4s before completion
      gsap.to(".imageContainer", {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        delay: 2.4, 
        // delay: -0.4, 
        duration: 2.4,
        ease: "hop",
      });

      // // Initial state
      // gsap.set(".heroImg", {
      //   clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      //   scale: 1,
      // });
    },
    { scope: containerRef, dependencies: [showPreloader] }
  );

  return (
    <>
      {showPreloader && (
        <div className="pre-loader" ref={preloaderRef}>
          <div className="progress-bar" ref={progressBarRef}></div>
          <div className="text-wrapper flex bg-orange-300 w-screen h-screen text-Lace_Veil justify-center items-center">
           <div className="text_container">
            <h1 className="text designer font-medium">Designer</h1>
           </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;
