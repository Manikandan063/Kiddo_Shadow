import React, { useState } from "react";
import Navbar from "./Modules/Navbar/Navbar";
import Hero from "./Modules/Hero/Hero";
import Operations from "./Modules/Operations/Operations";
import PremiumFeatures from "./Modules/PremiumFeatures/PremiumFeatures";
import SchoolNeeds from "./Modules/SchoolNeeds/SchoolNeeds";
import CatchUp from "./Modules/CatchUp/CatchUp";
import Safety from "./Modules/Safety/Safety";
import HowItWorks from "./Modules/HowItWorks/HowItWorks";
import WhyChoose from "./Modules/WhyChoose/WhyChoose";
import Contact from "./Modules/Contact/Contact";
import Footer from "./Modules/Footer/Footer";
import DemoModal from "./Modules/DemoModal/DemoModal";
import { motion, useScroll, useSpring } from "framer-motion";

function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleOpenDemo = () => setIsDemoModalOpen(true);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary relative overflow-x-hidden">
      
      {/* Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary z-[60] origin-left"
        style={{ scaleX }}
      />
      
      <Navbar onOpenDemo={handleOpenDemo} />
      
      <main className="relative z-10">
        <Hero onOpenDemo={handleOpenDemo} />
        <Operations onOpenDemo={handleOpenDemo} />
        <PremiumFeatures />
        <SchoolNeeds />
        <CatchUp />
        <Safety />
        <WhyChoose />
        <HowItWorks />
        <Contact onOpenDemo={handleOpenDemo} />
      </main>

      <Footer />

      <DemoModal 
        isOpen={isDemoModalOpen} 
        setIsOpen={setIsDemoModalOpen} 
      />
    </div>
  );
}

export default App;

