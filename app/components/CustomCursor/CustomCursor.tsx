"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './CustomCursor.module.css';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Initialize cursor position - with fixed size
    const initialX = window.innerWidth / 2; // Get initial mouse X position
    const initialY = window.innerHeight / 2; // Get initial mouse Y position
    gsap.set(cursor, {
      xPercent: -50,
      yPercent: -50,
      x: initialX, // Set initial X position
      y: initialY  // Set initial Y position
    });

    // Create smooth follow animation
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };
    const speed = 0.1;

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

      // Show cursor without changing size
      cursor.style.opacity = '1';
    };

    // No scaling on click
    const mouseClickHandler = () => {
      // No scaling on click
    };

    // No scaling on mouseout
    const mouseOutHandler = () => {
      // No scaling changes
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
      gsap.ticker.remove(mouseMoveHandler);
    };
  }, []);

  return <div ref={cursorRef} className={`${styles.cursor} bg-Lace_Veil`} />;
};

export default CustomCursor; 