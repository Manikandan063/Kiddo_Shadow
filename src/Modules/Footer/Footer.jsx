import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight, Github, Twitter, Linkedin, Globe } from "lucide-react";

const Footer = ({ 
  onOpenTerms, 
  onOpenPrivacy, 
  onOpenAcceptableUse, 
  onOpenContentPolicy, 
  onOpenCookiePolicy, 
  onOpenDPA, 
  onOpenEULA,
  onOpenRefunds,
  onOpenDisclaimer 
}) => {
  const companyLinks = [
    { name: "About Kiddo Shadow", href: "#" },
    { name: "Features", href: "#features" },
    { name: "Safety & Security", href: "#safety" },
    { name: "Privacy Policy", onClick: onOpenPrivacy },
    { name: "Terms & Conditions", onClick: onOpenTerms },
  ];

  const legalLinks = [
    { name: "Privacy Policy", onClick: onOpenPrivacy },
    { name: "Terms & Conditions", onClick: onOpenTerms },
    { name: "Acceptable Use Policy", onClick: onOpenAcceptableUse },
    { name: "Content Policy", onClick: onOpenContentPolicy },
    { name: "Cookie Policy", onClick: onOpenCookiePolicy },
    { name: "DPA", onClick: onOpenDPA },
    { name: "EULA", onClick: onOpenEULA },
    { name: "Payment & Refunds", onClick: onOpenRefunds },
    { name: "Legal Disclaimer", onClick: onOpenDisclaimer }
  ];

  return (
    <footer className="relative pt-24 pb-12 overflow-hidden bg-background border-t border-white/5">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full translate-x-1/4 translate-y-1/4" />
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute inset-0 bg-grid opacity-[0.02]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 mb-20">
          {/* Brand Info Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="flex flex-col items-start gap-6">
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/30 blur-lg rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white font-black text-2xl shadow-xl shadow-primary/20">
                    K
                  </div>
                </div>
                <span className="text-2xl font-bold tracking-tighter text-foreground uppercase">
                  Kiddo <span className="text-primary italic">Shadow</span>
                </span>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                AI-powered smart learning platform designed exclusively for Indian schools. Safe, controlled, and syllabus-aligned education technology.
              </p>
              
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/5 text-primary text-[10px] font-bold uppercase tracking-widest">
                <Globe size={14} className="animate-pulse" />
                Available Across Tamil Nadu & India
              </div>
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-xs font-bold text-foreground uppercase tracking-[0.3em] mb-8 flex items-center gap-2">
              <span className="w-4 h-[1px] bg-primary" />
              Company
            </h4>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  {link.onClick ? (
                    <button 
                      onClick={link.onClick}
                      className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-all text-sm font-medium"
                    >
                      <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link.name}
                    </button>
                  ) : (
                    <a href={link.href} className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-all text-sm font-medium">
                      <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-xs font-bold text-foreground uppercase tracking-[0.3em] mb-8 flex items-center gap-2">
              <span className="w-4 h-[1px] bg-primary" />
              Contact
            </h4>
            <ul className="space-y-6">
              {[
                { icon: <Mail size={16} />, text: "info@xtown.in", sub: "Official Email" },
                { icon: <Phone size={16} />, text: "+91 90926 66288", sub: "Primary Support" },
                { icon: <Phone size={16} />, text: "+91 97525 40403", sub: "Secondary Contact" },
                { icon: <MapPin size={16} />, text: "Coimbatore, Tamil Nadu", sub: "Regional Office" }
              ].map((item, i) => (
                <li key={i} className="group flex items-start gap-4 cursor-pointer">
                  <div className="mt-1 w-8 h-8 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary group-hover:border-primary/20 transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{item.text}</p>
                    <p className="text-[10px] text-muted-foreground/50 uppercase font-bold tracking-widest">{item.sub}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Legal Links Marquee/Grid */}
        <div className="pt-12 border-t border-white/5 space-y-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-4 opacity-30 hover:opacity-100 transition-opacity">
            {legalLinks.map((link) => (
              link.onClick ? (
                <button 
                  key={link.name} 
                  onClick={link.onClick}
                  className="text-[10px] font-bold text-center uppercase tracking-widest hover:text-primary transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                >
                  {link.name}
                </button>
              ) : (
                <a key={link.name} href={link.href} className="text-[10px] font-bold text-center uppercase tracking-widest hover:text-primary transition-colors whitespace-nowrap overflow-hidden text-ellipsis">
                  {link.name}
                </a>
              )
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-8">
            <div className="flex items-center gap-6 text-muted-foreground/40">
              <Twitter size={18} className="hover:text-primary transition-colors cursor-pointer" />
              <Linkedin size={18} className="hover:text-primary transition-colors cursor-pointer" />
              <Github size={18} className="hover:text-primary transition-colors cursor-pointer" />
            </div>
            
            <div className="text-muted-foreground/20 text-[10px] font-bold uppercase tracking-[0.3em] order-last md:order-none">
              &copy; 2026 Kiddo Shadow. Engineered by XTown.
            </div>

            <div className="flex items-center gap-4 text-muted-foreground/40 text-[10px] font-bold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              System Status: Operational
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
