"use client";
import "./Menu.css";
import { useRef, useState, useEffect } from "react";

import { useTransitionRouter } from "next-view-transitions";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(CustomEase);
CustomEase.create("hop", ".15, 1, .25, 1");

const Menu = ({ onMenuStateChange }) => {
  const [currentPath, setCurrentPath] = useState("/");
  const [currentTime, setCurrentTime] = useState("");
  const router = useTransitionRouter();

  const navRef = useRef(null);
  const navLogoRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now
        .toLocaleTimeString("en-US", {
          hour12: true,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
        .replace(/:/g, ":")
        .toUpperCase();
      setCurrentTime(timeString);
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleRouteChange = () => {
      if (typeof window !== "undefined") {
        setCurrentPath(window.location.pathname);
      }
    };

    window.addEventListener("popstate", handleRouteChange);

    router.events?.on?.("routeChangeComplete", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
      router.events?.off?.("routeChangeComplete", handleRouteChange);
    };
  }, [router]);


  function slideInOut() {
    document.documentElement.animate(
      [
        {
          opacity: 1,
          transform: "translateY(0) scale(1)",
        },
        {
          opacity: 0.2,
          transform: "translateY(-30%) scale(0.90)",
        },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-old(root)",
      }
    );

    document.documentElement.animate(
      [
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        },
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  }

  const getExactPath = () => {
    if (typeof window !== "undefined") {
      return window.location.pathname;
    }
    return currentPath;
  };

  const isExactPath = (path) => {
    const exactCurrentPath = getExactPath();
    return exactCurrentPath === path;
  };

  return (
    <>
      <div className="nav-container">
        <div className="nav" ref={navRef}>
          <div className="nav-logo">
            <div className="revealer">
              <a
                href="/"
                ref={navLogoRef}
                className="sm caps mono"
                onClick={(e) => {
                  e.preventDefault();
                  if (isExactPath("/")) return;

                  router.push("/", {
                    onTransitionReady: slideInOut,
                  });
                }}
              >
                Eric Manasse
              </a>
            </div>
          </div>
          <div className="nav-items">
            <div className="nav-menu-time">
              <div className="revealer">
                <p className="sm caps mono">{currentTime}</p>
              </div>
            </div>

            <div className="nav-links">
              <div className="revealer">
                <a
                  href="/"
                  className="sm caps mono"
                  onClick={(e) => {
                    e.preventDefault();
                    if (isExactPath("/")) return;
                    router.push("/", {
                      onTransitionReady: slideInOut,
                    });
                  }}
                >
                  Index
                </a>
              </div>
              <div className="revealer">
                <a
                  href="/case-studies"
                  className="sm caps mono"
                  onClick={(e) => {
                    e.preventDefault();
                    if (isExactPath("/case-studies")) return;
                    router.push("/case-studies", {
                      onTransitionReady: slideInOut,
                    });
                  }}
                >
                  Case Studies
                </a>
              </div>
              <div className="revealer">
                <a
                  href="/contact"
                  className="sm caps mono"
                  onClick={(e) => {
                    e.preventDefault();
                    if (isExactPath("/contact")) return;
                    router.push("/contact", {
                      onTransitionReady: slideInOut,
                    });
                  }}
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
