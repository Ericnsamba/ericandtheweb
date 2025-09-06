"use client";
import { useState, useEffect } from "react";

import Menu from "@/components/Menu/Menu";

import { ReactLenis } from "lenis/react";

export default function ClientLayout({ children }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    // Check on mount
    checkIsMobile();

    // Listen for resize events
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const scrollSettings = isMobile
    ? {
        // Disable smooth scrolling on mobile for better performance
        smooth: false,
        smoothTouch: false,
      }
    : {
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: "vertical",
        gestureDirection: "vertical",
        smooth: true,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
        lerp: 0.1,
        wheelMultiplier: 1,
        orientation: "vertical",
        smoothWheel: true,
        syncTouch: true,
      };

  return (
    <ReactLenis root options={scrollSettings}>
      <>
        <Menu />
      </>
      {children}
    </ReactLenis>
  );
}
