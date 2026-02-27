"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BOOT_LINES = [
  "INITIALIZING NEURAL CORE...",
  "LOADING PERCEPTION MATRIX...",
  "CALIBRATING MOTOR SYSTEMS...",
  "SYNCING QUANTUM PROCESSORS...",
  "ESTABLISHING UPLINK...",
  "SYSTEM READY",
];

const HEX_POSITIONS = [
  { x: 12, y: 8 }, { x: 82, y: 12 }, { x: 6, y: 72 }, { x: 88, y: 68 },
  { x: 45, y: 5 }, { x: 92, y: 40 }, { x: 4, y: 38 }, { x: 55, y: 92 },
  { x: 20, y: 88 }, { x: 75, y: 85 },
];

function HexIcon({ x, y, delay }: { x: number; y: number; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: [0, 0.4, 0.15], scale: [0, 1.2, 1] }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      style={{ left: `${x}%`, top: `${y}%` }}
      className="absolute h-5 w-5 -translate-x-1/2 -translate-y-1/2"
    >
      <svg viewBox="0 0 24 24" fill="none" className="h-full w-full">
        <polygon
          points="12,2 20.66,7 20.66,17 12,22 3.34,17 3.34,7"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1"
          fill="rgba(255,255,255,0.02)"
        />
      </svg>
    </motion.div>
  );
}

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [bootLine, setBootLine] = useState(0);
  const [glitch, setGlitch] = useState(false);
  const progressRef = useRef(0);

  useEffect(() => {
    // Progress ticker
    const interval = setInterval(() => {
      const increment = Math.random() * 12 + 4;
      progressRef.current = Math.min(progressRef.current + increment, 100);
      setProgress(Math.floor(progressRef.current));
    }, 180);

    // Boot lines cycling
    const lineInterval = setInterval(() => {
      setBootLine((prev) => Math.min(prev + 1, BOOT_LINES.length - 1));
    }, 340);

    // Random glitch flashes
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.6) {
        setGlitch(true);
        setTimeout(() => setGlitch(false), 80);
      }
    }, 400);

    const timer = setTimeout(() => {
      clearInterval(interval);
      clearInterval(lineInterval);
      clearInterval(glitchInterval);
      setProgress(100);
      setBootLine(BOOT_LINES.length - 1);
      setTimeout(() => setLoading(false), 600);
    }, 2400);

    return () => {
      clearInterval(interval);
      clearInterval(lineInterval);
      clearInterval(glitchInterval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-[#050505]"
        >
          {/* Scanline overlay */}
          <div className="pointer-events-none absolute inset-0 z-10"
            style={{
              background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.012) 2px, rgba(255,255,255,0.012) 4px)",
            }}
          />

          {/* Floating hex icons */}
          {HEX_POSITIONS.map((pos, i) => (
            <HexIcon key={i} x={pos.x} y={pos.y} delay={i * 0.08} />
          ))}

          {/* Corner brackets */}
          {[
            "top-8 left-8",
            "top-8 right-8 rotate-90",
            "bottom-8 left-8 -rotate-90",
            "bottom-8 right-8 rotate-180",
          ].map((pos, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
              className={`absolute ${pos} h-10 w-10`}
            >
              <svg viewBox="0 0 40 40" fill="none" className="h-full w-full">
                <path d="M2 18 L2 2 L18 2" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="square" />
              </svg>
            </motion.div>
          ))}

          {/* Outer rotating ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute h-[340px] w-[340px]"
          >
            <svg viewBox="0 0 340 340" fill="none" className="h-full w-full">
              <circle
                cx="170" cy="170" r="160"
                stroke="rgba(255,255,255,0.04)"
                strokeWidth="1"
                strokeDasharray="8 16"
              />
            </svg>
          </motion.div>

          {/* Inner counter-rotating ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute h-[260px] w-[260px]"
          >
            <svg viewBox="0 0 260 260" fill="none" className="h-full w-full">
              <circle
                cx="130" cy="130" r="120"
                stroke="rgba(255,255,255,0.06)"
                strokeWidth="1"
                strokeDasharray="4 24"
              />
              {/* Accent tick marks */}
              {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                const rad = (angle * Math.PI) / 180;
                const x1 = 130 + 112 * Math.cos(rad);
                const y1 = 130 + 112 * Math.sin(rad);
                const x2 = 130 + 122 * Math.cos(rad);
                const y2 = 130 + 122 * Math.sin(rad);
                return (
                  <line
                    key={i}
                    x1={x1} y1={y1} x2={x2} y2={y2}
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="1.5"
                  />
                );
              })}
            </svg>
          </motion.div>

          {/* Progress arc */}
          <svg className="absolute h-[310px] w-[310px] -rotate-90" viewBox="0 0 310 310">
            <circle cx="155" cy="155" r="148" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1.5" />
            <motion.circle
              cx="155" cy="155" r="148"
              fill="none"
              stroke="rgba(255,255,255,0.5)"
              strokeWidth="1.5"
              strokeLinecap="butt"
              strokeDasharray={`${2 * Math.PI * 148}`}
              initial={{ strokeDashoffset: 2 * Math.PI * 148 }}
              animate={{ strokeDashoffset: 2 * Math.PI * 148 * (1 - progress / 100) }}
              transition={{ duration: 0.25, ease: "linear" }}
            />
          </svg>

          {/* Center content */}
          <div className="relative z-20 flex flex-col items-center">
            {/* Logo with glitch */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative mb-1"
              style={{ filter: glitch ? "blur(0.5px)" : "none" }}
            >
              {/* Glitch layer */}
              {glitch && (
                <div
                  className="absolute inset-0 text-2xl font-bold tracking-[0.35em] text-blue-400/60"
                  style={{ transform: "translate(-2px, 1px)", clipPath: "inset(40% 0 30% 0)" }}
                >
                  SYNTH<span className="text-white/30">-01</span>
                </div>
              )}
              <span className="text-2xl font-bold tracking-[0.35em] text-white/95">
                SYNTH<span className="text-white/35">-01</span>
              </span>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-10 text-[9px] tracking-[0.5em] text-white/20"
            >
              AUTONOMOUS SYSTEMS
            </motion.p>

            {/* Progress number */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-3 font-mono text-3xl font-thin tabular-nums text-white/80"
            >
              {String(progress).padStart(3, "0")}
              <span className="text-lg text-white/30">%</span>
            </motion.div>

            {/* Boot log */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex h-4 items-center gap-2"
            >
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.6, repeat: Infinity }}
                className="inline-block h-1.5 w-1.5 rounded-full bg-white/50"
              />
              <span className="font-mono text-[10px] tracking-widest text-white/30">
                {BOOT_LINES[bootLine]}
              </span>
            </motion.div>
          </div>

          {/* Bottom system info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="absolute bottom-10 flex gap-10 font-mono text-[9px] tracking-widest text-white/15"
          >
            <span>SYS.VER 4.2.1</span>
            <span>CORE TEMP 36.6°C</span>
            <span>UPLINK SECURE</span>
          </motion.div>

          {/* Top coords */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="absolute top-10 font-mono text-[9px] tracking-widest text-white/15"
          >
            37.7749° N · 122.4194° W · ALT 0042m
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
