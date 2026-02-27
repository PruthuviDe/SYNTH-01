"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, MousePointer2 } from "lucide-react";

const RobotScene = dynamic(
  () => import("@/components/three/RobotScene"),
  { ssr: false }
);

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full hero-gradient">
      {/* Subtle grid */}
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-30" />

      {/* Radial glow behind model */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-[55%] rounded-full bg-blue-500/[0.04] blur-[120px]" />

      {/* 3D Robot Scene — full screen canvas */}
      <RobotScene />

      {/* ── Top-center: Badge ── */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex justify-center pt-28">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-[11px] font-medium tracking-[0.25em] text-white/50 backdrop-blur-md">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400" />
            NEXT GENERATION ROBOTICS
          </span>
        </motion.div>
      </div>

      {/* ── Bottom overlay: Heading + CTA ── */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10">
        {/* Gradient fade from transparent to dark — extends taller to fully kill hero edge */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0a0a] from-30% via-[#0a0a0a]/70 via-60% to-transparent" />

        <div className="relative mx-auto w-full max-w-7xl px-6 pb-12 lg:px-16">
          <div className="flex flex-col items-center text-center">
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-8xl"
            >
              SYNTH<span className="text-gradient">-01</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mt-4 max-w-lg text-sm leading-relaxed text-white/40 sm:text-base"
            >
              Pioneering the next generation of autonomous humanoid systems
              — precision engineering meets advanced artificial intelligence.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="pointer-events-auto mt-8 flex flex-wrap items-center justify-center gap-4"
            >
              <Button
                size="lg"
                className="group h-12 rounded-full bg-white px-8 text-sm font-medium text-black transition-all duration-300 hover:bg-white/90 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              >
                Explore Model
                <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="h-12 rounded-full border-white/15 bg-white/5 px-8 text-sm font-medium text-white/80 backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:bg-white/10 hover:text-white"
              >
                <Play className="mr-1 h-3.5 w-3.5" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Drag hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2, duration: 1 }}
              className="mt-6 flex items-center gap-2 text-[11px] tracking-widest text-white/20"
            >
              <MousePointer2 className="h-3 w-3" />
              DRAG TO ROTATE
            </motion.div>
          </div>
        </div>
      </div>

      {/* Side indicators — left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="pointer-events-none absolute bottom-40 left-6 z-10 hidden flex-col items-center gap-3 lg:flex lg:left-16"
      >
        <div className="h-16 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        <span className="text-[9px] font-medium tracking-[0.3em] text-white/20 [writing-mode:vertical-lr]">SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="h-8 w-[1px] bg-gradient-to-b from-white/30 to-transparent" />
        </motion.div>
      </motion.div>

      {/* Side indicators — right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="pointer-events-none absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 flex-col items-center gap-4 lg:flex lg:right-16"
      >
        {["01", "02", "03"].map((num, i) => (
          <div
            key={num}
            className={`flex h-8 w-8 items-center justify-center rounded-full text-[10px] font-medium transition-all ${
              i === 0
                ? "border border-white/20 text-white/60"
                : "text-white/15"
            }`}
          >
            {num}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
