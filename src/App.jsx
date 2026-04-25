import React, { useState } from "react";
import Navbar from "./Modules/Navbar/Navbar";
import Hero from "./Modules/Hero/Hero";
import Operations from "./Modules/Operations/Operations";
import PremiumFeatures from "./Modules/PremiumFeatures/PremiumFeatures";
import Modules from "./Modules/Modules/Modules";
import CatchUp from "./Modules/CatchUp/CatchUp";
import Safety from "./Modules/Safety/Safety";
import HowItWorks from "./Modules/HowItWorks/HowItWorks";
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
    <div className="dark min-h-screen bg-[#050505] text-foreground selection:bg-primary/30 selection:text-primary relative overflow-x-hidden">
      {/* Ultra-Modern Background Stack */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Base Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        {/* Dynamic Ambient Glows */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -left-[10%] w-[800px] h-[800px] bg-primary/20 blur-[140px] rounded-full"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[30%] -right-[15%] w-[900px] h-[900px] bg-secondary/10 blur-[160px] rounded-full"
        />
        <div className="absolute bottom-[-20%] left-[20%] w-[1000px] h-[600px] bg-primary/10 blur-[180px] rounded-[100%] rotate-45" />
      </div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left shadow-[0_0_10px_hsla(var(--primary)/0.5)]"
        style={{ scaleX }}
      />
      
      <Navbar onOpenDemo={handleOpenDemo} />
      
      <main>
        <Hero onOpenDemo={handleOpenDemo} />
        <Operations />
        <PremiumFeatures />
        <Modules />
        <CatchUp />
        <Safety />
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
