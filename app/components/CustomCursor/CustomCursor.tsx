import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './CustomCursor.module.css';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Initialize cursor position and scale
    gsap.set(cursor, {
      xPercent: -50,
      yPercent: -50,
      scale: 1
    });

    // Create smooth follow animation
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };
    const speed = 0.2;

    const xSet = gsap.quickSetter(cursor, "x", "px");
    const ySet = gsap.quickSetter(cursor, "y", "px");

    // Update cursor position on mouse move
    const mouseMoveHandler = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    // Handle cursor hover states
    const mouseOverHandler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Hide cursor on input elements
      if (target.tagName.toLowerCase() === 'input' || 
          target.tagName.toLowerCase() === 'textarea') {
        gsap.to(cursor, {
          opacity: 0,
          duration: 0.6
        });
        return;
      }

      // Show cursor and handle hover states
      cursor.style.opacity = '1';
      
      // Check if element is interactive
      const isInteractive = 
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('hover-target');

      // Animate cursor size
      gsap.to(cursor, {
        scale: isInteractive ? 1.5 : 1,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    // Handle mouse click animation
    const mouseClickHandler = () => {
      gsap.to(cursor, {
        scale: 1.8,
        duration: 0.6,
        ease: "power2.out",
        onComplete: () => {
          gsap.to(cursor, {
            scale: 1,
            duration: 1,
            ease: "elastic.out(1, 1)"
          });
        }
      });
    };

    // Add mouseout handler for elements
    const mouseOutHandler = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    window.addEventListener('mousemove', mouseMoveHandler);
    window.addEventListener('mouseover', mouseOverHandler);
    window.addEventListener('mouseout', mouseOutHandler);
    window.addEventListener('mousedown', mouseClickHandler);

    // Animation loop
    gsap.ticker.add(() => {
      const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
      
      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      xSet(pos.x);
      ySet(pos.y);
    });

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
      window.removeEventListener('mouseover', mouseOverHandler);
      window.removeEventListener('mouseout', mouseOutHandler);
      window.removeEventListener('mousedown', mouseClickHandler);
      gsap.ticker.remove();
    };
  }, []);

  return <div ref={cursorRef} className={`${styles.cursor} bg-coral`} />;
};

export default CustomCursor; 