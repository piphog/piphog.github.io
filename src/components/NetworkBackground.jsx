import React, { useRef, useEffect } from 'react';

/**
 * DotField — a calm grid of dots that subtly parallax toward the cursor,
 * with a soft fall-off radius and a slow ambient drift. Cream-on-cream,
 * tasteful and hand-crafted. Pure canvas, no deps. Renders fixed behind
 * the whole document so every section gets the same field.
 */
export default function NetworkBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { alpha: true });
    let width = 0, height = 0, dpr = 1;
    let dots = [];
    let rafId = 0;
    let lastTime = 0;
    let t = 0;

    const mouse = { x: -9999, y: -9999, tx: -9999, ty: -9999, active: false };

    const prefersReducedMotion =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const GRID = 38;
    const INFLUENCE = 220;
    const PULL = 14;
    const DOT_BASE = 1.05;
    const DOT_HOVER = 2.4;
    const INK = '28, 25, 22';

    function build() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const cols = Math.ceil(width / GRID) + 2;
      const rows = Math.ceil(height / GRID) + 2;
      dots = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const offset = r % 2 === 0 ? 0 : GRID / 2;
          dots.push({
            ox: c * GRID + offset - GRID,
            oy: r * GRID - GRID,
            phase: Math.random() * Math.PI * 2,
            freq: 0.0006 + Math.random() * 0.0004,
            amp: 0.6 + Math.random() * 0.5,
          });
        }
      }
    }

    function onMouseMove(e) {
      mouse.tx = e.clientX;
      mouse.ty = e.clientY;
      mouse.active = true;
    }

    function onMouseLeave() {
      mouse.active = false;
      mouse.tx = -9999;
      mouse.ty = -9999;
    }

    function step(time) {
      const dt = Math.min(time - lastTime || 16, 50);
      lastTime = time;
      t += dt;

      mouse.x += (mouse.tx - mouse.x) * 0.12;
      mouse.y += (mouse.ty - mouse.y) * 0.12;

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];

        const driftX = prefersReducedMotion ? 0 : Math.cos(t * d.freq + d.phase) * d.amp;
        const driftY = prefersReducedMotion ? 0 : Math.sin(t * d.freq * 1.3 + d.phase) * d.amp;

        let x = d.ox + driftX;
        let y = d.oy + driftY;
        let r = DOT_BASE;
        let alpha = 0.20;

        if (mouse.active) {
          const dx = mouse.x - x;
          const dy = mouse.y - y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < INFLUENCE) {
            const k = 1 - dist / INFLUENCE;
            const easeK = k * k * (3 - 2 * k);
            x += (dx / Math.max(dist, 1)) * PULL * easeK;
            y += (dy / Math.max(dist, 1)) * PULL * easeK;
            r = DOT_BASE + (DOT_HOVER - DOT_BASE) * easeK;
            alpha = 0.20 + 0.55 * easeK;
          }
        }

        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(' + INK + ', ' + alpha + ')';
        ctx.fill();
      }

      rafId = requestAnimationFrame(step);
    }

    build();
    rafId = requestAnimationFrame(step);

    window.addEventListener('resize', build);
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseleave', onMouseLeave);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', build);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 1,
      }}
    />
  );
}
