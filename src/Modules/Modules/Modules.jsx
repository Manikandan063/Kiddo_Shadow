import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { 
  Brain, 
  Book, 
  MessageSquare, 
  ClipboardCheck, 
  BarChart3, 
  Monitor,
  Zap,
  ArrowRight,
  Users2
} from "lucide-react";

const Modules = () => {
  const modules = [
    {
      title: "Syllabus-Trained AI Learning Assistant",
      description: "AI works only on school syllabus and teacher-uploaded content. No open internet usage. Safe and relevant learning support.",
      icon: <Brain className="text-primary" size={32} />,
    },
    {
      title: "Digital Student Diary & Notes",
      description: "Organized digital space for homework, class notes, and daily academic tracking.",
      icon: <Book className="text-primary" size={32} />,
    },
    {
      title: "Teacher-Moderated Class Group Chat",
      description: "Only class-wise group chats. Teachers fully monitor and can reply.",
      icon: <MessageSquare className="text-primary" size={32} />,
      badge: "No private student messaging"
    },
    {
      title: "Online Tests & Quizzes",
      description: "Easy-to-create tests with automatic grading and instant feedback.",
      icon: <ClipboardCheck className="text-primary" size={32} />,
    },
    {
      title: "Attendance & Progress Tracking",
      description: "Real-time attendance with comprehensive academic progress reports.",
      icon: <BarChart3 className="text-primary" size={32} />,
    },
    {
      title: "Smart Classroom Integration",
      description: "Works with smart boards and classroom devices for enhanced teaching.",
      icon: <Monitor className="text-primary" size={32} />,
    },
  ];

  return (
    <section id="modules" className="py-24 bg-transparent relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(var(--primary)_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse:60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.05]" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[9px] font-black mb-4 uppercase tracking-[0.25em]"
            >
              <Zap size={12} className="fill-primary" />
              Core Ecosystem
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight leading-[1.1]">Everything Your <br /> School Needs</h2>
            <p className="text-white/50 text-base md:text-lg leading-relaxed font-medium">
            A comprehensive platform designed specifically for Indian schools — CBSE, ICSE, and State Boards.
            </p>
          </div>
                   <div className="hidden md:block">
             <div className="flex -space-x-3 mb-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-[3px] border-[#050505] bg-muted overflow-hidden flex items-center justify-center font-bold text-[10px]">
                    {i === 4 ? "+200" : <Users2 size={16} className="text-white/20" />}
                  </div>
                ))}
             </div>
             <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/30 ml-2">Trusted by leaders</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-5">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`group relative ${
                index === 0 ? "md:col-span-3 lg:col-span-8" : 
                index === 1 ? "md:col-span-3 lg:col-span-4" : 
                index === 2 ? "md:col-span-3 lg:col-span-4" :
                index === 3 ? "md:col-span-3 lg:col-span-4" :
                index === 4 ? "md:col-span-6 lg:col-span-4" :
                "md:col-span-6 lg:col-span-12"
              }`}
            >
              <div className="h-full bg-white/[0.03] backdrop-blur-xl border border-primary/10 rounded-[2rem] p-8 hover:bg-white/[0.05] hover:border-primary/40 transition-all duration-500 hover:shadow-2xl relative overflow-hidden flex flex-col justify-between">
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 blur-[40px] rounded-full group-hover:bg-primary/20 transition-all" />
                
                <div>
                  <div className="mb-6 w-14 h-14 rounded-xl bg-gradient-to-br from-white/5 to-transparent shadow-xl flex items-center justify-center border border-white/10 group-hover:rotate-3 group-hover:scale-105 transition-all duration-500">
                    {React.cloneElement(module.icon, { size: 28, className: "group-hover:text-primary transition-colors" })}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight leading-tight">{module.title}</h3>
                  <p className="text-white/50 text-sm md:text-base leading-relaxed font-medium mb-6 max-w-[280px]">
                    {module.description}
                  </p>
                </div>

                <div className="mt-auto">
                  {module.badge ? (
                    <div className="flex items-center gap-2 text-[9px] font-black text-red-500 bg-red-500/10 border border-red-500/20 w-fit px-3 py-1.5 rounded-lg uppercase tracking-widest">
                      <div className="w-1 h-1 rounded-full bg-red-500 animate-pulse" />
                      {module.badge}
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-primary text-[9px] font-black uppercase tracking-[0.2em] opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                      Learn More <ArrowRight size={12} />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Modules;
