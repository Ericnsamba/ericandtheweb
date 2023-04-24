// import React, { useState, useEffect, useLayoutEffect, HTMLAttributes } from "react";
// import Image from "next/image";
// import gsap from "gsap";
// import "./styles.css";

// interface SplashScreenProps extends HTMLAttributes<HTMLDivElement> {
//   isMounted?: boolean;
//   finishLoading: any;
// }

// const SplashScreen = ({ finishLoading }: SplashScreenProps) => {
//   const [isMounted, setIsMounted] = useState(false);

//   useLayoutEffect(() => {
//     gsap.set(".wrapper", { overflow: "hidden" });

//     const tl = gsap.timeline({ paused: true });

//     tl.to(".loader", {
//       height: "20vh",
//       scaleY: "0%",
//       ease: "Expo.easeInOut",
//       transformOrigin: "0% -100%",
//       delay: .4,
//       onComplete: () => {
//         gsap.to(".loader", {
//           height: "0",
//           scaleY: "0",
//           ease: "Expo.easeInOut",
//           transformOrigin: "50% 0%",
//           delay: .2,
//         });
//       },
//     })
//       .to(
//         ".wrapper",
//         {
//           y: "-100%",
//           ease: "Expo.easeInOut",
//           duration: 2.8,
//         },
//         "-=0.5"
//       );

//     let animated = gsap.context(() => {
//       tl.play();
//     });

//     return () => animated.revert();
//   });

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setIsMounted(true);
//       finishLoading();
//     }, 2600);

//     return () => clearTimeout(timeout);
//   }, []);

//   return (
//     <div className="flex h-screen items-center justify-center" isMounted={isMounted}>
//       <div className="wrapper bg-green">
//         <div className="loader bg-black"></div>
//       </div>
//     </div>
//   );
// };

// export default SplashScreen;

import React, {
  useState,
  useEffect,
  useLayoutEffect,
  HTMLAttributes,
} from "react";
import Image from "next/image";
import gsap from "gsap";
import "./styles.css";

interface SplashScreenProps extends HTMLAttributes<HTMLDivElement> {
  finishLoading: any;
}

const SplashScreen = ({ finishLoading, ...rest }: SplashScreenProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useLayoutEffect(() => {
    gsap.set(".wrapper", { overflow: "hidden" });

    const tl = gsap.timeline({ paused: true });

    tl.to(".loader", {
      height: "20vh",
      scaleY: "0%",
      ease: "Expo.easeInOut",
      transformOrigin: "0% -100%",
      delay: 0.4,
      onComplete: () => {
        gsap.to(".loader", {
          height: "0",
          scaleY: "0",
          ease: "Expo.easeInOut",
          transformOrigin: "50% 0%",
          delay: 0.2,
        });
      },
    }).to(
      ".wrapper",
      {
        y: "-100%",
        ease: "Expo.easeInOut",
        duration: 2.8,
      },
      "-=0.5"
    );

    let animated = gsap.context(() => {
      tl.play();
    });

    return () => animated.revert();
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
      finishLoading();
    }, 2600);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div {...rest} className="wrapper bg-green h-screen w-screen">
      <div className="loader bg-black w-[100px] lg:w-[160px]"></div>
    </div>
  );
};

export default SplashScreen;
