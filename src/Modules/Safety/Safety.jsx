import React from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Lock, 
  Eye, 
  MessageSquareOff, 
  FileText, 
  Hexagon,
  CheckCircle2,
  Shield
} from "lucide-react";

const Safety = () => {
  const features = [
    {
      title: "Platform-native communication only",
      icon: <MessageSquareOff />,
    },
    {
      title: "No peer-to-peer messaging",
      icon: <Lock />,
    },
    {
      title: "Full educator moderation & visibility",
      icon: <Eye />,
    },
    {
      title: "Curriculum boundaries enforced",
      icon: <FileText />,
    },
    {
      title: "Comprehensive activity audit trails",
      icon: <ShieldCheck />,
    },
    {
      title: "Student-first AI architecture",
      icon: <Hexagon />,
    },
  ];

  return (
    <section id="safety" className="py-24 bg-background relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,var(--primary)_0%,transparent_70%)] opacity-[0.03]"
        />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black mb-6 uppercase tracking-[0.3em]"
          >
            <Shield size={14} className="fill-primary" />
            Zero-Risk Architecture
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6 tracking-tighter leading-[1.1] max-w-4xl">
            Enterprise-Grade Safety, <br className="hidden md:block" /> Fully Institution-Aligned
          </h2>
          <p className="text-foreground/50 max-w-3xl mx-auto text-base md:text-xl leading-relaxed font-medium">
            Institutional leadership can operate with complete confidence. Kiddo Shadow prioritizes student protection through multi-layered security controls.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full flex items-center gap-5 bg-card/40 backdrop-blur-xl border border-primary/5 rounded-[1.5rem] p-6 hover:bg-card hover:border-primary/30 transition-all duration-500 hover:shadow-xl relative overflow-hidden">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/5 to-primary/20 flex items-center justify-center text-primary shrink-0 group-hover:scale-105 transition-all duration-500 border border-primary/10 shadow-md">
                  {React.cloneElement(feature.icon, { size: 20 })}
                </div>
                <h3 className="text-base md:text-lg font-bold text-foreground tracking-tight leading-snug group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                {/* Accent glow */}
                <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-primary/5 blur-[40px] rounded-full group-hover:bg-primary/10 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Principal-Approved Premium Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="bg-card/60 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-1 overflow-hidden shadow-2xl relative">
            <div className="calm-gradient rounded-[2.4rem] p-8 md:p-14 relative overflow-hidden">
              {/* Background Glass Pattern */}
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay" />
              
              <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 text-center lg:text-left">
                <div className="relative shrink-0">
                   <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-2xl relative z-10 animate-spin-slow">
                     <CheckCircle2 size={40} className="text-white" />
                   </div>
                   <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full scale-150 animate-pulse" />
                </div>
                
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                    Institutional Standard
                  </div>
                  <h4 className="text-2xl md:text-4xl font-black text-white mb-4 tracking-tight leading-[1.1]">Principal-Approved & <br className="hidden md:block" /> Secure by Design</h4>
                  <p className="text-white/80 text-base md:text-lg leading-relaxed font-medium max-w-2xl">
                    Every feature is designed with school management in mind. Full control over 
                    what students can access and complete visibility into all activities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Safety;
