"use client"
import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Texture, Vector2, Vector4 } from 'three';
import { useTexture } from '@react-three/drei';

// Custom shader material
function ShaderMaterial({ imgSrc }) {
  const materialRef = useRef();
  const textureRef = useRef();
  const { size } = useThree();
  const texture = useTexture(imgSrc);

  // Mouse interaction state
  const [mouse, setMouse] = useState(new Vector2(-1, -1));
  const [velocity, setVelocity] = useState(new Vector2(0, 0));
  const lastMouseRef = useRef(new Vector2());
  const lastTimeRef = useRef<number | null>(null);

  // Shader uniforms
  const uniforms = {
    uTime: { value: 0 },
    tWater: { value: texture },
    res: { value: new Vector4(size.width, size.height, 1, 1) },
    tFlow: { value: null } // Placeholder for flowmap
  };

  // Mouse move handler
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const normalizedX = x / rect.width;
    const normalizedY = 1.0 - y / rect.height;

    const currentTime = performance.now();
    const lastTime = lastTimeRef.current || currentTime;
    const lastMouse = lastMouseRef.current;

    const deltaX = x - lastMouse.x;
    const deltaY = y - lastMouse.y;
    const delta = Math.max(10.4, currentTime - lastTime);

    const newVelocity = new Vector2(
      deltaX / delta,
      deltaY / delta
    );

    setMouse(new Vector2(normalizedX, normalizedY));
    setVelocity(newVelocity);
    
    lastMouseRef.current.set(x, y);
    lastTimeRef.current = currentTime;
  };

  // Animation and shader updates
  useFrame((state, delta) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value += delta * 0.01;
    }
  });

  // Vertex shader
  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  // Fragment shader
  const fragmentShader = `
    uniform float uTime;
    uniform sampler2D tWater;
    uniform vec4 res;
    varying vec2 vUv;

    void main() {
      vec2 uv = vUv;
      vec4 tex = texture2D(tWater, uv);
      gl_FragColor = tex;
    }
  `;

  return (
    <meshBasicMaterial 
      ref={materialRef}
      onPointerMove={handleMouseMove}
      vertexShader={vertexShader}
      fragmentShader={fragmentShader}
      uniforms={uniforms}
      map={texture}
    />
  );
}

// Main component to wrap the shader image
function ShaderImage({ src }) {

  return (
    <div className="shader-image-container" style={{ width: '100%', height: '500px' }}>
      <Canvas>
        <mesh>
          <planeGeometry args={[6, 6]} />
          <ShaderMaterial imgSrc={src} />
        </mesh>
      </Canvas>
    </div>
  );
}

export default ShaderImage;