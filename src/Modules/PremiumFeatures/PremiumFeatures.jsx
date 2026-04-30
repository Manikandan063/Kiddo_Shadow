import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  BarChart3, 
  Lock,
  ArrowRight,
  Cpu,
  ShieldCheck,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const PremiumFeatures = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: "AI Personalization",
      description: "Individual learning paths for every student. Our engine analyzes engagement patterns to deliver custom curriculum support in real-time.",
      icon: <Cpu size={48} />,
      color: "text-primary",
      badge: "Institutional Intelligence"
    },
    {
      title: "Real-time Intelligence",
      description: "Instant institutional and student insight. Leadership dashboards provide live visibility into attendance, performance, and curriculum coverage.",
      icon: <BarChart3 size={48} />,
      color: "text-secondary",
      badge: "Operational Mastery"
    },
    {
      title: "Secure Data Core",
      description: "Encrypted institutional records & privacy. We employ enterprise-grade security protocols to ensure all student and staff data remains sovereign.",
      icon: <ShieldCheck size={48} />,
      color: "text-primary",
      badge: "Sovereign Security"
    }
  ];

  const nextFeature = () => setActiveFeature((prev) => (prev + 1) % features.length);
  const prevFeature = () => setActiveFeature((prev) => (prev - 1 + features.length) % features.length);

  return (
    <section id="premium" className="py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-24">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-8"
            >
              Advanced Capabilities
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-black text-foreground tracking-tighter leading-[0.9]"
            >
              Premium <br />
              <span className="text-gradient-neon filter saturate-[1.2]">Features</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-foreground/40 text-xl md:text-2xl max-w-xl font-medium leading-relaxed"
          >
            Precision engineering for the most demanding institutional workflows.
          </motion.p>
        </div>

        {/* High-Impact Interactive Slider */}
        <div className="relative">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            {/* Feature Visual/Icon Area */}
            <div className="w-full lg:w-1/2 aspect-square max-w-[500px] relative flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  exit={{ scale: 1.2, opacity: 0, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  className={`w-64 h-64 md:w-80 md:h-80 rounded-[4rem] bg-foreground/[0.03] dark:bg-white/[0.03] border border-foreground/10 flex items-center justify-center shadow-[0_0_100px_rgba(0,0,0,0.1)] relative z-20 ${features[activeFeature].color}`}
                >
                  {features[activeFeature].icon}
                  {/* Decorative Rings */}
                  <div className="absolute inset-[-40px] rounded-full border border-foreground/5 animate-[spin_20s_linear_infinite]" />
                  <div className="absolute inset-[-80px] rounded-full border border-foreground/5 animate-[spin_30s_linear_infinite_reverse]" />
                </motion.div>
              </AnimatePresence>
              
              {/* Background Glow */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute inset-0 bg-primary/10 blur-[120px] rounded-full -z-10" 
              />
            </div>

            {/* Feature Content Area */}
            <div className="w-full lg:w-1/2 space-y-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -30, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="space-y-8"
                >
                  <div className="inline-flex items-center gap-3 text-primary text-[11px] font-black uppercase tracking-widest bg-primary/5 px-4 py-1.5 rounded-lg border border-primary/10">
                    <Sparkles size={14} />
                    {features[activeFeature].badge}
                  </div>
                  <h3 className="text-4xl md:text-6xl font-black text-foreground tracking-tighter leading-none">
                    {features[activeFeature].title}
                  </h3>
                  <p className="text-foreground/40 text-xl md:text-2xl leading-relaxed font-medium">
                    {features[activeFeature].description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Slider Controls */}
              <div className="flex items-center gap-6 pt-8">
                <button 
                  onClick={prevFeature}
                  className="w-14 h-14 rounded-2xl border border-foreground/10 flex items-center justify-center hover:bg-foreground/5 transition-colors group"
                >
                  <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
                </button>
                <div className="flex gap-3">
                  {features.map((_, i) => (
                    <button 
                      key={i}
                      onClick={() => setActiveFeature(i)}
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        activeFeature === i ? "w-12 bg-primary" : "w-3 bg-foreground/10 hover:bg-foreground/20"
                      }`}
                    />
                  ))}
                </div>
                <button 
                  onClick={nextFeature}
                  className="w-14 h-14 rounded-2xl border border-foreground/10 flex items-center justify-center hover:bg-foreground/5 transition-colors group"
                >
                  <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
};

export default PremiumFeatures;

