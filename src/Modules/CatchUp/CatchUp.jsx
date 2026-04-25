import React from "react";
import { motion } from "framer-motion";
import { Sparkles, FileUp, Zap, User } from "lucide-react";
import robotImage from "@/assets/ai-tutor.jpg";

const CatchUp = () => {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
          className="bg-[#0A0A0C]/40 backdrop-blur-3xl border border-white/5 rounded-[2rem] p-6 md:p-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 shadow-2xl relative overflow-hidden max-w-4xl mx-auto"
        >
          {/* Decorative background glows */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />
          
          <div className="flex-1 text-left relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[9px] font-black mb-6 uppercase tracking-[0.2em]"
            >
              <Sparkles size={12} className="fill-primary" />
              Special Feature
            </motion.div>

            <h2 className="text-2xl md:text-4xl font-black text-white mb-4 leading-[1.1] tracking-tight">
              AI Class Catch-Up <br /> Learning
            </h2>
            
            <p className="text-white/50 text-sm md:text-base mb-8 leading-relaxed max-w-lg font-medium">
              When a student misses class due to leave, OD, or other reasons, teachers upload the day's syllabus or notes. 
              AI ensures <span className="text-white font-bold">no learning gap</span>.
            </p>

            <div className="space-y-6">
              {[
                { 
                  icon: FileUp, 
                  title: "Teacher Uploads Content", 
                  desc: "Notes, worksheets, or syllabus topics",
                  color: "bg-blue-500/20 text-blue-400"
                },
                { 
                  icon: Zap, 
                  title: "AI Teaches the Content", 
                  desc: "Personalized, interactive learning",
                  color: "bg-cyan-500/20 text-cyan-400"
                },
                { 
                  icon: User, 
                  title: "Student Catches Up", 
                  desc: "Maintains academic continuity",
                  color: "bg-purple-500/20 text-purple-400"
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + (i * 0.1) }}
                  className="flex items-center gap-4 group cursor-default"
                >
                  <div className={`w-10 h-10 rounded-lg ${item.color} flex items-center justify-center shrink-0 group-hover:scale-105 transition-all shadow-md`}>
                    <item.icon size={16} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base tracking-tight mb-0.5">{item.title}</h4>
                    <p className="text-white/40 text-[11px] font-medium leading-none">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex-1 relative z-10 w-full flex justify-center lg:justify-end mt-12 lg:mt-0">
            <div className="relative w-full max-w-[340px] aspect-square flex items-center justify-center">
              
              {/* Main Robot Teacher Image - No Zoom */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-full h-full rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl"
              >
                <img 
                  src={robotImage} 
                  alt="AI Teacher Robot" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-30" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CatchUp;
