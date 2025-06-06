"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CustomEase from "gsap/CustomEase";
import "./home.css";
// import { SplitText } from "./utils/SplitText";
import { SplitText } from "gsap/SplitText";
import Loading from "./components/LoadingScreen";
import Footer from "./components/Footer/Footer";

let isInitialLoad = true;

const HomePage = () => {
  const containerRef = useRef(null);
  const preloaderRef = useRef(null);
  const progressBarRef = useRef(null);
  const [showPreloader,] = useState(isInitialLoad);
  // const [showPreloader, setShowPreloader] = useState(isInitialLoad);

  gsap.registerPlugin(SplitText);
  gsap.registerPlugin(CustomEase);

  useLayoutEffect(() => {
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

    

      headingAnim();

      
      if(showPreloader) {
        loadingTextAnim();
      }
    },
    { scope: containerRef, dependencies: [showPreloader] }
  )

// animate main text
  const headingAnim = () => {

    SplitText.create(".animated_name", {
      type: "chars",
      wordsClass: "word",
      charsClass: "char",
      mask: "chars"
    });

    // Set initial positions - characters start below visible area
    gsap.set(".animated_name  .char", { y: "120%" });

    const tl = gsap.timeline({ 
      defaults: { ease: "hop" },
      delay: showPreloader ? 5.45 : 0
    });

    // Animate characters from bottom up with stagger
    tl.to(
      ".animated_name .char",
      {
        y: "0%",
        duration: 1,
        stagger: 0.05,
      },
      0
    );
  };

// animate loading text
  const loadingTextAnim = () => {
    SplitText.create(".loading_text", {
      type: "chars",
      wordsClass: "word",
      charsClass: "char",
    });

    // Set initial positions - characters start below visible area
    gsap.set(".loading_text .char", { y: "100%" });

    const tl = gsap.timeline({ 
      defaults: { ease: "hop" },
      delay: 0.5
    });

    // Animate characters from bottom up with stagger
    tl.to(
      ".loading_text .char",
      {
        y: "0%",
        duration: 0.8,
        stagger: 0.1,
      },
      0
    )
    .to(
      ".loading_text .char",
      {
        y: "-100%",
        duration: 0.8,
        stagger: 0.05,
      },
      2
    );
  };
  

  return (
    <>
      {showPreloader && (
        <Loading/>
      )}
      <main
        ref={containerRef}
        className="lg:h-screen h-svh flex flex-col justify-center items-center p-8 relative overflow-hidden pt-[96px]"
      >
        <div>
          <div className="content_wrapper flex flex-col gap-[4vw] bg-amber-800t relative">
            <h1 className="heading designer text-grey_1">
              designer
            </h1>
            <div className="animated_wrapper tbg-black  transform  overflow-hidden bg-black">
              <h1
                id="heading_1"
                className="animated_name eric tbg-black  text-coral text-[12vw] leading-[10vw] font-medium uppercase mix-blend-difference"
                // style={{ visibility: isTextSplit ? "visible" : "hidden" }}
              >
                Eric Manasse
              </h1>
            </div>
            <h1 className="heading developer text-grey_1">
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
