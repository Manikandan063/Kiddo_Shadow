import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Zap, ArrowRight } from "lucide-react";

const Contact = ({ onOpenDemo }) => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          className="calm-gradient rounded-[2rem] p-8 md:p-12 text-center relative overflow-hidden shadow-2xl max-w-4xl mx-auto border border-white/10 group"
        >
          {/* Enhanced background elements */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />

          <div className="relative z-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-[9px] font-black mb-6 backdrop-blur-md uppercase tracking-[0.3em]"
            >
              <Zap size={12} className="fill-white" />
              Ready to Transform
            </motion.div>

            <h2 className="text-2xl md:text-4xl font-black text-white mb-4 tracking-tighter leading-[1.1] max-w-2xl mx-auto">
              Launch Your AI <br className="hidden md:block" /> Journey Today
            </h2>
            
            <p className="text-white/70 text-sm md:text-base mb-8 max-w-xl mx-auto leading-relaxed font-medium">
              Schedule a personalized walkthrough to see how Kiddo Shadow delivers secure, curriculum-aligned AI learning.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
              <Button
                size="lg"
                className="relative bg-white text-primary hover:bg-white/95 px-6 py-6 text-sm rounded-xl font-black shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center gap-2 group/btn overflow-hidden"
                onClick={onOpenDemo}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover/btn:animate-shine" />
                <span className="relative z-10">Get Free Demo</span>
                <ArrowRight size={16} className="relative z-10 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 px-6 py-6 text-sm rounded-xl font-black transition-all flex items-center gap-2 backdrop-blur-xl group/call"
                onClick={() => window.location.href = "tel:+919092666288"}
              >
                <Phone size={16} className="group-hover/call:rotate-6 transition-transform" />
                +91 90926 66288
              </Button>
            </div>

            <p className="text-white/40 text-[9px] font-black tracking-[0.2em] uppercase">
              No commitment required • Free institutional pilot available
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
