"use client";

import { Suspense, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Preload, AdaptiveDpr, OrbitControls } from "@react-three/drei";
import RobotModel from "./RobotModel";
import gsap from "gsap";

function Lights() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 8, 5]} intensity={1.5} color="#ffffff" />
      <directionalLight position={[-4, 2, -4]} intensity={0.5} color="#7090d0" />
      <pointLight position={[0, 6, 3]} intensity={0.8} color="#ffffff" />
      <spotLight
        position={[0, 12, 6]}
        angle={0.35}
        penumbra={1}
        intensity={1}
        color="#ddeeff"
      />
    </>
  );
}

function ModelFallback() {
  return (
    <mesh>
      <capsuleGeometry args={[0.4, 1.6, 4, 8]} />
      <meshStandardMaterial color="#1a1a2e" wireframe />
    </mesh>
  );
}

export default function RobotScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  // Scroll-based canvas fade
  useEffect(() => {
    const handleScroll = () => {
      const progress = Math.min(window.scrollY / window.innerHeight, 1);
      if (containerRef.current) {
        gsap.to(containerRef.current, {
          opacity: 1 - progress * 0.7,
          y: progress * -60,
          duration: 0.2,
          ease: "none",
          overwrite: "auto",
        });
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0"
      style={{ willChange: "transform, opacity" }}
    >
      <Canvas
        camera={{ position: [0, 0.3, 5.5], fov: 45 }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
      >
        <AdaptiveDpr pixelated />
        <Lights />
        <Suspense fallback={<ModelFallback />}>
          <RobotModel />
          <Environment preset="city" environmentIntensity={0.6} />
        </Suspense>
        {/* OrbitControls — user can drag to rotate, scroll disabled so page scroll works */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.6}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI * (3 / 4)}
          dampingFactor={0.08}
          enableDamping
        />
        <Preload all />
      </Canvas>
    </div>
  );
}
