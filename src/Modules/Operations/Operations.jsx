import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  BookText, 
  UserCheck, 
  LayoutDashboard, 
  MessageSquareLock,
  ArrowRight,
  MessageCircle,
  Sparkles,
  Cpu,
  Globe,
  Shield
} from "lucide-react";



const Operations = ({ onOpenDemo }) => {
  const operationsFeatures = [
    {
      title: "Intelligent Attendance",
      desc: "Automated attendance with anomaly detection. Capture accurate data with zero friction.",
      icon: <UserCheck size={24} />,
    },
    {
      title: "Digital Learning Diary",
      desc: "Structured homework management and lesson continuity, perfectly aligned with board requirements.",
      icon: <BookText size={24} />,
    },
    {
      title: "Institutional Intelligence",
      desc: "Real-time dashboards for leadership, educators, and coordinators. Action-ready insights at every level.",
      icon: <LayoutDashboard size={24} />,
    },
    {
      title: "Secure Communication Hub",
      desc: "Moderation-first messaging and announcements. Full transparency, complete institutional control.",
      icon: <MessageSquareLock size={24} />,
    }
  ];

  const stats = [
    { label: "10+ Schools" },
    { label: "Daily Users" },
    { label: "Engagement" },
    { label: "99.9% Uptime" }
  ];

  return (
    <section id="features" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-10 shadow-2xl"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Core Features
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-foreground mb-6 md:mb-8 tracking-tighter leading-[1.1] md:leading-[1]"
          >
            Built for Modern School <br /> 
            <span className="text-gradient-neon filter saturate-[1.2]">Operations</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-foreground/40 text-xl md:text-2xl max-w-4xl mx-auto font-medium leading-relaxed"
          >
            A complete platform combining AI assistance, classroom workflows, and secure communication—all designed for today's educational needs.
          </motion.p>
        </div>

        {/* Feature Grid - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {operationsFeatures.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-10 group h-full flex flex-col border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 rounded-3xl"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 text-primary flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl shadow-primary/20">
                {f.icon}
              </div>
              <h3 className="text-xl font-black text-foreground mb-4 tracking-tight leading-tight group-hover:text-primary transition-colors">{f.title}</h3>
              <p className="text-sm text-foreground/40 leading-relaxed font-medium">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap justify-center gap-4 mt-20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="px-10 py-5 rounded-2xl bg-white/[0.03] border border-white/5 text-[11px] font-black uppercase tracking-widest text-foreground/40 hover:bg-white/[0.06] transition-all cursor-default"
            >
              {stat.label}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Operations;

