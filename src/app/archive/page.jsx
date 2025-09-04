"use client";
import "./archive.css";
import { useRef, useEffect } from "react";

import gsap from "gsap";

const Archive = () => {
  const galleryRef = useRef(null);
  const dragLayerRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const gallery = galleryRef.current;
    const dragLayer = dragLayerRef.current;

    const isMobile = window.innerWidth < 1000;
    const totalRows = isMobile ? 15 : 20;
    const imagesPerRow = isMobile ? 30 : 60;
    const totalImages = totalRows * imagesPerRow;
    const images = [];

    function getRandomHeight(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    for (let i = 0; i < totalImages; i++) {
      const img = document.createElement("div");
      img.className = "img";

      if (isMobile) {
        img.style.height = `${getRandomHeight(80, 100)}px`;
        img.style.width = `calc((100% - ${6 * 12}px) / 6)`;
      } else {
        img.style.height = `${getRandomHeight(30, 40)}px`;
        img.style.width = `calc((100% - 236px) / 60)`;
      }

      const imgElement = document.createElement("img");
      const randomImageNumber = Math.floor(Math.random() * 50) + 1;
      imgElement.src = `/images/archive/img${randomImageNumber}.jpeg`;
      img.appendChild(imgElement);

      gallery.appendChild(img);
      images.push(img);
    }

    gsap.to(images, {
      scale: 1,
      delay: 1,
      opacity: 0.3,
      duration: 0.5,
      stagger: {
        amount: isMobile ? 1 : 1,
        grid: [totalRows, imagesPerRow],
        from: "random",
      },
      ease: "power1.out",
      onComplete: () => {
        autoZoomIn();
      },
    });

    const autoZoomIn = () => {
      dragLayer.style.display = "block";

      images.forEach((img, index) => {
        const rect = img.getBoundingClientRect();
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const distX = (rect.left + rect.width / 2 - centerX) / 100;
        const distY = (rect.top + rect.height / 2 - centerY) / 100;

        const zoomScale = isMobile ? 2.5 : 5;
        const zoomDistX = isMobile ? 400 : 1200;
        const zoomDistY = isMobile ? 400 : 600;

        gsap.to(img, {
          x: distX * zoomDistX,
          y: distY * zoomDistY,
          opacity: 1,
          scale: zoomScale,
          duration: 2.5,
          ease: "power4.inOut",
        });
      });
    };

    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let initialX = 0;
    let initialY = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    function lerp(start, end, factor) {
      return start + (end - start) * factor;
    }

    function animate() {
      if (
        isDragging ||
        Math.abs(targetX - currentX) > 0.01 ||
        Math.abs(targetY - currentY) > 0.01
      ) {
        currentX = lerp(currentX, targetX, 0.075);
        currentY = lerp(currentY, targetY, 0.075);

        requestAnimationFrame(() => {
          gallery.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
        });
      }
      requestAnimationFrame(animate);
    }
    animate();

    function handleDragStart(e) {
      e.preventDefault();
      isDragging = true;
      dragLayer.classList.add("active");

      startX = e.type === "mousedown" ? e.pageX : e.touches[0].pageX;
      startY = e.type === "mousedown" ? e.pageY : e.touches[0].pageY;

      const transform = window.getComputedStyle(gallery).transform;
      const matrix = new DOMMatrix(transform);
      initialX = matrix.m41;
      initialY = matrix.m42;

      currentX = initialX;
      currentY = initialY;
      targetX = initialX;
      targetY = initialY;

      if (e.type === "mousedown") {
        document.addEventListener("mousemove", handleDragMove, {
          passive: false,
        });
        document.addEventListener("mouseup", handleDragEnd);
      } else {
        document.addEventListener("touchmove", handleDragMove, {
          passive: false,
        });
        document.addEventListener("touchend", handleDragEnd);
      }
    }

    function handleDragMove(e) {
      if (!isDragging) return;
      e.preventDefault();

      const currentPositionX =
        e.type === "mousemove" ? e.pageX : e.touches[0].pageX;
      const currentPositionY =
        e.type === "mousemove" ? e.pageY : e.touches[0].pageY;

      const deltaX = currentPositionX - startX;
      const deltaY = currentPositionY - startY;

      targetX = initialX + deltaX;
      targetY = initialY + deltaY;
    }

    function handleDragEnd() {
      isDragging = false;
      dragLayer.classList.remove("active");

      document.removeEventListener("mousemove", handleDragMove);
      document.removeEventListener("touchmove", handleDragMove);
      document.removeEventListener("mouseup", handleDragEnd);
      document.removeEventListener("touchend", handleDragEnd);
    }

    dragLayer.addEventListener("mousedown", handleDragStart);
    dragLayer.addEventListener("touchstart", handleDragStart, {
      passive: false,
    });

    return () => {
      dragLayer.removeEventListener("mousedown", handleDragStart);
      dragLayer.removeEventListener("touchstart", handleDragStart);

      if (gallery) {
        gallery.innerHTML = "";
      }
    };
  }, []);

  return (
    <div className="archive-page">
      <div ref={dragLayerRef} id="drag-layer"></div>

      <div className="container" ref={containerRef}>
        <div className="gallery" ref={galleryRef}></div>
      </div>
    </div>
  );
};

export default Archive;
