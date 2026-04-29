import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const companyLinks = [
    { name: "About Kiddo Shadow", href: "#" },
    { name: "Features", href: "#features" },
    { name: "Safety & Security", href: "#safety" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms & Conditions", href: "#" },
  ];

  const legalLinks = [
    "Privacy Policy",
    "Terms & Conditions",
    "Acceptable Use Policy",
    "Content Policy",
    "Cookie Policy",
    "DPA",
    "EULA",
    "Payment & Refunds",
    "Legal Disclaimer"
  ];

  return (
    <footer className="relative pt-32 pb-12 overflow-hidden bg-background border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-black text-xl shadow-2xl shadow-primary/20">
                K
              </div>
              <span className="text-xl font-black tracking-tight text-foreground uppercase">
                Kiddo <span className="text-primary">Shadow</span>
              </span>
            </div>
            <p className="text-foreground/40 text-lg leading-relaxed font-medium mb-8 max-w-md">
              AI-powered smart learning platform designed exclusively for Indian schools. Safe, controlled, and syllabus-aligned education technology.
            </p>
            <div className="text-primary/60 text-sm font-black uppercase tracking-widest">
              Available for demos across Tamil Nadu & India
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-black text-foreground uppercase tracking-[0.2em] mb-8">Company</h4>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-foreground/40 hover:text-primary text-sm font-medium transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-black text-foreground uppercase tracking-[0.2em] mb-8">Contact</h4>
            <ul className="space-y-5">
              <li className="flex items-center gap-4 text-foreground/40 hover:text-primary transition-colors cursor-pointer group">
                <Mail size={16} className="text-primary" />
                <span className="text-sm font-medium">info@xtown.in</span>
              </li>
              <li className="flex items-center gap-4 text-foreground/40 hover:text-primary transition-colors cursor-pointer group">
                <Phone size={16} className="text-primary" />
                <span className="text-sm font-medium">+91 90926 66288</span>
              </li>
              <li className="flex items-center gap-4 text-foreground/40 hover:text-primary transition-colors cursor-pointer group">
                <Phone size={16} className="text-primary" />
                <span className="text-sm font-medium">+91 97525 40403</span>
              </li>
              <li className="flex items-center gap-4 text-foreground/40 hover:text-primary transition-colors cursor-pointer group">
                <MapPin size={16} className="text-primary" />
                <span className="text-sm font-medium">Coimbatore, Tamil Nadu</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-foreground/20 text-[11px] font-black uppercase tracking-widest order-2 lg:order-1">
            &copy; 2026 Kiddo Shadow. All rights reserved.
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 order-1 lg:order-2">
            {legalLinks.map((link) => (
              <a key={link} href="#" className="text-foreground/20 hover:text-primary text-[10px] font-black uppercase tracking-widest transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
