import React from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Eye, 
  MessageSquareOff, 
  FileText, 
  Shield,
  CheckCircle2,
  Lock,
  Activity
} from "lucide-react";

const Safety = () => {
  const safetyCards = [
    {
      title: "Platform-Native Communication",
      desc: "All interactions occur within a secure, institutional environment. No external social links.",
      icon: <Lock size={24} />,
      color: "text-primary",
      bg: "bg-primary/5"
    },
    {
      title: "Moderated Engagement",
      desc: "Educators have full visibility and control over all AI-student interactions in real-time.",
      icon: <Eye size={24} />,
      color: "text-secondary",
      bg: "bg-secondary/5"
    },
    {
      title: "Curriculum Alignment",
      desc: "AI responses are strictly bounded by school-approved curriculum and academic standards.",
      icon: <FileText size={24} />,
      color: "text-primary",
      bg: "bg-primary/5"
    },
    {
      title: "No Peer-to-Peer Chat",
      desc: "Platform eliminates unmoderated student-to-student messaging to prevent distractions.",
      icon: <MessageSquareOff size={24} />,
      color: "text-secondary",
      bg: "bg-secondary/5"
    },
    {
      title: "Activity Audit Trails",
      desc: "Comprehensive logging of all platform usage for complete institutional accountability.",
      icon: <Activity size={24} />,
      color: "text-primary",
      bg: "bg-primary/5"
    },
    {
      title: "Institutional Privacy",
      desc: "Data is handled with enterprise-grade encryption. We prioritize student data sovereignty.",
      icon: <ShieldCheck size={24} />,
      color: "text-secondary",
      bg: "bg-secondary/5"
    }
  ];

  return (
    <section id="safety" className="py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-32">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black mb-10 uppercase tracking-[0.4em] backdrop-blur-3xl shadow-2xl"
          >
            <Shield size={14} className="fill-primary" />
            Institutional Security Protocol
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-black text-foreground mb-8 tracking-tighter leading-[0.9] max-w-5xl"
          >
            Enterprise-Grade Safety, <br /> 
            <span className="text-gradient-neon filter saturate-[1.2]">Fully Aligned with School Standards</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-foreground/40 max-w-4xl mx-auto text-xl md:text-2xl leading-relaxed font-medium"
          >
            Institutional leadership can operate with complete confidence. Kiddo Shadow architecture prioritizes student protection through multi-layered security controls and institutional oversight.
          </motion.p>
        </div>

        {/* Ultra-Sleek Minimalist Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
          {safetyCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative p-[1px] rounded-[2rem] overflow-hidden transition-all duration-500 hover:scale-[1.02]"
            >
              {/* Neon Gradient Border (Hover Active) */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative h-full bg-background/80 backdrop-blur-3xl rounded-[2rem] p-10 flex gap-6 border border-white/5 group-hover:border-transparent transition-all">
                <div className={`w-14 h-14 rounded-2xl ${card.bg} flex items-center justify-center border border-white/5 shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ${card.color}`}>
                  {card.icon}
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-black text-foreground tracking-tight group-hover:text-primary transition-colors leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-foreground/30 text-sm leading-relaxed font-medium group-hover:text-foreground/50 transition-colors">
                    {card.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Principal Certification Bottom Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-[3.5rem] p-12 md:p-20 border-white/5 bg-white/[0.02] relative overflow-hidden group"
        >
          <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
            <div className="w-24 h-24 rounded-3xl bg-primary/20 flex items-center justify-center text-primary shrink-0 shadow-2xl border border-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700">
              <CheckCircle2 size={48} />
            </div>
            <div>
              <h4 className="text-3xl md:text-4xl font-black text-foreground mb-6 tracking-tight">Principal-Approved Platform Architecture</h4>
              <p className="text-foreground/40 text-xl leading-relaxed font-medium max-w-5xl">
                Every feature is designed with school management in mind. Full control over what students can access, complete visibility into all activities, and no external social media-style features.
              </p>
            </div>
          </div>
          
          {/* Subtle Glow */}
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        </motion.div>
      </div>
    </section>
  );
};


export default Safety;

