import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { 
  CheckCircle2
} from "lucide-react";

const HowItWorks = () => {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const steps = [
    {
      id: "01",
      title: "Institution Setup",
      desc: "Your school admin provisioned with Kiddo Shadow. We configure the platform for your curriculum requirements (CBSE, ICSE, State Board) and institutional structure.",
      pills: ["Supports CBSE, ICSE & State Curriculums", "Custom Institution branding", "Admin access configuration"]
    },
    {
      id: "02",
      title: "Educator Enablement",
      desc: "Teachers seamlessly upload curriculum and gain full control through an intuitive, guided platform experience. Comprehensive training ensures optimal adoption.",
      pills: ["Curriculum management", "Dashboard mastery", "Moderation framework setup"]
    },
    {
      id: "03",
      title: "Secure Student Access",
      desc: "Students receive secure, controlled access credentials. Platform enforces curriculum-aligned learning, secure communication, and age-appropriate engagement.",
      pills: ["Secure authentication", "Moderated communication only", "Curriculum-restricted AI"]
    },
    {
      id: "04",
      title: "Intelligence & Insights",
      desc: "Leadership and educators monitor institutional performance through premium analytics dashboards. Real-time visibility into attendance, learning outcomes, and engagement metrics.",
      pills: ["Real-time analytics", "Performance dashboards", "Learning insights"]
    },
  ];

  return (
    <section id="how-it-works" ref={containerRef} className="py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-40">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black mb-10 uppercase tracking-[0.4em] backdrop-blur-3xl"
          >
            SEAMLESS ONBOARDING
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-black text-foreground mb-12 tracking-tighter leading-[0.9]"
          >
            Launch Your Institution <br /> 
            <span className="text-gradient-neon filter saturate-[1.2]">in Four Steps</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-foreground/40 max-w-3xl mx-auto text-xl md:text-2xl leading-relaxed font-medium"
          >
            From setup to insight. Kiddo Shadow provides a streamlined, fully-managed implementation experience designed for modern schools.
          </motion.p>
        </div>

        {/* Dynamic Alternating Timeline */}
        <div className="relative">
          {/* Animated Central Path */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/5 hidden lg:block -translate-x-1/2">
            <motion.div 
              style={{ scaleY, originY: 0 }}
              className="absolute inset-0 bg-gradient-to-b from-primary via-secondary to-primary shadow-[0_0_15px_hsla(var(--primary)/0.5)]"
            />
          </div>

          <div className="space-y-32 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                className={`relative flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Content Card */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex-1 w-full"
                >
                  <div className="glass-card p-12 border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 rounded-[3rem] relative group">
                    <div className="absolute -top-6 -left-6 lg:group-hover:scale-110 transition-transform duration-500 hidden lg:block">
                      <div className="w-20 h-20 rounded-3xl bg-background border border-white/10 flex items-center justify-center text-primary font-black text-2xl shadow-2xl backdrop-blur-2xl rotate-12 group-hover:rotate-0 transition-all">
                        {step.id}
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-black text-foreground mb-6 tracking-tight group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-foreground/40 text-lg leading-relaxed font-medium mb-10">
                      {step.desc}
                    </p>
                    
                    <div className="flex flex-wrap gap-3">
                      {step.pills.map((pill, i) => (
                        <div key={i} className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white/[0.03] border border-white/10 text-[11px] font-bold text-foreground/40 hover:text-primary hover:bg-primary/5 transition-all cursor-default">
                          <CheckCircle2 size={12} className="text-primary" />
                          {pill}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Central Step Marker (Desktop Only) */}
                <div className="hidden lg:flex shrink-0 w-20 h-20 rounded-full bg-background border-2 border-white/5 items-center justify-center relative z-20 shadow-2xl">
                   <div className="w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_hsla(var(--primary)/0.6)] animate-pulse" />
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden lg:block" />

                {/* Mobile Step Indicator */}
                <div className="lg:hidden absolute -top-8 left-0 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white font-black text-sm shadow-2xl">
                    {step.id}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Orbs */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none opacity-30" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-secondary/5 blur-[150px] rounded-full pointer-events-none opacity-30" />
    </section>
  );
};


export default HowItWorks;

