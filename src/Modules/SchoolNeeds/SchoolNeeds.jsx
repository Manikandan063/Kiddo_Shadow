import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { 
  ShieldAlert,
  Brain,
  Notebook,
  MessageSquare,
  ClipboardList,
  LineChart,
  Monitor,
  Zap,
  ShieldCheck,
  Activity
} from "lucide-react";

const FeatureCard = ({ f, i }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const colors = [
    "from-primary to-orange-400",
    "from-secondary to-teal-400",
    "from-purple-500 to-indigo-500",
    "from-pink-500 to-rose-500",
    "from-blue-500 to-cyan-500",
    "from-emerald-500 to-green-500"
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative group h-full"
    >
      {/* Dynamic Underglow */}
      <div className={`absolute -inset-1 bg-gradient-to-br ${colors[i % colors.length]} rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
      
      <div className="relative h-full bg-card/30 backdrop-blur-xl border border-white/5 p-10 rounded-[2.5rem] overflow-hidden transition-colors duration-500 group-hover:border-white/10 flex flex-col">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-1000 pointer-events-none" 
             style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '24px 24px' }} />
        
        {/* Icon Container */}
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colors[i % colors.length]} flex items-center justify-center text-white mb-10 shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}
             style={{ transform: "translateZ(50px)" }}>
          {f.icon}
        </div>

        {/* Content */}
        <div style={{ transform: "translateZ(30px)" }}>
          <h3 className="text-2xl font-black text-foreground mb-4 tracking-tight leading-tight group-hover:text-primary transition-colors">
            {f.title}
          </h3>
          
          <p className="text-foreground/40 text-base leading-relaxed font-medium mb-8 group-hover:text-foreground/60 transition-colors">
            {f.desc}
          </p>
        </div>

        {/* Footer */}
        <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between" style={{ transform: "translateZ(20px)" }}>
          {f.badge ? (
            <div className="flex items-center gap-2 px-4 py-2 bg-red-500/5 border border-red-500/10 rounded-xl">
              <ShieldAlert size={14} className="text-red-500" />
              <span className="text-[10px] font-black uppercase tracking-widest text-red-500/80">{f.badge}</span>
            </div>
          ) : (
            <div className="flex items-center gap-1.5">
              <Zap size={14} className="text-primary/40 group-hover:text-primary transition-colors" />
              <span className="text-[10px] font-black uppercase tracking-widest text-foreground/20 group-hover:text-foreground/40">Active System</span>
            </div>
          )}
          <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0">
            <Activity size={14} className="text-primary" />
          </div>
        </div>

        {/* Corner Light Sweep */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
      </div>
    </motion.div>
  );
};

const SchoolNeeds = () => {
  const features = [
    {
      title: "Syllabus-Trained AI Assistant",
      desc: "AI precision-tuned exclusively for school curriculum. Zero exposure to open internet risks. Safe and relevant learning support.",
      icon: <Brain size={24} />,
    },
    {
      title: "Digital Academic Ledger",
      desc: "An organized digital hub for homework, class notes, and daily academic tracking for every student.",
      icon: <Notebook size={24} />,
    },
    {
      title: "Teacher-Moderated Channels",
      desc: "Safe class-wise group interactions. Teachers maintain full control with no private messaging allowed.",
      icon: <MessageSquare size={24} />,
      badge: "Institutional Security"
    },
    {
      title: "Smart Assessment Engine",
      desc: "Deploy tests with automated grading and instant feedback. Deep analytics into student performance.",
      icon: <ClipboardList size={24} />,
    },
    {
      title: "Intelligence & Tracking",
      desc: "Real-time attendance monitoring coupled with comprehensive academic growth and behavior reports.",
      icon: <LineChart size={24} />,
    },
    {
      title: "Matrix Classroom Core",
      desc: "Seamless integration with smart boards and devices to create an interactive, future-ready experience.",
      icon: <Monitor size={24} />,
    }
  ];

  return (
    <section id="school-needs" className="py-32 relative overflow-hidden bg-background">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full pointer-events-none opacity-50" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-secondary/5 blur-[150px] rounded-full pointer-events-none opacity-50" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-2xl bg-white/[0.03] border border-white/10 text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-10 shadow-2xl"
          >
            <ShieldCheck size={14} className="text-secondary" />
            Institutional Grade Solution
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-[6.5rem] font-black text-foreground mb-10 tracking-tighter leading-[0.85]"
          >
            Everything Your <br />
            <span className="text-gradient-neon filter saturate-[1.2]">School Needs</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-foreground/40 text-xl md:text-2xl font-medium leading-relaxed max-w-4xl mx-auto"
          >
            A comprehensive ecosystem architected specifically for <span className="text-foreground">Indian Educational Standards</span> — supporting CBSE, ICSE, and all State Boards.
          </motion.p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 perspective-1000">
          {features.map((f, i) => (
            <FeatureCard key={i} f={f} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SchoolNeeds;




