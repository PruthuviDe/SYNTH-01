"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Brain, Radio, Move3D, ScanEye, Shield, Zap } from "lucide-react";

const technologies = [
  {
    icon: Brain,
    label: "Artificial Intelligence",
    stat: "100T",
    unit: "ops/sec",
  },
  {
    icon: ScanEye,
    label: "Computer Vision",
    stat: "360°",
    unit: "perception",
  },
  {
    icon: Radio,
    label: "Sensor Fusion",
    stat: "48",
    unit: "sensors",
  },
  {
    icon: Move3D,
    label: "Mobility System",
    stat: "28",
    unit: "DOF",
  },
  {
    icon: Shield,
    label: "Safety Protocols",
    stat: "5×",
    unit: "redundancy",
  },
  {
    icon: Zap,
    label: "Power Efficiency",
    stat: "72h",
    unit: "runtime",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: "easeOut" as const,
    },
  }),
};

export default function TechnologySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="technology"
      className="relative w-full bg-[#0a0a0a] py-28 md:py-36"
    >
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-16">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mx-auto mb-16 w-full max-w-2xl text-center md:mb-20"
        >
          <span className="mb-4 inline-block text-xs font-medium tracking-[0.3em] text-white/30">
            TECHNOLOGY
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Engineered for
            <br />
            <span className="text-gradient">excellence</span>
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-white/35 sm:text-base">
            Six core technology domains working in perfect harmony to create
            the most advanced humanoid platform ever built.
          </p>
        </motion.div>

        {/* Technology grid */}
        <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.label}
              custom={i}
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="group relative overflow-hidden rounded-2xl glass p-6 transition-all duration-500 hover:glass-strong md:p-8"
            >
              {/* Icon */}
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 transition-colors duration-300 group-hover:bg-white/10">
                <tech.icon className="h-5 w-5 text-white/50 transition-colors duration-300 group-hover:text-white/80" />
              </div>

              {/* Stat */}
              <div className="mb-1 text-3xl font-bold tracking-tight text-white md:text-4xl">
                {tech.stat}
              </div>
              <div className="mb-3 text-xs tracking-wider text-white/25">
                {tech.unit}
              </div>

              {/* Label */}
              <div className="text-sm font-medium text-white/50">
                {tech.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/40 transition-colors duration-300 hover:text-white/70"
          >
            View full specifications
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
