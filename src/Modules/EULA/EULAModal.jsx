import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { X, FileText, Award, Ban, RefreshCcw, Scale, ShieldCheck, HardDrive } from "lucide-react";

const EULAModal = ({ isOpen, setIsOpen }) => {
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
              <Award size={12} />
              Software Licensing
            </div>
            
            <DialogHeader>
              <DialogTitle className="text-3xl md:text-5xl font-black text-foreground tracking-tight mb-4">
                End-User License <span className="text-primary italic">Agreement (EULA)</span>
              </DialogTitle>
              <DialogDescription className="text-foreground/40 text-sm md:text-lg font-medium">
                Last Updated: Feb 9, 2026 • Defining your legal usage of the Kiddo Shadow software.
              </DialogDescription>
            </DialogHeader>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-8 md:p-16 space-y-12 custom-scrollbar">
          
          {/* Introduction */}
          <div className="prose prose-invert max-w-none">
            <p className="text-foreground/60 leading-relaxed text-lg italic">
              This EULA is a legal agreement between Xtown Technologies Pvt. Ltd. (“Licensor”) and the end-user (“User”) for use of the Kiddo Shadow application and related software.
            </p>
          </div>

          {/* Sections */}
          <div className="grid grid-cols-1 gap-12">
            
            <section className="space-y-6">
              <div className="flex items-center gap-3 text-primary">
                <ShieldCheck size={20} />
                <h3 className="text-xl font-black uppercase tracking-widest">1. License Grant</h3>
              </div>
              <p className="text-foreground/60 leading-relaxed p-6 rounded-3xl bg-foreground/[0.02] border border-foreground/5">
                The Licensor grants the User a limited, non-exclusive, non-transferable license to use the software for educational and administrative purposes only.
              </p>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <Ban size={20} />
                <h3 className="text-xl font-black uppercase tracking-widest">2. Restrictions</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Copy, modify, or reverse-engineer the software.",
                  "Resell, sublicense, or distribute to third parties.",
                  "Use for any unlawful or non-academic purpose.",
                  "Attempt to bypass institutional access controls."
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-2xl bg-foreground/[0.01] border border-foreground/5">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-1.5 shrink-0" />
                    <span className="text-foreground/50 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <Award size={20} />
                <h3 className="text-xl font-black uppercase tracking-widest">3. Ownership</h3>
              </div>
              <p className="text-foreground/60 leading-relaxed">
                All intellectual property rights, source code, designs, algorithms, and branding remain the sole property of **Xtown Technologies Pvt. Ltd.**
              </p>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <RefreshCcw size={20} />
                <h3 className="text-xl font-black uppercase tracking-widest">4. Updates & Maintenance</h3>
              </div>
              <p className="text-foreground/60 leading-relaxed">
                Periodic updates may be provided automatically to ensure system stability and introduce new features. Continued use of the application constitutes acceptance of updated terms.
              </p>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <HardDrive size={20} />
                <h3 className="text-xl font-black uppercase tracking-widest">5. Liability & Termination</h3>
              </div>
              <p className="text-foreground/60 leading-relaxed">
                Xtown is not liable for data loss resulting from user negligence or unauthorized modifications. This license is valid as long as the user has authorized access from their school or institution.
              </p>
            </section>

            {/* Footer Contact */}
            <div className="pt-12 border-t border-foreground/5 text-center">
              <p className="text-foreground/30 text-xs font-bold uppercase tracking-[0.3em] mb-4">Legal Support</p>
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

export default EULAModal;
