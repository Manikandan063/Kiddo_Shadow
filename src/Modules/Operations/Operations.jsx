import React from "react";
import { motion } from "framer-motion";
import { 
  ScanEye, 
  BookOpen, 
  BarChart4, 
  MessageSquareLock,
  Globe,
  Users,
  Activity,
  ShieldCheck
} from "lucide-react";

const Operations = () => {
  const features = [
    {
      title: "Intelligent Attendance",
      description: "Automated attendance with anomaly detection. Capture accurate data with zero friction.",
      icon: <ScanEye size={24} />,
      color: "from-blue-500/20 to-indigo-500/20"
    },
    {
      title: "Digital Learning Diary",
      description: "Structured homework management and lesson continuity, perfectly aligned with board requirements.",
      icon: <BookOpen size={24} />,
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Institutional Intelligence",
      description: "Real-time dashboards for leadership, educators, and coordinators. Action-ready insights at every level.",
      icon: <BarChart4 size={24} />,
      color: "from-amber-500/20 to-orange-500/20"
    },
    {
      title: "Secure Communication Hub",
      description: "Moderation-first messaging and announcements. Full transparency, complete institutional control.",
      icon: <MessageSquareLock size={24} />,
      color: "from-emerald-500/20 to-teal-500/20"
    }
  ];

  const stats = [
    { label: "10+ Schools", icon: <Globe size={14} /> },
    { label: "Daily Users", icon: <Users size={14} /> },
    { label: "Engagement", icon: <Activity size={14} /> },
    { label: "99.9% Uptime", icon: <ShieldCheck size={14} /> }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-background/30">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-foreground mb-4 tracking-tight leading-[1.1]"
          >
            Built for Modern School <br /> Operations
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-foreground/50 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-medium"
          >
            A complete platform combining AI assistance, classroom workflows, and secure communication—all designed for today's educational needs.
          </motion.p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group h-full bg-card/40 backdrop-blur-xl border border-white/5 rounded-[1.5rem] p-6 hover:bg-card hover:border-primary/20 transition-all duration-500 flex flex-col items-start text-left shadow-lg"
            >
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-primary mb-5 group-hover:scale-105 transition-transform`}>
                {React.cloneElement(feature.icon, { size: 20 })}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 tracking-tight leading-tight group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-foreground/40 text-xs font-medium leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="flex flex-wrap justify-center gap-3">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + (index * 0.1) }}
              className="px-6 py-2.5 rounded-xl bg-card/20 border border-white/5 backdrop-blur-md flex items-center gap-2 group hover:bg-card hover:border-primary/10 transition-all"
            >
              <div className="text-primary opacity-30 group-hover:opacity-100 transition-opacity">
                {stat.icon}
              </div>
              <span className="text-[9px] font-black text-foreground/30 uppercase tracking-[0.2em] group-hover:text-foreground/60 transition-colors">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
    </section>
  );
};

export default Operations;
