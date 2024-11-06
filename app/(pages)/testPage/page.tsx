/* eslint-disable @next/next/no-img-element */
"use client";

import AnimatedLetters from "@/components/Animations/AnimatedLetters";
import { heading_1 } from "@/utils/styles";
// import { useState, useEffect } from "react";

// const DynamicClippingImages = () => {
//   const [viewportWidth, setViewportWidth] = useState(0);
//   const [viewportHeight, setViewportHeight] = useState(0);

//   useEffect(() => {
//     const handleResize = () => {
//       setViewportWidth(window.innerWidth);
//       setViewportHeight(window.innerHeight);
//     };

//     handleResize(); // Initialize
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const imageSrc = "/medias/hero_eric.jpg"; // Your image path
//   const clipWidth = viewportWidth * 0.36; // Adjust the clip width dynamically (50% of viewport width)
//   const clipHeight = viewportHeight * 0.3; // Adjust the clip height dynamically (30% of viewport height)
//   const verticalGap = 24; // Fixed vertical gap of 24px between the two rectangles

//   return (
//     <div className="relative w-screen min-h-screen">
//       {/* SVG definitions for clipping paths */}
//       <svg width="0" height="0">
//         <defs>
//           <clipPath id="myClip1">
//             <rect
//               x={`${viewportWidth * 0.1}`}
//               y={`${viewportHeight * 0.1}`}
//               width={`${clipWidth}`}
//               height={`${clipHeight}`}
//             />
//           </clipPath>
//         </defs>
//       </svg>
//       <div className="flex">
//         <AnimatedLetters title="Product" className={heading_1} />
//         <AnimatedLetters title="Designer" className={heading_1} />
//         <div className="svg_container">
//           <svg >
//             <defs>
//               <clipPath id="myClip2">
//                 {/* The y position for the second rect is the first's y + height + 24px gap */}
//                 <rect y={`${viewportHeight * 0.1 + clipHeight + verticalGap}`} width={`${clipWidth}`} height={`${clipHeight}`} />
//               </clipPath>
//             </defs>
//           </svg>
//         </div>
//       </div>

//       {/* First image with the first clip path */}
//       <img
//         src={imageSrc}
//         alt="Clipped Image 1"
//         className="absolute inset-0 w-full h-auto"
//         style={{
//           WebkitClipPath: "url(#myClip1)",
//           clipPath: "url(#myClip1)",
//         }}
//       />

//       {/* Second image with the second clip path */}
//       <img
//         src={imageSrc}
//         alt="Clipped Image 2"
//         className="absolute inset-0 w-full h-auto"
//         style={{
//           WebkitClipPath: "url(#myClip2)",
//           clipPath: "url(#myClip2)",
//         }}
//       />
//     </div>
//   );
// };

// export default DynamicClippingImages;




import { useState, useEffect, useRef } from "react";

const DynamicClippingImages = () => {
  const [containerRect, setContainerRect] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setContainerRect({
          x: rect.x,
          y: rect.y,
          width: rect.width,
          height: rect.height,
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const imageSrc = "/medias/hero_eric.jpg"; // Your image path
  const clipWidth = containerRect.width * 0.36;
  const clipHeight = containerRect.height * 0.42;
  const verticalGap = 24;

  return (
    <div className="relative w-screen min-h-screen p-20">
      {/* Parent div containing the SVG container */}
      <div className="flex" ref={containerRef}>
        <h1 title="Product" className={`{heading_1}`}> Product<br/> designer </h1>
        <div className="svg_container relative">
          {/* SVG now has a defined size */}
          <svg width="100%" height="100%" style={{ backgroundColor: "rgba(0, 0, 255, 0.1)" }}>
            <defs>
              <clipPath id="myClip1">
                <rect
                  // x={containerRect.x + containerRect.width * 0.1}
                  // y={containerRect.y + containerRect.height * 0.1}
                  x={'100%'}
                  y={'100%'}
                  width={`${clipWidth}`}
                  height={`${218}`}
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>

      {/* First image with the first clip path */}
      <img
        src={imageSrc}
        alt="Clipped Image 1"
        className="absolute inset-0 w-full h-auto"
        style={{
          WebkitClipPath: "url(#myClip1)",
          clipPath: "url(#myClip1)",
        }}
      />
    </div>
  );
};

export default DynamicClippingImages;
