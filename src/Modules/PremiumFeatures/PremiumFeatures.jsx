import React from "react";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  BarChart3, 
  Lock,
  ArrowRight,
  Cpu,
  ShieldCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";

const PremiumFeatures = () => {

  const features = [
    {
      title: "AI Personalization",
      description: "Individual learning paths for every student",
      icon: <Cpu size={24} />,
      color: "text-primary"
    },
    {
      title: "Real-time Intelligence",
      description: "Instant institutional and student insight",
      icon: <BarChart3 size={24} />,
      color: "text-secondary"
    },
    {
      title: "Secure Data Core",
      description: "Encrypted institutional records & privacy",
      icon: <ShieldCheck size={24} />,
      color: "text-primary"
    }
  ];

  return (
    <section id="premium" className="py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-8 shadow-2xl"
          >
            Advanced Capabilities
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-black text-foreground mb-8 tracking-tighter leading-[0.9]"
          >
            Premium <span className="text-gradient-neon filter saturate-[1.2]">Features</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-foreground/40 text-xl md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Precision engineering for the most demanding institutional workflows.
          </motion.p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-[3rem] p-12 border-border bg-foreground/[0.02] hover:bg-foreground/[0.04] transition-all duration-500 group relative overflow-hidden"
            >
              {/* Subtle background glow on hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              
              <div className={`w-14 h-14 rounded-2xl bg-foreground/5 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-border shadow-2xl ${feature.color}`}>
                {feature.icon}
              </div>

              <h3 className="text-2xl font-black text-foreground mb-4 tracking-tight group-hover:text-primary transition-colors leading-tight">
                {feature.title}
              </h3>
              
              <p className="text-foreground/40 text-base leading-relaxed font-medium">
                {feature.description}
              </p>

              {/* Decorative accent line */}
              <div className="mt-10 flex items-center gap-4">
                <div className="h-[2px] w-12 bg-gradient-to-r from-primary to-transparent group-hover:w-20 transition-all duration-700" />
                <div className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Decorative Glow */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none opacity-50" />
    </section>
  );
};

export default PremiumFeatures;

