"use client";
import "./home.css";
import { useState, useEffect, useRef } from "react";

// import DynamicBackground from "@/components/DynamicBackground/DynamicBackground";
import Copy from "@/components/Copy/Copy";
import BtnLink from "@/components/BtnLink/BtnLink";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomEase from "gsap/CustomEase";
import Footer from "@/components/Footer/Footer";
import TrailContainer from "@/components/TrailContainer";
// import InteractiveGradient from "@/components/InteractiveGradient";

gsap.registerPlugin(ScrollTrigger, CustomEase);
CustomEase.create("hop", "0.9, 0, 0.1, 1");

let isInitialLoad = true;

const workExperience = [
  {
    position: "Designer | Founder",
    company: "Projiro",
    duration: "2025",
  },
  {
    position: "Product Designer",
    company: "TheBang",
    duration: "2023 - 2024",
  },
  {
    position: "Product Designer",
    company: "Solve.money",
    duration: "2022",
  },
  {
    position: "Product Designer",
    company: "Eventify",
    duration: "2022",
  },
  {
    position: "Product Designer",
    company: "Kurtosys System",
    duration: "2018 - 2022",
  },
  {
    position: "Web Designer",
    company: "Lumico (Pty) Ltd",
    duration: "2015 - 2018",
  },
];

export default function Home() {
  const [showPreloader, setShowPreloader] = useState(isInitialLoad);
  const homeRef = useRef(null);
  const aboutImgRef = useRef(null);
  const workExperienceRef = useRef(null);

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

    // About image animation
    if (aboutImgRef.current) {
      const aboutImg = aboutImgRef.current.querySelector(
        ".about-img-container"
      );

      gsap.set(aboutImg, {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      });

      ScrollTrigger.create({
        trigger: aboutImg,
        start: "top 80%",
        onEnter: () => {
          gsap.to(aboutImg, {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
            duration: 1,
            ease: "power3.out",
          });
        },
      });
    }

    // Work experience animations
    if (workExperienceRef.current) {
      const workRows = workExperienceRef.current.querySelectorAll(
        ".work-experience-row"
      );

      workRows.forEach((row) => {
        const bg = row.querySelector(".work-experience-bg");
        const position = row.querySelector(".work-experience-position h3");
        const company = row.querySelector(".work-experience-company p");
        const duration = row.querySelector(".work-experience-duration span");

        // Set initial states
        gsap.set(bg, { scaleY: 0, transformOrigin: "bottom" });

        row.addEventListener("mouseenter", () => {
          gsap.to(bg, {
            scaleY: 1,
            duration: 0.6,
            ease: "power3.out",
          });

          gsap.to([position, company, duration], {
            color: "var(--white)",
            duration: 0.4,
            ease: "power3.out",
          });
        });

        row.addEventListener("mouseleave", () => {
          gsap.to(bg, {
            scaleY: 0,
            duration: 0.6,
            ease: "power3.out",
          });

          gsap.to(position, {
            color: "var(--black)",
            duration: 0.6,
            ease: "power3.out",
          });

          gsap.to(company, {
            color: "var(--black)",
            duration: 0.6,
            ease: "power3.out",
          });

          gsap.to(duration, {
            color: "var(--foreground-200)",
            duration: 0.6,
            ease: "power3.out",
          });
        });
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

      {/* <section className="hero">
        <div className="hero-img">
          <img src="/hero.jpg" alt="" />
        </div>

        <div className="header">
          <Copy delay={0.5}>
            <h1>We craft identities and experiences for the bold.</h1>
          </Copy>
        </div>
      </section> */}

      <section className="about">
        <div className="header">
          <Copy>
            <h1>
              <span className="spacer">&nbsp;</span>
              Product Designer and Design Engineer with 8+ years of experience
              bridging the gap between design and development.
            </h1>
          </Copy>
        </div>
        <TrailContainer />
      </section>

      <section className="about-img" ref={aboutImgRef}>
        <div className="about-img-container">
          <img src="/medias/eric_hero.jpg" alt="Eric Manasse" />
        </div>
      </section>

      <section className="story">
        <div className="col">
          <Copy>
            <h1>
              The Journey Behind <br /> My Design Approach
            </h1>
          </Copy>
        </div>
        <div className="col">
          <Copy>
            <p>
              Hi I'm Eric, a product designer with a background in development.
              As designer I play an active role in the product development
              process, from shaping ideas, designing end-to-end flows, and
              collaborating with cross-functional teams to deliver elegant
              solutions that drive impact. Recently, I’ve contributed to the EV
              sector, crafting digital experiences for a globally renowned
              luxury vehicle brand.
            </p>

            <p>
              I'm fluent in tools like Figma & design systems, React.js, React
              Native, Next.js, HTML/CSS, JavaScript, and TailwindCSS. I am a
              self-driven, self-motivated designer with a growth mindset. Right
              now, I run a newly founded Design Studio where I help startups and
              modern businesses build bold, high-impact digital products.
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
              <span className="spacer">&nbsp;</span>I believe great design
              happens where user needs meet business goals. My approach combines
              strategic thinking with hands-on execution—from research and
              prototyping to pixel-perfect implementation. I design systems that
              scale, solve real problems, and drive measurable impact. Every
              decision is intentional, every interface has purpose.
            </h1>
          </Copy>
        </div>
      </section>

      <section className="work-experience" ref={workExperienceRef}>
        <Copy>
          <span>Experience & Journey</span>
        </Copy>
        <div className="work-experience-table">
          {workExperience.map((experience, index) => (
            <div key={index} className="work-experience-row">
              <div className="work-experience-bg"></div>
              <div className="work-experience-position">
                <h3>{experience.position}</h3>
              </div>
              <div className="work-experience-company">
                <p>{experience.company}</p>
              </div>
              <div className="work-experience-duration">
                <span>{experience.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
