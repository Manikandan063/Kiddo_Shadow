import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { 
  Building2, 
  Users, 
  ShieldCheck, 
  LineChart,
  Zap,
  CheckCircle2
} from "lucide-react";

const HowItWorks = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const steps = [
    {
      id: "01",
      title: "Institution Setup",
      description: "Your school admin provisioned with Kiddo Shadow. We configure the platform for your curriculum requirements (CBSE, ICSE, State Board) and institutional structure.",
      icon: <Building2 />,
      tags: ["Supports CBSE, ICSE & State Curriculums", "Custom institution branding", "Admin access configuration"]
    },
    {
      id: "02",
      title: "Educator Enablement",
      description: "Teachers seamlessly upload curriculum and gain full control through an intuitive, guided platform experience. Comprehensive training ensures optimal adoption.",
      icon: <Users />,
      tags: ["Curriculum management", "Dashboard mastery", "Moderation framework setup"]
    },
    {
      id: "03",
      title: "Secure Student Access",
      description: "Students receive secure, controlled access credentials. Platform enforces curriculum-aligned learning, secure communication, and age-appropriate engagement.",
      icon: <ShieldCheck />,
      tags: ["Secure authentication", "Moderated communication only", "Curriculum-restricted AI"]
    },
    {
      id: "04",
      title: "Intelligence & Insights",
      description: "Leadership and educators monitor institutional performance through premium analytics dashboards. Real-time visibility into attendance, learning outcomes, and engagement metrics.",
      icon: <LineChart />,
      tags: ["Real-time analytics", "Performance dashboards", "Learning insights"]
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[9px] font-black mb-4 uppercase tracking-[0.3em]"
          >
            <Zap size={12} className="fill-primary" />
            Strategic Implementation
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6 tracking-tight leading-[1.1]">
            How Kiddo Shadow Works
          </h2>
          <p className="text-foreground/50 max-w-2xl mx-auto text-sm md:text-base font-medium leading-relaxed">
            A streamlined, four-phase process designed for institutional success and zero-gap learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting Path (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1.5px] bg-primary/5 -translate-y-1/2 z-0">
             <motion.div 
               style={{ scaleX: scaleY, transformOrigin: "left" }}
               className="w-full h-full bg-gradient-to-r from-primary via-secondary to-primary"
             />
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative z-10"
            >
              <div className="group h-full bg-card/40 backdrop-blur-xl border border-white/10 p-6 rounded-[2rem] hover:bg-card hover:border-primary/40 transition-all duration-500 hover:shadow-xl flex flex-col items-center text-center">
                
                {/* Refined Phase Indicator */}
                <div className="mb-6 relative">
                   <div className="w-12 h-12 rounded-xl bg-card border border-primary/20 flex items-center justify-center text-primary shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                     {React.cloneElement(step.icon, { size: 20 })}
                   </div>
                   <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-white text-[9px] font-black flex items-center justify-center border-2 border-background shadow-md">
                     {step.id}
                   </div>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-3 tracking-tight leading-tight group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-foreground/50 text-xs md:text-sm leading-relaxed font-medium mb-6">
                  {step.description}
                </p>

                <div className="mt-auto pt-4 flex flex-wrap justify-center gap-1.5 border-t border-white/5 w-full">
                  {step.tags.slice(0, 2).map((tag, tIndex) => (
                    <span key={tIndex} className="px-2 py-0.5 rounded-lg bg-white/5 border border-white/10 text-[8px] font-black text-foreground/30 uppercase tracking-widest">
                      {tag.split(' ')[0]} {tag.split(' ')[1] || ''}
                    </span>
                  ))}
                </div>

                {/* Subtle Glow */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 blur-[40px] rounded-full transition-opacity pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
