"use client";

import React, { useEffect, useRef } from "react";

/**
 * WebGL shader background from 21st.dev community (thanh/shader-background).
 * @see https://21st.dev/community/components/thanh/shader-background/default
 * Fills its positioned parent (e.g. hero); uses ResizeObserver for correct dimensions.
 */
const VS_SOURCE = `
  attribute vec4 aVertexPosition;
  void main() {
    gl_Position = aVertexPosition;
  }
`;

const FS_SOURCE = `
  precision highp float;
  uniform vec2 iResolution;
  uniform float iTime;

  const float overallSpeed = 0.2;
  const float gridSmoothWidth = 0.015;
  const float axisWidth = 0.05;
  const float majorLineWidth = 0.025;
  const float minorLineWidth = 0.0125;
  const float scale = 5.0;
  // Subtle zinc/silver base color
  const vec4 baseLineColor = vec4(0.70, 0.70, 0.75, 1.0);
  // Brand navy color for the wave impact (#0f0f45)
  const vec4 activeLineColor = vec4(0.059, 0.059, 0.27, 1.0);
  
  const float minLineWidth = 0.01;
  const float maxLineWidth = 0.2;
  const float lineSpeed = 1.0 * overallSpeed;
  const float lineAmplitude = 1.0;
  const float lineFrequency = 0.2;
  const float warpSpeed = 0.2 * overallSpeed;
  const float warpFrequency = 0.5;
  const float warpAmplitude = 1.0;
  const float offsetFrequency = 0.5;
  const float offsetSpeed = 1.33 * overallSpeed;
  const float minOffsetSpread = 0.6;
  const float maxOffsetSpread = 2.0;
  const int linesPerGroup = 16;

  #define drawCircle(pos, radius, coord) smoothstep(radius + gridSmoothWidth, radius, length(coord - (pos)))
  #define drawSmoothLine(pos, halfWidth, t) smoothstep(halfWidth, 0.0, abs(pos - (t)))
  #define drawCrispLine(pos, halfWidth, t) smoothstep(halfWidth + gridSmoothWidth, halfWidth, abs(pos - (t)))

  float random(float t) {
    return (cos(t) + cos(t * 1.3 + 1.3) + cos(t * 1.4 + 1.4)) / 3.0;
  }

  float getPlasmaY(float x, float horizontalFade, float offset) {
    return random(x * lineFrequency + iTime * lineSpeed) * horizontalFade * lineAmplitude + offset;
  }

  void main() {
    vec2 fragCoord = gl_FragCoord.xy;
    vec2 uv = fragCoord.xy / iResolution.xy;
    
    // Wave animation: smooth Gaussian pulse flowing right-to-left
    float waveDuration = 10.0; // Slower, more elegant
    float waveTime = mod(iTime, waveDuration);
    // Pulse travels from x=1.5 down to x=-0.5
    float wavePos = 1.3 - (waveTime / (waveDuration * 0.5));
    float pulseWidth = 0.25;
    // Gaussian-like pulse for "flowing in and out" effect
    float dist = abs(uv.x - wavePos);
    float waveImpact = exp(-pow(dist / pulseWidth, 2.0));
    
    vec4 fragColor;
    vec2 space = (fragCoord - iResolution.xy / 2.0) / iResolution.x * 2.0 * scale;

    float horizontalFade = 1.0 - (cos(uv.x * 6.28) * 0.5 + 0.5);
    float verticalFade = 1.0 - (cos(uv.y * 6.28) * 0.5 + 0.5);

    space.y += random(space.x * warpFrequency + iTime * warpSpeed) * warpAmplitude * (0.5 + horizontalFade);
    space.x += random(space.y * warpFrequency + iTime * warpSpeed + 2.0) * warpAmplitude * horizontalFade;

    float lineAlpha = 0.0;
    vec4 bgColor1 = vec4(0.98, 0.97, 0.96, 1.0);
    vec4 bgColor2 = vec4(0.95, 0.94, 0.96, 1.0);

    for(int l = 0; l < linesPerGroup; l++) {
      float normalizedLineIndex = float(l) / float(linesPerGroup);
      float offsetTime = iTime * offsetSpeed;
      float offsetPosition = float(l) + space.x * offsetFrequency;
      float rand = random(offsetPosition + offsetTime) * 0.5 + 0.5;
      float halfWidth = mix(minLineWidth, maxLineWidth, rand * horizontalFade) / 2.0;
      float offset = random(offsetPosition + offsetTime * (1.0 + normalizedLineIndex)) * mix(minOffsetSpread, maxOffsetSpread, horizontalFade);
      float linePosition = getPlasmaY(space.x, horizontalFade, offset);
      float line = drawSmoothLine(linePosition, halfWidth, space.y) / 2.0 + drawCrispLine(linePosition, halfWidth * 0.15, space.y);

      float circleX = mod(float(l) + iTime * lineSpeed, 25.0) - 12.0;
      vec2 circlePosition = vec2(circleX, getPlasmaY(circleX, horizontalFade, offset));
      float circle = drawCircle(circlePosition, 0.01, space) * 4.0;

      line = line + circle;
      lineAlpha += line * rand;
    }

    fragColor = mix(bgColor1, bgColor2, uv.x);
    // Transition base silver to navy (#101049) smoothly as the Gaussian pulse strikes
    vec4 currentLineColor = mix(baseLineColor, activeLineColor, waveImpact);
    
    float alphaMask = clamp(lineAlpha * verticalFade, 0.0, 1.0);
    fragColor = mix(fragColor, currentLineColor, alphaMask);
    fragColor.a = 1.0;

    gl_FragColor = fragColor;
  }
`;

export function ShaderBackground() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const gl = canvas.getContext("webgl");
    if (!gl) {
      console.warn("WebGL not supported.");
      return;
    }

    const loadShader = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Shader compile error: ", gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertexShader = loadShader(gl.VERTEX_SHADER, VS_SOURCE);
    const fragmentShader = loadShader(gl.FRAGMENT_SHADER, FS_SOURCE);
    if (!vertexShader || !fragmentShader) return;

    const shaderProgram = gl.createProgram();
    if (!shaderProgram) return;
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
      console.error("Shader program link error: ", gl.getProgramInfoLog(shaderProgram));
      return;
    }

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    const positions = [-1.0, -1.0, 1.0, -1.0, -1.0, 1.0, 1.0, 1.0];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    const vertexPosition = gl.getAttribLocation(shaderProgram, "aVertexPosition");
    const resolutionLoc = gl.getUniformLocation(shaderProgram, "iResolution");
    const timeLoc = gl.getUniformLocation(shaderProgram, "iTime");

    let raf = 0;
    const startTime = Date.now();

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const cw = Math.max(1, wrap.clientWidth);
      const ch = Math.max(1, wrap.clientHeight);
      canvas.width = Math.floor(cw * dpr);
      canvas.height = Math.floor(ch * dpr);
      canvas.style.width = `${cw}px`;
      canvas.style.height = `${ch}px`;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    const render = () => {
      const currentTime = (Date.now() - startTime) / 1000;
      gl.clearColor(0.98, 0.97, 0.96, 1.0); // off-white
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.useProgram(shaderProgram);
      gl.uniform2f(resolutionLoc, canvas.width, canvas.height);
      gl.uniform1f(timeLoc, currentTime);
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.vertexAttribPointer(vertexPosition, 2, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(vertexPosition);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      raf = requestAnimationFrame(render);
    };

    const ro = new ResizeObserver(() => resizeCanvas());
    ro.observe(wrap);
    resizeCanvas();
    raf = requestAnimationFrame(render);

    return () => {
      ro.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div key="light-mode-fix-v4" ref={wrapRef} className="pointer-events-none absolute inset-0 h-full min-h-full w-full">
      <canvas ref={canvasRef} className="block h-full w-full" aria-hidden />
    </div>
  );
}
