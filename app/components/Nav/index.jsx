import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { links, footerLinks } from "./data";
import { perspective, slideUp } from "./anim";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";

export default function Index() {

  // const ref = React.useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(CustomEase);
    const revealContainer = document.querySelector(".reveal_overlay");
    if (revealContainer) {
      // let image = revealContainer.querySelector(".profile_img");
      gsap.set(revealContainer, { autoAlpha: 1 });
      gsap.to(revealContainer, {
        delay: 0.5,
        duration: 2.5,
        y: "100%",
        // scaleX: "50%",
        ease: CustomEase.create(
          "custom",
          "M0,0 C0.11,0.494 0.163,0.78 0.3,0.9 0.397,0.986 0.504,1 1,1 "
        ),
        transformOrigin: "bottom",
        // markers: true,
      });
    }
  });

  return (
    <div className="mainNav flex gap-40 overflow-hidden">
      <div className="left_col flex flex-col gap-6 w-3/12">
        <div className="imgContainer relative flex flex-col w-[360px] h-[547px] overflow-hidden self-end">
          <div className="reveal_overlay absolute inset-0 w-full h-full bg-black" />
          <Image
            src="/medias/hero_eric.jpg"
            alt="hero image"
            objectFit="cover"
            width={1000}
            height={1000}
            className="profile_img w-full h-full"
          />
          <div className="image_footer w-full justify-between items-center inline-flex bg-background p-2">
            <p className="copy uppercase text-sm text-Lace_Veil w-full">
              Based in London, Uk specialized in UX / UI and Software
              Development.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.nav} style={{ width: "9/12" }}>
        <div className={styles.body}>
          {links.map((link, index) => {
            const { title, href } = link;
            return (
              <div key={`b_${index}`} className={styles.linkContainer}>
                <motion.div
                  custom={index}
                  variants={slideUp}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  className="motion"
                >
                  <a
                    className="text-Lace_Veil text-[10vh] uppercase "
                    href={href}
                  >
                    {title}
                  </a>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
