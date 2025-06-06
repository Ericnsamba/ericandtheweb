"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
// import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CustomEase from "gsap/CustomEase";
import { SplitText } from "gsap/SplitText";
import "./HeroSection.css";

let isInitialLoad = true;

const HomePage = () => {
  const containerRef = useRef(null);
  const preloaderRef = useRef(null);
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
        2
      )
    },
    { scope: containerRef, dependencies: [showPreloader] }
  );

  return (
    <div ref={containerRef}>
      {showPreloader && (
        <div className="preloader" ref={preloaderRef}>
          <div className="intro-title">
            <h1>ericandtheweb</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
