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
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const steps = [
    {
      id: "01",
      title: "School Onboarding",
      desc: "Instant digital mapping of your institution's infrastructure and student hierarchy.",
      icon: <Building2 />,
      color: "from-blue-500/20 to-blue-600/20",
      accent: "blue"
    },
    {
      id: "02",
      title: "Teacher Enablement",
      desc: "AI assistant training for staff to reduce administrative workload by up to 40%.",
      icon: <Users />,
      color: "from-purple-500/20 to-purple-600/20",
      accent: "purple"
    },
    {
      id: "03",
      title: "Secure Deployment",
      desc: "Activation of curriculum-aligned AI environment for students with full moderation.",
      icon: <ShieldCheck />,
      color: "from-orange-500/20 to-orange-600/20",
      accent: "orange"
    },
    {
      id: "04",
      title: "Operational Insight",
      desc: "Real-time analytics and performance reporting for institution leadership.",
      icon: <LineChart />,
      color: "from-emerald-500/20 to-emerald-600/20",
      accent: "emerald"
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
            Launch Your Institution in Four Steps
          </h2>
          <p className="text-foreground/50 max-w-2xl mx-auto text-sm md:text-base font-medium leading-relaxed">
            From setup to insight. Kiddo Shadow provides a streamlined, fully-managed implementation experience designed for modern schools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting Path (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1.5px] bg-primary/5 -translate-y-1/2 z-0">
             <motion.div 
               style={{ scaleX: scrollYProgress }}
               className="h-full bg-primary origin-left shadow-[0_0_10px_var(--primary)]"
             />
          </div>

          {/* Steps */}
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative z-10"
            >
              <div className="bg-card/40 backdrop-blur-xl border border-primary/5 rounded-[2rem] p-8 h-full flex flex-col hover:bg-card hover:border-primary/20 transition-all duration-500 group">
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} border border-white/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500 shadow-xl`}>
                    {React.cloneElement(step.icon, { size: 28 })}
                  </div>
                  <span className="text-3xl font-black text-white/5 group-hover:text-primary/10 transition-colors">
                    {step.id}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed font-medium">
                  {step.desc}
                </p>

                {/* Status Dot */}
                <div className="mt-8 flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                   <div className="w-12 h-1 rounded-full bg-white/5 overflow-hidden">
                      <motion.div 
                        initial={{ x: "-100%" }}
                        whileInView={{ x: "0%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        className="w-full h-full bg-primary"
                      />
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Completion Indicator */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-col items-center"
        >
          <div className="p-4 rounded-full bg-primary/5 border border-primary/10">
            <CheckCircle2 size={32} className="text-primary animate-pulse" />
          </div>
          <p className="mt-4 text-[10px] font-black uppercase tracking-[0.4em] text-white/20">Operational Readiness Achieved</p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
