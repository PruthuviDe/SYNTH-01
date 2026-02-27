"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer ref={ref} id="about" className="relative w-full bg-[#0a0a0a] pb-10 pt-28">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Ready to meet the future?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base text-white/35">
            Join thousands of innovators shaping the next era of intelligent
            robotics.
          </p>

          {/* Email input */}
          <div className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white placeholder-white/25 outline-none backdrop-blur-sm transition-colors duration-300 focus:border-white/25"
            />
            <button className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:bg-white/90 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]">
              Get Notified
            </button>
          </div>
        </motion.div>

        {/* Footer bottom */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-10 md:flex-row">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-white/10">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white/70"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="text-sm font-medium text-white/50">
              SYNTH<span className="text-white/25">-01</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            {["Privacy", "Terms", "Contact"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs text-white/25 transition-colors duration-300 hover:text-white/50"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs text-white/20">
            © 2026 SYNTH-01. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
