"use client";
import React, { FC, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import profilePhoto from "../../public/assets/images/Hero_image.jpg";
import gsap from "gsap";
import { RevealAnimation } from "../../utils/revealAnimation";

const Home = () => {
  useLayoutEffect(() => {
    let animated = gsap.context(() => {
      const tl = gsap.timeline({ paused: true });

      gsap.from([".header__title", ".portfolio"], {
        delay: 0.4,
        duration: 1.5,
        yPercent: 100,
        ease: "power4",
        stagger: 0.2,
      });

      // Section
      // Portfolio
      const newTimeline = gsap.timeline({
        defaults: {
          ease: "none",
        },
        scrollTrigger: {
          trigger: "#container",
          pin: true,
          start: "top",
          end: "bottom",
          scrub: 1,
          markers: true,
          pinSpacing: false,
        },
      });

      // const circles = gsap.utils.toArray<HTMLElement>("section.circle");

      // circles.forEach((circle) => {
      //   newTimeline.from(circle, {
      //     clipPath: "circle(0% at 50% 50%)",
      //     stagger: 1,
      //   });
      // });

      const circles = gsap.utils.toArray("section.circle");
      circles.forEach((circle) => {
        newTimeline.from(circle, {
          clipPath: "circle(0% at 50% 50%)",
          stagger: 1,
        });
      });

      const titleTimeline = gsap.timeline({
        defaults: {
          ease: "none",
        },
        scrollTrigger: {
          trigger: "#title_wrapper",
          start: "bottom 95%",
          end: "top 20%",
          scrub: 2,
          // markers: true,
        },
      });

      titleTimeline.to(".Product", {
        x: -360,
        // width: "140vw",
      });
      titleTimeline.to(".Designer", {
        x: 360,
        ease: "none",
      });

      tl.play();

      RevealAnimation(".header__title2", 0.6, 1.5, 120);
    });

    return () => animated.revert();
  }, []);

  return (
    <>
      <div className="spacer">Section 01</div>

      <div id="container">
        <section>
          <div className="inner">
            <h1>Section 02</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              porttitor ultricies ipsum et tincidunt. Vestibulum placerat ipsum
              nec nunc ultricies gravida. Vestibulum dignissim, magna et
              scelerisque aliquet, augue enim blandit urna, a lobortis dui diam
              sit amet diam. Nullam mi ante, malesuada eget malesuada nec,
              mattis eu neque. Curabitur ac est gravida, luctus est eget, semper
              sapien. Duis vitae neque sed leo tristique lobortis. In nulla
              nunc, condimentum a malesuada in, feugiat quis eros. Sed volutpat
              porta elit, vitae semper enim. Duis tempor nisl dolor, vel
              consectetur nisi iaculis quis. Cras lobortis ligula quis dui
              pellentesque bibendum.
            </p>
          </div>
        </section>
        <section className="circle">
          <div className="inner text-black">
            <h1>Some other section 02</h1>
            <p>
              Lorem ipsum dolor msit amet, consectetur adipiscing elit. In
              porttitor ultricies ipsum et tincidunt. Vestibulum placerat ipsum
              nec nunc ultricies gravida. Vestibulum dignissim, magna et
              scelerisque aliquet, augue enim blandit urna, a lobortis dui diam
              sit amet diam. Nullam mi ante, malesuada eget malesuada nec,
              mattis eu neque. Curabitur ac est gravida, luctus est eget, semper
              sapien. Duis vitae neque sed leo tristique lobortis. In nulla
              nunc, condimentum a malesuada in, feugiat quis eros. Sed volutpat
              porta elit, vitae semper enim. Duis tempor nisl dolor, vel
              consectetur nisi iaculis quis. Cras lobortis ligula quis dui
              pellentesque bibendum.
            </p>
          </div>
        </section>
        <div className="spacer">Section 03</div>
        <section className="circle">
          <div className="inner text-black">
            <h1>Some other section 04</h1>
            <p>
              Lorem ipsum dolor msit amet, consectetur adipiscing elit. In
              porttitor ultricies ipsum et tincidunt. Vestibulum placerat ipsum
              nec nunc ultricies gravida. Vestibulum dignissim, magna et
              scelerisque aliquet, augue enim blandit urna, a lobortis dui diam
              sit amet diam. Nullam mi ante, malesuada eget malesuada nec,
              mattis eu neque. Curabitur ac est gravida, luctus est eget, semper
              sapien. Duis vitae neque sed leo tristique lobortis. In nulla
              nunc, condimentum a malesuada in, feugiat quis eros. Sed volutpat
              porta elit, vitae semper enim. Duis tempor nisl dolor, vel
              consectetur nisi iaculis quis. Cras lobortis ligula quis dui
              pellentesque bibendum.
            </p>
          </div>
        </section>
      </div>

      <div className="spacer">Section 05</div>
    </>
  );
};

export default Home;
