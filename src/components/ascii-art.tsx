"use client";

import { useEffect, useRef } from "react";

export type AsciiMode = "ascii" | "dither";

type Props = {
  src: string;
  mode?: AsciiMode;
  /** Altura da célula em px (a largura do caractere vem da fonte). */
  cell?: number;
  /** Cores do mais escuro ao mais claro. */
  tones?: [string, string, string];
  /** Aumenta o contraste da imagem de origem antes de virar caractere. */
  contrast?: number;
  gamma?: number;
  /** Escurece as bordas para o retrato "sair" do fundo. */
  vignette?: number;
  /** Onda contínua mesmo sem o mouse por perto. */
  idleRipple?: boolean;
  className?: string;
  label: string;
};

// Sem "~": na VT323 ele parece um "N" e suja a imagem.
const RAMP = " .,:;-=+*?#%$@";
const SCRAMBLE = "01#$%&@*+=?/\\<>";
// Bayer 4x4 normalizado, o mesmo padrão das impressoras matriciais.
const BAYER = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5].map((v) => (v + 0.5) / 16);

type Ripple = { x: number; y: number; born: number };

export function AsciiArt({
  src,
  mode = "ascii",
  cell = 9,
  tones = ["#5e4f27", "#a88a45", "#ead08a"],
  contrast = 1.25,
  gamma = 1.1,
  vignette = 0.55,
  idleRipple = true,
  className,
  label,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const img = new Image();
    img.src = src;

    let cols = 0;
    let rows = 0;
    let cw = cell;
    let ch = cell;
    let lum = new Float32Array(0);
    let toneIdx = new Uint8Array(0);
    let raf = 0;
    let visible = true;
    let running = false;
    let lastFrame = 0;
    let lastRipple = 0;
    let pointer: { x: number; y: number } | null = null;
    const ripples: Ripple[] = [];
    // O next/font gera um nome de família próprio; ele chega pela variável CSS.
    const family = getComputedStyle(canvas).getPropertyValue("--font-vt323").trim() || "monospace";
    const font = `${cell}px ${family}`;

    function layout() {
      if (!canvas || !ctx || !img.complete || !img.naturalWidth) return;
      const rect = canvas.getBoundingClientRect();
      const w = Math.max(1, Math.round(rect.width));
      const h = Math.max(1, Math.round(rect.height));
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (mode === "ascii") {
        ctx.font = font;
        cw = Math.max(4, ctx.measureText("M").width);
        ch = cell;
      } else {
        cw = cell;
        ch = cell;
      }
      cols = Math.floor(w / cw);
      rows = Math.floor(h / ch);

      // A amostragem é feita reduzindo a imagem direto para cols x rows:
      // o próprio navegador calcula a média de cada célula.
      const off = document.createElement("canvas");
      off.width = cols;
      off.height = rows;
      const octx = off.getContext("2d", { willReadFrequently: true });
      if (!octx) return;
      // "cover" levando em conta que a célula do ASCII não é quadrada.
      const boxW = cols * cw;
      const boxH = rows * ch;
      const scale = Math.max(boxW / img.naturalWidth, boxH / img.naturalHeight);
      const dw = (img.naturalWidth * scale) / cw;
      const dh = (img.naturalHeight * scale) / ch;
      octx.drawImage(img, (cols - dw) / 2, (rows - dh) / 2, dw, dh);
      const data = octx.getImageData(0, 0, cols, rows).data;

      lum = new Float32Array(cols * rows);
      toneIdx = new Uint8Array(cols * rows);
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const i = (y * cols + x) * 4;
          let v = (0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2]) / 255;
          v = Math.pow(Math.min(1, Math.max(0, (v - 0.5) * contrast + 0.5)), gamma);
          if (vignette > 0) {
            const nx = (x / cols - 0.5) * 2;
            const ny = (y / rows - 0.5) * 2;
            const d = Math.sqrt(nx * nx * 0.8 + ny * ny * 0.6);
            v *= 1 - vignette * Math.max(0, d - 0.55) * 1.6;
          }
          lum[y * cols + x] = Math.max(0, v);
        }
      }
      draw(performance.now());
    }

    function sample(x: number, y: number) {
      const sx = Math.min(cols - 1, Math.max(0, Math.round(x)));
      const sy = Math.min(rows - 1, Math.max(0, Math.round(y)));
      return lum[sy * cols + sx];
    }

    function draw(now: number) {
      if (!ctx || !canvas || !cols) return;
      const t = now / 1000;
      const w = canvas.width;
      const h = canvas.height;
      ctx.save();
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, w, h);
      ctx.restore();

      // Envelhece e descarta as ondas do mouse.
      for (let i = ripples.length - 1; i >= 0; i--) {
        if (t - ripples[i].born > 1.8) ripples.splice(i, 1);
      }
      // Centro da onda contínua passeia devagar pela imagem.
      const icx = cols * (0.5 + 0.28 * Math.sin(t * 0.21));
      const icy = rows * (0.5 + 0.22 * Math.cos(t * 0.17));
      const pcx = pointer ? pointer.x / cw : -999;
      const pcy = pointer ? pointer.y / ch : -999;
      const aspect = ch / cw;

      const lines: [string[], string[], string[]] | null = mode === "ascii" ? [[], [], []] : null;

      for (let y = 0; y < rows; y++) {
        let l0 = "";
        let l1 = "";
        let l2 = "";
        for (let x = 0; x < cols; x++) {
          let ox = 0;
          let oy = 0;
          let wave = 0;

          if (idleRipple && !reduced) {
            const dx = x - icx;
            const dy = (y - icy) * aspect;
            const d = Math.sqrt(dx * dx + dy * dy) + 0.001;
            const a = Math.sin(d * 0.32 - t * 2.4) * Math.exp(-d * 0.018) * 0.55;
            wave += a;
            ox += (dx / d) * a * 1.2;
            oy += (dy / d) * a * 1.2;
          }
          for (const r of ripples) {
            const age = t - r.born;
            const dx = x - r.x;
            const dy = (y - r.y) * aspect;
            const d = Math.sqrt(dx * dx + dy * dy) + 0.001;
            const front = age * 26;
            const a = Math.sin((d - front) * 0.55) * Math.exp(-Math.abs(d - front) * 0.12) * (1 - age / 1.8);
            wave += a;
            ox += (dx / d) * a * 1.8;
            oy += (dy / d) * a * 1.8;
          }

          let b = sample(x + ox, y + oy) + wave * 0.1;
          const near = pointer ? Math.hypot(x - pcx, (y - pcy) * aspect) : 999;
          const i = y * cols + x;

          if (mode === "dither") {
            const lit = b > BAYER[(y & 3) * 4 + (x & 3)];
            toneIdx[i] = lit ? (b > 0.82 ? 3 : b > 0.5 ? 2 : 1) : 0;
            continue;
          }

          b = Math.min(0.999, Math.max(0, b));
          let c = RAMP[Math.floor(b * RAMP.length)];
          if (near < 5 && c !== " " && Math.random() < 0.5) {
            c = SCRAMBLE[(Math.random() * SCRAMBLE.length) | 0];
          }
          const tone = b > 0.72 ? 2 : b > 0.42 ? 1 : 0;
          l0 += tone === 0 ? c : " ";
          l1 += tone === 1 ? c : " ";
          l2 += tone === 2 ? c : " ";
        }
        if (lines) {
          lines[0].push(l0);
          lines[1].push(l1);
          lines[2].push(l2);
        }
      }

      if (lines) {
        ctx.font = font;
        ctx.textBaseline = "top";
        for (let k = 0; k < 3; k++) {
          ctx.fillStyle = tones[k];
          for (let y = 0; y < rows; y++) ctx.fillText(lines[k][y], 0, y * ch);
        }
        return;
      }

      // Pixels com um vão de 1px entre eles, como o pontilhado da referência.
      const gap = cell > 5 ? 1 : 0;
      for (let k = 1; k <= 3; k++) {
        ctx.beginPath();
        for (let y = 0; y < rows; y++) {
          for (let x = 0; x < cols; x++) {
            if (toneIdx[y * cols + x] === k) ctx.rect(x * cw, y * ch, cw - gap, ch - gap);
          }
        }
        ctx.fillStyle = tones[k - 1];
        ctx.fill();
      }
    }

    function loop(now: number) {
      raf = requestAnimationFrame(loop);
      // 30 fps bastam para a onda e deixam folga para o resto da página.
      if (now - lastFrame < 33) return;
      lastFrame = now;
      draw(now);
    }

    function start() {
      if (running || reduced || !visible) return;
      running = true;
      raf = requestAnimationFrame(loop);
    }
    function stop() {
      running = false;
      cancelAnimationFrame(raf);
    }

    function onMove(e: PointerEvent) {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      pointer = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      const now = performance.now();
      if (!reduced && now - lastRipple > 90 && ripples.length < 10) {
        lastRipple = now;
        ripples.push({ x: pointer.x / cw, y: pointer.y / ch, born: now / 1000 });
      }
    }
    function onLeave() {
      pointer = null;
    }

    const ro = new ResizeObserver(() => layout());
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else stop();
    });

    img.onload = () => {
      // A fonte pixelada pode chegar depois da imagem; refaz o layout quando ela carregar.
      document.fonts?.ready.then(layout);
      layout();
      ro.observe(canvas);
      io.observe(canvas);
      start();
    };
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
      img.onload = null;
    };
  }, [src, mode, cell, tones, contrast, gamma, vignette, idleRipple]);

  return <canvas ref={canvasRef} role="img" aria-label={label} className={className} />;
}
