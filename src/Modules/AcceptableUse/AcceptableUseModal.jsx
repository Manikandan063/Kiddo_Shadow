import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { X, CheckCircle2, AlertTriangle, ShieldAlert, MessageSquare, Scale, Ban } from "lucide-react";

const AcceptableUseModal = ({ isOpen, setIsOpen }) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent hideClose className="w-[95%] sm:max-w-[1000px] bg-background text-foreground rounded-[2rem] md:rounded-[3.5rem] overflow-hidden p-0 shadow-3xl outline-none border border-foreground/10 max-h-[90vh] flex flex-col">
        
        {/* Header Overlay */}
        <div className="bg-foreground/[0.02] border-b border-foreground/5 p-8 md:p-12 relative shrink-0">
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] rounded-full translate-y-1/2 translate-x-1/2 pointer-events-none" />
          
          <DialogClose className="absolute right-8 top-8 z-50 p-3 rounded-2xl bg-foreground/5 hover:bg-foreground/10 border border-foreground/10 text-foreground/20 hover:text-foreground transition-all shadow-xl">
            <X size={20} />
          </DialogClose>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[9px] font-black uppercase tracking-[0.3em] mb-6">
              <ShieldAlert size={12} />
              Conduct Standards
            </div>
            
            <DialogHeader>
              <DialogTitle className="text-3xl md:text-5xl font-black text-foreground tracking-tight mb-4">
                Acceptable <span className="text-primary italic">Use Policy</span>
              </DialogTitle>
              <DialogDescription className="text-foreground/40 text-sm md:text-lg font-medium">
                Last Updated: Feb 9, 2026 • Governing conduct and moderation within Kiddo Shadow.
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
                <Ban size={20} />
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
                  <div key={i} className="flex gap-4 p-4 rounded-2xl bg-foreground/[0.02] border border-foreground/5">
                    <AlertTriangle size={16} className="text-primary shrink-0 mt-1" />
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
              <p className="text-foreground/60 leading-relaxed mb-4 font-bold text-primary/80">
                AI modules are designed for academic support only.
              </p>
              <ul className="list-disc list-inside text-foreground/60 space-y-3 pl-4 leading-relaxed">
                <li>Users should not request, input, or discuss personal information unrelated to education.</li>
                <li>Discriminatory, illegal, or unethical topics are strictly prohibited.</li>
                <li>All AI interactions are logged and monitored for safety compliance.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <CheckCircle2 size={20} />
                <h3 className="text-xl font-black uppercase tracking-widest">3. Moderation Framework</h3>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Keyword Scanning", desc: "Automatic scanning for inappropriate content." },
                  { label: "Human Review", desc: "Flagged conversations are reviewed by human moderators." },
                  { label: "School Escalation", desc: "Serious violations are reported to school admins." }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-5 rounded-2xl bg-foreground/[0.02] border border-foreground/5">
                    <div>
                      <p className="text-foreground font-bold">{item.label}</p>
                      <p className="text-foreground/40 text-xs">{item.desc}</p>
                    </div>
                    <CheckCircle2 size={18} className="text-primary" />
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
                Schools may report misuse through the **“Report Abuse”** feature. Violations may result in warnings, suspension, or permanent termination of access. Users are solely responsible for the content they post or generate.
              </p>
            </section>

            {/* Footer Contact */}
            <div className="pt-12 border-t border-foreground/5 text-center">
              <p className="text-foreground/30 text-xs font-bold uppercase tracking-[0.3em] mb-4">Contact Compliance Department</p>
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

export default AcceptableUseModal;
