import React from "react";
import { motion } from "framer-motion";
import { Sparkles, FileUp, Zap, User, ArrowRight, Bot, Cpu, Activity, Layout, CheckCircle2 } from "lucide-react";

import kiddoTeach from "../../assets/kiddo_teach.png";

const CatchUp = () => {
  const features = [
    { 
      icon: FileUp, 
      title: "Resource Sync", 
      desc: "Automatic synchronization of class notes and curriculum materials.",
      size: "col-span-12 md:col-span-4"
    },
    { 
      icon: Bot, 
      title: "Smart Synthesis", 
      desc: "AI processes raw materials into structured, easy-to-digest summaries.",
      size: "col-span-12 md:col-span-4"
    },
    { 
      icon: User, 
      title: "Self-Paced Learning", 
      desc: "Students catch up at their own pace with interactive AI guidance.",
      size: "col-span-12 md:col-span-4"
    }
  ];

  return (
    <section id="catchup" className="py-24 md:py-40 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Bento Grid Container */}
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          
          {/* Main Headline Block */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-12 lg:col-span-8 p-10 md:p-16 rounded-[2.5rem] bg-card border border-border shadow-sm flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold mb-8 uppercase tracking-widest">
              <Sparkles size={12} className="fill-current" />
              Innovation
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 md:mb-8 leading-[1.1] tracking-tight">
              AI Class <br /> 
              Catch-Up <br /> 
              <span className="text-foreground/40 font-medium tracking-tighter">summaries.</span>
            </h2>
            
            <p className="text-foreground/60 text-lg md:text-xl leading-relaxed max-w-xl font-medium">
              Ensure academic continuity when students miss school. Our AI transforms teacher notes into engaging, interactive summaries so no child is left behind.
            </p>
          </motion.div>

          {/* Large Visual Block (Robot) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="col-span-12 lg:col-span-4 rounded-[2.5rem] bg-card border border-border shadow-sm overflow-hidden flex items-center justify-center relative group p-8"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-foreground/[0.02] to-transparent" />
            
            {/* Robot Image */}
            <div className="relative z-10 w-full aspect-square flex items-center justify-center">
              <img 
                src={kiddoTeach} 
                alt="AI Assistant" 
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 filter drop-shadow-xl"
              />
            </div>

            {/* Contextual Tag */}
            <div className="absolute bottom-8 left-8 right-8 px-6 py-4 rounded-2xl bg-background/50 backdrop-blur-md border border-border flex justify-between items-center">
               <span className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest">AI Status</span>
               <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-bold text-foreground uppercase">Live</span>
               </div>
            </div>
          </motion.div>

          {/* Feature Mini-Blocks */}
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (i + 1) }}
              whileHover={{ y: -5 }}
              className={`${item.size} p-8 md:p-12 rounded-[2.5rem] bg-card border border-border shadow-sm transition-all duration-300 group`}
            >
              <div className="w-14 h-14 rounded-2xl bg-foreground/5 flex items-center justify-center text-primary mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <item.icon size={24} />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground tracking-tight mb-4 leading-tight">
                {item.title}
              </h3>
              
              <p className="text-foreground/60 text-base leading-relaxed font-medium">
                {item.desc}
              </p>
            </motion.div>
          ))}

          {/* Bottom Callout Block */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-12 p-8 md:p-12 rounded-[2.5rem] bg-foreground text-background flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative"
          >
            <div className="relative z-10">
               <h4 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">Designed for Academic Continuity</h4>
               <p className="opacity-60 text-sm md:text-base font-medium">Kiddo Shadow empowers students to stay on track, no matter where they are.</p>
            </div>
            <div className="relative z-10 flex gap-4">
               <div className="w-12 h-12 rounded-xl bg-background/10 flex items-center justify-center">
                  <Activity size={20} />
               </div>
               <div className="w-12 h-12 rounded-xl bg-background/10 flex items-center justify-center">
                  <Layout size={20} />
               </div>
            </div>
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/[0.05] blur-[100px] rounded-full" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CatchUp;

