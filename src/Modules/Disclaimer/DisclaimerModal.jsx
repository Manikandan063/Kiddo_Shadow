import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { X, Scale, AlertTriangle, MessageSquare, ShieldAlert, Globe, Info } from "lucide-react";

const DisclaimerModal = ({ isOpen, setIsOpen }) => {
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
              <ShieldAlert size={12} />
              Legal Provisions
            </div>
            
            <DialogHeader>
              <DialogTitle className="text-3xl md:text-5xl font-black text-foreground tracking-tight mb-4">
                Legal <span className="text-primary italic">Disclaimer</span>
              </DialogTitle>
              <DialogDescription className="text-foreground/40 text-sm md:text-lg font-medium">
                Last Updated: Feb 9, 2026 • Governing liability and service warranties for Kiddo Shadow.
              </DialogDescription>
            </DialogHeader>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-8 md:p-16 space-y-12 custom-scrollbar">
          
          {/* Introduction */}
          <div className="prose prose-invert max-w-none">
            <p className="text-foreground/60 leading-relaxed text-lg italic">
              Kiddo Shadow, developed by Xtown technologies Pvt. Ltd., provides educational management and learning support solutions.
            </p>
          </div>

          {/* Sections */}
          <div className="grid grid-cols-1 gap-12">
            
            <section className="space-y-6">
              <div className="flex items-center gap-3 text-primary">
                <AlertTriangle size={20} />
                <h3 className="text-xl font-black uppercase tracking-widest">1. No Warranties</h3>
              </div>
              <p className="text-foreground/60 leading-relaxed p-6 rounded-3xl bg-foreground/[0.02] border border-foreground/5 border-l-4 border-l-primary/50">
                All services are provided **“as is”** without warranties of accuracy, reliability, or fitness for a particular purpose. Xtown technologies makes no guarantees regarding uninterrupted access or specific learning outcomes.
              </p>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <MessageSquare size={20} />
                <h3 className="text-xl font-black uppercase tracking-widest">2. AI-Generated Content</h3>
              </div>
              <p className="text-foreground/60 leading-relaxed">
                AI-based responses are for academic assistance only and not a substitute for teacher guidance. Xtown technologies is not responsible for the interpretation or misuse of AI-generated information.
              </p>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <Scale size={20} />
                <h3 className="text-xl font-black uppercase tracking-widest">3. Limitation of Liability</h3>
              </div>
              <ul className="list-disc list-inside text-foreground/60 space-y-3 pl-4 leading-relaxed">
                <li>Xtown shall not be liable for indirect, incidental, or consequential losses including data loss or downtime.</li>
                <li>Total liability for any claim shall not exceed the total service fee paid in the preceding 12 months.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <Info size={20} />
                <h3 className="text-xl font-black uppercase tracking-widest">4. Force Majeure</h3>
              </div>
              <p className="text-foreground/60 leading-relaxed">
                Xtown shall not be held responsible for failure to perform obligations caused by events beyond its reasonable control (natural disasters, network failures, or government actions).
              </p>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <Globe size={20} />
                <h3 className="text-xl font-black uppercase tracking-widest">5. Jurisdiction</h3>
              </div>
              <p className="text-foreground/60 leading-relaxed">
                This agreement is governed by the laws of India. All disputes shall be subject to the exclusive jurisdiction of courts in **Tamil Nadu, India**.
              </p>
            </section>

            {/* Footer Contact */}
            <div className="pt-12 border-t border-foreground/5 text-center">
              <p className="text-foreground/30 text-xs font-bold uppercase tracking-[0.3em] mb-4">Legal Framework</p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <a href="mailto:legal@kiddoshadow.in" className="text-primary font-bold hover:underline">legal@kiddoshadow.in</a>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DisclaimerModal;
