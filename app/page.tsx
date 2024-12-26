"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import ImageBulgeEffect from "@/components/ImageBulgeEffect";
import ShaderImage from "./components/ShaderImage";
import {
  Renderer,
  Vec2,
  Vec4,
  Geometry,
  Texture,
  Program,
  Mesh,
  Flowmap,
} from "ogl";
import FullScreenMenu from "@/components/FullScreenMenu";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CustomEase from "gsap/CustomEase";
import "./home.css";

let isInitialLoad = true;

const HomePage = () => {
  const containerRef = useRef(null);
  const preloaderRef = useRef(null);
  const progressBarRef = useRef(null);
  const [showPreloader, setShowPreloader] = useState(isInitialLoad);
  
  useLayoutEffect(() => {
    gsap.registerPlugin(CustomEase);
    CustomEase.create(
      "hop-main",
      "M0,0 C0.354,0 0.464,0.133 0.498,0.502 0.532,0.872 0.651,1 1,1"
    );
  }, []);

  // useEffect(() => {
  //   // Load shaders asynchronously
  //   async function loadShader(url) {
  //     const response = await fetch(url);
  //     return response.text();
  //   }

  //   // Load vertex and fragment shaders
  //   const vertexShader = loadShader("./utils/shaders/vertexShader.glsl");
  //   const fragmentShader = loadShader("./utils/shaders/fragmentShader.glsl");

  //   // Define image resolution
  //   const _size = [2048, 1638];

  //   // Apply the shader effect to each image element
  //   document.querySelectorAll(".img").forEach((imgElement) => {
  //     // Set up renderer and WebGL context
  //     const renderer = new Renderer({ dpr: 2 });
  //     const gl = renderer.gl;
  //     const canvas = document.createElement("canvas");
  //     imgElement.appendChild(canvas);
  //     imgElement.appendChild(gl.canvas);

  //     // Variables for aspect ratio and mouse interactions
  //     let aspect = 1;
  //     const mouse = new Vec2(-1);
  //     const velocity = new Vec2();

  //     // Handle resizing to maintain aspect ratio
  //     function resize() {
  //       const rect = imgElement.getBoundingClientRect();
  //       gl.canvas.width = rect.width * 2.0;
  //       gl.canvas.height = rect.height * 2.0;
  //       gl.canvas.style.width = `${rect.width}px`;
  //       gl.canvas.style.height = `${rect.height}px`;

  //       const imageAspect = _size[0] / _size[1];
  //       const canvasAspect = rect.width / rect.height;
  //       let a1, a2;
  //       if (canvasAspect > imageAspect) {
  //         a1 = imageAspect / canvasAspect;
  //         a2 = 1.0;
  //       } else {
  //         a1 = 1.0;
  //         a2 = canvasAspect / imageAspect;
  //       }

  //       mesh.program.uniforms.res.value = new Vec4(
  //         rect.width,
  //         rect.height,
  //         a1,
  //         a2
  //       );

  //       renderer.setSize(rect.width, rect.height);
  //       aspect = rect.width / rect.height;
  //     }

  //     // Create flowmap for distortion effect
  //     const flowmap = new Flowmap(gl, {
  //       falloff: 0.3,
  //       dissipation: 0.92,
  //       alpha: 0.5,
  //     });

  //     // Define geometry for rendering
  //     const geometry = new Geometry(gl, {
  //       position: {
  //         size: 2,
  //         data: new Float32Array([-1, -1, 3, -1, -1, 3]),
  //       },
  //       uv: { size: 2, data: new Float32Array([0, 0, 2, 0, 0, 2]) },
  //     });

  //     // Load texture from image
  //     const texture = new Texture(gl, {
  //       minFilter: gl.LINEAR,
  //       magFilter: gl.LINEAR,
  //     });
  //     texture.image = imgElement.querySelector("img");

  //     // Create shader program with uniforms
  //     const program = new Program(gl, {
  //       vertex: vertexShader,
  //       fragment: fragmentShader,
  //       uniforms: {
  //         uTime: { value: 0 },
  //         tWater: { value: texture },
  //         res: {
  //           value: new Vec4(window.innerWidth, window.innerHeight, 1, 1),
  //         },
  //         tFlow: flowmap.uniform,
  //       },
  //     });

  //     // Create mesh to apply the shader program
  //     const mesh = new Mesh(gl, { geometry, program });

  //     // Handle window resize events
  //     window.addEventListener("resize", resize, false);
  //     resize();

  //     // Set up mouse or touch event listeners for interaction
  //     const isTouchCapable = "ontouchstart" in window;
  //     if (isTouchCapable) {
  //       imgElement.addEventListener("touchstart", updateMouse, false);
  //       imgElement.addEventListener("touchmove", updateMouse, {
  //         passive: false,
  //       });
  //     } else {
  //       imgElement.addEventListener("mousemove", updateMouse, false);
  //     }

  //     let lastTime;
  //     const lastMouse = new Vec2();

  //     // Update mouse position and velocity
  //     function updateMouse(e) {
  //       e.preventDefault();

  //       const rect = imgElement.getBoundingClientRect();
  //       let x, y;

  //       if (e.changedTouches && e.changedTouches.length) {
  //         x = e.changedTouches[0].pageX - rect.left;
  //         y = e.changedTouches[0].pageY - rect.top;
  //       } else {
  //         x = e.clientX - rect.left;
  //         y = e.clientY - rect.top;
  //       }

  //       mouse.set(x / rect.width, 1.0 - y / rect.height);

  //       if (!lastTime) {
  //         lastTime = performance.now();
  //         lastMouse.set(x, y);
  //       }

  //       const deltaX = x - lastMouse.x;
  //       const deltaY = y - lastMouse.y;

  //       lastMouse.set(x, y);

  //       const time = performance.now();
  //       const delta = Math.max(10.4, time - lastTime);
  //       lastTime = time;
  //       velocity.x = deltaX / delta;
  //       velocity.y = deltaY / delta;
  //       velocity.needsUpdate = true;
  //     }

  //     // Animation loop to update and render the effect
  //     function update(t) {
  //       requestAnimationFrame(update);

  //       if (!velocity.needsUpdate) {
  //         mouse.set(-1);
  //         velocity.set(0);
  //       }
  //       velocity.needsUpdate = false;

  //       flowmap.mouse.copy(mouse);
  //       flowmap.velocity.lerp(velocity, velocity.len ? 0.15 : 0.1);
  //       flowmap.update();

  //       program.uniforms.uTime.value = t * 0.01;
  //       renderer.render({ scene: mesh });
  //     }

  //     // Start the animation loop
  //     requestAnimationFrame(update);
  //   });
  // }, []);

  useEffect(() => {
    return () => {
      isInitialLoad = false;
    };
  }, []);

  useGSAP(
    () => {
      if (showPreloader) {
        const tl = gsap.timeline({
          onComplete: () => setShowPreloader(false),
        });

        tl.to(progressBarRef.current, {
          scaleX: 1,
          duration: 4,
          ease: "power1.inOut",
        });

        tl.set(progressBarRef.current, { transformOrigin: "right" }).to(
          progressBarRef.current,
          {
            scaleX: 0,
            duration: 1,
            ease: "power2.in",
          }
        );

        tl.to(preloaderRef.current, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 1.5,
          ease: "hop-main",
        });
      }

      gsap.to(".hero-title .line h1", {
        y: 0,
        stagger: 0.1,
        delay: showPreloader ? 5.75 : 1,
        duration: 1.5,
        ease: "power4.out",
      });
    },
    { scope: containerRef, dependencies: [showPreloader] }
  );

  return (
    <>
      {showPreloader && (
        <div className="pre-loader" ref={preloaderRef}>
          <div className="progress-bar" ref={progressBarRef}></div>
        </div>
      )}
      <main className="min-h-screen flex-col items-center justify-center p-8 relative overflow-hidden grid grid-cols-12">
        <div className="w-full flex flex-col items-center gap-8 col-span-12">
          {/* <ImageBulgeEffect  /> */}

          <div className="imageText flex flex-col gap-3">
            <div className="relative -left-6">
              <p className="text-grey_1 font-medium text-sm tracking-wide">
                BASED IN LONDON, UK
              </p>
            </div>
            <div className="imageContainer bg-blend_dark w-[420px] h-[60vh] col-span-8">
              <Image
                className="heroImg w-full h-full object-cover"
                src="/medias/eric_hero.jpg"
                alt={""}
                objectFit="cover"
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div>

        <div className="text_wrapper col-start-3 col-span-9   mix-blend-difference absolute bottom-[10%]">
          <h1 className="text-5xl md:text-[5vw] font-medium text-Lace_Veil uppercase">
            product
            <br />
            <span className="text-coral">designer &</span>
            <br />
            developer
          </h1>
        </div>

        {/* <div className="fixed bottom-8 right-8">
        <p className="text-grey_1 text-sm tracking-wide">
          USE MENU TO NAVIGATE
        </p>
      </div> */}
      </main>
    </>
  );
};

export default HomePage;
