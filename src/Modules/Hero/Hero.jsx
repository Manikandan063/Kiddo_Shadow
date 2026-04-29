import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Phone } from "lucide-react";

const Hero = ({ onOpenDemo }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      
      {/* 3D Perspective Grid Background */}
      <div className="absolute inset-0 z-0 perspective-[1000px]">
        <div 
          className="absolute inset-0 bg-grid opacity-[0.15] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" 
          style={{ transform: "rotateX(60deg) translateY(-20%) scale(2)" }}
        />
        
        {/* Dynamic Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 blur-[180px] rounded-full animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 blur-[150px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
        {/* Content Wrapper */}
        <div className="max-w-5xl mx-auto">
          
          {/* Top Dynamic Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/[0.03] border border-white/10 text-primary text-[11px] font-black uppercase tracking-[0.4em] mb-12 backdrop-blur-3xl"
          >
            <Zap size={14} className="fill-primary" />
            Intelligence Engine Active
          </motion.div>

          {/* Epic Centered Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-5xl md:text-6xl lg:text-[6.5rem] font-black text-foreground mb-10 leading-[0.95] tracking-tighter"
          >
            The Intelligent Learning <br />
            <span className="text-gradient-neon filter saturate-[1.2] drop-shadow-[0_0_30px_hsla(var(--primary)/0.3)]">Platform for Modern Schools</span>
          </motion.h1>

          {/* Subheading with refined measure and color */}
          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-foreground/60 text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed font-semibold mb-16"
          >
            Kiddo Shadow unifies curriculum-aligned AI, operational intelligence, and secure communication. Purpose-built for institutional confidence and student outcomes.
          </motion.p>

          {/* Centered Large Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8"
          >
            <Button 
              size="lg" 
              onClick={onOpenDemo}
              className="h-20 px-12 rounded-2xl bg-primary text-white font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-[0_0_50px_hsla(var(--primary)/0.4)] flex items-center gap-4 border-none"
            >
              Get Free Demo <ArrowRight size={24} />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="h-20 px-12 rounded-2xl bg-white/[0.03] border-white/10 text-foreground font-black text-xl hover:bg-white/[0.08] transition-all flex items-center gap-4 backdrop-blur-xl"
              onClick={onOpenDemo}
            >
              <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                <Phone size={18} fill="currentColor" />
              </div>
              Request Demo
            </Button>
          </motion.div>

          {/* Institutional Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-32 flex flex-wrap justify-center gap-4"
          >
            {[
              { label: "10+ Schools" },
              { label: "Daily Users" },
              { label: "Engagement" },
              { label: "99.9% Uptime" }
            ].map((stat, i) => (
              <div
                key={i}
                className="px-10 py-5 rounded-2xl bg-white/[0.03] border border-white/5 text-[11px] font-black uppercase tracking-widest text-foreground/40 hover:bg-white/[0.06] transition-all cursor-default"
              >
                {stat.label}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />
    </section>
  );
};

export default Hero;
