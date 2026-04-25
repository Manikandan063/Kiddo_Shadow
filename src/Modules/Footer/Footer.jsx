import React from "react";
import { Link } from "react-scroll";
import { Mail, Phone, MapPin, ArrowRight, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#050505] pt-24 pb-12 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-16 mb-20">
          {/* Column 1: Brand Info */}
          <div className="md:col-span-5 space-y-8">
            <div 
              className="flex items-center gap-3 cursor-pointer group w-fit"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-black text-xl shadow-lg shadow-primary/20">
                K
              </div>
              <div className="flex items-center tracking-tighter text-xl font-bold text-white">
                <span>Kiddo Shadow</span>
              </div>
            </div>
            
            <p className="text-white/40 text-sm leading-relaxed max-w-sm font-medium">
              AI-powered smart learning platform designed exclusively for Indian schools. 
              Safe, controlled, and syllabus-aligned education technology.
            </p>

            <p className="text-primary text-[10px] font-black uppercase tracking-widest">
              Available for demos across Tamil Nadu & India
            </p>
          </div>

          {/* Column 2: Company */}
          <div className="md:col-span-3">
            <h4 className="text-white font-bold mb-8 text-sm">Company</h4>
            <ul className="space-y-4">
              {[
                { name: "About Kiddo Shadow", to: "hero" },
                { name: "Features", to: "modules" },
                { name: "Safety & Security", to: "safety" },
                { name: "Privacy Policy", to: "privacy" },
                { name: "Terms & Conditions", to: "terms" }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.to} 
                    smooth={true} 
                    className="text-white/40 hover:text-white transition-all text-xs font-medium cursor-pointer"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="md:col-span-4">
            <h4 className="text-white font-bold mb-8 text-sm">Contact</h4>
            <div className="space-y-4">
              <a href="mailto:info@xtown.in" className="flex items-center gap-3 text-white/40 text-xs group hover:text-white transition-colors font-medium">
                <Mail size={14} className="text-primary" />
                info@xtown.in
              </a>
              <a href="tel:+919092666288" className="flex items-center gap-3 text-white/40 text-xs group hover:text-white transition-colors font-medium">
                <Phone size={14} className="text-primary" />
                +91 90926 66288
              </a>
              <a href="tel:+919752540403" className="flex items-center gap-3 text-white/40 text-xs group hover:text-white transition-colors font-medium">
                <Phone size={14} className="text-primary" />
                +91 97525 40403
              </a>
              <div className="flex items-start gap-3 text-white/40 text-xs font-medium">
                <MapPin size={14} className="text-primary" />
                <span>Coimbatore, Tamil Nadu</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col xl:flex-row justify-between items-center gap-8">
          <p className="text-white/20 text-[10px] font-medium">
            © 2026 Kiddo Shadow. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center xl:justify-end gap-x-6 gap-y-2">
            {[
              "Privacy Policy", 
              "Terms & Conditions", 
              "Acceptable Use Policy", 
              "Content Policy", 
              "Cookie Policy", 
              "DPA", 
              "EULA", 
              "Payment & Refunds", 
              "Legal Disclaimer"
            ].map((link) => (
              <a 
                key={link} 
                href="#" 
                className="text-white/20 hover:text-white transition-colors text-[10px] font-medium"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};;

export default Footer;
