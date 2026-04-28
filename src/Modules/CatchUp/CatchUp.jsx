import { motion } from "framer-motion";
import { Sparkles, FileUp, Zap, User } from "lucide-react";
import robotImage from "@/assets/ai-tutor.jpg";

const robotVariants = {
  initial: { opacity: 0, y: 40, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 1, 
      ease: [0.22, 1, 0.36, 1] 
    }
  },
  floating: {
    y: [0, -15, 0],
    rotateZ: [0, 0.5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

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
                variants={robotVariants}
                initial="initial"
                whileInView={["visible", "floating"]}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02, 
                  rotateY: 5, 
                  rotateX: -5,
                }}
                transition={{ 
                  scale: { duration: 0.4 },
                  rotateY: { duration: 0.4 },
                  rotateX: { duration: 0.4 }
                }}
                className="relative z-10 w-full h-full rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl perspective-1000 group"
              >
                <div className="w-full h-full relative">
                  <img 
                    src={robotImage} 
                    alt="AI Teacher Robot" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 via-transparent to-transparent opacity-60" />
                </div>

                {/* Decorative Glass Edge */}
                <div className="absolute inset-0 border-[0.5px] border-white/20 rounded-[3rem] pointer-events-none z-20" />
                
                {/* Subtle Ambient Glow */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CatchUp;
