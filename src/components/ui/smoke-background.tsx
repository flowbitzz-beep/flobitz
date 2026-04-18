"use client";

import React, { useEffect, useRef } from "react";

const fragmentShaderSource = `#version 300 es
precision highp float;
out vec4 O;
uniform float time;
uniform vec2 resolution;
uniform vec3 u_color;

#define FC gl_FragCoord.xy
#define R resolution
#define T (time+660.)

float rnd(vec2 p){p=fract(p*vec2(12.9898,78.233));p+=dot(p,p+34.56);return fract(p.x*p.y);}
float noise(vec2 p){vec2 i=floor(p),f=fract(p),u=f*f*(3.-2.*f);return mix(mix(rnd(i),rnd(i+vec2(1,0)),u.x),mix(rnd(i+vec2(0,1)),rnd(i+1.),u.x),u.y);}
float fbm(vec2 p){float t=.0,a=1.;for(int i=0;i<5;i++){t+=a*noise(p);p*=mat2(1,-1.2,.2,1.2)*2.;a*=.5;}return t;}

void main(){
    vec2 uv=(FC-.5*R)/R.y;
    // Off-White Base (#FAF9F6)
    vec3 col=vec3(0.98, 0.976, 0.965); 
    uv.x+=.25;
    uv*=vec2(2,1);
    
    // Increased speed for dynamic motion
    float moveSpeed = T * 0.05;
    
    float n=fbm(uv*.28-vec2(moveSpeed * 0.5, 0));
    n=noise(uv*3.+n*2.);
    
    // Smoke intensity layers with higher velocity
    float s1 = fbm(uv+vec2(0, moveSpeed)+n);
    float s2 = fbm(uv*1.003+vec2(0, moveSpeed)+n+.003);
    float s3 = fbm(uv*1.006+vec2(0, moveSpeed)+n+.006);
    
    float smoke = (s1 + s2 + s3) / 3.0;
    
    // Blend specific Logo Blue (#0f0e47) subtly
    vec3 u_logo_blue = vec3(0.059, 0.055, 0.278); // #0f0e47
    vec3 smokeCol = mix(vec3(0.85, 0.88, 0.92), u_logo_blue, smoke * 0.5);
    col = mix(col, smokeCol, smoke * 0.2);
    
    // Vignette for seamless blending
    float vig = smoothstep(1.5, 0.5, length(uv * 0.5));
    col = mix(vec3(0.98, 0.976, 0.965), col, vig);

    O=vec4(col,1);
}`;

const vertexShaderSource = `#version 300 es
in vec2 position;
void main() {
    gl_Position = vec4(position, 0.0, 1.0);
}`;

class Renderer {
  private readonly vertexSrc = vertexShaderSource;
  private readonly vertices = [-1, 1, -1, -1, 1, 1, 1, -1];
  private gl: WebGL2RenderingContext | null = null;
  private canvas: HTMLCanvasElement;
  private program: WebGLProgram | null = null;
  private vs: WebGLShader | null = null;
  private fs: WebGLShader | null = null;
  private buffer: WebGLBuffer | null = null;

  constructor(canvas: HTMLCanvasElement, fragmentSrc: string) {
    this.canvas = canvas;
    const gl = canvas.getContext("webgl2");
    if (!gl) return;
    this.gl = gl;
    this.vs = this.compile(gl.VERTEX_SHADER, this.vertexSrc);
    this.fs = this.compile(gl.FRAGMENT_SHADER, fragmentSrc);
    this.setup();
    this.init();
  }

  private compile(type: number, src: string): WebGLShader | null {
    if (!this.gl) return null;
    const shader = this.gl.createShader(type);
    if (!shader) return null;
    this.gl.shaderSource(shader, src);
    this.gl.compileShader(shader);
    return shader;
  }

  private setup(): void {
    if (!this.gl || !this.vs || !this.fs) return;
    this.program = this.gl.createProgram();
    if (!this.program) return;
    this.gl.attachShader(this.program, this.vs);
    this.gl.attachShader(this.program, this.fs);
    this.gl.linkProgram(this.program);
    this.gl.useProgram(this.program);
  }

  private init(): void {
    if (!this.gl || !this.program) return;
    this.buffer = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.buffer);
    this.gl.bufferData(
      this.gl.ARRAY_BUFFER,
      new Float32Array(this.vertices),
      this.gl.STATIC_DRAW
    );
    const position = this.gl.getAttribLocation(this.program, "position");
    this.gl.enableVertexAttribArray(position);
    this.gl.vertexAttribPointer(position, 2, this.gl.FLOAT, false, 0, 0);
  }

  public updateScale(): void {
    if (!this.gl) return;
    const dpr = window.devicePixelRatio || 1;
    this.canvas.width = this.canvas.clientWidth * dpr;
    this.canvas.height = this.canvas.clientHeight * dpr;
    this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
  }

  public updateColor(color: { r: number; g: number; b: number }): void {
    if (!this.gl || !this.program) return;
    const colorLoc = this.gl.getUniformLocation(this.program, "u_color");
    this.gl.uniform3f(colorLoc, color.r / 255, color.g / 255, color.b / 255);
  }

  public render(time: number): void {
    if (!this.gl || !this.program) return;
    const timeLoc = this.gl.getUniformLocation(this.program, "time");
    const resLoc = this.gl.getUniformLocation(this.program, "resolution");
    this.gl.uniform1f(timeLoc, time * 0.001);
    this.gl.uniform2f(resLoc, this.canvas.width, this.canvas.height);
    this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, 4);
  }

  public reset(): void {
    if (!this.gl || !this.program) return;
    this.gl.deleteProgram(this.program);
    this.gl.deleteShader(this.vs);
    this.gl.deleteShader(this.fs);
    this.gl.deleteBuffer(this.buffer);
  }
}

const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

interface SmokeBackgroundProps {
  smokeColor?: string;
  className?: string;
}

export const SmokeBackground: React.FC<SmokeBackgroundProps> = ({
  smokeColor = "#0f172a",
  className = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rendererRef = useRef<Renderer | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const renderer = new Renderer(canvas, fragmentShaderSource);
    rendererRef.current = renderer;

    const handleResize = () => renderer.updateScale();
    handleResize();
    window.addEventListener("resize", handleResize);

    let animationFrameId: number;
    const loop = (now: number) => {
      renderer.render(now);
      animationFrameId = requestAnimationFrame(loop);
    };
    loop(0);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.reset();
    };
  }, []);

  useEffect(() => {
    const renderer = rendererRef.current;
    if (renderer) {
      const rgbColor = hexToRgb(smokeColor);
      if (rgbColor) {
        renderer.updateColor(rgbColor);
      }
    }
  }, [smokeColor]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 h-full w-full pointer-events-none -z-10 ${className}`}
    />
  );
};
