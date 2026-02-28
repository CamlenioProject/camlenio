"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Particle {
  id: number; x: number; y: number; vx: number; vy: number; color: string; size: number; opacity: number; life: number; maxLife: number;
}

interface Splash {
  id: number; x: number; y: number; color: string; scale: number; opacity: number; rotation: number; points: { r: number; a: number }[];
}

const HOLI_COLORS = ["#FF1E1E", "#FF9130", "#FFD700", "#32CD32", "#1E90FF", "#8A2BE2", "#FF1493", "#00CED1"];
const HOLI_PALETTE = ['#FF3CAC', '#FF0057', '#FF6B35', '#FF9F43', '#FFD700', '#FFF200', '#39FF14', '#00E676', '#00E5FF', '#00B4D8', '#4D96FF', '#7B2FBE', '#BF5AF2', '#C77DFF', '#FF69B4', '#FD79A8', '#E17055', '#D63031', '#6BCB77', '#F9CA24'];

let particleId = 0;
let splashId = 0;

export default function HoliInteract() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const splashesRef = useRef<Splash[]>([]);
  const animFrameRef = useRef<number>(0);
  const [isActive, setIsActive] = useState(false);
  const [selectedColor, setSelectedColor] = useState(HOLI_COLORS[0]);
  const [showTooltip, setShowTooltip] = useState(true);
  const isDragging = useRef(false);

  // Magic Mode State
  const [isMagicActive, setIsMagicActive] = useState(false);
  const [showMagicMessage, setShowMagicMessage] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const magicParticlesRef = useRef<any[]>([]);
  const magicIntervalRef = useRef<any>(null);
  const magicTimeoutRef = useRef<any>(null);

  const pickColor = () => HOLI_PALETTE[Math.floor(Math.random() * HOLI_PALETTE.length)];

  // Particle Physics Classes
  class Powder {
    x: number; y: number; col: string; vx: number; vy: number; a: number; decay: number; r: number;
    constructor(x: number, y: number, col: string, vx?: number, vy?: number, size?: number) {
      this.x = x; this.y = y; this.col = col;
      this.vx = vx || (Math.random() - 0.5) * 4;
      this.vy = vy || (Math.random() - 0.5) * 4 - 1.5;
      this.a = 0.65 + Math.random() * 0.3;
      this.decay = 0.006 + Math.random() * 0.007;
      this.r = size || (6 + Math.random() * 12);
    }
    tick() { this.vx *= 0.978; this.vy += 0.04; this.x += this.vx; this.y += this.vy; this.a -= this.decay; this.r += 0.18; }
    draw(ctx: CanvasRenderingContext2D) {
      if (this.a <= 0) return;
      ctx.globalAlpha = Math.max(0, this.a);
      const g = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.r);
      g.addColorStop(0, this.col); g.addColorStop(0.5, this.col + 'bb'); g.addColorStop(1, 'transparent');
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2); ctx.fill();
    }
  }

  class Streamer {
    x: number; y: number; col: string; vx: number; vy: number; a: number; decay: number; w: number; px: number; py: number;
    constructor(x: number, y: number, col: string) {
      this.x = x; this.y = y; this.col = col;
      const angle = Math.random() * Math.PI * 2;
      const speed = 3 + Math.random() * 6;
      this.vx = Math.cos(angle) * speed; this.vy = Math.sin(angle) * speed - 2;
      this.a = 0.9; this.decay = 0.014 + Math.random() * 0.012;
      this.w = 1.5 + Math.random() * 2.5; this.px = x; this.py = y;
    }
    tick() { this.px = this.x; this.py = this.y; this.vx *= 0.972; this.vy += 0.15; this.x += this.vx; this.y += this.vy; this.a -= this.decay; }
    draw(ctx: CanvasRenderingContext2D) {
      if (this.a <= 0) return;
      ctx.globalAlpha = Math.max(0, this.a);
      ctx.strokeStyle = this.col; ctx.lineWidth = this.w; ctx.lineCap = 'round';
      ctx.beginPath(); ctx.moveTo(this.px, this.py); ctx.lineTo(this.x, this.y); ctx.stroke();
    }
  }

  // Animation Bursts
  const burstCloud = (x: number, y: number) => {
    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 15 : 30;
    const c1 = pickColor(); for (let i = 0; i < count; i++) magicParticlesRef.current.push(new Powder(x, y, c1));
  };
  const burstSplash = (x: number, y: number) => {
    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 25 : 50;
    const c1 = pickColor(); for (let i = 0; i < count; i++) magicParticlesRef.current.push(new Streamer(x, y, c1));
  };
  const burstRing = (x: number, y: number) => {
    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 18 : 36;
    const c1 = pickColor(); for (let i = 0; i < count; i++) {
      const a = (i / count) * Math.PI * 2; magicParticlesRef.current.push(new Powder(x, y, c1, Math.cos(a) * 5, Math.sin(a) * 5, 8));
    }
  };
  const burstFountain = (x: number, y: number) => {
    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 20 : 40;
    const c1 = pickColor(); for (let i = 0; i < count; i++) {
      const p = new Streamer(x, y, c1); p.vx = (Math.random() - 0.5) * 4; p.vy = - (5 + Math.random() * 8); magicParticlesRef.current.push(p);
    }
  };
  const burstScatter = () => {
    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 5 : 10;
    const c = pickColor(); const sx = Math.random() * window.innerWidth; const sy = Math.random() * window.innerHeight;
    for (let i = 0; i < count; i++) magicParticlesRef.current.push(new Powder(sx, sy, c));
  };

  const startMagicHoli = () => {
    if (isMagicActive) return;
    setIsMagicActive(true); setShowTooltip(false);

    // Launch Sequence
    const cx = window.innerWidth * 0.5, cy = window.innerHeight * 0.35;
    const isMobile = window.innerWidth < 768;
    const launchCount = isMobile ? 30 : 60;
    for (let i = 0; i < launchCount; i++) {
      const a = (i / launchCount) * Math.PI * 2; magicParticlesRef.current.push(new Powder(cx, cy, pickColor(), Math.cos(a) * 8, Math.sin(a) * 8, 12));
    }

    setTimeout(() => { burstCloud(cx * 0.3, cy); burstSplash(cx * 1.7, cy); }, 400);
    setTimeout(() => { burstRing(cx, cy * 0.5); burstScatter(); }, 800);
    setTimeout(() => { burstFountain(cx * 0.5, cy * 1.5); burstCloud(cx * 1.5, cy * 1.5); }, 1200);

    magicIntervalRef.current = setInterval(() => {
      const fn = [burstCloud, burstSplash, burstRing, burstFountain][Math.floor(Math.random() * 4)];
      fn(Math.random() * window.innerWidth, Math.random() * window.innerHeight);
    }, isMobile ? 1200 : 800);

    setTimeout(() => setShowMagicMessage(true), 1500);
    magicTimeoutRef.current = setTimeout(closeMagicHoli, 9000);
  };

  const closeMagicHoli = () => {
    setIsMagicActive(false); setShowMagicMessage(false);
    if (magicIntervalRef.current) clearInterval(magicIntervalRef.current);
    if (magicTimeoutRef.current) clearTimeout(magicTimeoutRef.current);
  };

  const spawnParticles = useCallback((x: number, y: number, burst = false) => {
    const isMobile = window.innerWidth < 768;
    const countMultiplier = isMobile ? 0.6 : 1;
    const color = selectedColor;
    for (let i = 0; i < (burst ? 40 * countMultiplier : 12 * countMultiplier); i++) {
      const a = Math.random() * Math.PI * 2, s = burst ? 2 + Math.random() * 8 : 1 + Math.random() * 4;
      particlesRef.current.push({
        id: particleId++, x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s - (burst ? 1 : 0.5),
        color, size: Math.random() * (burst ? 6 : 4) + 1, opacity: 0.8, life: 0, maxLife: 40 + Math.random() * 30
      });
    }
    if (burst || Math.random() > 0.7) {
      splashesRef.current.push({ id: splashId++, x, y, color, scale: (burst ? 1.2 : 0.6) * countMultiplier, opacity: 0.6, rotation: Math.random() * Math.PI * 2, points: Array.from({ length: 12 }, (_, i) => ({ r: 10 + Math.random() * 15, a: (Math.PI * 2 * i) / 12 })) });
    }
    if (splashesRef.current.length > (isMobile ? 15 : 30)) splashesRef.current.shift();
    setShowTooltip(false);
  }, [selectedColor]);

  useEffect(() => {
    const canvas = canvasRef.current; if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true }); if (!ctx) return;
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize(); window.addEventListener("resize", resize);
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      splashesRef.current.forEach(s => {
        ctx.save(); ctx.globalAlpha = s.opacity; ctx.translate(s.x, s.y); ctx.rotate(s.rotation); ctx.scale(s.scale, s.scale);
        ctx.beginPath(); s.points.forEach((p, i) => { const px = Math.cos(p.a) * p.r, py = Math.sin(p.a) * p.r; if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py); });
        ctx.closePath(); ctx.fillStyle = s.color; ctx.fill(); ctx.restore();
      });
      particlesRef.current = particlesRef.current.filter(p => {
        p.life++; const prog = p.life / p.maxLife; p.x += p.vx; p.y += p.vy; p.vy += 0.15; p.vx *= 0.96;
        ctx.save(); ctx.globalAlpha = 0.8 * (1 - prog); ctx.fillStyle = p.color; ctx.beginPath(); ctx.arc(p.x, p.y, p.size * (1 - prog * 0.5), 0, Math.PI * 2); ctx.fill(); ctx.restore();
        return p.life < p.maxLife;
      });
      magicParticlesRef.current = magicParticlesRef.current.filter(p => { p.tick(); p.draw(ctx); return p.a > 0; });
      animFrameRef.current = requestAnimationFrame(animate);
    };
    animate(); return () => { cancelAnimationFrame(animFrameRef.current); window.removeEventListener("resize", resize); };
  }, []);

  const clearCanvas = () => { particlesRef.current = []; splashesRef.current = []; magicParticlesRef.current = []; closeMagicHoli(); };

  return (
    <>
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-[9998]" style={{ mixBlendMode: "multiply" }} />
      <AnimatePresence>
        {isMagicActive && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeMagicHoli} className="fixed inset-0 bg-[#04010c]/85 z-[9997] cursor-pointer" />}
      </AnimatePresence>
      <AnimatePresence>
        {showMagicMessage && (
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 1.1 }} className="fixed inset-0 flex flex-col items-center justify-center z-[99999] pointer-events-none text-center px-6">
            <h1 className="text-4xl md:text-6xl font-serif italic font-black bg-gradient-to-r from-[#ff3cac] via-[#ff9f43] to-[#c77dff] bg-[length:300%_auto] bg-clip-text text-transparent animate-[shift_4s_linear_infinite] drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
              Wishing you a colourful Holi,<br />from the Camlenio family
            </h1>
            <p className="mt-6 text-white/50 uppercase tracking-[0.3em] text-xs font-bold">✦ Happy Holi ✦</p>
          </motion.div>
        )}
      </AnimatePresence>
      <style jsx global>{` @keyframes shift { 0% { background-position: 0% center; } 100% { background-position: 300% center; } } `}</style>

      <AnimatePresence>
        {isButtonVisible && (
          <motion.div
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.9}
            onDragEnd={(e, info) => {
              // Dimiss if dragged far left, right, or down (Works on PC and Mobile)
              if (Math.abs(info.offset.x) > 100 || info.offset.y > 100) {
                setIsButtonVisible(false);
              }
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 50 }}
            className={`fixed bottom-10 md:bottom-12 left-1/2 -translate-x-1/2 z-[99999] flex flex-col items-center gap-3 select-none transition-opacity duration-300 ${isMagicActive ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            style={{ touchAction: 'none' }}
          >
            <div className="relative cursor-grab active:cursor-grabbing">
              {/* Dismiss Hint for All Devices */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-bold text-white/40 uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                Drag to dismiss
              </div>

              {/* Magical Color Portal Design */}
              <div className="relative w-16 h-16 md:w-24 md:h-24 flex items-center justify-center">

                {/* Pulsing Portal Aura */}
                <motion.div
                  animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-1 md:inset-2 bg-pink-500/20 rounded-full blur-2xl md:blur-3xl"
                  style={{ willChange: 'transform, opacity' }}
                />

                {/* Neon Portal Rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0.5 md:inset-1 border border-dashed border-white/20 rounded-full border-t-pink-500 border-r-cyan-400 opacity-40"
                  style={{ willChange: 'transform' }}
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-2 md:inset-3 border border-dashed border-white/10 rounded-full border-b-yellow-400 border-l-purple-500 opacity-30"
                  style={{ willChange: 'transform' }}
                />

                {/* The Portal Sphere */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={startMagicHoli}
                  className="relative w-14 h-14 md:w-20 md:h-20 rounded-full bg-black/10 backdrop-blur-md border border-white/40 shadow-[0_0_30px_rgba(255,100,200,0.2),inset_0_0_15px_rgba(255,255,255,0.1)] overflow-hidden flex items-center justify-center group pointer-events-auto"
                >
                  {/* Swirling Vortex Interior */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,#ff3cac,#ff9f43,#39ff14,#00e5ff,#c77dff,#ff3cac)] opacity-25 group-hover:opacity-40 group-hover:duration-[2s] transition-opacity blur-xl"
                    style={{ willChange: 'transform' }}
                  />

                  {/* Glossy Reflective Highlight */}
                  <div className="absolute top-1 md:top-2 left-4 md:left-6 w-6 md:w-8 h-3 md:h-4 bg-white/10 rounded-full rotate-[-20deg] blur-[1px]" />

                  {/* Central Floating Bucket */}
                  <motion.div
                    animate={{ y: [0, -3, 0], scale: [1, 1.05, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10"
                    style={{ willChange: 'transform' }}
                  >
                    <svg viewBox="0 0 64 64" className="w-8 h-8 md:w-12 md:h-12 filter drop-shadow-[0_0_10px_rgba(255,255,255,0.4)] saturate-[1.4]">
                      <defs>
                        <linearGradient id="bucketGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#FF6B6B" />
                          <stop offset="100%" stopColor="#D63031" />
                        </linearGradient>
                        <linearGradient id="rimGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#F9CA24" />
                          <stop offset="100%" stopColor="#F0932B" />
                        </linearGradient>
                        <linearGradient id="gulalGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#3B82F6" />
                          <stop offset="100%" stopColor="#00E5FF" />
                        </linearGradient>
                      </defs>
                      <path d="M12 24 C12 24 20 8 32 8 C44 8 52 24 52 24" fill="none" stroke="#444" strokeWidth="2.5" strokeLinecap="round" />
                      <path d="M12 24 L52 24 L46 58 L18 58 Z" fill="url(#bucketGrad)" />
                      <path d="M16 26 L48 26 C48 26 44 14 32 14 C20 14 16 26 16 26 Z" fill="url(#gulalGrad)" />
                      <rect x="9" y="20" width="46" height="8" rx="4" fill="url(#rimGrad)" />
                    </svg>
                  </motion.div>
                </motion.button>

                {/* Emitted Particles */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [-5, -30],
                      x: [(i - 1) * 12, (i - 1) * 20],
                      opacity: [0, 0.6, 0],
                      scale: [0, 1, 0.5]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.9, ease: "easeOut" }}
                    className="absolute w-0.5 h-0.5 md:w-1 md:h-1 bg-white rounded-full shadow-[0_0_6px_white]"
                    style={{ willChange: 'transform, opacity' }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
}
