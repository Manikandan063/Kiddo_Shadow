import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShieldCheck, ArrowRight } from "lucide-react";

const Hero = ({ onOpenDemo }) => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-28 pb-16 overflow-hidden bg-background">
      <div className="hero-glow" />
      
      <div className="container mx-auto px-6 max-w-7xl grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black mb-8 uppercase tracking-[0.2em]"
          >
            <div className="w-1 h-1 rounded-full bg-primary animate-pulse" />
            AI Intelligence for Schools
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tighter">
            The <span className="text-primary">Intelligent</span> Learning Platform for Modern Schools
          </h1>
          
          <p className="text-white/50 text-base md:text-lg mb-10 leading-relaxed max-w-xl font-medium">
            Kiddo Shadow unifies curriculum-aligned AI, operational intelligence, and secure communication. Purpose-built for institutional confidence and student outcomes.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="relative overflow-hidden calm-gradient text-white px-8 py-7 rounded-2xl font-bold text-base transition-all hover:scale-105 active:scale-95 group"
              onClick={onOpenDemo}
            >
              <span className="relative z-10 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
              
              {/* Shimmer Effect */}
              <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: "200%" }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear", repeatDelay: 1 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none"
              />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/5 border-white/10 text-white px-8 py-7 rounded-2xl font-bold text-base hover:bg-white/10 transition-all"
              onClick={() => window.location.href = "https://kiddoerp.xtown.in/login"}
            >
              School Login
            </Button>
          </div>
        </motion.div>

        {/* Right Content - Modernized AI Intelligence Hub */}
        <motion.div
          initial={{ opacity: 0, x: 50, rotateY: 15 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative hidden lg:block perspective-1000 group"
        >
          {/* Main Glass Frame */}
          <div className="relative z-10 bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[3rem] p-1 shadow-2xl overflow-hidden shadow-primary/5">
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50 pointer-events-none" />
            
            {/* Interactive Dashboard Content */}
            <div className="bg-[#050505]/90 rounded-[2.9rem] h-[520px] relative overflow-hidden flex flex-col">
              
              {/* Dashboard Header */}
              <div className="h-14 border-b border-white/5 flex items-center justify-between px-8 bg-white/[0.01]">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_var(--primary)] animate-pulse" />
                    <div className="absolute inset-0 bg-primary/20 blur-sm rounded-full scale-150" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Smart Assistant: <span className="text-primary">Working</span></span>
                </div>
                <div className="flex gap-2">
                  <div className="w-12 h-1.5 rounded-full bg-white/5" />
                  <div className="w-8 h-1.5 rounded-full bg-white/5" />
                </div>
              </div>

              {/* Dashboard Main Layout */}
              <div className="flex-1 flex overflow-hidden">
                {/* Slim Sidebar */}
                <div className="w-16 border-r border-white/5 flex flex-col items-center py-8 gap-6 bg-white/[0.01]">
                  {[1, 2, 3, 4].map((i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(251, 146, 60, 0.1)" }}
                      className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all cursor-pointer ${i === 1 ? 'bg-primary/20 text-primary border border-primary/20' : 'bg-white/5 text-white/20 border border-white/5'}`}
                    >
                      <div className={`w-4 h-4 border-2 rounded-sm ${i === 1 ? 'border-primary' : 'border-current'}`} />
                    </motion.div>
                  ))}
                  <div className="mt-auto mb-2 w-1 h-12 bg-gradient-to-b from-primary to-transparent rounded-full opacity-20" />
                </div>

                {/* Main Content Area */}
                <div className="flex-1 p-8 space-y-6 overflow-hidden">
                  {/* Top Stats Row */}
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div 
                      whileHover={{ y: -5 }}
                      className="bg-white/[0.03] border border-white/10 rounded-3xl p-5 relative group/card overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 w-full h-1 bg-primary/30" />
                      <div className="text-[9px] font-bold text-white/20 uppercase tracking-widest mb-1">Student Progress</div>
                      <div className="text-3xl font-black text-white tracking-tighter">94.2<span className="text-primary/50 text-xl">%</span></div>
                      <div className="mt-2 flex gap-1 h-1">
                        {[1, 2, 3, 4, 5, 6].map(i => (
                          <div key={i} className={`flex-1 rounded-full ${i <= 5 ? 'bg-primary' : 'bg-white/5'}`} />
                        ))}
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      whileHover={{ y: -5 }}
                      className="bg-white/[0.03] border border-white/10 rounded-3xl p-5 relative group/card overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 w-full h-1 bg-secondary/30" />
                      <div className="text-[9px] font-bold text-white/20 uppercase tracking-widest mb-1">Security Speed</div>
                      <div className="text-3xl font-black text-white tracking-tighter">1.2<span className="text-secondary/50 text-xl">ms</span></div>
                      <div className="mt-2 flex gap-1 h-1">
                        {[1, 2, 3, 4, 5, 6].map(i => (
                          <div key={i} className={`flex-1 rounded-full ${i <= 1 ? 'bg-secondary' : 'bg-white/5'}`} />
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Central Visualizer - Academic AI Learning Flow */}
                  <div className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-6 relative h-48 flex flex-col justify-between group/viz overflow-hidden">
                    <div className="flex justify-between items-start relative z-10">
                      <div className="flex flex-col gap-1">
                        <div className="text-[9px] font-black text-white/20 uppercase tracking-[0.3em]">Today's Learning Path</div>
                        <div className="text-[10px] font-bold text-primary/80">Checking student work...</div>
                      </div>
                      <div className="flex gap-1.5 items-center bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                        <motion.div 
                          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="w-1.5 h-1.5 rounded-full bg-primary" 
                        />
                        <div className="text-[8px] font-black text-primary uppercase tracking-widest">AI Teacher Active</div>
                      </div>
                    </div>

                    {/* Learning Path Visualizer */}
                    <div className="relative h-24 w-full flex items-center justify-center">
                      <div className="absolute inset-0 flex items-center justify-around px-4">
                        {Array.from({ length: 6 }).map((_, i) => (
                          <div key={i} className="relative flex flex-col items-center gap-2">
                            <motion.div
                              animate={{ 
                                scale: [1, 1.2, 1],
                                borderColor: ["rgba(251, 146, 60, 0.1)", "rgba(251, 146, 60, 0.5)", "rgba(251, 146, 60, 0.1)"],
                                backgroundColor: ["rgba(251, 146, 60, 0.05)", "rgba(251, 146, 60, 0.2)", "rgba(251, 146, 60, 0.05)"]
                              }}
                              transition={{ duration: 3, delay: i * 0.4, repeat: Infinity }}
                              className="w-10 h-10 rounded-2xl border flex items-center justify-center relative z-10"
                            >
                              <div className="w-4 h-4 rounded-full border-2 border-primary/40" />
                            </motion.div>
                            <div className="w-12 h-1 bg-white/5 rounded-full" />
                          </div>
                        ))}
                      </div>
                      
                      {/* Connecting Pulse Line */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                        <motion.path
                          d="M 50 48 Q 150 10, 250 48 T 450 48"
                          fill="transparent"
                          stroke="url(#gradient-hero)"
                          strokeWidth="2"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        />
                        <defs>
                          <linearGradient id="gradient-hero" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="transparent" />
                            <stop offset="50%" stopColor="var(--primary)" />
                            <stop offset="100%" stopColor="transparent" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>

                    <div className="flex justify-between items-center text-[8px] font-bold text-white/20 uppercase tracking-[0.2em] relative z-10">
                      <span>Basic</span>
                      <span>Main</span>
                      <span>Advanced</span>
                    </div>

                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,146,60,0.03)_0%,transparent_70%)] pointer-events-none" />
                  </div>

                  {/* Bottom Activity Bar */}
                  <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4 flex items-center justify-between group-hover:border-primary/20 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary relative">
                        <ShieldCheck size={16} />
                        <motion.div 
                          animate={{ scale: [1, 1.4, 1], opacity: [0, 0.5, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute inset-0 bg-secondary rounded-lg"
                        />
                      </div>
                      <div className="flex flex-col">
                        <div className="text-[10px] font-bold text-white tracking-tight">Safety Check</div>
                        <div className="text-[8px] text-white/30 font-medium">All work follows school syllabus</div>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {[1, 2, 3].map(i => (
                        <motion.div 
                          key={i}
                          animate={{ opacity: [0.2, 1, 0.2] }}
                          transition={{ duration: 1, delay: i * 0.2, repeat: Infinity }}
                          className="w-1.5 h-1.5 rounded-full bg-primary"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Intelligence Widget */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-6 top-1/3 bg-[#0A0A0C]/90 backdrop-blur-2xl border border-white/10 p-5 rounded-3xl shadow-2xl z-20 max-w-[190px] hidden xl:block"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <div className="text-[9px] font-black text-white uppercase tracking-widest">Class Update</div>
              </div>
              <p className="text-[10px] text-white/50 font-medium leading-relaxed mb-3">
                Learning Now: <span className="text-white">Science - Newton's Laws</span>
              </p>
              <div className="flex items-center justify-between text-[9px] font-bold mb-1">
                <span className="text-white/30">Work Done</span>
                <span className="text-primary">85%</span>
              </div>
              <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "85%" }}
                  transition={{ duration: 2, delay: 0.5 }}
                  className="h-full bg-primary shadow-[0_0_10px_var(--primary)]"
                />
              </div>
            </motion.div>
          </div>

          {/* Depth Glows */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />
        </motion.div>
          
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 blur-[100px] rounded-full" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent/10 blur-[100px] rounded-full" />
      </div>
    </section>
  );
};

export default Hero;
