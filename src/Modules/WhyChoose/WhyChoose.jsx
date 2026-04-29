import React from "react";
import { motion } from "framer-motion";
import { 
  Rocket,
  Layers,
  LayoutGrid,
  CheckCircle2,
  Zap,
  Shield,
  Star
} from "lucide-react";

const WhyChoose = () => {
  const choiceCards = [
    {
      title: "Active Pilot Programs",
      desc: "Currently onboarding first set of partner schools",
      icon: <Rocket size={24} />,
    },
    {
      title: "Multi-Board Compatibility",
      desc: "CBSE · State Board · ICSE · Matric",
      icon: <Layers size={24} />,
    },
    {
      title: "Integrated Learning Modules",
      desc: "AI Learning · Diary · Tests · Class Chat · Smart Classroom",
      icon: <LayoutGrid size={24} />,
    },
    {
      title: "Student-Centric Experience",
      desc: "No private chats · Full teacher moderation",
      icon: <Star size={24} />,
    }
  ];

  const benefits = [
    { text: "Designed for Indian curriculum", icon: <CheckCircle2 size={18} /> },
    { text: "Principal-level administrative control", icon: <CheckCircle2 size={18} /> },
    { text: "Teacher-first workflows", icon: <CheckCircle2 size={18} /> },
    { text: "Safe AI environment", icon: <CheckCircle2 size={18} /> },
    { text: "Supports CBSE, ICSE & State Boards", icon: <CheckCircle2 size={18} /> },
    { text: "Reduces workload", icon: <CheckCircle2 size={18} /> },
    { text: "Ensures learning continuity", icon: <CheckCircle2 size={18} /> },
  ];

  return (
    <section id="why-choose" className="py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black text-foreground mb-8 tracking-tighter">
              Why Schools Choose <br /> 
              Kiddo Shadow
            </h2>
            
            <p className="text-foreground/40 text-xl font-medium leading-relaxed mb-12 max-w-xl">
              Kiddo Shadow is designed specifically for modern Indian institutions — delivering structured workflows, intelligent automation, and a safe digital learning environment.
            </p>

            <div className="space-y-5">
              {benefits.map((benefit, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="flex-shrink-0 text-foreground/20 group-hover:text-primary transition-colors">
                    {benefit.icon}
                  </div>
                  <span className="text-lg font-black text-foreground/40 group-hover:text-foreground transition-colors">
                    {benefit.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {choiceCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-3xl p-10 group relative border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/20 text-primary flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-500">
                  {card.icon}
                </div>
                
                <h3 className="text-xl font-black text-foreground mb-3 tracking-tight group-hover:text-primary transition-colors">
                  {card.title}
                </h3>
                
                <p className="text-foreground/40 text-sm font-medium leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -translate-x-1/2 -z-10 opacity-30" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/5 blur-[100px] rounded-full translate-x-1/2 -z-10 opacity-30" />
    </section>
  );
};

export default WhyChoose;

