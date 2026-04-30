import React, { useState } from "react";
import { motion } from "framer-motion";
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
    alert("Thank you! Your enquiry has been received. Our team will contact you soon.");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent hideClose className="w-[95%] sm:max-w-[650px] bg-background/80 backdrop-blur-3xl text-foreground rounded-[2.5rem] overflow-hidden p-0 shadow-3xl outline-none border border-foreground/10 max-h-[95vh] overflow-y-auto">
        {/* Animated Background Orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[100px] rounded-full animate-pulse-slow" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-secondary/5 blur-[80px] rounded-full" />
        </div>

        <div className="flex flex-col relative z-10 p-8 sm:p-14">
          <DialogClose className="absolute right-8 top-8 z-50 p-2 rounded-2xl bg-foreground/5 hover:bg-foreground/10 border border-foreground/10 text-foreground/40 hover:text-foreground transition-all duration-300">
            <X size={20} />
          </DialogClose>

          {/* Logo Section */}
          <div className="flex justify-center mb-10">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="h-16 lg:h-20 flex items-center justify-center p-2 rounded-2xl bg-foreground/[0.02] border border-border/50 backdrop-blur-md shadow-xl"
            >
               <img 
                 src={navLogo} 
                 alt="Kiddo Shadow Logo" 
                 className="h-full w-auto object-contain filter drop-shadow-[0_0_15px_hsla(var(--primary)/0.2)]" 
               />
            </motion.div>
          </div>

          <DialogHeader className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-4 mx-auto">
              <Sparkles size={12} className="fill-current" />
              Institutional Demo
            </div>
            <DialogTitle className="text-3xl sm:text-4xl font-black text-foreground tracking-tight mb-3">
              Book a <span className="text-gradient-neon">Free Demo</span>
            </DialogTitle>
            <DialogDescription className="text-foreground/40 text-base md:text-lg font-medium leading-relaxed max-w-md mx-auto">
              Fill in the details below to schedule a personalized demo for your school.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {/* School Name */}
              <div className="space-y-3 group">
                <Label htmlFor="schoolName" className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/20 group-focus-within:text-primary transition-colors flex items-center gap-2 ml-1">
                  <Building2 size={12} />
                  School Name
                </Label>
                <Input
                  id="schoolName"
                  placeholder="Enter school name"
                  className="bg-foreground/[0.03] border-foreground/10 text-foreground focus:border-primary/50 focus:ring-8 focus:ring-primary/5 h-15 rounded-2xl placeholder:text-foreground/10 transition-all text-sm font-bold shadow-inner"
                  required
                  value={formData.schoolName}
                  onChange={handleChange}
                />
              </div>

              {/* Contact Person */}
              <div className="space-y-3 group">
                <Label htmlFor="contactPerson" className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/20 group-focus-within:text-primary transition-colors flex items-center gap-2 ml-1">
                  <User size={12} />
                  Contact Person
                </Label>
                <Input
                  id="contactPerson"
                  placeholder="Enter contact person name"
                  className="bg-foreground/[0.03] border-foreground/10 text-foreground focus:border-primary/50 focus:ring-8 focus:ring-primary/5 h-15 rounded-2xl placeholder:text-foreground/10 transition-all text-sm font-bold shadow-inner"
                  required
                  value={formData.contactPerson}
                  onChange={handleChange}
                />
              </div>

              {/* Mobile & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3 group">
                  <Label htmlFor="mobileNumber" className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/20 group-focus-within:text-primary transition-colors flex items-center gap-2 ml-1">
                    <Phone size={12} />
                    Mobile Number
                  </Label>
                  <Input
                    id="mobileNumber"
                    placeholder="Enter mobile number"
                    className="bg-foreground/[0.03] border-foreground/10 text-foreground focus:border-primary/50 focus:ring-8 focus:ring-primary/5 h-15 rounded-2xl placeholder:text-foreground/10 transition-all text-sm font-bold shadow-inner"
                    required
                    type="tel"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-3 group">
                  <Label htmlFor="emailId" className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/20 group-focus-within:text-primary transition-colors flex items-center gap-2 ml-1">
                    <Mail size={12} />
                    Email ID
                  </Label>
                  <Input
                    id="emailId"
                    placeholder="Enter email address"
                    className="bg-foreground/[0.03] border-foreground/10 text-foreground focus:border-primary/50 focus:ring-8 focus:ring-primary/5 h-15 rounded-2xl placeholder:text-foreground/10 transition-all text-sm font-bold shadow-inner"
                    required
                    type="email"
                    value={formData.emailId}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Location & Students Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3 group">
                  <Label htmlFor="location" className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/20 group-focus-within:text-primary transition-colors flex items-center gap-2 ml-1">
                    <Globe size={12} />
                    Location / District
                  </Label>
                  <Input
                    id="location"
                    placeholder="City or District"
                    className="bg-foreground/[0.03] border-foreground/10 text-foreground focus:border-primary/50 focus:ring-8 focus:ring-primary/5 h-15 rounded-2xl placeholder:text-foreground/10 transition-all text-sm font-bold shadow-inner"
                    required
                    value={formData.location}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-3 group">
                  <Label htmlFor="students" className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/20 group-focus-within:text-primary transition-colors flex items-center gap-2 ml-1">
                    <Zap size={12} />
                    Approx. Students
                  </Label>
                  <Input
                    id="students"
                    placeholder="e.g. 500"
                    className="bg-foreground/[0.03] border-foreground/10 text-foreground focus:border-primary/50 focus:ring-8 focus:ring-primary/5 h-15 rounded-2xl placeholder:text-foreground/10 transition-all text-sm font-bold shadow-inner"
                    required
                    value={formData.students}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Button 
                type="submit" 
                className="w-full h-18 bg-gradient-to-br from-primary to-orange-600 text-white font-black text-lg rounded-2xl hover:scale-[1.03] active:scale-[0.97] transition-all duration-500 shadow-2xl shadow-primary/30 border-none group flex items-center justify-center gap-4"
              >
                Submit Enquiry
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Button>
              <p className="text-center mt-6 text-foreground/20 text-[9px] font-black uppercase tracking-[0.4em]">
                Secure Transmission • Professional Deployment
              </p>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DemoModal;
