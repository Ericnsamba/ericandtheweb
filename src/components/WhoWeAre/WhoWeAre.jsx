"use client";
import "./WhoWeAre.css";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhoWeAre = () => {
  useGSAP(() => {
    const whoweareScroll = document.querySelector(".whoweare-scroll");
    const containerWidth = whoweareScroll.offsetWidth;
    const viewportWidth = window.innerWidth;

    const maxTranslateX = containerWidth - viewportWidth;
    const targetProgress = 1;
    const maxTranslateAtTarget = maxTranslateX / targetProgress;

    const images = [
      { id: "#whoweare-img-1", endTranslateX: -800 },
      { id: "#whoweare-img-2", endTranslateX: -1200 },
      { id: "#whoweare-img-3", endTranslateX: -600 },
      { id: "#whoweare-img-4", endTranslateX: -1000 },
      { id: "#whoweare-img-5", endTranslateX: -900 },
    ];

    ScrollTrigger.create({
      trigger: ".whoweare",
      start: "top bottom",
      end: `bottom+=${window.innerHeight * 2} top`,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const clipPathValue = Math.min(progress * 100, 100);

        gsap.set(".whoweare-container", {
          clipPath: `circle(${clipPathValue}% at 50% 50%)`,
        });
      },
      onComplete: () => {
        gsap.set(".whoweare-container", {
          clipPath: `circle(100% at 50% 50%)`,
        });
      },
    });

    ScrollTrigger.create({
      trigger: ".whoweare",
      start: "top top",
      end: `+=${window.innerHeight * 6}`,
      pin: true,
      pinSpacing: true,
      scrub: 1,
      anticipatePin: 0.5,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        const progress = self.progress;

        let opacity, scale, translateX;

        if (progress <= 0.3) {
          const fadeProgress = progress / 0.3;
          opacity = fadeProgress;
          scale = 0.85 + 0.15 * fadeProgress;
          translateX = 0;
        } else {
          opacity = 1;
          scale = 1;
          const adjustedProgress = (progress - 0.3) / (1 - 0.3);
          translateX = -Math.min(
            adjustedProgress * maxTranslateAtTarget,
            maxTranslateX
          );
        }

        gsap.set(whoweareScroll, {
          opacity: opacity,
          scale: scale,
          x: translateX,
        });
      },
    });

    images.forEach((img) => {
      ScrollTrigger.create({
        trigger: ".whoweare",
        start: "top top",
        end: `+=${window.innerHeight * 6}`,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;

          if (progress >= 0.3) {
            const adjustedProgress = (progress - 0.3) / (1 - 0.3);
            gsap.set(img.id, {
              x: `${img.endTranslateX * adjustedProgress}px`,
            });
          }
        },
      });
    });
  }, []);

  return (
    <section className="whoweare">
      <div className="whoweare-container">
        <div className="whoweare-scroll">
          <div className="whoweare-header">
            <h1>Who we are</h1>
          </div>

          <div className="whoweare-img" id="whoweare-img-1">
            <img src="/images/who-we-are/team-1.jpg" alt="" />
          </div>
          <div className="whoweare-img" id="whoweare-img-2">
            <img src="/images/who-we-are/team-2.jpg" alt="" />
          </div>
          <div className="whoweare-img" id="whoweare-img-3">
            <img src="/images/who-we-are/team-3.jpg" alt="" />
          </div>
          <div className="whoweare-img" id="whoweare-img-4">
            <img src="/images/who-we-are/team-4.jpg" alt="" />
          </div>
          <div className="whoweare-img" id="whoweare-img-5">
            <img src="/images/who-we-are/team-5.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
