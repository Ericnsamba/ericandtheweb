"use client";
import "./work.css";
import { portfolio } from "./portfolio";
import { caseStudies } from "@/data/case-studies";
import { useRef } from "react";

import Copy from "@/components/Copy/Copy";
import Footer from "@/components/Footer/Footer";

import { useTransitionRouter } from "next-view-transitions";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const page = () => {
  const workRef = useRef(null);
  const router = useTransitionRouter();

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

  const navigateToProject = (projectName) => {
    // Find matching case study based on project name
    const caseStudy = caseStudies.find(
      study => study.title.toLowerCase() === projectName.toLowerCase()
    );
    
    if (caseStudy) {
      router.push(`/case-studies/${caseStudy.id}`, {
        onTransitionReady: slideInOut,
      });
    } else {
      // Fallback to sample project for non-matching items
      router.push("/sample-project", {
        onTransitionReady: slideInOut,
      });
    }
  };

  useGSAP(
    () => {
      const workContainers =
        workRef.current.querySelectorAll(".work-container");
      const yearIndices = document.querySelectorAll(".year-index");
      let initialAnimationComplete = false;

      const workProjects = workRef.current.querySelectorAll(".work-project");
      gsap.set(workProjects, { y: 100, opacity: 0 });
      gsap.to(workProjects, {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        delay: 0.85,
        duration: 1,
        ease: "power3.out",
      });

      workContainers.forEach((container, index) => {
        ScrollTrigger.create({
          trigger: container,
          start: "top 50%",
          end: "bottom 50%",
          onEnter: () => {
            if (!initialAnimationComplete) return;

            yearIndices.forEach((yearIndex, i) => {
              yearIndex.classList.remove("active");
              const highlighter = yearIndex.querySelector(
                ".year-index-highlighter"
              );
              gsap.to(highlighter, {
                scaleX: 0,
                transformOrigin: "right",
                duration: 0.3,
                ease: "power2.out",
              });
            });

            if (yearIndices[index]) {
              yearIndices[index].classList.add("active");
              const highlighter = yearIndices[index].querySelector(
                ".year-index-highlighter"
              );
              gsap.to(highlighter, {
                scaleX: 1,
                transformOrigin: "left",
                duration: 0.3,
                ease: "power2.out",
              });
            }
          },
          onEnterBack: () => {
            if (!initialAnimationComplete) return;

            yearIndices.forEach((yearIndex, i) => {
              yearIndex.classList.remove("active");
              const highlighter = yearIndex.querySelector(
                ".year-index-highlighter"
              );
              gsap.to(highlighter, {
                scaleX: 0,
                transformOrigin: "right",
                duration: 0.3,
                ease: "power2.out",
              });
            });

            if (yearIndices[index]) {
              yearIndices[index].classList.add("active");
              const highlighter = yearIndices[index].querySelector(
                ".year-index-highlighter"
              );
              gsap.to(highlighter, {
                scaleX: 1,
                transformOrigin: "left",
                duration: 0.3,
                ease: "power2.out",
              });
            }
          },
        });
      });

      yearIndices.forEach((yearIndex) => {
        const highlighter = yearIndex.querySelector(".year-index-highlighter");
        gsap.set(highlighter, { scaleX: 0 });
      });

      setTimeout(() => {
        let activeIndex = 0;
        workContainers.forEach((container, index) => {
          const rect = container.getBoundingClientRect();
          const containerCenter = rect.top + rect.height / 2;
          const viewportCenter = window.innerHeight / 2;

          if (containerCenter <= viewportCenter) {
            activeIndex = index;
          }
        });

        if (yearIndices[activeIndex]) {
          yearIndices[activeIndex].classList.add("active");
          const highlighter = yearIndices[activeIndex].querySelector(
            ".year-index-highlighter"
          );
          gsap.to(highlighter, {
            scaleX: 1,
            transformOrigin: "left",
            duration: 0.3,
            ease: "power2.out",
            onComplete: () => {
              initialAnimationComplete = true;
            },
          });
        }
      }, 1000);

      if (window.innerWidth > 1000) {
        const workYears = workRef.current.querySelectorAll(".work-year");
        workYears.forEach((workYear) => {
          ScrollTrigger.create({
            trigger: workYear,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            onUpdate: (self) => {
              gsap.to(workYear, {
                y: self.progress * -100,
                duration: 0.3,
                ease: "none",
              });
            },
          });
        });
      }
    },
    { scope: workRef }
  );

  return (
    <>
      <div className="work" ref={workRef}>
        <div className="year-indices">
          {portfolio.map((yearData, yearIndex) => (
            <div
              key={yearIndex}
              className={`year-index year-index-var-${(yearIndex % 3) + 1}`}
            >
              <Copy delay={0.85}>
                <p className="sm">{yearData.year.slice(-2)}</p>
              </Copy>
              <div className="year-index-highlighter"></div>
            </div>
          ))}
        </div>
        <div className="work-sidebar"></div>
        <div className="work-main">
          {portfolio.map((yearData, yearIndex) => (
            <div key={yearIndex} className="work-container">
              <div className="work-year-container">
                <Copy delay={0.85} animateOnScroll={false}>
                  <h1 className="work-year">'{yearData.year.slice(-2)}</h1>
                </Copy>
              </div>
              <div className="work-projects-container">
                {yearData.projects.map((project, projectIndex) => (
                  <div
                    key={projectIndex}
                    className="work-project"
                    onClick={() => navigateToProject(project.name)}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="work-project-img">
                      <img src={project.img} alt={project.name} />
                    </div>
                    <div className="work-project-info">
                      <p className="sm work-project-info-name">
                        {project.name}
                      </p>
                      <p className="sm work-project-info-tags">
                        {project.tags}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
