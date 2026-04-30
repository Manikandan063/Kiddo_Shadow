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
      icon: <Lock size={20} />,
    },
    {
      title: "Moderated Engagement",
      desc: "Educators have full visibility and control over all AI-student interactions in real-time.",
      icon: <Eye size={20} />,
    },
    {
      title: "Curriculum Alignment",
      desc: "AI responses are strictly bounded by school-approved curriculum and academic standards.",
      icon: <FileText size={20} />,
    },
    {
      title: "No Peer-to-Peer Chat",
      desc: "Platform eliminates unmoderated student-to-student messaging to prevent distractions.",
      icon: <MessageSquareOff size={20} />,
    },
    {
      title: "Activity Audit Trails",
      desc: "Comprehensive logging of all platform usage for complete institutional accountability.",
      icon: <Activity size={20} />,
    },
    {
      title: "Institutional Privacy",
      desc: "Data is handled with enterprise-grade encryption. We prioritize student data sovereignty.",
      icon: <ShieldCheck size={20} />,
    }
  ];

  return (
    <section id="safety" className="py-24 md:py-40 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Enterprise Header Box */}
        <div className="mb-20 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 text-primary mb-10"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
              <Shield size={18} />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em]">Safety & Security Framework</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-7xl font-bold text-foreground tracking-tighter leading-[1.1]"
            >
              Enterprise-Grade Safety, <br /> 
              <span className="text-muted-foreground/40 font-medium">Aligned with Schools.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-xl pb-2"
            >
              Institutional leadership can operate with complete confidence. Kiddo Shadow architecture prioritizes student protection through multi-layered security controls.
            </motion.p>
          </div>
        </div>

        {/* Standardized Card Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
          {safetyCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group p-10 bg-foreground/[0.01] border border-border hover:bg-foreground/[0.03] hover:border-primary/20 transition-all duration-300 relative overflow-hidden"
            >
              <div className="mb-12 text-primary/40 group-hover:text-primary transition-colors">
                {card.icon}
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground tracking-tight leading-tight">
                  {card.title}
                </h3>
                <p className="text-foreground/40 text-sm leading-relaxed font-medium">
                  {card.desc}
                </p>
              </div>

              {/* Grid Decorative Element */}
              <div className="absolute top-4 right-4 text-[10px] font-mono text-foreground/5 group-hover:text-primary/20 transition-colors">
                0{index + 1}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Structured Certification Module */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-1 flex flex-col md:flex-row items-center gap-0 border border-border bg-foreground/[0.01]"
        >
          <div className="w-full md:w-64 h-64 bg-primary/5 flex items-center justify-center text-primary border-r border-border">
            <CheckCircle2 size={48} />
          </div>
          <div className="p-10 md:p-16 flex-1">
            <h4 className="text-2xl md:text-4xl font-bold text-foreground mb-6 tracking-tight">Principal-Approved Platform Architecture</h4>
            <p className="text-foreground/60 text-lg md:text-xl leading-relaxed font-medium">
              Every feature is designed with school management in mind. Full control over what students can access, complete visibility into all activities, and no external social media-style features.
            </p>
          </div>
        </motion.div>

        {/* Professional Metadata */}
        <div className="mt-12 flex items-center justify-between py-6 border-t border-border">
          <div className="flex gap-8">
            <span className="text-[10px] font-bold text-foreground/10 uppercase tracking-widest">Protocol v4.0</span>
            <span className="text-[10px] font-bold text-foreground/10 uppercase tracking-widest">Safety Certified</span>
          </div>
          <div className="text-[10px] font-bold text-foreground/10 uppercase tracking-widest">Institutional Privacy First</div>
        </div>

      </div>
    </section>
  );
};

export default Safety;

