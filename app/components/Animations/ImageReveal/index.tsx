import React, { useEffect } from "react";
// import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./styles.module.scss"

interface ImageRevealProps {
    src: string;
    styles: string;
}

export default function ImageReveal({ src , styles}: ImageRevealProps) {
    useEffect(() => {
        const revealContainers = document.querySelectorAll(".reveal");
        const tl = gsap.timeline({ overwrite: true, paused: true });
    
        tl.restart(true, false);
        revealContainers.forEach((container) => {
          const image = container.querySelector("img");
          tl.fromTo(
            container,
            0.8,
            {
              yPercent: -100,
              autoAlpha: 0,
            },
            {
              yPercent: 0,
              ease: "power2.out",
              autoAlpha: 1,
            }
          );
          tl.from(image, 0.8, {
            // yPercent: 100,
            // scale: 1.3,
            delay: -0.8,
            ease: "power2.out",
          });
        });
      }, []);

  return (
    <div className="fadeit">
      <div className={`${styles} reveal`}>
        <img src={src} className="my_img" alt={src}/>
      </div>
    </div>
  );
}
