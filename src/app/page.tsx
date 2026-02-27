"use client";

import LoadingScreen from "@/components/LoadingScreen";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import TechnologySection from "@/components/sections/TechnologySection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <SmoothScroll />
      <Navbar />
      <main className="relative w-full bg-[#0a0a0a]">
        <HeroSection />
        <FeaturesSection />
        <TechnologySection />
        <Footer />
      </main>
    </>
  );
}
