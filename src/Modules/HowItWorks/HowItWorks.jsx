import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle2
} from "lucide-react";

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState(0);

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
    <section id="how-it-works" className="py-32 relative overflow-hidden bg-background">
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

        {/* Interactive Dashboard Tabs Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 bg-foreground/[0.02] dark:bg-white/[0.01] border border-foreground/5 rounded-[3rem] p-4 md:p-8 min-h-[600px]">
          {/* Tabs Sidebar */}
          <div className="w-full lg:w-[400px] space-y-4">
            {steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setActiveTab(index)}
                className={`w-full text-left p-8 rounded-[2rem] transition-all duration-500 flex items-center gap-6 group relative overflow-hidden ${
                  activeTab === index 
                    ? "bg-background shadow-2xl border border-foreground/5" 
                    : "hover:bg-foreground/[0.03] dark:hover:bg-white/[0.03] border border-transparent"
                }`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-lg transition-all duration-500 ${
                  activeTab === index 
                    ? "bg-primary text-white scale-110 rotate-3 shadow-lg shadow-primary/30" 
                    : "bg-foreground/5 text-foreground/40 group-hover:bg-foreground/10"
                }`}>
                  {step.id}
                </div>
                <div>
                  <h4 className={`text-xl font-bold transition-colors ${
                    activeTab === index ? "text-foreground" : "text-foreground/40 group-hover:text-foreground/60"
                  }`}>
                    {step.title}
                  </h4>
                  <div className={`h-1 w-12 mt-2 rounded-full transition-all duration-500 ${
                    activeTab === index ? "bg-primary w-20" : "bg-foreground/5 w-0"
                  }`} />
                </div>
                {activeTab === index && (
                  <div className="absolute right-8 text-primary">
                    <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Tab Content Display */}
          <div className="flex-1 bg-background/50 backdrop-blur-md rounded-[2.5rem] border border-foreground/5 p-10 md:p-16 relative overflow-hidden flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className="space-y-12"
              >
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest">
                    Phase {steps[activeTab].id}
                  </div>
                  <h3 className="text-4xl md:text-6xl font-black text-foreground tracking-tighter leading-none">
                    {steps[activeTab].title}
                  </h3>
                  <p className="text-foreground/60 text-xl md:text-2xl leading-relaxed font-medium max-w-3xl">
                    {steps[activeTab].desc}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {steps[activeTab].pills.map((pill, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-4 p-5 rounded-2xl bg-foreground/[0.03] border border-foreground/5 text-sm font-bold text-foreground/60"
                    >
                      <CheckCircle2 size={18} className="text-primary" />
                      {pill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Decorative Background Accent */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
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

