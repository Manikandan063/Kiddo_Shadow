import React from "react";
import { motion } from "framer-motion";
import { 
  Rocket,
  Layers,
  LayoutGrid,
  CheckCircle2,
  Zap,
  Shield,
  Star,
  Sparkles,
  ArrowRight
} from "lucide-react";

const WhyChoose = () => {
  const choiceCards = [
    {
      title: "Active Pilot Programs",
      desc: "Currently onboarding first set of partner schools with priority access and dedicated implementation support.",
      icon: <Rocket size={28} />,
      highlight: true,
      offset: "-translate-x-4",
    },
    {
      title: "Multi-Board Compatibility",
      desc: "CBSE · State Board · ICSE · Matric",
      icon: <Layers size={24} />,
      offset: "translate-x-8",
    },
    {
      title: "Integrated Learning Modules",
      desc: "AI Learning · Diary · Tests · Class Chat · Smart Classroom",
      icon: <LayoutGrid size={24} />,
      offset: "-translate-x-8",
    },
    {
      title: "Student-Centric Experience",
      desc: "No private chats · Full teacher moderation · Safe AI environment",
      icon: <Star size={24} />,
      offset: "translate-x-4",
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
    <section id="why-choose" className="py-24 md:py-40 relative overflow-hidden bg-background">
      {/* Dynamic Storytelling Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
        <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full translate-x-1/2" />
        
        {/* Abstract Flowing Shapes */}
        <svg className="absolute right-0 top-0 h-full w-[600px] opacity-10 text-primary" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            d="M50,0 Q70,25 50,50 T50,100"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 xl:gap-32 items-start">
          
          {/* Left Side Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-40"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] font-bold uppercase tracking-[0.2em] mb-8">
              <Sparkles size={14} />
              The Journey of Innovation
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-8 md:mb-10 tracking-tighter leading-[1.1] md:leading-[1]">
              Why Schools Choose <br /> 
              <span className="text-primary italic">Kiddo Shadow</span>
            </h2>
            
            <p className="text-muted-foreground text-xl leading-relaxed mb-12 max-w-xl">
              Kiddo Shadow is designed specifically for modern Indian institutions — delivering structured workflows, intelligent automation, and a safe digital learning environment.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-foreground/[0.03] border border-border flex items-center justify-center text-primary/40 group-hover:text-primary group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-300">
                    {benefit.icon}
                  </div>
                  <span className="text-lg font-bold text-foreground/60 group-hover:text-foreground transition-colors">
                    {benefit.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Vertical Storytelling Zig-Zag */}
          <div className="relative pt-10">
            {/* Journey Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-primary/20 to-transparent hidden md:block" />

            <div className="space-y-12 md:space-y-24 relative z-10">
              {choiceCards.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  whileHover={{ y: -8 }}
                  className={`relative md:w-[90%] mx-auto ${card.offset}`}
                >
                  {/* Journey Node */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_15px_rgba(255,140,50,0.8)]" />
                  </div>

                  {/* Floating Panel */}
                  <div className={`
                    group p-8 md:p-10 rounded-[2.5rem] bg-foreground/[0.02] backdrop-blur-3xl border border-border relative overflow-hidden transition-all duration-500
                    shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.15)]
                    ${card.highlight ? "border-primary/30 ring-1 ring-primary/20" : ""}
                  `}>
                    {/* Interior Glows */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 blur-[60px] rounded-full group-hover:bg-primary/10 transition-colors" />
                    
                    <div className="relative z-10">
                      <div className={`
                        w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110
                        ${card.highlight ? "bg-primary text-white shadow-[0_10px_30px_rgba(255,140,50,0.4)]" : "bg-foreground/[0.03] border border-border text-primary"}
                      `}>
                        {card.icon}
                      </div>

                      <h3 className={`font-black tracking-tight mb-4 ${card.highlight ? "text-2xl md:text-3xl text-foreground" : "text-xl text-foreground/90"}`}>
                        {card.title}
                      </h3>
                      
                      <p className="text-foreground/60 font-medium leading-relaxed">
                        {card.desc}
                      </p>

                      <div className="mt-8 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
                        <span className="text-[10px] font-bold uppercase tracking-widest">Learn More</span>
                        <ArrowRight size={14} />
                      </div>
                    </div>

                    {/* Highlight Border Glow */}
                    {card.highlight && (
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none" />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChoose;

