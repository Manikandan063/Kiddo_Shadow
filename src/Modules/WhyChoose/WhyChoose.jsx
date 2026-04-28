import React from "react";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Shield, 
  Users, 
  Lock, 
  BookOpen, 
  Clock, 
  RefreshCw,
  Rocket,
  Layers,
  LayoutGrid,
  User,
  CheckCircle2
} from "lucide-react";

const WhyChoose = () => {
  const choiceBenefits = [
    { title: "Designed for Indian curriculum", icon: <MapPin size={14} /> },
    { title: "Principal-level administrative control", icon: <Shield size={14} /> },
    { title: "Teacher-first workflows", icon: <Users size={14} /> },
    { title: "Safe AI environment", icon: <Lock size={14} /> },
    { title: "Supports CBSE, ICSE & State Boards", icon: <BookOpen size={14} /> },
    { title: "Reduces workload", icon: <Clock size={14} /> },
    { title: "Ensures learning continuity", icon: <RefreshCw size={14} /> },
  ];

  const choiceCards = [
    {
      title: "Active Pilot Programs",
      desc: "Currently onboarding first set of partner schools",
      icon: <Rocket size={22} />,
      gradient: "from-orange-500/20 to-orange-600/5",
      border: "border-orange-500/20",
      glow: "shadow-orange-500/10"
    },
    {
      title: "Multi-Board Compatibility",
      desc: "CBSE · State Board · ICSE · Matric",
      icon: <Layers size={22} />,
      gradient: "from-cyan-500/20 to-cyan-600/5",
      border: "border-cyan-500/20",
      glow: "shadow-cyan-500/10"
    },
    {
      title: "Integrated Modules",
      desc: "AI Learning · Diary · Tests · Smart Classroom",
      icon: <LayoutGrid size={22} />,
      gradient: "from-primary/20 to-primary/5",
      border: "border-primary/20",
      glow: "shadow-primary/10"
    },
    {
      title: "Student-Centric",
      desc: "No private chats · Full teacher moderation",
      icon: <User size={22} />,
      gradient: "from-secondary/20 to-secondary/5",
      border: "border-secondary/20",
      glow: "shadow-secondary/10"
    }
  ];

  return (
    <section id="why-choose" className="py-10 bg-background relative overflow-hidden">
      {/* Dynamic Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary/5 blur-[140px] rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/5 blur-[140px] rounded-full translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Modernized List & Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black mb-4 uppercase tracking-[0.3em]"
            >
              Institutional Choice
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter leading-[1.1]">
              Why Schools Choose <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                Kiddo Shadow
              </span>
            </h2>
            
            <p className="text-white/40 text-sm md:text-base font-medium leading-relaxed mb-8 max-w-xl">
              Engineered specifically for the Indian educational ecosystem — delivering secure, structured, and intelligent learning environments.
            </p>

            <div className="grid gap-4">
              {choiceBenefits.map((benefit, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 group cursor-default"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <CheckCircle2 size={14} />
                  </div>
                  <span className="text-sm md:text-base font-bold text-white/60 group-hover:text-white transition-colors">
                    {benefit.title}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: High-End Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-5 relative">
            {/* Background Glow behind cards */}
            <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full scale-110 pointer-events-none" />

            {choiceCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`relative group bg-white/[0.02] backdrop-blur-3xl border ${card.border} rounded-[2.5rem] p-8 overflow-hidden transition-all duration-500 ${card.glow}`}
              >
                {/* Internal Glow Effect */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${card.gradient} blur-[40px] -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700 opacity-50`} />
                
                <div className={`relative z-10 w-14 h-14 rounded-2xl ${card.gradient.replace('/20', '/30')} border border-white/10 flex items-center justify-center text-white mb-6 group-hover:rotate-12 transition-all duration-500 shadow-lg shadow-black/20`}>
                  {card.icon}
                </div>
                
                <h3 className="relative z-10 text-lg font-black text-white mb-3 tracking-tight">
                  {card.title}
                </h3>
                
                <p className="relative z-10 text-xs text-white/30 font-medium leading-relaxed group-hover:text-white/50 transition-colors">
                  {card.desc}
                </p>

                {/* Bottom Border Accent */}
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r ${card.gradient.replace('/20', '/60')} opacity-0 group-hover:opacity-100 transition-opacity`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
