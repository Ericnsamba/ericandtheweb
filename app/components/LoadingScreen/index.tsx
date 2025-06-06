"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CustomEase from "gsap/CustomEase";
import { SplitText } from "gsap/SplitText";
import "./styles.css";

let isInitialLoad = true;

const Loading = () => {
  const containerRef = useRef(null);
  const preloaderRef = useRef(null);
  const progressBarRef = useRef(null);
  const [showPreloader] = useState(isInitialLoad);

  useLayoutEffect(() => {
    gsap.registerPlugin(CustomEase, SplitText);
    CustomEase.create(
      "hop-main",
      "M0,0 C0.354,0 0.464,0.133 0.498,0.502 0.532,0.872 0.651,1 1,1"
    );
    CustomEase.create("hop", ".8, 0, .3, 1");
  }, []);

  useEffect(() => {
    return () => {
      isInitialLoad = false;
    };
  }, []);

  useGSAP(
    () => {
      if (!showPreloader) return;

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

      const splitTextElements = (
        selector: string,
        type: string = "words,chars",
        addFirstChar: boolean = false
      ) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element) => {
          const splitText = new SplitText(element, {
            type,
            wordsClass: "word",
            charsClass: "char",
          });

          if (type.includes("chars")) {
            splitText.chars.forEach((char, index) => {
              const originalText = char.textContent;
              char.innerHTML = `<span>${originalText}</span>`;

              if (addFirstChar && index === 0) {
                char.classList.add("first-char");
              }
            });
          }
        });
      };

      // Split the text elements
      splitTextElements(".preloader .intro-title h1", "words,chars", true);

      // Make the h1 visible now that text is split
      const introTitle = document.querySelector(".preloader .intro-title");
      if (introTitle) {
        introTitle.classList.add("text-split");
      }

      // Set initial positions
      gsap.set(".preloader .intro-title .char span", { y: "100%" });

      const tl = gsap.timeline({ defaults: { ease: "hop" } });

      // Animate intro title characters in
      tl.to(
        ".preloader .intro-title .char span",
        {
          y: "0%",
          duration: 0.75,
          stagger: 0.05,
        },
        0.5
      )
      // Animate intro title characters out (except first)
      .to(
        ".preloader .intro-title .char:not(.first-char) span",
        {
          y: "100%",
          duration: 0.75,
          stagger: 0.05,
        },
        2.6
      )
      // // Animate first char of intro title characters out
      // .to(
      //   ".preloader .intro-title .first-char span",
      //   {
      //     fontSize: "14.4vw",
      //     color: "#CC6945",
      //     duration: 0.85,
      //     stagger: 0.05,
      //   },
      //   2
      // )
      // Animate first char of intro title characters out
      .to(
        ".preloader .intro-title .first-char span",
        {
          y: "100%",
          duration: 0.75,
          stagger: 0.05,
        },
        4.6
      )
    },
    { scope: containerRef, dependencies: [showPreloader] }
  );

  return (
    <div ref={containerRef}>
      <div className="pre-loader bg-black" ref={preloaderRef}>
          <div className="progress-bar bg-Lace_Veil" ref={progressBarRef}></div>
          <div className="text-wrapper flex w-full h-full text-Lace_Veil justify-center items-center">
            <div className="preloader" ref={preloaderRef}>
              <div className="intro-title">
                <h1>ericandtheweb</h1>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Loading;
