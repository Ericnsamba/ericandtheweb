import styles from "./style.module.scss";
import { useInView, motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { slideUp } from "./anim";

export default function AnimatedTitle({
  title,
  className,
}: {
  title: string;
  className: string;
}) {
  const description = useRef(null);
  const isInView = useInView(description);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView) {
      hasAnimated.current = true;
    }
  }, [isInView]);

  return (
    <div ref={description} className={styles.description}>
      <div className={styles.body}>
        <h1 className={`${styles.paragraphSlideUp} ${className}`}>
          {title.split(" ").map((word, index) => {
            return (
              <span
                key={index}
                className={`relative inline-flex overflow-hidden`}
              >
                <motion.span
                  variants={slideUp}
                  custom={index}
                  initial="closed"
                  animate={isInView || !hasAnimated.current ? "open" : "closed"}
                  key={index}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </h1>
      </div>
    </div>
  );
}
