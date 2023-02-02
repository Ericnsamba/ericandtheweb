import { useEffect, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "../baseStyles.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export interface Scroller {
  on: (s: string, t: any) => void;
  scrollTo: (target: string, options: {}) => void;
}

const useScrollSettings = (start: boolean) => {
  const [scroller, setScroller] = useState<Scroller | null>(null);

  useEffect(() => {
    if (!start) return;

    const scrollEl = document.querySelector<HTMLDivElement>(
      "[data-scroll-container]"
    );

    let locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1,
      class: "is-reveal",
    });

    setScroller(locoScroll);

    locoScroll.on("scroll", () => {
      ScrollTrigger.update();
    });

    ScrollTrigger.scrollerProxy(scrollEl, {
      scrollTop(value) {
        if (locoScroll) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y;
        }
        return null;
      },
      scrollLeft(value) {
        if (locoScroll) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.x;
        }
        return null;
      },
    });

    const lsUpdate = () => {
      if (locoScroll) {
        locoScroll.update();
      }
    };

    ScrollTrigger.addEventListener("refresh", lsUpdate);
    ScrollTrigger.refresh();

    return () => {
      if (locoScroll) {
        ScrollTrigger.removeEventListener("refresh", lsUpdate);
        locoScroll.destroy();
        locoScroll = null;
      }
    };
  }, [start]);

  return scroller;
};

export default useScrollSettings;
