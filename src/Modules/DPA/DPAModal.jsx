import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { X, FileCode, Shield, Server, Users, Trash2, Scale, AlertCircle } from "lucide-react";

const DPAModal = ({ isOpen, setIsOpen }) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent hideClose className="w-[95%] sm:max-w-[1000px] bg-background text-foreground rounded-[2rem] md:rounded-[3.5rem] overflow-hidden p-0 shadow-3xl outline-none border border-foreground/10 dark:border-white/10 max-h-[90vh] flex flex-col">
        
        {/* Header Overlay */}
        <div className="bg-foreground/[0.02] border-b border-foreground/5 p-8 md:p-12 relative shrink-0">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          
          <DialogClose className="absolute right-8 top-8 z-50 p-3 rounded-2xl bg-foreground/5 hover:bg-foreground/10 border border-foreground/10 text-foreground/40 dark:text-foreground/20 hover:text-foreground transition-all shadow-xl">
            <X size={20} />
          </DialogClose>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[9px] font-black uppercase tracking-[0.3em] mb-6">
              <FileCode size={12} />
              Processing Framework
            </div>
            
            <DialogHeader>
              <DialogTitle className="text-3xl md:text-5xl font-black text-foreground tracking-tight mb-4">
                Data Processing <span className="text-primary italic">Addendum (DPA)</span>
              </DialogTitle>
              <DialogDescription className="text-foreground/60 dark:text-foreground/40 text-sm md:text-lg font-medium">
                Last Updated: Feb 9, 2026 • Governing AI & student data handling standards.
              </DialogDescription>
            </DialogHeader>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-8 md:p-16 space-y-12 custom-scrollbar">
          
          {/* Introduction */}
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-foreground/60 leading-relaxed text-lg italic">
              This Data Processing Addendum (“DPA”) forms an integral part of the service agreement between Xtown Technologies Pvt. Ltd. (“Processor”) and the subscribing School/Institution (“Controller”).
            </p>
          </div>

          {/* Sections */}
          <div className="grid grid-cols-1 gap-12">
            
            <section className="space-y-6">
              <div className="flex items-center gap-3 text-primary">
                <Users size={20} />
                <h3 className="text-xl font-black uppercase tracking-widest">1. Definitions & Scope</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { label: "Controller", desc: "The school/institution that determines the purpose of processing." },
                  { label: "Processor", desc: "Xtown Technologies Pvt. Ltd., processing data on behalf of Controller." },
                  { label: "Data Subject", desc: "Individual student, teacher, or staff members." },
                  { label: "Processing", desc: "Collection, storage, modification, or deletion of data." }
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-3xl bg-foreground/[0.02] border border-foreground/5">
                    <span className="text-primary font-bold block mb-2">{item.label}</span>
                    <span className="text-foreground/60 dark:text-foreground/40 text-sm leading-relaxed">{item.desc}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <Shield size={20} />
                <h3 className="text-xl font-black uppercase tracking-widest">2. Security Measures</h3>
              </div>
              <div className="space-y-4">
                <p className="text-foreground/60 leading-relaxed">
                  Xtown ensures institutional-grade security for all educational data:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "End-to-end encryption (AES-256 / TLS 1.3)",
                    "Role-based user access control",
                    "Audit logs for all access events",
                    "Regular vulnerability assessments"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-foreground/[0.02] border border-foreground/5">
                      <Shield size={14} className="text-primary" />
                      <span className="text-foreground/60 text-xs font-bold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <AlertCircle size={20} />
                <h3 className="text-xl font-black uppercase tracking-widest">3. Breach Notification</h3>
              </div>
              <p className="text-foreground/60 leading-relaxed">
                Xtown shall notify the Controller within **48 hours** of any confirmed data breach, providing comprehensive details of the scope, impact, and immediate remedial measures taken.
              </p>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <Trash2 size={20} />
                <h3 className="text-xl font-black uppercase tracking-widest">4. Retention & Deletion</h3>
              </div>
              <p className="text-foreground/60 leading-relaxed">
                All student and institutional data shall be permanently deleted or anonymized within **90 days** after service termination, unless legally required to retain longer for compliance purposes.
              </p>
            </section>

            {/* Footer Contact */}
            <div className="pt-12 border-t border-foreground/5 text-center">
              <p className="text-foreground/50 dark:text-foreground/30 text-xs font-bold uppercase tracking-[0.3em] mb-4">Legal & Compliance</p>
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

export default DPAModal;
