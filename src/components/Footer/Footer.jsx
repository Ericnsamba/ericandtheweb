"use client";
import "./Footer.css";
import { useRef } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useGSAP(
    () => {
      const textElements = footerRef.current.querySelectorAll(".footer-text");

      textElements.forEach((element) => {
        const textContent = element.querySelector(".footer-text-content");
        gsap.set(textContent, {
          y: "100%",
        });
      });

      ScrollTrigger.create({
        trigger: footerRef.current,
        start: "top 80%",
        onEnter: () => {
          textElements.forEach((element, index) => {
            const textContent = element.querySelector(".footer-text-content");
            gsap.to(textContent, {
              y: "0%",
              duration: 0.8,
              delay: index * 0.1,
              ease: "power3.out",
            });
          });
        },
      });
    },
    { scope: footerRef }
  );

  return (
    <div className="footer" ref={footerRef}>
      <div className="footer-socials">
        <div className="fs-col-lg"></div>
        <div className="fs-col-sm">
          <div className="fs-header">
            <div className="footer-text">
              <div className="footer-text-content">
                <p className="sm caps">( Socials )</p>
              </div>
            </div>
          </div>
          <div className="footer-social">
            <a href="mailto:hello@ericandtheweb.com">
              <div className="footer-text">
                <div className="footer-text-content">
                  <h2>Email</h2>
                </div>
              </div>
            </a>
          </div>
          <div className="footer-social">
            <a href="https://www.linkedin.com/in/ericmanasse/">
              <div className="footer-text">
                <div className="footer-text-content">
                  <h2>LinkedIn</h2>
                </div>
              </div>
            </a>
          </div>
          <div className="footer-social">
            <a href="https://instagram.com/ericandtheweb">
              <div className="footer-text">
                <div className="footer-text-content">
                  <h2>Instagram</h2>
                </div>
              </div>
            </a>
          </div>
          <div className="footer-social">
            <a href="https://dribbble.com/ericandtheweb">
              <div className="footer-text">
                <div className="footer-text-content">
                  <h2>Dribbble</h2>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-copy">
        <div className="fc-col-lg">
          <div className="footer-text">
            <div className="footer-text-content">
              <p className="sm caps">Developed by eric</p>
            </div>
          </div>
        </div>
        <div className="fc-col-sm">
          <div className="footer-text">
            <div className="footer-text-content">
              <p className="sm caps">&copy; 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
