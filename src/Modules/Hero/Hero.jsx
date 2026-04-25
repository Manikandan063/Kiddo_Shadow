import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";

const Hero = ({ onOpenDemo }) => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-28 pb-16 overflow-hidden bg-background">
      <div className="hero-glow" />
      
      <div className="container mx-auto px-6 max-w-7xl grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: -30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.3 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-[1.1] mb-6 tracking-tighter">
            The <span className="text-primary">Intelligent Learning</span> Platform for Modern Schools
          </h1>
          <p className="text-foreground/70 text-sm md:text-base mb-8 max-w-lg leading-relaxed font-medium">
            Kiddo Shadow unifies curriculum-aligned AI, operational intelligence, and secure communication. Purpose-built for institutional confidence.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button
              size="lg"
              className="relative calm-gradient text-white px-8 py-6 text-sm rounded-xl shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all font-black overflow-hidden group"
              onClick={onOpenDemo}
            >
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine" />
              <span className="relative z-10">Get Started</span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/5 border-white/10 text-foreground px-8 py-6 text-sm rounded-xl hover:bg-white/10 hover:border-primary/30 transition-all font-bold backdrop-blur-md shadow-lg group"
              onClick={() => window.location.href = "https://kiddoerp.xtown.in/login"}
            >
              <span className="group-hover:text-primary transition-colors">School Login</span>
            </Button>
          </div>
        </motion.div>

        {/* Right Content - Instructional Intelligence Hub */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: 15, x: 50 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative hidden lg:block perspective-1000"
        >
          {/* Main Frame */}
          <div className="bg-gradient-to-br from-white/10 to-transparent p-[1.5px] rounded-[3rem] shadow-2xl relative z-10 overflow-hidden group border border-white/5">
            
            {/* Holographic Scanning Line */}
            <motion.div 
              animate={{ top: ["-10%", "110%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent blur-[2px] z-30 opacity-50"
            />

            <div className="bg-[#050505] rounded-[2.9rem] overflow-hidden flex h-[500px] relative shadow-inner">
              
              {/* Sidebar Nodes */}
              <div className="w-16 border-r border-white/5 bg-white/[0.02] flex flex-col items-center py-10 gap-6">
                <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary relative mb-4">
                  <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_15px_var(--primary)] animate-pulse" />
                </div>
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center group cursor-pointer hover:bg-primary/20 transition-all">
                    <div className="w-4 h-4 border border-white/20 rounded-sm group-hover:border-primary/50" />
                  </div>
                ))}
              </div>

              {/* Central Interface */}
              <div className="flex-1 flex flex-col">
                {/* Hub Header */}
                <div className="h-16 border-b border-white/5 px-8 flex justify-between items-center bg-white/[0.01]">
                  <div className="flex items-center gap-3">
                    <motion.div 
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_var(--secondary)]"
                    />
                    <div className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30">AI Live Monitoring: <span className="text-secondary">ACTIVE</span></div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-20 h-6 rounded-full bg-white/5 border border-white/10" />
                  </div>
                </div>

                {/* Dashboard Core */}
                <div className="p-8 space-y-8 flex-1">
                  {/* Insight Grid */}
                  <div className="grid grid-cols-2 gap-6">
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="bg-white/[0.03] border border-white/10 p-5 rounded-[2rem] relative overflow-hidden group/card"
                    >
                      <div className="text-[8px] font-black text-white/20 uppercase tracking-widest mb-2">Sync Probability</div>
                      <div className="text-3xl font-black text-white group-hover:text-primary transition-colors">98.4%</div>
                      <div className="absolute top-4 right-4 w-10 h-10 border-2 border-white/5 border-t-primary rounded-full animate-spin-slow" />
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="bg-white/[0.03] border border-white/10 p-5 rounded-[2rem] group/card"
                    >
                      <div className="text-[8px] font-black text-white/20 uppercase tracking-widest mb-2">Live Engagement</div>
                      <div className="flex items-end gap-1 mt-1">
                        {[1, 2, 3, 4, 5, 6, 7].map(i => (
                          <motion.div 
                            key={i} 
                            animate={{ height: ["20%", "80%", "40%", "100%", "20%"] }}
                            transition={{ duration: 2, delay: i * 0.1, repeat: Infinity }}
                            className="w-2 bg-secondary/30 rounded-t-sm" 
                          />
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Neural Stream Chart */}
                  <div className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-6 relative h-40 flex flex-col justify-end">
                    <div className="absolute top-6 left-6 text-[8px] font-black text-white/10 uppercase tracking-[0.3em]">Neural Learning Stream</div>
                    
                    <div className="flex items-end h-24 gap-1 w-full">
                      {Array.from({ length: 30 }).map((_, i) => (
                        <motion.div 
                          key={i}
                          animate={{ 
                            height: [`${Math.random() * 50 + 20}%`, `${Math.random() * 50 + 20}%`, `${Math.random() * 50 + 20}%`],
                            opacity: [0.1, 0.3, 0.1]
                          }}
                          transition={{ duration: 3, delay: i * 0.05, repeat: Infinity }}
                          className={`flex-1 rounded-t-full bg-gradient-to-t ${i % 2 === 0 ? 'from-primary/40 to-primary/80' : 'from-secondary/40 to-secondary/80'}`}
                        />
                      ))}
                    </div>

                    {/* Floating Insight Node */}
                    <motion.div 
                      animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute top-1/2 left-1/3 bg-card border border-primary/40 p-2 rounded-xl shadow-2xl backdrop-blur-md z-40"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_var(--primary)]" />
                        <div className="text-[7px] font-bold text-white uppercase tracking-tighter">AI Feedback: Optimized</div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Extreme Ambient Glows */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/20 blur-[150px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-secondary/10 blur-[150px] rounded-full pointer-events-none" />
        </motion.div>
          
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 blur-[100px] rounded-full" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent/10 blur-[100px] rounded-full" />
      </div>
    </section>
  );
};

export default Hero;
