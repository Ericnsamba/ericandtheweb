import React, { useState, useEffect, useRef } from "react";

export default function SvgAnimation(className) {
  const animationRef = useRef(null);
  const [changingColor, setChangingColor] = useState('#f2f2f2')
  // console.log("🚀 ~ file: SvgAnimation.js ~ ", changingColor)
  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
      let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
      if (animationRef.current == null) return;
      animationRef.current.setAttribute(
        "style",
        "stroke-dashoffset:" + e.pageY + "px; stroke-dasharray: " + e.pageX,
        "transition:" + `stroke-dashoffset 1s ease 0s;`,
        "fill:" + `#${e.pageX + '' + e.pageY}`
        );
        setChangingColor(`rgba(${e.pageX},80,${e.pageY},1)`)
    });
  }, []);
  return (
    <div className={"svgAnimation hidden lg:flex"} ref={animationRef} >
      <svg
        width="958"
        height="92"
        viewBox="0 0 958 92"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-elem-1 stroke-forestGreen dark:stroke-green "
          fill="none"
          fill-rule="evenodd"

        >
          <path d="M957.672 34.812C957.672 41.532 956.118 47.496 953.01 52.704C949.986 57.828 945.787 61.692 940.411 64.296L956.286 90H923.526L910.422 67.95H882.325V90H854.604V1.80002H923.904C930.54 1.80002 936.379 3.18602 941.419 5.95802C946.543 8.73002 950.532 12.636 953.388 17.676C956.244 22.632 957.672 28.344 957.672 34.812ZM882.325 44.514H917.604C920.04 44.514 922.099 44.346 923.779 44.01C925.459 43.674 926.887 42.834 928.062 41.49C929.322 40.062 929.953 37.836 929.953 34.812C929.953 31.872 929.322 29.73 928.062 28.386C926.887 26.958 925.459 26.076 923.779 25.74C922.099 25.404 920.04 25.236 917.604 25.236H882.325V44.514Z" />
        </g>
        <g
          className="svg-elem-1 stroke-forestGreen dark:stroke-green "
          fill="none"
          fill-rule="evenodd"
          // stroke="#f2f2f2"
        >
          <path d="M783.149 23.346V36.45H848.669V55.35H783.149V68.454H848.669V90H755.429V1.80002H848.669V23.346H783.149Z" />
        </g>
        <g
          className="svg-elem-1 stroke-forestGreen dark:stroke-green "
          fill="none"
          fill-rule="evenodd"
          // stroke="#f2f2f2"
        >
          <path d="M715.709 1.80002C722.345 1.80002 728.183 3.18602 733.223 5.95802C738.347 8.73002 742.337 12.636 745.193 17.676C748.049 22.632 749.477 28.344 749.477 34.812C749.477 41.28 748.049 47.034 745.193 52.074C742.337 57.114 738.347 61.02 733.223 63.792C728.183 66.564 722.345 67.95 715.709 67.95H674.129V90H646.409V1.80002H715.709ZM709.409 44.514C711.845 44.514 713.903 44.346 715.583 44.01C717.263 43.674 718.691 42.834 719.867 41.49C721.127 40.062 721.757 37.836 721.757 34.812C721.757 31.872 721.127 29.73 719.867 28.386C718.691 26.958 717.263 26.076 715.583 25.74C713.903 25.404 711.845 25.236 709.409 25.236H674.129V44.514H709.409Z" />
        </g>

        <g
          className="svg-elem-1 stroke-forestGreen dark:stroke-green "
          fill="none"
          fill-rule="evenodd"
          // stroke="#f2f2f2"
        >
          <path d="M585.048 91.26C565.896 91.26 551.868 87.48 542.964 79.92C534.06 72.36 529.608 60.978 529.608 45.774C529.608 30.57 534.06 19.23 542.964 11.754C551.868 4.27801 565.896 0.540009 585.048 0.540009C604.116 0.540009 618.102 4.32001 627.006 11.88C635.994 19.356 640.488 30.654 640.488 45.774C640.488 60.978 635.994 72.36 627.006 79.92C618.102 87.48 604.116 91.26 585.048 91.26ZM585.048 67.824C595.296 67.824 602.478 65.976 606.594 62.28C610.71 58.584 612.768 53.082 612.768 45.774C612.768 38.55 610.71 33.132 606.594 29.52C602.478 25.824 595.296 23.976 585.048 23.976C574.8 23.976 567.618 25.824 563.502 29.52C559.386 33.132 557.328 38.55 557.328 45.774C557.328 53.082 559.386 58.584 563.502 62.28C567.618 65.976 574.8 67.824 585.048 67.824Z" />
        </g>

        <g
          className="svg-elem-1 stroke-forestGreen dark:stroke-green "
          fill="none"
          fill-rule="evenodd"
          // stroke="#f2f2f2"
        >
          <path d="M526.596 66.564V90H435.876V1.80002H463.596V66.564H526.596Z" />
        </g>

        <g
          className="svg-elem-1 stroke-forestGreen dark:stroke-green "
          fill="none"
          fill-rule="evenodd"
          // stroke="#f2f2f2"
        >
          <path d="M364.421 23.346V36.45H429.941V55.35H364.421V68.454H429.941V90H336.701V1.80002H429.941V23.346H364.421Z" />
        </g>

        <g
          className="svg-elem-1 stroke-forestGreen dark:stroke-green "
          fill="none"
          fill-rule="evenodd"
          // stroke="#f2f2f2"
        >
          <path d="M332.757 1.80002L291.807 90H252.117L211.041 1.80002H241.785L271.899 70.596L302.013 1.80002H332.757Z" />
        </g>

        <g
          className="svg-elem-1 stroke-forestGreen dark:stroke-green "
          fill="none"
          fill-rule="evenodd"
          // stroke="#f2f2f2"
        >
          <path d="M141.46 23.346V36.45H206.98V55.35H141.46V68.454H206.98V90H113.74V1.80002H206.98V23.346H141.46Z" />
        </g>

        <g
          className="svg-elem-1 stroke-forestGreen dark:stroke-green"
          fill="none"
          fill-rule="evenodd"
          // stroke="#f2f2f2"
        >
          <path d="M65.7958 1.80002C73.3558 1.80002 80.3278 3.43802 86.7118 6.71402C93.0958 9.99002 98.1778 14.946 101.958 21.582C105.822 28.218 107.754 36.324 107.754 45.9C107.754 55.476 105.822 63.582 101.958 70.218C98.1778 76.854 93.0958 81.81 86.7118 85.086C80.3278 88.362 73.3558 90 65.7958 90H0.905762V1.80002H65.7958ZM56.3458 66.564C61.2178 66.564 65.2918 66.102 68.5678 65.178C71.9278 64.254 74.6578 62.28 76.7578 59.256C78.9418 56.232 80.0338 51.78 80.0338 45.9C80.0338 40.02 78.9418 35.568 76.7578 32.544C74.6578 29.52 71.9278 27.546 68.5678 26.622C65.2918 25.698 61.2178 25.236 56.3458 25.236H28.6258V66.564H56.3458Z" />
        </g>
      </svg>
    </div>
  );
}
