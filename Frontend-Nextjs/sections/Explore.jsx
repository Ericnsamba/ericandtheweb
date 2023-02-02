"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import styles from "../styles";
import { exploreWorlds } from "../constants";
import { staggerContainer } from "../utils/motion";
// import { ExploreCard, TitleText } from '../components';
import ExploreCard from "../components/ExploreCard";
import Hero from "../components/Hero";
import ProjectCard from "../components/Projects";
import AboutPage from "../pages/2-about";
import ContactPage from "../app/contact/page";

const Explore = () => {
  const [active, setActive] = useState("home");

  return (
    <section className={``} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        {/* <TypingText title="| The World" textStyles="text-center" /> */}
        {/* <TitleText
          title={<>Choose the world you want <br className="md:block hidden" /> to explore</>}
          textStyles="text-center"
        /> */}
        <div className="mt-[40px] flex gap-5 ">
          <ExploreCard
            title="Home"
            id={"home"}
            index={1}
            active={active}
            handleClick={setActive}>
            <Hero />
          </ExploreCard>

          <ExploreCard
            title="About"
            id={"about"}
            index={2}
            active={active}
            handleClick={setActive}>
            <AboutPage/>
          </ExploreCard>

          <ExploreCard
            title="My Work"
            id={"My Work"}
            index={3}
            active={active}
            handleClick={setActive}>
            <ProjectCard/>
          </ExploreCard>

          <ExploreCard
            title="Get in touch"
            id={"Get in touch"}
            index={4}
            active={active}
            handleClick={setActive}>
              <ContactPage/>
            </ExploreCard>
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
