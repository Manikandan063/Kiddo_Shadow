import React from "react";
import { motion } from "framer-motion";
import { Sparkles, FileUp, Zap, User, ArrowRight, Bot, Cpu, Activity } from "lucide-react";


const CatchUp = () => {
  return (
    <section id="catchup" className="py-32 relative overflow-hidden bg-background">
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full opacity-50" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 blur-[150px] rounded-full opacity-50" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Visual Area - Abstract Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative order-2 lg:order-1"
          >
            <div className="glass-card p-4 rounded-[3.5rem] overflow-hidden group border-white/10 bg-white/[0.01] shadow-2xl relative">
              {/* Internal Glows */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2" />
              
              <div className="relative h-[650px] rounded-[3rem] overflow-hidden bg-background/60 backdrop-blur-3xl flex flex-col p-10 gap-8 border border-white/5">
                
                {/* Header Mockup */}
                <div className="flex items-center justify-between border-b border-white/5 pb-8">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/5 flex items-center justify-center text-primary shadow-lg">
                      <Cpu size={20} />
                    </div>
                    <div className="space-y-2.5">
                      <div className="w-32 h-2.5 bg-white/10 rounded-full" />
                      <div className="w-20 h-1.5 bg-white/5 rounded-full" />
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-white/20">
                      <Activity size={16} />
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                      <Sparkles size={16} />
                    </div>
                  </div>
                </div>

                {/* Content Mockup - Large Glass Card */}
                <div className="flex-1 rounded-3xl border border-white/5 bg-white/[0.01] p-10 flex flex-col gap-10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/5 blur-[80px] rounded-full" />
                  
                  <div className="w-2/3 h-10 bg-gradient-to-r from-primary/40 to-transparent rounded-xl mb-4" />
                  
                  <div className="space-y-5">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-primary/40" />
                        <div className={`h-2 bg-white/10 rounded-full ${i === 1 ? 'w-full' : i === 2 ? 'w-5/6' : 'w-4/6'}`} />
                      </div>
                    ))}
                  </div>
                  
                  {/* Floating Micro-Charts */}
                  <div className="grid grid-cols-2 gap-6 mt-auto">
                    <div className="h-40 rounded-[2rem] border border-primary/10 bg-white/[0.02] flex items-end p-6 gap-3 group/chart transition-all">
                      {[40, 70, 50, 90, 60].map((h, i) => (
                        <motion.div 
                          key={i} 
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ delay: 1 + (i * 0.1), duration: 1.5, ease: "circOut" }}
                          className="flex-1 bg-gradient-to-t from-primary/60 to-primary/20 rounded-t-lg group-hover/chart:saturate-150 transition-all shadow-[0_0_20px_hsla(var(--primary)/0.2)]" 
                        />
                      ))}
                    </div>
                    <div className="h-40 rounded-[2rem] border border-secondary/10 bg-white/[0.02] flex flex-col items-center justify-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary shadow-[0_0_30px_hsla(var(--secondary)/0.3)]">
                        <Zap size={28} fill="currentColor" />
                      </div>
                      <div className="w-16 h-1.5 bg-secondary/20 rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Floating Notification Micro-Card */}
                <motion.div 
                  animate={{ y: [0, -15, 0], rotate: [2, 0, 2] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-16 left-12 right-12 glass-card p-8 border-primary/20 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] backdrop-blur-3xl bg-white/[0.02]"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center text-primary border border-primary/30 shadow-2xl">
                      <Sparkles size={28} />
                    </div>
                    <div>
                      <h4 className="text-foreground font-black text-xl leading-tight">Summary Ready</h4>
                      <p className="text-primary/60 text-[9px] font-black uppercase tracking-[0.3em]">AI Synthesis Complete</p>
                    </div>
                    <div className="ml-auto w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/20">
                       <ArrowRight size={16} />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Depth Glows */}
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-secondary/20 blur-[100px] rounded-full -z-10 opacity-30" />
          </motion.div>

          {/* Right Content Area */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black mb-8 uppercase tracking-widest"
            >
              <Sparkles size={14} className="fill-current" />
              Unique Innovation
            </motion.div>

            <h2 className="text-5xl md:text-7xl font-black text-foreground mb-8 leading-[1] tracking-tighter">
              AI Class <br /> <span className="text-gradient-neon">Catch-Up</span> <br /> summaries.
            </h2>
            
            <p className="text-foreground/50 text-xl mb-12 leading-relaxed max-w-xl font-medium">
              Ensure academic continuity when students miss school. Our AI transforms teacher notes into engaging, interactive summaries so no child is left behind.
            </p>

            <div className="space-y-6">
              {[
                { 
                  icon: FileUp, 
                  title: "Resource Sync", 
                  desc: "Automatic synchronization of class notes and curriculum materials.",
                  color: "bg-secondary/10 text-secondary"
                },
                { 
                  icon: Bot, 
                  title: "Smart Synthesis", 
                  desc: "AI processes raw materials into structured, easy-to-digest summaries.",
                  color: "bg-primary/10 text-primary"
                },
                { 
                  icon: User, 
                  title: "Self-Paced Learning", 
                  desc: "Students catch up at their own pace with interactive AI guidance.",
                  color: "bg-secondary/10 text-secondary"
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="flex items-start gap-8 p-6 rounded-[2rem] hover:bg-foreground/[0.02] border border-transparent hover:border-foreground/5 transition-all group"
                >
                  <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center shrink-0 border border-foreground/5 group-hover:scale-110 transition-transform duration-500`}>
                    <item.icon size={28} />
                  </div>
                  <div>
                    <h4 className="text-foreground font-black text-2xl tracking-tight mb-2 group-hover:text-secondary transition-colors">{item.title}</h4>
                    <p className="text-foreground/40 text-base font-medium leading-relaxed max-w-md">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CatchUp;

