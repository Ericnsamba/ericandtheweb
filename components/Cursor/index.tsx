
// import { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import styles from './Cursor.module.css';

// const Cursor = () => {
//   const cursorRef = useRef(null);

//   useEffect(() => {
//     const cursor = cursorRef.current;

//     const handleMouseMove = (event: any) => {
//       // Update the position of the cursor to match the mouse position
//       gsap.to(cursor, {
//         duration: 0.4,
//         x: event.clientX,
//         y: event.clientY,
//       });

//       // Get the element being hovered over
//       const hoveredElement = event.target;

//       // Check if the element being hovered over is clickable or has the class "cursor__grow"
//       const isClickable =
//         hoveredElement.tagName === 'A' ||
//         hoveredElement.tagName === 'BUTTON' ||
//         hoveredElement.classList.contains('cursor__grow');

//       // If the element is clickable or has the class "cursor__grow", grow the cursor
//       if (isClickable) {
//         gsap.to(cursor, {
//           duration: 0.2,
//           scale: 2,
//           ease: 'power4.out',
//         });
//       } else {
//         // Otherwise, shrink the cursor
//         gsap.to(cursor, {
//           duration: 0.2,
//           scale: 1,
//           ease: 'power4.out',
//         });
//       }
//     };

//     // Add listeners for mousemove and mouseenter events
//     document.addEventListener('mousemove', handleMouseMove);
//     document.querySelectorAll('a, button, svg, p, h1, h2, h3, span, img, .cursor__grow').forEach((element) => {
//       element.addEventListener('mouseenter', () => {
//         gsap.to(cursor, {
//           duration: 0.2,
//           scale: 2,
//           ease: 'power4.out',
//         });
//       });
//       element.addEventListener('mouseleave', () => {
//         gsap.to(cursor, {
//           duration: 0.2,
//           scale: 1,
//           ease: 'power4.out',
//         });
//       });
//     });

//     // Remove the listeners when the component unmounts
//     return () => {
//       document.removeEventListener('mousemove', handleMouseMove);
//       document.querySelectorAll('a, button, svg, p, h1, h2, h3, span, img, .cursor__grow').forEach((element) => {
//         element.removeEventListener('mouseenter', () => {});
//         element.removeEventListener('mouseleave', () => {});
//       });
//     };
//   }, []);

//   return (
//     <div className={styles.cursor} ref={cursorRef}>
//       <div className={styles.circle} />
//     </div>
//   );
// };

// export default Cursor;







// import { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import styles from './Cursor.module.css';

// const Cursor = () => {
//   const cursorRef = useRef(null);

//   useEffect(() => {
//     const cursor = cursorRef.current;

//     const handleMouseMove = (event) => {
//       // Update the position of the cursor to match the mouse position
//       gsap.to(cursor, {
//         duration: 0.4,
//         x: event.clientX,
//         y: event.clientY,
//       });

//       // Get the element being hovered over
//       const hoveredElement = event.target;

//       // Check if the element being hovered over is a link, image, or text
//       if (
//         hoveredElement.tagName === 'A' ||
//         hoveredElement.tagName === 'IMG' ||
//         hoveredElement.tagName === 'P' ||
//         hoveredElement.tagName === 'H1' ||
//         hoveredElement.tagName === 'H2' ||
//         hoveredElement.tagName === 'H3' ||
//         hoveredElement.tagName === 'BUTTON' ||
//         hoveredElement.tagName === 'SVG' ||
//         hoveredElement.classList.contains('cursor__grow')
//       ) {
//         // If it is, grow the cursor
//         gsap.to(cursor, {
//           duration: 0.4,
//           scale: 2,
//           ease: 'power4.out',
//         });
//       } else {
//         // Otherwise, shrink the cursor
//         gsap.to(cursor, {
//           duration: 0.4,
//           scale: 1,
//           ease: 'power4.out',
//         });
//       }

//       // Check if the element being hovered over has the "change__bg" class
//       if (hoveredElement.classList.contains('change__bg')) {
//         // If it does, change the background color
//         gsap.to(hoveredElement, {
//           duration: 0.4,
//           backgroundColor: '#ff0000',
//         });
//       } else {
//         // Otherwise, reset the background color
//         gsap.to(hoveredElement, {
//           duration: 0.4,
//           backgroundColor: 'transparent',
//         });
//       }
//     };

//     // Add listeners for mousemove and mouseenter events
//     document.addEventListener('mousemove', handleMouseMove);
//     document.querySelectorAll('a, img, p, h1, h2, h3, button, svg, .cursor__grow, .change__bg').forEach((element) => {
//       element.addEventListener('mouseenter', () => {
//         gsap.to(cursor, {
//           duration: 0.4,
//           scale: 2,
//           ease: 'power4.out',
//         });
//       });
//       element.addEventListener('mouseleave', () => {
//         gsap.to(cursor, {
//           duration: 0.4,
//           scale: 1,
//           ease: 'power4.out',
//         });
//       });
//     });

//     // Remove the listeners when the component unmounts
//     return () => {
//       document.removeEventListener('mousemove', handleMouseMove);
//       document.querySelectorAll('a, img, p, h1, h2, h3, button, svg, .cursor__grow, .change__bg').forEach((element) => {
//         element.removeEventListener('mouseenter', () => {});
//         element.removeEventListener('mouseleave', () => {});
//       });
//     };
//   }, []);

//   return (
//     <div className={styles.cursor} ref={cursorRef}>
//       <div className={styles.circle} />
//     </div>
//   );
// };

// export default Cursor;


import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './Cursor.module.css';

const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const handleMouseMove = (event: { clientX: any; clientY: any; target: any; }) => {
      // Update the position of the cursor to match the mouse position
      gsap.to(cursor, {
        duration: 0.4,
        x: event.clientX,
        y: event.clientY,
      });

      // Get the element being hovered over
      const hoveredElement = event.target;

      // Check if the element being hovered over is a link, image, text, svg, or has the class "cursor__grow"
      if (
        hoveredElement.tagName === 'A' ||
        hoveredElement.tagName === 'IMG' ||
        hoveredElement.tagName === 'P' ||
        hoveredElement.tagName === 'H1' ||
        hoveredElement.tagName === 'H2' ||
        hoveredElement.tagName === 'H3' ||
        hoveredElement.tagName === 'SVG' ||
        hoveredElement.classList.contains('cursor__grow')
      ) {
        // If it is, grow the cursor
        gsap.to(cursor, {
          duration: 0.4,
          scale: 2,
          ease: 'power4.out',
        });
      } else {
        // Otherwise, shrink the cursor
        gsap.to(cursor, {
          duration: 0.4,
          scale: 1,
          ease: 'power4.out',
        });
      }

      // Check if the element being hovered over has the class "change__bg"
      if (hoveredElement.classList.contains('change__bg')) {
        // If it does, change the background color
        gsap.to(hoveredElement, {
          duration: 0.4,
        });
      } else {
        // Otherwise, set the background color back to the original color
        gsap.to(hoveredElement, {
          duration: 0.4,
          backgroundColor: '',
          color: '',
        });
      }
    };

    // Add listeners for mousemove and mouseenter events
    document.addEventListener('mousemove', handleMouseMove);
    document.querySelectorAll('.cursor__grow, .change__bg').forEach((element) => {
      element.addEventListener('mouseenter', () => {
        gsap.to(cursor, {
          duration: 0.4,
          scale: 2,
          ease: 'power4.out',
        });
      });
      element.addEventListener('mouseleave', () => {
        gsap.to(cursor, {
          duration: 0.4,
          scale: 1,
          ease: 'power4.out',
        });
        gsap.to(element, {
          duration: 0.4,
          backgroundColor: '',
        });
      });
    });

    // Remove the listeners when the component unmounts
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.querySelectorAll('.cursor__grow, .change__bg').forEach((element) => {
        element.removeEventListener('mouseenter', () => {});
        element.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  return (
    <div className={styles.cursor} ref={cursorRef}>
      <div className={styles.circle} />
    </div>
  );
};

export default Cursor;
