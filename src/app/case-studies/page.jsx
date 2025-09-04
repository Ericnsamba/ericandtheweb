"use client";
import { caseStudies } from "@/data/case-studies";
import { useRef } from "react";
import Copy from "@/components/Copy/Copy";
import Footer from "@/components/Footer/Footer";
import { useTransitionRouter } from "next-view-transitions";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./case-studies.css";

gsap.registerPlugin(ScrollTrigger);

export default function CaseStudiesPage() {
  const caseStudiesRef = useRef(null);
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

  const navigateToCaseStudy = (caseStudyId) => {
    router.push(`/case-studies/${caseStudyId}`, {
      onTransitionReady: slideInOut,
    });
  };

  useGSAP(
    () => {
      const caseStudyItems = caseStudiesRef.current.querySelectorAll(".case-study-item");
      gsap.set(caseStudyItems, { y: 100, opacity: 0 });
      gsap.to(caseStudyItems, {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        delay: 0.85,
        duration: 1,
        ease: "power3.out",
      });
    },
    { scope: caseStudiesRef }
  );

  // Separate featured and regular case studies
  const featuredCaseStudies = caseStudies.filter(study => study.featured);
  const regularCaseStudies = caseStudies.filter(study => !study.featured);

  return (
    <>
      <div className="case-studies-page" ref={caseStudiesRef}>
        {/* Header */}
        <div className="case-studies-header">
          <Copy delay={0.5}>
            <h1>Case Studies</h1>
          </Copy>
          <Copy delay={0.7}>
            <p>A curated selection of our most impactful work, showcasing creative solutions for forward-thinking clients.</p>
          </Copy>
        </div>

        {/* All Case Studies */}
        <section className="all-case-studies">
          <Copy>
            <span className="section-label">All Projects</span>
          </Copy>
          <div className="case-studies-grid">
            {caseStudies.map((caseStudy, index) => (
              <div
                key={caseStudy.id}
                className="case-study-item"
                onClick={() => navigateToCaseStudy(caseStudy.id)}
                style={{ cursor: "pointer" }}
              >
                <div className="case-study-image">
                  <img src={caseStudy.hero} alt={caseStudy.title} />
                </div>
                <div className="case-study-content">
                  <div className="case-study-meta">
                    <span className="case-study-year">{caseStudy.year}</span>
                    <span className="case-study-client">{caseStudy.client}</span>
                  </div>
                  <h3 className="case-study-title">{caseStudy.title}</h3>
                  <p className="case-study-subtitle">{caseStudy.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}