import React, { useRef, useEffect } from 'react';

// Lightweight animated node/circuit network — drifting particles connected
// by thin lines when within range, plus occasional "signal pulses" that
// travel along an active edge. Pure canvas, no deps.
export default function NetworkBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width, height, dpr;
    let nodes = [];
    let pulses = [];
    let rafId;
    let lastTime = 0;

    const CYAN = '0,212,255';
    const AMBER = '245,166,35';

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const area = width * height;
      const count = Math.min(70, Math.max(28, Math.round(area / 18000)));

      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: Math.random() * 1.6 + 0.6,
      }));
      pulses = [];
    }

    function step(time) {
      const dt = Math.min(time - lastTime, 50);
      lastTime = time;
      ctx.clearRect(0, 0, width, height);

      const maxDist = Math.min(width, height) * 0.16;

      // update positions
      for (const n of nodes) {
        if (!prefersReducedMotion) {
          n.x += n.vx * (dt / 16);
          n.y += n.vy * (dt / 16);
        }
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
        n.x = Math.max(0, Math.min(width, n.x));
        n.y = Math.max(0, Math.min(height, n.y));
      }

      // draw edges
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.16;
            ctx.strokeStyle = `rgba(${CYAN},${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();

            // occasionally spawn a pulse traveling along this edge
            if (!prefersReducedMotion && Math.random() < 0.0006) {
              pulses.push({ a, b, t: 0, color: Math.random() < 0.5 ? CYAN : AMBER });
            }
          }
        }
      }

      // draw + advance pulses
      pulses = pulses.filter((p) => p.t < 1);
      for (const p of pulses) {
        const x = p.a.x + (p.b.x - p.a.x) * p.t;
        const y = p.a.y + (p.b.y - p.a.y) * p.t;
        const fade = Math.sin(p.t * Math.PI); // 0 -> 1 -> 0
        ctx.beginPath();
        ctx.arc(x, y, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color},${0.9 * fade})`;
        ctx.shadowColor = `rgba(${p.color},${fade})`;
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
        p.t += 0.012 * (dt / 16);
      }

      // draw nodes
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${CYAN},0.35)`;
        ctx.fill();
      }

      rafId = requestAnimationFrame(step);
    }

    resize();
    rafId = requestAnimationFrame(step);

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        opacity: 0.85,
      }}
    />
  );
}
