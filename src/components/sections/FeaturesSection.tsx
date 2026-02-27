"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Brain, Eye, Cpu } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Neural Intelligence",
    description:
      "Advanced neural networks enable real-time decision making, contextual awareness, and adaptive learning from every interaction.",
    gradient: "from-blue-500/20 to-purple-500/20",
    iconColor: "text-blue-400",
  },
  {
    icon: Eye,
    title: "360° Perception",
    description:
      "Multi-sensor fusion system with LiDAR, depth cameras, and haptic feedback for complete environmental understanding.",
    gradient: "from-emerald-500/20 to-cyan-500/20",
    iconColor: "text-emerald-400",
  },
  {
    icon: Cpu,
    title: "Quantum Processing",
    description:
      "Next-generation processing architecture delivers 100 trillion operations per second for instantaneous response.",
    gradient: "from-orange-500/20 to-red-500/20",
    iconColor: "text-orange-400",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="features"
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
            CAPABILITIES
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Built for the
            <br />
            <span className="text-gradient">impossible</span>
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-white/35 sm:text-base">
            Every component engineered to push the boundaries of what autonomous
            systems can achieve.
          </p>
        </motion.div>

        {/* Feature cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid w-full gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-2xl glass p-8 transition-all duration-500 hover:glass-strong md:p-10"
            >
              {/* Gradient accent */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              />

              {/* Content */}
              <div className="relative z-10">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5">
                  <feature.icon className={`h-6 w-6 ${feature.iconColor}`} />
                </div>

                <h3 className="mb-3 text-xl font-semibold tracking-tight text-white">
                  {feature.title}
                </h3>

                <p className="text-sm leading-relaxed text-white/40">
                  {feature.description}
                </p>

                {/* Hover arrow */}
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-white/0 transition-all duration-500 group-hover:text-white/50">
                  Learn more
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
