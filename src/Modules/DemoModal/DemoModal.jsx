import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sparkles, Building2, User, Phone, Mail, ArrowRight, X, ShieldCheck, Zap, Globe } from "lucide-react";

import navLogo from "@/assets/Navbar_Logo.png";

const DemoModal = ({ isOpen, setIsOpen }) => {
  const [formData, setFormData] = useState({
    schoolName: "",
    contactPerson: "",
    mobileNumber: "",
    emailId: "",
    location: "",
    students: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you! Your request has been received. Our team will contact you soon.");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent hideClose className="sm:max-w-[900px] bg-background text-foreground rounded-[3.5rem] overflow-hidden p-0 shadow-3xl outline-none border border-foreground/10">
        <div className="flex flex-col md:flex-row h-full min-h-[600px]">
          {/* Left Panel: High Fidelity Brand Area */}
          <div className="md:w-[360px] bg-foreground/[0.02] p-12 text-foreground relative overflow-hidden hidden md:flex flex-col justify-between border-r border-foreground/5">
            {/* Dynamic Background Glows */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/5 blur-[80px] rounded-full translate-y-1/2 translate-x-1/2 pointer-events-none" />
            
            <div className="relative z-10">
              <div className="h-16 flex items-center mb-12">
                <img 
                  src={navLogo} 
                  alt="Kiddo Shadow Logo" 
                  className="h-full w-auto object-contain filter drop-shadow-[0_0_10px_hsla(var(--primary)/0.3)]" 
                />
              </div>
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[9px] font-black uppercase tracking-[0.3em] mb-6">
                <Zap size={10} fill="currentColor" />
                Next-Gen Onboarding
              </div>
              
              <h3 className="text-3xl font-black mb-8 leading-[1.1] tracking-tight text-gradient-neon">Start Your AI Journey</h3>
              
              <div className="space-y-8">
                {[
                  { icon: ShieldCheck, text: "Institutional Privacy Core", sub: "Data never leaves school server" },
                  { icon: Zap, text: "Curriculum Synergy", sub: "CBSE & ICSE alignment" },
                  { icon: Globe, text: "Nationwide Support", sub: "Serving 200+ Institutions" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-foreground/5 flex items-center justify-center border border-foreground/10 group-hover:bg-primary/10 group-hover:text-primary transition-all shrink-0 shadow-lg">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground/80 group-hover:text-foreground transition-colors">{item.text}</p>
                      <p className="text-[10px] text-foreground/30 font-medium">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10">
              <div className="p-6 rounded-3xl bg-foreground/[0.03] border border-foreground/5 backdrop-blur-xl">
                <p className="text-[9px] font-black uppercase tracking-[0.3em] mb-2 text-foreground/20">Operational Readiness</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-foreground/60">System Status</span>
                  <span className="flex items-center gap-2 text-[10px] font-black text-primary">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    LIVE
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel: Premium Form */}
          <div className="flex-1 p-10 md:p-16 relative">
            <DialogClose className="absolute right-8 top-8 z-50 p-3 rounded-2xl bg-foreground/5 hover:bg-foreground/10 border border-foreground/10 text-foreground/20 hover:text-foreground transition-all shadow-xl">
              <X size={20} />
            </DialogClose>

            <DialogHeader className="mb-12">
              <DialogTitle className="text-3xl font-black text-foreground tracking-tight mb-3">
                Request <span className="text-primary">Institutional</span> Demo
              </DialogTitle>
              <DialogDescription className="text-foreground/30 text-lg font-medium leading-relaxed">
                Connect with our deployment specialists.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 gap-8">
                <div className="space-y-3 group">
                  <Label htmlFor="schoolName" className="text-foreground/20 text-[10px] uppercase tracking-[0.3em] font-black ml-1 flex items-center gap-2 group-focus-within:text-primary transition-colors">
                    <Building2 size={12} />
                    Institution Name
                  </Label>
                  <Input
                    id="schoolName"
                    placeholder="Enter school name"
                    className="bg-foreground/[0.03] border-foreground/10 text-foreground focus:border-primary/50 focus:ring-8 focus:ring-primary/5 h-14 rounded-2xl placeholder:text-foreground/10 transition-all text-sm font-bold shadow-inner"
                    required
                    value={formData.schoolName}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3 group">
                    <Label htmlFor="contactPerson" className="text-foreground/20 text-[10px] uppercase tracking-[0.3em] font-black ml-1 flex items-center gap-2 group-focus-within:text-primary transition-colors">
                      <User size={12} />
                      Full Name
                    </Label>
                    <Input
                      id="contactPerson"
                      placeholder="Principal / Admin Name"
                      className="bg-foreground/[0.03] border-foreground/10 text-foreground focus:border-primary/50 focus:ring-8 focus:ring-primary/5 h-14 rounded-2xl placeholder:text-foreground/10 transition-all text-sm font-bold shadow-inner"
                      required
                      value={formData.contactPerson}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-3 group">
                    <Label htmlFor="mobileNumber" className="text-foreground/20 text-[10px] uppercase tracking-[0.3em] font-black ml-1 flex items-center gap-2 group-focus-within:text-primary transition-colors">
                      <Phone size={12} />
                      Mobile Number
                    </Label>
                    <Input
                      id="mobileNumber"
                      placeholder="+91..."
                      className="bg-foreground/[0.03] border-foreground/10 text-foreground focus:border-primary/50 focus:ring-8 focus:ring-primary/5 h-14 rounded-2xl placeholder:text-foreground/10 transition-all text-sm font-bold shadow-inner"
                      required
                      type="tel"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-3 group">
                  <Label htmlFor="emailId" className="text-foreground/20 text-[10px] uppercase tracking-[0.3em] font-black ml-1 flex items-center gap-2 group-focus-within:text-primary transition-colors">
                    <Mail size={12} />
                    Institutional Email
                  </Label>
                  <Input
                    id="emailId"
                    placeholder="admin@school.com"
                    className="bg-foreground/[0.03] border-foreground/10 text-foreground focus:border-primary/50 focus:ring-8 focus:ring-primary/5 h-14 rounded-2xl placeholder:text-foreground/10 transition-all text-sm font-bold shadow-inner"
                    required
                    type="email"
                    value={formData.emailId}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full mt-10 calm-gradient hover:scale-[1.02] active:scale-[0.98] transition-all py-9 text-lg font-black rounded-3xl shadow-3xl shadow-primary/20 flex items-center justify-center gap-4 group text-white border border-foreground/10"
              >
                Schedule Deployment Talk
                <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
              </Button>
              
              <p className="text-center text-foreground/20 text-[9px] font-black uppercase tracking-[0.3em]">
                Secure Transmission • Privacy Guaranteed
              </p>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DemoModal;
