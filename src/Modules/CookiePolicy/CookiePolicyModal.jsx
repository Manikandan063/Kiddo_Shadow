import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { X, Cookie, ShieldCheck, BarChart, Settings, MousePointerClick, Zap, Globe } from "lucide-react";

const CookiePolicyModal = ({ isOpen, setIsOpen }) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent hideClose className="w-[95%] sm:max-w-[1000px] bg-background text-foreground rounded-[2rem] md:rounded-[3.5rem] overflow-hidden p-0 shadow-3xl outline-none border border-foreground/10 max-h-[90vh] flex flex-col">
        
        {/* Header Overlay */}
        <div className="bg-foreground/[0.02] border-b border-foreground/5 p-8 md:p-12 relative shrink-0">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          
          <DialogClose className="absolute right-8 top-8 z-50 p-3 rounded-2xl bg-foreground/5 hover:bg-foreground/10 border border-foreground/10 text-foreground/20 hover:text-foreground transition-all shadow-xl">
            <X size={20} />
          </DialogClose>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[9px] font-black uppercase tracking-[0.3em] mb-6">
              <Cookie size={12} />
              Session & Analytics
            </div>
            
            <DialogHeader>
              <DialogTitle className="text-3xl md:text-5xl font-black text-foreground tracking-tight mb-4">
                Cookie <span className="text-primary italic">Policy</span>
              </DialogTitle>
              <DialogDescription className="text-foreground/40 text-sm md:text-lg font-medium">
                Last Updated: Feb 9, 2026 • Enhancing performance and security via intelligent tracking.
              </DialogDescription>
            </DialogHeader>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-8 md:p-16 space-y-12 custom-scrollbar">
          
          {/* Introduction */}
          <div className="prose prose-invert max-w-none">
            <p className="text-foreground/60 leading-relaxed text-lg italic">
              Xtown Technologies uses cookies, tracking pixels, and similar technologies to enhance user experience, analyze performance, and ensure platform security.
            </p>
          </div>

          {/* Sections */}
          <div className="grid grid-cols-1 gap-12">
            
            <section className="space-y-6">
              <div className="flex items-center gap-3 text-primary">
                <Settings size={20} />
                <h3 className="text-xl font-black uppercase tracking-widest">1. Types of Cookies Used</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: ShieldCheck, label: "Strictly Necessary", desc: "Required for login sessions, security, and core app functionality." },
                  { icon: BarChart, label: "Performance Cookies", desc: "Measure usage analytics to optimize platform speed and navigation." },
                  { icon: Zap, label: "Functional Cookies", desc: "Remember preferences like language, class-level, or interface theme." },
                  { icon: MousePointerClick, label: "Targeting Cookies", desc: "Used for promotional campaigns only with your explicit consent." }
                ].map((item, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-foreground/[0.02] border border-foreground/5 flex items-start gap-4">
                    <item.icon size={18} className="text-primary shrink-0 mt-1" />
                    <div>
                      <span className="text-foreground font-bold block mb-1">{item.label}</span>
                      <span className="text-foreground/40 text-xs leading-relaxed">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <Globe size={20} />
                <h3 className="text-xl font-black uppercase tracking-widest">2. Third-Party Cookies</h3>
              </div>
              <p className="text-foreground/60 leading-relaxed mb-4">
                We may use industry-standard tools to collect anonymized data for traffic and usage statistics:
              </p>
              <div className="flex flex-wrap gap-4">
                {["Google Analytics", "Firebase Analytics", "Microsoft Clarity"].map((tool) => (
                  <div key={tool} className="px-6 py-2 rounded-full bg-foreground/5 border border-foreground/10 text-xs font-bold text-foreground/60">
                    {tool}
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <Settings size={20} />
                <h3 className="text-xl font-black uppercase tracking-widest">3. Managing Cookies</h3>
              </div>
              <p className="text-foreground/60 leading-relaxed">
                Users can modify browser settings to block cookies; however, please note that this may restrict certain functionalities (such as maintaining active login sessions).
              </p>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <ShieldCheck size={20} />
                <h3 className="text-xl font-black uppercase tracking-widest">4. Consent</h3>
              </div>
              <p className="text-foreground/60 leading-relaxed">
                By continuing to use the Kiddo Shadow platform, you consent to our use of cookies as described in this Policy.
              </p>
            </section>

            {/* Footer Contact */}
            <div className="pt-12 border-t border-foreground/5 text-center">
              <p className="text-foreground/30 text-xs font-bold uppercase tracking-[0.3em] mb-4">Legal Compliance</p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <a href="mailto:info@xtown.in" className="text-primary font-bold hover:underline">info@xtown.in</a>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CookiePolicyModal;
