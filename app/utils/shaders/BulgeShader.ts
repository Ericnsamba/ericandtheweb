import { Vector2 } from 'three'

const BulgeShader = {
    // uniforms: {
    //     "tDiffuse": { value: null },
    //     "center": { value: new Vector2(0.5, 0.5) },
    //     "radius": { value: 0.2 },
    //     "strength": { value: 0.5 },
    //     "scale": { value: new Vector2(1, 1) },
    // },

    vertexShader: `
    attribute vec2 uv;
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0, 1);
}
  `,

    fragmentShader: `
  precision highp float;
precision highp int;
uniform sampler2D tWater;
uniform sampler2D tFlow;
uniform float uTime;
varying vec2 vUv;
uniform vec4 res;

void main() {
  vec3 flow = texture2D(tFlow, vUv).rgb;
  vec2 myUV = vUv - flow.xy * 0.3; 
  vec3 tex = texture2D(tWater, myUV).rgb;

  gl_FragColor = vec4(tex, 1.0);
}
`
}

export { BulgeShader }

