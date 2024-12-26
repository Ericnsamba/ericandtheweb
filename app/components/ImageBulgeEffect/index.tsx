"use client";

// import { useRef, useState } from "react";
// import { Canvas, useFrame, useLoader } from "@react-three/fiber";
// import { AmbientLight, TextureLoader, Vector2 } from "three";
// import { shaderMaterial } from "@react-three/drei";
// import { extend } from "@react-three/fiber";

// const BulgeMaterial = shaderMaterial(
//   {
//     uTexture: null,
//     uMouse: new Vector2(0, 0),
//     uRadius: 0.4,
//     uStrength: 0.2,
//   },
//   `
//     varying vec2 vUv;
//     void main() {
//       vUv = uv;
//       gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//     }
//   `,
//   `
//     uniform sampler2D uTexture;
//     uniform vec2 uMouse;
//     uniform float uRadius;
//     uniform float uStrength;
//     varying vec2 vUv;

//     void main() {
//       vec2 center = uMouse;
//       float dist = distance(vUv, center);
//       vec2 offset = (vUv - center) * pow(1.0 - dist / uRadius, 2.0) * uStrength;
//       vec2 uv = vUv - offset;
//       vec4 color = texture2D(uTexture, uv);
//       // Convert to grayscale
//       float gray = dot(color.rgb, vec3(0.299, 0.587, 0.114));
//       gl_FragColor = vec4(vec3(gray), color.a);
//     }
//   `
// );

// extend({ BulgeMaterial });

// function Scene() {
//   const meshRef = useRef();
//   const [mousePosition, setMousePosition] = useState([0, 0]);
//   const texture = useLoader(TextureLoader, "/medias/hero_eric.jpg");

//   useFrame((state) => {
//     if (meshRef.current) {
//       meshRef.current.material.uMouse.set(
//         mousePosition[0],
//         1 - mousePosition[1]
//       );
//     }
//   });

//   const handlePointerMove = (event) => {
//     setMousePosition([event.uv.x, event.uv.y]);
//   };

//   return (
//     <mesh ref={meshRef} onPointerMove={handlePointerMove}>
//       <planeGeometry args={[4, 4]} />
//       <bulgeMaterial uTexture={texture} uRadius={0.8} uStrength={0.8} />
//     </mesh>
//   );
// }

// export default function ImageBulgeEffect() {
//   return (
//     <div className="relative w-[900px] h-[800px]">
//       <Canvas>
//         <ambientLight intensity={0.1} />
//         <directionalLight color="red" position={[0, 0, 5]} />
//         <Scene />
//       </Canvas>
//     </div>
//   );
// }


import React, { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import {ShaderMaterial,  AmbientLight, TextureLoader, Vector2 } from "three";
import { Loader } from '@react-three/drei'; // Corrected import for useLoader
// Bulge Effect Shader Definition
export const bulgeShader = {
  vertex: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragment: `
    uniform sampler2D texture;
    uniform vec2 mouse;
    uniform float intensity;
    varying vec2 vUv;
    void main() {
      vec2 uv = vUv;
      
      // Calculate distortion based on mouse position
      vec2 offset = uv - mouse;
      float dist = length(offset);
      
      // Apply bulge effect with sine wave and distance-based intensity
      uv += normalize(offset) * sin(dist * 10.0) * intensity / (dist + 0.1);
      
      // Sample texture with distorted coordinates
      vec4 texColor = texture2D(texture, uv);
      gl_FragColor = texColor;
    }
  `
};

// Bulge Effect Component
const BulgeEffect = () => {
  const materialRef = useRef<ShaderMaterial>(null);
  
  // Load texture (replace with your image path)
//   const texture = useLoader(TextureLoader, '/path/to/your/image.jpg');
const texture = useLoader(TextureLoader, "/medias/hero_eric.jpg");
  
  // Mouse position tracking
  const mouse = useRef<[number, number]>([0.5, 0.5]);
  
  // Mouse move handler
  const onMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { innerWidth, innerHeight } = window;
    
    // Normalize mouse coordinates
    mouse.current = [
      clientX / innerWidth, 
      1 - clientY / innerHeight
    ];
  };

  // Update shader uniforms on each frame
  useFrame(() => {
    if (materialRef.current) {
      materialRef.current.uniforms.mouse.value = mouse.current;
      materialRef.current.uniforms.intensity.value = 0.1; // Adjustable intensity
    }
  });

  return (
    <mesh onPointerMove={onMouseMove}>
      <planeGeometry args={[5, 5]} />
      <shaderMaterial
        ref={materialRef}
        uniforms={{
          texture: { value: texture },
          mouse: { value: [0.5, 0.5] },
          intensity: { value: 0.1 },
        }}
        vertexShader={bulgeShader.vertex}
        fragmentShader={bulgeShader.fragment}
      />
    </mesh>
  );
};

// Main App Component
const BulgeEffectApp = () => (
  <Canvas>
    <BulgeEffect />
  </Canvas>
);

export default BulgeEffectApp;