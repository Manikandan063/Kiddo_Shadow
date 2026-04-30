import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const Hero = ({ onOpenDemo }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-28 pb-20">
      
      {/* Bold Gradient & Abstract Visuals */}
      <div className="absolute inset-0 z-0">
        {/* Pulsing Gradient Orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 50, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary/20 blur-[150px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/15 blur-[120px] rounded-full" 
        />
        
        {/* Center Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,140,50,0.05)_0%,transparent_70%)]" />

        {/* Textured Overlay */}
        <div className="absolute inset-0 bg-grid opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10 text-center">
        <div className="max-w-none mx-auto flex flex-col items-center">
          
          {/* Minimal Status Indicator */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-4 py-1 rounded-full bg-foreground/[0.03] border border-border text-primary text-[8px] md:text-[10px] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] mb-6 md:mb-10 backdrop-blur-3xl"
          >
            Intelligence Engine Active
          </motion.div>
 
          {/* Dominant Oversized Heading */}
          <div className="relative mb-6 md:mb-10 w-full">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-foreground leading-[1.1] md:leading-[1.1] tracking-tight px-2"
            >
              The Intelligent Learning <br className="hidden md:block" /> Platform for Modern Schools
            </motion.h1>
            {/* Subtle Text Shadow Overlay */}
            <div className="absolute inset-0 bg-primary/5 blur-[40px] md:blur-[80px] -z-10 rounded-full" />
          </div>
 
          {/* High-Readability Subheading */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-foreground/40 text-sm md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed font-medium mb-8 md:mb-12 px-4"
          >
            Kiddo Shadow unifies curriculum-aligned AI, operational intelligence, and secure communication. Purpose-built for institutional confidence and student outcomes.
          </motion.p>
  
          {/* Bold Centered Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="flex flex-col sm:flex-row items-center gap-4 md:gap-8 w-full sm:w-auto px-6"
          >
            <Button 
              size="lg" 
              onClick={onOpenDemo}
              className="h-14 md:h-16 w-full sm:w-auto px-10 md:px-12 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary to-orange-600 text-white font-black text-base md:text-lg shadow-xl hover:scale-[1.05] transition-all duration-500 flex items-center justify-center gap-3 md:gap-4 border-none group"
            >
              Get Free Demo 
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </div>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="h-14 md:h-16 w-full sm:w-auto px-10 md:px-12 rounded-xl md:rounded-2xl bg-foreground/[0.03] border-border text-foreground font-black text-base md:text-lg hover:bg-foreground/[0.08] transition-all duration-500 flex items-center justify-center gap-3 md:gap-4 backdrop-blur-xl group"
              onClick={onOpenDemo}
            >
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary group-hover:rotate-12 transition-transform">
                <Phone className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" />
              </div>
              Request Demo
            </Button>
          </motion.div>

          {/* Minimalist Trust Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-20 md:mt-32 pt-8 md:pt-12 border-t border-border w-full flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 opacity-30 px-4"
          >
             <div className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] md:tracking-[0.8em] text-center md:text-left text-foreground">Kiddo Enterprise Ecosystem</div>
             <div className="flex gap-8 md:gap-12">
                <div className="h-3 w-3 md:h-4 md:w-4 bg-primary/40 rounded-full" />
                <div className="h-3 w-3 md:h-4 md:w-4 bg-secondary/40 rounded-full" />
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
