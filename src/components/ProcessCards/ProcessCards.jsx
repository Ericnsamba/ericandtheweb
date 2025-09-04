"use client";
import "./ProcessCards.css";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProcessCards = () => {
  const processCardsData = [
    {
      index: "01",
      title: "Principles",
      image: "/images/process/process_001.jpeg",
      description:
        "We design with restraint and intention. Every decision is shaped by a set of values—clarity, structure, and calm execution.",
    },
    {
      index: "02",
      title: "Approach",
      image: "/images/process/process_002.jpeg",
      description:
        "Our process is iterative and deliberate. We prioritize simplicity over excess, and build systems that scale with clarity.",
    },
    {
      index: "03",
      title: "Practice",
      image: "/images/process/process_003.jpeg",
      description:
        "We work at the intersection of design and code. Every detail is shaped by consistency, rhythm, and quiet precision.",
    },
    {
      index: "04",
      title: "Vision",
      image: "/images/process/process_004.jpeg",
      description:
        "We believe the web should feel honest and effortless. Our aim is to create digital experiences that stand the test of time.",
    },
  ];

  useGSAP(() => {
    const processCards = document.querySelectorAll(".process-card");

    processCards.forEach((card, index) => {
      if (index < processCards.length - 1) {
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          endTrigger: processCards[processCards.length - 1],
          end: "top top",
          pin: true,
          pinSpacing: false,
          id: `card-pin-${index}`,
        });
      }

      if (index < processCards.length - 1) {
        ScrollTrigger.create({
          trigger: processCards[index + 1],
          start: "top bottom",
          end: "top top",
          onUpdate: (self) => {
            const progress = self.progress;
            const scale = 1 - progress * 0.25;
            const rotation = (index % 2 === 0 ? 5 : -5) * progress;
            const afterOpacity = progress;

            gsap.set(card, {
              scale: scale,
              rotation: rotation,
              "--after-opacity": afterOpacity,
            });
          },
        });
      }
    });
  }, []);

  return (
    <div className="process-cards">
      {processCardsData.map((cardData, index) => (
        <div key={index} className="process-card">
          <div className="process-card-index">
            <h1>{cardData.index}</h1>
          </div>
          <div className="process-card-content">
            <div className="process-card-content-wrapper">
              <h1 className="process-card-header">{cardData.title}</h1>

              <div className="process-card-img">
                <img src={cardData.image} alt="" />
              </div>

              <div className="process-card-copy">
                <div className="process-card-copy-title">
                  <p className="caps">(About the state)</p>
                </div>
                <div className="process-card-copy-description">
                  <p>{cardData.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProcessCards;
