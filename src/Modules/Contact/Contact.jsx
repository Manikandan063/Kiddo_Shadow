import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, ShieldCheck, Sparkles, Zap, Globe, MessageSquare, Star, Users, School, GraduationCap, Building2, Library } from "lucide-react";

const Contact = ({ onOpenDemo }) => {
  return (
    <section id="contact" className="py-24 md:py-40 relative overflow-hidden bg-background">
      {/* Premium Theme Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-primary/10 blur-[120px] rounded-full translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-primary/5 blur-[100px] rounded-full -translate-x-1/4 translate-y-1/4" />
        <div className="absolute inset-0 bg-grid opacity-[0.02]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 xl:gap-24">
          
          {/* Left: Content Strategy */}
          <div className="w-full lg:w-[55%]">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] font-bold uppercase tracking-[0.2em] mb-8">
                <Sparkles size={14} />
                Start Your Transformation
              </div>

              <h2 className="text-5xl md:text-8xl font-bold text-foreground mb-8 tracking-tighter leading-[0.95]">
                Launch <span className="text-primary">Kiddo</span> Shadow at <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground/90 to-foreground/50">Your Institution</span>
              </h2>
              
              <p className="text-muted-foreground text-lg md:text-xl mb-12 max-w-xl leading-relaxed">
                Schedule a personalized walkthrough to see how Kiddo Shadow delivers secure, curriculum-aligned AI learning across your institution.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-8">
                <Button
                  size="lg"
                  className="group h-16 px-10 rounded-2xl bg-primary text-white font-bold text-lg hover:scale-[1.02] active:scale-95 transition-all shadow-[0_20px_40px_rgba(255,140,50,0.3)] border-none flex items-center gap-3 relative overflow-hidden"
                  onClick={onOpenDemo}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Request a Free Demo 
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>

                <div className="flex flex-col gap-3 pt-2">
                   <div className="flex -space-x-2">
                      {[School, GraduationCap, Building2, Library].map((Icon, i) => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-white/5 backdrop-blur-md flex items-center justify-center text-primary/60">
                          <Icon size={18} />
                        </div>
                      ))}
                      <div className="w-10 h-10 rounded-full border-2 border-background bg-primary/20 flex items-center justify-center text-primary text-[10px] font-black">
                        50+
                      </div>
                   </div>
                   <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest">
                      Trusted by Leading Educational Institutions
                   </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Floating Contact Hub */}
          <div className="w-full lg:w-[45%] relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, type: "spring", bounce: 0.3 }}
              className="relative"
            >
              {/* Decorative Orb Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/30 blur-[100px] rounded-full animate-pulse-slow -z-10" />
              
              {/* Main Contact Card */}
              <div className="glass-card p-8 md:p-10 border-white/10 dark:bg-white/[0.03] backdrop-blur-2xl rounded-[3rem] shadow-2xl relative group overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
                  <MessageSquare size={120} className="text-primary -rotate-12" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary border border-primary/20">
                      <Users size={24} />
                    </div>
                    <div>
                      <h4 className="text-foreground font-bold text-xl tracking-tight">Direct Support</h4>
                      <p className="text-muted-foreground text-sm">Get in touch with our AI experts</p>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ y: -5, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => window.location.href = "tel:+919092666288"}
                    className="w-full bg-primary/10 hover:bg-primary/20 border border-primary/20 rounded-3xl p-6 flex items-center justify-between transition-all group/btn mb-6"
                  >
                    <div className="flex items-center gap-5">
                       <div className="relative">
                          <div className="absolute inset-0 bg-primary/40 blur-md rounded-full animate-pulse" />
                          <div className="relative w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white group-hover/btn:rotate-12 transition-transform">
                            <Phone size={20} fill="currentColor" />
                          </div>
                       </div>
                       <div className="text-left">
                         <p className="text-primary/60 text-[9px] font-bold uppercase tracking-widest">Immediate Call</p>
                         <p className="text-foreground text-xl font-bold tracking-tight">+91 90926 66288</p>
                       </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover/btn:bg-primary/20 transition-colors">
                      <ArrowRight size={20} className="text-muted-foreground group-hover/btn:text-primary transition-colors" />
                    </div>
                  </motion.button>

                  <div className="grid grid-cols-2 gap-4">
                     <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-5 hover:bg-white/[0.05] transition-colors">
                        <ShieldCheck className="text-primary mb-3" size={24} />
                        <p className="text-foreground font-bold text-sm mb-1">Safe & Secure</p>
                        <p className="text-muted-foreground text-[10px] leading-tight">Institutional grade protection</p>
                     </div>
                     <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-5 hover:bg-white/[0.05] transition-colors">
                        <Star className="text-primary mb-3" size={24} fill="currentColor" />
                        <p className="text-foreground font-bold text-sm mb-1">Top Rated</p>
                        <p className="text-muted-foreground text-[10px] leading-tight">Trusted AI for education</p>
                     </div>
                  </div>
                </div>
              </div>

              {/* Floating Accents */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 w-20 h-20 bg-primary/20 blur-[30px] rounded-full" 
              />
            </motion.div>
          </div>

        </div>

        {/* Bottom: Modern Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 pt-10 border-t border-border/50 flex flex-wrap justify-between items-center gap-8"
        >
          <div className="flex items-center gap-8 text-muted-foreground/30">
            {[
              { icon: <Zap size={20} />, text: "No commitment" },
              { icon: <Globe size={20} />, text: "India-wide Demos" },
              { icon: <ShieldCheck size={20} />, text: "Secure Pilot" }
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-3 group">
                 <div className="group-hover:text-primary transition-colors">{badge.icon}</div>
                 <span className="text-[10px] font-bold uppercase tracking-[0.2em] group-hover:text-foreground transition-colors">{badge.text}</span>
              </div>
            ))}
          </div>
          
          <div className="hidden md:block">
             <span className="text-foreground/5 text-6xl font-black italic tracking-tighter uppercase select-none">
                KiddoShadow
             </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
