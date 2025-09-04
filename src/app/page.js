"use client";
import "./home.css";
import { useState, useEffect } from "react";

import DynamicBackground from "@/components/DynamicBackground/DynamicBackground";
import Copy from "@/components/Copy/Copy";
import BtnLink from "@/components/BtnLink/BtnLink";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomEase from "gsap/CustomEase";
import Footer from "@/components/Footer/Footer";

gsap.registerPlugin(ScrollTrigger, CustomEase);
CustomEase.create("hop", "0.9, 0, 0.1, 1");

let isInitialLoad = true;

export default function Home() {
  const [showPreloader, setShowPreloader] = useState(isInitialLoad);

  useEffect(() => {
    return () => {
      isInitialLoad = false;
    };
  }, []);

  useGSAP(() => {
    const heroLink = document.querySelector(".hero-link");
    const animationDelay = showPreloader ? 6.2 : 0.9;

    if (showPreloader) {
      const tl = gsap.timeline({
        delay: 0.3,
        defaults: {
          ease: "hop",
        },
      });

      const counts = document.querySelectorAll(".count");
      const progressBar = document.querySelector(".progress-bar");
      const preloaderOverlay = document.querySelector(".preloader-overlay");

      const progressTl = gsap.timeline({
        delay: 0.3,
      });

      counts.forEach((count, index) => {
        const digits = count.querySelectorAll(".digit h1");

        tl.to(
          digits,
          {
            y: "0%",
            duration: 1,
            stagger: 0.075,
          },
          index * 1
        );

        if (index < counts.length) {
          tl.to(
            digits,
            {
              y: "-120%",
              duration: 1,
              stagger: 0.075,
            },
            index * 1 + 1
          );
        }

        progressTl.to(
          progressBar,
          {
            scaleY: (index + 1) / counts.length,
            duration: 1,
            ease: "hop",
          },
          index * 1
        );
      });

      progressTl
        .set(progressBar, {
          transformOrigin: "top",
        })
        .to(progressBar, {
          scaleY: 0,
          duration: 0.75,
          ease: "hop",
        })
        .to(preloaderOverlay, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
          onComplete: () => {
            preloaderOverlay.style.display = "none";
          },
        });
    }

    if (heroLink) {
      gsap.set(heroLink, { y: 30, opacity: 0 });

      gsap.to(heroLink, {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: animationDelay,
        ease: "power4.out",
      });
    }
  }, [showPreloader]);

  return (
    <>
      {/* {showPreloader && (
        <div className="preloader-overlay">
          <div className="progress-bar"></div>
          <div className="counter">
            <div className="count">
              <div className="digit">
                <h1>0</h1>
              </div>
              <div className="digit">
                <h1>0</h1>
              </div>
            </div>
            <div className="count">
              <div className="digit">
                <h1>2</h1>
              </div>
              <div className="digit">
                <h1>7</h1>
              </div>
            </div>
            <div className="count">
              <div className="digit">
                <h1>6</h1>
              </div>
              <div className="digit">
                <h1>5</h1>
              </div>
            </div>
            <div className="count">
              <div className="digit">
                <h1>9</h1>
              </div>
              <div className="digit">
                <h1>8</h1>
              </div>
            </div>
            <div className="count">
              <div className="digit">
                <h1>9</h1>
              </div>
              <div className="digit">
                <h1>9</h1>
              </div>
            </div>
          </div>
        </div>
      )} */}

      <section className="hero">
        <div className="hero-img">
          <img src="/hero.jpg" alt="" />
        </div>

        <div className="header">
          <Copy delay={0.5}>
            <h1>We craft identities and experiences for the bold.</h1>
          </Copy>
        </div>
      </section>

      <section className="about">
        <Copy>
          <span>Design & Strategy for the Vision-Driven</span>
        </Copy>
        <div className="header">
          <Copy>
            <h1>
              We partner with founders, innovators, and change-makers to shape
              brands that resonate. From first lines of code to global launches,
              we bring focus, elegance, and intent to every stage.
            </h1>
          </Copy>
        </div>
      </section>

      <section className="about-img">
        <img src="/about.jpg" alt="" />
      </section>

      <section className="story">
        <div className="col">
          <Copy>
            <h1>
              The Story Behind <br /> Our Stillness
            </h1>
          </Copy>
        </div>
        <div className="col">
          <Copy>
            <p>
              Greyloom was born from a simple idea: that creativity, when
              wielded with intention, can quietly reshape the world. In an era
              of overstimulation and fleeting trends, we chose a different path.
              One of clarity, restraint, and long-form vision.
            </p>

            <p>
              We began as a small collective of designers, developers, and
              strategists who shared an obsession with thoughtful execution. No
              shortcuts, no templates. Just the hard, honest work of listening
              deeply, thinking critically, and building beautifully. Over time,
              our work began to attract the kind of clients we had always hoped
              for. Visionary founders, principled organizations, and global
              teams with sharp ideas and quiet confidence.
            </p>

            <p>
              We don’t chase virality. We don’t trade in noise. We build for the
              long haul: timeless identities, seamless digital experiences, and
              strategies that evolve with clarity and purpose. Greyloom exists
              for those who believe that the most enduring ideas don’t demand
              attention. They earn it.
            </p>
          </Copy>
        </div>
      </section>

      <section className="philosophy">
        <Copy>
          <span>The Thought Beneath</span>
        </Copy>
        <div className="header">
          <Copy>
            <h1>
              We believe in the power of quiet conviction. In work that speaks
              softly but lingers long. In design as a tool for clarity, not
              decoration. We believe that the best ideas don't demand attention.
              Our philosophy is simple. Create with purpose.
            </h1>
          </Copy>
        </div>
      </section>

      <Footer/>
    </>
  );
}
