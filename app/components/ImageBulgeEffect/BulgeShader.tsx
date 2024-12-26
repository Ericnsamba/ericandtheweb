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
        uv += normalize(offset) * sin(dist * 10.0) * intensity / dist;
  
        // Apply the texture with distortion
        vec4 texColor = texture2D(texture, uv);
        gl_FragColor = texColor;
      }
    `
  };