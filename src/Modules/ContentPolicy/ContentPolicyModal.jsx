import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { X, ShieldCheck, AlertCircle, MessageSquare, Scale, Database, Search } from "lucide-react";

const ContentPolicyModal = ({ isOpen, setIsOpen }) => {
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
              <ShieldCheck size={12} />
              Safety & Moderation
            </div>
            
            <DialogHeader>
              <DialogTitle className="text-3xl md:text-5xl font-black text-foreground tracking-tight mb-4">
                Content <span className="text-primary italic">Policy</span>
              </DialogTitle>
              <DialogDescription className="text-foreground/40 text-sm md:text-lg font-medium">
                Last Updated: Feb 9, 2026 • Governing AI chat and digital communication.
              </DialogDescription>
            </DialogHeader>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-8 md:p-16 space-y-12 custom-scrollbar">
          
          {/* Introduction */}
          <div className="prose prose-invert max-w-none">
            <p className="text-foreground/60 leading-relaxed text-lg italic">
              This Policy outlines acceptable use of the Kiddo Shadow platform, including AI-assisted chat, communication tools, and content-sharing features.
            </p>
          </div>

          {/* Sections */}
          <div className="grid grid-cols-1 gap-12">
            
            <section className="space-y-6">
              <div className="flex items-center gap-3 text-primary">
                <AlertCircle size={20} />
                <h3 className="text-xl font-black uppercase tracking-widest">1. Prohibited Activities</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Upload or transmit offensive, abusive, or obscene material.",
                  "Use for political, religious, or non-academic messaging.",
                  "Share copyrighted materials without authorization.",
                  "Interfere with or disrupt the platform’s operations.",
                  "Attempt to bypass security or AI moderation controls."
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-foreground/[0.02] border border-foreground/5 flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-1.5 shrink-0" />
                    <span className="text-foreground/60 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <MessageSquare size={20} />
                <h3 className="text-xl font-black uppercase tracking-widest">2. AI Interaction Policy</h3>
              </div>
              <p className="text-foreground/60 leading-relaxed">
                AI modules are designed for academic support. Users should not request, input, or discuss personal or sensitive information unrelated to education, or discriminatory/unethical topics. All AI interactions are logged and monitored.
              </p>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <Search size={20} />
                <h3 className="text-xl font-black uppercase tracking-widest">3. Moderation Framework</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { label: "Auto Scanning", desc: "Keyword-based inappropriate content detection." },
                  { label: "Human Review", desc: "Manual review of flagged conversations." },
                  { label: "Institutional Escalation", desc: "Reported to school administrators if necessary." }
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-3xl bg-foreground/[0.02] border border-foreground/5 text-center">
                    <p className="text-foreground font-bold mb-2">{item.label}</p>
                    <p className="text-foreground/30 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <Scale size={20} />
                <h3 className="text-xl font-black uppercase tracking-widest">4. Reporting & Enforcement</h3>
              </div>
              <p className="text-foreground/60 leading-relaxed">
                Schools or administrators may report misuse through the **“Report Abuse”** feature. Violations may result in warnings, suspension, or permanent termination of access. Xtown technologies reserves the right to remove any violating content.
              </p>
            </section>

            {/* Footer Contact */}
            <div className="pt-12 border-t border-foreground/5 text-center">
              <p className="text-foreground/30 text-xs font-bold uppercase tracking-[0.3em] mb-4">Contact Moderation Department</p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <a href="mailto:compliance@kiddoshadow.in" className="text-primary font-bold hover:underline">compliance@kiddoshadow.in</a>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContentPolicyModal;
