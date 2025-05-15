// import styles from "./style.module.scss";
import { useRef, useLayoutEffect, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/dist/SplitText";
import CustomEase from "gsap/CustomEase";

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
type AnimationType = 'words' | 'lines';

// SplitText options interface
interface SplitTextOptions {
  type: string;
  wordsClass: string;
  linesClass: string;
  mask?: AnimationType;
}

type AnimatedTextProps = {
  text: string;
  className?: string;
  tag?: HeadingTag;
  delay?: number;
  duration?: number;
  stagger?: number;
  once?: boolean;
  threshold?: number;
  reverseAnimation?: boolean;
  reverseDelay?: number;
  reverseDuration?: number;
  animationType?: AnimationType;
  mask?: boolean;
};

export default function AnimatedText({
  text,
  className = "",
  tag = "h1",
  delay = 0.5,
  duration = 1.2,
  stagger = 0.1,
  once = true,
  threshold = 0.5,
  reverseAnimation = false,
  reverseDelay = 0.1,
  reverseDuration = 1,
  animationType = 'words',
  mask = false,
}: AnimatedTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const splitTextRef = useRef<SplitText | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Use framer-motion's useInView hook
  const isInView = useInView(containerRef, {
    once: once,
    amount: threshold,
    margin: "-10% 0px -10% 0px"
  });

  // Register GSAP plugins
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase);
    CustomEase.create(
      "hop",
      "M0,0 C0.354,0 0.464,0.133 0.498,0.502 0.532,0.872 0.651,1 1,1"
    );
  }, []);

  // Initialize SplitText
  useEffect(() => {
    if (!containerRef.current) return;

    const element = containerRef.current.querySelector(".animated-text");
    if (!element) return;

    // Configure SplitText options based on animationType
    const splitTextOptions: SplitTextOptions = {
      type: "words,lines",
      wordsClass: "word",
      linesClass: "line",
    };
    
    // Add mask option if enabled
    if (mask) {
      splitTextOptions.mask = animationType;
    }

    // Create SplitText instance
    splitTextRef.current = new SplitText(element, splitTextOptions);

    // Hide elements initially (words or lines)
    const targets = animationType === 'words' ? splitTextRef.current.words : splitTextRef.current.lines;
    gsap.set(targets, {
      yPercent: 100,
      opacity: animationType === 'words' ? 0 : 1, // For lines, we usually keep opacity 1 with mask
    });

    // Clean up
    return () => {
      if (splitTextRef.current) {
        splitTextRef.current.revert();
        splitTextRef.current = null;
      }
    };
  }, [text, animationType, mask]);

  // Trigger animation when in view or out of view
  useEffect(() => {
    if (!splitTextRef.current) return;
    
    // Determine animation targets (words or lines)
    const targets = animationType === 'words' ? splitTextRef.current.words : splitTextRef.current.lines;
    
    // Handle entrance animation
    if (isInView && (!hasAnimated || !once) && !isAnimating) {
      setIsAnimating(true);
      
      // Animate with stagger
      gsap.to(targets, {
        yPercent: 0,
        opacity: 1,
        duration: duration,
        stagger: stagger,
        delay: delay,
        ease: "power3.out",
        onComplete: () => {
          setHasAnimated(true);
          setIsAnimating(false);
        }
      });
    } 
    // Handle exit animation (reverse)
    else if (!isInView && !once && hasAnimated && reverseAnimation && !isAnimating) {
      setIsAnimating(true);
      
      // Animate back with stagger
      gsap.to(targets, {
        yPercent: 100,
        opacity: animationType === 'words' ? 0 : 1, // For lines, maintain opacity for mask effect
        duration: reverseDuration,
        stagger: stagger,
        delay: reverseDelay,
        ease: "power3.in",
        onComplete: () => {
          setIsAnimating(false);
          // Only reset hasAnimated if needed
          if (!once) {
            setHasAnimated(false);
          }
        }
      });
    }
  }, [isInView, hasAnimated, duration, stagger, delay, once, reverseAnimation, reverseDelay, reverseDuration, isAnimating, animationType]);

  // Render the appropriate tag with text
  const renderText = () => {
    switch (tag) {
      case 'h1':
        return <h1 className={`animated-text ${className}`}>{text}</h1>;
      case 'h2':
        return <h2 className={`animated-text ${className}`}>{text}</h2>;
      case 'h3':
        return <h3 className={`animated-text ${className}`}>{text}</h3>;
      case 'h4':
        return <h4 className={`animated-text ${className}`}>{text}</h4>;
      case 'h5':
        return <h5 className={`animated-text ${className}`}>{text}</h5>;
      case 'h6':
        return <h6 className={`animated-text ${className}`}>{text}</h6>;
      case 'p':
        return <p className={`animated-text ${className}`}>{text}</p>;
      case 'span':
        return <span className={`animated-text ${className}`}>{text}</span>;
      case 'div':
        return <div className={`animated-text ${className}`}>{text}</div>;
      default:
        return <h1 className={`animated-text ${className}`}>{text}</h1>;
    }
  };

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      {renderText()}
    </div>
  );
} 