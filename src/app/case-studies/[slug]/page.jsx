"use client";
import { useParams } from "next/navigation";
import { caseStudies } from "@/data/case-studies";
import Copy from "@/components/Copy/Copy";
import Footer from "@/components/Footer/Footer";
import BtnLink from "@/components/BtnLink/BtnLink";
import { useTransitionRouter } from "next-view-transitions";
import "./case-study.css";

export default function CaseStudyPage() {
  const params = useParams();
  const router = useTransitionRouter();
  const caseStudy = caseStudies.find(study => study.id === params.slug);
  
  // Calculate next project route
  const currentIndex = caseStudies.findIndex(study => study.id === caseStudy?.id);
  const nextIndex = (currentIndex + 1) % caseStudies.length;
  const nextCaseStudy = caseStudies[nextIndex];
  const nextProjectRoute = `/case-studies/${nextCaseStudy?.id}`;

  const slideInOut = () => {
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
  };

  if (!caseStudy) {
    return (
      <div className="case-study-not-found">
        <Copy>
          <h1>Case study not found</h1>
        </Copy>
      </div>
    );
  }

  return (
    <>
      <div className="case-study">
        {/* Hero Section */}
        <section className="case-study-hero">
          <div className="case-study-hero-img">
            <img src={caseStudy.hero} alt={caseStudy.title} />
          </div>
          <div className="case-study-hero-content">
            <Copy delay={0.5}>
              <h1>{caseStudy.title}</h1>
            </Copy>
            <Copy delay={0.7}>
              <p className="case-study-subtitle">{caseStudy.subtitle}</p>
            </Copy>
          </div>
        </section>

        {/* Project Info */}
        <section className="case-study-info">
          <div className="case-study-info-grid">
            <div className="info-item">
              <Copy>
                <span className="info-label">Client</span>
              </Copy>
              <Copy>
                <h3>{caseStudy.client}</h3>
              </Copy>
            </div>
            <div className="info-item">
              <Copy>
                <span className="info-label">Year</span>
              </Copy>
              <Copy>
                <h3>{caseStudy.year}</h3>
              </Copy>
            </div>
            <div className="info-item">
              <Copy>
                <span className="info-label">Services</span>
              </Copy>
              <Copy>
                <div className="services-list">
                  {caseStudy.services.map((service, index) => (
                    <p key={index}>{service}</p>
                  ))}
                </div>
              </Copy>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="case-study-section">
          <Copy>
            <span className="section-label">Overview</span>
          </Copy>
          <div className="section-content">
            <Copy>
              <h2>Project Summary</h2>
            </Copy>
            <Copy>
              <p>{caseStudy.description}</p>
            </Copy>
          </div>
        </section>

        {/* Challenge */}
        <section className="case-study-section">
          <Copy>
            <span className="section-label">The Challenge</span>
          </Copy>
          <div className="section-content">
            <Copy>
              <h2>Understanding the Problem</h2>
            </Copy>
            <Copy>
              <p>{caseStudy.challenge}</p>
            </Copy>
          </div>
        </section>

        {/* Solution */}
        <section className="case-study-section">
          <Copy>
            <span className="section-label">The Solution</span>
          </Copy>
          <div className="section-content">
            <Copy>
              <h2>My Approach</h2>
            </Copy>
            <Copy>
              <p>{caseStudy.solution}</p>
            </Copy>
          </div>
        </section>

        {/* Images Gallery */}
        <section className="case-study-gallery">
          {caseStudy.images.map((image, index) => (
            <div key={index} className="gallery-item">
              <Copy>
                <img src={image} alt={`${caseStudy.title} - Image ${index + 1}`} />
              </Copy>
            </div>
          ))}
        </section>

        {/* Results */}
        <section className="case-study-results">
          <Copy>
            <span className="section-label">The Results</span>
          </Copy>
          <div className="results-content">
            <Copy>
              <h2>Impact & Outcomes</h2>
            </Copy>
            <div className="results-list">
              {caseStudy.results.map((result, index) => (
                <Copy key={index}>
                  <p>• {result}</p>
                </Copy>
              ))}
            </div>
          </div>
        </section>

        {/* Next Project CTA */}
        <section className="next-project-cta">

            <div className="next-project-content">
              <h2>View Next Project</h2>
              <BtnLink 
                label="Next Project" 
                route={nextProjectRoute}
                dark={false}
              />
            </div>

        </section>
      </div>
      <Footer />
    </>
  );
}