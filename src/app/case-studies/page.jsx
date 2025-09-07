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
      const caseStudyItems =
        caseStudiesRef.current.querySelectorAll(".case-studies-item");
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
  const featuredCaseStudies = caseStudies.filter((study) => study.featured);
  const regularCaseStudies = caseStudies.filter((study) => !study.featured);

  return (
    <>
      <main className="case-studies-page" ref={caseStudiesRef}>
        {/* Header */}
        <section className="case-studies-header">
          <Copy delay={0.5}>
            <h1>Case Studies</h1>
          </Copy>
          <Copy delay={0.8}>
            {/* <h1>
              <span className="spacer">&nbsp;</span>A curated collection of
              projects and experiments that showcase my journey through design,
              ideas, and technology. Each piece reflects my approach to learning
              exploring concepts, testing possibilities, and building to bring
              ideas to life.
            </h1> */}
            <h1>
              <span className="spacer">&nbsp;</span>A selection of projects and
              explorations that capture my approach to design and
              technology, testing ideas, refining concepts, and turning them into
              real outcomes.
            </h1>
          </Copy>
        </section>

        {/* All Case Studies */}
        <section className="all-case-studies">
          {/* <Copy>
            <span className="section-label">All Projects</span>
          </Copy> */}
          <div className="case-studies-table">
            {caseStudies.map((caseStudy, index) => (
              <div
                key={caseStudy.id}
                className="case-studies-row"
                onClick={() => navigateToCaseStudy(caseStudy.id)}
              >
                <div className="case-studies-image-container">
                  <div className="case-studies-image">
                    <img src={caseStudy.hero} alt={caseStudy.title} />
                  </div>
                </div>
                <div className="case-studies-info">
                  <h1 className="case-studies-title">{caseStudy.title}</h1>
                </div>
                <div className="case-studies-tags">
                  <span className="case-studies-tag">{caseStudy.subtitle}</span>
                </div>
                <div className="case-studies-year">
                  <span>{caseStudy.year}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
