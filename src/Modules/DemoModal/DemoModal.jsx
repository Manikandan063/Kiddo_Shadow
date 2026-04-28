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
import { Sparkles, Building2, User, Phone, Mail, MapPin, Users2, ArrowRight, X, ShieldCheck, Zap, Globe } from "lucide-react";

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
      <DialogContent hideClose className="sm:max-w-[850px] bg-card text-foreground rounded-[2.5rem] overflow-hidden p-0 shadow-2xl outline-none border-none border border-primary/10">
        <div className="flex flex-col md:flex-row h-full">
          {/* Left Panel: Value Proposition */}
          <div className="md:w-[320px] calm-gradient p-10 text-white relative overflow-hidden hidden md:flex flex-col justify-between">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)]" />
              <div className="grid grid-cols-6 gap-4 p-4">
                {[...Array(24)].map((_, i) => <div key={i} className="w-1 h-1 bg-white rounded-full" />)}
              </div>
            </div>

            <div className="relative z-10">
              <div className="h-28 flex items-center mb-8">
                <img 
                  src={navLogo} 
                  alt="Kiddo Shadow Logo" 
                  className="h-full w-auto object-contain" 
                />
              </div>
              <h3 className="text-2xl font-bold mb-6 leading-tight">Start Your Institution's AI Journey</h3>
              <div className="space-y-6">
                {[
                  { icon: ShieldCheck, text: "Privacy-first architecture" },
                  { icon: Zap, text: "Instant curriculum alignment" },
                  { icon: Globe, text: "Available across India" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center border border-white/10 group-hover:bg-white/20 transition-all">
                      <item.icon size={16} />
                    </div>
                    <span className="text-sm font-medium opacity-90">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 pt-10">
              <div className="bg-white/10 rounded-2xl p-4 border border-white/10 backdrop-blur-sm">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-1 opacity-60">Trusted By</p>
                <p className="text-sm font-black">200+ Institutions</p>
              </div>
            </div>
          </div>

          {/* Right Panel: Form */}
          <div className="flex-1 p-8 md:p-10 relative bg-card">
            {/* Custom Close Button */}
            <DialogClose className="absolute right-6 top-6 z-50 p-2 rounded-full bg-muted/50 hover:bg-muted border border-border text-foreground/40 hover:text-foreground transition-all">
              <X size={18} />
            </DialogClose>

            <DialogHeader className="mb-8">
              <DialogTitle className="text-2xl font-black text-foreground tracking-tight mb-2">
                Get Your Free Demo
              </DialogTitle>
              <DialogDescription className="text-foreground/50 text-sm font-medium">
                Fill out the form and our expert team will schedule a walkthrough.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-5">
                <div className="space-y-2 group">
                  <Label htmlFor="schoolName" className="text-foreground/40 text-[10px] uppercase tracking-[0.2em] font-bold ml-1 flex items-center gap-2 group-focus-within:text-primary transition-colors">
                    <Building2 size={12} />
                    School Name
                  </Label>
                  <Input
                    id="schoolName"
                    placeholder="Enter institution name"
                    className="bg-muted/30 border-primary/5 text-foreground focus:border-primary/50 focus:ring-4 focus:ring-primary/5 h-12 rounded-2xl placeholder:text-foreground/20 transition-all text-sm font-semibold"
                    required
                    value={formData.schoolName}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2 group">
                    <Label htmlFor="contactPerson" className="text-foreground/40 text-[10px] uppercase tracking-[0.2em] font-bold ml-1 flex items-center gap-2 group-focus-within:text-primary transition-colors">
                      <User size={12} />
                      Full Name
                    </Label>
                    <Input
                      id="contactPerson"
                      placeholder="Contact person"
                      className="bg-muted/30 border-primary/5 text-foreground focus:border-primary/50 focus:ring-4 focus:ring-primary/5 h-12 rounded-2xl placeholder:text-foreground/20 transition-all text-sm font-semibold"
                      required
                      value={formData.contactPerson}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2 group">
                    <Label htmlFor="mobileNumber" className="text-foreground/40 text-[10px] uppercase tracking-[0.2em] font-bold ml-1 flex items-center gap-2 group-focus-within:text-primary transition-colors">
                      <Phone size={12} />
                      Mobile Number
                    </Label>
                    <Input
                      id="mobileNumber"
                      placeholder="+91..."
                      className="bg-muted/30 border-primary/5 text-foreground focus:border-primary/50 focus:ring-4 focus:ring-primary/5 h-12 rounded-2xl placeholder:text-foreground/20 transition-all text-sm font-semibold"
                      required
                      type="tel"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-2 group">
                  <Label htmlFor="emailId" className="text-foreground/40 text-[10px] uppercase tracking-[0.2em] font-bold ml-1 flex items-center gap-2 group-focus-within:text-primary transition-colors">
                    <Mail size={12} />
                    Email Address
                  </Label>
                  <Input
                    id="emailId"
                    placeholder="admin@school.com"
                    className="bg-muted/30 border-primary/5 text-foreground focus:border-primary/50 focus:ring-4 focus:ring-primary/5 h-12 rounded-2xl placeholder:text-foreground/20 transition-all text-sm font-semibold"
                    required
                    type="email"
                    value={formData.emailId}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2 group">
                    <Label htmlFor="location" className="text-foreground/40 text-[10px] uppercase tracking-[0.2em] font-bold ml-1 flex items-center gap-2 group-focus-within:text-primary transition-colors">
                      <MapPin size={12} />
                      Location
                    </Label>
                    <Input
                      id="location"
                      placeholder="City"
                      className="bg-muted/30 border-primary/5 text-foreground focus:border-primary/50 focus:ring-4 focus:ring-primary/5 h-12 rounded-2xl placeholder:text-foreground/20 transition-all text-sm font-semibold"
                      required
                      value={formData.location}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2 group">
                    <Label htmlFor="students" className="text-foreground/40 text-[10px] uppercase tracking-[0.2em] font-bold ml-1 flex items-center gap-2 group-focus-within:text-primary transition-colors">
                      <Users2 size={12} />
                      Approx Students
                    </Label>
                    <Input
                      id="students"
                      placeholder="e.g. 500+"
                      className="bg-muted/30 border-primary/5 text-foreground focus:border-primary/50 focus:ring-4 focus:ring-primary/5 h-12 rounded-2xl placeholder:text-foreground/20 transition-all text-sm font-semibold"
                      required
                      value={formData.students}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full mt-6 calm-gradient hover:scale-[1.02] active:scale-[0.98] transition-all py-7 text-base font-black rounded-2xl shadow-xl shadow-primary/20 flex items-center justify-center gap-3 group text-white"
              >
                Schedule Free Walkthrough
                <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DemoModal;
