import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Zap, ArrowRight, Mail, MessageSquare, Shield } from "lucide-react";

const Contact = ({ onOpenDemo }) => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-[3.5rem] border-white/5 bg-white/[0.02] p-12 md:p-20 relative overflow-hidden text-center group max-w-6xl mx-auto"
        >
          {/* Immersive Background Glows */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none opacity-0 group-hover:opacity-50 transition-opacity duration-1000" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none opacity-0 group-hover:opacity-30 transition-opacity duration-1000" />

          <div className="relative z-10 max-w-4xl mx-auto">
            {/* Dynamic Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-10 shadow-2xl"
            >
              <Phone size={14} className="fill-current" />
              Start Your Transformation
            </motion.div>

            <h2 className="text-4xl md:text-7xl font-black text-foreground mb-8 tracking-tighter leading-[0.95]">
              Launch Kiddo Shadow at <br /> 
              <span className="text-gradient-neon filter saturate-[1.2]">Your Institution</span>
            </h2>
            
            <p className="text-foreground/40 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
              Schedule a personalized walkthrough to see how Kiddo Shadow delivers secure, curriculum-aligned AI learning across your institution.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16">
              <Button
                size="lg"
                className="h-16 px-10 rounded-2xl bg-primary text-white font-black text-lg hover:scale-105 active:scale-95 transition-all shadow-[0_0_50px_hsla(var(--primary)/0.4)] flex items-center gap-4 border-none"
                onClick={onOpenDemo}
              >
                Request a Free Demo <ArrowRight size={20} />
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="h-16 px-10 rounded-2xl bg-white/[0.03] border-white/10 text-foreground font-black text-lg hover:bg-white/[0.08] transition-all flex items-center gap-4 backdrop-blur-xl group"
                onClick={() => window.location.href = "tel:+919092666288"}
              >
                <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary group-hover:rotate-12 transition-transform">
                  <Phone size={14} fill="currentColor" />
                </div>
                Call Us: +91 90926 66288
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 pt-10 border-t border-white/5 text-foreground/20 text-[9px] font-black uppercase tracking-[0.3em]">
              <span>No commitment required</span>
              <span className="w-1 h-1 rounded-full bg-white/10 hidden sm:block" />
              <span>Free pilot program available</span>
              <span className="w-1 h-1 rounded-full bg-white/10 hidden sm:block" />
              <span>Demos available across Tamil Nadu & India</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};


// Internal Star mock
const Star = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export default Contact;
